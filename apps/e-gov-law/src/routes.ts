import { createRoute, z } from '@hono/zod-openapi'

const AmendmentTypeSchema = z
  .enum(['1', '3', '8'])
  .openapi({
    title: 'amendment_type',
    description: '改正種別\n  * `1`      - 新規\n  * `3`      - 被改正\n  * `8`      - 廃止',
  })
  .openapi('AmendmentType')

const AttachedFileSchema = z
  .object({
    law_revision_id: z
      .string()
      .exactOptional()
      .openapi({ description: '法令ID', example: '322CO0000000016_20230508_505CO0000000175' }),
    src: z
      .string()
      .exactOptional()
      .openapi({ description: '法令XML中のFig要素のsrc属性', example: './pict/M06SE065-001.jpg' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '正誤等による更新日時', example: '2023-07-01T14:30:15+09:00' }),
  })
  .openapi({ title: 'attached_file', description: '添付ファイル情報\n', required: [] })
  .openapi('AttachedFile')

const AttachedFilesInfoSchema = z
  .object({
    image_data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '添付ファイルデータ（添付ファイルをフォルダ名pictに収集し、フォルダ全体をZip形式で圧縮したファイルをBase64でエンコードした文字列）',
        example: '',
      }),
    attached_files: z
      .array(AttachedFileSchema.openapi({ xml: { name: 'item' } }))
      .exactOptional()
      .openapi({ xml: { wrapped: true }, description: '添付ファイル一覧' }),
  })
  .openapi({ title: 'attached_files_info', description: '添付ファイル情報', required: [] })
  .openapi('AttachedFilesInfo')

const CategoryCdSchema = z
  .enum([
    '001',
    '002',
    '003',
    '004',
    '005',
    '006',
    '007',
    '008',
    '009',
    '010',
    '011',
    '012',
    '013',
    '014',
    '015',
    '016',
    '017',
    '018',
    '019',
    '020',
    '021',
    '022',
    '023',
    '024',
    '025',
    '026',
    '027',
    '028',
    '029',
    '030',
    '031',
    '032',
    '033',
    '034',
    '035',
    '036',
    '037',
    '038',
    '039',
    '040',
    '041',
    '042',
    '043',
    '044',
    '045',
    '046',
    '047',
    '048',
    '049',
    '050',
  ])
  .openapi({
    title: 'category_cd',
    description:
      '事項別分類コード:<br>\n  * `001` - 憲法\n  * `002` - 刑事\n  * `003` - 財務通則\n  * `004` - 水産業\n  * `005` - 観光\n  * `006` - 国会\n  * `007` - 警察\n  * `008` - 国有財産\n  * `009` - 鉱業\n  * `010` - 郵務\n  * `011` - 行政組織\n  * `012` - 消防\n  * `013` - 国税\n  * `014` - 工業\n  * `015` - 電気通信\n  * `016` - 国家公務員\n  * `017` - 国土開発\n  * `018` - 事業\n  * `019` - 商業\n  * `020` - 労働\n  * `021` - 行政手続\n  * `022` - 土地\n  * `023` - 国債\n  * `024` - 金融・保険\n  * `025` - 環境保全\n  * `026` - 統計\n  * `027` - 都市計画\n  * `028` - 教育\n  * `029` - 外国為替・貿易\n  * `030` - 厚生\n  * `031` - 地方自治\n  * `032` - 道路\n  * `033` - 文化\n  * `034` - 陸運\n  * `035` - 社会福祉\n  * `036` - 地方財政\n  * `037` - 河川\n  * `038` - 産業通則\n  * `039` - 海運\n  * `040` - 社会保険\n  * `041` - 司法\n  * `042` - 災害対策\n  * `043` - 農業\n  * `044` - 航空\n  * `045` - 防衛\n  * `046` - 民事\n  * `047` - 建築・住宅\n  * `048` - 林業\n  * `049` - 貨物運送\n  * `050` - 外事',
  })
  .openapi('CategoryCd')

const CurrentRevisionStatusSchema = z
  .enum(['CurrentEnforced', 'UnEnforced', 'PreviousEnforced', 'Repeal'])
  .openapi({
    title: 'current_revision_status',
    description:
      '履歴の状態:\n  * `CurrentEnforced`  - 現施行法令\n  * `UnEnforced`       - 未施行法令\n  * `PreviousEnforced` - 過去施行法令\n  * `Repeal`           - 廃止法令（廃止・失効・実効性喪失）',
  })
  .openapi('CurrentRevisionStatus')

const ElmSchema = z
  .string()
  .openapi({
    title: 'elm',
    description:
      '指定した法令XMLの要素に該当する法令本文を取得することができます。<br>\n* 要素を組み合わせる場合は、`-`（半角ハイフン）で要素を結合してください。<br>\n> （例：本則第１項 `MainProvision-Paragraph_1`）\n* 下記の表に要素毎の一覧と指定方法を記載しております。\n* 表に掲載している要素は一例であり、elmで取得可能な要素の詳細は<a href="https://laws.e-gov.go.jp/docs/" target="_blank">法令データ ドキュメンテーション</a>を参照してください。<br>\n\n<font color="red">\n補足：<br>\n&nbsp;&nbsp;指定した要素内に他要素がある場合は、他要素の情報も取得されます。<br>\n&nbsp;&nbsp;例えば、`MainProvision-Paragraph[1]`を指定した場合は、指定された`Paragraph`要素内に`FigStruct`要素が存在していると`FigStruct`情報も含めて取得されます。\n</font>\n\n<table bgcolor="white" border="1">\n     <tr bgcolor="#DDFFFF">\n       <th width="20%">法令XML要素</th>\n       <th width="20%">要素の意味</th>\n       <th width="20%">指定例</th>\n     </tr>\n     <tr>\n       <td>&nbsp; LawNum </td>\n       <td>&nbsp; 法令番号 </td>\n       <td>&nbsp; LawNum[1]</td>\n     </tr>\n     <tr>\n       <td>&nbsp; LawTitle </td>\n       <td>&nbsp; 題名 </td>\n       <td>&nbsp; LawTitle[1]</td>\n     </tr>\n     <tr>\n       <td>&nbsp; EnactStatement </td>\n       <td>&nbsp; 制定文 </td>\n       <td>&nbsp; EnactStatement[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; TOC </td>\n       <td>&nbsp; 目次 </td>\n       <td>&nbsp; TOC[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Preamble </td>\n       <td>&nbsp; 前文 </td>\n       <td>&nbsp; Preamble[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; MainProvision </td>\n       <td>&nbsp; 本則 </td>\n       <td>&nbsp; MainProvision[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Part </td>\n       <td>&nbsp; 編 </td>\n       <td>&nbsp; Part_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Chapter </td>\n       <td>&nbsp; 章 </td>\n       <td>&nbsp; Chapter_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Section </td>\n       <td>&nbsp; 節 </td>\n       <td>&nbsp; Section_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Subsection </td>\n       <td>&nbsp; 款 </td>\n       <td>&nbsp; Subsection_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Division </td>\n       <td>&nbsp; 目 </td>\n       <td>&nbsp; Division_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Article </td>\n       <td>&nbsp; 条 </td>\n       <td>&nbsp; Article_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Paragraph </td>\n       <td>&nbsp; 項 </td>\n       <td>&nbsp; Paragraph_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Item </td>\n       <td>&nbsp; 号 </td>\n       <td>&nbsp; Item_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Subitem1 </td>\n       <td>&nbsp; 号細分 </td>\n       <td>&nbsp; Subitem1_1 </td>\n     </tr>\n     <tr>\n       <td>&nbsp; SupplProvision </td>\n       <td>&nbsp; 附則 </td>\n       <td>&nbsp; SupplProvision[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; AppdxTable </td>\n       <td>&nbsp; 別表 </td>\n       <td>&nbsp; AppdxTable[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; AppdxStyle </td>\n       <td>&nbsp; 別記様式 </td>\n       <td>&nbsp; AppdxStyle[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; AppdxFormat </td>\n       <td>&nbsp; 別記書式 </td>\n       <td>&nbsp; AppdxFormat[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; Appdx </td>\n       <td>&nbsp; 付録 </td>\n       <td>&nbsp; Appdx[1] </td>\n     </tr>\n     <tr>\n       <td>&nbsp; AppdxFig </td>\n       <td>&nbsp; 別図 </td>\n       <td>&nbsp; AppdxFig[1] </td>\n     </tr>\n   </table>\n',
  })
  .openapi('Elm')

const ErrorInfoSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'エラーコード<br>\n', example: '400001' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'エラーメッセージ',
        example: '法令種別（law_type、law_num_type）が誤っています。',
      }),
  })
  .openapi({ description: 'エラー情報', required: [] })
  .openapi('ErrorInfo')

const FileTypeSchema = z
  .enum(['xml', 'json', 'html', 'rtf', 'docx'])
  .openapi({
    title: 'file_type',
    description:
      'ファイル種別:\n  * `xml`         - XML\n  * `json`        - JSON\n  * `html`        - HTML\n  * `rtf`         - RTF\n  * `docx`        - DOCX',
  })
  .openapi('FileType')

const LawTypeSchema = z
  .enum([
    'Constitution',
    'Act',
    'CabinetOrder',
    'ImperialOrder',
    'MinisterialOrdinance',
    'Rule',
    'Misc',
  ])
  .openapi({
    title: 'law_type',
    description:
      '法令種別:\n  * `Constitution`         - 憲法\n  * `Act`                  - 法律\n  * `CabinetOrder`         - 政令\n  * `ImperialOrder`        - 勅令\n  * `MinisterialOrdinance` - 府省令\n  * `Rule`                 - 規則\n  * `Misc`                 - その他',
  })
  .openapi('LawType')

const LawNumEraSchema = z
  .enum(['Meiji', 'Taisho', 'Showa', 'Heisei', 'Reiwa'])
  .openapi({ title: 'law_num_era', description: '法令番号の元号' })
  .openapi('LawNumEra')

const LawNumTypeSchema = z
  .enum([
    'Constitution',
    'Act',
    'CabinetOrder',
    'ImperialOrder',
    'MinisterialOrdinance',
    'Rule',
    'Misc',
  ])
  .openapi({
    title: 'law_num_type',
    description:
      '法令番号の法令種別:\n  * `Constitution`         - 憲法\n  * `Act`                  - 法律\n  * `CabinetOrder`         - 政令\n  * `ImperialOrder`        - 勅令\n  * `MinisterialOrdinance` - 府省令\n  * `Rule`                 - 規則\n  * `Misc`                 - その他',
  })
  .openapi('LawNumType')

const LawInfoSchema = z
  .object({
    law_type: LawTypeSchema.exactOptional().openapi({ description: '法令種別' }),
    law_id: z
      .string()
      .exactOptional()
      .openapi({ description: '法令ID', example: '322CO0000000016' }),
    law_num: z
      .string()
      .exactOptional()
      .openapi({ description: '法令番号', example: '昭和二十二年政令第十六号' }),
    law_num_era: LawNumEraSchema.exactOptional().openapi({ description: '法令番号の元号' }),
    law_num_year: z.int().exactOptional().openapi({ description: '法令番号の年', example: 5 }),
    law_num_type: LawNumTypeSchema.exactOptional().openapi({ description: '法令番号の法令種別' }),
    law_num_num: z
      .string()
      .exactOptional()
      .openapi({ description: '法令番号の号数', example: '192' }),
    promulgation_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '公布日', example: '2023-07-01' }),
  })
  .openapi({
    title: 'law_info',
    description: '履歴に依存しない法令（法令IDで特定される法令）のメタ情報',
    required: [],
  })
  .openapi('LawInfo')

const RepealStatusSchema = z
  .enum(['None', 'Repeal', 'Expire', 'Suspend', 'LossOfEffectiveness'])
  .openapi({
    title: 'repeal_status',
    description:
      '廃止等の状態:\n  * `None`                - 廃止・失効等の状態なし\n  * `Repeal`              - 廃止\n  * `Expire`              - 失効\n  * `Suspend`             - 停止\n  * `LossOfEffectiveness` - 実効性喪失',
  })
  .openapi('RepealStatus')

const MissionSchema = z
  .enum(['New', 'Partial'])
  .openapi({
    title: 'mission',
    description:
      '新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）\n  * `New`      - 新規制定\n  * `Partial`  - 一部改正',
  })
  .openapi('Mission')

