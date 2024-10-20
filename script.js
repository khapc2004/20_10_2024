const createRainOfRoses = () => {
  const rose = document.createElement("img");
  rose.src = "https://example.com/rose.png"; // Thay thế bằng link hình hoa hồng
  rose.classList.add("rose");

  // Đặt vị trí ngẫu nhiên trên màn hình
  const leftPosition = Math.random() * 100; // Từ 0 đến 100% chiều rộng
  rose.style.left = `${leftPosition}vw`;

  // Thiết lập thời gian rơi ngẫu nhiên và kích thước
  const fallDuration = Math.random() * 3 + 2; // từ 2s đến 5s
  const size = Math.random() * 20 + 20; // từ 20px đến 40px
  rose.style.width = `${size}px`;
  rose.style.animationDuration = `${fallDuration}s`; // Thay đổi thời gian rơi

  document.body.appendChild(rose);

  // Xóa hoa sau khi hoàn thành animation
  setTimeout(() => {
    document.body.removeChild(rose);
  }, fallDuration * 1000);
};

// Tạo hoa rơi như mưa
setInterval(createRainOfRoses, 300); // Tạo hoa mỗi 300ms
