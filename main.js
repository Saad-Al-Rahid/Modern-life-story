let faqQuestions = document.querySelectorAll(".faq__answar__question__card");

faqQuestions.forEach(function (faqQuestion) {
  faqQuestion.addEventListener("click", function () {
    faqQuestion.classList.toggle("active");
  });
});
