import { parse } from 'json2csv';

export const exportToCsv = (data: any[], filename: string = 'report.csv') => {
  const csv = parse(props.data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};