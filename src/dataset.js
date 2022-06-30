const defaultDataset = {
    "init": {
        answers: [
            {content: "遊びたい！", nextId: "offer"},
            {content: "相談したい！", nextId: "consultant"},
            {content: "一緒に勉強したい！", nextId: "study"},
            {content: "別に用事はない。", nextId: "dating"},
        ],
        question: "こんにちは！えもんへのご用件はなんでしょうか？😊",
    },
    "offer": {
        answers: [
            {content: "近場で遊ぶ", nextId: "offer_a"},
            {content: "遠出する", nextId: "offer_b"},
        ],
        question: "お出かけしましょう！！🚗どこらへんで遊びたいですか？😆",
    },
    "offer_a": {
        answers: [
            {content: "お茶かご飯", nextId: "offer_c"},
            {content: "ゲーム大会", nextId: "offer_c"},
            {content: "ドライブ",　nextId: "offer_c"},
            {content: "水族館",　nextId: "offer_c"},
        ],
        question: "近場ですね！えもんと何して遊びたいですか？😊",
    },
    "offer_b": {
        answers: [
            {content: "ディズニーランド or シー", nextId: "offer_c"},
            {content: "ユニバーサルスタジオジャパン", nextId: "offer_c"},
            {content: "草津温泉",　nextId: "offer_c"},
            {content: "軽井沢",　nextId: "offer_c"},
        ],
        question: "遠出ですね！えもんと何して遊びたいですか？😊",
    },
    "offer_c": {
        answers: [
            {content: "予約を取り消す", nextId: "offer_d"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "分かりました！予約を受付ました！楽しみにしてますね！🥳💖", 
    },
    "offer_d": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "それはできぬ相談じゃ。。。", 
    },
    "consultant": {
        answers: [
            {content: "仕事の悩み", nextId: "consultant_a"},
            {content: "恋愛の悩み", nextId: "consultant_b"},
            {content: "人生の悩み", nextId: "consultant_c"},
        ],
        question: "何か悩みがあるんですね？何について悩んでいるんですか？🧐",
    },
    "consultant_a": {
        answers: [
            {content: "具体的なアドバイスが欲しい", nextId: "consultant_d"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "仕事の悩みですね！そんな君にこんな名言を授けましょう。「あなたのことはあなたの胸が知っているもんよ「どっちが楽しいか」で決めなさい」",
    },
    "consultant_b": {
        answers: [
            {content: "具体的なアドバイスが欲しい", nextId: "consultant_d"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "恋愛の悩みですね！そんな君にこんな名言を授けましょう。「身を削るだけの恋愛ならやめたほうがいい。」",
    },
    "consultant_c": {
        answers: [
            {content: "具体的なアドバイスが欲しい", nextId: "consultant_d"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "人生の悩みですね！そんな君にこんな名言を授けましょう。「この･･･腰抜け共め･･･いいから黙って全部オレに投資しろ！！」",
    },
    "consultant_d": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "答えは己が知っておる。自分の心に従うのじゃ。🤡",
    },
    "study": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ごめん。今、勉強する気分じゃないの。出直してくれる？🙁",
    },
    "dating": {
        answers: [
            {content: "無視する", nextId: "ignore"},
            {content: "ちょっと無視する", nextId: "ignore"},
            {content: "かなり無視する", nextId: "ignore"},
        ],
        question: "えー。そんなー。かまってよー。",
    },
    "ignore": {
        answers: [
            {content: "なぐさめる", nextId: "ignore_a"},
            {content: "よしよしする", nextId: "ignore_a"},
            {content: "ギューする", nextId: "ignore_a"},
        ],
        question: "ぴえん。。。🥺",
    },
    "ignore_a": {
        answers: [
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "許！！！🥰",
    },
}

export default defaultDataset