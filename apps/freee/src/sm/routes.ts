import { createRoute, z } from '@hono/zod-openapi'

const CustomFieldDefinitionBaseSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'カスタム項目定義のID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    key: z.string().openapi({ description: 'カスタム項目定義のキー', example: 'custom_field_001' }),
    display_name: z.string().openapi({ description: '表示名', example: 'プロジェクトコード' }),
    type: z
      .enum([
        'text',
        'textarea',
        'amount',
        'quantity',
        'number',
        'date',
        'enum',
        'partner',
        'employee',
        'section',
        'master_item',
        'member',
      ])
      .openapi({
        description:
          'カスタム項目の入力形式\n* `text` - 一行テキスト\n* `textarea` - 複数行テキスト\n* `amount` - 金額\n* `quantity` - 数量\n* `number` - 数値\n* `date` - 日付\n* `enum` - プルダウン\n* `partner` - 取引先\n* `employee` - 従業員\n* `section` - 部門\n* `master_item` - 商品\n* `member` - メンバー',
        example: 'text',
      }),
    required: z.boolean().openapi({ description: '必須項目かどうか', example: false }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '項目の説明', example: 'プロジェクトを識別するためのコード' }),
  })
  .openapi({ required: ['id', 'key', 'display_name', 'type', 'required'] })
  .openapi('CustomFieldDefinitionBase')

const TextCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('text').openapi({ example: 'text' }) })
    .openapi({ required: ['type'] }),
).openapi('TextCustomFieldDefinition')

const TextareaCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('textarea').openapi({ example: 'textarea' }) })
    .openapi({ required: ['type'] }),
).openapi('TextareaCustomFieldDefinition')

const AmountCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('amount').openapi({ example: 'amount' }) })
    .openapi({ required: ['type'] }),
).openapi('AmountCustomFieldDefinition')

const QuantityCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('quantity').openapi({ example: 'quantity' }) })
    .openapi({ required: ['type'] }),
).openapi('QuantityCustomFieldDefinition')

const NumberCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({
      type: z.literal('number').openapi({ example: 'number' }),
      unit: z.string().nullable().exactOptional().openapi({ description: '単位', example: '個' }),
    })
    .openapi({ required: ['type'] }),
).openapi('NumberCustomFieldDefinition')

const DateCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('date').openapi({ example: 'date' }) })
    .openapi({ required: ['type'] }),
).openapi('DateCustomFieldDefinition')

const EnumCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({
      type: z.literal('enum').openapi({ example: 'enum' }),
      enumerations: z
        .array(
          z
            .strictObject({
              id: z.string().openapi({ description: 'ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
              name: z.string().openapi({ description: '表示名', example: 'オプション1' }),
              usable: z
                .boolean()
                .openapi({
                  description:
                    '入力候補に使用可能かどうか<br><br>※falseの場合、その選択肢自体は削除せず、Web画面での案件登録時などに入力候補として表示されません。ただし案件登録APIなどでfalseの選択肢をパラメータに指定すれば設定できます。',
                  example: true,
                }),
            })
            .openapi({ required: ['id', 'name', 'usable'] }),
        )
        .openapi({ description: '選択肢' }),
    })
    .openapi({ required: ['type', 'enumerations'] }),
).openapi('EnumCustomFieldDefinition')

const PartnerCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('partner').openapi({ example: 'partner' }) })
    .openapi({ required: ['type'] }),
).openapi('PartnerCustomFieldDefinition')

const EmployeeCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('employee').openapi({ example: 'employee' }) })
    .openapi({ required: ['type'] }),
).openapi('EmployeeCustomFieldDefinition')

const SectionCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('section').openapi({ example: 'section' }) })
    .openapi({ required: ['type'] }),
).openapi('SectionCustomFieldDefinition')

const MasterItemCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('master_item').openapi({ example: 'master_item' }) })
    .openapi({ required: ['type'] }),
).openapi('MasterItemCustomFieldDefinition')

const MemberCustomFieldDefinitionSchema = CustomFieldDefinitionBaseSchema.and(
  z
    .strictObject({ type: z.literal('member').openapi({ example: 'member' }) })
    .openapi({ required: ['type'] }),
).openapi('MemberCustomFieldDefinition')

type CustomFieldDefinitionType =
  | z.infer<typeof TextCustomFieldDefinitionSchema>
  | z.infer<typeof TextareaCustomFieldDefinitionSchema>
  | z.infer<typeof AmountCustomFieldDefinitionSchema>
  | z.infer<typeof QuantityCustomFieldDefinitionSchema>
  | z.infer<typeof NumberCustomFieldDefinitionSchema>
  | z.infer<typeof DateCustomFieldDefinitionSchema>
  | z.infer<typeof EnumCustomFieldDefinitionSchema>
  | z.infer<typeof PartnerCustomFieldDefinitionSchema>
  | z.infer<typeof EmployeeCustomFieldDefinitionSchema>
  | z.infer<typeof SectionCustomFieldDefinitionSchema>
  | z.infer<typeof MasterItemCustomFieldDefinitionSchema>
  | z.infer<typeof MemberCustomFieldDefinitionSchema>

const LineTypeSchema = z
  .enum(['basic', 'text'])
  .openapi({ description: '明細種別' })
  .openapi('LineType')

const BasicLineParamsSchema = z
  .strictObject({
    line_type: LineTypeSchema,
    master_item_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_line_type_id: z
      .string()
      .length(26)
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    description: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: 'パンフレットデザイン料' }),
    quantity: z.float64().openapi({ description: '数量', example: 100 }),
    uom_name: z
      .string()
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: '単位', example: '個' }),
    unit_price: z
      .float64()
      .min(-999999999999)
      .max(999999999999)
      .openapi({ description: '単価', example: 1000 }),
    accounting_reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計計上部門ID<br>\n※ 親部門のIDは指定できません',
        example: 67890,
      }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    memo_tags: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグID' }),
    withholding_enabled: z
      .boolean()
      .openapi({ description: '源泉徴収税対象明細かどうか', example: false }),
    is_manual_tax_entry: z
      .boolean()
      .openapi({ description: '税の手動入力を行うかどうか', example: false }),
    tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description:
          '手動入力した税額<br>\n※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。',
        example: 10000,
      }),
  })
  .openapi({
    description: '通常明細パラメータ',
    required: [
      'line_type',
      'deal_line_type_id',
      'quantity',
      'unit_price',
      'withholding_enabled',
      'is_manual_tax_entry',
    ],
  })
  .openapi('BasicLineParams')

const TextLineParamsSchema = z
  .strictObject({
    line_type: LineTypeSchema.openapi({ example: 'text' }),
    text: z
      .string()
      .max(200)
      .openapi({ description: 'テキスト行', example: '備考：特急料金が含まれます' }),
  })
  .openapi({ description: 'テキスト明細パラメータ', required: ['line_type', 'text'] })
  .openapi('TextLineParams')

type LineParamsType = z.infer<typeof BasicLineParamsSchema> | z.infer<typeof TextLineParamsSchema>

const MasterItemDetailSchema = z
  .strictObject({
    id: z.string().openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '商品コード', example: 'P-001' }),
    name: z.string().openapi({ description: '商品名', example: 'パンフレットA4' }),
  })
  .nullable()
  .openapi({ description: '商品情報', required: ['id', 'name'] })
  .openapi('MasterItemDetail')

const DealLineTypeDetailSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: '明細取引タイプ名', example: '課税売上10%' }),
  })
  .openapi({ description: '明細取引タイプ', required: ['id', 'name'] })
  .openapi('DealLineTypeDetail')

const AmountSetSchema = z
  .strictObject({
    excluding_tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description: '税抜金額',
        example: 100000,
      }),
    tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description: '税額',
        example: 10000,
      }),
    including_tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description: '税込金額',
        example: 110000,
      }),
  })
  .openapi({ required: ['excluding_tax', 'tax', 'including_tax'], description: '金額セット' })
  .openapi('AmountSet')

const TaxTypeDetailSchema = z
  .strictObject({
    code: z
      .int32()
      .max(2147483647)
      .openapi({
        description: '税区分コード<br>※freee会計 APIで参照可能な税区分のコードです',
        example: 10,
      }),
    name: z.string().openapi({ description: '税区分名', example: '課税売上10%' }),
  })
  .nullable()
  .openapi({ description: '税区分', required: ['code', 'name'] })
  .openapi('TaxTypeDetail')

const AccountingReportingSectionDetailSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '部門ID',
        example: 1001,
      }),
    name: z.string().openapi({ description: '部門名', example: '営業部' }),
  })
  .nullable()
  .openapi({ description: '会計計上部門', required: ['id', 'name'] })
  .openapi('AccountingReportingSectionDetail')

const ItemTagDetailSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    name: z.string().openapi({ description: '会計品目タグ名', example: '印刷物' }),
  })
  .nullable()
  .openapi({ description: '会計品目タグ', required: ['id', 'name'] })
  .openapi('ItemTagDetail')

const MemoTagDetailSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: 'メモタグID',
        example: 3001,
      }),
    name: z.string().openapi({ description: 'メモタグ名', example: '重要案件' }),
  })
  .openapi({ description: 'メモタグ', required: ['id', 'name'] })
  .openapi('MemoTagDetail')

const BasicLineDetailSchema = z
  .strictObject({
    line_no: z.int32().max(2147483647).openapi({ description: '明細行番号', example: 1 }),
    line_type: LineTypeSchema,
    master_item: MasterItemDetailSchema.exactOptional(),
    deal_line_type: DealLineTypeDetailSchema,
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: 'パンフレットデザイン料' }),
    quantity: z.float64().openapi({ description: '数量', example: 100 }),
    uom_name: z.string().nullable().exactOptional().openapi({ description: '単位', example: '個' }),
    unit_price: z.float64().openapi({ description: '単価', example: 1000 }),
    amount_set: AmountSetSchema,
    tax_type: TaxTypeDetailSchema.exactOptional(),
    accounting_reporting_section: AccountingReportingSectionDetailSchema.exactOptional(),
    item_tag: ItemTagDetailSchema.exactOptional(),
    memo_tags: z
      .array(MemoTagDetailSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグ' }),
    withholding_enabled: z
      .boolean()
      .openapi({ description: '源泉徴収税対象明細かどうか', example: false }),
  })
  .openapi({
    description: '通常明細詳細',
    required: [
      'line_no',
      'line_type',
      'deal_line_type',
      'quantity',
      'unit_price',
      'amount_set',
      'withholding_enabled',
    ],
  })
  .openapi('BasicLineDetail')

const TextLineDetailSchema = z
  .strictObject({
    line_no: z.int32().max(2147483647).openapi({ description: '明細行番号', example: 1 }),
    line_type: LineTypeSchema.openapi({ example: 'text' }),
    text: z.string().openapi({ description: 'テキスト行', example: '備考：特急料金が含まれます' }),
  })
  .openapi({ description: 'テキスト明細詳細', required: ['line_no', 'line_type', 'text'] })
  .openapi('TextLineDetail')

type LineDetailType = z.infer<typeof BasicLineDetailSchema> | z.infer<typeof TextLineDetailSchema>

const EmployeeSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '従業員ID',
        example: 101,
      }),
    display_name: z.string().openapi({ description: '従業員名', example: '田中太郎' }),
  })
  .openapi({ description: '社内担当者', required: ['id', 'display_name'] })
  .openapi('Employee')

const MemberSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: 'メンバーID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    display_name: z.string().openapi({ description: 'メンバー名', example: '山田花子' }),
  })
  .openapi({ description: '社内担当者', required: ['id', 'display_name'] })
  .openapi('Member')

const PartnerSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '取引先ID',
        example: 1001,
      }),
    name: z.string().openapi({ description: '取引先名', example: '株式会社サンプル' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '取引先コード', example: 'P-001' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('Partner')

const SalesProgressionSchema = z
  .strictObject({
    id: z.string().openapi({ description: '受注確度ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: '受注確度名称', example: 'B' }),
  })
  .nullable()
  .openapi({ description: '受注確度', required: ['id', 'name'] })
  .openapi('SalesProgression')

const BusinessPhaseSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'フェーズID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: 'フェーズ名称', example: '引き合い' }),
  })
  .nullable()
  .openapi({ description: '案件フェーズ', required: ['id', 'name'] })
  .openapi('BusinessPhase')

const ReportingSectionSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '部門ID',
        example: 67890,
      }),
    name: z.string().openapi({ description: '部門名', example: '開発部' }),
  })
  .nullable()
  .openapi({ description: '担当部門', required: ['id', 'name'] })
  .openapi('ReportingSection')

const BusinessDigestSchema = z
  .strictObject({
    id: z.string().openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: '案件名称', example: 'サンプル案件' }),
    business_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '案件登録日', example: '2025-04-01' }),
    charge_employee: EmployeeSchema.nullable().exactOptional(),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    code: z.string().openapi({ description: '案件コード', example: 'B-0000000003' }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    closed: z.boolean().openapi({ description: 'ロック状態', example: false }),
    customer: PartnerSchema.nullable().exactOptional().openapi({ description: '顧客' }),
    sales_progression: SalesProgressionSchema.exactOptional(),
    scheduled_completion_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '完了予定日', example: '2025-06-30' }),
    completion_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '完了日', example: '2025-06-15' }),
    business_phase: BusinessPhaseSchema.exactOptional(),
    reporting_section: ReportingSectionSchema.exactOptional(),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'code',
      'canceled',
      'closed',
      'registered_at',
      'registered_by',
      'last_updated_at',
      'last_updated_by',
    ],
  })
  .openapi('BusinessDigest')

const PaginationMetaSchema = z
  .strictObject({
    limit_value: z
      .int32()
      .max(2147483647)
      .openapi({ description: '現在の1ページあたりの件数', example: 50 }),
    current_offset: z
      .int32()
      .max(2147483647)
      .openapi({ description: '現在のオフセット件数', example: 0 }),
    next_offset: z
      .int32()
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '次のオフセット（存在しない場合はnull）', example: 50 }),
    prev_offset: z
      .int32()
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '前のオフセット（存在しない場合はnull）', example: 0 }),
    total_count: z
      .int32()
      .max(2147483647)
      .openapi({ description: '現在のフィルタ条件での総件数', example: 200 }),
  })
  .openapi({ required: ['limit_value', 'current_offset', 'total_count'] })
  .openapi('PaginationMeta')

const ProductErrorSchema = z
  .looseObject({
    status_code: z
      .int()
      .min(400)
      .max(599)
      .openapi({ description: 'HTTPステータスコード', example: 404 }),
    errors: z
      .array(
        z
          .strictObject({
            codes: z
              .array(z.string().openapi({ example: 'company_not_found' }))
              .max(1)
              .openapi({ description: 'エラーコード' }),
            messages: z
              .array(z.string().openapi({ example: '事業所が見つかりませんでした。' }))
              .openapi({ description: 'エラーメッセージ' }),
          })
          .openapi({ required: ['codes', 'messages'] }),
      )
      .max(1)
      .openapi({ description: 'エラーの詳細' }),
  })
  .openapi({ description: 'エラー', required: ['status_code', 'errors'] })
  .openapi('ProductError')

const AuthErrorSchema = z
  .strictObject({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'エラーメッセージ', example: 'ログインをして下さい' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'エラーコード', example: 'invalid_access_token' }),
  })
  .openapi({ description: '認証エラー', required: [] })
  .openapi('AuthError')

const WithCompanyIdSchema = z
  .strictObject({
    company_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '事業所ID',
        example: 1,
      }),
  })
  .openapi({ required: ['company_id'] })
  .openapi('WithCompanyId')

const ChargeEmployeeIdSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(0n).max(9223372036854776000n),
  )
  .nullable()
  .openapi({
    type: ['integer', 'null'],
    format: 'int64',
    minimum: 0,
    maximum: 9223372036854776000,
    description:
      '社内担当者の従業員ID\n\ncharge_member_id と同時に指定した場合は charge_member_id が優先されます。',
    example: 101,
  })
  .openapi('ChargeEmployeeId')

const ChargeMemberIdSchema = z
  .string()
  .length(26)
  .nullable()
  .openapi({
    description:
      '社内担当者のメンバーID\n\ncharge_employee_id と同時に指定した場合は charge_member_id が優先されます。',
    example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
  })
  .openapi('ChargeMemberId')

const CustomerIdSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(1n).max(9223372036854776000n),
  )
  .nullable()
  .openapi({
    type: ['integer', 'null'],
    format: 'int64',
    minimum: 1,
    maximum: 9223372036854776000,
    description: '顧客の取引先ID',
    example: 1001,
  })
  .openapi('CustomerId')

const ReportingSectionIdSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(1n).max(9223372036854776000n),
  )
  .nullable()
  .openapi({
    type: ['integer', 'null'],
    format: 'int64',
    minimum: 1,
    maximum: 9223372036854776000,
    description: '担当部門ID<br>\n※ 親部門のIDは指定できません',
    example: 67890,
  })
  .openapi('ReportingSectionId')

const InternalMemoSchema = z
  .string()
  .max(2000)
  .nullable()
  .openapi({ description: '社内メモ', example: '重要案件のため優先対応' })
  .openapi('InternalMemo')

const BusinessRequestBaseSchema = z
  .strictObject({
    name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: '案件名称', example: 'サンプル案件' }),
    code: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          '案件コード（null・空文字での送信不可。POSTの自動採番ON時およびPATCHのキー省略時は省略可能）',
        example: 'B-0000000001',
      }),
    business_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '案件登録日', example: '2025-04-01' }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    customer_id: CustomerIdSchema.exactOptional(),
    prospect_sales_order: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        default: 0,
        description: '受注見込',
        example: 6000000,
      }),
    sales_progression_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '受注確度ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    scheduled_completion_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '完了予定日', example: '2025-06-30' }),
    completion_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '完了日', example: '2025-06-15' }),
    business_phase_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件フェーズID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    common_business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '紐付ける案件マスタID（ULID形式）。案件登録時のみ指定可能で、案件更新では紐付けの変更はできません（紐付け済みの案件に対して既存と異なる値を指定した場合はエラー）',
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      }),
    custom_fields: z
      .array(
        z
          .object({
            definition_id: z
              .string()
              .length(26)
              .openapi({ description: 'カスタム項目ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            value: z
              .union([z.string(), z.number()])
              .nullable()
              .openapi({ description: 'カスタム項目の値', example: 'サンプル値' }),
          })
          .openapi({ required: ['definition_id', 'value'] }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'カスタム項目',
        example: [
          { definition_id: '01JPP4FD1CVQWCDSWA90VE1ZTM', value: 'PJ-123456' },
          { definition_id: '01JPP4FD1CVQWCDSWA90VE1ZTN', value: 234 },
        ],
      }),
  })
  .openapi({ required: [] })
  .openapi('BusinessRequestBase')

const BusinessMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('BusinessMinimalResponse')

const CustomFieldPartnerValueSchema = z
  .strictObject({
    type: z.literal('partner').openapi({ description: 'マスタ型の種別', example: 'partner' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '取引先ID', example: 1001 }),
    name: z.string().openapi({ description: '取引先名', example: 'サンプル取引先' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '取引先コード', example: 'P-001' }),
  })
  .openapi({ description: '取引先型カスタム項目の値', required: ['type', 'id', 'name'] })
  .openapi('CustomFieldPartnerValue')

const CustomFieldEmployeeValueSchema = z
  .strictObject({
    type: z.literal('employee').openapi({ description: 'マスタ型の種別', example: 'employee' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '従業員ID', example: 101 }),
    name: z.string().openapi({ description: '従業員名', example: 'サンプル従業員' }),
  })
  .openapi({ description: '従業員型カスタム項目の値', required: ['type', 'id', 'name'] })
  .openapi('CustomFieldEmployeeValue')

const CustomFieldSectionValueSchema = z
  .strictObject({
    type: z.literal('section').openapi({ description: 'マスタ型の種別', example: 'section' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '部門ID', example: 67890 }),
    name: z.string().openapi({ description: '部門名', example: 'サンプル部門' }),
  })
  .openapi({ description: '部門型カスタム項目の値', required: ['type', 'id', 'name'] })
  .openapi('CustomFieldSectionValue')

const CustomFieldMasterItemValueSchema = z
  .strictObject({
    type: z
      .literal('master_item')
      .openapi({ description: 'マスタ型の種別', example: 'master_item' }),
    id: z.string().openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: '商品名', example: 'サンプル商品' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '商品コード', example: 'I-001' }),
  })
  .openapi({ description: '商品型カスタム項目の値', required: ['type', 'id', 'name'] })
  .openapi('CustomFieldMasterItemValue')

const CustomFieldMemberValueSchema = z
  .strictObject({
    type: z.literal('member').openapi({ description: 'マスタ型の種別', example: 'member' }),
    id: z.string().openapi({ description: 'メンバーID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: 'メンバー名', example: 'サンプルメンバー' }),
  })
  .openapi({ description: 'メンバー型カスタム項目の値', required: ['type', 'id', 'name'] })
  .openapi('CustomFieldMemberValue')

const CustomFieldMasterValueSchema = z
  .discriminatedUnion('type', [
    CustomFieldPartnerValueSchema,
    CustomFieldEmployeeValueSchema,
    CustomFieldSectionValueSchema,
    CustomFieldMasterItemValueSchema,
    CustomFieldMemberValueSchema,
  ])
  .openapi({
    description: 'マスタ型カスタム項目の値',
    discriminator: {
      propertyName: 'type',
      mapping: {
        partner: '#/components/schemas/CustomFieldPartnerValue',
        employee: '#/components/schemas/CustomFieldEmployeeValue',
        section: '#/components/schemas/CustomFieldSectionValue',
        master_item: '#/components/schemas/CustomFieldMasterItemValue',
        member: '#/components/schemas/CustomFieldMemberValue',
      },
    },
  })
  .openapi('CustomFieldMasterValue')

const CustomFieldSchema = z
  .strictObject({
    value: z
      .union([z.string(), z.number(), CustomFieldMasterValueSchema])
      .nullable()
      .openapi({
        description:
          'カスタム項目の値\n* 文字列型（text, textarea, date）: 文字列\n* 数値型（number, amount, quantity）: 数値\n* プルダウン型（enum）: 選択肢の名称（文字列）\n* マスタ型（partner, employee, section, master_item, member）: マスタ情報オブジェクト',
        example: 'サンプル値',
      }),
    definition_id: z
      .string()
      .length(26)
      .openapi({ description: 'カスタム項目定義ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    definition_name: z
      .string()
      .openapi({ description: 'カスタム項目定義名', example: 'カスタム項目1' }),
  })
  .openapi({ description: 'カスタム項目', required: ['value', 'definition_id', 'definition_name'] })
  .openapi('CustomField')

const BusinessDetailSchema = BusinessDigestSchema.and(
  z
    .strictObject({
      common_business_id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: '案件マスタID（ULID形式）',
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
      actual_profit: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '粗利(実績)',
          example: 1000000,
        }),
      sales_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '売上合計金額(税抜)',
          example: 5000000,
        }),
      procurement_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '仕入合計金額(税抜)',
          example: 3000000,
        }),
      other_cost_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: 'その他原価実績',
          example: 1000000,
        }),
      prospect_sales_order: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '受注見込',
          example: 6000000,
        }),
      prospect_purchase_order: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '発注見込',
          example: 3500000,
        }),
      prospect_other_cost: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: 'その他費用見込',
          example: 1200000,
        }),
      quotation_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '見積合計金額(税抜)',
          example: 5500000,
        }),
      sales_order_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '受注合計金額(税抜)',
          example: 5200000,
        }),
      delivered_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '納品確定金額(税抜)',
          example: 4800000,
        }),
      bill_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '請求合計金額(税抜)',
          example: 4800000,
        }),
      purchase_order_totals_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '発注合計金額(税抜)',
          example: 3200000,
        }),
      actual_other_cost: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: 'その他費用実績',
          example: 900000,
        }),
      prospect_profit: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '粗利(見込)',
          example: 1300000,
        }),
      budget_profit: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '受発注差額(税抜)',
          example: 1500000,
        }),
      margin_actual_rate_percent: z
        .float32()
        .nullable()
        .exactOptional()
        .openapi({ description: '粗利率実績', example: 20.5 }),
      budget_total_labor_cost: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '人件費(予算)\n\n※freee工数管理と連携している場合のみ値が反映されます\n',
          example: 2000000,
        }),
      actual_total_labor_cost: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '人件費(実績)\n\n※freee工数管理と連携している場合のみ値が反映されます\n',
          example: 1800000,
        }),
      internal_memo: InternalMemoSchema.exactOptional(),
      custom_fields: z.array(CustomFieldSchema).openapi({
        description: 'カスタム項目一覧',
        example: [
          {
            value: 'サンプルテキスト',
            definition_id: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            definition_name: 'カスタム項目1',
          },
          {
            value: 12345,
            definition_id: '01JPP4FD1CVQWCDSWA90VE1ZTN',
            definition_name: 'カスタム項目2',
          },
          {
            value: { type: 'partner', id: 1001, name: 'サンプル取引先', code: 'P-001' },
            definition_id: '01JPP4FD1CVQWCDSWA90VE1ZTO',
            definition_name: '担当取引先',
          },
        ],
      }),
    })
    .openapi({ required: ['custom_fields'] }),
).openapi('BusinessDetail')

const ReportingSectionIdsSchema = z
  .array(
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        example: 67890,
      }),
  )
  .openapi('ReportingSectionIds')

const DatePeriodSchema = z
  .strictObject({
    from: z.iso.date().openapi({ description: '開始日', example: '2025-04-01' }),
    to: z.iso.date().openapi({ description: '終了日', example: '2025-06-30' }),
  })
  .openapi({ description: '発生予定期間', required: ['from', 'to'] })
  .openapi('DatePeriod')

const BusinessSchema = z
  .strictObject({
    id: z.string().openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    code: z.string().openapi({ description: '案件コード', example: 'B-001' }),
    name: z.string().openapi({ description: '案件名', example: 'サンプル案件' }),
    closed: z.boolean().openapi({ description: 'ロック状態', example: false }),
  })
  .nullable()
  .openapi({ description: '案件', required: ['id', 'code', 'name', 'closed'] })
  .openapi('Business')

const CostBudgetBaseSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '原価予算ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    cost_budget_no: z.string().openapi({ description: '原価予算No.', example: 'CB-0001' }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    type: z
      .enum(['procurement', 'external_procurement', 'other_cost'])
      .openapi({
        description:
          '原価種別 (仕入: procurement, 外部仕入: external_procurement, その他原価: other_cost)',
        example: 'procurement',
      }),
    amount_excluding_tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description: '税抜金額',
        example: 100000,
      }),
    date_period: DatePeriodSchema,
    business: BusinessSchema.exactOptional(),
    memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '備考', example: '備考テキスト' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({
    required: [
      'id',
      'cost_budget_no',
      'canceled',
      'type',
      'amount_excluding_tax',
      'date_period',
      'registered_by',
      'last_updated_by',
      'registered_at',
      'last_updated_at',
    ],
  })
  .openapi('CostBudgetBase')

const AccountItemSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '勘定科目ID',
        example: 12345,
      }),
    name: z.string().openapi({ description: '勘定科目名', example: '仕入高' }),
  })
  .openapi({ description: '勘定科目', required: ['id', 'name'] })
  .openapi('AccountItem')

const SegmentTagSchema = z
  .strictObject({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: 'セグメントタグID',
        example: 12345,
      }),
    name: z.string().openapi({ description: 'セグメントタグ名', example: 'プロジェクトA' }),
  })
  .nullable()
  .openapi({ description: 'セグメントタグ', required: ['id', 'name'] })
  .openapi('SegmentTag')

const ProcurementCostBudgetSchema = CostBudgetBaseSchema.and(
  z
    .strictObject({
      type: z.literal('procurement').exactOptional(),
      supplier: PartnerSchema.nullable().exactOptional().openapi({ description: '仕入先' }),
      payment_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '支払先' }),
      master_item: MasterItemDetailSchema.exactOptional().openapi({ description: '商品' }),
      deal_line_type: DealLineTypeDetailSchema.openapi({ description: '明細取引タイプ' }),
      quantity: z.float64().openapi({ description: '数量', example: 10 }),
      uom_name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '単位', example: '個' }),
      unit_price: z
        .float64()
        .min(-999999999999)
        .max(999999999999)
        .openapi({ description: '単価', example: 1000 }),
      tax_division: TaxTypeDetailSchema.openapi({ description: '税区分' }),
      account_item: AccountItemSchema.openapi({ description: '勘定科目' }),
      memo_tags: z
        .array(MemoTagDetailSchema)
        .nullable()
        .exactOptional()
        .openapi({ description: 'メモタグ' }),
      item_tag: ItemTagDetailSchema.nullable()
        .exactOptional()
        .openapi({ description: '会計品目タグ' }),
      segment_tag_1: SegmentTagSchema.exactOptional().openapi({ description: 'セグメントタグ1' }),
      segment_tag_2: SegmentTagSchema.exactOptional().openapi({ description: 'セグメントタグ2' }),
      segment_tag_3: SegmentTagSchema.exactOptional().openapi({ description: 'セグメントタグ3' }),
      accounting_reporting_section: AccountingReportingSectionDetailSchema.exactOptional().openapi({
        description: '会計計上部門',
      }),
    })
    .openapi({
      required: ['deal_line_type', 'quantity', 'unit_price', 'tax_division', 'account_item'],
    }),
)
  .openapi({ description: '原価予算 (仕入)' })
  .openapi('ProcurementCostBudget')

const BasicCostBudgetSchema = CostBudgetBaseSchema.and(
  z
    .strictObject({ type: z.enum(['external_procurement', 'other_cost']).exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ description: '原価予算 (外部仕入・その他原価)' })
  .openapi('BasicCostBudget')

const CostBudgetDetailSchema = z
  .xor([BasicCostBudgetSchema, ProcurementCostBudgetSchema])
  .openapi({
    description: '原価予算詳細',
    discriminator: {
      propertyName: 'type',
      mapping: {
        procurement: '#/components/schemas/ProcurementCostBudget',
        external_procurement: '#/components/schemas/BasicCostBudget',
        other_cost: '#/components/schemas/BasicCostBudget',
      },
    },
  })
  .openapi('CostBudgetDetail')

const CostBudgetRequestBaseSchema = z
  .strictObject({
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    period_from_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '期間開始日', example: '2025-04-01' }),
    period_to_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '期間終了日', example: '2025-06-30' }),
    memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '備考', example: '備考テキスト' }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '担当部門ID',
        example: 1,
      }),
  })
  .openapi({ description: '原価予算リクエスト共通', required: [] })
  .openapi('CostBudgetRequestBase')

