import { createRoute, z } from '@hono/zod-openapi'

const DeliverySlipCancelStatusResponseSchema = z
  .object({
    delivery_slip: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854775000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854775000,
            description: '納品書ID',
          }),
        cancel_status: z
          .enum(['canceled', 'uncanceled'])
          .openapi({ description: '取消状態（canceled: 取消済み、uncanceled: 取消されていない）' }),
      })
      .openapi({ required: ['id', 'cancel_status'] }),
  })
  .openapi({ required: ['delivery_slip'] })
  .openapi('DeliverySlipCancelStatusResponse')

const DeliverySlipIndexResponseDeliverySlipsSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '納品書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    delivery_slip_number: z.string().max(255).openapi({ description: '納品書番号' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    delivery_slip_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '納品日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者 (デフォルト: 表示ユーザー名)' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
    sales_management_origin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'freee販売から作成された帳票かどうか' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'delivery_slip_number',
      'subject',
      'delivery_slip_date',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'report_url',
    ],
  })
  .openapi('DeliverySlipIndexResponseDeliverySlips')

const DeliverySlipIndexResponseSchema = z
  .object({ delivery_slips: z.array(DeliverySlipIndexResponseDeliverySlipsSchema) })
  .openapi({ required: ['delivery_slips'] })
  .openapi('DeliverySlipIndexResponse')

const DeliverySlipRequestLinesSchema = z
  .object({
    type: z
      .enum(['item', 'text'])
      .default('item')
      .exactOptional()
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- tax_rate、quantityは必須になります。\n- text: テキスト行\n- descriptionのみ入力可能です。\n- 入力がない場合、itemが利用されます。',
      }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '摘要（品名）' }),
    unit: z.string().min(1).max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .regex(/^-?[0-9]{0,13}(\.[0-9]{1,3})?$/)
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .exactOptional()
      .openapi({ description: '税率（%）（帳票の税額計算に用います。）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。',
      }),
    withholding: z.boolean().exactOptional().openapi({ description: '源泉徴収対象' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '勘定科目ID（取引登録の下書き保存で利用されます。）' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '税区分コード（取引登録の下書き保存で利用されます。）' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '品目ID（取引登録の下書き保存で利用されます。）' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '部門ID<br>\n- 取引登録の下書き保存で利用されます。\n- 親部門は利用できません。\n- グループ管理で制限された部門は利用できません。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>',
      }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント１ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け プロフェッショナルプラン以上で利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント２ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント３ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeliverySlipRequestLines')

const DeliverySlipRequestSchema = z
  .object({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          '帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）',
      }),
    delivery_slip_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '納品書番号<br>\n- 採番の設定が、[自動採番する]の場合、指定できません。\n- 採番の設定が、[自動採番する]以外の場合、必須になります。',
      }),
    branch_no: z.int().min(0).max(2147483647).exactOptional().openapi({ description: '枝番' }),
    delivery_slip_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '納品日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description:
          '発生日（取引登録の下書き保存で利用されます。）\n- 入力がない場合、納品日が補完されます。',
      }),
    subject: z.string().min(1).max(255).exactOptional().openapi({ description: '件名' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    delivery_slip_note: z
      .string()
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({ description: '備考' }),
    memo: z.string().min(1).max(2000).exactOptional().openapi({ description: '社内メモ' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          "取引先ID<br>\n取引先IDと取引先コードはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "取引先コード<br>\n取引先コードと取引先IDはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)', '（空白）'])
      .openapi({
        description:
          '敬称（御中、様、(空白)の3つから選択）\n- [非推奨]全角カッコの（空白）は削除予定です。\n- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。',
      }),
    partner_address_zipcode: z
      .string()
      .regex(/^[0-9]{3}-?[0-9]{4}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          '郵便番号\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。',
      }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。',
      }),
    partner_address_street_name1: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 市区町村・番地\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。',
      }),
    partner_address_street_name2: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 建物名・部屋番号など\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。',
      }),
    partner_contact_department: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先部署\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。',
      }),
    partner_contact_email_cc: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者メールアドレス（CC）\n- 入力がない場合、メールテンプレートに指定されたCCが利用されます。\n- カンマ区切りで複数メールアドレスに送付可能です。',
      }),
    partner_contact_email_to: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者メールアドレス（TO）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。\n- カンマ区切りで複数メールアドレスに送付可能です。',
      }),
    partner_contact_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者名\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先宛名\n- 帳票の宛名に利用されます。\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。',
      }),
    partner_sending_method: z
      .enum(['email', 'posting', 'email_and_posting'])
      .nullable()
      .exactOptional()
      .openapi({ description: '取引先への送付方法' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者(デフォルトは表示ユーザー名が補完されます)' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社名を上書きする場合に指定します。' }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社説明を上書きする場合に指定します。' }),
    lines: z.array(DeliverySlipRequestLinesSchema).openapi({ description: '納品書の明細行' }),
  })
  .openapi({
    required: [
      'company_id',
      'delivery_slip_date',
      'tax_entry_method',
      'tax_fraction',
      'withholding_tax_entry_method',
      'partner_title',
      'lines',
    ],
  })
  .openapi('DeliverySlipRequest')

const DeliverySlipResponseDeliverySlipTemplateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: '納品書タイトル' }),
    invoice_registration_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'インボイス制度適格請求書発行事業者登録番号\n- 先頭T数字13桁の固定14桁の文字列\n<a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>',
      }),
    company_name: z.string().exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    message: z.string().exactOptional().openapi({ description: 'メッセージ' }),
  })
  .openapi({
    description: '帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）',
    required: [],
  })
  .openapi('DeliverySlipResponseDeliverySlipTemplate')

const DeliverySlipResponseDeliverySlipLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はquantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '勘定科目ID' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '税区分コード' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '品目ID' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '部門ID' }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント１ID',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント２ID',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント３ID',
      }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('DeliverySlipResponseDeliverySlipLines')

const DeliverySlipResponseDeliverySlipSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '納品書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    delivery_slip_number: z.string().max(255).openapi({ description: '納品書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    delivery_slip_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '納品日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    payment_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '期日\n- payment_typeがtransferの場合、入金期日に該当します。\n- payment_typeがdirect_debitの場合、振替日に該当します。',
      }),
    payment_type: z
      .enum(['transfer', 'direct_debit'])
      .exactOptional()
      .openapi({ description: '入金方法 (振込: transfer, 振替: direct_debit)' }),
    delivery_slip_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_email_cc: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者メールアドレス（CC）' }),
    partner_contact_email_to: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者メールアドレス（TO）' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    partner_bank_account: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先口座' }),
    partner_sending_method: z
      .enum(['email', 'posting', 'email_and_posting'])
      .nullable()
      .exactOptional()
      .openapi({ description: '取引先への送付方法' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z.string().max(255).exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    template: DeliverySlipResponseDeliverySlipTemplateSchema.exactOptional(),
    lines: z
      .array(DeliverySlipResponseDeliverySlipLinesSchema)
      .openapi({ description: '納品書の明細行' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'delivery_slip_number',
      'subject',
      'delivery_slip_date',
      'delivery_slip_note',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('DeliverySlipResponseDeliverySlip')

const DeliverySlipResponseSchema = z
  .object({ delivery_slip: DeliverySlipResponseDeliverySlipSchema })
  .openapi({ required: ['delivery_slip'] })
  .openapi('DeliverySlipResponse')

const DeliverySlipShowResponseDeliverySlipLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はquantity、unit_price、tax_rate、amount_excluding_taxはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('DeliverySlipShowResponseDeliverySlipLines')

const DeliverySlipShowResponseDeliverySlipSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '納品書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    delivery_slip_number: z.string().max(255).openapi({ description: '納品書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    delivery_slip_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '納品日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    delivery_slip_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    template: DeliverySlipResponseDeliverySlipTemplateSchema.exactOptional(),
    lines: z
      .array(DeliverySlipShowResponseDeliverySlipLinesSchema)
      .openapi({ description: '納品書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
    sales_management_origin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'freee販売から作成された帳票かどうか' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'delivery_slip_number',
      'subject',
      'delivery_slip_date',
      'delivery_slip_note',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('DeliverySlipShowResponseDeliverySlip')

const DeliverySlipShowResponseSchema = z
  .object({ delivery_slip: DeliverySlipShowResponseDeliverySlipSchema })
  .openapi({ required: ['delivery_slip'] })
  .openapi('DeliverySlipShowResponse')

const InvoiceCancelStatusResponseSchema = z
  .object({
    invoice: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854775000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854775000,
            description: '請求書ID',
          }),
        cancel_status: z
          .enum(['canceled', 'uncanceled'])
          .openapi({ description: '取消状態（canceled: 取消済み、uncanceled: 取消されていない）' }),
      })
      .openapi({ required: ['id', 'cancel_status'] }),
  })
  .openapi({ required: ['invoice'] })
  .openapi('InvoiceCancelStatusResponse')

const InvoiceIndexResponseInvoicesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '請求書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    invoice_number: z.string().max(255).openapi({ description: '請求書番号' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    billing_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '請求日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    payment_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '期日\n- payment_typeがtransferの場合、入金期日に該当します。\n- payment_typeがdirect_debitの場合、振替日に該当します。\n- payment_typeがcardの場合、カード支払期日に該当します。',
      }),
    payment_type: z
      .enum(['transfer', 'direct_debit', 'card', 'cash', 'bill_payable'])
      .exactOptional()
      .openapi({
        description:
          "入金方法 (振込: transfer, 振替: direct_debit, カード: card, 現金: cash, 手形: bill_payable)\n- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。\n- cash（現金）、bill_payable（手形）はレスポンスでのみ返却される値です。既存データやインポート、freee販売連携などで登録された請求書で返却されます。Public APIの請求書の作成・更新では指定できません。",
      }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled', 'canceled', 'unprocessed', 'failed'])
      .openapi({
        description:
          '決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）',
      }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_brought_forward: z
      .float64()
      .min(-999999999999)
      .max(999999999999)
      .nullable()
      .openapi({ description: '繰越金額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者 (デフォルト: 表示ユーザー名)' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
    sales_management_origin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'freee販売から作成された帳票かどうか' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'invoice_number',
      'subject',
      'billing_date',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'amount_brought_forward',
      'partner_id',
      'report_url',
    ],
  })
  .openapi('InvoiceIndexResponseInvoices')

const InvoiceIndexResponseSchema = z
  .object({ invoices: z.array(InvoiceIndexResponseInvoicesSchema) })
  .openapi({ required: ['invoices'] })
  .openapi('InvoiceIndexResponse')

const InvoiceRequestLinesSchema = z
  .object({
    type: z
      .enum(['item', 'text'])
      .default('item')
      .exactOptional()
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- tax_rate、quantityは必須になります。\n- text: テキスト行\n- descriptionのみ入力可能です。\n- 入力がない場合、itemが利用されます。',
      }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '摘要（品名）' }),
    sales_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({ description: '取引日' }),
    unit: z.string().min(1).max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .regex(/^-?[0-9]{0,13}(\.[0-9]{1,3})?$/)
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .exactOptional()
      .openapi({ description: '税率（%）（帳票の税額計算に用います。）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。',
      }),
    withholding: z.boolean().exactOptional().openapi({ description: '源泉徴収対象' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '勘定科目ID（取引登録の下書き保存で利用されます。）' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '税区分コード（取引登録の下書き保存で利用されます。）' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '品目ID（取引登録の下書き保存で利用されます。）' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '部門ID<br>\n- 取引登録の下書き保存で利用されます。\n- 親部門は利用できません。\n- グループ管理で制限された部門は利用できません。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>',
      }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント１ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け プロフェッショナルプラン以上で利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント２ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント３ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceRequestLines')

const InvoiceRequestSchema = z
  .object({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          '帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）',
      }),
    invoice_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '請求書番号<br>\n- 採番の設定が、[自動採番する]の場合、指定できません。\n- 採番の設定が、[自動採番する]以外の場合、必須になります。',
      }),
    branch_no: z.int().min(0).max(2147483647).exactOptional().openapi({ description: '枝番' }),
    billing_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '請求日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description:
          '発生日（取引登録の下書き保存で利用されます。）\n- 入力がない場合、請求日が補完されます。',
      }),
    payment_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description:
          '期日\n- payment_typeがtransferの場合、入金期日に該当します。\n- payment_typeがdirect_debitの場合、振替日に該当します。\n- payment_typeがcardの場合、カード支払期日に該当します。',
      }),
    payment_type: z
      .enum(['transfer', 'direct_debit', 'card'])
      .default('transfer')
      .exactOptional()
      .openapi({
        description:
          "入金方法 (振込: transfer, 振替: direct_debit, カード: card)\n- payment_typeがcardの場合、決済連携（M's PayBridge連携）の設定が必要です。\n- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。",
      }),
    subject: z.string().min(1).max(255).exactOptional().openapi({ description: '件名' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    include_amount_brought_forward: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '繰越金額を含めるかどうか（true: 含める、false: 含めない）<br>\n- 含める場合は、amount_brought_forwardに繰越金額を指定することができます。\n- 含める場合でamount_brought_forwardの指定がない場合は、 帳票に指定されたpartner_id, partner_codeに紐づく未決済残高が繰越金額として利用されます。',
      }),
    amount_brought_forward: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description:
          '繰越金額<br>\ninclude_amount_brought_forward に true を指定する場合のみ、指定できます。',
      }),
    invoice_note: z.string().min(0).max(4000).exactOptional().openapi({ description: '備考' }),
    memo: z.string().min(1).max(2000).exactOptional().openapi({ description: '社内メモ' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          "取引先ID<br>\n取引先IDと取引先コードはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "取引先コード<br>\n取引先コードと取引先IDはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)', '（空白）'])
      .openapi({
        description:
          '敬称（御中、様、(空白)の3つから選択）\n- [非推奨]全角カッコの（空白）は削除予定です。\n- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。',
      }),
    partner_address_zipcode: z
      .string()
      .regex(/^[0-9]{3}-?[0-9]{4}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          '郵便番号\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。',
      }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。',
      }),
    partner_address_street_name1: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 市区町村・番地\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。',
      }),
    partner_address_street_name2: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 建物名・部屋番号など\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。',
      }),
    partner_contact_department: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先部署\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。',
      }),
    partner_contact_email_cc: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者メールアドレス（CC）\n- 入力がない場合、メールテンプレートに指定されたCCが利用されます。\n- カンマ区切りで複数メールアドレスに送付可能です。',
      }),
    partner_contact_email_to: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者メールアドレス（TO）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。\n- カンマ区切りで複数メールアドレスに送付可能です。',
      }),
    partner_contact_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者名\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先宛名\n- 帳票の宛名に利用されます。\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。',
      }),
    partner_sending_method: z
      .enum(['email', 'posting', 'email_and_posting'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '取引先への送付方法\n- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。\n- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。',
      }),
    partner_bank_account: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先口座\n- payment_typeがdirect_debitの場合に指定可能です。\n- 入力がない場合またはpayment_typeがtransferの場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先口座が利用されます。',
      }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者(デフォルトは表示ユーザー名が補完されます)' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社名を上書きする場合に指定します。' }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社説明を上書きする場合に指定します。' }),
    bank_account_to_transfer: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '振込先を上書きする場合に指定します。' }),
    lines: z.array(InvoiceRequestLinesSchema).openapi({ description: '請求書の明細行' }),
  })
  .openapi({
    required: [
      'company_id',
      'billing_date',
      'tax_entry_method',
      'tax_fraction',
      'withholding_tax_entry_method',
      'partner_title',
      'lines',
    ],
  })
  .openapi('InvoiceRequest')

const InvoiceResponseInvoiceTemplateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: '請求書タイトル' }),
    invoice_registration_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'インボイス制度適格請求書発行事業者登録番号\n- 先頭T数字13桁の固定14桁の文字列\n<a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>',
      }),
    company_name: z.string().exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    bank_account_to_transfer: z.string().exactOptional().openapi({ description: '振込先' }),
    message: z.string().exactOptional().openapi({ description: 'メッセージ' }),
  })
  .openapi({
    description: '帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）',
    required: [],
  })
  .openapi('InvoiceResponseInvoiceTemplate')

const InvoiceResponseInvoiceLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    sales_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '取引日' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '勘定科目ID' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '税区分コード' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '品目ID' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '部門ID' }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント１ID',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント２ID',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント３ID',
      }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('InvoiceResponseInvoiceLines')

const InvoiceResponseInvoiceSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '請求書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    invoice_number: z.string().max(255).openapi({ description: '請求書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    billing_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '請求日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    payment_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '期日\n- payment_typeがtransferの場合、入金期日に該当します。\n- payment_typeがdirect_debitの場合、振替日に該当します。\n- payment_typeがcardの場合、カード支払期日に該当します。',
      }),
    payment_type: z
      .enum(['transfer', 'direct_debit', 'card', 'cash', 'bill_payable'])
      .exactOptional()
      .openapi({
        description:
          "入金方法 (振込: transfer, 振替: direct_debit, カード: card, 現金: cash, 手形: bill_payable)\n- payment_typeがcardの場合、決済連携（M's PayBridge連携）の設定が必要です。\n- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。\n- cash（現金）、bill_payable（手形）はレスポンスでのみ返却される値です。既存データやインポート、freee販売連携などで登録された請求書で返却されます。Public APIの請求書の作成・更新では指定できません。",
      }),
    invoice_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled', 'canceled', 'unprocessed', 'failed'])
      .openapi({
        description:
          '決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）',
      }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    amount_brought_forward: z
      .float64()
      .min(-999999999999)
      .max(999999999999)
      .nullable()
      .openapi({ description: '繰越金額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_email_cc: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者メールアドレス（CC）' }),
    partner_contact_email_to: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者メールアドレス（TO）' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    partner_bank_account: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先口座' }),
    partner_sending_method: z
      .enum(['email', 'posting', 'email_and_posting'])
      .nullable()
      .exactOptional()
      .openapi({ description: '取引先への送付方法' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z.string().max(255).exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    bank_account_to_transfer: z.string().exactOptional().openapi({ description: '振込先' }),
    template: InvoiceResponseInvoiceTemplateSchema.exactOptional(),
    lines: z.array(InvoiceResponseInvoiceLinesSchema).openapi({ description: '請求書の明細行' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'invoice_number',
      'subject',
      'billing_date',
      'invoice_note',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'amount_brought_forward',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('InvoiceResponseInvoice')

const InvoiceResponseSchema = z
  .object({ invoice: InvoiceResponseInvoiceSchema })
  .openapi({ required: ['invoice'] })
  .openapi('InvoiceResponse')

const InvoiceShowResponseInvoiceLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_taxはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    sales_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '取引日' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('InvoiceShowResponseInvoiceLines')

const InvoiceShowResponseInvoiceSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '請求書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    invoice_number: z.string().max(255).openapi({ description: '請求書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    billing_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '請求日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    payment_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '期日\n- payment_typeがtransferの場合、入金期日に該当します。\n- payment_typeがdirect_debitの場合、振替日に該当します。\n- payment_typeがcardの場合、カード支払期日に該当します。',
      }),
    payment_type: z
      .enum(['transfer', 'direct_debit', 'card', 'cash', 'bill_payable'])
      .exactOptional()
      .openapi({
        description:
          "入金方法 (振込: transfer, 振替: direct_debit, カード: card, 現金: cash, 手形: bill_payable)\n- payment_typeがdirect_debitの場合、決済連携（M's PayBridge連携）の設定状況によって入金方法種別が異なります。M's PayBridge連携を設定済みで取引先決済連携で有効な口座が登録されている取引先の場合は、M's PayBridgeを通じて口座振替を行う入金方法種別「振替（M's PayBridge）」の請求書であることを示します。それ以外の場合は、決済基盤と連携しない入金方法種別「振替」の請求書であることを示します。\n- cash（現金）、bill_payable（手形）はレスポンスでのみ返却される値です。既存データやインポート、freee販売連携などで登録された請求書で返却されます。Public APIの請求書の作成・更新では指定できません。",
      }),
    invoice_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled', 'canceled', 'unprocessed', 'failed'])
      .openapi({
        description:
          '決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）',
      }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    amount_brought_forward: z
      .float64()
      .min(-999999999999)
      .max(999999999999)
      .nullable()
      .openapi({ description: '繰越金額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    partner_bank_account: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先口座' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    bank_account_to_transfer: z.string().exactOptional().openapi({ description: '振込先' }),
    template: InvoiceResponseInvoiceTemplateSchema.exactOptional(),
    lines: z
      .array(InvoiceShowResponseInvoiceLinesSchema)
      .openapi({ description: '請求書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
    sales_management_origin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'freee販売から作成された帳票かどうか' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'invoice_number',
      'subject',
      'billing_date',
      'invoice_note',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'amount_brought_forward',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('InvoiceShowResponseInvoice')

const InvoiceShowResponseSchema = z
  .object({ invoice: InvoiceShowResponseInvoiceSchema })
  .openapi({ required: ['invoice'] })
  .openapi('InvoiceShowResponse')

const PaymentNoticeCancelStatusResponseSchema = z
  .object({
    payment_notice: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854775000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854775000,
            description: '支払通知書ID',
          }),
        cancel_status: z
          .enum(['canceled', 'uncanceled'])
          .openapi({ description: '取消状態（canceled: 取消済み、uncanceled: 取消されていない）' }),
      })
      .openapi({ required: ['id', 'cancel_status'] }),
  })
  .openapi({ required: ['payment_notice'] })
  .openapi('PaymentNoticeCancelStatusResponse')

const PaymentNoticeIndexResponsePaymentNoticesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '支払通知書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    payment_notice_number: z.string().max(255).openapi({ description: '支払通知書番号' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    payment_notice_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '支払通知書日付' }),
    collects_on: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '支払予定日' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者 (デフォルト: 表示ユーザー名)' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'payment_notice_number',
      'subject',
      'payment_notice_date',
      'memo',
      'sending_status',
      'cancel_status',
      'total_amount',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'report_url',
    ],
  })
  .openapi('PaymentNoticeIndexResponsePaymentNotices')

