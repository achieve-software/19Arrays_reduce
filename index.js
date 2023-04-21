//1 aşağıdaki dizi elemanlarının toplamını reduce metodu ile yazdırınız
const numbers = [2, 4, 6, 8, 10];

const sum1 = numbers.reduce((total, num) => {
  return total + num;
});

console.log(sum1); // 30

//2 Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
// ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.İlgili programı yazınız.
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
const sumOfRaisedSalaries = salaries
  .filter((s) => s < 9000)
  .map((s) => s * 1.1)
  .reduce((t, s) => t + s, 0);

console.log(sumOfRaisedSalaries);