const RevisionInfoSchema = z
  .object({
    law_revision_id: z
      .string()
      .exactOptional()
      .openapi({ description: '法令履歴ID', example: '322CO0000000016_20230508_505CO0000000175' }),
    law_type: LawTypeSchema.exactOptional().openapi({ description: '法令種別' }),
    law_title: z
      .string()
      .exactOptional()
      .openapi({ description: '法令名', example: '地方自治法施行令' }),
    law_title_kana: z
      .string()
      .exactOptional()
      .openapi({ description: '法令名読み', example: 'ちほうじちほうせこうれい' }),
    abbrev: z.string().exactOptional().openapi({ description: '法令略称', example: '地方自治令' }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: '法令分野分類', example: '行政組織' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '正誤等による更新日時', example: '2023-07-01T14:30:15+09:00' }),
    amendment_promulgate_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '改正法令公布日', example: '2023-07-01' }),
    amendment_enforcement_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: '改正法令施行期日（この履歴に対応する改正の施行期日）',
        example: '2023-07-01',
      }),
    amendment_enforcement_comment: z
      .string()
      .exactOptional()
      .openapi({
        description: '施行期日規定等の参考情報（この履歴に対応する改正の施行期日）',
        example: '公布の日から起算して一年を超えない範囲内において政令で定める日',
      }),
    amendment_scheduled_enforcement_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          '擬似的な施行期日（実際の施行期日とは限らない）（この履歴に対応する改正の施行期日）',
        example: '2023-07-01',
      }),
    amendment_law_id: z
      .string()
      .exactOptional()
      .openapi({
        description: '改正法令の法令ID（この履歴に対応する改正法令）',
        example: '505CO0000000175',
      }),
    amendment_law_title: z
      .string()
      .exactOptional()
      .openapi({
        description: '改正法令名',
        example: '組織的な犯罪の処罰及び犯罪収益の規制等に関する法律等の一部を改正する法律',
      }),
    amendment_law_title_kana: z
      .string()
      .exactOptional()
      .openapi({ description: '改正法令名読み', example: 'そしきてきなはんざいのしょばつおよび' }),
    amendment_law_num: z
      .string()
      .exactOptional()
      .openapi({ description: '改正法令番号', example: '令和五年政令百九十二号' }),
    amendment_type: AmendmentTypeSchema.exactOptional().openapi({ description: '改正種別' }),
    repeal_status: RepealStatusSchema.exactOptional().openapi({ description: '廃止等の状態' }),
    repeal_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '廃止日', example: '2023-07-01' }),
    remain_in_force: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '廃止後の効力（`true`:廃止後でも効力を有するもの / `false`:廃止後に効力を有しないもの）',
      }),
    mission: MissionSchema.exactOptional().openapi({
      description: '新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）',
    }),
    current_revision_status: CurrentRevisionStatusSchema.exactOptional().openapi({
      description: '履歴の状態',
    }),
  })
  .openapi({ title: 'revision_info', description: '法令の履歴に関する情報', required: [] })
  .openapi('RevisionInfo')

const KeywordResponseSchema = z
  .object({
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: '指定`keyword`でヒットした総件数',
        example: 10000,
      }),
    sentence_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'レスポンス単位で表示した`sentences`数の総和',
        example: 100,
      }),
    next_offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: '次指定する`offset`値。末尾まで取得が完了した場合はnull',
        example: 200,
      }),
    items: z
      .array(
        z
          .object({
            law_info: LawInfoSchema.exactOptional(),
            revision_info: RevisionInfoSchema.exactOptional(),
            sentences: z
              .array(
                z
                  .object({
                    position: ElmSchema.exactOptional().openapi({
                      description: '検索ヒットの場所',
                      example: 'MainProvision-Article_21-Paragraph_3',
                    }),
                    text: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '条文内容です。ハイライト箇所は`<span>`タグで囲まれます。XMLでのレスポンスの場合、タグはエスケープされることにご注意ください。',
                        example:
                          '局、部又は委員会の<span>事務局</span>には、次長を置くことができるものとし、その設置、職務及び定数は、政令でこれを定める。',
                      }),
                  })
                  .openapi({
                    xml: { name: 'sentence' },
                    description: '添付ファイル情報',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({ xml: { wrapped: true }, description: '検索ヒット箇所一覧' }),
          })
          .openapi({ xml: { name: 'item' }, required: [] }),
      )
      .exactOptional()
      .openapi({
        xml: { wrapped: true },
        description:
          '法令ID単位の情報リスト<br>\n* `revision_info` - 指定時点において効力を持つ版のメタ情報\n',
      }),
  })
  .openapi({ description: 'キーワード検索APIレスポンス', required: ['count'] })
  .openapi('KeywordResponse')

const LawDataResponseSchema = z
  .object({
    attached_files_info: AttachedFilesInfoSchema.exactOptional(),
    law_info: LawInfoSchema.exactOptional(),
    revision_info: RevisionInfoSchema.exactOptional(),
    law_full_text: z
      .xor([
        z
          .object({})
          .openapi({
            description:
              '- `law_full_text_format`と`response_format`が`json`の場合、JSON形式で返却します。\n- <a target="_blank" href="/api/2/swagger-ui/lawapi-v2-json-light-schema.yaml" rel="noopener noreferrer" class="link"><span class="url"> lawapi-v2-json-light-schema.yaml</span></a>に、JSON（簡易版）のLawスキーマ配下のスキーマ定義が記載されております。\n\n>> ### JSON（詳細版）\n>>> <pre><code>{\n&nbsp;&nbsp;"tag": "Law",  ①\n&nbsp;&nbsp;"attr": {\n&nbsp;&nbsp;&nbsp;&nbsp;"LawId": "123AC0000000001",  ②\n&nbsp;&nbsp;&nbsp;&nbsp;"LawType": "Act"  ③\n&nbsp;&nbsp;},\n&nbsp;&nbsp;"children": [\n&nbsp;&nbsp;&nbsp;&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tag": "LawBody",  ④\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"attr": {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"children": [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tag": "LawTitle",  ⑤\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"attr": {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"AbbrKanaSeion": ""  ⑥\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"children": [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"保管金規則"  ⑦\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]\n&nbsp;&nbsp;&nbsp;&nbsp;}\n&nbsp;&nbsp;]\n}</code></pre>\n\n\n>> ### JSON（簡易版）\n>>> <pre><code>{\n&nbsp;&nbsp;"Law": {  ①\n&nbsp;&nbsp;&nbsp;&nbsp;"LawBody": {  ④\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"LawTitle": "保管金規則"  ⑤ ⑦\n&nbsp;&nbsp;&nbsp;&nbsp;}\n&nbsp;&nbsp;}\n}</code></pre>\n\n\n<br><br>\n`law_full_text_format`と`response_format`が`xml`の場合、XML形式で返却します。<br>\n\n\n>> ### XML\n>>> <pre><code>&nbsp;①  ②                      ③\n&lt;Law LawId="123AC0000000001" LawType="Act"&gt;\n&nbsp;&nbsp;&nbsp;④\n&nbsp;&nbsp;&lt;LawBody&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⑤       ⑥               ⑦\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;LawTitle AbbrKanaSeion=""&gt;保管金規則&lt;/LawTitle&gt;\n&nbsp;&nbsp;&lt;/LawBody&gt;\n&lt;/Law&gt;</code></pre>\n',
          }),
        z
          .string()
          .openapi({
            description:
              '<br>\n`law_full_text_format`と`response_format`が異なる場合、Base64でエンコードして返却します。\n\n\n>> ### Base64形式例\n>>><pre><code>"PFBhcmFncmFwaCBIaWRlPSJmYWxzZSIgTnVtPSIxIiBPbGRTdHlsZT0iZmFsc2UiPgogICAgICAgICAgPFBhcmFncmFwaE51bS8+CiAgICAgICAgICA8UGFyYWdyYXBoU2VudGVuY2U+CiAgICAgICAgICAgIDxTZW50ZW5jZSBXcml0aW5nTW9kZT0idmVydGljYWwiPuWbveaXl+OBr+OAgeaXpeeroOaXl+OBqOOBmeOCi+OAgjwvU2VudGVuY2U+CiAgICAgICAgICA8L1BhcmFncmFwaFNlbnRlbmNlPgogICAgICAgIDwvUGFyYWdyYXBoPg=="</code></pre>\n',
          }),
      ])
      .exactOptional()
      .openapi({
        description:
          '法令本文<br><br>\n  * `law_full_text_format`と`response_format`の指定方法によって、レスポンス形式が変化します。<br><br>\n  * データ構造の詳細は<a href="https://laws.e-gov.go.jp/docs/" target="_blank">法令データ ドキュメンテーション</a>を参照してください。<br><br>\n  * JSON（詳細版）形式、JSON（簡易版）形式とXML形式の各要素は、丸数字で対応関係を表現しています。<br><br>\n  * JSON（詳細版）形式では、`children`オブジェクトでXML形式の階層構造を表現しています。<br><br>\n',
      }),
  })
  .openapi({ description: '法令本文取得APIレスポンス', required: [] })
  .openapi('LawDataResponse')

const LawRevisionsResponseSchema = z
  .object({
    law_info: LawInfoSchema,
    revisions: z
      .array(RevisionInfoSchema.openapi({ xml: { name: 'item' } }))
      .openapi({ xml: { wrapped: true }, description: '版一覧' }),
  })
  .openapi({ description: '法令履歴一覧取得APIレスポンス', required: ['law_info', 'revisions'] })
  .openapi('LawRevisionsResponse')

const LawsResponseSchema = z
  .object({
    total_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          '取得件数の上限（`limit`）、何件目から取得するか（`offset`）適用前のリストに含まれる項目数（検索条件にマッチした全件数）',
        example: 10000,
      }),
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          '返却するリスト（取得件数の上限（`limit`）、何件目から取得するか（`offset`）適用後）に含まれる項目数',
        example: 100,
      }),
    next_offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: '次の何件目から取得するか（`offset`）。末尾まで取得が完了した場合はnull',
        example: 200,
      }),
    laws: z
      .array(
        z
          .object({
            law_info: LawInfoSchema.exactOptional().openapi({
              description: '改正履歴に依存しない法令情報',
            }),
            revision_info: RevisionInfoSchema.exactOptional().openapi({
              description: '取得した改正履歴における法令情報',
            }),
            current_revision_info: RevisionInfoSchema.exactOptional().openapi({
              description:
                '最新の履歴における法令情報<br>法令の時点（`asof`）に依存しない現在以前の最新のリビジョン',
            }),
          })
          .openapi({ xml: { name: 'item' }, required: [] }),
      )
      .exactOptional()
      .openapi({ xml: { wrapped: true }, description: '法令ID単位の法令情報' }),
  })
  .openapi({ description: '法令一覧取得API レスポンス', required: ['count'] })
  .openapi('LawsResponse')

const ResponseFormatSchema = z
  .enum(['json', 'xml'])
  .openapi({ title: 'response_format', description: 'レスポンス形式（`json` 又は `xml`）' })
  .openapi('ResponseFormat')

const ExampleLawsJsonExample = {
  value: {
    total_count: 1,
    count: 1,
    laws: [
      {
        law_info: {
          law_type: 'CabinetOrder',
          law_id: '322CO0000000016',
          law_num: '昭和二十二年政令第十六号',
          law_num_era: 'Showa',
          law_num_year: 22,
          law_num_type: 'CabinetOrder',
          law_num_num: '016',
          promulgation_date: '1947-05-03',
        },
        revision_info: {
          law_revision_id: '322CO0000000016_20240401_506CO0000000161',
          law_type: 'CabinetOrder',
          law_title: '地方自治法施行令',
          law_title_kana: 'ちほうじちほうしこうれい',
          abbrev: '地自法施行令',
          category: '地方自治',
          updated: '2024-04-19T13:42:44+09:00',
          amendment_promulgate_date: '2024-03-30',
          amendment_enforcement_date: '2024-04-01',
          amendment_enforcement_comment: null,
          amendment_scheduled_enforcement_date: null,
          amendment_law_id: '506CO0000000161',
          amendment_law_title:
            '児童福祉法等の一部を改正する法律の施行に伴う関係政令の整備等に関する政令',
          amendment_law_title_kana: null,
          amendment_law_num: '令和六年政令第百六十一号',
          amendment_type: '3',
          repeal_status: 'None',
          repeal_date: null,
          remain_in_force: false,
          mission: 'New',
          current_revision_status: 'CurrentEnforced',
        },
        current_revision_info: {
          law_revision_id: '322CO0000000016_20240401_506CO0000000161',
          law_type: 'CabinetOrder',
          law_title: '地方自治法施行令',
          law_title_kana: 'ちほうじちほうしこうれい',
          abbrev: '地自法施行令',
          category: '地方自治',
          updated: '2024-04-19T13:42:44+09:00',
          amendment_promulgate_date: '2024-03-30',
          amendment_enforcement_date: '2024-04-01',
          amendment_enforcement_comment: null,
          amendment_scheduled_enforcement_date: null,
          amendment_law_id: '506CO0000000161',
          amendment_law_title:
            '児童福祉法等の一部を改正する法律の施行に伴う関係政令の整備等に関する政令',
          amendment_law_title_kana: null,
          amendment_law_num: '令和六年政令第百六十一号',
          amendment_type: '3',
          repeal_status: false,
          repeal_date: null,
          remain_in_force: false,
          mission: 'New',
          current_revision_status: 'CurrentEnforced',
        },
      },
    ],
  },
}

