/**
 * 时分秒日月补 0
 * @param {string} str
 * @returns {string}
 */
const padStartZero = (str: string | number) => str.toString().padStart(2, "0");

/**
 * 格式化日期
 * @param date 
 * @param formatStr 
 * @returns {string}
 */
export function formatDate(
  date: number | string | Date,
  formatStr: string = "YYYY-MM-DD"
) {
  const inputDate = new Date(date);
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1;
  const day = inputDate.getDate();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const seconds = inputDate.getSeconds();

  return formatStr
    .replace(/\bYYYY\b/g, year.toString())
    .replace(/\bYY\b/g, year.toString().substring(2))
    .replace(/\bMM\b/g, padStartZero(month))
    .replace(/\bM\b/g, month.toString())
    .replace(/\bDD\b/g, padStartZero(day))
    .replace(/\bD\b/g, day.toString())
    .replace(/\bHH\b/g, padStartZero(hours))
    .replace(/\bhh\b/g, hours.toString())
    .replace(/\bmm\b/g, padStartZero(minutes))
    .replace(/\bss\b/g, padStartZero(seconds));
}