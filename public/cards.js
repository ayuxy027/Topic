function showDesignCards() {
  var designCardsDiv = document.getElementById("design-cards");
  if (designCardsDiv.style.display === "block") {
    designCardsDiv.style.display = "none";
  } else {
    designCardsDiv.style.display = "block";
  }
  return -  <!-- Design Card 1 -->
  <div id="design-cards" class="hidden">
      <div id="card1-design" class="absolute ml-[10%] rounded-3xl bg-white w-[25%] h-[400px] shadow-2xl mt-[50px] transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
         <div class="mt-[5%] ml-[5%] mr-[20%] pointer-events-none">
          <h1 class="text-xl font-bold text-black">Web Design</h1>
          <p class="mt-2 leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      <img class="w-full h-[200px] object-contain mt-10" src="../assets/undraw_Remote_design_team_re_urdx.png" alt="">
  </div>
  <!--Design Card 2 -->
  <div id="card2-design" class="absolute ml-[40%] rounded-3xl bg-white w-[25%] h-[400px] shadow-2xl mt-[50px] transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
      <div class="mt-[5%] ml-[5%] mr-[20%] pointer-events-none">
          <h1 class="text-xl font-bold text-black">Graphic</h1>
          <p class="absolute mt-2 leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
          </p>
      </div>
      <img class="w-full h-[200px] object-contain absolute mt-[90px]" src="../assets/undraw_Redesign_feedback_re_jvm0.png" alt="">
  </div>
  <!--Design Card 3 -->
  <div id="card3-design" class="absolute ml-[70%] rounded-3xl bg-white w-[25%] h-[400px] shadow-2xl mt-[50px] transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
      <div class="mt-[5%] ml-[5%] mr-[20%] pointer-events-none">
          <h1 class="text-xl font-bold text-black">Logo Design</h1>
          <p class="mt-2 leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
          </p>
      </div>
      <img class="w-full h-[200px] object-contain absolute mt-10" src="../assets/colleagues-working-cozy-office-medium-shot.png" alt="">
  </div>
}