const ProcurementCostBudgetRequestPropertiesSchema = z
  .object({
    supplier_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '仕入先の取引先ID',
        example: 1001,
      }),
    payment_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '支払先の取引先ID',
        example: 1002,
      }),
    quantity: z
      .float32()
      .min(-99999999)
      .max(99999999)
      .exactOptional()
      .openapi({ description: '数量', example: 10 }),
    unit_price: z
      .float32()
      .min(-999999999999)
      .max(999999999999)
      .exactOptional()
      .openapi({ description: '単価', example: 10 }),
    uom_name: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '単位', example: '個' }),
    master_item_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_line_type_id: z
      .string()
      .length(26)
      .exactOptional()
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    accounting_reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計計上部門ID',
        example: 1,
      }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    memo_tag_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグID' }),
    segment_tag_1_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ1のID',
        example: 12345,
      }),
    segment_tag_2_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ2のID',
        example: 12345,
      }),
    segment_tag_3_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ3のID',
        example: 12345,
      }),
  })
  .openapi({ description: '原価予算リクエスト 仕入固有プロパティ', required: [] })
  .openapi('ProcurementCostBudgetRequestProperties')

const ProcurementCostBudgetCreateRequestSchema = CostBudgetRequestBaseSchema.and(
  ProcurementCostBudgetRequestPropertiesSchema,
)
  .and(
    z
      .strictObject({ type: z.literal('procurement') })
      .openapi({
        required: [
          'type',
          'period_from_date',
          'period_to_date',
          'quantity',
          'unit_price',
          'deal_line_type_id',
        ],
      }),
  )
  .openapi({ description: '原価予算登録リクエスト (仕入)' })
  .openapi('ProcurementCostBudgetCreateRequest')

const BasicCostBudgetRequestPropertiesSchema = z
  .strictObject({
    amount_excluding_tax: z
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
        description: '税抜金額',
        example: 10000,
      }),
  })
  .openapi({ description: '原価予算リクエスト 外部仕入・その他原価固有プロパティ', required: [] })
  .openapi('BasicCostBudgetRequestProperties')

const BasicCostBudgetCreateRequestSchema = CostBudgetRequestBaseSchema.and(
  BasicCostBudgetRequestPropertiesSchema,
)
  .and(
    z
      .object({ type: z.enum(['external_procurement', 'other_cost']) })
      .openapi({
        required: ['type', 'period_from_date', 'period_to_date', 'amount_excluding_tax'],
      }),
  )
  .openapi({ description: '原価予算登録リクエスト (外部仕入・その他原価)' })
  .openapi('BasicCostBudgetCreateRequest')

const CostBudgetCreateRequestDetailSchema = z
  .xor([BasicCostBudgetCreateRequestSchema, ProcurementCostBudgetCreateRequestSchema])
  .openapi({
    description: '原価予算登録リクエスト',
    discriminator: {
      propertyName: 'type',
      mapping: {
        procurement: '#/components/schemas/ProcurementCostBudgetCreateRequest',
        external_procurement: '#/components/schemas/BasicCostBudgetCreateRequest',
        other_cost: '#/components/schemas/BasicCostBudgetCreateRequest',
      },
    },
  })
  .openapi('CostBudgetCreateRequestDetail')

const CostBudgetMinimalResponseSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '原価予算ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({
    description: '原価予算登録・更新・取消のレスポンス',
    required: ['id', 'registered_at', 'last_updated_at'],
  })
  .openapi('CostBudgetMinimalResponse')

const BusinessPhase_2Schema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: '名称', example: '引き合い' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('BusinessPhase_2')

const SalesProgression_2Schema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    name: z.string().openapi({ description: '名称', example: 'A' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('SalesProgression_2')

const MasterItemSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '商品コード', example: 'ITEM-001' }),
    name: z.string().openapi({ description: '商品名', example: 'サンプル商品' }),
    display_name: z.string().openapi({ description: '表示名', example: 'サンプル商品（表示用）' }),
    uom_name: z.string().nullable().exactOptional().openapi({ description: '単位', example: '個' }),
    unit_price: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: '単価', example: 1000 }),
    tax_code: z
      .int32()
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '税区分', example: 128 }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    memo_tag_ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .openapi({ description: 'メモタグID' }),
    quantity: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: '標準数量', example: 10 }),
    account_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        maximum: 9223372036854776000,
        description: '勘定科目ID',
        example: 12345,
      }),
    reduced: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: '軽減税率対象フラグ', example: false }),
  })
  .openapi({ required: ['id', 'name', 'display_name', 'memo_tag_ids'] })
  .openapi('MasterItem')

const DealLineTypeSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'コード', example: 'LT-0000000001' }),
    name: z.string().openapi({ description: '名称', example: '課税売上' }),
    type: z.enum(['sales', 'procurement']).openapi({ description: '利用区分', example: 'sales' }),
    account_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '勘定科目ID',
        example: 12345,
      }),
    tax_code: z.int32().max(2147483647).openapi({ description: '税区分', example: 128 }),
    reduced: z.boolean().openapi({ description: '軽減税率対象フラグ', example: false }),
    is_default: z.boolean().openapi({ description: '既定フラグ', example: false }),
  })
  .openapi({
    required: ['id', 'name', 'type', 'account_item_id', 'tax_code', 'reduced', 'is_default'],
  })
  .openapi('DealLineType')

const Employee_2Schema = z
  .strictObject({
    id: z.int().openapi({ description: 'ID', example: 101 }),
    num: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '従業員番号', example: 'A001' }),
    display_name: z.string().openapi({ description: '表示名', example: '山田太郎' }),
  })
  .openapi({ required: ['id', 'display_name'] })
  .openapi('Employee_2')

const MasterMemberSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: 'メンバーID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    num: z.string().openapi({ description: '従業員番号。未設定の場合は空文字。', example: 'A001' }),
    display_name: z
      .string()
      .openapi({
        description:
          '表示名。従業員マスタに未設定の場合はアカウント管理の表示名・メールアドレスで補完します。',
        example: '山田太郎',
      }),
  })
  .openapi({ required: ['id', 'num', 'display_name'] })
  .openapi('MasterMember')

const CustomFieldDefinitionSchema: z.ZodType<CustomFieldDefinitionType> = z
  .lazy(() =>
    z
      .xor([
        TextCustomFieldDefinitionSchema,
        TextareaCustomFieldDefinitionSchema,
        AmountCustomFieldDefinitionSchema,
        QuantityCustomFieldDefinitionSchema,
        NumberCustomFieldDefinitionSchema,
        DateCustomFieldDefinitionSchema,
        EnumCustomFieldDefinitionSchema,
        PartnerCustomFieldDefinitionSchema,
        EmployeeCustomFieldDefinitionSchema,
        SectionCustomFieldDefinitionSchema,
        MasterItemCustomFieldDefinitionSchema,
        MemberCustomFieldDefinitionSchema,
      ])
      .openapi({
        discriminator: {
          propertyName: 'type',
          mapping: {
            text: '#/components/schemas/TextCustomFieldDefinition',
            textarea: '#/components/schemas/TextareaCustomFieldDefinition',
            amount: '#/components/schemas/AmountCustomFieldDefinition',
            quantity: '#/components/schemas/QuantityCustomFieldDefinition',
            number: '#/components/schemas/NumberCustomFieldDefinition',
            date: '#/components/schemas/DateCustomFieldDefinition',
            enum: '#/components/schemas/EnumCustomFieldDefinition',
            partner: '#/components/schemas/PartnerCustomFieldDefinition',
            employee: '#/components/schemas/EmployeeCustomFieldDefinition',
            section: '#/components/schemas/SectionCustomFieldDefinition',
            master_item: '#/components/schemas/MasterItemCustomFieldDefinition',
            member: '#/components/schemas/MemberCustomFieldDefinition',
          },
        },
      }),
  )
  .openapi('CustomFieldDefinition')

const ProcurementStatusSchema = z
  .enum(['not_sold', 'partially_sold', 'sold'])
  .openapi({
    description: '仕入ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)',
    example: 'not_sold',
  })
  .openapi('ProcurementStatus')

const PaymentStatusSchema = z
  .enum(['none', 'not_settled', 'partially_settled', 'settled'])
  .openapi({
    description:
      '支払ステータス (なし: none, 未決済: not_settled, 一部決済済: partially_settled, 決済済: settled)',
    example: 'not_settled',
  })
  .openapi('PaymentStatus')

const PaymentMethodTypeSchema = z
  .enum(['transfer', 'cash', 'bill_payable'])
  .openapi({
    description: '支払方法 (振込: transfer, 現金: cash, 手形: bill_payable)',
    example: 'transfer',
  })
  .openapi('PaymentMethodType')

const PurchaseOrderDigestSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '発注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    business: BusinessSchema.exactOptional(),
    purchase_order_no: z.string().openapi({ description: '発注No.', example: 'PO211212-00001' }),
    branch_no: z.int32().nullable().exactOptional().openapi({ description: '枝番', example: 1 }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注タイトル', example: 'サンプル案件発注の件' }),
    purchase_order_date: z.iso.date().openapi({ description: '発注日', example: '2025-04-01' }),
    procurements_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '仕入予定日', example: '2025-05-01' }),
    supplier: PartnerSchema.openapi({ description: '仕入先' }),
    is_qualified_invoice_issuer: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '適格請求書発行事業者該当フラグ<br>\n※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br>\n※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。',
        example: true,
      }),
    delivery_deadline: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品期限日', example: '2025-06-01' }),
    delivery_location: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品場所', example: '東京都渋谷区' }),
    purchase_order_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注書の備考欄に掲載する内容', example: '発注書備考' }),
    issued: z.boolean().openapi({ description: '送付ステータス', example: false }),
    issued_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '送付日', example: '2025-04-01' }),
    purchase_order_template: z
      .strictObject({
        id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            maximum: 9223372036854776000,
            description: '発注書テンプレートID',
            example: 10001,
          }),
        name: z
          .string()
          .openapi({ description: '発注書テンプレート名称', example: 'デフォルトテンプレート' }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: '発注書テンプレート', required: ['id', 'name'] }),
    purchase_order_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注書件名', example: 'サンプル案件発注の件' }),
    procurement_status: ProcurementStatusSchema.openapi({ description: '仕入ステータス' }),
    recorded_procurement_amount_excluding_tax: z
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
        description: '仕入計上済金額(税抜)',
        example: 50000,
      }),
    remaining_procurement_amount_excluding_tax: z
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
        description: '仕入残金額(税抜)',
        example: 50000,
      }),
    payment_status: PaymentStatusSchema.openapi({ description: '支払ステータス' }),
    payments_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '支払予定日', example: '2025-06-30' }),
    payment_method_type: PaymentMethodTypeSchema.openapi({ description: '支払方法' }),
    payment_partner: PartnerSchema.openapi({ description: '支払先' }),
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    amount_set: AmountSetSchema,
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
  })
  .openapi({
    required: [
      'id',
      'canceled',
      'registered_by',
      'registered_at',
      'last_updated_by',
      'last_updated_at',
      'purchase_order_no',
      'purchase_order_date',
      'supplier',
      'issued',
      'procurement_status',
      'recorded_procurement_amount_excluding_tax',
      'remaining_procurement_amount_excluding_tax',
      'payment_status',
      'payment_method_type',
      'payment_partner',
      'amount_set',
    ],
  })
  .openapi('PurchaseOrderDigest')

const DefaultTitleSchema = z
  .enum(['none', 'to_person', 'to_organization'])
  .nullable()
  .openapi({ description: '敬称区分 (なし: none, 様: to_person, 御中: to_organization)' })
  .openapi('DefaultTitle')

const RecipientAddressSchema = z
  .strictObject({
    official_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '正式名称', example: '株式会社サンプル' }),
    default_title: DefaultTitleSchema.nullable().exactOptional().openapi({ description: '敬称' }),
    zipcode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '郵便番号', example: '150-0001' }),
    prefecture_code: z
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
        description:
          '都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄）',
        example: 12,
      }),
    street_name1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住所1', example: '渋谷区神宮前1-1-1' }),
    street_name2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住所2', example: 'サンプルビル3F' }),
    contact_department: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '連絡先部署', example: '営業部' }),
    contact_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '連絡先名', example: '山田太郎' }),
  })
  .openapi({ description: '宛先', required: [] })
  .openapi('RecipientAddress')

const PurchaseOrderLineParamsSchema = z
  .xor([BasicLineParamsSchema, TextLineParamsSchema])
  .openapi({
    description: '明細パラメータ',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/BasicLineParams',
        text: '#/components/schemas/TextLineParams',
      },
    },
  })
  .openapi('PurchaseOrderLineParams')

const PurchaseOrderRequestBaseSchema = z
  .strictObject({
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注タイトル', example: 'サンプル案件発注の件' }),
    purchase_order_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '発注日', example: '2025-04-01' }),
    procurements_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '仕入予定日', example: '2025-05-01' }),
    supplier_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '仕入先の取引先ID',
        example: 1001,
      }),
    is_qualified_invoice_issuer: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '適格請求書発行事業者該当フラグ<br>\n※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br>\n※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。',
        example: true,
      }),
    delivery_deadline: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品期限日', example: '2025-05-15' }),
    delivery_location: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品場所', example: '東京都渋谷区' }),
    purchase_order_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注書の備考欄に記載する内容', example: '納期厳守でお願いします' }),
    purchase_order_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '発注書テンプレートID',
        example: 10001,
      }),
    purchase_order_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注書件名', example: 'サンプル案件発注の件' }),
    recipient_address: RecipientAddressSchema.exactOptional(),
    payments_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '支払予定日', example: '2025-06-30' }),
    payment_method_type: PaymentMethodTypeSchema.exactOptional().openapi({
      description: '支払方法',
    }),
    payment_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '支払先の取引先ID',
        example: 1002,
      }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z
      .array(PurchaseOrderLineParamsSchema)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseOrderRequestBase')

const PurchaseOrderMinimalResponseSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '発注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('PurchaseOrderMinimalResponse')

const AmountSetRateSchema = z
  .strictObject({
    rate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '税率',
        example: 10,
      }),
    reduced: z.boolean().openapi({ description: '軽減税率フラグ', example: false }),
    amount_set: AmountSetSchema,
    amount_of_deductible_tax: z
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
        description: '控除可能税額',
        example: 5000,
      }),
  })
  .openapi({ description: '税率を含む金額セット', required: ['rate', 'reduced', 'amount_set'] })
  .openapi('AmountSetRate')

const PurchaseOrderLineDetailSchema = z
  .xor([BasicLineDetailSchema, TextLineDetailSchema])
  .openapi({
    description: '明細詳細',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/BasicLineDetail',
        text: '#/components/schemas/TextLineDetail',
      },
    },
  })
  .openapi('PurchaseOrderLineDetail')

const PurchaseOrderDetailSchema = PurchaseOrderDigestSchema.and(
  z
    .strictObject({
      amount_set_rates: z.array(AmountSetRateSchema),
      recipient_address: RecipientAddressSchema,
      lines: z.array(PurchaseOrderLineDetailSchema).openapi({ description: '明細リスト' }),
    })
    .openapi({ required: ['amount_set_rates', 'lines', 'recipient_address'] }),
)
  .openapi({ description: '発注詳細' })
  .openapi('PurchaseOrderDetail')

const QuotationStatusSchema = z
  .enum(['unanswered', 'order_received', 'order_lost'])
  .openapi({
    description: '見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)',
    example: 'unanswered',
  })
  .openapi('QuotationStatus')

const DeliveryProgressSchema = z
  .enum(['not_delivered', 'partially_delivered', 'delivered'])
  .openapi({
    description:
      '納品進捗 (未納品: not_delivered, 一部納品済: partially_delivered, 納品済: delivered)',
    example: 'not_delivered',
  })
  .openapi('DeliveryProgress')

const DeliveryIssueProgressSchema = z
  .enum(['not_issued', 'partially_issued', 'issued'])
  .openapi({
    description:
      '納品書発行進捗 (未発行: not_issued, 一部発行済: partially_issued, 発行済: issued)',
    example: 'not_issued',
  })
  .openapi('DeliveryIssueProgress')

const SalesStatusSchema = z
  .enum(['not_sold', 'partially_sold', 'sold'])
  .openapi({
    description: '売上ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)',
    example: 'not_sold',
  })
  .openapi('SalesStatus')

const BillingStatusSchema = z
  .enum(['not_billed', 'partially_billed', 'billed', 'none'])
  .openapi({
    description:
      '請求書送付ステータス (未送付: not_billed, 一部送付済: partially_billed, 送付済: billed, 対象外: none)\n※partially_billed（一部送付済）は納品でのみ発生します。none（対象外）は売上でのみ発生します。',
    example: 'not_billed',
  })
  .openapi('BillingStatus')

const QuotationDigestSchema = z
  .strictObject({
    id: z.string().openapi({ description: '見積ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    quotation_no: z.string().openapi({ description: '見積No.', example: 'Q211212-00001' }),
    branch_no: z.int32().nullable().exactOptional().openapi({ description: '枝番', example: 1 }),
    quotation_date: z.iso.date().openapi({ description: '見積日', example: '2025-04-01' }),
    quotation_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積書件名', example: 'サンプル案件見積の件' }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積タイトル', example: 'サンプル案件見積の件' }),
    expires_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '有効期限日', example: '2025-05-01' }),
    delivery_deadline: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品期限日', example: '2025-06-01' }),
    delivery_location: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品場所', example: '東京都渋谷区' }),
    issued: z.boolean().openapi({ description: '送付ステータス', example: false }),
    issued_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '送付日', example: '2025-04-01' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    total_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '源泉徴収税額を除いた合計金額',
        example: 10000,
      }),
    amount_set: AmountSetSchema,
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    quotation_status: QuotationStatusSchema,
    delivery_progress: DeliveryProgressSchema,
    delivery_issue_progress: DeliveryIssueProgressSchema,
    sales_status: SalesStatusSchema,
    billing_status: BillingStatusSchema,
    customer: PartnerSchema.openapi({ description: '顧客' }),
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    business: BusinessSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    quotation_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積書の備考欄に記載する内容', example: '見積書備考' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
  })
  .openapi({
    required: [
      'id',
      'canceled',
      'registered_by',
      'quotation_no',
      'quotation_date',
      'issued',
      'registered_at',
      'last_updated_at',
      'total_amount',
      'amount_set',
      'quotation_status',
      'delivery_progress',
      'delivery_issue_progress',
      'sales_status',
      'billing_status',
      'customer',
      'last_updated_by',
    ],
  })
  .openapi('QuotationDigest')

const QuotationListItemSchema = QuotationDigestSchema.and(
  z
    .strictObject({
      gross_profit_amount_excluding_tax: z
        .float64()
        .min(-999999999999)
        .max(999999999999)
        .nullable()
        .exactOptional()
        .openapi({
          description:
            '粗利額計(税抜)。税込入力の見積、または粗利情報を持つ明細が1件もない見積では null',
          example: 30000,
        }),
      gross_profit_rate: z
        .float64()
        .min(-99999.999)
        .max(99999.999)
        .nullable()
        .exactOptional()
        .openapi({
          description:
            '粗利率(%)。粗利額計が null の場合、または原価計・売価計のいずれかが0以下の場合は null',
          example: 30,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '見積一覧の要素' })
  .openapi('QuotationListItem')

const QuotationGrossProfitParamsSchema = z
  .strictObject({
    cost: z.float64().min(0).max(999999999999).openapi({ description: '原価(単価)', example: 700 }),
    memo: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '社内メモ', example: '仕入先A社の見積による' }),
  })
  .nullable()
  .openapi({
    description:
      '明細の粗利情報<br>\n※ 集計軸は粗利率固定です。売価は明細の単価が使われ、粗利額・各率は原価と売価から自動計算されます<br>\n※ 税方式が外税の顧客でのみ登録されます。内税の場合は指定しても無視されます',
    required: ['cost'],
  })
  .openapi('QuotationGrossProfitParams')

const QuotationBasicLineParamsSchema = BasicLineParamsSchema.and(
  z
    .strictObject({ gross_profit: QuotationGrossProfitParamsSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ description: '見積通常明細パラメータ' })
  .openapi('QuotationBasicLineParams')

const QuotationLineParamsSchema = z
  .xor([QuotationBasicLineParamsSchema, TextLineParamsSchema])
  .openapi({
    description: '明細パラメータ',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/QuotationBasicLineParams',
        text: '#/components/schemas/TextLineParams',
      },
    },
  })
  .openapi('QuotationLineParams')

const QuotationRequestBaseSchema = z
  .strictObject({
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積タイトル', example: 'サンプル案件見積の件' }),
    quotation_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '見積日', example: '2025-04-01' }),
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    expires_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '有効期限日', example: '2025-04-30' }),
    delivery_deadline: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品期限日', example: '2025-05-15' }),
    delivery_location: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品場所', example: '東京都渋谷区' }),
    quotation_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '見積書テンプレートID',
        example: 10001,
      }),
    quotation_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積書件名', example: 'サンプル案件見積の件' }),
    quotation_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '見積書の備考欄に記載する内容',
        example: '有効期限内にご回答ください',
      }),
    recipient_address: RecipientAddressSchema.exactOptional(),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z
      .array(QuotationLineParamsSchema)
      .exactOptional()
      .openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('QuotationRequestBase')

const QuotationMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: '見積ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('QuotationMinimalResponse')

const QuotationGrossProfitDetailSchema = z
  .strictObject({
    cost: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '原価(単価)', example: 700 }),
    sales_price: z.float64().openapi({ description: '売価(単価)', example: 1000 }),
    memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '社内メモ', example: '仕入先A社の見積による' }),
    profit_amount: z.float64().openapi({ description: '粗利額(単価。売価 − 原価)', example: 300 }),
    total_cost: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: '原価計(原価 × 数量)。原価未入力の場合は null', example: 70000 }),
    total_price: z.float64().openapi({ description: '売価計(売価 × 数量)', example: 100000 }),
    total_gross_profit: z
      .float64()
      .openapi({ description: '粗利額計(売価計 − 原価計)', example: 30000 }),
    cost_rate: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description: '原価率(%)。売価計・原価計のいずれかが0以下の場合は null',
        example: 70,
      }),
    profit_rate: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description: '粗利率(%)。売価計・原価計のいずれかが0以下の場合は null',
        example: 30,
      }),
    markup_rate: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description: '上乗せ率(%)。売価計・原価計のいずれかが0以下の場合は null',
        example: 42.86,
      }),
  })
  .nullable()
  .openapi({
    description: '明細の粗利情報<br>\n※ 原価が未入力の明細は原価・原価計・各率が null になります',
    required: ['sales_price', 'profit_amount', 'total_price', 'total_gross_profit'],
  })
  .openapi('QuotationGrossProfitDetail')

const QuotationBasicLineDetailSchema = BasicLineDetailSchema.and(
  z
    .strictObject({ gross_profit: QuotationGrossProfitDetailSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ description: '見積通常明細詳細' })
  .openapi('QuotationBasicLineDetail')

const QuotationLineDetailSchema = z
  .xor([QuotationBasicLineDetailSchema, TextLineDetailSchema])
  .openapi({
    description: '明細詳細',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/QuotationBasicLineDetail',
        text: '#/components/schemas/TextLineDetail',
      },
    },
  })
  .openapi('QuotationLineDetail')

const QuotationGrossProfitSummarySchema = z
  .strictObject({
    gross_profit_amount_excluding_tax: z
      .float64()
      .openapi({ description: '粗利額計(税抜)', example: 30000 }),
    gross_profit_rate: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description: '粗利率(%)。原価計・売価計のいずれかが0以下の場合は null',
        example: 30,
      }),
  })
  .nullable()
  .openapi({
    description: '見積全体の粗利合計<br>\n※ 粗利情報を持つ明細が1件もない場合は null',
    required: ['gross_profit_amount_excluding_tax'],
  })
  .openapi('QuotationGrossProfitSummary')

const QuotationDetailSchema = QuotationDigestSchema.and(
  z
    .strictObject({
      amount_set_rates: z.array(AmountSetRateSchema),
      quotation_template_name: z
        .string()
        .openapi({ description: '見積書テンプレート名称', example: 'デフォルトテンプレート' }),
      recipient_address: RecipientAddressSchema,
      lines: z.array(QuotationLineDetailSchema).openapi({ description: '明細リスト' }),
      gross_profit_summary: QuotationGrossProfitSummarySchema.exactOptional(),
    })
    .openapi({
      required: ['amount_set_rates', 'quotation_template_name', 'lines', 'recipient_address'],
    }),
).openapi('QuotationDetail')

const QuotationStatusForUpdateSchema = z
  .enum(['unanswered', 'order_lost'])
  .openapi({
    description: '更新可能な見積ステータス (未受注: unanswered, 失注: order_lost)',
    example: 'unanswered',
  })
  .openapi('QuotationStatusForUpdate')

const QuotationStatusChangeRequestSchema = WithCompanyIdSchema.and(
  z
    .strictObject({ quotation_status: QuotationStatusForUpdateSchema })
    .openapi({ required: ['quotation_status'] }),
)
  .openapi({ description: '見積ステータス変更リクエスト' })
  .openapi('QuotationStatusChangeRequest')

const CollectionStatusSchema = z
  .enum(['not_settled', 'partially_settled', 'settled', 'invalidated', 'none'])
  .openapi({
    description:
      '決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)\n※invalidated（無効）は請求でのみ発生します。売上・納品では発生しません。',
    example: 'not_settled',
  })
  .openapi('CollectionStatus')

const SalesOrderDigestSchema = z
  .strictObject({
    id: z.string().openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    sales_order_no: z.string().openapi({ description: '受注No.', example: 'S211212-00001' }),
    sales_order_subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '受注タイトル', example: 'サンプル案件受注の件' }),
    sales_order_date: z.iso.date().openapi({ description: '受注日', example: '2025-04-01' }),
    customer_order_no: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20250401-001' }),
    amount_set: AmountSetSchema,
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    customer: PartnerSchema.openapi({ description: '顧客' }),
    sales_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '売上予定日', example: '2025-04-01' }),
    delivery_progress: DeliveryProgressSchema,
    sales_status: SalesStatusSchema,
    billing_status: BillingStatusSchema,
    collection_status: CollectionStatusSchema,
    business: BusinessSchema.exactOptional(),
    quotation_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    total_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '源泉徴収税額を除いた合計金額',
        example: 10000,
      }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
  })
  .openapi({
    required: [
      'id',
      'sales_order_no',
      'sales_order_date',
      'amount_set',
      'customer',
      'registered_at',
      'registered_by',
      'last_updated_at',
      'last_updated_by',
      'delivery_progress',
      'sales_status',
      'billing_status',
      'collection_status',
      'total_amount',
      'canceled',
    ],
  })
  .openapi('SalesOrderDigest')

const BillingCreatingMethodTypeSchema = z
  .enum(['automatically', 'manually'])
  .openapi({
    description: '請求作成方法区分 (自動作成: automatically, 手動作成: manually)',
    example: 'automatically',
  })
  .openapi('BillingCreatingMethodType')

const CollectionMethodTypeSchema = z
  .enum(['transfer', 'cash', 'bill_payable', 'direct_debit'])
  .openapi({
    description: '入金方法 (振込: transfer, 現金: cash, 手形: bill_payable, 振替: direct_debit)',
    example: 'transfer',
  })
  .openapi('CollectionMethodType')

const LineParamsSchema: z.ZodType<LineParamsType> = z
  .lazy(() =>
    z
      .xor([BasicLineParamsSchema, TextLineParamsSchema])
      .openapi({
        description: '明細パラメータ',
        discriminator: {
          propertyName: 'line_type',
          mapping: {
            basic: '#/components/schemas/BasicLineParams',
            text: '#/components/schemas/TextLineParams',
          },
        },
      }),
  )
  .openapi('LineParams')

const SalesOrderRequestBaseSchema = z
  .strictObject({
    sales_order_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '受注タイトル', example: 'サンプル案件パンフレット作成' }),
    sales_order_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '受注日', example: '2021-12-12' }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    sales_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '売上予定日', example: '2021-12-12' }),
    deliveries_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品予定日', example: '2021-12-12' }),
    accepts_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '検収予定日', example: '2021-12-12' }),
    delivery_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '納品書テンプレートID',
        example: 10001,
      }),
    delivery_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品書件名', example: 'サンプル案件パンフレット作成' }),
    delivery_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品書の備考欄に掲載する内容', example: '納品時の注意事項' }),
    billing_creating_method_type: BillingCreatingMethodTypeSchema.exactOptional(),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求予定日', example: '2021-12-12' }),
    billing_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求先の取引先ID',
        example: 1002,
      }),
    invoice_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 10002,
      }),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル案件パンフレット作成' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金予定日', example: '2021-12-12' }),
    collecting_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '入金元の取引先ID',
        example: 1003,
      }),
    collection_method_type: CollectionMethodTypeSchema.exactOptional(),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    quotation_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '見積ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    lines: z.array(LineParamsSchema).exactOptional().openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('SalesOrderRequestBase')

const SalesOrderMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('SalesOrderMinimalResponse')

const LineDetailSchema: z.ZodType<LineDetailType> = z
  .lazy(() =>
    z
      .xor([BasicLineDetailSchema, TextLineDetailSchema])
      .openapi({
        description: '明細詳細',
        discriminator: {
          propertyName: 'line_type',
          mapping: {
            basic: '#/components/schemas/BasicLineDetail',
            text: '#/components/schemas/TextLineDetail',
          },
        },
      }),
  )
  .openapi('LineDetail')

const SalesOrderDetailSchema = SalesOrderDigestSchema.and(
  z
    .strictObject({
      amount_set_rates: z.array(AmountSetRateSchema),
      deliveries_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '納品予定日', example: '2025-04-01' }),
      accepts_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '検収予定日', example: '2025-04-01' }),
      delivery_template_name: z
        .string()
        .openapi({ description: '納品書テンプレート名称', example: 'デフォルトテンプレート' }),
      delivery_subject: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '納品書件名', example: 'サンプル案件受注の件' }),
      delivery_note: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '納品書の備考欄に掲載する内容', example: '納品時の注意事項' }),
      delivered_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '納品済金額(税抜)',
          example: 5200000,
        }),
      remaining_delivered_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '納品残金額(税抜)',
          example: 5200000,
        }),
      sales_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '売上金額(税抜)',
          example: 5200000,
        }),
      remaining_sales_order_excluding_tax: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          maximum: 9223372036854776000,
          description: '受注残金額(税抜)',
          example: 5200000,
        }),
      billing_creating_method_type: BillingCreatingMethodTypeSchema,
      bills_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求予定日', example: '2025-04-01' }),
      billing_partner: PartnerSchema.openapi({ description: '請求先' }),
      invoice_template_name: z
        .string()
        .openapi({ description: '請求書テンプレート名称', example: 'デフォルトテンプレート' }),
      invoice_subject: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求書件名', example: 'サンプル案件受注の件' }),
      invoice_note: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: '請求書の備考欄に掲載する内容',
          example: 'お振込期限は月末までとなります',
        }),
      collects_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '入金予定日', example: '2025-04-01' }),
      collecting_partner: PartnerSchema.openapi({ description: '入金元' }),
      collection_method_type: CollectionMethodTypeSchema,
      charge_employee: EmployeeSchema.nullable().exactOptional(),
      charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
      reporting_section: ReportingSectionSchema.exactOptional(),
      internal_memo: InternalMemoSchema.exactOptional(),
      lines: z.array(LineDetailSchema).openapi({ description: '明細リスト' }),
    })
    .openapi({
      required: [
        'amount_set_rates',
        'billing_partner',
        'collecting_partner',
        'billing_creating_method_type',
        'collection_method_type',
        'delivery_template_name',
        'invoice_template_name',
        'lines',
      ],
    }),
).openapi('SalesOrderDetail')

