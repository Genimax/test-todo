function generatePayments(numOfPayments) {
  const usedIds = [];
  const generateUniqueId = () => {
    let id;

    do {
      id = Math.floor(Math.random() * (numOfPayments + 1)); // случайное число от 0 до 100
    } while (usedIds.includes(id));

    usedIds.push(id);
    return id.toString();
  };
  const padZero = (number) => {
    return number.toString().padStart(2, "0");
  };

  const getRandomDateInLastMonth = () => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    const randomTimestamp = Math.floor(
      lastMonth.getTime() +
        Math.random() * (lastDayOfMonth.getTime() - lastMonth.getTime())
    );

    const randomDate = new Date(randomTimestamp);
    const day = padZero(randomDate.getDate());
    const month = padZero(randomDate.getMonth() + 1);
    const year = randomDate.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const getRandomAmount = () => {
    return (Math.random() * 100).toFixed(2);
  };

  const getRandomStatus = () => {
    return Math.random() < 0.5 ? "Отправлено" : "Проверка";
  };

  const getRandomTime = () => {
    const hours = padZero(Math.floor(Math.random() * 24));
    const minutes = padZero(Math.floor(Math.random() * 60));

    return `${hours}:${minutes}`;
  };

  const payments = [];

  for (let i = 0; i < numOfPayments; i++) {
    const payment = {
      number: numOfPayments - i,
      date: getRandomDateInLastMonth(), // случайная дата за последний месяц
      paymentId: generateUniqueId(), // уникальный идентификатор платежа
      time: getRandomTime(), // случайное время в формате 00:00
      sum: getRandomAmount(), // случайная сумма платежа в $
      sender: Math.floor(Math.random() * 101), // случайное число от 0 до 100
      status: getRandomStatus() // случайный показатель между "Отправлено" и "Ожидание"
    };

    payments.push(payment);
  }

  return payments;
}

export default generatePayments;
