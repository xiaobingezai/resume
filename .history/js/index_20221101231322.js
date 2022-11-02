var daoJiShi = document.querySelector('.daoJiShi');
            shiJian();
            function shiJian() {
                var time = new Date();
                var nian = time.getFullYear();
                var yue = time.getMonth();
                var ri = time.getDate();
                var h = time.getHours();
                var m = time.getMinutes();
                var s = time.getSeconds();
                var dangQianShiJian = '现在时间是：' + +nian + '年' + (yue + 1) + '月' + ri + '日' + h + '小时' + m + '分钟' + s + '秒' +
                    '。';
                daoJiShi.innerHTML = dangQianShiJian;
            }
            setInterval('shiJian()', 1000);