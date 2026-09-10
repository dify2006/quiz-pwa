好奇1000・GitHub Pages PWA

把 ZIP 解壓後的所有檔案直接上傳至現有 quiz-pwa repository 根目錄，覆蓋同名檔案，再 Commit changes。不要只上傳 ZIP，亦不要多放一層資料夾。原有 questions.js 已不再使用，可刪除或保留。

保留原本 Pages 的 main / (root) 設定。部署完成後開啟原網址。若仍看到舊版本，先保持連網，關閉網站與已安裝 App 再開；桌面可用 Ctrl+Shift+R 重新載入。舊版離線快取可能需要一次更新才會切換。

首次連網開啟，待首頁顯示「離線準備完成」，再試斷網重新開啟。iPhone 用 Safari 分享選單加入主畫面；支援安裝提示的瀏覽器會顯示安裝按鈕。資料來源連結仍需要網絡。

題庫1000題、原版樣式與答題程式直接取自上傳 Code.gs，沒有替換题庫。保留20/50/100/1000題選擇、進度、答案解釋、成績、錯題複習及最高分。

進度儲存在目前瀏覽器及網站網址下；Google Apps Script 網址的舊進度不會自動搬到 GitHub Pages。清除網站資料也會刪除進度。不要直接雙擊 index.html 來測試離線安裝，必須透過 GitHub Pages 的 HTTPS 網址。
