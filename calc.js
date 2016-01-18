var strEmpty = "";

$(document).ready(function () {
    $("button.op").click(function () {
        var btn = $(this).html();
        console.log($(answer).val());
        $(answer).val($(answer).val() + btn);
        console.log($(answer).val());
        $(answer).focus();

    });

    $("button.op_bck").click(function () {
        var str = $(answer).val();
        $(answer).val(str.substring(0, str.length - 1));
        $(answer).focus();

    });

    $("button.op_clr").click(function () {
        $(answer).val(strEmpty);
        $(answer).focus();

    });

    $("button.op_return").click(function () {
        var inputBox = $(answer);
        var arrVal;
        var x1;
        var x2;
        var retVal = "ERROR! CHECK INPUT";

        arrVal = inputBox.val().split(/[+-\/*%]+/);
        if (arrVal.length > 2) { inputBox.val(retVal); return; }

        x1 = parseFloat(arrVal[0]);
        x2 = parseFloat(arrVal[1]);

        if (inputBox.val().indexOf('+') >= 0) { retVal = x1 + x2; }
        else if (inputBox.val().indexOf('-') >= 0) { retVal = x1 - x2; }
        else if (inputBox.val().indexOf('*') >= 0) { retVal = x1 * x2; }
        else if (inputBox.val().indexOf('/') >= 0) { retVal = x1 / x2; }
        else if (inputBox.val().indexOf('%') >= 0) { retVal = x1 % x2; }
        else { }

        inputBox.val(retVal);
        inputBox.focus();
    });

    $("button.command").click(function () {
        var inputBox = $(answer);
        var x = parseFloat(inputBox.val());
        var retVal = "ERROR";

        switch (this.id) {
            case 'sign': retVal = -x; break;       // +/-
            case 'inv': retVal = 1 / x; break;        // 1/X
            case 'sqr': retVal = x * x; break;         // X^2
            case 'sqrt': retVal = Math.sqrt(x); break;  // SQRT(X)
            case 'cube': retVal = x * x * x; break;       // X^3
            case 'cbrt': var tmp = 1 / 3; retVal = Math.pow(x, tmp); break; // POW (X, 1/3)
            case 'log': retVal = Math.log(x); break;      // LOG (N) - NATURAL
            case 'exp': retVal = Math.exp(x); break;      // E^(X)
            case 'sin': retVal = Math.sin(x); break;      // SIN(X)
            case 'cos': retVal = Math.cos(x); break;    // COS(X)
            case 'tan': retVal = Math.tan(x); break;       // TAN(X)
            case 'pow': var y = parseFloat(inputBox.val()); retVal = Math.pow(x,y); break;  // pow(x,y)
            default: break;
        }
        inputBox.val(retVal);
        inputBox.focus();
    });
});
