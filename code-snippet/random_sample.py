import random
import tkinter as tk

# 전화번호 추첨 함수
def draw_phone_numbers():
    # 애니메이션 시작
    result_label.configure(text="추첨 중...")
    window.update()

    # 애니메이션 반복 횟수
    animation_repeat = 3

    # 애니메이션 재생
    animation_text = "추첨 중..."
    for _ in range(animation_repeat):
        for _ in range(len(animation_text) - 2):
            result_label.configure(text=animation_text[:_+4])
            window.update()
            window.after(200)  # 0.2초 대기
    
    selected_numbers = []
    while len(selected_numbers) < 5:
        number = random.choice(phone_numbers)
        if number not in exclude_list and number not in selected_numbers:
            # 전화번호 가운데 4자리를 X로 대체
            modified_number = number[:5] + "XXX" + number[8:]
            selected_numbers.append(modified_number)
            result_label.configure(text="\n".join(selected_numbers))
            window.update()
            window.after(1000)  # 1초 대기
    
    # 애니메이션으로 "축하합니다!" 표시
    congrats_text = "축하합니다!"
    for i in range(len(congrats_text)):
        result_label.configure(text="\n".join(selected_numbers) + "\n\n" + congrats_text[:i+1])
        result_label.configure(justify="center", anchor="center")  # 가운데 정렬
        window.update()
        window.after(200)  # 0.2초 대기


# GUI 생성
window = tk.Tk()
window.title("전화번호 추첨")
window.geometry("300x250")

# 추첨 버튼
draw_button = tk.Button(window, text="추첨하기", command=draw_phone_numbers)
draw_button.pack(pady=20)

# 추첨 결과 표시 레이블
result_label = tk.Label(window, text="", wraplength=250, justify="left")
result_label.pack()

# 전화번호 및 배제 리스트
phone_numbers = [
    '''
    추첨리스트
    '''
]

exclude_list = [
    '''
    배제리스트
    '''
]

# GUI 실행
window.mainloop()
