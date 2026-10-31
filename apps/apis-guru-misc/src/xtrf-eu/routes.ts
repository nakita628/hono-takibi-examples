import { createRoute, z } from '@hono/zod-openapi'

type ContentDispositionType = {
  creationDate?: string
  fileName?: string
  modificationDate?: string
  parameters?: { [key: string]: string }
  readDate?: string
  size?: bigint
  type?: string
}

const ContentDispositionSchema: z.ZodType<ContentDispositionType> = z
  .object({
    creationDate: z.iso.datetime({ offset: true }).exactOptional(),
    fileName: z.string().exactOptional(),
    modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
    parameters: z.record(z.string(), z.string()).exactOptional(),
    readDate: z.iso.datetime({ offset: true }).exactOptional(),
    size: z
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
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContentDisposition')

type MessageBodyWorkersType = { [key: string]: unknown }

const MessageBodyWorkersSchema: z.ZodType<MessageBodyWorkersType> = z
  .object({})
  .openapi('MessageBodyWorkers')

const MultiPartSchema: z.ZodType<MultiPartType> = z
  .lazy(() =>
    z
      .object({
        bodyParts: z.array(BodyPartSchema).exactOptional(),
        contentDisposition: ContentDispositionSchema.exactOptional(),
        entity: z.object({}).exactOptional(),
        headers: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(z.string()))
          .exactOptional(),
        mediaType: z
          .object({
            parameters: z.record(z.string(), z.string()).exactOptional(),
            subtype: z.string().exactOptional(),
            type: z.string().exactOptional(),
            wildcardSubtype: z.boolean().exactOptional(),
            wildcardType: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
        parameterizedHeaders: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(ParameterizedHeaderSchema))
          .exactOptional(),
        parent: MultiPartSchema.exactOptional(),
        providers: z.object({}).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('MultiPart')

type BodyPartType = {
  contentDisposition?: z.infer<typeof ContentDispositionSchema>
  entity?: { [key: string]: unknown }
  headers?: { empty?: boolean }
  mediaType?: {
    parameters?: { [key: string]: string }
    subtype?: string
    type?: string
    wildcardSubtype?: boolean
    wildcardType?: boolean
  }
  messageBodyWorkers?: z.infer<typeof MessageBodyWorkersSchema>
  parameterizedHeaders?: { empty?: boolean }
  parent?: z.infer<typeof MultiPartSchema>
  providers?: { [key: string]: unknown }
}

const BodyPartSchema: z.ZodType<BodyPartType> = z
  .lazy(() =>
    z
      .object({
        contentDisposition: ContentDispositionSchema.exactOptional(),
        entity: z.object({}).exactOptional(),
        headers: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(z.string()))
          .exactOptional(),
        mediaType: z
          .object({
            parameters: z.record(z.string(), z.string()).exactOptional(),
            subtype: z.string().exactOptional(),
            type: z.string().exactOptional(),
            wildcardSubtype: z.boolean().exactOptional(),
            wildcardType: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
        parameterizedHeaders: z
          .object({ empty: z.boolean().exactOptional() })
          .catchall(z.array(ParameterizedHeaderSchema))
          .exactOptional(),
        parent: MultiPartSchema.exactOptional(),
        providers: z.object({}).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('BodyPart')

type MultiPartType = {
  bodyParts?: z.infer<typeof BodyPartSchema>[]
  contentDisposition?: z.infer<typeof ContentDispositionSchema>
  entity?: { [key: string]: unknown }
  headers?: { empty?: boolean }
  mediaType?: {
    parameters?: { [key: string]: string }
    subtype?: string
    type?: string
    wildcardSubtype?: boolean
    wildcardType?: boolean
  }
  messageBodyWorkers?: z.infer<typeof MessageBodyWorkersSchema>
  parameterizedHeaders?: { empty?: boolean }
  parent?: MultiPartType
  providers?: { [key: string]: unknown }
}

type ParameterizedHeaderType = { parameters?: { [key: string]: string }; value?: string }

const LocalSettingsDTOSchema = z
  .object({ maxLinesInRow: z.int32().exactOptional(), maxRows: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalSettingsDTO')

type SettingsDTOType = { local?: z.infer<typeof LocalSettingsDTOSchema>; name?: string }

const AccessDTOSchema = z
  .object({ change: z.boolean().exactOptional(), delete: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccessDTO')

const AccessTokenDTOSchema = z
  .object({ token: z.string().exactOptional(), url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccessTokenDTO')

const AccessTokenRequestDTOSchema = z
  .object({ loginOrEmail: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccessTokenRequestDTO')

const ActionDTOSchema = z
  .object({ header: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ActionDTO')

const ActionStartedDTOSchema = z
  .object({
    actionId: z.string().exactOptional(),
    resultUrl: z.string().exactOptional(),
    statusUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActionStartedDTO')

const ActiveSubscriptionDTOSchema = z
  .object({
    embed: z
      .string()
      .exactOptional()
      .openapi({ description: 'additional fields which should be embedded in the event' }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'event to which you want to subscribe' }),
    filter: z
      .string()
      .exactOptional()
      .openapi({ description: "filter expression in the form 'attribute=value'" }),
    subscriptionId: z.string().exactOptional().openapi({ description: 'subscription identifier' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'url that will be invoked by XTRF on event' }),
  })
  .openapi({ required: [] })
  .openapi('ActiveSubscriptionDTO')

const ExternalInfoSchema = z
  .object({ steps: z.array(z.record(z.string(), z.string())).exactOptional() })
  .openapi({ required: [] })
  .openapi('ExternalInfo')

const AddJobToProcessDTOSchema = z
  .object({
    externalInfo: ExternalInfoSchema.exactOptional(),
    externalProjectId: z.string().exactOptional(),
    previousStepNumber: z.int32().exactOptional(),
    stepTypeId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddJobToProcessDTO')

const AddressDTOSchema = z
  .object({
    addressLine1: z.string().exactOptional().openapi({ description: 'first line of address' }),
    addressLine2: z.string().exactOptional().openapi({ description: 'second line of address' }),
    city: z.string().exactOptional().openapi({ description: 'city' }),
    countryId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'country' }),
    postalCode: z.string().exactOptional().openapi({ description: 'postal code' }),
    provinceId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'province' }),
    sameAsBillingAddress: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should billing address be used instead of this one' }),
  })
  .openapi({ required: [] })
  .openapi('AddressDTO')

const AssignVendorDTOSchema = z
  .object({
    recalculateRates: z.boolean().exactOptional(),
    vendorPriceProfileId: z
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
  .openapi('AssignVendorDTO')

const BigDecimalDTOSchema = z
  .object({ value: z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('BigDecimalDTO')

const CATToolProjectDTOSchema = z
  .object({ projectCreatedInCatToolOrCreationIsQueued: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('CATToolProjectDTO')

const CalculationUnitDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    canBeUsedInCatAnalysis: z.boolean().exactOptional(),
    catQuantityConversionExpression: z.string().exactOptional(),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
    exchangeRatio: z.number().exactOptional(),
    fileStatsConversionExpression: z.string().exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    jobTypeIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
    symbol: z.string().exactOptional(),
    timeToQuantityConversionExpression: z.string().exactOptional(),
    type: z.enum(['TIME', 'VOLUME', 'PERCENT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CalculationUnitDTO')

const CategoriesDTOSchema = z
  .object({ empty: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('CategoriesDTO')

const CategoryDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
    supportedClasses: z
      .array(
        z
          .enum([
            'PROJECT',
            'QUOTE',
            'QUOTE_TASK',
            'TASK',
            'PROVIDER',
            'CUSTOMER',
            'CUSTOMER_PERSON',
            'PROVIDER_PERSON',
            'FINANCIAL_REPORT',
            'REMINDER',
            'PROVIDER_INVOICE',
            'CUSTOMER_INVOICE',
            'PROJECT_GROUP',
          ])
          .openapi({ description: 'set of types for which this category can be selected' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'set of types for which this category can be selected' }),
  })
  .openapi({
    description:
      'group of things (ie. customers or projects) similar in some way (ie. VIP customers)',
    required: [],
  })
  .openapi('CategoryDTO')

const ChargeLanguageCombinationDTOSchema = z
  .object({
    sourceLanguageId: z
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
    targetLanguageId: z
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
  .openapi('ChargeLanguageCombinationDTO')

const ChargeDTOSchema = z
  .object({
    calculationUnitId: z
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
    ignoreMinimumCharge: z.boolean().exactOptional(),
    invoiceId: z.string().exactOptional(),
    jobTypeId: z
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
    languageCombination: ChargeLanguageCombinationDTOSchema.exactOptional(),
    languageCombinationIdNumber: z.string().exactOptional(),
    minimumCharge: z.number().exactOptional(),
    rateOrigin: z
      .enum(['PRICE_PROFILE', 'PRICE_LIST', 'FILLED_MANUALLY', 'AUTOCALCULATED'])
      .exactOptional(),
    total: z.number().exactOptional(),
    type: z.enum(['SIMPLE', 'CAT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChargeDTO')

const ContactsDTOSchema = z
  .object({
    additionalIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    primaryId: z
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
    sendBackToId: z
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
  .openapi('ContactsDTO')

const ResponsiblePersonsDTOSchema = z
  .object({
    projectCoordinatorId: z
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
    projectManagerId: z
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
  .openapi('ResponsiblePersonsDTO')

const ClassicPeopleDTOSchema = z
  .object({
    customerContacts: ContactsDTOSchema.exactOptional(),
    responsiblePersons: ResponsiblePersonsDTOSchema.exactOptional(),
  })
  .openapi({ description: 'people', required: [] })
  .openapi('ClassicPeopleDTO')

const TimeDTOSchema = z
  .object({
    value: z
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
  .openapi('TimeDTO')

const ProjectDatesDTOSchema = z
  .object({
    actualDeliveryDate: TimeDTOSchema.exactOptional(),
    actualStartDate: TimeDTOSchema.exactOptional(),
    deadline: TimeDTOSchema.exactOptional(),
    startDate: TimeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectDatesDTO')

const TaskFileDTOSchema = z
  .object({
    category: z
      .enum(['WORKFILE', 'TM', 'DICTIONARY', 'REF', 'LOG_FILE'])
      .exactOptional()
      .openapi({ description: 'file category' }),
    content: z.string().exactOptional(),
    name: z.string().exactOptional(),
    token: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({
    description: 'describes files; remember that either url, content or token should be filled',
    required: [],
  })
  .openapi('TaskFileDTO')

const InstructionsDTOSchema = z
  .object({
    forProvider: z.string().exactOptional(),
    fromCustomer: z.string().exactOptional(),
    internal: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    paymentNoteForCustomer: z.string().exactOptional(),
    paymentNoteForVendor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InstructionsDTO')

const ClassicProjectCreateDTOSchema = z
  .object({
    categoriesIds: z
      .array(
        z
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
            description: 'list of language categories',
          }),
      )
      .exactOptional()
      .openapi({ description: 'list of language categories' }),
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
      .openapi({ type: 'integer', format: 'int64' }),
    dates: ProjectDatesDTOSchema.exactOptional(),
    inputFiles: z.array(TaskFileDTOSchema).exactOptional().openapi({ description: 'input files' }),
    instructions: InstructionsDTOSchema.exactOptional(),
    name: z.string().exactOptional(),
    people: ClassicPeopleDTOSchema.exactOptional(),
    serviceId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    sourceLanguageId: z
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
    specializationId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    targetLanguagesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['customerId', 'serviceId', 'specializationId'] })
  .openapi('ClassicProjectCreateDTO')

const JsonNodeSchema = z.object({}).openapi('JsonNode')

const ColumnDTOSchema = z
  .object({ name: z.string().exactOptional(), settings: JsonNodeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ColumnDTO')

const CommonLanguageCombinationDTOSchema = z
  .object({
    sourceLanguageId: z
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
    targetLanguageId: z
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
  .openapi({ description: 'language combination (ie. PL -> EN)', required: [] })
  .openapi('CommonLanguageCombinationDTO')

const CompetenciesDTOSchema = z
  .object({ languageCombinations: z.array(CommonLanguageCombinationDTOSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CompetenciesDTO')

const CustomerContactEmailsDTOSchema = z
  .object({
    additional: z
      .array(z.string().openapi({ description: 'additional e-mails addresses' }))
      .exactOptional()
      .openapi({ description: 'additional e-mails addresses' }),
    cc: z
      .array(z.string().openapi({ description: 'e-mails which will be included in the CC list' }))
      .exactOptional()
      .openapi({ description: 'e-mails which will be included in the CC list' }),
    primary: z.string().openapi({ description: 'primary e-mail' }),
  })
  .openapi({ description: 'emails', required: ['primary'] })
  .openapi('CustomerContactEmailsDTO')

const ContactDTOSchema = z
  .object({
    emails: CustomerContactEmailsDTOSchema.exactOptional(),
    fax: z.string().exactOptional().openapi({ description: 'fax number' }),
    phones: z
      .array(z.string().openapi({ description: "phones' numbers" }))
      .exactOptional()
      .openapi({ description: "phones' numbers" }),
    sms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'mobile phone for which SMS notifications will be sent (if configured)',
      }),
    websites: z
      .array(z.string().openapi({ description: 'websites' }))
      .exactOptional()
      .openapi({ description: 'websites' }),
  })
  .openapi({ required: [] })
  .openapi('ContactDTO')

const CountryDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
    symbol: z.string().exactOptional().openapi({ description: 'specific symbol or abbreviation' }),
  })
  .openapi({ description: 'distinct entity in political geography (ie. Poland)', required: [] })
  .openapi('CountryDTO')

const CurrencyDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    isoCode: z
      .string()
      .exactOptional()
      .openapi({
        description: '<a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 code</a>',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
    symbol: z.string().exactOptional().openapi({ description: 'specific symbol or abbreviation' }),
  })
  .openapi({ description: 'medium of money exchange (ie. euro or dollar)', required: [] })
  .openapi('CurrencyDTO')

const CurrencyHistoryDTOSchema = z
  .object({
    dateFrom: TimeDTOSchema.exactOptional(),
    exchangeRate: z.string().exactOptional(),
    lastModification: TimeDTOSchema.exactOptional(),
    originDetails: z.string().exactOptional(),
    publicationDate: TimeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CurrencyHistoryDTO')

const CustomFieldDTOSchema = z
  .object({
    key: z.string().exactOptional(),
    name: z.string().exactOptional(),
    type: z
      .enum(['TEXT', 'DATE', 'DATE_AND_TIME', 'NUMBER', 'CHECKBOX', 'SELECTION', 'MULTI_SELECTION'])
      .exactOptional(),
    value: z.object({}).exactOptional(),
  })
  .openapi({ xml: { name: 'customField' }, required: [] })
  .openapi('CustomFieldDTO')

const CustomFieldsDTOSchema = z
  .object({
    customFields: z
      .array(CustomFieldDTOSchema)
      .exactOptional()
      .openapi({ xml: { name: 'customField' } }),
    empty: z.boolean().exactOptional(),
  })
  .openapi({ xml: { name: 'customFields' }, required: [] })
  .openapi('CustomFieldsDTO')

const CustomerTaxNoDTOSchema = z
  .object({
    number: z.string().exactOptional().openapi({ description: 'tax number' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'type (ie. NIP, VAT Reg No, P.IVA) or empty value if unknown' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerTaxNoDTO')

const CustomerAccountingDTOSchema = z
  .object({ taxNumbers: z.array(CustomerTaxNoDTOSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CustomerAccountingDTO')

const PersonContactEmailsDTOSchema = z
  .object({
    additional: z
      .array(z.string().openapi({ description: 'additional e-mails addresses' }))
      .exactOptional()
      .openapi({ description: 'additional e-mails addresses' }),
    primary: z.string().openapi({ description: 'primary e-mail' }),
  })
  .openapi({ description: 'emails', required: ['primary'] })
  .openapi('PersonContactEmailsDTO')

const PersonContactDTOSchema = z
  .object({
    emails: PersonContactEmailsDTOSchema.exactOptional(),
    fax: z.string().exactOptional().openapi({ description: 'fax number' }),
    phones: z
      .array(z.string().openapi({ description: "phones' numbers" }))
      .exactOptional()
      .openapi({ description: "phones' numbers" }),
    sms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'mobile phone for which SMS notifications will be sent (if configured)',
      }),
  })
  .openapi({ required: [] })
  .openapi('PersonContactDTO')

const CustomerPersonDTOSchema = z
  .object({
    active: z.boolean().exactOptional(),
    contact: PersonContactDTOSchema.exactOptional(),
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
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
    firstProjectDate: z.iso.datetime({ offset: true }).exactOptional(),
    firstQuoteDate: z.iso.datetime({ offset: true }).exactOptional(),
    gender: z.enum(['FEMALE', 'MALE']).exactOptional(),
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
    lastName: z.string().exactOptional(),
    lastProjectDate: z.iso.datetime({ offset: true }).exactOptional(),
    lastQuoteDate: z.iso.datetime({ offset: true }).exactOptional(),
    motherTonguesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().exactOptional(),
    numberOfProjects: z.int32().exactOptional(),
    numberOfQuotes: z.int32().exactOptional(),
    positionId: z
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
  .openapi({ description: 'CustomerPerson', required: [] })
  .openapi('CustomerPersonDTO')

const CustomerResponsiblePersonsDTOSchema = z
  .object({
    accountManagerId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'account manager' }),
    projectCoordinatorId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'project coordinator' }),
    projectManagerId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'project manager' }),
    salesPersonId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'sales person' }),
  })
  .openapi({ required: ['projectManagerId', 'salesPersonId'] })
  .openapi('CustomerResponsiblePersonsDTO')

const CustomerDTOSchema = z
  .object({
    accountOnCustomerServer: z.string().exactOptional(),
    accounting: CustomerAccountingDTOSchema.exactOptional(),
    billingAddress: AddressDTOSchema.exactOptional(),
    branchId: z
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
    categoriesIds: z
      .object({ empty: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    clientFirstProjectDate: z.iso.datetime({ offset: true }).exactOptional(),
    clientFirstQuoteDate: z.iso.datetime({ offset: true }).exactOptional(),
    clientLastProjectDate: z.iso.datetime({ offset: true }).exactOptional(),
    clientLastQuoteDate: z.iso.datetime({ offset: true }).exactOptional(),
    clientNumberOfProjects: z.int32().exactOptional(),
    clientNumberOfQuotes: z.int32().exactOptional(),
    contact: ContactDTOSchema.exactOptional(),
    contractNumber: z.string().exactOptional(),
    correspondenceAddress: AddressDTOSchema.exactOptional(),
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
    fullName: z.string().exactOptional(),
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
    idNumber: z.string().exactOptional(),
    industriesIds: z
      .object({ empty: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    leadSourceId: z
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
    limitAccessToPeopleResponsible: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    persons: z.array(CustomerPersonDTOSchema).exactOptional(),
    responsiblePersons: CustomerResponsiblePersonsDTOSchema.exactOptional(),
    salesNotes: z.string().exactOptional(),
    status: z.enum(['ACTIVE', 'INACTIVE', 'POTENTIAL']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerDTO')

const CustomerDetailsDTOSchema = z
  .object({
    addressLine: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    countryId: z
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
    postalCode: z.string().exactOptional(),
    vatUE: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerDetailsDTO')

const CustomerInvoiceCreateDTOSchema = z
  .object({
    prepaymentsIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    tasksIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    type: z.enum(['FINAL', 'DRAFT', 'CREDIT_NOTE']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerInvoiceCreateDTO')

const CustomerInvoiceCreateResultDTOSchema = z
  .object({
    invoiceUrl: z.string().exactOptional(),
    invoicesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerInvoiceCreateResultDTO')

const CustomerInvoiceDatesDTOSchema = z
  .object({
    draftDate: TimeDTOSchema.exactOptional(),
    finalDate: TimeDTOSchema.exactOptional(),
    invoiceDate: TimeDTOSchema.exactOptional(),
    paymentDueDate: TimeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerInvoiceDatesDTO')

const PaymentTermsDTOSchema = z
  .object({ description: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PaymentTermsDTO')

const TaskFinanceDTOSchema = z
  .object({
    invoiceable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'is this task invoiceable or not' }),
  })
  .openapi({ description: 'finance', required: [] })
  .openapi('TaskFinanceDTO')

const TaskJobsDTOSchema = z
  .object({
    jobCount: z.int32().exactOptional(),
    jobIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskJobsDTO')

const TaskDTOSchema = z
  .object({
    clientTaskPONumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'client task PO number' }),
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
    dates: ProjectDatesDTOSchema.exactOptional(),
    finance: TaskFinanceDTOSchema.exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    idNumber: z.string().exactOptional().openapi({ description: 'identifier' }),
    instructions: InstructionsDTOSchema.exactOptional(),
    jobs: TaskJobsDTOSchema.exactOptional(),
    languageCombination: CommonLanguageCombinationDTOSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'name' }),
    people: ClassicPeopleDTOSchema.exactOptional(),
    projectId: z
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
      .openapi({ type: 'integer', format: 'int64', description: "project's internal identifier" }),
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
      .openapi({ type: 'integer', format: 'int64', description: "quote's internal identifier" }),
  })
  .openapi({ required: [] })
  .openapi('TaskDTO')

const CustomerInvoiceDTOSchema = z
  .object({
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
    customerDetails: CustomerDetailsDTOSchema.exactOptional(),
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
    dates: CustomerInvoiceDatesDTOSchema.exactOptional(),
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
    invoiceNumber: z.string().exactOptional(),
    paymentMethodId: z
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
    paymentTerms: PaymentTermsDTOSchema.exactOptional(),
    status: z.enum(['NOT_READY', 'READY', 'SENT']).exactOptional(),
    tasks: z.array(TaskDTOSchema).exactOptional(),
    tasksValue: z.number().exactOptional(),
    totalGross: z.number().exactOptional(),
    totalInWords: z.string().exactOptional(),
    totalNetto: z.number().exactOptional(),
    type: z.enum(['FINAL', 'DRAFT', 'CREDIT_NOTE']).exactOptional(),
    vatCalculationRule: z.enum(['SUM_ITEMS', 'BY_NET_TOTAL']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerInvoiceDTO')

const EventSchema = z
  .object({
    raiseTime: z
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
      .openapi({ type: 'integer', format: 'int64', writeOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Event')

const EventsQueueSchema = z
  .object({
    all: z.array(EventSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    readyToBeDispatched: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventsQueue')

const IdentifierSchema = z
  .object({
    compoundId: z.string().exactOptional(),
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
  .openapi('Identifier')

const DictionaryEntitySchema = z
  .object({
    active: z.boolean().exactOptional(),
    andClearEventsQueue: EventsQueueSchema.exactOptional(),
    auditDisplayName: z.string().exactOptional(),
    auditPath: z.string().exactOptional(),
    classNameKey: z.string().exactOptional(),
    classSimpleName: z.string().exactOptional(),
    compoundId: z.string().exactOptional(),
    defaultEntity: z.boolean().exactOptional(),
    displayName: z.string().exactOptional(),
    entityMarkedAsNotSupposedToBePersisted: z.boolean().exactOptional(),
    eventsQueueReadyToBeDispatched: z.boolean().exactOptional(),
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
    identifier: IdentifierSchema.exactOptional(),
    internalDescription: z.string().exactOptional(),
    lastModificationDate: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string(),
    packedCompoundId: z.string().exactOptional(),
    preferedEntity: z.boolean(),
    preferred: z.boolean().exactOptional(),
    version: z.int32().exactOptional(),
  })
  .openapi({ required: ['name', 'preferedEntity'] })
  .openapi('DictionaryEntity')

const DocumentsDTOSchema = z
  .object({ projectConfirmationStatus: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DocumentsDTO')

const DownloadDocumentsRequestDTOSchema = z
  .object({
    ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DownloadDocumentsRequestDTO')

const EntityWithNameDTOSchema = z
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
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EntityWithNameDTO')

const ExportRequestDTOSchema = z
  .object({
    ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportRequestDTO')

const LanguageCombinationDtoSchema = z
  .object({
    sourceLanguageId: z
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
    targetLanguageId: z
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
  .openapi('LanguageCombinationDto')

const ExternalFileDtoSchema = z
  .object({
    category: z.string().exactOptional(),
    externalInfo: z.record(z.string(), z.string()).exactOptional(),
    filename: z.string().exactOptional(),
    languageCombinationIds: z.array(LanguageCombinationDtoSchema).exactOptional(),
    languageIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalFileDto')

const FileCategorizationDtoSchema = z
  .object({
    category: z.string().exactOptional(),
    fileId: z.string().exactOptional(),
    languageCombinationIds: z.array(LanguageCombinationDtoSchema).exactOptional(),
    languageIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileCategorizationDto')

const FileCategorizationsDtoSchema = z
  .object({ files: z.array(FileCategorizationDtoSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FileCategorizationsDto')

const FileDTOSchema = z
  .object({
    content: z.string().exactOptional(),
    name: z.string().exactOptional(),
    token: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileDTO')

const FileDtoSchema = z
  .object({ fileId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('FileDto')

const FileLinkCategorizationDtoSchema = z
  .object({
    category: z.string().exactOptional(),
    externalInfo: z.record(z.string(), z.string()).exactOptional(),
    filename: z.string().exactOptional(),
    languageCombinationIds: z.array(LanguageCombinationDtoSchema).exactOptional(),
    languageIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    toBeGenerated: z.boolean().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileLinkCategorizationDto')

const FileLinkCategorizationsDtoSchema = z
  .object({ fileLinks: z.array(FileLinkCategorizationDtoSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FileLinkCategorizationsDto')

const FileMetadataDTOSchema = z
  .object({
    categoryKey: z.string().exactOptional(),
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
    lastModifiedOn: z
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
    size: z
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
  .openapi('FileMetadataDTO')

const FileShareStatusDtoSchema = z
  .object({
    fileId: z.string().exactOptional(),
    message: z.string().exactOptional(),
    successful: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileShareStatusDto')

const FileToUploadDtoSchema = z
  .object({ file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }) })
  .openapi({ required: [] })
  .openapi('FileToUploadDto')

const FilesArchiveDtoSchema = z
  .object({ archiveUrl: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('FilesArchiveDto')

const FilesDtoSchema = z
  .object({
    files: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilesDto')

const FilesShareStatusDtoSchema = z
  .object({
    statuses: z
      .array(FileShareStatusDtoSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilesShareStatusDto')

const FilterDTOSchema = z
  .object({ properties: z.array(z.object({})).exactOptional() })
  .openapi({ required: [] })
  .openapi('FilterDTO')

const FilterPropertyDTOSchema = z
  .object({
    name: z.string().exactOptional(),
    settings: z.object({}).exactOptional(),
    settingsPresent: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterPropertyDTO')

const FinanceDTOSchema = z
  .object({
    ROI: z.number().exactOptional(),
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
    margin: z.number().exactOptional(),
    payables: z.array(ChargeDTOSchema).exactOptional(),
    profit: z.number().exactOptional(),
    receivables: z.array(ChargeDTOSchema).exactOptional(),
    totalAgreed: z.number().exactOptional(),
    totalCost: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FinanceDTO')

const FormDataContentDispositionSchema = z
  .object({
    creationDate: z.iso.datetime({ offset: true }).exactOptional(),
    fileName: z.string().exactOptional(),
    modificationDate: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
    parameters: z.record(z.string(), z.string()).exactOptional(),
    readDate: z.iso.datetime({ offset: true }).exactOptional(),
    size: z
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
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FormDataContentDisposition')

const ParameterizedHeaderSchema: z.ZodType<ParameterizedHeaderType> = z
  .object({
    parameters: z.record(z.string(), z.string()).exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParameterizedHeader')

const FormDataBodyPartSchema = z
  .object({
    contentDisposition: ContentDispositionSchema.exactOptional(),
    entity: z.object({}).exactOptional(),
    formDataContentDisposition: FormDataContentDispositionSchema.exactOptional(),
    headers: z
      .object({ empty: z.boolean().exactOptional() })
      .catchall(z.array(z.string()))
      .exactOptional(),
    mediaType: z
      .object({
        parameters: z.record(z.string(), z.string()).exactOptional(),
        subtype: z.string().exactOptional(),
        type: z.string().exactOptional(),
        wildcardSubtype: z.boolean().exactOptional(),
        wildcardType: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
    name: z.string().exactOptional(),
    parameterizedHeaders: z
      .object({ empty: z.boolean().exactOptional() })
      .catchall(z.array(ParameterizedHeaderSchema))
      .exactOptional(),
    parent: MultiPartSchema.exactOptional(),
    providers: z.object({}).exactOptional(),
    simple: z.boolean().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FormDataBodyPart')

const FormDataMultiPartSchema = z
  .object({
    bodyParts: z.array(BodyPartSchema).exactOptional(),
    contentDisposition: ContentDispositionSchema.exactOptional(),
    entity: z.object({}).exactOptional(),
    fields: z.record(z.string(), z.array(FormDataBodyPartSchema)).exactOptional(),
    headers: z
      .object({ empty: z.boolean().exactOptional() })
      .catchall(z.array(z.string()))
      .exactOptional(),
    mediaType: z
      .object({
        parameters: z.record(z.string(), z.string()).exactOptional(),
        subtype: z.string().exactOptional(),
        type: z.string().exactOptional(),
        wildcardSubtype: z.boolean().exactOptional(),
        wildcardType: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    messageBodyWorkers: MessageBodyWorkersSchema.exactOptional(),
    parameterizedHeaders: z
      .object({ empty: z.boolean().exactOptional() })
      .catchall(z.array(ParameterizedHeaderSchema))
      .exactOptional(),
    parent: MultiPartSchema.exactOptional(),
    providers: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FormDataMultiPart')

const ParameterSchema = z
  .object({ type: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Parameter')

const GetLicenseResultSchema = z
  .object({
    clientId: z.string().exactOptional(),
    parameters: z.record(z.string(), ParameterSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLicenseResult')

const ImportRequestDTOSchema = z
  .object({ fileToken: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ImportRequestDTO')

const ImportResultDTOSchema = z
  .object({
    currentSystemVersion: z.string().exactOptional(),
    importedReportsNames: z.array(z.string()).exactOptional(),
    invalidReportsNames: z.array(z.string()).exactOptional(),
    targetSystemVersion: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportResultDTO')

const IndustriesDTOSchema = z
  .object({ empty: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('IndustriesDTO')

const IndustryDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({ description: 'industry related with translation (ie. biotechnology)', required: [] })
  .openapi('IndustryDTO')

const InputFilesDTOSchema = z
  .object({
    logFiles: z.array(FileDTOSchema).exactOptional(),
    referenceFiles: z.array(FileDTOSchema).exactOptional(),
    terminology: z.array(FileDTOSchema).exactOptional(),
    tm: z.array(FileDTOSchema).exactOptional(),
    workFiles: z.array(FileDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InputFilesDTO')

const InvitationStatisticsDTOSchema = z
  .object({
    alreadyRegisteredPersonsCount: z.int32().exactOptional(),
    invitedPersonsCount: z.int32().exactOptional(),
    providersWithAlreadyRegisteredPersonCount: z.int32().exactOptional(),
    providersWithInvitedPersonCount: z.int32().exactOptional(),
    providersWithoutPersonCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvitationStatisticsDTO')

const JobCommunicationDtoSchema = z
  .object({
    instructionsForAllJobs: z.string().exactOptional(),
    instructionsForJob: z.string().exactOptional(),
    noteFromVendor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobCommunicationDto')

const JobFilesDTOSchema = z
  .object({
    inputFiles: z.array(FileDTOSchema).exactOptional(),
    outputFiles: z.array(FileDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobFilesDTO')

const JobDTOSchema = z
  .object({
    files: JobFilesDTOSchema.exactOptional(),
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
    idNumber: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobDTO')

const JobDatesDtoSchema = z
  .object({
    actualEndDate: z
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
    actualStartDate: z
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
    deadline: z
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
    startDate: z
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
  .openapi('JobDatesDto')

const JobDocumentsDtoSchema = z
  .object({ purchaseOrderStatus: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('JobDocumentsDto')

const JobFilesDtoSchema = z
  .object({
    deliveredInJobFiles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    sharedReferenceFiles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    sharedWorkFiles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobFilesDto')

const JobLanguageCombinationDtoSchema = z
  .object({
    sourceLanguageId: z
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
    specializationId: z
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
    targetLanguageId: z
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
  .openapi('JobLanguageCombinationDto')

const StepTypeSemanticsDtoSchema = z
  .object({ canVerifyFiles: z.boolean().exactOptional(), isScripted: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('StepTypeSemanticsDto')

const StepTypeDtoSchema = z
  .object({
    id: z.string().exactOptional(),
    jobTypeId: z
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
    semantics: StepTypeSemanticsDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StepTypeDto')

const JobDtoSchema = z
  .object({
    communication: JobCommunicationDtoSchema.exactOptional(),
    dates: JobDatesDtoSchema.exactOptional(),
    documents: JobDocumentsDtoSchema.exactOptional(),
    files: JobFilesDtoSchema.exactOptional(),
    id: z.string().exactOptional(),
    idNumber: z.string().exactOptional(),
    languages: z.array(JobLanguageCombinationDtoSchema).exactOptional(),
    name: z.string().exactOptional(),
    status: z.string().exactOptional(),
    stepNumber: z.int32().exactOptional(),
    stepType: StepTypeDtoSchema.exactOptional(),
    vendorId: z
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
    vendorPriceProfileId: z
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
  .openapi('JobDto')

const JobStatusDTOSchema = z
  .object({ externalId: z.string().exactOptional(), status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('JobStatusDTO')

const JobTypeDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    calculationUnitIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
    filesNeeded: z.boolean().exactOptional(),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
    providedByClient: z.boolean().exactOptional(),
    relationToLanguage: z
      .enum([
        'LANGUAGE_COMBINATION_RELATED',
        'SOURCE_LANGUAGE_RELATED_ONLY',
        'TARGET_LANGUAGE_RELATED_ONLY',
        'LANGUAGE_INDEPENDENT',
      ])
      .exactOptional(),
    vendorProductivity: z.number().exactOptional(),
    vendorProductivityCalculationUnitId: z
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
  .openapi('JobTypeDTO')

const LanguageCombinationDTOSchema = z
  .object({
    sourceLanguageId: z
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
    specializationId: z
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
    targetLanguageId: z
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
  .openapi('LanguageCombinationDTO')

const LanguageDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    iso6391: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1 code</a>',
      }),
    iso6392: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<a href="http://en.wikipedia.org/wiki/List_of_ISO_639-2_codes">ISO 639-2 code</a>',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
    symbol: z.string().exactOptional().openapi({ description: 'specific symbol or abbreviation' }),
  })
  .openapi({ description: 'language (ie. Polish)', required: [] })
  .openapi('LanguageDTO')

const LanguageRelationDtoSchema = z
  .object({
    languageCombinations: z.array(LanguageCombinationDtoSchema).exactOptional(),
    languages: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LanguageRelationDto')

const LanguageSpecializationDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({ description: 'language specialization (ie. railways)', required: [] })
  .openapi('LanguageSpecializationDTO')

const LastModificationDTOSchema = z
  .object({ date: z.string().exactOptional(), modifier: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LastModificationDTO')

const LeadSourceDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    availableForCustomer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should be available for customer' }),
    availableForProvider: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should be available for provider' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({
    description: 'origin of a customer (ie. recomendation from another customer)',
    required: [],
  })
  .openapi('LeadSourceDTO')

const LongDTOSchema = z
  .object({
    value: z
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
  .openapi('LongDTO')

const MacroRequestDTOSchema = z
  .object({
    async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'indicates whether the macro should be executed asynchronously or synchronously (default: false)',
      }),
    ids: z
      .array(
        z
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
              'list of internal identifiers of elements to be processed by the macro, can be empty for certain macros',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'list of internal identifiers of elements to be processed by the macro, can be empty for certain macros',
      }),
    params: z
      .record(
        z.string(),
        z
          .object({})
          .openapi({
            description:
              'map of custom key-value pairs that can optionally parametrize the macro execution',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'map of custom key-value pairs that can optionally parametrize the macro execution',
      }),
  })
  .openapi({ required: [] })
  .openapi('MacroRequestDTO')

const PersonDepartmentDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({ description: "person's department (ie. human resources)", required: [] })
  .openapi('PersonDepartmentDTO')

const PersonPositionDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({ description: "person's position (ie. proofreader)", required: [] })
  .openapi('PersonPositionDTO')

const ProvinceDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    countryId: z
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
      .openapi({ type: 'integer', format: 'int64', description: "country's identifier" }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({ description: 'territorial unit within a country (ie. Nebraska)', required: [] })
  .openapi('ProvinceDTO')

const ManyValuesPerTypeDTOSchema = z
  .object({
    calculationUnit: z.array(CalculationUnitDTOSchema).exactOptional(),
    category: z.array(CategoryDTOSchema).exactOptional(),
    country: z.array(CountryDTOSchema).exactOptional(),
    currency: z.array(CurrencyDTOSchema).exactOptional(),
    industry: z.array(IndustryDTOSchema).exactOptional(),
    jobType: z.array(JobTypeDTOSchema).exactOptional(),
    language: z.array(LanguageDTOSchema).exactOptional(),
    leadSource: z.array(LeadSourceDTOSchema).exactOptional(),
    personDepartment: z.array(PersonDepartmentDTOSchema).exactOptional(),
    personPosition: z.array(PersonPositionDTOSchema).exactOptional(),
    province: z.array(ProvinceDTOSchema).exactOptional(),
    specialization: z.array(LanguageSpecializationDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManyValuesPerTypeDTO')

const OrderDTOSchema = z
  .object({ column: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OrderDTO')

const PayableCreateDTOSchema = z
  .object({
    calculationUnitId: z
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
    catLogFile: FileDTOSchema.exactOptional(),
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
    ignoreMinimumCharge: z.boolean().exactOptional(),
    invoiceId: z.string().exactOptional(),
    jobId: z.object({}).exactOptional(),
    jobTypeId: z
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
    languageCombination: ChargeLanguageCombinationDTOSchema.exactOptional(),
    languageCombinationIdNumber: z.string().exactOptional(),
    minimumCharge: z.number().exactOptional(),
    quantity: z.number().exactOptional(),
    rate: z.number().exactOptional(),
    rateOrigin: z
      .enum(['PRICE_PROFILE', 'PRICE_LIST', 'FILLED_MANUALLY', 'AUTOCALCULATED'])
      .exactOptional(),
    total: z.number().exactOptional(),
    type: z.enum(['SIMPLE', 'CAT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayableCreateDTO')

const PayableDTOSchema = z
  .object({
    calculationUnitId: z
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
    ignoreMinimumCharge: z.boolean().exactOptional(),
    invoiceId: z.string().exactOptional(),
    jobId: z.object({}).exactOptional(),
    jobTypeId: z
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
    languageCombination: ChargeLanguageCombinationDTOSchema.exactOptional(),
    languageCombinationIdNumber: z.string().exactOptional(),
    minimumCharge: z.number().exactOptional(),
    quantity: z.number().exactOptional(),
    rate: z.number().exactOptional(),
    rateOrigin: z
      .enum(['PRICE_PROFILE', 'PRICE_LIST', 'FILLED_MANUALLY', 'AUTOCALCULATED'])
      .exactOptional(),
    total: z.number().exactOptional(),
    type: z.enum(['SIMPLE', 'CAT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PayableDTO')

const PaymentDTOSchema = z
  .object({
    amount: z.number().exactOptional(),
    notes: z.string().exactOptional(),
    paymentDate: TimeDTOSchema.exactOptional(),
    paymentMethodId: z
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
  .openapi('PaymentDTO')

const PeopleDTOSchema = z
  .object({
    projectManagerId: z
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
  .openapi('PeopleDTO')

const PermissionsDTOSchema = z
  .object({
    sharedGroups: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PermissionsDTO')

const PreferredRequestDTOSchema = z
  .object({ preferred: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('PreferredRequestDTO')

const ProjectCreateDTOSchema = z
  .object({
    clientId: z
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
    externalId: z.string().exactOptional(),
    name: z.string().exactOptional(),
    serviceId: z
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
  .openapi('ProjectCreateDTO')

const ProjectDTOv1Schema = z
  .object({
    categoriesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    contactPersonId: z
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
    contacts: ContactsDTOSchema.exactOptional(),
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
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
    dates: ProjectDatesDTOSchema.exactOptional(),
    finance: FinanceDTOSchema.exactOptional(),
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
    idNumber: z.string().exactOptional(),
    instructions: InstructionsDTOSchema.exactOptional(),
    isClassicProject: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    projectId: z.string().exactOptional(),
    projectManagerId: z
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
    specializationId: z
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
    status: z.enum(['REQUESTED_PROJECT', 'OPENED', 'CLOSED', 'CANCELLED', 'CLAIM']).exactOptional(),
    tasks: z.array(TaskDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectDTOv1')

const ProjectLanguagesDTOSchema = z
  .object({
    languageCombinations: z.array(LanguageCombinationDTOSchema).exactOptional(),
    sourceLanguageId: z
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
    specializationId: z
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
    targetLanguageIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectLanguagesDTO')

const VolumeDTOSchema = z
  .object({
    unitId: z
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
    value: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VolumeDTO')

const ProjectDTOv2Schema = z
  .object({
    budgetCode: z.string().exactOptional(),
    categoryIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    clientDeadline: z
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
    clientId: z
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
    clientNotes: z.string().exactOptional(),
    clientReferenceNumber: z.string().exactOptional(),
    documents: DocumentsDTOSchema.exactOptional(),
    id: z.string().exactOptional(),
    instructionsForAllJobs: z.string().exactOptional(),
    internalNotes: z.string().exactOptional(),
    isClassicProject: z.boolean().exactOptional(),
    languages: ProjectLanguagesDTOSchema.exactOptional(),
    name: z.string().exactOptional(),
    orderedOn: z
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
    origin: z.string().exactOptional(),
    people: PeopleDTOSchema.exactOptional(),
    projectId: z.string().exactOptional(),
    projectIdNumber: z.string().exactOptional(),
    quoteIdNumber: z.string().exactOptional(),
    serviceId: z
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
    status: z.string().exactOptional(),
    volume: VolumeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectDTOv2')

const ProjectFileAddedByDtoSchema = z
  .object({
    userType: z.string().exactOptional(),
    vendorId: z
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
  .openapi('ProjectFileAddedByDto')

const RemoteCATToolReferencesDtoSchema = z
  .object({
    catResourceId: z.string().exactOptional(),
    catToolDocumentId: z.string().exactOptional(),
    editorUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoteCATToolReferencesDto')

const ProjectFileDtoSchema = z
  .object({
    addedBy: ProjectFileAddedByDtoSchema.exactOptional(),
    addedInJob: z.string().exactOptional(),
    addedInLastStep: z.boolean().exactOptional(),
    addedInStep: z
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
    categoryKey: z.string().exactOptional(),
    id: z.string().exactOptional(),
    isAccepted: z.boolean().exactOptional(),
    isLink: z.boolean().exactOptional(),
    isRemote: z.boolean().exactOptional(),
    languageRelation: LanguageRelationDtoSchema.exactOptional(),
    lastModifiedOn: z
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
    remoteCATToolReferences: RemoteCATToolReferencesDtoSchema.exactOptional(),
    sharedWithJobs: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    size: z
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
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectFileDto')

const ProjectStatusDTOSchema = z
  .object({ status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ProjectStatusDTO')

const ProviderPersonDTOSchema = z
  .object({
    active: z.boolean().exactOptional(),
    contact: PersonContactDTOSchema.exactOptional(),
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
    gender: z.enum(['FEMALE', 'MALE']).exactOptional(),
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
    lastName: z.string().exactOptional(),
    motherTonguesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().exactOptional(),
    positionId: z
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
    providerId: z
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
  .openapi('ProviderPersonDTO')

const ProviderDTOSchema = z
  .object({
    billingAddress: AddressDTOSchema.exactOptional(),
    branchId: z
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
    competencies: CompetenciesDTOSchema.exactOptional(),
    contact: ContactDTOSchema.exactOptional(),
    correspondenceAddress: AddressDTOSchema.exactOptional(),
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
    fullName: z.string().exactOptional(),
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
    idNumber: z.string().exactOptional(),
    leadSourceId: z
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
    notes: z.string().exactOptional(),
    persons: z.array(ProviderPersonDTOSchema).exactOptional(),
    status: z
      .enum([
        'ACTIVE',
        'INACTIVE',
        'WAITING_FOR_APPROVAL',
        'REJECTED',
        'TOO_EXPENSIVE',
        'INCOMPLETE_DATA',
        'POTENTIAL',
        'NOT_CONFIRMED',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderDTO')

const ProviderInvoiceCreateDTOSchema = z
  .object({
    jobsIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderInvoiceCreateDTO')

const ProviderInvoiceCreateResultDTOSchema = z
  .object({
    invoiceUrl: z.string().exactOptional(),
    invoicesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderInvoiceCreateResultDTO')

const ProviderInvoiceDatesDTOSchema = z
  .object({
    draftDate: TimeDTOSchema.exactOptional(),
    finalDate: TimeDTOSchema.exactOptional(),
    invoiceUploadedDate: TimeDTOSchema.exactOptional(),
    paymentDueDate: TimeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderInvoiceDatesDTO')

const ProviderInvoiceDTOSchema = z
  .object({
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
    dates: ProviderInvoiceDatesDTOSchema.exactOptional(),
    draftNumber: z.string().exactOptional(),
    finalNumber: z.string().exactOptional(),
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
    internalNumber: z.string().exactOptional(),
    jobsNetValue: z.number().exactOptional(),
    notesFromProvider: z.string().exactOptional(),
    paymentStatus: z
      .enum(['NOT_PAID', 'FULLY_PAID', 'IRRECOVERABLE', 'PARTIALLY_PAID'])
      .exactOptional(),
    providerId: z
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
    status: z
      .enum(['POSTPONED', 'TO_BE_SENT', 'SENT', 'CONFIRMED', 'BILL_CREATED'])
      .exactOptional(),
    totalGross: z.number().exactOptional(),
    totalGrossInWords: z.string().exactOptional(),
    totalNetto: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderInvoiceDTO')

const QuoteCreateDTOSchema = z
  .object({
    clientId: z
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
    opportunityOfferId: z
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
    serviceId: z
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
  .openapi('QuoteCreateDTO')

const QuoteDatesDTOSchema = z
  .object({
    createdOn: TimeDTOSchema.exactOptional(),
    deadline: TimeDTOSchema.exactOptional(),
    offerExpiry: TimeDTOSchema.exactOptional(),
    startDate: TimeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuoteDatesDTO')

const QuoteDTOv1Schema = z
  .object({
    automaticallyAcceptSentQuote: z.boolean().exactOptional(),
    categoriesIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    contactPersonId: z
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
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
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
    dates: QuoteDatesDTOSchema.exactOptional(),
    finance: FinanceDTOSchema.exactOptional(),
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
    idNumber: z.string().exactOptional(),
    instructions: InstructionsDTOSchema.exactOptional(),
    isClassicQuote: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    quoteId: z.string().exactOptional(),
    salesPersonId: z
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
    status: z.string().exactOptional(),
    tasks: z.array(TaskDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuoteDTOv1')

const QuoteDTOv2Schema = z
  .object({
    budgetCode: z.string().exactOptional(),
    businessDays: z
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
    categoryIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    clientDeadline: z
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
    clientId: z
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
    clientNotes: z.string().exactOptional(),
    clientReferenceNumber: z.string().exactOptional(),
    createdOn: z
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
    documents: DocumentsDTOSchema.exactOptional(),
    expectedDeliveryDate: z
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
    id: z.string().exactOptional(),
    instructionsForAllJobs: z.string().exactOptional(),
    internalNotes: z.string().exactOptional(),
    isClassicQuote: z.boolean().exactOptional(),
    languages: ProjectLanguagesDTOSchema.exactOptional(),
    name: z.string().exactOptional(),
    origin: z.string().exactOptional(),
    people: PeopleDTOSchema.exactOptional(),
    quoteExpiry: z
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
    quoteId: z.string().exactOptional(),
    quoteIdNumber: z.string().exactOptional(),
    serviceId: z
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
    status: z.string().exactOptional(),
    volume: VolumeDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuoteDTOv2')

const ReceivableCreateDTOSchema = z
  .object({
    calculationUnitId: z
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
    catLogFile: FileDTOSchema.exactOptional(),
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
    ignoreMinimumCharge: z.boolean().exactOptional(),
    invoiceId: z.string().exactOptional(),
    jobTypeId: z
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
    languageCombination: ChargeLanguageCombinationDTOSchema.exactOptional(),
    languageCombinationIdNumber: z.string().exactOptional(),
    minimumCharge: z.number().exactOptional(),
    quantity: z.number().exactOptional(),
    rate: z.number().exactOptional(),
    rateOrigin: z
      .enum(['PRICE_PROFILE', 'PRICE_LIST', 'FILLED_MANUALLY', 'AUTOCALCULATED'])
      .exactOptional(),
    taskId: z
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
    total: z.number().exactOptional(),
    type: z.enum(['SIMPLE', 'CAT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReceivableCreateDTO')

const ReceivableDTOSchema = z
  .object({
    calculationUnitId: z
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
    ignoreMinimumCharge: z.boolean().exactOptional(),
    invoiceId: z.string().exactOptional(),
    jobTypeId: z
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
    languageCombination: ChargeLanguageCombinationDTOSchema.exactOptional(),
    languageCombinationIdNumber: z.string().exactOptional(),
    minimumCharge: z.number().exactOptional(),
    quantity: z.number().exactOptional(),
    rate: z.number().exactOptional(),
    rateOrigin: z
      .enum(['PRICE_PROFILE', 'PRICE_LIST', 'FILLED_MANUALLY', 'AUTOCALCULATED'])
      .exactOptional(),
    taskId: z
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
    total: z.number().exactOptional(),
    type: z.enum(['SIMPLE', 'CAT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReceivableDTO')

const ReportResultDTOSchema = z
  .object({ url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportResultDTO')

const SendRemindersRequestDTOSchema = z
  .object({
    ids: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendRemindersRequestDTO')

const SendRemindersResponseDTOSchema = z
  .object({ numberOfSentEmails: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('SendRemindersResponseDTO')

const ServiceDTOSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be available on the XTRF selection lists' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'should this value be set by default in XTRF selection lists' }),
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
      .openapi({ type: 'integer', format: 'int64', description: 'internal identifier' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "localised name (formatted in the current user's locale)" }),
    preferred: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'should this value be available on the top of XTRF selection lists, in the Preferred section',
      }),
  })
  .openapi({ required: [] })
  .openapi('ServiceDTO')

const SettingsDTOSchema: z.ZodType<SettingsDTOType> = z
  .lazy(() =>
    z
      .object({ local: LocalSettingsDTOSchema.exactOptional(), name: z.string().exactOptional() })
      .openapi({ required: [] }),
  )
  .openapi('SettingsDTO')

const SmartContactsDTOSchema = z
  .object({
    additionalIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    primaryId: z
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
  .openapi('SmartContactsDTO')

const SmartCustomFieldDTOSchema = z
  .object({ value: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('SmartCustomFieldDTO')

const SourceLanguageDTOSchema = z
  .object({
    sourceLanguageId: z
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
  .openapi('SourceLanguageDTO')

const SpecializationDTOSchema = z
  .object({
    specializationId: z
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
  .openapi('SpecializationDTO')

const StatusRequestDTOSchema = z
  .object({
    status: z
      .enum(['POSTPONED', 'TO_BE_SENT', 'SENT', 'CONFIRMED', 'BILL_CREATED'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatusRequestDTO')

const StringDTOSchema = z
  .object({ value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('StringDTO')

const SubscriptionDTOSchema = z
  .object({
    embed: z
      .string()
      .exactOptional()
      .openapi({ description: 'additional fields which should be embedded in the event' }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'event to which you want to subscribe' }),
    filter: z
      .string()
      .exactOptional()
      .openapi({ description: "filter expression in the form 'attribute=value'" }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'url that will be invoked by XTRF on event' }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionDTO')

const TargetLanguagesDTOSchema = z
  .object({
    targetLanguageIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TargetLanguagesDTO')

const TaskCreateDTOSchema = z
  .object({
    clientTaskPONumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'client task PO number' }),
    dates: ProjectDatesDTOSchema.exactOptional(),
    files: z.array(TaskFileDTOSchema).exactOptional().openapi({ description: 'files' }),
    instructions: InstructionsDTOSchema.exactOptional(),
    languageCombination: CommonLanguageCombinationDTOSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'name' }),
    people: ClassicPeopleDTOSchema.exactOptional(),
    specializationId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'specialization' }),
    workflowId: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'workflow' }),
  })
  .openapi({ required: [] })
  .openapi('TaskCreateDTO')

const TaskFilesDTOSchema = z
  .object({
    bundles: z.record(z.string(), z.array(FileDTOSchema)).exactOptional(),
    inputFiles: InputFilesDTOSchema.exactOptional(),
    jobs: z.array(JobDTOSchema).exactOptional(),
    outputFiles: z.array(FileDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskFilesDTO')

const TaskProgressDTOSchema = z
  .object({ phase: z.string().exactOptional(), status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TaskProgressDTO')

const TimeZoneDTOSchema = z
  .object({
    displayName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    offset: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimeZoneDTO')

const UrlResultDTOSchema = z
  .object({ url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UrlResultDTO')

const UserDTOSchema = z
  .object({
    customFields: z
      .object({
        customFields: z
          .array(CustomFieldDTOSchema)
          .exactOptional()
          .openapi({ xml: { name: 'customField' } }),
        empty: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ xml: { name: 'customFields' }, required: [] }),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    gender: z.string().exactOptional(),
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
    lastName: z.string().exactOptional(),
    login: z.string().exactOptional(),
    mobilePhone: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    positionName: z.string().exactOptional(),
    timeZoneId: z.string().exactOptional(),
    userGroupName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserDTO')

const VendorPriceProfileDTOSchema = z
  .object({
    vendorPriceProfileId: z
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
  .openapi('VendorPriceProfileDTO')

const ViewBriefDTOSchema = z
  .object({
    access: AccessDTOSchema.exactOptional(),
    current: z.boolean().exactOptional(),
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
    lastModification: LastModificationDTOSchema.exactOptional(),
    mine: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    owner: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ViewBriefDTO')

const ViewDTOSchema = z
  .object({
    columns: z.array(ColumnDTOSchema).exactOptional(),
    order: OrderDTOSchema.exactOptional(),
    permissions: PermissionsDTOSchema.exactOptional(),
    settings: SettingsDTOSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ViewDTO')

const ViewDetailsDTOSchema = z
  .object({
    access: AccessDTOSchema.exactOptional(),
    actions: z.array(ActionDTOSchema).exactOptional(),
    filter: FilterDTOSchema.exactOptional(),
    view: ViewDTOSchema.exactOptional(),
    viewId: z
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
  .openapi('ViewDetailsDTO')

const ViewWithIdDTOSchema = z
  .object({
    columns: z.array(ColumnDTOSchema).exactOptional(),
    order: OrderDTOSchema.exactOptional(),
    permissions: PermissionsDTOSchema.exactOptional(),
    settings: SettingsDTOSchema.exactOptional(),
    viewId: z
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
  .openapi('ViewWithIdDTO')

const ViewsBriefDTOSchema = z
  .object({
    access: AccessDTOSchema.exactOptional(),
    list: z.array(ViewBriefDTOSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ViewsBriefDTO')

const XAUTHACCESSTOKENSecurityScheme = { in: 'header', name: 'X-AUTH-ACCESS-TOKEN', type: 'apiKey' }

export const getAccountingCustomersInvoicesRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices',
  tags: ['Client Invoices'],
  summary:
    'Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.',
  description:
    'Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.',
  operationId: 'getAll',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only client invoices modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'client invoices',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(CustomerInvoiceDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getAll.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingCustomersInvoicesRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices',
  tags: ['Client Invoices'],
  summary: 'Creates a new invoice.',
  description:
    'Creates a new invoice from tasks. Tasks are grouped by client and currency, therefore multiple invoices can be created.If any of the tasks cannot be invoiced (ie. it is already invoiced, not invoiceable, not associated with a project) then an error is reported.',
  operationId: 'create_1',
  request: {
    body: {
      description: 'Created new invoice.',
      content: {
        'application/json;charset=UTF-8': {
          schema: CustomerInvoiceCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/createMultipleFromTasks.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerInvoiceCreateResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/createMultipleFromTasks.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingCustomersInvoicesDocumentsRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices/documents',
  tags: ['Client Invoices'],
  summary: "Generates client invoices' documents.",
  description: "Generates client invoices' documents.",
  operationId: 'downloadDocuments',
  request: {
    body: {
      description: 'Generated client invoices documents.',
      content: {
        'application/json;charset=UTF-8': {
          schema: DownloadDocumentsRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/downloadDocuments.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: UrlResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/downloadDocuments.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingCustomersInvoicesIdsRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices/ids',
  tags: ['Client Invoices'],
  summary: "Returns client invoices' internal identifiers.",
  description: "Returns client invoices' internal identifiers.",
  operationId: 'getAllIds',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only client invoices modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: "client invoices' internal identifiers",
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingCustomersInvoicesSendRemindersRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices/sendReminders',
  tags: ['Client Invoices'],
  summary: 'Sends reminders. Returns number of sent e-mails.',
  description: 'Sends reminders. Returns number of sent e-mails.',
  operationId: 'sendReminders',
  request: {
    body: {
      description: 'Number of sent e-mails.',
      content: {
        'application/json;charset=UTF-8': {
          schema: SendRemindersRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/sendReminders.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: SendRemindersResponseDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/sendReminders.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingCustomersInvoicesInvoiceIdRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices/{invoiceId}',
  tags: ['Client Invoices'],
  summary: 'Returns client invoice details.',
  description: 'Returns client invoice details.',
  operationId: 'getById',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'list of adittional fields which should be embedded in the response (ie. tasks)',
            in: 'query',
            name: 'embed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerInvoiceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteAccountingCustomersInvoicesInvoiceIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/customers/invoices/{invoiceId}',
  tags: ['Client Invoices'],
  summary: 'Removes a client invoice.',
  description: 'Removes a client invoice.',
  operationId: 'delete_1',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getAccountingCustomersInvoicesInvoiceIdDatesRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices/{invoiceId}/dates',
  tags: ['Client Invoices'],
  summary: 'Returns dates of a given client invoice.',
  description: 'Returns dates of a given client invoice.',
  operationId: 'getDates',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerInvoiceDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getDates.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingCustomersInvoicesInvoiceIdDocumentRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices/{invoiceId}/document',
  tags: ['Client Invoices'],
  summary: 'Generates client invoice document (PDF).',
  description: 'Generates client invoice document (PDF).',
  operationId: 'getDocument',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: UrlResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getDocument.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingCustomersInvoicesInvoiceIdDuplicateRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices/{invoiceId}/duplicate',
  tags: ['Client Invoices'],
  summary: 'Duplicate client invoice.',
  description: 'Duplicate client invoice.',
  operationId: 'duplicate',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerInvoiceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/duplicate.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingCustomersInvoicesInvoiceIdDuplicateProFormaRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices/{invoiceId}/duplicate/proForma',
  tags: ['Client Invoices'],
  summary: 'Duplicate client invoice as pro forma.',
  description: 'Duplicate client invoice as pro forma.',
  operationId: 'duplicateAsProForma',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerInvoiceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/duplicateAsProForma.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingCustomersInvoicesInvoiceIdPaymentTermsRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices/{invoiceId}/paymentTerms',
  tags: ['Client Invoices'],
  summary: 'Returns payment terms of a given client invoice.',
  description: 'Returns payment terms of a given client invoice.',
  operationId: 'getPaymentTerms',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: PaymentTermsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getPaymentTerms.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingCustomersInvoicesInvoiceIdPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/invoices/{invoiceId}/payments',
  tags: ['Client Invoices'],
  summary: 'Returns all payments for the client invoice.',
  description: 'Returns all payments for the client invoice.',
  operationId: 'getPayments',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: "client invoice's payments",
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(PaymentDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/getPayments.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingCustomersInvoicesInvoiceIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices/{invoiceId}/payments',
  tags: ['Client Invoices'],
  summary:
    'Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.',
  description:
    'Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.',
  operationId: 'createPayment',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'New payment.',
      content: {
        'application/json;charset=UTF-8': {
          schema: PaymentDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/customers/invoices/createPayment.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postAccountingCustomersInvoicesInvoiceIdSendReminderRoute = createRoute({
  method: 'post',
  path: '/accounting/customers/invoices/{invoiceId}/sendReminder',
  tags: ['Client Invoices'],
  summary: 'Sends reminder.',
  description: 'Sends reminder.',
  operationId: 'sendReminder',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const deleteAccountingCustomersPaymentsPaymentIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/customers/payments/{paymentId}',
  tags: ['Client Invoices'],
  summary: 'Removes a customer payment.',
  description: 'Removes a customer payment.',
  operationId: 'delete_2',
  request: {
    params: z.object({
      paymentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "customer payment's internal identifier",
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getAccountingProvidersInvoicesRoute = createRoute({
  method: 'get',
  path: '/accounting/providers/invoices',
  tags: ['Vendor Invoices'],
  summary:
    'Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.',
  description:
    'Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.',
  operationId: 'getAll_2',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only vendor invoices modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'vendor invoices',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(ProviderInvoiceDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/getAll.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingProvidersInvoicesRoute = createRoute({
  method: 'post',
  path: '/accounting/providers/invoices',
  tags: ['Vendor Invoices'],
  summary: 'Creates a new invoice.',
  description:
    'Creates a new invoice from jobs. Jobs are grouped by provider and currency, therefore multiple invoices can be created.If any of the jobs cannot be invoiced (ie. it is already invoiced) then an error is reported.',
  operationId: 'create_4',
  request: {
    body: {
      description: 'Created new invoice.',
      content: {
        'application/json': {
          schema: ProviderInvoiceCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/createSingleFromJobs.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProviderInvoiceCreateResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/createSingleFromJobs.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingProvidersInvoicesIdsRoute = createRoute({
  method: 'get',
  path: '/accounting/providers/invoices/ids',
  tags: ['Vendor Invoices'],
  summary: "Returns vendor invoices' internal identifiers.",
  description: "Returns vendor invoices' internal identifiers.",
  operationId: 'getAllIds_3',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only vendor invoices modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: "vendor invoices' internal identifiers",
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingProvidersInvoicesInvoiceIdRoute = createRoute({
  method: 'get',
  path: '/accounting/providers/invoices/{invoiceId}',
  tags: ['Vendor Invoices'],
  summary: 'Returns provider invoice details.',
  description: 'Returns provider invoice details.',
  operationId: 'getById_3',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProviderInvoiceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteAccountingProvidersInvoicesInvoiceIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/providers/invoices/{invoiceId}',
  tags: ['Vendor Invoices'],
  summary: 'Removes a provider invoice.',
  description: 'Removes a provider invoice.',
  operationId: 'delete_6',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getAccountingProvidersInvoicesInvoiceIdDocumentRoute = createRoute({
  method: 'get',
  path: '/accounting/providers/invoices/{invoiceId}/document',
  tags: ['Vendor Invoices'],
  summary: 'Generates provider invoice document (PDF).',
  description: 'Generates provider invoice document (PDF).',
  operationId: 'getDocument_1',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: UrlResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/getDocument.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getAccountingProvidersInvoicesInvoiceIdPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounting/providers/invoices/{invoiceId}/payments',
  tags: ['Vendor Invoices'],
  summary: 'Returns all payments for the vendor invoice.',
  description: 'Returns all payments for the vendor invoice.',
  operationId: 'getPayments_1',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "vendor invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: "vendor invoice's payments",
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(PaymentDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/getPayments.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postAccountingProvidersInvoicesInvoiceIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/accounting/providers/invoices/{invoiceId}/payments',
  tags: ['Vendor Invoices'],
  summary: 'Creates a new payment on the vendor account and assigns the payment to the invoice.',
  description:
    'Creates a new payment on the vendor account and assigns the payment to the invoice.',
  operationId: 'createPayment_1',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "vendor invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'New payment.',
      content: {
        'application/json;charset=UTF-8': {
          schema: PaymentDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/createPayment.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postAccountingProvidersInvoicesInvoiceIdSendRoute = createRoute({
  method: 'post',
  path: '/accounting/providers/invoices/{invoiceId}/send',
  tags: ['Vendor Invoices'],
  summary: 'Sends a provider invoice.',
  description: 'Sends a provider invoice.',
  operationId: 'send',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postAccountingProvidersInvoicesInvoiceIdStatusRoute = createRoute({
  method: 'post',
  path: '/accounting/providers/invoices/{invoiceId}/status',
  tags: ['Vendor Invoices'],
  summary: 'Changes invoice status to given status.',
  description: 'Changes invoice status to given status.',
  operationId: 'setStatus',
  request: {
    params: z.object({
      invoiceId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider invoice's internal identifier",
            in: 'path',
            name: 'invoiceId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Changed invoice status to given status.',
      content: {
        'application/json': {
          schema: StatusRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/accounting/providers/invoices/setStatus.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const deleteAccountingProvidersPaymentsPaymentIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/providers/payments/{paymentId}',
  tags: ['Vendor Invoices'],
  summary: 'Removes a provider payment.',
  description: 'Removes a provider payment.',
  operationId: 'delete_7',
  request: {
    params: z.object({
      paymentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider payment's internal identifier",
            in: 'path',
            name: 'paymentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getBrowserRoute = createRoute({
  method: 'get',
  path: '/browser',
  tags: ['Browser'],
  summary: 'Searches for data (ie. customer, task, etc) and returns it in a tabular form.',
  description: 'Searches for data (ie. customer, task, etc) and returns it in a tabular form.',
  operationId: 'browseJSON',
  request: {
    query: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: "view's identifier",
            in: 'query',
            name: 'viewId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      additionalOrder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'additionalOrder',
            schema: { type: 'string' },
            required: false,
          },
        }),
      useDeferredColumns: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'useDeferredColumns',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxRows: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: "overrides view's default rows limit, supported values 10 to 1000",
            in: 'query',
            name: 'maxRows',
            schema: { default: 0, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.object({}),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/browseProjects.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserCsvRoute = createRoute({
  method: 'get',
  path: '/browser/csv',
  tags: ['Browser'],
  summary: 'Searches for data (ie. customer, task, etc) and returns it in a CSV form.',
  description: 'Searches for data (ie. customer, task, etc) and returns it in a CSV form.',
  operationId: 'browseCSV',
  request: {
    query: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: "view's identifier",
            in: 'query',
            name: 'viewId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      separator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'csv field separator',
            in: 'query',
            name: 'separator',
            schema: { type: 'string' },
            required: false,
          },
        }),
      secondarySeparator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'secondary csv field separator',
            in: 'query',
            name: 'secondarySeparator',
            schema: { type: 'string' },
            required: false,
          },
        }),
      additionalOrder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'additionalOrder',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.object({}),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/exportToCSV.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsDetailsForClassNameRoute = createRoute({
  method: 'get',
  path: '/browser/views/details/for/{className}',
  tags: ['Browser'],
  summary: "Returns current view's detailed information, suitable for browser.",
  description: "Returns current view's detailed information, suitable for browser.",
  operationId: 'getCurrentViewDetails',
  request: {
    params: z.object({
      className: z
        .string()
        .openapi({
          param: {
            description: "views' class name",
            in: 'path',
            name: 'className',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      placeName: z
        .string()
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            description: 'place name (denotes specific place in system with the table)',
            in: 'query',
            name: 'placeName',
            schema: { default: 'default', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewDetailsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getCurrentDetails.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsDetailsForClassNameViewIdRoute = createRoute({
  method: 'get',
  path: '/browser/views/details/for/{className}/{viewId}',
  tags: ['Browser'],
  summary: "Returns view's detailed information, suitable for browser.",
  description: "Returns view's detailed information, suitable for browser.",
  operationId: 'getViewDetails',
  request: {
    params: z.object({
      className: z
        .string()
        .openapi({
          param: {
            description: "views' class name",
            in: 'path',
            name: 'className',
            required: true,
            schema: { type: 'string' },
          },
        }),
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      placeName: z
        .string()
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            description: 'place name (denotes specific place in system with the table)',
            in: 'query',
            name: 'placeName',
            schema: { default: 'default', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewDetailsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getDetails.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postBrowserViewsDetailsForClassNameViewIdRoute = createRoute({
  method: 'post',
  path: '/browser/views/details/for/{className}/{viewId}',
  tags: ['Browser'],
  summary:
    'Selects given view as current and returns its detailed information, suitable for browser.',
  description:
    'Selects given view as current and returns its detailed information, suitable for browser.',
  operationId: 'selectViewAndGetItsDetails',
  request: {
    params: z.object({
      className: z
        .string()
        .openapi({
          param: {
            description: "views' class name",
            in: 'path',
            name: 'className',
            required: true,
            schema: { type: 'string' },
          },
        }),
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      'place name (denotes specific place in system with the table)': z
        .string()
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'place name (denotes specific place in system with the table)',
            schema: { default: 'default', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewDetailsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/selectViewAndGetItsDetails.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsForClassNameRoute = createRoute({
  method: 'get',
  path: '/browser/views/for/{className}',
  tags: ['Browser'],
  summary: "Returns views' brief.",
  description: "Returns views' brief.",
  operationId: 'getViewsBrief',
  request: {
    params: z.object({
      className: z
        .string()
        .openapi({
          param: {
            description: "views' class name",
            in: 'path',
            name: 'className',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      placeName: z
        .string()
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            description: 'place name (denotes specific place in system with the table)',
            in: 'query',
            name: 'placeName',
            schema: { default: 'default', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewsBriefDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getViewsBrief.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postBrowserViewsForClassNameRoute = createRoute({
  method: 'post',
  path: '/browser/views/for/{className}',
  tags: ['Browser'],
  summary: 'Creates view for given class.',
  description: 'Creates view for given class.',
  operationId: 'create',
  request: {
    params: z.object({
      className: z
        .string()
        .openapi({
          param: {
            description: "view's class name",
            in: 'path',
            name: 'className',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Created view for given class.',
      content: { 'application/json;charset=UTF-8': { schema: ViewDTOSchema } },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewWithIdDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/create.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}',
  tags: ['Browser'],
  summary: "Returns all view's information.",
  description: "Returns all view's information (ie. name, columns, filters, etc).",
  operationId: 'get',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/get.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}',
  tags: ['Browser'],
  summary: "Updates all view's information.",
  description: "Updates all view's information (ie. name, columns, filters, etc).",
  operationId: 'update',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "Updated all view's information.",
      content: { 'application/json;charset=UTF-8': { schema: ViewDTOSchema } },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ViewDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/update.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteBrowserViewsViewIdRoute = createRoute({
  method: 'delete',
  path: '/browser/views/{viewId}',
  tags: ['Browser'],
  summary: 'Removes a view.',
  description: 'Removes a view. No content is returned upon success (204).',
  operationId: 'delete',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's internal identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getBrowserViewsViewIdColumnsRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/columns',
  tags: ['Browser'],
  summary: 'Returns columns defined in view.',
  description: 'Returns columns defined in view.',
  operationId: 'getColumns',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(ColumnDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getColumns.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdColumnsRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/columns',
  tags: ['Browser'],
  summary: 'Updates columns in view.',
  description: 'Updates columns in view.',
  operationId: 'updateColumns',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated columns in view.',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ColumnDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateColumns.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(ColumnDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateColumns.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteBrowserViewsViewIdColumnsColumnNameRoute = createRoute({
  method: 'delete',
  path: '/browser/views/{viewId}/columns/{columnName}',
  tags: ['Browser'],
  summary: 'Deletes a single column from view.',
  description: 'Deletes a single column from view.',
  operationId: 'deleteColumn',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      columnName: z
        .string()
        .openapi({
          param: {
            description: "column's name",
            in: 'path',
            name: 'columnName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(ColumnDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/deleteColumn.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdColumnsColumnNameSettingsRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/columns/{columnName}/settings',
  tags: ['Browser'],
  summary: "Returns column's specific settings.",
  description:
    "Returns column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.",
  operationId: 'getColumnSettings',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      columnName: z
        .string()
        .openapi({
          param: {
            description: "column's name",
            in: 'path',
            name: 'columnName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.object({}),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getColumnSettings.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdColumnsColumnNameSettingsRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/columns/{columnName}/settings',
  tags: ['Browser'],
  summary: "Updates column's specific settings.",
  description:
    "Updates column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.",
  operationId: 'updateColumnSettings',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      columnName: z
        .string()
        .openapi({
          param: {
            description: "column's name",
            in: 'path',
            name: 'columnName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "Updated column's specific settings.",
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/updateColumnSettings.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.object({}),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/updateColumnSettings.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdFilterRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/filter',
  tags: ['Browser'],
  summary: "Returns view's filter.",
  description: "Returns view's filter.",
  operationId: 'getFilter',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: FilterDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/filter/getTextProperty.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdFilterRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/filter',
  tags: ['Browser'],
  summary: "Updates view's filter.",
  description: "Updates view's filter.",
  operationId: 'updateFilter',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "Updated view's filter.",
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(FilterPropertyDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateFilter.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: FilterDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateFilter.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdFilterFilterPropertyRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/filter/{filterProperty}',
  tags: ['Browser'],
  summary: "Updates view's filter property.",
  description: "Updates view's filter property.",
  operationId: 'updateFilterProperty',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      filterProperty: z
        .string()
        .openapi({
          param: {
            description: "view's filter property name",
            in: 'path',
            name: 'filterProperty',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: "Updated view's filter property.",
      content: {
        'application/json': {
          schema: FilterPropertyDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/updateFilterProperty.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.object({}),
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/updateFilterProperty.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdOrderRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/order',
  tags: ['Browser'],
  summary: "Returns view's order settings.",
  description: "Returns view's order settings.",
  operationId: 'getOrder',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: OrderDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getOrder.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdOrderRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/order',
  tags: ['Browser'],
  summary: "Updates view's order settings.",
  description: "Updates view's order settings.",
  operationId: 'updateOrder',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "Updated view's order settings.",
      content: {
        'application/json;charset=UTF-8': {
          schema: OrderDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateOrder.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: OrderDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateOrder.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/permissions',
  tags: ['Browser'],
  summary: "Returns view's permissions.",
  description: "Returns view's permissions.",
  operationId: 'getPermissions',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: PermissionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getPermissions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdPermissionsRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/permissions',
  tags: ['Browser'],
  summary: "Updates view's permissions.",
  description: "Updates view's permissions.",
  operationId: 'updatePermissions',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "Updated view's permissions.",
      content: {
        'application/json': {
          schema: PermissionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updatePermissions.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: PermissionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updatePermissions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdSettingsRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/settings',
  tags: ['Browser'],
  summary: "Returns view's settings.",
  description: "Returns view's settings (ie. name).",
  operationId: 'getSettings',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: SettingsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getSettings.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdSettingsRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/settings',
  tags: ['Browser'],
  summary: "Updates view's settings.",
  description: "Updates view's settings.",
  operationId: 'updateSettings',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "Updated view's settings.",
      content: {
        'application/json': {
          schema: SettingsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateSettings.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: SettingsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/updateSettings.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getBrowserViewsViewIdSettingsLocalRoute = createRoute({
  method: 'get',
  path: '/browser/views/{viewId}/settings/local',
  tags: ['Browser'],
  summary: "Returns view's local settings (for current user).",
  description: "Returns view's local settings (for current user).",
  operationId: 'getLocalSettings',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: LocalSettingsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/browsers/views/getLocalSettings.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putBrowserViewsViewIdSettingsLocalRoute = createRoute({
  method: 'put',
  path: '/browser/views/{viewId}/settings/local',
  tags: ['Browser'],
  summary: "Updates view's local settings (for current user).",
  description: "Updates view's local settings (for current user).",
  operationId: 'updateLocalSettings',
  request: {
    params: z.object({
      viewId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "view's identifier",
            in: 'path',
            name: 'viewId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: "Updated view's local settings (for current user).",
      content: {
        'application/json': {
          schema: LocalSettingsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/updateLocalSettings.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: LocalSettingsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/browsers/views/updateLocalSettings.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersRoute = createRoute({
  method: 'get',
  path: '/customers',
  tags: ['Clients'],
  summary: 'Returns list of simple clients representations',
  description: 'Returns list of simple clients representations',
  operationId: 'getAllNamesWithIds',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only clients modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(EntityWithNameDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getAllNamesWithIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postCustomersRoute = createRoute({
  method: 'post',
  path: '/customers',
  tags: ['Clients'],
  summary: 'Creates a new client.',
  description:
    'Creates a new client. All available fields are presented in PUT request.<p>\n  Required fields:\n  <ul>\n    <li>name</li>\n    <li>fullName</li>\n    <li>contact -> emails -> primary</li>\n  </ul>\n</p>\n',
  operationId: 'create_3',
  request: {
    body: {
      description: 'Created user object',
      content: {
        'application/json': {
          schema: CustomerDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/create.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/create.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersIdsRoute = createRoute({
  method: 'get',
  path: '/customers/ids',
  tags: ['Clients'],
  summary: "Returns clients' internal identifiers.",
  description: "Returns clients' internal identifiers.",
  operationId: 'getAllIds_2',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only clients modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      nameEquals: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'exact name of client',
            in: 'query',
            name: 'nameEquals',
            schema: { type: 'string' },
            required: false,
          },
        }),
      emailEquals: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'exact email of client',
            in: 'query',
            name: 'emailEquals',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postCustomersPersonsRoute = createRoute({
  method: 'post',
  path: '/customers/persons',
  tags: ['Clients'],
  summary: 'Creates a new person.',
  description:
    'Creates a new person. Required fields are presented in the example. Other fields (from PUT) may also be specified here.',
  operationId: 'create_2',
  request: {
    body: {
      description: 'Brand new person.',
      content: {
        'application/json;charset=UTF-8': {
          schema: CustomerPersonDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/create.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerPersonDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/create.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postCustomersPersonsAccessTokenRoute = createRoute({
  method: 'post',
  path: '/customers/persons/accessToken',
  tags: ['Clients'],
  summary: 'Generates a single use sign-in token.',
  description:
    "Generates a single use sign-in token for the customer person found for given login or e-mail. Returns 'url' and 'token' which allows to sign-in to customer portal as this person. Token is valid for two minutes and can be used only once. To sign-in to customer portal you should post 'token' provided as the 'accessToken' form param to the 'url' using POST method.Detailed description is available in the Customer API <a href=\"/api-doc/customer-api/authentication\">authentication</a>.",
  operationId: 'generateSingleUseSignInToken',
  request: {
    body: {
      description: 'Generated sign-in token.',
      content: {
        'application/json;charset=UTF-8': {
          schema: AccessTokenRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/persons/generateSingleUseSignInToken.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AccessTokenDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/persons/generateSingleUseSignInToken.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersPersonsIdsRoute = createRoute({
  method: 'get',
  path: '/customers/persons/ids',
  tags: ['Clients'],
  summary: "Returns persons' internal identifiers.",
  description: "Returns persons' internal identifiers.",
  operationId: 'getAllIds_1',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only persons modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersPersonsPersonIdRoute = createRoute({
  method: 'get',
  path: '/customers/persons/{personId}',
  tags: ['Clients'],
  summary: 'Returns person details.',
  description: 'Returns person details.',
  operationId: 'getById_1',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerPersonDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersPersonsPersonIdRoute = createRoute({
  method: 'put',
  path: '/customers/persons/{personId}',
  tags: ['Clients'],
  summary: 'Updates an existing person.',
  description:
    'Only specified fields will be changed. One may not specify embeddable fields here - use separate API calls for updating them.',
  operationId: 'update_1',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated existing person.',
      content: {
        'application/json;charset=UTF-8': {
          schema: CustomerPersonDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/update.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerPersonDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/update.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteCustomersPersonsPersonIdRoute = createRoute({
  method: 'delete',
  path: '/customers/persons/{personId}',
  tags: ['Clients'],
  summary: 'Removes a person.',
  description: 'Removes a person.',
  operationId: 'delete_3',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getCustomersPersonsPersonIdContactRoute = createRoute({
  method: 'get',
  path: '/customers/persons/{personId}/contact',
  tags: ['Clients'],
  summary: 'Returns contact of a given person.',
  description: 'Returns contact of a given person.',
  operationId: 'getContact',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: PersonContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/getContact.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersPersonsPersonIdContactRoute = createRoute({
  method: 'put',
  path: '/customers/persons/{personId}/contact',
  tags: ['Clients'],
  summary: 'Updates contact of a given person.',
  description:
    'Updates contact of a given person. Sets that this person uses specific address and contact (not the one from customer).',
  operationId: 'updateContact',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated contact of a given person.',
      content: {
        'application/json;charset=UTF-8': {
          schema: PersonContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/updateContact.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: PersonContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/persons/updateContact.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersPersonsPersonIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/customers/persons/{personId}/customFields',
  tags: ['Clients'],
  summary: 'Returns custom fields of a given person.',
  description: 'Returns custom fields of a given person.',
  operationId: 'getCustomFields',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/persons/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersPersonsPersonIdCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/customers/persons/{personId}/customFields',
  tags: ['Clients'],
  summary: 'Updates custom fields of a given person.',
  description: 'Updates custom fields of a given person.',
  operationId: 'updateCustomFields',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given person.',
      content: {
        'application/json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/persons/updateCustomFields.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/persons/updateCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteCustomersPriceListsPriceListIdRoute = createRoute({
  method: 'delete',
  path: '/customers/priceLists/{priceListId}',
  tags: ['Clients'],
  summary: 'Removes a customer price list.',
  description: 'Removes a customer price list.',
  operationId: 'delete_4',
  request: {
    params: z.object({
      priceListId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "customer price list's internal identifier",
            in: 'path',
            name: 'priceListId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getCustomersCustomerIdRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}',
  tags: ['Clients'],
  summary: 'Returns client details.',
  description: 'Returns client details.',
  operationId: 'getById_2',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'list of additional fields which should be embedded in the response (available options: persons)',
            in: 'query',
            name: 'embed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}',
  tags: ['Clients'],
  summary: 'Updates an existing client.',
  description:
    'Only specified fields will be changed (id is required). One may not specify embeddable fields here - use separate API calls for updating them.',
  operationId: 'update_2',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated client',
      content: {
        'application/json': {
          schema: CustomerDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/update.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomerDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/update.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteCustomersCustomerIdRoute = createRoute({
  method: 'delete',
  path: '/customers/{customerId}',
  tags: ['Clients'],
  summary: 'Removes a client.',
  description: 'Removes a client.',
  operationId: 'delete_5',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getCustomersCustomerIdAddressRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/address',
  tags: ['Clients'],
  summary: 'Returns address of a given client.',
  description: 'Returns address of a given client.',
  operationId: 'getAddress',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/address/getAddress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdAddressRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/address',
  tags: ['Clients'],
  summary: 'Updates address of a given client.',
  description: 'Updates address of a given client.',
  operationId: 'updateAddress',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated address of a given client.',
      content: {
        'application/json': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/address/updateAddress.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/address/updateAddress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersCustomerIdCategoriesRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/categories',
  tags: ['Clients'],
  summary: 'Returns categories of a given client.',
  description: 'Returns categories of a given client.',
  operationId: 'getCategories',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CategoriesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getCategories.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdCategoriesRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/categories',
  tags: ['Clients'],
  summary: 'Updates categories of a given client.',
  description: 'Updates categories of a given client.',
  operationId: 'updateCategories',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated categories of a given client.',
      content: {
        'application/json': {
          schema: CategoriesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateCategories.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CategoriesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateCategories.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersCustomerIdContactRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/contact',
  tags: ['Clients'],
  summary: 'Returns contact of a given client.',
  description: 'Returns contact of a given client.',
  operationId: 'getContact_1',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getContact.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdContactRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/contact',
  tags: ['Clients'],
  summary: 'Updates contact of a given client.',
  description: 'Updates contact of a given client.',
  operationId: 'updateContact_1',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated contact of a given client.',
      content: {
        'application/json': {
          schema: ContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateContact.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateContact.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersCustomerIdCorrespondenceAddressRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/correspondenceAddress',
  tags: ['Clients'],
  summary: 'Returns correspondence address of a given client.',
  description: 'Returns correspondence address of a given client.',
  operationId: 'getCorrespondenceAddress',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/address/getCorrespondenceAddress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdCorrespondenceAddressRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/correspondenceAddress',
  tags: ['Clients'],
  summary: 'Updates correspondence address of a given client.',
  description: 'Updates correspondence address of a given client.',
  operationId: 'updateCorrespondenceAddress',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated address of a given client.',
      content: {
        'application/json': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/address/updateCorrespondenceAddress.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/customers/address/updateCorrespondenceAddress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersCustomerIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/customFields',
  tags: ['Clients'],
  summary: 'Returns custom fields of a given client.',
  description: 'Returns custom fields of a given client.',
  operationId: 'getCustomFields_1',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/customFields',
  tags: ['Clients'],
  summary: 'Updates custom fields of a given client.',
  description: 'Updates custom fields of a given client.',
  operationId: 'updateCustomFields_1',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given client.',
      content: {
        'application/json': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateCustomFields.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersCustomerIdCustomFieldsCustomFieldKeyRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/customFields/{customFieldKey}',
  tags: ['Clients'],
  summary: 'Returns custom field of a given client.',
  description: 'Returns custom field of a given client.',
  operationId: 'getCustomField',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      customFieldKey: z
        .string()
        .openapi({
          param: {
            description: "custom field's key",
            in: 'path',
            name: 'customFieldKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getCustomField.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdCustomFieldsCustomFieldKeyRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/customFields/{customFieldKey}',
  tags: ['Clients'],
  summary: 'Updates given custom field of a given client.',
  description: 'Updates given custom field of a given client.',
  operationId: 'updateCustomField',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      customFieldKey: z
        .string()
        .openapi({
          param: {
            description: "custom field's key",
            in: 'path',
            name: 'customFieldKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom field of a given client.',
      content: {
        'application/json': {
          schema: CustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateCustomField.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateCustomField.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getCustomersCustomerIdIndustriesRoute = createRoute({
  method: 'get',
  path: '/customers/{customerId}/industries',
  tags: ['Clients'],
  summary: 'Returns industries of a given client.',
  description: 'Returns industries of a given client.',
  operationId: 'getIndustries',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: IndustriesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/getIndustries.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putCustomersCustomerIdIndustriesRoute = createRoute({
  method: 'put',
  path: '/customers/{customerId}/industries',
  tags: ['Clients'],
  summary: 'Updates industries of a given client.',
  description: 'Updates industries of a given client.',
  operationId: 'updateIndustries',
  request: {
    params: z.object({
      customerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "client's internal identifier",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated industries of a given client.',
      content: {
        'application/json': {
          schema: CategoriesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateIndustries.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: IndustriesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/customers/updateIndustries.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getDictionariesActiveRoute = createRoute({
  method: 'get',
  path: '/dictionaries/active',
  tags: ['Dictionaries'],
  summary: 'Returns active dictionary entities for all types.',
  description: 'Returns active dictionary entities for all types.',
  operationId: 'getActive',
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ManyValuesPerTypeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/dictionaries/map-active.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getDictionariesAllRoute = createRoute({
  method: 'get',
  path: '/dictionaries/all',
  tags: ['Dictionaries'],
  summary: 'Returns dictionary entities for all types. Both active and not active ones.',
  description:
    '<div>\n  <p>\n    XTRF holds many user-defined dictionaries (ie. countries).\n    Each dictionary contains a set of values (ie. Poland or Germany).\n    A default value may be defined for a dictionary.\n  </p>\n  <p>\n    Dictionary values are identified using internal identifier which is constant and unique among other values from the same dictionary.\n    Please note that name used in dictionary values is presented in the locale of the current identity.\n    The same dictionary value can have different names, ie. "Poland" for one user, "Polska" for another one.\n  </p>\n  <p>\n    Possible dictionary types with short explanation:\n    <ul>\n      <li>calculationUnit - predefined values of how to calculate the volume of work into the price</li>\n      <li>category - labels to organize data on the platform</li>\n      <li>country - list of countries used on the platform</li>\n      <li>currency - currencies used in financial operations in the system</li>\n      <li>industry - industry sectors which clients specialize in</li>\n      <li>jobType - services offered by a company used in customized workflows</li>\n      <li>language - list of languages and its values used on the platform</li>\n      <li>leadSource - lead/recruitment places where new clients and vendors may be found</li>\n      <li>personDepartment - departments in which contact person may be assigned to</li>\n      <li>personPosition - positions in which user may be associated with</li>\n      <li>province - states and provinces used in various documents on the platform</li>\n      <li>specialization - list of specific qualifications required to perform a specific job in the task, for ex. medical, military</li>\n    </ul>\n  </p>\n</div>',
  operationId: 'getAll_1',
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ManyValuesPerTypeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/dictionaries/map-all.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getDictionariesCurrencyIsoCodeExchangeRateRoute = createRoute({
  method: 'get',
  path: '/dictionaries/currency/{isoCode}/exchangeRate',
  tags: ['Currency exchange rates'],
  summary: 'Returns currency exchange rates.',
  description: 'Returns currency exchange rates.',
  operationId: 'getByIsoCode',
  request: {
    params: z.object({
      isoCode: z
        .string()
        .openapi({
          param: {
            description: 'iso code, https://www.xe.com/iso4217.php',
            in: 'path',
            name: 'isoCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CurrencyHistoryDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/dictionaries/currency/getByIsoCode.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postDictionariesCurrencyIsoCodeExchangeRateRoute = createRoute({
  method: 'post',
  path: '/dictionaries/currency/{isoCode}/exchangeRate',
  tags: ['Currency exchange rates'],
  summary: 'Adding currency exchange rates.',
  description: 'Adding currency exchange rates via API',
  operationId: 'createExchangeRate',
  request: {
    params: z.object({
      isoCode: z
        .string()
        .openapi({
          param: {
            description: 'iso code, https://www.xe.com/iso4217.php',
            in: 'path',
            name: 'isoCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Adding new currency exchange rates',
      content: {
        'application/json': {
          schema: CurrencyHistoryDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/dictionaries/currency/createExchangeRate.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getDictionariesTypeActiveRoute = createRoute({
  method: 'get',
  path: '/dictionaries/{type}/active',
  tags: ['Dictionaries'],
  summary: 'Returns active values from a given dictionary.',
  description: 'Returns active values from a given dictionary.',
  operationId: 'getActiveByType',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'dictionary type',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      nameEquals: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'exact name of entity',
            in: 'query',
            name: 'nameEquals',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: DictionaryEntitySchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/dictionaries/currency-active-v1.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getDictionariesTypeAllRoute = createRoute({
  method: 'get',
  path: '/dictionaries/{type}/all',
  tags: ['Dictionaries'],
  summary: 'Returns all values (both active and not active) from a given dictionary.',
  description: 'Returns all values (both active and not active) from a given dictionary.',
  operationId: 'getAllByType',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'dictionary type',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      nameEquals: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'exact name of entity',
            in: 'query',
            name: 'nameEquals',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: DictionaryEntitySchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/dictionaries/currency-all-v1.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getDictionariesTypeIdRoute = createRoute({
  method: 'get',
  path: '/dictionaries/{type}/{id}',
  tags: ['Dictionaries'],
  summary: 'Returns specific value from a given dictionary.',
  description: 'Returns specific value from a given dictionary.',
  operationId: 'getByTypeAndId',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'dictionary type',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
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
            description: 'dictionary value identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: DictionaryEntitySchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/dictionaries/currency-v1.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postFilesRoute = createRoute({
  method: 'post',
  path: '/files',
  tags: ['Files'],
  summary:
    'Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.',
  description:
    'When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.\nUploading a file will result in a file token, which can be used to reference this file in other API calls.\n Each file must be uploaded separately.\n Keep in mind that file token has limited validity (ie. 10 minutes).\n Therefore files must be uploaded just before issuing API call which reference them.\n',
  operationId: 'uploadFile',
  request: {
    body: {
      description: 'Uploaded file',
      content: { 'multipart/form-data': { schema: FileToUploadDtoSchema } },
      required: true,
    },
  },
  responses: { default: { description: 'default response', content: {} } },
})

export const getJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{jobId}',
  tags: ['Jobs (Classic)'],
  summary: 'Returns job details by jobId.',
  description: 'Returns job details by jobId.',
  operationId: 'getJobDetails',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: JobDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/getJobDetails.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putJobsJobIdDatesRoute = createRoute({
  method: 'put',
  path: '/jobs/{jobId}/dates',
  tags: ['Jobs (Classic)'],
  summary: 'Updates dates of a given job.',
  description: 'Updates dates of a given job.',
  operationId: 'updateDates',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'New job dates.',
      content: {
        'application/json': {
          schema: JobDatesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/updateDates.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getJobsJobIdFilesRoute = createRoute({
  method: 'get',
  path: '/jobs/{jobId}/files',
  tags: ['Jobs (Classic)'],
  summary: 'Returns list of input and output files of a job.',
  description: 'Returns list of input and output files of a job.',
  operationId: 'getJobFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: JobFilesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/getJobFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postJobsJobIdFilesOutputRoute = createRoute({
  method: 'post',
  path: '/jobs/{jobId}/files/output',
  tags: ['Jobs (Classic)'],
  operationId: 'assignFileToJobOutput',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Assigns file to job output files.',
      content: {
        'application/json;charset=UTF-8': {
          schema: TaskFileDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/assignFileToJobOutput.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { default: { description: 'default response', content: {} } },
})

export const getJobsJobIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{jobId}/files/{fileId}',
  tags: ['Jobs (Classic)'],
  summary: 'Returns file metadata.',
  description: 'Returns file metadata.',
  operationId: 'getJobFiles_1',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "file's internal identifier",
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: FileMetadataDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/getJobFileMetadata.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putJobsJobIdInstructionsRoute = createRoute({
  method: 'put',
  path: '/jobs/{jobId}/instructions',
  tags: ['Jobs (Classic)'],
  summary: 'Updates instructions for a job.',
  description: 'Updates instructions for a job.',
  operationId: 'updateInstructions',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions for a job.',
      content: {
        'application/json': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/updateInstructionsForJob.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putJobsJobIdStatusRoute = createRoute({
  method: 'put',
  path: '/jobs/{jobId}/status',
  tags: ['Jobs (Classic)'],
  summary: 'Changes job status if possible (400 Bad Request is returned otherwise).',
  description:
    'Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>',
  operationId: 'changeStatus',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changed job status.',
      content: {
        'application/json': {
          schema: JobStatusDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/changeStatus.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putJobsJobIdVendorRoute = createRoute({
  method: 'put',
  path: '/jobs/{jobId}/vendor',
  tags: ['Jobs (Classic)'],
  summary: 'Assigns vendor to a job in a project.',
  description: 'Assigns vendor to a job in a project.',
  operationId: 'assignVendor',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Assigned vendor to a job in a project.',
      content: {
        'application/json': {
          schema: AssignVendorDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/jobs/assignVendor.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getLicenseRoute = createRoute({
  method: 'get',
  path: '/license',
  tags: ['License'],
  summary: 'Returns license content.',
  description: 'Returns license content.',
  operationId: 'getLicense',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: GetLicenseResultSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/license/getLicense.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postLicenseRefreshRoute = createRoute({
  method: 'post',
  path: '/license/refresh',
  tags: ['License'],
  summary: 'Refreshes license content.',
  description:
    'Refreshes license content. This method returns OK immediately and license is refreshed asynchronously. It takes a while (usually a few seconds) for the license to be actually refreshed.',
  operationId: 'refresh',
  responses: { 204: { description: 'Success' } },
})

export const postMacrosMacroIdRunRoute = createRoute({
  method: 'post',
  path: '/macros/{macroId}/run',
  tags: ['Macros'],
  summary: 'Executes a macro.',
  description:
    'Runs a specified macro on a specified list of items ("list" variable in the macro code). The list of items can be empty if the macro doesn\'t use it. Additional custom parameters can be provided to the macro when necessary ("params" variable in the macro code).\n\n <BR>Note: Macros that support parameters can be also run from GUI (Views in Home Portal),so they should also handle the empty parameters map (e.g. by defining default values when parameters are not provided).',
  operationId: 'run',
  request: {
    params: z.object({
      macroId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'macro internal identifier',
            in: 'path',
            name: 'macroId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Generated client invoices documents.',
      content: {
        'application/json;charset=UTF-8': {
          schema: MacroRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/macros/runMacroAsynchronously.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ActionStartedDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/macros/runMacroSynchronouslyWithParametersWithoutIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  tags: ['Projects (Classic)'],
  summary: 'Creates a new Classic Project.',
  description:
    'Creates a new Classic Project. If the specified service ID refers to Smart Project, 400 Bad Request is returned instead.',
  operationId: 'create_5',
  request: {
    body: {
      description: 'Created a new Classic Project.',
      content: {
        'application/json;charset=UTF-8': {
          schema: ClassicProjectCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createProject.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProjectDTOv1Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createProject.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProjectsFilesFileIdDownloadRoute = createRoute({
  method: 'get',
  path: '/projects/files/{fileId}/download',
  tags: ['Projects (Classic)'],
  summary: 'Downloads a file.',
  description: 'Downloads a file.',
  operationId: 'getFileById',
  request: {
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: "file's internal identifier",
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Success!', content: {} } },
})

export const getProjectsIdsRoute = createRoute({
  method: 'get',
  path: '/projects/ids',
  tags: ['Projects (Classic)'],
  summary: "Returns projects' internal identifiers.",
  description: "Returns projects' internal identifiers.",
  operationId: 'getAllIds_6',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only projects modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}',
  tags: ['Projects (Classic)'],
  summary: 'Returns project details.',
  description:
    'Returns project details. If the specified project ID refers to Smart Project, 400 Bad Request is returned instead.',
  operationId: 'getById_7',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'list of additional fields which should be embedded in the response (available options: tasks)',
            in: 'query',
            name: 'embed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProjectDTOv1Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}',
  tags: ['Projects (Classic)'],
  summary: 'Removes a project.',
  description: 'Removes a project.',
  operationId: 'delete_12',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getProjectsProjectIdContactsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/contacts',
  tags: ['Projects (Classic)'],
  summary: 'Returns contacts of a given project.',
  description: 'Returns contacts of a given project.',
  operationId: 'getContacts',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putProjectsProjectIdContactsRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/contacts',
  tags: ['Projects (Classic)'],
  summary: 'Updates contacts of a given project.',
  description: 'Updates contacts of a given project.',
  operationId: 'updateContacts',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated contacts of a given project.',
      content: {
        'application/json': {
          schema: ContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateContacts.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProjectsProjectIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/customFields',
  tags: ['Projects (Classic)'],
  summary: 'Returns custom fields of a given project.',
  description: 'Returns custom fields of a given project.',
  operationId: 'getCustomFields_5',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putProjectsProjectIdCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/customFields',
  tags: ['Projects (Classic)'],
  summary: 'Updates custom fields of a given project.',
  description: 'Updates custom fields of a given project.',
  operationId: 'updateCustomFields_3',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given project.',
      content: {
        'application/json': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateCustomFields.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProjectsProjectIdDatesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/dates',
  tags: ['Projects (Classic)'],
  summary: 'Returns dates of a given project.',
  description: 'Returns dates of a given project.',
  operationId: 'getDates_1',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProjectDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getDates.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putProjectsProjectIdDatesRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/dates',
  tags: ['Projects (Classic)'],
  summary: 'Updates dates of a given project.',
  description: 'Updates dates of a given project.',
  operationId: 'updateDates_1',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated dates of a given project..',
      content: {
        'application/json': {
          schema: ProjectDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateDates.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProjectDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateDates.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProjectsProjectIdFinanceRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/finance',
  tags: ['Projects (Classic)'],
  summary: 'Returns finance of a given project.',
  description: 'Returns finance of a given project.',
  operationId: 'getFinance',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: FinanceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getFinance.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postProjectsProjectIdFinancePayablesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/finance/payables',
  tags: ['Projects (Classic)'],
  summary: 'Adds a payable to a project.',
  description: 'Adds a payable to a project.',
  operationId: 'createPayable',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PayableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createPayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createPayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putProjectsProjectIdFinancePayablesPayableIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/finance/payables/{payableId}',
  tags: ['Projects (Classic)'],
  summary: 'Updates a payable.',
  description: 'Updates a payable.',
  operationId: 'updatePayable',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updatePayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updatePayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteProjectsProjectIdFinancePayablesPayableIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/finance/payables/{payableId}',
  tags: ['Projects (Classic)'],
  summary: 'Deletes a payable.',
  description: 'Deletes a payable.',
  operationId: 'deletePayable',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postProjectsProjectIdFinanceReceivablesRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/finance/receivables',
  tags: ['Projects (Classic)'],
  summary: 'Adds a receivable to a project.',
  description: 'Adds a receivable to a project.',
  operationId: 'createReceivable',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReceivableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putProjectsProjectIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/finance/receivables/{receivableId}',
  tags: ['Projects (Classic)'],
  summary: 'Updates a receivable.',
  description: 'Updates a receivable.',
  operationId: 'updateReceivable',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteProjectsProjectIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}/finance/receivables/{receivableId}',
  tags: ['Projects (Classic)'],
  summary: 'Deletes a receivable.',
  description: 'Deletes a receivable.',
  operationId: 'deleteReceivable',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getProjectsProjectIdInstructionsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/instructions',
  tags: ['Projects (Classic)'],
  summary: 'Returns instructions of a given project.',
  description: 'Returns instructions of a given project.',
  operationId: 'getInstructions',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/getInstructions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putProjectsProjectIdInstructionsRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}/instructions',
  tags: ['Projects (Classic)'],
  summary: 'Updates instructions of a given project.',
  description: 'Updates instructions of a given project.',
  operationId: 'updateInstructions_1',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions of a given project.',
      content: {
        'application/json': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateInstructions.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/updateInstructions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postProjectsProjectIdLanguageCombinationsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/languageCombinations',
  tags: ['Projects (Classic)'],
  summary: 'Creates a new language combination for a given project without creating a task.',
  description: 'Creates a new language combination for a given project without creating a task.',
  operationId: 'createLanguageCombination',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Created language combination for a given project without creating a task.',
      content: {
        'application/json': {
          schema: CommonLanguageCombinationDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v1/projects/createLanguageCombination.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CommonLanguageCombinationDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v1/projects/createLanguageCombination.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postProjectsProjectIdTasksRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/tasks',
  tags: ['Projects (Classic)'],
  summary: 'Creates a new task for a given project.',
  description:
    'Creates a new task for a given project.<p>\n  Required fields:\n  <ul>\n    <li>languageCombination</li>\n    <li>specializationId</li>\n    <li>workflowId</li>\n  </ul>\n</p>\n',
  operationId: 'createTask',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Created new task for a given project.',
      content: {
        'application/json': {
          schema: TaskCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createTask.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: TaskDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/projects/createTask.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersIdsRoute = createRoute({
  method: 'get',
  path: '/providers/ids',
  tags: ['Vendors'],
  summary: "Returns providers' internal identifiers.",
  description: "Returns providers' internal identifiers.",
  operationId: 'getAllIds_5',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only providers modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersPersonsIdsRoute = createRoute({
  method: 'get',
  path: '/providers/persons/ids',
  tags: ['Vendors'],
  summary: "Returns persons' internal identifiers.",
  description: "Returns persons' internal identifiers.",
  operationId: 'getAllIds_4',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only persons modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/persons/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersPersonsPersonIdRoute = createRoute({
  method: 'get',
  path: '/providers/persons/{personId}',
  tags: ['Vendors'],
  summary: 'Returns person details.',
  description: 'Returns person details.',
  operationId: 'getById_4',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProviderPersonDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/persons/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteProvidersPersonsPersonIdRoute = createRoute({
  method: 'delete',
  path: '/providers/persons/{personId}',
  tags: ['Vendors'],
  summary: 'Removes a person.',
  description: 'Removes a person.',
  operationId: 'delete_8',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success', content: {} } },
})

export const getProvidersPersonsPersonIdContactRoute = createRoute({
  method: 'get',
  path: '/providers/persons/{personId}/contact',
  tags: ['Vendors'],
  summary: 'Returns contact of a given person.',
  description: 'Returns contact of a given person.',
  operationId: 'getContact_2',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: PersonContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/persons/getContact.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersPersonsPersonIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/providers/persons/{personId}/customFields',
  tags: ['Vendors'],
  summary: 'Returns custom fields of a given person.',
  description: 'Returns custom fields of a given person.',
  operationId: 'getCustomFields_2',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/providers/persons/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postProvidersPersonsPersonIdNotificationInvitationRoute = createRoute({
  method: 'post',
  path: '/providers/persons/{personId}/notification/invitation',
  tags: ['Vendors'],
  summary: 'Sends invitation to Vendor Portal.',
  description: 'Sends invitation to Vendor Portal.',
  operationId: 'sendInvitations',
  request: {
    params: z.object({
      personId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "person's internal identifier",
            in: 'path',
            name: 'personId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InvitationStatisticsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/providers/persons/sendInvitations.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteProvidersPriceListsPriceListIdRoute = createRoute({
  method: 'delete',
  path: '/providers/priceLists/{priceListId}',
  tags: ['Vendors'],
  summary: 'Removes a provider price list.',
  description: 'Removes a provider price list.',
  operationId: 'delete_9',
  request: {
    params: z.object({
      priceListId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider price list's internal identifier",
            in: 'path',
            name: 'priceListId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}',
  tags: ['Vendors'],
  summary: 'Returns provider details.',
  description: 'Returns provider details.',
  operationId: 'getById_5',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'list of adittional fields which should be embedded in the response (ie. persons)',
            in: 'query',
            name: 'embed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProviderDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteProvidersProviderIdRoute = createRoute({
  method: 'delete',
  path: '/providers/{providerId}',
  tags: ['Vendors'],
  summary: 'Removes a provider.',
  description: 'Removes a provider.',
  operationId: 'delete_10',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getProvidersProviderIdAddressRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}/address',
  tags: ['Vendors'],
  summary: 'Returns address of a given provider.',
  description: 'Returns address of a given provider.',
  operationId: 'getAddress_1',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/address/getAddress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersProviderIdCompetenciesRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}/competencies',
  tags: ['Vendors'],
  summary: 'Returns competencies of a given provider.',
  description: 'Returns competencies of a given provider.',
  operationId: 'getCompetencies',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CompetenciesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/getCompetencies.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersProviderIdContactRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}/contact',
  tags: ['Vendors'],
  summary: 'Returns contact of a given provider.',
  description: 'Returns contact of a given provider.',
  operationId: 'getContact_3',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ContactDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/getContact.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersProviderIdCorrespondenceAddressRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}/correspondenceAddress',
  tags: ['Vendors'],
  summary: 'Returns correspondence address of a given provider.',
  description: 'Returns correspondence address of a given provider.',
  operationId: 'getCorrespondenceAddress_1',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: AddressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/providers/address/getCorrespondenceAddress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getProvidersProviderIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}/customFields',
  tags: ['Vendors'],
  summary: 'Returns custom fields of a given provider.',
  description: 'Returns custom fields of a given provider.',
  operationId: 'getCustomFields_3',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postProvidersProviderIdNotificationInvitationRoute = createRoute({
  method: 'post',
  path: '/providers/{providerId}/notification/invitation',
  tags: ['Vendors'],
  summary: 'Sends invitations to Vendor Portal.',
  description: 'Sends invitations to Vendor Portal.',
  operationId: 'sendInvitations_1',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "provider's internal identifier",
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InvitationStatisticsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/providers/sendInvitations.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getQuotesIdsRoute = createRoute({
  method: 'get',
  path: '/quotes/ids',
  tags: ['Quotes (Classic)'],
  summary: "Returns quotes' internal identifiers.",
  description: "Returns quotes' internal identifiers.",
  operationId: 'getAllIds_7',
  request: {
    query: z.object({
      updatedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            description: 'only quotes modified since this timestamp',
            in: 'query',
            name: 'updatedSince',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(z.int32()),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/getIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getQuotesQuoteIdRoute = createRoute({
  method: 'get',
  path: '/quotes/{quoteId}',
  tags: ['Quotes (Classic)'],
  summary: 'Returns quote details.',
  description:
    'Returns quote details. If the specified quote ID refers to Smart Quote, 400 Bad Request is returned instead.',
  operationId: 'getById_8',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'list of adittional fields which should be embedded in the response (ie. tasks)',
            in: 'query',
            name: 'embed',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: QuoteDTOv1Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteQuotesQuoteIdRoute = createRoute({
  method: 'delete',
  path: '/quotes/{quoteId}',
  tags: ['Quotes (Classic)'],
  summary: 'Removes a quote.',
  description: 'Removes a quote.',
  operationId: 'delete_13',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postQuotesQuoteIdConfirmationSendRoute = createRoute({
  method: 'post',
  path: '/quotes/{quoteId}/confirmation/send',
  tags: ['Quotes (Classic)'],
  summary: 'Sends a quote for customer confirmation.',
  description:
    'Sends a quote for customer confirmation. Quote status is changed to SENT and a document is sent to the customer.',
  operationId: 'send_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getQuotesQuoteIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/quotes/{quoteId}/customFields',
  tags: ['Quotes (Classic)'],
  summary: 'Returns custom fields of a given quote.',
  description: 'Returns custom fields of a given quote.',
  operationId: 'getCustomFields_6',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putQuotesQuoteIdCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/quotes/{quoteId}/customFields',
  tags: ['Quotes (Classic)'],
  summary: 'Updates custom fields of a given quote.',
  description: 'Updates custom fields of a given quote.',
  operationId: 'updateCustomFields_4',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given quote.',
      content: {
        'application/json': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updateCustomFields.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updateCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getQuotesQuoteIdDatesRoute = createRoute({
  method: 'get',
  path: '/quotes/{quoteId}/dates',
  tags: ['Quotes (Classic)'],
  summary: 'Returns dates of a given quote.',
  description: 'Returns dates of a given quote.',
  operationId: 'getDates_2',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: QuoteDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/getDates.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getQuotesQuoteIdFinanceRoute = createRoute({
  method: 'get',
  path: '/quotes/{quoteId}/finance',
  tags: ['Quotes (Classic)'],
  summary: 'Returns finance of a given quote.',
  description: 'Returns finance of a given quote.',
  operationId: 'getFinance_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: FinanceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/getFinance.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postQuotesQuoteIdFinancePayablesRoute = createRoute({
  method: 'post',
  path: '/quotes/{quoteId}/finance/payables',
  tags: ['Quotes (Classic)'],
  summary: 'Adds a payable.',
  description: 'Adds a payable.',
  operationId: 'createPayable_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Adds a payable.',
      content: {
        'application/json': {
          schema: PayableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/createCATPayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/createCATPayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putQuotesQuoteIdFinancePayablesPayableIdRoute = createRoute({
  method: 'put',
  path: '/quotes/{quoteId}/finance/payables/{payableId}',
  tags: ['Quotes (Classic)'],
  summary: 'Updates a payable.',
  description: 'Updates a payable.',
  operationId: 'updatePayable_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updates a payable.',
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updatePayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updatePayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteQuotesQuoteIdFinancePayablesPayableIdRoute = createRoute({
  method: 'delete',
  path: '/quotes/{quoteId}/finance/payables/{payableId}',
  tags: ['Quotes (Classic)'],
  summary: 'Deletes a payable.',
  description: 'Deletes a payable.',
  operationId: 'deletePayable_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quoteId's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postQuotesQuoteIdFinanceReceivablesRoute = createRoute({
  method: 'post',
  path: '/quotes/{quoteId}/finance/receivables',
  tags: ['Quotes (Classic)'],
  summary: 'Adds a receivable.',
  description: 'Adds a receivable.',
  operationId: 'createReceivable_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Adds a receivable.',
      content: {
        'application/json': {
          schema: ReceivableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/createReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/createReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putQuotesQuoteIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'put',
  path: '/quotes/{quoteId}/finance/receivables/{receivableId}',
  tags: ['Quotes (Classic)'],
  summary: 'Updates a receivable.',
  description: 'Updates a receivable.',
  operationId: 'updateReceivable_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updates a receivable.',
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updateReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updateReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteQuotesQuoteIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'delete',
  path: '/quotes/{quoteId}/finance/receivables/{receivableId}',
  tags: ['Quotes (Classic)'],
  summary: 'Deletes a receivable.',
  description: 'Deletes a receivable.',
  operationId: 'deleteReceivable_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quoteId's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getQuotesQuoteIdInstructionsRoute = createRoute({
  method: 'get',
  path: '/quotes/{quoteId}/instructions',
  tags: ['Quotes (Classic)'],
  summary: 'Returns instructions of a given quote.',
  description: 'Returns instructions of a given quote.',
  operationId: 'getInstructions_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/getInstructions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putQuotesQuoteIdInstructionsRoute = createRoute({
  method: 'put',
  path: '/quotes/{quoteId}/instructions',
  tags: ['Quotes (Classic)'],
  summary: 'Updates instructions of a given quote.',
  description: 'Updates instructions of a given quote.',
  operationId: 'updateInstructions_2',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions of a given project.',
      content: {
        'application/json': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updateInstructions.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/updateInstructions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postQuotesQuoteIdLanguageCombinationsRoute = createRoute({
  method: 'post',
  path: '/quotes/{quoteId}/languageCombinations',
  tags: ['Quotes (Classic)'],
  summary: 'Creates a new language combination for a given quote without creating a task.',
  description: 'Creates a new language combination for a given quote without creating a task.',
  operationId: 'createLanguageCombination_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Created a new language combination for a given quote without creating a task.',
      content: {
        'application/json': {
          schema: CommonLanguageCombinationDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v1/quotes/createLanguageCombination.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CommonLanguageCombinationDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v1/quotes/createLanguageCombination.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postQuotesQuoteIdStartRoute = createRoute({
  method: 'post',
  path: '/quotes/{quoteId}/start',
  tags: ['Quotes (Classic)'],
  summary: 'Starts a quote.',
  description: 'Starts a quote.',
  operationId: 'start',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postQuotesQuoteIdTasksRoute = createRoute({
  method: 'post',
  path: '/quotes/{quoteId}/tasks',
  tags: ['Quotes (Classic)'],
  summary: 'Creates a new task for a given quote.',
  description:
    'Creates a new task for a given quote. Required fields are presented in the example.',
  operationId: 'createTask_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given quote.',
      content: {
        'application/json': {
          schema: TaskDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/createTask.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: TaskDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/quotes/createTask.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postReportsExportXmlRoute = createRoute({
  method: 'post',
  path: '/reports/export/xml',
  tags: ['Reports'],
  summary: 'Exports reports definition to XML.',
  description: 'Exports reports definition to XML.',
  operationId: 'exportToXML',
  request: {
    body: {
      description: 'Exported reports definition to XML.',
      content: {
        'application/json;charset=UTF-8': {
          schema: ExportRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/reports/exportToXML.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ReportResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/reports/exportToXML.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postReportsImportXmlRoute = createRoute({
  method: 'post',
  path: '/reports/import/xml',
  tags: ['Reports'],
  summary: 'Imports reports definition from XML.',
  description:
    'Imports a report definition from an XML using a file token. To obtain the token, you first need to upload a temporary XML file, as specified in the Files section. Note that the name of the imported report must be unique.',
  operationId: 'importFromXML',
  request: {
    body: {
      description: 'Imported reports definition from XML.',
      content: {
        'application/json;charset=UTF-8': {
          schema: ImportRequestDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/reports/importFromXML.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ImportResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/reports/importFromXML.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteReportsReportIdRoute = createRoute({
  method: 'delete',
  path: '/reports/{reportId}',
  tags: ['Reports'],
  summary: 'Removes a report.',
  description: 'Removes a report.',
  operationId: 'delete_11',
  request: {
    params: z.object({
      reportId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "report's internal identifier",
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postReportsReportIdDuplicateRoute = createRoute({
  method: 'post',
  path: '/reports/{reportId}/duplicate',
  tags: ['Reports'],
  summary: 'Duplicates a report.',
  description: 'Duplicates a report.',
  operationId: 'duplicate_1',
  request: {
    params: z.object({
      reportId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "report's internal identifier",
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const putReportsReportIdPreferredRoute = createRoute({
  method: 'put',
  path: '/reports/{reportId}/preferred',
  tags: ['Reports'],
  summary: 'Marks report as preferred or not.',
  description: 'Marks report as preferred or not.',
  operationId: 'setPreferred',
  request: {
    params: z.object({
      reportId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "report's internal identifier",
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Marked report as preferred or not.',
      content: { 'application/json;charset=UTF-8': { schema: PreferredRequestDTOSchema } },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getReportsReportIdResultCsvRoute = createRoute({
  method: 'get',
  path: '/reports/{reportId}/result/csv',
  tags: ['Reports'],
  summary: 'Generates CSV content for a report.',
  description: 'Generates CSV content for a report.',
  operationId: 'generateCSV',
  request: {
    params: z.object({
      reportId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "report's internal identifier",
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ReportResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/reports//generateCSV.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getReportsReportIdResultPrinterFriendlyRoute = createRoute({
  method: 'get',
  path: '/reports/{reportId}/result/printerFriendly',
  tags: ['Reports'],
  summary: 'Generates printer friendly content for a report.',
  description: 'Generates printer friendly content for a report.',
  operationId: 'generatePrinterFriendly',
  request: {
    params: z.object({
      reportId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "report's internal identifier",
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ReportResultDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/reports//generatePrinterFriendly.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getServicesActiveRoute = createRoute({
  method: 'get',
  path: '/services/active',
  tags: ['Dictionaries'],
  summary: 'Returns active services list',
  description: 'Returns active workflows list',
  operationId: 'getAllActive',
  request: {
    query: z.object({
      nameEquals: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'exact name of entity',
            in: 'query',
            name: 'nameEquals',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ServiceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/services/active-v1.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getServicesAllRoute = createRoute({
  method: 'get',
  path: '/services/all',
  tags: ['Dictionaries'],
  summary: 'Returns services list',
  description: 'Returns workflows list. Both active and not active ones.',
  operationId: 'getAll_3',
  request: {
    query: z.object({
      nameEquals: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'exact name of entity',
            in: 'query',
            name: 'nameEquals',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ServiceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/services/all-v1.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getSubscriptionRoute = createRoute({
  method: 'get',
  path: '/subscription',
  tags: ['Subscription'],
  summary: 'Returns all subscriptions',
  description:
    'Returns all subscriptions. Subscriptions are automatically removed if they do not work (ie. if 404 status is returned). To improve notification reliability one can use this method to check if subscription is still active and re-subscribe if necessary.',
  operationId: 'getAll_4',
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(ActiveSubscriptionDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/subscription/getAll.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postSubscriptionRoute = createRoute({
  method: 'post',
  path: '/subscription',
  tags: ['Subscription'],
  summary: 'Subscribe to event',
  description: 'Subscribe to event. Returns subscription Id.',
  operationId: 'subscribe',
  request: {
    body: {
      description: 'Returns subscription Id.',
      content: { 'application/json;charset=UTF-8': { schema: SubscriptionDTOSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.string(),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/subscription/subscribe_created.json#responseBody',
            },
          },
        },
      },
    },
    409: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.string(),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/subscription/subscribe_conflict.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getSubscriptionSupportsRoute = createRoute({
  method: 'get',
  path: '/subscription/supports',
  tags: ['Subscription'],
  summary: 'This method can be used to determine if hooks are supported.',
  description: 'This method can be used to determine if hooks are supported.',
  operationId: 'areHooksSupported',
  responses: {
    default: {
      description: 'Success',
      content: { 'application/vnd.xtrf-v1+json;charset=UTF-8': { schema: z.boolean() } },
    },
  },
})

export const deleteSubscriptionSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/subscription/{subscriptionId}',
  tags: ['Subscription'],
  summary: 'Unsubscribe from event',
  description: 'Unsubscribe from job status changed event',
  operationId: 'unsubscribe',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const deleteTasksTaskIdRoute = createRoute({
  method: 'delete',
  path: '/tasks/{taskId}',
  tags: ['Tasks (Classic)'],
  summary: 'Removes a task.',
  description: 'Removes a task.',
  operationId: 'delete_14',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      removeFilesFromDisc: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'remove files from disc',
            in: 'query',
            name: 'removeFilesFromDisc',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      removeExternalProjects: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'remove external projects (ie. from CAT Tool)',
            in: 'query',
            name: 'removeExternalProjects',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      forceJobsRemoval: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'force jobs removal (ie. started or ready)',
            in: 'query',
            name: 'forceJobsRemoval',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const putTasksTaskIdClientTaskPONumberRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}/clientTaskPONumber',
  tags: ['Tasks (Classic)'],
  summary: 'Updates Client Task PO Number of a given task.',
  description: 'Updates Client Task PO Number of a given task.',
  operationId: 'updateClientTaskPONumber',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Task PO Number of a given task.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateClientTaskPONumber.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v1/tasks/updateClientTaskPONumber.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getTasksTaskIdContactsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}/contacts',
  tags: ['Tasks (Classic)'],
  summary: 'Returns contacts of a given task.',
  description: 'Returns contacts of a given task.',
  operationId: 'getContacts_1',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/getContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putTasksTaskIdContactsRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}/contacts',
  tags: ['Tasks (Classic)'],
  summary: 'Updates contacts of a given task.',
  description: 'Updates contacts of a given task.',
  operationId: 'updateContacts_1',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated contacts of given task.',
      content: {
        'application/json': {
          schema: ContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateContacts.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/vnd.xtrf-v1+json;charset=UTF-8': { schema: ContactsDTOSchema } },
    },
  },
})

export const getTasksTaskIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}/customFields',
  tags: ['Tasks (Classic)'],
  summary: 'Returns custom fields of a given task.',
  description: 'Returns custom fields of a given task.',
  operationId: 'getCustomFields_7',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putTasksTaskIdCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}/customFields',
  tags: ['Tasks (Classic)'],
  summary: 'Updates custom fields of a given task.',
  description: 'Updates custom fields of a given task.',
  operationId: 'updateCustomFields_5',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields',
      content: {
        'application/json': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateCustomFields.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getTasksTaskIdDatesRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}/dates',
  tags: ['Tasks (Classic)'],
  summary: 'Returns dates of a given task.',
  description: 'Returns dates of a given task.',
  operationId: 'getDates_3',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: ProjectDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/getDates.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putTasksTaskIdDatesRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}/dates',
  tags: ['Tasks (Classic)'],
  summary: 'Updates dates of a given task.',
  description: 'Updates dates of a given task.',
  operationId: 'updateDates_2',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated dates of a given task.',
      content: {
        'application/json': {
          schema: ProjectDatesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateDates.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/vnd.xtrf-v1+json;charset=UTF-8': { schema: ProjectDatesDTOSchema } },
    },
  },
})

export const getTasksTaskIdFilesRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}/files',
  tags: ['Tasks (Classic)'],
  summary: 'Returns lists of files of a given task.',
  description:
    'Returns several lists of files for a given task: input files divided by type, output files, bundles, files per job, preview files.',
  operationId: 'getTaskFiles',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: TaskFilesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/getTaskFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postTasksTaskIdFilesInputRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskId}/files/input',
  tags: ['Tasks (Classic)'],
  summary: 'Adds files to a given task.',
  description: 'Adds files to a given task.',
  operationId: 'addFile',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: FileDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/addFile.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getTasksTaskIdInstructionsRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}/instructions',
  tags: ['Tasks (Classic)'],
  summary: 'Returns instructions of a given task.',
  description: 'Returns instructions of a given task.',
  operationId: 'getInstructions_2',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/getInstructions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putTasksTaskIdInstructionsRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}/instructions',
  tags: ['Tasks (Classic)'],
  summary: 'Updates instructions of a given task.',
  description: 'Updates instructions of a given task.',
  operationId: 'updateInstructions_3',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions of a given task.',
      content: {
        'application/json': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateInstructions.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: InstructionsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateInstructions.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putTasksTaskIdNameRoute = createRoute({
  method: 'put',
  path: '/tasks/{taskId}/name',
  tags: ['Tasks (Classic)'],
  summary: 'Updates name of a given task.',
  description: 'Updates name of a given task.',
  operationId: 'updateName',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateName.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/updateName.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getTasksTaskIdProgressRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskId}/progress',
  tags: ['Tasks (Classic)'],
  summary: 'Returns progress of a given task.',
  description:
    "Returns progress of a given task. Progress contains information about task's status (ie. opened or ready) and current phase (ie. translation). Workflow phase is defined as the first one which contains not ready jobs (ie. opened or started). When no such job exists then workflow phase is not included.",
  operationId: 'getProgress',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: TaskProgressDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v1/tasks/getProgress.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postTasksTaskIdStartRoute = createRoute({
  method: 'post',
  path: '/tasks/{taskId}/start',
  tags: ['Tasks (Classic)'],
  summary: 'Starts a task.',
  description: 'Starts a task.',
  operationId: 'start_1',
  request: {
    params: z.object({
      taskId: z
        .string()
        .openapi({
          param: {
            description: "task's internal identifier",
            in: 'path',
            name: 'taskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Returns list of simple users representations',
  description: 'Returns list of simple users representations',
  operationId: 'getAllNamesWithIds_1',
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: z.array(EntityWithNameDTOSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/getAllNamesWithIds.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Returns currently signed in user details.',
  description: 'Returns currently signed in user details.',
  operationId: 'getMe',
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: UserDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/getMe.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getUsersMeTimeZoneRoute = createRoute({
  method: 'get',
  path: '/users/me/timeZone',
  tags: ['Users'],
  summary: 'Returns time zone preferred by user currently signed in.',
  description: 'Returns time zone preferred by user currently signed in.',
  operationId: 'getTimeZone',
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: TimeZoneDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/getTimeZone.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Returns user details.',
  description: 'Returns user details.',
  operationId: 'getById_6',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: UserDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/users/{userId}',
  tags: ['Users'],
  summary: 'Updates an existing user.',
  description: 'Updates an existing user.',
  operationId: 'update_3',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated existing user.',
      content: {
        'application/json': {
          schema: UserDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/update2.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: UserDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/update2.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getUsersUserIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/customFields',
  tags: ['Users'],
  summary: 'Returns custom fields of a given user.',
  description: 'Returns custom fields of a given user.',
  operationId: 'getCustomFields_4',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putUsersUserIdCustomFieldsRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/customFields',
  tags: ['Users'],
  summary: 'Updates custom fields of a given user.',
  description: 'Updates custom fields of a given user.',
  operationId: 'updateCustomFields_2',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given user.',
      content: {
        'application/json': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/updateCustomFields.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/updateCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getUsersUserIdCustomFieldsCustomFieldKeyRoute = createRoute({
  method: 'get',
  path: '/users/{userId}/customFields/{customFieldKey}',
  tags: ['Users'],
  summary: 'Returns custom field of a given user.',
  description: 'Returns custom field of a given user.',
  operationId: 'getCustomField_1',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      customFieldKey: z
        .string()
        .openapi({
          param: {
            description: "custom field's key",
            in: 'path',
            name: 'customFieldKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/getCustomField.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putUsersUserIdCustomFieldsCustomFieldKeyRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/customFields/{customFieldKey}',
  tags: ['Users'],
  summary: 'Updates given custom field of a given user.',
  description: 'Updates given custom field of a given user.',
  operationId: 'updateCustomField_1',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      customFieldKey: z
        .string()
        .openapi({
          param: {
            description: "custom field's key",
            in: 'path',
            name: 'customFieldKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom fields of a given user.',
      content: {
        'application/json': {
          schema: CustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/updateCustomField.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/vnd.xtrf-v1+json;charset=UTF-8': {
          schema: CustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/users/updateCustomField.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putUsersUserIdPasswordRoute = createRoute({
  method: 'put',
  path: '/users/{userId}/password',
  tags: ['Users'],
  summary: "Sets user's password to a new value.",
  description: "Sets user's password to a new value.",
  operationId: 'changePassword',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "user's internal identifier",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              newPassword: z.string().exactOptional().openapi({ description: 'new password' }),
              oldPassword: z.string().exactOptional().openapi({ description: 'old password' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2JobsForExternalIdRoute = createRoute({
  method: 'get',
  path: '/v2/jobs/for-external-id',
  tags: ['Jobs (Smart)(v2)'],
  operationId: 'getByExternalId',
  request: {
    query: z.object({
      externalProjectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "job's externalProjectId",
            in: 'query',
            name: 'externalProjectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      externalId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "job's external identifier",
            in: 'query',
            name: 'externalId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { default: { description: 'default response', content: {} } },
})

export const getV2JobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v2/jobs/{jobId}',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Returns details for a job.',
  description: 'Returns details for a job.',
  operationId: 'getFileById_1',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ProjectFileDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2JobsJobIdDatesRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/dates',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Updates dates of a given job.',
  description: 'Updates dates of a given job.',
  operationId: 'changeDates',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'New job dates.',
      content: {
        'application/json': {
          schema: JobDatesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/changeDates.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2JobsJobIdFilesAddExternalLinkRoute = createRoute({
  method: 'post',
  path: '/v2/jobs/{jobId}/files/addExternalLink',
  tags: ['Jobs (Smart)(v2)'],
  operationId: 'addExternalFileLink',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Added file links to the project as added by PM.',
      content: { 'application/json': { schema: ExternalFileDtoSchema } },
      required: true,
    },
  },
  responses: { default: { description: 'default response', content: {} } },
})

export const getV2JobsJobIdFilesDeliveredRoute = createRoute({
  method: 'get',
  path: '/v2/jobs/{jobId}/files/delivered',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Returns list of files delivered in the job.',
  description: 'Returns list of files delivered in the job.',
  operationId: 'getDeliveredFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ProjectFileDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/getDeliveredFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2JobsJobIdFilesDeliveredAddRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/files/delivered/add',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Adds files to the project as delivered in the job.',
  description:
    'Adds files to the project as delivered in the job. The files have to be uploaded beforehand (see "POST /jobs/{jobId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>',
  operationId: 'addFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Added files to the project as delivered in the job.',
      content: {
        'application/json': {
          schema: FileCategorizationsDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/addFiles.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2JobsJobIdFilesDeliveredAddLinkRoute = createRoute({
  method: 'post',
  path: '/v2/jobs/{jobId}/files/delivered/addLink',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Adds file link to the project as a link delivered in the job.',
  description:
    'Adds file link to the project as a link delivered in the job. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>',
  operationId: 'addFileLinks',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Adds file link to the project as a link delivered in the job.',
      content: {
        'application/json': {
          schema: FileLinkCategorizationsDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/addFileLinksToJob.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/addFileLinksToJob.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2JobsJobIdFilesDeliveredUploadRoute = createRoute({
  method: 'post',
  path: '/v2/jobs/{jobId}/files/delivered/upload',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Uploads file to the project as a file delivered in the job.',
  description:
    'Uploads file to the project as a file delivered in the job. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /jobs/{jobId}/files/add" operation).',
  operationId: 'uploadFile_1',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Uploaded file to the project as a file delivered in the job.',
      content: { 'multipart/form-data': { schema: FileToUploadDtoSchema } },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FileDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/uploadFile.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2JobsJobIdFilesSharedReferenceFilesRoute = createRoute({
  method: 'get',
  path: '/v2/jobs/{jobId}/files/sharedReferenceFiles',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Returns list of files shared with the job as Reference Files.',
  description: 'Returns list of files shared with the job as Reference Files.',
  operationId: 'getSharedReferenceFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ProjectFileDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/getSharedReferenceFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2JobsJobIdFilesSharedReferenceFilesShareRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/files/sharedReferenceFiles/share',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Shares selected files as Reference Files with a job in a project.',
  description:
    'Shares selected files as Reference Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Work File, it will now be shared as Reference File (and not as Work File).',
  operationId: 'shareAsReferenceFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Shared selected files as Reference Files with a job in a project.',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/shareAsReferenceFiles.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesShareStatusDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/shareAsReferenceFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2JobsJobIdFilesSharedWorkFilesRoute = createRoute({
  method: 'get',
  path: '/v2/jobs/{jobId}/files/sharedWorkFiles',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Returns list of files shared with the job as Work Files.',
  description: 'Returns list of files shared with the job as Work Files.',
  operationId: 'getSharedWorkFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ProjectFileDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/getSharedWorkFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2JobsJobIdFilesSharedWorkFilesShareRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/files/sharedWorkFiles/share',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Shares selected files as Work Files with a job in a project.',
  description:
    'Shares selected files as Work Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Reference File, it will now be shared as Work File (and not as Reference File).',
  operationId: 'shareAsWorkFiles',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Shared selected files as Work Files with a job in a project.',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/shareAsWorkFiles.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesShareStatusDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/shareAsWorkFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2JobsJobIdFilesStopSharingRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/files/stopSharing',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Stops sharing selected files with a job in a project.',
  description:
    'Stops sharing selected files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were not shared with the job.',
  operationId: 'stopSharing',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'File sharing stopped for a project task.',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/stopSharing.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesShareStatusDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/stopSharing.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2JobsJobIdInstructionsRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/instructions',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Updates instructions for a job.',
  description:
    'Updates instructions for a job. See also "PUT /projects/{projectId}/vendorInstructions" and "PUT /quotes/{quoteId}/vendorInstructions" for updating instructions for all jobs in a project or quote.',
  operationId: 'updateInstructions_4',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions for a job.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/updateInstructionsForJob.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2JobsJobIdStatusRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/status',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Changes job status if possible (400 Bad Request is returned otherwise).',
  description:
    'Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>',
  operationId: 'changeStatus_1',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changed job status.',
      content: {
        'application/json': {
          schema: JobStatusDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/changeStatus.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2JobsJobIdVendorRoute = createRoute({
  method: 'put',
  path: '/v2/jobs/{jobId}/vendor',
  tags: ['Jobs (Smart)(v2)'],
  summary: 'Assigns vendor to a job in a project.',
  description: 'Assigns vendor to a job in a project.',
  operationId: 'assignVendor_1',
  request: {
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: "job's internal identifier",
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Assigned vendor to a job in a project.',
      content: {
        'application/json': {
          schema: VendorPriceProfileDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/jobs/assignVendor.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2ProjectsRoute = createRoute({
  method: 'post',
  path: '/v2/projects',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Creates a new Smart Project.',
  description:
    'Creates a new Smart Project. If the specified service ID refers to Classic Project, 400 Bad Request is returned instead.',
  operationId: 'create_6',
  request: { body: { content: { 'application/json': { schema: ProjectCreateDTOSchema } } } },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ProjectDTOv2Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/createProject.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2ProjectsFilesArchiveRoute = createRoute({
  method: 'post',
  path: '/v2/projects/files/archive',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Prepares a ZIP archive that contains the specified files.',
  description: 'Prepares a ZIP archive that contains the specified files.',
  operationId: 'archive',
  request: {
    body: {
      description: 'Prepared ZIP archive that contains the specified files.',
      content: {
        'application/json': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/archive.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesArchiveDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/archive.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2ProjectsFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/v2/projects/files/{fileId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns details of a file.',
  description: 'Returns details of a file.',
  operationId: 'getFileById_2',
  request: {
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: "file's internal identifier",
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ProjectFileDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getFileById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2ProjectsFilesFileIdDownloadFileNameRoute = createRoute({
  method: 'get',
  path: '/v2/projects/files/{fileId}/download/{fileName}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Downloads a file content.',
  description: 'Downloads a file content.',
  operationId: 'getFileContentById',
  request: {
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: "file's internal identifier",
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: "file's name",
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Success', content: {} } },
})

export const getV2ProjectsForExternalIdExternalProjectIdRoute = createRoute({
  method: 'get',
  path: '/v2/projects/for-external-id/{externalProjectId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns project details.',
  description: 'Returns project details.',
  operationId: 'getByExternalId_1',
  request: {
    params: z.object({
      externalProjectId: z
        .string()
        .openapi({
          param: {
            description: "project's external identifier",
            in: 'path',
            name: 'externalProjectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ProjectDTOv2Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2ProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns project details.',
  description:
    'Returns project details. If the specified project ID refers to Classic Project, 400 Bad Request is returned instead.',
  operationId: 'getById_9',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ProjectDTOv2Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2ProjectsProjectIdAddJobRoute = createRoute({
  method: 'post',
  path: '/v2/projects/{projectId}/addJob',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns process id.',
  operationId: 'addJobToProcess',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'projectId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: { 'application/json;charset=UTF-8': { schema: CATToolProjectDTOSchema } },
    },
  },
})

export const getV2ProjectsProjectIdCatToolProjectRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/catToolProject',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns if cat tool project is created or queued.',
  operationId: 'getCATToolProjectInfo',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'projectId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: { 'application/json;charset=UTF-8': { schema: CATToolProjectDTOSchema } },
    },
  },
})

export const getV2ProjectsProjectIdClientContactsRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/clientContacts',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns Client Contacts information for a project.',
  description: 'Returns Client Contacts information for a project',
  operationId: 'getContacts_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: SmartContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getClientContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdClientContactsRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/clientContacts',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates Client Contacts for a project.',
  description: 'Updates Client Contacts for a project.',
  operationId: 'updateContacts_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Contacts for a project.',
      content: {
        'application/json': {
          schema: SmartContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateClientContacts.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: SmartContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateClientContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdClientDeadlineRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/clientDeadline',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates Client Deadline for a project.',
  description: 'Updates Client Deadline for a project.',
  operationId: 'updateClientDeadline',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Deadline for a project.',
      content: {
        'application/json': {
          schema: TimeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateClientDeadline.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdClientNotesRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/clientNotes',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates Client Notes for a project.',
  description: 'Updates Client Notes for a project.',
  operationId: 'updateClientNotes',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Notes for a project.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateClientNotes.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdClientReferenceNumberRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/clientReferenceNumber',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates Client Reference Number for a project.',
  description: 'Updates Client Reference Number for a project.',
  operationId: 'updateClientReferenceNumber',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Reference Number for a project.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v2/projects/updateClientReferenceNumber.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2ProjectsProjectIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/customFields',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns a list of custom field keys and values for a project.',
  description: 'Returns a list of custom field keys and values for a project.',
  operationId: 'getCustomFields_8',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdCustomFieldsKeyRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/customFields/{key}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates a custom field with a specified key in a project',
  description: 'Updates a custom field with a specified key in a project',
  operationId: 'updateCustomField_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: "custom field's key",
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom field with a specified key in a project.',
      content: {
        'application/json': {
          schema: SmartCustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateCustomField.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2ProjectsProjectIdFilesRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/files',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns list of files in a project.',
  description:
    'Returns list of files in a project. Only files added to the project (i.e. files that have assigned category and languages) are listed.',
  operationId: 'getFiles',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ProjectFileDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdFilesAddRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/files/add',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Adds files to the project as added by PM.',
  description:
    'Adds files to the project as added by PM. The files have to be uploaded beforehand (see "POST /v2/projects/{projectId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>',
  operationId: 'addFiles_1',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Added files to the project as added by PM.',
      content: {
        'application/json': {
          schema: FileCategorizationsDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/addFiles.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2ProjectsProjectIdFilesAddExternalLinkRoute = createRoute({
  method: 'post',
  path: '/v2/projects/{projectId}/files/addExternalLink',
  tags: ['Projects (Smart)(v2)'],
  operationId: 'addExternalFileLinks',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Added file links to the project as added by PM.',
      content: { 'application/json': { schema: ExternalFileDtoSchema } },
      required: true,
    },
  },
  responses: { default: { description: 'default response', content: {} } },
})

export const postV2ProjectsProjectIdFilesAddLinkRoute = createRoute({
  method: 'post',
  path: '/v2/projects/{projectId}/files/addLink',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Adds file links to the project as added by PM.',
  description:
    'Adds file links to the project as added by PM. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>',
  operationId: 'addFileLinks_1',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Added file links to the project as added by PM.',
      content: {
        'application/json': {
          schema: FileLinkCategorizationsDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/addFileLinks.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/addFileLinks.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2ProjectsProjectIdFilesDeliverableRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/files/deliverable',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns list of files in a project, that are ready to be delivered to client.',
  description:
    'Returns list of files in a project, that are ready to be delivered to client. A file is considered deliverable to client when all of the following criteria are met:<ul><li>the file was added to a job in the last step in the process</li><li>the file is marked as verified (if it was added in a verification step and the file is verifiable, according to its category)</li><li>the job is finished (has Ready status)</li></ul>',
  operationId: 'getDeliverableFiles',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ProjectFileDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getDeliverableFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2ProjectsProjectIdFilesUploadRoute = createRoute({
  method: 'post',
  path: '/v2/projects/{projectId}/files/upload',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Uploads file to the project as a file uploaded by PM.',
  description:
    'Uploads file to the project as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/projects/{projectId}/files/add" operation',
  operationId: 'uploadFile_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Uploaded file',
      content: { 'multipart/form-data': { schema: FileToUploadDtoSchema } },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FileDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/uploadFile.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2ProjectsProjectIdFinanceRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/finance',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns finance information for a project.',
  description: 'Returns finance information for a project.',
  operationId: 'getFinance_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FinanceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getFinance.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2ProjectsProjectIdFinancePayablesRoute = createRoute({
  method: 'post',
  path: '/v2/projects/{projectId}/finance/payables',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Adds a payable to a project.',
  description: 'Adds a payable to a project.',
  operationId: 'createPayable_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PayableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/createPayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/createPayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdFinancePayablesPayableIdRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/finance/payables/{payableId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates a payable.',
  description: 'Updates a payable.',
  operationId: 'updatePayable_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updatePayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updatePayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteV2ProjectsProjectIdFinancePayablesPayableIdRoute = createRoute({
  method: 'delete',
  path: '/v2/projects/{projectId}/finance/payables/{payableId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Deletes a payable.',
  description: 'Deletes a payable.',
  operationId: 'deletePayable_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2ProjectsProjectIdFinanceReceivablesRoute = createRoute({
  method: 'post',
  path: '/v2/projects/{projectId}/finance/receivables',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Adds a receivable to a project.',
  description: 'Adds a receivable to a project.',
  operationId: 'createReceivable_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReceivableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/createReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/createReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/finance/receivables/{receivableId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates a receivable.',
  description: 'Updates a receivable.',
  operationId: 'updateReceivable_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'delete',
  path: '/v2/projects/{projectId}/finance/receivables/{receivableId}',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Deletes a receivable.',
  description: 'Deletes a receivable.',
  operationId: 'deleteReceivable_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdInternalNotesRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/internalNotes',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates Internal Notes for a project.',
  description: 'Updates Internal Notes for a project.',
  operationId: 'updateInternalNotes',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Internal Notes for a project.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateInternalNotes.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2ProjectsProjectIdJobsRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/jobs',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns list of jobs in a project.',
  description: 'Returns list of jobs in a project.',
  operationId: 'getJobs',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(JobDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/getJobs.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2ProjectsProjectIdOrderDateRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/orderDate',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates Order Date for a project.',
  description: 'Updates Order Date for a project.',
  operationId: 'updateOrderedOn',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Order Date for a project.',
      content: {
        'application/json': {
          schema: TimeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateOrderedOn.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2ProjectsProjectIdProcessRoute = createRoute({
  method: 'get',
  path: '/v2/projects/{projectId}/process',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Returns process id.',
  operationId: 'getProcessId',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'projectId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: { 'application/json;charset=UTF-8': { schema: CATToolProjectDTOSchema } },
    },
  },
})

export const putV2ProjectsProjectIdSourceLanguageRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/sourceLanguage',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates source language for a project.',
  description: 'Updates source language for a project.',
  operationId: 'updateSourceLanguage',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated source language for a project.',
      content: {
        'application/json': {
          schema: SourceLanguageDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateSourceLanguage.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdSpecializationRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/specialization',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates specialization for a project.',
  description: 'Updates specialization for a project.',
  operationId: 'updateSpecialization',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated specialization for a project.',
      content: {
        'application/json': {
          schema: SpecializationDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateSpecialization.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdStatusRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/status',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Changes project status if possible (400 Bad Request is returned otherwise).',
  description:
    'Changes project status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>CANCELLED – available when the job has one of the following statuses: OPEN, STARTED</li></ul>',
  operationId: 'changeStatus_2',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changed project status.',
      content: {
        'application/json': {
          schema: ProjectStatusDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/changeStatus.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdTargetLanguagesRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/targetLanguages',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates target languages for a project.',
  description: 'Updates target languages for a project.',
  operationId: 'updateTargetLanguages',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated target languages for a project.',
      content: {
        'application/json': {
          schema: TargetLanguagesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateTargetLanguages.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdVendorInstructionsRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/vendorInstructions',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates instructions for all vendors performing the jobs in a project.',
  description:
    'Updates instructions for all vendors performing the jobs in a project. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.',
  operationId: 'updateVendorInstructions',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions for all vendors performing the jobs in a project.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateSpecialization.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2ProjectsProjectIdVolumeRoute = createRoute({
  method: 'put',
  path: '/v2/projects/{projectId}/volume',
  tags: ['Projects (Smart)(v2)'],
  summary: 'Updates volume for a project.',
  description: 'Updates volume for a project.',
  operationId: 'updateVolume',
  request: {
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: "project's internal identifier",
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated volume for a project.',
      content: {
        'application/json': {
          schema: BigDecimalDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/projects/updateVolume.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2QuotesRoute = createRoute({
  method: 'post',
  path: '/v2/quotes',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Creates a new Smart Quote.',
  description:
    'Creates a new Smart Quote. If the specified service ID refers to Classic Quote, 400 Bad Request is returned instead.',
  operationId: 'create_7',
  request: {
    body: {
      description: 'Project to create',
      content: { 'application/json': { schema: QuoteCreateDTOSchema } },
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: QuoteDTOv2Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/createQuote.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2QuotesFilesArchiveRoute = createRoute({
  method: 'post',
  path: '/v2/quotes/files/archive',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Prepares a ZIP archive that contains the specified files.',
  description: 'Prepares a ZIP archive that contains the specified files.',
  operationId: 'archive_1',
  request: {
    body: {
      description: 'Prepared ZIP archive that contains the specified files.',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/archive.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FilesArchiveDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/archive.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2QuotesFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/files/{fileId}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns details of a file.',
  description: 'Returns details of a file.',
  operationId: 'getFileById_3',
  request: {
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: "file's internal identifier",
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: ProjectFileDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getFileById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2QuotesFilesFileIdDownloadFileNameRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/files/{fileId}/download/{fileName}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Downloads a file content.',
  description: 'Downloads a file content.',
  operationId: 'getFileContentById_1',
  request: {
    params: z.object({
      fileId: z
        .string()
        .openapi({
          param: {
            description: "file's internal identifier",
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileName: z
        .string()
        .openapi({
          param: {
            description: "file's name",
            in: 'path',
            name: 'fileName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Success', content: {} } },
})

export const getV2QuotesQuoteIdRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/{quoteId}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns quote details.',
  description:
    'Returns quote details. If the specified quote ID refers to Classic Quote, 400 Bad Request is returned instead.',
  operationId: 'getById_10',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: QuoteDTOv2Schema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getById.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdBusinessDaysRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/businessDays',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Business Days for a quote.',
  description: 'Updates Business Days for a quote.',
  operationId: 'updateBusinessDays',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Business Days for a quote.',
      content: {
        'application/json': {
          schema: z.int32(),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateBusinessDays.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2QuotesQuoteIdClientContactsRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/{quoteId}/clientContacts',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns Client Contacts information for a quote.',
  description: 'Returns Client Contacts information for a quote.',
  operationId: 'getContacts_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: SmartContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getClientContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdClientContactsRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/clientContacts',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Client Contacts for a quote.',
  description: 'Updates Client Contacts for a quote.',
  operationId: 'updateContacts_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Contacts for a quote.',
      content: {
        'application/json;charset=UTF-8': {
          schema: SmartContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateClientContacts.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: SmartContactsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateClientContacts.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdClientNotesRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/clientNotes',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Client Notes for a quote.',
  description: 'Updates Client Notes for a quote.',
  operationId: 'updateClientNotes_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Notes for a quote.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateClientNotes.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdClientReferenceNumberRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/clientReferenceNumber',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Client Reference Number for a quote.',
  description: 'Updates Client Reference Number for a quote.',
  operationId: 'updateClientReferenceNumber_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Client Reference Number for a quote.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v2/quotes/updateClientReferenceNumber.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2QuotesQuoteIdCustomFieldsRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/{quoteId}/customFields',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns a list of custom field keys and values for a project.',
  description: 'Returns a list of custom field keys and values for a project.',
  operationId: 'getCustomFields_9',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: CustomFieldsDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getCustomFields.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdCustomFieldsKeyRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/customFields/{key}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates a custom field with a specified key in a quote.',
  description: 'Updates a custom field with a specified key in a quote.',
  operationId: 'updateCustomField_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: "custom field's key",
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated custom field with a specified key in a quote.',
      content: {
        'application/json': {
          schema: SmartCustomFieldDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateCustomField.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdExpectedDeliveryDateRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/expectedDeliveryDate',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Expected Delivery Date for a quote.',
  description: 'Updates Expected Delivery Date for a quote.',
  operationId: 'updateExpectedDeliveryDate',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Expected Delivery Date for a quote.',
      content: {
        'application/json': {
          schema: TimeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v2/quotes/updateExpectedDeliveryDate.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2QuotesQuoteIdFilesRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/{quoteId}/files',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns list of files in a quote.',
  description:
    'Returns list of files in a quote. Only files added to the quote (i.e. files that have assigned category and languages) are listed.',
  operationId: 'getFiles_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'ok',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(ProjectFileDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getFiles.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdFilesAddRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/files/add',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Adds files to the quote as added by PM.',
  description:
    'Adds files to the quote as added by PM. The files have to be uploaded beforehand (see "POST v2/quotes/{quoteId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>',
  operationId: 'addFiles_2',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Added files to the quote as added by PM.',
      content: {
        'application/json': {
          schema: TimeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/addFiles.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2QuotesQuoteIdFilesUploadRoute = createRoute({
  method: 'post',
  path: '/v2/quotes/{quoteId}/files/upload',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Uploads file to the quote as a file uploaded by PM.',
  description:
    'Uploads file to the quote as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/quotes/{quoteId}/files/add" operation).',
  operationId: 'uploadFile_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Uploaded file to the quote as a file uploaded by PM.',
      content: {
        'multipart/form-data': {
          schema: FileToUploadDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/uploadFile.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FileDtoSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/uploadFile.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const getV2QuotesQuoteIdFinanceRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/{quoteId}/finance',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns finance information for a quote.',
  description: 'Returns finance information for a quote.',
  operationId: 'getFinance_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: FinanceDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getFinance.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const postV2QuotesQuoteIdFinancePayablesRoute = createRoute({
  method: 'post',
  path: '/v2/quotes/{quoteId}/finance/payables',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Adds a payable to a quote.',
  description: 'Adds a payable to a quote.',
  operationId: 'createPayable_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PayableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/createPayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/createPayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdFinancePayablesPayableIdRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/finance/payables/{payableId}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates a payable.',
  description: 'Updates a payable.',
  operationId: 'updatePayable_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updatePayable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: PayableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updatePayable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteV2QuotesQuoteIdFinancePayablesPayableIdRoute = createRoute({
  method: 'delete',
  path: '/v2/quotes/{quoteId}/finance/payables/{payableId}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Deletes a payable.',
  description: 'Deletes a payable.',
  operationId: 'deletePayable_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      payableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "payable's internal identifier",
            in: 'path',
            name: 'payableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const postV2QuotesQuoteIdFinanceReceivablesRoute = createRoute({
  method: 'post',
  path: '/v2/quotes/{quoteId}/finance/receivables',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Adds a receivable to a quote.',
  description: 'Adds a receivable to a quote.',
  operationId: 'createReceivable_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReceivableCreateDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/createReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/createReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/finance/receivables/{receivableId}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates a receivable.',
  description: 'Updates a receivable.',
  operationId: 'updateReceivable_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateReceivable.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ReceivableDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateReceivable.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute = createRoute({
  method: 'delete',
  path: '/v2/quotes/{quoteId}/finance/receivables/{receivableId}',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Deletes a receivable.',
  description: 'Deletes a receivable.',
  operationId: 'deleteReceivable_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      receivableId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: "receivable's internal identifier",
            in: 'path',
            name: 'receivableId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdInternalNotesRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/internalNotes',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Internal Notes for a quote.',
  description: 'Updates Internal Notes for a quote.',
  operationId: 'updateInternalNotes_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Internal Notes for a quote.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateInternalNotes.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const getV2QuotesQuoteIdJobsRoute = createRoute({
  method: 'get',
  path: '/v2/quotes/{quoteId}/jobs',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Returns list of jobs in a quote.',
  description: 'Returns list of jobs in a quote.',
  operationId: 'getJobs_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    default: {
      description: 'Success',
      content: {
        'application/json;charset=UTF-8': {
          schema: z.array(JobDtoSchema),
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/getJobs.json#responseBody',
            },
          },
        },
      },
    },
  },
})

export const putV2QuotesQuoteIdQuoteExpiryRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/quoteExpiry',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates Quote Expiry Date for a quote.',
  description: 'Updates Quote Expiry Date for a quote.',
  operationId: 'updateQuoteExpiry',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated Quote Expiry Date for a quote.',
      content: {
        'application/json': {
          schema: TimeDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateQuoteExpiry.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdSourceLanguageRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/sourceLanguage',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates source language for a quote.',
  description: 'Updates source language for a quote.',
  operationId: 'updateSourceLanguage_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated source language for a quote.',
      content: {
        'application/json': {
          schema: SourceLanguageDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateSourceLanguage.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdSpecializationRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/specialization',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates specialization for a quote.',
  description: 'Updates specialization for a quote.',
  operationId: 'updateSpecialization_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated specialization for a quote.',
      content: {
        'application/json': {
          schema: SpecializationDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateSpecialization.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdStatusRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/status',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Changes quote status if possible (400 Bad Request is returned otherwise).',
  description:
    'Changes quote status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>PENDING – available when the job has one of the following statuses: REQUESTED, REJECTED</li><li>SENT – available when the job has one of the following statuses: PENDING</li><li>APPROVED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT, APPROVED_BY_CLIENT</li><li>REJECTED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT</li></ul>',
  operationId: 'changeStatus_3',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changed Quote status.',
      content: {
        'application/json': {
          schema: ProjectStatusDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/changeStatus.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdTargetLanguagesRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/targetLanguages',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates target languages for a quote.',
  description: 'Updates target languages for a quote.',
  operationId: 'updateTargetLanguages_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated target languages for a quote.',
      content: {
        'application/json': {
          schema: TargetLanguagesDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateTargetLanguages.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdVendorInstructionsRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/vendorInstructions',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates instructions for all vendors performing the jobs in a quote.',
  description:
    'Updates instructions for all vendors performing the jobs in a quote. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.',
  operationId: 'updateVendorInstructions_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated instructions for all vendors performing the jobs in a quote.',
      content: {
        'application/json': {
          schema: StringDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value:
                '/home-api/assets/examples/v2/quotes/updateInstructionsForAllJobs.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const putV2QuotesQuoteIdVolumeRoute = createRoute({
  method: 'put',
  path: '/v2/quotes/{quoteId}/volume',
  tags: ['Quotes (Smart)(v2)'],
  summary: 'Updates volume for a quote.',
  description: 'Updates volume for a quote.',
  operationId: 'updateVolume_1',
  request: {
    params: z.object({
      quoteId: z
        .string()
        .openapi({
          param: {
            description: "quote's internal identifier",
            in: 'path',
            name: 'quoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated volume for a quote.',
      content: {
        'application/json': {
          schema: BigDecimalDTOSchema,
          examples: {
            ref: {
              description: 'ref',
              value: '/home-api/assets/examples/v2/quotes/updateVolume.json#requestBody',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})