const ExampleLawsXmlExample = {
  value:
    '<laws_response>\n  <total_count>1</total_count>\n  <count>1</count>\n  <laws>\n    <law>\n      <law_info>\n        <law_type>CabinetOrder</law_type>\n        <law_id>322CO0000000016</law_id>\n        <law_num>昭和二十二年政令第十六号</law_num>\n        <law_num_era>Showa</law_num_era>\n        <law_num_year>22</law_num_year>\n        <law_num_type>CabinetOrder</law_num_type>\n        <law_num_num>016</law_num_num>\n        <promulgation_date>1947-05-03</promulgation_date>\n      </law_info>\n      <revision_info>\n        <law_revision_id>322CO0000000016_20240401_506CO0000000161</law_revision_id>\n        <law_type>CabinetOrder</law_type>\n        <law_title>地方自治法施行令</law_title>\n        <law_title_kana>ちほうじちほうしこうれい</law_title_kana>\n        <abbrev>地自法施行令</abbrev>\n        <category>地方自治</category>\n        <updated>2024-04-19T13:42:44+09:00</updated>\n        <amendment_promulgate_date>2024-03-30</amendment_promulgate_date>\n        <amendment_enforcement_date>2024-04-01</amendment_enforcement_date>\n        <amendment_enforcement_comment/>\n        <amendment_scheduled_enforcement_date/>\n        <amendment_law_id>506CO0000000161</amendment_law_id>\n        <amendment_law_title>児童福祉法等の一部を改正する法律の施行に伴う関係政令の整備等に関する政令</amendment_law_title>\n        <amendment_law_title_kana/>\n        <amendment_law_num>令和六年政令第百六十一号</amendment_law_num>\n        <amendment_type>3</amendment_type>\n        <repeal_status>None</repeal_status>\n        <repeal_date/>\n        <remain_in_force>false</remain_in_force>\n        <mission>New</mission>\n        <current_revision_status>PreviousEnforced</current_revision_status>\n      </revision_info>\n      <current_revision_info>\n        <law_revision_id>322CO0000000016_20240401_506CO0000000161</law_revision_id>\n        <law_type>CabinetOrder</law_type>\n        <law_title>地方自治法施行令</law_title>\n        <law_title_kana>ちほうじちほうしこうれい</law_title_kana>\n        <abbrev>地自法施行令</abbrev>\n        <category>地方自治</category>\n        <updated>2024-04-19T13:42:44+09:00</updated>\n        <amendment_promulgate_date>2024-03-30</amendment_promulgate_date>\n        <amendment_enforcement_date>2024-04-01</amendment_enforcement_date>\n        <amendment_enforcement_comment/>\n        <amendment_scheduled_enforcement_date/>\n        <amendment_law_id>506CO0000000161</amendment_law_id>\n        <amendment_law_title>児童福祉法等の一部を改正する法律の施行に伴う関係政令の整備等に関する政令</amendment_law_title>\n        <amendment_law_title_kana/>\n        <amendment_law_num>令和六年政令第百六十一号</amendment_law_num>\n        <amendment_type>3</amendment_type>\n        <repeal_status>None</repeal_status>\n        <repeal_date/>\n        <remain_in_force>false</remain_in_force>\n        <mission>New</mission>\n        <current_revision_status>PreviousEnforced</current_revision_status>\n      </current_revision_info>\n    </law>\n  </laws>\n</laws_response>\n',
}

const ExampleLawRevisionsJsonExample = {
  value: {
    law_info: {
      law_type: 'Act',
      law_id: '503AC0000000036',
      law_num: '令和三年法律第三十六号',
      law_num_era: 'Reiwa',
      law_num_year: 3,
      law_num_type: 'Act',
      law_num_num: '036',
      promulgation_date: '2021-05-19',
    },
    revisions: [
      {
        law_revision_id: '503AC0000000036_20240607_506AC0000000046',
        law_type: 'Act',
        law_title: 'デジタル庁設置法',
        law_title_kana: 'でじたるちょうせっちほう',
        abbrev: null,
        category: '行政組織',
        updated: '2024-06-07T09:15:59+09:00',
        amendment_promulgate_date: '2024-06-07',
        amendment_enforcement_date: '2024-06-07',
        amendment_enforcement_comment: null,
        amendment_scheduled_enforcement_date: null,
        amendment_law_id: '506AC0000000046',
        amendment_law_title:
          '情報通信技術の活用による行政手続等に係る関係者の利便性の向上並びに行政運営の簡素化及び効率化を図るためのデジタル社会形成基本法等の一部を改正する法律',
        amendment_law_title_kana: null,
        amendment_law_num: '令和六年法律第四十六号',
        amendment_type: '3',
        repeal_status: 'None',
        repeal_date: null,
        remain_in_force: false,
        mission: 'New',
        current_revision_status: 'PreviousEnforced',
      },
    ],
  },
}

const ExampleLawRevisionsXmlExample = {
  value:
    '<law_revisions_response>\n  <law_info>\n    <law_type>Act</law_type>\n    <law_id>503AC0000000036</law_id>\n    <law_num>令和三年法律第三十六号</law_num>\n    <law_num_era>Reiwa</law_num_era>\n    <law_num_year>3</law_num_year>\n    <law_num_type>Act</law_num_type>\n    <law_num_num>036</law_num_num>\n    <promulgation_date>2021-05-19</promulgation_date>\n  </law_info>\n  <revisions>\n    <revision>\n      <law_revision_id>503AC0000000036_20240607_506AC0000000046</law_revision_id>\n      <law_type>Act</law_type>\n      <law_title>デジタル庁設置法</law_title>\n      <law_title_kana>でじたるちょうせっちほう</law_title_kana>\n      <abbrev>\n      </abbrev>\n      <category>行政組織</category>\n      <updated>2024-06-07T09:15:59+09:00</updated>\n      <amendment_promulgate_date>2024-06-07</amendment_promulgate_date>\n      <amendment_enforcement_date>2024-06-07</amendment_enforcement_date>\n      <amendment_enforcement_comment/>\n      <amendment_scheduled_enforcement_date/>\n      <amendment_law_id>506AC0000000046</amendment_law_id>\n      <amendment_law_title>情報通信技術の活用による行政手続等に係る関係者の利便性の向上並びに行政運営の簡素化及び効率化を図るためのデジタル社会形成基本法等の一部を改正する法律</amendment_law_title>\n      <amendment_law_title_kana/>\n      <amendment_law_num>令和六年法律第四十六号</amendment_law_num>\n      <amendment_type>3</amendment_type>\n      <repeal_status>None</repeal_status>\n      <repeal_date/>\n      <remain_in_force>false</remain_in_force>\n      <mission>New</mission>\n      <current_revision_status>PreviousEnforced</current_revision_status>\n    </revision>\n  </revisions>\n</law_revisions_response>\n',
}

