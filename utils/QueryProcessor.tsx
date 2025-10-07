export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id") || query.toLowerCase().includes("name")) {
    return(
      "aliciach"
    );
  }
  if (query.toLowerCase().includes("largest")) {
    //return the largest number in the query of three
    const numbers = query.match(/-?\d+/g);
    if (numbers) {
      const largest = Math.max(...numbers.map(Number));
      return largest.toString();
    }
  }
  if (query.toLowerCase().includes("plus")) {
    //return the sum of two numbers in the query
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = numbers.slice(0, 2).map(Number).reduce((a, b) => a + b, 0);
      return sum.toString();
    }
  }

  // if (query.toLowerCase().includes("name")) {
  //   return "Rohan";
  // }

  return "";
}