const DeliveryStatusSchema = z
  .enum(['not_delivered', 'delivered'])
  .openapi({
    description: '納品ステータス (未納品: not_delivered, 納品済: delivered)',
    example: 'not_delivered',
  })
  .openapi('DeliveryStatus')

const AcceptanceStatusSchema = z
  .enum(['not_accepted', 'accepted'])
  .openapi({
    description: '検収ステータス (未検収: not_accepted, 検収済: accepted)',
    example: 'not_accepted',
  })
  .openapi('AcceptanceStatus')

const DeliveryDigestSchema = z
  .strictObject({
    id: z.string().openapi({ description: '納品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    sales_order_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    delivery_status: DeliveryStatusSchema,
    acceptance_status: AcceptanceStatusSchema,
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    amount_set: AmountSetSchema,
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    total_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '源泉徴収税額を除いた合計金額',
        example: 10000,
      }),
    business: BusinessSchema.exactOptional(),
    delivery_no: z.string().openapi({ description: '納品No.', example: 'D211212-00001' }),
    branch_no: z.int32().nullable().exactOptional().openapi({ description: '枝番', example: 1 }),
    internal_subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品タイトル', example: 'サンプル案件納品の件' }),
    customer_order_no: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20250401-001' }),
    delivery_date: z.iso.date().openapi({ description: '納品日', example: '2025-04-01' }),
    acceptance_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '検収日', example: '2025-04-01' }),
    customer: PartnerSchema.openapi({ description: '顧客' }),
    issued: z.boolean().openapi({ description: '送付ステータス', example: false }),
    issued_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '送付日', example: '2025-04-01' }),
    subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '納品書件名', example: 'サンプル案件納品の件' }),
    sales_status: SalesStatusSchema,
    billing_status: BillingStatusSchema,
    collection_status: CollectionStatusSchema,
  })
  .openapi({
    required: [
      'id',
      'delivery_no',
      'delivery_date',
      'customer',
      'delivery_status',
      'acceptance_status',
      'sales_status',
      'billing_status',
      'collection_status',
      'amount_set',
      'total_amount',
      'issued',
      'canceled',
      'registered_at',
      'registered_by',
      'last_updated_at',
      'last_updated_by',
    ],
  })
  .openapi('DeliveryDigest')

const DeliveryLineParamsSchema = z
  .xor([BasicLineParamsSchema, TextLineParamsSchema])
  .openapi({
    description: '明細パラメータ',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/BasicLineParams',
        text: '#/components/schemas/TextLineParams',
      },
    },
  })
  .openapi('DeliveryLineParams')

const DeliveryRequestBaseSchema = z
  .strictObject({
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品タイトル', example: 'サンプル案件納品の件' }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20250401-001' }),
    delivery_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '納品日', example: '2025-04-01' }),
    acceptance_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '検収日', example: '2025-04-01' }),
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    delivery_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品書の備考欄に記載する内容', example: '納品時の注意事項' }),
    delivery_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '納品書テンプレートID',
        example: 10001,
      }),
    subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品書件名', example: 'サンプル案件納品の件' }),
    recipient_address: RecipientAddressSchema.exactOptional(),
    billing_creating_method_type: BillingCreatingMethodTypeSchema.exactOptional(),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求予定日', example: '2025-04-01' }),
    invoice_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 10002,
      }),
    billing_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求先の取引先ID',
        example: 1002,
      }),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル案件納品の件' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金予定日', example: '2025-04-01' }),
    collection_method_type: CollectionMethodTypeSchema.exactOptional(),
    collecting_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '入金元の取引先ID',
        example: 1003,
      }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z.array(DeliveryLineParamsSchema).exactOptional().openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryRequestBase')

const DeliveryMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: '納品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('DeliveryMinimalResponse')

const DeliveryDetailSchema = DeliveryDigestSchema.and(
  z
    .strictObject({
      amount_set_rates: z.array(AmountSetRateSchema),
      delivery_note: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '納品書の備考欄に記載する内容', example: '納品時の注意事項' }),
      delivery_template_name: z
        .string()
        .openapi({ description: '納品書テンプレート名称', example: 'デフォルトテンプレート' }),
      recipient_address: RecipientAddressSchema,
      recorded_sales_amount_excluding_tax: z
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
          description: '売上金額(税抜)',
          example: 5200000,
        }),
      remaining_sales_amount_excluding_tax: z
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
          description: '売上残金額(税抜)',
          example: 5200000,
        }),
      billing_creating_method_type: BillingCreatingMethodTypeSchema,
      bills_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求予定日', example: '2025-04-01' }),
      invoice_template_name: z
        .string()
        .openapi({ description: '請求書テンプレート名称', example: 'デフォルトテンプレート' }),
      customer: PartnerSchema.nullable().exactOptional().openapi({ description: '顧客' }),
      billing_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '請求先' }),
      invoice_subject: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求書件名', example: 'サンプル案件納品の件' }),
      invoice_note: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: '請求書の備考欄に掲載する内容',
          example: 'お振込期限は月末までとなります',
        }),
      collects_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '入金予定日', example: '2025-04-01' }),
      collection_method_type: CollectionMethodTypeSchema,
      collecting_partner: PartnerSchema.nullable()
        .exactOptional()
        .openapi({ description: '入金元' }),
      charge_employee: EmployeeSchema.nullable().exactOptional(),
      charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
      reporting_section: ReportingSectionSchema.exactOptional(),
      internal_memo: InternalMemoSchema.exactOptional(),
      lines: z.array(LineDetailSchema).openapi({ description: '明細リスト' }),
    })
    .openapi({
      required: [
        'delivery_template_name',
        'invoice_template_name',
        'collection_method_type',
        'lines',
        'recipient_address',
        'billing_creating_method_type',
        'amount_set_rates',
        'recorded_sales_amount_excluding_tax',
        'remaining_sales_amount_excluding_tax',
      ],
    }),
).openapi('DeliveryDetail')

const DeliveryStatusChangeRequestSchema = WithCompanyIdSchema.and(
  z
    .strictObject({ delivery_status: DeliveryStatusSchema })
    .openapi({ required: ['delivery_status'] }),
)
  .openapi({ description: '納品ステータス変更リクエスト' })
  .openapi('DeliveryStatusChangeRequest')

const AcceptanceStatusChangeRequestSchema = WithCompanyIdSchema.and(
  z
    .strictObject({ acceptance_status: AcceptanceStatusSchema })
    .openapi({ required: ['acceptance_status'] }),
)
  .openapi({ description: '検収ステータス変更リクエスト' })
  .openapi('AcceptanceStatusChangeRequest')

const BillingCreatingStatusSchema = z
  .enum(['not_created', 'created', 'canceled', 'aka_created', 'none'])
  .openapi({
    description:
      '請求登録ステータス (未作成: not_created, 作成済: created, 取消済: canceled, 赤伝作成済: aka_created, 対象外: none)\n※aka_created（赤伝作成済）は過去データにのみ存在します。今後、新規に発生することはありません。',
    example: 'not_created',
  })
  .openapi('BillingCreatingStatus')

const CollectionMethodTypeWithNoneSchema = z
  .enum(['transfer', 'cash', 'bill_payable', 'direct_debit', 'none'])
  .openapi({
    description:
      '入金方法\n* `transfer` - 振込\n* `cash` - 現金\n* `bill_payable` - 手形\n* `direct_debit` - 振替\n* `none` - なし',
    example: 'none',
  })
  .openapi('CollectionMethodTypeWithNone')

const SaleDigestSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_id: z
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
        description: '会計の取引ID',
        example: 12345,
      }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2024-01-15T10:30:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2024-01-16T14:45:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    amount_set: AmountSetSchema,
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    total_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '源泉徴収税額を除いた合計金額',
        example: 10000,
      }),
    business: BusinessSchema.exactOptional(),
    sales_no: z.string().openapi({ description: '売上No.', example: 'S-2024-0001' }),
    subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '売上タイトル', example: 'Webシステム開発業務' }),
    customer_order_no: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'PO-2024-001' }),
    revenue_recognition_date: z.iso
      .date()
      .openapi({ description: '売上日', example: '2024-01-31' }),
    customer: PartnerSchema.openapi({ description: '顧客' }),
    billing_creating_status: BillingCreatingStatusSchema,
    billing_status: BillingStatusSchema,
    collection_status: CollectionStatusSchema,
    sales_order_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    delivery_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '納品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    advance_receipt_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    periodic_sales_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '定期売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求日', example: '2024-02-01' }),
    invoice_template_name: z
      .string()
      .openapi({ description: '請求書テンプレート名称', example: 'デフォルトテンプレート' }),
    billing_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '請求先' }),
    invoice_subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'Webシステム開発業務' }),
    invoice_note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    billing_amount_excluding_tax: z
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
        description: '請求金額(税抜)',
        example: 5200000,
      }),
    invoice_no: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書番号', example: 'INV-2024-0001' }),
    bill_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金期日', example: '2024-02-28' }),
    collection_method_type: CollectionMethodTypeWithNoneSchema,
    collecting_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '入金元' }),
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.nullable().exactOptional(),
    internal_memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '社内メモ', example: '重要顧客案件' }),
  })
  .openapi({
    required: [
      'id',
      'canceled',
      'registered_at',
      'registered_by',
      'last_updated_at',
      'last_updated_by',
      'amount_set',
      'total_amount',
      'sales_no',
      'revenue_recognition_date',
      'customer',
      'billing_creating_status',
      'billing_status',
      'collection_status',
      'invoice_template_name',
      'collection_method_type',
    ],
  })
  .openapi('SaleDigest')

const SaleBasicLineParamsSchema = BasicLineParamsSchema.and(
  z
    .strictObject({
      segment_tag_1_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ1のID',
          example: 12345,
        }),
      segment_tag_2_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ2のID',
          example: 12345,
        }),
      segment_tag_3_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ3のID',
          example: 12345,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '売上通常明細パラメータ' })
  .openapi('SaleBasicLineParams')

const LineParams_2Schema = z
  .xor([SaleBasicLineParamsSchema, TextLineParamsSchema])
  .openapi({
    description: '明細パラメータ',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/SaleBasicLineParams',
        text: '#/components/schemas/TextLineParams',
      },
    },
  })
  .openapi('LineParams_2')

const SaleRequestBaseSchema = z
  .strictObject({
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '売上タイトル', example: 'サンプル案件売上の件' }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    revenue_recognition_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '売上日', example: '2021-12-12' }),
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求日', example: '2021-12-12' }),
    invoice_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 10002,
      }),
    billing_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求先の取引先ID',
        example: 1002,
      }),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル案件売上の件' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金期日', example: '2021-12-12' }),
    collection_method_type: CollectionMethodTypeSchema.exactOptional(),
    collecting_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '入金元の取引先ID',
        example: 1003,
      }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z.array(LineParams_2Schema).exactOptional().openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('SaleRequestBase')

const SaleMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: '売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('SaleMinimalResponse')

const SaleBasicLineDetailSchema = BasicLineDetailSchema.and(
  z
    .strictObject({
      is_manual_tax_entry: z
        .boolean()
        .openapi({ description: '税の手動入力フラグ', example: false }),
      account_item: AccountItemSchema,
      segment_tag_1: SegmentTagSchema.exactOptional(),
      segment_tag_2: SegmentTagSchema.exactOptional(),
      segment_tag_3: SegmentTagSchema.exactOptional(),
    })
    .openapi({ required: ['is_manual_tax_entry', 'account_item'] }),
)
  .openapi({ description: '売上通常明細詳細' })
  .openapi('SaleBasicLineDetail')

const SaleLineDetailSchema = z
  .xor([SaleBasicLineDetailSchema, TextLineDetailSchema])
  .openapi({
    description: '売上明細詳細',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/SaleBasicLineDetail',
        text: '#/components/schemas/TextLineDetail',
      },
    },
  })
  .openapi('SaleLineDetail')

const SaleDetailSchema = SaleDigestSchema.and(
  z
    .strictObject({
      sales_order_id: z
        .string()
        .length(26)
        .nullable()
        .exactOptional()
        .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
      delivery_id: z
        .string()
        .length(26)
        .nullable()
        .exactOptional()
        .openapi({ description: '納品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
      advance_receipt_id: z
        .string()
        .length(26)
        .nullable()
        .exactOptional()
        .openapi({ description: '前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
      periodic_sales_id: z
        .string()
        .length(26)
        .nullable()
        .exactOptional()
        .openapi({ description: '作成元の定期売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
      amount_set_rates: z.array(AmountSetRateSchema),
      bills_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求日', example: '2024-02-01' }),
      invoice_template_name: z
        .string()
        .exactOptional()
        .openapi({ description: '請求書テンプレート名称', example: 'デフォルトテンプレート' }),
      customer: PartnerSchema.nullable().exactOptional().openapi({ description: '顧客' }),
      billing_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '請求先' }),
      invoice_subject: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求書件名', example: 'Webシステム開発業務' }),
      invoice_note: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description: '請求書の備考欄に掲載する内容',
          example: 'お振込期限は月末までとなります',
        }),
      billing_amount_excluding_tax: z
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
          description: '請求金額(税抜)',
          example: 5200000,
        }),
      invoice_no: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({ description: '請求書番号', example: 'INV-2024-0001' }),
      bill_id: z
        .string()
        .length(26)
        .nullable()
        .exactOptional()
        .openapi({ description: '請求ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
      collects_on: z.iso
        .date()
        .nullable()
        .exactOptional()
        .openapi({ description: '入金期日', example: '2024-02-28' }),
      collection_method_type: CollectionMethodTypeWithNoneSchema,
      collecting_partner: PartnerSchema.nullable()
        .exactOptional()
        .openapi({ description: '入金元' }),
      charge_employee: EmployeeSchema.nullable().exactOptional(),
      charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
      reporting_section: ReportingSectionSchema.exactOptional(),
      internal_memo: InternalMemoSchema.exactOptional(),
      lines: z.array(SaleLineDetailSchema).openapi({ description: '明細リスト' }),
    })
    .openapi({ required: ['amount_set_rates', 'collection_method_type', 'lines'] }),
).openapi('SaleDetail')

const ManualSettlementStatusSchema = z
  .enum(['not_settled', 'partially_settled', 'settled', 'none'])
  .openapi({
    description:
      '手動設定する決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)',
    example: 'settled',
  })
  .openapi('ManualSettlementStatus')

const SaleCollectionStatusChangeRequestSchema = WithCompanyIdSchema.and(
  z
    .strictObject({ collection_status: ManualSettlementStatusSchema })
    .openapi({ required: ['collection_status'] }),
)
  .openapi({ description: '決済ステータス変更リクエスト' })
  .openapi('SaleCollectionStatusChangeRequest')

const PeriodicSaleDigestSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '定期売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    periodic_sales_no: z.string().openapi({ description: '定期売上No.', example: 'PS-2024-0001' }),
    subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '定期売上タイトル', example: 'Webサイト保守費' }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    total_schedule_count: z
      .int32()
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '売上予定の総回数', example: 12 }),
    recorded_count: z
      .int32()
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '計上済み回数', example: 3 }),
    advance_receipt_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({
        description: '前受金ID（前受金由来の定期売上の場合のみ。それ以外はnull）',
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2024-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2024-01-16T14:45:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    customer: PartnerSchema.openapi({ description: '顧客' }),
    business: BusinessSchema.exactOptional(),
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    billing_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '請求先' }),
    collecting_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '入金元' }),
    invoice_note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    internal_memo: InternalMemoSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'periodic_sales_no',
      'canceled',
      'registered_at',
      'last_updated_at',
      'registered_by',
      'last_updated_by',
      'customer',
    ],
  })
  .openapi('PeriodicSaleDigest')

const PeriodicSaleBasicLineParamsSchema = BasicLineParamsSchema.and(
  z
    .strictObject({
      segment_tag_1_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ1のID',
          example: 12345,
        }),
      segment_tag_2_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ2のID',
          example: 12345,
        }),
      segment_tag_3_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ3のID',
          example: 12345,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '定期売上通常明細パラメータ' })
  .openapi('PeriodicSaleBasicLineParams')

const PeriodicSaleLineParamsSchema = z
  .xor([PeriodicSaleBasicLineParamsSchema, TextLineParamsSchema])
  .openapi({
    description: '明細パラメータ',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/PeriodicSaleBasicLineParams',
        text: '#/components/schemas/TextLineParams',
      },
    },
  })
  .openapi('PeriodicSaleLineParams')

const PeriodicSaleRequestBaseSchema = z
  .strictObject({
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '定期売上タイトル', example: 'サンプル案件定期売上の件' }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    recurrence_rule: z
      .strictObject({
        start_date: z.iso.date().openapi({ description: '開始日', example: '2025-04-01' }),
        end_date: z.iso.date().openapi({ description: '終了日', example: '2026-03-31' }),
        interval: z
          .enum(['1', '2', '3', '6', '12', 'even', 'odd'])
          .openapi({
            description:
              '周期 (毎月: 1, 2ヶ月ごと: 2, 3ヶ月ごと: 3, 6ヶ月ごと: 6, 12ヶ月ごと: 12, 偶数月: even, 奇数月: odd)',
            example: '1',
          }),
        day_of_month: z
          .int32()
          .openapi({
            description:
              '周期日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。',
            example: 32,
          }),
      })
      .exactOptional()
      .openapi({
        description: '繰り返しルール',
        required: ['start_date', 'end_date', 'interval', 'day_of_month'],
      }),
    billing_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求先の取引先ID',
        example: 1002,
      }),
    invoice_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 10002,
      }),
    bills_on_rule: z
      .strictObject({
        cutoff_day: z
          .int32()
          .openapi({
            description:
              '締め日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。',
            example: 32,
          }),
        additional_months: z
          .int32()
          .min(0)
          .max(6)
          .openapi({
            description: '締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月',
            example: 1,
          }),
        fixed_day: z
          .int32()
          .openapi({
            description:
              '締め日を基準に additional_months か月後の予定日の日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。',
            example: 32,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須',
        required: ['cutoff_day', 'additional_months', 'fixed_day'],
      }),
    billing_creating_method_type: BillingCreatingMethodTypeSchema.exactOptional(),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル案件定期売上の件' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    collecting_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '入金元の取引先ID',
        example: 1003,
      }),
    collection_method_type: CollectionMethodTypeSchema.exactOptional(),
    collects_on_rule: z
      .strictObject({
        cutoff_day: z
          .int32()
          .openapi({
            description:
              '締め日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。',
            example: 32,
          }),
        additional_months: z
          .int32()
          .min(0)
          .max(6)
          .openapi({
            description: '締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月',
            example: 1,
          }),
        fixed_day: z
          .int32()
          .openapi({
            description:
              '締め日を基準に additional_months か月後の予定日の日。1〜28 の日付、または末日を指定します。末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。',
            example: 32,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: '入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須',
        required: ['cutoff_day', 'additional_months', 'fixed_day'],
      }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z
      .array(PeriodicSaleLineParamsSchema)
      .exactOptional()
      .openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('PeriodicSaleRequestBase')

const PeriodicSaleMinimalResponseSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '定期売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('PeriodicSaleMinimalResponse')

const ScheduledDateRuleDaySchema = z
  .int32()
  .openapi({
    description:
      '予定日ルールの日。1〜28 の日付、または末日を指定します。\n末日は 32 を指定してください（29〜31 は月によって存在しない日があるため指定できません）。\n',
    example: 32,
  })
  .openapi('ScheduledDateRuleDay')

const RecurrenceRuleSchema = z
  .strictObject({
    start_date: z.iso.date().openapi({ description: '開始日', example: '2025-04-01' }),
    end_date: z.iso.date().openapi({ description: '終了日', example: '2026-03-31' }),
    interval: z
      .enum(['1', '2', '3', '6', '12', 'even', 'odd'])
      .openapi({
        description:
          '周期 (毎月: 1, 2ヶ月ごと: 2, 3ヶ月ごと: 3, 6ヶ月ごと: 6, 12ヶ月ごと: 12, 偶数月: even, 奇数月: odd)',
        example: '1',
      }),
    day_of_month: ScheduledDateRuleDaySchema.openapi({ description: '周期日。32 は末日' }),
  })
  .openapi({
    description: '繰り返しルール',
    required: ['start_date', 'end_date', 'interval', 'day_of_month'],
  })
  .openapi('RecurrenceRule')

const PeriodicSaleBasicLineDetailSchema = BasicLineDetailSchema.and(
  z
    .strictObject({
      is_manual_tax_entry: z
        .boolean()
        .openapi({ description: '税の手動入力フラグ', example: false }),
      segment_tag_1: SegmentTagSchema.openapi({ description: 'セグメントタグ1' }),
      segment_tag_2: SegmentTagSchema.openapi({ description: 'セグメントタグ2' }),
      segment_tag_3: SegmentTagSchema.openapi({ description: 'セグメントタグ3' }),
    })
    .openapi({
      required: ['is_manual_tax_entry', 'segment_tag_1', 'segment_tag_2', 'segment_tag_3'],
    }),
)
  .openapi({ description: '定期売上通常明細詳細' })
  .openapi('PeriodicSaleBasicLineDetail')

const PeriodicSaleLineDetailSchema = z
  .xor([PeriodicSaleBasicLineDetailSchema, TextLineDetailSchema])
  .openapi({
    description: '定期売上明細詳細',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/PeriodicSaleBasicLineDetail',
        text: '#/components/schemas/TextLineDetail',
      },
    },
  })
  .openapi('PeriodicSaleLineDetail')

const BillingCreatingMethodTypeWithNoneSchema = z
  .enum(['automatically', 'manually', 'none'])
  .openapi({
    description:
      '請求作成方法区分\n* `automatically` - 自動作成\n* `manually` - 手動作成\n* `none` - なし',
    example: 'none',
  })
  .openapi('BillingCreatingMethodTypeWithNone')

const ScheduledDateRuleSchema = z
  .strictObject({
    cutoff_day: ScheduledDateRuleDaySchema.openapi({ description: '締め日。32 は末日' }),
    additional_months: z
      .int32()
      .min(0)
      .max(6)
      .openapi({
        description: '締め日を基準に加算する月数。0 は当月、1 は翌月、2 は翌々月',
        example: 1,
      }),
    fixed_day: ScheduledDateRuleDaySchema.openapi({
      description: '締め日を基準に additional_months か月後の予定日の日。32 は末日',
    }),
  })
  .openapi({
    description: '予定日ルール',
    required: ['cutoff_day', 'additional_months', 'fixed_day'],
  })
  .openapi('ScheduledDateRule')

const SalesEntrySchema = z
  .strictObject({
    status: z
      .enum(['actual', 'scheduled'])
      .openapi({
        description: 'effectiveブロックの値のソース（actual: 計上済み / scheduled: 未計上）',
        example: 'scheduled',
      }),
    sales_schedule_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({
        description: '売上予定ID（計上済み時はnull。計上済みの売上予定は詳細を閲覧できないため）',
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      }),
    scheduled_date: z.iso.date().openapi({ description: '売上予定日', example: '2024-01-31' }),
    actual_sales_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({
        description: '計上された売上ID（未計上時はnull）',
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      }),
    actual_sales_revenue_recognition_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '計上された売上の計上日（未計上時はnull）', example: '2024-01-31' }),
    amount_set: AmountSetSchema.openapi({ description: '金額セット（statusが示す側の値）' }),
    internal_memo: InternalMemoSchema.exactOptional().openapi({
      description: '社内メモ（statusが示す側の値）',
    }),
    registered_by: EmployeeSchema.nullable().openapi({
      description: '登録者（statusが示す側の値）',
    }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者（statusが示す側の値）' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: '登録日時（statusが示す側の値）',
        example: '2024-01-15T10:30:00+09:00',
      }),
    last_updated_by: EmployeeSchema.nullable().openapi({
      description: '変更者（statusが示す側の値）',
    }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者（statusが示す側の値）' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: '変更日時（statusが示す側の値）',
        example: '2024-01-16T14:45:00+09:00',
      }),
  })
  .openapi({
    description: '売上計上状況',
    required: [
      'status',
      'scheduled_date',
      'amount_set',
      'registered_by',
      'registered_at',
      'last_updated_by',
      'last_updated_at',
    ],
  })
  .openapi('SalesEntry')

const SalesScheduleRegistrationStatusSchema = z
  .enum(['none', 'in_progress', 'error'])
  .openapi({
    description: '売上予定の登録ステータス (未登録: none, 処理中: in_progress, エラー: error)',
    example: 'none',
  })
  .openapi('SalesScheduleRegistrationStatus')

const SalesScheduleDigestSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '売上予定ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    periodic_sales_id: z
      .string()
      .length(26)
      .openapi({ description: '定期売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    advance_receipt_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '件名', example: 'Webサイト保守費' }),
    customer_order_no: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    scheduled_date: z.iso.date().openapi({ description: '売上予定日', example: '2025-04-30' }),
    registration_status: SalesScheduleRegistrationStatusSchema,
    customer: PartnerSchema.openapi({ description: '顧客' }),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求予定日', example: '2025-05-31' }),
    billing_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '請求先' }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金予定日', example: '2025-06-30' }),
    collecting_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '入金元' }),
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.nullable()
      .exactOptional()
      .openapi({ description: '担当部門' }),
    amount_set: AmountSetSchema.openapi({ description: '売上金額' }),
    total_amount: z
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
        description: '源泉徴収税額を除いた合計金額',
        example: 110000,
      }),
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    business: BusinessSchema.nullable().exactOptional().openapi({ description: '案件' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '最新変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '最新変更者' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '最終変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({
    description: '売上予定一覧情報',
    required: [
      'id',
      'periodic_sales_id',
      'scheduled_date',
      'registration_status',
      'customer',
      'amount_set',
      'total_amount',
      'registered_by',
      'last_updated_by',
      'registered_at',
      'last_updated_at',
    ],
  })
  .openapi('SalesScheduleDigest')

const SalesScheduleBasicLineDetailSchema = BasicLineDetailSchema.and(
  z
    .strictObject({
      is_manual_tax_entry: z
        .boolean()
        .openapi({ description: '税の手動入力フラグ', example: false }),
      account_item: AccountItemSchema,
      segment_tag_1: SegmentTagSchema.exactOptional(),
      segment_tag_2: SegmentTagSchema.exactOptional(),
      segment_tag_3: SegmentTagSchema.exactOptional(),
    })
    .openapi({ required: ['is_manual_tax_entry', 'account_item'] }),
)
  .openapi({ description: '売上予定通常明細詳細' })
  .openapi('SalesScheduleBasicLineDetail')

const SalesScheduleLineDetailSchema = z
  .xor([SalesScheduleBasicLineDetailSchema, TextLineDetailSchema])
  .openapi({
    description: '売上予定明細詳細',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/SalesScheduleBasicLineDetail',
        text: '#/components/schemas/TextLineDetail',
      },
    },
  })
  .openapi('SalesScheduleLineDetail')

const SalesScheduleDetailSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '売上予定ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    periodic_sales_id: z
      .string()
      .length(26)
      .openapi({ description: '定期売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    advance_receipt_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '件名', example: 'Webサイト保守費' }),
    customer_order_no: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    scheduled_date: z.iso.date().openapi({ description: '売上予定日', example: '2025-04-30' }),
    registration_status: SalesScheduleRegistrationStatusSchema,
    customer: PartnerSchema.openapi({ description: '顧客' }),
    billing_creating_method_type: BillingCreatingMethodTypeWithNoneSchema,
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求予定日', example: '2025-05-31' }),
    invoice_template_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書テンプレート名称', example: 'デフォルトテンプレート' }),
    billing_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '請求先' }),
    invoice_subject: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル案件売上の件' }),
    invoice_note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金予定日', example: '2025-06-30' }),
    collecting_partner: PartnerSchema.nullable().exactOptional().openapi({ description: '入金元' }),
    collection_method_type: CollectionMethodTypeWithNoneSchema,
    charge_employee: EmployeeSchema.nullable()
      .exactOptional()
      .openapi({ description: '社内担当者' }),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    amount_set: AmountSetSchema.openapi({ description: '売上金額' }),
    amount_set_rates: z.array(AmountSetRateSchema).openapi({ description: '税率を含む金額セット' }),
    total_amount: z
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
        description: '源泉徴収税額を除いた合計金額',
        example: 110000,
      }),
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    business: BusinessSchema.exactOptional(),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
    lines: z.array(SalesScheduleLineDetailSchema).openapi({ description: '売上予定明細リスト' }),
  })
  .openapi({
    description: '売上予定詳細',
    required: [
      'id',
      'periodic_sales_id',
      'scheduled_date',
      'registration_status',
      'customer',
      'billing_creating_method_type',
      'collection_method_type',
      'amount_set',
      'amount_set_rates',
      'total_amount',
      'registered_by',
      'last_updated_by',
      'registered_at',
      'last_updated_at',
      'lines',
    ],
  })
  .openapi('SalesScheduleDetail')

const SalesScheduleMinimalResponseSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '売上予定ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('SalesScheduleMinimalResponse')

const SalesScheduleBasicLineParamsSchema = BasicLineParamsSchema.and(
  z
    .strictObject({
      segment_tag_1_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ1のID',
          example: 12345,
        }),
      segment_tag_2_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ2のID',
          example: 12345,
        }),
      segment_tag_3_id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(1n).max(9223372036854776000n),
        )
        .nullable()
        .exactOptional()
        .openapi({
          type: ['integer', 'null'],
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          description: 'セグメントタグ3のID',
          example: 12345,
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: '売上予定通常明細パラメータ' })
  .openapi('SalesScheduleBasicLineParams')

const SalesScheduleLineParamsSchema = z
  .xor([SalesScheduleBasicLineParamsSchema, TextLineParamsSchema])
  .openapi({
    description: '売上予定明細パラメータ',
    discriminator: {
      propertyName: 'line_type',
      mapping: {
        basic: '#/components/schemas/SalesScheduleBasicLineParams',
        text: '#/components/schemas/TextLineParams',
      },
    },
  })
  .openapi('SalesScheduleLineParams')

const SalesScheduleUpdateParamsSchema = z
  .strictObject({
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '件名', example: 'サンプル案件売上の件' }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    scheduled_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '売上予定日', example: '2025-04-30' }),
    billing_creating_method_type: BillingCreatingMethodTypeSchema.exactOptional(),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求予定日', example: '2025-05-31' }),
    billing_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求先の取引先ID',
        example: 1002,
      }),
    invoice_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 10002,
      }),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル案件売上の件' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金予定日', example: '2025-06-30' }),
    collecting_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '入金元の取引先ID',
        example: 1003,
      }),
    collection_method_type: CollectionMethodTypeSchema.exactOptional(),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z
      .array(SalesScheduleLineParamsSchema)
      .exactOptional()
      .openapi({
        description:
          '売上予定明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）',
      }),
  })
  .openapi({ required: [] })
  .openapi('SalesScheduleUpdateParams')

const SalesScheduleActualizationResultSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '売上予定ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    sales_id: z
      .string()
      .length(26)
      .openapi({ description: '計上された売上のID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-04-01T09:00:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-04-15T14:30:00+09:00' }),
  })
  .openapi({ required: ['id', 'sales_id', 'registered_at', 'last_updated_at'] })
  .openapi('SalesScheduleActualizationResult')

const OtherCostDetailSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: 'その他原価ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    other_cost_no: z.string().openapi({ description: 'その他原価番号', example: 'OC-00001' }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    amount_excluding_tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '税抜金額',
        example: 10000,
      }),
    incurred_date: z.iso.date().openapi({ description: '発生日', example: '2025-04-01' }),
    memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモ', example: 'その他原価メモ' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    business: BusinessSchema.exactOptional(),
    deal_line: z
      .strictObject({
        deal_id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            maximum: 9223372036854776000,
            description: '会計の取引ID',
            example: 1001,
          }),
        deal_line_id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            maximum: 9223372036854776000,
            description: '会計取引明細ID',
            example: 2001,
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({ description: '会計連携情報', required: ['deal_id', 'deal_line_id'] }),
  })
  .openapi({
    required: [
      'id',
      'other_cost_no',
      'amount_excluding_tax',
      'incurred_date',
      'canceled',
      'registered_at',
      'registered_by',
      'last_updated_at',
      'last_updated_by',
    ],
  })
  .openapi('OtherCostDetail')

const OtherCostMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'その他原価ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('OtherCostMinimalResponse')

const ProcurementPaymentStatusSchema = z
  .enum(['not_settled', 'partially_settled', 'settled', 'none'])
  .openapi({
    description:
      '決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)',
    example: 'not_settled',
  })
  .openapi('ProcurementPaymentStatus')

const ProcurementDigestSchema = z
  .strictObject({
    id: z.string().openapi({ description: '仕入ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_id: z
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
        description: '会計の取引ID',
        example: 12345,
      }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    procurement_no: z.string().openapi({ description: '仕入No.', example: 'P211212-00001' }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '仕入タイトル', example: '事務用品仕入' }),
    procurement_date: z.iso.date().openapi({ description: '仕入日', example: '2025-04-01' }),
    supplier: PartnerSchema.openapi({ description: '仕入先' }),
    is_qualified_invoice_issuer: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '適格請求書発行事業者該当フラグ<br>\n※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br>\n※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。',
        example: true,
      }),
    payment_status: ProcurementPaymentStatusSchema,
    payments_on: z.iso.date().openapi({ description: '支払期日', example: '2025-05-31' }),
    payment_method_type: PaymentMethodTypeSchema,
    payment_partner: PartnerSchema.openapi({ description: '支払先' }),
    charge_employee: EmployeeSchema.nullable().exactOptional(),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    business: BusinessSchema.exactOptional().openapi({
      description: '案件\n※ 複数の案件が紐づく場合はnullになります',
    }),
    purchase_order_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '発注ID\n※ 複数の発注が紐づく場合はnullになります',
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      }),
    internal_memo: InternalMemoSchema.exactOptional(),
    amount_set: AmountSetSchema,
    amount_of_withholding_tax: z
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
        description: '源泉徴収税額',
        example: 10000,
      }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
  })
  .openapi({
    required: [
      'id',
      'canceled',
      'registered_by',
      'registered_at',
      'last_updated_by',
      'last_updated_at',
      'procurement_no',
      'procurement_date',
      'supplier',
      'payment_status',
      'payments_on',
      'payment_method_type',
      'payment_partner',
      'amount_set',
    ],
  })
  .openapi('ProcurementDigest')

const ProcurementLineParamsSchema = z
  .strictObject({
    master_item_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_line_type_id: z
      .string()
      .length(26)
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    description: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: '事務用品購入' }),
    quantity: z.float64().openapi({ description: '数量', example: 100 }),
    uom_name: z
      .string()
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: '単位', example: '個' }),
    unit_price: z
      .float64()
      .min(0)
      .max(999999999999)
      .openapi({ description: '単価', example: 1000 }),
    withholding_enabled: z
      .boolean()
      .openapi({ description: '源泉徴収税対象明細かどうか', example: false }),
    is_manual_tax_entry: z
      .boolean()
      .openapi({ description: '税の手動入力を行うかどうか', example: false }),
    tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description:
          '手動入力した税額<br>\n※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。',
        example: 10000,
      }),
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    purchase_order_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '発注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    accounting_reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計計上部門ID<br>\n※ 親部門のIDは指定できません',
        example: 67890,
      }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    memo_tags: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグID' }),
    segment_tag_1_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ1のID',
        example: 12345,
      }),
    segment_tag_2_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ2のID',
        example: 12346,
      }),
    segment_tag_3_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ3のID',
        example: 12347,
      }),
  })
  .openapi({
    description: '明細パラメータ',
    required: [
      'deal_line_type_id',
      'quantity',
      'unit_price',
      'withholding_enabled',
      'is_manual_tax_entry',
    ],
  })
  .openapi('ProcurementLineParams')

const ProcurementRequestBaseSchema = z
  .strictObject({
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '仕入タイトル', example: '事務用品仕入' }),
    procurement_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '仕入日', example: '2025-04-01' }),
    supplier_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '仕入先の取引先ID',
        example: 1001,
      }),
    is_qualified_invoice_issuer: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '適格請求書発行事業者該当フラグ<br>\n※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br>\n※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。',
        example: true,
      }),
    payments_on: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '支払期日', example: '2025-05-31' }),
    payment_method_type: PaymentMethodTypeSchema.exactOptional(),
    payment_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '支払先の取引先ID',
        example: 1002,
      }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z
      .array(ProcurementLineParamsSchema)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: '明細リスト' }),
  })
  .openapi({ required: [] })
  .openapi('ProcurementRequestBase')

const ProcurementMinimalResponseSchema = z
  .strictObject({
    id: z.string().openapi({ description: '仕入ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('ProcurementMinimalResponse')

const PurchaseOrderRefSchema = z
  .strictObject({
    id: z.string().openapi({ description: '発注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    purchase_order_no: z.string().openapi({ description: '発注No.', example: 'PO211212-00001' }),
  })
  .nullable()
  .openapi({ description: '発注参照', required: ['id', 'purchase_order_no'] })
  .openapi('PurchaseOrderRef')

const ProcurementLineDetailSchema = z
  .strictObject({
    line_no: z.int32().max(2147483647).openapi({ description: '明細行番号', example: 1 }),
    master_item: MasterItemDetailSchema.exactOptional(),
    deal_line_type: DealLineTypeDetailSchema,
    account_item: AccountItemSchema,
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: '事務用品購入' }),
    quantity: z.float64().openapi({ description: '数量', example: 100 }),
    uom_name: z.string().nullable().exactOptional().openapi({ description: '単位', example: '個' }),
    unit_price: z.float64().openapi({ description: '単価', example: 1000 }),
    tax_type: TaxTypeDetailSchema.exactOptional(),
    withholding_enabled: z
      .boolean()
      .openapi({ description: '源泉徴収税対象明細かどうか', example: false }),
    amount_set: AmountSetSchema,
    memo_tags: z
      .array(MemoTagDetailSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグ' }),
    item_tag: ItemTagDetailSchema.exactOptional(),
    accounting_reporting_section: AccountingReportingSectionDetailSchema.exactOptional(),
    segment_tag_1: SegmentTagSchema.exactOptional(),
    segment_tag_2: SegmentTagSchema.exactOptional(),
    segment_tag_3: SegmentTagSchema.exactOptional(),
    business: BusinessSchema.exactOptional(),
    purchase_order: PurchaseOrderRefSchema.exactOptional(),
  })
  .openapi({
    description: '明細詳細',
    required: [
      'line_no',
      'deal_line_type',
      'quantity',
      'unit_price',
      'withholding_enabled',
      'amount_set',
      'account_item',
    ],
  })
  .openapi('ProcurementLineDetail')

const ProcurementDetailSchema = ProcurementDigestSchema.and(
  z
    .strictObject({
      amount_set_rates: z.array(AmountSetRateSchema),
      lines: z.array(ProcurementLineDetailSchema).openapi({ description: '明細リスト' }),
    })
    .openapi({ required: ['amount_set_rates', 'lines'] }),
).openapi('ProcurementDetail')

const ProcurementUpdateLineParamsSchema = z
  .strictObject({
    master_item_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_line_type_id: z
      .string()
      .length(26)
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    description: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: '事務用品購入' }),
    quantity: z.float64().openapi({ description: '数量', example: 100 }),
    uom_name: z
      .string()
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: '単位', example: '個' }),
    unit_price: z
      .float64()
      .min(0)
      .max(999999999999)
      .openapi({ description: '単価', example: 1000 }),
    withholding_enabled: z
      .boolean()
      .openapi({ description: '源泉徴収税対象明細かどうか', example: false }),
    is_manual_tax_entry: z
      .boolean()
      .openapi({ description: '税の手動入力を行うかどうか', example: false }),
    tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description:
          '手動入力した税額<br>\n※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。',
        example: 10000,
      }),
    business_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    purchase_order_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '発注ID<br>\n※省略した場合、またはnullを指定した場合、発注との紐づけは解除されます。既存の紐づけを維持したい場合は必ず指定してください。',
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      }),
    accounting_reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計計上部門ID<br>\n※ 親部門のIDは指定できません',
        example: 67890,
      }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    memo_tags: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグID' }),
    segment_tag_1_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ1のID',
        example: 12345,
      }),
    segment_tag_2_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ2のID',
        example: 12346,
      }),
    segment_tag_3_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ3のID',
        example: 12347,
      }),
  })
  .openapi({
    description: '更新用明細パラメータ',
    required: [
      'deal_line_type_id',
      'quantity',
      'unit_price',
      'withholding_enabled',
      'is_manual_tax_entry',
    ],
  })
  .openapi('ProcurementUpdateLineParams')

const ProcurementUpdateRequestBodySchema = z
  .strictObject({
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '仕入タイトル', example: '事務用品仕入' }),
    procurement_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '仕入日', example: '2025-04-01' }),
    supplier_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '仕入先の取引先ID',
        example: 1001,
      }),
    is_qualified_invoice_issuer: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '適格請求書発行事業者該当フラグ<br>\n※ 登録値はfreee会計の「税区分の設定 > インボイス制度関連 > 買い手側対応機能」の設定状況により決定されます。<br>\n※ 買い手側対応機能を「使用する」場合、リクエスト指定値が優先され、未指定時は「適格チェックボックスと税区分」の設定に従います。',
        example: true,
      }),
    payments_on: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '支払期日', example: '2025-05-31' }),
    payment_method_type: PaymentMethodTypeSchema.exactOptional(),
    payment_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '支払先の取引先ID',
        example: 1002,
      }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    lines: z
      .array(ProcurementUpdateLineParamsSchema)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          '明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）',
      }),
  })
  .openapi({ description: '仕入更新リクエストボディ', required: [] })
  .openapi('ProcurementUpdateRequestBody')

const ProcurementPaymentStatusChangeRequestSchema = WithCompanyIdSchema.and(
  z
    .strictObject({ payment_status: ManualSettlementStatusSchema })
    .openapi({ required: ['payment_status'] }),
)
  .openapi({ description: '決済ステータス変更リクエスト' })
  .openapi('ProcurementPaymentStatusChangeRequest')

const AdvanceReceiptDigestSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    deal_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        maximum: 9223372036854776000,
        description: '会計の取引ID(null は未連携を示す)',
        example: 1001,
      }),
    canceled: z.boolean().openapi({ description: '取消状態', example: false }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    registered_by: EmployeeSchema.nullable().openapi({ description: '登録者' }),
    registered_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '登録者' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
    last_updated_by: EmployeeSchema.nullable().openapi({ description: '変更者' }),
    last_updated_by_member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: '変更者' }),
    amount_set: AmountSetSchema,
    total_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '源泉徴収税額を除いた合計金額',
        example: 100000,
      }),
    business: BusinessSchema,
    advance_receipt_no: z.string().openapi({ description: '前受金No.', example: 'AR211212-00001' }),
    advance_receipt_date: z.iso
      .date()
      .openapi({ description: '前受金発生日', example: '2025-04-01' }),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '前受金タイトル', example: 'サンプル前受金' }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'PO-12345' }),
    customer: PartnerSchema.openapi({ description: '顧客' }),
    bill_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    billing_status: BillingStatusSchema.openapi({ description: '請求書送付ステータス' }),
    billing_partner: PartnerSchema.openapi({ description: '請求先' }),
    bills_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '請求予定日', example: '2025-04-15' }),
    is_reduced: z
      .boolean()
      .openapi({ description: '前受金が取り崩されているかどうか', example: false }),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: 'サンプル請求書件名' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書の備考欄に掲載する内容', example: '請求書備考テキスト' }),
    collecting_partner: PartnerSchema.openapi({ description: '入金元' }),
    collection_method_type: CollectionMethodTypeSchema,
    collects_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '入金予定日', example: '2025-04-30' }),
    collection_status: CollectionStatusSchema.openapi({ description: '決済ステータス' }),
    charge_employee: EmployeeSchema.nullable().exactOptional(),
    charge_member: MemberSchema.nullable().exactOptional().openapi({ description: '社内担当者' }),
    reporting_section: ReportingSectionSchema.exactOptional(),
    internal_memo: InternalMemoSchema.exactOptional(),
    sales_order_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    consumption_total_amount: z
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
        description: '売上計上済金額(取崩済金額)',
        example: 50000,
      }),
    remaining_total_expense: z
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
        description: '前受金残額(取崩可能額)',
        example: 50000,
      }),
  })
  .openapi({
    description: '前受金一覧情報',
    required: [
      'id',
      'canceled',
      'registered_at',
      'registered_by',
      'last_updated_at',
      'last_updated_by',
      'amount_set',
      'total_amount',
      'business',
      'advance_receipt_no',
      'advance_receipt_date',
      'is_reduced',
      'customer',
      'billing_partner',
      'collecting_partner',
      'billing_status',
      'collection_status',
      'remaining_total_expense',
      'collection_method_type',
      'consumption_total_amount',
    ],
  })
  .openapi('AdvanceReceiptDigest')

const AdvanceReceiptBasicLineParamsSchema = z
  .strictObject({
    line_type: z
      .literal('basic')
      .openapi({ description: '明細種別（前受金は basic のみサポート）', example: 'basic' }),
    deal_line_type_id: z
      .string()
      .length(26)
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    master_item_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    description: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: '前受金明細の摘要' }),
    quantity: z.float64().openapi({ description: '数量', example: 1 }),
    unit_price: z
      .float64()
      .min(0)
      .max(999999999999)
      .openapi({ description: '単価', example: 100000 }),
    uom_name: z
      .string()
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: '単位', example: '個' }),
    is_manual_tax_entry: z
      .boolean()
      .openapi({ description: '税の手動入力を行うかどうか', example: false }),
    tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description:
          '手動入力した税額<br>\n※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。',
        example: 10000,
      }),
  })
  .openapi({
    description: '前受金通常明細パラメータ',
    required: ['line_type', 'deal_line_type_id', 'quantity', 'unit_price', 'is_manual_tax_entry'],
  })
  .openapi('AdvanceReceiptBasicLineParams')

const AdvanceReceiptRequestBaseSchema = z
  .strictObject({
    account_item_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '勘定科目ID',
        example: 12345,
      }),
    accounting_reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計計上部門ID<br>\n※ 親部門のIDは指定できません',
        example: 67890,
      }),
    advance_receipt_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '前受金発生日', example: '2024-01-31' }),
    billing_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求先の取引先ID',
        example: 1002,
      }),
    bills_on: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '請求日', example: '2024-02-01' }),
    business_id: z
      .string()
      .length(26)
      .exactOptional()
      .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
    charge_member_id: ChargeMemberIdSchema.exactOptional(),
    collecting_partner_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '入金元の取引先ID',
        example: 1003,
      }),
    collection_method_type: CollectionMethodTypeSchema.exactOptional(),
    collects_on: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '入金期日', example: '2024-02-28' }),
    customer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '顧客の取引先ID',
        example: 1001,
      }),
    customer_order_no: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
    internal_memo: InternalMemoSchema.exactOptional(),
    internal_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '前受金タイトル', example: '前受金サンプル案件' }),
    invoice_note: z
      .string()
      .max(4000)
      .nullable()
      .exactOptional()
      .openapi({
        description: '請求書の備考欄に掲載する内容',
        example: 'お振込期限は月末までとなります',
      }),
    invoice_subject: z
      .string()
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({ description: '請求書件名', example: '前受金請求書件名' }),
    invoice_template_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 10002,
      }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    lines: z
      .array(AdvanceReceiptBasicLineParamsSchema)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: '明細リスト' }),
    memo_tags: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグID' }),
    reporting_section_id: ReportingSectionIdSchema.exactOptional(),
    sales_order_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    segment_tag_1_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ1のID',
        example: 12345,
      }),
    segment_tag_2_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ2のID',
        example: 12345,
      }),
    segment_tag_3_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ3のID',
        example: 12345,
      }),
  })
  .openapi({ required: [] })
  .openapi('AdvanceReceiptRequestBase')

const AdvanceReceiptMinimalResponseSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'registered_at', 'last_updated_at'] })
  .openapi('AdvanceReceiptMinimalResponse')

const ReportTypeEnumSchema = z
  .enum(['quotation', 'delivery', 'invoice', 'purchase_order'])
  .openapi({
    description:
      '帳票種別区分 (見積書: quotation, 納品書: delivery, 請求書: invoice, 発注書: purchase_order)',
    example: 'invoice',
  })
  .openapi('ReportTypeEnum')

const ReportTypeSchema = z
  .strictObject({
    id: ReportTypeEnumSchema.openapi({ description: '帳票種別区分' }),
    name: z.string().openapi({ description: '表示名', example: '請求書' }),
  })
  .openapi({ description: '帳票種別', required: ['id', 'name'] })
  .openapi('ReportType')

const InvoiceTemplateSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(9223372036854776000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 9223372036854776000,
        description: '請求書テンプレートID',
        example: 1001,
      }),
    name: z.string().openapi({ description: 'テンプレート名', example: 'デフォルトテンプレート' }),
    layout_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'レイアウト名', example: 'standard' }),
    is_default: z.boolean().openapi({ description: 'デフォルトかどうか', example: true }),
    report_type: ReportTypeSchema.openapi({ description: '帳票種別' }),
  })
  .openapi({
    description: '請求書テンプレート',
    required: ['id', 'name', 'is_default', 'report_type'],
  })
  .openapi('InvoiceTemplate')

const AdvanceReceiptBasicLineDetailSchema = z
  .strictObject({
    line_no: z.int32().max(2147483647).openapi({ description: '明細行番号', example: 1 }),
    line_type: z
      .literal('basic')
      .openapi({ description: '明細種別（前受金明細は basic のみ）', example: 'basic' }),
    master_item: MasterItemDetailSchema.exactOptional(),
    deal_line_type: DealLineTypeDetailSchema,
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: 'パンフレットデザイン料' }),
    quantity: z.float64().openapi({ description: '数量', example: 100 }),
    uom_name: z.string().nullable().exactOptional().openapi({ description: '単位', example: '個' }),
    unit_price: z.float64().openapi({ description: '単価', example: 1000 }),
    amount_set: AmountSetSchema,
    tax_type: TaxTypeDetailSchema.exactOptional(),
  })
  .openapi({
    description: '前受金通常明細詳細',
    required: ['line_no', 'line_type', 'deal_line_type', 'quantity', 'unit_price', 'amount_set'],
  })
  .openapi('AdvanceReceiptBasicLineDetail')

const AdvanceReceiptDetailSchema = AdvanceReceiptDigestSchema.and(
  z
    .strictObject({
      account_item: AccountItemSchema.openapi({ description: '勘定科目' }),
      item_tag: ItemTagDetailSchema.exactOptional().openapi({ description: '会計品目タグ' }),
      memo_tags: z
        .array(MemoTagDetailSchema)
        .nullable()
        .exactOptional()
        .openapi({ description: 'メモタグ' }),
      segment_tag_1: SegmentTagSchema.exactOptional().openapi({ description: 'セグメントタグ1' }),
      segment_tag_2: SegmentTagSchema.exactOptional().openapi({ description: 'セグメントタグ2' }),
      segment_tag_3: SegmentTagSchema.exactOptional().openapi({ description: 'セグメントタグ3' }),
      invoice_template: InvoiceTemplateSchema,
      lines: z.array(AdvanceReceiptBasicLineDetailSchema).openapi({ description: '明細リスト' }),
      amount_set_rates: z.array(AmountSetRateSchema),
    })
    .openapi({ required: ['account_item', 'lines', 'invoice_template', 'amount_set_rates'] }),
)
  .openapi({ description: '前受金詳細情報' })
  .openapi('AdvanceReceiptDetail')

const AdvanceReceiptReductionLineParamsSchema = z
  .strictObject({
    line_type: z
      .literal('basic')
      .openapi({ description: '明細種別（売上は basic のみサポート）', example: 'basic' }),
    deal_line_type_id: z
      .string()
      .length(26)
      .openapi({ description: '明細取引タイプID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    master_item_id: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: '商品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    description: z
      .string()
      .max(200)
      .nullable()
      .exactOptional()
      .openapi({ description: '摘要', example: '売上明細の摘要' }),
    quantity: z.float64().openapi({ description: '数量', example: 1 }),
    unit_price: z
      .float64()
      .min(0)
      .max(999999999999)
      .openapi({ description: '単価', example: 100000 }),
    uom_name: z
      .string()
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: '単位', example: '個' }),
    item_tag_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計品目タグID',
        example: 2001,
      }),
    accounting_reporting_section_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: '会計計上部門ID<br>\n※ 親部門のIDは指定できません',
        example: 67890,
      }),
    memo_tags: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64().min(1n).max(9223372036854776000n),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 9223372036854776000,
            example: 3001,
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'メモタグID' }),
    is_manual_tax_entry: z
      .boolean()
      .openapi({ description: '税の手動入力を行うかどうか', example: false }),
    tax: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-999999999999n).max(999999999999n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: -999999999999,
        maximum: 999999999999,
        description:
          '手動入力した税額<br>\n※is_manual_tax_entryがtrueの場合のみ参照されます。falseの場合は値を設定しても無視されます。',
        example: 10000,
      }),
    segment_tag_1_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ1のID',
        example: 12345,
      }),
    segment_tag_2_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ2のID',
        example: 12345,
      }),
    segment_tag_3_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(9223372036854776000n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        description: 'セグメントタグ3のID',
        example: 12345,
      }),
  })
  .openapi({
    description: '売上通常明細パラメータ',
    required: ['line_type', 'deal_line_type_id', 'quantity', 'unit_price', 'is_manual_tax_entry'],
  })
  .openapi('AdvanceReceiptReductionLineParams')

const AdvanceReceiptReductionResultSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '取崩元の前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    sales_id: z
      .string()
      .length(26)
      .openapi({ description: '登録された売上のID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'sales_id', 'registered_at', 'last_updated_at'] })
  .openapi('AdvanceReceiptReductionResult')

const AdvanceReceiptPeriodicReductionResultSchema = z
  .strictObject({
    id: z
      .string()
      .length(26)
      .openapi({ description: '取崩元の前受金ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    periodic_sales_id: z
      .string()
      .length(26)
      .openapi({ description: '登録された定期取崩売上ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
    registered_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '登録日時', example: '2025-01-15T10:30:00+09:00' }),
    last_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: '変更日時', example: '2025-01-16T14:45:00+09:00' }),
  })
  .openapi({ required: ['id', 'periodic_sales_id', 'registered_at', 'last_updated_at'] })
  .openapi('AdvanceReceiptPeriodicReductionResult')

const AdvanceReceiptCollectionStatusChangeRequestSchema = WithCompanyIdSchema.and(
  z
    .strictObject({
      collection_status: z
        .enum(['not_settled', 'settled', 'none'])
        .openapi({
          description: '決済ステータス (未決済: not_settled, 決済済み: settled, 対象外: none)',
          example: 'settled',
        }),
    })
    .openapi({ required: ['collection_status'] }),
)
  .openapi({ description: '決済ステータス変更リクエスト' })
  .openapi('AdvanceReceiptCollectionStatusChangeRequest')

const BusinessIndexResponseResponse = {
  description: '案件一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ businesses: z.array(BusinessDigestSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['businesses', 'meta'] }),
    },
  },
}

const BadRequestErrorResponseResponse = {
  description: 'Bad Request - リクエストパラメータが不正',
  content: {
    'application/json': {
      schema: ProductErrorSchema,
      example: {
        status_code: 400,
        errors: [{ codes: ['bad_request'], messages: ['リクエストの形式が不正です。'] }],
      },
    },
  },
}

const UnauthorizedErrorResponseResponse = {
  description: 'Unauthorized - アクセストークンが無効',
  content: {
    'application/json': {
      schema: AuthErrorSchema,
      example: { message: 'ログインをして下さい', code: 'invalid_access_token' },
    },
  },
}

const ForbiddenErrorResponseResponse = {
  description: 'Forbidden - アクセス権限がない',
  content: {
    'application/json': {
      schema: ProductErrorSchema,
      example: {
        status_code: 403,
        errors: [{ codes: ['forbidden'], messages: ['アクセス権限がありません。'] }],
      },
    },
  },
}

const NotFoundErrorResponseResponse = {
  description: 'Not Found - リソースが存在しない',
  content: {
    'application/json': {
      schema: ProductErrorSchema,
      example: {
        status_code: 404,
        errors: [
          { codes: ['not_found'], messages: ['指定されたリソースが見つかりませんでした。'] },
        ],
      },
    },
  },
}

const TooManyRequestsErrorResponseResponse = {
  description: 'Too Many Requests - リクエスト回数制限を超えた',
  content: {
    'application/json': {
      schema: ProductErrorSchema,
      example: {
        status_code: 429,
        errors: [
          {
            codes: ['too_many_requests'],
            messages: [
              'リクエスト回数制限を超えました。しばらく時間をおいてから再度お試しください。',
            ],
          },
        ],
      },
    },
  },
}

const InternalServerErrorResponseResponse = {
  description: 'Internal Server Error - システム内で予期しないエラーが発生',
  content: {
    'application/json': {
      schema: ProductErrorSchema,
      example: {
        status_code: 500,
        errors: [
          { codes: ['internal_server_error'], messages: ['システムエラーが発生しました。'] },
        ],
      },
    },
  },
}

const BusinessCreateResponseResponse = {
  description: '案件登録のレスポンス',
  content: { 'application/json': { schema: BusinessMinimalResponseSchema } },
}

const ConflictErrorResponseResponse = {
  description: 'Conflict - リソースの競合',
  content: {
    'application/json': {
      schema: ProductErrorSchema,
      example: {
        status_code: 409,
        errors: [{ codes: ['conflict'], messages: ['リソースが競合しています。'] }],
      },
    },
  },
}

const BusinessShowResponseResponse = {
  description: '案件詳細取得のレスポンス',
  content: { 'application/json': { schema: BusinessDetailSchema } },
}

const BusinessUpdateResponseResponse = {
  description: '案件更新のレスポンス',
  content: { 'application/json': { schema: BusinessMinimalResponseSchema } },
}

const BusinessCancelResponseResponse = {
  description: '案件取消のレスポンス',
  content: { 'application/json': { schema: BusinessMinimalResponseSchema } },
}

const BusinessCloseResponseResponse = {
  description: '案件ロックのレスポンス',
  content: { 'application/json': { schema: BusinessMinimalResponseSchema } },
}

const BusinessReopenResponseResponse = {
  description: '案件ロック解除のレスポンス',
  content: { 'application/json': { schema: BusinessMinimalResponseSchema } },
}

const CostBudgetIndexResponseResponse = {
  description: '原価予算一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ cost_budgets: z.array(CostBudgetDetailSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['cost_budgets', 'meta'] }),
    },
  },
}

const CostBudgetCreateResponseResponse = {
  description: '原価予算登録のレスポンス',
  content: { 'application/json': { schema: CostBudgetMinimalResponseSchema } },
}

const CostBudgetShowResponseResponse = {
  description: '原価予算詳細取得のレスポンス',
  content: { 'application/json': { schema: CostBudgetDetailSchema } },
}

const CostBudgetUpdateResponseResponse = {
  description: '原価予算更新のレスポンス',
  content: { 'application/json': { schema: CostBudgetMinimalResponseSchema } },
}

const CostBudgetCancelResponseResponse = {
  description: '原価予算取消のレスポンス',
  content: { 'application/json': { schema: CostBudgetMinimalResponseSchema } },
}

const BusinessPhasesIndexResponseResponse = {
  description: '案件一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ business_phases: z.array(BusinessPhase_2Schema) })
        .openapi({ required: ['business_phases'] }),
    },
  },
}

const SalesProgressionIndexResponseResponse = {
  description: '営業進捗一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ sales_progressions: z.array(SalesProgression_2Schema) })
        .openapi({ required: ['sales_progressions'] }),
    },
  },
}

const ItemsIndexResponseResponse = {
  description: '商品一覧のレスポンス',
  content: {
    'application/json': {
      schema: z.strictObject({ items: z.array(MasterItemSchema) }).openapi({ required: ['items'] }),
    },
  },
}

const DealLineTypesIndexResponseResponse = {
  description: '明細取引タイプ一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ deal_line_types: z.array(DealLineTypeSchema) })
        .openapi({ required: ['deal_line_types'] }),
    },
  },
}

const EmployeesIndexResponseResponse = {
  description: '従業員一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ employees: z.array(Employee_2Schema) })
        .openapi({ required: ['employees'] }),
    },
  },
}

const MembersIndexResponseResponse = {
  description: 'メンバー一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ members: z.array(MasterMemberSchema) })
        .openapi({ required: ['members'] }),
    },
  },
}

