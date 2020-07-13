//HTMLに項目を大量に追加するプログラム＋ダイスなど
//主にselect(選択肢)の追加a
let job_list = ['プリンセス', 'ソードマン', 'レンジャー',
  'パラディン', 'ダークハンター', 'メディック', 'アルケミスト', 'バード',
  'ブシドー', 'カースメーカー', 'ガンナー', 'ドクトルマグス', 'ウォリアー',
  'ファランクス', 'パイレーツ', 'シノビ', 'モンク', 'ゾディアック',
  'ビーストキング', 'バリスタ', 'ファーマー', 'ショーグン', 'ナイトシーカー',
  'フォートレス', 'スナイパー', 'ルーンマスター', 'ダンサー', 'ミスティック',
  'モノノフ', 'インペリアル', 'ハイランダー'
]
let weapon_list = ['拳', '拳マスタリー', '短剣', '剣', '突剣', '槍', '斧', '杖', '鎚',
  '鞭', '刀', '砲剣', '農具(斬)', '農具(突)', '農具(壊)', '弓', '弩', '銃'
]
let o_list = ['盾', '厚手の手袋', '木彫りの髪飾り', '革のベルト', 'ストラップシューズ',
  '花のお守り', '知識の書', '脱兎のお守り', '百中ゴーグル', '命のベルト', '英気のオーブ',
  '力の指輪', '知恵のピアス', '耐力の腕輪', '俊足のお守り', '運のネックレス'
]

let w_forge = ['STR+1', 'TEC+1', 'VIT+1', 'AGI+1', 'LUC+1',
  '物理命中+1', '属性命中+1', '物理攻撃+1', '属性攻撃+1',
  '炎属性付与', '氷属性付与', '雷属性付与'
]

let a_forge = ['STR+1', 'TEC+1', 'VIT+1', 'AGI+1', 'LUC+1',
  '防御+1', '速度+2', '炎耐性+1', '氷耐性+1', '雷耐性+1'
]
let sta_list = ["str", "tec", "vit", "agi", "luc"]
let equip_list = ["weapon", "armor", "other"]
/*.append()　は挿入した後に値が残らないので素材を各個作成しています。*/

/*ジョブ（職業）*/
let job_list_create = () => {
  for (let i = 0; i < job_list.length; i++) {
    //let jobs = job_list

    /*　新規のoptionオブジェクトを作成する*/
    let option1 = document.createElement("option");
    option1.value = job_list[i];
    option1.text = job_list[i] //="ソードマン"

    /*挿入先を取得し、挿入する*/
    let main_job_list = document.getElementById("main_job_list");
    main_job_list.append(option1)

    /*　新規のoptionオブジェクトを作成する*/
    /*この項目を統合しようとしたらなぜか初期値がハイランダーになり、selectedを無視するので放置*/
    let option2 = document.createElement("option");
    option2.value = job_list[i];
    option2.text = job_list[i]
    /*挿入先を取得し、挿入する*/

    let sub_job_list = document.getElementById("sub_job_list");
    sub_job_list.append(option2)
  };
};
//レベル
let level_create = () => {
  for (let i = 1; i <= 99; i++) {
    let level_option = document.createElement("option")
    level_option.value = i;
    level_option.text = i;

    document.getElementById("level");
    level.append(level_option)
  };
};
/*ステ才能値５種*/
let talent_create = () => {
  for (let i = 0; i <= 4; i++) {
    for (let j = 3; j <= 18; j++) {
      let talent_option = document.createElement("option")
      talent_option.value = j;
      talent_option.text = j;
      if (j == 10) {
        /*selected(初期値)属性追加できるようになったら使いたい*/
      };

      talent_get = document.getElementById(sta_list[i] + "_talent");
      talent_get.append(talent_option)
    };
  };
};
/*ステ成長値５種*/
let grow_create = () => {
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 99; j++) {
      let grow_option = document.createElement("option")
      grow_option.value = j;
      grow_option.text = j;

      grow_get = document.getElementById(sta_list[i] + "_grow");
      grow_get.append(grow_option)
    };
  };
};
/*装備ランク*/
let rank_create = () => {
  for (let i = 0; i <= 2; i++) {
    for (let j = 1; j <= 99; j++) {
      let rank_option = document.createElement("option")
      rank_option.value = j;
      rank_option.text = j;

      rank_get = document.getElementById(equip_list[i] + "_rank");
      rank_get.append(rank_option)
    };
  };
};


