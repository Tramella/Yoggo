//Header hamburger

$(document).ready(() =>{
  $(".hamburger").click(()=>{
    $(".side-menu").addClass("open-menu");
     $("body").addClass("no-scroll");
  });

  $(".side-menu .logo img:nth-child(2)").click(() => {
      $(".side-menu").removeClass("open-menu");
       $("body").removeClass("no-scroll");
    });
})
//
// $(document).on("click", ".toggleWhy", function () {
//   const $thisWhy = $(this).closest(".EachWhy");
//   const content = $thisWhy.find(".WhyUsContent, .WhyUsContent1");
//   const icon = $thisWhy.find(".icon-drop");
//   const isOpen = content.hasClass("open");

//   // Đóng tất cả
//   $(".WhyUsContent, .WhyUsContent1").removeClass("open");
//   $(".icon-drop").attr("src", "./images/Add.png");

//   // Mở phần hiện tại nếu đang đóng
//   if (!isOpen) {
//     content.addClass("open");
//     icon.attr("src", "./images/Minus1.png");
//   }
// });
$(document).ready(function () {
  $(".language").on("mouseenter", function () {
    const $lang = $(this);
    const isSelected = $lang.hasClass("selected");
    const inHeader = $lang.closest("header").length > 0;

    if (isSelected) {
      $lang.find(".lang-vn").css("top", "40px");
      $lang.find(".lang-en").css("top", "0");
    } else {
      $lang.find(".lang-en").css("top", "40px");
      $lang.find(".lang-vn").css("top", "0");
    }

    // Kiểm tra vị trí và set màu tương ứng
    if (inHeader) {
      $lang.css({
        "background-color": "black",
        "color": "white"
      });
    } else {
      $lang.css({
        "background-color": "white",
        "color": "black"
      });
    }
  });

  $(".language").on("mouseleave", function () {
    const $lang = $(this);
    const isSelected = $lang.hasClass("selected");
    const inHeader = $lang.closest("header").length > 0;

    if (isSelected) {
      $lang.find(".lang-en").css("top", "40px");
      $lang.find(".lang-vn").css("top", "0");

      // Nếu là trong side-menu thì chữ trắng (giữ màu active)
      if (!inHeader) {
        $lang.css({
          "background-color": "transparent",
          "color": "white"
        });
      } else {
        $lang.css({
          "background-color": "transparent",
          "color": "black"
        });
      }
    } else {
      $lang.find(".lang-en").css("top", "0");
      $lang.find(".lang-vn").css("top", "-40px");

      $lang.css({
        "background-color": "transparent",
        "color": "black"
      });
    }
  });

  $(".language").on("click", function () {
    const $lang = $(this);
    const isSelected = $lang.hasClass("selected");
    const inHeader = $lang.closest("header").length > 0;

    $lang.toggleClass("selected");

    if (!isSelected) {
      $lang.find(".lang-en").css("top", "40px");
      $lang.find(".lang-vn").css("top", "0");

      // Nếu trong side-menu thì chữ trắng khi active
      if (!inHeader) {
        $lang.css({
          "background-color": "transparent",
          "color": "white"
        });
      }
    } else {
      $lang.find(".lang-en").css("top", "0");
      $lang.find(".lang-vn").css("top", "-40px");

      $lang.css({
        "background-color": "transparent",
        "color": "white"
      });
    }
  });
});

//Toggle Why
$(document).ready(function () {
  $(".toggleWhy, .icon-drop").click(function () {
    const $thisWhy = $(this).closest(".EachWhy");
    const $content = $thisWhy.find(".WhyUsContent, .WhyUsContent1");
    const $icon = $thisWhy.find(".icon-drop");
    const isOpen = $content.hasClass("open");

    // Đóng tất cả
    $(".WhyUsContent, .WhyUsContent1").each(function () {
      closeContent($(this));
      $(this).removeClass("open");
    });
    $(".icon-drop").attr("src", "./images/Add.png");

    if (!isOpen) {
      openContent($content);
      $content.addClass("open");
      $icon.attr("src", "./images/Minus1.png");
    }
  });

  function openContent($content) {
    $content.css("height", "auto");
    const height = $content[0].scrollHeight;
    $content.css("height", "0px");
    requestAnimationFrame(() => {
      $content.css("height", height + "px");
    });
    setTimeout(() => {
      $content.css("height", "auto");
    }, 400);
  }

  function closeContent($content) {
    const height = $content[0].scrollHeight;
    $content.css("height", height + "px");
    requestAnimationFrame(() => {
      $content.css("height", "0px");
    });
  }

  // ⭐ Mở mặc định cái đầu tiên
  const $firstWhy = $(".EachWhy").first();
  const $firstContent = $firstWhy.find(".WhyUsContent, .WhyUsContent1");
  const $firstIcon = $firstWhy.find(".icon-drop");

  openContent($firstContent);
  $firstContent.addClass("open");
  $firstIcon.attr("src", "./images/Minus1.png");
});



