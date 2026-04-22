/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * 網頁進入點
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('台灣麻將互動教學手冊')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * 獲取所有教學資料
 */
function getTutorialData() {
  return {
    lessons: [
      { 
        order: 1, 
        category: '基礎入門', 
        title: '認識牌種與花色', 
        content: `台灣麻將共 144 張牌，主要分為以下幾類：<br><br>
        <div class="space-y-4">
          <div>
            <b>1. 萬字：</b>一萬至九萬，每種各 4 張。<br>
            <div class="mt-2 flex flex-wrap">
              <span class="tile">🀇</span><span class="tile">🀈</span><span class="tile">🀉</span><span class="tile">🀊</span><span class="tile">🀋</span><span class="tile">🀌</span><span class="tile">🀍</span><span class="tile">🀎</span><span class="tile">🀏</span>
            </div>
          </div>
          <div>
            <b>2. 筒子：</b>一筒至九筒，每種各 4 張。<br>
            <div class="mt-2 flex flex-wrap">
              <span class="tile">🀙</span><span class="tile">🀚</span><span class="tile">🀛</span><span class="tile">🀜</span><span class="tile">🀝</span><span class="tile">🀞</span><span class="tile">🀟</span><span class="tile">🀠</span><span class="tile">🀡</span>
            </div>
          </div>
          <div>
            <b>3. 條子：</b>一條至九條，每種各 4 張。<br>
            <div class="mt-2 flex flex-wrap">
              <span class="tile">🀐</span><span class="tile">🀑</span><span class="tile">🀒</span><span class="tile">🀓</span><span class="tile">🀔</span><span class="tile">🀕</span><span class="tile">🀖</span><span class="tile">🀗</span><span class="tile">🀘</span>
            </div>
          </div>
          <div>
            <b>4. 風牌：</b>東、南、西、北，每種各 4 張。<br>
            <div class="mt-2 flex flex-wrap">
              <span class="tile">🀀</span><span class="tile">🀁</span><span class="tile">🀂</span><span class="tile">🀃</span>
            </div>
          </div>
          <div>
            <b>5. 箭牌：</b>中、發、白，每種各 4 張。<br>
            <div class="mt-2 flex flex-wrap">
              <span class="tile">🀄</span><span class="tile">🀅</span><span class="tile">🀆</span>
            </div>
          </div>
          <div>
            <b>6. 花牌：</b>春、夏、秋、冬、梅、蘭、竹、菊，共 8 張。<br>
            <div class="mt-2 flex flex-wrap">
              <span class="tile">🀢</span><span class="tile">🀣</span><span class="tile">🀤</span><span class="tile">🀥</span><span class="tile">🀦</span><span class="tile">🀧</span><span class="tile">🀨</span><span class="tile">🀩</span>
            </div>
          </div>
        </div><br>
        了解這些牌種是學習麻將的第一步！`,
        image: 'https://www.soeasyedu.com.tw/updimg/blog_content/2025/0115.jpg'
      },
      { 
        order: 2, 
        category: '基礎規則', 
        title: '胡牌目標與遊戲流程', 
        content: `麻將的目標是將手中的牌組組合特定的排列。十六張麻將的胡牌公式為：<br><br>
        <b>5 副軀幹（順子或刻子） + 1 對將牌（眼睛）</b><br><br>
        <b>順子：</b> 同花色且數字連續的三張牌（如：一萬、二萬、三萬）。<br>
        <b>刻子：</b> 三張完全一樣的牌（如：三張六筒）。<br>
        <b>將牌（眼睛）：</b> 兩張完全一樣的牌（如：兩張發財）。<br><br>
        <b>二、 遊戲流程</b><br>
        <b>抓牌：</b> 每人起始拿 16 張牌，莊家拿 17 張。<br>
        <b>摸與打：</b> 輪到你時摸一張牌（進牌），若沒胡牌，就從手中挑一張不要的打出去（出牌）。<br>
        <b>吃、碰、槓：</b><br>
        • <b>吃牌：</b> 只能吃「上家」打出的牌，湊成順子。<br>
        • <b>碰牌：</b> 任何人打出的牌，如果你手中有兩張一樣的，可以喊「碰」湊成刻子。<br>
        • <b>槓牌：</b> 如果你有三張一樣的牌，別人打出第四張（或你自己摸到），可以喊「槓」。`,
        image: 'https://www.soeasyedu.com.tw/updimg/blog_content/2025/0115.jpg'
      },
      { 
        order: 3, 
        category: '基礎規則', 
        title: '莊家與連莊規則', 
        content: '<b>莊家 (1台)：</b>做莊者，無論胡牌或放炮（打出的牌被別人胡）都多算一台。<br><br><b>連莊 (1台)：</b>莊家胡牌即可連莊。連一拉一為三台，連二拉二為五台，餘此類推…… 相對的當莊家被胡牌時，也要賠償連莊的台數。連莊上限最多僅可連莊10次。舉例說明：莊家若是連莊十次，在連十拉十的狀況下，莊家若胡牌，則會順位輪到下一家做為莊家。',
        image: 'https://www.soeasyedu.com.tw/updimg/blog_content/2025/0115.jpg'
      },
      { 
        order: 4, 
        category: '牌型教學', 
        title: '暗刻系列詳解', 
        content: '<b>三暗刻 (2台)：</b>有三副自己摸到的刻子（不是「碰」出來的）。<br>此牌型聽牌方式有兩種：<br>1. 聽兩頭：【345萬 44萬 55筒 222條 555條 789條】聽4萬、5筒。<br>2. 聽單張：【444萬 35萬 55筒 222條 555條 789條】聽4萬。<br>注意：若同時聽牌為碰牌與吃牌型者，胡牌順序以碰牌優先，會以碰胡處理而非三暗刻。<br><br><b>四暗刻 (5台)：</b>有四副自己摸到的刻子。<br><b>五暗刻 (8台)：</b>有五副自己摸到的刻子。',
        image: 'https://www.soeasyedu.com.tw/updimg/blog_content/2025/0115.jpg'
      },
      { 
        order: 5, 
        category: '特殊規則', 
        title: '平胡與特殊限制', 
        content: '<b>平胡 (2台)：</b>全部都是順子而沒有刻子。且對子不能是字牌，不能為獨聽或自摸。<br>補充說明：<br>• 有花牌不算<br>• 必須有五個順子<br>• 獨聽不算<br>• 自摸不算<br>• 胡將(眼/雀頭)不算<br>• 將(眼/雀頭)是字不算<br>• 必須是無字無花',
        image: 'https://www.soeasyedu.com.tw/updimg/blog_content/2025/0115.jpg'
      }
    ],
    taiPatterns: [
      { cat: '基礎台數', name: '莊家', tai: 1, desc: '做莊者，無論胡牌或放炮（打出的牌被別人胡）都多算一台。' },
      { cat: '基礎台數', name: '連莊', tai: 1, desc: '莊家胡牌即可連莊。連一拉一為三台，連二拉二為五台，以此類推。相對的當莊家被胡牌時，也要賠償連莊的台數。連莊上限最多僅可連莊10次。' },
      { cat: '基礎台數', name: '自摸', tai: 1, desc: '只要自摸胡牌，就加一台。' },
      { cat: '基礎台數', name: '門清', tai: 1, desc: '沒有吃也沒有碰。全部牌都是自己摸到的。' },
      { cat: '基礎台數', name: '門清自摸', tai: 3, desc: '門清、自摸原本各一台，再追加一台成為三台。不會再與自摸、門清重複計算。' },
      { cat: '刻子系列', name: '三元牌', tai: 1, desc: '拿到任何一副中、發、白的刻子。' },
      { cat: '刻子系列', name: '三暗刻', tai: 2, desc: '有三副自己摸到的刻子。（不是「碰」出來的）' },
      { cat: '刻子系列', name: '四暗刻', tai: 5, desc: '有四副自己摸到的刻子。（不是「碰」出來的）' },
      { cat: '刻子系列', name: '五暗刻', tai: 8, desc: '有五副自己摸到的刻子。（不是「碰」出來的）' },
      { cat: '刻子系列', name: '碰碰胡', tai: 4, desc: '全部是刻子，沒有順子。' },
      { cat: '花色系列', name: '混一色', tai: 4, desc: '整副牌由字牌及另外單一花色（萬、筒、條）組成。' },
      { cat: '花色系列', name: '清一色', tai: 8, desc: '整副牌由同一花色組成（萬、筒、條），或者全部是字牌。' },
      { cat: '花色系列', name: '字一色', tai: 16, desc: '全副牌皆由字牌（風牌與三元牌）組成。' },
      { cat: '大牌系列', name: '大三元', tai: 8, desc: '胡牌者完成中、發、白三組刻子。' },
      { cat: '大牌系列', name: '小三元', tai: 4, desc: '胡牌者完成中、發、白其中兩組刻子，一組對子。' },
      { cat: '大牌系列', name: '大四喜', tai: 16, desc: '胡牌者完成東、南、西、北四組刻子。' },
      { cat: '大牌系列', name: '小四喜', tai: 8, desc: '胡牌者完成東、南、西、北其中三組刻子，一組對子。' },
      { cat: '特殊胡牌', name: '天胡', tai: 24, desc: '只屬於莊家的特權，配牌後在莊家尚未打出第一張牌時，如果發現手內已完成胡牌型態。' },
      { cat: '特殊胡牌', name: '地胡', tai: 16, desc: '只屬於子家的特權，配牌後第一次自摸就胡牌。' },
      { cat: '特殊胡牌', name: '平胡', tai: 2, desc: '全部都是順子而沒有刻子。且對子不能是字牌，不能為獨聽或自摸。必須無字無花。' },
      { cat: '特殊胡牌', name: '全求', tai: 2, desc: '胡牌時，手牌裡只剩一張單吊牌，其餘全為吃、碰或明槓。' },
      { cat: '特殊胡牌', name: '八仙過海', tai: 8, desc: '當某家拿到全部八張花牌，可立即喊胡。' },
      { cat: '聽牌系列', name: '獨聽', tai: 1, desc: '聽牌時只聽一張牌。' },
      { cat: '聽牌系列', name: '天聽', tai: 8, desc: '莊家打出第一張牌後即聽牌，不得過水。' },
      { cat: '聽牌系列', name: '地聽', tai: 4, desc: '海底八張內且無吃營槓時宣告聽牌，不得過水。' },
      { cat: '其他加台', name: '風牌', tai: 1, desc: '拿到與當局圈風或自己門風相同的刻子。' },
      { cat: '其他加台', name: '花牌', tai: 1, desc: '拿到與自己方位符合的花牌。' },
      { cat: '其他加台', name: '春夏秋冬', tai: 2, desc: '花牌湊滿春夏秋冬。' },
      { cat: '其他加台', name: '梅蘭竹菊', tai: 2, desc: '花牌湊滿梅蘭竹菊。' },
      { cat: '其他加台', name: '海底撈月', tai: 1, desc: '海底最後一張而自摸。' },
      { cat: '其他加台', name: '槓上開花', tai: 1, desc: '因加槓、暗槓、摸到花牌而補牌後胡牌。' },
      { cat: '其他加台', name: '搶槓胡', tai: 1, desc: '當對手加槓時，加槓的那一張牌剛好是胡牌者所要胡的牌。' }
    ]
  };
}
