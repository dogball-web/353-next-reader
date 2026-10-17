/* Story draft v0.4. Character identities never specify Shen/An/He's gender. */
const NAME_CLASS={'沈秋':'name-qiu','賴老師':'name-lai','趙國雄':'name-zhao','林心愛':'name-lin','心理師':'name-counselor'};
const AVATARS={'何稻禾':'avatar-he.webp','小禾':'avatar-he.webp','許安純':'avatar-an.webp','小安':'avatar-an.webp','賴老師':'avatar-lai.webp'};
function named(n){return `<span class="character-name ${NAME_CLASS[n]||''}">${esc(n)}</span>`}
function avatar(n){return AVATARS[n]?`<img class="profile-avatar" src="assets/${AVATARS[n]}" alt="${n==='賴老師'?'賴老師與太太的合照':n==='何稻禾'||n==='小禾'?'河童插畫頭貼':'寫實鵪鶉蛋頭貼'}" width="40" height="40">`:''}
const VN={
  "workStart": {
    "era": 2018,
    "next": "worker",
    "lines": [
      [
        "",
        "2018年1月。你是維修人員趙國雄，今天來更換353語言教室北側的紅色遮光簾。"
      ],
      [
        "賴老師",
        "就是這一面。布面換掉，軌道也麻煩你看看了。"
      ],
      [
        "趙國雄",
        "行。工單跟工具箱我先放這張桌上。啊這窗簾掛多久了？"
      ],
      [
        "賴老師",
        "至少六年前就在用了吧。哪年裝的，我得查查，我這個人啊，比較健忘。"
      ],
      [
        "趙國雄",
        "沒事，人老了都這樣。不過窗簾連白天也拉著？"
      ],
      [
        "賴老師",
        "上課投影會用。其他時間……學生有學生的習慣，我也不一定記得。"
      ],
      [
        "趙國雄",
        "我先看卡在哪。你忙你的，好了再叫你。"
      ]
    ]
  },
  "memory": {
    "era": 2012,
    "next": "meeting",
    "lines": [
      [
        "",
        "2012年，傍晚。沈秋回到電腦前。"
      ],
      [
        "沈秋",
        "剛才逐段對照過，觀察的內容都一樣。可是現在看那張紙，「一個東西」卻像是「一個人」"
      ],
      [
        "沈秋",
        "Jamie，原來那張紙還在嗎？能再幫我看一下那行字嗎"
      ],
      [
        "許安純",
        "還在 我收到的是紙本 剛剛傳的是我用手機拍的照片"
      ],
      [
        "許安純",
        "上面是「一個東西」 你抄完不是也對過嗎"
      ],
      [
        "沈秋",
        "對，所以我想找原本整理這些內容的人確認。稻禾，能幫我問一下來源嗎"
      ],
      [
        "何稻禾",
        "我問到有人認得其中一段…！說是林心愛學姐以前整理的文字，我先問學姐願不願意談"
      ],
      [
        "",
        "過了一會兒，何稻禾傳來回覆。"
      ],
      [
        "何稻禾",
        "學姐同意了！我把你的Fine給她，原本的紙先別再轉傳"
      ],
      [
        "林心愛",
        "你手上有哪個版本？先傳那段給我。"
      ],
      [
        "沈秋",
        "同一張紙，我剛寫完、對照時看的是「東西」，後來再讀卻變成「人」"
      ],
      [
        "林心愛",
        "那個位置不是……裡面。字打出來不對，我錄一段給你。"
      ],
      [
        "",
        "林心愛傳來一則語音訊息。"
      ],
      [
        "林心愛",
        "我當時看見的是，窗框靠——不是靠。內……那一側的……"
      ],
      [
        "沈秋",
        "學姐，我聽得見聲音，可是聽不懂你剛才說的字"
      ],
      [
        "林心愛",
        "……你現在在哪裡？"
      ],
      [
        "沈秋",
        "353，還在幫賴老師處理教材"
      ],
      [
        "林心愛",
        "你在353？……那你先不要走。以前我也有過，同樣的字，再讀的時候卻像是在說別的東西。"
      ],
      [
        "沈秋",
        "你現在沒課的話，能過來當面講嗎？"
      ],
      [
        "林心愛",
        "我沒課了。我帶幾份紀錄過去。"
      ]
    ]
  },
  "meeting": {
    "era": 2012,
    "next": "counsel1",
    "lines": [
      [
        "",
        "2012年，17:48。林心愛來到353。窗簾仍然閉合。"
      ],
      [
        "沈秋",
        "這張是我藏起來的。我先拿出來。"
      ],
      [
        "",
        "你抽出第二份謄本，將摺痕攤平。何稻禾與許安純沒有到場，仍透過Fine協助。"
      ],
      [
        "林心愛",
        "我帶了幾次整理的版本。你可以比，不過不要替我把說不清楚的部分接完。"
      ],
      [
        "沈秋",
        "之前有人願意聽你說嗎？"
      ],
      [
        "林心愛",
        "講過。到哪裡都講，後來老師叫我去輔導室。那時候沒人相信，睡也睡不好。"
      ],
      [
        "林心愛",
        "諮商時，心理師建議我先寫下來。我才開始把位置、距離，一項一項記好。"
      ]
    ]
  },
  "confession": {
    "era": 2012,
    "next": "to2018",
    "lines": [
      [
        "沈秋",
        "前一份只有目擊紀錄。你後來加上不轉傳就會受罰的句子，旁邊還寫了「這樣才會有人繼續傳」。"
      ],
      [
        "林心愛",
        "是我寫的。你現在也只在意那幾句，對不對？"
      ],
      [
        "林心愛",
        "你們收到一張紙，就有人陪著查、有人問你怕不怕。我那時候講了那麼多次，他們只叫我別再想了。"
      ],
      [
        "沈秋",
        "稻禾跟安純……我是說，我的朋友，他們真的很怕。當時那些不相信學姐的人，不是他們。"
      ],
      [
        "林心愛",
        "……確實。但不這樣寫，你們會把它看完嗎？我只是想讓人知道，我沒有說謊。"
      ],
      [
        "",
        "林心愛低頭，再次看見謄本末尾的「如果可以」。沉默了一會兒。"
      ],
      [
        "林心愛",
        "……你為什麼改成這樣？"
      ],
      [
        "沈秋",
        "我希望朋友不要因為那些話，覺得自己非做不可。"
      ],
      [
        "林心愛",
        "可是你還是留下「下一個人」。"
      ],
      [
        "",
        "她將手放在紙邊。你還沒有回答。"
      ]
    ]
  },
  "failed": {
    "era": 2012,
    "next": "to2018",
    "lines": [
      [
        "林心愛",
        "你根本還沒把版本看清楚，就拿這幾句推是誰寫的。"
      ],
      [
        "",
        "她將草稿疊齊，收進文件夾。語氣是不耐煩，沒有再跟著你的猜測辯解。"
      ],
      [
        "林心愛",
        "我今天先談到這裡。那份紙留著，好嗎？至少別把紀錄全弄沒了。"
      ],
      [
        "",
        "沈秋仍無法確認威脅句的作者，也沒有得到信上處罰是否有效的答案。"
      ]
    ]
  },
  "workEnd": {
    "era": 2018,
    "next": "workQuestions",
    "lines": [
      [
        "",
        "2018年。賴老師回來看維修進度。"
      ],
      [
        "趙國雄",
        "老師，拆固定座掉出來的。寫你們教室的事，我想說這個學校的東西還是給你們處理啦。"
      ],
      [
        "",
        "趙國雄把紙交給賴老師。老師將它展開，從頭讀到最後。"
      ],
      [
        "賴老師",
        "詛咒信啊……以前好像有人拿給我看過。"
      ],
      [
        "趙國雄",
        "這張嗎？現在學生都這麼勇喔。"
      ],
      [
        "賴老師",
        "是不是這張，我哪記得？但這句「如果可以，請傳給下一個人」以這個什麼詛咒信來講倒很客氣，本來可能也是這樣寫的吧。"
      ],
      [
        "趙國雄",
        "我可不知道。這張是從固定座裡拿出來的。而且是突然就憑空生出來了……我一開始檢查時真的沒發現它。"
      ],
      [
        "賴老師",
        "憑空生出來？你看錯了吧，你們做這個也是賺辛苦錢餒，年紀輕輕就跟我一樣老花，怎麼可以。"
      ],
      [
        "趙國雄",
        "哈哈，可能真的是老花吧，我也該去配副眼鏡了，剛剛還看到窗外有奇怪的東西。"
      ],
      [
        "賴老師",
        "嗯……看著這些字，就想到以前的學生。林心愛，那時論文磨了好久，也常坐在這裡看窗外。"
      ]
    ]
  },
  "workFinish": {
    "era": 2018,
    "next": "return2012",
    "lines": [
      [
        "趙國雄",
        "布換好了，軌道也能拉。你試試。"
      ],
      [
        "賴老師",
        "順多了。紙先給我，我帶回去。"
      ],
      [
        "",
        "趙國雄填妥工單：「2018/01：北側窗面遮光簾更換。」賴老師把讀完的紙收進資料夾。"
      ],
      [
        "",
        "維修工作結束。"
      ]
    ]
  },
  "return2012": {
    "era": 2012,
    "next": "endingChoice",
    "lines": [
      [
        "",
        "回到2012年。閉合的紅色窗簾前，那張紙仍在沈秋與林心愛之間。"
      ],
      [
        "林心愛",
        "你希望下一個人讀到它，還是不希望？"
      ]
    ]
  },
  "ending1": {
    "era": 2012,
    "next": "grading",
    "lines": [
      [
        "沈秋",
        "希望。但我希望是有人願意讀，不是怕了才不得不讀。"
      ],
      [
        "林心愛",
        "至少，有人會知道之前也有人看過。"
      ],
      [
        "沈秋",
        "我能留下自己記得、也知道為什麼改的部分。其他還沒確定的，我不能替它說成事實。"
      ],
      [
        "",
        "你將第二份謄本摺回原狀，放進蓋子後的空隙。這次，你知道自己為什麼留下它。"
      ]
    ]
  },
  "ending2": {
    "era": 2012,
    "next": "grading",
    "lines": [
      [
        "沈秋",
        "不希望。我只是把威脅拿掉，沒有想要誰繼續傳。"
      ],
      [
        "林心愛",
        "那份紙，可以先不要毀掉嗎？我不想連這些字都沒了。"
      ],
      [
        "沈秋",
        "……我會留下。但我還是不希望，再有人因為害怕才傳它。"
      ],
      [
        "",
        "你理解學姐為什麼這麼做，仍無法認同那種傳播方式。你尊重她保留紙本的請求，將謄本放回空隙，藏了起來。"
      ]
    ]
  },
  "ending3": {
    "era": 2012,
    "next": "grading",
    "lines": [
      [
        "",
        "沈秋將第二份謄本放回蓋子後。學姐已收起草稿，那些句子的來歷仍沒有釐清。"
      ],
      [
        "沈秋",
        "先留著吧。至少現在，我還不能說自己知道發生了什麼。"
      ],
      [
        "",
        "桌上，一角草稿從文件夾邊緣露出。"
      ]
    ]
  },
  "meetingResume": {
    "era": 2012,
    "next": "warmCheck",
    "lines": [
      [
        "林心愛",
        "後來我就一直寫。說不清楚的地方，先留著，想到別的講法再補。"
      ],
      [
        "沈秋",
        "你能再說一次那個位置嗎？"
      ],
      [
        "林心愛",
        "它的左……不，遮住的是那一邊的裡……沿。不是裡面。"
      ],
      [
        "",
        "學姐停住。明明她談起其他事時，字句是清楚的……？"
      ],
      [
        "林心愛",
        "先看紙吧。這裡——「如果可以，請你轉傳給下一個人。」這句不是我的紀錄。"
      ],
      [
        "",
        "你點開Fine核對許安純稍早傳來的照片。紙本上也沒有這句溫和邀請。"
      ],
      [
        "沈秋",
        "那句是我改的。我不想讓下一個收到的人也害怕。"
      ]
    ]
  },
  "counsel1": {
    "era": 2012,
    "next": "counsel2",
    "background": "counseling-room.webp",
    "label": "林心愛的回憶 ／ 校園諮商室",
    "narrator": "林心愛",
    "lines": [
      [
        "",
        "那天下午，面紙盒放在桌子靠近我的那一側。"
      ],
      [
        "",
        "我沒有抽。"
      ],
      [
        "心理師",
        "今天想先從哪裡說起？"
      ],
      [
        "林心愛",
        "他們應該有跟你說，我為什麼來。"
      ],
      [
        "心理師",
        "老師有提到你最近的狀況。不過，我想先聽你自己怎麼說。"
      ],
      [
        "林心愛",
        "也是窗戶的事。"
      ],
      [
        "林心愛",
        "我跟很多人說過了。他們一開始會聽，後來就說，是不是最近論文壓力太大。"
      ],
      [
        "心理師",
        "聽到他們這樣說，你有什麼感覺？"
      ],
      [
        "林心愛",
        "我不知道還要怎麼講。"
      ],
      [
        "林心愛",
        "我確實在煩論文，可是那跟我看見的東西，是兩回事。"
      ],
      [
        "心理師",
        "你希望他們先聽你把那天的事情說完。"
      ],
      [
        "林心愛",
        "……對。"
      ],
      [
        "林心愛",
        "至少先聽完。"
      ]
    ]
  },
  "counsel2": {
    "era": 2012,
    "next": "counsel3",
    "background": "counseling-room.webp",
    "label": "林心愛的回憶 ／ 校園諮商室",
    "narrator": "林心愛",
    "lines": [
      [
        "心理師",
        "那就從那天下午開始。不用一次把整件事說完。"
      ],
      [
        "林心愛",
        "我坐在353，對著電腦。寫不出來，就往窗外看。"
      ],
      [
        "林心愛",
        "後來視線移開了，那個形狀還在。"
      ],
      [
        "心理師",
        "你說的「還在」，是什麼樣的感覺？"
      ],
      [
        "林心愛",
        "我知道我沒有一直看著同一個地方。可是它……"
      ],
      [
        "",
        "我看向牆上的一小塊光。過了一會兒，又把視線放回桌子。"
      ],
      [
        "林心愛",
        "這樣講不對。我每次從頭說，都會換一種講法。"
      ],
      [
        "林心愛",
        "他們會問，所以到底長什麼樣子。我就更不知道要先講哪裡。"
      ],
      [
        "心理師",
        "你很在意自己有沒有把那天的經驗說清楚。"
      ],
      [
        "林心愛",
        "因為只要有一個地方講得不一樣，他們就會覺得，其他的也是我亂講的。"
      ],
      [
        "",
        "我把剛才說過的句子，在心裡重新排了一次。"
      ],
      [
        "",
        "可是下一句還沒出口，我就想先改掉前一句。"
      ]
    ]
  },
  "counsel3": {
    "era": 2012,
    "next": "meetingResume",
    "background": "counseling-room.webp",
    "label": "林心愛的回憶 ／ 校園諮商室",
    "narrator": "林心愛",
    "lines": [
      [
        "心理師",
        "如果當面說讓你很費力，也可以先用寫的。"
      ],
      [
        "林心愛",
        "寫什麼？"
      ],
      [
        "心理師",
        "先記下時間、地點，還有當時發生的事。你想從哪一段開始都可以。"
      ],
      [
        "心理師",
        "感到害怕、睡不著的時候，也可以一起記。下次來，我們再慢慢看。"
      ],
      [
        "林心愛",
        "那這次寫下來，下次就不用從頭再說一次了嗎？"
      ],
      [
        "心理師",
        "可以帶著紀錄來，不用每次都重新開始。"
      ],
      [
        "",
        "那句話讓我鬆了一口氣。"
      ],
      [
        "林心愛",
        "……好。"
      ],
      [
        "",
        "離開以前，我又看了一眼桌上的面紙盒。"
      ],
      [
        "",
        "我沒有拿。那時候，我只想趕快找到一張紙。"
      ],
      [
        "",
        "最早寫下來的，只有日期，還有「353」。"
      ],
      [
        "",
        "接著，我寫我坐的位置。窗戶的位置。對面那間教室的位置。"
      ],
      [
        "",
        "有幾句寫得不順，我就劃掉，換一行再寫。"
      ],
      [
        "",
        "我想，這次應該可以講清楚了。"
      ]
    ]
  },
  "roleVictim": {
    "era": 2012,
    "next": "roleHypothesis",
    "lines": [
      [
        "沈秋",
        "學姐也是被這封信影響的人，對嗎？"
      ],
      [
        "林心愛",
        "對。我也是因為碰到這些事，才一直想把它弄清楚。"
      ],
      [
        "林心愛",
        "所以，不要再把那些話傳給別人了。"
      ],
      [
        "",
        "她接受了你的說法，卻沒有說最初那些字從哪裡來。"
      ],
      [
        "沈秋",
        "我總覺得心愛學姐瞞著什麼…？"
      ]
    ]
  },
  "roleSender": {
    "era": 2012,
    "next": "roleHypothesis",
    "lines": [
      [
        "沈秋",
        "這些內容原本在學姐那裡。傳到稻禾或安純手上的，會不會也是學姐傳出去的？"
      ],
      [
        "林心愛",
        "嗯，是我傳出去的。後來轉到誰那裡，我沒有一直問。"
      ],
      [
        "沈秋",
        "所以學姐只是把收到的版本繼續傳下去？"
      ],
      [
        "林心愛",
        "……你這樣理解就好。"
      ],
      [
        "",
        "她沒有要求你把依據說得更清楚，也沒有交代自己收到哪個版本。"
      ],
      [
        "沈秋",
        "我總覺得心愛學姐瞞著什麼…？"
      ]
    ]
  }
};
const DRAFTS=[
 {label:'草稿A・觀察紀錄',lines:[['a1','我始終看著它。它沒有移動。'],['a2','它的左側應該被窗框遮住，但我清楚看見那一部分。'],['a3','我不認為它有臉，但一直知道它在看哪裡。'],['excerpt-gap','中間省略……'],['early','結尾：我希望你們能相信，我沒有認錯。']]},
 {label:'草稿B・修改中的傳閱頁',lines:[['b1','我希望你們能相信，我沒有認錯。'],['threat','新增：不傳給下一個人，下一次獨自在353時，你會聽到有人從窗外叫你的名字。'],['b3','新增：藏起來、丟掉或銷毀都不算。'],['intent','頁邊修改註記：這樣才會有人繼續傳。']]},
 {label:'草稿C・交付前的完成頁',lines:[['c1','讀到這裡的人，請先不要看窗外。'],['c2','每收到一份，請在今天午夜以前親手完整謄寫或完整複製一份，交給下一個人。對方讀完，才算完成。'],['c3','不傳給下一個人，下一次獨自在353時，你會聽到有人從窗外叫你的名字。'],['c4','藏起來、丟掉或銷毀都不算。不要讓這封信停在你這裡。']]}
];
let vnUnlockAt=0;
function startVN(key){state.vnKey=key;state.vnStep=0;vnUnlockAt=key==='memory'?Date.now()+MESSAGE_DELAY:0;phase('vn')}
function vn(){if(state.vnKey==='memory')return fineFollowup();const block=VN[state.vnKey]||VN.meeting,line=block.lines[state.vnStep]||['',''],actor=line[0]||block.narrator||(block.era===2018?'趙國雄':'沈秋'),counsel=state.vnKey.startsWith('counsel');return `<section class="vn-stage ${counsel?'counsel-scene '+(state.vnStep===0?'scene-enter':''):''}"><img class="vn-backdrop ${counsel?'counsel-'+state.vnKey.slice(-1):''}" src="assets/${block.background||(block.era===2018?'window-w2-closed.webp':'writing-desk-2b.webp')}" alt="${counsel?'無人的校園諮商室，第三人稱鏡頭':'閉簾的353教室'}"><div class="vn-era">${block.label||(block.era===2018?'2018年1月 ／ 趙國雄・維修人員':'2012年 ／ 沈秋・353語言教室')}</div><div class="vn-dialogue"><div class="vn-speaker">${named(actor)}${!line[0]?'<small>內心／敘述</small>':''}</div><p>${esc(line[1])}</p><div class="vn-next">${btn('vnnext','點擊以繼續','vn-continue')}</div></div></section>`}
function vnDone(){if(/^workTopic[0-2]$/.test(state.vnKey)){const topic=+state.vnKey.slice(-1);if(!state.workTopics.includes(topic))state.workTopics.push(topic);save()}const next=VN[state.vnKey].next;if(VN[next]&&next!=='return2012'){startVN(next);return}if(next==='meeting'){startVN('meeting');return}if(next==='to2018'){if(state.workerFinished){startVN(state.confrontation?'return2012':'ending3');return}state.found=true;evidence('paper');phase('compare');return}if(next==='return2012'){state.workerFinished=true;startVN(state.confrontation?'return2012':'ending3');return}if(next==='grading'){state.hidden=true;state.teacherBack=1;phase('grading');return}phase(next)}
function warmCheck(){return `<section class="workspace"><span class="eyebrow">2012 ／ 三份文字的核對</span><h2>目前已知的資訊為何？</h2><div class="source">學姐的紀錄與許安純保留的紙本，都沒有溫和的那句。<br>沈秋親手刪去威脅，改成「如果可以，請你轉傳給下一個人」。</div>${['「如果可以……」為沈秋主動改寫','威脅句是沈秋加的','信上的處罰會生效'].map((t,i)=>btn('warmcheck'+i,t,'choice')).join('')}<p class="feedback">${esc(state.warmFeedback||'')}</p></section>`}
function draftCompare(){const d=DRAFTS[state.draftPage||0],picked=state.draftPicked||[];return `<section class="draft-workspace"><div class="draft-heading"><span>2012 ／ 林心愛帶來的草稿</span><h2>來回翻閱，點選能互相支持的句子。</h2><p>選取與取消不算指認；請各選一段：原稿原本如何結束、新增了什麼威脅、為什麼要新增。整理好再提出判斷。</p></div><nav class="draft-tabs">${DRAFTS.map((x,i)=>btn('draftpage'+i,x.label,i===(state.draftPage||0)?'primary':'secondary')).join('')}</nav><article class="draft-page"><h3>${d.label}</h3>${d.lines.map(([id,t])=>id==='excerpt-gap'?`<p class="draft-excerpt-gap">${esc(t)}</p>`:`<button class="draft-sentence ${picked.includes(id)?'picked':''}" data-act="pick:${id}">${esc(t)}</button>`).join('')}</article><section class="draft-tray"><b>暫存依據 ${picked.length}／3</b>${picked.map(id=>{const l=DRAFTS.flatMap(x=>x.lines).find(x=>x[0]===id);return btn('pick:'+id,esc(l[1])+' ×','secondary')}).join('')}</section><div class="draft-response">${named('林心愛')}<p>${esc(state.draftFeedback||'你要說是哪一段改了，先把前後的字找給我看。')}</p></div>${btn('accuse','提出判斷：威脅句是學姐後來新增的','primary',picked.length!==3)}</section>`}
const WORK_TOPICS=[
 ['信先交給你們學校，對吧？','嗯，我先收著。你把工單填好就行。'],
 ['你剛提到的林心愛，是以前的學生？','心愛？記得啊，論文磨了好久。但是哪幾次在353談了什麼項目，我可記不得。'],
 ['原來就有「如果可以……」這句嗎？','我也不確定。剛才隨口說的，別照我的記性去填紀錄。']
];
WORK_TOPICS.forEach((q,i)=>VN['workTopic'+i]={era:2018,next:'workQuestions',lines:[['趙國雄',q[0]],['賴老師',q[1]]]});
function workQuestionsDone(){return WORK_TOPICS.every((q,i)=>(state.workTopics||[]).includes(i))}
function workQuestions(){return `<section class="vn-stage work-questions-stage"><img class="vn-backdrop" src="assets/window-w2-closed.webp" alt="2018年353教室閉合的紅色窗簾"><div class="vn-era">2018年1月 ／ 趙國雄・維修人員</div><nav class="vn-topic-options" aria-label="向賴老師提問">${WORK_TOPICS.map((q,i)=>btn('worktopic'+i,esc(q[0])+'<small>'+((state.workTopics||[]).includes(i)?'已談過':'')+'</small>','vn-topic-choice')).join('')}</nav><div class="vn-dialogue"><div class="vn-speaker">${named('趙國雄')}<small>內心／敘述</small></div><p>你能確定的是紙從固定座裡取出；老師的回憶不一定準確，因為他曾親口說他有健忘的老毛病。</p>${workQuestionsDone()?'<div class="vn-next">'+btn('workfinish','填妥維修單，交接紙本 →','secondary')+'</div>':''}</div></section>`}
function endingChoice(){return `<section class="vn-stage"><img class="vn-backdrop" src="assets/writing-desk-2b.webp" alt="2012年353的桌面"><div class="vn-era">2012年 ／ 沈秋</div><div class="vn-dialogue"><div class="vn-speaker">${named('林心愛')}</div><p>你希望下一個人讀到它，還是不希望？</p><div class="ending-options">${btn('ending1','希望有人願意讀到','secondary')}${btn('ending2','不希望再有人收到','secondary')}</div></div></section>`}

// Author-supplied Fine voice message; staged locally, awaiting music before publication.
const LIN_VOICE_SRC='assets/audio/lin-xinai-fine-voice-01.mp3';
function fineFollowup(){return fineUI()}
