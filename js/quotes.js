const quotes = [
    {
        quote : "인생은 살이 쪘을 때와 안쪘을 때로 나뉜다.",
        author : "이소라"
    },
    {
        quote : "세 끼 다 먹으면 살쪄요.",
        author : "김사랑"
    },
    {
        quote : "죽을 만큼 운동하고 죽지 않을 만큼 먹었어요",
        author : "제시카"
    },
    {
        quote : "먹는거요? 귀찮아요",
        author : "김민희"
    },
    {
        quote : "먹어봤자 아는 그 맛이다",
        author : "옥주현"
    },
    {
        quote : "저는 하얀 음식은 절대 먹지 않아요. 그건 독이니까요.",
        author : "미란다 커"
    },
    {
        quote : "날씬한 것보다 달콤한 것은 없어요.",
        author : "케이트 모스"
    },
    {
        quote : "야식은 한 번도 먹어 본 적 없어요.",
        author : "김연아"
    },
    {
        quote : "나를 배부르게 하는 것들이 나를 파괴한다.",
        author : "안젤리나 졸리"
    },
    {
        quote : "제 의지로 바꿀 수 있는게 몸 밖에 없더라고요.",
        author : "한혜진"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;