---
layout: post
title: "기초 Python-(1)"
description: "ML을 위한 Python의 기초 문법을 간단히 다루어 보았습니다."
author: "qkrwhdah03"
last_written: "2020-01-03"
tag: "Machine Learning"
---


ML을 공부할 때 필요한 Python 의 기초 문법을 간단하게 다루어 보았습니다. <br>
이번 포스트에서는 산술 연산에서 글래스까지 정리했습니다. <br>
<br>
<br>

### 1) 산술 연산
{% highlight python roudge linenos %}

  1+1 # 더하기
  4-5 # 빼기  
  4*8 # 곱하기
  4/2 # 나누기
  4**2 # 4의 2제곱

{% endhighlight %}

### 2) 자료형
{% highlight python roudge linenos %}

  type(10) # int
  type(1.2) # float
  type('apple') # str(string)

{% endhighlight %}

### 3) 변수
{% highlight python roudge linenos %}

  x = 10 # 변수 x 선언
  print(x)
  y=3.14 # 변수 y 선언
  print(x*y)


{% endhighlight %}

### 4) 리스트
{% highlight python roudge linenos %}

  a = [1,2,3,4,5]
  print(a) # 리스트 출력
  print(str(len(a))+'개의 원소')
  a[0] # 첫 번째 원소에 접근
  a[2]=10 # 원소 대입
  a[0:2] # 0~1번째 원소 출력 2보다 작을때 까지!!
  a[1:] # 인덱스 1부터 끝까지
  a[:3] # 인덱스 0부터 2까지
  a[:-1] # 처음부터 마지막 원소 앞까지
  a[:-2] # 처음부터 마지막 원소 2개 앞까지

{% endhighlight %}

### 5) 딕셔너리
{% highlight python roudge linenos %}

  dic ={'height':180} # c++ STL의 map과 유사
  print(dic['height']) # 180
  dic['weight']=70 # key: 'weight' value: 70
  print(dic) # {'height': 180, 'weight': 70}

{% endhighlight %}

### 6) Bool 형
{% highlight python roudge linenos %}

  # Bool 형 -> True 와 False 값을 취급
  hungry = True
  sleepy = False
  type(hungry) # Bool
  not hungry # False
  not sleepy # True
  hungry and sleepy # False  
  hungry or sleepy # True

{% endhighlight %}

### 7) 조건문
{% highlight python roudge linenos %}

  if 조건1 :
    조건 1 만족시 실행 내용
  elif 조건2 :
    조건 2 만족시 실행 내용
  else :
    이외의 경우 실행 내용

{% endhighlight %}

### 8) 반복문
{% highlight python roudge linenos %}

  for i in [1,3,5]: #결과 1 3 5
    print(i, end=' ')

  for i in range(1,11): #결과 1 2 3 ... 10
    print(i, end=' ')

    i=0
    while i < 10 :  # 결과 0 1 2 ... 9
      print(i, end=' ')
      i+=1

{% endhighlight %}

### 9) 함수
{% highlight python roudge linenos %}

  def hello(): # 파라미터가 없음
    print('Hello World!')

  hello() # 함수 호출 결과 : Hello World!

  def hello(object): # 파라미터가 있음
    print("Hello "+object+"!")

  hello("Happy") # 함수 호출 결과 : Hello Happy!

{% endhighlight %}

### 10) 클래스(Class)
{% highlight python roudge linenos %}

class test:
  def __init__(self,name): # 생성자
      self.name=name
      print("초기화 됨")
  def fun1(self,):
      print(self.name+" is Man !")
  def fun2(self,):
      print("yes")

{% endhighlight %}

<br><br><br>
<i>내용은 "밑바닥부터 시작하는 딥러닝" 책을 참고했음을 밝힙니다. </i>
