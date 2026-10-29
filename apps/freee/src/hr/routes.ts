import { createRoute, z } from '@hono/zod-openapi'

const ApiV1EmployeeUpdateRequestSerializerSchema = z
  .object({
    num: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '従業員番号<br>\n従業員を判別しやすいよう管理することができます。（例: 1人目の正社員を A-001 と入力）',
        example: 'A-001',
      }),
    display_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '従業員名（freee人事労務上での表示にのみ使用される名前です。出力書類には姓名が使用されます。）\n- 給与計算対象外の従業員情報の場合は必須になります。',
        example: '山田 太郎',
      }),
    base_pension_num: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({
        description: '基礎年金番号 数値文字列10桁固定長 例: 1111111111',
        example: '1111111111',
      }),
    employment_insurance_reference_number: z
      .string()
      .max(11)
      .exactOptional()
      .openapi({
        description:
          '被保険者番号（雇用保険） 数値文字列11桁固定長 例: 11111111111\n- 給与計算対象外の従業員情報の場合に指定するとエラーになります。',
        example: '11111111111',
      }),
    birth_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '生年月日 null不可', example: '2000-01-01' }),
    entry_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '入社日 null不可', example: '2021-04-01' }),
    retire_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '退職日\n- 退職していない場合は指定不要です。\n- 指定する場合はentry_date以降の日付を指定してください。\n- retire_dateをクリアする場合、nullを指定してください。',
        example: '2022-03-31',
      }),
    company_reference_date_rule_name: z
      .string()
      .max(15)
      .exactOptional()
      .openapi({
        description:
          '<a href="https://support.freee.co.jp/hc/ja/articles/360000666303-締め日支払い日を変更する方法は-" target="_blank">締め日支払い日グループ名</a>\nで設定した締め日支払い日を指定してください。\n- 未指定の際は、締め日支払い日は変わりません。\n- 指定した従業員が給与計算対象外の場合、指定するとエラーになります。',
        example: '当月締め翌月払い',
      }),
  })
  .openapi({ required: ['entry_date', 'birth_date'] })
  .openapi('ApiV1EmployeeUpdateRequestSerializer')

const ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializerSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: '項目名' }),
    time: z.string().exactOptional().openapi({ description: '時間' }),
    amount: z.string().exactOptional().openapi({ description: '控除額' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer')

const ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializerSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: '項目名' }),
    amount: z.string().exactOptional().openapi({ description: '金額' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer')

const ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializerSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: '項目名', example: '時間外労働' }),
    time: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '時間(単位: 分)。固定残業代の場合、nullになります。',
        example: '60.0',
      }),
    amount: z.string().exactOptional().openapi({ description: '手当金額', example: '1000.0' }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'コード（事業所毎に設定可能な小文字英数最大10桁のコード）',
        example: '12345abcde',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer')

const ApiV1EmployeeCreateRequestSerializerSchema = z
  .object({
    num: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '従業員番号<br>\n従業員を判別しやすいよう管理することができます。（例: 1人目の正社員を A-001 と入力）',
        example: 'A-001',
      }),
    working_hours_system_name: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({
        description:
          '<a href="https://support.freee.co.jp/hc/ja/articles/360000562403-労働時間制度と勤務-賃金設定について" target="_blank">勤務・賃金設定名</a>\nで設定した名称を指定してください。\n- 未指定の際は、最初に登録したデータが利用されます。\n- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。',
        example: '固定',
      }),
    company_reference_date_rule_name: z
      .string()
      .max(15)
      .exactOptional()
      .openapi({
        description:
          '<a href="https://support.freee.co.jp/hc/ja/articles/360000666303-締め日支払い日を変更する方法は-" target="_blank">締め日支払い日グループ名</a>\nで設定した締め日支払い日を指定してください。\n- 未指定の際は、最初に登録したデータが利用されます。\n- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。',
        example: '15日締め（当月25日払い）',
      }),
    last_name: z
      .string()
      .max(255)
      .openapi({
        description:
          '姓（必須）<br>\nlast_nameとfirst_nameを空白文字で結合した文字列がdisplay_nameとして登録されます。\n- 例）last_name=田中、first_name＝太郎の場合、display_name＝田中 太郎\n- display_nameはput apiで更新可能です。',
        example: '山田',
      }),
    first_name: z
      .string()
      .max(255)
      .openapi({
        description:
          '名（必須）<br>\nlast_nameとfirst_nameを空白文字で結合した文字列がdisplay_nameとして登録されます。\n- 例）last_name=田中、first_name＝太郎の場合、display_name＝田中 太郎\n- display_nameはput apiで更新可能です。',
        example: '太郎',
      }),
    last_name_kana: z
      .string()
      .max(255)
      .openapi({ description: '姓カナ（必須）', example: 'ヤマダ' }),
    first_name_kana: z
      .string()
      .max(255)
      .openapi({ description: '名カナ（必須）', example: 'タロウ' }),
    birth_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '生年月日（必須）', example: '2000-01-01' }),
    entry_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '入社日（必須）', example: '2021-04-01' }),
    pay_calc_type: z
      .enum(['monthly', 'daily', 'hourly'])
      .exactOptional()
      .openapi({
        description:
          '給与方式 monthly: 月給, daily: 日給, hourly: 時給\n- フレックスタイム制を使用している場合はmonthly以外指定できません。\n- 入力パラメータのno_payroll_calculationがfalseの場合は必須になります。\n- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。',
        example: 'monthly',
      }),
    pay_amount: z
      .int32()
      .min(0)
      .max(99999999)
      .exactOptional()
      .openapi({
        description:
          '基本給\n- 入力パラメータのno_payroll_calculationがfalseの場合は必須になります。\n- 入力パラメータのno_payroll_calculationがtrueの場合に指定するとエラーになります。',
        example: 220000,
      }),
    gender: z
      .enum(['unselected', 'male', 'female'])
      .exactOptional()
      .openapi({
        description:
          '性別　unselected: 未選択, male: 男性, female: 女性（デフォルト: unselected: 未選択）',
        example: 'male',
      }),
    married: z
      .boolean()
      .exactOptional()
      .openapi({ description: '配偶者の有無（デフォルト: false）' }),
    no_payroll_calculation: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: '給与計算対象外の従業員情報を作成する場合はtrueを指定します',
        example: true,
      }),
  })
  .openapi({
    required: [
      'last_name',
      'first_name',
      'last_name_kana',
      'first_name_kana',
      'entry_date',
      'birth_date',
    ],
  })
  .openapi('ApiV1EmployeeCreateRequestSerializer')

const ApiV1GroupMembershipSerializerSchema = z
  .object({
    start_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '開始日', example: '2000-01-01' }),
    end_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '終了日', example: '2020-01-01' }),
    boss_id: z
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
      .openapi({ type: ['integer', 'null'], format: 'int64', description: '上司ID', example: 1 }),
    main_duty: z
      .enum(['unspecified', 'sub_duty', 'main_duty'])
      .exactOptional()
      .openapi({ description: '主務', example: 'main_duty' }),
    group_id: z.int32().exactOptional().openapi({ description: '部門ID', example: 10 }),
    group_code: z
      .string()
      .exactOptional()
      .openapi({ description: '部門コード', example: 'group2' }),
    group_name: z.string().exactOptional().openapi({ description: '部門名称', example: '営業部' }),
    level: z.int32().exactOptional().openapi({ description: '部門階層レベル', example: 2 }),
    position_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: '役職ID', example: 1 }),
    position_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '役職コード', example: 'position1' }),
    position_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '役職名称', example: '部長' }),
    parent_group_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: '親部門ID', example: 1 }),
    parent_group_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '親部門コード', example: 'group1' }),
    parent_group_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '親部門名称', example: '営業統括' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1GroupMembershipSerializer')

const ApiV1SalariesEmployeePayrollStatementSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '給与明細ID' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    employee_name: z.string().exactOptional().openapi({ description: '従業員の姓名' }),
    employee_display_name: z.string().exactOptional().openapi({ description: '従業員の表示名' }),
    employee_num: z.string().exactOptional().openapi({ description: '従業員番号' }),
    pay_date: z.iso.date().exactOptional().openapi({ description: '支払日' }),
    start_date: z.iso.date().exactOptional().openapi({ description: '給与計算開始日（固定給）' }),
    closing_date: z.iso.date().exactOptional().openapi({ description: '給与計算締日（固定給）' }),
    variable_pay_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: '給与計算開始日（変動給） 残業手当、遅刻早退・欠勤などの計算に使われる期間',
      }),
    variable_pay_closing_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '給与計算締日（変動給）' }),
    fixed: z.boolean().exactOptional().openapi({ description: '給与明細が確定されているかどうか' }),
    calc_status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '計算状況ステータス calculating: 計算中, calculated: 計算完了, overwritten: 直接編集, imported: インポート, error: エラー',
      }),
    calculated_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: '計算状況ステータスの更新日' }),
    pay_calc_type: z
      .enum(['monthly', 'daily', 'hourly', ''])
      .exactOptional()
      .openapi({
        description: '給与形態 monthly: 月給, daily: 日給, hourly: 時給, (空文字列): 計算中',
        example: 'monthly',
      }),
    board_member_remuneration_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '役員報酬' }),
    basic_pay_amount: z.string().nullable().exactOptional().openapi({ description: '基本給' }),
    work_days: z.string().nullable().exactOptional().openapi({ description: '労働日数' }),
    normal_work_time: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '労働時間のうち、所定労働時間に該当するもの' }),
    normal_work_days: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '所定労働出勤日数' }),
    work_mins_by_paid_holiday: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '有給休暇時間数' }),
    num_paid_holidays: z.string().nullable().exactOptional().openapi({ description: '有給日数' }),
    is_board_member: z.boolean().exactOptional().openapi({ description: '役員かどうか' }),
    total_attendance_deduction_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '勤怠控除額合計' }),
    total_allowance_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '支給手当額合計' }),
    total_deduction_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '控除額合計' }),
    total_deduction_employer_share: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '法定福利費の会社負担分の合計（健康保険、厚生年金、雇用保険等）' }),
    net_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '差引支給額(手取り額)' }),
    gross_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '総支給額(額面)' }),
    total_worked_days_count: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '平日と休日の合計労働日数（日給用）' }),
    total_taxable_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '課税対象支給額' }),
    total_expense_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '総経費精算額' }),
    total_transfer_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '総振込額' }),
    total_annual_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '課税支給累計額' }),
    payments: z
      .array(ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializerSchema)
      .exactOptional()
      .openapi({ description: '支給項目（基本給、残業代、通勤手当等）' }),
    deductions: z
      .array(ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializerSchema)
      .exactOptional()
      .openapi({ description: '控除項目（健康保険、厚生年金、雇用保険等）' }),
    deductions_employer_share: z
      .array(ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializerSchema)
      .exactOptional()
      .openapi({ description: '法定福利費の会社負担分（健康保険、厚生年金、雇用保険等）' }),
    attendances: z
      .array(ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializerSchema)
      .exactOptional()
      .openapi({ description: '勤怠控除項目（遅刻早退控除、欠勤控除等）' }),
    overtime_pays: z
      .array(ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializerSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: '時間外労働項目(法定内残業、時間外労働、法定休日労働、深夜労働等)' }),
    remark: z.string().nullable().exactOptional().openapi({ description: '備考' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1SalariesEmployeePayrollStatementSerializer')

const ApiV1SalariesEmployeePayrollStatementRemarkSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '給与明細備考ID' }),
    employee_payroll_statement_id: z.int32().exactOptional().openapi({ description: '給与明細ID' }),
    body: z.string().exactOptional().openapi({ description: '備考本文' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1SalariesEmployeePayrollStatementRemarkSerializer')

const ApiV1HolidaysAndHoursSerializerSchema = z
  .object({
    days: z.float32().exactOptional().openapi({ description: '日数 0.5は半休を表す' }),
    hours: z.int32().exactOptional().openapi({ description: '時間数' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1HolidaysAndHoursSerializer')

const ApiV1EmployeesProfileRuleSerializerSchema = z
  .object({
    id: z.int32().exactOptional(),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    last_name: z.string().exactOptional().openapi({ description: '姓' }),
    first_name: z.string().exactOptional().openapi({ description: '名' }),
    last_name_kana: z.string().exactOptional().openapi({ description: '姓カナ' }),
    first_name_kana: z.string().exactOptional().openapi({ description: '名カナ' }),
    zipcode1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号1', example: '000' }),
    zipcode2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号2', example: '0000' }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 4,
      }),
    address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所' }),
    address_kana: z
      .string()
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所カナ' }),
    phone1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '電話番号1（先頭番号、例:03-1111-222x の03部分）', example: '000' }),
    phone2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '電話番号2（中間番号、例:03-1111-222x の1111部分）',
        example: '0000',
      }),
    phone3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '電話番号3（末尾番号、例:03-1111-222x の222x部分）',
        example: '0000',
      }),
    residential_zipcode1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '現住所の郵便番号１', example: '000' }),
    residential_zipcode2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '現住所の郵便番号２', example: '0000' }),
    residential_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '現住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 4,
      }),
    residential_address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '現住所の住所' }),
    residential_address_kana: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '現住所の住所カナ' }),
    employment_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '雇用形態 board-member: 役員, regular: 正社員, fixed-term: 契約社員, part-time: アルバイト・パート, temporary: 派遣社員, (空文字列): その他',
      }),
    title: z.string().nullable().exactOptional().openapi({ description: '肩書' }),
    gender: z
      .enum(['unselected', 'male', 'female'])
      .exactOptional()
      .openapi({
        description: '性別　unselected: 未選択, male: 男性, female: 女性',
        example: 'male',
      }),
    married: z.boolean().exactOptional().openapi({ description: '配偶者の有無' }),
    is_working_student: z.boolean().exactOptional().openapi({ description: '勤労学生かどうか' }),
    widow_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '寡夫／寡婦かどうか na: 空白, widower: 寡夫, widow: 寡婦, special_widow: 特別寡婦, one_parent: ひとり親',
      }),
    disability_type: z
      .string()
      .exactOptional()
      .openapi({ description: '障害者かどうか na: 空白, general: 障害者, heavy: 特別障害者' }),
    email: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'メールアドレス', example: 'test@example.com' }),
    householder_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: '世帯主の名前 世帯主の続柄がmyselfの場合は空白',
        example: '山田 吾郎',
      }),
    householder: z
      .enum([
        'myself',
        'husband',
        'wife',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '世帯主の続柄 myself:本人, husband:夫, wife:妻, father:父, mother:母, child:子供, senior_brother:兄, junior_brother:弟, senior_sister:姉, junior_sister:妹, grandchild:孫, grandfather:祖父, grandmother:祖母, father_in_law:義父, mother_in_law:義母, grandfather_in_law:義祖父, grandmother_in_law:義祖母, other:その他',
        example: 'father',
      }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesProfileRuleSerializer')

const ApiV1EmployeesHealthInsuranceRuleSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '健康保険ルールID' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    entried: z.boolean().exactOptional().openapi({ description: '健康保険に加入しているかどうか' }),
    health_insurance_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の健康保険料の計算方法', example: 'manual' }),
    health_insurance_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の健康保険料の計算方法', example: 'manual' }),
    health_insurance_qualification_required: z
      .boolean()
      .exactOptional()
      .openapi({ description: '健康保険の資格確認書の発行が必要かどうか' }),
    manual_health_insurance_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の健康保険料の直接指定金額（従業員負担分）',
        example: 8888,
      }),
    manual_health_insurance_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の健康保険料の直接指定金額（従業員負担分）',
        example: 7777,
      }),
    manual_health_insurance_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の健康保険料の直接指定金額（会社負担分）',
        example: 6666.0001,
      }),
    manual_health_insurance_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の健康保険料の直接指定金額（会社負担分）',
        example: 5555.0001,
      }),
    care_insurance_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の介護保険料の計算方法', example: 'manual' }),
    care_insurance_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の介護保険料の計算方法', example: 'manual' }),
    manual_care_insurance_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の介護保険料の直接指定金額（従業員負担分）',
        example: 4444,
      }),
    manual_care_insurance_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の介護保険料の直接指定金額（従業員負担分）',
        example: 3333,
      }),
    manual_care_insurance_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の介護保険料の直接指定金額（会社負担分）',
        example: 2222.0001,
      }),
    manual_care_insurance_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の介護保険料の直接指定金額（会社負担分）',
        example: 1111.0001,
      }),
    child_support_fund_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の子ども・子育て支援金の計算方法', example: 'manual' }),
    child_support_fund_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の子ども・子育て支援金の計算方法', example: 'manual' }),
    manual_child_support_fund_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）',
        example: 4000,
      }),
    manual_child_support_fund_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）',
        example: 3000,
      }),
    manual_child_support_fund_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の子ども・子育て支援金の直接指定金額（会社負担分）',
        example: 2000.0001,
      }),
    manual_child_support_fund_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の子ども・子育て支援金の直接指定金額（会社負担分）',
        example: 1000.0001,
      }),
    reference_num: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '健康保険の被保険者整理番号' }),
    standard_monthly_remuneration: z
      .int32()
      .exactOptional()
      .openapi({ description: '標準報酬月額' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesHealthInsuranceRuleSerializer')

const ApiV1EmployeesWelfarePensionInsuranceRuleSerializerSchema = z
  .object({
    id: z.int32().exactOptional(),
    child_allowance_contribution_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の子ども・子育て拠出金の計算方法', example: 'manual' }),
    child_allowance_contribution_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の子ども・子育て拠出金の計算方法', example: 'manual' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    entried: z
      .boolean()
      .exactOptional()
      .openapi({ description: '厚生年金保険に加入しているかどうか' }),
    manual_child_allowance_contribution_amount_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の子ども・子育て拠出金の直接指定金額',
        example: 111.0001,
      }),
    manual_child_allowance_contribution_amount_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の子ども・子育て拠出金の直接指定金額',
        example: 222.0001,
      }),
    manual_welfare_pension_insurance_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の厚生年金保険料の直接指定金額（会社負担分）',
        example: 333.0001,
      }),
    manual_welfare_pension_insurance_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の厚生年金保険料の直接指定金額（会社負担分）',
        example: 444.0001,
      }),
    manual_welfare_pension_insurance_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の厚生年金保険料の直接指定金額（従業員負担分）',
        example: 555,
      }),
    manual_welfare_pension_insurance_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の厚生年金保険料の直接指定金額（従業員負担分）',
        example: 666,
      }),
    reference_num: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '厚生年金保険の被保険者整理番号' }),
    standard_monthly_remuneration: z
      .int32()
      .exactOptional()
      .openapi({ description: '標準報酬月額' }),
    welfare_pension_insurance_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の厚生年金保険料の計算方法', example: 'manual' }),
    welfare_pension_insurance_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の厚生年金保険料の計算方法', example: 'manual' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWelfarePensionInsuranceRuleSerializer')

const ApiV1EmployeesDependentRuleSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '家族情報ルールID' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    last_name: z.string().exactOptional().openapi({ description: '姓' }),
    first_name: z.string().exactOptional().openapi({ description: '名' }),
    last_name_kana: z.string().nullable().exactOptional().openapi({ description: '姓カナ' }),
    first_name_kana: z.string().nullable().exactOptional().openapi({ description: '名カナ' }),
    gender: z
      .enum(['unselected', 'male', 'female'])
      .exactOptional()
      .openapi({ description: '性別　unselected: 未選択, male: 男性, female: 女性' }),
    relationship: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '続柄 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子',
      }),
    birth_date: z.iso.date().exactOptional().openapi({ description: '生年月日' }),
    residence_type: z
      .string()
      .exactOptional()
      .openapi({
        description: '同居・別居 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)',
      }),
    zipcode1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号1' }),
    zipcode2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号2' }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 4,
      }),
    address: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所' }),
    address_kana: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所カナ' }),
    base_pension_num: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '基礎年金番号' }),
    income: z.int32().exactOptional().openapi({ description: '年間所得' }),
    annual_revenue: z.int32().exactOptional().openapi({ description: '年間収入' }),
    disability_type: z
      .string()
      .exactOptional()
      .openapi({
        description: '障害に該当するか na: 障害なし, general: 一般の障害者, heavy: 特別障害者',
      }),
    occupation: z.string().nullable().exactOptional().openapi({ description: '職業' }),
    annual_remittance_amount: z.int32().exactOptional().openapi({ description: '一年間の送金額' }),
    employment_insurance_receive_status: z
      .enum([
        'unselected',
        'receiving_employment_insurance',
        'not_receiving_employment_insurance',
        'pending_employment_insurance',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '雇用保険受給の有無\n- unselected 未選択\n- receiving_employment_insurance 雇用保険受給有り\n- not_receiving_employment_insurance 雇用保険受給無し\n- pending_employment_insurance 申請中',
      }),
    employment_insurance_receives_from: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '雇用保険受給開始年月日 employment_insurance_receive_statusが未選択、無しの場合は指定できません。',
      }),
    health_insurance_qualification_required: z
      .boolean()
      .exactOptional()
      .openapi({ description: '健康保険の資格確認書の発行が必要かどうか' }),
    phone_type: z
      .enum(['unselected', 'home', 'office', 'mobile', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '電話番号の種別\n- unselected 未選択\n- home 自宅\n- office 勤務先\n- mobile 携帯\n- other その他',
      }),
    phone1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '電話番号1（先頭番号、例:03-1111-222x の03部分）', example: '000' }),
    phone2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '電話番号2（中間番号、例:03-1111-222x の1111部分）',
        example: '0000',
      }),
    phone3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '電話番号3（末尾番号、例:03-1111-222x の222x部分）',
        example: '0000',
      }),
    social_insurance_and_tax_dependent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ',
      }),
    social_insurance_dependent_acquisition_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険の扶養加入日' }),
    social_insurance_dependent_acquisition_reason: z
      .enum([
        '',
        'start_working',
        'marriage',
        'turnover',
        'decrease_in_income',
        'other',
        'birth',
        'live_in',
      ])
      .exactOptional()
      .openapi({
        description:
          '社会保険の扶養加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": 未選択, birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他',
      }),
    social_insurance_other_dependent_acquisition_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険のその他の扶養加入理由' }),
    social_insurance_dependent_disqualification_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険の扶養喪失日' }),
    social_insurance_dependent_disqualification_reason: z
      .enum([
        '',
        'death',
        'divorce',
        'start_working_or_increase_in_income',
        'reach_75_years_old',
        'disability',
        'other',
        'start_working',
        'increase_in_income',
      ])
      .exactOptional()
      .openapi({
        description:
          '社会保険の扶養喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他',
      }),
    social_insurance_other_dependent_disqualification_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険のその他の扶養喪失理由' }),
    tax_dependent_acquisition_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養の加入日' }),
    tax_dependent_acquisition_reason: z
      .enum([
        '',
        'start_working',
        'marriage',
        'turnover',
        'decrease_in_income',
        'other',
        'birth',
        'live_in',
      ])
      .exactOptional()
      .openapi({
        description:
          '税扶養の加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他',
      }),
    tax_other_dependent_acquisition_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養のその他の加入理由' }),
    tax_dependent_disqualification_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養の喪失日' }),
    tax_dependent_disqualification_reason: z
      .enum([
        '',
        'death',
        'divorce',
        'start_working_or_increase_in_income',
        'reach_75_years_old',
        'disability',
        'other',
        'start_working',
        'increase_in_income',
      ])
      .exactOptional()
      .openapi({
        description:
          '税扶養の喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他',
      }),
    tax_other_dependent_disqualification_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養のその他の喪失理由' }),
    non_resident_dependents_reason: z
      .enum([
        'none',
        'over_16_to_under_30_or_over_70',
        'study_abroad',
        'handicapped',
        'over_38_man',
      ])
      .exactOptional()
      .openapi({
        description:
          '非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesDependentRuleSerializer')

const ApiV1EmployeesBankAccountRuleSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '銀行口座ルールID' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    bank_name: z.string().nullable().exactOptional().openapi({ description: '金融機関名' }),
    bank_name_kana: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '金融機関名カナ' }),
    bank_code: z.string().nullable().exactOptional().openapi({ description: '金融機関コード' }),
    branch_name: z.string().nullable().exactOptional().openapi({ description: '支店名' }),
    branch_name_kana: z.string().nullable().exactOptional().openapi({ description: '支店名カナ' }),
    branch_code: z.string().nullable().exactOptional().openapi({ description: '支店コード' }),
    account_number: z.string().nullable().exactOptional().openapi({ description: '口座番号' }),
    account_name: z.string().nullable().exactOptional().openapi({ description: '口座名義カナ' }),
    account_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '預金種類 ordinary: 普通預金, current: 当座預金, saving: 貯蓄預金' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBankAccountRuleSerializer')

const ApiV1EmployeesBasicPayRuleSerializerSchema = z
  .object({
    id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '従業員の基本給ID' }),
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '事業所ID' }),
    employee_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '従業員ID' }),
    pay_calc_type: z
      .enum(['monthly', 'daily', 'hourly'])
      .exactOptional()
      .openapi({ description: '給与方式 monthly: 月給, daily: 日給, hourly: 時給' }),
    pay_amount: z.int32().min(0).max(99999999).exactOptional().openapi({ description: '基本給' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBasicPayRuleSerializer')

const ApiV1EmployeeSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    num: z.string().exactOptional().openapi({ description: '従業員番号' }),
    display_name: z.string().exactOptional().openapi({ description: '従業員名（表示名）' }),
    base_pension_num: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '基礎年金番号' }),
    employment_insurance_reference_number: z
      .string()
      .exactOptional()
      .openapi({ description: '被保険者番号（雇用保険）' }),
    birth_date: z.iso.date().exactOptional().openapi({ description: '生年月日' }),
    entry_date: z.iso.date().exactOptional().openapi({ description: '入社日' }),
    retire_date: z.iso.date().nullable().exactOptional().openapi({ description: '退職日' }),
    user_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ユーザーID(従業員詳細未設定の場合、nullになります。)' }),
    profile_rule: ApiV1EmployeesProfileRuleSerializerSchema.exactOptional(),
    health_insurance_rule: ApiV1EmployeesHealthInsuranceRuleSerializerSchema.exactOptional(),
    welfare_pension_insurance_rule:
      ApiV1EmployeesWelfarePensionInsuranceRuleSerializerSchema.exactOptional(),
    dependent_rules: z
      .array(ApiV1EmployeesDependentRuleSerializerSchema)
      .exactOptional()
      .openapi({ description: '家族情報' }),
    bank_account_rule: ApiV1EmployeesBankAccountRuleSerializerSchema.exactOptional(),
    basic_pay_rule: ApiV1EmployeesBasicPayRuleSerializerSchema.exactOptional(),
    payroll_calculation: z
      .boolean()
      .exactOptional()
      .openapi({ description: '給与計算対象従業員の場合trueを返します', example: true }),
    company_reference_date_rule_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '締め日支払い日グループ名(給与計算対象外従業員の場合、nullを返します)',
        example: '当月締め翌月払い',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeSerializer')

const ApiV1EmployeesIndexSerializerSchema = z
  .object({
    employees: z.array(ApiV1EmployeeSerializerSchema).exactOptional(),
    total_count: z.int32().exactOptional().openapi({ description: '合計件数' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesIndexSerializer')

const ApiV1GroupResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '部門ID', example: 3 }),
    code: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '部門コード', example: 'group2' }),
    name: z.string().max(255).openapi({ description: '部門名称', example: '営業部門' }),
    level: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '部門階層レベル（数字が大きいほど階層が深いです。）', example: 2 }),
    parent_group_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '親部門ID', example: 2 }),
    parent_group_code: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '親部門コード', example: 'group1' }),
    parent_group_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '親部門名称', example: '営業統括' }),
  })
  .openapi({ required: ['id', 'name', 'level'] })
  .openapi('ApiV1GroupResponseParams')

const ApiV1GroupsIndexResponseSchema = z
  .object({
    groups: z.array(ApiV1GroupResponseParamsSchema),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['groups', 'total_count'] })
  .openapi('ApiV1GroupsIndexResponse')

const ApiV1GroupCreateRequestParamsSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description: '部門コード（入力しない場合、空文字が入力されます。）',
        example: 'group2',
      }),
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: '部門名称（必須）', example: '営業部門' }),
    parent_group_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '親部門ID（部門階層レベルが10以内になるように親部門IDを指定してください。）',
        example: 2,
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('ApiV1GroupCreateRequestParams')

const ApiV1GroupUpdateRequestParamsSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description: '部門コード（入力しない場合、空文字が入力されます。）',
        example: 'group2',
      }),
    name: z.string().min(1).max(255).openapi({ description: '部門名称', example: '営業部門' }),
  })
  .openapi({ required: ['name'] })
  .openapi('ApiV1GroupUpdateRequestParams')

const ApiV1PositionResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '役職ID', example: 1 }),
    code: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '役職コード', example: 'position1' }),
    name: z.string().max(255).openapi({ description: '役職名称', example: '部長' }),
  })
  .openapi({ required: ['id', 'name'] })
  .openapi('ApiV1PositionResponseParams')

const ApiV1PositionIndexResponseSchema = z
  .object({
    positions: z.array(ApiV1PositionResponseParamsSchema),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['positions', 'total_count'] })
  .openapi('ApiV1PositionIndexResponse')

const ApiV1PositionRequestParamsSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description: '役職コード（入力しない場合、空文字が入力されます。）',
        example: 'position1',
      }),
    name: z.string().min(1).max(255).openapi({ description: '役職名称（必須）', example: '部長' }),
  })
  .openapi({ required: ['name'] })
  .openapi('ApiV1PositionRequestParams')

const ApiV1EmployeeGroupMembershipSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '従業員ID', example: 1 }),
    num: z.string().exactOptional().openapi({ description: '従業員番号', example: 'A-001' }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: '従業員名（表示名）', example: '山田 太郎' }),
    entry_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '入社日', example: '2021-04-01' }),
    retire_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '退職日', example: '2022-03-31' }),
    user_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ユーザーID(従業員詳細未設定の場合、nullになります。)', example: 1 }),
    login_email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'ログイン用メールアドレス(従業員詳細未設定の場合、nullになります。)',
        example: 'example@example.com',
      }),
    birth_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '生年月日', example: '2000-01-01' }),
    gender: z
      .enum(['unselected', 'male', 'female'])
      .exactOptional()
      .openapi({
        description: '性別　unselected: 未選択, male: 男性, female: 女性',
        example: 'male',
      }),
    payroll_calculation: z
      .boolean()
      .exactOptional()
      .openapi({ description: '給与計算対象従業員の場合trueを返します', example: true }),
    group_memberships: z.array(ApiV1GroupMembershipSerializerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeGroupMembershipSerializer')

const ApiV1MonthlyAttendanceIndexResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日', example: '2022-02-01' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'issue_date',
      'status',
      'passed_auto_check',
    ],
  })
  .openapi('ApiV1MonthlyAttendanceIndexResponseParams')

const ApiV1ApprovalFlowLogsParamsSchema = z
  .object({
    user_id: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '申請操作をしたユーザーのユーザーID', example: 1 }),
    action: z
      .enum(['apply', 'approve', 'cancel', 'feedback'])
      .exactOptional()
      .openapi({
        description: '申請操作。（apply:申請する、approve:承認、cancel:取り消し、feedback:差戻し）',
        example: 'approve',
      }),
    update_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '申請操作をした日付時間', example: '2022-06-08T09:46:46.000+09:00' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1ApprovalFlowLogsParams')

const ApiV1MonthlyAttendanceResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日', example: '2022-02-01' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    approval_flow_route_id: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID', example: 1 }),
    approval_flow_route_name: z
      .string()
      .openapi({ description: '申請経路名', example: '申請経路' }),
    approval_flow_logs: z
      .array(ApiV1ApprovalFlowLogsParamsSchema)
      .openapi({ description: '承認履歴' }),
    current_step_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '現在承認ステップID<br>\n申請を差戻した場合、nullになります。',
        example: 1,
      }),
    current_round: z
      .int32()
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          '現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。',
        example: 1,
      }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'issue_date',
      'status',
      'passed_auto_check',
      'approval_flow_route_id',
      'approval_flow_route_name',
      'approval_flow_logs',
      'current_round',
    ],
  })
  .openapi('ApiV1MonthlyAttendanceResponseParams')

const ApiV1PaidHolidayIndexResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    values: z.array(
      z
        .object({
          type: z
            .enum(['full', 'half', 'morning', 'afternoon', 'hourly'])
            .openapi({
              description:
                '取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hourly:時間休）',
              example: 'half',
            }),
          start_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({ description: '取得予定開始時間', example: '12:00' }),
          end_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({ description: '取得予定終了時間', example: '23:59' }),
        })
        .openapi({ required: ['type'] }),
    ),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    revoke_status: z
      .enum(['revoking', 'revoked'])
      .nullable()
      .openapi({
        description:
          '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
        example: null,
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'issue_date',
      'status',
      'revoke_status',
      'passed_auto_check',
      'values',
    ],
  })
  .openapi('ApiV1PaidHolidayIndexResponseParams')

const LegacyApiV1PaidHolidayIndexResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    holiday_type: z
      .enum(['full', 'half', 'morning', 'afternoon', 'hour'])
      .openapi({
        description:
          '[deprecated] 取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）※ 削除予定のため paid_holiday->values->type を参照してください',
        example: 'half',
      }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 取得予定開始時間 ※ 削除予定のため paid_holiday->values->start_at を参照してください',
        example: '12:00',
      }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 取得予定終了時間 ※ 削除予定のため paid_holiday->values->end_at を参照してください',
        example: '23:59',
      }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    revoke_status: z
      .enum(['revoking', 'revoked'])
      .nullable()
      .openapi({
        description:
          '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
        example: null,
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'holiday_type',
      'issue_date',
      'status',
      'revoke_status',
      'passed_auto_check',
    ],
  })
  .openapi('LegacyApiV1PaidHolidayIndexResponseParams')