const PaymentNoticeIndexResponseSchema = z
  .object({ payment_notices: z.array(PaymentNoticeIndexResponsePaymentNoticesSchema) })
  .openapi({ required: ['payment_notices'] })
  .openapi('PaymentNoticeIndexResponse')

const PaymentNoticeRequestLinesSchema = z
  .object({
    type: z
      .enum(['item', 'text'])
      .default('item')
      .exactOptional()
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- tax_rate、quantityは必須になります。\n- text: テキスト行\n- descriptionのみ入力可能です。\n- 入力がない場合、itemが利用されます。',
      }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '摘要（品名）' }),
    sales_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({ description: '取引日' }),
    unit: z.string().min(1).max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .regex(/^-?[0-9]{0,13}(\.[0-9]{1,3})?$/)
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .exactOptional()
      .openapi({ description: '税率（%）（帳票の税率計算に用います。）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentNoticeRequestLines')

const PaymentNoticeRequestSchema = z
  .object({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          '帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）',
      }),
    payment_notice_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '支払通知書番号<br>\n- 採番の設定が、[自動採番する]の場合、指定できません。\n- 採番の設定が、[自動採番する]以外の場合、必須になります。',
      }),
    branch_no: z.int().min(0).max(2147483647).exactOptional().openapi({ description: '枝番' }),
    payment_notice_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '支払通知書日付' }),
    collects_on: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({ description: '支払予定日' }),
    payment_condition: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '支払方法' }),
    subject: z.string().min(1).max(255).exactOptional().openapi({ description: '件名' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    payment_notice_note: z
      .string()
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({ description: '備考' }),
    memo: z.string().min(1).max(2000).exactOptional().openapi({ description: '社内メモ' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          "取引先ID<br>\n取引先IDと取引先コードはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "取引先コード<br>\n取引先コードと取引先IDはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)', '（空白）'])
      .openapi({
        description:
          '敬称（御中、様、(空白)の3つから選択）\n- [非推奨]全角カッコの（空白）は削除予定です。\n- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。',
      }),
    partner_address_zipcode: z
      .string()
      .regex(/^[0-9]{3}-?[0-9]{4}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          '郵便番号\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。',
      }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。',
      }),
    partner_address_street_name1: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 市区町村・番地\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。',
      }),
    partner_address_street_name2: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 建物名・部屋番号など\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。',
      }),
    partner_contact_department: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先部署\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。',
      }),
    partner_contact_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者名\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先宛名\n- 帳票の宛名に利用されます。\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。',
      }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社名を上書きする場合に指定します。' }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社説明を上書きする場合に指定します。' }),
    lines: z.array(PaymentNoticeRequestLinesSchema).openapi({ description: '支払通知書の明細行' }),
  })
  .openapi({
    required: [
      'company_id',
      'payment_notice_date',
      'tax_entry_method',
      'tax_fraction',
      'partner_title',
      'lines',
    ],
  })
  .openapi('PaymentNoticeRequest')

const PaymentNoticeResponsePaymentNoticeTemplateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: '支払通知書タイトル' }),
    company_name: z.string().exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    message: z.string().exactOptional().openapi({ description: 'メッセージ' }),
  })
  .openapi({
    description: '帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）',
    required: [],
  })
  .openapi('PaymentNoticeResponsePaymentNoticeTemplate')

const PaymentNoticeResponsePaymentNoticeLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({ description: '明細の種類\n- item: 品目行\n- text: テキスト行' }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    sales_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '取引日' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description'] })
  .openapi('PaymentNoticeResponsePaymentNoticeLines')

const PaymentNoticeResponsePaymentNoticeSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '支払通知書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    payment_notice_number: z.string().max(255).openapi({ description: '支払通知書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    payment_notice_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '支払通知書日付' }),
    collects_on: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '支払予定日' }),
    payment_condition: z.string().max(255).exactOptional().openapi({ description: '支払方法' }),
    payment_notice_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    template: PaymentNoticeResponsePaymentNoticeTemplateSchema.exactOptional(),
    lines: z
      .array(PaymentNoticeResponsePaymentNoticeLinesSchema)
      .openapi({ description: '支払通知書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'payment_notice_number',
      'subject',
      'payment_notice_date',
      'payment_notice_note',
      'memo',
      'sending_status',
      'cancel_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('PaymentNoticeResponsePaymentNotice')

const PaymentNoticeResponseSchema = z
  .object({ payment_notice: PaymentNoticeResponsePaymentNoticeSchema })
  .openapi({ required: ['payment_notice'] })
  .openapi('PaymentNoticeResponse')

const PaymentNoticeShowResponsePaymentNoticeLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_taxはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    sales_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '取引日' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description'] })
  .openapi('PaymentNoticeShowResponsePaymentNoticeLines')

const PaymentNoticeShowResponsePaymentNoticeSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '支払通知書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    payment_notice_number: z.string().max(255).openapi({ description: '支払通知書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    payment_notice_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '支払通知書日付' }),
    collects_on: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '支払予定日' }),
    payment_condition: z.string().max(255).exactOptional().openapi({ description: '支払方法' }),
    payment_notice_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    template: PaymentNoticeResponsePaymentNoticeTemplateSchema.exactOptional(),
    lines: z
      .array(PaymentNoticeShowResponsePaymentNoticeLinesSchema)
      .openapi({ description: '支払通知書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'payment_notice_number',
      'subject',
      'payment_notice_date',
      'payment_notice_note',
      'memo',
      'sending_status',
      'cancel_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('PaymentNoticeShowResponsePaymentNotice')

const PaymentNoticeShowResponseSchema = z
  .object({ payment_notice: PaymentNoticeShowResponsePaymentNoticeSchema })
  .openapi({ required: ['payment_notice'] })
  .openapi('PaymentNoticeShowResponse')

const PurchaseOrderCancelStatusResponseSchema = z
  .object({
    purchase_order: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854775000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854775000,
            description: '発注書ID',
          }),
        cancel_status: z
          .enum(['canceled', 'uncanceled'])
          .openapi({ description: '取消状態（canceled: 取消済み、uncanceled: 取消されていない）' }),
      })
      .openapi({ required: ['id', 'cancel_status'] }),
  })
  .openapi({ required: ['purchase_order'] })
  .openapi('PurchaseOrderCancelStatusResponse')

const PurchaseOrderIndexResponsePurchaseOrdersSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '発注書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    purchase_order_number: z.string().max(255).openapi({ description: '発注書番号' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    purchase_order_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '発注日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    collects_on: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '支払予定日' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者 (デフォルト: 表示ユーザー名)' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'purchase_order_number',
      'subject',
      'purchase_order_date',
      'memo',
      'sending_status',
      'cancel_status',
      'deal_status',
      'payment_status',
      'total_amount',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'report_url',
    ],
  })
  .openapi('PurchaseOrderIndexResponsePurchaseOrders')

const PurchaseOrderIndexResponseSchema = z
  .object({ purchase_orders: z.array(PurchaseOrderIndexResponsePurchaseOrdersSchema) })
  .openapi({ required: ['purchase_orders'] })
  .openapi('PurchaseOrderIndexResponse')

const PurchaseOrderRequestLinesSchema = z
  .object({
    type: z
      .enum(['item', 'text'])
      .default('item')
      .exactOptional()
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- tax_rate、quantityは必須になります。\n- text: テキスト行\n- descriptionのみ入力可能です。\n- 入力がない場合、itemが利用されます。',
      }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '摘要（品名）' }),
    unit: z.string().min(1).max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .regex(/^-?[0-9]{0,13}(\.[0-9]{1,3})?$/)
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .exactOptional()
      .openapi({ description: '税率（%）（帳票の税額計算に用います。）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。',
      }),
    withholding: z.boolean().exactOptional().openapi({ description: '源泉徴収対象' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '勘定科目ID（取引登録の下書き保存で利用されます。）' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '税区分コード（取引登録の下書き保存で利用されます。）' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '品目ID（取引登録の下書き保存で利用されます。）' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '部門ID<br>\n- 取引登録の下書き保存で利用されます。\n- 親部門は利用できません。\n- グループ管理で制限された部門は利用できません。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>',
      }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント１ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け プロフェッショナルプラン以上で利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント２ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント３ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseOrderRequestLines')

const PurchaseOrderRequestSchema = z
  .object({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          '帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）',
      }),
    purchase_order_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '発注書番号<br>\n- 採番の設定が、[自動採番する]の場合、指定できません。\n- 採番の設定が、[自動採番する]以外の場合、必須になります。',
      }),
    branch_no: z.int().min(0).max(2147483647).exactOptional().openapi({ description: '枝番' }),
    purchase_order_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '発注日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description:
          '発生日（取引登録の下書き保存で利用されます。）\n- 入力がない場合、発注日が補完されます。',
      }),
    subject: z.string().min(1).max(255).exactOptional().openapi({ description: '件名' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    purchase_order_note: z
      .string()
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({ description: '発注書備考' }),
    collects_on: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description: '支払予定日\n- 発注日（purchase_order_date）以降の日付を指定してください。',
      }),
    delivery_deadline: z.string().max(255).exactOptional().openapi({ description: '納品期限' }),
    delivery_location: z.string().max(256).exactOptional().openapi({ description: '納品場所' }),
    payment_condition: z.string().max(256).exactOptional().openapi({ description: '支払条件' }),
    memo: z.string().min(1).max(2000).exactOptional().openapi({ description: '社内メモ' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          "取引先ID<br>\n取引先IDと取引先コードはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "取引先コード<br>\n取引先コードと取引先IDはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)', '（空白）'])
      .openapi({
        description:
          '敬称（御中、様、(空白)の3つから選択）\n- [非推奨]全角カッコの（空白）は削除予定です。\n- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。',
      }),
    partner_address_zipcode: z
      .string()
      .regex(/^[0-9]{3}-?[0-9]{4}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          '郵便番号\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。',
      }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。',
      }),
    partner_address_street_name1: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 市区町村・番地\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。',
      }),
    partner_address_street_name2: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 建物名・部屋番号など\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。',
      }),
    partner_contact_department: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先部署\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。',
      }),
    partner_contact_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者名\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先宛名\n- 帳票の宛名に利用されます。\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。',
      }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者(デフォルトは表示ユーザー名が補完されます)' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社名を上書きする場合に指定します。' }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社説明を上書きする場合に指定します。' }),
    lines: z.array(PurchaseOrderRequestLinesSchema).openapi({ description: '発注書の明細行' }),
  })
  .openapi({
    required: [
      'company_id',
      'purchase_order_date',
      'tax_entry_method',
      'tax_fraction',
      'withholding_tax_entry_method',
      'partner_title',
      'lines',
    ],
  })
  .openapi('PurchaseOrderRequest')