/*武器*/
let w_list_create = () => {
  for (let i = 0; i < weapon_list.length; i++) {
    /*　新規のoptionオブジェクトを作成する*/
    let w_option = document.createElement("option");
    w_option.value = weapon_list[i];
    w_option.text = weapon_list[i];

    /*挿入先を取得し、挿入する*/
    let w_list1 = document.getElementById("weapon_list");
    w_list1.append(w_option)
  };
};
/*装飾(アクセサリ)*/
let o_list_create = () => {
  for (let i = 0; i < o_list.length; i++) {
    /*　新規のoptionオブジェクトを作成する*/
    let o_option = document.createElement("option");
    o_option.value = o_list[i];
    o_option.text = o_list[i];

    /*挿入先を取得し、挿入する*/
    let o_list1 = document.getElementById("other_list");
    o_list1.append(o_option)
  };
};

/*-----武器鍛冶-----*/
let w_forge_list_create = () => {
  for (let i = 0; i < w_forge.length; i++) {
    /*　新規のoptionオブジェクトを作成する*/
    let append_list = document.createElement("option");
    append_list.value = w_forge[i];
    append_list.text = w_forge[i];

    /*挿入先を取得し、挿入する*/
    let list1 = document.getElementById("weapon_forge_list1");
    list1.append(append_list)

    /*武器鍛冶２*/
    /*append_listを使いまわそうとすると片方が消えたり等の不具合が起こるのでいちいち作成しています。*/
    /*createElentの受け入れ先変数は同じ名前を使わない(append_list2)*/
    let append_list2 = document.createElement("option");
    append_list2.value = w_forge[i];
    append_list2.text = w_forge[i];

    let list2 = document.getElementById("weapon_forge_list2");
    list2.append(append_list2)
  };
};

let a_forge_list_create = () => {
  for (let i = 0; i < a_forge.length; i++) {
    /*鎧鍛冶１*/
    let append_list1 = document.createElement("option");
    append_list1.value = a_forge[i];
    append_list1.text = a_forge[i];

    let af_list1 = document.getElementById("armor_forge_list1");
    af_list1.append(append_list1)

    /*鎧鍛冶２*/
    let append_list2 = document.createElement("option");
    append_list2.value = a_forge[i];
    append_list2.text = a_forge[i];

    let af_list2 = document.getElementById("armor_forge_list2");
    af_list2.append(append_list2)

    /*盾専用鍛冶１*/
    let append_list3 = document.createElement("option");
    append_list3.value = a_forge[i];
    append_list3.text = a_forge[i];

    let of_list1 = document.getElementById("other_forge_list1");
    of_list1.append(append_list3)

    /*盾専用鍛冶2*/
    let append_list4 = document.createElement("option");
    append_list4.value = a_forge[i];
    append_list4.text = a_forge[i];

    let of_list2 = document.getElementById("other_forge_list2");
    of_list2.append(append_list4)
  };
};
job_list_create();
level_create();
talent_create();
grow_create();
rank_create();
w_list_create();
o_list_create();
w_forge_list_create();
a_forge_list_create();

let dice_action = () => {
  //3D6を3回 × 5セット(15回)
  //空リスト
  let dice_set = []
  for (var i = 0; i < 15; i++) {
    dice_on = Math.floor(Math.random() * 6 + 1)
    dice_set.push(dice_on)
  }
  //合計値
  d1 = dice_set[0] + dice_set[1] + dice_set[2]
  d2 = dice_set[3] + dice_set[4] + dice_set[5]
  d3 = dice_set[6] + dice_set[7] + dice_set[8]
  d4 = dice_set[9] + dice_set[10] + dice_set[11]
  d5 = dice_set[12] + dice_set[13] + dice_set[14]
  //合計値(出目,出目,出目)　後ろの値を使う時は「 ` 」のつけるつけないを気を付けて
  d01 = `【${d1}】` //(${dice_set[0]},${dice_set[1]},${dice_set[2]})
  d02 = `【${d2}】` //(${dice_set[3]},${dice_set[4]},${dice_set[5]})
  d03 = `【${d3}】` //(${dice_set[6]},${dice_set[7]},${dice_set[8]})
  d04 = `【${d4}】` //(${dice_set[9]},${dice_set[10]},${dice_set[11]})
  d05 = `【${d5}】` //(${dice_set[12]},${dice_set[13]},${dice_set[14]})

  //HTMLのダイスリスト取得＋テキスト書き換え
  var dice = document.getElementById("dice_list");
  dice.innerText = `${d01}${d02}${d03}${d04}${d05}`
};
