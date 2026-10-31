import { createRoute, z } from '@hono/zod-openapi'

const IEdmDirectValueAnnotationsManagerSchema = z
  .object({})
  .openapi('IEdmDirectValueAnnotationsManager')

const IEdmSchemaElementSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ readOnly: true }),
    Namespace: z.string().exactOptional().openapi({ readOnly: true }),
    SchemaElementKind: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IEdmSchemaElement')

const IEdmVocabularyAnnotatableSchema = z.object({}).openapi('IEdmVocabularyAnnotatable')

const IEdmTermSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ readOnly: true }),
    Namespace: z.string().exactOptional().openapi({ readOnly: true }),
    SchemaElementKind: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .exactOptional()
      .openapi({ readOnly: true }),
    TermKind: z
      .union([z.literal(0), z.literal(1), z.literal(2)])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IEdmTerm')

const IEdmVocabularyAnnotationSchema = z
  .object({
    Qualifier: z.string().exactOptional().openapi({ readOnly: true }),
    Target: IEdmVocabularyAnnotatableSchema.exactOptional(),
    Term: IEdmTermSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IEdmVocabularyAnnotation')

type IEdmModelType = {
  DirectValueAnnotationsManager?: z.infer<typeof IEdmDirectValueAnnotationsManagerSchema>
  ReferencedModels?: IEdmModelType[]
  SchemaElements?: z.infer<typeof IEdmSchemaElementSchema>[]
  VocabularyAnnotations?: z.infer<typeof IEdmVocabularyAnnotationSchema>[]
}

const IEdmTypeSchema = z
  .object({
    TypeKind: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
      ])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IEdmType')

const IEdmTypeReferenceSchema = z
  .object({
    Definition: IEdmTypeSchema.exactOptional(),
    IsNullable: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('IEdmTypeReference')

const SingleValueNodeSchema = z
  .object({
    Kind: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
        z.literal(9),
        z.literal(10),
        z.literal(11),
        z.literal(12),
        z.literal(13),
        z.literal(14),
        z.literal(15),
        z.literal(16),
        z.literal(17),
        z.literal(18),
        z.literal(19),
        z.literal(20),
      ])
      .exactOptional()
      .openapi({ readOnly: true }),
    TypeReference: IEdmTypeReferenceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SingleValueNode')

const RangeVariableSchema = z
  .object({
    Kind: z.int32().exactOptional().openapi({ readOnly: true }),
    Name: z.string().exactOptional().openapi({ readOnly: true }),
    TypeReference: IEdmTypeReferenceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RangeVariable')

type OrderByClauseType = {
  Direction?: 0 | 1
  Expression?: z.infer<typeof SingleValueNodeSchema>
  ItemType?: z.infer<typeof IEdmTypeReferenceSchema>
  RangeVariable?: z.infer<typeof RangeVariableSchema>
  ThenBy?: OrderByClauseType
}

const AcEntryDtoSchema = z
  .object({
    accountCode: z.string().exactOptional(),
    analysisCategoryId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcEntryDto')

const AccountDtoSchema = z
  .object({
    accountGroup: z.string().exactOptional(),
    accountType: z.string().exactOptional(),
    code: z.string().exactOptional(),
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AccountDto')

const AccountTranDtoSchema = z
  .object({
    bookTranId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    bookTransactionReference: z.string().exactOptional(),
    bookTypeDesc: z.string().exactOptional(),
    credit: z.float64().exactOptional(),
    debit: z.float64().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountTranDto')

const AcudfValueDtoSchema = z
  .object({
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userDefinedFieldId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AcudfValueDto')

const AnalysisCategoryDtoSchema = z
  .object({
    accountCode: z.string().exactOptional(),
    accountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    categoryTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    orderIndex: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalysisCategoryDto')

const BankAccountDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    accountName: z.string().exactOptional(),
    accountNumber: z.string().exactOptional(),
    address: z.array(z.string()).exactOptional(),
    bankFeedSource: z.int32().exactOptional(),
    businessIdentifierCodes: z.string().exactOptional(),
    categoryId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    creditorScheme: z.string().exactOptional(),
    details: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    internationalBankAccountNumber: z.string().exactOptional(),
    isDefaultBank: z.boolean().exactOptional(),
    lastChq: z.string().exactOptional(),
    nominalAcCode: z.string().exactOptional(),
    oBalance: z.float64().exactOptional(),
    sortCode: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
  })
  .openapi({
    example: {
      acCode: 'B1',
      accountName: '',
      accountNumber: '83700896',
      address: ['Address Line 1', 'Address Line 2'],
      bankFeedSource: 0,
      businessIdentifierCodes: 'AIBKIE2D',
      categoryId: 41704,
      creditorScheme: 'XXXX',
      details: 'Bank_1',
      id: 1,
      internationalBankAccountNumber: 'IE67 BOFI 9027 0925 7277 59',
      isDefaultBank: false,
      lastChq: '000005',
      nominalAcCode: 'B101',
      oBalance: 0,
      sortCode: '900284',
      timestamp: 'QUFBQUFBQUFDcXc9',
    },
    required: [],
  })
  .openapi('BankAccountDto')

const BankAccountQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    accountName: z.string().exactOptional(),
    accountNumber: z.string().exactOptional(),
    address: z.array(z.string()).exactOptional(),
    bankFeedSource: z.int32().exactOptional(),
    businessIdentifierCodes: z.string().exactOptional(),
    categoryId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    creditorScheme: z.string().exactOptional(),
    details: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    internationalBankAccountNumber: z.string().exactOptional(),
    isDefaultBank: z.boolean().exactOptional(),
    lastChq: z.string().exactOptional(),
    nominalAcCode: z.string().exactOptional(),
    sortCode: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BankAccountQueryDto')

const BatchItemBankAccountDtoSchema = z
  .object({
    item: BankAccountDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acCode: 'B1',
        accountName: '',
        accountNumber: '83700896',
        address: ['Address Line 1', 'Address Line 2'],
        bankFeedSource: 0,
        businessIdentifierCodes: 'AIBKIE2D',
        categoryId: 41704,
        creditorScheme: 'XXXX',
        details: 'Bank_111111111111111111',
        id: 1,
        internationalBankAccountNumber: 'IE67 BOFI 9027 0925 7277 59',
        isDefaultBank: false,
        lastChq: '000005',
        nominalAcCode: 'B101',
        oBalance: 0,
        sortCode: '900284',
        timestamp: 'QUFBQUFBQUFDcXc9',
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemBankAccountDto')

const CashPaymentDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bankAccountCode: z.string().exactOptional(),
    bankAccountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    detailCollection: z.array(z.string()).exactOptional(),
    discount: z.float64().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ledger: z.float64().exactOptional(),
    lodgement: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    plaidTransactionId: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    supplierId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
  })
  .openapi({
    example: {
      acEntries: [
        {
          accountCode: 'CP01',
          analysisCategoryId: 10433,
          description: 'Cash Pay 01',
          id: 62741,
          value: 200,
        },
      ],
      bankAccountCode: 'BAK2',
      bankAccountId: 11111,
      bookTranTypeId: 2,
      customFields: [],
      detailCollection: ['test'],
      discount: 0,
      entryDate: '2017-07-01T00:00:00',
      id: 12345,
      ledger: 100,
      lodgement: 0,
      note: 'Supplier 1',
      procDate: '2017-07-26T00:00:00',
      supplierId: 70599,
      timestamp: '+/0HcBIe2wg=',
      total: 100,
    },
    required: [],
  })
  .openapi('CashPaymentDto')

const BatchItemCashPaymentDtoSchema = z
  .object({
    item: CashPaymentDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acEntries: [
          {
            accountCode: 'CP01',
            analysisCategoryId: 10433,
            description: 'Cash Pay 01',
            id: 62741,
            value: 200,
          },
        ],
        bankAccountCode: 'BAK2',
        bankAccountId: 11111,
        bookTranTypeId: 2,
        customFields: [],
        detailCollection: ['test'],
        discount: 0,
        entryDate: '2017-07-01T00:00:00',
        id: 12345,
        ledger: 100,
        lodgement: 0,
        note: 'Supplier 1',
        procDate: '2017-07-26T00:00:00',
        supplierId: 70599,
        timestamp: 'XmAKcBIe2wg=',
        total: 100,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemCashPaymentDto')

const VatEntryDtoSchema = z
  .object({
    amount: z.float64().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    percentage: z.float64().exactOptional(),
    vatRateId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('VatEntryDto')

const CashReceiptDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    detailCollection: z.array(z.string()).exactOptional(),
    discount: z.float64().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ledger: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    plaidTransactionId: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    unallocated: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      acEntries: [
        { accountCode: '000', analysisCategoryId: 1, description: 'AnCat1', id: 1, value: 30 },
      ],
      bookTranTypeId: 1,
      customFields: [{ description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' }],
      detailCollection: ['det_1', 'det_2', 'det_3'],
      discount: 0,
      entryDate: '2011-01-01T00:00:00',
      id: 1,
      ledger: 0,
      note: 'note1',
      procDate: '2011-01-05T00:00:00',
      timestamp: '0OkTcBIe2wg=',
      total: 50,
      unallocated: 0,
      vatEntries: [{ amount: 50, id: 1, percentage: 15, vatRateId: 1 }],
    },
    required: [],
  })
  .openapi('CashReceiptDto')

const BatchItemCashReceiptDtoSchema = z
  .object({
    item: CashReceiptDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acEntries: [
          { accountCode: '000', analysisCategoryId: 1, description: 'AnCat1', id: 1, value: 30 },
        ],
        bookTranTypeId: 1,
        customFields: [{ description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' }],
        detailCollection: ['det_1', 'det_2', 'det_3'],
        discount: 0,
        entryDate: '2011-01-01T00:00:00',
        id: 1,
        ledger: 0,
        note: 'note1',
        procDate: '2011-01-05T00:00:00',
        timestamp: 'I0wWcBIe2wg=',
        total: 50,
        unallocated: 0,
        vatEntries: [{ amount: 50, id: 1, percentage: 15, vatRateId: 1 }],
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemCashReceiptDto')

const EFTBankDtoSchema = z
  .object({
    branch: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    sortCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EFTBankDto')

const OwnerOpeningBalanceInPeriodsDtoSchema = z
  .object({
    currentMonth: z.float64().exactOptional(),
    oneMonthOld: z.float64().exactOptional(),
    threeMonthsOld: z.float64().exactOptional(),
    twoMonthsOld: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OwnerOpeningBalanceInPeriodsDto')

const OwnerOpeningBalanceVatEntryDtoSchema = z
  .object({
    amount: z.float64().exactOptional(),
    vatRateId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('OwnerOpeningBalanceVatEntryDto')

const OwnerOpeningBalanceDtoSchema = z
  .object({
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isChanged: z.boolean().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatEntries: z.array(OwnerOpeningBalanceVatEntryDtoSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OwnerOpeningBalanceDto')

const CustomerDtoSchema = z
  .object({
    accountName: z.string().exactOptional(),
    accountNumber: z.string().exactOptional(),
    additionalEmails: z.array(z.string()).exactOptional(),
    address: z.array(z.string()).exactOptional(),
    authCode: z.string().exactOptional(),
    bank: EFTBankDtoSchema.exactOptional(),
    businessIdentifierCode: z.string().exactOptional(),
    code: z.string().exactOptional(),
    contact: z.string().exactOptional(),
    delivery: z.array(z.string()).exactOptional(),
    eFTReference: z.string().exactOptional(),
    email: z.string().exactOptional(),
    fax: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    internationalBankAccountNumber: z.string().exactOptional(),
    ledgerBalance: z.float64().exactOptional(),
    mobile: z.string().exactOptional(),
    name: z.string().exactOptional(),
    openingBalance: OwnerOpeningBalanceInPeriodsDtoSchema.exactOptional(),
    openingBalances: z.array(OwnerOpeningBalanceDtoSchema).exactOptional(),
    ourCode: z.string().exactOptional(),
    ownerTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    phone: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatReg: z.string().exactOptional(),
    vatType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      accountName: '',
      accountNumber: '12345678',
      additionalEmails: ['email2@example.com', 'email3@example.com'],
      address: ['Address Line 1', 'Address Line 2'],
      authCode: 'VATEXCODE222',
      bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
      businessIdentifierCode: 'AIBI02',
      code: '12345678',
      contact: 'John Smith',
      delivery: ['Delivery 1', 'Delivery 2'],
      eFTReference: 'Reference',
      email: 'customer@email.com',
      fax: '1234567890',
      id: 10589,
      internationalBankAccountNumber: '1233432532',
      mobile: '1234567890',
      name: 'Customer Name 1',
      ourCode: 'OURCODE111',
      ownerTypeId: 1,
      phone: '1234596970',
      timestamp: 'GF8pcBIe2wg=',
      vatAnalysisTypeId: 1,
      vatReg: 'VATCODE0001',
      vatType: 2,
    },
    required: [],
  })
  .openapi('CustomerDto')

const BatchItemCustomerDtoSchema = z
  .object({
    item: CustomerDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        accountName: '',
        accountNumber: '12345678',
        additionalEmails: ['email2@example.com', 'email3@example.com'],
        address: ['Address Line 1', 'Address Line 2'],
        authCode: 'VATEXCODE222',
        bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
        businessIdentifierCode: 'AIBI02',
        code: '12345678',
        contact: 'John Smith',
        delivery: ['Delivery 1', 'Delivery 2'],
        eFTReference: 'Reference',
        email: 'customer@email.com',
        fax: '1234567890',
        id: 10589,
        internationalBankAccountNumber: '1233432532',
        mobile: '1234567890',
        name: 'Customer Name 1',
        ourCode: 'OURCODE111',
        ownerTypeId: 1,
        phone: '1234596970',
        timestamp: 'b8ErcBIe2wg=',
        vatAnalysisTypeId: 1,
        vatReg: 'VATCODE0001',
        vatType: 2,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemCustomerDto')

const PaymentDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bankAccountCode: z.string().exactOptional(),
    bankAccountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    detailCollection: z.array(z.string()).exactOptional(),
    discount: z.float64().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    note: z.string().exactOptional(),
    plaidTransactionId: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    supplierId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    transferBankCode: z.string().exactOptional(),
    transferBankId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    unallocated: z.float64().exactOptional(),
  })
  .openapi({
    example: {
      acCode: 'C1',
      acEntries: [],
      bankAccountCode: 'B1',
      bankAccountId: 1,
      bookTranTypeId: 3,
      customFields: [
        { description: 'F1', id: 1, userDefinedFieldId: 1, value: 'f1' },
        { description: 'F2', id: 2, userDefinedFieldId: 2, value: 'f2' },
      ],
      detailCollection: ['d1', 'd2'],
      discount: 2,
      entryDate: '2011-07-01T00:00:00',
      id: 2,
      note: '123',
      procDate: '2011-08-08T00:00:00',
      reference: '000002',
      supplierId: 2,
      timestamp: 'CcBKcBIe2wg=',
      total: 155,
      transferBankCode: '',
      transferBankId: 1,
      unallocated: 155,
    },
    required: [],
  })
  .openapi('PaymentDto')

const BatchItemPaymentDtoSchema = z
  .object({
    item: PaymentDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acCode: 'C1',
        acEntries: [],
        bankAccountCode: 'B1',
        bankAccountId: 1,
        bookTranTypeId: 3,
        customFields: [
          { description: 'F1', id: 1, userDefinedFieldId: 1, value: 'f1' },
          { description: 'F2', id: 2, userDefinedFieldId: 2, value: 'f2' },
        ],
        detailCollection: ['d1', 'd2'],
        discount: 2,
        entryDate: '2011-07-01T00:00:00',
        id: 2,
        note: '123',
        procDate: '2011-08-08T00:00:00',
        reference: '000002',
        supplierId: 2,
        timestamp: 'CcBKcBIe2wg=',
        total: 155,
        transferBankCode: '',
        transferBankId: 1,
        unallocated: 155,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemPaymentDto')

const ProductDtoSchema = z
  .object({
    details: z.array(z.string()).exactOptional(),
    grossUnitPrice: z.boolean().exactOptional(),
    hasDefaultVatRate: z.boolean().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    productTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    stockCode: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    unitPrice: z.float64().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatRateId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      details: ['det1', 'det2', 'det3'],
      grossUnitPrice: false,
      hasDefaultVatRate: false,
      id: 9,
      productTypeId: 0,
      stockCode: 'PRO1',
      timestamp: '6IRPcBIe2wg=',
      unitPrice: 100,
      vatAnalysisTypeId: 1,
    },
    required: [],
  })
  .openapi('ProductDto')

const BatchItemProductDtoSchema = z
  .object({
    item: ProductDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        details: ['det1', 'det2', 'det3'],
        grossUnitPrice: false,
        hasDefaultVatRate: false,
        id: 9,
        productTypeId: 0,
        stockCode: 'PRO1',
        timestamp: 'TudRcBIe2wg=',
        unitPrice: 100,
        vatAnalysisTypeId: 1,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemProductDto')

const PurchaseDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    detailCollection: z.array(z.string()).exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isDiscrepancyAccepted: z.boolean().exactOptional(),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    postponedAccounting: z.boolean().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    supplierId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unallocated: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      acCode: 'SUP3',
      acEntries: [
        {
          accountCode: 'PU03',
          analysisCategoryId: 10441,
          description: 'PUR 3',
          id: 12518,
          value: 90.91,
        },
      ],
      bookTranTypeId: 4,
      customFields: [],
      detailCollection: [],
      entryDate: '2016-06-01T00:00:00',
      id: 13380,
      isDiscrepancyAccepted: false,
      netGoods: 0,
      netServices: 0,
      note: 'Supplier 3',
      postponedAccounting: false,
      procDate: '2016-06-24T00:00:00',
      reference: '000001',
      supplierId: 10173,
      timestamp: 'eDVgcBIe2wg=',
      total: 100,
      totalNet: 90.91,
      totalVAT: 9.09,
      unallocated: 100,
      unpaid: 100,
      vatEntries: [{ amount: 90.91, id: 12267, percentage: 10, vatRateId: 10317 }],
      vatTypeId: 1,
    },
    required: [],
  })
  .openapi('PurchaseDto')

const BatchItemPurchaseDtoSchema = z
  .object({
    item: PurchaseDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acCode: 'SUP3',
        acEntries: [
          {
            accountCode: 'PU03',
            analysisCategoryId: 10441,
            description: 'PUR 3',
            id: 12518,
            value: 90.91,
          },
        ],
        bookTranTypeId: 4,
        customFields: [],
        detailCollection: [],
        entryDate: '2016-06-01T00:00:00',
        id: 13380,
        netGoods: 0,
        netServices: 0,
        note: 'Supplier 3',
        procDate: '2016-06-24T00:00:00',
        reference: '000001',
        supplierId: 10173,
        timestamp: 'eDVgcBIe2wg=',
        total: 100,
        totalNet: 90.91,
        totalVAT: 9.09,
        unallocated: 100,
        unpaid: 100,
        vatEntries: [{ amount: 90.91, id: 12267, percentage: 10, vatRateId: 10317 }],
        vatTypeId: 1,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemPurchaseDto')

const QuoteAcEntriesDtoSchema = z
  .object({
    accountCode: z.string().exactOptional(),
    analysisCategoryId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    companyId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    quoteProductTranId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuoteAcEntriesDto')

const QuoteProductTransDtoSchema = z
  .object({
    acEntries: z.array(QuoteAcEntriesDtoSchema).exactOptional(),
    amount: z.float64().exactOptional(),
    companyId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    percentage: z.float64().exactOptional(),
    productCode: z.string().exactOptional(),
    productId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    quantity: z.float64().exactOptional(),
    tranNotes: z.array(z.string()).exactOptional(),
    unitPrice: z.float64().exactOptional(),
    vatAmount: z.float64().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatRateId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('QuoteProductTransDto')

const QuoteDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    closedDate: z.iso.datetime({ offset: true }).exactOptional(),
    comments: z.string().exactOptional(),
    companyId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerOwnerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customerOwnerName: z.string().exactOptional(),
    ddNumber: z.string().exactOptional(),
    deliveryList: z.string().exactOptional(),
    deliveryTo: z.array(z.string()).exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    layoutType: z.int32().exactOptional(),
    note: z.string().exactOptional(),
    poNumber: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    productTrans: z.array(QuoteProductTransDtoSchema).exactOptional(),
    reference: z.string().exactOptional(),
    saleInvoiceId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    saleRepCode: z.string().exactOptional(),
    saleRepId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timeStamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVat: z.float64().exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      comments: 'Sample',
      companyId: 40449,
      customerOwnerId: 70583,
      customerOwnerName: 'Customer 1',
      ddNumber: 'Sample',
      entryDate: '2017-01-01T00:00:00',
      id: 1,
      layoutType: 1,
      poNumber: 'Sample',
      procDate: '2017-01-05T00:00:00',
      productTrans: [
        {
          acEntries: [
            {
              accountCode: 'sample',
              analysisCategoryId: 40888,
              companyId: 40449,
              id: 1,
              quoteProductTranId: 40277,
              value: 100,
            },
          ],
          amount: 10,
          companyId: 40449,
          id: 40277,
          percentage: 0,
          productCode: 'PRO1',
          productId: 20107,
          quantity: 1,
          tranNotes: ['Product'],
          unitPrice: 100,
          vatAmount: 10,
          vatAnalysisTypeId: 0,
          vatRateId: 30657,
        },
      ],
      saleInvoiceId: 30044,
      saleRepId: 75783,
      timeStamp: '4OVwcBIe2wg=',
      total: 110,
      totalNet: 100,
      totalVat: 10,
      vatTypeId: 1,
    },
    required: [],
  })
  .openapi('QuoteDto')

const BatchItemQuoteDtoSchema = z
  .object({
    item: QuoteDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        comments: 'Sample',
        companyId: 40449,
        customerOwnerId: 70583,
        customerOwnerName: 'Customer 1',
        ddNumber: 'Sample',
        entryDate: '2017-01-01T00:00:00',
        id: 1,
        layoutType: 1,
        poNumber: 'Sample',
        procDate: '2017-01-05T00:00:00',
        productTrans: [
          {
            acEntries: [
              {
                accountCode: 'sample',
                analysisCategoryId: 40888,
                companyId: 40449,
                id: 1,
                quoteProductTranId: 40277,
                value: 100,
              },
            ],
            amount: 10,
            companyId: 40449,
            id: 40277,
            percentage: 0,
            productCode: 'PRO1',
            productId: 20107,
            quantity: 1,
            tranNotes: ['Product'],
            unitPrice: 100,
            vatAmount: 10,
            vatAnalysisTypeId: 0,
            vatRateId: 30657,
          },
        ],
        reference: '000032',
        saleInvoiceId: 30044,
        saleRepId: 75783,
        timeStamp: 'koNucBIe2wg=',
        total: 110,
        totalNet: 100,
        totalVat: 10,
        vatTypeId: 1,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemQuoteDto')

const SaleRepsDtoSchema = z
  .object({
    code: z.string().exactOptional(),
    companyId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    email: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    timeStamp: z.string().exactOptional(),
  })
  .openapi({
    example: {
      code: 'SR0001',
      companyId: 123456,
      email: 'example@gmail.com',
      id: 1,
      name: 'Sales Rep 1',
      phone: '1234567890',
      timeStamp: '6RCQcBIe2wg=',
    },
    required: [],
  })
  .openapi('SaleRepsDto')

const BatchItemSaleRepsDtoSchema = z
  .object({
    item: SaleRepsDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        code: 'SR0001',
        companyId: 123456,
        email: 'example@gmail.com',
        id: 1,
        name: 'Sales Rep 1',
        phone: '1234567890',
        timeStamp: '6RCQcBIe2wg=',
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemSaleRepsDto')

const SalesEntryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    detailCollection: z.array(z.string()).exactOptional(),
    details: z.string().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      acCode: 'code',
      acEntries: [
        {
          accountCode: 'SA01',
          analysisCategoryId: 40888,
          description: 'SAL 1',
          id: 73450,
          value: 636.36,
        },
      ],
      bookTranTypeId: 5,
      customFields: [
        { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
        { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
      ],
      customerId: 70583,
      detailCollection: [],
      details: 'detail_1',
      entryDate: '2011-01-01T00:00:00',
      id: 1,
      netGoods: 0,
      netServices: 0,
      note: 'Customer 1',
      procDate: '2011-01-01T00:00:00',
      reference: '000001',
      timestamp: 'wumIcBIe2wg=',
      total: 700,
      totalNet: 636.36,
      totalVAT: 63.64,
      unpaid: 0,
      vatEntries: [{ amount: 636.36, id: 63649, percentage: 10, vatRateId: 30657 }],
      vatTypeId: 1,
    },
    required: [],
  })
  .openapi('SalesEntryDto')

const BatchItemSalesEntryDtoSchema = z
  .object({
    item: SalesEntryDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acCode: 'code',
        acEntries: [
          {
            accountCode: 'SA01',
            analysisCategoryId: 40888,
            description: 'SAL 1',
            id: 73450,
            value: 636.36,
          },
        ],
        bookTranTypeId: 5,
        customFields: [
          { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
          { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
        ],
        customerId: 70583,
        detailCollection: [],
        details: 'detail_1',
        entryDate: '2011-01-01T00:00:00',
        id: 1,
        netGoods: 0,
        netServices: 0,
        note: 'Customer 1',
        procDate: '2011-01-01T00:00:00',
        reference: '000001',
        timestamp: 'XUyLcBIe2wg=',
        total: 700,
        totalNet: 636.36,
        totalVAT: 63.64,
        unpaid: 0,
        vatEntries: [{ amount: 636.36, id: 63649, percentage: 10, vatRateId: 30657 }],
        vatTypeId: 1,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemSalesEntryDto')

const ProductTranDtoSchema = z
  .object({
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    amount: z.float64().exactOptional(),
    amountNet: z.float64(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    percentage: z.float64().exactOptional(),
    productCode: z.string().exactOptional(),
    productId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    quantity: z.float64().exactOptional(),
    tranNotes: z.array(z.string()).exactOptional(),
    unitPrice: z.float64().exactOptional(),
    vat: z.float64().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatRateId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['amountNet'] })
  .openapi('ProductTranDto')

const SalesInvoiceCreditNoteDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    deliveryTo: z.array(z.string()).exactOptional(),
    details: z.string().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    loType: z.string().exactOptional(),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    ourReference: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    productTrans: z.array(ProductTranDtoSchema).exactOptional(),
    quoteId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    reference: z.string().exactOptional(),
    saleRepCode: z.string().exactOptional(),
    saleRepId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    yourReference: z.string().exactOptional(),
  })
  .openapi({
    example: {
      acCode: 'CUS3',
      bookTranTypeId: 7,
      customFields: [
        { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
        { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
      ],
      customerId: 70585,
      deliveryTo: ['dt_1', 'dt_2'],
      details: 'detail_1',
      entryDate: '2016-06-01T00:00:00',
      id: 75813,
      loType: '1',
      note: 'Customer 3',
      ourReference: 'ddNumber_1',
      procDate: '2016-06-24T00:00:00',
      productTrans: [
        {
          acEntries: [
            {
              accountCode: 'SA02',
              analysisCategoryId: 40889,
              description: 'AnCat1',
              id: 73455,
              value: -200,
            },
          ],
          amount: -220,
          amountNet: -200,
          id: 51820,
          percentage: 10,
          productCode: 'PRO2',
          productId: 20108,
          quantity: -1,
          tranNotes: ['tn_1', 'tn_2'],
          unitPrice: 200,
          vat: -20,
          vatAnalysisTypeId: 0,
          vatRateId: 30657,
        },
      ],
      saleRepId: 33110,
      timestamp: 'oq6NcBIe2wg=',
      total: -220,
      totalNet: -200,
      totalVAT: -20,
      unpaid: -220,
      vatTypeId: 1,
      yourReference: 'poNumber_1',
    },
    required: [],
  })
  .openapi('SalesInvoiceCreditNoteDto')

const BatchItemSalesInvoiceCreditNoteDtoSchema = z
  .object({
    item: SalesInvoiceCreditNoteDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        acCode: 'CUS3',
        bookTranTypeId: 7,
        customFields: [
          { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
          { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
        ],
        customerId: 70585,
        deliveryTo: ['dt_1', 'dt_2'],
        details: 'detail_1',
        entryDate: '2016-06-01T00:00:00',
        id: 75813,
        loType: '1',
        note: 'Customer 3',
        ourReference: 'ddNumber_1',
        procDate: '2016-06-24T00:00:00',
        productTrans: [
          {
            acEntries: [
              {
                accountCode: 'SA02',
                analysisCategoryId: 40889,
                description: 'AnCat1',
                id: 73455,
                value: -200,
              },
            ],
            amount: -220,
            amountNet: -200,
            id: 51820,
            percentage: 10,
            productCode: 'PRO2',
            productId: 20108,
            quantity: -1,
            tranNotes: ['tn_1', 'tn_2'],
            unitPrice: 200,
            vat: -20,
            vatAnalysisTypeId: 0,
            vatRateId: 30657,
          },
        ],
        reference: '000001',
        saleRepId: 33110,
        timestamp: 'oq6NcBIe2wg=',
        total: -220,
        totalNet: -200,
        totalVAT: -20,
        unpaid: -220,
        vatTypeId: 1,
        yourReference: 'poNumber_1',
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemSalesInvoiceCreditNoteDto')

const SupplierDtoSchema = z
  .object({
    accountName: z.string().exactOptional(),
    accountNumber: z.string().exactOptional(),
    additionalEmails: z.array(z.string()).exactOptional(),
    address: z.array(z.string()).exactOptional(),
    authCode: z.string().exactOptional(),
    bank: EFTBankDtoSchema.exactOptional(),
    businessIdentifierCode: z.string().exactOptional(),
    code: z.string().exactOptional(),
    contact: z.string().exactOptional(),
    eFTReference: z.string().exactOptional(),
    email: z.string().exactOptional(),
    fax: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    internationalBankAccountNumber: z.string().exactOptional(),
    ledgerBalance: z.float64().exactOptional(),
    mobile: z.string().exactOptional(),
    name: z.string().exactOptional(),
    openingBalance: OwnerOpeningBalanceInPeriodsDtoSchema.exactOptional(),
    openingBalances: z.array(OwnerOpeningBalanceDtoSchema).exactOptional(),
    ourCode: z.string().exactOptional(),
    ownerTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    phone: z.string().exactOptional(),
    postponedAccounting: z.boolean().exactOptional(),
    timestamp: z.string().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatReg: z.string().exactOptional(),
    vatType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    example: {
      accountName: 'Supplier Bank Acc',
      accountNumber: '12345678',
      additionalEmails: ['email2@example.com', 'email3@example.com'],
      address: ['Address Line 1', 'Address Line 2'],
      authCode: 'VATEXCODE222',
      bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
      code: 'S001',
      contact: 'John Smith',
      eFTReference: 'Reference',
      email: 'supplier@email.com',
      fax: '1234567890',
      id: 10589,
      mobile: '1234567890',
      name: 'Supplier Name',
      ourCode: 'OURCODE111',
      ownerTypeId: 3,
      phone: '1234596970',
      postponedAccounting: false,
      timestamp: '4jeXcBIe2wg=',
      vatAnalysisTypeId: 1,
      vatReg: 'VATCODE0001',
      vatType: 2,
    },
    required: [],
  })
  .openapi('SupplierDto')

const BatchItemSupplierDtoSchema = z
  .object({
    item: SupplierDtoSchema.exactOptional(),
    opCode: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({ description: '1 - Create\r\n2 - Update\r\n3 - Delete' }),
  })
  .openapi({
    example: {
      item: {
        accountName: 'Supplier Bank Acc',
        accountNumber: '12345678',
        additionalEmails: ['email2@example.com', 'email3@example.com'],
        address: ['Address Line 1', 'Address Line 2'],
        authCode: 'VATEXCODE222',
        bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
        code: 'S001',
        contact: 'John Smith',
        eFTReference: 'Reference',
        email: 'supplier@email.com',
        fax: '1234567890',
        id: 10589,
        mobile: '1234567890',
        name: 'Supplier Name',
        ourCode: 'OURCODE111',
        ownerTypeId: 3,
        phone: '1234596970',
        postponedAccounting: false,
        timestamp: '4jeXcBIe2wg=',
        vatAnalysisTypeId: 1,
        vatReg: 'VATCODE0001',
        vatType: 2,
      },
      opCode: 1,
    },
    required: [],
  })
  .openapi('BatchItemSupplierDto')

const BookTranTypeDtoSchema = z
  .object({
    code: z.string().exactOptional(),
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('BookTranTypeDto')

const CashPaymentQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bankAccountCode: z.string().exactOptional(),
    bankAccountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    detailCollection: z.array(z.string()).exactOptional(),
    discount: z.float64().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ledger: z.float64().exactOptional(),
    lodgement: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    plaidTransactionId: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    supplierId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    unallocated: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CashPaymentQueryDto')

const CashReceiptQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    detailCollection: z.array(z.string()).exactOptional(),
    discount: z.float64().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ledger: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    plaidTransactionId: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    unallocated: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('CashReceiptQueryDto')

const CategoryTypeDtoSchema = z
  .object({
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('CategoryTypeDto')

const CompanyFinancialYearViewModelSchema = z
  .object({
    firstMonth: z.int32().exactOptional(),
    startMonth: z.int32().exactOptional(),
    startYear: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyFinancialYearViewModel')

const CompanyGeneralDetaisViewModelSchema = z
  .object({
    companyAddresses: z.array(z.string()).exactOptional(),
    companyName: z.string().exactOptional(),
    currencyCode: z.string().exactOptional(),
    currencyDescription: z.string().exactOptional(),
    currencyId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    currentcySymbol: z.string().exactOptional(),
    emails: z.array(z.string()).exactOptional(),
    faxes: z.array(z.string()).exactOptional(),
    phones: z.array(z.string()).exactOptional(),
    regionDescription: z.string().exactOptional(),
    regionId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatReg: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyGeneralDetaisViewModel')

const CompanyOptionDtoSchema = z
  .object({
    allowEntryOfGrossPriceInInvoicing: z.boolean().exactOptional(),
    creditInputForReverseChargeVAT: z.boolean().exactOptional(),
    creditNoteJournalAgeingName: z.string().exactOptional(),
    creditNoteJournalAgeingValue: z.int32().exactOptional(),
    discrepancyAllowed: z.float64().exactOptional(),
    enableVOCRReporting: z.boolean().exactOptional(),
    marginVatScheme: z.boolean().exactOptional(),
    printOSItemsOnly: z.boolean().exactOptional(),
    purchasesVatAnalysisType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    salesVatAnalysisType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    useAllocations: z.boolean().exactOptional(),
    useNominal: z.boolean().exactOptional(),
    useNominalCode: z.boolean().exactOptional(),
    vocrSettingValue: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyOptionDto')

const CompanyOptionViewModelSchema = z
  .object({
    allowEntryOfGrossPriceInInvoicing: z.boolean().exactOptional(),
    creditInputForReverseChargeVAT: z.boolean().exactOptional(),
    creditNoteJournalAgeingName: z.string().exactOptional(),
    creditNoteJournalAgeingValue: z.int32().exactOptional(),
    discrepancyAllowed: z.float64().exactOptional(),
    enableVOCRReporting: z.boolean().exactOptional(),
    marginVatScheme: z.boolean().exactOptional(),
    printOSItemsOnly: z.boolean().exactOptional(),
    purchasesVatAnalysisType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    salesVatAnalysisType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    useAllocations: z.boolean().exactOptional(),
    useNominal: z.boolean().exactOptional(),
    useNominalCode: z.boolean().exactOptional(),
    vocrSettingValue: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyOptionViewModel')

const CompanyReferenceSettingViewModelSchema = z
  .object({
    creditorsJournal: z.boolean().exactOptional(),
    debtorsJournal: z.boolean().exactOptional(),
    purchases: z.boolean().exactOptional(),
    sales: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyReferenceSettingViewModel')

const CompanySettingDtoSchema = z
  .object({
    enableVOCRReporting: z.boolean().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    useAllocations: z.boolean().exactOptional(),
    value: z.string().exactOptional(),
    vocrSettingValue: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanySettingDto')

const CompanySetupConfigViewModelSchema = z
  .object({
    financialYear: CompanyFinancialYearViewModelSchema.exactOptional(),
    generalDetails: CompanyGeneralDetaisViewModelSchema.exactOptional(),
    options: CompanyOptionViewModelSchema.exactOptional(),
    referenceSettings: CompanyReferenceSettingViewModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanySetupConfigViewModel')

const CustomerQueryDtoSchema = z
  .object({
    accountName: z.string().exactOptional(),
    accountNumber: z.string().exactOptional(),
    additionalEmails: z.array(z.string()).exactOptional(),
    address: z.array(z.string()).exactOptional(),
    authCode: z.string().exactOptional(),
    bank: EFTBankDtoSchema.exactOptional(),
    businessIdentifierCode: z.string().exactOptional(),
    code: z.string().exactOptional(),
    contact: z.string().exactOptional(),
    delivery: z.array(z.string()).exactOptional(),
    eFTReference: z.string().exactOptional(),
    email: z.string().exactOptional(),
    fax: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    internationalBankAccountNumber: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    name: z.string().exactOptional(),
    ourCode: z.string().exactOptional(),
    ownerTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    phone: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatReg: z.string().exactOptional(),
    vatType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerQueryDto')

const EmailQuoteDtoSchema = z
  .object({
    bccAddresses: z.array(z.string()).exactOptional(),
    messageBody: z.string().exactOptional(),
    quoteId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    toAddress: z.string().exactOptional(),
  })
  .openapi({
    example: {
      bccAddresses: ['bcc1@email.com', 'bcc2@email.com', 'bcc3@email.com'],
      messageBody: 'Email message',
      quoteId: 1,
      toAddress: 'to@email.com',
    },
    required: [],
  })
  .openapi('EmailQuoteDto')

const EmailStatementDtoSchema = z
  .object({
    bccAddresses: z.array(z.string()).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    fromPeriod: z.iso.datetime({ offset: true }).exactOptional(),
    messageBody: z.string().exactOptional(),
    minimumBalance: z.float64().exactOptional(),
    toAddress: z.string().exactOptional(),
    toPeriod: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    example: {
      bccAddresses: ['bcc1@email.com', 'bcc2@email.com', 'bcc3@email.com'],
      customerId: 1,
      fromPeriod: '2016-04-07T00:00:00',
      messageBody: 'Email message',
      minimumBalance: 4,
      toAddress: 'to@email.com',
      toPeriod: '2016-06-07T00:00:00',
    },
    required: [],
  })
  .openapi('EmailStatementDto')

const FilterClauseSchema = z
  .object({
    Expression: SingleValueNodeSchema.exactOptional(),
    ItemType: IEdmTypeReferenceSchema.exactOptional(),
    RangeVariable: RangeVariableSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterClause')

const IEdmModelSchema: z.ZodType<IEdmModelType> = z
  .lazy(() =>
    z
      .object({
        DirectValueAnnotationsManager: IEdmDirectValueAnnotationsManagerSchema.exactOptional(),
        ReferencedModels: z.array(IEdmModelSchema).exactOptional().openapi({ readOnly: true }),
        SchemaElements: z
          .array(IEdmSchemaElementSchema)
          .exactOptional()
          .openapi({ readOnly: true }),
        VocabularyAnnotations: z
          .array(IEdmVocabularyAnnotationSchema)
          .exactOptional()
          .openapi({ readOnly: true }),
      })
      .openapi({ required: [] }),
  )
  .openapi('IEdmModel')

const ODataQueryContextSchema = z
  .object({
    ElementClrType: z.string().exactOptional().openapi({ readOnly: true }),
    ElementType: IEdmTypeSchema.exactOptional(),
    Model: IEdmModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryContext')

const FilterQueryValidatorSchema = z.object({}).openapi('FilterQueryValidator')

const FilterQueryOptionSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    FilterClause: FilterClauseSchema.exactOptional(),
    RawValue: z.string().exactOptional().openapi({ readOnly: true }),
    Validator: FilterQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterQueryOption')

const FinancialYearDtoSchema = z
  .object({
    firstMonth: z.int32().exactOptional(),
    startMonth: z.int32().exactOptional(),
    startYear: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FinancialYearDto')

const InlineCountQueryOptionSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    RawValue: z.string().exactOptional().openapi({ readOnly: true }),
    Value: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('InlineCountQueryOption')

const OrderByClauseSchema: z.ZodType<OrderByClauseType> = z
  .lazy(() =>
    z
      .object({
        Direction: z
          .union([z.literal(0), z.literal(1)])
          .exactOptional()
          .openapi({ readOnly: true }),
        Expression: SingleValueNodeSchema.exactOptional(),
        ItemType: IEdmTypeReferenceSchema.exactOptional(),
        RangeVariable: RangeVariableSchema.exactOptional(),
        ThenBy: OrderByClauseSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('OrderByClause')

const OrderByNodeSchema = z
  .object({
    Direction: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('OrderByNode')

const OrderByQueryValidatorSchema = z.object({}).openapi('OrderByQueryValidator')

const OrderByQueryOptionSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    OrderByClause: OrderByClauseSchema.exactOptional(),
    OrderByNodes: z.array(OrderByNodeSchema).exactOptional().openapi({ readOnly: true }),
    RawValue: z.string().exactOptional().openapi({ readOnly: true }),
    Validator: OrderByQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderByQueryOption')

const ODataRawQueryOptionsSchema = z
  .object({
    Expand: z.string().exactOptional().openapi({ readOnly: true }),
    Filter: z.string().exactOptional().openapi({ readOnly: true }),
    Format: z.string().exactOptional().openapi({ readOnly: true }),
    InlineCount: z.string().exactOptional().openapi({ readOnly: true }),
    OrderBy: z.string().exactOptional().openapi({ readOnly: true }),
    Select: z.string().exactOptional().openapi({ readOnly: true }),
    Skip: z.string().exactOptional().openapi({ readOnly: true }),
    SkipToken: z.string().exactOptional().openapi({ readOnly: true }),
    Top: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ODataRawQueryOptions')

const SelectItemSchema = z.object({}).openapi('SelectItem')

const SelectExpandClauseSchema = z
  .object({
    AllSelected: z.boolean().exactOptional().openapi({ readOnly: true }),
    SelectedItems: z.array(SelectItemSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('SelectExpandClause')

const SelectExpandQueryValidatorSchema = z.object({}).openapi('SelectExpandQueryValidator')

const SelectExpandQueryOptionSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    RawExpand: z.string().exactOptional().openapi({ readOnly: true }),
    RawSelect: z.string().exactOptional().openapi({ readOnly: true }),
    SelectExpandClause: SelectExpandClauseSchema.exactOptional(),
    Validator: SelectExpandQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectExpandQueryOption')

const SkipQueryValidatorSchema = z.object({}).openapi('SkipQueryValidator')

const SkipQueryOptionSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    RawValue: z.string().exactOptional().openapi({ readOnly: true }),
    Validator: SkipQueryValidatorSchema.exactOptional(),
    Value: z.int32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('SkipQueryOption')

const TopQueryValidatorSchema = z.object({}).openapi('TopQueryValidator')

const TopQueryOptionSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    RawValue: z.string().exactOptional().openapi({ readOnly: true }),
    Validator: TopQueryValidatorSchema.exactOptional(),
    Value: z.int32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TopQueryOption')

const ODataQueryValidatorSchema = z.object({}).openapi('ODataQueryValidator')

const ODataQueryOptionsAccountDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsAccountDto')

const ODataQueryOptionsAnalysisCategoryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsAnalysisCategoryDto')

const ODataQueryOptionsBankAccountQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsBankAccountQueryDto')

const ODataQueryOptionsBookTranTypeDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsBookTranTypeDto')

const ODataQueryOptionsCashPaymentQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsCashPaymentQueryDto')

const ODataQueryOptionsCashReceiptQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsCashReceiptQueryDto')

const ODataQueryOptionsCategoryTypeDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsCategoryTypeDto')

const ODataQueryOptionsCompanySettingDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsCompanySettingDto')

const ODataQueryOptionsCustomerQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsCustomerQueryDto')

const ODataQueryOptionsOwnerTypeDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsOwnerTypeDto')

const ODataQueryOptionsOwnerTypeGroupDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsOwnerTypeGroupDto')

const ODataQueryOptionsPaymentQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsPaymentQueryDto')

const ODataQueryOptionsProductDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsProductDto')

const ODataQueryOptionsPurchaseQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsPurchaseQueryDto')

const ODataQueryOptionsQuoteDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsQuoteDto')

const ODataQueryOptionsSaleRepsDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsSaleRepsDto')

const ODataQueryOptionsSalesCreditNoteQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsSalesCreditNoteQueryDto')

const ODataQueryOptionsSalesEntryQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsSalesEntryQueryDto')

const ODataQueryOptionsSalesInvoiceQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsSalesInvoiceQueryDto')

const ODataQueryOptionsSalesQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsSalesQueryDto')

const ODataQueryOptionsSupplierQueryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsSupplierQueryDto')

const ODataQueryOptionsUserDefinedFieldDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsUserDefinedFieldDto')

const ODataQueryOptionsVatAnalysisTypeDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsVatAnalysisTypeDto')

const ODataQueryOptionsVatCategoryDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsVatCategoryDto')

const ODataQueryOptionsVatRateDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsVatRateDto')

const ODataQueryOptionsVatTypeDtoSchema = z
  .object({
    Context: ODataQueryContextSchema.exactOptional(),
    Filter: FilterQueryOptionSchema.exactOptional(),
    IfMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    IfNoneMatch: z.object({}).exactOptional().openapi({ readOnly: true }),
    InlineCount: InlineCountQueryOptionSchema.exactOptional(),
    OrderBy: OrderByQueryOptionSchema.exactOptional(),
    RawValues: ODataRawQueryOptionsSchema.exactOptional(),
    Request: z.object({}).exactOptional().openapi({ readOnly: true }),
    SelectExpand: SelectExpandQueryOptionSchema.exactOptional(),
    Skip: SkipQueryOptionSchema.exactOptional(),
    Top: TopQueryOptionSchema.exactOptional(),
    Validator: ODataQueryValidatorSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ODataQueryOptionsVatTypeDto')

const OwnerTypeDtoSchema = z
  .object({
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordTypeGroupId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('OwnerTypeDto')

const OwnerTypeGroupDtoSchema = z
  .object({
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('OwnerTypeGroupDto')

const PageResultAccountDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(AccountDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultAccountDto')

const PageResultAnalysisCategoryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(AnalysisCategoryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultAnalysisCategoryDto')

const PageResultBankAccountQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(BankAccountQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultBankAccountQueryDto')

const PageResultBookTranTypeDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(BookTranTypeDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultBookTranTypeDto')

const PageResultCashPaymentQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(CashPaymentQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultCashPaymentQueryDto')

const PageResultCashReceiptQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(CashReceiptQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultCashReceiptQueryDto')

const PageResultCategoryTypeDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(CategoryTypeDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultCategoryTypeDto')

const PageResultCompanySettingDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(CompanySettingDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultCompanySettingDto')

const PageResultCustomerQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(CustomerQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultCustomerQueryDto')

const PageResultOwnerTypeDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(OwnerTypeDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultOwnerTypeDto')

const PageResultOwnerTypeGroupDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(OwnerTypeGroupDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultOwnerTypeGroupDto')

const PaymentQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bankAccountCode: z.string().exactOptional(),
    bankAccountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    detailCollection: z.array(z.string()).exactOptional(),
    discount: z.float64().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    note: z.string().exactOptional(),
    plaidTransactionId: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    supplierId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    transferBankCode: z.string().exactOptional(),
    transferBankId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    unallocated: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentQueryDto')

const PageResultPaymentQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(PaymentQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultPaymentQueryDto')

const PageResultProductDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(ProductDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultProductDto')

const PurchaseQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    detailCollection: z.array(z.string()).exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    postponedAccounting: z.boolean().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    supplierId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unallocated: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseQueryDto')

const PageResultPurchaseQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(PurchaseQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultPurchaseQueryDto')

const PageResultQuoteDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(QuoteDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultQuoteDto')

const PageResultSaleRepsDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(SaleRepsDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultSaleRepsDto')

const ProductTranQueryDtoSchema = z
  .object({
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    amount: z.float64().exactOptional().openapi({ readOnly: true }),
    amountNet: z.float64().exactOptional().openapi({ readOnly: true }),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    percentage: z.float64().exactOptional(),
    productCode: z.string().exactOptional(),
    productId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    quantity: z.float64().exactOptional(),
    tranNotes: z.array(z.string()).exactOptional(),
    unitPrice: z.float64().exactOptional(),
    vat: z.float64().exactOptional().openapi({ readOnly: true }),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatRateId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('ProductTranQueryDto')

const SalesCreditNoteQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    deliveryTo: z.array(z.string()).exactOptional(),
    details: z.string().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    loType: z.string().exactOptional(),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    ourReference: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    productTrans: z.array(ProductTranQueryDtoSchema).exactOptional(),
    quoteId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    reference: z.string().exactOptional(),
    saleRepCode: z.string().exactOptional(),
    saleRepId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    yourReference: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SalesCreditNoteQueryDto')

const PageResultSalesCreditNoteQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(SalesCreditNoteQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultSalesCreditNoteQueryDto')

const SalesEntryQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    detailCollection: z.array(z.string()).exactOptional(),
    details: z.string().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SalesEntryQueryDto')

const PageResultSalesEntryQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(SalesEntryQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultSalesEntryQueryDto')

const SalesInvoiceQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    deliveryTo: z.array(z.string()).exactOptional(),
    details: z.string().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    loType: z.string().exactOptional(),
    netGoods: z.float64().exactOptional(),
    netServices: z.float64().exactOptional(),
    note: z.string().exactOptional(),
    ourReference: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    productTrans: z.array(ProductTranQueryDtoSchema).exactOptional(),
    quoteId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    reference: z.string().exactOptional(),
    saleRepCode: z.string().exactOptional(),
    saleRepId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    yourReference: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SalesInvoiceQueryDto')

const PageResultSalesInvoiceQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(SalesInvoiceQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultSalesInvoiceQueryDto')

const SalesQueryDtoSchema = z
  .object({
    acCode: z.string().exactOptional(),
    acEntries: z.array(AcEntryDtoSchema).exactOptional(),
    bookTranTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    customFields: z.array(AcudfValueDtoSchema).exactOptional(),
    customerId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    details: z.string().exactOptional(),
    entryDate: z.iso.datetime({ offset: true }).exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    loType: z.string().exactOptional(),
    note: z.string().exactOptional(),
    procDate: z.iso.datetime({ offset: true }).exactOptional(),
    reference: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    total: z.float64().exactOptional(),
    totalNet: z.float64().exactOptional(),
    totalVAT: z.float64().exactOptional(),
    unpaid: z.float64().exactOptional(),
    vatEntries: z.array(VatEntryDtoSchema).exactOptional(),
    vatTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SalesQueryDto')

const PageResultSalesQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(SalesQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultSalesQueryDto')

const SupplierQueryDtoSchema = z
  .object({
    accountName: z.string().exactOptional(),
    accountNumber: z.string().exactOptional(),
    additionalEmails: z.array(z.string()).exactOptional(),
    address: z.array(z.string()).exactOptional(),
    authCode: z.string().exactOptional(),
    bank: EFTBankDtoSchema.exactOptional(),
    businessIdentifierCode: z.string().exactOptional(),
    code: z.string().exactOptional(),
    contact: z.string().exactOptional(),
    eFTReference: z.string().exactOptional(),
    email: z.string().exactOptional(),
    fax: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    internationalBankAccountNumber: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    name: z.string().exactOptional(),
    ourCode: z.string().exactOptional(),
    ownerTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    phone: z.string().exactOptional(),
    postponedAccounting: z.boolean().exactOptional(),
    timestamp: z.string().exactOptional(),
    vatAnalysisTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatReg: z.string().exactOptional(),
    vatType: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SupplierQueryDto')

const PageResultSupplierQueryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(SupplierQueryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultSupplierQueryDto')

const UserDefinedFieldDtoSchema = z
  .object({
    categoryTypeId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    orderIndex: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserDefinedFieldDto')

const PageResultUserDefinedFieldDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(UserDefinedFieldDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultUserDefinedFieldDto')

const VatAnalysisTypeDtoSchema = z
  .object({
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('VatAnalysisTypeDto')

const PageResultVatAnalysisTypeDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(VatAnalysisTypeDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultVatAnalysisTypeDto')

const VatCategoryDtoSchema = z
  .object({
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('VatCategoryDto')

const PageResultVatCategoryDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(VatCategoryDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultVatCategoryDto')

const VatRateDtoSchema = z
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isActive: z.boolean().exactOptional(),
    isDefault: z.boolean().exactOptional(),
    orderIndex: z.int32().exactOptional(),
    percentage: z.float64().exactOptional(),
    timestamp: z.string().exactOptional(),
    vatCategoryId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('VatRateDto')

const PageResultVatRateDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(VatRateDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultVatRateDto')

const VatTypeDtoSchema = z
  .object({
    code: z.string().exactOptional(),
    description: z.string().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    isNotApplicable: z.boolean().exactOptional(),
    isOnlyZero: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VatTypeDto')

const PageResultVatTypeDtoSchema = z
  .object({
    Count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    Items: z.array(VatTypeDtoSchema).exactOptional(),
    NextPageLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageResultVatTypeDto')

const QuoteGeneratingInvoiceDtoSchema = z
  .object({
    quoteId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    saleInvoice: SalesInvoiceCreditNoteDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuoteGeneratingInvoiceDto')

const SalesInvoiceEmailInfoDtoSchema = z
  .object({
    bccAddresses: z.array(z.string()).exactOptional(),
    messageBody: z.string().exactOptional(),
    salesInvoiceId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    toAddress: z.string().exactOptional(),
  })
  .openapi({
    example: {
      bccAddresses: ['bcc1@email.com', 'bcc2@email.com', 'bcc3@email.com'],
      messageBody: 'Email message',
      salesInvoiceId: 1,
      toAddress: 'to@email.com',
    },
    required: [],
  })
  .openapi('SalesInvoiceEmailInfoDto')

const VatRatesByVatCategoryDtoSchema = z
  .object({
    vatCategoryId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    vatRates: z.array(VatRateDtoSchema).exactOptional(),
  })
  .openapi({
    example: {
      vatCategoryId: 1,
      vatRates: [
        {
          id: 0,
          isActive: true,
          isDefault: false,
          orderIndex: 0,
          percentage: 30,
          vatCategoryId: 1,
        },
      ],
    },
    required: [],
  })
  .openapi('VatRatesByVatCategoryDto')

const QuoteDtoRequestBody = {
  description: 'Information of Quote to create.',
  content: { 'application/json': { schema: QuoteDtoSchema } },
  required: true,
}

export const getV1AccountsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts',
  tags: ['Accounts'],
  summary:
    'Returns a list of company\'s Accounts. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" and "code" fields.',
  operationId: 'Accounts_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultAccountDtoSchema,
          examples: {
            response: {
              value: {
                Count: 3,
                Items: [
                  {
                    accountGroup: 'Sales',
                    accountType: 'Profit and Loss',
                    code: '000',
                    description: 'SALES',
                    id: 355,
                  },
                  {
                    accountGroup: 'Sales',
                    accountType: 'Profit and Loss',
                    code: '008',
                    description: 'SALES STOCK',
                    id: 428,
                  },
                  {
                    accountGroup: 'Other Income',
                    accountType: 'Profit and Loss',
                    code: '050',
                    description: 'DISCOUNT RECEIVED',
                    id: 349,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1AnalysisCategoriesRoute = createRoute({
  method: 'get',
  path: '/v1/analysisCategories',
  tags: ['AnalysisCategories'],
  summary:
    'Returns a list of company\'s Analysis Categories. Supports OData querying protocol.\r\nFiltering is allowed by "categoryTypeId" field.\r\nOrdering is allowed by "id" and "orderIndex" fields.',
  operationId: 'AnalysisCategories_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultAnalysisCategoryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 3,
                Items: [
                  {
                    accountCode: '000',
                    accountId: 355,
                    categoryTypeId: 19,
                    description: 'AnCat1',
                    id: 1,
                    orderIndex: 1,
                  },
                  {
                    accountCode: '000',
                    accountId: 355,
                    categoryTypeId: 19,
                    description: 'AnCat2',
                    id: 2,
                    orderIndex: 2,
                  },
                  {
                    accountCode: '000',
                    accountId: 355,
                    categoryTypeId: 19,
                    description: 'AnCat3',
                    id: 3,
                    orderIndex: 3,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1BankAccountsRoute = createRoute({
  method: 'get',
  path: '/v1/bankAccounts',
  tags: ['BankAccounts'],
  summary:
    'Returns a list of company\'s Bank Account. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" and "acCode" fields.',
  operationId: 'BankAccounts_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultBankAccountQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'B1',
                    accountName: '',
                    accountNumber: '83700896',
                    address: ['Address Line 1', 'Address Line 2'],
                    bankFeedSource: 0,
                    businessIdentifierCodes: 'AIBKIE2D',
                    categoryId: 41704,
                    creditorScheme: 'XXXX',
                    details: 'Bank_111111111111111111',
                    id: 1,
                    internationalBankAccountNumber: 'IE67 BOFI 9027 0925 7277 59',
                    isDefaultBank: false,
                    lastChq: '000005',
                    nominalAcCode: 'B101',
                    oBalance: 0,
                    sortCode: '900284',
                    timestamp: 'QUFBQUFBQUFDcXc9',
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1BankAccountsRoute = createRoute({
  method: 'post',
  path: '/v1/bankAccounts',
  tags: ['BankAccounts'],
  summary: 'Creates a new Bank Account.',
  operationId: 'BankAccounts_Post',
  request: {
    body: {
      description: 'Information of Bank Account to create.',
      content: { 'application/json': { schema: BankAccountDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1BankAccountsBatchRoute = createRoute({
  method: 'put',
  path: '/v1/bankAccounts/batch',
  tags: ['BankAccounts'],
  summary: 'Processes a batch of Bank Accounts.',
  operationId: 'BankAccounts_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Bank Accounts to process.',
      content: { 'application/json': { schema: z.array(BatchItemBankAccountDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1BankAccountsIdRoute = createRoute({
  method: 'get',
  path: '/v1/bankAccounts/{id}',
  tags: ['BankAccounts'],
  summary: 'Returns information about a single Bank Account.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Bank Account to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BankAccountDtoSchema,
          examples: {
            response: {
              value: {
                acCode: 'B1',
                accountName: '',
                accountNumber: '83700896',
                address: ['Address Line 1', 'Address Line 2'],
                bankFeedSource: 0,
                businessIdentifierCodes: 'AIBKIE2D',
                categoryId: 41704,
                creditorScheme: 'XXXX',
                details: 'Bank_1',
                id: 1,
                internationalBankAccountNumber: 'IE67 BOFI 9027 0925 7277 59',
                isDefaultBank: false,
                lastChq: '000005',
                nominalAcCode: 'B101',
                oBalance: 0,
                sortCode: '900284',
                timestamp: 'QUFBQUFBQUFDcXc9',
              },
            },
          },
        },
      },
    },
  },
})

export const putV1BankAccountsIdRoute = createRoute({
  method: 'put',
  path: '/v1/bankAccounts/{id}',
  tags: ['BankAccounts'],
  summary: 'Updates an existing Bank Account.',
  operationId: 'BankAccounts_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Bank Account to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Bank Account to update.',
      content: { 'application/json': { schema: BankAccountDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1BankAccountsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/bankAccounts/{id}',
  tags: ['BankAccounts'],
  summary: 'Removes an existing Bank Account.',
  operationId: 'BankAccounts_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Bank Account to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Bank Account to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1BookTranTypesRoute = createRoute({
  method: 'get',
  path: '/v1/bookTranTypes',
  tags: ['BookTranTypes'],
  summary:
    'Returns a list of global Book Transactions\' Types. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'BookTranTypes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultBookTranTypeDtoSchema,
          examples: {
            response: {
              value: {
                Count: 5,
                Items: [
                  { code: '', description: 'Cash Receipt', id: 1 },
                  { code: '', description: 'Cash Payment', id: 2 },
                  { code: '', description: 'Cheques Entry', id: 3 },
                  { code: '', description: 'Purchases Book Entry', id: 4 },
                  { code: '', description: 'Sales Entry', id: 5 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1CashPaymentsRoute = createRoute({
  method: 'get',
  path: '/v1/cashPayments',
  tags: ['CashPayments'],
  summary:
    'Returns a list of company\'s Cash Payments. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'CashPayments_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultCashPaymentQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: null,
                    acEntries: [
                      {
                        accountCode: 'CP01',
                        analysisCategoryId: 10433,
                        description: 'Cash Pay 01',
                        id: 62741,
                        value: 200,
                      },
                    ],
                    bankAccountCode: 'BAK2',
                    bankAccountId: 11111,
                    bookTranTypeId: 2,
                    customFields: [],
                    detailCollection: ['test'],
                    discount: 0,
                    entryDate: '2017-07-01T00:00:00',
                    id: 12345,
                    ledger: 100,
                    lodgement: 0,
                    note: 'Supplier 1',
                    plaidTransactionId: null,
                    procDate: '2017-07-26T00:00:00',
                    supplierId: 70599,
                    timestamp: '4NYAcBIe2wg=',
                    total: 100,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1CashPaymentsRoute = createRoute({
  method: 'post',
  path: '/v1/cashPayments',
  tags: ['CashPayments'],
  summary: 'Creates a new Cash Payment.',
  operationId: 'CashPayments_Post',
  request: {
    body: {
      description: 'Information of Cash Receipt to create.',
      content: { 'application/json': { schema: CashPaymentDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1CashPaymentsBatchRoute = createRoute({
  method: 'put',
  path: '/v1/cashPayments/batch',
  tags: ['CashPayments'],
  summary: 'Processes a batch of Cash Payments.',
  operationId: 'CashPayments_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Cash Receipts to process.',
      content: { 'application/json': { schema: z.array(BatchItemCashPaymentDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1CashPaymentsIdRoute = createRoute({
  method: 'get',
  path: '/v1/cashPayments/{id}',
  tags: ['CashPayments'],
  summary: 'Returns information about a single Cash Payment.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Cash Receipt to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CashPaymentDtoSchema,
          examples: {
            response: {
              value: {
                acCode: null,
                acEntries: [
                  {
                    accountCode: 'CP01',
                    analysisCategoryId: 10433,
                    description: 'Cash Pay 01',
                    id: 62741,
                    value: 200,
                  },
                ],
                bankAccountCode: 'BAK2',
                bankAccountId: 11111,
                bookTranTypeId: 2,
                customFields: [],
                detailCollection: ['test'],
                discount: 0,
                entryDate: '2017-07-01T00:00:00',
                id: 12345,
                ledger: 100,
                lodgement: 0,
                note: 'Supplier 1',
                plaidTransactionId: null,
                procDate: '2017-07-26T00:00:00',
                supplierId: 70599,
                timestamp: '+/0HcBIe2wg=',
                total: 100,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1CashPaymentsIdRoute = createRoute({
  method: 'put',
  path: '/v1/cashPayments/{id}',
  tags: ['CashPayments'],
  summary: 'Updates an existing Cash Payment.',
  operationId: 'CashPayments_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Cash Receipt to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Cash Receipt to update.',
      content: { 'application/json': { schema: CashPaymentDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1CashPaymentsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/cashPayments/{id}',
  tags: ['CashPayments'],
  summary: 'Removes an existing Cash Payment.',
  operationId: 'CashPayments_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Cash Receipt to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Cash Receipt to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1CashReceiptsRoute = createRoute({
  method: 'get',
  path: '/v1/cashReceipts',
  tags: ['CashReceipts'],
  summary:
    'Returns a list of company\'s Cash Receipts. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'CashReceipts_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultCashReceiptQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: null,
                    acEntries: [
                      {
                        accountCode: '000',
                        analysisCategoryId: 1,
                        description: 'AnCat1',
                        id: 1,
                        value: 30,
                      },
                    ],
                    bookTranTypeId: 1,
                    customFields: [
                      { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                    ],
                    customerId: null,
                    detailCollection: ['det_1', 'det_2', 'det_3'],
                    discount: 0,
                    entryDate: '2011-01-01T00:00:00',
                    id: 1,
                    ledger: 0,
                    note: 'note1',
                    plaidTransactionId: null,
                    procDate: '2011-01-05T00:00:00',
                    timestamp: 'EiUPcBIe2wg=',
                    total: 50,
                    unallocated: 0,
                    vatEntries: [{ amount: 50, id: 1, percentage: 15, vatRateId: 1 }],
                    vatTypeId: null,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1CashReceiptsRoute = createRoute({
  method: 'post',
  path: '/v1/cashReceipts',
  tags: ['CashReceipts'],
  summary: 'Creates a new Cash Receipt.',
  operationId: 'CashReceipts_Post',
  request: {
    body: {
      description: 'Information of Cash Receipt to create.',
      content: { 'application/json': { schema: CashReceiptDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1CashReceiptsBatchRoute = createRoute({
  method: 'put',
  path: '/v1/cashReceipts/batch',
  tags: ['CashReceipts'],
  summary: 'Processes a batch of Cash Receipts.',
  operationId: 'CashReceipts_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Cash Receipts to process.',
      content: { 'application/json': { schema: z.array(BatchItemCashReceiptDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1CashReceiptsIdRoute = createRoute({
  method: 'get',
  path: '/v1/cashReceipts/{id}',
  tags: ['CashReceipts'],
  summary: 'Returns information about a single Cash Receipt.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Cash Receipt to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CashReceiptDtoSchema,
          examples: {
            response: {
              value: {
                acCode: null,
                acEntries: [
                  {
                    accountCode: '000',
                    analysisCategoryId: 1,
                    description: 'AnCat1',
                    id: 1,
                    value: 30,
                  },
                ],
                bookTranTypeId: 1,
                customFields: [
                  { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                ],
                customerId: null,
                detailCollection: ['det_1', 'det_2', 'det_3'],
                discount: 0,
                entryDate: '2011-01-01T00:00:00',
                id: 1,
                ledger: 0,
                note: 'note1',
                plaidTransactionId: null,
                procDate: '2011-01-05T00:00:00',
                timestamp: '0OkTcBIe2wg=',
                total: 50,
                unallocated: 0,
                vatEntries: [{ amount: 50, id: 1, percentage: 15, vatRateId: 1 }],
                vatTypeId: null,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1CashReceiptsIdRoute = createRoute({
  method: 'put',
  path: '/v1/cashReceipts/{id}',
  tags: ['CashReceipts'],
  summary: 'Updates an existing Cash Receipt.',
  operationId: 'CashReceipts_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Cash Receipt to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Cash Receipt to update.',
      content: { 'application/json': { schema: CashReceiptDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1CashReceiptsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/cashReceipts/{id}',
  tags: ['CashReceipts'],
  summary: 'Removes an existing Cash Receipt.',
  operationId: 'CashReceipts_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Cash Receipt to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Cash Receipt to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1CategoryTypesRoute = createRoute({
  method: 'get',
  path: '/v1/categoryTypes',
  tags: ['CategoryTypes'],
  summary:
    'Returns a list of company\'s Category Types. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'CategoryTypes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultCategoryTypeDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [{ description: 'Cash Receipts', id: 17 }],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1CompanySettingsRoute = createRoute({
  method: 'get',
  path: '/v1/companySettings',
  tags: ['CompanySettings'],
  summary:
    'Returns a list of company settings. Supports OData querying protocol.\r\nFiltering is forbidden.',
  operationId: 'CompanySettings_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultCompanySettingDtoSchema,
          examples: {
            response: {
              value: {
                enableVOCRReporting: true,
                id: 20164,
                useAllocations: true,
                value: '',
                vocrSettingValue: false,
              },
            },
          },
        },
      },
    },
  },
})

export const getV1CompanySetupConfigRoute = createRoute({
  method: 'get',
  path: '/v1/companySetupConfig',
  tags: ['CompanySetupConfig'],
  summary: 'Returns the company configuration settings.',
  operationId: 'CompanySetupConfig_Get',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CompanySetupConfigViewModelSchema } },
    },
  },
})

export const getV1CompanySetupConfigGetCompanyOptionsRoute = createRoute({
  method: 'get',
  path: '/v1/companySetupConfig/getCompanyOptions',
  tags: ['CompanySetupConfig'],
  summary: 'Returns the company option setting.',
  operationId: 'CompanySetupConfig_GetCompanyOptions',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CompanyOptionDtoSchema } } },
  },
})

export const getV1CompanySetupConfigGetFinancialYearRoute = createRoute({
  method: 'get',
  path: '/v1/companySetupConfig/getFinancialYear',
  tags: ['CompanySetupConfig'],
  summary: 'Returns the financial year.',
  operationId: 'CompanySetupConfig_GetFinancialYear',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: FinancialYearDtoSchema } } },
  },
})

export const getV1CustomersRoute = createRoute({
  method: 'get',
  path: '/v1/customers',
  tags: ['Customers'],
  summary:
    'Returns a list of company\'s Customers. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" and "code" fields.',
  operationId: 'Customers_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultCustomerQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    accountName: '',
                    accountNumber: '12345678',
                    additionalEmails: ['email2@example.com', 'email2@example.com'],
                    address: ['Address Line 1', 'Address Line 2'],
                    authCode: 'VATEXCODE222',
                    bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
                    businessIdentifierCode: 'AIBI02',
                    code: '12345678',
                    contact: 'John Smith',
                    delivery: ['Delivery 1', 'Delivery 2'],
                    eFTReference: 'Reference',
                    email: 'customer@email.com',
                    fax: '1234567890',
                    id: 10589,
                    internationalBankAccountNumber: '1233432532',
                    mobile: '1234567890',
                    name: 'Customer Name 1',
                    ourCode: 'OURCODE111',
                    ownerTypeId: 1,
                    phone: '1234596970',
                    timestamp: 'r9UfcBIe2wg=',
                    vatAnalysisTypeId: 1,
                    vatReg: 'VATCODE0001',
                    vatType: 2,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1CustomersRoute = createRoute({
  method: 'post',
  path: '/v1/customers',
  tags: ['Customers'],
  summary: 'Creates a new Customer.',
  operationId: 'Customers_Post',
  request: {
    body: {
      description: 'Information of Customer to create.',
      content: { 'application/json': { schema: CustomerDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1CustomersBatchRoute = createRoute({
  method: 'put',
  path: '/v1/customers/batch',
  tags: ['Customers'],
  summary: 'Processes a batch of Customers.',
  operationId: 'Customers_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Customers to process.',
      content: { 'application/json': { schema: z.array(BatchItemCustomerDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1CustomersIdRoute = createRoute({
  method: 'get',
  path: '/v1/customers/{id}',
  tags: ['Customers'],
  summary:
    "Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.",
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      needBalance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If "true" then Customer\'s ledger balance will be calculated; otherwise balance will be returned as 0.',
            in: 'query',
            name: 'needBalance',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CustomerDtoSchema } } },
  },
})

export const putV1CustomersIdRoute = createRoute({
  method: 'put',
  path: '/v1/customers/{id}',
  tags: ['Customers'],
  summary: 'Updates an existing Customer.',
  operationId: 'Customers_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Customer to update.',
      content: { 'application/json': { schema: CustomerDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1CustomersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/customers/{id}',
  tags: ['Customers'],
  summary: 'Removes an existing Customer.',
  operationId: 'Customers_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Customer to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1CustomersItemIdAccountTransRoute = createRoute({
  method: 'get',
  path: '/v1/customers/{itemId}/accountTrans',
  tags: ['Customers'],
  summary: "Returns a list of Customer's account transactions.",
  operationId: 'Customers_GetAccountTrans',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to return account transaction.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(AccountTranDtoSchema),
          examples: {
            response: {
              value: [
                {
                  bookTranId: 0,
                  bookTranTypeId: 0,
                  bookTransactionReference: 'O/Bal',
                  bookTypeDesc: 'Opening Balance',
                  credit: 0,
                  debit: 30,
                  id: 2,
                  procDate: '2012-12-31T00:00:00',
                },
                {
                  bookTranId: 0,
                  bookTranTypeId: 0,
                  bookTransactionReference: '0000001',
                  bookTypeDesc: 'Bank Payment',
                  credit: 0,
                  debit: 10,
                  id: 9,
                  procDate: '2012-12-31T00:00:00',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getV1CustomersItemIdOpeningBalanceRoute = createRoute({
  method: 'get',
  path: '/v1/customers/{itemId}/openingBalance',
  tags: ['Customers'],
  summary:
    "Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.",
  operationId: 'Customers_GetOpeningBalance',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to return opening balances.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OwnerOpeningBalanceInPeriodsDtoSchema,
          examples: {
            response: {
              value: { currentMonth: 10, oneMonthOld: 20, threeMonthsOld: 40, twoMonthsOld: 30 },
            },
          },
        },
      },
    },
  },
})

export const getV1CustomersItemIdOpeningBalanceListRoute = createRoute({
  method: 'get',
  path: '/v1/customers/{itemId}/openingBalanceList',
  tags: ['Customers'],
  summary: "Returns a list of Customer's opening balance transactions.",
  operationId: 'Customers_GetOpeningBalanceList',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to return opening balances transaction.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(OwnerOpeningBalanceDtoSchema),
          examples: {
            response: {
              value: [
                {
                  entryDate: '2011-01-01T00:00:00',
                  id: 1,
                  procDate: '2011-02-01T00:00:00',
                  reference: 'O/Bal',
                  timestamp: 'IIYwcBIe2wg=',
                  total: 10,
                  totalVAT: 1.3,
                  unpaid: 0,
                  vatEntries: [{ amount: 8.7, vatRateId: 1 }],
                },
                {
                  entryDate: '2011-01-01T00:00:00',
                  id: 2,
                  procDate: '2011-02-01T00:00:00',
                  reference: 'O/Bal',
                  timestamp: 'IIYwcBIe2wg=',
                  total: 20,
                  totalVAT: 3.33,
                  unpaid: 0,
                  vatEntries: [{ amount: 16.77, vatRateId: 2 }],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getV1CustomersItemIdQuotesRoute = createRoute({
  method: 'get',
  path: '/v1/customers/{itemId}/quotes',
  tags: ['Customers'],
  summary: "Returns a list of Customer's quotes.",
  operationId: 'Customers_GetQuotes',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Customer to return quotes.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(QuoteDtoSchema) } },
    },
  },
})

export const postV1EmailSendEmailStatementRoute = createRoute({
  method: 'post',
  path: '/v1/email/sendEmailStatement',
  tags: ['Email'],
  summary:
    'Sends a Statement email.\r\nIf "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer\'s address.',
  operationId: 'Email_SendEmailStatement',
  request: {
    body: { content: { 'application/json': { schema: EmailStatementDtoSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postV1EmailSendQuoteRoute = createRoute({
  method: 'post',
  path: '/v1/email/sendQuote',
  tags: ['Email'],
  summary:
    'Sends a Quote email.\r\nIf "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer\'s address.',
  operationId: 'Email_SendQuote',
  request: {
    body: { content: { 'application/json': { schema: EmailQuoteDtoSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postV1EmailSendSalesInvoiceRoute = createRoute({
  method: 'post',
  path: '/v1/email/sendSalesInvoice',
  tags: ['Email'],
  summary:
    'Sends a Sales Invoice email.\r\nIf "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer\'s address.',
  operationId: 'Email_SendSalesInvoice',
  request: {
    body: {
      content: { 'application/json': { schema: SalesInvoiceEmailInfoDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1OwnerTypeGroupsRoute = createRoute({
  method: 'get',
  path: '/v1/ownerTypeGroups',
  tags: ['OwnerTypeGroups'],
  summary:
    'Returns a list of global Owner Type Groups. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'OwnerTypeGroups_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultOwnerTypeGroupDtoSchema,
          examples: {
            response: {
              value: {
                Count: 2,
                Items: [
                  { description: 'Customer', id: 1 },
                  { description: 'Supplier', id: 2 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1OwnerTypesRoute = createRoute({
  method: 'get',
  path: '/v1/ownerTypes',
  tags: ['OwnerTypes'],
  summary:
    'Returns a list of global Owner Types. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'OwnerTypes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultOwnerTypeDtoSchema,
          examples: {
            response: {
              value: {
                Count: 3,
                Items: [
                  { description: 'Prospect', id: 1, recordTypeGroupId: 1 },
                  { description: 'Customer', id: 2, recordTypeGroupId: 1 },
                  { description: 'Supplier', id: 3, recordTypeGroupId: 2 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1PaymentsRoute = createRoute({
  method: 'get',
  path: '/v1/payments',
  tags: ['Payments'],
  summary:
    'Returns a list of company\'s Payments. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'Payments_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultPaymentQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'C1',
                    acEntries: [],
                    bankAccountCode: 'B1',
                    bankAccountId: 1,
                    bookTranTypeId: 3,
                    customFields: [
                      { description: 'F1', id: 1, userDefinedFieldId: 1, value: 'f1' },
                      { description: 'F2', id: 2, userDefinedFieldId: 2, value: 'f2' },
                    ],
                    detailCollection: ['d1', 'd2'],
                    discount: 2,
                    entryDate: '2011-07-01T00:00:00',
                    id: 2,
                    note: '123',
                    plaidTransactionId: null,
                    procDate: '2011-08-08T00:00:00',
                    reference: '000002',
                    supplierId: 2,
                    timestamp: 'AJlDcBIe2wg=',
                    total: 155,
                    transferBankCode: '',
                    transferBankId: 1,
                    unallocated: 155,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1PaymentsRoute = createRoute({
  method: 'post',
  path: '/v1/payments',
  tags: ['Payments'],
  summary: 'Creates a new Payment.',
  operationId: 'Payments_Post',
  request: {
    body: {
      description: 'Information of Payment to create.',
      content: { 'application/json': { schema: PaymentDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1PaymentsBatchRoute = createRoute({
  method: 'put',
  path: '/v1/payments/batch',
  tags: ['Payments'],
  summary: 'Processes a batch of Payments.',
  operationId: 'Payments_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Payments to process.',
      content: { 'application/json': { schema: z.array(BatchItemPaymentDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1PaymentsIdRoute = createRoute({
  method: 'get',
  path: '/v1/payments/{id}',
  tags: ['Payments'],
  summary: 'Returns information about a single Payments.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Payment to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PaymentDtoSchema,
          examples: {
            response: {
              value: {
                acCode: 'C1',
                acEntries: [],
                bankAccountCode: 'B1',
                bankAccountId: 1,
                bookTranTypeId: 3,
                customFields: [
                  { description: 'F1', id: 1, userDefinedFieldId: 1, value: 'f1' },
                  { description: 'F2', id: 2, userDefinedFieldId: 2, value: 'f2' },
                ],
                detailCollection: ['d1', 'd2'],
                discount: 2,
                entryDate: '2011-07-01T00:00:00',
                id: 2,
                note: '123',
                plaidTransactionId: null,
                procDate: '2011-08-08T00:00:00',
                reference: '000002',
                supplierId: 2,
                timestamp: 'CcBKcBIe2wg=',
                total: 155,
                transferBankCode: '',
                transferBankId: 1,
                unallocated: 155,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1PaymentsIdRoute = createRoute({
  method: 'put',
  path: '/v1/payments/{id}',
  tags: ['Payments'],
  summary: 'Updates an existing Payment.',
  operationId: 'Payments_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Payment to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Payment to update.',
      content: { 'application/json': { schema: PaymentDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1PaymentsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/payments/{id}',
  tags: ['Payments'],
  summary: 'Removes an existing Payment.',
  operationId: 'Payments_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Payment to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Payment to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1ProductTypesRoute = createRoute({
  method: 'get',
  path: '/v1/productTypes',
  tags: ['ProductTypes'],
  summary:
    'Returns a list of global Product Types. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'ProductTypes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultOwnerTypeDtoSchema,
          examples: {
            response: {
              value: {
                Count: 3,
                Items: [
                  { description: 'Prospect', id: 1, recordTypeGroupId: 1 },
                  { description: 'Customer', id: 2, recordTypeGroupId: 1 },
                  { description: 'Supplier', id: 3, recordTypeGroupId: 2 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1ProductsRoute = createRoute({
  method: 'get',
  path: '/v1/products',
  tags: ['Products'],
  summary:
    'Returns a list of company\'s Products. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" and "stockCode" fields.',
  operationId: 'Products_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultProductDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    details: ['det1', 'det2', 'det3'],
                    grossUnitPrice: false,
                    hasDefaultVatRate: false,
                    id: 9,
                    productTypeId: 0,
                    stockCode: 'PRO1',
                    timestamp: 'eiJNcBIe2wg=',
                    unitPrice: 100,
                    vatAnalysisTypeId: 1,
                    vatRateId: null,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1ProductsRoute = createRoute({
  method: 'post',
  path: '/v1/products',
  tags: ['Products'],
  summary: 'Creates a new Product.',
  operationId: 'Products_Post',
  request: {
    body: {
      description: 'Information of Product to create.',
      content: { 'application/json': { schema: ProductDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1ProductsBatchRoute = createRoute({
  method: 'put',
  path: '/v1/products/batch',
  tags: ['Products'],
  summary: 'Processes a batch of Products.',
  operationId: 'Products_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Products to process.',
      content: { 'application/json': { schema: z.array(BatchItemProductDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1ProductsIdRoute = createRoute({
  method: 'get',
  path: '/v1/products/{id}',
  tags: ['Products'],
  summary: 'Returns information about a single Product.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Product to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ProductDtoSchema,
          examples: {
            response: {
              value: {
                details: ['det1', 'det2', 'det3'],
                grossUnitPrice: false,
                hasDefaultVatRate: false,
                id: 9,
                productTypeId: 0,
                stockCode: 'PRO1',
                timestamp: '6IRPcBIe2wg=',
                unitPrice: 100,
                vatAnalysisTypeId: 1,
                vatRateId: null,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1ProductsIdRoute = createRoute({
  method: 'put',
  path: '/v1/products/{id}',
  tags: ['Products'],
  summary: 'Updates an existing Product.',
  operationId: 'Products_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Product to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Product to update.',
      content: { 'application/json': { schema: ProductDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1ProductsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/products/{id}',
  tags: ['Products'],
  summary: 'Removes an existing Product.',
  operationId: 'Products_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Product to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Product to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1PurchasesRoute = createRoute({
  method: 'get',
  path: '/v1/purchases',
  tags: ['Purchases'],
  summary:
    'Returns a list of company\'s Purchases. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'Purchases_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultPurchaseQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'SUP3',
                    acEntries: [
                      {
                        accountCode: 'PU03',
                        analysisCategoryId: 10441,
                        description: 'PUR 3',
                        id: 12518,
                        value: 90.91,
                      },
                    ],
                    bookTranTypeId: 4,
                    customFields: [],
                    detailCollection: [],
                    entryDate: '2016-06-01T00:00:00',
                    id: 13380,
                    isDiscrepancyAccepted: null,
                    netGoods: 0,
                    netServices: 0,
                    note: 'Supplier 3',
                    postponedAccounting: false,
                    procDate: '2016-06-24T00:00:00',
                    reference: '000001',
                    supplierId: 10173,
                    timestamp: 'tHBbcBIe2wg=',
                    total: 100,
                    totalNet: 90.91,
                    totalVAT: 9.09,
                    unallocated: 100,
                    unpaid: 100,
                    vatEntries: [{ amount: 90.91, id: 12267, percentage: 10, vatRateId: 10317 }],
                    vatTypeId: 1,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1PurchasesRoute = createRoute({
  method: 'post',
  path: '/v1/purchases',
  tags: ['Purchases'],
  summary: 'Creates a new Purchase.',
  operationId: 'Purchases_Post',
  request: {
    body: {
      description: 'Information of Purchase to create.',
      content: { 'application/json': { schema: PurchaseDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1PurchasesBatchRoute = createRoute({
  method: 'put',
  path: '/v1/purchases/batch',
  tags: ['Purchases'],
  summary: 'Processes a batch of Purchases.',
  operationId: 'Purchases_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Purchases to process.',
      content: { 'application/json': { schema: z.array(BatchItemPurchaseDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1PurchasesIdRoute = createRoute({
  method: 'get',
  path: '/v1/purchases/{id}',
  tags: ['Purchases'],
  summary: 'Returns information about a single Purchases.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Purchase to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PurchaseDtoSchema,
          examples: {
            response: {
              value: {
                acCode: 'SUP3',
                acEntries: [
                  {
                    accountCode: 'PU03',
                    analysisCategoryId: 10441,
                    description: 'PUR 3',
                    id: 12518,
                    value: 90.91,
                  },
                ],
                bookTranTypeId: 4,
                customFields: [],
                detailCollection: [],
                entryDate: '2016-06-01T00:00:00',
                id: 13380,
                isDiscrepancyAccepted: false,
                netGoods: 0,
                netServices: 0,
                note: 'Supplier 3',
                postponedAccounting: false,
                procDate: '2016-06-24T00:00:00',
                reference: '000001',
                supplierId: 10173,
                timestamp: 'eDVgcBIe2wg=',
                total: 100,
                totalNet: 90.91,
                totalVAT: 9.09,
                unallocated: 100,
                unpaid: 100,
                vatEntries: [{ amount: 90.91, id: 12267, percentage: 10, vatRateId: 10317 }],
                vatTypeId: 1,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1PurchasesIdRoute = createRoute({
  method: 'put',
  path: '/v1/purchases/{id}',
  tags: ['Purchases'],
  summary: 'Updates an existing Purchase.',
  operationId: 'Purchases_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Purchase to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Purchase to update.',
      content: { 'application/json': { schema: PurchaseDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1PurchasesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/purchases/{id}',
  tags: ['Purchases'],
  summary: 'Removes an existing Purchase.',
  operationId: 'Purchases_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Purchase to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Purchase to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1QuotesRoute = createRoute({
  method: 'get',
  path: '/v1/quotes',
  tags: ['Quote'],
  summary:
    'Returns a list of company\'s Quotes.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id".',
  operationId: 'Quote_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultQuoteDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: null,
                    closedDate: null,
                    comments: 'Sample',
                    companyId: 40449,
                    customFields: null,
                    customerOwnerId: 70583,
                    customerOwnerName: 'Customer 1',
                    ddNumber: 'Sample',
                    deliveryList: null,
                    deliveryTo: null,
                    entryDate: '2017-01-01T00:00:00',
                    id: 1,
                    layoutType: 1,
                    note: null,
                    poNumber: 'Sample',
                    procDate: '2017-01-05T00:00:00',
                    productTrans: [
                      {
                        acEntries: [
                          {
                            accountCode: 'sample',
                            analysisCategoryId: 40888,
                            companyId: 40449,
                            id: 1,
                            quoteProductTranId: 40277,
                            value: 100,
                          },
                        ],
                        amount: 10,
                        companyId: 40449,
                        id: 40277,
                        percentage: 0,
                        productCode: 'PRO1',
                        productId: 20107,
                        quantity: 1,
                        tranNotes: ['Product'],
                        unitPrice: 100,
                        vatAmount: 10,
                        vatAnalysisTypeId: 0,
                        vatRateId: 30657,
                      },
                    ],
                    reference: '000032',
                    saleInvoiceId: 30044,
                    saleRepCode: null,
                    saleRepId: 75783,
                    timeStamp: 'QvpkcBIe2wg=',
                    total: 110,
                    totalNet: 100,
                    totalVat: 10,
                    vatTypeId: 1,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1QuotesRoute = createRoute({
  method: 'post',
  path: '/v1/quotes',
  tags: ['Quote'],
  summary: 'Creates a new Quote.',
  operationId: 'Quote_Post',
  request: { body: QuoteDtoRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1QuotesBatchRoute = createRoute({
  method: 'put',
  path: '/v1/quotes/batch',
  tags: ['Quote'],
  summary: 'Processes a batch of Quote.',
  operationId: 'Quote_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Quote to process.',
      content: { 'application/json': { schema: z.array(BatchItemQuoteDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1QuotesCloseIdRoute = createRoute({
  method: 'put',
  path: '/v1/quotes/close/{id}',
  tags: ['Quote'],
  summary: 'Close a Quote.',
  operationId: 'Quote_Close',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Quote to close',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postV1QuotesCreateQuoteWithGeneratingReferenceRoute = createRoute({
  method: 'post',
  path: '/v1/quotes/createQuoteWithGeneratingReference',
  tags: ['Quote'],
  summary: 'Creates a new Quote with auto generating reference.',
  operationId: 'Quote_Post_CreateQuoteWithGeneratingReference',
  request: { body: QuoteDtoRequestBody },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postV1QuotesGenerateSaleInvoiceRoute = createRoute({
  method: 'post',
  path: '/v1/quotes/generateSaleInvoice',
  tags: ['Quote'],
  summary:
    'Generate a sale invoice from a Quote.\r\nWhen sale invoice is empty, new sale invoice will be generated from Quote.',
  operationId: 'Quote_Post_GenerateSaleInvoice',
  request: {
    body: {
      description: 'Id of Quote to generate',
      content: { 'application/json': { schema: QuoteGeneratingInvoiceDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1QuotesReopenIdRoute = createRoute({
  method: 'put',
  path: '/v1/quotes/reopen/{id}',
  tags: ['Quote'],
  summary: 'Reopen a Quote.',
  operationId: 'Quote_Reopen',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Quote to reopen',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1QuotesIdRoute = createRoute({
  method: 'get',
  path: '/v1/quotes/{id}',
  tags: ['Quote'],
  summary: 'Returns information about a single Quote.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sale Rep to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: QuoteDtoSchema,
          examples: {
            response: {
              value: {
                acCode: null,
                closedDate: null,
                comments: 'Sample',
                companyId: 40449,
                customFields: null,
                customerOwnerId: 70583,
                customerOwnerName: 'Customer 1',
                ddNumber: 'Sample',
                deliveryList: null,
                deliveryTo: null,
                entryDate: '2017-01-01T00:00:00',
                id: 1,
                layoutType: 1,
                note: null,
                poNumber: 'Sample',
                procDate: '2017-01-05T00:00:00',
                productTrans: [
                  {
                    acEntries: [
                      {
                        accountCode: 'sample',
                        analysisCategoryId: 40888,
                        companyId: 40449,
                        id: 1,
                        quoteProductTranId: 40277,
                        value: 100,
                      },
                    ],
                    amount: 10,
                    companyId: 40449,
                    id: 40277,
                    percentage: 0,
                    productCode: 'PRO1',
                    productId: 20107,
                    quantity: 1,
                    tranNotes: ['Product'],
                    unitPrice: 100,
                    vatAmount: 10,
                    vatAnalysisTypeId: 0,
                    vatRateId: 30657,
                  },
                ],
                reference: '000032',
                saleInvoiceId: 30044,
                saleRepCode: null,
                saleRepId: 75783,
                timeStamp: 'FSFscBIe2wg=',
                total: 110,
                totalNet: 100,
                totalVat: 10,
                vatTypeId: 1,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1QuotesIdRoute = createRoute({
  method: 'put',
  path: '/v1/quotes/{id}',
  tags: ['Quote'],
  summary: 'Updates an existing Quote.',
  operationId: 'Quote_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Quote to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Quote to update.',
      content: { 'application/json': { schema: QuoteDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1QuotesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/quotes/{id}',
  tags: ['Quote'],
  summary: 'Removes an existing Quote.',
  operationId: 'Quote_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Quote to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Quote to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesRoute = createRoute({
  method: 'get',
  path: '/v1/sales',
  tags: ['Sales'],
  summary:
    'Returns a list of company\'s Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'Sales_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultSalesQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'code',
                    acEntries: [
                      {
                        accountCode: '000',
                        analysisCategoryId: 1,
                        description: 'AnCat 1',
                        id: 1,
                        value: 20,
                      },
                      {
                        accountCode: '000',
                        analysisCategoryId: 1,
                        description: 'AnCat 2',
                        id: 2,
                        value: 10,
                      },
                    ],
                    bookTranTypeId: 6,
                    customFields: [
                      { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                    ],
                    customerId: 1,
                    details: 'detail_1',
                    entryDate: '2011-01-01T00:00:00',
                    id: 1,
                    loType: '1',
                    note: 'note_1',
                    procDate: '2011-01-01T00:00:00',
                    reference: '000001',
                    timestamp: 'kqp1cBIe2wg=',
                    total: 82.5,
                    totalNet: 70,
                    totalVAT: 12.5,
                    unpaid: 12.5,
                    vatEntries: [
                      { amount: 30, id: 1, percentage: 15, vatRateId: 1 },
                      { amount: 40, id: 2, percentage: 20, vatRateId: 2 },
                    ],
                    vatTypeId: 1,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1SalesCreditNotesRoute = createRoute({
  method: 'get',
  path: '/v1/salesCreditNotes',
  tags: ['SalesCreditNotes'],
  summary:
    'Returns a list of company\'s Sales Credit Notes. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'SalesCreditNotes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultSalesCreditNoteQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'CUS3',
                    bookTranTypeId: 7,
                    customFields: [
                      { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                      { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
                    ],
                    customerId: 70585,
                    deliveryTo: ['dt_1', 'dt_2'],
                    details: 'detail_1',
                    entryDate: '2016-06-01T00:00:00',
                    id: 75813,
                    loType: '1',
                    netGoods: null,
                    netServices: null,
                    note: 'Customer 3',
                    ourReference: 'ddNumber_1',
                    procDate: '2016-06-24T00:00:00',
                    productTrans: [
                      {
                        acEntries: [
                          {
                            accountCode: 'SA02',
                            analysisCategoryId: 40889,
                            description: 'AnCat1',
                            id: 73455,
                            value: -200,
                          },
                        ],
                        amount: -220,
                        amountNet: -200,
                        id: 51820,
                        percentage: 10,
                        productCode: 'PRO2',
                        productId: 20108,
                        quantity: -1,
                        tranNotes: ['tn_1', 'tn_2'],
                        unitPrice: 200,
                        vat: -20,
                        vatAnalysisTypeId: 0,
                        vatRateId: 30657,
                      },
                    ],
                    quoteId: null,
                    reference: '000001',
                    saleRepCode: null,
                    saleRepId: 33110,
                    timestamp: '7l9/cBIe2wg=',
                    total: -220,
                    totalNet: -200,
                    totalVAT: -20,
                    unpaid: -220,
                    vatTypeId: 1,
                    yourReference: 'poNumber_1',
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1SalesCreditNotesRoute = createRoute({
  method: 'post',
  path: '/v1/salesCreditNotes',
  tags: ['SalesCreditNotes'],
  summary: 'Creates a new Sales Credit Note.',
  operationId: 'SalesCreditNotes_Post',
  request: {
    body: {
      description: 'Information of Sales Credit Note to create.',
      content: { 'application/json': { schema: SalesInvoiceCreditNoteDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1SalesCreditNotesBatchRoute = createRoute({
  method: 'put',
  path: '/v1/salesCreditNotes/batch',
  tags: ['SalesCreditNotes'],
  summary: 'Processes a batch of Sales Credit Notes.',
  operationId: 'SalesCreditNotes_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Sales Credit Notes to process.',
      content: {
        'application/json': { schema: z.array(BatchItemSalesInvoiceCreditNoteDtoSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesCreditNotesIdRoute = createRoute({
  method: 'get',
  path: '/v1/salesCreditNotes/{id}',
  tags: ['SalesCreditNotes'],
  summary: 'Returns information about a single Sales Credit Note.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Credit Note to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SalesInvoiceCreditNoteDtoSchema,
          examples: {
            response: {
              value: {
                acCode: 'CUS3',
                bookTranTypeId: 7,
                customFields: [
                  { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                  { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
                ],
                customerId: 70585,
                deliveryTo: ['dt_1', 'dt_2'],
                details: 'detail_1',
                entryDate: '2016-06-01T00:00:00',
                id: 75813,
                loType: '1',
                netGoods: null,
                netServices: null,
                note: 'Customer 3',
                ourReference: 'ddNumber_1',
                procDate: '2016-06-24T00:00:00',
                productTrans: [
                  {
                    acEntries: [
                      {
                        accountCode: 'SA02',
                        analysisCategoryId: 40889,
                        description: 'AnCat1',
                        id: 73455,
                        value: -200,
                      },
                    ],
                    amount: -220,
                    amountNet: -200,
                    id: 51820,
                    percentage: 10,
                    productCode: 'PRO2',
                    productId: 20108,
                    quantity: -1,
                    tranNotes: ['tn_1', 'tn_2'],
                    unitPrice: 200,
                    vat: -20,
                    vatAnalysisTypeId: 0,
                    vatRateId: 30657,
                  },
                ],
                quoteId: null,
                reference: '000001',
                saleRepCode: null,
                saleRepId: 33110,
                timestamp: 'ksKBcBIe2wg=',
                total: -220,
                totalNet: -200,
                totalVAT: -20,
                unpaid: -220,
                vatTypeId: 1,
                yourReference: 'poNumber_1',
              },
            },
          },
        },
      },
    },
  },
})

export const putV1SalesCreditNotesIdRoute = createRoute({
  method: 'put',
  path: '/v1/salesCreditNotes/{id}',
  tags: ['SalesCreditNotes'],
  summary: 'Updates an existing Sales Credit Note.',
  operationId: 'SalesCreditNotes_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Credit Note to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Sales Credit Note to update.',
      content: { 'application/json': { schema: SalesInvoiceCreditNoteDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1SalesCreditNotesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/salesCreditNotes/{id}',
  tags: ['SalesCreditNotes'],
  summary: 'Removes an existing Sales Credit Note.',
  operationId: 'SalesCreditNotes_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Credit Note to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Sales Credit Note to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesEntriesRoute = createRoute({
  method: 'get',
  path: '/v1/salesEntries',
  tags: ['SalesEntries'],
  summary:
    'Returns a list of company\'s Sales Entries. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'SalesEntries_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultSalesEntryQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'code',
                    acEntries: [
                      {
                        accountCode: 'SA01',
                        analysisCategoryId: 40888,
                        description: 'SAL 1',
                        id: 73450,
                        value: 636.36,
                      },
                    ],
                    bookTranTypeId: 5,
                    customFields: [
                      { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                      { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
                    ],
                    customerId: 70583,
                    detailCollection: [],
                    details: 'detail_1',
                    entryDate: '2011-01-01T00:00:00',
                    id: 1,
                    netGoods: 0,
                    netServices: 0,
                    note: 'Customer 1',
                    procDate: '2011-01-01T00:00:00',
                    reference: '000001',
                    timestamp: '9ySEcBIe2wg=',
                    total: 700,
                    totalNet: 636.36,
                    totalVAT: 63.64,
                    unpaid: 0,
                    vatEntries: [{ amount: 636.36, id: 63649, percentage: 10, vatRateId: 30657 }],
                    vatTypeId: 1,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1SalesEntriesRoute = createRoute({
  method: 'post',
  path: '/v1/salesEntries',
  tags: ['SalesEntries'],
  summary: 'Creates a new Sales Entry.',
  operationId: 'SalesEntries_Post',
  request: {
    body: {
      description: 'Information of Sales Entry to create.',
      content: { 'application/json': { schema: SalesEntryDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1SalesEntriesBatchRoute = createRoute({
  method: 'put',
  path: '/v1/salesEntries/batch',
  tags: ['SalesEntries'],
  summary: 'Processes a batch of Sales Entries.',
  operationId: 'SalesEntries_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Sales Entries to process.',
      content: { 'application/json': { schema: z.array(BatchItemSalesEntryDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesEntriesIdRoute = createRoute({
  method: 'get',
  path: '/v1/salesEntries/{id}',
  tags: ['SalesEntries'],
  summary: 'Returns information about a single Sales Entry.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Entry to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SalesEntryDtoSchema,
          examples: {
            response: {
              value: {
                acCode: 'code',
                acEntries: [
                  {
                    accountCode: 'SA01',
                    analysisCategoryId: 40888,
                    description: 'SAL 1',
                    id: 73450,
                    value: 636.36,
                  },
                ],
                bookTranTypeId: 5,
                customFields: [
                  { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                  { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
                ],
                customerId: 70583,
                detailCollection: [],
                details: 'detail_1',
                entryDate: '2011-01-01T00:00:00',
                id: 1,
                netGoods: 0,
                netServices: 0,
                note: 'Customer 1',
                procDate: '2011-01-01T00:00:00',
                reference: '000001',
                timestamp: 'wumIcBIe2wg=',
                total: 700,
                totalNet: 636.36,
                totalVAT: 63.64,
                unpaid: 0,
                vatEntries: [{ amount: 636.36, id: 63649, percentage: 10, vatRateId: 30657 }],
                vatTypeId: 1,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1SalesEntriesIdRoute = createRoute({
  method: 'put',
  path: '/v1/salesEntries/{id}',
  tags: ['SalesEntries'],
  summary: 'Updates an existing Sales Entry.',
  operationId: 'SalesEntries_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Entry to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Sales Entry to update.',
      content: { 'application/json': { schema: SalesEntryDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1SalesEntriesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/salesEntries/{id}',
  tags: ['SalesEntries'],
  summary: 'Removes an existing Sales Entry.',
  operationId: 'SalesEntries_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Entry to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Sales Entry to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesInvoicesRoute = createRoute({
  method: 'get',
  path: '/v1/salesInvoices',
  tags: ['SalesInvoices'],
  summary:
    'Returns a list of company\'s Sales Invoices. Supports OData querying protocol.\r\nFiltering is allowed by "entryDate" field.\r\nOrdering is allowed by "id" field.',
  operationId: 'SalesInvoices_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultSalesInvoiceQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    acCode: 'CUS3',
                    bookTranTypeId: 7,
                    customFields: [
                      { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                      { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
                    ],
                    customerId: 70585,
                    deliveryTo: ['dt_1', 'dt_2'],
                    details: 'detail_1',
                    entryDate: '2016-06-01T00:00:00',
                    id: 75813,
                    loType: '1',
                    netGoods: null,
                    netServices: null,
                    note: 'Customer 3',
                    ourReference: 'ddNumber_1',
                    procDate: '2016-06-24T00:00:00',
                    productTrans: [
                      {
                        acEntries: [
                          {
                            accountCode: 'SA02',
                            analysisCategoryId: 40889,
                            description: 'AnCat1',
                            id: 73455,
                            value: -200,
                          },
                        ],
                        amount: -220,
                        amountNet: -200,
                        id: 51820,
                        percentage: 10,
                        productCode: 'PRO2',
                        productId: 20108,
                        quantity: -1,
                        tranNotes: ['tn_1', 'tn_2'],
                        unitPrice: 200,
                        vat: -20,
                        vatAnalysisTypeId: 0,
                        vatRateId: 30657,
                      },
                    ],
                    quoteId: null,
                    reference: '000001',
                    saleRepCode: null,
                    saleRepId: 33110,
                    timestamp: 'XUyLcBIe2wg=',
                    total: -220,
                    totalNet: -200,
                    totalVAT: -20,
                    unpaid: -220,
                    vatTypeId: 1,
                    yourReference: 'poNumber_1',
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1SalesInvoicesRoute = createRoute({
  method: 'post',
  path: '/v1/salesInvoices',
  tags: ['SalesInvoices'],
  summary: 'Creates a new Sales Invoice.',
  operationId: 'SalesInvoices_Post',
  request: {
    body: {
      description: 'Information of Sales Invoice to create.',
      content: { 'application/json': { schema: SalesInvoiceCreditNoteDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1SalesInvoicesBatchRoute = createRoute({
  method: 'put',
  path: '/v1/salesInvoices/batch',
  tags: ['SalesInvoices'],
  summary: 'Processes a batch of Sales Invoices.',
  operationId: 'SalesInvoices_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Sales Invoices to process.',
      content: {
        'application/json': { schema: z.array(BatchItemSalesInvoiceCreditNoteDtoSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postV1SalesInvoicesCreateSaleInvoiceWithGeneratingReferenceRoute = createRoute({
  method: 'post',
  path: '/v1/salesInvoices/createSaleInvoiceWithGeneratingReference',
  tags: ['SalesInvoices'],
  summary: 'Creates a new Sale Invoice with auto generating reference.',
  operationId: 'SalesInvoices_Post_CreateSaleInvoiceWithGeneratingReference',
  request: {
    body: {
      description: 'Information of Sale Invoice to create.',
      content: { 'application/json': { schema: SalesInvoiceCreditNoteDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesInvoicesIdRoute = createRoute({
  method: 'get',
  path: '/v1/salesInvoices/{id}',
  tags: ['SalesInvoices'],
  summary: 'Returns information about a single Sales Invoice.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Invoice to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SalesInvoiceCreditNoteDtoSchema,
          examples: {
            response: {
              value: {
                acCode: 'CUS3',
                bookTranTypeId: 7,
                customFields: [
                  { description: 'acudf_1', id: 1, userDefinedFieldId: 1, value: 'acudfv_1' },
                  { description: 'acudf_2', id: 2, userDefinedFieldId: 1, value: 'acudfv_2' },
                ],
                customerId: 70585,
                deliveryTo: ['dt_1', 'dt_2'],
                details: 'detail_1',
                entryDate: '2016-06-01T00:00:00',
                id: 75813,
                loType: '1',
                netGoods: null,
                netServices: null,
                note: 'Customer 3',
                ourReference: 'ddNumber_1',
                procDate: '2016-06-24T00:00:00',
                productTrans: [
                  {
                    acEntries: [
                      {
                        accountCode: 'SA02',
                        analysisCategoryId: 40889,
                        description: 'AnCat1',
                        id: 73455,
                        value: -200,
                      },
                    ],
                    amount: -220,
                    amountNet: -200,
                    id: 51820,
                    percentage: 10,
                    productCode: 'PRO2',
                    productId: 20108,
                    quantity: -1,
                    tranNotes: ['tn_1', 'tn_2'],
                    unitPrice: 200,
                    vat: -20,
                    vatAnalysisTypeId: 0,
                    vatRateId: 30657,
                  },
                ],
                quoteId: null,
                reference: '000001',
                saleRepCode: null,
                saleRepId: 33110,
                timestamp: 'XUyLcBIe2wg=',
                total: -220,
                totalNet: -200,
                totalVAT: -20,
                unpaid: -220,
                vatTypeId: 1,
                yourReference: 'poNumber_1',
              },
            },
          },
        },
      },
    },
  },
})

export const putV1SalesInvoicesIdRoute = createRoute({
  method: 'put',
  path: '/v1/salesInvoices/{id}',
  tags: ['SalesInvoices'],
  summary: 'Updates an existing Sales Invoice.',
  operationId: 'SalesInvoices_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Invoice to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Sales Invoice to update.',
      content: { 'application/json': { schema: SalesInvoiceCreditNoteDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1SalesInvoicesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/salesInvoices/{id}',
  tags: ['SalesInvoices'],
  summary: 'Removes an existing Sales Invoice.',
  operationId: 'SalesInvoices_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sales Invoice to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Sales Invoice to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesRepsRoute = createRoute({
  method: 'get',
  path: '/v1/salesReps',
  tags: ['SalesRep'],
  summary:
    'Returns a list of company\'s SaleRep.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id".',
  operationId: 'SalesRep_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultSaleRepsDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    code: 'SR0001',
                    companyId: 123456,
                    email: 'example@gmail.com',
                    id: 1,
                    name: 'Sales Rep 1',
                    phone: '1234567890',
                    timeStamp: '6RCQcBIe2wg=',
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1SalesRepsRoute = createRoute({
  method: 'post',
  path: '/v1/salesReps',
  tags: ['SalesRep'],
  summary: 'Creates a new SaleRep.',
  operationId: 'SalesRep_Post',
  request: {
    body: {
      description: 'Information of Sale Rep to create.',
      content: { 'application/json': { schema: SaleRepsDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1SalesRepsBatchRoute = createRoute({
  method: 'put',
  path: '/v1/salesReps/batch',
  tags: ['SalesRep'],
  summary: 'Processes a batch of Sale Rep.',
  operationId: 'SalesRep_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Sale Rep to process.',
      content: { 'application/json': { schema: z.array(BatchItemSaleRepsDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SalesRepsIdRoute = createRoute({
  method: 'get',
  path: '/v1/salesReps/{id}',
  tags: ['SalesRep'],
  summary: 'Returns information about a single SaleRep.',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sale Rep to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SaleRepsDtoSchema } } },
  },
})

export const putV1SalesRepsIdRoute = createRoute({
  method: 'put',
  path: '/v1/salesReps/{id}',
  tags: ['SalesRep'],
  summary: 'Updates an existing Sale Rep.',
  operationId: 'SalesRep_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sale Rep to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Sale Rep to update.',
      content: { 'application/json': { schema: SaleRepsDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1SalesRepsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/salesReps/{id}',
  tags: ['SalesRep'],
  summary: 'Removes an existing Sale Rep.',
  operationId: 'SalesRep_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Sale Rep to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Sale Rep to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SuppliersRoute = createRoute({
  method: 'get',
  path: '/v1/suppliers',
  tags: ['Suppliers'],
  summary:
    'Returns a list of company\'s Suppliers. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" and "code" fields.',
  operationId: 'Suppliers_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultSupplierQueryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 1,
                Items: [
                  {
                    accountName: 'Supplier Bank Acc',
                    accountNumber: '12345678',
                    additionalEmails: ['email2@example.com', 'email3@example.com'],
                    address: ['Address Line 1', 'Address Line 2'],
                    authCode: 'VATEXCODE222',
                    bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
                    businessIdentifierCode: null,
                    code: 'S001',
                    contact: 'John Smith',
                    eFTReference: 'Reference',
                    email: 'supplier@email.com',
                    fax: '1234567890',
                    id: 10589,
                    internationalBankAccountNumber: null,
                    mobile: '1234567890',
                    name: 'Supplier Name',
                    ourCode: 'OURCODE111',
                    ownerTypeId: 3,
                    phone: '1234596970',
                    postponedAccounting: false,
                    timestamp: 'aHOScBIe2wg=',
                    vatAnalysisTypeId: 1,
                    vatReg: 'VATCODE0001',
                    vatType: 2,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1SuppliersRoute = createRoute({
  method: 'post',
  path: '/v1/suppliers',
  tags: ['Suppliers'],
  summary: 'Creates a new Supplier.',
  operationId: 'Suppliers_Post',
  request: {
    body: {
      description: 'Information of Supplier to create.',
      content: { 'application/json': { schema: SupplierDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putV1SuppliersBatchRoute = createRoute({
  method: 'put',
  path: '/v1/suppliers/batch',
  tags: ['Suppliers'],
  summary: 'Processes a batch of Suppliers.',
  operationId: 'Suppliers_ProcessBatch',
  request: {
    body: {
      description: 'Batch of Suppliers to process.',
      content: { 'application/json': { schema: z.array(BatchItemSupplierDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SuppliersIdRoute = createRoute({
  method: 'get',
  path: '/v1/suppliers/{id}',
  tags: ['Suppliers'],
  summary:
    "Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.",
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Supplier to return.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      needBalance: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If "true" then Supplier\'s ledger balance will be calculated; otherwise balance will be returned as 0.',
            in: 'query',
            name: 'needBalance',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SupplierDtoSchema,
          examples: {
            response: {
              value: {
                accountName: 'Supplier Bank Acc',
                accountNumber: '12345678',
                additionalEmails: ['email2@example.com', 'email3@example.com'],
                address: ['Address Line 1', 'Address Line 2'],
                authCode: 'VATEXCODE222',
                bank: { branch: 'Bank', id: 1, name: 'bank Name', sortCode: 'B01' },
                businessIdentifierCode: null,
                code: 'S001',
                contact: 'John Smith',
                eFTReference: 'Reference',
                email: 'supplier@email.com',
                fax: '1234567890',
                id: 10589,
                internationalBankAccountNumber: null,
                mobile: '1234567890',
                name: 'Supplier Name',
                ourCode: 'OURCODE111',
                ownerTypeId: 3,
                phone: '1234596970',
                postponedAccounting: false,
                timestamp: '4jeXcBIe2wg=',
                vatAnalysisTypeId: 1,
                vatReg: 'VATCODE0001',
                vatType: 2,
              },
            },
          },
        },
      },
    },
  },
})

export const putV1SuppliersIdRoute = createRoute({
  method: 'put',
  path: '/v1/suppliers/{id}',
  tags: ['Suppliers'],
  summary: 'Updates an existing Supplier.',
  operationId: 'Suppliers_Put',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Supplier to update.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Information of Supplier to update.',
      content: { 'application/json': { schema: SupplierDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const deleteV1SuppliersIdRoute = createRoute({
  method: 'delete',
  path: '/v1/suppliers/{id}',
  tags: ['Suppliers'],
  summary: 'Removes an existing Supplier.',
  operationId: 'Suppliers_Delete',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Supplier to remove.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'Timestamp of Supplier to remove. Should be encoded in Base64.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1SuppliersItemIdAccountTransRoute = createRoute({
  method: 'get',
  path: '/v1/suppliers/{itemId}/accountTrans',
  tags: ['Suppliers'],
  summary: "Returns a list of Supplier's account transactions.",
  operationId: 'Suppliers_GetAccountTrans',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Supplier to return account transaction.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(AccountTranDtoSchema),
          examples: {
            response: {
              value: [
                {
                  bookTranId: 0,
                  bookTranTypeId: 0,
                  bookTransactionReference: 'O/Bal',
                  bookTypeDesc: 'Opening Balance',
                  credit: 0,
                  debit: 30,
                  id: 2,
                  procDate: '2012-12-31T00:00:00',
                },
                {
                  bookTranId: 0,
                  bookTranTypeId: 0,
                  bookTransactionReference: '0000001',
                  bookTypeDesc: 'Bank Payment',
                  credit: 0,
                  debit: 10,
                  id: 9,
                  procDate: '2012-12-31T00:00:00',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getV1SuppliersItemIdOpeningBalanceRoute = createRoute({
  method: 'get',
  path: '/v1/suppliers/{itemId}/openingBalance',
  tags: ['Suppliers'],
  summary:
    "Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.",
  operationId: 'Suppliers_GetOpeningBalance',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Supplier to return opening balances.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OwnerOpeningBalanceInPeriodsDtoSchema,
          examples: {
            response: {
              value: { currentMonth: 10, oneMonthOld: 20, threeMonthsOld: 40, twoMonthsOld: 30 },
            },
          },
        },
      },
    },
  },
})

export const getV1SuppliersItemIdOpeningBalanceListRoute = createRoute({
  method: 'get',
  path: '/v1/suppliers/{itemId}/openingBalanceList',
  tags: ['Suppliers'],
  summary: "Returns a list of Supplier's opening balance transactions.",
  operationId: 'Suppliers_GetOpeningBalanceList',
  request: {
    params: z.object({
      itemId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of Supplier to return opening balances transaction.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(OwnerOpeningBalanceDtoSchema),
          examples: {
            response: {
              value: [
                {
                  entryDate: '2011-01-01T00:00:00',
                  id: 1,
                  procDate: '2011-02-01T00:00:00',
                  reference: 'O/Bal',
                  timestamp: 'OJqZcBIe2wg=',
                  total: 10,
                  totalVAT: 1.3,
                  unpaid: 0,
                  vatEntries: [{ amount: 8.7, vatRateId: 1 }],
                },
                {
                  entryDate: '2011-01-01T00:00:00',
                  id: 2,
                  procDate: '2011-02-01T00:00:00',
                  reference: 'O/Bal',
                  timestamp: 'OJqZcBIe2wg=',
                  total: 20,
                  totalVAT: 3.33,
                  unpaid: 0,
                  vatEntries: [{ amount: 16.77, vatRateId: 2 }],
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getV1UserDefinedFieldsRoute = createRoute({
  method: 'get',
  path: '/v1/userDefinedFields',
  tags: ['UserDefinedFields'],
  summary:
    'Returns a list of company\'s User Defined Fields. Supports OData querying protocol.\r\nFiltering is allowed by "categoryTypeId" field.\r\nOrdering is allowed by "id" and "orderIndex" fields.',
  operationId: 'UserDefinedFields_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultUserDefinedFieldDtoSchema,
          examples: {
            response: {
              value: {
                Count: 5,
                Items: [
                  { categoryTypeId: 19, description: 'acudf_1_1', id: 1, orderIndex: 1 },
                  { categoryTypeId: 19, description: 'acudf_1_2', id: 2, orderIndex: 2 },
                  { categoryTypeId: 19, description: 'acudf_1_3', id: 3, orderIndex: 3 },
                  { categoryTypeId: 17, description: 'acudf_3', id: 5, orderIndex: 1 },
                  { categoryTypeId: 20, description: 'acudf_2', id: 4, orderIndex: 1 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1VatAnalysisTypesRoute = createRoute({
  method: 'get',
  path: '/v1/vatAnalysisTypes',
  tags: ['VatAnalysisTypes'],
  summary:
    'Returns a list of global Vat Analysis Types. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'VatAnalysisTypes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultVatAnalysisTypeDtoSchema,
          examples: {
            response: {
              value: {
                Count: 3,
                Items: [
                  { description: 'None', id: 0 },
                  { description: 'Goods', id: 1 },
                  { description: 'Services', id: 2 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1VatCategoriesRoute = createRoute({
  method: 'get',
  path: '/v1/vatCategories',
  tags: ['VatCategories'],
  summary:
    'Returns a list of global Vat Categories. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'VatCategories_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultVatCategoryDtoSchema,
          examples: {
            response: {
              value: {
                Count: 3,
                Items: [
                  { description: 'Purchases For Resale', id: 1 },
                  { description: 'Purchases Not For Resale', id: 2 },
                  { description: 'Sales', id: 3 },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const postV1VatCategoriesVatRatesRoute = createRoute({
  method: 'post',
  path: '/v1/vatCategories/vatRates',
  tags: ['VatCategories'],
  summary: 'Process Vat Rates',
  operationId: 'VatCategories_ProcessVatRates',
  request: {
    body: {
      description: 'Array of Vat Rates.',
      content: { 'application/json': { schema: z.array(VatRatesByVatCategoryDtoSchema) } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getV1VatRatesRoute = createRoute({
  method: 'get',
  path: '/v1/vatRates',
  tags: ['VatRates'],
  summary:
    'Returns a list of company\'s Vat Rates. Supports OData querying protocol.\r\nFiltering is allowed by "vatCategoryId" field.\r\nOrdering is allowed by "id" and "orderIndex" fields.',
  operationId: 'VatRates_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultVatRateDtoSchema,
          examples: {
            response: {
              value: {
                Count: 4,
                Items: [
                  {
                    id: 2,
                    isActive: true,
                    isDefault: false,
                    orderIndex: 2,
                    percentage: 20,
                    timestamp: null,
                    vatCategoryId: 3,
                  },
                  {
                    id: 3,
                    isActive: true,
                    isDefault: false,
                    orderIndex: 1,
                    percentage: 25,
                    timestamp: null,
                    vatCategoryId: 1,
                  },
                  {
                    id: 1,
                    isActive: true,
                    isDefault: true,
                    orderIndex: 1,
                    percentage: 15,
                    timestamp: null,
                    vatCategoryId: 3,
                  },
                  {
                    id: 4,
                    isActive: true,
                    isDefault: false,
                    orderIndex: 4,
                    percentage: 30,
                    timestamp: null,
                    vatCategoryId: 4,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getV1VatTypesRoute = createRoute({
  method: 'get',
  path: '/v1/vatTypes',
  tags: ['VatTypes'],
  summary:
    'Returns a list of global Vat Types. Supports OData querying protocol.\r\nFiltering is forbidden.\r\nOrdering is allowed by "id" field.',
  operationId: 'VatTypes_Get',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PageResultVatTypeDtoSchema,
          examples: {
            response: {
              value: {
                Count: 6,
                Items: [
                  {
                    code: '',
                    description: 'Domestic',
                    id: 1,
                    isNotApplicable: false,
                    isOnlyZero: false,
                  },
                  {
                    code: 'E',
                    description: 'Other EU',
                    id: 2,
                    isNotApplicable: false,
                    isOnlyZero: false,
                  },
                  {
                    code: 'F',
                    description: 'Foreign - Non EU',
                    id: 3,
                    isNotApplicable: false,
                    isOnlyZero: false,
                  },
                  {
                    code: 'X',
                    description: 'VAT Exempt',
                    id: 4,
                    isNotApplicable: false,
                    isOnlyZero: true,
                  },
                  {
                    code: 'N',
                    description: 'Not Applicable',
                    id: 5,
                    isNotApplicable: true,
                    isOnlyZero: false,
                  },
                  {
                    code: 'R',
                    description: 'Reverse Charge',
                    id: 6,
                    isNotApplicable: false,
                    isOnlyZero: false,
                  },
                ],
                NextPageLink: '',
              },
            },
          },
        },
      },
    },
  },
})
