
 wow.js - ��ҳ���������Ȥ
 
 ��飺�е�ҳ�������¹�����ʱ����ЩԪ�ػ����ϸС�Ķ���Ч����
       WOW.js ���� animate.css��������֧�� animate.css ��� 60 ���ֵĶ���Ч����
	   
 ʹ�÷�����
 1.�����ļ�  <link rel="stylesheet" href="css/animate.min.css"> 
 2.html      <div class="wow slideInLeft"></div>
			 <div class="wow slideInRight"></div>
			 ���Լ��� data-wow-duration����������ʱ�䣩�� data-wow-delay�������ӳ�ʱ�䣩���ԣ��磺
			 <div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"></div>
			 <div class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10"></div>
 3.JavaScript  new WOW().init();
			   �����Ҫ�Զ������ã�������ʹ�ã�

				var wow = new WOW({
					boxClass: 'wow',
					animateClass: 'animated',
					offset: 0,
					mobile: true,
					live: true
				});
				wow.init();
				
		����	����/����	     ����	   Ĭ��ֵ	         ˵��
				boxClass	    �ַ���	   ��wow��	    ��Ҫִ�ж�����Ԫ�ص� class
				animateClass	�ַ���	   ��animated��	animation.css ������ class
				offset      	����	    0	        �������������ٿ�ʼִ�ж���
				mobile	        ����ֵ	    true	    �Ƿ����ƶ��豸��ִ�ж���
				live	        ����ֵ	    true	    �첽���ص������Ƿ���Ч
				  