const ExampleLawDataJsonExample = {
  value: {
    attached_files_info: {
      image_data: '',
      attached_files: [
        {
          law_revision_id: '411AC0000000127_19990813_000000000000000',
          src: './pict/H11HO127-001.jpg',
          updated: '2024-11-23T01:05:36+09:00',
        },
        {
          law_revision_id: '411AC0000000127_19990813_000000000000000',
          src: './pict/H11HO127-002.jpg',
          updated: '2024-11-23T01:05:36+09:00',
        },
      ],
    },
    law_info: {
      law_type: 'Act',
      law_id: '411AC0000000127',
      law_num: '平成十一年法律第百二十七号',
      law_num_era: 'Heisei',
      law_num_year: '11',
      law_num_type: 'Act',
      law_num_num: '127',
      promulgation_date: '1999-08-13',
    },
    revision_info: {
      law_revision_id: '411AC0000000127_19990813_000000000000000',
      law_type: 'Act',
      law_title: '国旗及び国歌に関する法律',
      law_title_kana: 'こっきおよびこっかにかんするほうりつ',
      abbrev: '国旗国歌法,日の丸君が代法,国旗・国歌法',
      category: '文化',
      updated: '2024-07-21T13:56:59+09:00',
      amendment_promulgate_date: '1999-08-13',
      amendment_enforcement_date: '1999-08-13',
      amendment_enforcement_comment: null,
      amendment_scheduled_enforcement_date: null,
      amendment_law_id: null,
      amendment_law_title: null,
      amendment_law_title_kana: '',
      amendment_law_num: null,
      amendment_type: '1',
      repeal_status: 'None',
      repeal_date: null,
      remain_in_force: false,
      mission: 'New',
      current_revision_status: 'CurrentEnforced',
    },
    law_full_text: {
      tag: 'Law',
      attr: {
        Era: 'Heisei',
        Lang: 'ja',
        LawType: 'Act',
        Num: '127',
        Year: '11',
        PromulgateMonth: '08',
        PromulgateDay: '13',
      },
      children: [
        { tag: 'LawNum', attr: '', children: ['平成十一年法律第百二十七号'] },
        {
          tag: 'LawBody',
          attr: '',
          children: [
            {
              tag: 'LawTitle',
              attr: {
                Kana: 'こっきおよびこっかにかんするほうりつ',
                Abbrev: '国旗国歌法,日の丸君が代法,国旗・国歌法',
                AbbrevKana: 'こ,ひ,こ',
              },
              children: ['国旗及び国歌に関する法律'],
            },
            {
              tag: 'MainProvision',
              attr: '',
              children: [
                {
                  tag: 'Article',
                  attr: { Delete: 'false', Hide: 'false', Num: '1' },
                  children: [
                    { tag: 'ArticleCaption', attr: '', children: ['（国旗）'] },
                    { tag: 'ArticleTitle', attr: '', children: ['第一条'] },
                    { tag: 'Paragraph', attr: { Hide: 'false', Num: '1', OldStyle: 'false' } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
}

const ExampleLawDataJson2Example = {
  value: {
    attached_files_info: {
      image_data: '',
      attached_files: [
        {
          law_revision_id: '411AC0000000127_19990813_000000000000000',
          src: './pict/H11HO127-001.jpg',
          updated: '2024-11-23T01:05:36+09:00',
        },
        {
          law_revision_id: '411AC0000000127_19990813_000000000000000',
          src: './pict/H11HO127-002.jpg',
          updated: '2024-11-23T01:05:36+09:00',
        },
      ],
    },
    law_info: {
      law_type: 'Act',
      law_id: '411AC0000000127',
      law_num: '平成十一年法律第百二十七号',
      law_num_era: 'Heisei',
      law_num_num: '127',
      law_num_type: 'Act',
      law_num_year: '11',
      promulgation_date: '1999-08-13',
    },
    revision_info: {
      abbrev: '国旗国歌法,日の丸君が代法,国旗・国歌法',
      amendment_enforcement_comment: null,
      amendment_enforcement_date: '1999-08-13',
      amendment_law_id: null,
      amendment_law_num: null,
      amendment_law_title: null,
      amendment_law_title_kana: null,
      amendment_promulgate_date: '1999-08-13',
      amendment_scheduled_enforcement_date: null,
      amendment_type: '1',
      category: '文化',
      current_revision_status: 'CurrentEnforced',
      law_revision_id: '411AC0000000127_19990813_000000000000000',
      law_title: '国旗及び国歌に関する法律',
      law_title_kana: 'こっきおよびこっかにかんするほうりつ',
      law_type: 'Act',
      mission: 'New',
      remain_in_force: 'false',
      repeal_date: null,
      repeal_status: 'None',
      updated: '2024-07-21T13:56:59+09:00',
    },
    law_full_text: {
      Law: {
        LawBody: {
          LawTitle: '国旗及び国歌に関する法律',
          LawNum: '平成十一年法律第百二十七号',
          MainProvision: {
            Article: [
              {
                ArticleCaption: '（国旗）',
                ArticleTitle: '第一条',
                Paragraph: [
                  {
                    ParagraphNum: null,
                    ParagraphSentence: { Sentence: ['国旗は、日章旗とする。'] },
                  },
                  {
                    ParagraphNum: '２',
                    ParagraphSentence: { Sentence: ['日章旗の制式は、別記第一のとおりとする。'] },
                  },
                ],
              },
              {
                ArticleCaption: '（国歌）',
                ArticleTitle: '第二条',
                Paragraph: [
                  {
                    ParagraphNum: null,
                    ParagraphSentence: { Sentence: ['国歌は、君が代とする。'] },
                  },
                  {
                    ParagraphNum: '２',
                    ParagraphSentence: {
                      Sentence: ['君が代の歌詞及び楽曲は、別記第二のとおりとする。'],
                    },
                  },
                ],
              },
            ],
          },
          SupplProvision: {
            Paragraph: [
              {
                ParagraphCaption: '（施行期日）',
                ParagraphNum: '１',
                ParagraphSentence: { Sentence: ['この法律は、公布の日から施行する。'] },
              },
              {
                ParagraphCaption: '（商船規則の廃止）',
                ParagraphNum: '２',
                ParagraphSentence: {
                  Sentence: ['商船規則（明治三年太政官布告第五十七号）は、廃止する。'],
                },
              },
              {
                ParagraphCaption: '（日章旗の制式の特例）',
                ParagraphNum: '３',
                ParagraphSentence: {
                  Sentence: [
                    '日章旗の制式については、当分の間、別記第一の規定にかかわらず、寸法の割合について縦を横の十分の七とし、かつ、日章の中心の位置について旗の中心から旗<Ruby>竿<Rt>ざお</Rt></Ruby>側に横の長さの百分の一偏した位置とすることができる。',
                  ],
                },
              },
            ],
            SupplProvisionLabel: '附　則',
          },
        },
      },
    },
  },
}

const ExampleLawDataXmlExample = {
  value:
    '<law_data_response>\n  <attached_files_info>\n    <image_data>\n    </image_data>\n    <attached_files>\n      <attached_file>\n        <law_revision_id>411AC0000000127_19990813_000000000000000</law_revision_id>\n        <src>./pict/H11HO127-001.jpg</src>\n        <updated>2024-11-23T01:05:36+09:00</updated>\n      </attached_file>\n      <attached_file>\n        <law_revision_id>411AC0000000127_19990813_000000000000000</law_revision_id>\n        <src>./pict/H11HO127-002.jpg</src>\n        <updated>2024-11-23T01:05:36+09:00</updated>\n      </attached_file>\n    </attached_files>\n  </attached_files_info>\n  <law_info>\n    <law_type>Act</law_type>\n    <law_id>411AC0000000127</law_id>\n    <law_num>平成十一年法律第百二十七号</law_num>\n    <law_num_era>Heisei</law_num_era>\n    <law_num_year>11</law_num_year>\n    <law_num_type>Act</law_num_type>\n    <law_num_num>127</law_num_num>\n    <promulgation_date>1999-08-13</promulgation_date>\n  </law_info>\n  <revision_info>\n    <law_revision_id>411AC0000000127_19990813_000000000000000</law_revision_id>\n    <law_type>Act</law_type>\n    <law_title>国旗及び国歌に関する法律</law_title>\n    <law_title_kana>こっきおよびこっかにかんするほうりつ</law_title_kana>\n    <abbrev>国旗国歌法,日の丸君が代法,国旗・国歌法</abbrev>\n    <category>文化</category>\n    <updated>2024-07-21T13:56:59+09:00</updated>\n    <amendment_promulgate_date>1999-08-13</amendment_promulgate_date>\n    <amendment_enforcement_date>1999-08-13</amendment_enforcement_date>\n    <amendment_enforcement_comment/>\n    <amendment_scheduled_enforcement_date/>\n    <amendment_law_id/>\n    <amendment_law_title/>\n    <amendment_law_title_kana>\n    </amendment_law_title_kana>\n    <amendment_law_num/>\n    <amendment_type>1</amendment_type>\n    <repeal_status>None</repeal_status>\n    <repeal_date/>\n    <remain_in_force>false</remain_in_force>\n    <mission>New</mission>\n    <current_revision_status>CurrentEnforced</current_revision_status>\n  </revision_info>\n  <law_full_text>\n    <Law Era="Heisei" Lang="ja" LawType="Act" Num="127" PromulgateDay="13" PromulgateMonth="08" Year="11">\n      <LawNum>平成十一年法律第百二十七号</LawNum>\n      <LawBody>\n        <LawTitle Abbrev="国旗国歌法,日の丸君が代法,国旗・国歌法" AbbrevKana="こ,ひ,こ" Kana="こっきおよびこっかにかんするほうりつ">国旗及び国歌に関する法律</LawTitle>\n        <MainProvision>\n          <Article Delete="false" Hide="false" Num="1">\n            <ArticleCaption>（国旗）</ArticleCaption>\n            <ArticleTitle>第一条</ArticleTitle>\n            <Paragraph Hide="false" Num="1" OldStyle="false">\n              <ParagraphNum/>\n              <ParagraphSentence>\n                <Sentence WritingMode="vertical">国旗は、日章旗とする。</Sentence>\n              </ParagraphSentence>\n            </Paragraph>\n            <Paragraph Hide="false" Num="2" OldStyle="false">\n              <ParagraphNum>２</ParagraphNum>\n              <ParagraphSentence>\n                <Sentence WritingMode="vertical">日章旗の制式は、別記第一のとおりとする。</Sentence>\n              </ParagraphSentence>\n            </Paragraph>\n          </Article>\n          <Article Delete="false" Hide="false" Num="2">\n            <ArticleCaption>（国歌）</ArticleCaption>\n            <ArticleTitle>第二条</ArticleTitle>\n            <Paragraph Hide="false" Num="1" OldStyle="false">\n              <ParagraphNum/>\n              <ParagraphSentence>\n                <Sentence WritingMode="vertical">国歌は、君が代とする。</Sentence>\n              </ParagraphSentence>\n            </Paragraph>\n            <Paragraph Hide="false" Num="2" OldStyle="false">\n              <ParagraphNum>２</ParagraphNum>\n              <ParagraphSentence>\n                <Sentence WritingMode="vertical">君が代の歌詞及び楽曲は、別記第二のとおりとする。</Sentence>\n              </ParagraphSentence>\n            </Paragraph>\n          </Article>\n        </MainProvision>\n        <SupplProvision>\n          <SupplProvisionLabel>附　則</SupplProvisionLabel>\n          <Paragraph Hide="false" Num="1" OldStyle="false">\n            <ParagraphCaption>（施行期日）</ParagraphCaption>\n            <ParagraphNum>１</ParagraphNum>\n            <ParagraphSentence>\n              <Sentence WritingMode="vertical">この法律は、公布の日から施行する。</Sentence>\n            </ParagraphSentence>\n          </Paragraph>\n          <Paragraph Hide="false" Num="2" OldStyle="false">\n            <ParagraphCaption>（商船規則の廃止）</ParagraphCaption>\n            <ParagraphNum>２</ParagraphNum>\n            <ParagraphSentence>\n              <Sentence WritingMode="vertical">商船規則（明治三年太政官布告第五十七号）は、廃止する。</Sentence>\n            </ParagraphSentence>\n          </Paragraph>\n          <Paragraph Hide="false" Num="3" OldStyle="false">\n            <ParagraphCaption>（日章旗の制式の特例）</ParagraphCaption>\n            <ParagraphNum>３</ParagraphNum>\n            <ParagraphSentence>\n              <Sentence WritingMode="vertical">\n                  日章旗の制式については、当分の間、別記第一の規定にかかわらず、寸法の割合について縦を横の十分の七とし、かつ、日章の中心の位置について旗の中心から旗\n                <Ruby>\n                    竿\n                  <Rt>ざお</Rt>\n                </Ruby>\n                  側に横の長さの百分の一偏した位置とすることができる。\n              </Sentence>\n            </ParagraphSentence>\n          </Paragraph>\n        </SupplProvision>\n        <AppdxNote>\n          <AppdxNoteTitle WritingMode="vertical">別記第一</AppdxNoteTitle>\n          <RelatedArticleNum>（第一条関係）</RelatedArticleNum>\n          <TableStruct>\n            <TableStructTitle WritingMode="vertical">日章旗の制式</TableStructTitle>\n            <Table WritingMode="vertical">\n              <TableRow>\n                <TableColumn BorderBottom="none" BorderLeft="none" BorderRight="none" BorderTop="none" Valign="top">\n                  <FigStruct>\n                    <Fig src="./pict/H11HO127-001.jpg"/>\n                  </FigStruct>\n                </TableColumn>\n                <TableColumn BorderBottom="none" BorderLeft="none" BorderRight="none" BorderTop="none" Valign="top">\n                  <Item Delete="false" Hide="false" Num="1">\n                    <ItemTitle>一</ItemTitle>\n                    <ItemSentence>\n                      <Sentence WritingMode="vertical">寸法の割合及び日章の位置</Sentence>\n                    </ItemSentence>\n                    <List>\n                      <ListSentence>\n                        <Column LineBreak="false" Num="1">\n                          <Sentence WritingMode="vertical">縦</Sentence>\n                        </Column>\n                        <Column LineBreak="false" Num="2">\n                          <Sentence WritingMode="vertical">横の三分の二</Sentence>\n                        </Column>\n                      </ListSentence>\n                    </List>\n                    <List>\n                      <ListSentence>\n                        <Sentence WritingMode="vertical">日章</Sentence>\n                      </ListSentence>\n                      <Sublist1>\n                        <Sublist1Sentence>\n                          <Column LineBreak="false" Num="1">\n                            <Sentence WritingMode="vertical">直径</Sentence>\n                          </Column>\n                          <Column LineBreak="false" Num="2">\n                            <Sentence WritingMode="vertical">縦の五分の三</Sentence>\n                          </Column>\n                        </Sublist1Sentence>\n                      </Sublist1>\n                      <Sublist1>\n                        <Sublist1Sentence>\n                          <Column LineBreak="false" Num="1">\n                            <Sentence WritingMode="vertical">中心</Sentence>\n                          </Column>\n                          <Column LineBreak="false" Num="2">\n                            <Sentence WritingMode="vertical">旗の中心</Sentence>\n                          </Column>\n                        </Sublist1Sentence>\n                      </Sublist1>\n                    </List>\n                  </Item>\n                  <Item Delete="false" Hide="false" Num="2">\n                    <ItemTitle>二</ItemTitle>\n                    <ItemSentence>\n                      <Sentence WritingMode="vertical">彩色</Sentence>\n                    </ItemSentence>\n                    <List>\n                      <ListSentence>\n                        <Column LineBreak="false" Num="1">\n                          <Sentence WritingMode="vertical">地</Sentence>\n                        </Column>\n                        <Column LineBreak="false" Num="2">\n                          <Sentence WritingMode="vertical">白色</Sentence>\n                        </Column>\n                      </ListSentence>\n                    </List>\n                    <List>\n                      <ListSentence>\n                        <Column LineBreak="false" Num="1">\n                          <Sentence WritingMode="vertical">日章</Sentence>\n                        </Column>\n                        <Column LineBreak="false" Num="2">\n                          <Sentence WritingMode="vertical">紅色</Sentence>\n                        </Column>\n                      </ListSentence>\n                    </List>\n                  </Item>\n                </TableColumn>\n              </TableRow>\n            </Table>\n          </TableStruct>\n        </AppdxNote>\n        <AppdxNote>\n          <AppdxNoteTitle WritingMode="vertical">別記第二</AppdxNoteTitle>\n          <RelatedArticleNum>（第二条関係）</RelatedArticleNum>\n          <TableStruct>\n            <TableStructTitle WritingMode="vertical">君が代の歌詞及び楽曲</TableStructTitle>\n            <Table WritingMode="vertical">\n              <TableRow>\n                <TableColumn BorderBottom="none" BorderLeft="none" BorderRight="none" BorderTop="none" Valign="top">\n                  <Item Delete="false" Hide="false" Num="1">\n                    <ItemTitle>一</ItemTitle>\n                    <ItemSentence>\n                      <Sentence WritingMode="vertical">歌詞</Sentence>\n                    </ItemSentence>\n                    <List>\n                      <ListSentence>\n                        <Sentence WritingMode="vertical">君が代は</Sentence>\n                      </ListSentence>\n                    </List>\n                    <List>\n                      <ListSentence>\n                        <Sentence WritingMode="vertical">千代に八千代に</Sentence>\n                      </ListSentence>\n                    </List>\n                    <List>\n                      <ListSentence>\n                        <Sentence WritingMode="vertical">さざれ石の</Sentence>\n                      </ListSentence>\n                    </List>\n                    <List>\n                      <ListSentence>\n                        <Sentence WritingMode="vertical">いわおとなりて</Sentence>\n                      </ListSentence>\n                    </List>\n                    <List>\n                      <ListSentence>\n                        <Sentence WritingMode="vertical">こけのむすまで</Sentence>\n                      </ListSentence>\n                    </List>\n                  </Item>\n                </TableColumn>\n                <TableColumn BorderBottom="none" BorderLeft="none" BorderRight="none" BorderTop="none" Valign="top">\n                  <Item Delete="false" Hide="false" Num="2">\n                    <ItemTitle>二</ItemTitle>\n                    <ItemSentence>\n                      <Sentence WritingMode="vertical">楽曲</Sentence>\n                    </ItemSentence>\n                    <FigStruct>\n                      <Fig src="./pict/H11HO127-002.jpg"/>\n                    </FigStruct>\n                  </Item>\n                </TableColumn>\n              </TableRow>\n            </Table>\n          </TableStruct>\n        </AppdxNote>\n      </LawBody>\n    </Law>\n  </law_full_text>\n</law_data_response>\n',
}

const ExampleKeywordJsonExample = {
  value: {
    total_count: 447,
    sentence_count: 100,
    next_offset: 100,
    items: [
      {
        law_info: {
          law_type: 'Rule',
          law_id: '428M60020000006',
          law_num: '平成二十八年個人情報保護委員会規則第六号',
          law_num_era: 'Heisei',
          law_num_year: 28,
          law_num_type: 'Rule',
          law_num_num: '006',
          promulgation_date: '2016-12-15',
        },
        revision_info: {
          law_revision_id: '428M60020000006_20240527_506M60020000003',
          law_type: 'Rule',
          law_title:
            '行政手続における特定の個人を識別するための番号の利用等に関する法律第十九条第九号の規定により提供することができる利用特定個人情報の範囲の限定に関する規則',
          law_title_kana:
            'ぎょうせいてつづきにおけるとくていのこじんをしきべつするためのばんごうのりようとうにかんするほうりつだいじゅうきゅうじょうだいきゅうごうのきていによりていきょうすることができるりようとくていこじんじょうほうのはんいのげんていにかんするきそく',
          abbrev: null,
          category: '行政手続',
          updated: '2024-06-12T14:43:47+09:00',
          amendment_promulgate_date: '2024-05-27',
          amendment_enforcement_date: '2024-05-27',
          amendment_enforcement_comment: null,
          amendment_scheduled_enforcement_date: null,
          amendment_law_id: '506M60020000003',
          amendment_law_title:
            '行政手続における特定の個人を識別するための番号の利用等に関する法律等の一部を改正する法律の施行に伴う個人情報保護委員会関係規則の整備に関する規則',
          amendment_law_title_kana: null,
          amendment_law_num: '令和六年個人情報保護委員会規則第三号',
          amendment_type: '3',
          repeal_status: 'None',
          repeal_date: null,
          remain_in_force: false,
          mission: 'New',
          current_revision_status: 'CurrentEnforced',
        },
        sentences: [
          {
            position: 'amendsupplprovision',
            text: 'この規則は、<span>デジタル庁</span>設置法及びデジタル社会の形成を図るための関係法律の整備に関する法律の施行の日（令和三年九月一日）から施行する。',
          },
        ],
      },
    ],
  },
}

const ExampleKeywordXmlExample = {
  value:
    '<keyword_response>\n  <total_count>447</total_count>\n  <sentence_count>100</sentence_count>\n  <next_offset>100</next_offset>\n  <items>\n    <item>\n      <law_info>\n        <law_type>Rule</law_type>\n        <law_id>428M60020000006</law_id>\n        <law_num>平成二十八年個人情報保護委員会規則第六号</law_num>\n        <law_num_era>Heisei</law_num_era>\n        <law_num_year>28</law_num_year>\n        <law_num_type>Rule</law_num_type>\n        <law_num_num>006</law_num_num>\n        <promulgation_date>2016-12-15</promulgation_date>\n      </law_info>\n      <revision_info>\n        <law_revision_id>428M60020000006_20240527_506M60020000003</law_revision_id>\n        <law_type>Rule</law_type>\n        <law_title>行政手続における特定の個人を識別するための番号の利用等に関する法律第十九条第九号の規定により提供することができる利用特定個人情報の範囲の限定に関する規則</law_title>\n        <law_title_kana>ぎょうせいてつづきにおけるとくていのこじんをしきべつするためのばんごうのりようとうにかんするほうりつだいじゅうきゅうじょうだいきゅうごうのきていによりていきょうすることができるりようとくていこじんじょうほうのはんいのげんていにかんするきそく</law_title_kana>\n        <abbrev/>\n        <category>行政手続</category>\n        <updated>2024-06-12T14:43:47+09:00</updated>\n        <amendment_promulgate_date>2024-05-27</amendment_promulgate_date>\n        <amendment_enforcement_date>2024-05-27</amendment_enforcement_date>\n        <amendment_enforcement_comment/>\n        <amendment_scheduled_enforcement_date/>\n        <amendment_law_id>506M60020000003</amendment_law_id>\n        <amendment_law_title>行政手続における特定の個人を識別するための番号の利用等に関する法律等の一部を改正する法律の施行に伴う個人情報保護委員会関係規則の整備に関する規則</amendment_law_title>\n        <amendment_law_title_kana/>\n        <amendment_law_num>令和六年個人情報保護委員会規則第三号</amendment_law_num>\n        <amendment_type>3</amendment_type>\n        <repeal_status>None</repeal_status>\n        <repeal_date/>\n        <remain_in_force>false</remain_in_force>\n        <mission>New</mission>\n        <current_revision_status>CurrentEnforced</current_revision_status>\n      </revision_info>\n      <sentences>\n        <sentence>\n          <position>amendsupplprovision</position>\n          <text>この規則は、<span>デジタル庁</span>設置法及びデジタル社会の形成を図るための関係法律の整備に関する法律の施行の日（令和三年九月一日）から施行する。</text>\n        </sentence>\n      </sentences>\n    </item>\n  </items>\n</keyword_response>\n',
}

const ExampleLaws_400errorJsonExample = {
  value: { code: '400004', message: '日付（asof等）が誤っています。' },
}

const ExampleLaws_400errorXmlExample = {
  value:
    '<error_info>\n    <code>400004</code>\n    <message>日付（asof等）が誤っています。</message>\n</error_info>\n',
}

const ExampleLaws_500errorJsonExample = {
  value: { code: '500001', message: 'サーバ内処理で異常が発生しました。' },
}

const ExampleLaws_500errorXmlExample = {
  value:
    '<error_info>\n    <code>500001</code>\n    <message>サーバ内処理で異常が発生しました。</message>\n</error_info>\n',
}

const ExampleLawRevisions_400errorJsonExample = {
  value: { code: '400004', message: '日付（asof等）が誤っています。' },
}

const ExampleLawRevisions_400errorXmlExample = {
  value:
    '<error_info>\n    <code>400004</code>\n    <message>日付（asof等）が誤っています。</message>\n</error_info>\n',
}

const ExampleLawRevisions_500errorJsonExample = {
  value: { code: '500001', message: 'サーバ内処理で異常が発生しました。' },
}

const ExampleLawRevisions_500errorXmlExample = {
  value:
    '<error_info>\n    <code>500001</code>\n    <message>サーバ内処理で異常が発生しました。</message>\n</error_info>\n',
}

const ExampleLawData_400errorJsonExample = {
  value: { code: '400004', message: '日付（asof等）が誤っています。' },
}

const ExampleLawData_400errorXmlExample = {
  value:
    '<error_info>\n    <code>400004</code>\n    <message>日付（asof等）が誤っています。</message>\n</error_info>\n',
}

const ExampleLawData_500errorJsonExample = {
  value: { code: '500001', message: 'サーバ内処理で異常が発生しました。' },
}

const ExampleLawData_500errorXmlExample = {
  value:
    '<error_info>\n    <code>500001</code>\n    <message>サーバ内処理で異常が発生しました。</message>\n</error_info>\n',
}

const ExampleAttachment_400errorJsonExample = {
  value: { code: '404003', message: '指定のパラメータで取得できる添付ファイルは存在しません。' },
}

const ExampleAttachment_400errorXmlExample = {
  value:
    '<error_info>\n    <code>404003</code>\n    <message>指定のパラメータで取得できる添付ファイルは存在しません。</message>\n</error_info>\n',
}

const ExampleAttachment_500errorJsonExample = {
  value: { code: '500001', message: 'サーバ内処理で異常が発生しました。' },
}

const ExampleAttachment_500errorXmlExample = {
  value:
    '<error_info>\n    <code>500001</code>\n    <message>サーバ内処理で異常が発生しました。</message>\n</error_info>\n',
}

const ExampleKeyword_400errorJsonExample = {
  value: { code: '400004', message: '日付（asof等）が誤っています。' },
}

const ExampleKeyword_400errorXmlExample = {
  value:
    '<error_info>\n    <code>400004</code>\n    <message>日付（asof等）が誤っています。</message>\n</error_info>\n',
}

const ExampleKeyword_500errorJsonExample = {
  value: { code: '500001', message: 'サーバ内処理で異常が発生しました。' },
}

const ExampleKeyword_500errorXmlExample = {
  value:
    '<error_info>\n    <code>500001</code>\n    <message>サーバ内処理で異常が発生しました。</message>\n</error_info>\n',
}

const ExampleLawFile_400errorJsonExample = {
  value: { code: '400004', message: '日付（asof等）が誤っています。' },
}

const ExampleLawFile_400errorXmlExample = {
  value:
    '<error_info>\n    <code>400004</code>\n    <message>日付（asof等）が誤っています。</message>\n</error_info>\n',
}

const ExampleLawFile_500errorJsonExample = {
  value: { code: '500001', message: 'サーバ内処理で異常が発生しました。' },
}

const ExampleLawFile_500errorXmlExample = {
  value:
    '<error_info>\n    <code>500001</code>\n    <message>サーバ内処理で異常が発生しました。</message>\n</error_info>\n',
}

export const getLawsRoute = createRoute({
  method: 'get',
  path: '/laws',
  tags: ['laws-api'],
  summary: '法令一覧取得API',
  description:
    '## 概要\n> &nbsp;&nbsp;指定条件に該当する法令データが返却されます。<br>\n> &nbsp;&nbsp;例えば、法令名（`law_title`）を指定した場合、指定した法令名を含む法令データが返却されます。<br>\n> &nbsp;&nbsp;法令種別（`law_type`）を指定した場合、指定した法令種別の法令データが返却されます。<br>\n> &nbsp;&nbsp;指定必須のパラメータはありません。また、全パラメータを組み合わせる必要もありません。<br>\n> &nbsp;&nbsp;必要なパラメータを組み合わせて法令データを取得することができます。<br>\n\n\n## 補足事項\n> &nbsp;&nbsp;本エンドポイントは、指定条件に該当するデータを`laws`に格納します。<br>\n> &nbsp;&nbsp;`laws`配下に格納されるデータの解説は以下のとおりです。<br>\n\n> * `law_info`\n>> &nbsp;&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しないデータが格納されます。\n<br>\n\n> * `revision_info`\n>> &nbsp;&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存するデータが格納されます。<br>\n>> &nbsp;&nbsp;&nbsp;法令の時点（`asof`）を指定した場合はその時点で最新の改正履歴を格納します。<br>\n\n> * `current_revision_info`\n>>  &nbsp;&nbsp;&nbsp;法令の時点（`asof`）等の指定にかかわらず、現時点で最新の改正履歴を格納します。<br>\n',
  operationId: 'get-laws',
  request: {
    query: z.object({
      law_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_id',
            in: 'query',
            description: '法令ID（部分一致）<br>\n> 例： `322CO0000000016`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_num: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_num',
            in: 'query',
            description: '法令番号（部分一致）<br>\n> 例： `昭和二十二年政令第十六号`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_num_era: LawNumEraSchema.openapi({
        param: {
          name: 'law_num_era',
          in: 'query',
          description: '法令番号の元号<br>\n> 例： `Showa`<br>\n',
          schema: { $ref: '#/components/schemas/law_num_era' },
          required: false,
        },
      }).exactOptional(),
      law_num_num: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_num_num',
            in: 'query',
            description: '法令番号の号数<br>\n> 例： `88`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_num_type: LawNumTypeSchema.openapi({
        param: {
          name: 'law_num_type',
          in: 'query',
          description:
            '法令番号の法令種別<br>\n種類の定義はSchemasの<a href="#model-law_num_type">`law_num_type`</a>を参照してください。<br>\n> 例： `Act`<br>\n',
          schema: { $ref: '#/components/schemas/law_num_type' },
          required: false,
        },
      }).exactOptional(),
      law_num_year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'law_num_year',
            in: 'query',
            description: '法令番号の年<br>\n> 例： `60`<br>\n',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      law_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_title',
            in: 'query',
            description: '法令名又は法令略称（部分一致）<br>\n> 例： `国家行政組織法`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_title_kana: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_title_kana',
            in: 'query',
            description: '法令名読み（部分一致）<br>\n> 例： `こっかぎょうせいそしきほう`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(LawTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'law_type',
            in: 'query',
            style: 'form',
            explode: false,
            description: '法令種別（複数指定可）<br>\n> 例： `Act,Rule`<br>\n',
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/law_type' } },
          },
        }),
      amendment_law_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_law_id',
            in: 'query',
            description:
              '改正法令の法令ID（部分一致）<br>\n> 注意：本パラメータを指定した場合、パラメータ：法令の時点（`asof`）を無視します。<br>\n> 例： `429AC0000000054`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      asof: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'asof',
            in: 'query',
            description:
              '法令の時点。指定時点以前で最新の改正履歴を、各法令の `revision_info` に格納します。省略した場合、現時点で検索します。<br>\n> 例： `2023-07-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      category_cd: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CategoryCdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'category_cd',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '事項別分類コード（複数指定可）<br>\nコードの定義はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br>\n> 例： `001,002`<br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/category_cd' } },
            required: false,
          },
        }),
      mission: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(MissionSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'mission',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）を指定（複数指定可）<br>\n> 例： `New,Partial`<br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/mission' } },
            required: false,
          },
        }),
      omit_current_revision_info: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'omit_current_revision_info',
            in: 'query',
            description:
              '`true`の場合、法令の時点（`asof`）に依存しない現在以前の最新の版の情報（`current_revision_info`）をレスポンスに含めない<br>\n> 例： `true`<br>\n> 既定値： `false`<br>\n',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      promulgation_date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'promulgation_date_from',
            in: 'query',
            description: '公布日（指定値を含む、それ以後）<br>\n> 例： `2023-07-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      promulgation_date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'promulgation_date_to',
            in: 'query',
            description: '公布日（指定値を含む、それ以前）<br>\n> 例： `2023-07-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      repeal_status: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(RepealStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'repeal_status',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '廃止等の状態（複数指定可）<br>\n状態の定義はSchemasの<a href="#model-repeal_status">`repeal_status`</a>を参照してください。<br>\n> 例： `Repeal,Expire`<br>\n\n<font color=red>`Expire`、`LossOfEffectiveness`指定時のレスポンスデータについて、<br>\n廃止日（`repeal_date`）は実際に法令が廃止された日ではなく、データ廃止処理日を指しますので御留意ください。</font><br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/repeal_status' } },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'レスポンスの `laws` の取得件数の上限。<br>\n> 例：`50`<br>\n> 既定値：`100`<br>\n',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description:
              'レスポンスデータの取得開始位置。例えば`10`を指定した場合、11件目からレスポンスデータが取得される。<br>\n1〜10件目は取得されない。<br>\n> 例： `10`<br>\n> 既定値： `0`<br>\n',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              'レスポンスの並び順を指定（複数指定可）。<br>\n<a href="#model-law_info">`law_info`</a> 及び <a href="#model-revision_info">`revision_info`</a> 配下のフィールドを指定可能。<br>\n先頭に + を付けると昇順、- を付けると降順、符号がない場合は昇順。<br><br>\n\n例： `+law_info.law_id,-revision_info.amendment_promulgate_date`<br>\n既定値： `law_info.law_id`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      response_format: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ResponseFormatSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'response_format',
            in: 'query',
            description:
              'レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br>\n> 例： `json`<br>\n> 既定値： 指定なし<br>\n',
            schema: { nullable: true, allOf: [{ $ref: '#/components/schemas/response_format' }] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 リクエスト処理、レスポンス処理が正しく行えた時',
      content: {
        'application/json': {
          schema: LawsResponseSchema,
          examples: { 'Example 1': ExampleLawsJsonExample },
        },
        'application/xml': {
          schema: LawsResponseSchema,
          examples: { 'Example 2': ExampleLawsXmlExample },
        },
      },
    },
    400: {
      description: '400 Bad Request API クライアント側の問題によるエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLaws_400errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLaws_400errorXmlExample },
        },
      },
    },
    500: {
      description: '500 Internal Server Error サーバ内処理でエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLaws_500errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLaws_500errorXmlExample },
        },
      },
    },
  },
})