//Scheduler


const timeSlots = [
  "9:00 AM - 10:00 AM",
  "12:00 AM - 1:00 PM",
  "3:00 PM - 4:00 PM",
  "6:00 PM - 7:00 PM",
];

const classData = [
  // Sunday (2025-06-15)
  { date: "2025-06-15", time: "9:00 AM - 10:00 AM", subject: "HATHA", classType: "GROUP" },
  { date: "2025-06-15", time: "12:00 AM - 1:00 PM", subject: "VINYASA", classType: "INDIVIDUAL" },
  { date: "2025-06-15", time: "3:00 PM - 4:00 PM", subject: "YIN", classType: "ONLINE" },

  // Monday (2025-06-09)
  { date: "2025-06-09", time: "9:00 AM - 10:00 AM", subject: "VINYASA", classType: "ONLINE" },
  { date: "2025-06-09", time: "3:00 PM - 4:00 PM", subject: "HATHA", classType: "GROUP" },
  { date: "2025-06-09", time: "6:00 PM - 7:00 PM", subject: "YIN", classType: "INDIVIDUAL" },

  // Tuesday (2025-06-10)
  { date: "2025-06-10", time: "9:00 AM - 10:00 AM", subject: "YIN", classType: "GROUP" },
  { date: "2025-06-10", time: "12:00 AM - 1:00 PM", subject: "HATHA", classType: "INDIVIDUAL" },
  { date: "2025-06-10", time: "6:00 PM - 7:00 PM", subject: "VINYASA", classType: "ONLINE" },

  // Wednesday (2025-06-11)
  { date: "2025-06-11", time: "9:00 AM - 10:00 AM", subject: "VINYASA", classType: "INDIVIDUAL" },
  { date: "2025-06-11", time: "12:00 AM - 1:00 PM", subject: "YIN", classType: "ONLINE" },
  { date: "2025-06-11", time: "6:00 PM - 7:00 PM", subject: "HATHA", classType: "GROUP" },

  // Thursday (2025-06-12)
  { date: "2025-06-12", time: "9:00 AM - 10:00 AM", subject: "YIN", classType: "GROUP" },
  { date: "2025-06-12", time: "3:00 PM - 4:00 PM", subject: "VINYASA", classType: "ONLINE" },
  { date: "2025-06-12", time: "6:00 PM - 7:00 PM", subject: "HATHA", classType: "INDIVIDUAL" },

  // Friday (2025-06-13)
  { date: "2025-06-13", time: "9:00 AM - 10:00 AM", subject: "HATHA", classType: "ONLINE" },
  { date: "2025-06-13", time: "12:00 AM - 1:00 PM", subject: "VINYASA", classType: "GROUP" },
  { date: "2025-06-13", time: "6:00 PM - 7:00 PM", subject: "YIN", classType: "INDIVIDUAL" },

  // Saturday (2025-06-14)
  { date: "2025-06-14", time: "9:00 AM - 10:00 AM", subject: "YIN", classType: "GROUP" },
  { date: "2025-06-14", time: "12:00 AM - 1:00 PM", subject: "HATHA", classType: "INDIVIDUAL" },
  { date: "2025-06-14", time: "3:00 PM - 4:00 PM", subject: "VINYASA", classType: "ONLINE" },
  // Monday (2025-06-14)
   { date: "2025-06-16", time: "9:00 AM - 10:00 AM", subject: "YIN", classType: "GROUP" },
  { date: "2025-06-16", time: "12:00 AM - 1:00 PM", subject: "HATHA", classType: "INDIVIDUAL" },
  { date: "2025-06-16", time: "3:00 PM - 4:00 PM", subject: "VINYASA", classType: "ONLINE" },
];


let selectedStyle = localStorage.getItem("selectedStyle") || "HATHA";
let selectedClassType = localStorage.getItem("selectedClassType") || "GROUP";
let weekOffset = 0;

