let current_plan = "months6";

const plans = {
  months3: {
    single_price: 500,
    multiple_price: 300,
    single_save: "save 60% per 3 months",
    multiple_save: "save 60% per 3 months",
  },
  months6: {
    single_price: 900,
    multiple_price: 600,
    single_save: "save 70% per 6 months",
    multiple_save: "save 70% per 6 months",
  },
  year1: {
    single_price: 1500,
    multiple_price: 1000,
    single_save: "save 80% per 6 months",
    multiple_save: "save 80% per 6 months",
  },
};

let payable = plans["months6"]["single_price"];

window.onload = () => {
  console.log(payable);
  Array.from(document.getElementsByClassName("type-data")).forEach((btn) => {
    btn.onclick = (e) => {
      toggle_plans(e.target.id);

      console.log(toggle_plans(e.target.id));
    };
  });

  Array.from(document.getElementsByClassName("pdinfo")).forEach((btn) => {
    btn.onclick = (e) => {
      toggle_plans(e.target.dataset["val"]);
    };
  });

  document.getElementById("pdiwt").onclick = (e) => {
    const pdiw = document.getElementById("pdiw");
    if (pdiw.style.display != "none") {
      pdiw.style.display = "none";
      e.target.children[0].classList.add("fa-caret-down");
      e.target.children[0].classList.remove("fa-caret-up");
      return;
    }
    pdiw.style.display = "block";
    e.target.children[0].classList.remove("fa-caret-down");
    e.target.children[0].classList.add("fa-caret-up");
  };
};

const toggle_plans = (id) => {
  let plan = plans[id];
  Array.from(document.getElementsByClassName("type-data")).forEach((btn) => {
    btn.classList.remove("activehr");
  });
  document.getElementById(id).classList.add("activehr");
  payable = plan["single_price"];
  change_data(plan);
  change_list(id);
};

const change_data = (plan) => {
  payable = plan["single_price"];
  document.getElementById("bgp").innerText = plan["single_price"];
  document.getElementById("bgs").innerText = plan["multiple_price"];
  document.getElementById("php").innerText = plan["single_save"];
  document.getElementById("phs").innerText = plan["multiple_save"];
};

const change_list = (id) => {
  Array.from(document.getElementsByClassName("pdinfo")).forEach((btn) => {
    btn.classList.remove("activepd");
  });
  elem = document.querySelector(`[data-val="${id}"]`);
  elem.classList.add("activepd");
};