export const getLawRevisionsLawIdOrNumRoute = createRoute({
  method: 'get',
  path: '/law_revisions/{law_id_or_num}',
  tags: ['laws-api'],
  summary: '法令履歴一覧取得API',
  description:
    '## 概要\n> &nbsp;&nbsp;法令ID（`law_id`）又は法令番号（`law_num`）を指定必須として、指定した法令の改正履歴が返却されます。<br>\n> &nbsp;&nbsp;改正履歴は`revisions`配下に格納されており、上から法令履歴ID（`law_revision_id`）が新しい順で改正履歴が返却されます。<br>\n> &nbsp;&nbsp;指定任意のパラメータと組み合わせることで、返却データを絞り込むことができます。<br>\n\n## 補足事項\n> &nbsp;&nbsp;本エンドポイントで返却されるデータの解説は以下のとおりです。<br>\n\n> * `law_info`\n>> &nbsp;&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しない法令データが格納されます。\n\n> * `revisions`\n>> &nbsp;&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存する法令データが格納されます。<br>\n',
  operationId: 'get-revisions',
  request: {
    params: z.object({
      law_id_or_num: z
        .string()
        .openapi({
          param: {
            name: 'law_id_or_num',
            in: 'path',
            required: true,
            description:
              '法令ID又は法令番号（完全一致）。<br>\n> 例： `503AC0000000036`、`令和三年法律第三十六号`<br>\n',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      law_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_title',
            in: 'query',
            description:
              '法令名又は法令略称（部分一致又は正規表現）<br>\n* 本パラメータを`/`で囲まずに指定した場合は、部分一致で検索します。<br>\n> 例： `デジタル庁設置法`<br>\n* 本パラメータを`/`で囲んで指定した場合は、正規表現を利用して完全一致で検索します。<br>\n> 例： `/デジタル庁.*法/`、`/^デジタル庁設置法$/`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_title_kana: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_title_kana',
            in: 'query',
            description: '法令名読み（部分一致）<br>\n> 例： `でじたるちょうせっちほう`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amendment_date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_date_from',
            in: 'query',
            description:
              '改正法令施行期日（指定値を含む、それ以後）<br>\n> 例： `2024-06-07`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      amendment_date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_date_to',
            in: 'query',
            description:
              '改正法令施行期日（指定値を含む、それ以前）<br>\n> 例： `2024-06-07`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      amendment_law_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_law_id',
            in: 'query',
            description: '改正法令の法令ID（部分一致）<br>\n> 例： `506AC0000000046`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amendment_law_num: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_law_num',
            in: 'query',
            description:
              '改正法令の法令番号（部分一致）<br>\n> 例： `令和六年法律第四十六号`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amendment_law_title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_law_title',
            in: 'query',
            description:
              '改正法令の法令名（部分一致又は正規表現）<br>\n* 本パラメータを`/`で囲まずに指定した場合は、部分一致で検索します。<br>\n> 例： `デジタル社会形成基本法等の一部を改正する法律`<br>\n* 本パラメータを`/`で囲んで指定した場合は、正規表現を利用して完全一致で検索します。<br>\n> 例： `/^情報通信技術.*法律$/`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amendment_law_title_kana: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_law_title_kana',
            in: 'query',
            description:
              '改正法令の法令名読み（部分一致）<br>\n> 例： `でじたるしゃかいけいせいきほんほうとうのいちぶをかいせいするほうりつ`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      amendment_promulgate_date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_promulgate_date_from',
            in: 'query',
            description: '改正法令公布日（指定値を含む、それ以後）<br>\n> 例： `2024-06-07`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      amendment_promulgate_date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_promulgate_date_to',
            in: 'query',
            description: '改正法令公布日（指定値を含む、それ以前）<br>\n> 例： `2024-06-07`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      amendment_type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(AmendmentTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'amendment_type',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '改正種別（複数指定可）<br>\n改正種別の定義はSchemasの<a href="#model-amendment_type">`amendment_type`</a>を参照してください。<br>\n> 例： `1,3`<br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/amendment_type' } },
            required: false,
          },
        }),
      category_cd: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CategoryCdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'category_cd',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '事項別分類コード（複数指定可）<br>\nコードの定義はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br>\n> 例： `011,021`<br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/category_cd' } },
            required: false,
          },
        }),
      current_revision_status: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CurrentRevisionStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'current_revision_status',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '履歴の状態（法令の時点（`asof`）の値に関わらず常に現時点の状態と比較する）（複数指定可）<br>\n状態の定義はSchemasの<a href="#model-current_revision_status">`current_revision_status`</a>を参照してください。<br>\n> 例： `CurrentEnforced,PreviousEnforced`<br>\n',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/current_revision_status' },
            },
            required: false,
          },
        }),
      mission: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(MissionSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'mission',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '新規制定又は被改正法令（`New`）・一部改正法令（`Partial`）を指定（複数指定可）<br>\n> 例： `New,Partial`<br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/mission' } },
            required: false,
          },
        }),
      remain_in_force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'remain_in_force',
            in: 'query',
            description:
              '廃止後の効力（`true`:廃止後でも効力を有するもの / `false`:廃止後に効力を有しないもの）<br>\n> 例： `false`<br>\n',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      repeal_date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'repeal_date_from',
            in: 'query',
            description: '廃止日（指定値を含む、それ以後）<br>\n> 例： `2024-04-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      repeal_date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'repeal_date_to',
            in: 'query',
            description: '廃止日（指定値を含む、それ以前）<br>\n> 例： `2024-04-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      repeal_status: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(RepealStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'repeal_status',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '廃止等の状態（複数指定可）<br>\n状態の定義はSchemasの<a href="#model-repeal_status">`repeal_status`</a>を参照してください。<br>\n\n> 例： `None,Repeal`<br>\n\n<font color=red>`Expire`、`LossOfEffectiveness`指定時のレスポンスデータについて、<br>\n廃止日（`repeal_date`）は実際に法令が廃止された日ではなく、データ廃止処理日を指しますので御留意ください。</font><br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/repeal_status' } },
            required: false,
          },
        }),
      updated_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_from',
            in: 'query',
            description: 'データの更新日（指定値を含む、それ以後）<br>\n> 例： `2024-06-07`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      updated_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'updated_to',
            in: 'query',
            description: 'データの更新日（指定値を含む、それ以前）<br>\n> 例： `2024-06-07`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      response_format: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ResponseFormatSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'response_format',
            in: 'query',
            description:
              'レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br>\n> 例： `json`<br>\n> 既定値： 指定なし<br>\n',
            schema: { nullable: true, allOf: [{ $ref: '#/components/schemas/response_format' }] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 リクエスト処理、レスポンス処理が正しく行えた時',
      content: {
        'application/json': {
          schema: LawRevisionsResponseSchema,
          examples: { 'Example 1': ExampleLawRevisionsJsonExample },
        },
        'application/xml': {
          schema: LawRevisionsResponseSchema,
          examples: { 'Example 2': ExampleLawRevisionsXmlExample },
        },
      },
    },
    400: {
      description: '400 Bad Request API クライアント側の問題によるエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLawRevisions_400errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLawRevisions_400errorXmlExample },
        },
      },
    },
    500: {
      description: '500 Internal Server Error サーバ内処理でエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLawRevisions_500errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLawRevisions_500errorXmlExample },
        },
      },
    },
  },
})

