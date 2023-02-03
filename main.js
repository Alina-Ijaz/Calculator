
    function display(val) {
      return document.getElementById('result').value += val;
    }
    function pressAllClear() {
      document.getElementById("result").value = "";
    }
    function pressEqual() {
      var a = document.getElementById("result").value;
      var b = eval(a);
      document.getElementById("result").value = b;
    }
    

