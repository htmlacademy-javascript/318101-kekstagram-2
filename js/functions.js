// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее.
const checkStringLength = (str, maxLength) => str.length <= maxLength;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.

function palindrom (str) {
  const arr = str.toLowerCase().split('');
  let newStr = '';
  for(let i = arr.length - 1; i >= 0; i--) {
    newStr = newStr + arr[i];
  }
  return newStr === str;
}
palindrom('топот');