const ApiV1PaidHolidayResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    values: z.array(
      z
        .object({
          type: z
            .enum(['full', 'half', 'morning', 'afternoon', 'hourly'])
            .openapi({
              description:
                '取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hourly:時間休）',
              example: 'half',
            }),
          start_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({ description: '取得予定開始時間', example: '12:00' }),
          end_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({ description: '取得予定終了時間', example: '23:59' }),
        })
        .openapi({ required: ['type'] }),
    ),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    revoke_status: z
      .enum(['revoking', 'revoked'])
      .nullable()
      .openapi({
        description:
          '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
        example: null,
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    approval_flow_route_id: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID', example: 1 }),
    approval_flow_route_name: z
      .string()
      .openapi({ description: '申請経路名', example: '申請経路' }),
    approval_flow_logs: z
      .array(ApiV1ApprovalFlowLogsParamsSchema)
      .openapi({ description: '承認履歴' }),
    current_step_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '現在承認ステップID<br>\n申請を差戻した場合、nullになります。',
        example: 1,
      }),
    current_round: z
      .int32()
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          '現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。',
        example: 1,
      }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'issue_date',
      'status',
      'revoke_status',
      'passed_auto_check',
      'approval_flow_route_id',
      'approval_flow_route_name',
      'approval_flow_logs',
      'current_round',
      'values',
    ],
  })
  .openapi('ApiV1PaidHolidayResponseParams')

const LegacyApiV1PaidHolidayResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    holiday_type: z
      .enum(['full', 'half', 'morning', 'afternoon', 'hour'])
      .openapi({
        description:
          '[deprecated] 取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）※ 削除予定のため paid_holiday->values->type を参照してください',
        example: 'half',
      }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 取得予定開始時間 ※ 削除予定のため paid_holiday->values->start_at を参照してください',
        example: '12:00',
      }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 取得予定終了時間 ※ 削除予定のため paid_holiday->values->end_at を参照してください',
        example: '23:59',
      }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    revoke_status: z
      .enum(['revoking', 'revoked'])
      .nullable()
      .openapi({
        description:
          '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
        example: null,
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    approval_flow_route_id: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID', example: 1 }),
    approval_flow_route_name: z
      .string()
      .openapi({ description: '申請経路名', example: '申請経路' }),
    approval_flow_logs: z
      .array(ApiV1ApprovalFlowLogsParamsSchema)
      .openapi({ description: '承認履歴' }),
    current_step_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '現在承認ステップID<br>\n申請を差戻した場合、nullになります。',
        example: 1,
      }),
    current_round: z
      .int32()
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          '現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。',
        example: 1,
      }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'holiday_type',
      'issue_date',
      'status',
      'revoke_status',
      'passed_auto_check',
      'approval_flow_route_id',
      'approval_flow_route_name',
      'approval_flow_logs',
      'current_round',
    ],
  })
  .openapi('LegacyApiV1PaidHolidayResponseParams')

const ApiV1OvertimeWorkIndexResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({ description: '取得予定開始時間（必須）', example: '12:00' }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({ description: '取得予定終了時間（必須）', example: '23:59' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    revoke_status: z
      .enum(['revoking', 'revoked'])
      .nullable()
      .openapi({
        description:
          '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
        example: null,
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'issue_date',
      'status',
      'revoke_status',
      'passed_auto_check',
    ],
  })
  .openapi('ApiV1OvertimeWorkIndexResponseParams')

const ApiV1OvertimeWorkResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({ description: '取得予定開始時間（必須）', example: '12:00' }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({ description: '取得予定終了時間（必須）', example: '23:59' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    revoke_status: z
      .enum(['revoking', 'revoked'])
      .nullable()
      .openapi({
        description:
          '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
        example: null,
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    approval_flow_route_id: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID', example: 1 }),
    approval_flow_route_name: z
      .string()
      .openapi({ description: '申請経路名', example: '申請経路' }),
    approval_flow_logs: z
      .array(ApiV1ApprovalFlowLogsParamsSchema)
      .openapi({ description: '承認履歴' }),
    current_step_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '現在承認ステップID<br>\n申請を差戻した場合、nullになります。',
        example: 1,
      }),
    current_round: z
      .int32()
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          '現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。',
        example: 1,
      }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'issue_date',
      'status',
      'revoke_status',
      'passed_auto_check',
      'approval_flow_route_id',
      'approval_flow_route_name',
      'approval_flow_logs',
      'current_round',
    ],
  })
  .openapi('ApiV1OvertimeWorkResponseParams')

const ApiV1UsersCompanySerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    name: z.string().exactOptional().openapi({ description: '事業所名' }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '事業所におけるロール。\n\n- `company_admin`: 管理者\n- `self_only`: 一般\n- `attendance_manager`: 勤怠管理者\n- `physician`: 産業医\n- `shift_admin`: AIシフト担当者\n- `time_clock_device_setter`: 打刻機設定者\n\n[各権限でできることは各アカウントの権限についてのヘルプページを参照してください。](https://support.freee.co.jp/hc/ja/articles/204087410#3)',
      }),
    external_cid: z.string().exactOptional().openapi({ description: '事業所番号(半角英数字10桁)' }),
    employee_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '事業所に所属する従業員としての従業員ID、従業員情報が未登録の場合はnullになります。',
      }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '事業所に所属する従業員の表示名' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1UsersCompanySerializer')

const ApiV1UsersMeSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'ユーザーID' }),
    companies: z
      .array(ApiV1UsersCompanySerializerSchema)
      .exactOptional()
      .openapi({ description: 'ユーザーが属する事業所の一覧' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1UsersMeSerializer')

const ApiV1EmployeeGroupMembershipsIndexSerializerSchema = z
  .object({
    employee_group_memberships: z
      .array(ApiV1EmployeeGroupMembershipSerializerSchema)
      .exactOptional(),
    total_count: z.int32().exactOptional().openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeGroupMembershipsIndexSerializer')

const ApiV1BonusesEmployeePayrollStatementSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '賞与明細ID' }),
    company_id: z.int32().exactOptional().openapi({ description: '事業所ID' }),
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    employee_name: z.string().exactOptional().openapi({ description: '従業員の姓名' }),
    employee_display_name: z.string().exactOptional().openapi({ description: '従業員の表示名' }),
    employee_num: z.string().exactOptional().openapi({ description: '従業員番号' }),
    closing_date: z.iso.date().exactOptional().openapi({ description: '確定日' }),
    pay_date: z.iso.date().exactOptional().openapi({ description: '支払日' }),
    fixed: z.boolean().exactOptional().openapi({ description: '賞与明細が確定されているかどうか' }),
    calc_status: z
      .string()
      .exactOptional()
      .openapi({
        description: '計算状況ステータス calculating: 計算中, calculated: 計算完了, error: エラー',
      }),
    calculated_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: '計算状況ステータスの更新日' }),
    bonus_amount: z.string().nullable().exactOptional().openapi({ description: '賞与額' }),
    total_allowance_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '手当額合計' }),
    total_deduction_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '控除額合計' }),
    net_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '差引支給額(手取り額)' }),
    gross_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '総支給額(額面)' }),
    total_taxable_payment_amount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '課税対象支給額' }),
    allowances: z
      .array(ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializerSchema)
      .exactOptional()
      .openapi({ description: '手当' }),
    deductions: z
      .array(ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializerSchema)
      .exactOptional()
      .openapi({ description: '控除項目（所得税、社会保険料等）' }),
    remark: z.string().exactOptional().openapi({ description: '備考' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1BonusesEmployeePayrollStatementSerializer')

const ApiV1BonusesEmployeePayrollStatementsIndexSerializerSchema = z
  .object({
    employee_payroll_statements: z
      .array(ApiV1BonusesEmployeePayrollStatementSerializerSchema)
      .exactOptional(),
    total_count: z.int32().exactOptional().openapi({ description: '合計件数' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1BonusesEmployeePayrollStatementsIndexSerializer')

const ApiV1CompaniesEmployeeSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    num: z.string().exactOptional().openapi({ description: '従業員番号' }),
    display_name: z.string().exactOptional().openapi({ description: '従業員名（表示名）' }),
    entry_date: z.iso.date().exactOptional().openapi({ description: '入社日' }),
    retire_date: z.iso.date().nullable().exactOptional().openapi({ description: '退職日' }),
    user_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ユーザーID(従業員詳細未設定の場合、nullになります。)' }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'ログイン用メールアドレス(従業員詳細未設定の場合、nullになります。)',
      }),
    payroll_calculation: z
      .boolean()
      .exactOptional()
      .openapi({ description: '給与計算対象従業員の場合trueを返します', example: true }),
    closing_day: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: '締め日(給与計算対象外従業員の場合、nullを返します)', example: 31 }),
    pay_day: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: '支払日(給与計算対象外従業員の場合、nullを返します)', example: 15 }),
    month_of_pay_day: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '翌月払いか、当月払いか(給与計算対象外従業員の場合、nullを返します)',
        example: 'next_month',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1CompaniesEmployeeSerializer')

const ApiV1EmployeesProfileRuleUpdateRequestSerializerSchema = z
  .object({
    last_name: z.string().max(255).openapi({ description: '姓 null不可', example: '山田' }),
    first_name: z.string().max(255).openapi({ description: '名 null不可', example: '太郎' }),
    last_name_kana: z.string().max(255).openapi({ description: '姓カナ', example: 'ヤマダ' }),
    first_name_kana: z.string().max(255).openapi({ description: '名カナ', example: 'タロウ' }),
    zipcode1: z
      .string()
      .max(3)
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号1', example: '000' }),
    zipcode2: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号2', example: '0000' }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 4,
      }),
    address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所' }),
    address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所カナ' }),
    phone1: z
      .string()
      .max(5)
      .exactOptional()
      .openapi({ description: '電話番号1（先頭番号、例:03-1111-222x の03部分）', example: '000' }),
    phone2: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({
        description: '電話番号2（中間番号、例:03-1111-222x の1111部分）',
        example: '0000',
      }),
    phone3: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({
        description: '電話番号3（末尾番号、例:03-1111-222x の222x部分）',
        example: '0000',
      }),
    residential_zipcode1: z
      .string()
      .max(3)
      .exactOptional()
      .openapi({ description: '現住所の郵便番号１', example: '000' }),
    residential_zipcode2: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({ description: '現住所の郵便番号２', example: '0000' }),
    residential_prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '現住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 4,
      }),
    residential_address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '現住所の住所' }),
    residential_address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '現住所の住所カナ' }),
    employment_type: z
      .enum(['board-member', 'regular', 'fixed-term', 'part-time', 'temporary', ''])
      .exactOptional()
      .openapi({
        description:
          '雇用形態 board-member: 役員, regular: 正社員, fixed-term: 契約社員, part-time: アルバイト・パート, temporary: 派遣社員, (空文字列): その他',
      }),
    title: z.string().max(255).exactOptional().openapi({ description: '肩書' }),
    gender: z
      .enum(['unselected', 'male', 'female'])
      .exactOptional()
      .openapi({
        description:
          '性別　unselected: 未選択, male: 男性, female: 女性（デフォルト: unselected: 未選択）',
        example: 'male',
      }),
    married: z.boolean().exactOptional().openapi({ description: 'null不可 配偶者の有無' }),
    is_working_student: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'null不可 勤労学生かどうか' }),
    widow_type: z
      .enum(['na', 'widower', 'widow', 'special_widow', 'one_parent'])
      .exactOptional()
      .openapi({
        description:
          '寡夫／寡婦かどうか null不可 na: 空白, widower: 寡夫, widow: 寡婦, special_widow: 特別寡婦, one_parent: ひとり親',
      }),
    disability_type: z
      .enum(['na', 'general', 'heavy'])
      .exactOptional()
      .openapi({
        description: '障害者かどうか null不可 na: 空白, general: 障害者, heavy: 特別障害者',
      }),
    email: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'メールアドレス', example: 'test@example.com' }),
    householder_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '世帯主の名前<br>世帯主の続柄に myself:本人 を指定している場合は、世帯主の名前は自動で従業員名で更新するため指定できません。',
        example: '山田 吾郎',
      }),
    householder: z
      .enum([
        'myself',
        'husband',
        'wife',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
      ])
      .exactOptional()
      .openapi({
        description:
          '世帯主の続柄 myself:本人, husband:夫, wife:妻, father:父, mother:母, child:子供, senior_brother:兄, junior_brother:弟, senior_sister:姉, junior_sister:妹, grandchild:孫, grandfather:祖父, grandmother:祖母, father_in_law:義父, mother_in_law:義母, grandfather_in_law:義祖父, grandmother_in_law:義祖母, other:その他',
        example: 'father',
      }),
  })
  .openapi({ required: ['last_name', 'first_name', 'last_name_kana', 'first_name_kana'] })
  .openapi('ApiV1EmployeesProfileRuleUpdateRequestSerializer')

const ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializerSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: '時給名' }),
    total_normal_time_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定内労働時間（分）' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer')

const ApiV1EmployeesWorkRecordTimeRangeSerializerSchema = z
  .object({
    clock_in_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '開始時刻', example: '2018-07-31 08:00:00' }),
    clock_out_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '終了時刻', example: '2018-07-31 08:00:00' }),
  })
  .openapi({ required: ['clock_in_at', 'clock_out_at'] })
  .openapi('ApiV1EmployeesWorkRecordTimeRangeSerializer')

const ApiV1EmployeesWorkRecordTimeRangeResponseSerializerSchema = z
  .object({
    clock_in_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '開始時刻' }),
    clock_out_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: '終了時刻' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWorkRecordTimeRangeResponseSerializer')

const ApiV1EmployeesWorkRecordHolidayTypeSchema = z
  .enum(['full', 'half', 'morning_off', 'afternoon_off', 'hourly'])
  .openapi({
    description:
      '取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off、時間休: hourly）',
  })
  .openapi('ApiV1EmployeesWorkRecordHolidayType')

const ApiV1EmployeesWorkRecordHolidayTypeFieldsSchema = z
  .object({ holiday_type: ApiV1EmployeesWorkRecordHolidayTypeSchema })
  .openapi({ required: ['holiday_type'] })
  .openapi('ApiV1EmployeesWorkRecordHolidayTypeFields')

const ApiV1EmployeesWorkRecordHolidayMinsSchema = z
  .int32()
  .min(1)
  .max(1440)
  .openapi({ description: '休暇により計上する時間（分単位）' })
  .openapi('ApiV1EmployeesWorkRecordHolidayMins')

const ApiV1EmployeesWorkRecordHolidayTimeRangeRequestSchema = z
  .strictObject({
    start_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '取得開始時刻', example: '2018-07-31 08:00:00' }),
    end_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .openapi({ description: '取得終了時刻', example: '2018-07-31 09:00:00' }),
  })
  .openapi({ required: ['start_at', 'end_at'] })
  .openapi('ApiV1EmployeesWorkRecordHolidayTimeRangeRequest')

const ApiV1EmployeesWorkRecordHolidayTimeRangesRequestSchema = z
  .array(ApiV1EmployeesWorkRecordHolidayTimeRangeRequestSchema)
  .min(1)
  .openapi({ description: '時間休の取得時間帯' })
  .openapi('ApiV1EmployeesWorkRecordHolidayTimeRangesRequest')

const ApiV1EmployeesWorkRecordHolidayTimeRequestFieldsSchema = z
  .object({
    mins: ApiV1EmployeesWorkRecordHolidayMinsSchema.exactOptional(),
    time_ranges: ApiV1EmployeesWorkRecordHolidayTimeRangesRequestSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWorkRecordHolidayTimeRequestFields')

const ApiV1EmployeesWorkRecordAnnualPaidHolidayRequestSchema =
  ApiV1EmployeesWorkRecordHolidayTypeFieldsSchema.and(
    ApiV1EmployeesWorkRecordHolidayTimeRequestFieldsSchema,
  )
    .and(
      z
        .object({
          holiday_category: z
            .literal('annual_paid_holiday')
            .openapi({ description: '休暇カテゴリ' }),
        })
        .openapi({ required: ['holiday_category'] }),
    )
    .openapi({ title: '年次有給休暇' })
    .openapi('ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest')

const ApiV1EmployeesWorkRecordSpecialHolidaySettingIdSchema = z
  .int32()
  .min(1)
  .max(2147483647)
  .openapi({ description: '特別休暇設定ID' })
  .openapi('ApiV1EmployeesWorkRecordSpecialHolidaySettingId')

const ApiV1EmployeesWorkRecordSpecialHolidayRequestSchema =
  ApiV1EmployeesWorkRecordHolidayTypeFieldsSchema.and(
    ApiV1EmployeesWorkRecordHolidayTimeRequestFieldsSchema,
  )
    .and(
      z
        .object({
          holiday_category: z.literal('special_holiday').openapi({ description: '休暇カテゴリ' }),
          special_holiday_setting_id: ApiV1EmployeesWorkRecordSpecialHolidaySettingIdSchema,
        })
        .openapi({ required: ['holiday_category', 'special_holiday_setting_id'] }),
    )
    .openapi({ title: '特別休暇' })
    .openapi('ApiV1EmployeesWorkRecordSpecialHolidayRequest')

const ApiV1EmployeesWorkRecordCompensatoryHolidayTypeSchema = z
  .enum(['full', 'half', 'morning_off', 'afternoon_off'])
  .openapi({
    description: '取得単位（全休: full、半休: half、午前休: morning_off、午後休: afternoon_off）',
  })
  .openapi('ApiV1EmployeesWorkRecordCompensatoryHolidayType')

const ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDateSchema = z.iso
  .date()
  .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
  .openapi({ description: '代休の元となる休日出勤日', example: '2018-07-31' })
  .openapi('ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate')

const ApiV1EmployeesWorkRecordCompensatoryHolidayRequestSchema = z
  .object({
    holiday_category: z.literal('compensatory_holiday').openapi({ description: '休暇カテゴリ' }),
    holiday_type: ApiV1EmployeesWorkRecordCompensatoryHolidayTypeSchema,
    source_date: ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDateSchema,
  })
  .openapi({ title: '代休', required: ['holiday_category', 'holiday_type', 'source_date'] })
  .openapi('ApiV1EmployeesWorkRecordCompensatoryHolidayRequest')

const ApiV1EmployeesWorkRecordHolidayRequestSchema = z
  .xor([
    ApiV1EmployeesWorkRecordAnnualPaidHolidayRequestSchema,
    ApiV1EmployeesWorkRecordSpecialHolidayRequestSchema,
    ApiV1EmployeesWorkRecordCompensatoryHolidayRequestSchema,
  ])
  .openapi({
    description:
      '休暇の内訳。\nfull、morning_off、afternoon_off では mins と time_ranges を指定しません。\nannual_paid_holiday と有給の special_holiday の half では mins を指定します。無給の special_holiday の half では mins を指定できません。\nhalf を2つ組み合わせて全休にする場合は、どちらの half でも mins を指定できません。\ncompensatory_holiday では mins と time_ranges を指定しません。\nannual_paid_holiday と special_holiday の hourly では、対象日に適用される勤務賃金設定の時間休の入力方式に従い、時間数方式の場合は mins、時間帯方式の場合は time_ranges を指定します。\nhourly の mins は60分単位です。',
    discriminator: {
      propertyName: 'holiday_category',
      mapping: {
        annual_paid_holiday:
          '#/components/schemas/ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest',
        special_holiday: '#/components/schemas/ApiV1EmployeesWorkRecordSpecialHolidayRequest',
        compensatory_holiday:
          '#/components/schemas/ApiV1EmployeesWorkRecordCompensatoryHolidayRequest',
      },
    },
  })
  .openapi('ApiV1EmployeesWorkRecordHolidayRequest')

const ApiV1EmployeesWorkRecordHolidayTimeRangeResponseSchema = z
  .strictObject({
    start_at: z.iso.datetime({ offset: true }).openapi({ description: '取得開始時刻' }),
    end_at: z.iso.datetime({ offset: true }).openapi({ description: '取得終了時刻' }),
  })
  .openapi({ required: ['start_at', 'end_at'] })
  .openapi('ApiV1EmployeesWorkRecordHolidayTimeRangeResponse')

const ApiV1EmployeesWorkRecordHolidayTimeRangesResponseSchema = z
  .array(ApiV1EmployeesWorkRecordHolidayTimeRangeResponseSchema)
  .openapi({ description: '時間休の取得時間帯' })
  .openapi('ApiV1EmployeesWorkRecordHolidayTimeRangesResponse')

const ApiV1EmployeesWorkRecordHolidayTimeResponseFieldsSchema = z
  .object({
    mins: ApiV1EmployeesWorkRecordHolidayMinsSchema.exactOptional(),
    time_ranges: ApiV1EmployeesWorkRecordHolidayTimeRangesResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWorkRecordHolidayTimeResponseFields')

const ApiV1EmployeesWorkRecordAnnualPaidHolidayResponseSchema =
  ApiV1EmployeesWorkRecordHolidayTypeFieldsSchema.and(
    ApiV1EmployeesWorkRecordHolidayTimeResponseFieldsSchema,
  )
    .and(
      z
        .object({
          holiday_category: z
            .literal('annual_paid_holiday')
            .openapi({ description: '休暇カテゴリ' }),
        })
        .openapi({ required: ['holiday_category'] }),
    )
    .openapi({ title: '年次有給休暇' })
    .openapi('ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse')

const ApiV1EmployeesWorkRecordSpecialHolidayResponseSchema =
  ApiV1EmployeesWorkRecordHolidayTypeFieldsSchema.and(
    ApiV1EmployeesWorkRecordHolidayTimeResponseFieldsSchema,
  )
    .and(
      z
        .object({
          holiday_category: z.literal('special_holiday').openapi({ description: '休暇カテゴリ' }),
          special_holiday_setting_id: ApiV1EmployeesWorkRecordSpecialHolidaySettingIdSchema,
        })
        .openapi({ required: ['holiday_category', 'special_holiday_setting_id'] }),
    )
    .openapi({ title: '特別休暇' })
    .openapi('ApiV1EmployeesWorkRecordSpecialHolidayResponse')

const ApiV1EmployeesWorkRecordCompensatoryHolidayResponseSchema = z
  .object({
    holiday_category: z.literal('compensatory_holiday').openapi({ description: '休暇カテゴリ' }),
    holiday_type: ApiV1EmployeesWorkRecordCompensatoryHolidayTypeSchema,
    source_date: ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDateSchema,
  })
  .openapi({ title: '代休', required: ['holiday_category', 'holiday_type', 'source_date'] })
  .openapi('ApiV1EmployeesWorkRecordCompensatoryHolidayResponse')

const ApiV1EmployeesWorkRecordHolidayResponseSchema = z
  .xor([
    ApiV1EmployeesWorkRecordAnnualPaidHolidayResponseSchema,
    ApiV1EmployeesWorkRecordSpecialHolidayResponseSchema,
    ApiV1EmployeesWorkRecordCompensatoryHolidayResponseSchema,
  ])
  .openapi({
    description:
      '休暇の内訳。\nfull では mins と time_ranges を返しません。\nhalf では mins を返します。\nmorning_off、afternoon_off では mins を返さず、時間帯を持つ実績の場合は time_ranges を返します。\nhourly では mins を返し、時間帯を持つ実績の場合は time_ranges も返します。',
    discriminator: {
      propertyName: 'holiday_category',
      mapping: {
        annual_paid_holiday:
          '#/components/schemas/ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse',
        special_holiday: '#/components/schemas/ApiV1EmployeesWorkRecordSpecialHolidayResponse',
        compensatory_holiday:
          '#/components/schemas/ApiV1EmployeesWorkRecordCompensatoryHolidayResponse',
      },
    },
  })
  .openapi('ApiV1EmployeesWorkRecordHolidayResponse')

const ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializerSchema = z
  .object({
    entried: z
      .boolean()
      .exactOptional()
      .openapi({ description: '健康保険に加入しているかどうか null不可' }),
    health_insurance_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の健康保険料の計算方法', example: 'manual' }),
    health_insurance_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の健康保険料の計算方法', example: 'manual' }),
    manual_health_insurance_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の健康保険料の直接指定金額（従業員負担分）',
        example: 8888,
      }),
    manual_health_insurance_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の健康保険料の直接指定金額（従業員負担分）',
        example: 7777,
      }),
    manual_health_insurance_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の健康保険料の直接指定金額（会社負担分）',
        example: 6666.0001,
      }),
    manual_health_insurance_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の健康保険料の直接指定金額（会社負担分）',
        example: 5555.0001,
      }),
    care_insurance_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の介護保険料の計算方法', example: 'manual' }),
    care_insurance_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の介護保険料の計算方法', example: 'manual' }),
    manual_care_insurance_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の介護保険料の直接指定金額（従業員負担分）',
        example: 4444,
      }),
    manual_care_insurance_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の介護保険料の直接指定金額（従業員負担分）',
        example: 3333,
      }),
    manual_care_insurance_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の介護保険料の直接指定金額（会社負担分）',
        example: 2222.0001,
      }),
    manual_care_insurance_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の介護保険料の直接指定金額（会社負担分）',
        example: 1111.0001,
      }),
    child_support_fund_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の子ども・子育て支援金の計算方法', example: 'manual' }),
    child_support_fund_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の子ども・子育て支援金の計算方法', example: 'manual' }),
    manual_child_support_fund_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）',
        example: 4000,
      }),
    manual_child_support_fund_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の子ども・子育て支援金の直接指定金額（従業員負担分）',
        example: 3000,
      }),
    manual_child_support_fund_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の子ども・子育て支援金の直接指定金額（会社負担分）',
        example: 2000.0001,
      }),
    manual_child_support_fund_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の子ども・子育て支援金の直接指定金額（会社負担分）',
        example: 1000.0001,
      }),
    reference_num: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '健康保険の被保険者整理番号', example: '0000000000' }),
    standard_monthly_remuneration: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '標準報酬月額 null不可', example: 58000 }),
    health_insurance_qualification_required: z
      .boolean()
      .exactOptional()
      .openapi({ description: '健康保険の資格確認書の発行が必要かどうか' }),
  })
  .openapi({ required: ['standard_monthly_remuneration'] })
  .openapi('ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer')

const ApiV1EmployeesDependentRuleUpdateRequestSerializerSchema = z
  .object({
    id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '家族情報ルールID（idがない場合は新規作成になる)', example: 1 }),
    last_name: z.string().max(255).openapi({ description: '姓 null不可', example: '山田' }),
    first_name: z.string().max(255).openapi({ description: '名 null不可', example: '花子' }),
    last_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '姓カナ', example: 'ヤマダ' }),
    first_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '名カナ', example: 'ハナコ' }),
    gender: z
      .enum(['unselected', 'male', 'female'])
      .openapi({
        description:
          '性別　unselected: 未選択, male: 男性, female: 女性（デフォルト: unselected: 未選択）',
        example: 'male',
      }),
    relationship: z
      .enum([
        'spouse',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
        'great_grandfather',
        'great_grandmother',
        'spouses_child',
      ])
      .openapi({
        description:
          '続柄 null不可 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子',
      }),
    birth_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .max(10)
      .openapi({ description: '生年月日 null不可', example: '1999-01-01' }),
    residence_type: z
      .enum(['live_in', 'resident', 'non_resident'])
      .openapi({
        description:
          '同居・別居 null不可 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)',
      }),
    zipcode1: z
      .string()
      .max(3)
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号1', example: '000' }),
    zipcode2: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号2', example: '0000' }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 4,
      }),
    address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所' }),
    address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所カナ' }),
    base_pension_num: z
      .string()
      .max(10)
      .exactOptional()
      .openapi({ description: '基礎年金番号', example: '1234567890' }),
    income: z.int32().min(0).max(999999999).openapi({ description: '年間所得 null不可' }),
    annual_revenue: z.int32().min(0).max(999999999).openapi({ description: '年間収入 null不可' }),
    disability_type: z
      .enum(['na', 'general', 'heavy'])
      .openapi({
        description:
          '障害に該当するか null不可 na: 障害なし, general: 一般の障害者, heavy: 特別障害者',
      }),
    occupation: z.string().max(255).exactOptional().openapi({ description: '職業' }),
    annual_remittance_amount: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '一年間の送金額' }),
    employment_insurance_receive_status: z
      .enum([
        'unselected',
        'receiving_employment_insurance',
        'not_receiving_employment_insurance',
        'pending_employment_insurance',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '雇用保険受給の有無\n- unselected 未選択\n- receiving_employment_insurance 雇用保険受給有り\n- not_receiving_employment_insurance 雇用保険受給無し\n- pending_employment_insurance 申請中',
        example: 'receiving_employment_insurance',
      }),
    employment_insurance_receives_from: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '雇用保険受給開始年月日 employment_insurance_receive_statusが未選択、無しの場合は指定できません。',
        example: '2021-04-01',
      }),
    health_insurance_qualification_required: z
      .boolean()
      .exactOptional()
      .openapi({ description: '健康保険の資格確認書の発行が必要かどうか' }),
    phone_type: z
      .enum(['unselected', 'home', 'office', 'mobile', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '電話番号の種別\n- unselected 未選択\n- home 自宅\n- office 勤務先\n- mobile 携帯\n- other その他',
      }),
    phone1: z
      .string()
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({ description: '電話番号1（先頭番号、例:03-1111-222x の03部分）', example: '000' }),
    phone2: z
      .string()
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({
        description: '電話番号2（中間番号、例:03-1111-222x の1111部分）',
        example: '0000',
      }),
    phone3: z
      .string()
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({
        description: '電話番号3（末尾番号、例:03-1111-222x の222x部分）',
        example: '0000',
      }),
    destroy: z
      .boolean()
      .exactOptional()
      .openapi({ description: '家族情報を削除するか', example: false }),
    social_insurance_and_tax_dependent: z
      .enum(['social_insurance_and_tax', 'tax_only', 'social_insurance_only', 'not_dependent'])
      .openapi({
        description:
          '扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ, not_dependent: 扶養していない',
      }),
    social_insurance_dependent_acquisition_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険の扶養加入日' }),
    social_insurance_dependent_acquisition_reason: z
      .enum([
        '',
        'start_working',
        'marriage',
        'turnover',
        'decrease_in_income',
        'other',
        'birth',
        'live_in',
      ])
      .exactOptional()
      .openapi({
        description:
          '社会保険の扶養加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": 未選択, birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他',
      }),
    social_insurance_other_dependent_acquisition_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険のその他の扶養加入理由' }),
    social_insurance_dependent_disqualification_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険の扶養喪失日' }),
    social_insurance_dependent_disqualification_reason: z
      .enum([
        '',
        'death',
        'divorce',
        'start_working_or_increase_in_income',
        'reach_75_years_old',
        'disability',
        'other',
        'start_working',
        'increase_in_income',
      ])
      .exactOptional()
      .openapi({
        description:
          '社会保険の扶養喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他',
      }),
    social_insurance_other_dependent_disqualification_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '社会保険のその他の扶養喪失理由' }),
    tax_dependent_acquisition_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養の加入日' }),
    tax_dependent_acquisition_reason: z
      .enum([
        '',
        'start_working',
        'marriage',
        'turnover',
        'decrease_in_income',
        'other',
        'birth',
        'live_in',
      ])
      .exactOptional()
      .openapi({
        description:
          '税扶養の加入理由 配偶者の場合 "": 未選択, start_working: 配偶者の就職, marriage: 婚姻, turnover: 離職, decrease_in_income: 収入減少, other: その他 配偶者以外の場合 "": birth: 出生, turnover: 離職, decrease_in_income: 収入減, live_in: 同居, other: その他',
      }),
    tax_other_dependent_acquisition_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養のその他の加入理由' }),
    tax_dependent_disqualification_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養の喪失日' }),
    tax_dependent_disqualification_reason: z
      .enum([
        '',
        'death',
        'divorce',
        'start_working_or_increase_in_income',
        'reach_75_years_old',
        'disability',
        'other',
        'start_working',
        'increase_in_income',
      ])
      .exactOptional()
      .openapi({
        description:
          '税扶養の喪失理由 配偶者の場合 "": 未選択, death: 死亡, divorce: 離婚, start_working_or_increase_in_income: 就職・収入増加, reach_75_years_old: 歳到達, disability: 障害認定, other: その他 配偶者以外の場合 "": 未選択, death: 死亡, start_working: 就職, increase_in_income: 収入増加, reach_75_years_old: ７５歳到達, disability: 障害認定, other: その他',
      }),
    tax_other_dependent_disqualification_reason: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '税扶養のその他の喪失理由' }),
    non_resident_dependents_reason: z
      .enum([
        'none',
        'over_16_to_under_30_or_over_70',
        'study_abroad',
        'handicapped',
        'over_38_man',
      ])
      .exactOptional()
      .openapi({
        description:
          '非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払',
      }),
  })
  .openapi({
    required: [
      'last_name',
      'first_name',
      'gender',
      'relationship',
      'birth_date',
      'residence_type',
      'income',
      'annual_revenue',
      'disability_type',
      'social_insurance_and_tax_dependent',
    ],
  })
  .openapi('ApiV1EmployeesDependentRuleUpdateRequestSerializer')

const ApiV1EmployeesTimeClockSerializerSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).exactOptional().openapi({ description: '打刻ID' }),
    date: z.iso.date().exactOptional().openapi({ description: '打刻日' }),
    type: z
      .enum(['clock_in', 'break_begin', 'break_end', 'clock_out'])
      .exactOptional()
      .openapi({
        description:
          '打刻種別(clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤)',
      }),
    datetime: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: '打刻時刻' }),
    original_datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'オリジナルの打刻時間' }),
    note: z.string().max(255).exactOptional().openapi({ description: '打刻メモ' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesTimeClockSerializer')

const ApiV1EmployeesWorkRecordSerializerSchema = z
  .object({
    break_records: z
      .array(ApiV1EmployeesWorkRecordTimeRangeResponseSerializerSchema)
      .exactOptional()
      .openapi({ description: '休憩時間のリスト' }),
    work_record_segments: z
      .array(ApiV1EmployeesWorkRecordTimeRangeResponseSerializerSchema)
      .exactOptional()
      .openapi({
        description: '出退勤のリスト\n  - 登録されている全ての出退勤時間のリストを返します。',
      }),
    clock_in_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '出勤時刻\n  - 出勤時刻を返します。出退勤が複数登録されている場合は、最初の出退勤の出勤時間を返します。',
      }),
    clock_out_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '退勤時刻\n  - 退勤時刻を返します。出退勤が複数登録されている場合は、最後の出退勤の退勤時間を返します。',
      }),
    date: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: '対象日付' }),
    day_pattern: z
      .enum(['normal_day', 'prescribed_holiday', 'legal_holiday'])
      .exactOptional()
      .openapi({
        description:
          '勤務パターン\n- normal_day: 所定労働日\n- prescribed_holiday: 所定休日\n- legal_holiday: 法定休日',
      }),
    schedule_pattern: z
      .enum([
        '',
        'substitute_holiday_work',
        'substitute_holiday',
        'compensatory_holiday_work',
        'compensatory_holiday',
        'special_holiday',
      ])
      .exactOptional()
      .openapi({
        description:
          'スケジュールパターン\n- substitute_holiday_work: 振替出勤\n- substitute_holiday: 振替休日\n- compensatory_holiday_work: 代休出勤\n- compensatory_holiday: 代休\n- special_holiday: 特別休暇',
      }),
    early_leaving_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '早退分の時間（分単位）' }),
    half_special_holiday_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    hourly_special_holiday_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    is_absence: z
      .boolean()
      .exactOptional()
      .openapi({ description: '欠勤かどうか', example: false }),
    is_editable: z
      .boolean()
      .exactOptional()
      .openapi({ description: '勤怠データが編集可能かどうか' }),
    lateness_mins: z.int32().exactOptional().openapi({ description: '遅刻分の時間（分単位）' }),
    normal_work_clock_in_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: '所定労働開始時刻' }),
    normal_work_clock_out_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: '所定労働終了時刻' }),
    normal_work_mins: z.int32().exactOptional().openapi({ description: '所定労働時間' }),
    note: z.string().max(255).exactOptional().openapi({ description: '勤怠メモ' }),
    paid_holidays: z
      .array(
        z
          .object({
            type: z
              .enum(['full', 'half', 'morning_off', 'afternoon_off', 'hourly'])
              .openapi({
                description:
                  '有給休暇の種別取得単位（full:全休、half:半休、morning_off:午前休、 afternoon_off:午後休、hourly:時間休）',
                example: 'half',
              }),
            mins: z
              .int32()
              .openapi({ description: '年次有給休暇の休暇時間（分単位）', example: 240 }),
            days: z
              .float32()
              .openapi({
                description: '年次有給休暇の消化日数（全休：1, 半日単位：0.5, 時間休：0）',
                example: 0.5,
              }),
          })
          .openapi({ required: ['type', 'mins', 'days'] }),
      )
      .exactOptional()
      .openapi({
        description: '[deprecated] 年次有給休暇の実績 ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    holidays: z
      .array(ApiV1EmployeesWorkRecordHolidayResponseSchema)
      .exactOptional()
      .openapi({
        description:
          '休暇の内訳（年次有給休暇、特別休暇、代休）。\nfull では mins と time_ranges を返しません。half では mins を返します。\nmorning_off、afternoon_off では mins を返さず、時間帯を持つ実績の場合は time_ranges を返します。\nhourly は年休・特休のみで、mins を返し、時間帯を持つ実績の場合は time_ranges も返します。',
      }),
    special_holiday: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] この日に対する特別休暇取得日数。半休の場合は0.5が入ります。時間休の場合はhourly_special_holiday_minsを所定労働時間で割った値が入るため、実際の時間を確認するにはhourly_special_holiday_minsを参照してください。 ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    special_holiday_setting_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description: '[deprecated] 特別休暇設定ID ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    use_attendance_deduction: z
      .boolean()
      .exactOptional()
      .openapi({ description: '欠勤・遅刻・早退を控除対象時間に算入するかどうか' }),
    use_default_work_pattern: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'デフォルトの勤務時間設定を使っているかどうか' }),
    use_half_compensatory_holiday: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 代休の半休を利用したかどうか ※ 削除予定のため holidays を参照してください',
        deprecated: true,
        example: false,
      }),
    total_overtime_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '時間外労働時間（分）（Webの勤怠登録画面にて詳細項目の「勤務時間の長さを自動で計算しない」にチェックを入れた場合0が返却されます。時間外労働時間はtotal_overtime_except_normal_work_minsを参照してください。）',
      }),
    total_prescribed_holiday_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定休日労働時間（分）' }),
    total_holiday_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '法定休日労働時間（分）' }),
    total_latenight_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜労働時間（分）' }),
    not_auto_calc_work_time: z
      .boolean()
      .exactOptional()
      .openapi({
        description: '勤怠登録時に勤務時間の長さを自動で計算しないかどうか',
        example: false,
      }),
    total_excess_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を参照してください',
        deprecated: true,
      }),
    total_latenight_excess_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 深夜の法定内残業時間（分） ※ 削除予定のため total_latenight_overtime_within_statutory_work_mins を参照してください',
        deprecated: true,
      }),
    total_overtime_within_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '法定内残業時間（分）' }),
    total_latenight_overtime_within_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜の法定内残業時間（分）' }),
    total_overtime_except_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定外法定外労働時間（分）' }),
    total_latenight_overtime_except_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜の所定外法定外労働時間（分）' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWorkRecordSerializer')

const LegacyApiV1EmployeesWorkRecordSerializerSchema = z
  .object({
    break_records: z
      .array(ApiV1EmployeesWorkRecordTimeRangeResponseSerializerSchema)
      .exactOptional()
      .openapi({ description: '休憩時間のリスト' }),
    work_record_segments: z
      .array(ApiV1EmployeesWorkRecordTimeRangeResponseSerializerSchema)
      .exactOptional()
      .openapi({
        description: '出退勤のリスト\n  - 登録されている全ての出退勤時間のリストを返します。',
      }),
    clock_in_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '出勤時刻\n  - 出勤時刻を返します。出退勤が複数登録されている場合は、最初の出退勤の出勤時間を返します。',
      }),
    clock_out_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '退勤時刻\n  - 退勤時刻を返します。出退勤が複数登録されている場合は、最後の出退勤の退勤時間を返します。',
      }),
    date: z.iso.datetime({ offset: true }).exactOptional().openapi({ description: '対象日付' }),
    day_pattern: z
      .enum(['normal_day', 'prescribed_holiday', 'legal_holiday'])
      .exactOptional()
      .openapi({
        description:
          '勤務パターン\n- normal_day: 所定労働日\n- prescribed_holiday: 所定休日\n- legal_holiday: 法定休日',
      }),
    schedule_pattern: z
      .enum([
        '',
        'substitute_holiday_work',
        'substitute_holiday',
        'compensatory_holiday_work',
        'compensatory_holiday',
        'special_holiday',
      ])
      .exactOptional()
      .openapi({
        description:
          'スケジュールパターン\n- substitute_holiday_work: 振替出勤\n- substitute_holiday: 振替休日\n- compensatory_holiday_work: 代休出勤\n- compensatory_holiday: 代休\n- special_holiday: 特別休暇',
      }),
    early_leaving_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '早退分の時間（分単位）' }),
    half_paid_holiday_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 有給休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    half_special_holiday_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    hourly_paid_holiday_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 有給休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    hourly_special_holiday_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    is_absence: z
      .boolean()
      .exactOptional()
      .openapi({ description: '欠勤かどうか', example: false }),
    is_editable: z
      .boolean()
      .exactOptional()
      .openapi({ description: '勤怠データが編集可能かどうか' }),
    lateness_mins: z.int32().exactOptional().openapi({ description: '遅刻分の時間（分単位）' }),
    normal_work_clock_in_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: '所定労働開始時刻' }),
    normal_work_clock_out_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: '所定労働終了時刻' }),
    normal_work_mins: z.int32().exactOptional().openapi({ description: '所定労働時間' }),
    note: z.string().max(255).exactOptional().openapi({ description: '勤怠メモ' }),
    paid_holiday: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] この日に対する有給取得日数。半休の場合は0.5が入ります。時間休の場合はhourly_paid_holiday_minsを所定労働時間で割った値が入るため、実際の時間を確認するにはhourly_paid_holiday_minsを参照してください。 ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    special_holiday: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] この日に対する特別休暇取得日数。半休の場合は0.5が入ります。時間休の場合はhourly_special_holiday_minsを所定労働時間で割った値が入るため、実際の時間を確認するにはhourly_special_holiday_minsを参照してください。 ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    special_holiday_setting_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description: '[deprecated] 特別休暇設定ID ※ 削除予定のため holidays を参照してください',
        deprecated: true,
      }),
    use_attendance_deduction: z
      .boolean()
      .exactOptional()
      .openapi({ description: '欠勤・遅刻・早退を控除対象時間に算入するかどうか' }),
    use_default_work_pattern: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'デフォルトの勤務時間設定を使っているかどうか' }),
    use_half_compensatory_holiday: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 代休の半休を利用したかどうか ※ 削除予定のため holidays を参照してください',
        deprecated: true,
        example: false,
      }),
    total_overtime_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '時間外労働時間（分）（Webの勤怠登録画面にて詳細項目の「勤務時間の長さを自動で計算しない」にチェックを入れた場合0が返却されます。時間外労働時間はtotal_overtime_except_normal_work_minsを参照してください。）',
      }),
    total_prescribed_holiday_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定休日労働時間（分）' }),
    total_holiday_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '法定休日労働時間（分）' }),
    total_latenight_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜労働時間（分）' }),
    not_auto_calc_work_time: z
      .boolean()
      .exactOptional()
      .openapi({
        description: '勤怠登録時に勤務時間の長さを自動で計算しないかどうか',
        example: false,
      }),
    total_excess_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を参照してください',
        deprecated: true,
      }),
    total_latenight_excess_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 深夜の法定内残業時間（分） ※ 削除予定のため total_latenight_overtime_within_statutory_work_mins を参照してください',
        deprecated: true,
      }),
    total_overtime_within_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '法定内残業時間（分）' }),
    total_latenight_overtime_within_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜の法定内残業時間（分）' }),
    total_overtime_except_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定外法定外労働時間（分）' }),
    total_latenight_overtime_except_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜の所定外法定外労働時間（分）' }),
  })
  .openapi({ required: [] })
  .openapi('LegacyApiV1EmployeesWorkRecordSerializer')

const ApiV1EmployeesWorkRecordSummarySerializerSchema = z
  .object({
    year: z.int32().exactOptional().openapi({ description: '給与支払い年' }),
    month: z.int32().min(1).max(12).exactOptional().openapi({ description: '給与支払い月' }),
    start_date: z.iso.date().exactOptional().openapi({ description: '集計開始日' }),
    end_date: z.iso.date().exactOptional().openapi({ description: '集計終了日' }),
    work_days: z.float32().exactOptional().openapi({ description: '労働日数' }),
    total_work_mins: z.int32().exactOptional().openapi({ description: '総勤務時間（分）' }),
    total_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定内労働時間（分）' }),
    total_excess_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 給与計算に用いられる法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を参照してください',
        deprecated: true,
      }),
    total_overtime_within_statutory_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '給与計算に用いられる法定内残業時間（分）' }),
    total_overtime_except_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定外法定外労働時間' }),
    total_overtime_within_normal_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定内法定外労働時間（裁量労働制の場合はみなしベース）' }),
    total_prescribed_holiday_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '所定休日労働時間（分）' }),
    total_holiday_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '法定休日労働時間（分）' }),
    total_latenight_work_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '深夜労働allow(company)時間（分）' }),
    num_absences: z.float32().exactOptional().openapi({ description: '欠勤日数' }),
    num_paid_holidays: z.float32().exactOptional().openapi({ description: '有給取得日数' }),
    num_paid_holidays_and_hours: ApiV1HolidaysAndHoursSerializerSchema.exactOptional(),
    num_paid_holidays_left: z.float32().exactOptional().openapi({ description: '有給残日数' }),
    num_paid_holidays_and_hours_left: ApiV1HolidaysAndHoursSerializerSchema.exactOptional(),
    num_substitute_holidays_used: z
      .float32()
      .exactOptional()
      .openapi({ description: '振替休日の使用日数' }),
    num_compensatory_holidays_used: z
      .float32()
      .exactOptional()
      .openapi({ description: '代休の使用日数' }),
    num_special_holidays_used: z
      .float32()
      .exactOptional()
      .openapi({ description: '特別休暇の使用日数' }),
    num_special_holidays_and_hours_used: ApiV1HolidaysAndHoursSerializerSchema.exactOptional(),
    total_lateness_and_early_leaving_mins: z
      .int32()
      .exactOptional()
      .openapi({ description: '遅刻早退時間（分）' }),
    multi_hourly_wages: z
      .array(ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializerSchema)
      .exactOptional()
      .openapi({ description: '複数時給の労働時間の内訳（複数時給を設定している従業員のみ）' }),
    work_records: z
      .array(
        z.union([
          ApiV1EmployeesWorkRecordSerializerSchema,
          LegacyApiV1EmployeesWorkRecordSerializerSchema,
        ]),
      )
      .exactOptional()
      .openapi({ description: '日々の勤怠情報' }),
    total_shortage_work_mins: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: '不足時間（分）' }),
    total_deemed_paid_excess_statutory_work_mins: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] みなし外の法定内残業時間（分） ※ 削除予定のため total_deemed_paid_overtime_within_statutory_work_mins を参照してください',
        deprecated: true,
      }),
    total_deemed_paid_overtime_within_statutory_work_mins: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'みなし外の法定内残業時間（分）' }),
    total_deemed_paid_overtime_except_normal_work_mins: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'みなし外の時間外労働時間（分）' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWorkRecordSummarySerializer')

const ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializerSchema = z
  .object({
    entried: z
      .boolean()
      .exactOptional()
      .openapi({ description: '厚生年金保険に加入しているかどうか null不可' }),
    welfare_pension_insurance_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の厚生年金保険料の計算方法', example: 'manual' }),
    welfare_pension_insurance_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の厚生年金保険料の計算方法', example: 'manual' }),
    manual_welfare_pension_insurance_amount_of_employee_salary: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の厚生年金保険料の直接指定金額（従業員負担分）',
        example: 1111,
      }),
    manual_welfare_pension_insurance_amount_of_employee_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の厚生年金保険料の直接指定金額（従業員負担分）',
        example: 2222,
      }),
    manual_welfare_pension_insurance_amount_of_company_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の厚生年金保険料の直接指定金額（会社負担分）',
        example: 3333.0001,
      }),
    manual_welfare_pension_insurance_amount_of_company_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の厚生年金保険料の直接指定金額（会社負担分）',
        example: 4444.0001,
      }),
    child_allowance_contribution_salary_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '給与計算時の子ども・子育て拠出金の計算方法', example: 'manual' }),
    child_allowance_contribution_bonus_calc_type: z
      .enum(['auto', 'manual'])
      .exactOptional()
      .openapi({ description: '賞与計算時の子ども・子育て拠出金の計算方法', example: 'manual' }),
    manual_child_allowance_contribution_amount_salary: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '給与計算時の子ども・子育て拠出金の直接指定金額',
        example: 5555.0001,
      }),
    manual_child_allowance_contribution_amount_bonus: z
      .float32()
      .min(-999999999.9999)
      .max(999999999.9999)
      .nullable()
      .exactOptional()
      .openapi({
        description: '賞与計算時の子ども・子育て拠出金の直接指定金額',
        example: 6666.0001,
      }),
    reference_num: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '厚生年金保険の被保険者整理番号', example: '0000000000' }),
    standard_monthly_remuneration: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '標準報酬月額 null不可', example: 88000 }),
  })
  .openapi({ required: ['standard_monthly_remuneration'] })
  .openapi('ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer')

const ApiV1EmployeesBankAccountRuleUpdateRequestSerializerSchema = z
  .object({
    bank_name: z.string().max(255).exactOptional().openapi({ description: '金融機関名' }),
    bank_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '金融機関名カナ 英字カナのみ' }),
    bank_code: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({ description: '金融機関コード 数値文字列4桁', example: '0000' }),
    branch_name: z.string().max(255).exactOptional().openapi({ description: '支店名' }),
    branch_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '支店名カナ　英字カナのみ' }),
    branch_code: z
      .string()
      .max(3)
      .exactOptional()
      .openapi({ description: '支店コード 数値文字列3桁', example: '000' }),
    account_number: z
      .string()
      .max(7)
      .exactOptional()
      .openapi({ description: '口座番号 数値文字列7桁', example: '0000000' }),
    account_name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: '口座名義カナ　英字カナのみ' }),
    account_type: z
      .enum(['ordinary', 'current', 'saving'])
      .exactOptional()
      .openapi({ description: '預金種類 ordinary: 普通預金, current: 当座預金, saving: 貯蓄預金' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBankAccountRuleUpdateRequestSerializer')

const ApiV1EmployeesBasicPayRuleUpdateRequestSerializerSchema = z
  .object({
    pay_calc_type: z
      .enum(['monthly', 'daily', 'hourly'])
      .openapi({
        description: '給与方式 null不可 monthly: 月給, daily: 日給, hourly: 時給',
        example: 'monthly',
      }),
    pay_amount: z
      .int32()
      .min(0)
      .max(99999999)
      .openapi({ description: '基本給 null不可', example: 220000 }),
  })
  .openapi({ required: ['pay_calc_type', 'pay_amount'] })
  .openapi('ApiV1EmployeesBasicPayRuleUpdateRequestSerializer')

const ApiV1EmployeeProfileCustomFieldSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'カスタム項目ID', example: 1 }),
    field_type: z
      .enum(['file', 'text', 'number', 'date', 'selector', 'time'])
      .exactOptional()
      .openapi({
        description:
          '項目タイプ file: ファイル, text: テキスト, number: 数値, date: 日付, selector: セレクター, time: 時間',
        example: 'file',
      }),
    name: z.string().exactOptional().openapi({ description: '項目名', example: '証明書ファイル' }),
    value: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '値（項目タイプがfileの場合、nullを返します）', example: 'null' }),
    file_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'ファイル名（項目タイプがfile以外の場合、nullを返します）',
        example: '証明書ファイル.jpeg',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeProfileCustomFieldSerializer')

const ApiV1ProfileCustomFieldGroupSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'グループID', example: 1 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'グループ名', example: '資格取得結果' }),
    profile_custom_field_rules: z
      .array(ApiV1EmployeeProfileCustomFieldSerializerSchema)
      .exactOptional()
      .openapi({ description: 'カスタム項目' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1ProfileCustomFieldGroupSerializer')

const ApiV1EmployeesProfileCustomFieldRulesControllerIndexResponseSchema = z
  .object({
    profile_custom_field_groups: z
      .array(ApiV1ProfileCustomFieldGroupSerializerSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesProfileCustomFieldRulesControllerIndexResponse')

const ApiV1EmployeesControllerShowResponseSchema = z
  .object({ employee: ApiV1EmployeeSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesControllerShowResponse')

const ApiV1EmployeesControllerCreateResponseSchema = z
  .object({ employee: ApiV1EmployeeSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesControllerCreateResponse')

const ApiV1EmployeesControllerCreateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '作成対象事業所ID（必須）' }),
    employee: ApiV1EmployeeCreateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'employee'] })
  .openapi('ApiV1EmployeesControllerCreateBody')

const ApiV1EmployeesControllerUpdateResponseSchema = z
  .object({ employee: ApiV1EmployeeSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesControllerUpdateResponse')

const ApiV1EmployeesControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .exactOptional()
      .openapi({
        description: '更新対象年\n- 給与計算対象の従業員情報の場合は必須になります。',
        example: 2021,
      }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .exactOptional()
      .openapi({
        description:
          '更新対象月\n- 給与計算対象の従業員情報の場合は必須になります。\n- 締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。\n- 翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。',
        example: 1,
      }),
    employee: ApiV1EmployeeUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'employee'] })
  .openapi('ApiV1EmployeesControllerUpdateBody')

const ApiV1EmployeesProfileRulesControllerShowResponseSchema = z
  .object({ employee_profile_rule: ApiV1EmployeesProfileRuleSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesProfileRulesControllerShowResponse')

const ApiV1EmployeesProfileRulesControllerUpdateResponseSchema = z
  .object({ employee_profile_rule: ApiV1EmployeesProfileRuleSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesProfileRulesControllerUpdateResponse')

const ApiV1EmployeesProfileRulesControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）' }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '更新対象年（必須）', example: 2021 }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .openapi({
        example: 1,
        description:
          '更新対象月（必須）<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、指定したmonth + 1の値が更新されます。<br>\n翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>',
      }),
    employee_profile_rule: ApiV1EmployeesProfileRuleUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_profile_rule'] })
  .openapi('ApiV1EmployeesProfileRulesControllerUpdateBody')

const ApiV1EmployeesHealthInsuranceRulesControllerShowResponseSchema = z
  .object({
    employee_health_insurance_rule:
      ApiV1EmployeesHealthInsuranceRuleSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesHealthInsuranceRulesControllerShowResponse')

const ApiV1EmployeesHealthInsuranceRulesControllerUpdateResponseSchema = z
  .object({
    employee_health_insurance_rule:
      ApiV1EmployeesHealthInsuranceRuleSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesHealthInsuranceRulesControllerUpdateResponse')

const ApiV1EmployeesHealthInsuranceRulesControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '更新対象年（必須）', example: 2021 }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .openapi({
        description:
          '更新対象月（必須）<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br>\n翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>',
        example: 1,
      }),
    employee_health_insurance_rule: ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_health_insurance_rule'] })
  .openapi('ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody')

const ApiV1EmployeesWelfarePensionInsuranceRulesControllerShowResponseSchema = z
  .object({
    employee_welfare_pension_insurance_rule:
      ApiV1EmployeesWelfarePensionInsuranceRuleSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWelfarePensionInsuranceRulesControllerShowResponse')

const ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateResponseSchema = z
  .object({
    employee_welfare_pension_insurance_rule:
      ApiV1EmployeesWelfarePensionInsuranceRuleSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateResponse')

const ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）' }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '更新対象年（必須）', example: 2021 }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .openapi({
        description:
          '更新対象月（必須）<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br>\n翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>',
        example: 1,
      }),
    employee_welfare_pension_insurance_rule:
      ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_welfare_pension_insurance_rule'] })
  .openapi('ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody')

const ApiV1EmployeesDependentRulesControllerIndexResponseSchema = z
  .object({
    employee_dependent_rules: z.array(ApiV1EmployeesDependentRuleSerializerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesDependentRulesControllerIndexResponse')

const ApiV1EmployeesDependentRulesControllerBulkUpdateResponseSchema = z
  .object({
    employee_dependent_rules: z
      .array(ApiV1EmployeesDependentRuleSerializerSchema)
      .exactOptional()
      .openapi({ description: '家族情報ルール' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesDependentRulesControllerBulkUpdateResponse')

const ApiV1EmployeesDependentRulesControllerBulkUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）' }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '更新対象年（必須）', example: 2021 }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .openapi({
        description:
          '更新対象月（必須）<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br>\n翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>',
        example: 1,
      }),
    employee_dependent_rules: z
      .array(ApiV1EmployeesDependentRuleUpdateRequestSerializerSchema)
      .openapi({ description: '家族情報ルール' }),
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_dependent_rules'] })
  .openapi('ApiV1EmployeesDependentRulesControllerBulkUpdateBody')

const ApiV1EmployeesBankAccountRulesControllerShowResponseSchema = z
  .object({
    employee_bank_account_rule: ApiV1EmployeesBankAccountRuleSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBankAccountRulesControllerShowResponse')

const ApiV1EmployeesBankAccountRulesControllerUpdateResponseSchema = z
  .object({
    employee_bank_account_rule: ApiV1EmployeesBankAccountRuleSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBankAccountRulesControllerUpdateResponse')

const ApiV1EmployeesBankAccountRulesControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）' }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '更新対象年（必須）', example: 2021 }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .openapi({
        description:
          '更新対象月（必須）<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます。<br>\n翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>',
        example: 1,
      }),
    employee_bank_account_rule: ApiV1EmployeesBankAccountRuleUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_bank_account_rule'] })
  .openapi('ApiV1EmployeesBankAccountRulesControllerUpdateBody')

const ApiV1EmployeesBasicPayRulesControllerShowResponseSchema = z
  .object({ employee_basic_pay_rule: ApiV1EmployeesBasicPayRuleSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBasicPayRulesControllerShowResponse')

const ApiV1EmployeesBasicPayRulesControllerUpdateResponseSchema = z
  .object({ employee_basic_pay_rule: ApiV1EmployeesBasicPayRuleSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesBasicPayRulesControllerUpdateResponse')

const ApiV1EmployeesBasicPayRulesControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '更新対象年（必須）', example: 2021 }),
    month: z
      .int32()
      .min(1)
      .max(12)
      .openapi({
        description:
          '更新対象月（必須）<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が更新されます<br>\n翌月払いの従業員の2022/01の従業員情報を更新する場合は、year=2021,month=12を指定してください。<br>',
        example: 1,
      }),
    employee_basic_pay_rule: ApiV1EmployeesBasicPayRuleUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_basic_pay_rule'] })
  .openapi('ApiV1EmployeesBasicPayRulesControllerUpdateBody')

const ApiV1EmployeesWorkRecordsControllerUpdateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID（必須）' }),
    break_records: z
      .array(ApiV1EmployeesWorkRecordTimeRangeSerializerSchema)
      .exactOptional()
      .openapi({ description: '休憩時間のリスト' }),
    work_record_segments: z
      .array(ApiV1EmployeesWorkRecordTimeRangeSerializerSchema)
      .exactOptional()
      .openapi({ description: '出退勤のリスト' }),
    clock_in_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '出勤時刻  \n\n複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。',
        example: '2018-07-31 08:00:00',
      }),
    clock_out_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '退勤時刻\n\n複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。',
        example: '2018-07-31 08:00:00',
      }),
    day_pattern: z
      .enum(['normal_day', 'prescribed_holiday', 'legal_holiday'])
      .exactOptional()
      .openapi({
        description:
          '勤務パターン（所定労働日: normal_day, 所定休日: prescribed_holiday, 法定休日: legal_holiday）\n\nprescribed_holiday、legal_holidayを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。\n- early_leaving_mins\n- lateness_mins\n- paid_holiday',
      }),
    early_leaving_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({ description: '早退分の時間（分単位）' }),
    is_absence: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '欠勤かどうか\n\nis_absenceにtrueを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。\n- break_records\n  - clock_in_at\n  - clock_out_at\n- clock_in_at\n- clock_out_at\n- early_leaving_mins\n- lateness_mins\n- normal_work_clock_in_at\n- normal_work_clock_out_at\n- normal_work_mins\n\nただし、休暇（holidays、paid_holidays、special_holiday、half_special_holiday_mins、hourly_special_holiday_mins）を指定した場合は休暇の登録が優先され、is_absence の指定は無視されます。',
      }),
    lateness_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({ description: '遅刻分の時間（分単位）' }),
    normal_work_clock_in_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '所定労働開始時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）',
        example: '2018-07-31 08:00:00',
      }),
    normal_work_clock_out_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '所定労働終了時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）',
        example: '2018-07-31 08:00:00',
      }),
    normal_work_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '所定労働時間。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）',
      }),
    note: z.string().max(255).exactOptional().openapi({ description: '勤怠メモ' }),
    paid_holidays: z
      .array(
        z
          .object({
            type: z
              .enum(['full', 'half', 'morning_off', 'afternoon_off', 'hourly'])
              .openapi({
                description:
                  '有給休暇の種別を指定します（全休：full, 半休：half, 午前休：morning_off, 午後休：afternoon_off, 時間休：hourly）',
                example: 'half',
              }),
            mins: z
              .int32()
              .min(0)
              .exactOptional()
              .openapi({
                description:
                  '有給休暇を利用した時間（分単位） ※ 全休の場合や午前休、午後休の場合にはこちらの値は参照されません',
              }),
          })
          .openapi({ required: ['type'] }),
      )
      .exactOptional()
      .openapi({
        description: '[deprecated] 年次有給休暇の内訳 ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    holidays: z
      .array(ApiV1EmployeesWorkRecordHolidayRequestSchema)
      .exactOptional()
      .openapi({
        description:
          '休暇の内訳。年次有給休暇、特別休暇、代休を指定できます。\nfull、morning_off、afternoon_off では mins と time_ranges を指定しません。年休と有給の特休の half では mins を指定します。無給の特休の half では mins を指定できません。\nhalf を2つ組み合わせて全休にする場合は、どちらの half でも mins を指定できません。\n年休・特休の hourly は、対象日に適用される勤務賃金設定の時間休の入力方式に従い、時間数方式の場合は mins、時間帯方式の場合は time_ranges を指定します。mins は60分単位です。代休では holiday_type にかかわらず mins と time_ranges を指定しません。\n特別休暇では special_holiday_setting_id、代休では source_date が必須です。',
      }),
    special_holiday: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          '[deprecated] この日の特別休暇取得日数。1日単位で指定します。 ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
        example: '1.0',
      }),
    special_holiday_setting_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '[deprecated] 特別休暇設定ID ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    half_special_holiday_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    hourly_special_holiday_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    use_attendance_deduction: z
      .boolean()
      .exactOptional()
      .openapi({ description: '欠勤・遅刻・早退を控除対象時間に算入するかどうか' }),
    use_default_work_pattern: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'デフォルトの勤務設定を使うかどうか。\n\ntrueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の休日の設定を参照して値が決まります\n- day_pattern\n\ntrueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。\n- normal_work_clock_in_at\n- normal_work_clock_out_at\n- normal_work_mins',
      }),
  })
  .openapi({ required: ['company_id'] })
  .openapi('ApiV1EmployeesWorkRecordsControllerUpdateBody')

const LegacyApiV1EmployeesWorkRecordsControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '事業所ID（必須）' }),
    break_records: z
      .array(ApiV1EmployeesWorkRecordTimeRangeSerializerSchema)
      .exactOptional()
      .openapi({ description: '休憩時間のリスト' }),
    work_record_segments: z
      .array(ApiV1EmployeesWorkRecordTimeRangeSerializerSchema)
      .exactOptional()
      .openapi({ description: '出退勤のリスト' }),
    clock_in_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '出勤時刻  \n\n複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。',
        example: '2018-07-31 08:00:00',
      }),
    clock_out_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '退勤時刻\n\n複数の出退勤を指定できないため非推奨です。 `work_record_segments` を利用してください。',
        example: '2018-07-31 08:00:00',
      }),
    day_pattern: z
      .enum(['normal_day', 'prescribed_holiday', 'legal_holiday'])
      .exactOptional()
      .openapi({
        description:
          '勤務パターン（所定労働日: normal_day, 所定休日: prescribed_holiday, 法定休日: legal_holiday）\n\nprescribed_holiday、legal_holidayを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。\n- early_leaving_mins\n- lateness_mins\n- paid_holiday',
      }),
    early_leaving_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({ description: '早退分の時間（分単位）' }),
    is_absence: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '欠勤かどうか\n\nis_absenceにtrueを指定すると、以下のパラメータについて、指定した値が反映されず無視されます。\n- break_records\n  - clock_in_at\n  - clock_out_at\n- clock_in_at\n- clock_out_at\n- early_leaving_mins\n- lateness_mins\n- normal_work_clock_in_at\n- normal_work_clock_out_at\n- normal_work_mins\n\nただし、休暇（paid_holiday、half_paid_holiday_mins、hourly_paid_holiday_mins、special_holiday、half_special_holiday_mins、hourly_special_holiday_mins）を指定した場合は休暇の登録が優先され、is_absence の指定は無視されます。',
      }),
    lateness_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({ description: '遅刻分の時間（分単位）' }),
    normal_work_clock_in_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '所定労働開始時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）',
        example: '2018-07-31 08:00:00',
      }),
    normal_work_clock_out_at: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description:
          '所定労働終了時刻。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）',
        example: '2018-07-31 08:00:00',
      }),
    normal_work_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '所定労働時間。指定しない場合はデフォルト設定が使用されます。（デフォルト設定は従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。）',
      }),
    note: z.string().max(255).exactOptional().openapi({ description: '勤怠メモ' }),
    paid_holiday: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          '[deprecated] この日の有休取得日数。1日単位で指定します。 ※ paid_holidays を指定する場合にはこちらの値は参照されません ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
        example: '1.0',
      }),
    half_paid_holiday_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 有給休暇の半休を利用した時間（分単位） ※ paid_holidaysを指定する場合にはこちらの値は参照されません ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    hourly_paid_holiday_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 有給休暇の時間休を利用した時間（分単位） ※ paid_holidaysを指定する場合にはこちらの値は参照されません ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    special_holiday: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({
        description:
          '[deprecated] この日の特別休暇取得日数。1日単位で指定します。 ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
        example: '1.0',
      }),
    special_holiday_setting_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '[deprecated] 特別休暇設定ID ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    half_special_holiday_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の半休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    hourly_special_holiday_mins: z
      .int32()
      .min(0)
      .max(1440)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 特別休暇の時間休を利用した時間（分単位） ※ 削除予定のため holidays をご利用ください',
        deprecated: true,
      }),
    use_attendance_deduction: z
      .boolean()
      .exactOptional()
      .openapi({ description: '欠勤・遅刻・早退を控除対象時間に算入するかどうか' }),
    use_default_work_pattern: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'デフォルトの勤務設定を使うかどうか。\n\ntrueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の休日の設定を参照して値が決まります\n- day_pattern\n\ntrueを指定した場合、以下のパラメータについて、指定した値に関係なく、従業員に設定した勤務賃金設定の出退勤時刻と労働時間の設定を参照して値が決まります。\n- normal_work_clock_in_at\n- normal_work_clock_out_at\n- normal_work_mins',
      }),
  })
  .openapi({ required: [] })
  .openapi('LegacyApiV1EmployeesWorkRecordsControllerUpdateBody')

