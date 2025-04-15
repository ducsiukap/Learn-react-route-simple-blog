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

const blogs = [blog1, blog2, blog3, blog4, blog5, blog6];

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
