const blog1 = {
  _id: "blog001",
  title: "I love.....",
  content: "No, i dont love you",
};

const blog2 = {
  _id: "blog002",
  title: "Bí quyết dậy sớm mỗi ngày",
  content: "Đặt 10 cái báo thức và hy vọng điều tốt nhất.",
};

const blog3 = {
  _id: "blog003",
  title: "Kế hoạch làm việc hôm nay",
  content: "Uống cà phê. Nhìn vào màn hình. Uống thêm cà phê.",
};

const blog4 = {
  _id: "blog004",
  title: "Suy ngẫm về cuộc sống...",
  content: "Tối nay ăn gì nhỉ?",
};

const blog5 = {
  _id: "blog005",
  title: "Code chạy hoàn hảo!",
  content: "Ủa, sao giờ lại lỗi rồi...?",
};

const blog6 = {
  _id: "blog006",
  title: "Cảm giác khi hoàn thành deadline",
  content: "Là bắt đầu lo cho cái deadline tiếp theo.",
};

const blog7 = {
  _id: "blog007",
  title: "Tôi và chiếc bàn làm việc",
  content: "Chiếc bàn làm việc này đã cùng tôi qua bao mùa deadline, bao đêm thức trắng và cả những lần… ngủ gục luôn tại trận. Nó đầy vết cà phê, giấy note dán tùm lum nhưng vẫn là nơi khơi nguồn cho những ý tưởng điên rồ nhất."
};

const blog8 = {
  _id: "blog008",
  title: "Nỗi buồn mang tên cuối tháng",
  content: "Ví tiền trống rỗng, thẻ ngân hàng thì nằm im. Mình ngồi tính toán từng bữa ăn, cân nhắc từng gói mì. Nhưng lạ là, những ngày cuối tháng lại khiến mình trân trọng từng niềm vui nhỏ, như một ly trà đá hay một buổi chiều mát trời."
};

const blog9 = {
  _id: "blog009",
  title: "Có một hôm tôi dậy sớm",
  content: "Mặt trời vừa ló, phố còn yên. Mình pha cà phê, mở nhạc nhẹ và ngồi viết mấy dòng blog này. Dậy sớm không dễ, nhưng cảm giác làm chủ được thời gian thật sự rất 'xịn'. Tiếc là sáng hôm sau lại ngủ quên."
};

const blog10 = {
  _id: "blog010",
  title: "Tình yêu và... bug",
  content: "Mình từng nghĩ không có gì khó hiểu hơn tình yêu, cho đến khi gặp một con bug không tái hiện được. Nó chỉ xuất hiện khi demo cho khách hàng. Còn bình thường thì chạy mượt như crush nhìn thấy người yêu mình…"
};

const blog11 = {
  _id: "blog011",
  title: "Khi deadline trở thành động lực sống",
  content: "Ban đầu là hoảng, sau là lo, rồi chuyển sang… chấp nhận. Có những hôm mình chỉ thực sự sống khi còn 3 tiếng nộp bài. Và kỳ lạ thay, lúc ấy mình lại làm việc hiệu quả hơn cả một tuần ngồi suy nghĩ vô định."
};


const blogs = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11];

function useBlog() {
  return blogs;
}
function blogModel(blogId) {
  for (let blog of blogs) {
    if (blog._id === blogId) return blog;
  }
  return null;
}

export { useBlog, blogModel };
