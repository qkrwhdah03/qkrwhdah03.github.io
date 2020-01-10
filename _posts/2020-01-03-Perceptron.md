---
layout: post
title: "퍼셉트론(Perceptron)"
description: "퍼셉트론의 기초 개념과 And, Nand, Or 게이트를 구현해 보고 그 한계까지에 대해 정리해보았습니다."
author: "qkrwhdah03"
last_written: "2020-01-03"
tag: "Machine Learning"
---

### 1) 퍼셉트론이란?
퍼셉트론은 프랑크 로제블라트가 1975년 고안한 알고리즘으로 오늘날의 신경망의 기원이 되는 알고리즘 입니다.
퍼셉트론은 다음의 그림과 같이 여러개의 신호르 입력을 받아 하나의 신호를 출력하는 구조를 가지고 있습니다.
<br>
![퍼셉트론 구조](/imgae/){: width: "70%" height: "70%"}
<br>
여기서 신호라는 것은 전류와 같이 흐르는 것으로 생각하면 되는데, 신호가 있으면 1이고 없다면 0으로 정의하도록 합시다.

그림에서 원을 노드나 뉴런이라고 부르는데, 입력 신호가 뉴런에 보내지면서 특정한 가중치가 곱해지고 각각의 값들이
더해지게됩니다. 이 더해진 값이 특정 값이 정해진 특정 값을 넘어갈때 출력 신호가 1이고, 아닌 경우 0이 되게 됩니다.
이 한계를 임계값이라고 하며, 기호 Thetha로 나타내게 됩니다.

이를 수식으로 나타내게되면 다음과 같습니다. <br>
![퍼셉트론 수식](/image/){: width: "90%" height: "90%"}

이것이 퍼셉트론의 동작 원리입니다. 이제는 이 퍼셉트론을 이용하여 And, Nand, Or 게이트를 구현해봅시다.

### 2) And, Nand, Or 게이트 구현 하기

이 퍼셉트론을 이용하면 우리가 비트 연산자라고 이해하고 있는 And, Nand, Or 게이트를 구현할 수 있습니다.
각각의 노드의 입력으로 0과 1이 가능하다고할 때, 적당한 가중치의 값들을 설정해줌에 따라 위 게이트들의 기능을 할 수 있는 것이죠.
구현해보면 다음과 같습니다.
<br>
참고로 Nand 게이트는 Not And로 0이 적어도 하나 존재할 때, 1이됩니다. 즉, 1과 1이 만나는 경우 0이되는 것이죠. <br>
#### - And
{% highlight python roudge linenos %}
  def AND(x1, x2):
    w1, w2, thetha=0.5, 0.5, 0.7
    tmp=w1*x1 + w2*x2
    if tmp<=thetha:
        return 0
    else :
        return 1

  # 실행 결과   
  AND(0,1) # 0
  AND(0,0) # 0
  AND(1,1) # 1
{% endhighlight %}
#### - Nand
{% highlight python roudge linenos %}
  def NAND(x1, x2):
    w1, w2, thetha=-0.5, -0.5, -0.7
    tmp=w1*x1 + w2*x2
    if tmp<=thetha:
        return 0
    else :
        return 1

  # 실행 결과   
  NAND(0,1) # 1
  NAND(0,0) # 1
  NAND(1,1) # 0
{% endhighlight %}

#### - Or
{% highlight python roudge linenos %}
  def OR(x1, x2):
      w1,w2,thetha=0.6, 0.6, 0.5
      tmp=w1*x1 + w2*x2
      if tmp<=thetha :
          return 0
      else :
          return 1

  #실행 결과
  OR(1,1) # 1
  OR(0,1) # 1
  OR(0,0) # 0
{% endhighlight %}


### 3) 가중치 편향(Bias)의 도입

1)에서 설명하였듯이 퍼셉트론은 다음의 수식을 사용한다. <br>
![퍼셉트론 수식](/image/){: width: "90%" height: "90%"}
이 수식을 조금만 변형 시키면 다음과 같이 바꿀 수 있습니다.<br>
![가중치 편향 수식](/image/){: width: "90%" height: "90%"}
즉, thetha를 -b로 치환하여 나타낸 것을 알 수 있습니다. 여기서, b의 값을
편향(Bias)라고 부르는 것 입니다.
<br><br>
이제, 가중치 편향을 도입한 And, Nand, Or 게이트를 구현하면 다음과 같습니다.

#### - And
{% highlight python roudge linenos %}
  def AND(x1,x2):
  x=np.array([x1,x2])
  w=np.array([0.5,0.5])
  b=-0.7
  tmp=np.sum(w*x)+b
  if tmp<=0:
      return 0
  else:
      return 1
{% endhighlight %}
#### - Nand
{% highlight python roudge linenos %}
  def NAND(x1,x2):
  x=np.array([x1,x2])
  w=np.array([-0.5,-0.5])
  b=0.7
  tmp=np.sum(w*x)+b
  if tmp<=0:
      return 0
  else :
      return 1
{% endhighlight %}

#### - Or
{% highlight python roudge linenos %}
  def OR(x1,x2):
  x=np.array([x1,x2])
  w=np.array([0.6,0.6])
  b=-0.5
  tmp=np.sum(w*x)+b
  if tmp<=0:
      return 0
  else :
{% endhighlight %}


<i>내용은 "밑바닥부터 시작하는 딥러닝" 책을 참고했음을 밝힙니다. </i>