const ApiV1EmployeesWorkRecordSummaryControllerUpdateBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    work_days: z.float32().min(0).max(31).exactOptional().openapi({ description: '総勤務日数' }),
    work_days_on_weekdays: z
      .float32()
      .min(0)
      .max(31)
      .exactOptional()
      .openapi({ description: '所定労働日の勤務日数' }),
    work_days_on_prescribed_holidays: z
      .float32()
      .min(0)
      .max(31)
      .exactOptional()
      .openapi({ description: '所定休日の勤務日数' }),
    work_days_on_legal_holidays: z
      .float32()
      .min(0)
      .max(31)
      .exactOptional()
      .openapi({ description: '法定休日の勤務日数' }),
    total_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '労働時間（分）' }),
    total_normal_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '所定労働時間（分）' }),
    total_excess_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 給与計算に用いられる法定内残業時間（分） ※ 削除予定のため total_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります',
        deprecated: true,
      }),
    total_overtime_within_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '給与計算に用いられる法定内残業時間（分）' }),
    total_holiday_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '法定休日労働時間（分）' }),
    total_latenight_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '深夜労働時間（分）' }),
    total_actual_excess_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 実労働時間ベースの法定内残業時間（分） ※ 削除予定のため total_actual_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります',
        deprecated: true,
      }),
    total_actual_overtime_within_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '実労働時間ベースの法定内残業時間（分）' }),
    total_overtime_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 時間外労働時間（分） ※ 削除予定のため total_overtime_excess_statutory_work_mins を指定してください。両方指定した場合はエラーになります',
        deprecated: true,
      }),
    total_overtime_excess_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '時間外労働時間（分）' }),
    total_prescribed_holiday_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '所定休日労働時間（分）' }),
    num_absences: z.float32().min(0).max(31).exactOptional().openapi({ description: '欠勤日数' }),
    num_absences_for_deduction: z
      .float32()
      .min(0)
      .max(9999.999)
      .exactOptional()
      .openapi({
        description:
          '控除対象の欠勤日数\n\nフレックスタイム制の場合は、指定した値が反映されず無視されます。',
      }),
    total_lateness_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '遅刻時間（分）' }),
    total_lateness_mins_for_deduction: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '控除対象の遅刻時間（分）\n\nフレックスタイム制と裁量労働制の場合は、指定した値が反映されず無視されます。',
      }),
    total_early_leaving_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '早退時間（分）' }),
    total_early_leaving_mins_for_deduction: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '控除対象の早退時間（分）\n\nフレックスタイム制と裁量労働制の場合は、指定した値が反映されず無視されます。',
      }),
    num_paid_holidays: z
      .float32()
      .min(0)
      .max(31)
      .exactOptional()
      .openapi({ description: '有給取得日数' }),
    total_shortage_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '不足時間（分）（フレックスタイム制でのみ使用）' }),
    total_deemed_paid_excess_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] みなし外の法定内残業時間（分）（裁量労働制でのみ使用） ※ 削除予定のため total_deemed_paid_overtime_within_statutory_work_mins を指定してください。両方指定した場合はエラーになります',
        deprecated: true,
      }),
    total_deemed_paid_overtime_within_statutory_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'みなし外の法定内残業時間（分）（裁量労働制でのみ使用）' }),
    total_deemed_paid_overtime_except_normal_work_mins: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'みなし外の時間外労働時間（分）（裁量労働制でのみ使用）' }),
  })
  .openapi({ required: ['company_id'] })
  .openapi('ApiV1EmployeesWorkRecordSummaryControllerUpdateBody')

const ApiV1EmployeesTimeClocksControllerIndexResponseSchema = z
  .array(ApiV1EmployeesTimeClockSerializerSchema)
  .openapi('ApiV1EmployeesTimeClocksControllerIndexResponse')

const ApiV1EmployeesTimeClocksControllerShowResponseSchema = z
  .object({ employee_time_clock: ApiV1EmployeesTimeClockSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesTimeClocksControllerShowResponse')

const ApiV1EmployeesTimeClocksControllerAvailableTypesResponseSchema = z
  .object({
    available_types: z
      .array(
        z
          .enum(['clock_in', 'break_begin', 'break_end', 'clock_out'])
          .openapi({ example: 'clock_in' }),
      )
      .exactOptional()
      .openapi({
        description:
          '打刻可能種別(clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤)',
      }),
    base_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '打刻基準日', example: '2018-07-31' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesTimeClocksControllerAvailableTypesResponse')

const ApiV1EmployeesTimeClocksControllerCreateResponseSchema = z
  .object({ employee_time_clock: ApiV1EmployeesTimeClockSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesTimeClocksControllerCreateResponse')

const ApiV1EmployeesTimeClocksControllerCreateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '(required)' }),
    type: z
      .enum(['clock_in', 'break_begin', 'break_end', 'clock_out'])
      .openapi({
        description:
          '打刻種別（required）[clock_in:出勤, break_begin:休憩開始, break_end:休憩終了, clock_out:退勤]の何れか',
      }),
    base_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .exactOptional()
      .openapi({
        description:
          '打刻日。打刻が日をまたぐ場合に、前日の日付を指定します。(YYYY-MM-DD)(例:2018-07-31)',
        example: '2018-07-31',
      }),
    datetime: z.iso
      .datetime({ offset: true })
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({
        description: '打刻時刻。(YYYY-MM-DD&nbsp;HH:MM:SS)(例:2018-07-31&nbsp;08:00:00)',
        example: '2018-07-31 08:00:00',
      }),
  })
  .openapi({ required: ['company_id', 'type'] })
  .openapi('ApiV1EmployeesTimeClocksControllerCreateBody')

const ApiV1SalariesEmployeePayrollStatementsControllerIndexResponseSchema = z
  .object({
    employee_payroll_statements: z
      .array(ApiV1SalariesEmployeePayrollStatementSerializerSchema)
      .exactOptional(),
    total_count: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '指定した年月に支払いのある給与明細の合計件数', example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1SalariesEmployeePayrollStatementsControllerIndexResponse')

const ApiV1SalariesEmployeePayrollStatementsControllerShowResponseSchema = z
  .object({
    employee_payroll_statement:
      ApiV1SalariesEmployeePayrollStatementSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1SalariesEmployeePayrollStatementsControllerShowResponse')

const ApiV1BonusesEmployeePayrollStatementsControllerShowResponseSchema = z
  .object({
    employee_payroll_statement:
      ApiV1BonusesEmployeePayrollStatementSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1BonusesEmployeePayrollStatementsControllerShowResponse')

const ApiV1GroupCreateRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '作成対象事業所ID（必須）', example: 1 }),
    group: ApiV1GroupCreateRequestParamsSchema,
  })
  .openapi({ required: ['company_id', 'group'] })
  .openapi('ApiV1GroupCreateRequest')

const ApiV1GroupResponseSchema = z
  .object({ group: ApiV1GroupResponseParamsSchema })
  .openapi({ required: ['group'] })
  .openapi('ApiV1GroupResponse')

const ApiV1GroupUpdateRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '作成対象事業所ID（必須）', example: 1 }),
    group: ApiV1GroupUpdateRequestParamsSchema,
  })
  .openapi({ required: ['company_id', 'group'] })
  .openapi('ApiV1GroupUpdateRequest')

const ApiV1PositionResponseSchema = z
  .object({ position: ApiV1PositionResponseParamsSchema })
  .openapi({ required: ['position'] })
  .openapi('ApiV1PositionResponse')

const ApiV1PositionRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '作成対象事業所ID（必須）', example: 1 }),
    position: ApiV1PositionRequestParamsSchema,
  })
  .openapi({ required: ['company_id', 'position'] })
  .openapi('ApiV1PositionRequest')

const ApiV1MonthlyAttendanceIndexResponseSchema = z
  .object({
    monthly_attendances: z.array(ApiV1MonthlyAttendanceIndexResponseParamsSchema),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['monthly_attendances', 'total_count'] })
  .openapi('ApiV1MonthlyAttendanceIndexResponse')

const ApiV1MonthlyAttendanceResponseSchema = z
  .object({ monthly_attendance: ApiV1MonthlyAttendanceResponseParamsSchema })
  .openapi({ required: ['monthly_attendance'] })
  .openapi('ApiV1MonthlyAttendanceResponse')

const ApiV1MonthlyAttendanceCreateRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    target_year: z
      .int32()
      .min(2000)
      .max(2100)
      .openapi({ description: '対象年（必須）', example: 2022 }),
    target_month: z.int32().min(1).max(12).openapi({ description: '対象月（必須）', example: 1 }),
    approval_flow_route_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID（必須）', example: 1 }),
    approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '承認者のユーザーID', example: 1 }),
  })
  .openapi({ required: ['company_id', 'target_year', 'target_month', 'approval_flow_route_id'] })
  .openapi('ApiV1MonthlyAttendanceCreateRequest')

const ApiV1MonthlyAttendanceUpdateRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    approval_flow_route_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID（必須）', example: 1 }),
    approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '承認者のユーザーID', example: 1 }),
  })
  .openapi({ required: ['company_id', 'approval_flow_route_id'] })
  .openapi('ApiV1MonthlyAttendanceUpdateRequest')

const ApiV1WorkTimeIndexResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    clear_work_time: z
      .boolean()
      .openapi({
        description: '勤務時間削除フラグ（false:勤務時間を修正する、true:勤務時間を削除する）',
      }),
    clock_in_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '勤務開始時間\n  - 勤務時間が複数登録されている場合は、最初の勤務の出勤時間を返します。',
        example: '12:00',
      }),
    clock_out_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '勤務終了時間\n  - 勤務時間が複数登録されている場合は、最後の勤務の退勤時間を返します。',
        example: '23:59',
      }),
    work_records: z
      .array(
        z
          .object({
            clock_in_at: z
              .string()
              .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
              .openapi({ description: '開始時刻', example: '12:00' }),
            clock_out_at: z
              .string()
              .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
              .openapi({ description: '終了時刻', example: '23:59' }),
          })
          .openapi({ required: ['clock_in_at', 'clock_out_at'] }),
      )
      .exactOptional()
      .openapi({
        description: '勤務時間のリスト\n  - 登録されている全ての勤務時間のリストを返します。',
      }),
    lateness_mins: z.int32().openapi({ description: '遅刻分の時間（分単位）' }),
    early_leaving_mins: z.int32().openapi({ description: '早退分の時間（分単位）' }),
    break_records: z
      .array(
        z
          .object({
            clock_in_at: z
              .string()
              .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
              .openapi({ description: '開始時刻', example: '12:00' }),
            clock_out_at: z
              .string()
              .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
              .openapi({ description: '終了時刻', example: '23:59' }),
          })
          .openapi({ required: ['clock_in_at', 'clock_out_at'] }),
      )
      .exactOptional()
      .openapi({ description: '休憩時間のリスト' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'clear_work_time',
      'lateness_mins',
      'early_leaving_mins',
      'issue_date',
      'status',
      'passed_auto_check',
    ],
  })
  .openapi('ApiV1WorkTimeIndexResponseParams')

const ApiV1WorkTimeResponseParamsSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    application_number: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請No', example: 1 }),
    applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請者のユーザーID', example: 1 }),
    approver_ids: z
      .array(
        z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '承認者のユーザーID', example: 1 }),
      )
      .exactOptional()
      .openapi({
        description:
          '承認者のユーザーID配列\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
      }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日' }),
    clear_work_time: z
      .boolean()
      .openapi({
        description: '勤務時間削除フラグ（false:勤務時間を修正する、true:勤務時間を削除する）',
        example: false,
      }),
    clock_in_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '勤務開始時間\n  - 勤務が複数登録されている場合は、最初の勤務の出勤時間を返します。',
        example: '12:00',
      }),
    clock_out_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '勤務終了時間\n  - 勤務が複数登録されている場合は、最後の勤務の退勤時間を返します。',
        example: '23:59',
      }),
    work_records: z
      .array(z.lazy(() => ApiV1WorkTimeIndexResponseParamsSchema))
      .exactOptional()
      .openapi({
        description: '勤務時間のリスト\n  - 登録されている全ての勤務時間のリストを返します。',
      }),
    lateness_mins: z.int32().openapi({ description: '遅刻分の時間（分単位）' }),
    early_leaving_mins: z.int32().openapi({ description: '早退分の時間（分単位）' }),
    break_records: z
      .array(z.lazy(() => ApiV1WorkTimeIndexResponseParamsSchema))
      .exactOptional()
      .openapi({ description: '休憩時間のリスト' }),
    issue_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '申請日' }),
    comment: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    status: z
      .enum(['draft', 'in_progress', 'approved', 'feedback'])
      .openapi({
        description:
          '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
        example: 'in_progress',
      }),
    passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
    approval_flow_route_id: z
      .int()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID', example: 1 }),
    approval_flow_route_name: z
      .string()
      .openapi({ description: '申請経路名', example: '申請経路' }),
    approval_flow_logs: z
      .array(ApiV1ApprovalFlowLogsParamsSchema)
      .openapi({ description: '承認履歴' }),
    current_step_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({
        description: '現在承認ステップID<br>\n申請を差戻した場合、nullになります。',
        example: 1,
      }),
    current_round: z
      .int32()
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          '現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。',
        example: 1,
      }),
    proxy_applicant_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '代理申請者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'application_number',
      'applicant_id',
      'target_date',
      'clear_work_time',
      'lateness_mins',
      'early_leaving_mins',
      'issue_date',
      'status',
      'passed_auto_check',
      'approval_flow_route_id',
      'approval_flow_route_name',
      'approval_flow_logs',
      'current_round',
    ],
  })
  .openapi('ApiV1WorkTimeResponseParams')

const ApiV1PaidHolidayIndexResponseSchema = z
  .object({
    paid_holidays: z.array(
      z.union([
        ApiV1PaidHolidayIndexResponseParamsSchema,
        LegacyApiV1PaidHolidayIndexResponseParamsSchema,
      ]),
    ),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['paid_holidays', 'total_count'] })
  .openapi('ApiV1PaidHolidayIndexResponse')

const ApiV1PaidHolidayResponseSchema = z
  .object({
    paid_holiday: z.union([
      ApiV1PaidHolidayResponseParamsSchema,
      LegacyApiV1PaidHolidayResponseParamsSchema,
    ]),
  })
  .openapi({ required: ['paid_holiday'] })
  .openapi('ApiV1PaidHolidayResponse')

const ApiV1PaidHolidayRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日（必須）', example: '2018-07-31' }),
    values: z.array(
      z
        .object({
          type: z
            .enum(['full', 'half', 'morning', 'afternoon', 'hourly'])
            .openapi({
              description:
                '取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hourly:時間休）',
              example: 'half',
            }),
          start_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                '取得予定開始時間 ※ 全休の場合や午前休、午後休の場合にはこちらの値は参照されません',
              example: '12:00',
            }),
          end_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({
              description:
                '取得予定終了時間 ※ 全休の場合や午前休、午後休の場合にはこちらの値は参照されません',
              example: '23:59',
            }),
        })
        .openapi({ required: ['type'] }),
    ),
    comment: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    approval_flow_route_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID（必須）', example: 1 }),
    approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '承認者のユーザーID', example: 1 }),
  })
  .openapi({ required: ['company_id', 'target_date', 'approval_flow_route_id', 'values'] })
  .openapi('ApiV1PaidHolidayRequest')

const LegacyApiV1PaidHolidayRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日（必須）', example: '2018-07-31' }),
    holiday_type: z
      .enum(['full', 'half', 'morning', 'afternoon', 'hour'])
      .openapi({
        description:
          '[deprecated] 取得単位。（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休） ※ paid_holidays->values を指定している場合にはこちらの値は参照されません ※ 削除予定のためvalues->type を指定してください',
        example: 'half',
      }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}?$/)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 取得予定開始時間 ※ paid_holidays->values を指定している場合にはこちらの値は参照されません ※ 削除予定のため values->start_at を指定してください',
        example: '12:00',
      }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}?$/)
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 取得予定終了時間 ※ paid_holidays->values を指定している場合にはこちらの値は参照されません ※ 削除予定のため values->end_at を指定してください',
        example: '23:59',
      }),
    comment: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    approval_flow_route_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID（必須）', example: 1 }),
    approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '承認者のユーザーID', example: 1 }),
  })
  .openapi({ required: ['company_id', 'target_date', 'holiday_type', 'approval_flow_route_id'] })
  .openapi('LegacyApiV1PaidHolidayRequest')

const ApiV1specialHolidayIndexResponseSchema = z
  .object({
    special_holidays: z.array(
      z
        .object({
          id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
          company_id: z
            .int32()
            .min(1)
            .max(2147483647)
            .openapi({ description: '事業所ID', example: 1 }),
          application_number: z
            .int32()
            .min(1)
            .max(2147483647)
            .openapi({ description: '申請No', example: 1 }),
          applicant_id: z
            .int32()
            .min(1)
            .max(2147483647)
            .openapi({ description: '申請者のユーザーID', example: 1 }),
          approver_ids: z
            .array(
              z
                .int32()
                .min(1)
                .max(2147483647)
                .nullable()
                .openapi({ description: '承認者のユーザーID', example: 1 }),
            )
            .exactOptional()
            .openapi({
              description:
                '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
            }),
          target_date: z.iso
            .date()
            .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
            .openapi({ description: '対象日' }),
          special_holiday_setting_id: z
            .int32()
            .min(1)
            .max(2147483647)
            .openapi({ description: '特別休暇設定ID', example: 1 }),
          special_holiday_name: z
            .string()
            .max(255)
            .openapi({ description: '特別休暇名称', example: '特別休暇名称' }),
          holiday_type: z
            .enum(['full', 'half', 'morning', 'afternoon', 'hour'])
            .openapi({
              description:
                '取得単位。（full:全休、half:半休、morning:午前休、afternoon:午後休、hour:時間休）',
              example: 'half',
            }),
          start_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({ description: '取得予定開始時間', example: '12:00' }),
          end_at: z
            .string()
            .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
            .nullable()
            .exactOptional()
            .openapi({ description: '取得予定終了時間', example: '23:59' }),
          issue_date: z.iso
            .date()
            .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
            .openapi({ description: '申請日' }),
          comment: z
            .string()
            .max(255)
            .nullable()
            .exactOptional()
            .openapi({ description: '申請理由', example: '申請理由' }),
          status: z
            .enum(['draft', 'in_progress', 'approved', 'feedback'])
            .openapi({
              description:
                '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
              example: 'in_progress',
            }),
          revoke_status: z
            .enum(['revoking', 'revoked'])
            .nullable()
            .openapi({
              description:
                '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
              example: null,
            }),
          passed_auto_check: z
            .boolean()
            .openapi({ description: '自動チェック結果', example: true }),
          proxy_applicant_id: z
            .int32()
            .min(1)
            .max(2147483647)
            .nullable()
            .exactOptional()
            .openapi({ description: '代理申請者のユーザーID', example: 1 }),
        })
        .openapi({
          required: [
            'id',
            'company_id',
            'application_number',
            'applicant_id',
            'target_date',
            'special_holiday_setting_id',
            'special_holiday_name',
            'holiday_type',
            'issue_date',
            'status',
            'revoke_status',
            'passed_auto_check',
          ],
        }),
    ),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['special_holidays', 'total_count'] })
  .openapi('ApiV1specialHolidayIndexResponse')

const ApiV1specialHolidayResponseSchema = z
  .object({
    special_holiday: z
      .object({
        id: z.int32().min(1).max(2147483647).openapi({ description: '申請ID', example: 1 }),
        company_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .openapi({ description: '事業所ID', example: 1 }),
        application_number: z
          .int32()
          .min(1)
          .max(2147483647)
          .openapi({ description: '申請No', example: 1 }),
        applicant_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .openapi({ description: '申請者のユーザーID', example: 1 }),
        approver_ids: z
          .array(
            z
              .int32()
              .min(1)
              .max(2147483647)
              .nullable()
              .openapi({ description: '承認者のユーザーID', example: 1 }),
          )
          .exactOptional()
          .openapi({
            description:
              '承認者のユーザーID配列<br>\n次の場合、空配列になります。\n- 指定なしの申請経路を利用した、申請ステータスが承認済み以外の申請\n- 申請が差戻された',
          }),
        target_date: z.iso
          .date()
          .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
          .openapi({ description: '対象日' }),
        special_holiday_setting_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .openapi({ description: '特別休暇設定ID', example: 1 }),
        special_holiday_name: z
          .string()
          .max(255)
          .openapi({ description: '特別休暇名称', example: '特別休暇名称' }),
        holiday_type: z
          .enum(['full', 'half', 'morning', 'afternoon', 'hour'])
          .openapi({
            description:
              '取得単位。（full:全休、half:半休、morning:午前休、afternoon:午後休、hour:時間休）',
            example: 'half',
          }),
        start_at: z
          .string()
          .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
          .nullable()
          .exactOptional()
          .openapi({ description: '取得予定開始時間', example: '12:00' }),
        end_at: z
          .string()
          .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
          .nullable()
          .exactOptional()
          .openapi({ description: '取得予定終了時間', example: '23:59' }),
        issue_date: z.iso
          .date()
          .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
          .openapi({ description: '申請日' }),
        comment: z
          .string()
          .max(255)
          .nullable()
          .exactOptional()
          .openapi({ description: '申請理由', example: '申請理由' }),
        status: z
          .enum(['draft', 'in_progress', 'approved', 'feedback'])
          .openapi({
            description:
              '申請ステータス。（draft:下書き、in_progress:申請中、approved:承認済、feedback:差戻し）',
            example: 'in_progress',
          }),
        revoke_status: z
          .enum(['revoking', 'revoked'])
          .nullable()
          .openapi({
            description:
              '取消申請ステータス。（null:取消申請されてない、revoking:取消中、revoked:取消済）',
            example: null,
          }),
        passed_auto_check: z.boolean().openapi({ description: '自動チェック結果', example: true }),
        approval_flow_route_id: z
          .int()
          .min(1)
          .max(2147483647)
          .openapi({ description: '申請経路ID', example: 1 }),
        approval_flow_route_name: z
          .string()
          .openapi({ description: '申請経路名', example: '申請経路' }),
        approval_flow_logs: z
          .array(ApiV1ApprovalFlowLogsParamsSchema)
          .openapi({ description: '承認履歴' }),
        current_step_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .exactOptional()
          .openapi({
            description: '現在承認ステップID<br>\n申請を差戻した場合、nullになります。',
            example: 1,
          }),
        current_round: z
          .int32()
          .min(0)
          .max(2147483647)
          .openapi({
            description:
              '現在のround。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。',
            example: 1,
          }),
        proxy_applicant_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .nullable()
          .exactOptional()
          .openapi({ description: '代理申請者のユーザーID', example: 1 }),
      })
      .openapi({
        required: [
          'id',
          'company_id',
          'application_number',
          'applicant_id',
          'target_date',
          'special_holiday_setting_id',
          'special_holiday_name',
          'holiday_type',
          'issue_date',
          'status',
          'revoke_status',
          'passed_auto_check',
          'approval_flow_route_id',
          'approval_flow_route_name',
          'approval_flow_logs',
          'current_round',
        ],
      }),
  })
  .openapi({ required: ['special_holiday'] })
  .openapi('ApiV1specialHolidayResponse')

const ApiV1specialHolidayRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日（必須）', example: '2018-07-31' }),
    special_holiday_setting_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '特別休暇設定ID（必須）', example: 1 }),
    holiday_type: z
      .enum(['full', 'half', 'morning', 'afternoon', 'hour'])
      .openapi({
        description:
          '取得単位（必須）（full:全休、half:半休、morning:午前休、 afternoon:午後休、hour:時間休）',
        example: 'half',
      }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}?$/)
      .exactOptional()
      .openapi({
        description: '取得予定開始時間（条件付き必須）\n取得単位が半休、時間休の場合は必須',
        example: '12:00',
      }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}?$/)
      .exactOptional()
      .openapi({
        description: '取得予定終了時間（条件付き必須）\n取得単位が半休、時間休の場合は必須',
        example: '23:59',
      }),
    comment: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    approval_flow_route_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID（必須）', example: 1 }),
    approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '承認者のユーザーID', example: 1 }),
  })
  .openapi({
    required: [
      'company_id',
      'target_date',
      'special_holiday_setting_id',
      'holiday_type',
      'approval_flow_route_id',
    ],
  })
  .openapi('ApiV1specialHolidayRequest')

const ApiV1OvertimeWorkIndexResponseSchema = z
  .object({
    overtime_works: z.array(ApiV1OvertimeWorkIndexResponseParamsSchema),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['overtime_works', 'total_count'] })
  .openapi('ApiV1OvertimeWorkIndexResponse')

const ApiV1OvertimeWorkResponseSchema = z
  .object({ overtime_work: ApiV1OvertimeWorkResponseParamsSchema })
  .openapi({ required: ['overtime_work'] })
  .openapi('ApiV1OvertimeWorkResponse')

const ApiV1OvertimeWorkRequestSchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '事業所ID（必須）', example: 1 }),
    target_date: z.iso
      .date()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
      .openapi({ description: '対象日（必須）' }),
    start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({ description: '取得予定開始時間', example: '12:00' }),
    end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .exactOptional()
      .openapi({ description: '取得予定終了時間', example: '23:59' }),
    early_work_start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: '実績反映ありの早出申請の開始予定時刻  \n実績反映ありの早出申請する場合は必須',
        example: '12:00',
      }),
    early_work_end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: '実績反映ありの早出申請の終了予定時刻  \n実績反映ありの早出申請する場合は必須',
        example: '23:59',
      }),
    overtime_work_start_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: '実績反映ありの残業申請の開始予定時刻  \n実績反映ありの残業申請する場合は必須',
        example: '12:00',
      }),
    overtime_work_end_at: z
      .string()
      .regex(/^[0-9]{2}:[0-9]{2}(:[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: '実績反映ありの残業申請の終了予定時刻  \n実績反映ありの残業申請する場合は必須',
        example: '23:59',
      }),
    comment: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '申請理由', example: '申請理由' }),
    approval_flow_route_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '申請経路ID（必須）', example: 1 }),
    approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '承認者のユーザーID', example: 1 }),
  })
  .openapi({ required: ['company_id', 'target_date', 'approval_flow_route_id'] })
  .openapi('ApiV1OvertimeWorkRequest')

const ApiV1ApprovalActionRequestSchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    approval_action: z
      .enum(['approve', 'cancel', 'feedback', 'force_feedback'])
      .openapi({
        description:
          '申請操作。（approve:承認、cancel:取り消し、feedback:差戻し、force_feedback:承認取り消し）',
        example: 'approve',
      }),
    target_round: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .openapi({
        description:
          '対象round。差戻し等により申請がstepの最初からやり直しになるとroundの値が増えます。取得APIレスポンス.current_roundを送信してください。',
        example: 1,
      }),
    target_step_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .openapi({
        description: '対象承認ステップID。取得APIレスポンス.current_step_idを送信してください。',
        example: 1,
      }),
    next_approver_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '次のステップの承認者のユーザーID', example: 1 }),
  })
  .openapi({ required: ['company_id', 'approval_action', 'target_round', 'target_step_id'] })
  .openapi('ApiV1ApprovalActionRequest')

const ApiV1ApprovalFlowRouteIndexResponseParamsSchema = z
  .object({
    id: z.int().min(1).max(2147483647).openapi({ description: '申請経路ID', example: 1 }),
    name: z.string().exactOptional().openapi({ description: '申請経路名', example: '申請経路' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '申請経路の説明', example: '申請経路の説明' }),
    user_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '更新したユーザーのユーザーID', example: 1 }),
    definition_system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'システム作成の申請経路かどうか', example: true }),
    first_step_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '最初の承認ステップのID', example: 1 }),
    usages: z
      .array(
        z
          .enum(['AttendanceWorkflow', 'PersonalDataWorkflow'])
          .openapi({ example: 'AttendanceWorkflow' }),
      )
      .exactOptional()
      .openapi({
        description:
          '申請種別（申請経路を使用できる申請種別を示します。例えば、AttendanceWorkflow の場合は、勤怠申請で使用できる申請経路です。）\n- AttendanceWorkflow - 勤怠申請\n- PersonalDataWorkflow - 身上変更申請',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ApiV1ApprovalFlowRouteIndexResponseParams')

const ApiV1ApprovalFlowRoutesIndexResponseSchema = z
  .object({ approval_flow_routes: z.array(ApiV1ApprovalFlowRouteIndexResponseParamsSchema) })
  .openapi({ required: ['approval_flow_routes'] })
  .openapi('ApiV1ApprovalFlowRoutesIndexResponse')

const ApiV1FlowRouteStepSrializerSchema = z
  .array(
    z
      .object({
        id: z.int().min(1).max(2147483647).openapi({ description: '承認ステップID', example: 1 }),
        next_step_id: z
          .int()
          .min(1)
          .max(2147483647)
          .nullable()
          .openapi({ description: '次の承認ステップID', example: 2 }),
        resource_type: z
          .enum([
            'predefined_user',
            'selected_user',
            'unspecified',
            'and_resource',
            'or_resource',
            'and_position',
            'or_position',
          ])
          .openapi({
            description:
              '承認方法( predefined_user: メンバー指定 (1人), selected_user: 申請時にメンバー指定,unspecified: 指定なし, and_resource: メンバー指定 (複数、全員の承認), or_resource: メンバー指定 (複数、1人の承認), and_position: 役職指定 (複数、全員の承認), or_position: 役職指定 (複数、1人の承認) ) ',
            example: 'predefined_user',
          }),
        user_ids: z
          .array(
            z
              .int()
              .min(1)
              .max(2147483647)
              .openapi({ description: '承認者のユーザーID', example: 3 }),
          )
          .exactOptional()
          .openapi({ description: '承認者のユーザーID (配列)' }),
      })
      .openapi({ required: ['id', 'next_step_id', 'resource_type'] }),
  )
  .openapi({ description: '承認ステップ（配列）' })
  .openapi('ApiV1FlowRouteStepSrializer')

const ApiV1ApprovalFlowRouteResponseParamsSchema = z
  .object({
    id: z.int().min(1).max(2147483647).openapi({ description: '申請経路ID', example: 1 }),
    name: z.string().exactOptional().openapi({ description: '申請経路名', example: '申請経路' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: '申請経路の説明', example: '申請経路の説明' }),
    user_id: z
      .int()
      .min(1)
      .max(2147483647)
      .nullable()
      .exactOptional()
      .openapi({ description: '更新したユーザーのユーザーID', example: 1 }),
    definition_system: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'システム作成の申請経路かどうか', example: true }),
    first_step_id: z
      .int()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '最初の承認ステップのID', example: 1 }),
    usages: z
      .array(
        z
          .enum(['AttendanceWorkflow', 'PersonalDataWorkflow'])
          .openapi({ example: 'AttendanceWorkflow' }),
      )
      .exactOptional()
      .openapi({
        description:
          '申請種別（申請経路を使用できる申請種別を示します。例えば、AttendanceWorkflow の場合は、勤怠申請で使用できる申請経路です。）\n- AttendanceWorkflow - 勤怠申請\n- PersonalDataWorkflow - 身上変更申請',
      }),
    steps: ApiV1FlowRouteStepSrializerSchema.exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('ApiV1ApprovalFlowRouteResponseParams')

const ApiV1ApprovalFlowRouteResponseSchema = z
  .object({ approval_flow_route: ApiV1ApprovalFlowRouteResponseParamsSchema })
  .openapi({ required: ['approval_flow_route'] })
  .openapi('ApiV1ApprovalFlowRouteResponse')

