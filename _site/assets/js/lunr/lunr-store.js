var store = [{
        "title": "Falcon-Answer",
        "excerpt":"Falcon_Answer is a 300-seats class airliner designed for future commercial flight; it is a beautiful coupling of Blended Wing Body (BWB) and Distributed Propulsion System (DPS). It is ranked 3rd in First Dassult Aero-Design Future Aerospace creation competition (2018) among more than 200 teams from China. News link The designers...","categories": [],
        "tags": [],
        "url": "/aerospace/falcon-answer/",
        "teaser": null
      },{
        "title": "UMEX, Abu Dhubi UAV/UAS Exhibition 2022",
        "excerpt":"Abstract  This is a share of UMEX2022, Abu Dhubi UAV/UAS Exhibition, hereby, I would like to share some interesting exhibits, if you like military, you will find some fun.  UMEX2022               ","categories": [],
        "tags": [],
        "url": "/aerospace/UMEX2022/",
        "teaser": null
      },{
        "title": "CAM Introduction (Chinese)",
        "excerpt":"1. 为什么CAM CAM 全称为Classification Activation Map，分类激活图， 是一种比较老（发源于2017年）的神经网络学习可视方法，一般也被认为是对神经网络进行解释的工具。当然，做为一个实用主义的人，这一堆不说人话的东西下来有点懵，咱就简单粗暴一点。某君训练了一个牛逼的神经网络，分类任务什么的准的不得了，那这时候问题就来了。 What the hell your model learned? 当然这问题会把也问懵，因为大部分人都想着黑猫白猫，逮着老鼠就是好猫，你管我怎么逮呢？可是有时候，我不知道你是怎么逮的，我怎么敢让你逮呢？ 踩着花花草草不要紧，万一你是蒙的，万一你是连房子一起拆了就不好了吧？ 所以，这种时候就需要一个东西告诉我们你的神经网络到底学了什么。那就是CAM。 这篇小文章主要讲两种最早的技术，CAM 和grad-CAM, 有需要的话，请上幼儿园大班，这不是我们小班教的东西。CAM 和grad-CAM 都是基于梯度的方法，当然也有不基于梯度的方法，详情请Google。 2. 技术简介 首先，容我先限定一下，而我所讲的内容目前仅谈论基于卷积神经网络（CNN）进行特征提取的模型，transformer什么的也已经超纲了。 2.1 基本思路 如果熟悉CNN的话，我们知道CNN的本质是提取特征，而且是从局部到全局的提取，hierarchically，（感觉这一个单词省了好多文字）。这时候不得不放一张经典的图了。 CNN 学习的特征可视化[1] 可以看到，从底层到顶层，CNN学的就是从边边角角到具体化的凝结物，比如车轮什么的，当然还有一些好像神秘学的符号。 那么，我们的想法就是这些特征的某种联系决定了我们分类的结果。为了方便起见，我们将这种联系近似为线性加权, 但是特征图是高维的，预测的种类是一个标量，中间需要一个函数的转换，因此我们将这种关系表征如下。 \\[y_{pre} =f \\big(a_{1}f_{1}+a_{2}f_{2}+ \\ldots \\ldots +a_{n}f_{n}\\big) =f \\big( \\sum_i^n a_{i}f_{i} \\big)\\] 其中，y_pre 是指预测出的归属种类的值，直白一点，就是你在多个种类的分类中给出的最大概率了。a是权重系数，F 是特征图，下标n是特征图的排序，比如你最后一层生成了512个特征图，那n就是512。f 是张量转标量过程中的函数过程。 机智的你一定想到了接下来的公式。 \\[y=g\\left(image\\right)=f\\left(\\sum_i^n a_{i}f_{i}\\right)\\]...","categories": ["Blog"],
        "tags": ["Deep Learning"],
        "url": "/ML/CAM/",
        "teaser": null
      },{
        "title": "上央视啦！陪阿布扎比度过宅家岁月",
        "excerpt":"简介  2020年4月疫情在阿联酋开始肆虐，央视征求我们当地学生的vlog视频来展现留学生们的抗疫生活。 我有幸作为哈利法大学的代表提交了稿件，这也是我第一次上央视，哈哈哈。                     当时的报道链接  陪阿布扎比度过宅家岁月               ","categories": ["Video"],
        "tags": ["life","Report"],
        "url": "/Life/cctv-report/",
        "teaser": null
      },{
        "title": "Memory in Georgia",
        "excerpt":"Abstract I have enjoyed my new year of 2022 in Georgia (the country), in where, we drink, skii, wander. It is an amazing place, I really love the people and the scene there, and am looking forward to visiting again. Here is a random combination of my images, used to...","categories": ["Video"],
        "tags": ["Travel"],
        "url": "/Life/memory-in-georgia/",
        "teaser": null
      },{
        "title": "Falcon-Answer",
        "excerpt":"Falcon_Answer is a 300-seats class airliner designed for future commercial flight; it is a beautiful coupling of Blended Wing Body (BWB) and Distributed Propulsion System (DPS). It is ranked 3rd in First Dassult Aero-Design Future Aerospace creation competition (2018) among more than 200 teams from China. News link The designers...","categories": [],
        "tags": [],
        "url": "/aerospace/falcon-answer/",
        "teaser": null
      },{
        "title": "CAM Introduction (Chinese)",
        "excerpt":"1. 为什么CAM CAM 全称为Classification Activation Map，分类激活图， 是一种比较老（发源于2017年）的神经网络学习可视方法，一般也被认为是对神经网络进行解释的工具。当然，做为一个实用主义的人，这一堆不说人话的东西下来有点懵，咱就简单粗暴一点。某君训练了一个牛逼的神经网络，分类任务什么的准的不得了，那这时候问题就来了。 What the hell your model learned? 当然这问题会把也问懵，因为大部分人都想着黑猫白猫，逮着老鼠就是好猫，你管我怎么逮呢？可是有时候，我不知道你是怎么逮的，我怎么敢让你逮呢？ 踩着花花草草不要紧，万一你是蒙的，万一你是连房子一起拆了就不好了吧？ 所以，这种时候就需要一个东西告诉我们你的神经网络到底学了什么。那就是CAM。 这篇小文章主要讲两种最早的技术，CAM 和grad-CAM, 有需要的话，请上幼儿园大班，这不是我们小班教的东西。CAM 和grad-CAM 都是基于梯度的方法，当然也有不基于梯度的方法，详情请Google。 2. 技术简介 首先，容我先限定一下，而我所讲的内容目前仅谈论基于卷积神经网络（CNN）进行特征提取的模型，transformer什么的也已经超纲了。 2.1 基本思路 如果熟悉CNN的话，我们知道CNN的本质是提取特征，而且是从局部到全局的提取，hierarchically，（感觉这一个单词省了好多文字）。这时候不得不放一张经典的图了。 CNN 学习的特征可视化[1] 可以看到，从底层到顶层，CNN学的就是从边边角角到具体化的凝结物，比如车轮什么的，当然还有一些好像神秘学的符号。 那么，我们的想法就是这些特征的某种联系决定了我们分类的结果。为了方便起见，我们将这种联系近似为线性加权, 但是特征图是高维的，预测的种类是一个标量，中间需要一个函数的转换，因此我们将这种关系表征如下。 \\[y_{pre} =f \\big(a_{1}f_{1}+a_{2}f_{2}+ \\ldots \\ldots +a_{n}f_{n}\\big) =f \\big( \\sum_i^n a_{i}f_{i} \\big)\\] 其中，y_pre 是指预测出的归属种类的值，直白一点，就是你在多个种类的分类中给出的最大概率了。a是权重系数，F 是特征图，下标n是特征图的排序，比如你最后一层生成了512个特征图，那n就是512。f 是张量转标量过程中的函数过程。 机智的你一定想到了接下来的公式。 \\[y=g\\left(image\\right)=f\\left(\\sum_i^n a_{i}f_{i}\\right)\\]...","categories": ["Blog"],
        "tags": ["Deep Learning"],
        "url": "/ML/CAM/",
        "teaser": null
      },{
        "title": "上央视啦！陪阿布扎比度过宅家岁月",
        "excerpt":"简介  2020年4月疫情在阿联酋开始肆虐，央视征求我们当地学生的vlog视频来展现留学生们的抗疫生活。 我有幸作为哈利法大学的代表提交了稿件，这也是我第一次上央视，哈哈哈。                     当时的报道链接  陪阿布扎比度过宅家岁月               ","categories": ["Video"],
        "tags": ["life","Report"],
        "url": "/Life/cctv-report/",
        "teaser": null
      },{
        "title": "Memory in Georgia",
        "excerpt":"Abstract I have enjoyed my new year of 2022 in Georgia (the country), in where, we drink, skii, wander. It is an amazing place, I really love the people and the scene there, and am looking forward to visiting again. Here is a random combination of my images, used to...","categories": ["Video"],
        "tags": ["Travel"],
        "url": "/Life/memory-in-georgia/",
        "teaser": null
      },{
        "title": "UMEX, Abu Dhubi UAV/UAS Exhibition 2022",
        "excerpt":"Abstract  This is a share of UMEX2022, Abu Dhubi UAV/UAS Exhibition, hereby, I would like to share some interesting exhibits, if you like military, you will find some fun.  UMEX2022               ","categories": [],
        "tags": [],
        "url": "/aerospace/UMEX2022/",
        "teaser": null
      }]
