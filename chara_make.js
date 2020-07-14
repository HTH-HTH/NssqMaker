let sta_make = () => {
  let nssq_status = {
    'プリンセス': {
      'STR': 5,
      'TEC': 6,
      'VIT': 6,
      'AGI': 5,
      'LUC': 6
    },
    'ソードマン': {
      'STR': 7,
      'TEC': 3,
      'VIT': 6,
      'AGI': 5,
      'LUC': 4
    },
    'レンジャー': {
      'STR': 5,
      'TEC': 5,
      'VIT': 5,
      'AGI': 7,
      'LUC': 7
    },
    'パラディン': {
      'STR': 5,
      'TEC': 5,
      'VIT': 7,
      'AGI': 3,
      'LUC': 5
    },
    'ダークハンター': {
      'STR': 6,
      'TEC': 5,
      'VIT': 5,
      'AGI': 6,
      'LUC': 6
    },
    'メディック': {
      'STR': 5,
      'TEC': 6,
      'VIT': 5,
      'AGI': 4,
      'LUC': 4
    },
    'アルケミスト': {
      'STR': 3,
      'TEC': 7,
      'VIT': 4,
      'AGI': 4,
      'LUC': 5
    },
    'バード': {
      'STR': 4,
      'TEC': 5,
      'VIT': 4,
      'AGI': 5,
      'LUC': 6
    },
    'ブシドー': {
      'STR': 7,
      'TEC': 3,
      'VIT': 4,
      'AGI': 5,
      'LUC': 4
    },
    'カースメーカー': {
      'STR': 3,
      'TEC': 6,
      'VIT': 4,
      'AGI': 4,
      'LUC': 6
    },
    'ガンナー': {
      'STR': 6,
      'TEC': 5,
      'VIT': 4,
      'AGI': 5,
      'LUC': 6
    },
    'ドクトルマグス': {
      'STR': 6,
      'TEC': 6,
      'VIT': 5,
      'AGI': 5,
      'LUC': 6
    },
    'ウォリアー': {
      'STR': 7,
      'TEC': 3,
      'VIT': 6,
      'AGI': 4,
      'LUC': 4
    },
    'ファランクス': {
      'STR': 5,
      'TEC': 4,
      'VIT': 7,
      'AGI': 3,
      'LUC': 5
    },
    'パイレーツ': {
      'STR': 6,
      'TEC': 5,
      'VIT': 5,
      'AGI': 6,
      'LUC': 6
    },
    'シノビ': {
      'STR': 6,
      'TEC': 6,
      'VIT': 3,
      'AGI': 7,
      'LUC': 6
    },
    'モンク': {
      'STR': 6,
      'TEC': 6,
      'VIT': 5,
      'AGI': 6,
      'LUC': 3
    },
    'ゾディアック': {
      'STR': 3,
      'TEC': 6,
      'VIT': 4,
      'AGI': 4,
      'LUC': 6
    },
    'ビーストキング': {
      'STR': 6,
      'TEC': 5,
      'VIT': 5,
      'AGI': 4,
      'LUC': 7
    },
    'バリスタ': {
      'STR': 7,
      'TEC': 3,
      'VIT': 4,
      'AGI': 3,
      'LUC': 5
    },
    'ファーマー': {
      'STR': 4,
      'TEC': 3,
      'VIT': 4,
      'AGI': 3,
      'LUC': 7
    },
    'ショーグン': {
      'STR': 7,
      'TEC': 5,
      'VIT': 4,
      'AGI': 6,
      'LUC': 4
    },
    'ナイトシーカー': {
      'STR': 6,
      'TEC': 5,
      'VIT': 4,
      'AGI': 7,
      'LUC': 6
    },
    'フォートレス': {
      'STR': 5,
      'TEC': 5,
      'VIT': 7,
      'AGI': 3,
      'LUC': 5
    },
    'スナイパー': {
      'STR': 6,
      'TEC': 4,
      'VIT': 4,
      'AGI': 5,
      'LUC': 7
    },
    'ルーンマスター': {
      'STR': 3,
      'TEC': 7,
      'VIT': 4,
      'AGI': 4,
      'LUC': 5
    },
    'ダンサー': {
      'STR': 5,
      'TEC': 5,
      'VIT': 4,
      'AGI': 7,
      'LUC': 5
    },
    'ミスティック': {
      'STR': 3,
      'TEC': 6,
      'VIT': 4,
      'AGI': 4,
      'LUC': 6
    },
    'モノノフ': {
      'STR': 7,
      'TEC': 3,
      'VIT': 5,
      'AGI': 5,
      'LUC': 5
    },
    'インペリアル': {
      'STR': 7,
      'TEC': 5,
      'VIT': 7,
      'AGI': 4,
      'LUC': 3
    },
    'ハイランダー': {
      'STR': 7,
      'TEC': 3,
      'VIT': 6,
      'AGI': 5,
      'LUC': 4
    }
  }; //職業・ステータス全ての
  let error_message = ""

  //-------------変数作成--------------------------------------
  //**_talent＝才能値　**_grow＝成長値
  //HTMLのID名と紐づけて直接数値が送られてくる
  //select_mj="職業"
  //text1　=職業ステの見やすい文字列
  //str_total　合計値
  //str_b 【STR】B
  //ジョブ名・レベル
  let select_main_job = document.getElementById("main_job_list")
  let select_sub_job = document.getElementById("sub_job_list")
  let select_level = document.getElementById("level")
  //装備
  let weapon_list = document.getElementById("weapon_list")
  let weapon_rank = document.getElementById("weapon_rank")
  let armor_list = document.getElementById("armor_list")
  let armor_rank = document.getElementById("armor_rank")
  let ohter_rank = document.getElementById("other_list")
  let other_rank = document.getElementById("other_rank")
  //メインジョブ・サブジョブ・レベル　を文字列・数値に変換
  let select_mj = select_main_job.value
  let select_sj = select_sub_job.value
  let level = parseInt(select_level.value)
  //装備
  let w_list = weapon_list.value
  let w_rank = parseInt(weapon_rank.value)
  let a_list = armor_list.value
  let a_rank = parseInt(armor_rank.value)
  let o_list = other_list.value
  let o_rank = parseInt(other_rank.value)

  //鍛冶　武器鎧盾に各２個
  let w_forge1 = weapon_forge_list1.value
  let w_forge2 = weapon_forge_list2.value

  let a_forge1 = armor_forge_list1.value
  let a_forge2 = armor_forge_list2.value

  let o_forge1 = other_forge_list1.value
  let o_forge2 = other_forge_list2.value

  //---------------------------------------------------
  //武器ステータスリスト、ランク計算式を適用するため、ランク値を設定した後に処理
  let weapon_status = {
    '拳': {
      '射程': '近',
      '属性': '壊',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': level,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 0,
    },
    '拳マスタリー': {
      '射程': '近',
      '属性': '壊',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': level * 3 + 4,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 0,
    },
    '短剣': {
      '射程': '近',
      '属性': '斬',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 3,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 80 * Math.pow(w_rank, 2),
    },
    '剣': {
      '射程': '近',
      '属性': '斬',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 5,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '突剣': {
      '射程': '近',
      '属性': '突',
      '物理命中': 1,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 4,
      '属性攻撃': '0',
      '速度': 3,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '槍': {
      '射程': '近',
      '属性': '突',
      '物理命中': 1,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 5,
      '属性攻撃': '0',
      '速度': -3,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '斧': {
      '射程': '近',
      '属性': '壊',
      '物理命中': -1,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 6,
      '属性攻撃': '0',
      '速度': -4,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '杖': {
      '射程': '近',
      '属性': '壊',
      '物理命中': 0,
      '属性命中': 1,
      '物理攻撃': w_rank * 3 + 3,
      '属性攻撃': w_rank + 3,
      '速度': -4,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '鎚': {
      '射程': '近',
      '属性': '壊',
      '物理命中': -1,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 6,
      '属性攻撃': '0',
      '速度': -6,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '鞭': {
      '射程': '近',
      '属性': '斬',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 5,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 90 * Math.pow(w_rank, 2),
    },
    '刀': {
      '射程': '近',
      '属性': '斬',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 6,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 120 * Math.pow(w_rank, 2),
    },
    '砲剣': {
      '射程': '近',
      '属性': '斬',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 5,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 110 * Math.pow(w_rank, 2),
    },
    '農具(斬)': {
      '射程': '近',
      '属性': '斬',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 4,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 90 * Math.pow(w_rank, 2),
    },
    '農具(突)': {
      '射程': '近',
      '属性': '突',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 4,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 90 * Math.pow(w_rank, 2),
    },
    '農具(壊)': {
      '射程': '近',
      '属性': '壊',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 4,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 90 * Math.pow(w_rank, 2),
    },
    '弓': {
      '射程': '遠',
      '属性': '突',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 4,
      '属性攻撃': '0',
      '速度': 0,
      "価格": 100 * Math.pow(w_rank, 2),
    },
    '弩': {
      '射程': '遠',
      '属性': '突',
      '物理命中': -1,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 6,
      '属性攻撃': '0',
      '速度': -8,
      "価格": 110 * Math.pow(w_rank, 2),
    },
    '銃': {
      '射程': '遠',
      '属性': '突',
      '物理命中': 0,
      '属性命中': 0,
      '物理攻撃': w_rank * 3 + 5,
      '属性攻撃': '0',
      '速度': -4,
      "価格": 110 * Math.pow(w_rank, 2),
    }
  }
  //防具ステータスリスト
  let armor_status = {
    '－': {
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "価格": 0,
    },
    '服': {
      "防御": a_rank + 1,
      "回避": 0,
      "速度": 0,
      "価格": 80 * Math.pow(a_rank, 2)
    },
    '軽鎧': {
      "防御": a_rank * 2 + 2,
      "回避": 0,
      "速度": -3,
      "価格": 100 * Math.pow(a_rank, 2)
    },
    '重鎧': {
      "防御": a_rank * 3 + 3,
      "回避": -2,
      "速度": -6,
      "価格": 120 * Math.pow(a_rank, 2)
    },
  }
  //装飾ステータスリスト
  let other_status = {
    "－": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 0,
    },
    "盾": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": Math.floor((o_rank + 1) / 2),
      "回避": -1,
      "速度": -4,
      "効果": "",
      "価格": 70 * Math.pow(o_rank, 2)
    },
    "厚手の手袋": {
      "STR": 1,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 80,
    },
    "木彫りの髪飾り": {
      "STR": 0,
      "TEC": 1,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 80,
    },
    "革のベルト": {
      "STR": 0,
      "TEC": 0,
      "VIT": 1,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 80,
    },
    "ストラップシューズ": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 1,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 80,
    },
    "花のお守り": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 1,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 80,
    },
    "知識の書": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "エネミー識別判定に+1",
      "価格": 150,
    },
    "脱兎のお守り": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "逃走判定に+2",
      "価格": 200,
    },
    "百中ゴーグル": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 2,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 500,
    },
    "命のベルト": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 8,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
    "英気のオーブ": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 5,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
    "力の指輪": {
      "STR": 3,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
    "知恵のピアス": {
      "STR": 0,
      "TEC": 3,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
    "耐力の腕輪": {
      "STR": 0,
      "TEC": 0,
      "VIT": 3,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
    "俊足のお守り": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 3,
      "LUC": 0,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
    "運のネックレス": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 3,
      "物理命中": 0,
      "HP": 0,
      "TP": 0,
      "防御": 0,
      "回避": 0,
      "速度": 0,
      "効果": "",
      "価格": 1000,
    },
  }
  //武器鍛冶リスト
  let weapon_forge_status = {
    "－": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 0
    },
    "STR+1": {
      "STR": 1,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 50 * Math.pow(w_rank, 2)
    },
    "TEC+1": {
      "STR": 0,
      "TEC": 1,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 50 * Math.pow(w_rank, 2)
    },
    "VIT+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 1,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 50 * Math.pow(w_rank, 2)
    },
    "AGI+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 1,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 50 * Math.pow(w_rank, 2)
    },
    "LUC+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 1,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 50 * Math.pow(w_rank, 2)
    },
    "物理命中+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 1,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 100 * Math.pow(w_rank, 2)
    },
    "属性命中+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 1,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "",
      "価格": 100 * Math.pow(w_rank, 2)
    },
    "物理攻撃+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 1,
      "属性攻撃": 0,
      "属性": "",
      "価格": 80 * Math.pow(w_rank, 2)
    },
    "属性攻撃+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 1,
      "属性": "",
      "価格": 80 * Math.pow(w_rank, 2)
    },
    "炎属性付与": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "＋炎",
      "価格": 100 * Math.pow(w_rank, 2)
    },
    "氷属性付与": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "＋氷",
      "価格": 100 * Math.pow(w_rank, 2)
    },
    "雷属性付与": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "物理命中": 0,
      "属性命中": 0,
      "物理攻撃": 0,
      "属性攻撃": 0,
      "属性": "＋雷",
      "価格": 100 * Math.pow(w_rank, 2)
    }
  }
  //防具鍛冶リスト・盾と共有
  let armor_forge_status = {
    "－": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 0
    },
    "STR+1": {
      "STR": 1,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(a_rank, 2)
    },
    "TEC+1": {
      "STR": 0,
      "TEC": 1,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(a_rank, 2)
    },
    "VIT+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 1,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(a_rank, 2)
    },
    "AGI+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 1,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(a_rank, 2)
    },
    "LUC+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 1,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(a_rank, 2)
    },
    "防御+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 1,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 100 * Math.pow(a_rank, 2)
    },
    "速度+2": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 2,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 80 * Math.pow(a_rank, 2)
    },
    "炎耐性+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 1,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 120 * Math.pow(a_rank, 2)
    },
    "氷耐性+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 1,
      "雷耐性": 0,
      "価格": 120 * Math.pow(a_rank, 2)
    },
    "雷耐性+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 1,
      "価格": 120 * Math.pow(a_rank, 2)
    },

  }
  //盾専用鍛冶　盾ランクと鎧ランクが異なる時の価格だけいる
  //下に　盾装備していない時に鍛冶効果を無効化するif文がある
  let other_forge_status = {
    "－": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 0
    },
    "STR+1": {
      "STR": 1,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(o_rank, 2)
    },
    "TEC+1": {
      "STR": 0,
      "TEC": 1,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(o_rank, 2)
    },
    "VIT+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 1,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(o_rank, 2)
    },
    "AGI+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 1,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(o_rank, 2)
    },
    "LUC+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 1,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 50 * Math.pow(o_rank, 2)
    },
    "防御+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 1,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 100 * Math.pow(o_rank, 2)
    },
    "速度+2": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 2,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 80 * Math.pow(o_rank, 2)
    },
    "炎耐性+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 1,
      "氷耐性": 0,
      "雷耐性": 0,
      "価格": 120 * Math.pow(o_rank, 2)
    },
    "氷耐性+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 1,
      "雷耐性": 0,
      "価格": 120 * Math.pow(o_rank, 2)
    },
    "雷耐性+1": {
      "STR": 0,
      "TEC": 0,
      "VIT": 0,
      "AGI": 0,
      "LUC": 0,
      "防御": 0,
      "速度": 0,
      "炎耐性": 0,
      "氷耐性": 0,
      "雷耐性": 1,
      "価格": 120 * Math.pow(o_rank, 2)
    },
  }


  //---------------ifチェック--------------------------
  if (select_mj == select_sj) {
    //セレクトボックス0番目に変更（ＨＴＭＬの操作）
    select_sj = "－"
  }

  if (w_list == "拳" || w_list == "拳マスタリー") {
    //拳の時、鍛冶効果を無効にする
    w_forge1 = "－"
    w_forge2 = "－"
  }

  if (w_list == "拳" || w_list == "拳マスタリー") {
    //拳の時、鍛冶効果を無効にする
    w_forge1 = "－"
    w_forge2 = "－"
  }
  if (a_list == "－") {
    //鎧を装備してない時、鍛冶を無効にする
    a_forge1 = "－"
    a_forge2 = "－"
  }
  if (!(o_list == "盾")) {
    //盾装備時以外、鍛冶を無効にする
    o_forge1 = "－"
    o_forge2 = "－"
  }

  //---------------ステータス計算-----------------------
  let str_job = parseInt(nssq_status[select_mj]["STR"] * level)
  let tec_job = parseInt(nssq_status[select_mj]["TEC"] * level)
  let vit_job = parseInt(nssq_status[select_mj]["VIT"] * level)
  let agi_job = parseInt(nssq_status[select_mj]["AGI"] * level)
  let luc_job = parseInt(nssq_status[select_mj]["LUC"] * level)
  //各ステの合算
  //2～４行目まで鍛冶の加算が続いてます。
  let str_total = parseInt(str_job + parseInt(str_talent.value) + parseInt(str_grow.value) + other_status[o_list]["STR"]) +
    weapon_forge_status[w_forge1]["STR"] + weapon_forge_status[w_forge2]["STR"] +
    armor_forge_status[a_forge1]["STR"] + armor_forge_status[a_forge2]["STR"] +
    armor_forge_status[o_forge1]["STR"] + armor_forge_status[o_forge2]["STR"]

  let tec_total = parseInt(tec_job + parseInt(tec_talent.value) + parseInt(tec_grow.value) + other_status[o_list]["TEC"]) +
    weapon_forge_status[w_forge1]["TEC"] + weapon_forge_status[w_forge2]["TEC"] +
    armor_forge_status[a_forge1]["TEC"] + armor_forge_status[a_forge2]["TEC"] +
    armor_forge_status[o_forge1]["TEC"] + armor_forge_status[o_forge2]["TEC"]

  let vit_total = parseInt(vit_job + parseInt(vit_talent.value) + parseInt(vit_grow.value) + other_status[o_list]["VIT"]) +
    weapon_forge_status[w_forge1]["VIT"] + weapon_forge_status[w_forge2]["VIT"] +
    armor_forge_status[a_forge1]["VIT"] + armor_forge_status[a_forge2]["VIT"] +
    armor_forge_status[o_forge1]["VIT"] + armor_forge_status[o_forge2]["VIT"]

  let agi_total = parseInt(agi_job + parseInt(agi_talent.value) + parseInt(agi_grow.value) + other_status[o_list]["AGI"]) +
    weapon_forge_status[w_forge1]["AGI"] + weapon_forge_status[w_forge2]["AGI"] +
    armor_forge_status[a_forge1]["AGI"] + armor_forge_status[a_forge2]["AGI"] +
    armor_forge_status[o_forge1]["AGI"] + armor_forge_status[o_forge2]["AGI"]

  let luc_total = parseInt(luc_job + parseInt(luc_talent.value) + parseInt(luc_grow.value) + other_status[o_list]["LUC"]) +
    weapon_forge_status[w_forge1]["LUC"] + weapon_forge_status[w_forge2]["LUC"] +
    armor_forge_status[a_forge1]["LUC"] + armor_forge_status[a_forge2]["LUC"] +
    armor_forge_status[o_forge1]["LUC"] + armor_forge_status[o_forge2]["LUC"]
  //【STR】B値
  let str_b = Math.floor(str_total / 5)
  let tec_b = Math.floor(tec_total / 5)
  let vit_b = Math.floor(vit_total / 5)
  let agi_b = Math.floor(agi_total / 5)
  let luc_b = Math.floor(luc_total / 5)
  let hp = (vit_b * 2) + level + 5 + other_status[o_list]["HP"]
  let tp = tec_b + level + 3 + other_status[o_list]["TP"]
  let atk_hit = Math.floor((str_b + agi_b) / 2) + parseInt(weapon_status[w_list]["物理命中"] + other_status[o_list]["物理命中"] +
    weapon_forge_status[w_forge1]["物理命中"] + weapon_forge_status[w_forge2]["物理命中"])
  let magi_hit = Math.floor((tec_b + luc_b) / 2) + parseInt(weapon_status[w_list]["属性命中"] + weapon_forge_status[w_forge1]["属性命中"] + weapon_forge_status[w_forge2]["属性命中"])
  let avoid = Math.floor((agi_b + luc_b) / 2 + 5) + parseInt(armor_status[a_list]["回避"] + other_status[o_list]["回避"])
  let sick_atk = Math.floor((tec_b + luc_b) / 2)
  let sick_def = Math.floor((vit_b + luc_b) / 2)
  let def = 0 + parseInt(armor_status[a_list]["防御"] + other_status[o_list]["防御"] +
    armor_forge_status[a_forge1]["防御"] + armor_forge_status[a_forge2]["防御"] +
    armor_forge_status[o_forge1]["防御"] + armor_forge_status[o_forge2]["防御"])

  let fire_resist = 3 + parseInt(armor_forge_status[a_forge1]["炎耐性"] + armor_forge_status[a_forge2]["炎耐性"] +
    armor_forge_status[o_forge1]["炎耐性"] + armor_forge_status[o_forge2]["炎耐性"])

  let ice_resist = 3 + parseInt(armor_forge_status[a_forge1]["氷耐性"] + armor_forge_status[a_forge2]["氷耐性"] +
    armor_forge_status[o_forge1]["氷耐性"] + armor_forge_status[o_forge2]["氷耐性"])

  let thunder_resist = 3 + parseInt(armor_forge_status[a_forge1]["雷耐性"] + armor_forge_status[a_forge2]["雷耐性"] +
    armor_forge_status[o_forge1]["雷耐性"] + armor_forge_status[o_forge2]["雷耐性"])

  let atk = str_b + parseInt(weapon_status[w_list]["物理攻撃"]) + weapon_forge_status[w_forge1]["物理攻撃"] + weapon_forge_status[w_forge2]["物理攻撃"]
  let magi = tec_b + parseInt(weapon_status[w_list]["属性攻撃"]) + weapon_forge_status[w_forge1]["属性攻撃"] + weapon_forge_status[w_forge2]["属性攻撃"]
  let speed = agi_total + parseInt(weapon_status[w_list]["速度"]) + parseInt(armor_status[a_list]["速度"] + other_status[o_list]["速度"] +
    armor_forge_status[a_forge1]["速度"] + armor_forge_status[a_forge2]["速度"] +
    armor_forge_status[o_forge1]["速度"] + armor_forge_status[o_forge2]["速度"])
  if (speed < 0) {
    speed = 0
  }
  let skill_point = level * 3 + 2

  let init_price = (100 - (parseInt(str_talent.value) + parseInt(tec_talent.value) + parseInt(vit_talent.value) + parseInt(agi_talent.value) + parseInt(luc_talent.value))) * 10
  let weapon_price = parseInt(weapon_status[w_list]["価格"] +
    weapon_forge_status[w_forge1]["価格"] + weapon_forge_status[w_forge2]["価格"])
  let armor_price = parseInt(armor_status[a_list]["価格"] +
    armor_forge_status[a_forge1]["価格"] + armor_forge_status[a_forge2]["価格"])
  let other_price = parseInt(other_status[o_list]["価格"] +
    other_forge_status[o_forge1]["価格"] + other_forge_status[o_forge2]["価格"])
  let total_price = weapon_price + armor_price + other_price


  //---------------文字成型-----------------------
  let w_word = ""
  let a_word = ""
  let o_word = ""

  //||　：if文のor(AまたはB)
  //武器word
  if (w_list == "拳" || w_list == "拳マスタリー") {
    w_word = `${w_list}`
  } else {
    w_word = `R${w_rank}${w_list}`
  }
  //防具word
  if (a_list == "－") {
    a_word = "－"
  } else {
    a_word = `R${a_rank}${a_list}`
  }
  //装飾word
  if (o_list == "盾") {
    o_word = `R${o_rank}${o_list}`
  } else {
    o_word = `${o_list}`
  }

  /*鍛冶重複チェック*/
  if (w_forge1 == w_forge2) {
    //素手は全て"－"として扱うため、テストは他の武器で行う
    if (w_forge1 == "－") {} else {
      error_message = error_message + "　--Error：武器の鍛冶が重複しています!--\n"
    }
  }
  if (a_forge1 == a_forge2) {
    if (a_forge1 == "－") {} else {
      error_message = error_message + "　--Error：　鎧の鍛冶が重複しています!--\n"
    }
  }

  if (o_forge1 == o_forge2) {
    if (o_forge1 == "－") {} else {
      error_message = error_message + "　--Error：　盾の鍛冶が重複しています!--\n"
    }
  }

  //${変数}　\n改行　``(バッククォート：SHIFT+@キー)
  //let text1=""
  let p_check = document.getElementById("pallet_check")
  if (select_sj == "－") {
    force_word = "/★フォース"
  };
  if (p_check.checked) {
    /*チェックボックスがTrueなら。(p_check.checked === true)と同じ*/
    text1 = `${error_message}----ダイス----
2D+${atk_hit}　物理命中
2D+${magi_hit}　属性命中
${atk}b6>3　物理攻撃
${magi}b6>3　属性攻撃　
2D+${sick_atk}　抑制攻撃
2D+${sick_def}　抑制防御
2D+${str_b}　STR判定
2D+${tec_b}　TEC判定
2D+${vit_b}　VIT判定
2D+${agi_b}　AGI判定
2D+${luc_b}　LUC判定
${avoid}　回避
${def}　防御
----能力値----
【クラス】${select_mj}／${select_sj}
【Lv】${level}
【HP】${hp}
【TP】${tp}
【回避】${avoid}
【防御】${def}
【速度】${speed}
【武器】${w_word}
【物理命中】${atk_hit}
【属性命中】${magi_hit}
【物理攻撃】${atk}
【属性攻撃】${magi}
【抑制攻撃】${sick_atk}
【抑制防御】${sick_def}
【属性】${weapon_status[w_list]["属性"]}${weapon_forge_status[w_forge1]["属性"]}${weapon_forge_status[w_forge2]["属性"]}
【射程】${weapon_status[w_list]["射程"]}
【防具】${a_word}
【装飾】${o_word}
【耐性：炎】${fire_resist}
【耐性：氷】${ice_resist}
【耐性：雷】${thunder_resist}
【STR】${str_total}
【TEC】${tec_total}
【VIT】${vit_total}
【AGI】${agi_total}
【LUC】${luc_total}
【備考】${other_status[o_list]["効果"]}
----その他----
【スキルポイント】${skill_point}/コモン:1${force_word}
【初期所持金】${init_price}en
【装備価格】合計：${total_price}en
【装備価格：武器】武器：${weapon_price}en　
【装備価格：防具】${armor_price}en
【装備価格：装飾】${other_price}en
`
  } else {
    text1 = `${error_message}【${select_mj}／${select_sj}】
【STR】${str_total} 【TEC】${tec_total}
【VIT】${vit_total} 【AGI】${agi_total} 【LUC】${luc_total}

【Lv】${level}【HP】${hp} 【TP】${tp}
【回避】${avoid} 【防御】${def} 【速度】${speed}
【物理攻撃】${atk}【属性攻撃】${magi}
【物理命中】2D+${atk_hit}【属性命中】2D+${magi_hit}
【抑制攻撃】2D+${sick_atk} 【抑制防御】2D+${sick_def}
【武器】${w_word} 【属性】${weapon_status[w_list]["属性"]}${weapon_forge_status[w_forge1]["属性"]}${weapon_forge_status[w_forge2]["属性"]} 【射程】${weapon_status[w_list]["射程"]}
【防具】${a_word} 【装飾】${o_word}
【耐性】炎：${fire_resist}　氷：${ice_resist}　雷：${thunder_resist}
【STR判定】2D+${str_b} 【TEC判定】2D+${tec_b}
【VIT判定】2D+${vit_b}【AGI判定】2D+${agi_b}
【LUC判定】2D+${luc_b}
【備考】${other_status[o_list]["効果"]}

【スキルポイント】${skill_point} /コモン:1${force_word}
【初期所持金】${init_price}en
【装備価格】合計：${total_price}en
【装備価格】武器：${weapon_price}en　防具：${armor_price}en　装飾：${other_price}en
`
  };

  //textarea1への挿入処理
  let textarea1 = document.getElementById("textarea1")
  textarea1.value = text1 //+"\n"+text2 //innerHTMLだとtextareaはだめらしい


  //console.log(slect_mj+"　STR"+nssq_status[slect_mj]["STR"])
  //console.log("STR才能"+select_str_talent.value+"／STR成長"+select_str_grow.value)
};
