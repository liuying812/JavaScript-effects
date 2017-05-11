1.使用 window.location.search ，在一个页面触发另外一个页面的某个事件

2.应用场景：三个select ,s1变则s2变，s2变则s3变，要想s1变引起s3变：在s1的change事件中加s2.trigger("change");