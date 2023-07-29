// モジュールの作成

// モジュールとしてエクスポートしたい場合の書き方（他のファイルで読み込むということ）
// functionを使わずに定義
export default () => {
  console.log('export!!')
}


// functionを書く
// export default function() {
//   console.log('my! ')
// }

// 通常のファンクション定義
// function my() {
//   console.log();
// }