const CustomFieldDefinitionsIndexResponseResponse = {
  description: 'カスタム項目定義一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ custom_field_definitions: z.array(CustomFieldDefinitionSchema) })
        .openapi({ required: ['custom_field_definitions'] }),
      example: {
        custom_field_definitions: [
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            key: 'custom_field_001',
            display_name: 'プロジェクトコード',
            type: 'text',
            required: false,
            description: 'プロジェクトを識別するためのコード',
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTN',
            key: 'custom_field_002',
            display_name: '詳細説明',
            type: 'textarea',
            required: false,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTO',
            key: 'custom_field_003',
            display_name: '契約金額',
            type: 'amount',
            required: true,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTP',
            key: 'custom_field_004',
            display_name: '数量',
            type: 'quantity',
            required: false,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTQ',
            key: 'custom_field_005',
            display_name: '重要度',
            type: 'number',
            required: false,
            description: null,
            unit: '点',
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTR',
            key: 'custom_field_006',
            display_name: '契約開始日',
            type: 'date',
            required: false,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTS',
            key: 'custom_field_007',
            display_name: '優先度',
            type: 'enum',
            required: false,
            description: null,
            enumerations: [
              { id: '01JPP4FD1CVQWCDSWA90VE1ZTT', name: '高', usable: true },
              { id: '01JPP4FD1CVQWCDSWA90VE1ZTU', name: '中', usable: true },
              { id: '01JPP4FD1CVQWCDSWA90VE1ZTV', name: '低', usable: false },
            ],
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTW',
            key: 'custom_field_008',
            display_name: '担当取引先',
            type: 'partner',
            required: false,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTX',
            key: 'custom_field_009',
            display_name: '担当従業員',
            type: 'employee',
            required: false,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTY',
            key: 'custom_field_010',
            display_name: '担当部門',
            type: 'section',
            required: false,
            description: null,
          },
          {
            id: '01JPP4FD1CVQWCDSWA90VE1ZTZ',
            key: 'custom_field_011',
            display_name: '関連商品',
            type: 'master_item',
            required: false,
            description: null,
          },
        ],
      },
    },
  },
}

const PurchaseOrderIndexResponseResponse = {
  description: '発注一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          purchase_orders: z.array(PurchaseOrderDigestSchema),
          meta: PaginationMetaSchema,
        })
        .openapi({ required: ['purchase_orders', 'meta'] }),
    },
  },
}

const PurchaseOrderCreateResponseResponse = {
  description: '発注登録のレスポンス',
  content: { 'application/json': { schema: PurchaseOrderMinimalResponseSchema } },
}

const PurchaseOrderUpdateResponseResponse = {
  description: '発注更新のレスポンス',
  content: { 'application/json': { schema: PurchaseOrderMinimalResponseSchema } },
}

const PurchaseOrderCancellationResponseResponse = {
  description: '発注取消のレスポンス',
  content: { 'application/json': { schema: PurchaseOrderMinimalResponseSchema } },
}

const QuotationIndexResponseResponse = {
  description: '見積一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ quotations: z.array(QuotationListItemSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['quotations', 'meta'] }),
    },
  },
}

const QuotationCreateResponseResponse = {
  description: '見積登録のレスポンス',
  content: { 'application/json': { schema: QuotationMinimalResponseSchema } },
}

const QuotationUpdateResponseResponse = {
  description: '見積更新のレスポンス',
  content: { 'application/json': { schema: QuotationMinimalResponseSchema } },
}

const QuotationCancellationResponseResponse = {
  description: '見積取消のレスポンス',
  content: { 'application/json': { schema: QuotationMinimalResponseSchema } },
}

const SalesOrderIndexResponseResponse = {
  description: '受注一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ sales_orders: z.array(SalesOrderDigestSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['sales_orders', 'meta'] }),
    },
  },
}

const SalesOrderCreateResponseResponse = {
  description: '受注登録のレスポンス',
  content: { 'application/json': { schema: SalesOrderMinimalResponseSchema } },
}

const SalesOrderUpdateResponseResponse = {
  description: '受注更新のレスポンス',
  content: { 'application/json': { schema: SalesOrderMinimalResponseSchema } },
}

const SalesOrderCancelResponseResponse = {
  description: '受注取消のレスポンス',
  content: { 'application/json': { schema: SalesOrderMinimalResponseSchema } },
}

const DeliveryIndexResponseResponse = {
  description: '納品一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ deliveries: z.array(DeliveryDigestSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['deliveries', 'meta'] }),
    },
  },
}

const DeliveryCreateResponseResponse = {
  description: '納品登録のレスポンス',
  content: { 'application/json': { schema: DeliveryMinimalResponseSchema } },
}

const DeliveryUpdateResponseResponse = {
  description: '納品更新のレスポンス',
  content: { 'application/json': { schema: DeliveryMinimalResponseSchema } },
}

const DeliveryCancelResponseResponse = {
  description: '納品取消のレスポンス',
  content: { 'application/json': { schema: DeliveryMinimalResponseSchema } },
}

const SalesIndexResponseResponse = {
  description: '売上一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ sales: z.array(SaleDigestSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['sales', 'meta'] }),
    },
  },
}

const SaleCreateResponseResponse = {
  description: '売上登録のレスポンス',
  content: { 'application/json': { schema: SaleMinimalResponseSchema } },
}

const SaleUpdateResponseResponse = {
  description: '売上更新のレスポンス',
  content: { 'application/json': { schema: SaleMinimalResponseSchema } },
}

const SaleCancelResponseResponse = {
  description: '売上取消のレスポンス',
  content: { 'application/json': { schema: SaleMinimalResponseSchema } },
}

const PeriodicSaleListResponseResponse = {
  description: '定期売上一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          periodic_sales: z.array(PeriodicSaleDigestSchema),
          meta: PaginationMetaSchema,
        })
        .openapi({ required: ['periodic_sales', 'meta'] }),
    },
  },
}

const PeriodicSaleCreateResponseResponse = {
  description: '定期売上登録のレスポンス',
  content: { 'application/json': { schema: PeriodicSaleMinimalResponseSchema } },
}

const PeriodicSaleShowResponseResponse = {
  description: '定期売上詳細取得のレスポンス',
  content: {
    'application/json': {
      schema: PeriodicSaleDigestSchema.and(
        z
          .object({
            total_amount_set: AmountSetSchema,
            each_amount_set: AmountSetSchema.openapi({ description: '定期売上額（単体）' }),
            each_amount_set_rates: z
              .array(AmountSetRateSchema)
              .openapi({ description: '定期売上単体の税率' }),
            customer_order_no: z
              .string()
              .nullable()
              .openapi({ description: '顧客注文No.', example: 'PO-2025-001' }),
            recurrence_rule: RecurrenceRuleSchema,
            next_sales_on: z.iso
              .date()
              .nullable()
              .openapi({ description: '次回売上予定日', example: '2025-05-31' }),
            lines: z
              .array(PeriodicSaleLineDetailSchema)
              .openapi({ description: '定期売上明細リスト' }),
            billing_creating_method_type: BillingCreatingMethodTypeWithNoneSchema,
            bills_on_rule: ScheduledDateRuleSchema.nullable(),
            invoice_template_name: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: '請求書テンプレート名称',
                example: 'デフォルトテンプレート',
              }),
            invoice_subject: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: '請求書件名', example: '月額保守費用' }),
            collects_on_rule: ScheduledDateRuleSchema.nullable(),
            collection_method_type: CollectionMethodTypeWithNoneSchema,
          })
          .openapi({
            required: [
              'total_amount_set',
              'each_amount_set',
              'each_amount_set_rates',
              'customer_order_no',
              'recurrence_rule',
              'next_sales_on',
              'lines',
              'billing_creating_method_type',
              'bills_on_rule',
              'collects_on_rule',
              'collection_method_type',
            ],
          }),
      ),
    },
  },
}

const PeriodicSaleUpdateResponseResponse = {
  description: '定期売上更新のレスポンス',
  content: { 'application/json': { schema: PeriodicSaleMinimalResponseSchema } },
}

const SalesEntryListResponseResponse = {
  description: '売上計上状況一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ sales_entries: z.array(SalesEntrySchema), meta: PaginationMetaSchema })
        .openapi({ required: ['sales_entries', 'meta'] }),
    },
  },
}

const PeriodicSaleCancelResponseResponse = {
  description: '定期売上取消のレスポンス',
  content: { 'application/json': { schema: PeriodicSaleMinimalResponseSchema } },
}

const SalesScheduleIndexResponseResponse = {
  description: '売上予定一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          sales_schedules: z
            .array(SalesScheduleDigestSchema)
            .openapi({ description: '売上予定一覧' }),
          meta: PaginationMetaSchema.openapi({ description: 'ページネーション情報' }),
        })
        .openapi({ required: ['sales_schedules', 'meta'] }),
    },
  },
}

const SalesScheduleShowResponseResponse = {
  description: '売上予定詳細取得のレスポンス',
  content: { 'application/json': { schema: SalesScheduleDetailSchema } },
}

const SalesScheduleShowSeeOtherResponseResponse = {
  description:
    '売上予定は既に計上されています。Locationヘッダーに計上された売上の詳細情報APIのURLが含まれます。',
  headers: z.object({
    Location: {
      description: '計上された売上詳細取得APIのURL',
      required: true,
      schema: z.url().openapi({ description: '計上された売上詳細取得APIのURL' }),
    },
  }),
}

const SalesScheduleDeleteResponseResponse = {
  description: '売上予定削除のレスポンス',
  content: { 'application/json': { schema: SalesScheduleMinimalResponseSchema } },
}

const SalesScheduleUpdateResponseResponse = {
  description: '売上予定更新のレスポンス',
  content: { 'application/json': { schema: SalesScheduleMinimalResponseSchema } },
}

const SalesScheduleActualizationResponseResponse = {
  description: '売上予定計上のレスポンス',
  content: { 'application/json': { schema: SalesScheduleActualizationResultSchema } },
}

const OtherCostIndexResponseResponse = {
  description: 'その他原価一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({ other_costs: z.array(OtherCostDetailSchema), meta: PaginationMetaSchema })
        .openapi({ required: ['other_costs', 'meta'] }),
    },
  },
}

const OtherCostCreateResponseResponse = {
  description: 'その他原価登録のレスポンス',
  content: { 'application/json': { schema: OtherCostMinimalResponseSchema } },
}

const OtherCostUpdateResponseResponse = {
  description: 'その他原価更新のレスポンス',
  content: { 'application/json': { schema: OtherCostMinimalResponseSchema } },
}

const OtherCostRestorationResponseResponse = {
  description: 'その他原価復元のレスポンス',
  content: { 'application/json': { schema: OtherCostMinimalResponseSchema } },
}

const OtherCostCancellationResponseResponse = {
  description: 'その他原価取消のレスポンス',
  content: { 'application/json': { schema: OtherCostMinimalResponseSchema } },
}

const ProcurementIndexResponseResponse = {
  description: '仕入一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          procurements: z.array(ProcurementDigestSchema),
          meta: PaginationMetaSchema,
        })
        .openapi({ required: ['procurements', 'meta'] }),
    },
  },
}

const ProcurementCreateResponseResponse = {
  description: '仕入登録のレスポンス',
  content: { 'application/json': { schema: ProcurementMinimalResponseSchema } },
}

const ProcurementUpdateResponseResponse = {
  description: '仕入更新のレスポンス',
  content: { 'application/json': { schema: ProcurementMinimalResponseSchema } },
}

const ProcurementCancellationResponseResponse = {
  description: '仕入取消のレスポンス',
  content: { 'application/json': { schema: ProcurementMinimalResponseSchema } },
}

const AdvanceReceiptIndexResponseResponse = {
  description: '前受金一覧のレスポンス',
  content: {
    'application/json': {
      schema: z
        .strictObject({
          advance_receipts: z
            .array(AdvanceReceiptDigestSchema)
            .openapi({ description: '前受金一覧' }),
          meta: PaginationMetaSchema.openapi({ description: 'ページネーション情報' }),
        })
        .openapi({ required: ['advance_receipts', 'meta'] }),
    },
  },
}

const AdvanceReceiptCreateResponseResponse = {
  description: '前受金登録のレスポンス',
  content: { 'application/json': { schema: AdvanceReceiptMinimalResponseSchema } },
}

const AdvanceReceiptUpdateResponseResponse = {
  description: '前受金更新のレスポンス',
  content: { 'application/json': { schema: AdvanceReceiptMinimalResponseSchema } },
}

const AdvanceReceiptCancelResponseResponse = {
  description: '前受金取消のレスポンス',
  content: { 'application/json': { schema: AdvanceReceiptMinimalResponseSchema } },
}

const AdvanceReceiptReductionResponseResponse = {
  description: '前受金取崩のレスポンス',
  content: { 'application/json': { schema: AdvanceReceiptReductionResultSchema } },
}

const AdvanceReceiptPeriodicReductionResponseResponse = {
  description: '前受金取崩（定期売上登録）のレスポンス',
  content: { 'application/json': { schema: AdvanceReceiptPeriodicReductionResultSchema } },
}

const CompanyIdParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(1n).max(9223372036854776000n))
  .openapi({
    param: {
      name: 'company_id',
      in: 'query',
      required: true,
      description: '事業所ID',
      schema: {
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        example: 1,
      },
    },
    example: 1,
  })

const StartBusinessDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_business_date',
      description: '案件登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date' },
    },
  })

const EndBusinessDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_business_date',
      description: '案件登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date' },
    },
  })

const StartLastUpdatedDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '案件更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndLastUpdatedDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '案件更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const SalesProgressionIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().length(26).openapi({ example: '01K35WX4YTCRD5KG58GGWEV8JT' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'sales_progression_ids[]',
      description: '受注確度ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          maxLength: 26,
          minLength: 26,
          example: '01K35WX4YTCRD5KG58GGWEV8JT',
        },
      },
    },
  })

const BusinessPhaseIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().length(26).openapi({ example: '01K35WX4YTCRD5KG58GGWEV8JT' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'business_phase_ids[]',
      description: '案件フェーズID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          maxLength: 26,
          minLength: 26,
          example: '01K35WX4YTCRD5KG58GGWEV8JT',
        },
      },
    },
  })

const ChargeEmployeeIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 1001,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'charge_employee_ids[]',
      description:
        '社内担当者の従業員ID\n\ncharge_member_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 1001,
        },
      },
    },
  })

const ChargeMemberIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().length(26).openapi({ example: '01JPP4FD1CVQWCDSWA90VE1ZTM' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'charge_member_ids[]',
      description:
        '社内担当者のメンバーID\n\ncharge_employee_ids[] と同時に指定した場合は AND 条件となり、意図した検索結果になりません。',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          maxLength: 26,
          minLength: 26,
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        },
      },
    },
  })

const CustomerIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'customer_ids[]',
      description: '顧客の取引先ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        },
      },
    },
  })

const CodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'code',
      description: '案件コードで絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'B-0000000003' },
    },
    example: 'B-0000000003',
  })

const CanceledParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      name: 'canceled',
      description: '取消状態',
      in: 'query',
      required: false,
      schema: { type: 'boolean', default: false },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      description: '取得レコードの件数（デフォルト：20, 最小：1, 最大：100）',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100, default: 20 },
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(2147483647),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      description: '取得レコードのオフセット（デフォルト：0）',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 2147483647, default: 0 },
    },
  })

const TypeParamsSchema = z
  .enum(['procurement', 'external_procurement', 'other_cost'])
  .exactOptional()
  .openapi({
    param: {
      name: 'type',
      description:
        '原価種別 (仕入: procurement, 外部仕入: external_procurement, その他原価: other_cost)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['procurement', 'external_procurement', 'other_cost'],
        example: 'procurement',
      },
    },
    example: 'procurement',
  })

const StartAmountExcludingTaxParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(-999999999999n).max(999999999999n))
  .exactOptional()
  .openapi({
    param: {
      name: 'start_amount_excluding_tax',
      description: '金額(税抜):下限',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        format: 'int64',
        example: 100,
        maximum: 999999999999,
        minimum: -999999999999,
      },
    },
    example: 100,
  })

const EndAmountExcludingTaxParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(-999999999999n).max(999999999999n))
  .exactOptional()
  .openapi({
    param: {
      name: 'end_amount_excluding_tax',
      description: '金額(税抜):上限',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        format: 'int64',
        example: 1000,
        maximum: 999999999999,
        minimum: -999999999999,
      },
    },
    example: 1000,
  })

const StartDatePeriodParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_date_period',
      description: '発生予定期間:開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-04-01' },
    },
    example: '2025-04-01',
  })

const EndDatePeriodParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_date_period',
      description: '発生予定期間:終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-06-30' },
    },
    example: '2025-06-30',
  })

const MasterItemIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().length(26).openapi({ example: '01JPP4FD1CVQWCDSWA90VE1ZTM' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'master_item_ids[]',
      description: '商品ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          minLength: 26,
          maxLength: 26,
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        },
      },
    },
  })

const StartQuantityParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(-99999999n).max(99999999n))
  .exactOptional()
  .openapi({
    param: {
      name: 'start_quantity',
      description: '数量:下限',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        format: 'int64',
        maximum: 99999999,
        minimum: -99999999,
        example: 1,
      },
    },
    example: 1,
  })

const EndQuantityParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(-99999999n).max(99999999n))
  .exactOptional()
  .openapi({
    param: {
      name: 'end_quantity',
      description: '数量:上限',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        format: 'int64',
        maximum: 99999999,
        minimum: -99999999,
        example: 100,
      },
    },
    example: 100,
  })

const StartUnitPriceParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(-999999999999n).max(999999999999n))
  .exactOptional()
  .openapi({
    param: {
      name: 'start_unit_price',
      description: '単価:下限',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        format: 'int64',
        maximum: 999999999999,
        minimum: -999999999999,
        example: 100,
      },
    },
    example: 100,
  })

const EndUnitPriceParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64().min(-999999999999n).max(999999999999n))
  .exactOptional()
  .openapi({
    param: {
      name: 'end_unit_price',
      description: '単価:上限',
      in: 'query',
      required: false,
      schema: {
        type: 'integer',
        format: 'int64',
        maximum: 999999999999,
        minimum: -999999999999,
        example: 10000,
      },
    },
    example: 10000,
  })

const ReportingSectionIdsParamsSchema = z
  .array(
    z
      .preprocess((val) => {
        if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
          return val
        if (/^-?\d+$/.test(val)) return BigInt(val)
        const num = Number(val)
        return Number.isSafeInteger(num) ? BigInt(num) : val
      }, z.int64().min(1n).max(9223372036854776000n))
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        example: 67890,
      }),
  )
  .openapi({
    param: {
      name: 'reporting_section_ids[]',
      description: '担当部門ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        allOf: [
          {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
              minimum: 1,
              maximum: 9223372036854776000,
              example: 67890,
            },
          },
        ],
      },
    },
  })
  .exactOptional()

const SupplierIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 1001,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'supplier_ids[]',
      description: '仕入先の取引先ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 1001,
        },
      },
    },
  })

const PaymentPartnerIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 1002,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'payment_partner_ids[]',
      description: '支払先の取引先ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 1002,
        },
      },
    },
  })

const AccountingReportingSectionIdsParamsSchema = z
  .array(
    z
      .preprocess((val) => {
        if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
          return val
        if (/^-?\d+$/.test(val)) return BigInt(val)
        const num = Number(val)
        return Number.isSafeInteger(num) ? BigInt(num) : val
      }, z.int64().min(1n).max(9223372036854776000n))
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 9223372036854776000,
        example: 67890,
      }),
  )
  .openapi({
    param: {
      name: 'accounting_reporting_section_ids[]',
      description: '会計計上部門ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        allOf: [
          {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
              minimum: 1,
              maximum: 9223372036854776000,
              example: 67890,
            },
          },
        ],
      },
    },
  })
  .exactOptional()

const ItemTagIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 2001,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'item_tag_ids[]',
      description: '会計品目タグID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 2001,
        },
      },
    },
  })

const SegmentTag_1IdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'segment_tag_1_ids[]',
      description: 'セグメントタグ1 ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        },
      },
    },
  })

const SegmentTag_2IdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'segment_tag_2_ids[]',
      description: 'セグメントタグ2 ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        },
      },
    },
  })

const SegmentTag_3IdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(
      z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(9223372036854776000n))
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        }),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'segment_tag_3_ids[]',
      description: 'セグメントタグ3 ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'integer',
          format: 'int64',
          minimum: 1,
          maximum: 9223372036854776000,
          example: 12345,
        },
      },
    },
  })

const BusinessIdsParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().length(26).openapi({ example: '01JPP4FD1CVQWCDSWA90VE1ZTM' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'business_ids[]',
      description: '案件ID',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          minLength: 26,
          maxLength: 26,
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        },
      },
    },
  })

const CostBudgetNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cost_budget_no',
      description: '原価予算No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'CB-2024-0001' },
    },
    example: 'CB-2024-0001',
  })

const StartLastUpdatedDate_2ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndLastUpdatedDate_2ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const PurchaseOrderStartRegisteredDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_registered_date',
      description: '発注登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const PurchaseOrderEndRegisteredDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_registered_date',
      description: '発注登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const PurchaseOrderStartLastUpdatedDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '発注更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const PurchaseOrderEndLastUpdatedDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '発注更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartPurchaseOrderDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_purchase_order_date',
      description: '発注日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndPurchaseOrderDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_purchase_order_date',
      description: '発注日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const PurchaseOrderNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'purchase_order_no',
      description: '発注No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'PO-2024-0001' },
    },
    example: 'PO-2024-0001',
  })

const PaymentStatusParamsSchema = z
  .enum(['none', 'not_settled', 'partially_settled', 'settled'])
  .exactOptional()
  .openapi({
    param: {
      name: 'payment_status',
      description:
        '支払ステータス (なし: none, 未決済: not_settled, 一部決済済: partially_settled, 決済済: settled)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['none', 'not_settled', 'partially_settled', 'settled'],
        example: 'not_settled',
      },
    },
    example: 'not_settled',
  })

const IssuedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'issued',
      description: '送付ステータス',
      in: 'query',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const ProcurementStatusParamsSchema = z
  .enum(['not_sold', 'partially_sold', 'sold'])
  .exactOptional()
  .openapi({
    param: {
      name: 'procurement_status',
      description: '仕入ステータス (未計上: not_sold, 一部計上済: partially_sold, 計上済: sold)',
      in: 'query',
      required: false,
      schema: { type: 'string', enum: ['not_sold', 'partially_sold', 'sold'], example: 'not_sold' },
    },
    example: 'not_sold',
  })

const StartRegisteredDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_registered_date',
      description: '見積登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndRegisteredDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_registered_date',
      description: '見積登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartLastUpdatedDate_3ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '見積更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndLastUpdatedDate_3ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '見積更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartQuotationDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_quotation_date',
      description: '見積日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndQuotationDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_quotation_date',
      description: '見積日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const QuotationNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'quotation_no',
      description: '見積No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'Q-2024-0001' },
    },
    example: 'Q-2024-0001',
  })

const StartGrossProfitAmountExcludingTaxParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64().min(-999999999999).max(999999999999),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'start_gross_profit_amount_excluding_tax',
      description: '粗利額計(税抜)で絞込：下限',
      in: 'query',
      required: false,
      schema: {
        type: 'number',
        format: 'double',
        maximum: 999999999999,
        minimum: -999999999999,
        example: 10000,
      },
    },
    example: 10000,
  })

const EndGrossProfitAmountExcludingTaxParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64().min(-999999999999).max(999999999999),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'end_gross_profit_amount_excluding_tax',
      description: '粗利額計(税抜)で絞込：上限',
      in: 'query',
      required: false,
      schema: {
        type: 'number',
        format: 'double',
        maximum: 999999999999,
        minimum: -999999999999,
        example: 500000,
      },
    },
    example: 500000,
  })

const StartGrossProfitRateParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64().min(-99999.999).max(99999.999),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'start_gross_profit_rate',
      description: '粗利率(%)で絞込：下限',
      in: 'query',
      required: false,
      schema: {
        type: 'number',
        format: 'double',
        maximum: 99999.999,
        minimum: -99999.999,
        example: 10,
      },
    },
    example: 10,
  })

const EndGrossProfitRateParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64().min(-99999.999).max(99999.999),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'end_gross_profit_rate',
      description: '粗利率(%)で絞込：上限',
      in: 'query',
      required: false,
      schema: {
        type: 'number',
        format: 'double',
        maximum: 99999.999,
        minimum: -99999.999,
        example: 50,
      },
    },
    example: 50,
  })

const QuotationStatusParamsSchema = z
  .enum(['unanswered', 'order_received', 'order_lost'])
  .exactOptional()
  .openapi({
    param: {
      name: 'quotation_status',
      description: '見積ステータス (未受注: unanswered, 受注済: order_received, 失注: order_lost)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['unanswered', 'order_received', 'order_lost'],
        example: 'unanswered',
      },
    },
    example: 'unanswered',
  })

const BillingStatusParamsSchema = z
  .enum(['not_billed', 'partially_billed', 'billed', 'none'])
  .exactOptional()
  .openapi({
    param: {
      name: 'billing_status',
      description:
        '請求書送付ステータス (未請求: not_billed, 一部請求済: partially_billed, 請求済: billed, なし: none)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['not_billed', 'partially_billed', 'billed', 'none'],
        example: 'not_billed',
      },
    },
    example: 'not_billed',
  })

const StartSalesOrderDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_sales_order_date',
      description: '受注日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndSalesOrderDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_sales_order_date',
      description: '受注日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const SalesOrderNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'sales_order_no',
      description: '受注No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'SO-2024-0001' },
    },
    example: 'SO-2024-0001',
  })

const StartRegisteredDate_2ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_registered_date',
      description: '登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndRegisteredDate_2ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_registered_date',
      description: '登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartDeliveryDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_delivery_date',
      description: '納品日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndDeliveryDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_delivery_date',
      description: '納品日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartAcceptanceDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_acceptance_date',
      description: '検収日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndAcceptanceDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_acceptance_date',
      description: '検収日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const DeliveryNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'delivery_no',
      description: '納品No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'D-2024-0001' },
    },
    example: 'D-2024-0001',
  })

const DeliveryStatusParamsSchema = z
  .enum(['not_delivered', 'delivered'])
  .exactOptional()
  .openapi({
    param: {
      name: 'delivery_status',
      description: '納品ステータス (未納品: not_delivered, 納品済: delivered)',
      in: 'query',
      required: false,
      schema: { type: 'string', enum: ['not_delivered', 'delivered'], example: 'not_delivered' },
    },
    example: 'not_delivered',
  })

const StartRegisteredDate_3ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_registered_date',
      description: '売上登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndRegisteredDate_3ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_registered_date',
      description: '売上登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const StartLastUpdatedDate_4ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '売上更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndLastUpdatedDate_4ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '売上更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const StartRevenueRecognitionDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_revenue_recognition_date',
      description: '売上日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndRevenueRecognitionDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_revenue_recognition_date',
      description: '売上日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const SalesNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'sales_no',
      description: '売上No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'S-2024-0001' },
    },
    example: 'S-2024-0001',
  })

const BillingStatus_2ParamsSchema = z
  .enum(['not_billed', 'billed', 'none'])
  .exactOptional()
  .openapi({
    param: {
      name: 'billing_status',
      description: '請求書送付ステータス (未送付: not_billed, 送付済: billed, 対象外: none)',
      in: 'query',
      required: false,
      schema: { type: 'string', enum: ['not_billed', 'billed', 'none'], example: 'not_billed' },
    },
    example: 'not_billed',
  })

const CollectionStatusParamsSchema = z
  .enum(['not_settled', 'partially_settled', 'settled', 'none'])
  .exactOptional()
  .openapi({
    param: {
      name: 'collection_status',
      description:
        '決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['not_settled', 'partially_settled', 'settled', 'none'],
        example: 'not_settled',
      },
    },
    example: 'not_settled',
  })

const StartRecurrencePeriodParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_recurrence_period',
      description:
        '繰り返し期間で絞込：指定期間の開始日。この日付以降も有効な（繰り返し終了日がこの日付以降の）定期売上を返す(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndRecurrencePeriodParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_recurrence_period',
      description:
        '繰り返し期間で絞込：指定期間の終了日。この日付までに開始している（繰り返し開始日がこの日付以前の）定期売上を返す(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const StartRecordedCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(2147483647),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'start_recorded_count',
      description: '計上済み回数で絞込：下限',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 2147483647, example: 0 },
    },
    example: 0,
  })

const EndRecordedCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(2147483647),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'end_recorded_count',
      description: '計上済み回数で絞込：上限',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 2147483647, example: 12 },
    },
    example: 12,
  })

const StartTotalScheduleCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(2147483647),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'start_total_schedule_count',
      description: '売上予定の総回数で絞込：下限',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 2147483647, example: 0 },
    },
    example: 0,
  })

const EndTotalScheduleCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0).max(2147483647),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'end_total_schedule_count',
      description: '売上予定の総回数で絞込：上限',
      in: 'query',
      required: false,
      schema: { type: 'integer', format: 'int32', minimum: 0, maximum: 2147483647, example: 12 },
    },
    example: 12,
  })

const StartNextSalesOnParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_next_sales_on',
      description: '次回売上予定日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndNextSalesOnParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_next_sales_on',
      description: '次回売上予定日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const StartLastRevenueRecognitionDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_revenue_recognition_date',
      description: '最終計上日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-01-01' },
    },
    example: '2024-01-01',
  })

const EndLastRevenueRecognitionDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_revenue_recognition_date',
      description: '最終計上日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2024-12-31' },
    },
    example: '2024-12-31',
  })

const PeriodicSalesNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'periodic_sales_no',
      description: '定期売上No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'PS-2024-0001' },
    },
    example: 'PS-2024-0001',
  })

const PeriodicSalesIdParamsSchema = z
  .string()
  .length(26)
  .exactOptional()
  .openapi({
    param: {
      name: 'periodic_sales_id',
      description: '定期売上IDで絞込',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        minLength: 26,
        maxLength: 26,
        example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
      },
    },
    example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
  })

const StartScheduledDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_scheduled_date',
      description: '売上予定日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndScheduledDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_scheduled_date',
      description: '売上予定日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-12-31' },
    },
    example: '2025-12-31',
  })

const StartBillsOnParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_bills_on',
      description: '請求予定日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndBillsOnParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_bills_on',
      description: '請求予定日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-12-31' },
    },
    example: '2025-12-31',
  })

const StartCollectsOnParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_collects_on',
      description: '入金予定日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndCollectsOnParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_collects_on',
      description: '入金予定日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-12-31' },
    },
    example: '2025-12-31',
  })

const StartLastUpdatedDate_5ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '変更日時で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndLastUpdatedDate_5ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '変更日時で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-12-31' },
    },
    example: '2025-12-31',
  })

const OtherCostNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'other_cost_no',
      description: 'その他原価No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'OC-2024-0001' },
    },
    example: 'OC-2024-0001',
  })

const StartRegisteredDate_4ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_registered_date',
      description: '仕入登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndRegisteredDate_4ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_registered_date',
      description: '仕入登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartLastUpdatedDate_6ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '仕入更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndLastUpdatedDate_6ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '仕入更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartProcurementDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_procurement_date',
      description: '仕入日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndProcurementDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_procurement_date',
      description: '仕入日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const BusinessIds_2ParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.string().length(26).openapi({ example: '01JPP4FD1CVQWCDSWA90VE1ZTM' })),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'business_ids[]',
      description: '案件ID<br>\n※ 複数の案件が紐づく仕入は本パラメータでヒットしません',
      in: 'query',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: {
          type: 'string',
          minLength: 26,
          maxLength: 26,
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        },
      },
    },
  })

const ProcurementNoParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'procurement_no',
      description: '仕入No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'PR-2024-0001' },
    },
    example: 'PR-2024-0001',
  })

