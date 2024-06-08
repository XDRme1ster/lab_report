export function formatDate(dateString: string): string {
    const date = new Date(parseInt(dateString.slice(0, 4)), parseInt(dateString.slice(4, 6)) - 1, parseInt(dateString.slice(6)));
    return `${date.getDate()}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
}
