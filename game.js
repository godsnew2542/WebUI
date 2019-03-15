$(function () {
    var pru_day = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ];
    var pru_month = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var pru_name = ['นางฟ้า', 'สเมิร์ฟ', 'ต่างดาว', 'แมวน้ำ', 'พะยูน', 'ห้อย',
        'ถังแก็ส', 'หนูน้อย', 'หมูน้อย', 'เจ้าหญิง', 'นางอ้วน', 'คุณป้า', 'คุณหนู',
        'ขยะเปียก', 'ผีดิบ', 'เหม่ง', 'กระเทย', 'เฉวก๊วย', 'คุณนาย', 'หนูแหมบ', 'นางฟ้า', 'สเมิร์ฟ', 'ต่างดาว', 'แมวน้ำ', 'พะยูน', 'ห้อย',
        'ถังแก็ส', 'หนูน้อย', 'หมูน้อย', 'เจ้าหญิง', 'นางอ้วน', 'คุณป้า', 'คุณหนู',
        'ขยะเปียก', 'ผีดิบ', 'เหม่ง', 'กระเทย', 'เฉาก๊วย', 'คุณนาย', 'หนูแหมบ'
    ];
    var nopc = ['https://dailym.ai/2Hv56S6'];
    var sman = ['https://bit.ly/2UoDWjA', 'https://bit.ly/2NV10nv', 'https://bit.ly/2XOgePV', 'https://bit.ly/2Hbl1Wq',
        'https://bit.ly/2CcPnnn', 'https://bit.ly/2TryjVf', 'https://bit.ly/2EVoq8f', 'https://bit.ly/2O0rbJT',
        'https://bit.ly/2HpF6aM', 'https://bit.ly/2UtjMVP', 'https://bit.ly/2VQCPtn', 'https://bit.ly/2VNc88L',
        'https://apple.co/2VNprGg', 'https://bit.ly/2TJS1Lg', 'https://bit.ly/2TCVDPq', 'https://bit.ly/2TCVE5W',
        'https://bit.ly/2CcPnnn', 'https://bit.ly/2TryjVf', 'https://bit.ly/2EVoq8f', 'https://bit.ly/2O0rbJT'
    ]; //20
    var swoman = ['https://bit.ly/2CcPnnn', 'https://bit.ly/2TryjVf', 'https://bit.ly/2EVoq8f', 'https://bit.ly/2O0rbJT',
        'https://bit.ly/2HpF6aM', 'https://bit.ly/2UtjMVP', 'https://apple.co/2VNprGg', 'https://bit.ly/2TJS1Lg',
        'https://bit.ly/2Hoq7y6', 'https://bit.ly/2VPPDjt', 'https://bit.ly/2HphPWC', 'https://bit.ly/2VPeQKS',
        'https://bit.ly/2CcUcxb', 'https://bit.ly/2EYgRPm', 'https://bit.ly/2F0l3yj', 'https://bit.ly/2SURbHf',
        'https://bit.ly/2TFMNjI', 'https://bit.ly/2EOdUj7', 'https://bit.ly/2EYHPGx', 'https://bit.ly/2Cc8Jt4'
    ]; //20
    $('#go').click(function () {
        var day = $('.day').val();
        var month = $('.month').val();
        var s = $('.sex').val();
        var rdm = Math.floor(Math.random() * 39);
        var rdm1 = Math.floor(Math.random() * 19);
        var result = 'วันเกิดของคุณคือ : ' + pru_day[day - 1] + " " + pru_month[month - 1];
        var feer = 'ฉายาที่คุณจะได้รับมาจากแฟนคุณ : ';
        var feer1 = pru_name[rdm];
        if (day == 0) {
            alert("กรุณาเลือกวันเกิดของคุณ")
        } else if (month == 0) {
            alert("กรุณาเลือกเดือนเกิดของคุณ")
        } else if (month == 2) {
            if (day >= 29) {
                alert("ไม่มีวันที่คุณเลือก")
            } else if (day <= 28) {
                if (s != 1 && s != 2) {
                    document.getElementById('myImage').src = nopc[0];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 2) {
                    document.getElementById('myImage').src = sman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 1) {
                    document.getElementById('myImage').src = swoman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                }
            }

        } else if (month == 4) {
            if (day == 31) {
                alert("ไม่มีวันที่คุณเลือก")
            } else if (day <= 30) {
                if (s != 1 && s != 2) {
                    document.getElementById('myImage').src = nopc[0];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 2) {
                    document.getElementById('myImage').src = sman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 1) {
                    document.getElementById('myImage').src = swoman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                }
            }
        } else if (month == 6) {
            if (day == 31) {
                alert("ไม่มีวันที่คุณเลือก")
            } else if (day <= 30) {
                if (s != 1 && s != 2) {
                    document.getElementById('myImage').src = nopc[0];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 2) {
                    document.getElementById('myImage').src = sman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 1) {
                    document.getElementById('myImage').src = swoman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                }
            }
        } else if (month == 9) {
            if (day == 31) {
                alert("ไม่มีวันที่คุณเลือก")
            } else if (day <= 30) {
                if (s != 1 && s != 2) {
                    document.getElementById('myImage').src = nopc[0];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 2) {
                    document.getElementById('myImage').src = sman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 1) {
                    document.getElementById('myImage').src = swoman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                }
            }
        } else if (month == 11) {
            if (day == 31) {
                alert("ไม่มีวันที่คุณเลือก")
            } else if (day <= 30) {
                if (s != 1 && s != 2) {
                    document.getElementById('myImage').src = nopc[0];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 2) {
                    document.getElementById('myImage').src = sman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                } else if (s != 0 && s != 1) {
                    document.getElementById('myImage').src = swoman[rdm1];
                    $('#show').text(result);
                    $('#show2').text(feer);
                    $('#show3').text(feer1);
                }
            }
        } else if (s != 1 && s != 2) {
            document.getElementById('myImage').src = nopc[0];
            $('#show').text(result);
            $('#show2').text(feer);
            $('#show3').text(feer1);
        } else if (s != 0 && s != 2) {
            document.getElementById('myImage').src = sman[rdm1];
            $('#show').text(result);
            $('#show2').text(feer);
            $('#show3').text(feer1);
        } else if (s != 0 && s != 1) {
            document.getElementById('myImage').src = swoman[rdm1];
            $('#show').text(result);
            $('#show2').text(feer);
            $('#show3').text(feer1);
        }
    });
});