const PaymentStatus_2ParamsSchema = z
  .enum(['not_settled', 'partially_settled', 'settled', 'none'])
  .exactOptional()
  .openapi({
    param: {
      name: 'payment_status',
      description:
        '決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 対象外: none)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['not_settled', 'partially_settled', 'settled', 'none'],
        example: 'not_settled',
      },
    },
    example: 'not_settled',
  })

const AdvanceReceiptNoParamsSchema = z
  .string()
  .max(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'advance_receipt_no',
      description: '前受金No.で絞込',
      in: 'query',
      required: false,
      schema: { type: 'string', maxLength: 100, example: 'AR211212-00001' },
    },
    example: 'AR211212-00001',
  })

const StartAdvanceReceiptDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_advance_receipt_date',
      description: '前受金発生日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndAdvanceReceiptDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_advance_receipt_date',
      description: '前受金発生日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartRegisteredDate_5ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_registered_date',
      description: '前受金登録日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndRegisteredDate_5ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_registered_date',
      description: '前受金登録日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const StartLastUpdatedDate_7ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'start_last_updated_date',
      description: '前受金更新日で絞込：開始日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-01-01' },
    },
    example: '2025-01-01',
  })

const EndLastUpdatedDate_7ParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      name: 'end_last_updated_date',
      description: '前受金更新日で絞込：終了日(yyyy-mm-dd)',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date', example: '2025-05-01' },
    },
    example: '2025-05-01',
  })

const CollectionStatus_2ParamsSchema = z
  .enum(['not_settled', 'partially_settled', 'settled', 'invalidated', 'none'])
  .exactOptional()
  .openapi({
    param: {
      name: 'collection_status',
      description:
        '決済ステータス (未決済: not_settled, 一部決済済: partially_settled, 決済済: settled, 無効: invalidated, 対象外: none)',
      in: 'query',
      required: false,
      schema: {
        type: 'string',
        enum: ['not_settled', 'partially_settled', 'settled', 'invalidated', 'none'],
        example: 'not_settled',
      },
    },
    example: 'not_settled',
  })

const BusinessCreateRequestRequestBody = {
  description: '案件登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(BusinessRequestBaseSchema).and(
        z.strictObject({}).openapi({ required: ['name'] }),
      ),
    },
  },
}

const BusinessUpdateRequestRequestBody = {
  description: '案件更新リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema.and(BusinessRequestBaseSchema) } },
}

const BusinessCancelRequestRequestBody = {
  description: '案件取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const BusinessCloseRequestRequestBody = {
  description: '案件ロックリクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const BusinessReopenRequestRequestBody = {
  description: '案件ロック解除リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const CostBudgetCreateRequestRequestBody = {
  description: '原価予算登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(CostBudgetCreateRequestDetailSchema),
      example: {
        company_id: 1,
        type: 'procurement',
        period_from_date: '2025-04-01',
        period_to_date: '2025-06-30',
        quantity: 10,
        unit_price: 1000,
        deal_line_type_id: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        master_item_id: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        supplier_id: 1001,
        memo: '備考テキスト',
      },
    },
  },
}

const CostBudgetUpdateRequestRequestBody = {
  description: '原価予算更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(CostBudgetRequestBaseSchema)
        .and(BasicCostBudgetRequestPropertiesSchema)
        .and(ProcurementCostBudgetRequestPropertiesSchema),
      example: {
        company_id: 1,
        period_from_date: '2025-04-01',
        period_to_date: '2025-06-30',
        quantity: 20,
        unit_price: 1500,
        memo: '更新後の備考',
      },
    },
  },
}

const CostBudgetCancelRequestRequestBody = {
  description: '原価予算取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const PurchaseOrderCreateRequestRequestBody = {
  description: '発注登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({})
          .openapi({
            required: [
              'purchase_order_date',
              'supplier_id',
              'payment_method_type',
              'payment_partner_id',
              'lines',
            ],
          }),
      ).and(PurchaseOrderRequestBaseSchema),
    },
  },
  required: true,
}

const PurchaseOrderUpdateRequestRequestBody = {
  description: '発注更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            branch_no: z
              .int32()
              .nullable()
              .exactOptional()
              .openapi({ description: '枝番', example: 1 }),
          })
          .openapi({ required: [] }),
      ).and(PurchaseOrderRequestBaseSchema),
    },
  },
  required: true,
}

const PurchaseOrderCancellationRequestRequestBody = {
  description: '発注取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema } },
}

const QuotationCreateRequestRequestBody = {
  description: '見積登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z.strictObject({}).openapi({ required: ['quotation_date', 'customer_id', 'lines'] }),
      ).and(QuotationRequestBaseSchema),
    },
  },
}

const QuotationUpdateRequestRequestBody = {
  description: '見積更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(QuotationRequestBaseSchema).and(
        z
          .strictObject({
            branch_no: z
              .int32()
              .nullable()
              .exactOptional()
              .openapi({ description: '枝番', example: 1 }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const QuotationCancellationRequestRequestBody = {
  description: '見積取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema } },
}

const SalesOrderCreateRequestRequestBody = {
  description: '受注登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(SalesOrderRequestBaseSchema).and(
        z
          .strictObject({})
          .openapi({
            required: [
              'sales_order_date',
              'customer_id',
              'billing_creating_method_type',
              'billing_partner_id',
              'collecting_partner_id',
              'collection_method_type',
              'lines',
            ],
          }),
      ),
    },
  },
}

const SalesOrderUpdateRequestRequestBody = {
  description: '受注更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(SalesOrderRequestBaseSchema).and(
        z
          .strictObject({
            delivery_template_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .exactOptional()
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '納品書テンプレートID',
                example: 10001,
              }),
            invoice_template_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .exactOptional()
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '請求書テンプレートID',
                example: 10002,
              }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SalesOrderCancelRequestRequestBody = {
  description: '受注取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const DeliveryCreateRequestRequestBody = {
  description: '納品登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            sales_order_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
          })
          .openapi({
            required: [
              'delivery_date',
              'customer_id',
              'billing_partner_id',
              'billing_creating_method_type',
              'collecting_partner_id',
              'collection_method_type',
              'lines',
            ],
          }),
      ).and(DeliveryRequestBaseSchema),
    },
  },
}

const DeliveryUpdateRequestRequestBody = {
  description: '納品更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(DeliveryRequestBaseSchema).and(
        z
          .strictObject({
            branch_no: z
              .int32()
              .nullable()
              .exactOptional()
              .openapi({ description: '枝番', example: 1 }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const DeliveryCancelRequestRequestBody = {
  description: '納品取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const SaleCreateRequestRequestBody = {
  description: '売上登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            sales_order_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            delivery_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '納品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            billing_creating_method_type: BillingCreatingMethodTypeSchema,
          })
          .openapi({
            required: [
              'revenue_recognition_date',
              'customer_id',
              'billing_partner_id',
              'collecting_partner_id',
              'collection_method_type',
              'billing_creating_method_type',
              'lines',
            ],
          }),
      ).and(SaleRequestBaseSchema),
    },
  },
}

const SaleUpdateRequestRequestBody = {
  description: '売上更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(SaleRequestBaseSchema).and(
        z
          .strictObject({
            invoice_template_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .exactOptional()
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '請求書テンプレートID',
                example: 10002,
              }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const SaleCancelRequestRequestBody = {
  description: '売上取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const PeriodicSaleCreateRequestRequestBody = {
  description: '定期売上登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({})
          .openapi({
            required: [
              'customer_id',
              'recurrence_rule',
              'billing_partner_id',
              'billing_creating_method_type',
              'collecting_partner_id',
              'collection_method_type',
              'lines',
            ],
          }),
      ).and(PeriodicSaleRequestBaseSchema),
    },
  },
}

const PeriodicSaleUpdateRequestRequestBody = {
  description: '定期売上更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(PeriodicSaleRequestBaseSchema).and(
        z
          .strictObject({
            invoice_template_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .exactOptional()
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '請求書テンプレートID',
                example: 10002,
              }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const PeriodicSaleCancelRequestRequestBody = {
  description: '定期売上取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
  required: true,
}

const SalesScheduleUpdateRequestRequestBody = {
  description: '売上予定更新リクエスト',
  content: {
    'application/json': { schema: WithCompanyIdSchema.and(SalesScheduleUpdateParamsSchema) },
  },
  required: true,
}

const SalesScheduleActualizationRequestRequestBody = {
  description: '売上予定計上リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const OtherCostCreateRequestRequestBody = {
  description: 'その他原価登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            business_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            amount_excluding_tax: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(-999999999999n).max(999999999999n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: -999999999999,
                maximum: 999999999999,
                description: '税抜金額',
                example: 10000,
              }),
            incurred_date: z.iso.date().openapi({ description: '発生日', example: '2025-04-01' }),
            memo: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'メモ', example: 'その他原価メモ' }),
          })
          .openapi({ required: ['amount_excluding_tax', 'incurred_date'] }),
      ),
    },
  },
}

const OtherCostUpdateRequestRequestBody = {
  description: 'その他原価更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            business_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            amount_excluding_tax: z
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
                description: '税抜金額',
                example: 10000,
              }),
            incurred_date: z.iso
              .date()
              .exactOptional()
              .openapi({ description: '発生日', example: '2025-04-01' }),
            memo: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'メモ', example: 'その他原価メモ' }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const OtherCostRestorationRequestRequestBody = {
  description: 'その他原価復元リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema } },
}

const OtherCostCancellationRequestRequestBody = {
  description: 'その他原価取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema } },
}

const ProcurementCreateRequestRequestBody = {
  description: '仕入登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({})
          .openapi({
            required: [
              'procurement_date',
              'supplier_id',
              'payments_on',
              'payment_method_type',
              'payment_partner_id',
              'lines',
            ],
          }),
      ).and(ProcurementRequestBaseSchema),
    },
  },
}

const ProcurementUpdateRequestRequestBody = {
  description: '仕入更新リクエスト',
  content: {
    'application/json': { schema: WithCompanyIdSchema.and(ProcurementUpdateRequestBodySchema) },
  },
}

const ProcurementCancellationRequestRequestBody = {
  description: '仕入取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema } },
}

const AdvanceReceiptCreateRequestRequestBody = {
  description: '前受金登録リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({})
          .openapi({
            required: [
              'account_item_id',
              'advance_receipt_date',
              'billing_partner_id',
              'bills_on',
              'business_id',
              'collecting_partner_id',
              'collection_method_type',
              'collects_on',
              'customer_id',
              'lines',
            ],
          }),
      ).and(AdvanceReceiptRequestBaseSchema),
    },
  },
}

const AdvanceReceiptUpdateRequestRequestBody = {
  description: '前受金更新リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            account_item_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .exactOptional()
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '勘定科目ID',
                example: 12345,
              }),
            accounting_reporting_section_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '会計計上部門ID<br>\n※ 親部門のIDは指定できません',
                example: 67890,
              }),
            advance_receipt_date: z.iso
              .date()
              .exactOptional()
              .openapi({ description: '前受金発生日', example: '2024-01-31' }),
            business_id: z
              .string()
              .length(26)
              .exactOptional()
              .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
            charge_member_id: ChargeMemberIdSchema.exactOptional(),
            customer_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .exactOptional()
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '顧客の取引先ID',
                example: 1001,
              }),
            customer_order_no: z
              .string()
              .max(100)
              .nullable()
              .exactOptional()
              .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
            internal_memo: InternalMemoSchema.exactOptional(),
            internal_subject: z
              .string()
              .max(100)
              .nullable()
              .exactOptional()
              .openapi({ description: '前受金タイトル', example: '前受金サンプル案件' }),
            item_tag_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '会計品目タグID',
                example: 2001,
              }),
            lines: z
              .array(AdvanceReceiptBasicLineParamsSchema)
              .min(1)
              .max(500)
              .exactOptional()
              .openapi({ description: '明細リスト' }),
            memo_tags: z
              .array(
                z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64().min(1n).max(9223372036854776000n),
                  )
                  .openapi({
                    type: 'integer',
                    format: 'int64',
                    minimum: 1,
                    maximum: 9223372036854776000,
                    example: 3001,
                  }),
              )
              .nullable()
              .exactOptional()
              .openapi({ description: 'メモタグID' }),
            reporting_section_id: ReportingSectionIdSchema.exactOptional(),
            segment_tag_1_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: 'セグメントタグ1のID',
                example: 12345,
              }),
            segment_tag_2_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: 'セグメントタグ2のID',
                example: 12345,
              }),
            segment_tag_3_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .nullable()
              .exactOptional()
              .openapi({
                type: ['integer', 'null'],
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: 'セグメントタグ3のID',
                example: 12345,
              }),
          })
          .openapi({ required: [] }),
      ),
    },
  },
}

const AdvanceReceiptCancelRequestRequestBody = {
  description: '前受金取消リクエスト',
  content: { 'application/json': { schema: WithCompanyIdSchema, example: { company_id: 1 } } },
}

const AdvanceReceiptReductionRequestRequestBody = {
  description: '前受金取崩（売上登録）リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            revenue_recognition_date: z.iso
              .date()
              .openapi({ description: '売上日', example: '2024-01-31' }),
            customer_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '顧客の取引先ID',
                example: 1001,
              }),
            business_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            subject: z
              .string()
              .max(100)
              .nullable()
              .exactOptional()
              .openapi({ description: '売上タイトル', example: '売上サンプル案件' }),
            customer_order_no: z
              .string()
              .max(100)
              .nullable()
              .exactOptional()
              .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
            charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
            charge_member_id: ChargeMemberIdSchema.exactOptional(),
            reporting_section_id: ReportingSectionIdSchema.exactOptional(),
            internal_memo: InternalMemoSchema.exactOptional(),
            sales_order_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '受注ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            delivery_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '納品ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            lines: z
              .array(AdvanceReceiptReductionLineParamsSchema)
              .min(1)
              .max(500)
              .openapi({ description: '明細リスト' }),
          })
          .openapi({ required: ['revenue_recognition_date', 'customer_id', 'lines'] }),
      ),
    },
  },
}

const AdvanceReceiptPeriodicReductionRequestRequestBody = {
  description: '前受金取崩（定期売上登録）リクエスト',
  content: {
    'application/json': {
      schema: WithCompanyIdSchema.and(
        z
          .strictObject({
            customer_id: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n).max(9223372036854776000n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                maximum: 9223372036854776000,
                description: '顧客の取引先ID',
                example: 1001,
              }),
            recurrence_rule: RecurrenceRuleSchema,
            business_id: z
              .string()
              .length(26)
              .nullable()
              .exactOptional()
              .openapi({ description: '案件ID', example: '01JPP4FD1CVQWCDSWA90VE1ZTM' }),
            subject: z
              .string()
              .max(100)
              .nullable()
              .exactOptional()
              .openapi({ description: '定期売上タイトル', example: 'サンプル案件定期売上の件' }),
            customer_order_no: z
              .string()
              .max(100)
              .nullable()
              .exactOptional()
              .openapi({ description: '顧客注文No.', example: 'C-PO-20211212-001' }),
            charge_employee_id: ChargeEmployeeIdSchema.exactOptional(),
            charge_member_id: ChargeMemberIdSchema.exactOptional(),
            reporting_section_id: ReportingSectionIdSchema.exactOptional(),
            internal_memo: InternalMemoSchema.exactOptional(),
            lines: z
              .array(AdvanceReceiptReductionLineParamsSchema)
              .min(1)
              .openapi({ description: '明細リスト' }),
          })
          .openapi({ required: ['customer_id', 'recurrence_rule', 'lines'] }),
      ),
    },
  },
}

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.secure.freee.co.jp/public_api/authorize',
      tokenUrl: 'https://accounts.secure.freee.co.jp/public_api/token',
      scopes: { write: 'データの書き込み', read: 'データの読み取り' },
    },
  },
}

