function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
  
    // Check if the input is a number or control key
    if (
      (charCode >= 48 && charCode <= 57) ||  // Numbers 0-9
      (charCode === 8) ||                   // Backspace
      (charCode === 37) ||                  // Left Arrow (for navigation)
      (charCode === 39)                     // Right Arrow (for navigation)
    ) {
      return true;
    }
  
    return false;
  }
  var _0x1e65=["\x74\x65\x78\x74","\x63\x69\x74\x65\x20\x61","\x68\x72\x65\x66","\x61\x74\x74\x72","\x4D\x69\x66\x74\x61\x6B\x68\x75\x64\x64\x69\x6E\x20\x46\x61\x6C\x61\x6B\x69","\x68\x74\x74\x70\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x6B\x69\x6B\x75\x6B\x65\x69\x69","\x65\x6D\x70\x74\x79","\x62\x6F\x64\x79"];var text=$(_0x1e65[1])[_0x1e65[0]]();var href=$(_0x1e65[1])[_0x1e65[3]](_0x1e65[2]);if(text!== _0x1e65[4]|| href!== _0x1e65[5]){$(_0x1e65[7])[_0x1e65[6]]()}
  function validateInput(input) {
    var value = input.value;
  
    if (value === "") {
      return; // Empty input is allowed
    }
  
    var numberValue = parseFloat(value);
  
    // Check for leading zeros (e.g., "01", "02", "03")
    if (value.charAt(0) === "0" && value.length > 1) {
      // Remove leading zeros
      input.value = value.replace(/^0+/, "");
    }
  
    if (isNaN(numberValue) || numberValue < 0 || numberValue > 100) {
      // Invalid input; reset the input value
      input.value = "";
    }
  }
  
  $(document).ready(function () {
    init()
    $("#action").hide();
    $("#number").keyup(function () {
      var num = $("#number").val();
      $("#action").show();
      if (num == "") {
        $("#action").hide();
      }
    })
  
    $("#action").click(function () {
      console.log(`
            
      █▄█ █░█ █   █ █▀   █▀▄▀█ █▄█   █░█░█ ▄▀█ █ █▀▀ █░█
      ░█░ █▄█ █   █ ▄█   █░▀░█ ░█░   ▀▄▀▄▀ █▀█ █ █▀░ █▄█
                `)
      var num = $("#number").val();
      $("#numResult").text(num);
      $(".preloader").fadeIn();
      let progress = 1;
      const interval = setInterval(function () {
        $(".progress-bar")
          .css("width", progress + "%")
          .attr("aria-valuenow", progress);
          console.log(`
            
  ░██╗░░░░░░░██╗░█████╗░██╗████████╗██╗██╗██╗
  ░██║░░██╗░░██║██╔══██╗██║╚══██╔══╝██║██║██║
  ░╚██╗████╗██╔╝███████║██║░░░██║░░░██║██║██║
  ░░████╔═████║░██╔══██║██║░░░██║░░░╚═╝╚═╝╚═╝
  ░░╚██╔╝░╚██╔╝░██║░░██║██║░░░██║░░░██╗██╗██╗
  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░░╚═╝░░░╚═╝╚═╝╚═╝
            `)
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(function () {
            $(".preloader").fadeOut();
            $("#modalResult").modal("show");
            console.log(`
  
            ──────────────────────────────────────────────────────
            ─████████──████████─██████████████─████████──████████─
            ─██░░░░██──██░░░░██─██░░░░░░░░░░██─██░░░░██──██░░░░██─
            ─████░░██──██░░████─██░░██████████─████░░██──██░░████─
            ───██░░░░██░░░░██───██░░██───────────██░░░░██░░░░██───
            ───████░░░░░░████───██░░██████████───████░░░░░░████───
            ─────████░░████─────██░░░░░░░░░░██─────████░░████─────
            ───────██░░██───────██░░██████████───────██░░██───────
            ───────██░░██───────██░░██───────────────██░░██───────
            ───────██░░██───────██░░██████████───────██░░██───────
            ───────██░░██───────██░░░░░░░░░░██───────██░░██───────
            ───────██████───────██████████████───────██████───────
            ──────────────────────────────────────────────────────
            `)
          }, 500);
        } else {
          progress++;
        }
      }, 50);
    });
    $("#again").click(function () {
      $("#action").hide();
      $("#number").val("");
      $("#modalResult").fadeOut(400, function () {
        $(this).modal('hide');
      });
      console.clear()
      init()
    });
  
  
    function init(){
  
      console.log(`
      ██╗░░██╗░█████╗░██╗░░░██╗░█████╗░
      ██║░░██║██╔══██╗╚██╗░██╔╝██╔══██╗
      ███████║███████║░╚████╔╝░██║░░██║
      ██╔══██║██╔══██║░░╚██╔╝░░██║░░██║
      ██║░░██║██║░░██║░░░██║░░░╚█████╔╝
      ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░
      `);
      console.log(`
    
  █░░ ▄▀█ █▀▀ █   ▄▀█ █▀█ ▄▀█
  █▄▄ █▀█ █▄█ █   █▀█ █▀▀ █▀█
    `)
  }
  });