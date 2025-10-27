document.addEventListener('DOMContentLoaded', () => {
    const pro = document.getElementById("pro");
    const con1 = document.getElementById("con1");
    const con2 = document.getElementById("con2");
    const pro_t = document.getElementById("pro_t");
    const con1_t = document.getElementById("con1_t");
    const con2_t = document.getElementById("con2_t");


    setInterval(() => {

        // 생산자가 번식한다
        pro.value = Number(pro.value) * 1.25;

        // 1차 소비자가 생산자를 먹고 번식한다
        pro.value = Number(pro.value) - Number(con1.value) * 0.2;
        con1.value = Number(con1.value) + Number(con1.value) * Number(pro.value) / 7500;

        // 2차 소비자가 1차 소비자를 먹고 번식한다
        con1.value = Number(con1.value) - Number(con2.value) * 0.2;
        con2.value = Number(con2.value) + Number(con1.value) * Number(con2.value) / 7500;

        // 자연히 죽는다
        pro.value = Number(pro.value) * 0.9;
        con1.value = Number(con1.value) * 0.9;
        con2.value = Number(con2.value) * 0.9;

        // 숫자 표시
        pro_t.innerHTML = pro.value
        con1_t.innerHTML = con1.value
        con2_t.innerHTML = con2.value

    }, 30);
});