const PurchaseOrderResponsePurchaseOrderTemplateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: '発注書タイトル' }),
    invoice_registration_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'インボイス制度適格請求書発行事業者登録番号\n- 先頭T数字13桁の固定14桁の文字列\n<a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>',
      }),
    company_name: z.string().exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    message: z.string().exactOptional().openapi({ description: 'メッセージ' }),
  })
  .openapi({
    description: '帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）',
    required: [],
  })
  .openapi('PurchaseOrderResponsePurchaseOrderTemplate')

const PurchaseOrderResponsePurchaseOrderLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はquantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '勘定科目ID' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '税区分コード' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '品目ID' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '部門ID' }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント１ID',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント２ID',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント３ID',
      }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('PurchaseOrderResponsePurchaseOrderLines')

const PurchaseOrderResponsePurchaseOrderSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '発注書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    purchase_order_number: z.string().max(255).openapi({ description: '発注書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    purchase_order_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '発注日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    purchase_order_note: z.string().max(4000).openapi({ description: '発注書備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z.string().max(255).exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    template: PurchaseOrderResponsePurchaseOrderTemplateSchema.exactOptional(),
    lines: z
      .array(PurchaseOrderResponsePurchaseOrderLinesSchema)
      .openapi({ description: '発注書の明細行' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'purchase_order_number',
      'subject',
      'purchase_order_date',
      'purchase_order_note',
      'memo',
      'sending_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('PurchaseOrderResponsePurchaseOrder')

const PurchaseOrderResponseSchema = z
  .object({ purchase_order: PurchaseOrderResponsePurchaseOrderSchema })
  .openapi({ required: ['purchase_order'] })
  .openapi('PurchaseOrderResponse')

const PurchaseOrderShowResponsePurchaseOrderLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はquantity、unit_price、tax_rate、amount_excluding_taxはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('PurchaseOrderShowResponsePurchaseOrderLines')

const PurchaseOrderShowResponsePurchaseOrderSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '発注書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    purchase_order_number: z.string().max(255).openapi({ description: '発注書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    purchase_order_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '発注日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    purchase_order_note: z.string().max(4000).openapi({ description: '発注書備考' }),
    order_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注日' }),
    delivery_deadline: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品期限' }),
    delivery_location: z
      .string()
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品場所' }),
    payment_condition: z
      .string()
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ description: '支払条件' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    template: PurchaseOrderResponsePurchaseOrderTemplateSchema.exactOptional(),
    lines: z
      .array(PurchaseOrderShowResponsePurchaseOrderLinesSchema)
      .openapi({ description: '発注書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'purchase_order_number',
      'subject',
      'purchase_order_date',
      'purchase_order_note',
      'memo',
      'sending_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('PurchaseOrderShowResponsePurchaseOrder')

const PurchaseOrderShowResponseSchema = z
  .object({ purchase_order: PurchaseOrderShowResponsePurchaseOrderSchema })
  .openapi({ required: ['purchase_order'] })
  .openapi('PurchaseOrderShowResponse')

const QuotationCancelStatusResponseSchema = z
  .object({
    quotation: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854775000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854775000,
            description: '見積書ID',
          }),
        cancel_status: z
          .enum(['canceled', 'uncanceled'])
          .openapi({ description: '取消状態（canceled: 取消済み、uncanceled: 取消されていない）' }),
      })
      .openapi({ required: ['id', 'cancel_status'] }),
  })
  .openapi({ required: ['quotation'] })
  .openapi('QuotationCancelStatusResponse')

const QuotationIndexResponseQuotationsSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '見積書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    quotation_number: z.string().max(255).openapi({ description: '見積書番号' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    quotation_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '見積日' }),
    expiration_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '有効期限' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者 (デフォルト: 表示ユーザー名)' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
    sales_management_origin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'freee販売から作成された帳票かどうか' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'quotation_number',
      'subject',
      'quotation_date',
      'memo',
      'sending_status',
      'cancel_status',
      'total_amount',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'report_url',
    ],
  })
  .openapi('QuotationIndexResponseQuotations')

const QuotationIndexResponseSchema = z
  .object({ quotations: z.array(QuotationIndexResponseQuotationsSchema) })
  .openapi({ required: ['quotations'] })
  .openapi('QuotationIndexResponse')

const QuotationRequestLinesSchema = z
  .object({
    type: z
      .enum(['item', 'text'])
      .default('item')
      .exactOptional()
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- tax_rate、quantityは必須になります。\n- text: テキスト行\n- descriptionのみ入力可能です。\n- 入力がない場合、itemが利用されます。',
      }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '摘要（品名）' }),
    unit: z.string().min(1).max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .regex(/^-?[0-9]{0,13}(\.[0-9]{1,3})?$/)
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .exactOptional()
      .openapi({ description: '税率（%）（帳票の税率計算に用います。）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。',
      }),
    withholding: z.boolean().exactOptional().openapi({ description: '源泉徴収対象' }),
  })
  .openapi({ required: [] })
  .openapi('QuotationRequestLines')

const QuotationRequestSchema = z
  .object({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          '帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）',
      }),
    quotation_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '見積書番号<br>\n- 採番の設定が、[自動採番する]の場合、指定できません。\n- 採番の設定が、[自動採番する]以外の場合、必須になります。',
      }),
    branch_no: z.int().min(0).max(2147483647).exactOptional().openapi({ description: '枝番' }),
    quotation_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '見積日' }),
    expiration_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({ description: '有効期限' }),
    delivery_deadline: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '納品期限' }),
    delivery_location: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '納品場所' }),
    subject: z.string().min(1).max(255).exactOptional().openapi({ description: '件名' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    quotation_note: z.string().min(0).max(4000).exactOptional().openapi({ description: '備考' }),
    memo: z.string().min(1).max(2000).exactOptional().openapi({ description: '社内メモ' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          "取引先ID<br>\n取引先IDと取引先コードはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "取引先コード<br>\n取引先コードと取引先IDはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)', '（空白）'])
      .openapi({
        description:
          '敬称（御中、様、(空白)の3つから選択）\n- [非推奨]全角カッコの（空白）は削除予定です。\n- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。',
      }),
    partner_address_zipcode: z
      .string()
      .regex(/^[0-9]{3}-?[0-9]{4}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          '郵便番号\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。',
      }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。',
      }),
    partner_address_street_name1: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 市区町村・番地\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。',
      }),
    partner_address_street_name2: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 建物名・部屋番号など\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。',
      }),
    partner_contact_department: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先部署\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。',
      }),
    partner_contact_email_cc: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者メールアドレス（CC）\n- 入力がない場合、メールテンプレートに指定されたCCが利用されます。\n- カンマ区切りで複数メールアドレスに送付可能です。',
      }),
    partner_contact_email_to: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者メールアドレス（TO）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者メールアドレスが利用されます。\n- カンマ区切りで複数メールアドレスに送付可能です。',
      }),
    partner_contact_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者名\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先宛名\n- 帳票の宛名に利用されます。\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。',
      }),
    partner_sending_method: z
      .enum(['email', 'posting', 'email_and_posting'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '取引先への送付方法\n- 一括送付時に取引先マスタに登録された送付方法以外を利用したい場合に指定します。\n- 入力がない場合、取引先マスタに登録された送付方法で一括送付を行います。',
      }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者(デフォルトは操作者の表示ユーザー名が補完されます)' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社名を上書きする場合に指定します。' }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社説明を上書きする場合に指定します。。' }),
    lines: z.array(QuotationRequestLinesSchema).openapi({ description: '見積書の明細行' }),
  })
  .openapi({
    required: [
      'company_id',
      'quotation_date',
      'tax_entry_method',
      'tax_fraction',
      'withholding_tax_entry_method',
      'partner_title',
      'lines',
    ],
  })
  .openapi('QuotationRequest')

const QuotationResponseQuotationTemplateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: '見積書タイトル' }),
    company_name: z.string().exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    message: z.string().exactOptional().openapi({ description: 'メッセージ' }),
  })
  .openapi({
    description: '帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）',
    required: [],
  })
  .openapi('QuotationResponseQuotationTemplate')

const QuotationResponseQuotationLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({ description: '明細の種類\n- item: 品目行\n- text: テキスト行' }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('QuotationResponseQuotationLines')

const QuotationResponseQuotationSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '見積書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    quotation_number: z.string().max(255).openapi({ description: '見積書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    quotation_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '見積日' }),
    expiration_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '有効期限' }),
    delivery_deadline: z.string().max(255).openapi({ description: '納品期限' }),
    delivery_location: z.string().max(255).openapi({ description: '納品場所' }),
    quotation_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_email_cc: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者メールアドレス（CC）' }),
    partner_contact_email_to: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者メールアドレス（TO）' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    partner_sending_method: z
      .enum(['email', 'posting', 'email_and_posting'])
      .nullable()
      .exactOptional()
      .openapi({ description: '取引先への送付方法' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z.string().max(255).exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().max(255).exactOptional().openapi({ description: '自社情報' }),
    template: QuotationResponseQuotationTemplateSchema.exactOptional(),
    lines: z
      .array(QuotationResponseQuotationLinesSchema)
      .openapi({ description: '見積書の明細行' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'quotation_number',
      'subject',
      'quotation_date',
      'delivery_deadline',
      'delivery_location',
      'quotation_note',
      'memo',
      'sending_status',
      'cancel_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('QuotationResponseQuotation')

const QuotationResponseSchema = z
  .object({ quotation: QuotationResponseQuotationSchema })
  .openapi({ required: ['quotation'] })
  .openapi('QuotationResponse')

const QuotationShowResponseQuotationLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はsales_date、quantity、unit_price、tax_rate、amount_excluding_taxはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('QuotationShowResponseQuotationLines')

const QuotationShowResponseQuotationSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '見積書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    quotation_number: z.string().max(255).openapi({ description: '見積書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    quotation_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '見積日' }),
    expiration_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '有効期限' }),
    delivery_deadline: z.string().max(255).openapi({ description: '納品期限' }),
    delivery_location: z.string().max(255).openapi({ description: '納品場所' }),
    quotation_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    template: QuotationResponseQuotationTemplateSchema.exactOptional(),
    lines: z
      .array(QuotationShowResponseQuotationLinesSchema)
      .openapi({ description: '見積書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
    sales_management_origin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'freee販売から作成された帳票かどうか' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'quotation_number',
      'subject',
      'quotation_date',
      'delivery_deadline',
      'delivery_location',
      'quotation_note',
      'memo',
      'sending_status',
      'cancel_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('QuotationShowResponseQuotation')

const QuotationShowResponseSchema = z
  .object({ quotation: QuotationShowResponseQuotationSchema })
  .openapi({ required: ['quotation'] })
  .openapi('QuotationShowResponse')

const ReceiptCancelStatusResponseSchema = z
  .object({
    receipt: z
      .object({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854775000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854775000,
            description: '領収書ID',
          }),
        cancel_status: z
          .enum(['canceled', 'uncanceled'])
          .openapi({ description: '取消状態（canceled: 取消済み、uncanceled: 取消されていない）' }),
      })
      .openapi({ required: ['id', 'cancel_status'] }),
  })
  .openapi({ required: ['receipt'] })
  .openapi('ReceiptCancelStatusResponse')

const ReceiptIndexResponseReceiptsSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '領収書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    receipt_number: z.string().max(255).openapi({ description: '領収書番号' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    receipt_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '領収日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者 (デフォルト: 表示ユーザー名)' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'receipt_number',
      'subject',
      'receipt_date',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'report_url',
    ],
  })
  .openapi('ReceiptIndexResponseReceipts')

const ReceiptIndexResponseSchema = z
  .object({ receipts: z.array(ReceiptIndexResponseReceiptsSchema) })
  .openapi({ required: ['receipts'] })
  .openapi('ReceiptIndexResponse')

const ReceiptRequestLinesSchema = z
  .object({
    type: z
      .enum(['item', 'text'])
      .default('item')
      .exactOptional()
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- tax_rate、quantityは必須になります。\n- text: テキスト行\n- descriptionのみ入力可能です。\n- 入力がない場合、itemが利用されます。',
      }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: '摘要（品名）' }),
    unit: z.string().min(1).max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .regex(/^-?[0-9]{0,13}(\.[0-9]{1,3})?$/)
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .exactOptional()
      .openapi({ description: '税率（%）（帳票の税額計算に用います。）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '軽減税率対象（true: 対象、 false: 対象外）trueはtax_rate:8の時のみ指定可能です。',
      }),
    withholding: z.boolean().exactOptional().openapi({ description: '源泉徴収対象' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '勘定科目ID（取引登録の下書き保存で利用されます。）' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '税区分コード（取引登録の下書き保存で利用されます。）' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '品目ID（取引登録の下書き保存で利用されます。）' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '部門ID<br>\n- 取引登録の下書き保存で利用されます。\n- 親部門は利用できません。\n- グループ管理で制限された部門は利用できません。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/215225263" target="_blank">グループ管理の設定はヘルプページを御覧ください。</a>',
      }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント１ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け プロフェッショナルプラン以上で利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント２ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          'セグメント３ID<br>\n- 取引登録の下書き保存で利用されます。\n- freee会計法人向け エンタープライズプランで利用可能です。\n<br>\n<a href="https://support.freee.co.jp/hc/ja/articles/360020679611" target="_blank">セグメント（分析用タグ）の設定はヘルプページを御覧ください。</a>',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReceiptRequestLines')

const ReceiptRequestSchema = z
  .object({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          '帳票テンプレートID（指定しない場合、事業所の既定のテンプレートが指定されます。）',
      }),
    receipt_number: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '領収書番号<br>\n- 採番の設定が、[自動採番する]の場合、指定できません。\n- 採番の設定が、[自動採番する]以外の場合、必須になります。',
      }),
    branch_no: z.int().min(0).max(2147483647).exactOptional().openapi({ description: '枝番' }),
    receipt_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '領収日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description:
          '発生日（取引登録の下書き保存で利用されます。）\n- 入力がない場合、領収日が補完されます。',
      }),
    subject: z.string().min(1).max(255).exactOptional().openapi({ description: '件名' }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    receipt_note: z.string().min(0).max(4000).exactOptional().openapi({ description: '備考' }),
    memo: z.string().min(1).max(2000).exactOptional().openapi({ description: '社内メモ' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description:
          "取引先ID<br>\n取引先IDと取引先コードはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "取引先コード<br>\n取引先コードと取引先IDはどちらか一方を必ず指定してください。<br>\n<a href='https://support.freee.co.jp/hc/ja/articles/12515437008409-取引先を登録する#:~:text=確認ください。-,取引先役割,-種別' target='_blank'>取引先役割に関してはヘルプページを御覧ください。</a>",
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)', '（空白）'])
      .openapi({
        description:
          '敬称（御中、様、(空白)の3つから選択）\n- [非推奨]全角カッコの（空白）は削除予定です。\n- 全角カッコの（空白）を指定した場合、はレスポンスは、半角カッコの(空白)になります。',
      }),
    partner_address_zipcode: z
      .string()
      .regex(/^[0-9]{3}-?[0-9]{4}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          '郵便番号\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく郵便番号が利用されます。',
      }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく都道府県コードが利用されます。',
      }),
    partner_address_street_name1: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 市区町村・番地\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 市区町村・番地が利用されます。',
      }),
    partner_address_street_name2: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先 建物名・部屋番号など\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先 建物名・部屋番号などが利用されます。',
      }),
    partner_contact_department: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先部署\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先部署が利用されます。',
      }),
    partner_contact_name: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先担当者名\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先担当者名が利用されます。',
      }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先宛名\n- 帳票の宛名に利用されます。\n- 入力がない場合、帳票に指定されたpartner_id, partner_codeに紐づく取引先名称が利用されます。',
      }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者(デフォルトは表示ユーザー名が補完されます)' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社名を上書きする場合に指定します。' }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社説明を上書きする場合に指定します。' }),
    lines: z.array(ReceiptRequestLinesSchema).openapi({ description: '領収書の明細行' }),
  })
  .openapi({
    required: [
      'company_id',
      'receipt_date',
      'tax_entry_method',
      'tax_fraction',
      'withholding_tax_entry_method',
      'partner_title',
      'lines',
    ],
  })
  .openapi('ReceiptRequest')

const ReceiptResponseReceiptTemplateSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: '領収書タイトル' }),
    invoice_registration_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'インボイス制度適格請求書発行事業者登録番号\n- 先頭T数字13桁の固定14桁の文字列\n<a target="_blank" href="https://www.invoice-kohyo.nta.go.jp/index.html">国税庁インボイス制度適格請求書発行事業者公表サイト</a>',
      }),
    company_name: z.string().exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    message: z.string().exactOptional().openapi({ description: 'メッセージ' }),
  })
  .openapi({
    description: '帳票テンプレート情報（帳票テンプレート作成の際に設定できる項目です。）',
    required: [],
  })
  .openapi('ReceiptResponseReceiptTemplate')

const ReceiptResponseReceiptLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はquantity、unit_price、tax_rate、amount_excluding_tax、account_item_id、tax_code、item_id、section_id、segment_1_tag_id、segment_2_tag_id、segment_3_tag_idはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
    account_item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '勘定科目ID' }),
    tax_code: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '税区分コード' }),
    item_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '品目ID' }),
    section_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '部門ID' }),
    tag_ids: z.array(z.int()).exactOptional(),
    segment_1_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント１ID',
      }),
    segment_2_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント２ID',
      }),
    segment_3_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: 'セグメント３ID',
      }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('ReceiptResponseReceiptLines')

const ReceiptResponseReceiptSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '領収書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    receipt_number: z.string().max(255).openapi({ description: '領収書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    receipt_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '領収日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    receipt_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z.string().max(255).exactOptional().openapi({ description: '自社名' }),
    company_description: z.string().exactOptional().openapi({ description: '自社情報' }),
    template: ReceiptResponseReceiptTemplateSchema.exactOptional(),
    lines: z.array(ReceiptResponseReceiptLinesSchema).openapi({ description: '領収書の明細行' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'receipt_number',
      'subject',
      'receipt_date',
      'receipt_note',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('ReceiptResponseReceipt')

const ReceiptResponseSchema = z
  .object({ receipt: ReceiptResponseReceiptSchema })
  .openapi({ required: ['receipt'] })
  .openapi('ReceiptResponse')

const ReceiptShowResponseReceiptLinesSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '明細行ID',
      }),
    type: z
      .enum(['item', 'text'])
      .openapi({
        description:
          '明細の種類\n- item: 品目行\n- text: テキスト行\n- textの時はquantity、unit_price、tax_rate、amount_excluding_taxはnullになります。',
      }),
    description: z.string().max(255).openapi({ description: '摘要（品名）' }),
    unit: z.string().max(255).exactOptional().openapi({ description: '明細の単位名' }),
    quantity: z
      .number()
      .min(-99999999.999)
      .max(99999999.999)
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の数量 (整数部は8桁まで、小数部は3桁まで)' }),
    unit_price: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '明細の単価 (整数部は13桁まで、小数部は3桁まで)' }),
    tax_rate: z
      .union([z.literal(0), z.literal(8), z.literal(10)])
      .nullable()
      .exactOptional()
      .openapi({ description: '税率（%）' }),
    reduced_tax_rate: z
      .boolean()
      .exactOptional()
      .openapi({ description: '軽減税率対象（true: 対象、 false: 対象外）' }),
    withholding: z.boolean().openapi({ description: '源泉徴収対象' }),
    amount_excluding_tax: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '税別金額' }),
  })
  .openapi({ required: ['id', 'type', 'description', 'withholding'] })
  .openapi('ReceiptShowResponseReceiptLines')

const ReceiptShowResponseReceiptSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '領収書ID',
      }),
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '事業所ID',
      }),
    receipt_number: z.string().max(255).openapi({ description: '領収書番号' }),
    branch_no: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '枝番' }),
    subject: z.string().max(255).openapi({ description: '件名' }),
    template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '帳票テンプレートID',
      }),
    template_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '帳票テンプレート名' }),
    receipt_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '領収日' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: '発生日' }),
    receipt_note: z.string().max(4000).openapi({ description: '備考' }),
    memo: z.string().max(2000).openapi({ description: '社内メモ' }),
    sending_status: z
      .enum(['sent', 'unsent'])
      .openapi({ description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）' }),
    payment_status: z
      .enum(['settled', 'unsettled'])
      .openapi({ description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）' }),
    cancel_status: z
      .enum(['canceled', 'uncanceled'])
      .openapi({ description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）' }),
    deal_status: z
      .enum(['registered', 'unregistered'])
      .openapi({ description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引ID （deal_statusがunregisteredの場合、nullになります。）',
      }),
    tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税の内税・外税区分（in: 税込表示（内税）、out: 税別表示（外税））',
      }),
    tax_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '消費税端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    line_amount_fraction: z
      .enum(['omit', 'round_up', 'round'])
      .nullable()
      .exactOptional()
      .openapi({
        description: '金額端数の計算方法（omit: 切り捨て、round_up: 切り上げ、round: 四捨五入）',
      }),
    withholding_tax_entry_method: z
      .enum(['in', 'out'])
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉徴収の計算方法（in: 税込み価格で計算、out: 税別価格で計算）' }),
    total_amount: z.float64().openapi({ description: '合計金額' }),
    created_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '作成日時' }),
    amount_withholding_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: '源泉所得税' }),
    amount_including_tax: z.float64().openapi({ description: '税込金額' }),
    amount_excluding_tax: z.number().openapi({ description: '小計（税別）' }),
    amount_tax: z.number().openapi({ description: '消費税額' }),
    amount_including_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税込' }),
    amount_excluding_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 税抜' }),
    amount_tax_10: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '10%対象 消費税' }),
    amount_including_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税込' }),
    amount_excluding_tax_8: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '8%対象 税抜' }),
    amount_tax_8: z.float64().nullable().exactOptional().openapi({ description: '8%対象 消費税' }),
    amount_including_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税込' }),
    amount_excluding_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 税抜' }),
    amount_tax_8_reduced: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率8%対象 消費税' }),
    amount_including_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税込' }),
    amount_excluding_tax_0: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '0%対象 税抜' }),
    amount_tax_0: z.float64().nullable().exactOptional().openapi({ description: '0%対象 消費税' }),
    partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854775000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854775000,
        description: '取引先ID',
      }),
    partner_code: z.string().nullable().exactOptional().openapi({ description: '取引先コード' }),
    partner_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '取引先名\n- partner_nameに空文字が戻る場合は、対象レコードをweb画面から更新するか、freee請求書APIから更新すると解消されます。',
      }),
    partner_title: z
      .enum(['御中', '様', '(空白)'])
      .exactOptional()
      .openapi({ description: '敬称（御中、様、(空白)の3つから選択）' }),
    partner_address_zipcode: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '郵便番号' }),
    partner_address_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
      }),
    partner_address_street_name1: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 市区町村・番地' }),
    partner_address_street_name2: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先 建物名・部屋番号など' }),
    partner_contact_department: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先部署' }),
    partner_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先担当者名' }),
    partner_display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '取引先宛名\n- 帳票の宛名に利用されます。' }),
    company_contact_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '自社担当者名' }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社名 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社名になります。)',
      }),
    company_description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '自社情報 (上書きした場合のみ反映されます、デフォルトがテンプレートの自社情報になります。)',
      }),
    template: ReceiptResponseReceiptTemplateSchema.exactOptional(),
    lines: z
      .array(ReceiptShowResponseReceiptLinesSchema)
      .openapi({ description: '領収書の明細行' }),
    email_url_file_downloaded_at: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロード時刻' }),
    email_url_file_downloaded_status: z
      .enum(['downloaded', 'undownloaded'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'URL共有で送付された送付先のメールのダウンロードステータス' }),
    report_url: z.url().openapi({ description: '帳票詳細ページのURL' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'receipt_number',
      'subject',
      'receipt_date',
      'receipt_note',
      'memo',
      'sending_status',
      'payment_status',
      'cancel_status',
      'deal_status',
      'total_amount',
      'created_at',
      'amount_including_tax',
      'amount_excluding_tax',
      'amount_tax',
      'partner_id',
      'lines',
      'report_url',
    ],
  })
  .openapi('ReceiptShowResponseReceipt')

const ReceiptShowResponseSchema = z
  .object({ receipt: ReceiptShowResponseReceiptSchema })
  .openapi({ required: ['receipt'] })
  .openapi('ReceiptShowResponse')