const ApiV1EmployeeYearendAdjustmentParamsSchema = z
  .object({
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    num: z.string().exactOptional().openapi({ description: '従業員番号' }),
    employee_display_name: z.string().exactOptional().openapi({ description: '従業員名' }),
    is_not_adjust: z
      .boolean()
      .exactOptional()
      .openapi({ description: '年末調整対象外\n- true - 年末調整対象外\n- false - 年末調整対象' }),
    status: z
      .enum(['initialized', 'in_employee_progress', 'submitted', 'fixed'])
      .exactOptional()
      .openapi({
        description:
          '年末調整ステータス\n- initialized - 入力依頼前\n- in_employee_progress - 従業員入力中\n- submitted - 従業員入力済\n- fixed - 確定',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentParams')

const ApiV1EmployeeYearendAdjustmentControllerIndexResponseSchema = z
  .object({
    employees: z.array(ApiV1EmployeeYearendAdjustmentParamsSchema).exactOptional(),
    total_count: z
      .int32()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '合計件数' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerIndexResponse')

const ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializerSchema = z
  .object({
    last_name: z.string().max(255).openapi({ description: '姓 null不可', example: '山田' }),
    first_name: z.string().max(255).openapi({ description: '名 null不可', example: '太郎' }),
    last_name_kana: z.string().max(255).openapi({ description: '姓カナ', example: 'ヤマダ' }),
    first_name_kana: z.string().max(255).openapi({ description: '名カナ', example: 'タロウ' }),
    zipcode1: z.string().max(3).openapi({ description: '住民票住所の郵便番号1', example: '141' }),
    zipcode2: z.string().max(4).openapi({ description: '住民票住所の郵便番号2', example: '0031' }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 12,
      }),
    address: z
      .string()
      .max(255)
      .openapi({ description: '住民票住所の市区町村以降の住所', example: '品川区大崎1-2-2' }),
    address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: '住民票住所の市区町村以降の住所カナ',
        example: 'シナガワクオオサキ1-2-2',
      }),
    payer_type: z
      .enum(['kou', 'otsu', 'hei'])
      .exactOptional()
      .openapi({ description: '所得税納税者区分 kou: 甲, otsu: 乙, hei: 丙' }),
    widow_type: z
      .enum(['na', 'widow', 'one_parent'])
      .exactOptional()
      .openapi({
        description: '寡夫／寡婦かどうか null不可 na: 空白, widow: 寡婦, one_parent: ひとり親',
      }),
    disability_type: z
      .enum(['na', 'general', 'heavy'])
      .exactOptional()
      .openapi({
        description: '障害者かどうか null不可 na: 空白, general: 障害者, heavy: 特別障害者',
      }),
    married: z.boolean().exactOptional().openapi({ description: '配偶者の有無 null不可' }),
    is_working_student: z
      .boolean()
      .exactOptional()
      .openapi({ description: '勤労学生かどうか null不可' }),
    is_foreigner: z.boolean().exactOptional().openapi({ description: '外国人かどうか null不可' }),
    other_company_revenue: z
      .int()
      .min(-999999999)
      .max(1999999999)
      .nullable()
      .exactOptional()
      .openapi({ description: 'その他の事業所の給与収入', example: 1000000 }),
    all_other_income: z
      .int()
      .min(-999999999)
      .max(1999999999)
      .nullable()
      .exactOptional()
      .openapi({ description: '給与以外の所得', example: 1000000 }),
    householder: z
      .enum([
        'myself',
        'husband',
        'wife',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
      ])
      .exactOptional()
      .openapi({
        description:
          '世帯主の続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他',
      }),
    householder_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '世帯主の名前', example: '山田 太郎' }),
  })
  .openapi({
    required: [
      'last_name',
      'first_name',
      'last_name_kana',
      'first_name_kana',
      'zipcode1',
      'zipcode2',
      'prefecture_code',
      'address',
    ],
  })
  .openapi('ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    employee: ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'employee'] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody')

const ApiV1EmployeeYearendAdjustmentEmployeeSerializerSchema = z
  .object({
    employee_id: z.int32().exactOptional().openapi({ description: '従業員ID' }),
    num: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '従業員番号<br>\n従業員を判別しやすいよう管理することができます。（例: 1人目の正社員を A-001 と入力）',
        example: 'A-001',
      }),
    last_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '姓 null不可', example: '山田' }),
    first_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '名 null不可', example: '太郎' }),
    last_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '姓カナ', example: 'ヤマダ' }),
    first_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '名カナ', example: 'タロウ' }),
    birth_date: z.iso.date().exactOptional().openapi({ description: '生年月日' }),
    entry_date: z.iso.date().exactOptional().openapi({ description: '入社日' }),
    retire_date: z.iso.date().nullable().exactOptional().openapi({ description: '退職日' }),
    employment_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '雇用形態 board-member: 役員, regular: 正社員, fixed-term: 契約社員, part-time: アルバイト・パート, temporary: 派遣社員, (空文字列): その他',
      }),
    title: z.string().nullable().exactOptional().openapi({ description: '肩書' }),
    zipcode1: z
      .string()
      .max(3)
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号1', example: '141' }),
    zipcode2: z
      .string()
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の郵便番号2', example: '0031' }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)',
        example: 12,
      }),
    address: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '住民票住所の市区町村以降の住所', example: '品川区大崎1-2-2' }),
    address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: '住民票住所の市区町村以降の住所カナ',
        example: 'シナガワクオオサキ1-2-2',
      }),
    payer_type: z
      .enum(['kou', 'otsu', 'hei'])
      .exactOptional()
      .openapi({ description: '所得税納税者区分 kou: 甲, otsu: 乙, hei: 丙' }),
    widow_type: z
      .enum(['na', 'widow', 'one_parent'])
      .exactOptional()
      .openapi({
        description: '寡夫／寡婦かどうか null不可 na: 空白, widow: 寡婦, one_parent: ひとり親',
      }),
    disability_type: z
      .enum(['na', 'general', 'heavy'])
      .exactOptional()
      .openapi({ description: '障害者かどうか na: 空白, general: 障害者, heavy: 特別障害者' }),
    married: z.boolean().exactOptional().openapi({ description: '配偶者の有無' }),
    is_working_student: z.boolean().exactOptional().openapi({ description: '勤労学生かどうか' }),
    is_foreigner: z.boolean().exactOptional().openapi({ description: '外国人かどうか' }),
    other_company_revenue: z
      .int()
      .min(0)
      .max(1999999999)
      .nullable()
      .exactOptional()
      .openapi({ description: 'その他の事業所の給与収入', example: 1000000 }),
    all_other_income: z
      .int()
      .min(-999999999)
      .max(1999999999)
      .nullable()
      .exactOptional()
      .openapi({ description: '給与以外の所得', example: 1000000 }),
    householder: z
      .enum([
        'myself',
        'husband',
        'wife',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
      ])
      .exactOptional()
      .openapi({
        description:
          '世帯主の続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他',
      }),
    householder_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '世帯主の名前', example: '山田 太郎' }),
    is_calc_income_tax: z
      .boolean()
      .exactOptional()
      .openapi({ description: '所得税の計算対象かどうか' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentEmployeeSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeResponseSchema = z
  .object({ employees: ApiV1EmployeeYearendAdjustmentEmployeeSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeResponse')

const ApiV1EmployeeYearendAdjustmentDependentSerializerSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: '家族情報ID', example: 1 }),
    last_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '姓 null不可', example: '山田' }),
    first_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '名 null不可', example: '花子' }),
    last_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '姓カナ', example: 'ヤマダ' }),
    first_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '名カナ', example: 'ハナコ' }),
    relationship: z
      .enum([
        'spouse',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
        'great_grandfather',
        'great_grandmother',
        'spouses_child',
      ])
      .exactOptional()
      .openapi({
        description:
          '続柄 null不可 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子',
      }),
    birth_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: '生年月日 null不可 1900年1月1日から現在年+5年12月31日まで登録可能',
        example: '1999-01-01',
      }),
    social_insurance_and_tax_dependent: z
      .enum(['social_insurance_and_tax', 'tax_only', 'social_insurance_only', 'not_dependent'])
      .exactOptional()
      .openapi({
        description:
          '扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ, not_dependent: 扶養していない',
      }),
    income: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '所得 配偶者は「扶養状況」がsocial_insurance_only又はnot_dependentの場合のみ更新可能。配偶者以外は更新可能。\n配偶者で「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合、「給与収入」、「給与以外の所得」から自動で「所得」が計算されます。<br>\n<br>\n2026年以降の年末調整で、freee人事労務の年末調整画面から「公的年金収入」を入力している場合、公的年金等の所得は「給与以外の所得」に合算して返却されます。\nこの場合、「所得」は「給与所得と年金所得の双方を有する者に対する所得金額調整控除」を適用した後の金額となるため、「給与収入」と「給与以外の所得」から算出した金額とは一致しないことがあります。',
      }),
    employment_revenue: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '給与収入 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。',
      }),
    all_other_income: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '給与以外の所得 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。',
      }),
    disability_type: z
      .enum(['na', 'general', 'heavy'])
      .exactOptional()
      .openapi({
        description:
          '障害に該当するか null不可 na: 障害なし, general: 一般の障害者, heavy: 特別障害者',
      }),
    residence_type: z
      .enum(['live_in', 'resident', 'non_resident'])
      .exactOptional()
      .openapi({
        description:
          '同居・別居 null不可 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)',
      }),
    zipcode1: z
      .string()
      .max(3)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の郵便番号1 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号1」を登録',
        example: '141',
      }),
    zipcode2: z
      .string()
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の郵便番号2 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号2」を登録',
        example: '0031',
      }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)  「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の都道府県コード」を登録',
        example: 12,
      }),
    address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の市区町村以降の住所 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所」を登録',
        example: '品川区大崎1-2-2',
      }),
    address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の市区町村以降の住所カナ 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所カナ」を登録',
        example: 'シナガワクオオサキ1-2-2',
      }),
    annual_remittance_amount: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '国外居住親族への年間の送金額 「同居・別居」が「同居」、「別居(国内)」の場合は登録不可',
      }),
    non_resident_dependents_reason: z
      .enum([
        'none',
        'over_16_to_under_30_or_over_70',
        'study_abroad',
        'handicapped',
        'over_38_man',
      ])
      .exactOptional()
      .openapi({
        description:
          '非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払 続柄が「配偶者」または「同居・別居」が「同居」、「別居(国内)」の場合は登録不可',
      }),
    is_resident_tax_only_deduction: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '住民税のみの控除対象かどうか 2025年以前の年末調整でのみ返却されます。2026年以降の年末調整では入力された所得額から住民税の控除対象かどうかが自動判定されるため、レスポンスに含まれません。',
      }),
    retirement_income: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '退職所得' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentDependentSerializer')

const ApiV1EmployeeYearendAdjustmentInsuranceSerializerSchema = z
  .object({
    id: z.int().min(1).max(2147483647).exactOptional().openapi({ description: '保険料id' }),
    type: z
      .enum([
        'life_care_pension_insurance',
        'earthquake_non_life_insurance',
        'social_insurance',
        'other_insurance',
      ])
      .exactOptional()
      .openapi({
        description:
          '保険の種類 life_care_pension_insurance: 生命保険・介護医療保険・個人年金保険, earthquake_non_life_insurance: 地震保険・旧長期損害保険, social_insurance: 社会保険, other_insurance: その他の保険（小規模企業共済等）',
      }),
    category: z
      .enum([
        'life',
        'care',
        'pension',
        'earthquake',
        'old_long_term_non_life',
        'national_pension',
        'national_pension_fund_premium',
        'national_health',
        'care_insurance_deduction_of_pension',
        'health',
        'employee_pension',
        'advanced_elderly_medical',
        'sema',
        'idc',
        'cdc',
        'dsma',
        'none',
      ])
      .exactOptional()
      .openapi({
        description:
          '区分<br>\n保険会社等が発行する証明書類に基づいて区分を設定してください。<br>\n保険の種類によって設定可能な値が変わります。<br>\n・life_care_pension_insurance<br>\n　life: 生命保険<br>\n　care: 介護保険<br>\n　pension: 個人年金保険<br>\n・earthquake_non_life_insurance<br>\n　earthquake: 地震保険<br>\n　old_long_term_non_life: 旧長期損害保険<br>\n・social_insurance<br>\n　national_pension: 国民年金<br>\n　national_pension_fund_premium: 国民年金基金<br>\n　national_health: 国民健康保険<br>\n　health: 健康保険<br>\n　care_insurance_deduction_of_pension: 介護保険<br>\n　employee_pension: 厚生年金<br>\n　advanced_elderly_medical: 後期高齢者医療保険<br>\n　none: その他（印刷後に手書き）<br>\n・other_insurance<br>\n　sema: 独立行政法人中小企業基盤整備機構の共済契約の掛金<br>\n　idc: 個人型確定拠出年金（iDeCo）<br>\n　cdc: 企業型確定拠出年金<br>\n　dsma: 心身障害者扶養共済制度に関する契約の掛金<br>',
        example: 'life',
      }),
    new_or_old: z
      .enum(['new', 'old', 'none'])
      .exactOptional()
      .openapi({
        description:
          '新旧区分<br>\n区分が生命保険または個人年金保険の時のみ、新制度なら new を、旧制度なら old を指定します。<br>\n上記以外の保険では none を指定してください。',
      }),
    company_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険会社等の名称<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: 'freee生命保険株式会社',
      }),
    kind_of_purpose: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険等の種類（目的）<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '利差配当付終身',
      }),
    period: z
      .enum([
        '終身',
        '0年',
        '1年',
        '2年',
        '3年',
        '4年',
        '5年',
        '6年',
        '7年',
        '8年',
        '9年',
        '10年',
        '11年',
        '12年',
        '13年',
        '14年',
        '15年',
        '16年',
        '17年',
        '18年',
        '19年',
        '20年',
        '21年',
        '22年',
        '23年',
        '24年',
        '25年',
        '26年',
        '27年',
        '28年',
        '29年',
        '30年',
        '31年',
        '32年',
        '33年',
        '34年',
        '35年',
        '36年',
        '37年',
        '38年',
        '39年',
        '40年',
        '41年',
        '42年',
        '43年',
        '44年',
        '45年',
        '46年',
        '47年',
        '48年',
        '49年',
        '50年',
        '51年',
        '52年',
        '53年',
        '54年',
        '55年',
        '56年',
        '57年',
        '58年',
        '59年',
        '60年',
        '61年',
        '62年',
        '63年',
        '64年',
        '65年',
        '66年',
        '67年',
        '68年',
        '69年',
        '70年',
        '71年',
        '72年',
        '73年',
        '74年',
        '75年',
        '76年',
        '77年',
        '78年',
        '79年',
        '80年',
        '81年',
        '82年',
        '83年',
        '84年',
        '85年',
        '86年',
        '87年',
        '88年',
        '89年',
        '90年',
        '91年',
        '92年',
        '93年',
        '94年',
        '95年',
        '96年',
        '97年',
        '98年',
        '99年',
        '100年',
        '0ヶ月',
        '1ヶ月',
        '2ヶ月',
        '3ヶ月',
        '4ヶ月',
        '5ヶ月',
        '6ヶ月',
        '7ヶ月',
        '8ヶ月',
        '9ヶ月',
        '10ヶ月',
        '11ヶ月',
        '',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険期間又は年金支払期間（終身、0年〜100年、0ヶ月〜11ヶ月のいずれか）<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '終身',
      }),
    policyholder_last_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険等の契約者 姓<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '契約',
      }),
    policyholder_first_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険等の契約者 名<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '太郎',
      }),
    recipient_last_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険金等の受取人 姓<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '受取',
      }),
    recipient_first_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険金等の受取人 名<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '太郎',
      }),
    recipient_relationship: z
      .enum([
        'myself',
        'husband',
        'wife',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
        '',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険金等の受取人 あなたとの続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, "": 空欄<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: 'child',
      }),
    payment_start_date: z
      .string()
      .regex(/^([1-2][0-9]{3}-[0-9]{2}-[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '年金の支払開始日 1900年1月1日から現在年+100の12月31日まで登録可能。<br>\n区分が個人年金保険の時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '2000-04-01',
      }),
    amount: z
      .int()
      .min(0)
      .max(99999999)
      .exactOptional()
      .openapi({ description: '保険料額', example: 1000000 }),
    certification_type: z
      .literal('xml')
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '電子的控除証明書などの認証方法を利用した場合、その認証方法が反映されます。<br>\nxml: 電子的控除証明書を利用。証明書画像データの提出が免除されます。またrecipient_first_name、recipient_last_name、recipient_relationship以外のカラムが更新不可となります。',
      }),
    is_group_insurance: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: '団体保険に該当するかどうか' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentInsuranceSerializer')

const ApiV1EmployeeYearendAdjustmentHousingLoanSerializerSchema = z
  .object({
    id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '住宅ローンID', example: 1 }),
    residence_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: '居住開始の年月日', example: '2022-03-31' }),
    remaining_balance_at_yearend: z
      .int()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '住宅借入金等年末残高', example: 5000000 }),
    category: z
      .enum(['general', 'qualified', 'extension', 'earthquake'])
      .exactOptional()
      .openapi({
        description:
          '住宅借入金等特別控除区分 general: 住: 一般の住宅借入金等, qualified: 認: 認定住宅の新築等, extension: 増: 特定増改築等, earthquake: 震: 震災特例法による特別控除 extensionは2025年以前の年末調整でのみ返却されます。2026年以降の年末調整では特定増改築等住宅借入金等特別控除の廃止により登録できません。',
      }),
    specific_case_type: z
      .enum([
        'not_qualified',
        'specified',
        'special_specified_or_special_exception',
        'exception_special_exception',
        'special_residential_house',
      ])
      .exactOptional()
      .openapi({
        description:
          '特定取得/特別特定取得 not_qualified: 該当しない, specified: 特定取得, special_specified_or_special_exception: 特別特定取得または特別特例取得, exception_special_exception: 特例特別特例取得 special_residential_house 特家',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentHousingLoanSerializer')

const ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializerSchema = z
  .object({
    fixed_payroll: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '確定給与額', example: 10000000 }),
    fixed_payroll_deduction: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '確定給与控除額', example: 1000000 }),
    fixed_payroll_income_tax: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '確定給与所得税額', example: 1000000 }),
    fixed_bonus: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '確定賞与額', example: 10000000 }),
    fixed_bonus_deduction: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '確定賞与控除額', example: 1000000 }),
    fixed_bonus_income_tax: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '確定賞与所得税額', example: 1000000 }),
    unentered_payroll_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力給与額', example: 500000 }),
    unentered_payroll_deduction_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力給与控除額', example: 500000 }),
    unentered_payroll_income_tax_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力給与所得税額', example: 500000 }),
    unentered_bonus_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力賞与額', example: 500000 }),
    unentered_bonus_deduction_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力賞与控除額', example: 500000 }),
    unentered_bonus_income_tax_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力賞与所得税額', example: 500000 }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer')

const ApiV1EmployeeYearendAdjustmentPreviousJobSerializerSchema = z
  .object({
    income: z
      .int()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '前職の支払金額', example: 5000000 }),
    deduction: z
      .int()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '前職の社会保険料等の金額', example: 1200000 }),
    withholding_tax_amount: z
      .int()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '前職の源泉徴収額', example: 100000 }),
    company_name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '前職の社名', example: '株式会社 前職' }),
    company_address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '前職の事業所住所', example: '品川区大崎1-2-2' }),
    retire_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: '前職の退職日 現在年-10年1月1日から現在年+5年12月31日まで登録可能',
        example: '2022-03-31',
      }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentPreviousJobSerializer')

const ApiV1EmployeeYearendAdjustmentControllerShowResponseSchema = z
  .object({
    employee: ApiV1EmployeeYearendAdjustmentEmployeeSerializerSchema.exactOptional().openapi({
      description: '本人情報',
    }),
    dependents: z
      .array(ApiV1EmployeeYearendAdjustmentDependentSerializerSchema)
      .exactOptional()
      .openapi({ description: '家族情報(年末調整対象外の場合は取得できません。)' }),
    insurances: z
      .array(ApiV1EmployeeYearendAdjustmentInsuranceSerializerSchema)
      .exactOptional()
      .openapi({ description: '保険料情報(年末調整対象外の場合は取得できません。)' }),
    housing_loan_deduction: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description: '住宅借入金等特別控除(年末調整対象外の場合は取得できません。)',
        example: 500000,
      }),
    housing_loans: z
      .array(ApiV1EmployeeYearendAdjustmentHousingLoanSerializerSchema)
      .exactOptional()
      .openapi({ description: '住宅ローン(年末調整対象外の場合は取得できません。)' }),
    payroll_and_bonus:
      ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializerSchema.exactOptional().openapi({
        description: '給与・賞与',
      }),
    previous_job: ApiV1EmployeeYearendAdjustmentPreviousJobSerializerSchema.nullable()
      .exactOptional()
      .openapi({ description: '前職情報' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerShowResponse')

const ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializerSchema = z
  .object({
    unentered_payroll_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力給与額', example: 1000000 }),
    unentered_payroll_deduction_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力給与控除額', example: 1000000 }),
    unentered_payroll_income_tax_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力給与所得税額', example: 1000000 }),
    unentered_bonus_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力賞与額', example: 1000000 }),
    unentered_bonus_deduction_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力賞与控除額', example: 1000000 }),
    unentered_bonus_income_tax_amount: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '未入力賞与所得税額', example: 1000000 }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    payroll_and_bonus: ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'payroll_and_bonus'] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody')

const ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusResponseSchema = z
  .object({
    payroll_and_bonus:
      ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusResponse')

const ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializerSchema = z
  .object({
    id: z
      .int32()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: '家族情報ID（idがない場合は新規作成になる)', example: 1 }),
    destroy: z
      .boolean()
      .exactOptional()
      .openapi({
        description: '家族情報を削除するか true: 削除する, false: 削除しない',
        example: false,
      }),
    last_name: z.string().max(255).openapi({ description: '姓 null不可', example: '山田' }),
    first_name: z.string().max(255).openapi({ description: '名 null不可', example: '花子' }),
    last_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '姓カナ', example: 'ヤマダ' }),
    first_name_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: '名カナ', example: 'ハナコ' }),
    relationship: z
      .enum([
        'spouse',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
        'great_grandfather',
        'great_grandmother',
        'spouses_child',
      ])
      .openapi({
        description:
          '続柄 null不可 spouse: 配偶者, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, great_grandfather: 曽祖父, great_grandmother: 曽祖母, spouses_child: 配偶者の連れ子',
      }),
    birth_date: z.iso
      .date()
      .regex(/^[1-9][0-9]{3}-[0-9]{2}-[0-9]{2}$/)
      .openapi({
        description: '生年月日 null不可 1900年1月1日から現在年+5の12月31日まで登録可能',
        example: '1999-01-01',
      }),
    social_insurance_and_tax_dependent: z
      .enum(['social_insurance_and_tax', 'tax_only', 'social_insurance_only', 'not_dependent'])
      .openapi({
        description:
          '扶養状況 social_insurance_and_tax: 所得税・住民税と社会保険, tax_only: 所得税・住民税のみ, social_insurance_only: 社会保険のみ, not_dependent: 扶養していない',
      }),
    income: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '所得 配偶者は「扶養状況」がsocial_insurance_only又はnot_dependentの場合のみ更新可能。配偶者以外は更新可能。 配偶者で「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合、「給与収入」、「給与以外の所得」から自動で「所得」が計算されます。',
      }),
    employment_revenue: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '給与収入 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。',
      }),
    all_other_income: z
      .int32()
      .min(-999999999)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '給与以外の所得 配偶者は「扶養状況」がsocial_insurance_and_tax又はtax_onlyの場合のみ更新可能。配偶者以外は更新不可。更新不可の場合は0となります。',
      }),
    disability_type: z
      .enum(['na', 'general', 'heavy'])
      .openapi({
        description:
          '障害に該当するか null不可 na: 障害なし, general: 一般の障害者, heavy: 特別障害者',
      }),
    residence_type: z
      .enum(['live_in', 'resident', 'non_resident'])
      .openapi({
        description:
          '同居・別居 null不可 live_in: 同居, resident: 別居(国内), non_resident: 別居(国外)',
      }),
    zipcode1: z
      .string()
      .max(3)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の郵便番号1 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号1」を登録',
        example: '141',
      }),
    zipcode2: z
      .string()
      .max(4)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '住民票住所の郵便番号2 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の郵便番号2」を登録',
        example: '0031',
      }),
    prefecture_code: z
      .int()
      .min(-1)
      .max(46)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の都道府県コード（-1: 設定しない、0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄)  「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の都道府県コード」を登録',
        example: 12,
      }),
    address: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の市区町村以降の住所 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所」を登録',
        example: '品川区大崎1-2-2',
      }),
    address_kana: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          '住民票住所の市区町村以降の住所カナ 「同居・別居」が「同居」の場合は「年末調整従業員情報」の「住民票住所の市区町村以降の住所カナ」を登録',
        example: 'シナガワクオオサキ1-2-2',
      }),
    annual_remittance_amount: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({
        description:
          '国外居住親族への年間の送金額 「同居・別居」が「同居」、「別居(国内)」の場合は登録不可',
      }),
    non_resident_dependents_reason: z
      .enum([
        'none',
        'over_16_to_under_30_or_over_70',
        'study_abroad',
        'handicapped',
        'over_38_man',
      ])
      .exactOptional()
      .openapi({
        description:
          '非居住者である親族の条件 none: なし, over_16_to_under_30_or_over_70: 16歳以上30歳未満又は70歳以上, study_abroad: 留学, handicapped: 障害者, over_38_man: 38万円以上の支払 続柄が「配偶者」または「同居・別居」が「同居」、「別居(国内)」の場合は登録不可',
      }),
    is_resident_tax_only_deduction: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '住民税のみの控除対象かどうか 2025年以前の年末調整でのみ更新可能。2026年以降の年末調整では入力された所得額から住民税の控除対象かどうかが自動判定されるため、指定しても無視されます。',
      }),
    retirement_income: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '退職所得' }),
  })
  .openapi({
    required: [
      'last_name',
      'first_name',
      'relationship',
      'birth_date',
      'social_insurance_and_tax_dependent',
      'disability_type',
      'residence_type',
    ],
  })
  .openapi('ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    dependents: z
      .array(ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializerSchema)
      .openapi({ description: '家族情報' }),
  })
  .openapi({ required: ['company_id', 'dependents'] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody')

const ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsResponseSchema = z
  .object({
    dependents: z
      .array(ApiV1EmployeeYearendAdjustmentDependentSerializerSchema)
      .exactOptional()
      .openapi({ description: '家族情報' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsResponse')

const ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializerSchema = z
  .object({
    income: z
      .int()
      .min(-999999999)
      .max(999999999)
      .openapi({ description: '前職の支払金額', example: 5000000 }),
    deduction: z
      .int()
      .min(-999999999)
      .max(999999999)
      .openapi({ description: '前職の社会保険料等の金額', example: 1200000 }),
    withholding_tax_amount: z
      .int()
      .min(-999999999)
      .max(999999999)
      .openapi({ description: '前職の源泉徴収額', example: 100000 }),
    company_name: z
      .string()
      .max(255)
      .openapi({ description: '前職の社名', example: '株式会社 前職' }),
    company_address: z
      .string()
      .max(255)
      .openapi({ description: '前職の事業所住所', example: '品川区大崎1-2-2' }),
    retire_date: z.iso
      .date()
      .openapi({
        description: '前職の退職日 現在年-10年1月1日から現在年+5年12月31日まで登録可能',
        example: '2022-03-31',
      }),
  })
  .openapi({
    required: [
      'income',
      'deduction',
      'withholding_tax_amount',
      'company_name',
      'company_address',
      'retire_date',
    ],
  })
  .openapi('ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    previous_job: ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'previous_job'] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody')

const ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobResponseSchema = z
  .object({
    previous_job: ApiV1EmployeeYearendAdjustmentPreviousJobSerializerSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobResponse')

const ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializerSchema = z
  .object({
    type: z
      .enum([
        'life_care_pension_insurance',
        'earthquake_non_life_insurance',
        'social_insurance',
        'other_insurance',
      ])
      .openapi({
        description:
          '保険の種類 life_care_pension_insurance: 生命保険・介護医療保険・個人年金保険, earthquake_non_life_insurance: 地震保険・旧長期損害保険, social_insurance: 社会保険, other_insurance: その他の保険（小規模企業共済等）',
      }),
    category: z
      .enum([
        'life',
        'care',
        'pension',
        'earthquake',
        'old_long_term_non_life',
        'national_pension',
        'national_pension_fund_premium',
        'national_health',
        'care_insurance_deduction_of_pension',
        'health',
        'employee_pension',
        'advanced_elderly_medical',
        'sema',
        'idc',
        'cdc',
        'dsma',
        'none',
      ])
      .openapi({
        description:
          '区分<br>\n保険会社等が発行する証明書類に基づいて区分を設定してください。<br>\n保険の種類によって設定可能な値が変わります。<br>\n・life_care_pension_insurance<br>\n　life: 生命保険<br>\n　care: 介護保険<br>\n　pension: 個人年金保険<br>\n・earthquake_non_life_insurance<br>\n　earthquake: 地震保険<br>\n　old_long_term_non_life: 旧長期損害保険<br>\n・social_insurance<br>\n　national_pension: 国民年金<br>\n　national_pension_fund_premium: 国民年金基金<br>\n　national_health: 国民健康保険<br>\n　health: 健康保険<br>\n　care_insurance_deduction_of_pension: 介護保険<br>\n　employee_pension: 厚生年金<br>\n　advanced_elderly_medical: 後期高齢者医療保険<br>\n　none: その他（印刷後に手書き）<br>\n・other_insurance<br>\n　sema: 独立行政法人中小企業基盤整備機構の共済契約の掛金<br>\n　idc: 個人型確定拠出年金（iDeCo）<br>\n　cdc: 企業型確定拠出年金<br>\n　dsma: 心身障害者扶養共済制度に関する契約の掛金<br>',
        example: 'life',
      }),
    new_or_old: z
      .enum(['new', 'old', 'none'])
      .openapi({
        description:
          '新旧区分<br>\n区分が生命保険または個人年金保険の時のみ、新制度なら new を、旧制度なら old を指定します。<br>\n上記以外の保険では none を指定してください。',
      }),
    company_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険会社等の名称<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: 'freee生命保険株式会社',
      }),
    kind_of_purpose: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険等の種類（目的）<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '利差配当付終身',
      }),
    period: z
      .enum([
        '終身',
        '0年',
        '1年',
        '2年',
        '3年',
        '4年',
        '5年',
        '6年',
        '7年',
        '8年',
        '9年',
        '10年',
        '11年',
        '12年',
        '13年',
        '14年',
        '15年',
        '16年',
        '17年',
        '18年',
        '19年',
        '20年',
        '21年',
        '22年',
        '23年',
        '24年',
        '25年',
        '26年',
        '27年',
        '28年',
        '29年',
        '30年',
        '31年',
        '32年',
        '33年',
        '34年',
        '35年',
        '36年',
        '37年',
        '38年',
        '39年',
        '40年',
        '41年',
        '42年',
        '43年',
        '44年',
        '45年',
        '46年',
        '47年',
        '48年',
        '49年',
        '50年',
        '51年',
        '52年',
        '53年',
        '54年',
        '55年',
        '56年',
        '57年',
        '58年',
        '59年',
        '60年',
        '61年',
        '62年',
        '63年',
        '64年',
        '65年',
        '66年',
        '67年',
        '68年',
        '69年',
        '70年',
        '71年',
        '72年',
        '73年',
        '74年',
        '75年',
        '76年',
        '77年',
        '78年',
        '79年',
        '80年',
        '81年',
        '82年',
        '83年',
        '84年',
        '85年',
        '86年',
        '87年',
        '88年',
        '89年',
        '90年',
        '91年',
        '92年',
        '93年',
        '94年',
        '95年',
        '96年',
        '97年',
        '98年',
        '99年',
        '100年',
        '0ヶ月',
        '1ヶ月',
        '2ヶ月',
        '3ヶ月',
        '4ヶ月',
        '5ヶ月',
        '6ヶ月',
        '7ヶ月',
        '8ヶ月',
        '9ヶ月',
        '10ヶ月',
        '11ヶ月',
        '',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険期間又は年金支払期間（終身、0年〜100年、0ヶ月〜11ヶ月のいずれか）<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '終身',
      }),
    policyholder_last_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険等の契約者 姓<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '契約',
      }),
    policyholder_first_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険等の契約者 名<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険または地震保険・旧長期損害保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '太郎',
      }),
    recipient_last_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険金等の受取人 姓<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '受取',
      }),
    recipient_first_name: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険金等の受取人 名<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '太郎',
      }),
    recipient_relationship: z
      .enum([
        'myself',
        'husband',
        'wife',
        'father',
        'mother',
        'child',
        'senior_brother',
        'junior_brother',
        'senior_sister',
        'junior_sister',
        'grandchild',
        'grandfather',
        'grandmother',
        'father_in_law',
        'mother_in_law',
        'grandfather_in_law',
        'grandmother_in_law',
        'other',
        '',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '保険金等の受取人 あなたとの続柄 myself: 本人, husband: 夫, wife: 妻, father: 父, mother: 母, child: 子, senior_brother: 兄, junior_brother: 弟, senior_sister: 姉, junior_sister: 妹, grandchild: 孫, grandfather: 祖父, grandmother: 祖母, father_in_law: 義父, mother_in_law: 義母, grandfather_in_law: 義祖父, grandmother_in_law: 義祖母, other: その他, "": 空欄<br>\n保険の種類にて、生命保険・介護医療保険・個人年金保険、地震保険・旧長期損害保険または社会保険を選択している時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: 'child',
      }),
    payment_start_date: z
      .string()
      .regex(/^([1-2][0-9]{3}-[0-9]{2}-[0-9]{2})?$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '年金の支払開始日 1900年1月1日から現在年+100の12月31日まで登録可能。<br>\n区分が個人年金保険の時のみ、入力した値が反映されます。<br>\n上記以外の保険では入力した値は反映されません。',
        example: '2000-04-01',
      }),
    amount: z.int().min(0).max(99999999).openapi({ description: '保険料額', example: 1000000 }),
    is_group_insurance: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: '団体保険に該当するかどうか' }),
  })
  .openapi({ required: ['type', 'category', 'new_or_old', 'amount'] })
  .openapi('ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    insurance: ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'insurance'] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody')

const ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponseSchema = z
  .object({
    insurances: z.array(ApiV1EmployeeYearendAdjustmentInsuranceSerializerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponse')

const ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializerSchema = z
  .object({
    residence_start_date: z.iso
      .date()
      .regex(/^[2-9][0-9]{3}-[0-9]{2}-[0-9]{2}$/)
      .openapi({
        description: '居住開始の年月日 2000年1月1日から現在年+5の12月31日まで登録可能',
        example: '2022-03-31',
      }),
    remaining_balance_at_yearend: z
      .int()
      .min(-999999999)
      .max(999999999)
      .openapi({ description: '住宅借入金等年末残高', example: 5000000 }),
    category: z
      .enum(['general', 'qualified', 'extension', 'earthquake'])
      .openapi({
        description:
          '住宅借入金等特別控除区分 general: 住: 一般の住宅借入金等, qualified: 認: 認定住宅の新築等, extension: 増: 特定増改築等, earthquake: 震: 震災特例法による特別控除 extensionは2025年以前の年末調整でのみ登録可能。2026年以降の年末調整では特定増改築等住宅借入金等特別控除の廃止により指定するとエラーになります。',
      }),
    specific_case_type: z
      .enum([
        'not_qualified',
        'specified',
        'special_specified_or_special_exception',
        'exception_special_exception',
        'special_residential_house',
      ])
      .openapi({
        description:
          '特定取得/特別特定取得 not_qualified: 該当しない, specified: 特定取得, special_specified_or_special_exception: 特別特定取得または特別特例取得, exception_special_exception: 特例特別特例取得 special_residential_house 特家',
      }),
  })
  .openapi({
    required: [
      'residence_start_date',
      'remaining_balance_at_yearend',
      'category',
      'specific_case_type',
    ],
  })
  .openapi('ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer')

const ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBodySchema = z
  .object({
    company_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
    housing_loan: ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'housing_loan'] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody')

const ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponseSchema = z
  .object({
    housing_loan_deduction: z
      .int32()
      .min(0)
      .max(999999999)
      .exactOptional()
      .openapi({ description: '住宅借入金等特別控除', example: 500000 }),
    housing_loans: z
      .array(ApiV1EmployeeYearendAdjustmentHousingLoanSerializerSchema)
      .exactOptional()
      .openapi({ description: '住宅ローン' }),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponse')

const ApiV1EmployeesAssignedAttendanceTagSerializerSchema = z
  .object({
    attendance_tag: z
      .object({
        id: z.int32().min(1).max(2147483647).openapi({ description: '勤怠タグID', example: 1 }),
        company_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .openapi({ description: '事業所ID', example: 1 }),
        name: z.string().openapi({ description: '勤怠タグ名称', example: '勤怠タグの名称' }),
        description: z.string().openapi({ description: '勤怠タグ備考', example: '勤怠タグの備考' }),
        max_amount: z
          .int32()
          .min(1)
          .max(999)
          .openapi({ description: '勤怠タグ回数上限', example: 1 }),
        published: z.boolean().openapi({ description: '勤怠タグ公開ステータス', example: true }),
        is_employee_usable: z
          .boolean()
          .openapi({ description: '対象従業員が利用可能かどうか', example: true }),
      })
      .openapi({
        required: [
          'id',
          'company_id',
          'name',
          'description',
          'max_amount',
          'published',
          'is_employee_usable',
        ],
      }),
    amount: z.int32().min(0).max(999).openapi({ description: '勤怠タグ回数', example: 1 }),
  })
  .openapi({ required: ['attendance_tag', 'amount'] })
  .openapi('ApiV1EmployeesAssignedAttendanceTagSerializer')

const ApiV1EmployeesAttendanceTagSerializerSchema = z
  .object({
    id: z.int32().min(1).max(2147483647).openapi({ description: '勤怠タグID', example: 1 }),
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    name: z.string().openapi({ description: '勤怠タグ名称', example: '勤怠タグの名称' }),
    description: z.string().openapi({ description: '勤怠タグ備考', example: '勤怠タグの備考' }),
    max_amount: z.int32().min(1).max(999).openapi({ description: '勤怠タグ回数上限', example: 1 }),
    published: z.boolean().openapi({ description: '勤怠タグ公開ステータス', example: true }),
    is_employee_usable: z
      .boolean()
      .openapi({ description: '対象従業員が利用可能かどうか', example: true }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'name',
      'description',
      'max_amount',
      'published',
      'is_employee_usable',
    ],
  })
  .openapi('ApiV1EmployeesAttendanceTagSerializer')

const ApiV1EmployeesAttendanceTagsControllerIndexResponseSchema = z
  .object({
    employee_attendance_tags: z.array(ApiV1EmployeesAttendanceTagSerializerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesAttendanceTagsControllerIndexResponse')

const ApiV1EmployeesAttendanceTagsControllerShowResponseSchema = z
  .object({
    employee_attendance_tags: z
      .array(ApiV1EmployeesAssignedAttendanceTagSerializerSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesAttendanceTagsControllerShowResponse')

const ApiV1EmployeesAttendanceTagUpdateRequestSerializerSchema = z
  .object({
    attendance_tag_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '勤怠タグID', example: 1 }),
    amount: z.int32().min(0).max(999).openapi({ description: '勤怠タグ回数', example: 1 }),
  })
  .openapi({ required: ['attendance_tag_id', 'amount'] })
  .openapi('ApiV1EmployeesAttendanceTagUpdateRequestSerializer')

const ApiV1EmployeesAttendanceTagsControllerUpdateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    employee_attendance_tags: z
      .array(ApiV1EmployeesAttendanceTagUpdateRequestSerializerSchema)
      .openapi({ description: '更新対象の勤怠タグのリスト' }),
  })
  .openapi({ required: ['company_id', 'employee_attendance_tags'] })
  .openapi('ApiV1EmployeesAttendanceTagsControllerUpdateBody')

const ApiV1EmployeesAttendanceTagSummarySchema = z
  .object({
    attendance_tag: z
      .object({
        id: z.int32().min(1).max(2147483647).openapi({ description: '勤怠タグID', example: 1 }),
        company_id: z
          .int32()
          .min(1)
          .max(2147483647)
          .openapi({ description: '事業所ID', example: 1 }),
        name: z.string().openapi({ description: '勤怠タグ名称', example: '勤怠タグの名称' }),
        description: z.string().openapi({ description: '勤怠タグ備考', example: '勤怠タグの備考' }),
        max_amount: z
          .int32()
          .min(1)
          .max(999)
          .openapi({ description: '勤怠タグ回数上限', example: 1 }),
        published: z.boolean().openapi({ description: '勤怠タグ公開ステータス', example: true }),
        is_employee_usable: z
          .boolean()
          .openapi({ description: '対象従業員が利用可能かどうか', example: true }),
      })
      .openapi({
        required: [
          'id',
          'company_id',
          'name',
          'description',
          'max_amount',
          'published',
          'is_employee_usable',
        ],
      }),
    amount: z.int32().min(0).max(99999).openapi({ description: '勤怠タグ回数', example: 1 }),
  })
  .openapi({ required: ['attendance_tag', 'amount'] })
  .openapi('ApiV1EmployeesAttendanceTagSummary')

const ApiV1EmployeesAttendanceTagSummariesControllerShowResponseSchema = z
  .object({
    employee_attendance_tag_summaries: z
      .array(ApiV1EmployeesAttendanceTagSummarySchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesAttendanceTagSummariesControllerShowResponse')

const ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializerSchema = z
  .object({
    attendance_tag_id: z
      .int32()
      .min(1)
      .max(2147483647)
      .openapi({ description: '勤怠タグID', example: 1 }),
    amount: z.int32().min(0).max(99999).openapi({ description: '勤怠タグ回数', example: 1 }),
  })
  .openapi({ required: ['attendance_tag_id', 'amount'] })
  .openapi('ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer')

const ApiV1EmployeesAttendanceTagSummariesControllerUpdateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    employee_attendance_tag_summaries: z
      .array(ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializerSchema)
      .openapi({ description: '更新対象の勤怠タグサマリのリスト' }),
  })
  .openapi({ required: ['company_id', 'employee_attendance_tag_summaries'] })
  .openapi('ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody')

const ApiV1EmployeesAttendanceTagSummariesControllerUpdateResponseSchema = z
  .object({
    employee_attendance_tag_summaries: z
      .array(ApiV1EmployeesAttendanceTagSummarySchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesAttendanceTagSummariesControllerUpdateResponse')

const ApiV1EmployeesGroupMembershipsIndexSerializerSchema = z
  .object({
    group_memberships: z.array(
      z
        .object({
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
            .openapi({
              type: 'integer',
              format: 'int64',
              description: 'グループ所属ID',
              example: 1,
            }),
          start_date: z.iso.date().openapi({ description: '開始日', example: '2000-01-01' }),
          end_date: z.iso
            .date()
            .nullable()
            .openapi({ description: '終了日', example: '2020-01-01' }),
          boss_id: z
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
              description: '上司ID',
              example: 1,
            }),
          main_duty: z
            .enum(['unspecified', 'sub_duty', 'main_duty'])
            .openapi({ description: '主務', example: 'main_duty' }),
          group_id: z.int32().openapi({ description: '部門ID', example: 10 }),
          group_code: z.string().openapi({ description: '部門コード', example: 'group2' }),
          group_name: z.string().openapi({ description: '部門名称', example: '営業部' }),
          position_id: z
            .int32()
            .nullable()
            .exactOptional()
            .openapi({ description: '役職ID', example: 1 }),
          position_code: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: '役職コード', example: 'position1' }),
          position_name: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: '役職名称', example: '部長' }),
        })
        .openapi({
          required: [
            'id',
            'start_date',
            'end_date',
            'main_duty',
            'group_id',
            'group_code',
            'group_name',
          ],
        }),
    ),
    total_count: z.int32().openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['group_memberships', 'total_count'] })
  .openapi('ApiV1EmployeesGroupMembershipsIndexSerializer')

const ApiV1AllowanceSerializerSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64', description: 'その他手当ID' }),
    company_id: z.int32().openapi({ description: '事業所ID' }),
    name: z.string().openapi({ description: 'その他手当名' }),
    description: z.string().nullable().exactOptional().openapi({ description: '説明' }),
    frequency: z
      .enum(['salary_this_month', 'salary_monthly', 'bonus'])
      .openapi({ description: '支給タイミング' }),
    calc_type: z
      .enum(['fixed', 'variable', 'custom', 'attendance_day_tag', 'attendance_time_tag'])
      .openapi({ description: '計算タイプ' }),
    is_active: z.boolean().openapi({ description: '表示状態' }),
    amount: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: '金額（変動手当の場合はnull）' }),
    amount_source: z
      .enum(['direct', 'system_overtime_charge', 'system_deduction_charge'])
      .openapi({ description: '金額ソース' }),
    is_daily_prorated: z
      .boolean()
      .openapi({ description: '日割り計算対象フラグ（calc_typeがfixed以外の場合はfalse）' }),
    formula_element: z
      .enum([
        'num_absences',
        'num_paid_holidays',
        'num_total_workdays',
        'num_work_days_with_early_leaving',
        'num_work_days_with_lateness',
        'total_excess_statutory_work_mins',
        'total_holiday_work_mins',
        'total_lateness_and_early_leaving_mins',
        'total_latenight_work_mins',
        'total_normal_work_mins',
        'total_overtime_work_mins',
        'total_prescribed_holiday_work_mins',
        'total_work_mins',
        'company_profile_custom_field',
        'attendance_tag_total_count',
        'attendance_tag_assigned_days',
        'attendance_tag_total_excess_statutory_work_mins',
        'attendance_tag_total_prescribed_holiday_work_mins',
        'attendance_tag_total_holiday_work_mins',
        'attendance_tag_total_latenight_work_mins',
        'attendance_tag_total_normal_work_mins',
        'attendance_tag_total_overtime_work_mins',
        'attendance_tag_total_work_mins',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '[deprecated] 計算の基となる勤怠項目・カスタム項目の識別子（calc_typeがfixedの場合はnull） ※ 削除予定のため formula_element_code を参照してください',
        deprecated: true,
      }),
    formula_element_code: z
      .enum([
        'num_absences',
        'num_paid_holidays',
        'num_total_workdays',
        'num_work_days_with_early_leaving',
        'num_work_days_with_lateness',
        'total_overtime_within_statutory_work_mins',
        'total_holiday_work_mins',
        'total_lateness_and_early_leaving_mins',
        'total_latenight_work_mins',
        'total_normal_work_mins',
        'total_overtime_excess_statutory_work_mins',
        'total_prescribed_holiday_work_mins',
        'total_work_mins',
        'company_profile_custom_field',
        'attendance_tag_total_count',
        'attendance_tag_assigned_days',
        'attendance_tag_total_overtime_within_statutory_work_mins',
        'attendance_tag_total_prescribed_holiday_work_mins',
        'attendance_tag_total_holiday_work_mins',
        'attendance_tag_total_latenight_work_mins',
        'attendance_tag_total_normal_work_mins',
        'attendance_tag_total_overtime_excess_statutory_work_mins',
        'attendance_tag_total_work_mins',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: '計算の基となる勤怠項目・カスタム項目の識別子（calc_typeがfixedの場合はnull）',
      }),
    round_type: z
      .enum(['round', 'floor', 'ceil'])
      .nullable()
      .exactOptional()
      .openapi({ description: '端数処理（calc_typeがfixedの場合はnull）' }),
    rate_multiplier: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '乗数（amount_sourceがsystem_deduction_charge/system_overtime_chargeの場合のみ）',
      }),
    company_profile_custom_field_id: z
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
        description: 'カスタム項目ID（calc_typeがcustomの場合のみ）',
      }),
    attendance_tag_id: z
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
        description: '勤怠タグID（calc_typeがattendance_day_tag/attendance_time_tagの場合のみ）',
      }),
    is_affect_income_tax: z.boolean().openapi({ description: '所得税の計算に含める' }),
    is_affect_employment_insurance: z
      .boolean()
      .openapi({ description: '社会保険料の計算に含める' }),
    is_affect_labor_insurance: z.boolean().openapi({ description: '労働保険料の計算に含める' }),
    is_affect_overtime_wage_base: z
      .boolean()
      .openapi({ description: '割増賃金の計算に含める（frequencyがbonusの場合は常にfalse）' }),
    is_affect_attendance_deduction_base: z
      .boolean()
      .openapi({ description: '勤怠控除の基礎に含める（frequencyがbonusの場合は常にfalse）' }),
    is_affect_fixed_wage: z
      .boolean()
      .openapi({ description: '固定的賃金の計算に含める（frequencyがbonusの場合は常にfalse）' }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'name',
      'frequency',
      'calc_type',
      'is_active',
      'amount_source',
      'is_daily_prorated',
      'is_affect_income_tax',
      'is_affect_employment_insurance',
      'is_affect_labor_insurance',
      'is_affect_overtime_wage_base',
      'is_affect_attendance_deduction_base',
      'is_affect_fixed_wage',
    ],
  })
  .openapi('ApiV1AllowanceSerializer')

const ApiV1AllowancesIndexResponseSchema = z
  .object({
    allowances: z.array(ApiV1AllowanceSerializerSchema),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['allowances', 'total_count'] })
  .openapi('ApiV1AllowancesIndexResponse')

const ApiV1AllowanceResponseSchema = z
  .object({ allowance: ApiV1AllowanceSerializerSchema })
  .openapi({ required: ['allowance'] })
  .openapi('ApiV1AllowanceResponse')

const ApiV1DeductionSerializerSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64', description: '控除ID' }),
    company_id: z.int32().openapi({ description: '事業所ID' }),
    name: z.string().openapi({ description: '控除名' }),
    description: z.string().nullable().exactOptional().openapi({ description: '説明' }),
    frequency: z
      .enum(['salary_this_month', 'salary_monthly', 'bonus'])
      .openapi({ description: '控除タイミング' }),
    calc_type: z.enum(['fixed', 'attendance_day_tag']).openapi({ description: '計算タイプ' }),
    is_active: z.boolean().openapi({ description: '表示状態' }),
    amount: z.int().nullable().openapi({ description: '金額' }),
    is_affect_income_tax: z.boolean().openapi({ description: '所得税の計算に含める' }),
    attendance_tag_id: z
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
        description: '勤怠タグID（calc_typeがattendance_day_tagの場合のみ）',
      }),
  })
  .openapi({
    required: [
      'id',
      'company_id',
      'name',
      'frequency',
      'calc_type',
      'is_active',
      'amount',
      'is_affect_income_tax',
    ],
  })
  .openapi('ApiV1DeductionSerializer')

const ApiV1DeductionsIndexResponseSchema = z
  .object({
    deductions: z.array(ApiV1DeductionSerializerSchema),
    total_count: z.int32().min(0).max(2147483647).openapi({ description: '合計件数', example: 1 }),
  })
  .openapi({ required: ['deductions', 'total_count'] })
  .openapi('ApiV1DeductionsIndexResponse')

const ApiV1DeductionResponseSchema = z
  .object({ deduction: ApiV1DeductionSerializerSchema })
  .openapi({ required: ['deduction'] })
  .openapi('ApiV1DeductionResponse')

const ApiV1DeductionCreateRequestSerializerSchema = z
  .object({
    name: z
      .string()
      .max(240)
      .openapi({
        description: '控除名。最大240文字、給与控除グループまたは賞与控除グループ内で重複不可',
      }),
    description: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '説明。最大255文字' }),
    frequency: z
      .enum(['salary_this_month', 'salary_monthly', 'bonus'])
      .openapi({ description: '控除タイミング' }),
    calc_type: z.literal('fixed').openapi({ description: '計算タイプ' }),
    amount: z
      .int()
      .min(-99999999)
      .max(99999999)
      .openapi({ description: '金額。-100,000,000 より大きく 100,000,000 未満' }),
    is_affect_income_tax: z.boolean().openapi({ description: '所得税の計算に含める' }),
  })
  .openapi({ required: ['name', 'frequency', 'calc_type', 'amount', 'is_affect_income_tax'] })
  .openapi('ApiV1DeductionCreateRequestSerializer')

const ApiV1DeductionsControllerCreateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID' }),
    deduction: ApiV1DeductionCreateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'deduction'] })
  .openapi('ApiV1DeductionsControllerCreateBody')

const ApiV1AllowanceCreateRequestSerializerSchema = z
  .object({
    name: z
      .string()
      .max(240)
      .openapi({
        description:
          'その他手当名。最大240文字、同一 frequency 内（salary_this_month/salary_monthly または bonus）で重複不可',
      }),
    description: z
      .string()
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: '説明。最大255文字' }),
    frequency: z
      .enum(['salary_this_month', 'salary_monthly'])
      .openapi({ description: '支給タイミング（bonus は指定不可）' }),
    calc_type: z.literal('fixed').openapi({ description: '計算タイプ（fixed のみ対応）' }),
    amount_source: z.literal('direct').openapi({ description: '金額ソース（direct のみ対応）' }),
    amount: z
      .int()
      .min(-99999999)
      .max(99999999)
      .openapi({ description: '金額。-100,000,000 より大きく 100,000,000 未満' }),
    is_daily_prorated: z
      .boolean()
      .exactOptional()
      .openapi({ description: '日割り計算対象フラグ（デフォルト false）' }),
    is_affect_income_tax: z
      .boolean()
      .exactOptional()
      .openapi({ description: '所得税の計算に含める（デフォルト true）' }),
    is_affect_employment_insurance: z
      .boolean()
      .exactOptional()
      .openapi({ description: '社会保険料の計算に含める（デフォルト true）' }),
    is_affect_labor_insurance: z
      .boolean()
      .exactOptional()
      .openapi({ description: '労働保険料の計算に含める（デフォルト true）' }),
    is_affect_overtime_wage_base: z
      .boolean()
      .exactOptional()
      .openapi({ description: '割増賃金の計算に含める（デフォルト true）' }),
    is_affect_attendance_deduction_base: z
      .boolean()
      .exactOptional()
      .openapi({ description: '勤怠控除の基礎に含める（デフォルト true）' }),
    is_affect_fixed_wage: z
      .boolean()
      .exactOptional()
      .openapi({ description: '固定的賃金の計算に含める（デフォルト true）' }),
  })
  .openapi({ required: ['name', 'frequency', 'calc_type', 'amount_source', 'amount'] })
  .openapi('ApiV1AllowanceCreateRequestSerializer')

const ApiV1AllowancesControllerCreateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID' }),
    allowance: ApiV1AllowanceCreateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'allowance'] })
  .openapi('ApiV1AllowancesControllerCreateBody')

const ApiV1EmployeesAllowanceRuleSerializerSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64', description: '従業員手当ID' }),
    employee_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '従業員ID' }),
    allowance_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '手当ID' }),
    allowance_name: z.string().openapi({ description: '手当名' }),
    amount: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: '手当の金額（勤怠に応じた手当・カスタム項目手当の場合は単価）' }),
    frequency: z
      .enum(['salary_this_month', 'salary_monthly', 'bonus'])
      .openapi({ description: '支給タイミング' }),
    calc_type: z
      .enum(['fixed', 'variable', 'custom', 'attendance_day_tag', 'attendance_time_tag'])
      .openapi({ description: '計算タイプ' }),
  })
  .openapi({
    required: ['id', 'employee_id', 'allowance_id', 'allowance_name', 'frequency', 'calc_type'],
  })
  .openapi('ApiV1EmployeesAllowanceRuleSerializer')

const ApiV1EmployeesDeductionRuleSerializerSchema = z
  .object({
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
      .openapi({ type: 'integer', format: 'int64', description: '従業員控除ID' }),
    employee_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '従業員ID' }),
    deduction_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: '控除ID' }),
    deduction_name: z.string().openapi({ description: '控除名' }),
    amount: z.int().exactOptional().openapi({ description: '控除の金額' }),
    frequency: z
      .enum(['salary_this_month', 'salary_monthly', 'bonus'])
      .openapi({ description: '控除タイミング' }),
    calc_type: z.enum(['fixed', 'attendance_day_tag']).openapi({ description: '計算タイプ' }),
  })
  .openapi({
    required: ['id', 'employee_id', 'deduction_id', 'deduction_name', 'frequency', 'calc_type'],
  })
  .openapi('ApiV1EmployeesDeductionRuleSerializer')

const ApiV1EmployeesDeductionRuleUpdateRequestSerializerSchema = z
  .object({
    deduction_id: z.int32().min(1).max(2147483647).openapi({ description: '控除ID', example: 1 }),
    amount: z
      .int32()
      .min(-99999999)
      .max(99999999)
      .openapi({ description: '金額（数値のみ）', example: 30000 }),
  })
  .openapi({ required: ['deduction_id', 'amount'] })
  .openapi('ApiV1EmployeesDeductionRuleUpdateRequestSerializer')

const ApiV1EmployeesDeductionRulesControllerUpdateBodySchema = z
  .object({
    company_id: z.int32().min(1).max(2147483647).openapi({ description: '事業所ID', example: 1 }),
    year: z.int32().min(2000).max(2100).openapi({ description: '対象年', example: 2024 }),
    month: z.int32().min(1).max(12).openapi({ description: '対象月', example: 6 }),
    employee_deduction_rule: ApiV1EmployeesDeductionRuleUpdateRequestSerializerSchema,
  })
  .openapi({ required: ['company_id', 'year', 'month', 'employee_deduction_rule'] })
  .openapi('ApiV1EmployeesDeductionRulesControllerUpdateBody')