export const getBusinessesRoute = createRoute({
  method: 'get',
  path: '/businesses',
  tags: ['businesses'],
  summary: '案件一覧',
  description:
    '<h2 id="">概要</h2>\n<p>案件の一覧を取得します。\n登録されている案件情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する案件のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_business_date : 案件登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_business_date : 案件登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 案件更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 案件更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>sales_progression_ids : 受注確度ID(複数指定可)</p>\n</li>\n<li>\n<p>business_phase_ids : 案件フェーズID(複数指定可)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>code : 案件コード</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_businesses',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_business_date: StartBusinessDateParamsSchema,
      end_business_date: EndBusinessDateParamsSchema,
      start_last_updated_date: StartLastUpdatedDateParamsSchema,
      end_last_updated_date: EndLastUpdatedDateParamsSchema,
      'sales_progression_ids[]': SalesProgressionIdsParamsSchema,
      'business_phase_ids[]': BusinessPhaseIdsParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      code: CodeParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: BusinessIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postBusinessesRoute = createRoute({
  method: 'post',
  path: '/businesses',
  tags: ['businesses'],
  summary: '案件登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい案件を登録します。\n顧客との商談や受注案件を管理するための案件情報を登録できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>name : 案件名称</p>\n</li>\n<li>\n<p>company_id : 事業所ID</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>code : 案件コード</p>\n</li>\n<li>\n<p>business_date : 案件登録日</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>prospect_sales_order : 受注見込</p>\n</li>\n<li>\n<p>sales_progression_id : 受注確度ID</p>\n</li>\n<li>\n<p>scheduled_completion_date : 完了予定日</p>\n</li>\n<li>\n<p>completion_date : 完了日</p>\n</li>\n<li>\n<p>business_phase_id : 案件フェーズID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>common_business_id : 案件マスタID</p>\n</li>\n<li>\n<p>custom_fields : カスタム項目</p>\n</li>\n</ul>',
  operationId: 'create_business',
  request: { body: BusinessCreateRequestRequestBody },
  responses: {
    201: BusinessCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getBusinessesIdRoute = createRoute({
  method: 'get',
  path: '/businesses/{id}',
  tags: ['businesses'],
  summary: '案件詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの案件の詳細情報を取得します。\n案件の基本情報に加えて、粗利や売上情報などの詳細な集計情報も取得できます。\n</p>',
  operationId: 'get_business',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '案件ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: BusinessShowResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchBusinessesIdRoute = createRoute({
  method: 'patch',
  path: '/businesses/{id}',
  tags: ['businesses'],
  summary: '案件更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの案件を更新します。\n案件の基本情報、受注見込、完了予定日などを部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li><p>name : 案件名称</p></li>\n<li><p>code : 案件コード</p></li>\n<li><p>business_date : 案件登録日</p></li>\n<li><p>charge_employee_id : 社内担当者の従業員ID</p></li>\n<li><p>charge_member_id : 社内担当者のメンバーID</p></li>\n<li><p>customer_id : 顧客の取引先ID</p></li>\n<li><p>prospect_sales_order : 受注見込</p></li>\n<li><p>sales_progression_id : 受注確度ID</p></li>\n<li><p>scheduled_completion_date : 完了予定日</p></li>\n<li><p>completion_date : 完了日</p></li>\n<li><p>business_phase_id : 案件フェーズID</p></li>\n<li><p>reporting_section_id : 担当部門ID</p></li>\n<li><p>internal_memo : 社内メモ</p></li>\n<li><p>custom_fields : カスタム項目(指定した場合、既存のカスタム項目は全て削除され、新しいカスタム項目に置き換えられます)</p></li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<p>※custom_fieldsを指定した場合、リクエストに含まれないカスタム項目はnullとして扱われます。必須のカスタム項目が指定されていない場合はバリデーションエラーになります。</p>\n<p>※common_business_id（案件マスタID）はこのAPIでは更新できません。紐付け済みの案件に対して既存と異なる値を指定した場合はエラーになります。</p>',
  operationId: 'update_business',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '案件ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: BusinessUpdateRequestRequestBody,
  },
  responses: {
    200: BusinessUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postBusinessesIdCancellationRoute = createRoute({
  method: 'post',
  path: '/businesses/{id}/cancellation',
  tags: ['businesses'],
  summary: '案件取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの案件を取り消します。\n</p>',
  operationId: 'cancel_business',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '案件ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: BusinessCancelRequestRequestBody,
  },
  responses: {
    200: BusinessCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postBusinessesIdCloseRoute = createRoute({
  method: 'post',
  path: '/businesses/{id}/close',
  tags: ['businesses'],
  summary: '案件ロック',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの案件をロックします。\n</p>',
  operationId: 'close_business',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '案件ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: BusinessCloseRequestRequestBody,
  },
  responses: {
    200: BusinessCloseResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postBusinessesIdReopenRoute = createRoute({
  method: 'post',
  path: '/businesses/{id}/reopen',
  tags: ['businesses'],
  summary: '案件ロック解除',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの案件ロックを解除します。\n</p>',
  operationId: 'reopen_business',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '案件ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: BusinessReopenRequestRequestBody,
  },
  responses: {
    200: BusinessReopenResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getCostBudgetsRoute = createRoute({
  method: 'get',
  path: '/cost_budgets',
  tags: ['cost_budgets'],
  summary: '原価予算一覧',
  description:
    '<h2 id="">概要</h2>\n<p>原価予算の一覧を取得します。\n登録されている原価予算情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する原価予算のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li><p>type : 原価種別 (procurement, external_procurement, other_cost)</p></li>\n<li><p>start_amount_excluding_tax : 金額(税抜):下限</p></li>\n<li><p>end_amount_excluding_tax : 金額(税抜):上限</p></li>\n<li><p>start_date_period : 発生予定期間:開始日(yyyy-mm-dd)</p></li>\n<li><p>end_date_period : 発生予定期間:終了日(yyyy-mm-dd)</p></li>\n<li><p>master_item_ids : 商品ID(複数指定可)</p></li>\n<li><p>start_quantity : 数量:下限</p></li>\n<li><p>end_quantity : 数量:上限</p></li>\n<li><p>start_unit_price : 単価:下限</p></li>\n<li><p>end_unit_price : 単価:上限</p></li>\n<li><p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p></li>\n<li><p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p></li>\n<li><p>reporting_section_ids : 担当部門ID(複数指定可)</p></li>\n<li><p>supplier_ids : 仕入先の取引先ID(複数指定可)</p></li>\n<li><p>payment_partner_ids : 支払先の取引先ID(複数指定可)</p></li>\n<li><p>accounting_reporting_section_ids : 会計計上部門ID(複数指定可)</p></li>\n<li><p>item_tag_ids : 会計品目タグID(複数指定可)</p></li>\n<li><p>segment_tag_1_ids : セグメントタグ1 ID(複数指定可)</p></li>\n<li><p>segment_tag_2_ids : セグメントタグ2 ID(複数指定可)</p></li>\n<li><p>segment_tag_3_ids : セグメントタグ3 ID(複数指定可)</p></li>\n<li><p>business_ids : 案件ID(複数指定可)</p></li>\n<li><p>cost_budget_no : 原価予算No.</p></li>\n<li><p>start_last_updated_date : 更新日(絞り込み開始)</p></li>\n<li><p>end_last_updated_date : 更新日(絞り込み終了)</p></li>\n<li><p>canceled : 取消状態(デフォルト:false)</p></li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_cost_budgets',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      type: TypeParamsSchema,
      start_amount_excluding_tax: StartAmountExcludingTaxParamsSchema,
      end_amount_excluding_tax: EndAmountExcludingTaxParamsSchema,
      start_date_period: StartDatePeriodParamsSchema,
      end_date_period: EndDatePeriodParamsSchema,
      'master_item_ids[]': MasterItemIdsParamsSchema,
      start_quantity: StartQuantityParamsSchema,
      end_quantity: EndQuantityParamsSchema,
      start_unit_price: StartUnitPriceParamsSchema,
      end_unit_price: EndUnitPriceParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'reporting_section_ids[]': ReportingSectionIdsParamsSchema,
      'supplier_ids[]': SupplierIdsParamsSchema,
      'payment_partner_ids[]': PaymentPartnerIdsParamsSchema,
      'accounting_reporting_section_ids[]': AccountingReportingSectionIdsParamsSchema,
      'item_tag_ids[]': ItemTagIdsParamsSchema,
      'segment_tag_1_ids[]': SegmentTag_1IdsParamsSchema,
      'segment_tag_2_ids[]': SegmentTag_2IdsParamsSchema,
      'segment_tag_3_ids[]': SegmentTag_3IdsParamsSchema,
      'business_ids[]': BusinessIdsParamsSchema,
      cost_budget_no: CostBudgetNoParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_2ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_2ParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: CostBudgetIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postCostBudgetsRoute = createRoute({
  method: 'post',
  path: '/cost_budgets',
  tags: ['cost_budgets'],
  summary: '原価予算登録',
  description:
    '<h2 id="">概要</h2>\n<p>原価予算を新規登録します。\n<code>type</code> で原価種別を指定してください。<code>procurement</code>（仕入）はリクエストスキーマが異なります。<code>external_procurement</code>（外部仕入）と <code>other_cost</code>（その他原価）は同じリクエストスキーマを使用します。\n</p>\n<h2 id="_2">定義</h2>\n<h3 id="_3">全type共通フィールド</h3>\n<ul>\n<li><p>type (必須) : 原価種別 (procurement: 仕入, external_procurement: 外部仕入, other_cost: その他原価)</p></li>\n<li><p>period_from_date (必須) : 期間開始日</p></li>\n<li><p>period_to_date (必須) : 期間終了日。period_from_date と両方必須。</p></li>\n<li><p>business_id : 案件ID</p></li>\n<li><p>memo : 備考</p></li>\n<li><p>charge_employee_id : 社内担当者ID</p></li>\n<li><p>charge_member_id : 社内担当者のメンバーID</p></li>\n<li><p>reporting_section_id : 担当部門ID</p></li>\n</ul>\n<h3 id="_4">type=procurement 固有フィールド</h3>\n<ul>\n<li><p>quantity (必須) : 数量</p></li>\n<li><p>unit_price (必須) : 単価</p></li>\n<li><p>deal_line_type_id (必須) : 明細取引タイプID</p></li>\n<li><p>supplier_id : 仕入先ID</p></li>\n<li><p>payment_partner_id : 支払先ID</p></li>\n<li><p>uom_name : 単位</p></li>\n<li><p>master_item_id : 商品ID</p></li>\n<li><p>accounting_reporting_section_id : 会計計上部門ID</p></li>\n<li><p>item_tag_id : 会計品目タグID</p></li>\n<li><p>memo_tag_ids : メモタグID（複数指定可）</p></li>\n<li><p>segment_tag_1_id : セグメントタグ1ID</p></li>\n<li><p>segment_tag_2_id : セグメントタグ2ID</p></li>\n<li><p>segment_tag_3_id : セグメントタグ3ID</p></li>\n</ul>\n<h3 id="_5">type=external_procurement / type=other_cost 固有フィールド</h3>\n<ul>\n<li><p>amount_excluding_tax (必須) : 金額(税抜)</p></li>\n</ul>',
  operationId: 'create_cost_budget',
  request: { body: CostBudgetCreateRequestRequestBody },
  responses: {
    201: CostBudgetCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getCostBudgetsIdRoute = createRoute({
  method: 'get',
  path: '/cost_budgets/{id}',
  tags: ['cost_budgets'],
  summary: '原価予算詳細取得',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの原価予算の詳細情報を取得します。\n</p>',
  operationId: 'get_cost_budget',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '原価予算ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: CostBudgetShowResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchCostBudgetsIdRoute = createRoute({
  method: 'patch',
  path: '/cost_budgets/{id}',
  tags: ['cost_budgets'],
  summary: '原価予算更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの原価予算を更新します。\n原価種別に応じて使用可能なフィールドが異なります。\n送信したフィールドのみ更新されます。\nなお原価種別を変更することはできません。\n</p>\n<h2 id="_2">定義</h2>\n<h3 id="_3">全type共通フィールド</h3>\n<ul>\n<li><p>period_from_date : 期間開始日。period_to_date と両方同時に送信する必要がある。</p></li>\n<li><p>period_to_date : 期間終了日。period_from_date と両方同時に送信する必要がある。</p></li>\n<li><p>business_id : 案件ID</p></li>\n<li><p>memo : 備考</p></li>\n<li><p>charge_employee_id : 社内担当者ID</p></li>\n<li><p>charge_member_id : 社内担当者のメンバーID</p></li>\n<li><p>reporting_section_id : 担当部門ID</p></li>\n</ul>\n<h3 id="_4">type=procurement 固有フィールド（外部仕入・その他原価では送信不可）</h3>\n<ul>\n<li><p>quantity : 数量</p></li>\n<li><p>unit_price : 単価</p></li>\n<li><p>deal_line_type_id : 明細取引タイプID</p></li>\n<li><p>supplier_id : 仕入先ID</p></li>\n<li><p>payment_partner_id : 支払先ID</p></li>\n<li><p>uom_name : 単位</p></li>\n<li><p>master_item_id : 商品ID</p></li>\n<li><p>accounting_reporting_section_id : 会計計上部門ID</p></li>\n<li><p>item_tag_id : 会計品目タグID</p></li>\n<li><p>memo_tag_ids : メモタグID（複数指定可）</p></li>\n<li><p>segment_tag_1_id : セグメントタグ1ID</p></li>\n<li><p>segment_tag_2_id : セグメントタグ2ID</p></li>\n<li><p>segment_tag_3_id : セグメントタグ3ID</p></li>\n</ul>\n<h3 id="_5">type=external_procurement / type=other_cost 固有フィールド（仕入では送信不可）</h3>\n<ul>\n<li><p>amount_excluding_tax : 金額(税抜)</p></li>\n</ul>',
  operationId: 'update_cost_budget',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '原価予算ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: CostBudgetUpdateRequestRequestBody,
  },
  responses: {
    200: CostBudgetUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postCostBudgetsIdCancellationRoute = createRoute({
  method: 'post',
  path: '/cost_budgets/{id}/cancellation',
  tags: ['cost_budgets'],
  summary: '原価予算取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの原価予算を取り消します。\n</p>',
  operationId: 'cancel_cost_budget',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '原価予算ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: CostBudgetCancelRequestRequestBody,
  },
  responses: {
    200: CostBudgetCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterBusinessPhasesRoute = createRoute({
  method: 'get',
  path: '/master/business_phases',
  tags: ['master'],
  summary: '案件フェーズ一覧',
  description:
    '<h2 id="">概要</h2>\n<p>案件フェーズ一覧を取得します。\n使用可能なもののみを返却します。\n</p>',
  operationId: 'get_master_business_phases',
  request: { query: z.object({ company_id: CompanyIdParamsSchema }) },
  responses: {
    200: BusinessPhasesIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterSalesProgressionsRoute = createRoute({
  method: 'get',
  path: '/master/sales_progressions',
  tags: ['master'],
  summary: '受注確度一覧',
  description:
    '<h2 id="">概要</h2>\n<p>受注確度情報を取得します。\n使用可能なもののみを返却します。\n</p>',
  operationId: 'get_sales_progressions',
  request: { query: z.object({ company_id: CompanyIdParamsSchema }) },
  responses: {
    200: SalesProgressionIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterItemsRoute = createRoute({
  method: 'get',
  path: '/master/items',
  tags: ['master'],
  summary: '商品一覧',
  description:
    '<h2 id="">概要</h2>\n<p>商品情報を取得します。\n使用可能なもののみを返却します。\n</p>',
  operationId: 'get_master_items',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      offset: OffsetParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: '取得レコードの件数（デフォルト：100, 最小：1, 最大：500）',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 500, default: 100 },
          },
        }),
      type: z
        .enum(['sales', 'procurement'])
        .openapi({
          param: {
            name: 'type',
            description: '業務区分 (sales: 販売系, procurement: 調達系)',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['sales', 'procurement'] },
          },
        }),
    }),
  },
  responses: {
    200: ItemsIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterDealLineTypesRoute = createRoute({
  method: 'get',
  path: '/master/deal_line_types',
  tags: ['master'],
  summary: '明細取引タイプ一覧',
  description:
    '<h2 id="">概要</h2>\n<p>明細取引タイプ一覧を取得します。\n使用停止中のものはレスポンスに含まれません。\n</p>',
  operationId: 'get_master_deal_line_types',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      type: z
        .enum(['sales', 'procurement'])
        .openapi({
          param: {
            name: 'type',
            description: '利用区分: 販売系、調達系どちらの明細取引タイプを取得するか',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['sales', 'procurement'] },
          },
        }),
    }),
  },
  responses: {
    200: DealLineTypesIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterEmployeesRoute = createRoute({
  method: 'get',
  path: '/master/employees',
  tags: ['master'],
  summary: '従業員一覧',
  description:
    '<h2 id="">概要</h2>\n<p>従業員一覧を取得します。\n使用可能なもののみを返却します。\n</p>',
  operationId: 'get_master_employees',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      offset: OffsetParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: '取得レコードの件数（デフォルト：100, 最小：1, 最大：500）',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 500, default: 100 },
          },
        }),
    }),
  },
  responses: {
    200: EmployeesIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterMembersRoute = createRoute({
  method: 'get',
  path: '/master/members',
  tags: ['master'],
  summary: 'メンバー一覧',
  description:
    '<h2 id="">概要</h2>\n<p>メンバー一覧を取得します。\n使用可能なもののみを返却します。\n</p>',
  operationId: 'get_master_members',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      offset: OffsetParamsSchema,
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            description: '取得レコードの件数（デフォルト：100, 最小：1, 最大：500）',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 500, default: 100 },
          },
        }),
    }),
  },
  responses: {
    200: MembersIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getMasterCustomFieldsBusinessDefinitionsRoute = createRoute({
  method: 'get',
  path: '/master/custom_fields/business/definitions',
  tags: ['master'],
  summary: '案件カスタム項目定義一覧',
  description:
    '<h2 id="">概要</h2>\n<p>\nカスタム項目定義の一覧を取得します。\n使用可能なもののみを返却します。\n</p>\n\n<h3>入力形式の一覧</h3>\n<ul>\n  <li><code>text</code>: 一行テキスト</li>\n  <li><code>textarea</code>: 複数行テキスト</li>\n  <li><code>amount</code>: 金額</li>\n  <li><code>quantity</code>: 数量</li>\n  <li><code>number</code>: 数値</li>\n  <li><code>date</code>: 日付</li>\n  <li><code>enum</code>: プルダウン</li>\n  <li><code>partner</code>: 取引先</li>\n  <li><code>employee</code>: 従業員</li>\n  <li><code>section</code>: 部門</li>\n  <li><code>master_item</code>: 商品</li>\n  <li><code>member</code>: メンバー</li>\n</ul>',
  operationId: 'get_master_custom_fields_business_definitions',
  request: { query: z.object({ company_id: CompanyIdParamsSchema }) },
  responses: {
    200: CustomFieldDefinitionsIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getPurchaseOrdersRoute = createRoute({
  method: 'get',
  path: '/purchase_orders',
  tags: ['purchase_orders'],
  summary: '発注一覧',
  description:
    '<h2 id="">概要</h2>\n<p>発注の一覧を取得します。\n登録されている発注情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する発注のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_registered_date : 発注登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_registered_date : 発注登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 発注更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 発注更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_purchase_order_date : 発注日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_purchase_order_date : 発注日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>supplier_ids : 仕入先の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>purchase_order_no : 発注No.</p>\n</li>\n<li>\n<p>payment_status : 支払ステータス</p>\n</li>\n<li>\n<p>issued : 送付ステータス</p>\n</li>\n<li>\n<p>procurement_status : 仕入ステータス</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_purchase_orders',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_registered_date: PurchaseOrderStartRegisteredDateParamsSchema,
      end_registered_date: PurchaseOrderEndRegisteredDateParamsSchema,
      start_last_updated_date: PurchaseOrderStartLastUpdatedDateParamsSchema,
      end_last_updated_date: PurchaseOrderEndLastUpdatedDateParamsSchema,
      start_purchase_order_date: StartPurchaseOrderDateParamsSchema,
      end_purchase_order_date: EndPurchaseOrderDateParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'supplier_ids[]': SupplierIdsParamsSchema,
      'business_ids[]': BusinessIdsParamsSchema,
      purchase_order_no: PurchaseOrderNoParamsSchema,
      payment_status: PaymentStatusParamsSchema,
      issued: IssuedParamsSchema,
      procurement_status: ProcurementStatusParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: PurchaseOrderIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postPurchaseOrdersRoute = createRoute({
  method: 'post',
  path: '/purchase_orders',
  tags: ['purchase_orders'],
  summary: '発注登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい発注を登録します。\n仕入先への発注情報を登録し、発注書の発行や仕入への引き継ぎに利用できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>purchase_order_date : 発注日</p>\n</li>\n<li>\n<p>supplier_id : 仕入先の取引先ID</p>\n</li>\n<li>\n<p>payment_method_type : 支払方法</p>\n</li>\n<li>\n<p>payment_partner_id : 支払先の取引先ID</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>internal_subject : 発注タイトル</p>\n</li>\n<li>\n<p>procurements_on : 仕入予定日</p>\n</li>\n<li>\n<p>delivery_deadline : 納品期限日</p>\n</li>\n<li>\n<p>delivery_location : 納品場所</p>\n</li>\n<li>\n<p>purchase_order_note : 発注書の備考欄に記載する内容</p>\n</li>\n<li>\n<p>purchase_order_template_id : 発注書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>purchase_order_subject : 発注書件名</p>\n</li>\n<li>\n<p>recipient_address : 宛先情報 ※Web画面とは異なり、仕入先マスタからの自動補完は行われません。指定しない場合は全ての項目がnullとして登録されます。</p>\n</li>\n<li>\n<p>payments_on : 支払予定日</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n</ul>\n<h2 id="_3">注意点</h2>\n<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>\n<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>\n<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>\n<ul>\n<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>\n<li>\n<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>\n<ul>\n<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>\n<li>\n<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>\n<ul>\n<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>\n<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',
  operationId: 'create_purchase_order',
  request: { body: PurchaseOrderCreateRequestRequestBody },
  responses: {
    201: PurchaseOrderCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getPurchaseOrdersIdRoute = createRoute({
  method: 'get',
  path: '/purchase_orders/{id}',
  tags: ['purchase_orders'],
  summary: '発注詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの発注の詳細情報を取得します。\n発注の基本情報に加えて、明細情報や各種ステータスなどの詳細な情報も取得できます。\n</p>',
  operationId: 'get_purchase_order',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '発注詳細取得のレスポンス',
      content: { 'application/json': { schema: PurchaseOrderDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchPurchaseOrdersIdRoute = createRoute({
  method: 'patch',
  path: '/purchase_orders/{id}',
  tags: ['purchase_orders'],
  summary: '発注更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの発注を更新します。\n発注の基本情報を部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>branch_no : 枝番</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>internal_subject : 発注タイトル</p>\n</li>\n<li>\n<p>purchase_order_date : 発注日</p>\n</li>\n<li>\n<p>supplier_id : 仕入先の取引先ID</p>\n</li>\n<li>\n<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>\n</li>\n<li>\n<p>procurements_on : 仕入予定日</p>\n</li>\n<li>\n<p>delivery_deadline : 納品期限日</p>\n</li>\n<li>\n<p>delivery_location : 納品場所</p>\n</li>\n<li>\n<p>purchase_order_note : 発注書の備考欄に記載する内容</p>\n</li>\n<li>\n<p>purchase_order_template_id : 発注書テンプレートID</p>\n</li>\n<li>\n<p>purchase_order_subject : 発注書件名</p>\n</li>\n<li>\n<p>recipient_address : 宛先情報（指定した場合、既存の宛先情報は全て削除され、新しい宛先情報に置き換えられます）</p>\n</li>\n<li>\n<p>payments_on : 支払予定日</p>\n</li>\n<li>\n<p>payment_method_type : 支払方法</p>\n</li>\n<li>\n<p>payment_partner_id : 支払先の取引先ID</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<p>※recipient_addressを指定した場合、リクエストに含まれない項目はnullとして扱われます。</p>\n<h2 id="_3">注意点</h2>\n<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>\n<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>\n<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>\n<ul>\n<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>\n<li>\n<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>\n<ul>\n<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>\n<li>\n<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>\n<ul>\n<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>\n<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',
  operationId: 'update_purchase_order',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: PurchaseOrderUpdateRequestRequestBody,
  },
  responses: {
    200: PurchaseOrderUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postPurchaseOrdersIdCancellationRoute = createRoute({
  method: 'post',
  path: '/purchase_orders/{id}/cancellation',
  tags: ['purchase_orders'],
  summary: '発注取消',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの発注を取り消します。</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>company_id : 事業所ID</p>\n</li>\n</ul>',
  operationId: 'cancel_purchase_order',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '発注ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: PurchaseOrderCancellationRequestRequestBody,
  },
  responses: {
    200: PurchaseOrderCancellationResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getQuotationsRoute = createRoute({
  method: 'get',
  path: '/quotations',
  tags: ['quotations'],
  summary: '見積一覧',
  description:
    '<h2 id="">概要</h2>\n<p>見積の一覧を取得します。\n登録されている見積情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する見積のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_registered_date : 見積登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_registered_date : 見積登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 見積更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 見積更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_quotation_date : 見積日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_quotation_date : 見積日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>quotation_no : 見積No.</p>\n</li>\n<li>\n<p>quotation_status : 見積ステータス</p>\n</li>\n<li>\n<p>billing_status : 請求書送付ステータス</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_quotations',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_registered_date: StartRegisteredDateParamsSchema,
      end_registered_date: EndRegisteredDateParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_3ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_3ParamsSchema,
      start_quotation_date: StartQuotationDateParamsSchema,
      end_quotation_date: EndQuotationDateParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      'business_ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().length(26).openapi({ example: '01JPP4FD1CVQWCDSWA90VE1ZTM' })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'business_ids[]',
            description: '案件ID',
            in: 'query',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                minLength: 26,
                maxLength: 26,
                example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              },
            },
          },
        }),
      quotation_no: QuotationNoParamsSchema,
      start_gross_profit_amount_excluding_tax: StartGrossProfitAmountExcludingTaxParamsSchema,
      end_gross_profit_amount_excluding_tax: EndGrossProfitAmountExcludingTaxParamsSchema,
      start_gross_profit_rate: StartGrossProfitRateParamsSchema,
      end_gross_profit_rate: EndGrossProfitRateParamsSchema,
      quotation_status: QuotationStatusParamsSchema,
      billing_status: BillingStatusParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: QuotationIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postQuotationsRoute = createRoute({
  method: 'post',
  path: '/quotations',
  tags: ['quotations'],
  summary: '見積登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい見積を登録します。\n顧客への見積情報を登録し、見積書の発行や受注への引き継ぎに利用できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>quotation_date : 見積日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>internal_subject : 見積タイトル</p>\n</li>\n<li>\n<p>expires_on : 有効期限日</p>\n</li>\n<li>\n<p>delivery_deadline : 納品期限日</p>\n</li>\n<li>\n<p>delivery_location : 納品場所</p>\n</li>\n<li>\n<p>quotation_template_id : 見積書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>quotation_subject : 見積書件名</p>\n</li>\n<li>\n<p>quotation_note : 見積書の備考欄に記載する内容</p>\n</li>\n<li>\n<p>recipient_address : 宛先情報 ※Web画面とは異なり、顧客マスタからの自動補完は行われません。指定しない場合は全ての項目がnullとして登録されます。</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n</ul>',
  operationId: 'create_quotation',
  request: { body: QuotationCreateRequestRequestBody },
  responses: {
    201: QuotationCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getQuotationsIdRoute = createRoute({
  method: 'get',
  path: '/quotations/{id}',
  tags: ['quotations'],
  summary: '見積詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの見積の詳細情報を取得します。\n見積の基本情報に加えて、明細情報や各種ステータスなどの詳細な情報も取得できます。\n</p>',
  operationId: 'get_quotation',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '見積詳細取得のレスポンス',
      content: { 'application/json': { schema: QuotationDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchQuotationsIdRoute = createRoute({
  method: 'patch',
  path: '/quotations/{id}',
  tags: ['quotations'],
  summary: '見積更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの見積を更新します。\n見積の基本情報を部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>internal_subject : 見積タイトル</p>\n</li>\n<li>\n<p>quotation_date : 見積日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>expires_on : 有効期限日</p>\n</li>\n<li>\n<p>delivery_deadline : 納品期限日</p>\n</li>\n<li>\n<p>delivery_location : 納品場所</p>\n</li>\n<li>\n<p>quotation_template_id : 見積書テンプレートID</p>\n</li>\n<li>\n<p>quotation_subject : 見積書件名</p>\n</li>\n<li>\n<p>quotation_note : 見積書の備考欄に記載する内容</p>\n</li>\n<li>\n<p>recipient_address : 宛先情報（指定した場合、既存の宛先情報は全て削除され、新しい宛先情報に置き換えられます）</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>branch_no : 枝番</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<p>※recipient_addressを指定した場合、リクエストに含まれない項目はnullとして扱われます。</p>\n<h2 id="_3">注意点</h2>\n<h3>明細行の金額再計算について</h3>\n<p>見積を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>\n<ul>\n<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>\n<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>\n</ul>\n<h3>見積書への反映について</h3>\n<p>発行済みの見積書がある場合、見積情報を更新しても見積書の内容には自動で反映されません。見積書の内容を更新するには、再発行が必要です。</p>',
  operationId: 'update_quotation',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: QuotationUpdateRequestRequestBody,
  },
  responses: {
    200: QuotationUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const putQuotationsIdQuotationStatusRoute = createRoute({
  method: 'put',
  path: '/quotations/{id}/quotation_status',
  tags: ['quotations'],
  summary: '見積ステータス変更',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの見積のステータスを変更します。\n見積のステータス（未受注/失注）を更新できます。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>quotation_status : 見積ステータス (未受注: unanswered, 失注: order_lost)</p>\n</li>\n</ul>\n<p>※ステータス変更は取り消されていない見積に対してのみ可能です。</p>\n<p>※受注済（order_received）への変更は本APIでは行えません。受注登録APIで対象の見積を指定して受注登録することで、見積ステータスが自動的に受注済へ更新されます。</p>',
  operationId: 'update_quotation_status',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: {
      description: '見積ステータス変更リクエスト',
      content: { 'application/json': { schema: QuotationStatusChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '見積ステータス変更のレスポンス',
      content: { 'application/json': { schema: QuotationMinimalResponseSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postQuotationsIdCancellationRoute = createRoute({
  method: 'post',
  path: '/quotations/{id}/cancellation',
  tags: ['quotations'],
  summary: '見積取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの見積を取り消します。\n</p>',
  operationId: 'cancel_quotation',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '見積ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: QuotationCancellationRequestRequestBody,
  },
  responses: {
    200: QuotationCancellationResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getSalesOrdersRoute = createRoute({
  method: 'get',
  path: '/sales_orders',
  tags: ['sales_orders'],
  summary: '受注一覧',
  description:
    '<h2 id="">概要</h2>\n<p>受注の一覧を取得します。\n登録されている受注情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する受注のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_last_updated_date : 更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_sales_order_date : 受注日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_sales_order_date : 受注日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>sales_order_no : 受注No.</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_sales_orders',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_2ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_2ParamsSchema,
      start_sales_order_date: StartSalesOrderDateParamsSchema,
      end_sales_order_date: EndSalesOrderDateParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      sales_order_no: SalesOrderNoParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: SalesOrderIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postSalesOrdersRoute = createRoute({
  method: 'post',
  path: '/sales_orders',
  tags: ['sales_orders'],
  summary: '受注登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい受注を登録します。\n顧客からの注文情報を登録し、納品・請求・入金の予定情報を管理できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>sales_order_date : 受注日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>quotation_id : 見積ID（見積に紐づける場合）</p>\n</li>\n<li>\n<p>sales_order_subject : 受注タイトル</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>deliveries_on : 納品予定日</p>\n</li>\n<li>\n<p>accepts_on : 検収予定日</p>\n</li>\n<li>\n<p>bills_on : 請求予定日</p>\n</li>\n<li>\n<p>collects_on : 入金予定日</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>delivery_template_id : 納品書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n</ul>',
  operationId: 'create_sales_order',
  request: { body: SalesOrderCreateRequestRequestBody },
  responses: {
    201: SalesOrderCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getSalesOrdersIdRoute = createRoute({
  method: 'get',
  path: '/sales_orders/{id}',
  tags: ['sales_orders'],
  summary: '受注詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの受注の詳細情報を取得します。\n受注の基本情報に加えて、納品・請求・入金情報などの詳細な進捗情報も取得できます。\n</p>',
  operationId: 'get_sales_order',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '受注ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '受注詳細取得のレスポンス',
      content: { 'application/json': { schema: SalesOrderDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchSalesOrdersIdRoute = createRoute({
  method: 'patch',
  path: '/sales_orders/{id}',
  tags: ['sales_orders'],
  summary: '受注更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの受注を更新します。\n受注の基本情報、納品・請求・入金情報などを部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>sales_order_subject : 受注タイトル</p>\n</li>\n<li>\n<p>sales_order_date : 受注日</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>sales_on : 売上予定日</p>\n</li>\n<li>\n<p>deliveries_on : 納品予定日</p>\n</li>\n<li>\n<p>accepts_on : 検収予定日</p>\n</li>\n<li>\n<p>delivery_template_id : 納品書テンプレートID</p>\n</li>\n<li>\n<p>delivery_subject : 納品書件名</p>\n</li>\n<li>\n<p>delivery_note : 納品書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求の管理</p>\n</li>\n<li>\n<p>bills_on : 請求予定日</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on : 入金予定日</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>lines : 明細リスト ※指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます。</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<h2 id="_3">注意点</h2>\n<p>受注を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>\n<ul>\n<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>\n<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>\n<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>\n</ul>',
  operationId: 'update_sales_order',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '受注ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: SalesOrderUpdateRequestRequestBody,
  },
  responses: {
    200: SalesOrderUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postSalesOrdersIdCancellationRoute = createRoute({
  method: 'post',
  path: '/sales_orders/{id}/cancellation',
  tags: ['sales_orders'],
  summary: '受注取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの受注を取り消します。\n</p>',
  operationId: 'cancel_sales_order',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '受注ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: SalesOrderCancelRequestRequestBody,
  },
  responses: {
    200: SalesOrderCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getDeliveriesRoute = createRoute({
  method: 'get',
  path: '/deliveries',
  tags: ['deliveries'],
  summary: '納品一覧',
  description:
    '<h2 id="">概要</h2>\n<p>納品の一覧を取得します。\n登録されている納品情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する納品のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_registered_date : 登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_registered_date : 登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_delivery_date : 納品日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_delivery_date : 納品日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_acceptance_date : 検収日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_acceptance_date : 検収日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>delivery_no : 納品No.</p>\n</li>\n<li>\n<p>delivery_status : 納品ステータス</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_deliveries',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_registered_date: StartRegisteredDate_2ParamsSchema,
      end_registered_date: EndRegisteredDate_2ParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_2ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_2ParamsSchema,
      start_delivery_date: StartDeliveryDateParamsSchema,
      end_delivery_date: EndDeliveryDateParamsSchema,
      start_acceptance_date: StartAcceptanceDateParamsSchema,
      end_acceptance_date: EndAcceptanceDateParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      delivery_no: DeliveryNoParamsSchema,
      delivery_status: DeliveryStatusParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: DeliveryIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postDeliveriesRoute = createRoute({
  method: 'post',
  path: '/deliveries',
  tags: ['deliveries'],
  summary: '納品登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい納品を登録します。\n受注に紐づく納品、または独立した納品を登録できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>delivery_date : 納品日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求作成方法</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>sales_order_id : 受注ID（受注に紐づける場合）</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>internal_subject : 納品タイトル</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>acceptance_date : 検収日</p>\n</li>\n<li>\n<p>delivery_note : 納品書の備考欄に記載する内容</p>\n</li>\n<li>\n<p>delivery_template_id : 納品書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>subject : 納品書件名</p>\n</li>\n<li>\n<p>recipient_address : 宛先情報 ※Web画面とは異なり、顧客マスタからの自動補完は行われません。指定しない場合は全ての項目がnullとして登録されます。</p>\n</li>\n<li>\n<p>bills_on : 請求予定日</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on : 入金予定日</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n</ul>',
  operationId: 'create_delivery',
  request: { body: DeliveryCreateRequestRequestBody },
  responses: {
    201: DeliveryCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getDeliveriesIdRoute = createRoute({
  method: 'get',
  path: '/deliveries/{id}',
  tags: ['deliveries'],
  summary: '納品詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの納品の詳細情報を取得します。\n納品の基本情報に加えて、売上・請求情報などの詳細な進捗情報も取得できます。\n</p>',
  operationId: 'get_delivery',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '納品詳細取得のレスポンス',
      content: { 'application/json': { schema: DeliveryDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchDeliveriesIdRoute = createRoute({
  method: 'patch',
  path: '/deliveries/{id}',
  tags: ['deliveries'],
  summary: '納品更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの納品を更新します。\n納品の基本情報、請求・入金情報などを部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>branch_no : 枝番</p>\n</li>\n<li>\n<p>internal_subject : 納品タイトル</p>\n</li>\n<li>\n<p>delivery_date : 納品日</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>acceptance_date : 検収日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>delivery_note : 納品書の備考欄に記載する内容</p>\n</li>\n<li>\n<p>delivery_template_id : 納品書テンプレートID</p>\n</li>\n<li>\n<p>subject : 納品書件名</p>\n</li>\n<li>\n<p>recipient_address : 宛先情報（指定した場合、既存の宛先情報は全て削除され、新しい宛先情報に置き換えられます）</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求作成方法</p>\n</li>\n<li>\n<p>bills_on : 請求予定日</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on : 入金予定日</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<p>※recipient_addressを指定した場合、リクエストに含まれない項目はnullとして扱われます。</p>\n<h2 id="_3">注意点</h2>\n<h3>明細行の金額再計算について</h3>\n<p>納品を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>\n<ul>\n<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>\n<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>\n</ul>\n<h3>納品書への反映について</h3>\n<p>発行済みの納品書がある場合、納品情報を更新しても納品書の内容には自動で反映されません。納品書の内容を更新するには、再発行が必要です。</p>',
  operationId: 'update_delivery',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: DeliveryUpdateRequestRequestBody,
  },
  responses: {
    200: DeliveryUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postDeliveriesIdCancellationRoute = createRoute({
  method: 'post',
  path: '/deliveries/{id}/cancellation',
  tags: ['deliveries'],
  summary: '納品取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの納品を取り消します。\n</p>',
  operationId: 'cancel_delivery',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: DeliveryCancelRequestRequestBody,
  },
  responses: {
    200: DeliveryCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const putDeliveriesIdDeliveryStatusRoute = createRoute({
  method: 'put',
  path: '/deliveries/{id}/delivery_status',
  tags: ['deliveries'],
  summary: '納品ステータス変更',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの納品の納品ステータスを変更します。</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>status : 納品ステータス (未納品: not_delivered, 納品済: delivered)</p>\n</li>\n</ul>',
  operationId: 'update_delivery_status',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: {
      description: '納品ステータス変更リクエスト',
      content: { 'application/json': { schema: DeliveryStatusChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: DeliveryUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const putDeliveriesIdAcceptanceStatusRoute = createRoute({
  method: 'put',
  path: '/deliveries/{id}/acceptance_status',
  tags: ['deliveries'],
  summary: '検収ステータス変更',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの納品の検収ステータスを変更します。</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>status : 検収ステータス (未検収: not_accepted, 検収済: accepted)</p>\n</li>\n</ul>',
  operationId: 'update_acceptance_status',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '納品ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: {
      description: '検収ステータス変更リクエスト',
      content: { 'application/json': { schema: AcceptanceStatusChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: DeliveryUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getSalesRoute = createRoute({
  method: 'get',
  path: '/sales',
  tags: ['sales'],
  summary: '売上一覧',
  description:
    '<h2 id="">概要</h2>\n<p>売上の一覧を取得します。\n登録されている売上情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する売上のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_registered_date : 売上登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_registered_date : 売上登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 売上更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 売上更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_revenue_recognition_date : 売上日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_revenue_recognition_date : 売上日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>sales_no : 売上No.</p>\n</li>\n<li>\n<p>billing_status : 請求書送付ステータス</p>\n</li>\n<li>\n<p>collection_status : 決済ステータス</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_sales',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_registered_date: StartRegisteredDate_3ParamsSchema,
      end_registered_date: EndRegisteredDate_3ParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_4ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_4ParamsSchema,
      start_revenue_recognition_date: StartRevenueRecognitionDateParamsSchema,
      end_revenue_recognition_date: EndRevenueRecognitionDateParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      'business_ids[]': BusinessIdsParamsSchema,
      sales_no: SalesNoParamsSchema,
      billing_status: BillingStatus_2ParamsSchema,
      collection_status: CollectionStatusParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: SalesIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postSalesRoute = createRoute({
  method: 'post',
  path: '/sales',
  tags: ['sales'],
  summary: '売上登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい売上を登録します。\n受注や納品に紐づく売上、または独立した売上を登録できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>revenue_recognition_date : 売上日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求の管理</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>sales_order_id : 受注ID（受注に紐づける場合）</p>\n</li>\n<li>\n<p>delivery_id : 納品ID（納品に紐づける場合）</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>subject : 売上タイトル</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>bills_on : 請求日 ※billing_creating_method_typeがautomaticallyの場合は必須</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on : 入金期日 ※billing_creating_method_typeがautomaticallyの場合は必須</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n</ul>',
  operationId: 'create_sale',
  request: { body: SaleCreateRequestRequestBody },
  responses: {
    201: SaleCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getSalesIdRoute = createRoute({
  method: 'get',
  path: '/sales/{id}',
  tags: ['sales'],
  summary: '売上詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの売上の詳細情報を取得します。\n売上の基本情報に加えて、請求・入金情報などの詳細な進捗情報も取得できます。\n</p>',
  operationId: 'get_sale',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '売上詳細取得のレスポンス',
      content: { 'application/json': { schema: SaleDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchSalesIdRoute = createRoute({
  method: 'patch',
  path: '/sales/{id}',
  tags: ['sales'],
  summary: '売上更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの売上を更新します。\n売上の基本情報、請求・入金情報などを部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>subject : 売上タイトル</p>\n</li>\n<li>\n<p>revenue_recognition_date : 売上日</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>bills_on : 請求日</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>collects_on : 入金期日</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<h2 id="_3">注意点</h2>\n<h3>明細行の金額再計算について</h3>\n<p>売上を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>\n<ul>\n<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>\n<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>\n<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>\n</ul>\n<h3>請求書への反映について</h3>\n<p>発行済みの請求書がある場合、売上情報を更新すると請求データは更新されますが、請求書の内容には自動で反映されません。請求書の内容を更新するには、再発行が必要です。</p>',
  operationId: 'update_sale',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: SaleUpdateRequestRequestBody,
  },
  responses: {
    200: SaleUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postSalesIdCancellationRoute = createRoute({
  method: 'post',
  path: '/sales/{id}/cancellation',
  tags: ['sales'],
  summary: '売上取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの売上を取り消します。\n</p>',
  operationId: 'cancel_sale',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: SaleCancelRequestRequestBody,
  },
  responses: {
    200: SaleCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const putSalesIdCollectionStatusRoute = createRoute({
  method: 'put',
  path: '/sales/{id}/collection_status',
  tags: ['sales'],
  summary: '決済ステータス変更',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの売上の決済ステータスを変更します。</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>collection_status : 決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)</p>\n</li>\n</ul>\n<h2 id="_3">注意点</h2>\n<p>freee会計と連携している売上の決済ステータスはfreee会計の決済状況が反映されるため、本APIでは変更できません。該当データを変更しようとした場合はエラーになります。</p>',
  operationId: 'update_sale_collection_status',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: {
      description: '決済ステータス変更リクエスト',
      content: { 'application/json': { schema: SaleCollectionStatusChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: SaleUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getPeriodicSalesRoute = createRoute({
  method: 'get',
  path: '/periodic_sales',
  tags: ['periodic_sales'],
  summary: '定期売上一覧',
  description:
    '<h2 id="">概要</h2>\n<p>定期売上の一覧を取得します。\n登録されている定期売上情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する定期売上のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n<li>\n<p>start_recurrence_period : 繰り返し期間(絞り込み開始)</p>\n</li>\n<li>\n<p>end_recurrence_period : 繰り返し期間(絞り込み終了)</p>\n</li>\n<li>\n<p>start_recorded_count : 計上済み回数(絞り込み下限)</p>\n</li>\n<li>\n<p>end_recorded_count : 計上済み回数(絞り込み上限)</p>\n</li>\n<li>\n<p>start_total_schedule_count : 売上予定の総回数(絞り込み下限)</p>\n</li>\n<li>\n<p>end_total_schedule_count : 売上予定の総回数(絞り込み上限)</p>\n</li>\n<li>\n<p>start_next_sales_on : 次回売上予定日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_next_sales_on : 次回売上予定日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_revenue_recognition_date : 最終計上日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_revenue_recognition_date : 最終計上日(絞り込み終了)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>reporting_section_ids : 担当部門ID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>periodic_sales_no : 定期売上No.で絞込</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'list_periodic_sales',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      canceled: CanceledParamsSchema,
      start_recurrence_period: StartRecurrencePeriodParamsSchema,
      end_recurrence_period: EndRecurrencePeriodParamsSchema,
      start_recorded_count: StartRecordedCountParamsSchema,
      end_recorded_count: EndRecordedCountParamsSchema,
      start_total_schedule_count: StartTotalScheduleCountParamsSchema,
      end_total_schedule_count: EndTotalScheduleCountParamsSchema,
      start_next_sales_on: StartNextSalesOnParamsSchema,
      end_next_sales_on: EndNextSalesOnParamsSchema,
      start_last_revenue_recognition_date: StartLastRevenueRecognitionDateParamsSchema,
      end_last_revenue_recognition_date: EndLastRevenueRecognitionDateParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'reporting_section_ids[]': ReportingSectionIdsParamsSchema,
      'business_ids[]': BusinessIdsParamsSchema,
      periodic_sales_no: PeriodicSalesNoParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: PeriodicSaleListResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postPeriodicSalesRoute = createRoute({
  method: 'post',
  path: '/periodic_sales',
  tags: ['periodic_sales'],
  summary: '定期売上登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい定期売上を登録します。\n登録した定期売上の繰り返しルールに従って売上予定が作成されます。\n前受金を取り崩す定期売上を登録する場合は、本APIではなく「前受金取崩（定期売上登録）」API（<code>POST /advance_receipts/{id}/periodic_reduction</code>）を使用してください。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>recurrence_rule : 繰り返しルール</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求の管理</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>subject : 定期売上タイトル</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>bills_on_rule : 請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on_rule : 入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n</ul>',
  operationId: 'create_periodic_sale',
  request: { body: PeriodicSaleCreateRequestRequestBody },
  responses: {
    201: PeriodicSaleCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getPeriodicSalesIdRoute = createRoute({
  method: 'get',
  path: '/periodic_sales/{id}',
  tags: ['periodic_sales'],
  summary: '定期売上詳細取得',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの定期売上の詳細情報を取得します。</p>',
  operationId: 'get_periodic_sale',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '定期売上ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: PeriodicSaleShowResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchPeriodicSalesIdRoute = createRoute({
  method: 'patch',
  path: '/periodic_sales/{id}',
  tags: ['periodic_sales'],
  summary: '定期売上更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの定期売上を更新します。\n定期売上の基本情報や繰り返しルール、請求・入金情報などを部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>subject : 定期売上タイトル</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>recurrence_rule : 繰り返しルール</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求の管理</p>\n</li>\n<li>\n<p>bills_on_rule : 請求予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on_rule : 入金予定日ルール ※billing_creating_method_typeがautomaticallyの場合は必須</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<h2 id="_3">注意点</h2>\n<h3>明細行の金額再計算について</h3>\n<p>定期売上を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>\n<ul>\n<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>\n<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>\n<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>\n</ul>\n<h3>売上予定への反映について</h3>\n<p>定期売上を更新しても請求は作成されません。繰り返しルールに従って作成される売上予定に更新内容が反映されます。</p>\n<p>個別に内容を変更した売上予定がある場合でも、定期売上の更新内容が反映されます。</p>',
  operationId: 'update_periodic_sale',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '定期売上ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: PeriodicSaleUpdateRequestRequestBody,
  },
  responses: {
    200: PeriodicSaleUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getPeriodicSalesIdSalesEntriesRoute = createRoute({
  method: 'get',
  path: '/periodic_sales/{id}/sales_entries',
  tags: ['periodic_sales'],
  summary: '売上計上状況取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定された定期売上に含まれる各回の売上予定について、計上済みか未計上かの状況を一覧で取得します。\n各行は1回分の売上予定に対応し、<code>status</code>が計上済み(actual)か未計上(scheduled)かを示します。\nlimit/offsetによるページネーションに対応しています。\n</p>',
  operationId: 'list_periodic_sale_sales_entries',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '定期売上ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: SalesEntryListResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postPeriodicSalesIdCancellationRoute = createRoute({
  method: 'post',
  path: '/periodic_sales/{id}/cancellation',
  tags: ['periodic_sales'],
  summary: '定期売上取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの定期売上を取り消します。\n</p>',
  operationId: 'cancel_periodic_sale',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '定期売上ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: PeriodicSaleCancelRequestRequestBody,
  },
  responses: {
    200: PeriodicSaleCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getSalesSchedulesRoute = createRoute({
  method: 'get',
  path: '/sales_schedules',
  tags: ['sales_schedules'],
  summary: '売上予定一覧',
  description:
    '<h2 id="">概要</h2>\n<p>売上予定の一覧を取得します。\n登録されている売上予定情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する売上予定のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>periodic_sales_id : 定期売上IDで絞込</p>\n</li>\n<li>\n<p>start_scheduled_date : 売上予定日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_scheduled_date : 売上予定日(絞り込み終了)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>start_bills_on : 請求予定日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_bills_on : 請求予定日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_collects_on : 入金予定日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_collects_on : 入金予定日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>reporting_section_ids : 担当部門ID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>start_last_updated_date : 変更日時(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 変更日時(絞り込み終了)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_sales_schedules',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      periodic_sales_id: PeriodicSalesIdParamsSchema,
      start_scheduled_date: StartScheduledDateParamsSchema,
      end_scheduled_date: EndScheduledDateParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      start_bills_on: StartBillsOnParamsSchema,
      end_bills_on: EndBillsOnParamsSchema,
      start_collects_on: StartCollectsOnParamsSchema,
      end_collects_on: EndCollectsOnParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'reporting_section_ids[]': ReportingSectionIdsParamsSchema,
      'business_ids[]': BusinessIdsParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_5ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_5ParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: SalesScheduleIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getSalesSchedulesIdRoute = createRoute({
  method: 'get',
  path: '/sales_schedules/{id}',
  tags: ['sales_schedules'],
  summary: '売上予定詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの売上予定の詳細情報を取得します。\n指定された売上予定が既に売上として計上済みの場合、303 See Otherを返却し、Locationヘッダーに計上済み売上の詳細取得APIのURLを設定します。\n</p>',
  operationId: 'get_sales_schedule',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上予定ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: SalesScheduleShowResponseResponse,
    303: SalesScheduleShowSeeOtherResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const deleteSalesSchedulesIdRoute = createRoute({
  method: 'delete',
  path: '/sales_schedules/{id}',
  tags: ['sales_schedules'],
  summary: '売上予定削除',
  description: '指定されたIDの売上予定を削除します。',
  operationId: 'delete_sales_schedule',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上予定ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: SalesScheduleDeleteResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchSalesSchedulesIdRoute = createRoute({
  method: 'patch',
  path: '/sales_schedules/{id}',
  tags: ['sales_schedules'],
  summary: '売上予定更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの売上予定を更新します。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>subject : 件名</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>scheduled_date : 売上予定日</p>\n</li>\n<li>\n<p>billing_creating_method_type : 請求の管理</p>\n</li>\n<li>\n<p>bills_on : 請求予定日</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>collects_on : 入金予定日</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>',
  operationId: 'update_sales_schedule',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上予定ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: SalesScheduleUpdateRequestRequestBody,
  },
  responses: {
    200: SalesScheduleUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postSalesSchedulesIdActualizationRoute = createRoute({
  method: 'post',
  path: '/sales_schedules/{id}/actualization',
  tags: ['sales_schedules'],
  summary: '売上予定の売上計上',
  description: '指定されたIDの売上予定を売上として計上します。',
  operationId: 'actualize_sales_schedule',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '売上予定ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: SalesScheduleActualizationRequestRequestBody,
  },
  responses: {
    201: SalesScheduleActualizationResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getOtherCostsRoute = createRoute({
  method: 'get',
  path: '/other_costs',
  tags: ['other_costs'],
  summary: 'その他原価一覧',
  description:
    '<h2 id="">概要</h2>\n<p>その他原価の一覧を取得します。\n登録されているその他原価情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致するその他原価のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_amount_excluding_tax : 金額(税抜)の絞り込み下限</p>\n</li>\n<li>\n<p>end_amount_excluding_tax : 金額(税抜)の絞り込み上限</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>other_cost_no : その他原価No.</p>\n</li>\n<li>\n<p>start_last_updated_date : 更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_incurred_date : 発生日の絞り込み開始日</p>\n</li>\n<li>\n<p>end_incurred_date : 発生日の絞り込み終了日</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_other_costs',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_amount_excluding_tax: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(-999999999999n).max(999999999999n))
        .exactOptional()
        .openapi({
          param: {
            name: 'start_amount_excluding_tax',
            description: '金額(税抜)で絞込：下限',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              maximum: 999999999999,
              minimum: -999999999999,
            },
          },
        }),
      end_amount_excluding_tax: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(-999999999999n).max(999999999999n))
        .exactOptional()
        .openapi({
          param: {
            name: 'end_amount_excluding_tax',
            description: '金額(税抜)で絞込：上限',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              maximum: 999999999999,
              minimum: -999999999999,
            },
          },
        }),
      'business_ids[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().length(26).openapi({ example: '01JPP4FD1CVQWCDSWA90VE1ZTM' })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'business_ids[]',
            description: '案件ID',
            in: 'query',
            required: false,
            style: 'form',
            explode: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                minLength: 26,
                maxLength: 26,
                example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              },
            },
          },
        }),
      other_cost_no: OtherCostNoParamsSchema,
      canceled: CanceledParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_2ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_2ParamsSchema,
      start_incurred_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_incurred_date',
            description: '発生日で絞込：開始日(yyyy-mm-dd)',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date', example: '2025-01-01' },
          },
          example: '2025-01-01',
        }),
      end_incurred_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_incurred_date',
            description: '発生日で絞込：終了日(yyyy-mm-dd)',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date', example: '2025-12-31' },
          },
          example: '2025-12-31',
        }),
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: OtherCostIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postOtherCostsRoute = createRoute({
  method: 'post',
  path: '/other_costs',
  tags: ['other_costs'],
  summary: 'その他原価登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しいその他原価を登録します。\n案件に紐づくその他原価、または案件に紐づかないその他原価を登録できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>company_id : 事業所ID</p>\n</li>\n<li>\n<p>amount_excluding_tax : 金額(税抜)</p>\n</li>\n<li>\n<p>incurred_date : 発生日</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>memo : メモ</p>\n</li>\n</ul>',
  operationId: 'create_other_cost',
  request: { body: OtherCostCreateRequestRequestBody },
  responses: {
    201: OtherCostCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getOtherCostsIdRoute = createRoute({
  method: 'get',
  path: '/other_costs/{id}',
  tags: ['other_costs'],
  summary: 'その他原価詳細取得',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDのその他原価の詳細情報を取得します。\n</p>',
  operationId: 'get_other_cost',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'その他原価ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: 'その他原価詳細取得のレスポンス',
      content: { 'application/json': { schema: OtherCostDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchOtherCostsIdRoute = createRoute({
  method: 'patch',
  path: '/other_costs/{id}',
  tags: ['other_costs'],
  summary: 'その他原価更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDのその他原価を更新します。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>amount_excluding_tax : 金額(税抜)</p>\n</li>\n<li>\n<p>incurred_date : 発生日</p>\n</li>\n<li>\n<p>memo : メモ</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<h2 id="_3">注意点</h2>\n<p>freee会計の取引明細インポートから登録されたその他原価は本APIでは更新できません。該当データを更新しようとした場合はエラーになります。</p>',
  operationId: 'update_other_cost',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'その他原価ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: OtherCostUpdateRequestRequestBody,
  },
  responses: {
    200: OtherCostUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postOtherCostsIdRestorationRoute = createRoute({
  method: 'post',
  path: '/other_costs/{id}/restoration',
  tags: ['other_costs'],
  summary: 'その他原価復元',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの取消済みその他原価を復元します。\n</p>',
  operationId: 'restore_other_cost',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'その他原価ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: OtherCostRestorationRequestRequestBody,
  },
  responses: {
    200: OtherCostRestorationResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postOtherCostsIdCancellationRoute = createRoute({
  method: 'post',
  path: '/other_costs/{id}/cancellation',
  tags: ['other_costs'],
  summary: 'その他原価取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDのその他原価を取り消します。\n</p>',
  operationId: 'cancel_other_cost',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: 'その他原価ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: OtherCostCancellationRequestRequestBody,
  },
  responses: {
    200: OtherCostCancellationResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getProcurementsRoute = createRoute({
  method: 'get',
  path: '/procurements',
  tags: ['procurements'],
  summary: '仕入一覧',
  description:
    '<h2 id="">概要</h2>\n<p>仕入の一覧を取得します。\n登録されている仕入情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する仕入のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>start_registered_date : 仕入登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_registered_date : 仕入登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 仕入更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 仕入更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_procurement_date : 仕入日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_procurement_date : 仕入日(絞り込み終了)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>supplier_ids : 仕入先の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可) ※複数の案件が紐づく仕入は本パラメータでヒットしません</p>\n</li>\n<li>\n<p>procurement_no : 仕入No.</p>\n</li>\n<li>\n<p>payment_status : 決済ステータス</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>\n<h2 id="_3">注意点</h2>\n<h3>business_ids による絞り込みについて</h3>\n<p>仕入は明細単位で複数の案件と紐付けることができます。複数の案件が紐づく仕入は本パラメータでは検索ヒットしません。</p>',
  operationId: 'get_procurements',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      start_registered_date: StartRegisteredDate_4ParamsSchema,
      end_registered_date: EndRegisteredDate_4ParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_6ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_6ParamsSchema,
      start_procurement_date: StartProcurementDateParamsSchema,
      end_procurement_date: EndProcurementDateParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'supplier_ids[]': SupplierIdsParamsSchema,
      'business_ids[]': BusinessIds_2ParamsSchema,
      procurement_no: ProcurementNoParamsSchema,
      payment_status: PaymentStatus_2ParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: ProcurementIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postProcurementsRoute = createRoute({
  method: 'post',
  path: '/procurements',
  tags: ['procurements'],
  summary: '仕入登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい仕入を登録します。\n仕入先への仕入情報を登録し、支払管理や会計連携に利用できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>procurement_date : 仕入日</p>\n</li>\n<li>\n<p>supplier_id : 仕入先の取引先ID</p>\n</li>\n<li>\n<p>payments_on : 支払期日</p>\n</li>\n<li>\n<p>payment_method_type : 支払方法</p>\n</li>\n<li>\n<p>payment_partner_id : 支払先の取引先ID</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>\n</li>\n<li>\n<p>internal_subject : 仕入タイトル</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n</ul>\n<h2 id="_4">注意点</h2>\n<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>\n<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>\n<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>\n<ul>\n<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>\n<li>\n<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>\n<ul>\n<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>\n<li>\n<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>\n<ul>\n<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>\n<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3>案件・発注の複数紐付けについて</h3>\n<p>仕入は明細(lines)単位で案件(business_id)・発注(purchase_order_id)を紐付けることができます。レスポンスのヘッダーレベルの business / purchase_order_id は明細に紐づくものが単一の場合のみ値が設定され、複数紐づく場合は null になります。</p>',
  operationId: 'create_procurement',
  request: { body: ProcurementCreateRequestRequestBody },
  responses: {
    201: ProcurementCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getProcurementsIdRoute = createRoute({
  method: 'get',
  path: '/procurements/{id}',
  tags: ['procurements'],
  summary: '仕入詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの仕入の詳細情報を取得します。\n仕入の基本情報に加えて、明細情報や各種ステータスなどの詳細な情報も取得できます。\n</p>',
  operationId: 'get_procurement',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '仕入ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '仕入詳細取得のレスポンス',
      content: { 'application/json': { schema: ProcurementDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchProcurementsIdRoute = createRoute({
  method: 'patch',
  path: '/procurements/{id}',
  tags: ['procurements'],
  summary: '仕入更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの仕入を更新します。\n仕入の基本情報を部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>internal_subject : 仕入タイトル</p>\n</li>\n<li>\n<p>procurement_date : 仕入日</p>\n</li>\n<li>\n<p>supplier_id : 仕入先の取引先ID</p>\n</li>\n<li>\n<p>is_qualified_invoice_issuer : 適格請求書発行事業者該当フラグ</p>\n</li>\n<li>\n<p>payments_on : 支払期日</p>\n</li>\n<li>\n<p>payment_method_type : 支払方法</p>\n</li>\n<li>\n<p>payment_partner_id : 支払先の取引先ID</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<h2 id="_3">注意点</h2>\n<h3>明細行のpurchase_order_id（発注ID）について</h3>\n<p>linesを指定して明細を更新する場合、各明細行でpurchase_order_idを省略する、またはnullを指定すると発注との紐づけが解除されます。既存の発注との紐づけを維持したい場合は、必ずpurchase_order_idを指定してください。</p>\n<h3>適格請求書発行事業者該当フラグ(is_qualified_invoice_issuer)について</h3>\n<p>本フラグの登録時の挙動は、freee会計の「税区分の設定 &gt; インボイス制度関連 &gt; 買い手側対応機能」の設定状況によって変わります。リクエストでの指定値がそのまま登録されるとは限りません。</p>\n<p>登録された値は、免税事業者からの仕入れに係る経過措置に対応した税区分を利用するかどうかの判定に使われます。</p>\n<ul>\n<li><p>買い手側対応機能を「使用しない」に設定している場合、経過措置の判定を行わないため、リクエストでの指定値は無視され、常に true が登録されます。</p></li>\n<li>\n<p>買い手側対応機能を「使用する」に設定している場合は、以下の通りです。</p>\n<ul>\n<li><p>リクエストで値を指定した場合は、その値が登録されます。</p></li>\n<li>\n<p>値を指定しなかった場合（null を指定した場合、または項目自体を省略した場合）は、「適格チェックボックスと税区分」の設定に従って値が決まります。</p>\n<ul>\n<li><p>「取引先情報と連携」が「連携する」になっている場合は、仕入先に指定した取引先に設定されている値が登録されます。</p></li>\n<li><p>それ以外の場合は、同設定のデフォルト値が登録されます。</p></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',
  operationId: 'update_procurement',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '仕入ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: ProcurementUpdateRequestRequestBody,
  },
  responses: {
    200: ProcurementUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postProcurementsIdCancellationRoute = createRoute({
  method: 'post',
  path: '/procurements/{id}/cancellation',
  tags: ['procurements'],
  summary: '仕入取消',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの仕入を取り消します。</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>company_id : 事業所ID</p>\n</li>\n</ul>',
  operationId: 'cancel_procurement',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '仕入ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: ProcurementCancellationRequestRequestBody,
  },
  responses: {
    200: ProcurementCancellationResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const putProcurementsIdPaymentStatusRoute = createRoute({
  method: 'put',
  path: '/procurements/{id}/payment_status',
  tags: ['procurements'],
  summary: '決済ステータス変更',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの仕入の決済ステータスを変更します。</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>payment_status : 決済ステータス (未決済: not_settled, 一部決済済み: partially_settled, 決済済み: settled, 対象外: none)</p>\n</li>\n</ul>\n<h2 id="_3">注意点</h2>\n<p>freee会計と連携している仕入の決済ステータスはfreee会計の決済状況が反映されるため、本APIでは変更できません。該当データを変更しようとした場合はエラーになります。</p>',
  operationId: 'update_procurement_payment_status',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '仕入ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: {
      description: '決済ステータス変更リクエスト',
      content: { 'application/json': { schema: ProcurementPaymentStatusChangeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: ProcurementUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getAdvanceReceiptsRoute = createRoute({
  method: 'get',
  path: '/advance_receipts',
  tags: ['advance_receipts'],
  summary: '前受金一覧',
  description:
    '<h2 id="">概要</h2>\n<p>前受金の一覧を取得します。\n登録されている前受金情報を一覧形式で取得できます。\n各種フィルタ条件を指定することで、特定の条件に合致する前受金のみを取得することが可能です。\n</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>advance_receipt_no : 前受金No.</p>\n</li>\n<li>\n<p>start_advance_receipt_date : 前受金発生日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_advance_receipt_date : 前受金発生日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_registered_date : 前受金登録日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_registered_date : 前受金登録日(絞り込み終了)</p>\n</li>\n<li>\n<p>start_last_updated_date : 前受金更新日(絞り込み開始)</p>\n</li>\n<li>\n<p>end_last_updated_date : 前受金更新日(絞り込み終了)</p>\n</li>\n<li>\n<p>customer_ids : 顧客の取引先ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_employee_ids : 社内担当者の従業員ID(複数指定可)</p>\n</li>\n<li>\n<p>charge_member_ids : 社内担当者のメンバーID(複数指定可)</p>\n</li>\n<li>\n<p>business_ids : 案件ID(複数指定可)</p>\n</li>\n<li>\n<p>billing_status : 請求書送付ステータス</p>\n</li>\n<li>\n<p>collection_status : 決済ステータス</p>\n</li>\n<li>\n<p>canceled : 取消状態(デフォルト:false)</p>\n</li>\n</ul>\n<p>\n`limit`と`offset`パラメータを使用してページネーションが可能です。\nデフォルトでは20件ずつ取得され、最大100件まで一度に取得できます。\n</p>',
  operationId: 'get_advance_receipts',
  request: {
    query: z.object({
      company_id: CompanyIdParamsSchema,
      advance_receipt_no: AdvanceReceiptNoParamsSchema,
      start_advance_receipt_date: StartAdvanceReceiptDateParamsSchema,
      end_advance_receipt_date: EndAdvanceReceiptDateParamsSchema,
      start_registered_date: StartRegisteredDate_5ParamsSchema,
      end_registered_date: EndRegisteredDate_5ParamsSchema,
      start_last_updated_date: StartLastUpdatedDate_7ParamsSchema,
      end_last_updated_date: EndLastUpdatedDate_7ParamsSchema,
      'customer_ids[]': CustomerIdsParamsSchema,
      'charge_employee_ids[]': ChargeEmployeeIdsParamsSchema,
      'charge_member_ids[]': ChargeMemberIdsParamsSchema,
      'business_ids[]': BusinessIdsParamsSchema,
      billing_status: BillingStatusParamsSchema,
      collection_status: CollectionStatus_2ParamsSchema,
      canceled: CanceledParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: AdvanceReceiptIndexResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postAdvanceReceiptsRoute = createRoute({
  method: 'post',
  path: '/advance_receipts',
  tags: ['advance_receipts'],
  summary: '前受金登録',
  description:
    '<h2 id="">概要</h2>\n<p>新しい前受金を登録します。\n顧客から受け取った前受金情報を登録し、請求・入金管理に利用できます。\n</p>\n<h2 id="_2">定義</h2>\n<h3>必須項目</h3>\n<ul>\n<li>\n<p>account_item_id : 勘定科目ID</p>\n</li>\n<li>\n<p>advance_receipt_date : 前受金発生日</p>\n</li>\n<li>\n<p>billing_partner_id : 請求先の取引先ID</p>\n</li>\n<li>\n<p>bills_on : 請求日</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>collecting_partner_id : 入金元の取引先ID</p>\n</li>\n<li>\n<p>collection_method_type : 入金方法</p>\n</li>\n<li>\n<p>collects_on : 入金期日</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>lines : 明細リスト</p>\n</li>\n</ul>\n<h3>任意項目</h3>\n<ul>\n<li>\n<p>sales_order_id : 受注ID（受注に紐づける場合）</p>\n</li>\n<li>\n<p>accounting_reporting_section_id : 会計計上部門ID</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>internal_subject : 前受金タイトル</p>\n</li>\n<li>\n<p>invoice_note : 請求書の備考欄に掲載する内容</p>\n</li>\n<li>\n<p>invoice_subject : 請求書件名</p>\n</li>\n<li>\n<p>invoice_template_id : 請求書テンプレートID ※指定しない場合はデフォルトのテンプレートが適用されます。</p>\n</li>\n<li>\n<p>item_tag_id : 会計品目タグID</p>\n</li>\n<li>\n<p>memo_tags : メモタグID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>segment_tag_1_id : セグメント1のID</p>\n</li>\n<li>\n<p>segment_tag_2_id : セグメント2のID</p>\n</li>\n<li>\n<p>segment_tag_3_id : セグメント3のID</p>\n</li>\n</ul>\n<h2 id="_3">注意点</h2>\n<h3>案件の必須化について</h3>\n<p>前受金は案件(business_id)に紐づけて登録する必要があります。案件IDの指定は必須です。</p>\n<h3>請求の自動作成について</h3>\n<p>前受金を登録すると、請求情報が自動で作成されます。売上のように請求の管理方式を指定することはできません。</p>',
  operationId: 'create_advance_receipt',
  request: { body: AdvanceReceiptCreateRequestRequestBody },
  responses: {
    201: AdvanceReceiptCreateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const getAdvanceReceiptsIdRoute = createRoute({
  method: 'get',
  path: '/advance_receipts/{id}',
  tags: ['advance_receipts'],
  summary: '前受金詳細取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの前受金の詳細情報を取得します。\n前受金の基本情報に加えて、明細、勘定科目、品目タグ、メモタグ、セグメントタグなどの詳細情報も取得できます。\n</p>',
  operationId: 'get_advance_receipt',
  request: {
    query: z.object({ company_id: CompanyIdParamsSchema }),
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '前受金ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
  },
  responses: {
    200: {
      description: '前受金詳細取得のレスポンス',
      content: { 'application/json': { schema: AdvanceReceiptDetailSchema } },
    },
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const patchAdvanceReceiptsIdRoute = createRoute({
  method: 'patch',
  path: '/advance_receipts/{id}',
  tags: ['advance_receipts'],
  summary: '前受金更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの前受金を更新します。\n前受金の基本情報を部分的に更新できます。\n送信したフィールドのみが更新され、送信しなかったフィールドは変更されません。\n</p>\n<h2 id="_2">定義</h2>\n<h3>更新可能項目</h3>\n<ul>\n<li>\n<p>account_item_id : 勘定科目ID</p>\n</li>\n<li>\n<p>advance_receipt_date : 前受金発生日</p>\n</li>\n<li>\n<p>business_id : 案件ID</p>\n</li>\n<li>\n<p>customer_id : 顧客の取引先ID</p>\n</li>\n<li>\n<p>lines : 明細リスト（指定した場合、既存の明細は全て削除され、新しい明細に置き換えられます）</p>\n</li>\n<li>\n<p>accounting_reporting_section_id : 会計計上部門ID</p>\n</li>\n<li>\n<p>charge_employee_id : 社内担当者の従業員ID</p>\n</li>\n<li>\n<p>charge_member_id : 社内担当者のメンバーID</p>\n</li>\n<li>\n<p>customer_order_no : 顧客注文No.</p>\n</li>\n<li>\n<p>internal_memo : 社内メモ</p>\n</li>\n<li>\n<p>internal_subject : 前受金タイトル</p>\n</li>\n<li>\n<p>item_tag_id : 会計品目タグID</p>\n</li>\n<li>\n<p>memo_tags : メモタグID</p>\n</li>\n<li>\n<p>reporting_section_id : 担当部門ID</p>\n</li>\n<li>\n<p>segment_tag_1_id : セグメント1のID</p>\n</li>\n<li>\n<p>segment_tag_2_id : セグメント2のID</p>\n</li>\n<li>\n<p>segment_tag_3_id : セグメント3のID</p>\n</li>\n</ul>\n<p>※全ての項目は任意です。更新したい項目のみを送信してください。</p>\n<h2 id="_3">注意点</h2>\n<h3>明細行の金額再計算について</h3>\n<p>前受金を更新する際、登録後に下記の設定変更が行われていた場合は、明細行の金額が再計算されます。</p>\n<ul>\n<li><p>事業所(自社)の設定が変更された場合：freee会計の「設定」で変更可能な"消費税の経理処理"、"消費税の端数処理"の設定値</p></li>\n<li><p>取引先の設定が変更された場合：freeeの「取引先」で変更可能な"内税/外税"の設定値</p></li>\n<li><p>明細取引タイプが変更された場合：freee販売の「明細取引タイプ」で変更可能な"税区分"、"軽減税率"の設定値</p></li>\n</ul>\n<h3>請求書への反映について</h3>\n<p>発行済みの請求書がある場合、前受金情報を更新すると請求データは更新されますが、請求書の内容には自動で反映されません。請求書の内容を更新するには、再発行が必要です。</p>',
  operationId: 'update_advance_receipt',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '前受金ID',
            schema: {
              type: 'string',
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
              maxLength: 26,
              minLength: 26,
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: AdvanceReceiptUpdateRequestRequestBody,
  },
  responses: {
    200: AdvanceReceiptUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postAdvanceReceiptsIdCancellationRoute = createRoute({
  method: 'post',
  path: '/advance_receipts/{id}/cancellation',
  tags: ['advance_receipts'],
  summary: '前受金取消',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの前受金を取り消します。</p>',
  operationId: 'cancel_advance_receipt',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '前受金ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: AdvanceReceiptCancelRequestRequestBody,
  },
  responses: {
    200: AdvanceReceiptCancelResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postAdvanceReceiptsIdReductionRoute = createRoute({
  method: 'post',
  path: '/advance_receipts/{id}/reduction',
  tags: ['advance_receipts'],
  summary: '前受金取崩（売上登録）',
  description: '<h2 id="">概要</h2>\n<p>指定されたIDの前受金を取り崩して売上を登録します。</p>',
  operationId: 'reduce_advance_receipt',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '前受金ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: AdvanceReceiptReductionRequestRequestBody,
  },
  responses: {
    201: AdvanceReceiptReductionResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const postAdvanceReceiptsIdPeriodicReductionRoute = createRoute({
  method: 'post',
  path: '/advance_receipts/{id}/periodic_reduction',
  tags: ['advance_receipts'],
  summary: '前受金取崩（定期売上登録）',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの前受金を取り崩す定期売上を登録します。繰り返しルールに従って売上予定が作成されます。</p>',
  operationId: 'create_periodic_reduced_sale',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '前受金ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: AdvanceReceiptPeriodicReductionRequestRequestBody,
  },
  responses: {
    200: AdvanceReceiptPeriodicReductionResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})

export const putAdvanceReceiptsIdCollectionStatusRoute = createRoute({
  method: 'put',
  path: '/advance_receipts/{id}/collection_status',
  tags: ['advance_receipts'],
  summary: '決済ステータス変更',
  description:
    '<h2 id="">概要</h2>\n<p>指定されたIDの前受金の決済ステータスを変更します。</p>\n<h2 id="_2">定義</h2>\n<ul>\n<li>\n<p>collection_status : 決済ステータス (未決済: not_settled, 決済済み: settled, 対象外: none)</p>\n</li>\n</ul>\n<h2 id="_3">注意点</h2>\n<p>freee会計と連携している前受金の決済ステータスはfreee会計の決済状況が反映されるため、本APIでは変更できません。該当データを変更しようとした場合はエラーになります。</p>',
  operationId: 'update_advance_receipt_collection_status',
  request: {
    params: z.object({
      id: z
        .string()
        .length(26)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description: '前受金ID',
            schema: {
              type: 'string',
              minLength: 26,
              maxLength: 26,
              example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
            },
          },
          example: '01JPP4FD1CVQWCDSWA90VE1ZTM',
        }),
    }),
    body: {
      description: '決済ステータス変更リクエスト',
      content: {
        'application/json': { schema: AdvanceReceiptCollectionStatusChangeRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: AdvanceReceiptUpdateResponseResponse,
    400: BadRequestErrorResponseResponse,
    401: UnauthorizedErrorResponseResponse,
    403: ForbiddenErrorResponseResponse,
    404: NotFoundErrorResponseResponse,
    409: ConflictErrorResponseResponse,
    429: TooManyRequestsErrorResponseResponse,
    500: InternalServerErrorResponseResponse,
  },
})