function getWeekDates(offset = 0) {
  const isMobile = window.innerWidth < 800;
  const today = new Date();
  const base = new Date(today);

  if (isMobile) {
    base.setDate(today.getDate() + offset * 2); // chỉ tăng 2 ngày mỗi lần
    const tomorrow = new Date(base);
    tomorrow.setDate(base.getDate() + 1);
    return [
      { name: "Today", date: base.getDate(), full: base },
      { name: "Tomorrow", date: tomorrow.getDate(), full: tomorrow }
    ];
  } else {
    base.setDate(today.getDate() + offset * 7); // desktop vẫn tăng 7 ngày mỗi lần
    const monday = new Date(base);
    monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days.map((name, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return { name, date: d.getDate(), full: d };
    });
  }
}


function updateWeekRangeText(week) {
  const start = week[0].full.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }).toUpperCase();
  const end = week[week.length - 1].full.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }).toUpperCase();
  $("#week-range").text(`${start} - ${end}`);
}

function renderSchedule() {
  const week = getWeekDates(weekOffset);
  const $header = $(".HeaderSchedule").empty();
  const $body = $("#schedule-body").empty();

  // Render header
  week.forEach((day) => {
    $header.append(`<div class="day-header">
      <div class="dayOfWeek">${day.name}</div>
      <div class="noDate">${day.date}</div>
    </div>`);
  });

  updateWeekRangeText(week);

  // Render body
  for (let t = 0; t < timeSlots.length; t++) {
    for (let i = 0; i < week.length; i++) {
      const dayObj = week[i];
      const dayStr = dayObj.full.toISOString().split("T")[0]; // YYYY-MM-DD

      const found = classData.find(
        (c) =>
          c.date === dayStr &&
          c.time === timeSlots[t] &&
          c.subject === selectedStyle &&
          c.classType === selectedClassType
      );

      if (found) {
        $body.append(`<div class="schedule-cell">
          <div class="schedule-time">${found.time}</div>
          <div class="schedule-subject">${found.subject}</div>
          <div class="btn-book">BOOK</div>
        </div>`);
      } else {
        $body.append(`<div class="schedule-cell"></div>`);
      }
    }
  }
}


$(document).ready(function () {
  $(".selectedValueStyle").text(selectedStyle);
  $(".selectedValueClass").text(selectedClassType);

  $(".style-types .option").click(function () {
    selectedStyle = $(this).text();
    $(".selectedValueStyle").text(selectedStyle);
    localStorage.setItem("selectedStyle", selectedStyle);
    renderSchedule();
  });

  $(".class-types .option").click(function () {
    selectedClassType = $(this).text();
    $(".selectedValueClass").text(selectedClassType);
    localStorage.setItem("selectedClassType", selectedClassType);
    renderSchedule();
  });

  $("#prev-week").click(() => {
    weekOffset -= 1;
    renderSchedule();
  });

  $("#next-week").click(() => {
    weekOffset += 1;
    renderSchedule();
  });

  renderSchedule();
});

// Rerender schedule on window resize (for responsive behavior)
window.addEventListener("resize", () => {
  renderSchedule();
});



/* Show Form*/
$(document).ready(function () {
  $("#jBookClass").on("click", function () {
    $(".FromBookClass").addClass("openBook");
    // $("body").addClass("no-scroll");
  });
  $(".jCloseBtn").on("click", function () {
    $(".FromBookClass").removeClass("openBook");
    // $("body").removeClass("no-scroll");
  });
});

/* Event Onchange for Input */

$(document).ready(function () {
  $(".InputForm input").on("input", function () {
    const $closeBtn = $(this).siblings(".jcloseForm");
    $closeBtn.toggle($(this).val().trim() !== "");
  });

  $(".InputForm .jcloseForm").on("click", function () {
    const $input = $(this).siblings("input");
    $input.val("").trigger("input");
  });
});

// Drop List in Form
$(document).ready(function () {
  $(".EachSelect").on("click", function (e) {
    e.stopPropagation();
    $(".DropList, .DropList1").hide();
    $(this).find(".DropList, .DropList1").toggle();
  });

  $(".DropList .option, .DropList1 .option").on("click", function (e) {
    e.stopPropagation();
    const selected = $(this).text();
    $(this).closest(".EachSelect").find(".selectedValue").text(selected); 
    $(this).parent().hide(); 
  });

  $(document).on("click", function () {
    $(".DropList, .DropList1").hide(); 
  });
});

// Hover change arrove Try class


$(document).ready(function () {
  $(".SectionBook button").on("mouseenter", function () {
    $(this).find(".arrow-img").attr("src", "./images/Right_Arrow_Hover.png");
  });

  $(".SectionBook button").on("mouseleave", function () {
    $(this).find(".arrow-img").attr("src", "./images/Right_Arrow.png");
  });
});





