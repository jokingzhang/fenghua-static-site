// ==================== 数据定义 ====================

// 案例分类数据
const categoryData = [
  { name: "全部", type: "0" },
  { name: "原画作品", type: "1", children: [
    { name: "角色原画", type: "1-1" },
    { name: "场景原画", type: "1-2" }
  ]},
  { name: "模型作品", type: "2", children: [
    { name: "角色模型", type: "2-1" },
    { name: "场景模型", type: "2-2" },
    { name: "三渲二", type: "2-3" }
  ]},
  { name: "动画作品", type: "3", children: [
    { name: "角色动画", type: "3-1" },
    { name: "场景动画", type: "3-2" },
    { name: "动画镜头", type: "3-3" }
  ]},
  { name: "特效作品", type: "4", children: [
    { name: "Unity引擎", type: "4-1" },
    { name: "UE4引擎", type: "4-2" },
    { name: "自研引擎", type: "4-3" }
  ]},
  { name: "美宣作品", type: "5" }
];

// 案例列表数据
const caseListData = [
  { idx: 0, title: "角色模型_16", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_16.jpg" },
  { idx: 1, title: "角色模型_15", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_15.jpg" },
  { idx: 2, title: "角色模型_14", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_14.jpg" },
  { idx: 3, title: "角色模型_13", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_13.jpg" },
  { idx: 4, title: "角色模型_12", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_12.jpg" },
  { idx: 5, title: "角色模型11", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_11.png" },
  { idx: 6, title: "角色模型10", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_10.png" },
  { idx: 7, title: "角色模型09", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_09.png" },
  { idx: 8, title: "角色模型08", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_08.png" },
  { idx: 9, title: "角色模型07", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_07.png" },
  { idx: 10, title: "角色模型06", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_06.png" },
  { idx: 11, title: "角色模型05", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_05.png" },
  { idx: 12, title: "角色模型04", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_04.png" },
  { idx: 13, title: "角色模型03", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_03.png" },
  { idx: 14, title: "角色模型02", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_02.png" },
  { idx: 15, title: "角色模型01", mediaType: "image", type: "2-1", typeName: "角色模型", imgPath: "/assets/cases/case_2/character_model_01.png" },
  { idx: 16, title: "场景模型_12", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_12.jpg" },
  { idx: 17, title: "场景模型_11", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_11.jpg" },
  { idx: 18, title: "场景模型_10", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_10.jpg" },
  { idx: 19, title: "场景模型_09", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_09.jpg" },
  { idx: 20, title: "场景模型_08", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_08.jpg" },
  { idx: 21, title: "场景模型_07", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_07.jpg" },
  { idx: 22, title: "场景模型06", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_06.png" },
  { idx: 23, title: "场景模型05", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_05.png" },
  { idx: 24, title: "场景模型04", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_04.png" },
  { idx: 25, title: "场景模型03", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_03.png" },
  { idx: 26, title: "场景模型02", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_02.png" },
  { idx: 27, title: "场景模型01", mediaType: "image", type: "2-2", typeName: "场景模型", imgPath: "/assets/cases/case_2/scene_model_01.png" },
  { idx: 28, title: "三转二角色02", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_character_02.png" },
  { idx: 29, title: "三转二角色01", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_character_01.png" },
  { idx: 30, title: "三转二场景05", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_scene_05.png" },
  { idx: 31, title: "三转二场景04", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_scene_04.png" },
  { idx: 32, title: "三转二场景03", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_scene_03.png" },
  { idx: 33, title: "三转二场景02", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_scene_02.jpg" },
  { idx: 34, title: "三转二场景01", mediaType: "image", type: "2-3", typeName: "三渲二", imgPath: "/assets/cases/case_2/toon_scene_01.png" },
  { idx: 35, title: "角色原画07", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_07.png" },
  { idx: 36, title: "角色原画06", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_06.png" },
  { idx: 37, title: "角色原画05", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_05.png" },
  { idx: 38, title: "角色原画04", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_04.png" },
  { idx: 39, title: "角色原画03", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_03.jpg" },
  { idx: 40, title: "角色原画02", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_02.png" },
  { idx: 41, title: "角色原画01", mediaType: "image", type: "1-1", typeName: "角色原画", imgPath: "/assets/cases/case_1/character_concept_01.png" },
  { idx: 42, title: "场景原画08", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_08.png" },
  { idx: 43, title: "场景原画07", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_07.png" },
  { idx: 44, title: "场景原画06", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_06.png" },
  { idx: 45, title: "场景原画05", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_05.png" },
  { idx: 46, title: "场景原画04", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_04.png" },
  { idx: 47, title: "场景原画03", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_03.png" },
  { idx: 48, title: "场景原画02", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_02.png" },
  { idx: 49, title: "场景原画01", mediaType: "image", type: "1-2", typeName: "场景原画", imgPath: "/assets/cases/case_1/scene_concept_01.png" },
  { idx: 50, title: "趣加_ss视频宣传", mediaType: "video", type: "5", videoPath: "/assets/cases/case_5/funplus_ss_promo.mp4", typeName: "美宣作品", imgPath: "/assets/cases/case_5/funplus_ss_promo.jpg" },
  { idx: 51, title: "趣加_ss02视频宣传", mediaType: "video", type: "5", videoPath: "/assets/cases/case_5/funplus_ss_02_promo.mp4", typeName: "美宣作品", imgPath: "/assets/cases/case_5/funplus_ss_02_promo.jpg" },
  { idx: 52, title: "点点互动_KD视频宣传", mediaType: "video", type: "5", videoPath: "/assets/cases/case_5/diandian_kd_promo.mp4", typeName: "美宣作品", imgPath: "/assets/cases/case_5/diandian_kd_promo.jpg" },
  { idx: 53, title: "丧尸", mediaType: "video", type: "5", videoPath: "/assets/cases/case_5/zombie.mp4", typeName: "美宣作品", imgPath: "/assets/cases/case_5/zombie.jpg" },
  { idx: 54, title: "自研项目02", mediaType: "video", type: "4-3", videoPath: "/assets/cases/case_4/self_dev_02.mp4", typeName: "自研引擎", imgPath: "/assets/cases/case_4/self_dev_02.jpg" },
  { idx: 55, title: "自研项目01", mediaType: "video", type: "4-3", videoPath: "/assets/cases/case_4/self_dev_01.mp4", typeName: "自研引擎", imgPath: "/assets/cases/case_4/self_dev_01.jpg" },
  { idx: 56, title: "unity特效06", mediaType: "video", type: "4-1", videoPath: "/assets/cases/case_4/unity_fx_06.mp4", typeName: "Unity引擎", imgPath: "/assets/cases/case_4/unity_fx_06.jpg" },
  { idx: 57, title: "unity特效05", mediaType: "video", type: "4-1", videoPath: "/assets/cases/case_4/unity_fx_05.mp4", typeName: "Unity引擎", imgPath: "/assets/cases/case_4/unity_fx_05.jpg" },
  { idx: 58, title: "ue4特效04", mediaType: "video", type: "4-2", videoPath: "/assets/cases/case_4/ue4_fx_04.mp4", typeName: "UE4引擎", imgPath: "/assets/cases/case_4/ue4_fx_04.jpg" },
  { idx: 59, title: "ue4特效03", mediaType: "video", type: "4-2", videoPath: "/assets/cases/case_4/ue4_fx_03.mp4", typeName: "UE4引擎", imgPath: "/assets/cases/case_4/ue4_fx_03.jpg" },
  { idx: 60, title: "ue4特效02", mediaType: "video", type: "4-2", videoPath: "/assets/cases/case_4/ue4_fx_02.mp4", typeName: "UE4引擎", imgPath: "/assets/cases/case_4/ue4_fx_02.jpg" },
  { idx: 61, title: "ue4特效01", mediaType: "video", type: "4-2", videoPath: "/assets/cases/case_4/ue4_fx_01.mp4", typeName: "UE4引擎", imgPath: "/assets/cases/case_4/ue4_fx_01.jpg" },
  { idx: 62, title: "Unity特效04", mediaType: "video", type: "4-1", videoPath: "/assets/cases/case_4/unity_fx_04.mp4", typeName: "Unity引擎", imgPath: "/assets/cases/case_4/unity_fx_04.jpg" },
  { idx: 63, title: "Unity特效03", mediaType: "video", type: "4-1", videoPath: "/assets/cases/case_4/unity_fx_03.mp4", typeName: "Unity引擎", imgPath: "/assets/cases/case_4/unity_fx_03.jpg" },
  { idx: 64, title: "Unity特效02", mediaType: "video", type: "4-1", videoPath: "/assets/cases/case_4/unity_fx_02.mp4", typeName: "Unity引擎", imgPath: "/assets/cases/case_4/unity_fx_02.jpg" },
  { idx: 65, title: "Unity特效01", mediaType: "video", type: "4-1", videoPath: "/assets/cases/case_4/unity_01.mp4", typeName: "Unity引擎", imgPath: "/assets/cases/case_4/unity_fx_01.jpg" },
  { idx: 66, title: "角色动画_9", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_09.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_09.jpg" },
  { idx: 67, title: "角色动画_8", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_08.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_08.jpg" },
  { idx: 68, title: "角色动画_7", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_07.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_07.jpg" },
  { idx: 69, title: "角色动画_6", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_06.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_06.jpg" },
  { idx: 70, title: "角色动画_5", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_05.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_05.jpg" },
  { idx: 71, title: "角色动画_4", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_04.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_04.jpg" },
  { idx: 72, title: "角色动画_3", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_03.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_03.jpg" },
  { idx: 73, title: "角色动画_2", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_02.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_02.jpg" },
  { idx: 74, title: "角色动画_10", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_10.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_10.jpg" },
  { idx: 75, title: "角色动画_1", mediaType: "video", type: "3-1", videoPath: "/assets/cases/case_3/character_anim_01.mp4", typeName: "角色动画", imgPath: "/assets/cases/case_3/character_anim_01.jpg" }
];

// 职位数据
const jobListData = [{
  id: '1',
  title: '3D特效设计师',
  address: '北京',
  social_type: '社招',
  work_type: '设计',
  people_number: 1,
  email: '2127330858@qq.com',
  salary: '6-22K',
  time: '2022-10-06',
  priority: '急',
  content: `<div>
  <h3><strong>职位描述</strong></h3>
  <div>1、负责游戏中的单双人出场展示特效，技能特效，道具特效，场景特效，UI特效的制作</div>
  <div>&nbsp;</div>
  <h3><strong>职位要求</strong></h3>
  <div>1、有从事游戏美术工作的经验,良好的美术基础</div>
  <div>2、熟练使用3DMAX, PHOTOSHOP，有unity3D/ue4特效制作经验，不排斥自研引擎。</div>
  <div>3、具备一定的手绘能力</div>
  <div>4、执行力强，能在计划时间内完成计划任务。</div>
  <div>5、熟悉unity或者ue4的shader系统</div>
  <div>6、学习适应能力强，踏实上进而不失活力，沟通理解能力强，有责任心</div>
  <div>7、对游戏行业有激情，游戏阅历丰富，对各类单机游戏，网游熟悉者优先</div>
  <div>8、风格不限</div>
  <div>&nbsp;</div>
  <div>备注：请将个人简历、作品及主页，打包发送至邮箱 <a href="mailto:2127330858@qq.com">2127330858@qq.com</a>，并标注应聘岗位及联系方式，我们将会尽快回复岗位的投递。</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  </div>`
}, {
  id: '2',
  title: '3D模型设计师',
  address: '北京',
  social_type: '社招',
  work_type: '设计',
  people_number: 1,
  email: '2127330858@qq.com',
  salary: '6-18K',
  time: '2022-10-06',
  priority: '',
  content: `<div>
  <h3><strong>职位描述</strong></h3>
  <div>1、根据角色原画设定完成角色服装.道具.场景的建模工作；</div>
  <div>2、熟练掌握结构布线技巧，UV排列规范整齐，优化模型达到质量与面数最优平衡；</div>
  <div>3、具备良好的自律性，能在计划时间内制作出符合项目要求的模型及贴图；</div>
  <div>&nbsp;</div>
  <h3><strong>职位要求</strong></h3>
  <div>1、休闲类日韩手绘风格，UV排列规范整齐，贴图干净整洁，材质明确；</div>
  <div>2、具有较高的审美，对造型和色彩有良好的认知；</div>
  <div>3、了解换装游戏的原理，对模型拆分规范有一定了解；</div>
  <div>4、练掌握以下软件（3D Max或Maya，bodypaint3D，PS）；</div>
  <div>5、角色和场景制作都有一定经验的优先</div>
  <div>&nbsp;</div>
  <div>备注：请将个人简历、作品及主页，打包发送至邮箱 <a href="mailto:2127330858@qq.com">2127330858@qq.com</a>，并标注应聘岗位及联系方式，我们将会尽快回复岗位的投递。</div>
  <div>&nbsp;</div>
  </div>`
}];

// ==================== 工具函数 ====================

// 随机获取数组元素
function getRandomArrayElements(arr, count) {
  const shuffled = [...arr];
  let i = arr.length;
  const min = i - count;
  while (i-- > min) {
    const index = Math.floor((i + 1) * Math.random());
    [shuffled[index], shuffled[i]] = [shuffled[i], shuffled[index]];
  }
  return shuffled.slice(min);
}

// ==================== Header 功能 ====================

function initHeader() {
  const menuIcon = document.querySelector('.navbar_menu_icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('navbar_open');
    });
  }

  // 首页滚动效果
  const header = document.querySelector('.header');
  if (header && header.classList.contains('header_home')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        header.classList.remove('header_home');
      } else {
        header.classList.add('header_home');
      }
    });
  }

  // 设置当前页面高亮
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.navbar_item');
  navItems.forEach(item => {
    const href = item.getAttribute('data-href');
    if (href === currentPath ||
        (currentPath === '/' && href === '/index.html') ||
        (href && currentPath.endsWith(href.replace('.html', '')))) {
      item.classList.add('navbar_item_active');
    }
  });
}

// ==================== Modal 功能 ====================

let currentModalData = null;

function openModal(data) {
  currentModalData = data;
  const modal = document.getElementById('modal');
  if (!modal) return;

  const content = modal.querySelector('.modal_content');
  if (content) {
    if (data.mediaType === 'video') {
      content.innerHTML = `
        <div class="modal_slide">
          <video width="320" height="240" controls autoplay poster="${data.previewSrc || ''}">
            <source src="${data.src}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    } else {
      content.innerHTML = `
        <div class="modal_slide">
          <img class="modal_image" src="${data.src}" alt="" />
        </div>
      `;
    }
  }
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.style.display = 'none';
    const content = modal.querySelector('.modal_content');
    if (content) content.innerHTML = '';
    document.body.style.overflow = '';
  }
  currentModalData = null;
}

function initModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal_close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal_slide')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
}

// ==================== 案例页面功能 ====================

let currentType = '0';
let currentLv2Type = '';

function renderCaseList(list) {
  const container = document.getElementById('case_list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="cases_empty_img">
        <img src="/assets/empty.png" alt="" width="356" height="348" />
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="cases_case_item ${item.mediaType === 'video' ? 'cases_case_item_video' : ''}" data-idx="${item.idx}">
      <div class="cases_case_item_img">
        <img src="${item.imgPath}" alt="" />
      </div>
      <a class="cases_grid_item_overlay">
        <p>${item.typeName}</p>
      </a>
      ${item.mediaType === 'video' ? '<i class="fas fa-play-circle cases_video_icon"></i>' : ''}
    </div>
  `).join('');

  // 绑定点击事件
  container.querySelectorAll('.cases_case_item').forEach((el, idx) => {
    el.addEventListener('click', () => {
      const item = list[idx];
      if (item.mediaType === 'video') {
        openModal({
          src: item.videoPath,
          previewSrc: item.imgPath,
          mediaType: 'video'
        });
      } else {
        openModal({
          src: item.imgPath,
          mediaType: 'img'
        });
      }
    });
  });
}

function renderLv1Filter() {
  const container = document.getElementById('level1_filter');
  if (!container) return;

  container.innerHTML = categoryData.map(item => `
    <div class="cases_type_item ${item.type === currentType ? 'cases_type_item_active' : ''}" data-type="${item.type}">
      ${item.name}
    </div>
  `).join('');

  container.querySelectorAll('.cases_type_item').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute('data-type');
      handleLv1FilterChange(type);
    });
  });
}

function renderLv2Filter() {
  const container = document.getElementById('level2_filter');
  if (!container) return;

  const category = categoryData.find(c => c.type === currentType);
  if (!category || !category.children) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = category.children.map(item => `
    <div class="cases_type_item ${item.type === currentLv2Type ? 'cases_type_item_active' : ''}" data-type="${item.type}">
      ${item.name}
    </div>
  `).join('');

  container.querySelectorAll('.cases_type_item').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute('data-type');
      handleLv2FilterChange(type);
    });
  });
}

function handleLv1FilterChange(type) {
  currentType = type;
  currentLv2Type = '';

  renderLv1Filter();
  renderLv2Filter();

  let list;
  if (type === '0') {
    list = caseListData;
  } else {
    list = caseListData.filter(item => {
      const lv1Type = item.type.split('-')[0];
      return lv1Type === type;
    });
  }
  renderCaseList(list);
}

function handleLv2FilterChange(type) {
  currentLv2Type = type;
  renderLv2Filter();

  const list = caseListData.filter(item => item.type === type);
  renderCaseList(list);
}

function initCasesPage() {
  if (document.getElementById('case_list')) {
    // 检查 URL 参数
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type');
    if (typeParam) {
      const category = categoryData.find(c => c.type === typeParam);
      if (category) {
        currentType = typeParam;
      }
    }

    renderLv1Filter();
    renderLv2Filter();

    let list;
    if (currentType === '0') {
      list = caseListData;
    } else {
      list = caseListData.filter(item => {
        const lv1Type = item.type.split('-')[0];
        return lv1Type === currentType;
      });
    }
    renderCaseList(list);
  }
  initModal();
}

// ==================== 首页功能 ====================

function initHomePage() {
  // 渲染随机案例
  const container = document.getElementById('home_case_list');
  if (container) {
    const randomCases = getRandomArrayElements(caseListData, 8);
    container.innerHTML = randomCases.map(item => `
      <div class="home_case_item ${item.mediaType === 'video' ? 'home_case_item_video' : ''}" data-idx="${item.idx}">
        <div class="home_case_item_img">
          <img src="${item.imgPath}" alt="" />
        </div>
        <a class="home_grid_item_overlay">
          <p>${item.typeName}</p>
        </a>
        ${item.mediaType === 'video' ? '<i class="fas fa-play-circle home_video_icon"></i>' : ''}
      </div>
    `).join('');

    // 绑定点击事件
    container.querySelectorAll('.home_case_item').forEach((el, idx) => {
      el.addEventListener('click', () => {
        const item = randomCases[idx];
        if (item.mediaType === 'video') {
          openModal({
            src: item.videoPath,
            previewSrc: item.imgPath,
            mediaType: 'video'
          });
        } else {
          openModal({
            src: item.imgPath,
            mediaType: 'img'
          });
        }
      });
    });
  }
  initModal();

  // 渐入动画
  setTimeout(() => {
    document.querySelectorAll('.animate-fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 100);
    });
  }, 100);
}

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', () => {
  initHeader();

  const path = window.location.pathname;
  if (path.includes('index.html') || path === '/' || path === '/static-site/') {
    initHomePage();
  } else if (path.includes('cases.html')) {
    initCasesPage();
  } else {
    initModal();
  }
});
