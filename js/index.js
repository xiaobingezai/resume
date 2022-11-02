let daoJiShi = document.querySelector('.daoJiShi');
            shiJian();
            function shiJian() {
                let time = new Date();
                let nian = time.getFullYear();
                let yue = time.getMonth();
                let ri = time.getDate();
                let h = time.getHours();
                let m = time.getMinutes();
                let s = time.getSeconds();
                let dangQianShiJian = '现在时间是：' + +nian + '年' + (yue + 1) + '月' + ri + '日' + h + '小时' + m + '分钟' + s + '秒' +
                    '。';
                daoJiShi.innerHTML = dangQianShiJian;
            }
            setInterval('shiJian()', 1000);