const ApiV1EmployeesDeductionRulesControllerUpdateResponseSchema = z
  .object({ employee_deduction_rule: ApiV1EmployeesDeductionRuleSerializerSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiV1EmployeesDeductionRulesControllerUpdateResponse')

const ErrorSchema = z
  .object({
    status_code: z.int().exactOptional().openapi({ example: 400 }),
    errors: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            messages: z
              .array(z.string().openapi({ example: 'リクエストの形式が不正です。' }))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const UnauthorizedErrorSchema = z
  .object({
    message: z.string().exactOptional().openapi({ example: 'ログインをしてください。' }),
    messages: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnauthorizedError')

const ForbiddenErrorSchema = z
  .object({
    status_code: z.int().exactOptional().openapi({ example: 403 }),
    errors: z
      .array(
        z
          .object({
            type: z.string().exactOptional(),
            messages: z
              .array(z.string().openapi({ example: 'アクセス権限がありません。' }))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ForbiddenError')

const AccessDeniedErrorSchema = z
  .object({
    error: z.string().exactOptional().openapi({ example: 'access_denied' }),
    message: z.string().exactOptional().openapi({ example: 'アクセスする権限がありません' }),
    code: z.string().exactOptional().openapi({ example: 'expired_access_token' }),
  })
  .openapi({ required: [] })
  .openapi('AccessDeniedError')

const NotfoundErrorSchema = z
  .object({
    status_code: z.int().exactOptional().openapi({ example: 404 }),
    errors: z
      .array(
        z
          .object({
            type: z.string().exactOptional().openapi({ example: 'not_found' }),
            messages: z
              .array(z.string().openapi({ example: '存在しないか既に削除されたレコードです。' }))
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotfoundError')

const InternalServerErrorSchema = z
  .object({
    status_code: z.int().exactOptional().openapi({ example: 500 }),
    errors: z
      .array(
        z
          .object({
            type: z.string().exactOptional().openapi({ example: 'internal_server_error' }),
            messages: z
              .array(
                z
                  .string()
                  .openapi({
                    example:
                      'エラーが発生しました。再試行しても解消しない場合は、サポートセンターまでご連絡ください。',
                  }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InternalServerError')

const BearerSecurityScheme = { type: 'apiKey', name: 'Authorization', in: 'header' }

export const getApiV1UsersMeRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me',
  tags: ['ログインユーザー'],
  summary: 'ログインユーザーの取得',
  description:
    '<h2 id="">概要</h2>\n<p>このリクエストの認可セッションにおけるログインユーザーの情報を返します。</p>\n<p>freee人事労務では一人のログインユーザーを複数の事業所に関連付けられるため、このユーザーと関連のあるすべての事業所の情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>他のAPIのパラメータとしてcompany_idが求められる場合は、このAPIで取得したcompany_idを使用します。</li>\n  <li>給与計算対象外の従業員のemployee_idとdisplay_nameは取得できません。</li>\n</ul>',
  operationId: 'get_users_me',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1UsersMeSerializerSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1CompaniesCompanyIdEmployeesRoute = createRoute({
  method: 'get',
  path: '/api/v1/companies/{company_id}/employees',
  tags: ['従業員'],
  summary: '全期間の従業員一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所に所属する従業員をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>退職ユーザーも含めて取得可能です。</li>\n</ul>',
  operationId: 'get_company_employees',
  request: {
    query: z.object({
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
      with_no_payroll_calculation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'with_no_payroll_calculation',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'trueを指定すると給与計算対象外の従業員情報をレスポンスに含めます。',
            example: true,
            required: false,
          },
        }),
    }),
    params: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'path',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(ApiV1CompaniesEmployeeSerializerSchema) } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees',
  tags: ['従業員'],
  summary: '従業員一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した対象年月に事業所に所属する従業員をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>指定した年月に退職済みユーザーは取得できません。</li>\n  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>\n  <li>事業所が定額制の健康保険組合に加入している場合、保険料の直接指定金額は無視されnullが返されます。</li>\n</ul>',
  operationId: 'get_employees',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            description: '従業員情報を取得したい年',
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
      with_no_payroll_calculation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'with_no_payroll_calculation',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'trueを指定すると給与計算対象外の従業員情報をレスポンスに含めます。',
            example: true,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesIndexSerializerSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1EmployeesRoute = createRoute({
  method: 'post',
  path: '/api/v1/employees',
  tags: ['従業員'],
  summary: '従業員の作成',
  description:
    '<h2 id="">概要</h2>\n<p>従業員を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'create_employee',
  request: {
    body: { content: { 'application/json': { schema: ApiV1EmployeesControllerCreateBodySchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesControllerCreateResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{id}',
  tags: ['従業員'],
  summary: '従業員の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定したIDの従業員を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>指定した年月に退職済みユーザーは取得できません。</li>\n  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>\n  <li>事業所が定額制の健康保険組合に加入している場合、保険料の直接指定金額は無視されnullが返されます。</li>\n</ul>',
  operationId: 'get_employee',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            description: '従業員情報を取得したい年',
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
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
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesControllerShowResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{id}',
  tags: ['従業員'],
  summary: '従業員の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'update_employee',
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
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1EmployeesControllerUpdateBodySchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesControllerUpdateResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1EmployeesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/employees/{id}',
  tags: ['従業員'],
  summary: '従業員の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定したIDの従業員を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'destroy_employee',
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
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdProfileRuleRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/profile_rule',
  tags: ['従業員の姓名・住所など'],
  summary: '従業員の姓名・住所などの取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の姓名などの情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、給与計算対象外の従業員には非対応です。employee_idに給与計算対象外の従業員IDを指定した場合、本APIを利用できません。</li>\n</ul>',
  operationId: 'get_employee_profile_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesProfileRulesControllerShowResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdProfileRuleRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/profile_rule',
  tags: ['従業員の姓名・住所など'],
  summary: '従業員の姓名・住所などの更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の姓名・住所などを更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、給与計算対象外の従業員には非対応です。employee_idに給与計算対象外の従業員IDを指定した場合、本APIを利用できません。</li>\n</ul>',
  operationId: 'update_employee_profile_rule',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesProfileRulesControllerUpdateBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesProfileRulesControllerUpdateResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/health_insurance_rule',
  tags: ['従業員の健康保険'],
  summary: '従業員の健康保険の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の健康保険情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>\n</ul>',
  operationId: 'get_employee_health_insurance_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesHealthInsuranceRulesControllerShowResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/health_insurance_rule',
  tags: ['従業員の健康保険'],
  summary: '従業員の健康保険の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の健康保険情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の健康保険料の計算方法が自動計算の場合、給与計算時の健康保険料の直接指定金額はnullが返されます)</li>\n  <li>事業所が定額制の健康保険組合に加入している場合、保険料の直接指定金額は無視されnullが返されます。</li>\n  <li>事業所が定額制の健康保険組合に加入している場合、保険料の計算方法と保険料の更新はできません。</li>\n</ul>',
  operationId: 'update_employee_health_insurance_rule',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesHealthInsuranceRulesControllerUpdateResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/welfare_pension_insurance_rule',
  tags: ['従業員の厚生年金保険'],
  summary: '従業員の厚生年金保険の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の厚生年金保険情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の厚生年金保険料の計算方法が自動計算の場合、給与計算時の厚生年金保険料の直接指定金額はnullが返されます)</li>\n</ul>',
  operationId: 'get_employee_welfare_pension_insurance_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesWelfarePensionInsuranceRulesControllerShowResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/welfare_pension_insurance_rule',
  tags: ['従業員の厚生年金保険'],
  summary: '従業員の厚生年金保険の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の厚生年金保険情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>保険料計算方法が自動計算の場合、対応する保険料の直接指定金額は無視されnullが返されます。(例: 給与計算時の厚生年金保険料の計算方法が自動計算の場合、給与計算時の厚生年金保険料の直接指定金額はnullが返されます)</li>\n</ul>',
  operationId: 'update_employee_welfare_pension_insurance_rule',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdDependentRulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/dependent_rules',
  tags: ['従業員の家族情報'],
  summary: '従業員の家族情報の取得',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員・日付の家族情報を返します。</p>',
  operationId: 'get_employee_dependent_rules',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesDependentRulesControllerIndexResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdDependentRulesBulkUpdateRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/dependent_rules/bulk_update',
  tags: ['従業員の家族情報'],
  summary: '従業員の家族情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の家族情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>idがない場合は新規作成、destroyがtrueの場合は削除になります。</li>\n  <li>residence_type=live_in: 同居の場合、以下のパラメータに指定した値はWebに反映されません。</li>\n  <ul>\n    <li>zipcode1</li>\n    <li>zipcode2</li>\n    <li>prefecture_code</li>\n    <li>address</li>\n    <li>address_kana</li>\n    <li>annual_remittance_amount</li>\n  </ul>\n  <li>residence_type=non_resident: 別居(国外)の場合、以下のパラメータに指定した値はWebに反映されません。</li>\n  <ul>\n    <li>prefecture_code</li>\n  </ul>\n</ul>',
  operationId: 'bulk_update_employee_dependent_rules',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesDependentRulesControllerBulkUpdateBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesDependentRulesControllerBulkUpdateResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdBankAccountRuleRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/bank_account_rule',
  tags: ['従業員の銀行口座'],
  summary: '従業員の銀行口座の取得',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員・日付の銀行口座情報を返します。</p>',
  operationId: 'get_employee_bank_account_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesBankAccountRulesControllerShowResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdBankAccountRuleRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/bank_account_rule',
  tags: ['従業員の銀行口座'],
  summary: '従業員の銀行口座の更新',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員の銀行口座1の情報を更新します。</p>',
  operationId: 'update_employee_bank_account_rule',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesBankAccountRulesControllerUpdateBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesBankAccountRulesControllerUpdateResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdBasicPayRuleRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/basic_pay_rule',
  tags: ['従業員の基本給'],
  summary: '従業員の基本給の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の基本給情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_employee_basic_pay_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesBasicPayRulesControllerShowResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdBasicPayRuleRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/basic_pay_rule',
  tags: ['従業員の基本給'],
  summary: '従業員の基本給の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の基本給情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'update_employee_basic_pay_rule',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesBasicPayRulesControllerUpdateBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesBasicPayRulesControllerUpdateResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdAllowanceRulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/allowance_rules',
  tags: ['従業員手当'],
  summary: '従業員の手当情報の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の手当情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_employee_allowance_rules',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              employee_allowance_rules: z.array(ApiV1EmployeesAllowanceRuleSerializerSchema),
            })
            .openapi({ required: ['employee_allowance_rules'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdAllowanceRulesRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/allowance_rules',
  tags: ['従業員手当'],
  summary: '従業員の手当情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の手当情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>賞与に紐づく手当（frequency=bonus）の場合、対象年月に賞与情報が登録されている必要があります。</li>\n</ul>',
  operationId: 'update_employee_allowance_rules',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .int32()
                .min(1)
                .max(2147483647)
                .openapi({ description: '事業所ID', example: 1 }),
              year: z.int32().min(2000).max(2100).openapi({ description: '対象年', example: 2024 }),
              month: z.int32().min(1).max(12).openapi({ description: '対象月', example: 6 }),
              employee_allowance_rule: z
                .object({
                  allowance_id: z
                    .int32()
                    .min(1)
                    .max(2147483647)
                    .openapi({ description: '手当ID', example: 1 }),
                  amount: z
                    .int32()
                    .min(-99999999)
                    .max(99999999)
                    .openapi({ description: '金額（数値のみ）', example: 30000 }),
                })
                .openapi({ required: ['allowance_id', 'amount'] }),
            })
            .openapi({ required: ['company_id', 'year', 'month', 'employee_allowance_rule'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              employee_allowance_rule: ApiV1EmployeesAllowanceRuleSerializerSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1EmployeesEmployeeIdAllowanceRulesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/employees/{employee_id}/allowance_rules/{id}',
  tags: ['従業員手当'],
  summary: '従業員の手当情報の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の手当情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'destroy_employee_allowance_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '削除対象の手当ルールを判定する締め年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '削除対象の手当ルールを判定する締め月<br>\n翌月払いの従業員でも、支給月ではなく締め年月を指定してください。<br>\n例: 翌月払い従業員の 2022/01 支給分を対象にする場合は year=2021, month=12 を指定します。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
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
            description: '従業員手当ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdDeductionRulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/deduction_rules',
  tags: ['従業員控除'],
  summary: '従業員の控除情報の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の控除情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_employee_deduction_rules',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              employee_deduction_rules: z.array(ApiV1EmployeesDeductionRuleSerializerSchema),
            })
            .openapi({ required: ['employee_deduction_rules'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdDeductionRulesRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/deduction_rules',
  tags: ['従業員控除'],
  summary: '従業員の控除情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の控除情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>賞与に紐づく控除（frequency=bonus）の場合、対象年月に賞与情報が登録されている必要があります。</li>\n</ul>',
  operationId: 'update_employee_deduction_rules',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '更新対象の控除ルールを判定する締め年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '更新対象の控除ルールを判定する締め月<br>\n翌月払いの従業員でも、支給月ではなく締め年月を指定してください。<br>\n例: 翌月払い従業員の 2022/01 支給分を対象にする場合は year=2021, month=12 を指定します。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesDeductionRulesControllerUpdateBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesDeductionRulesControllerUpdateResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1EmployeesEmployeeIdDeductionRulesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/employees/{employee_id}/deduction_rules/{id}',
  tags: ['従業員控除'],
  summary: '従業員の控除情報の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の控除情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'destroy_employee_deduction_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '削除対象の控除ルールを判定する締め年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            example: 2021,
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '削除対象の控除ルールを判定する締め月<br>\n翌月払いの従業員でも、支給月ではなく締め年月を指定してください。<br>\n例: 翌月払い従業員の 2022/01 支給分を対象にする場合は year=2021, month=12 を指定します。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            example: 1,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
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
            description: '従業員控除ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdProfileCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/profile_custom_fields',
  tags: ['従業員のカスタム項目'],
  summary: '従業員のカスタム項目の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付のカスタム項目情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>指定年月に在籍していない従業員および給与計算対象外の従業員ではデータが存在しないため、空の配列が返ります。</li>\n</ul>',
  operationId: 'get_employee_profile_custom_fields_rule',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            description:
              '従業員情報を取得したい月<br>\n締め日支払い日設定が翌月払いの従業員情報の場合は、 指定したmonth + 1の値が検索結果として返します。<br>\n翌月払いの従業員の2022/01の従業員情報を取得する場合は、year=2021,month=12を指定してください。<br>',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesProfileCustomFieldRulesControllerIndexResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdWorkRecordsDateRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/work_records/{date}',
  tags: ['勤怠'],
  summary: '勤怠の取得',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員・日付の勤怠情報を返します。</p>',
  operationId: 'get_employee_work_record',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'path',
            description: '従業員情報を取得したい年月日(YYYY-MM-DD)(例:2018-08-01)',
            required: true,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.union([
            ApiV1EmployeesWorkRecordSerializerSchema,
            LegacyApiV1EmployeesWorkRecordSerializerSchema,
          ]),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdWorkRecordsDateRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/work_records/{date}',
  tags: ['勤怠'],
  summary: '勤怠の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の勤怠情報を更新します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>振替出勤・振替休日・代休出勤・代休の登録はAPIでは行うことができません。</li>\n</ul>\n\n<h2 id="_2">examples</h2>\n<ul>\n  <li>出勤日について出退勤時刻および休憩時間を更新する場合は以下のようなパラメータをリクエストします。\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2017-05-25 12:00:00",\n            "clock_out_at": "2017-05-25 13:00:00"\n          }\n        ],\n        "work_record_segments": [\n          {\n            "clock_in_at": "2017-05-25 09:10:00",\n            "clock_out_at": "2017-05-25 18:20:00"\n          }\n        ]\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>勤務パターンや既定の所定労働時間を変更する場合は use_default_work_pattern に false を指定するとともに、各設定を上書きするパラメータをリクエストします。\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2017-05-25 12:00:00",\n            "clock_out_at": "2017-05-25 13:00:00"\n          }\n        ],\n        "work_record_segments": [\n          {\n            "clock_in_at": "2017-05-25 09:10:00",\n            "clock_out_at": "2017-05-25 18:20:00"\n          }\n        ],\n        "day_pattern": "normal_day",\n        "normal_work_clock_in_at": "2017-05-25 11:00:00",\n        "normal_work_clock_out_at": "2017-12-20 20:00:00",\n        "normal_work_mins": 0,\n        "use_default_work_pattern": false\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>有給取得時の連携について半休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2023-12-22 12:00:00",\n            "clock_out_at": "2023-12-22 13:00:00"\n          }\n        ],\n        "work_record_segments": [\n          {\n            "clock_in_at": "2017-05-25 09:10:00",\n            "clock_out_at": "2017-05-25 18:20:00"\n          }\n        ],\n        "paid_holidays": [\n          {\n            "type": "half"\n            "mins": 240\n          }\n        ]\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>有給取得時の連携について午前休または午後休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2023-12-22 16:00:00",\n            "clock_out_at": "2023-12-22 16:30:00"\n          }\n        ],\n        "clock_in_at": "2023-12-22 14:00:00",\n        "clock_out_at": "2023-12-22 18:00:00",\n        "paid_holidays": [\n          {\n            "type": "morning_off"\n          }\n        ]\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>有給取得時の連携について半日単位の年次有給休暇と時間単位の年次有給休暇を同日に取得する場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2023-12-22 16:00:00",\n            "clock_out_at": "2023-12-22 16:30:00"\n          }\n        ],\n        "clock_in_at": "2023-12-22 14:00:00",\n        "clock_out_at": "2023-12-22 18:00:00",\n        "paid_holidays": [\n          {\n            "type": "half",\n            "mins": 240\n          },\n          {\n            "type": "hourly",\n            "mins": 120\n          },\n        ]\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>特別休暇取得時の連携について全休の場合は以下の要素を指定することで API での勤怠をつけることができます。\n    <ul>\n      <li>special_holiday (全休の場合1.0を指定します)</li>\n      <li>special_holiday_setting_id (特別休暇設定IDを指定します)</li>\n    </ul>\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "special_holiday": 1.0\n        "special_holiday_setting_id": 1\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>特別休暇取得時の連携について時間休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。\n    <ul>\n      <li>special_holiday_setting_id (特別休暇設定IDを指定します)</li>\n      <li>hourly_special_holiday_mins (時間休により計上される所定労働時間を分で指定します)</li>\n    </ul>\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2023-12-22 12:00:00",\n            "clock_out_at": "2023-12-22 13:00:00"\n          }\n        ],\n        "work_record_segments": [\n          {\n            "clock_in_at": "2017-05-25 09:10:00",\n            "clock_out_at": "2017-05-25 18:20:00"\n          }\n        ],\n        "special_holiday_setting_id": 1,\n        "hourly_special_holiday_mins": 120\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>特別休暇取得時の連携について午前休または午後休の場合は通常勤務のように勤務開始・終了時間を指定しつつ、加えて以下の要素を指定することで API での勤怠をつけることができます。\n    <ul>\n      <li>special_holiday_setting_id (特別休暇設定IDを指定します)</li>\n      <li>half_holiday_type (morning_off または afternoon_off を指定します)</li>\n    </ul>\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "break_records": [\n          {\n            "clock_in_at": "2023-12-22 12:00:00",\n            "clock_out_at": "2023-12-22 12:30:00"\n          }\n        ],\n        "clock_in_at": "2023-12-22 09:00:00",\n        "clock_out_at": "2023-12-22 13:00:00",\n        "special_holiday_setting_id": 1,\n        "half_holiday_type": "afternoon_off"\n      }\n      </code>\n    </pre>\n  </li>\n\n  <li>欠勤を付ける場合は company_idとis_absence 以外のパラメータは必要ありません。\n    <pre>\n      <code>\n      {\n        "company_id": 1,\n        "is_absence": true\n      }\n      </code>\n    </pre>\n  </li>\n\n</ul>',
  operationId: 'update_employee_work_record',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'path',
            description: '更新対象年月日(YYYY-MM-DD)(例:2018-08-01)',
            required: true,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([
            ApiV1EmployeesWorkRecordsControllerUpdateBodySchema,
            LegacyApiV1EmployeesWorkRecordsControllerUpdateBodySchema,
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesWorkRecordSerializerSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1EmployeesEmployeeIdWorkRecordsDateRoute = createRoute({
  method: 'delete',
  path: '/api/v1/employees/{employee_id}/work_records/{date}',
  tags: ['勤怠'],
  summary: '勤怠の削除',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員の勤怠情報を削除します。</p>',
  operationId: 'destroy_employee_work_record',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'path',
            description: '削除対象年月日(YYYY-MM-DD)(例:2018-08-01)',
            required: true,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
    }),
    query: z.object({
      company_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(2147483647),
        )
        .openapi({
          param: {
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { minimum: 1, maximum: 2147483647, type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/work_record_summaries/{year}/{month}',
  tags: ['勤怠情報サマリ'],
  summary: '勤怠情報月次サマリの取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員、月の勤怠情報のサマリを返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>work_recordsオプションにtrueを指定することで、明細となる日次の勤怠情報もあわせて返却します。</li>\n</ul>',
  operationId: 'get_employee_work_record_summary',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      work_records: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'work_records',
            in: 'query',
            description: 'サマリ情報に日次の勤怠情報を含める(true/false)(デフォルト: false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '従業員情報を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'path',
            description: '従業員情報を取得したい月',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesWorkRecordSummarySerializerSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/work_record_summaries/{year}/{month}',
  tags: ['勤怠情報サマリ'],
  summary: '勤怠情報月次サマリの更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員、月の勤怠情報のサマリを更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>日毎の勤怠の更新はこのAPIではできません。日毎の勤怠の操作には勤怠APIを使用して下さい。</li>\n  <li>勤怠データが存在しない場合は新規作成、既に存在する場合は上書き更新されます。</li>\n  <li>値が設定された項目のみ更新されます。値が設定されなかった場合は自動的に0が設定されます。</li>\n</ul>',
  operationId: 'update_employee_work_record_summary',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'path',
            description: '更新対象月',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesWorkRecordSummaryControllerUpdateBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1EmployeesWorkRecordSummarySerializerSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdTimeClocksRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/time_clocks',
  tags: ['タイムレコーダー(打刻)'],
  summary: '打刻一覧の取得',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員・期間の打刻情報を返します。</p>',
  operationId: 'get_employee_time_clocks',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      from_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'from_date',
            in: 'query',
            description:
              '取得する打刻期間の開始日(YYYY-MM-DD)(例:2018-08-01)(デフォルト: 当月の打刻開始日)',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            required: false,
          },
        }),
      to_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'to_date',
            in: 'query',
            description: '取得する打刻期間の終了日(YYYY-MM-DD)(例:2018-08-31)(デフォルト: 当日)',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
            required: false,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesTimeClocksControllerIndexResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1EmployeesEmployeeIdTimeClocksRoute = createRoute({
  method: 'post',
  path: '/api/v1/employees/{employee_id}/time_clocks',
  tags: ['タイムレコーダー(打刻)'],
  summary: '打刻の登録',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の打刻情報を登録します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>休憩開始の連続や退勤のみなど、整合性の取れていない打刻は登録できません。\n打刻可能種別の取得APIを呼ぶことで、その従業員がその時点で登録可能な打刻種別が取得できます。</li>\n\n  <li>出勤の打刻は</li>\n  <ul>\n    <li>前日の出勤時刻から24時間以内の場合、前日の退勤打刻が必須です。</li>\n    <li> 前日の出勤時刻から24時間経過している場合は、前日の退勤打刻がなくとも出勤打刻を登録することができます。</li>\n  </ul>\n\n  <li>退勤の打刻は</li>\n  <ul>\n    <li><a href=\\"https://support.freee.co.jp/hc/ja/articles/900004490226-%E5%8B%A4%E6%80%A0%E5%9F%BA%E6%9C%AC%E8%A8%AD%E5%AE%9A%E3%82%92%E8%A1%8C%E3%81%86#h_01EYPYTR9HZ7YB8V5F18VMD1BT"target=\\"_blank\\">『退勤を自動打刻する』</a>の設定を使用している場合は、出勤打刻から24時間経過しても退勤打刻がない場合に、退勤打刻が自動で登録されます。</li>\n    <li>すでに登録されている退勤打刻よりも後の時刻であれば上書き登録することができます。</li>\n  </ul>\n\n  <li>打刻が日をまたぐ場合は、base_date(打刻日)に前日の日付を指定してください。</li>\n\n  <li>datetime(打刻日時)を指定できるのは管理者の権限を持ったユーザーのみです。</li>\n</ul>',
  operationId: 'create_employee_time_clock',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesTimeClocksControllerCreateBodySchema },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesTimeClocksControllerCreateResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdTimeClocksIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/time_clocks/{id}',
  tags: ['タイムレコーダー(打刻)'],
  summary: '打刻の取得',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員・指定した打刻の詳細情報を返します。</p>',
  operationId: 'get_employee_time_clock',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
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
            description: '打刻ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesTimeClocksControllerShowResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/time_clocks/available_types',
  tags: ['タイムレコーダー(打刻)'],
  summary: '打刻可能種別の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の打刻可能種別と打刻基準日を返します。</p>\n<p>例: すでに出勤した状態だと、休憩開始、退勤が配列で返ります。</p>',
  operationId: 'get_employee_time_clocks_available_types',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            description:
              '従業員情報を取得したい年月日(YYYY-MM-DD)(例:2018-08-01)(デフォルト：当日)',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            required: false,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesTimeClocksControllerAvailableTypesResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdSpecialHolidaysRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/special_holidays',
  tags: ['従業員の特別休暇'],
  summary: '従業員の特別休暇一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員に付与された特別休暇情報をリストで返します。</p>',
  operationId: 'get_employees_special_holidays',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            description: '対象日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
      start_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            description: '対象開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
      end_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            description: '対象終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647, example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              employee_special_holidays: z
                .array(
                  z
                    .object({
                      id: z
                        .int32()
                        .min(1)
                        .max(2147483647)
                        .exactOptional()
                        .openapi({ description: '特別休暇付与ID', example: 1 }),
                      company_id: z
                        .int32()
                        .min(1)
                        .max(2147483647)
                        .exactOptional()
                        .openapi({ description: '事業所ID', example: 1 }),
                      employee_id: z
                        .int32()
                        .min(1)
                        .max(2147483647)
                        .exactOptional()
                        .openapi({ description: '従業員ID', example: 1 }),
                      special_holiday_setting_id: z
                        .int32()
                        .min(1)
                        .max(2147483647)
                        .exactOptional()
                        .openapi({ description: '特別休暇設定ID', example: 1 }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: '特別休暇名称', example: '育休' }),
                      type_name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: '特別休暇・休業休職種別名',
                          example: '育児休業日',
                        }),
                      paid_type: z
                        .enum(['paid', 'unpaid'])
                        .exactOptional()
                        .openapi({
                          description: '有給・無給区分（paid: 有給、unpaid: 無休）',
                          example: 'paid',
                        }),
                      attendance_rate_calc_type: z
                        .enum(['in_workdays', 'not_in_workdays', 'not_in_total_workdays'])
                        .exactOptional()
                        .openapi({
                          description:
                            '出勤率計算方法（in_workdays: 出勤日数に含める、not_in_workdays: 出勤日数に含めない、not_in_total_workdays: 全労働日に含めない）',
                          example: 'in_workdays',
                        }),
                      usage_day: z
                        .enum(['full', 'half', 'hour'])
                        .exactOptional()
                        .openapi({
                          description: '最小消化単位（full: 全休、half: 半休、hour: 時間休）',
                          example: 'half',
                        }),
                      valid_date_from: z.iso
                        .date()
                        .exactOptional()
                        .openapi({ description: '有効期間開始日(YYYY-MM-DD)(例:2023-01-01)' }),
                      valid_date_to: z.iso
                        .date()
                        .exactOptional()
                        .openapi({ description: '有効期間終了日(YYYY-MM-DD)(例:2023-01-31)' }),
                      days: z
                        .int32()
                        .min(0)
                        .max(2147483647)
                        .exactOptional()
                        .openapi({ description: '付与日数', example: 2 }),
                      used: z
                        .float32()
                        .min(0)
                        .max(999999999.9999)
                        .exactOptional()
                        .openapi({ description: '使用数', example: 0.5 }),
                      num_days_and_hours_used: z
                        .object({
                          days: z
                            .float32()
                            .exactOptional()
                            .openapi({ description: '日数', example: 0.5 }),
                          hours: z
                            .int32()
                            .exactOptional()
                            .openapi({ description: '時間数', example: 0 }),
                        })
                        .exactOptional()
                        .openapi({ description: '使用日数・時間数', required: [] }),
                      left: z
                        .float32()
                        .min(0)
                        .max(999999999.9999)
                        .exactOptional()
                        .openapi({ description: '残数', example: 1.5 }),
                      num_days_and_hours_left: z
                        .object({
                          days: z
                            .float32()
                            .exactOptional()
                            .openapi({ description: '日数', example: 1.5 }),
                          hours: z
                            .int32()
                            .exactOptional()
                            .openapi({ description: '時間数', example: 0 }),
                        })
                        .exactOptional()
                        .openapi({ description: '残日数・時間数', required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/attendance_tag_summaries/{year}/{month}',
  tags: ['勤怠タグサマリ'],
  summary: '勤怠タグ月次サマリの取得',
  description:
    '<h2 id="">概要</h2>\n<p>\n  指定した従業員・年月の勤怠タグサマリの一覧を返します。<br />\n  年月は給与支払い月を指定してください。\n</p>',
  operationId: 'get_employees_attendance_tag_summaries',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '勤怠タグサマリを取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'path',
            description: '勤怠タグサマリを取得したい月',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesAttendanceTagSummariesControllerShowResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/attendance_tag_summaries/{year}/{month}',
  tags: ['勤怠タグサマリ'],
  summary: '勤怠タグ月次サマリの更新',
  description:
    '<h2 id="">概要</h2>\n<p>\n  指定した従業員・年月の勤怠タグサマリを更新します。<br />\n  年月は給与支払い月を指定してください。\n</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>指定した従業員・年月の勤怠タグサマリが存在する場合は、上書き更新されます。</li>\n  <li>指定がなかった勤怠タグは自動的に0が設定されます。</li>\n</ul>',
  operationId: 'update_employees_attendance_tag_summaries',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '勤怠タグサマリを更新したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100, example: 2021 },
          },
          example: 2021,
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'path',
            description: '勤怠タグサマリを更新したい月',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12, example: 1 },
          },
          example: 1,
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeesAttendanceTagSummariesControllerUpdateResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdAttendanceTagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/attendance_tags',
  tags: ['勤怠タグ'],
  summary: '勤怠タグ一覧の取得',
  description: '<h2 id="">概要</h2>\n<p>指定した従業員の利用可能な勤怠タグの一覧を返します。</p>',
  operationId: 'get_employees_attendance_tags',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesAttendanceTagsControllerIndexResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdAttendanceTagsDateRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/attendance_tags/{date}',
  tags: ['勤怠タグ'],
  summary: '勤怠タグと利用回数の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の勤怠タグと利用回数の一覧を返します。</p>',
  operationId: 'get_employees_attendance_tags_by_date',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'path',
            description: '対象年月日(YYYY-MM-DD)(例:2018-08-01)',
            required: true,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesAttendanceTagsControllerShowResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1EmployeesEmployeeIdAttendanceTagsDateRoute = createRoute({
  method: 'put',
  path: '/api/v1/employees/{employee_id}/attendance_tags/{date}',
  tags: ['勤怠タグ'],
  summary: '勤怠タグの更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の勤怠タグを更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>指定した従業員・日付の勤怠タグが存在する場合は、上書き更新されます。</li>\n  <li>指定がなかった勤怠タグは削除されます。</li>\n</ul>',
  operationId: 'update_employees_attendance_tags',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'path',
            description: '更新対象年月日(YYYY-MM-DD)(例:2018-08-01)',
            required: true,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ApiV1EmployeesAttendanceTagsControllerUpdateBodySchema },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              employee_attendance_tags: z
                .array(ApiV1EmployeesAssignedAttendanceTagSerializerSchema)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1SalariesEmployeePayrollStatementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/salaries/employee_payroll_statements',
  tags: ['給与明細'],
  summary: '給与明細一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所に所属する従業員の給与明細をリストで返します。</p>\n<p>指定した年月に支払いのある給与明細が返されます。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>複数時給を設定している場合はpaymentsに内訳が返されます。</li>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>給与計算中の場合は、各パラメータはnullおよび空配列が返ります。</li>\n</ul>',
  operationId: 'get_salaries_employee_payroll_statements',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            description: '従業員情報を取得したい年',
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            description: '従業員情報を取得したい月',
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1SalariesEmployeePayrollStatementsControllerIndexResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1SalariesEmployeePayrollStatementsEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/salaries/employee_payroll_statements/{employee_id}',
  tags: ['給与明細'],
  summary: '給与明細の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員ID、年月の給与明細を返します。</p>\n<p>指定した年月に支払いのある給与明細が返されます。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>複数時給を設定している場合はpaymentsに内訳が返されます。</li>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>給与計算中の場合は、各パラメータはnullおよび空配列が返ります。</li>\n</ul>\n\n<h2 id="_2">examples</h2>\n<pre>\n  <code>\n  {\n  "employee_payroll_statement": {\n    "id": 1,\n    "company_id": 1,\n    "employee_id": 1,\n    "employee_name": "給与 太郎",\n    "employee_display_name": "給与 太郎",\n    "employee_num": "001",\n    "pay_date": "2018-02-25",\n    "start_date": "2018-02-01",\n    "closing_date": "2018-02-28",\n    "variable_pay_start_date": "2018-01-01",\n    "variable_pay_closing_date": "2018-01-31",\n    "fixed": true,\n    "calc_status": "calculated",\n    "calculated_at": "2018-09-27T05:06:45.315Z",\n    "pay_calc_type": "monthly",\n    "board_member_remuneration_amount": "400000.0",\n    "basic_pay_amount": "300000.0",\n    "work_days": "21.0",\n    "normal_work_time": "8.0",\n    "normal_work_days": "21.0",\n    "work_mins_by_paid_holiday": "480.0",\n    "num_paid_holidays": "1.0",\n    "is_board_member": true,\n    "total_attendance_deduction_amount": "0.0",\n    "total_allowance_amount": "0.0",\n    "total_deduction_amount": "23830.0",\n    "total_deduction_employer_share": "16830.0",\n    "net_payment_amount": "277170.0",\n    "gross_payment_amount": "301000.0",\n    "total_worked_days_count": "21.0",\n    "total_taxable_payment_amount": "301000.0",\n    "total_expense_amount": "0.0",\n    "total_transfer_amount": "277170.0",\n    "total_annual_payment_amount": "600000.0",\n    "payments": [{ "name": "基本給", "amount": "300000.0"},{ "name": "残業代", "amount": "1000.0"}],\n    "deductions": [{"name": "所得税", "amount": "7000.0"}, {"name": "健康保険料", "amount": "16830.0"}],\n    "deductions_emloyers_share": [{"name": "健康保険料(会社負担分)", "amount": "16830.0"}],\n    "attendances": [{"name": "遅刻・早退", "time": "0.0", "amount": "0.0"}],\n    "overtime_pays": [{ "name": "時間外労働", "time": "60.0", "amount": "1000.0", "code": null }, { "name": "カスタム固定残業代", "time": null, "amount": "10000.0", "code": "a001" }],\n    "remark": "備考"\n    }\n  }\n  </code>\n</pre>',
  operationId: 'get_salaries_employee_payroll_statement',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            description: '従業員情報を取得したい年',
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            description: '従業員情報を取得したい月',
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1SalariesEmployeePayrollStatementsControllerShowResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkRoute = createRoute({
  method: 'put',
  path: '/api/v1/salaries/employee_payroll_statements/{employee_id}/remark',
  tags: ['給与明細'],
  summary: '給与明細の備考の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の給与明細の備考を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'update_employee_payroll_statement_remark',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .int()
                .min(1)
                .max(2147483647)
                .openapi({ description: '事業所ID', example: 1 }),
              year: z
                .int()
                .min(2000)
                .max(2100)
                .openapi({ description: '更新対象の年', example: 2024 }),
              month: z.int().min(1).max(12).openapi({ description: '更新対象の月', example: 10 }),
              remark: z
                .object({
                  body: z
                    .string()
                    .max(500)
                    .openapi({ description: '備考本文（500 文字以内）', example: '備考の本文' }),
                })
                .openapi({ required: ['body'] }),
            })
            .openapi({ required: ['company_id', 'year', 'month', 'remark'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              employee_payroll_statement_remark: z
                .object({
                  id: z.int().openapi({ description: '給与明細備考ID' }),
                  employee_payroll_statement_id: z.int().openapi({ description: '給与明細ID' }),
                  body: z.string().openapi({ description: '備考本文' }),
                })
                .openapi({ required: ['id', 'employee_payroll_statement_id', 'body'] }),
            })
            .openapi({ required: ['employee_payroll_statement_remark'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1BonusesEmployeePayrollStatementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/bonuses/employee_payroll_statements',
  tags: ['賞与明細'],
  summary: '賞与明細一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所に所属する従業員の賞与明細をリストで返します。</p>\n<p>指定した年月に支払いのある賞与明細が返されます。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_bonuses_employee_payroll_statements',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            description: '従業員情報を取得したい年',
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            description: '従業員情報を取得したい月',
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1BonusesEmployeePayrollStatementsIndexSerializerSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1BonusesEmployeePayrollStatementsEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/bonuses/employee_payroll_statements/{employee_id}',
  tags: ['賞与明細'],
  summary: '賞与明細の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員ID、年月の賞与明細を返します。</p>\n<p>指定した年月に支払いのある賞与明細が返されます。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>\n\n<h2 id="_2">examples</h2>\n<pre>\n  <code>\n    {\n    "employee_payroll_statement": {\n      "id": 1,\n      "company_id": 1,\n      "employee_id": 1,\n      "employee_name": "給与 太郎",\n      "employee_display_name": "給与 太郎",\n      "employee_num": "001",\n      "closing_date": "2018-03-31",\n      "pay_date": "2018-03-31",\n      "fixed": true,\n      "calc_status": "calculated",\n      "calculated_at": "2018-09-27T05:06:45.315Z",\n      "bonus_amount": "300000.0",\n      "total_allowance_amount": "0.0",\n      "total_deduction_amount": "23830.0",\n      "net_payment_amount": "268000.0",\n      "gross_payment_amount": "330000.0",\n      "total_taxable_payment_amount": "330000.0",\n      "allowances": [{"name": "地域手当", "amount": "30000.0"}],\n      "deductions": [{"name": "所得税", "amount": "46000.0"}, {"name": "健康保険料", "amount": "16000.0"}],\n      "remark": "備考"\n    }\n    }\n  </code>\n</pre>',
  operationId: 'get_bonuses_employee_payroll_statement',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
            description: '従業員情報を取得したい年',
          },
        }),
      month: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(12),
        )
        .openapi({
          param: {
            name: 'month',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 12 },
            description: '従業員情報を取得したい月',
          },
        }),
    }),
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1BonusesEmployeePayrollStatementsControllerShowResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeeGroupMembershipsRoute = createRoute({
  method: 'get',
  path: '/api/v1/employee_group_memberships',
  tags: ['所属'],
  summary: '所属一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における所属情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_employee_group_memberships',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            description: '事業所ID',
          },
        }),
      base_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .openapi({
          param: {
            name: 'base_date',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            description:
              '指定日。指定日付時点における所属情報をリストで返します。(YYYY-MM-DD)(例:2018-07-31)',
            example: '2018-07-31',
          },
        }),
      with_no_payroll_calculation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'with_no_payroll_calculation',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'trueを指定すると給与計算対象外の従業員情報をレスポンスに含めます。',
            example: true,
            required: false,
          },
        }),
      employee_ids: z
        .string()
        .max(8192)
        .exactOptional()
        .openapi({
          param: {
            name: 'employee_ids',
            in: 'query',
            schema: { type: 'string', maxLength: 8192 },
            description:
              '取得対象とする従業員IDを指定することができます。指定しない場合は全従業員が対象となります。\n(例:1,2,3,4,5)\n',
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeeGroupMembershipsIndexSerializerSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1EmployeesEmployeeIdGroupMembershipsRoute = createRoute({
  method: 'get',
  path: '/api/v1/employees/{employee_id}/group_memberships',
  tags: ['所属'],
  summary: '従業員の所属取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の所属情報をリストで返します。</p>\n<p>base_dateを指定した場合は指定日付時点の所属情報を、base_dateを省略した場合は全期間の所属履歴を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_employee_group_memberships_by_employee_id',
  request: {
    params: z.object({
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            description: '従業員ID',
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            description: '事業所ID',
          },
        }),
      base_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'base_date',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            description:
              '指定日。指定日付時点における所属情報を返します。(YYYY-MM-DD)(例:2018-07-31)\n省略した場合は全期間の所属履歴を返します。\n',
            example: '2018-07-31',
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeesGroupMembershipsIndexSerializerSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1GroupsRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups',
  tags: ['部門'],
  summary: '部門一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における部門情報をリストで返します。</p>\n<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_groups',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1GroupsIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1GroupsRoute = createRoute({
  method: 'post',
  path: '/api/v1/groups',
  tags: ['部門'],
  summary: '部門の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の部門を新規作成します。</p>\n<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'create_group',
  request: { body: { content: { 'application/json': { schema: ApiV1GroupCreateRequestSchema } } } },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1GroupResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1GroupsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/groups/{id}',
  tags: ['部門'],
  summary: '部門の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の部門の情報を更新します。</p>\n<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'update_group',
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
            description: '部門ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1GroupUpdateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1GroupResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1GroupsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/groups/{id}',
  tags: ['部門'],
  summary: '部門の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の部門の情報を削除します。</p>\n<p>部門APIの使い方については、<a href="https://developer.freee.co.jp/tips/groups-api-hierarchy" target="_blank">部門APIを利用した組織図の取得について</a> をご参照ください。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'destroy_group',
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
            description: '部門ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1AllowancesRoute = createRoute({
  method: 'get',
  path: '/api/v1/allowances',
  tags: ['その他手当'],
  summary: 'その他手当一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所のその他手当情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_allowances',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      frequency: z
        .enum(['salary', 'salary_monthly', 'salary_this_month', 'bonus'])
        .exactOptional()
        .openapi({
          param: {
            name: 'frequency',
            in: 'query',
            required: false,
            description: '支給頻度フィルタ（省略で全件取得）',
            schema: {
              type: 'string',
              enum: ['salary', 'salary_monthly', 'salary_this_month', 'bonus'],
            },
            example: 'salary_monthly',
          },
        }),
      is_active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'is_active',
            in: 'query',
            required: false,
            description: '表示状態フィルタ（省略で全件取得）',
            schema: { type: 'boolean' },
            example: true,
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
            example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
            example: 0,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1AllowancesIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1AllowancesRoute = createRoute({
  method: 'post',
  path: '/api/v1/allowances',
  tags: ['その他手当'],
  summary: 'その他手当の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所のその他手当を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'create_allowance',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApiV1AllowancesControllerCreateBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1AllowanceResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1AllowancesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/allowances/{id}',
  tags: ['その他手当'],
  summary: 'その他手当の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所のその他手当情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_allowance',
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
            description: 'その他手当ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1AllowanceResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1DeductionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/deductions',
  tags: ['その他控除'],
  summary: 'その他控除一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所のその他控除情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_deductions',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      frequency: z
        .enum(['salary', 'salary_monthly', 'salary_this_month', 'bonus'])
        .exactOptional()
        .openapi({
          param: {
            name: 'frequency',
            in: 'query',
            required: false,
            description: '支給頻度フィルタ（省略で全件取得）',
            schema: {
              type: 'string',
              enum: ['salary', 'salary_monthly', 'salary_this_month', 'bonus'],
            },
            example: 'salary_monthly',
          },
        }),
      is_active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'is_active',
            in: 'query',
            required: false,
            description: '表示状態フィルタ（省略で全件取得）',
            schema: { type: 'boolean' },
            example: true,
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
            example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
            example: 0,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1DeductionsIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1DeductionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/deductions',
  tags: ['その他控除'],
  summary: 'その他控除の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所のその他控除を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'create_deduction',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApiV1DeductionsControllerCreateBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1DeductionResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1DeductionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/deductions/{id}',
  tags: ['その他控除'],
  summary: 'その他控除の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所のその他控除情報を返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_deduction',
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
            description: 'その他控除ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1DeductionResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1PositionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/positions',
  tags: ['役職'],
  summary: '役職一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における役職情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'get_positions',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PositionIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1PositionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/positions',
  tags: ['役職'],
  summary: '役職の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の役職を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'create_position',
  request: { body: { content: { 'application/json': { schema: ApiV1PositionRequestSchema } } } },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PositionResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1PositionsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/positions/{id}',
  tags: ['役職'],
  summary: '役職の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の役職の情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n</ul>',
  operationId: 'update_position',
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
            description: '役職ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1PositionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PositionResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1PositionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/positions/{id}',
  tags: ['役職'],
  summary: '役職の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の役職の情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>管理者権限を持ったユーザーのみ実行可能です。</li>\n  <li>従業員に役職が適用されている場合、従業員の役職情報も削除されます。</li>\n</ul>',
  operationId: 'destroy_position',
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
            description: '役職ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsMonthlyAttendancesRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/monthly_attendances',
  tags: ['月次勤怠締め申請'],
  summary: '月次勤怠締め申請一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における月次勤怠締め申請情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_monthly_attendances',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      status: z
        .enum(['draft', 'in_progress', 'approved', 'feedback'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              '申請ステータス\n- `draft` - 下書き\n- `in_progress` - 申請中\n- `approved` - 承認済\n- `feedback` - 差戻し',
            schema: {
              type: 'string',
              enum: ['draft', 'in_progress', 'approved', 'feedback'],
              example: 'in_progress',
            },
            required: false,
          },
          example: 'in_progress',
        }),
      application_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'application_number',
            in: 'query',
            description: '申請No',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_issue_date',
            in: 'query',
            description: '申請開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_issue_date',
            in: 'query',
            description: '申請終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      approver_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'approver_id',
            in: 'query',
            description:
              '現在承認ステップの承認者のユーザーID\n\napprover_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません\n',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      applicant_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'applicant_id',
            in: 'query',
            description: '申請者のユーザーID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_target_date',
            in: 'query',
            description: '対象開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_target_date',
            in: 'query',
            description: '対象終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      passed_auto_check: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'passed_auto_check',
            in: 'query',
            description:
              '自動チェック結果\n- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。\n- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。\n- キーごと指定しない場合、すべての申請を返却します。',
            schema: { type: 'boolean' },
            example: false,
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsMonthlyAttendancesRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/monthly_attendances',
  tags: ['月次勤怠締め申請'],
  summary: '月次勤怠締め申請の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の月次勤怠締め申請を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'create_approval_requests_monthly_attendance',
  request: {
    body: {
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceCreateRequestSchema } },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsMonthlyAttendancesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/monthly_attendances/{id}',
  tags: ['月次勤怠締め申請'],
  summary: '月次勤怠締め申請の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の月次勤怠締め申請情報を取得します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_monthly_attendance',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
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
            description: '月次勤怠締め申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1ApprovalRequestsMonthlyAttendancesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/approval_requests/monthly_attendances/{id}',
  tags: ['月次勤怠締め申請'],
  summary: '月次勤怠締め申請の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の月次勤怠締め申請情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'update_approval_requests_monthly_attendance',
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
            description: '月次勤怠締め申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceUpdateRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1ApprovalRequestsMonthlyAttendancesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/approval_requests/monthly_attendances/{id}',
  tags: ['月次勤怠締め申請'],
  summary: '月次勤怠締め申請の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の月次勤怠締め申請情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'destroy_approval_requests_monthly_attendance',
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
            description: '月次勤怠締め申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsMonthlyAttendancesIdActionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/monthly_attendances/{id}/actions',
  tags: ['月次勤怠締め申請'],
  summary: '月次勤怠締め申請の承認操作',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の月次勤怠締め申請情報を承認操作します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'action_approval_requests_monthly_attendance',
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
            description: '月次勤怠締め申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1ApprovalActionRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1MonthlyAttendanceResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsWorkTimesRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/work_times',
  tags: ['勤務時間修正申請'],
  summary: '勤務時間修正申請一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における勤務時間修正申請情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_work_times',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      status: z
        .enum(['draft', 'in_progress', 'approved', 'feedback'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              '申請ステータス\n- `draft` - 下書き\n- `in_progress` - 申請中\n- `approved` - 承認済\n- `feedback` - 差戻し',
            schema: {
              type: 'string',
              enum: ['draft', 'in_progress', 'approved', 'feedback'],
              example: 'in_progress',
            },
            required: false,
          },
          example: 'in_progress',
        }),
      application_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'application_number',
            in: 'query',
            description: '申請No',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_issue_date',
            in: 'query',
            description: '申請開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
      end_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_issue_date',
            in: 'query',
            description: '申請終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
      approver_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'approver_id',
            in: 'query',
            description:
              '現在承認ステップの承認者のユーザーID\napprover_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません\n',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      applicant_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'applicant_id',
            in: 'query',
            description: '申請者のユーザーID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_target_date',
            in: 'query',
            description: '対象開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
      end_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_target_date',
            in: 'query',
            description: '対象終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2023-04-01',
            required: false,
          },
        }),
      passed_auto_check: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'passed_auto_check',
            in: 'query',
            description:
              '自動チェック結果\n- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。\n- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。\n- キーごと指定しない場合、すべての申請を返却します。',
            schema: { type: 'boolean' },
            example: false,
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              work_times: z.array(ApiV1WorkTimeIndexResponseParamsSchema),
              total_count: z
                .int32()
                .min(0)
                .max(2147483647)
                .openapi({ description: '合計件数', example: 1 }),
            })
            .openapi({ required: ['work_times', 'total_count'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsWorkTimesRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/work_times',
  tags: ['勤務時間修正申請'],
  summary: '勤務時間修正申請の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の勤務時間修正を新規作成します。</p>\n\n<h2 id="_2">examples</h2>\n<ul>\n  <li>勤務時間を修正する場合は以下のようなパラメータを指定します。\n    <pre>\n      <code>\n        {\n          "company_id": 1,\n          "target_date": "2017-05-25",\n          "break_records": [\n            {\n              "clock_in_at": "12:00:00",\n              "clock_out_at": "13:00:00"\n            }\n          ],\n          "work_records": [\n            {\n              "clock_in_at": "09:10:00",\n              "clock_out_at": "18:20:00"\n            }\n          ],\n          "approval_flow_route_id": 1\n        }\n      </code>\n    </pre>\n  </li>\n</ul>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'create_approval_requests_work_time',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              company_id: z
                .int32()
                .min(1)
                .max(2147483647)
                .openapi({ description: '事業所ID（必須）', example: 1 }),
              target_date: z.iso
                .date()
                .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
                .openapi({ description: '対象日（必須）' }),
              clear_work_time: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'false: 勤務時間を修正する  \ntrue: 勤務時間を削除する\n\n勤務時間を削除する場合は以下のパラメータは指定しないでください。\n- work_records\n- lateness_mins\n- early_leaving_mins\n- break_records',
                }),
              work_records: z
                .array(z.lazy(() => ApiV1WorkTimeIndexResponseParamsSchema))
                .exactOptional()
                .openapi({ description: '勤務時間のリスト' }),
              lateness_mins: z
                .int32()
                .exactOptional()
                .openapi({ description: '遅刻分の時間（分単位）' }),
              early_leaving_mins: z
                .int32()
                .exactOptional()
                .openapi({ description: '早退分の時間（分単位）' }),
              break_records: z
                .array(z.lazy(() => ApiV1WorkTimeIndexResponseParamsSchema))
                .exactOptional()
                .openapi({ description: '休憩時間のリスト' }),
              comment: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: '申請理由', example: '申請理由' }),
              approval_flow_route_id: z
                .int32()
                .min(1)
                .max(2147483647)
                .openapi({ description: '申請経路ID（必須）', example: 1 }),
              approver_id: z
                .int32()
                .min(1)
                .max(2147483647)
                .exactOptional()
                .openapi({ description: '承認者のユーザーID', example: 1 }),
            })
            .openapi({ required: ['company_id', 'target_date', 'approval_flow_route_id'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ work_time: ApiV1WorkTimeResponseParamsSchema })
            .openapi({ required: ['work_time'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsWorkTimesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/work_times/{id}',
  tags: ['勤務時間修正申請'],
  summary: '勤務時間修正申請の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の勤務時間修正申請情報を取得します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_work_time',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
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
            description: '勤務時間修正申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ work_time: ApiV1WorkTimeResponseParamsSchema })
            .openapi({ required: ['work_time'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1ApprovalRequestsWorkTimesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/approval_requests/work_times/{id}',
  tags: ['勤務時間修正申請'],
  summary: '勤務時間修正申請の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の勤務時間修正申請情報を更新します。</p>\n\n<h2 id="_2">examples</h2>\n<ul>\n  <li>勤務時間を修正する場合は以下のようなパラメータを指定します。\n    <pre>\n      <code>\n        {\n          "company_id": 1,\n          "target_date": "2017-05-25",\n          "break_records": [\n            {\n              "clock_in_at": "12:00:00",\n              "clock_out_at": "13:00:00"\n            }\n          ],\n          "work_records": [\n            {\n              "clock_in_at": "09:10:00",\n              "clock_out_at": "18:20:00"\n            }\n          ],\n          "approval_flow_route_id": 1\n        }\n      </code>\n    </pre>\n  </li>\n</ul>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'update_approval_requests_work_time',
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
            description: '勤務時間修正申請ID',
            required: true,
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
                .int32()
                .min(1)
                .max(2147483647)
                .openapi({ description: '事業所ID（必須）', example: 1 }),
              target_date: z.iso
                .date()
                .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
                .openapi({ description: '対象日（必須）' }),
              clear_work_time: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'false: 勤務時間を修正する  \ntrue: 勤務時間を削除する\n\n勤務時間を削除する場合は以下のパラメータは指定しないでください。\n- work_records\n- lateness_mins\n- early_leaving_mins\n- break_records',
                }),
              work_records: z
                .array(z.lazy(() => ApiV1WorkTimeIndexResponseParamsSchema))
                .exactOptional()
                .openapi({ description: '勤務時間のリスト' }),
              lateness_mins: z
                .int32()
                .exactOptional()
                .openapi({ description: '遅刻分の時間（分単位）' }),
              early_leaving_mins: z
                .int32()
                .exactOptional()
                .openapi({ description: '早退分の時間（分単位）' }),
              break_records: z
                .array(z.lazy(() => ApiV1WorkTimeIndexResponseParamsSchema))
                .exactOptional()
                .openapi({ description: '休憩時間のリスト' }),
              comment: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: '申請理由', example: '申請理由' }),
              approval_flow_route_id: z
                .int32()
                .min(1)
                .max(2147483647)
                .openapi({ description: '申請経路ID（必須）', example: 1 }),
              approver_id: z
                .int32()
                .min(1)
                .max(2147483647)
                .exactOptional()
                .openapi({ description: '承認者のユーザーID', example: 1 }),
            })
            .openapi({ required: ['company_id', 'target_date', 'approval_flow_route_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ work_time: ApiV1WorkTimeResponseParamsSchema })
            .openapi({ required: ['work_time'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1ApprovalRequestsWorkTimesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/approval_requests/work_times/{id}',
  tags: ['勤務時間修正申請'],
  summary: '勤務時間修正申請の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の勤務時間修正申請情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'destroy_approval_requests_work_time',
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
            description: '勤務時間修正申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsWorkTimesIdActionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/work_times/{id}/actions',
  tags: ['勤務時間修正申請'],
  summary: '勤務時間修正申請の承認操作',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の勤務時間修正申請情報を承認操作します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'action_approval_requests_work_time',
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
            description: '勤務時間修正申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1ApprovalActionRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ work_time: ApiV1WorkTimeResponseParamsSchema })
            .openapi({ required: ['work_time'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsPaidHolidaysRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/paid_holidays',
  tags: ['有給休暇申請'],
  summary: '有給休暇申請一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における有給休暇申請情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_paid_holidays',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      status: z
        .enum(['draft', 'in_progress', 'approved', 'feedback'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              '申請ステータス\n- `draft` - 下書き\n- `in_progress` - 申請中\n- `approved` - 承認済\n- `feedback` - 差戻し',
            schema: {
              type: 'string',
              enum: ['draft', 'in_progress', 'approved', 'feedback'],
              example: 'in_progress',
            },
            required: false,
          },
          example: 'in_progress',
        }),
      application_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'application_number',
            in: 'query',
            description: '申請No',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_issue_date',
            in: 'query',
            description: '申請開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_issue_date',
            in: 'query',
            description: '申請終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      approver_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'approver_id',
            in: 'query',
            description:
              '現在承認ステップの承認者のユーザーID\n\napprover_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません\n',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      applicant_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'applicant_id',
            in: 'query',
            description: '申請者のユーザーID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_target_date',
            in: 'query',
            description: '対象開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_target_date',
            in: 'query',
            description: '対象終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      passed_auto_check: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'passed_auto_check',
            in: 'query',
            description:
              '自動チェック結果\n- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。\n- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。\n- キーごと指定しない場合、すべての申請を返却します。',
            schema: { type: 'boolean' },
            example: false,
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PaidHolidayIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsPaidHolidaysRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/paid_holidays',
  tags: ['有給休暇申請'],
  summary: '有給休暇申請の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の有給休暇申請を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'create_approval_requests_paid_holiday',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.union([ApiV1PaidHolidayRequestSchema, LegacyApiV1PaidHolidayRequestSchema]),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PaidHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsPaidHolidaysIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/paid_holidays/{id}',
  tags: ['有給休暇申請'],
  summary: '有給休暇申請の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の有給休暇申請情報を取得します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_paid_holiday',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
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
            description: '有給休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PaidHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1ApprovalRequestsPaidHolidaysIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/approval_requests/paid_holidays/{id}',
  tags: ['有給休暇申請'],
  summary: '有給休暇申請の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の有給休暇申請情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'update_approval_requests_paid_holiday',
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
            description: '有給休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.union([ApiV1PaidHolidayRequestSchema, LegacyApiV1PaidHolidayRequestSchema]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PaidHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1ApprovalRequestsPaidHolidaysIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/approval_requests/paid_holidays/{id}',
  tags: ['有給休暇申請'],
  summary: '有給休暇申請の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の有給休暇申請情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'destroy_approval_requests_paid_holiday',
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
            description: '有給休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsPaidHolidaysIdActionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/paid_holidays/{id}/actions',
  tags: ['有給休暇申請'],
  summary: '有給休暇申請の承認操作',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の有給休暇申請情報を承認操作します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>全休の有給休暇申請は承認されると申請者の有給の残数が減ります。</li>\n  <li>半休と時間休の有給休暇申請は承認されても申請者の有給の残数が減らない場合があります。以下の条件を満たす場合、申請者の有給の残数が減ります。</li>\n  <ul>\n    <li>申請承認後、申請者が申請の対象日に出勤打刻と退勤打刻をする。</li>\n    <li>申請承認前に、申請者が申請の対象日に勤怠を登録している。</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'action_approval_requests_paid_holiday',
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
            description: '有給休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1ApprovalActionRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1PaidHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsSpecialHolidaysRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/special_holidays',
  tags: ['特別休暇申請'],
  summary: '特別休暇申請一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における特別休暇申請情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_special_holidays',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      status: z
        .enum(['draft', 'in_progress', 'approved', 'feedback'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              '申請ステータス\n- `draft` - 下書き\n- `in_progress` - 申請中\n- `approved` - 承認済\n- `feedback` - 差戻し',
            schema: {
              type: 'string',
              enum: ['draft', 'in_progress', 'approved', 'feedback'],
              example: 'in_progress',
            },
            required: false,
          },
          example: 'in_progress',
        }),
      application_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'application_number',
            in: 'query',
            description: '申請No',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_issue_date',
            in: 'query',
            description: '申請開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_issue_date',
            in: 'query',
            description: '申請終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      approver_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'approver_id',
            in: 'query',
            description:
              '現在承認ステップの承認者のユーザーID\n\napprover_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません\n',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      applicant_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'applicant_id',
            in: 'query',
            description: '申請者のユーザーID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_target_date',
            in: 'query',
            description: '対象開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_target_date',
            in: 'query',
            description: '対象終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      passed_auto_check: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'passed_auto_check',
            in: 'query',
            description:
              '自動チェック結果\n- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。\n- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。\n- キーごと指定しない場合、すべての申請を返却します。',
            schema: { type: 'boolean' },
            example: false,
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1specialHolidayIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsSpecialHolidaysRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/special_holidays',
  tags: ['特別休暇申請'],
  summary: '特別休暇申請の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の特別休暇申請を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'create_approval_requests_special_holiday',
  request: {
    body: { content: { 'application/json': { schema: ApiV1specialHolidayRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1specialHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsSpecialHolidaysIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/special_holidays/{id}',
  tags: ['特別休暇申請'],
  summary: '特別休暇申請の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の特別休暇申請情報を取得します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_special_holiday',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
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
            description: '特別休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1specialHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1ApprovalRequestsSpecialHolidaysIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/approval_requests/special_holidays/{id}',
  tags: ['特別休暇申請'],
  summary: '特別休暇申請の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の特別休暇申請情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'update_approval_requests_special_holiday',
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
            description: '特別休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1specialHolidayRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1specialHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1ApprovalRequestsSpecialHolidaysIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/approval_requests/special_holidays/{id}',
  tags: ['特別休暇申請'],
  summary: '特別休暇申請の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の特別休暇申請情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'destroy_approval_requests_special_holiday',
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
            description: '特別休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsSpecialHolidaysIdActionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/special_holidays/{id}/actions',
  tags: ['特別休暇申請'],
  summary: '特別休暇申請の承認操作',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の特別休暇申請情報を承認操作します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>全休の特別休暇申請は承認されると申請者の特別休暇の残数が減ります。</li>\n  <li>半休と時間休の特別休暇申請は承認されても申請者の特別休暇の残数が減らない場合があります。以下の条件を満たす場合、申請者の特別休暇の残数が減ります。</li>\n  <ul>\n    <li>申請承認後、申請者が申請の対象日に出勤打刻と退勤打刻をする。</li>\n    <li>申請承認前に、申請者が申請の対象日に勤怠を登録している。</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'action_approval_requests_special_holiday',
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
            description: '特別休暇申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1ApprovalActionRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1specialHolidayResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsOvertimeWorksRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/overtime_works',
  tags: ['残業申請'],
  summary: '残業申請一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の指定日付時点における残業申請情報をリストで返します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_overtime_works',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      status: z
        .enum(['draft', 'in_progress', 'approved', 'feedback'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              '申請ステータス\n- `draft` - 下書き\n- `in_progress` - 申請中\n- `approved` - 承認済\n- `feedback` - 差戻し',
            schema: {
              type: 'string',
              enum: ['draft', 'in_progress', 'approved', 'feedback'],
              example: 'in_progress',
            },
            required: false,
          },
          example: 'in_progress',
        }),
      application_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'application_number',
            in: 'query',
            description: '申請No',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_issue_date',
            in: 'query',
            description: '申請開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_issue_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_issue_date',
            in: 'query',
            description: '申請終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      approver_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'approver_id',
            in: 'query',
            description:
              '現在承認ステップの承認者のユーザーID\n\napprover_idに値を指定する場合、指定なしの申請経路を利用した申請は返却されません\n',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      applicant_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'applicant_id',
            in: 'query',
            description: '申請者のユーザーID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
            required: false,
          },
        }),
      start_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'start_target_date',
            in: 'query',
            description: '対象開始日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      end_target_date: z.iso
        .date()
        .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'end_target_date',
            in: 'query',
            description: '対象終了日',
            schema: { type: 'string', format: 'date', pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' },
            example: '2022-02-01',
            required: false,
          },
        }),
      passed_auto_check: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'passed_auto_check',
            in: 'query',
            description:
              '自動チェック結果\n- trueを指定した場合、自動チェック結果がtrueの申請のみ返却します。\n- falseを指定した場合、自動チェック結果がfalseの申請のみ返却します。\n- キーごと指定しない場合、すべての申請を返却します。',
            schema: { type: 'boolean' },
            example: false,
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
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100, example: 50 },
            required: false,
          },
          example: 50,
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
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647, example: 0 },
            required: false,
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1OvertimeWorkIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsOvertimeWorksRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/overtime_works',
  tags: ['残業申請'],
  summary: '残業申請の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の残業申請を新規作成します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請の内容を勤怠に反映させるかの設定次第でリクエスト時に指定するパラメータが異なります。残業申請に必要な設定情報の取得APIで確認してください。</li>\n  <ul>\n    <li>勤怠に反映する設定の場合</li>\n    <ul>\n      <li>設定情報の取得APIで受け取った値を用いてパラメータを指定します。</li>\n      <li>早出（early_work_start_at, early_work_end_at）か残業（overtime_work_start_at, overtime_work_end_at）のどちらか、もしくは両方を指定してください。</li>\n      <ul>\n        <li>早出・残業両方とも指定しなかった場合は取り消し申請となります。対象日の承認済み残業申請は全て取り消され、打刻データがあれば勤怠に反映し直します。</li>\n      </ul>\n      <li>早出の終了時刻（early_work_end_at）は所定の出勤時刻と同じ、残業の開始時刻（overtime_work_start_at）は所定の退勤時刻と同じ時刻を指定する必要があります。</li>\n      <li>早出・残業の時刻に指定できる分の単位はそれぞれ設定（early_work_mins_unit, overtime_work_mins_unit）の通りです。</li>\n    </ul>\n    <li>勤怠に反映しない設定の場合</li>\n    <ul>\n      <li>残業開始（start_at）と残業終了（end_at）を指定してください。</li>\n    </ul>\n  </ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'create_approval_requests_overtime_work',
  request: {
    body: { content: { 'application/json': { schema: ApiV1OvertimeWorkRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1OvertimeWorkResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsOvertimeWorksIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/overtime_works/{id}',
  tags: ['残業申請'],
  summary: '残業申請の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の残業申請情報を取得します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_overtime_work',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
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
            description: '残業申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1OvertimeWorkResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1ApprovalRequestsOvertimeWorksIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/approval_requests/overtime_works/{id}',
  tags: ['残業申請'],
  summary: '残業申請の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の残業申請情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請の内容を勤怠に反映させるかの設定次第でリクエスト時に指定するパラメータが異なります。残業申請に必要な設定情報の取得APIで確認してください。</li>\n  <ul>\n    <li>勤怠に反映する設定の場合</li>\n    <ul>\n      <li>設定情報の取得APIで受け取った値を用いてパラメータを指定します。</li>\n      <li>早出（early_work_start_at, early_work_end_at）か残業（overtime_work_start_at, overtime_work_end_at）のどちらか、もしくは両方を指定してください。</li>\n      <ul>\n        <li>早出・残業両方とも指定しなかった場合は取り消し申請となります。対象日の承認済み残業申請は全て取り消され、打刻データがあれば勤怠に反映し直します。</li>\n      </ul>\n      <li>早出の終了時刻（early_work_end_at）は所定の出勤時刻と同じ、残業の開始時刻（overtime_work_start_at）は所定の退勤時刻と同じ時刻を指定する必要があります。</li>\n      <li>早出・残業の時刻に指定できる分の単位はそれぞれ設定（early_work_mins_unit, overtime_work_mins_unit）の通りです。</li>\n    </ul>\n    <li>勤怠に反映しない設定の場合</li>\n    <ul>\n      <li>残業開始（start_at）と残業終了（end_at）を指定してください。</li>\n    </ul>\n  </ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'update_approval_requests_overtime_work',
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
            description: '残業申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1OvertimeWorkRequestSchema } } },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1OvertimeWorkResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1ApprovalRequestsOvertimeWorksIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/approval_requests/overtime_works/{id}',
  tags: ['残業申請'],
  summary: '残業申請の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の残業申請情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'destroy_approval_requests_overtime_work',
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
            description: '残業申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1ApprovalRequestsOvertimeWorksIdActionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/approval_requests/overtime_works/{id}/actions',
  tags: ['残業申請'],
  summary: '残業申請の承認操作',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の残業申請情報を承認操作します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n  <li>申請者と承認者が同一ユーザーの場合、feedback(差戻し)をするとレスポンスは以下のようになります。</li>\n  <ul>\n    <li>status: draft</li>\n    <li>approval_flow_logs.action: cancel</li>\n  </ul>\n</ul>',
  operationId: 'action_approval_requests_overtime_work',
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
            description: '残業申請ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiV1ApprovalActionRequestSchema } } },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1OvertimeWorkResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalRequestsOvertimeWorksSettingRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_requests/overtime_works/setting',
  tags: ['残業申請'],
  summary: '残業申請に必要な設定情報の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員・日付の残業申請に必要な設定情報を取得します。</p>\n<ul>\n  <li>取得できる設定の一覧</li>\n  <ul>\n    <li>勤怠カレンダーに申請を反映するかどうかの設定</li>\n    <ul>\n      <li>この設定により、残業申請の作成や更新のリクエスト時に使用するパラメータが変わります。詳細は、残業申請の作成や更新の仕様を参照してください。</li>\n    </ul>\n    <li>所定の出退勤時間</li>\n    <ul>\n      <li>反映あり申請の場合、残業申請の作成や更新のリクエスト時に所定の出退勤時間が必要になります。詳細は、残業申請の作成や更新の仕様を参照してください。</li>\n    </ul>\n    <li>申請で指定できる分の単位</li>\n    <ul>\n      <li>反映あり申請の場合、勤務賃金設定の申請の単位設定によって、残業申請できる分単位が変わります。</li>\n    </ul>\n  </ul>\n</ul>',
  operationId: 'get_approval_requests_overtime_work_setting',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            description: '事業所ID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            example: 1,
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            description: '対象日(YYYY-MM-DD)(例:2018-08-01)\n- 申請の対象日を指定してください。',
            required: true,
            schema: { type: 'string' },
            example: '2018-08-01',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              start_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: '所定出勤時刻', example: '12:00' }),
              end_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: '所定退勤時刻', example: '23:59' }),
              should_reflect_in_work_record: z
                .boolean()
                .openapi({ description: '勤務カレンダーに反映するかどうか', example: true }),
              early_work_mins_unit: z
                .array(z.int().openapi({ example: [0, 15, 30, 45] }))
                .exactOptional()
                .openapi({ description: '早出に指定できる分の単位' }),
              overtime_work_mins_unit: z
                .array(z.int().openapi({ example: [0, 30] }))
                .exactOptional()
                .openapi({ description: '残業に指定できる分の単位' }),
            })
            .openapi({ required: ['should_reflect_in_work_record'] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalFlowRoutesRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_flow_routes',
  tags: ['申請経路'],
  summary: '申請経路一覧の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の申請経路一覧を取得する。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>指定した事業所の従業員に紐づくユーザーのみ実行可能です。</li>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_flow_routes',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
      included_user_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'included_user_id',
            in: 'query',
            description: '経路に含まれるユーザーのユーザーID',
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            required: false,
          },
        }),
      usage: z
        .enum(['AttendanceWorkflow', 'PersonalDataWorkflow'])
        .exactOptional()
        .openapi({
          param: {
            name: 'usage',
            in: 'query',
            description:
              '申請種別（申請経路を使用できる申請種別を示します。例えば、AttendanceWorkflow の場合は、勤怠申請で使用できる申請経路です。）\n- `AttendanceWorkflow` - 勤怠申請\n- `PersonalDataWorkflow` - 身上変更申請',
            schema: { type: 'string', enum: ['AttendanceWorkflow', 'PersonalDataWorkflow'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1ApprovalFlowRoutesIndexResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1ApprovalFlowRoutesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/approval_flow_routes/{id}',
  tags: ['申請経路'],
  summary: '申請経路の取得',
  description:
    '<h2 id="">概要</h2>\n<p>指定した事業所の申請経路を取得する。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>指定した事業所の従業員に紐づくユーザーのみ実行可能です。</li>\n  <li>申請経路、承認者の指定として部門役職データ連携を活用し、以下のいずれかを利用している申請と申請経路はAPI経由で参照は可能ですが、作成と更新、承認ステータスの変更ができません。</li>\n  <ul>\n    <li>役職指定（申請者の所属部門）</li>\n    <li>役職指定（申請時に部門指定）</li>\n    <li>部門および役職指定</li>\n  </ul>\n</ul>',
  operationId: 'get_approval_flow_route',
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
            description: '申請経路ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            description: '事業所ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiV1ApprovalFlowRouteResponseSchema } },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1YearendAdjustmentsYearEmployeesRoute = createRoute({
  method: 'get',
  path: '/api/v1/yearend_adjustments/{year}/employees',
  tags: ['年末調整'],
  summary: '年末調整対象一覧の取得',
  description: '\n指定した年の年末調整対象のリスト返します。',
  operationId: 'get_yearend_adjustment_employees',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
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
            description: '取得レコードの件数 (デフォルト: 50, 最小: 1, 最大: 100)',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
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
          z.int().min(0).max(2147483647),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: '取得レコードのオフセット (デフォルト: 0)',
            schema: { type: 'integer', minimum: 0, maximum: 2147483647 },
            required: false,
          },
        }),
    }),
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '年末調整対象を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeeYearendAdjustmentControllerIndexResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const getApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/yearend_adjustments/{year}/employees/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整の取得',
  description:
    '指定した年、従業員IDの年末調整の詳細内容を返します。<br>\n年末調整対象外の従業員は、本人情報、給与・賞与、前職情報のみが取得できます。',
  operationId: 'get_yearend_adjustment_employee',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
    }),
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '年末調整を取得したい年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ApiV1EmployeeYearendAdjustmentControllerShowResponseSchema },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/employees/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の姓名・住所などを更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_employee',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/payroll_and_bonus/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員給与・賞与の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の給与・賞与を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_payroll_and_bonus',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearDependentsEmployeeIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/dependents/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整家族情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した年末調整の家族情報を更新します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n  <li>idがない場合は新規作成、destroyがtrueの場合は削除になります。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_dependents',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/previous_jobs/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員前職情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の前職情報を更新します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_previous_job',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/yearend_adjustments/{year}/previous_jobs/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員前職情報の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の前職情報を削除します。</p>\n\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'destroy_yearend_adjustment_previous_job',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
    }),
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1YearendAdjustmentsYearInsurancesEmployeeIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/yearend_adjustments/{year}/insurances/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員保険料情報の作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の保険料情報を作成します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'post_yearend_adjustment_insurances',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '作成対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBodySchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/insurances/{employee_id}/{id}',
  tags: ['年末調整'],
  summary: '年末調整従業員保険料情報の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の保険料情報を更新します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n  <li>certification_type="xml"の場合、recipient_first_name、recipient_last_name、recipient_relationshipのみが更新の対象となります。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_insurances',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
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
            description: '保険料ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/yearend_adjustments/{year}/insurances/{employee_id}/{id}',
  tags: ['年末調整'],
  summary: '年末調整従業員保険料情報の削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の保険料情報を削除します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'destroy_yearend_adjustment_insurances',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
    }),
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
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
            description: '保険料ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/housing_loan_deductions/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員住宅ローン控除額の更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の住宅ローン控除額を更新します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_housing_loan_deduction',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
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
                .int32()
                .min(1)
                .max(2147483647)
                .openapi({ description: '更新対象事業所ID（必須）', example: 1 }),
              housing_loan_deduction: z
                .int32()
                .min(0)
                .max(999999999)
                .openapi({ description: '住宅借入金等特別控除（必須）', example: 1 }),
            })
            .openapi({ required: ['company_id', 'housing_loan_deduction'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              housing_loan_deduction: z
                .int32()
                .min(0)
                .max(999999999)
                .exactOptional()
                .openapi({ description: '住宅借入金等特別控除', example: 1 }),
              housing_loans: z
                .array(ApiV1EmployeeYearendAdjustmentHousingLoanSerializerSchema)
                .exactOptional()
                .openapi({ description: '住宅ローン' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const postApiV1YearendAdjustmentsYearHousingLoansEmployeeIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/yearend_adjustments/{year}/housing_loans/{employee_id}',
  tags: ['年末調整'],
  summary: '年末調整従業員住宅ローンの作成',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の住宅ローンを作成します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'post_yearend_adjustment_housing_loan',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '作成対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBodySchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const putApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/yearend_adjustments/{year}/housing_loans/{employee_id}/{id}',
  tags: ['年末調整'],
  summary: '年末調整従業員住宅ローンの更新',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の住宅ローンを更新します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'put_yearend_adjustment_housing_loan',
  request: {
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
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
            description: '住宅ローンID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponseSchema,
        },
      },
    },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})

export const deleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/yearend_adjustments/{year}/housing_loans/{employee_id}/{id}',
  tags: ['年末調整'],
  summary: '年末調整従業員住宅ローンの削除',
  description:
    '<h2 id="">概要</h2>\n<p>指定した従業員の住宅ローンを削除します。</p>\n<h2 id="_1">注意点</h2>\n<ul>\n  <li>本APIは、年末調整が確定済みの従業員には非対応です。</li>\n</ul>',
  operationId: 'destroy_yearend_adjustment_housing_loan',
  request: {
    query: z.object({
      company_id: z
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
            name: 'company_id',
            in: 'query',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
            description: '事業所ID',
          },
        }),
    }),
    params: z.object({
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2000).max(2100),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'path',
            description: '更新対象年',
            required: true,
            schema: { type: 'integer', minimum: 2000, maximum: 2100 },
          },
        }),
      employee_id: z
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
            name: 'employee_id',
            in: 'path',
            description: '従業員ID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
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
            description: '住宅ローンID',
            required: true,
            schema: { type: 'integer', minimum: 1, maximum: 2147483647 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: '', content: { 'application/problem+json': { schema: ErrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: UnauthorizedErrorSchema } } },
    403: {
      description: '',
      content: {
        'application/problem+json': { schema: ForbiddenErrorSchema },
        'application/json': { schema: AccessDeniedErrorSchema },
      },
    },
    404: {
      description: '',
      content: { 'application/problem+json': { schema: NotfoundErrorSchema } },
    },
    500: {
      description: '',
      content: { 'application/problem+json': { schema: InternalServerErrorSchema } },
    },
  },
})