export const getLawDataLawIdOrNumOrRevisionIdRoute = createRoute({
  method: 'get',
  path: '/law_data/{law_id_or_num_or_revision_id}',
  tags: ['laws-api'],
  summary: '法令本文取得API',
  description:
    '## 概要\n> &nbsp;&nbsp;法令ID（`law_id`）、法令番号（`law_num`）、法令履歴ID（`law_revision_id`）のいずれかを指定必須として、指定した法令の本文を取得します。<br>\n> * &nbsp;&nbsp;法令ID（`law_id`）、法令番号（`law_num`）を指定した場合は、現時点で最新のリビジョンの本文を取得します。<br>\n> * &nbsp;&nbsp;法令履歴ID（`law_revision_id`）を指定した場合は、該当するリビジョンの本文を取得します。<br>\n> * &nbsp;&nbsp;上記の指定必須のパラメータがわからない場合は、法令一覧取得APIで法令名（`law_title`）等を指定してパラメータを調べてください。\n\n>&nbsp;&nbsp;<font color="red"><b>注意：</b><br>\n>&nbsp;&nbsp;法令本文のデータサイズが大きい場合、エラーが発生することがあります。<br>\n>&nbsp;&nbsp;エラーが発生した場合は、SwaggerUI以外（Microsoft EdgeやGoogle Chromeといったブラウザで法令APIのURLを直接指定等）で実行してください。</font>\n\n\n## 補足事項\n> &nbsp;&nbsp;本エンドポイントで返却されるデータの解説は以下のとおりです。<br>\n\n> * `attached_files_info`\n>>&nbsp;&nbsp;添付ファイルに関するデータが格納されます。\n\n\n> * `law_info`\n>>&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しないデータが格納されます。\n\n\n> * `revision_info`\n>>&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存するデータが格納されます。<br>\n>>&nbsp;&nbsp;法令の時点（`asof`）を指定した場合はその時点で最新の改正履歴を格納します。\n\n> * `law_full_text`\n>>&nbsp;&nbsp;法令の本文情報が格納されます。<br>\n>>&nbsp;&nbsp;要素（`elm`）パラメータを指定することで要素を絞り込んで本文を取得することができます。指定方法はSchemasの<a href="#model-elm">`elm`</a>を参照してください。\n\n\n## 法令本文のレスポンス形式\n> &nbsp;&nbsp;レスポンス形式（`response_format`）を指定することでデータのレスポンス形式をJSON、又はXMLに切り替えることができます。<br>\n> &nbsp;&nbsp;また、法令本文の形式（`law_full_text_format`）を指定することで法令本文（`law_full_text`）のレスポンス形式を切り替えることができます。\n\n> * レスポンス形式（`response_format`）を`json` 、かつ法令本文（`law_full_text`） を`xml`で指定した場合、法令本文（`law_full_text`）はXML形式で返却されます。<br>\n\n> * レスポンス形式（`response_format`）を`xml`、かつ法令本文（`law_full_text`）を`json`で指定した場合、法令本文（`law_full_text`）はJSON形式で返却されます。<br>\n\n>> <font color="red">上記のように`response_format`と`law_full_text`が異なる場合、`law_full_text`の返却値はBase64でエンコードしておりますので、ご利用の際はBase64でデコードしてください。</font>\n\n\n## XMLとJSONの関係性\n\n>> 例）以下のXMLをJSONで表した場合の対応表を以下に記します。<br>\n>> ### XML\n>>> <pre><code>&lt;Sentence Num="1" WritingMode="vertical"&gt;\n&nbsp;&nbsp;この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・\n&lt;/Sentence&gt;\n</pre></code>\n\n>> ### JSON（詳細版）\n>>> <pre><code>{\n&nbsp;&nbsp;"tag": "Sentence",\n&nbsp;&nbsp;"attr": {\n&nbsp;&nbsp;&nbsp;&nbsp;"Num": "1",\n&nbsp;&nbsp;&nbsp;&nbsp;"WritingMode": "vertical"\n&nbsp;&nbsp;},\n&nbsp;&nbsp;"children": [\n&nbsp;&nbsp;&nbsp;&nbsp;"この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"\n&nbsp;&nbsp;]\n}\n</pre></code>\n\n>> ### JSON（簡易版）\n>>> <pre><code>{\n&nbsp;&nbsp;"Sentence": [  \n&nbsp;&nbsp;&nbsp;&nbsp; "この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"\n&nbsp;&nbsp;&nbsp;&nbsp;]\n}\n</code></pre>\n\n>>> - インライン要素（Ruby等）はテキストにタグごと埋め込まれます。\n>>> - 属性は`AmendLawNum`、`Extract`、`Paragraph`要素の`Num`のみ、フィールドとして含まれます。\n\n\n>> ### XMLとJSON（詳細版）の対応表\n>>> <table bgcolor="white" border="1">\n  <tr bgcolor="#DDFFFF">\n    <th width="10%">項目名</th>\n    <th width="30%">XML</th>\n    <th width="30%">JSON（詳細版）</th>\n    <th width="30%">JSON（簡易版）</th>\n  </tr>\n  <tr>\n    <td>タグ</td>\n    <td>Sentence</td>\n    <td>"tag": "Sentence"</td>\n    <td>Sentence</td>\n  </tr>\n  <tr>\n    <td>属性</td>\n    <td>Num="1" WritingMode="vertical"</td>\n    <td>"attr": {"Num": "1","WritingMode": "vertical"}</td>\n    <td>なし（一部の属性は、該当タグと同階層に別要素として格納する場合あり）</td>\n    </tr>\n  <tr>\n    <td>子要素</td>\n    <td>この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・</td>\n    <td>"children": ["この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・"]</td>\n    <td>この法律は、処分、行政指導及び届出に関する手続並びに命令等を定める手続に関し、・・・</td>\n  </tr>\n</table>\n',
  operationId: 'get-law_data',
  request: {
    params: z.object({
      law_id_or_num_or_revision_id: z
        .string()
        .openapi({
          param: {
            name: 'law_id_or_num_or_revision_id',
            in: 'path',
            required: true,
            description:
              '法令ID、法令番号又は法令履歴ID（完全一致）。<br>\n> 例： `411AC0000000127`、`平成十一年法律第百二十七号`、`411AC0000000127_19990813_000000000000000`<br>\n',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      law_full_text_format: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ResponseFormatSchema.nullable(),
      )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'law_full_text_format',
            in: 'query',
            description:
              '法令本文の形式（`json` 又は `xml`）。指定なしの場合は`response_format`により判断される形式に合わせる。<br>\n> 例： `json`<br>\n> 既定値： 指定なし<br>\n',
            schema: {
              nullable: true,
              allOf: [{ $ref: '#/components/schemas/response_format' }],
              default: null,
            },
            required: false,
          },
        }),
      asof: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'asof',
            in: 'query',
            description:
              '法令の時点。指定時点以前で最新の履歴に対応する法令本文を取得します。<br>\n`law_id_or_num_or_revision_id`に法令履歴IDを指定した場合は無視されます。<br>\n> 例： `2023-04-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      elm: ElmSchema.openapi({
        param: {
          name: 'elm',
          in: 'query',
          description:
            '法令本文の一部のみを取得する場合、取得する条項等の要素を指定します。指定しない場合は全文を取得します。<br>\n指定方法はSchemasの<a href="#model-elm">`elm`</a>を参照してください。<br>\n> 例： `MainProvision-Paragraph[1]`<br>\n',
          schema: { allOf: [{ $ref: '#/components/schemas/elm' }] },
          required: false,
        },
      }).exactOptional(),
      json_format: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['full', 'light']).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'json_format',
            in: 'query',
            description:
              'JSONレスポンスの`law_full_text`の形式を指定します。<br>\n`full`を指定した場合、JSON（詳細版）が返却されます。法令XMLを解説した詳細な構造です。<br>\n`light`を指定した場合、JSON（簡易版）が返却されます。パースに最適化された簡易的な構造です。<br>\nレスポンス形式がJSONの場合のみ有効です。<br>\n> 例： `light`<br>\n> 既定値： `full`<br>\n',
            schema: { nullable: true, type: 'string', enum: ['full', 'light'] },
            required: false,
          },
        }),
      omit_amendment_suppl_provision: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'omit_amendment_suppl_provision',
            in: 'query',
            description:
              '`true`の場合、レスポンスの`law_full_text`の中に改正法令の附則を含めない<br>\n> 例： `true`<br>\n> 既定値： `false`<br>\n',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      include_attached_file_content: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_attached_file_content',
            in: 'query',
            description:
              '`true`の場合、レスポンスの`attached_files_info`の`image_data`を返却します。<br>\n> 例： `true`<br>\n> 既定値： `false`<br>\n',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      response_format: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ResponseFormatSchema.nullable(),
      )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'response_format',
            in: 'query',
            description:
              'レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br>\n> 例： `json`<br>\n> 既定値： 指定なし<br>\n',
            schema: {
              nullable: true,
              allOf: [{ $ref: '#/components/schemas/response_format' }],
              default: null,
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 リクエスト処理、レスポンス処理が正しく行えた時',
      content: {
        'application/json': {
          schema: LawDataResponseSchema,
          examples: {
            'Example 1': ExampleLawDataJsonExample,
            'Example 2': ExampleLawDataJson2Example,
          },
        },
        'application/xml': {
          schema: LawDataResponseSchema,
          examples: { 'Example 2': ExampleLawDataXmlExample },
        },
      },
    },
    400: {
      description: '400 Bad Request API クライアント側の問題によるエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLawData_400errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLawData_400errorXmlExample },
        },
      },
    },
    500: {
      description: '500 Internal Server Error サーバ内処理でエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLawData_500errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLawData_500errorXmlExample },
        },
      },
    },
  },
})

