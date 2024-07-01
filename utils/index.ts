export const getRandomBoolean = (): boolean => {
  return Math.random() >= 0.5;
}

export const validateCardNumber = (cardNumber: string): boolean => {
  let cardNumberValue = cardNumber.replaceAll(' ', '')
  if (cardNumberValue.length !== 16) {
    return false
  }
  let sum = 0;
  let shouldDouble = false;

  // Traverse the card number from right to left
  for (let i = cardNumberValue.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumberValue.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  // If the sum modulo 10 is 0, the card number is valid
  return sum % 10 === 0;
}