const TemplateIndexResponseTemplatesSchema = z
  .object({
    id: z.int().min(1).max(2147483647).openapi({ description: '帳票テンプレートID' }),
    name: z.string().min(1).max(255).openapi({ description: '帳票テンプレート名' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('TemplateIndexResponseTemplates')

const TemplateIndexResponseSchema = z
  .object({ templates: z.array(TemplateIndexResponseTemplatesSchema) })
  .openapi({ required: ['templates'] })
  .openapi('TemplateIndexResponse')

const AccessDeniedErrorSchema = z
  .object({
    error: z.string().exactOptional(),
    message: z.string().exactOptional(),
    code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessDeniedError')

const BadRequestErrorsSchema = z
  .object({ type: z.string().exactOptional(), messages: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('BadRequestErrors')

const BadRequestSchema = z
  .object({
    status_code: z.int().exactOptional(),
    errors: z.array(BadRequestErrorsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BadRequest')

const ForbiddenErrorErrorsSchema = z
  .object({ type: z.string().exactOptional(), messages: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ForbiddenErrorErrors')

const ForbiddenErrorSchema = z
  .object({
    status_code: z.int().exactOptional(),
    errors: z.array(ForbiddenErrorErrorsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ForbiddenError')

const InternalServerErrorErrorsSchema = z
  .object({ type: z.string().exactOptional(), messages: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('InternalServerErrorErrors')

const InternalServerErrorSchema = z
  .object({
    status_code: z.int().exactOptional(),
    errors: z.array(InternalServerErrorErrorsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InternalServerError')

const NotfoundErrorErrorsSchema = z
  .object({ type: z.string().exactOptional(), messages: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('NotfoundErrorErrors')

const NotfoundErrorSchema = z
  .object({
    status_code: z.int().exactOptional(),
    errors: z.array(NotfoundErrorErrorsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotfoundError')

const UnauthorizedErrorSchema = z
  .object({ message: z.string().exactOptional(), messages: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UnauthorizedError')

const OAuth2AuthSecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.secure.freee.co.jp/public_api/authorize',
      tokenUrl: 'https://accounts.secure.freee.co.jp/public_api/token',
      scopes: { write: '', read: '' },
    },
  },
}

export const getDeliverySlipsRoute = createRoute({
  method: 'get',
  path: '/delivery_slips',
  tags: ['DeliverySlips'],
  summary: '納品書一覧の取得\n',
  description: '納品書の一覧を返します。',
  operationId: 'delivery_slips/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      delivery_slip_number: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'delivery_slip_number',
            in: 'query',
            required: false,
            description: '納品書番号',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      subject: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'subject',
            in: 'query',
            required: false,
            description: '件名',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      partner_ids: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'partner_ids',
            in: 'query',
            required: false,
            description:
              '取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）',
            schema: { type: 'string', maxLength: 255 },
          },
        }),
      payment_status: z
        .enum(['settled', 'unsettled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'payment_status',
            in: 'query',
            required: false,
            description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）',
            schema: { type: 'string', enum: ['settled', 'unsettled'] },
          },
        }),
      deal_status: z
        .enum(['registered', 'unregistered'])
        .exactOptional()
        .openapi({
          param: {
            name: 'deal_status',
            in: 'query',
            required: false,
            description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）',
            schema: { type: 'string', enum: ['registered', 'unregistered'] },
          },
        }),
      sending_status: z
        .enum(['sent', 'unsent'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sending_status',
            in: 'query',
            required: false,
            description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）',
            schema: { type: 'string', enum: ['sent', 'unsent'] },
          },
        }),
      cancel_status: z
        .enum(['canceled', 'uncanceled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'cancel_status',
            in: 'query',
            required: false,
            description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）',
            schema: { type: 'string', enum: ['canceled', 'uncanceled'] },
          },
        }),
      start_delivery_slip_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_delivery_slip_date',
            in: 'query',
            required: false,
            description: '納品日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_delivery_slip_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_delivery_slip_date',
            in: 'query',
            required: false,
            description: '納品日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              '取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
      sales_management_origin: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sales_management_origin',
            in: 'query',
            required: false,
            description:
              'freee販売から作成された帳票データを含める。trueを指定する場合はfreee販売から作成された帳票へのアクセス権限が必要です。',
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: DeliverySlipIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postDeliverySlipsRoute = createRoute({
  method: 'post',
  path: '/delivery_slips',
  tags: ['DeliverySlips'],
  summary: '納品書の作成\n',
  description:
    '納品書の作成をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'delivery_slips/create',
  request: {
    body: {
      content: { 'application/json': { schema: DeliverySlipRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The request has succeeded and a new resource has been created as a result.',
      content: { 'application/json': { schema: DeliverySlipResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getDeliverySlipsTemplatesRoute = createRoute({
  method: 'get',
  path: '/delivery_slips/templates',
  tags: ['DeliverySlips'],
  summary: '使用可能な納品書の帳票テンプレート一覧の取得\n',
  description: '使用可能な納品書の帳票テンプレート一覧を返します。',
  operationId: 'delivery_slips/templates/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TemplateIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getDeliverySlipsIdRoute = createRoute({
  method: 'get',
  path: '/delivery_slips/{id}',
  tags: ['DeliverySlips'],
  summary: '納品書の取得\n',
  description: '指定されたIDの納品書を返します。',
  operationId: 'delivery_slips/show',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: DeliverySlipShowResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putDeliverySlipsIdRoute = createRoute({
  method: 'put',
  path: '/delivery_slips/{id}',
  tags: ['DeliverySlips'],
  summary: '納品書の更新\n',
  description:
    '納品書の更新をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'delivery_slips/update',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeliverySlipRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: DeliverySlipResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putDeliverySlipsIdCancelRoute = createRoute({
  method: 'put',
  path: '/delivery_slips/{id}/cancel',
  tags: ['DeliverySlips'],
  summary: '納品書の取消\n',
  description:
    '指定された納品書を取消状態にします。\n\n取引が紐づいている場合は取引も削除されます。',
  operationId: 'delivery_slips/cancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: DeliverySlipCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putDeliverySlipsIdUncancelRoute = createRoute({
  method: 'put',
  path: '/delivery_slips/{id}/uncancel',
  tags: ['DeliverySlips'],
  summary: '取消された納品書の復元\n',
  description: '指定された取消済み納品書を復元します。',
  operationId: 'delivery_slips/uncancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: DeliverySlipCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getInvoicesRoute = createRoute({
  method: 'get',
  path: '/invoices',
  tags: ['Invoices'],
  summary: '請求書一覧の取得\n',
  operationId: 'invoices/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      invoice_number: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'invoice_number',
            in: 'query',
            required: false,
            description: '請求書番号',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      subject: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'subject',
            in: 'query',
            required: false,
            description: '件名',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      partner_ids: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'partner_ids',
            in: 'query',
            required: false,
            description:
              '取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）',
            schema: { type: 'string', maxLength: 255 },
          },
        }),
      payment_status: z
        .enum(['settled', 'unsettled', 'canceled', 'unprocessed', 'failed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'payment_status',
            in: 'query',
            required: false,
            description:
              '決済ステータス（unsettled: 決済待ち, settled: 決済済み, canceled: 決済キャンセル, unprocessed: 決済依頼前, failed: 決済失敗）',
            schema: {
              type: 'string',
              enum: ['settled', 'unsettled', 'canceled', 'unprocessed', 'failed'],
            },
          },
        }),
      deal_status: z
        .enum(['registered', 'unregistered'])
        .exactOptional()
        .openapi({
          param: {
            name: 'deal_status',
            in: 'query',
            required: false,
            description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）',
            schema: { type: 'string', enum: ['registered', 'unregistered'] },
          },
        }),
      sending_status: z
        .enum(['sent', 'unsent'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sending_status',
            in: 'query',
            required: false,
            description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）',
            schema: { type: 'string', enum: ['sent', 'unsent'] },
          },
        }),
      cancel_status: z
        .enum(['canceled', 'uncanceled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'cancel_status',
            in: 'query',
            required: false,
            description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）',
            schema: { type: 'string', enum: ['canceled', 'uncanceled'] },
          },
        }),
      start_billing_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_billing_date',
            in: 'query',
            required: false,
            description: '請求日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_billing_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_billing_date',
            in: 'query',
            required: false,
            description: '請求日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      start_payment_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_payment_date',
            in: 'query',
            required: false,
            description: '入金期日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_payment_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_payment_date',
            in: 'query',
            required: false,
            description: '入金期日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              '取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
      sales_management_origin: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sales_management_origin',
            in: 'query',
            required: false,
            description:
              'freee販売から作成された帳票データを含める。trueを指定する場合はfreee販売から作成された帳票へのアクセス権限が必要です。',
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: InvoiceIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postInvoicesRoute = createRoute({
  method: 'post',
  path: '/invoices',
  tags: ['Invoices'],
  summary: '請求書の作成\n',
  description:
    '請求書の作成をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'invoices/create',
  request: {
    body: { content: { 'application/json': { schema: InvoiceRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The request has succeeded and a new resource has been created as a result.',
      content: { 'application/json': { schema: InvoiceResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getInvoicesTemplatesRoute = createRoute({
  method: 'get',
  path: '/invoices/templates',
  tags: ['Invoices'],
  summary: '使用可能な請求書の帳票テンプレート一覧の取得\n',
  description: '使用可能な請求書の帳票テンプレート一覧を返します。',
  operationId: 'invoices/templates/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TemplateIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getInvoicesIdRoute = createRoute({
  method: 'get',
  path: '/invoices/{id}',
  tags: ['Invoices'],
  summary: '請求書の取得\n',
  description: '指定されたIDの請求書を返します。',
  operationId: 'invoices/show',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '請求書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: InvoiceShowResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putInvoicesIdRoute = createRoute({
  method: 'put',
  path: '/invoices/{id}',
  tags: ['Invoices'],
  summary: '請求書の更新\n',
  description:
    '請求書の更新をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'invoices/update',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '請求書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InvoiceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: InvoiceResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putInvoicesIdCancelRoute = createRoute({
  method: 'put',
  path: '/invoices/{id}/cancel',
  tags: ['Invoices'],
  summary: '請求書の取消\n',
  description:
    '指定された請求書を取消状態にします。\n\n取引が紐づいている場合は取引も削除されます。',
  operationId: 'invoices/cancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '請求書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: InvoiceCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putInvoicesIdUncancelRoute = createRoute({
  method: 'put',
  path: '/invoices/{id}/uncancel',
  tags: ['Invoices'],
  summary: '取消された請求書の復元\n',
  description: '指定された取消済み請求書を復元します。',
  operationId: 'invoices/uncancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '請求書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: InvoiceCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getPaymentNoticesRoute = createRoute({
  method: 'get',
  path: '/payment_notices',
  tags: ['PaymentNotices'],
  summary: '支払通知書一覧の取得\n',
  operationId: 'payment_notices/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      payment_notice_number: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'payment_notice_number',
            in: 'query',
            required: false,
            description: '支払通知書番号',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      subject: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'subject',
            in: 'query',
            required: false,
            description: '件名',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      partner_ids: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'partner_ids',
            in: 'query',
            required: false,
            description:
              '取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）',
            schema: { type: 'string', maxLength: 255 },
          },
        }),
      sending_status: z
        .enum(['sent', 'unsent'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sending_status',
            in: 'query',
            required: false,
            description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）',
            schema: { type: 'string', enum: ['sent', 'unsent'] },
          },
        }),
      cancel_status: z
        .enum(['canceled', 'uncanceled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'cancel_status',
            in: 'query',
            required: false,
            description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）',
            schema: { type: 'string', enum: ['canceled', 'uncanceled'] },
          },
        }),
      start_payment_notice_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_payment_notice_date',
            in: 'query',
            required: false,
            description: '支払通知書日付の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_payment_notice_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_payment_notice_date',
            in: 'query',
            required: false,
            description: '支払通知書日付の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      start_collects_on: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_collects_on',
            in: 'query',
            required: false,
            description: '支払予定日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_collects_on: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_collects_on',
            in: 'query',
            required: false,
            description: '支払予定日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              '取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PaymentNoticeIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postPaymentNoticesRoute = createRoute({
  method: 'post',
  path: '/payment_notices',
  tags: ['PaymentNotices'],
  summary: '支払通知書の作成\n',
  description: '支払通知書の作成をします。',
  operationId: 'payment_notices/create',
  request: {
    body: {
      content: { 'application/json': { schema: PaymentNoticeRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The request has succeeded and a new resource has been created as a result.',
      content: { 'application/json': { schema: PaymentNoticeResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getPaymentNoticesTemplatesRoute = createRoute({
  method: 'get',
  path: '/payment_notices/templates',
  tags: ['PaymentNotices'],
  summary: '使用可能な支払通知書の帳票テンプレート一覧の取得\n',
  description: '使用可能な支払通知書の帳票テンプレート一覧を返します。',
  operationId: 'payment_notices/templates/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TemplateIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getPaymentNoticesIdRoute = createRoute({
  method: 'get',
  path: '/payment_notices/{id}',
  tags: ['PaymentNotices'],
  summary: '支払通知書の取得\n',
  description: '指定されたIDの支払通知書を返します。',
  operationId: 'payment_notices/show',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '支払通知書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PaymentNoticeShowResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPaymentNoticesIdRoute = createRoute({
  method: 'put',
  path: '/payment_notices/{id}',
  tags: ['PaymentNotices'],
  summary: '支払通知書の更新\n',
  description: '支払通知書の更新をします。',
  operationId: 'payment_notices/update',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '支払通知書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PaymentNoticeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PaymentNoticeResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPaymentNoticesIdCancelRoute = createRoute({
  method: 'put',
  path: '/payment_notices/{id}/cancel',
  tags: ['PaymentNotices'],
  summary: '支払通知書の取消\n',
  description:
    '指定された支払通知書を取消状態にします。\n\n取引が紐づいている場合は取引も削除されます。',
  operationId: 'payment_notices/cancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '支払通知書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PaymentNoticeCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPaymentNoticesIdUncancelRoute = createRoute({
  method: 'put',
  path: '/payment_notices/{id}/uncancel',
  tags: ['PaymentNotices'],
  summary: '取消された支払通知書の復元\n',
  description: '指定された取消済み支払通知書を復元します。',
  operationId: 'payment_notices/uncancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '支払通知書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PaymentNoticeCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getPurchaseOrdersRoute = createRoute({
  method: 'get',
  path: '/purchase_orders',
  tags: ['PurchaseOrders'],
  summary: '発注書一覧の取得\n',
  description: '発注書の一覧を返します。',
  operationId: 'purchase_orders/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      purchase_order_number: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'purchase_order_number',
            in: 'query',
            required: false,
            description: '発注書番号',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      subject: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'subject',
            in: 'query',
            required: false,
            description: '件名',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      partner_ids: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'partner_ids',
            in: 'query',
            required: false,
            description:
              '取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）',
            schema: { type: 'string', maxLength: 255 },
          },
        }),
      deal_status: z
        .enum(['registered', 'unregistered'])
        .exactOptional()
        .openapi({
          param: {
            name: 'deal_status',
            in: 'query',
            required: false,
            description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）',
            schema: { type: 'string', enum: ['registered', 'unregistered'] },
          },
        }),
      sending_status: z
        .enum(['sent', 'unsent'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sending_status',
            in: 'query',
            required: false,
            description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）',
            schema: { type: 'string', enum: ['sent', 'unsent'] },
          },
        }),
      cancel_status: z
        .enum(['canceled', 'uncanceled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'cancel_status',
            in: 'query',
            required: false,
            description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）',
            schema: { type: 'string', enum: ['canceled', 'uncanceled'] },
          },
        }),
      payment_status: z
        .enum(['settled', 'unsettled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'payment_status',
            in: 'query',
            required: false,
            description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）',
            schema: { type: 'string', enum: ['settled', 'unsettled'] },
          },
        }),
      start_purchase_order_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_purchase_order_date',
            in: 'query',
            required: false,
            description: '発注日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_purchase_order_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_purchase_order_date',
            in: 'query',
            required: false,
            description: '発注日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      start_collects_on: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_collects_on',
            in: 'query',
            required: false,
            description: '支払予定日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_collects_on: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_collects_on',
            in: 'query',
            required: false,
            description: '支払予定日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              '取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PurchaseOrderIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postPurchaseOrdersRoute = createRoute({
  method: 'post',
  path: '/purchase_orders',
  tags: ['PurchaseOrders'],
  summary: '発注書の作成\n',
  description:
    '発注書の作成をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'purchase_orders/create',
  request: {
    body: {
      content: { 'application/json': { schema: PurchaseOrderRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The request has succeeded and a new resource has been created as a result.',
      content: { 'application/json': { schema: PurchaseOrderResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getPurchaseOrdersTemplatesRoute = createRoute({
  method: 'get',
  path: '/purchase_orders/templates',
  tags: ['PurchaseOrders'],
  summary: '使用可能な発注書の帳票テンプレート一覧の取得\n',
  description: '使用可能な発注書の帳票テンプレート一覧を返します。',
  operationId: 'purchase_orders/templates/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TemplateIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getPurchaseOrdersIdRoute = createRoute({
  method: 'get',
  path: '/purchase_orders/{id}',
  tags: ['PurchaseOrders'],
  summary: '発注書の取得\n',
  description: '指定されたIDの発注書を返します。',
  operationId: 'purchase_orders/show',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PurchaseOrderShowResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPurchaseOrdersIdRoute = createRoute({
  method: 'put',
  path: '/purchase_orders/{id}',
  tags: ['PurchaseOrders'],
  summary: '発注書の更新\n',
  description:
    '発注書の更新をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'purchase_orders/update',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PurchaseOrderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PurchaseOrderResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPurchaseOrdersIdCancelRoute = createRoute({
  method: 'put',
  path: '/purchase_orders/{id}/cancel',
  tags: ['PurchaseOrders'],
  summary: '発注書の取消\n',
  description:
    '指定された発注書を取消状態にします。\n\n取引が紐づいている場合は取引も削除されます。',
  operationId: 'purchase_orders/cancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PurchaseOrderCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putPurchaseOrdersIdUncancelRoute = createRoute({
  method: 'put',
  path: '/purchase_orders/{id}/uncancel',
  tags: ['PurchaseOrders'],
  summary: '取消された発注書の復元\n',
  description: '指定された取消済み発注書を復元します。',
  operationId: 'purchase_orders/uncancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: PurchaseOrderCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getQuotationsRoute = createRoute({
  method: 'get',
  path: '/quotations',
  tags: ['Quotations'],
  summary: '見積書一覧の取得\n',
  operationId: 'quotations/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      quotation_number: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'quotation_number',
            in: 'query',
            required: false,
            description: '見積書番号',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      subject: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'subject',
            in: 'query',
            required: false,
            description: '件名',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      partner_ids: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'partner_ids',
            in: 'query',
            required: false,
            description:
              '取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）',
            schema: { type: 'string', maxLength: 255 },
          },
        }),
      sending_status: z
        .enum(['sent', 'unsent'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sending_status',
            in: 'query',
            required: false,
            description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）',
            schema: { type: 'string', enum: ['sent', 'unsent'] },
          },
        }),
      cancel_status: z
        .enum(['canceled', 'uncanceled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'cancel_status',
            in: 'query',
            required: false,
            description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）',
            schema: { type: 'string', enum: ['canceled', 'uncanceled'] },
          },
        }),
      start_quotation_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_quotation_date',
            in: 'query',
            required: false,
            description: '見積日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_quotation_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_quotation_date',
            in: 'query',
            required: false,
            description: '見積日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      start_expiration_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_expiration_date',
            in: 'query',
            required: false,
            description: '有効期限の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_expiration_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_expiration_date',
            in: 'query',
            required: false,
            description: '有効期限の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              '取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
      sales_management_origin: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'sales_management_origin',
            in: 'query',
            required: false,
            description:
              'freee販売から作成された帳票データを含める。trueを指定する場合はfreee販売から作成された帳票へのアクセス権限が必要です。',
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: QuotationIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postQuotationsRoute = createRoute({
  method: 'post',
  path: '/quotations',
  tags: ['Quotations'],
  summary: '見積書の作成\n',
  description: '見積書の作成をします。',
  operationId: 'quotations/create',
  request: {
    body: { content: { 'application/json': { schema: QuotationRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The request has succeeded and a new resource has been created as a result.',
      content: { 'application/json': { schema: QuotationResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getQuotationsTemplatesRoute = createRoute({
  method: 'get',
  path: '/quotations/templates',
  tags: ['Quotations'],
  summary: '使用可能な見積書の帳票テンプレート一覧の取得\n',
  description: '使用可能な見積書の帳票テンプレート一覧を返します。',
  operationId: 'quotations/templates/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TemplateIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getQuotationsIdRoute = createRoute({
  method: 'get',
  path: '/quotations/{id}',
  tags: ['Quotations'],
  summary: '見積書の取得\n',
  description: '指定されたIDの見積書を返します。',
  operationId: 'quotations/show',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: QuotationShowResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putQuotationsIdRoute = createRoute({
  method: 'put',
  path: '/quotations/{id}',
  tags: ['Quotations'],
  summary: '見積書の更新\n',
  description: '見積書の更新をします。',
  operationId: 'quotations/update',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuotationRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: QuotationResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putQuotationsIdCancelRoute = createRoute({
  method: 'put',
  path: '/quotations/{id}/cancel',
  tags: ['Quotations'],
  summary: '見積書の取消\n',
  description: '指定された見積書を取消状態にします。',
  operationId: 'quotations/cancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: QuotationCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putQuotationsIdUncancelRoute = createRoute({
  method: 'put',
  path: '/quotations/{id}/uncancel',
  tags: ['Quotations'],
  summary: '取消された見積書の復元\n',
  description: '指定された取消済み見積書を復元します。',
  operationId: 'quotations/uncancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: QuotationCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getReceiptsRoute = createRoute({
  method: 'get',
  path: '/receipts',
  tags: ['Receipts'],
  summary: '領収書一覧の取得\n',
  description: '領収書の一覧を返します。',
  operationId: 'receipts/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
      receipt_number: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'receipt_number',
            in: 'query',
            required: false,
            description: '領収書番号',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      subject: z
        .string()
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'subject',
            in: 'query',
            required: false,
            description: '件名',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      partner_ids: z
        .string()
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'partner_ids',
            in: 'query',
            required: false,
            description:
              '取引先ID（半角数字のidを半角カンマ区切りスペースなしで指定してください。最大3件まで指定できます。）',
            schema: { type: 'string', maxLength: 255 },
          },
        }),
      deal_status: z
        .enum(['registered', 'unregistered'])
        .exactOptional()
        .openapi({
          param: {
            name: 'deal_status',
            in: 'query',
            required: false,
            description: '取引ステータス（registered: 登録済み、 unregistered: 登録待ち）',
            schema: { type: 'string', enum: ['registered', 'unregistered'] },
          },
        }),
      sending_status: z
        .enum(['sent', 'unsent'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sending_status',
            in: 'query',
            required: false,
            description: '送付ステータス（sent: 送付済み、 unsent: 送付待ち）',
            schema: { type: 'string', enum: ['sent', 'unsent'] },
          },
        }),
      payment_status: z
        .enum(['settled', 'unsettled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'payment_status',
            in: 'query',
            required: false,
            description: '決済ステータス（unsettled: 決済待ち, settled: 決済済み）',
            schema: { type: 'string', enum: ['settled', 'unsettled'] },
          },
        }),
      cancel_status: z
        .enum(['canceled', 'uncanceled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'cancel_status',
            in: 'query',
            required: false,
            description: '取消済み（canceled: 該当する、 uncanceled: 該当しない）',
            schema: { type: 'string', enum: ['canceled', 'uncanceled'] },
          },
        }),
      start_receipt_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_receipt_date',
            in: 'query',
            required: false,
            description: '領収日の開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
      end_receipt_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_receipt_date',
            in: 'query',
            required: false,
            description: '領収日の終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '取得レコードの件数 (デフォルト: 20, 最小: 1, 最大: 100)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: false,
            description:
              '取得レコードのオフセット (デフォルト: 0)。limit と offset の合計は 10,000 を超えることはできません。',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ReceiptIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postReceiptsRoute = createRoute({
  method: 'post',
  path: '/receipts',
  tags: ['Receipts'],
  summary: '領収書の作成\n',
  description:
    '領収書の作成をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'receipts/create',
  request: {
    body: { content: { 'application/json': { schema: ReceiptRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The request has succeeded and a new resource has been created as a result.',
      content: { 'application/json': { schema: ReceiptResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getReceiptsTemplatesRoute = createRoute({
  method: 'get',
  path: '/receipts/templates',
  tags: ['Receipts'],
  summary: '使用可能な領収書の帳票テンプレート一覧の取得\n',
  description: '使用可能な領収書の帳票テンプレート一覧を返します。',
  operationId: 'receipts/templates/index',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TemplateIndexResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getReceiptsIdRoute = createRoute({
  method: 'get',
  path: '/receipts/{id}',
  tags: ['Receipts'],
  summary: '領収書の取得\n',
  description: '指定されたIDの領収書を返します。',
  operationId: 'receipts/show',
  request: {
    query: z.object({
      company_id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '領収書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ReceiptShowResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putReceiptsIdRoute = createRoute({
  method: 'put',
  path: '/receipts/{id}',
  tags: ['Receipts'],
  summary: '領収書の更新\n',
  description:
    '領収書の更新をします。\n\nissue_date, account_item_id, tax_code, item_id, section_id, tag_ids, segment_1_tag_id, segment_2_tag_id, segment_3_tag_id は、取引登録の下書き保存で利用されます。\n\ntag_idsは10個まで設定可能です。',
  operationId: 'receipts/update',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '領収書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReceiptRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ReceiptResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putReceiptsIdCancelRoute = createRoute({
  method: 'put',
  path: '/receipts/{id}/cancel',
  tags: ['Receipts'],
  summary: '領収書の取消\n',
  description:
    '指定された領収書を取消状態にします。\n\n取引が紐づいている場合は取引も削除されます。',
  operationId: 'receipts/cancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '領収書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ReceiptCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putReceiptsIdUncancelRoute = createRoute({
  method: 'put',
  path: '/receipts/{id}/uncancel',
  tags: ['Receipts'],
  summary: '取消された領収書の復元\n',
  description: '指定された取消済み領収書を復元します。',
  operationId: 'receipts/uncancel',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '領収書ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(9223372036854775000n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 9223372036854775000,
                  description: '事業所ID',
                }),
            })
            .openapi({ required: ['company_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ReceiptCancelStatusResponseSchema } },
    },
    400: {
      description: 'The server could not understand the request due to invalid syntax.',
      content: { 'application/problem+json': { schema: BadRequestSchema } },
    },
    401: {
      description: 'Access is unauthorized.',
      content: { 'application/json': { schema: UnauthorizedErrorSchema } },
    },
    403: {
      description: 'Access is forbidden.',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: 'The server cannot find the requested resource.',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: 'Server error',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})