export const getAttachmentLawRevisionIdRoute = createRoute({
  method: 'get',
  path: '/attachment/{law_revision_id}',
  tags: ['laws-api'],
  summary: '添付ファイル取得API',
  description:
    '## 概要\n> &nbsp;&nbsp;法令履歴ID（`law_revision_id`）を指定必須パラメータとして、法令本文の添付ファイルを取得します。<br>\n> &nbsp;&nbsp;法令データ上に存在する添付ファイルの拡張子には、`jpg`、`pdf`があります。<br>\n\n> &nbsp;&nbsp;法令本文取得APIのレスポンスデータに含まれる`attached_files_info`のsrc属性（`src`）を指定することで特定の添付ファイルが取得できます。<br>\n> &nbsp;&nbsp;src属性（`src`）を指定しない場合は、法令本文に含まれる添付ファイルをZip形式で一括取得できます。\n\n\n## 補足事項\n> &nbsp;&nbsp;src属性（`src`）の指定有無によってレスポンスの動作が異なります。<br>\n\n> &nbsp;&nbsp;src属性（`src`）指定時、\n> * &nbsp;&nbsp;SwaggerUIでAPIを実行した場合、`jpg`が返却される場合は画像が表示されます。`pdf`の場合はダウンロードリンクが表示されます。\n> * &nbsp;&nbsp;URLを直接入力した場合、`jpg`が返却される場合は画像が表示されます。`pdf`の場合はファイルがダウンロードされます。\n\n> &nbsp;&nbsp;src属性（`src`）未指定時、\n> * &nbsp;&nbsp;SwaggerUIでAPIを実行した場合、`jpg`、`pdf`のいずれもダウンロードリンクが表示されます。\n> * &nbsp;&nbsp;URLを直接入力した場合、`jpg`、`pdf`のいずれもZip形式でファイルがダウンロードされます。\n',
  operationId: 'get-attachment',
  request: {
    params: z.object({
      law_revision_id: z
        .string()
        .openapi({
          param: {
            name: 'law_revision_id',
            in: 'path',
            required: true,
            description:
              '法令履歴ID（完全一致）<br>\n> jpgの例：`411AC0000000127_19990813_000000000000000`<br>\n<br>\n> pdfの例：`322M40000010094_20240601_506M60000010035`<br>\n',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      src: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'src',
            in: 'query',
            description:
              '法令XML中のFig要素のsrc属性<br>\n>  jpgの例：`./pict/H11HO127-001.jpg`<br>\n<br>\n>  pdfの例：`./pict/2FH00000007000.pdf`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 リクエスト処理、レスポンス処理が正しく行えた時',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: 'ファイルの内容（バイナリ形式）',
            }),
          examples: { 'Example 1': { value: '（ここにバイナリデータが返却されます）' } },
        },
      },
    },
    400: {
      description: '400 Bad Request API クライアント側の問題によるエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleAttachment_400errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleAttachment_400errorXmlExample },
        },
      },
    },
    500: {
      description: '500 Internal Server Error サーバ内処理でエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleAttachment_500errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleAttachment_500errorXmlExample },
        },
      },
    },
  },
})

