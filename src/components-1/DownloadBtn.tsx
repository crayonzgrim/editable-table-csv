import { utils, writeFile } from 'xlsx';
import { DownloadIcon } from '../icons/icon';

type DownloadBtnProps = {
  data: any;
  fileName?: string;
};

export const DownloadBtn = ({ data = [], fileName }: DownloadBtnProps) => {
  return (
    <button
      className="download-btn"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = utils.json_to_sheet(datas);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        writeFile(workbook, fileName ? `${fileName}.xlsx` : 'data.xlsx');
      }}
    >
      <DownloadIcon />
      Download
    </button>
  );
};