export const getKeywordRoute = createRoute({
  method: 'get',
  path: '/keyword',
  tags: ['laws-api'],
  summary: 'キーワード検索API',
  description:
    '## 概要\n> キーワード（`keyword`）を指定必須とし、法令本文内に指定したキーワード（`keyword`）を含む法令を取得します。<br>\n> 本エンドポイントでは、法令本文（`law_full_text`）を対象に全文検索を行います。<br>\n> 指定任意のパラメータと組み合わせることで、返却データを絞り込むことができます。\n\n## 補足事項\n> &nbsp;&nbsp;本エンドポイントで返却されるデータの解説は以下のとおりです。\n\n> * `law_info`\n>> &nbsp;&nbsp;&nbsp;法令番号（`law_num`）や公布日（`promulgation_date`）等、改正履歴に依存しないデータが格納されます。\n<br>\n\n> * `revision_info`\n>> &nbsp;&nbsp;&nbsp;改正後の法令名（`law_title`）や改正法令公布日（`amendment_promulgate_date`）等、改正履歴に依存するデータが格納されます。<br>\n>> &nbsp;&nbsp;&nbsp;法令の時点（`asof`）を指定した場合はその時点で最新の改正履歴を格納します。<br>\n\n> * ### `sentences`\n>> &nbsp;&nbsp;キーワード（`keyword`）に該当する法令本文の見出し等の構造（`position`）と条文内容（`text`）が格納されます。\n',
  operationId: 'get-keyword',
  request: {
    query: z.object({
      keyword: z
        .string()
        .openapi({
          param: {
            name: 'keyword',
            in: 'query',
            description:
              'キーワード<br>\n入力したキーワードを含む法令本文を検索します。<br>\nワイルドカード検索、AND検索、OR検索、NOT検索でキーワードを指定できます。<br>\n* ワイルドカード検索\n\n> 例えば、第○条のように一部のキーワードが不明な時にワイルドカードを使用すると、該当する法令本文を検索することができます。\n\n> <table bgcolor="white" border="1">\n   <tr bgcolor="#DDFFFF">\n     <th width=20%>キーワード</th>\n     <th width=20%>該当する例</th>\n     <th width=20%>備考</th>\n   </tr>\n   <tr>\n     <td>第*条</td>\n     <td>第二十一条</td>\n     <td>*は0文字以上の文字</td>\n   </tr>\n   <tr>\n     <td>第?条</td>\n     <td>第五条</td>\n     <td>?は1文字の文字</td>\n   </tr>\n</table>\n\n\n* AND検索、OR検索、NOT検索\n\n> 検索方法の仕様は、<a href="https://laws.e-gov.go.jp/help/#how-to-write-a-search-expression" target="_blank">検索式の書き方</a>をご覧ください。<br>\n> 複数のキーワードを記号でつなげることにより、AND検索、OR検索、NOT検索を組み合わせて検索することができます。<br>\n> ワイルドカード検索と組み合わせて検索することはできません。\n> <br>\n> <br>\n> 例： `デジタル庁`<br>\n',
            schema: { type: 'string' },
            required: true,
          },
        }),
      law_num: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_num',
            in: 'query',
            description:
              '法令番号（部分一致）<br>\n> 例： `平成二十八年個人情報保護委員会規則第六号`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_num_era: LawNumEraSchema.openapi({
        param: {
          name: 'law_num_era',
          in: 'query',
          description: '法令番号の元号<br>\n> 例： `Heisei`<br>\n',
          schema: { $ref: '#/components/schemas/law_num_era' },
          required: false,
        },
      }).exactOptional(),
      law_num_num: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'law_num_num',
            in: 'query',
            description: '法令番号の号数<br>\n> 例： `006`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      law_num_type: LawNumTypeSchema.openapi({
        param: {
          name: 'law_num_type',
          in: 'query',
          description:
            '法令番号の法令種別<br>\n種類の定義はSchemasの<a href="#model-law_num_type">`law_num_type`</a>を参照してください。<br>\n> 例： `Rule`<br>\n',
          schema: { $ref: '#/components/schemas/law_num_type' },
          required: false,
        },
      }).exactOptional(),
      law_num_year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'law_num_year',
            in: 'query',
            description: '法令番号の年<br>\n> 例： `28`<br>\n',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      law_type: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(LawTypeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'law_type',
            in: 'query',
            style: 'form',
            explode: false,
            description: '法令種別（複数指定可）<br>\n> 例： `Act,Rule`<br>\n',
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/law_type' } },
          },
        }),
      asof: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'asof',
            in: 'query',
            description:
              '法令の時点。指定時点以前で最新の改正履歴を、各法令の `revision_info` に格納します。省略した場合、現時点で検索します。<br>\n> 例： `2024-05-27`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      category_cd: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CategoryCdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'category_cd',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              '事項別分類コード（複数指定可）<br>\nコードの定義はSchemasの<a href="#model-category_cd">`category_cd`</a>を参照してください。<br>\n> 例： `011,021`<br>\n',
            schema: { type: 'array', items: { $ref: '#/components/schemas/category_cd' } },
            required: false,
          },
        }),
      promulgation_date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'promulgation_date_from',
            in: 'query',
            description: '公布日（開始）<br>\n> 例： `2016-12-15`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      promulgation_date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'promulgation_date_to',
            in: 'query',
            description: '公布日（終了）<br>\n> 例： `2016-12-15`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'レスポンスの`sentences`の`position`数の総和の上限。<br>\n> 例：`50`<br>\n>  既定値： `100`<br>\n>  上限値： `1000`\n',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description:
              'レスポンスデータの取得開始位置。例えば`10`を指定した場合、11件目からレスポンスデータが取得される。<br>\n1〜10件目は取得されない。<br>\n> 例： `10`<br>\n> 既定値： `0`<br>\n',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            style: 'form',
            explode: false,
            description:
              'レスポンスの並び順を指定（複数指定可）。<br>\n<a href="#model-law_info">`law_info`</a> 及び <a href="#model-revision_info">`revision_info`</a> 配下のフィールドを指定可能。<br>\n先頭に + を付けると昇順、- を付けると降順、符号がない場合は昇順。<br><br>\n\n例： `+law_info.law_id,-revision_info.amendment_promulgate_date`<br>\n既定値： `law_info.law_id`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      response_format: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        ResponseFormatSchema.nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'response_format',
            in: 'query',
            description:
              'レスポンス形式（`json` 又は `xml`）。指定なしの場合はAcceptヘッダから判断、判断できない場合は `json` とする。<br>\n> 例： `json`<br>\n> 既定値： 指定なし<br>\n',
            schema: { nullable: true, allOf: [{ $ref: '#/components/schemas/response_format' }] },
            required: false,
          },
        }),
      sentences_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sentences_limit',
            in: 'query',
            description:
              '`sentences`に表示される件数が制限されます。<br>\n<br>\n※本パラメータを指定した場合、<br>\n　`limit`で指定した件数とレスポンスで取得される件数が合わなくなることがあります。<br>\n　`limit`を上回る値を指定した場合、`limit`の指定値が優先されます。<br>\n> 例：`5`<br>\n',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      sentence_text_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sentence_text_size',
            in: 'query',
            description:
              'レスポンス：`items`->`sentences`->`text` の表示文字数（`highlight_tag`で指定したHTMLタグを含む）<br>\n> 例：`20`<br>\n> 既定値： `100`<br>\n',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      highlight_tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'highlight_tag',
            in: 'query',
            description:
              '`keyword`で指定された文言のヒット箇所を囲むHTMLタグ名。<br>\n> 例： `em`<br>\n> 規定値： `span`<br>\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 リクエスト処理、レスポンス処理が正しく行えた時',
      content: {
        'application/json': {
          schema: KeywordResponseSchema,
          examples: { 'Example 1': ExampleKeywordJsonExample },
        },
        'application/xml': {
          schema: KeywordResponseSchema,
          examples: { 'Example 2': ExampleKeywordXmlExample },
        },
      },
    },
    400: {
      description: '400 Bad Request API クライアント側の問題によるエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleKeyword_400errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleKeyword_400errorXmlExample },
        },
      },
    },
    500: {
      description: '500 Internal Server Error サーバ内処理でエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleKeyword_500errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleKeyword_500errorXmlExample },
        },
      },
    },
  },
})

export const getLawFileFileTypeLawIdOrNumOrRevisionIdRoute = createRoute({
  method: 'get',
  path: '/law_file/{file_type}/{law_id_or_num_or_revision_id}',
  tags: ['laws-api'],
  summary: '法令本文ファイル取得API',
  description:
    '## 概要\n> &nbsp;&nbsp;法令ID（`law_id`）、法令番号（`law_num`）、法令履歴ID（`law_revision_id`）のいずれかと、ファイル種別（`file_type`）を指定必須として、<br>\n> &nbsp;&nbsp;法令本文をダウンロードすることができます。\n',
  operationId: 'get-law_file',
  request: {
    params: z.object({
      law_id_or_num_or_revision_id: z
        .string()
        .openapi({
          param: {
            name: 'law_id_or_num_or_revision_id',
            in: 'path',
            required: true,
            description:
              '法令ID、法令番号又は法令履歴ID（完全一致）。<br>\n> 例： `405AC0000000088`、`昭和二十二年政令第十六号`、`322CO0000000016_20240401_505CO0000000293`<br>\n',
            schema: { type: 'string' },
          },
        }),
      file_type: FileTypeSchema.openapi({
        param: {
          name: 'file_type',
          in: 'path',
          required: true,
          description:
            'ファイル種別<br>\nコードの定義はSchemasの<a href="#model-file_type">`file_type`</a>を参照してください。<br>\n> 例： `xml`<br>\n',
          schema: { allOf: [{ $ref: '#/components/schemas/file_type' }] },
        },
      }),
    }),
    query: z.object({
      asof: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'asof',
            in: 'query',
            description:
              '法令の時点。指定時点以前で最新の履歴に対応する法令本文ファイルを取得します。<br>\n`law_id_or_num_or_revision_id`に法令履歴IDを指定した場合は無視されます。<br>\n> 例： `2023-04-01`<br>\n',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 リクエスト処理、レスポンス処理が正しく行えた時',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description: '法令本文ファイル（バイナリ形式）',
            }),
          examples: { 'Example 1': { value: '（ここにレスポンスボディが返却されます）' } },
        },
      },
    },
    400: {
      description: '400 Bad Request API クライアント側の問題によるエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLawFile_400errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLawFile_400errorXmlExample },
        },
      },
    },
    500: {
      description: '500 Internal Server Error サーバ内処理でエラー発生時',
      content: {
        'application/json': {
          schema: ErrorInfoSchema,
          examples: { 'Example 1': ExampleLawFile_500errorJsonExample },
        },
        'application/xml': {
          schema: ErrorInfoSchema,
          examples: { 'Example 2': ExampleLawFile_500errorXmlExample },
        },
      },
    },
  },
})
