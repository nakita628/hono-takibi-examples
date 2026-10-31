import { createRoute, z } from '@hono/zod-openapi'

const SystemObjectSchema = z.object({}).openapi('SystemObject')

type ApiCoreDtoAggregatedAggregatedResultType = {
  activityDay?: string
  commissionsCost?: number
  conversionsCost?: number
  conversionsValue?: number
  convertedClicks?: bigint
  entityData?: z.infer<typeof SystemObjectSchema>
  entityId?: string
  fromDay?: string
  hourlyBreakDown?: { [key: string]: ApiCoreDtoAggregatedAggregatedResultType }
  lastHitDate?: string
  spiderHitsCount?: bigint
  toDay?: string
  totalClicks?: bigint
  totalViews?: bigint
  uniqueClicks?: bigint
  uniqueConversions?: bigint
  uniqueViews?: bigint
}

const ApiCoreDtoAccountingConversionOptionsSchema = z
  .object({
    hideComCost: z.boolean().exactOptional(),
    hideCost: z.boolean().exactOptional(),
    hideCount: z.boolean().exactOptional(),
    hideParams: z.boolean().exactOptional(),
    hideValue: z.boolean().exactOptional(),
    percentCommission: z.int32().exactOptional(),
    percentValue: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingConversionOptions')

const ApiCoreDtoAccountingDomainWhitelistEntrySchema = z
  .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingDomainWhitelistEntry')

const ApiCoreDtoAccountingExtendedGrantsSchema = z
  .object({
    allowAllGrants: z.boolean().exactOptional(),
    allowGroupCreation: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingExtendedGrants')

const ApiCoreResponsesEntityUriSystemInt64Schema = z
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
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntityUriSystemInt64')

const ApiCoreDtoGrantsGrantSchema = z
  .object({
    DatapointType: z.string().exactOptional(),
    Entity: ApiCoreResponsesEntityUriSystemInt64Schema.exactOptional(),
    EntityName: z.string().exactOptional(),
    EntityType: z.string().exactOptional(),
    Type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoGrantsGrant')

const ApiCoreDtoAccountingHitOptionsSchema = z
  .object({ hideReferrer: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingHitOptions')

const ApiCoreDtoAccountingGuestSchema = z
  .object({
    apiKey: z.string().exactOptional(),
    conversionOptions: ApiCoreDtoAccountingConversionOptionsSchema.exactOptional(),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    currentGrant: ApiCoreDtoGrantsGrantSchema.exactOptional(),
    dateFormat: z.string().exactOptional(),
    decimalSeparator: z.string().exactOptional(),
    email: z.string().exactOptional(),
    extendedGrants: ApiCoreDtoAccountingExtendedGrantsSchema.exactOptional(),
    groupGrants: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    hitOptions: ApiCoreDtoAccountingHitOptionsSchema.exactOptional(),
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
    key: z.string().exactOptional(),
    language: z.string().exactOptional(),
    loginCount: z.int32().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    numberGroupSeparator: z.string().exactOptional(),
    password: z.string().exactOptional(),
    timeFormat: z.enum(['AmPm', 'H24']).exactOptional(),
    timeZone: z.int32().exactOptional(),
    timeframeMinDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    timezonename: z.string().exactOptional(),
    tlGrants: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    tpGrants: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingGuest')

const ApiCoreDtoAccountingIpBlacklistEntrySchema = z
  .object({ id: z.string().exactOptional(), ip: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingIpBlacklistEntry')

const ApiCoreDtoAccountingPlanSchema = z
  .object({
    allowedPersonalDomains: z.int32().exactOptional(),
    allowedPersonalUrls: z.int32().exactOptional(),
    billingPeriodEnd: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    billingPeriodStart: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    bonusMonthlyEvents: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    maximumDatapoints: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    maximumGuests: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    monthlyEvents: z
      .preprocess(
        (val) =>
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
    price: z.float64().exactOptional(),
    profileId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recurring: z.boolean().exactOptional(),
    recurringPeriod: z.int32().exactOptional(),
    usedDatapoints: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    usedMonthlyEvents: z
      .preprocess(
        (val) =>
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
  .openapi('ApiCoreDtoAccountingPlan')

const ApiCoreDtoAccountingUserSchema = z
  .object({
    boGoVal: z.string().exactOptional(),
    bonusClicks: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    companyName: z.string().exactOptional(),
    companyRole: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    redirectOnly: z.boolean().exactOptional(),
    registrationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    timeframeMinDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    timezone: z.int32().exactOptional(),
    timezonename: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAccountingUser')

const ApiCoreDtoAggregatedAggregatedResultSchema: z.ZodType<ApiCoreDtoAggregatedAggregatedResultType> =
  z
    .lazy(() =>
      z
        .object({
          activityDay: z
            .string()
            .exactOptional()
            .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
          commissionsCost: z.float64().exactOptional(),
          conversionsCost: z.float64().exactOptional(),
          conversionsValue: z.float64().exactOptional(),
          convertedClicks: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          entityData: SystemObjectSchema.exactOptional(),
          entityId: z.string().exactOptional(),
          fromDay: z
            .string()
            .exactOptional()
            .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
          hourlyBreakDown: z
            .record(z.string(), ApiCoreDtoAggregatedAggregatedResultSchema)
            .exactOptional(),
          lastHitDate: z
            .string()
            .exactOptional()
            .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
          spiderHitsCount: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          toDay: z
            .string()
            .exactOptional()
            .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
          totalClicks: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          totalViews: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          uniqueClicks: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          uniqueConversions: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          uniqueViews: z
            .preprocess(
              (val) =>
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
        .openapi({ required: [] }),
    )
    .openapi('ApiCoreDtoAggregatedAggregatedResult')

const ApiCoreDtoAggregatedAggregatedSummaryResultSchema = z
  .object({
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    limit: z.int32().exactOptional(),
    offset: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    result: z.array(ApiCoreDtoAggregatedAggregatedResultSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoAggregatedAggregatedSummaryResult')

const ApiCoreDtoClickStreamHitBrowserInfoSchema = z
  .object({
    browserType: z.string().exactOptional(),
    familyId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    familyName: z.string().exactOptional(),
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
  .openapi('ApiCoreDtoClickStreamHitBrowserInfo')

const ApiCoreDtoClickStreamHitConversionInfoSchema = z
  .object({
    accessTime: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    comcost: z.float64().exactOptional(),
    cost: z.float64().exactOptional(),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    deleted: z.boolean().exactOptional(),
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
    parameter: z.string().exactOptional(),
    value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoClickStreamHitConversionInfo')

const ApiCoreDtoTagsTagSchema = z
  .object({
    datapoints: z
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
    groups: z
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
  .openapi('ApiCoreDtoTagsTag')

const ApiCoreDtoClickStreamHitDatapointInfoSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    datapointFavourite: z.boolean().exactOptional(),
    datapointId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    datapointName: z.string().exactOptional(),
    datapointTitle: z.string().exactOptional(),
    datapointType: z.string().exactOptional(),
    destinationUrl: z.string().exactOptional(),
    groupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    groupName: z.string().exactOptional(),
    isABTest: z.boolean().exactOptional(),
    isPrivateShared: z.boolean().exactOptional(),
    isPublic: z.boolean().exactOptional(),
    notes: z.string().exactOptional(),
    status: z.enum(['Active', 'Paused', 'Abuse', 'Deleted']).exactOptional(),
    tags: z.array(ApiCoreDtoTagsTagSchema).exactOptional(),
    trackingCode: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoClickStreamHitDatapointInfo')

const ApiCoreDtoClickStreamHitLocationInfoSchema = z
  .object({
    areacode: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    latitude: z.float64().exactOptional(),
    longitude: z.float64().exactOptional(),
    metrocode: z.string().exactOptional(),
    organization: z.string().exactOptional(),
    postalcode: z.string().exactOptional(),
    region: z.string().exactOptional(),
    regionName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoClickStreamHitLocationInfo')

const ApiCoreDtoClickStreamHitOsInfoSchema = z
  .object({
    familyId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    familyName: z.string().exactOptional(),
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
  .openapi('ApiCoreDtoClickStreamHitOsInfo')

const ApiCoreDtoClickStreamHitSourceSchema = z
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
    param: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoClickStreamHitSource')

const ApiCoreDtoClickStreamHitSchema = z
  .object({
    accessTime: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    browser: ApiCoreDtoClickStreamHitBrowserInfoSchema.exactOptional(),
    clientLanguage: z.string().exactOptional(),
    conversion1: ApiCoreDtoClickStreamHitConversionInfoSchema.exactOptional(),
    conversion2: ApiCoreDtoClickStreamHitConversionInfoSchema.exactOptional(),
    conversion3: ApiCoreDtoClickStreamHitConversionInfoSchema.exactOptional(),
    conversion4: ApiCoreDtoClickStreamHitConversionInfoSchema.exactOptional(),
    conversion5: ApiCoreDtoClickStreamHitConversionInfoSchema.exactOptional(),
    conversions: z.array(ApiCoreDtoClickStreamHitConversionInfoSchema).exactOptional(),
    entity: ApiCoreDtoClickStreamHitDatapointInfoSchema.exactOptional(),
    ip: z.string().exactOptional(),
    isProxy: z.string().exactOptional(),
    isSpider: z.string().exactOptional(),
    isUnique: z.string().exactOptional(),
    location: ApiCoreDtoClickStreamHitLocationInfoSchema.exactOptional(),
    org: z.string().exactOptional(),
    os: ApiCoreDtoClickStreamHitOsInfoSchema.exactOptional(),
    queryParams: z.string().exactOptional(),
    realDestinationUrl: z.string().exactOptional(),
    referer: z.string().exactOptional(),
    source: ApiCoreDtoClickStreamHitSourceSchema.exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoClickStreamHit')

const ApiCoreDtoClickStreamHitListPageSchema = z
  .object({
    hits: z.array(ApiCoreDtoClickStreamHitSchema).exactOptional(),
    lastKey: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoClickStreamHitListPage')

const ApiCoreDtoConversionsConversionSchema = z
  .object({
    code: z.string().exactOptional(),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    deleted: z.boolean().exactOptional(),
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
    name: z.string().exactOptional(),
    protocol: z.enum(['Http', 'Https']).exactOptional(),
    value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoConversionsConversion')

const ApiCoreDtoDatapointsBrowserBaseDestinationItemSchema = z
  .object({
    emailDestinationUrl: z.string().exactOptional(),
    mobileDestinationUrl: z.string().exactOptional(),
    spidersDestinationUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsBrowserBaseDestinationItem')

const ApiCoreDtoDatapointsMultipleDestinationItemSchema = z
  .object({ url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsMultipleDestinationItem')

const ApiCoreDtoDatapointsDatapointRetargetingInfoSchema = z
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
  .openapi('ApiCoreDtoDatapointsDatapointRetargetingInfo')

const ApiCoreDtoDatapointsUniqueDestinationItemSchema = z
  .object({ firstDestinationUrl: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsUniqueDestinationItem')

const ApiCoreDtoDatapointsUrlByLanguageItemSchema = z
  .object({ languageCode: z.string().exactOptional(), url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsUrlByLanguageItem')

const ApiCoreDtoDatapointsUrlByNationItemSchema = z
  .object({ nation: z.string().exactOptional(), url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsUrlByNationItem')

const ApiCoreDtoDatapointsWeightedDestinationItemSchema = z
  .object({ url: z.string().exactOptional(), weight: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsWeightedDestinationItem')

const ApiCoreDtoDatapointsTrackingLinkSpecificsSchema = z
  .object({
    appendQuery: z.boolean().exactOptional(),
    browserDestinationItem: ApiCoreDtoDatapointsBrowserBaseDestinationItemSchema.exactOptional(),
    destinationMode: z
      .enum([
        'Simple',
        'RandomDestination',
        'DestinationByLanguage',
        'SpilloverDestination',
        'DynamicUrl',
        'BrowserDestination',
        'DestinationByNation',
        'UniqueDestination',
        'SequentialDestination',
        'WeightedDestination',
      ])
      .exactOptional(),
    domainId: z.int32().exactOptional(),
    encodeUrl: z.boolean().exactOptional(),
    expirationClicks: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    firstUrl: z.string().exactOptional(),
    goDomainId: z.int32().exactOptional(),
    hideUrl: z.boolean().exactOptional(),
    hideUrlTitle: z.string().exactOptional(),
    isABTest: z.boolean().exactOptional(),
    password: z.string().exactOptional(),
    pauseAfterClicksExpiration: z.boolean().exactOptional(),
    pauseAfterDateExpiration: z.boolean().exactOptional(),
    randomDestinationItems: z
      .array(ApiCoreDtoDatapointsMultipleDestinationItemSchema)
      .exactOptional(),
    redirectType: z.enum(['PermanentRedirect', 'TemporaryRedirect']).exactOptional(),
    referrerClean: z.enum(['None', 'Clean', 'Myself']).exactOptional(),
    scripts: z.array(ApiCoreDtoDatapointsDatapointRetargetingInfoSchema).exactOptional(),
    sequentialDestinationItems: z
      .array(ApiCoreDtoDatapointsMultipleDestinationItemSchema)
      .exactOptional(),
    spilloverDestinationItems: z
      .array(ApiCoreDtoDatapointsMultipleDestinationItemSchema)
      .exactOptional(),
    uniqueDestinationItem: ApiCoreDtoDatapointsUniqueDestinationItemSchema.exactOptional(),
    url: z.string().exactOptional(),
    urlAfterClicksExpiration: z.string().exactOptional(),
    urlAfterDateExpiration: z.string().exactOptional(),
    urlsByLanguage: z.array(ApiCoreDtoDatapointsUrlByLanguageItemSchema).exactOptional(),
    urlsByNation: z.array(ApiCoreDtoDatapointsUrlByNationItemSchema).exactOptional(),
    weightedDestinationItems: z
      .array(ApiCoreDtoDatapointsWeightedDestinationItemSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsTrackingLinkSpecifics')

const ApiCoreDtoDatapointsTrackingPixelSpecificsSchema = z
  .object({ parameterNote: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsTrackingPixelSpecifics')

const ApiCoreDtoDatapointsDatapointSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    encodeIp: z.boolean().exactOptional(),
    fifthConversionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    fifthConversionName: z.string().exactOptional(),
    firstConversionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    firstConversionName: z.string().exactOptional(),
    fourthConversionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    fourthConversionName: z.string().exactOptional(),
    groupId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    groupName: z.string().exactOptional(),
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
    isPublic: z.boolean().exactOptional(),
    isSecured: z.boolean().exactOptional(),
    lightTracking: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    preferred: z.boolean().exactOptional(),
    redirectOnly: z.boolean().exactOptional(),
    secondConversionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    secondConversionName: z.string().exactOptional(),
    status: z.enum(['Active', 'Paused', 'Abuse', 'Deleted']).exactOptional(),
    tags: z.array(ApiCoreDtoTagsTagSchema).exactOptional(),
    thirdConversionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    thirdConversionName: z.string().exactOptional(),
    title: z.string().exactOptional(),
    trackingCode: z.string().exactOptional(),
    type: z.enum(['TrackingLink', 'TrackingPixel']).exactOptional(),
    typeTL: ApiCoreDtoDatapointsTrackingLinkSpecificsSchema.exactOptional(),
    typeTP: ApiCoreDtoDatapointsTrackingPixelSpecificsSchema.exactOptional(),
    writePermited: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDatapointsDatapoint')

const ApiCoreDtoDomainsDomainSchema = z
  .object({
    custom404: z.string().exactOptional(),
    customHomepage: z.string().exactOptional(),
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
    type: z.enum(['System', 'Go', 'Dedicated', 'Personal']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoDomainsDomain')

const ApiCoreDtoEntityUriLongSchema = z
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
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoEntityUriLong')

const ApiCoreDtoGroupsGroupSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    deleted: z.boolean().exactOptional(),
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
    isPublic: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    notes: z.string().exactOptional(),
    preferred: z.boolean().exactOptional(),
    redirectOnly: z.boolean().exactOptional(),
    tags: z.array(ApiCoreDtoTagsTagSchema).exactOptional(),
    writePermited: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoGroupsGroup')

const ApiCoreDtoRetargetingRetargetingScriptSchema = z
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
    script: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoRetargetingRetargetingScript')

const ApiCoreDtoTopsTopItemSchema = z
  .object({
    entityData: SystemObjectSchema.exactOptional(),
    id: z.string().exactOptional(),
    lastHitDate: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    spiderClicks: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    spiderHits: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    spiderViews: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalClicks: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalCommissionsCost: z.float64().exactOptional(),
    totalConversions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalConversionsCost: z.float64().exactOptional(),
    totalConversionsValue: z.float64().exactOptional(),
    totalHits: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalViews: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    uniqueClicks: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    uniqueHits: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    uniqueViews: z
      .preprocess(
        (val) =>
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
  .openapi('ApiCoreDtoTopsTopItem')

const ApiCoreDtoTopsTopSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
    data: z.array(ApiCoreDtoTopsTopItemSchema).exactOptional(),
    key: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreDtoTopsTop')

const ApiCoreRequestsConversionPatchBodySchema = z
  .object({
    Action: z.string().exactOptional(),
    Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    ReplaceId: z
      .preprocess(
        (val) =>
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
  .openapi('ApiCoreRequestsConversionPatchBody')

const ApiCoreRequestsDatapointsBatchSchema = z
  .object({ List: z.array(ApiCoreDtoDatapointsDatapointSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreRequestsDatapointsBatch')

const ApiCoreRequestsDeleteBatchSchema = z
  .object({ Entities: z.array(ApiCoreDtoEntityUriLongSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreRequestsDeleteBatch')

const ApiCoreRequestsGenericTextPatchSchema = z
  .object({ Text: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreRequestsGenericTextPatch')

const ApiCoreRequestsPatchBodySchema = z
  .object({
    Action: z.string().exactOptional(),
    Id: z
      .preprocess(
        (val) =>
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
  .openapi('ApiCoreRequestsPatchBody')

const ApiCoreRequestsPatchBodyBatchSchema = z
  .object({ PatchRequests: z.array(ApiCoreRequestsPatchBodySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreRequestsPatchBodyBatch')

const ApiCoreRequestsPermissionPatchRequestSchema = z
  .object({
    Action: z.string().exactOptional(),
    Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    Verb: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreRequestsPermissionPatchRequest')

const ApiCoreResponsesCountResponceSchema = z
  .object({
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesCountResponce')

const ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntrySchema = z
  .object({ entities: z.array(ApiCoreDtoAccountingDomainWhitelistEntrySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry')

const ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntrySchema = z
  .object({ entities: z.array(ApiCoreDtoAccountingIpBlacklistEntrySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry')

const ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema = z
  .object({ entities: z.array(ApiCoreDtoAggregatedAggregatedResultSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult')

const ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHitSchema = z
  .object({ entities: z.array(ApiCoreDtoClickStreamHitSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit')

const ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrantSchema = z
  .object({ entities: z.array(ApiCoreDtoGrantsGrantSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant')

const ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema = z
  .object({ entities: z.array(ApiCoreResponsesEntityUriSystemInt64Schema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64')

const ClickMeterInfrastructureValidationValidationFailureSchema = z
  .object({
    code: SystemObjectSchema.exactOptional(),
    errorMessage: z.string().exactOptional(),
    errorValue: SystemObjectSchema.exactOptional(),
    property: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClickMeterInfrastructureValidationValidationFailure')

const ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema = z
  .object({
    entityData: ApiCoreDtoDatapointsDatapointSchema.exactOptional(),
    errors: z.array(ClickMeterInfrastructureValidationValidationFailureSchema).exactOptional(),
    result: ApiCoreResponsesEntityUriSystemInt64Schema.exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64')

const ApiCoreDtoDatapointsDatapointRequestBody = {
  description: 'The body of the datapoint',
  content: {
    'application/json': { schema: ApiCoreDtoDatapointsDatapointSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          creationDate: z
            .string()
            .exactOptional()
            .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
          encodeIp: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          fifthConversionId: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          fifthConversionName: z.string().exactOptional(),
          firstConversionId: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          firstConversionName: z.string().exactOptional(),
          fourthConversionId: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          fourthConversionName: z.string().exactOptional(),
          groupId: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          groupName: z.string().exactOptional(),
          id: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          isPublic: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          isSecured: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          lightTracking: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          name: z.string().exactOptional(),
          notes: z.string().exactOptional(),
          preferred: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          redirectOnly: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          secondConversionId: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          secondConversionName: z.string().exactOptional(),
          status: z.enum(['Active', 'Paused', 'Abuse', 'Deleted']).exactOptional(),
          tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    datapoints: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(
                          z
                            .preprocess((val) => {
                              if (
                                typeof val !== 'string' ||
                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                              )
                                return val
                              if (/^-?\d+$/.test(val)) return BigInt(val)
                              const num = Number(val)
                              return Number.isSafeInteger(num) ? BigInt(num) : val
                            }, z.int64())
                            .openapi({ type: 'integer', format: 'int64' }),
                        ),
                      )
                      .exactOptional(),
                    groups: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(
                          z
                            .preprocess((val) => {
                              if (
                                typeof val !== 'string' ||
                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                              )
                                return val
                              if (/^-?\d+$/.test(val)) return BigInt(val)
                              const num = Number(val)
                              return Number.isSafeInteger(num) ? BigInt(num) : val
                            }, z.int64())
                            .openapi({ type: 'integer', format: 'int64' }),
                        ),
                      )
                      .exactOptional(),
                    id: z
                      .preprocess((val) => {
                        if (
                          typeof val !== 'string' ||
                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                        )
                          return val
                        if (/^-?\d+$/.test(val)) return BigInt(val)
                        const num = Number(val)
                        return Number.isSafeInteger(num) ? BigInt(num) : val
                      }, z.int64())
                      .exactOptional()
                      .openapi({ type: 'integer', format: 'int64' }),
                    name: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            )
            .exactOptional(),
          thirdConversionId: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          thirdConversionName: z.string().exactOptional(),
          title: z.string().exactOptional(),
          trackingCode: z.string().exactOptional(),
          type: z.enum(['TrackingLink', 'TrackingPixel']).exactOptional(),
          typeTL: z
            .object({
              appendQuery: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              browserDestinationItem:
                ApiCoreDtoDatapointsBrowserBaseDestinationItemSchema.exactOptional(),
              destinationMode: z
                .enum([
                  'Simple',
                  'RandomDestination',
                  'DestinationByLanguage',
                  'SpilloverDestination',
                  'DynamicUrl',
                  'BrowserDestination',
                  'DestinationByNation',
                  'UniqueDestination',
                  'SequentialDestination',
                  'WeightedDestination',
                ])
                .exactOptional(),
              domainId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              encodeUrl: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              expirationClicks: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              expirationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              firstUrl: z.string().exactOptional(),
              goDomainId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              hideUrl: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              hideUrlTitle: z.string().exactOptional(),
              isABTest: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              password: z.string().exactOptional(),
              pauseAfterClicksExpiration: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              pauseAfterDateExpiration: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              randomDestinationItems: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                )
                .exactOptional(),
              redirectType: z.enum(['PermanentRedirect', 'TemporaryRedirect']).exactOptional(),
              referrerClean: z.enum(['None', 'Clean', 'Myself']).exactOptional(),
              scripts: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        name: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
              sequentialDestinationItems: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                )
                .exactOptional(),
              spilloverDestinationItems: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                )
                .exactOptional(),
              uniqueDestinationItem:
                ApiCoreDtoDatapointsUniqueDestinationItemSchema.exactOptional(),
              url: z.string().exactOptional(),
              urlAfterClicksExpiration: z.string().exactOptional(),
              urlAfterDateExpiration: z.string().exactOptional(),
              urlsByLanguage: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ApiCoreDtoDatapointsUrlByLanguageItemSchema),
                )
                .exactOptional(),
              urlsByNation: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(ApiCoreDtoDatapointsUrlByNationItemSchema),
                )
                .exactOptional(),
              weightedDestinationItems: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        url: z.string().exactOptional(),
                        weight: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int32(),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .exactOptional()
            .openapi({ required: [] }),
          typeTP: ApiCoreDtoDatapointsTrackingPixelSpecificsSchema.exactOptional(),
          writePermited: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'text/json': { schema: ApiCoreDtoDatapointsDatapointSchema },
  },
  required: true,
}

const ApiCoreDtoGroupsGroupRequestBody = {
  description: 'The body of the group',
  content: {
    'application/json': { schema: ApiCoreDtoGroupsGroupSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          creationDate: z
            .string()
            .exactOptional()
            .openapi({ description: ' (A date in "YmdHis" format)', example: '20120203120530' }),
          deleted: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          id: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          isPublic: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          name: z.string().exactOptional(),
          notes: z.string().exactOptional(),
          preferred: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          redirectOnly: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
          tags: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(
                z
                  .object({
                    datapoints: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(
                          z
                            .preprocess((val) => {
                              if (
                                typeof val !== 'string' ||
                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                              )
                                return val
                              if (/^-?\d+$/.test(val)) return BigInt(val)
                              const num = Number(val)
                              return Number.isSafeInteger(num) ? BigInt(num) : val
                            }, z.int64())
                            .openapi({ type: 'integer', format: 'int64' }),
                        ),
                      )
                      .exactOptional(),
                    groups: z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(
                          z
                            .preprocess((val) => {
                              if (
                                typeof val !== 'string' ||
                                !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                              )
                                return val
                              if (/^-?\d+$/.test(val)) return BigInt(val)
                              const num = Number(val)
                              return Number.isSafeInteger(num) ? BigInt(num) : val
                            }, z.int64())
                            .openapi({ type: 'integer', format: 'int64' }),
                        ),
                      )
                      .exactOptional(),
                    id: z
                      .preprocess((val) => {
                        if (
                          typeof val !== 'string' ||
                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                        )
                          return val
                        if (/^-?\d+$/.test(val)) return BigInt(val)
                        const num = Number(val)
                        return Number.isSafeInteger(num) ? BigInt(num) : val
                      }, z.int64())
                      .exactOptional()
                      .openapi({ type: 'integer', format: 'int64' }),
                    name: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            )
            .exactOptional(),
          writePermited: z
            .preprocess(
              ((read) => (val: unknown) => {
                const result = read.safeParse(val)
                return result.success ? result.data : val
              })(z.stringbool()),
              z.boolean(),
            )
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'text/json': { schema: ApiCoreDtoGroupsGroupSchema },
  },
  required: true,
}

const ApiCoreDtoRetargetingRetargetingScriptRequestBody = {
  description: 'The body of the retargeting script',
  content: {
    'application/json': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          id: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          name: z.string().exactOptional(),
          script: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'application/xml': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
    'text/json': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
    'text/xml': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
  },
  required: true,
}

const ApiCoreRequestsGenericTextPatchRequestBody = {
  description: 'Patch requests',
  content: {
    'application/json': { schema: ApiCoreRequestsGenericTextPatchSchema },
    'application/x-www-form-urlencoded': { schema: ApiCoreRequestsGenericTextPatchSchema },
    'application/xml': { schema: ApiCoreRequestsGenericTextPatchSchema },
    'text/json': { schema: ApiCoreRequestsGenericTextPatchSchema },
    'text/xml': { schema: ApiCoreRequestsGenericTextPatchSchema },
  },
  required: true,
}

const ApiCoreRequestsPatchBodyRequestBody = {
  description: 'The body patch',
  content: {
    'application/json': { schema: ApiCoreRequestsPatchBodySchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          Action: z.string().exactOptional(),
          Id: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
        })
        .openapi({ required: [] }),
    },
    'application/xml': { schema: ApiCoreRequestsPatchBodySchema },
    'text/json': { schema: ApiCoreRequestsPatchBodySchema },
    'text/xml': { schema: ApiCoreRequestsPatchBodySchema },
  },
  required: true,
}

const ApiCoreRequestsPermissionPatchRequestRequestBody = {
  description: 'The patch permission request',
  content: {
    'application/json': { schema: ApiCoreRequestsPermissionPatchRequestSchema },
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          Action: z.string().exactOptional(),
          Id: z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          Verb: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
    'application/xml': { schema: ApiCoreRequestsPermissionPatchRequestSchema },
    'text/json': { schema: ApiCoreRequestsPermissionPatchRequestSchema },
    'text/xml': { schema: ApiCoreRequestsPermissionPatchRequestSchema },
  },
  required: true,
}

const ApiKeySecurityScheme = {
  description: 'API Key Authentication',
  in: 'header',
  name: 'X-Clickmeter-AuthKey',
  type: 'apiKey',
}

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Account'],
  summary: 'Retrieve current account data',
  operationId: 'Account_Get',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingUserSchema },
        'application/xml': { schema: ApiCoreDtoAccountingUserSchema },
        'text/json': { schema: ApiCoreDtoAccountingUserSchema },
        'text/xml': { schema: ApiCoreDtoAccountingUserSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAccountRoute = createRoute({
  method: 'post',
  path: '/account',
  tags: ['Account'],
  summary: 'Update current account data',
  operationId: 'Account_Post',
  request: {
    body: {
      content: {
        'application/json': { schema: ApiCoreDtoAccountingUserSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              boGoVal: z.string().exactOptional(),
              bonusClicks: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              companyName: z.string().exactOptional(),
              companyRole: z.string().exactOptional(),
              email: z.string().exactOptional(),
              firstName: z.string().exactOptional(),
              lastName: z.string().exactOptional(),
              phone: z.string().exactOptional(),
              redirectOnly: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              registrationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              timeframeMinDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              timezone: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              timezonename: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoAccountingUserSchema },
        'text/json': { schema: ApiCoreDtoAccountingUserSchema },
        'text/xml': { schema: ApiCoreDtoAccountingUserSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingUserSchema },
        'application/xml': { schema: ApiCoreDtoAccountingUserSchema },
        'text/json': { schema: ApiCoreDtoAccountingUserSchema },
        'text/xml': { schema: ApiCoreDtoAccountingUserSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountDomainwhitelistRoute = createRoute({
  method: 'get',
  path: '/account/domainwhitelist',
  tags: ['Account'],
  summary: 'Retrieve list of a domains allowed to redirect in DDU mode',
  operationId: 'Account_GetDomainWhitelist',
  request: {
    query: z.object({
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntrySchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntrySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAccountDomainwhitelistRoute = createRoute({
  method: 'post',
  path: '/account/domainwhitelist',
  tags: ['Account'],
  summary: 'Create an domain entry',
  operationId: 'Account_PutDomainWhitelist',
  request: {
    body: {
      description: 'The entry to add',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'application/x-www-form-urlencoded': {
          schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema,
        },
        'application/xml': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'text/json': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'text/xml': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'application/xml': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'text/json': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'text/xml': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteAccountDomainwhitelistWhitelistIdRoute = createRoute({
  method: 'delete',
  path: '/account/domainwhitelist/{whitelistId}',
  tags: ['Account'],
  summary: 'Delete an domain entry',
  operationId: 'Account_DeleteDomainWhitelist',
  request: {
    params: z.object({
      whitelistId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the domain to delete',
            in: 'path',
            name: 'whitelistId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'application/xml': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'text/json': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
        'text/xml': { schema: ApiCoreDtoAccountingDomainWhitelistEntrySchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountGuestsRoute = createRoute({
  method: 'get',
  path: '/account/guests',
  tags: ['Account'],
  summary: 'Retrieve list of a guest',
  operationId: 'Account_GetGuests',
  request: {
    query: z.object({
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAccountGuestsRoute = createRoute({
  method: 'post',
  path: '/account/guests',
  tags: ['Account'],
  summary: 'Create a guest',
  operationId: 'Account_PutGuest',
  request: {
    body: {
      description: 'Guest object to create',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey: z.string().exactOptional(),
              conversionOptions: z
                .object({
                  hideComCost: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideCost: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideCount: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideParams: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideValue: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  percentCommission: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  percentValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              currentGrant: z
                .object({
                  DatapointType: z.string().exactOptional(),
                  Entity: z
                    .object({
                      id: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                      uri: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  EntityName: z.string().exactOptional(),
                  EntityType: z.string().exactOptional(),
                  Type: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              dateFormat: z.string().exactOptional(),
              decimalSeparator: z.string().exactOptional(),
              email: z.string().exactOptional(),
              extendedGrants: z
                .object({
                  allowAllGrants: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  allowGroupCreation: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              groupGrants: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              hitOptions: z
                .object({
                  hideReferrer: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              key: z.string().exactOptional(),
              language: z.string().exactOptional(),
              loginCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              name: z.string().exactOptional(),
              notes: z.string().exactOptional(),
              numberGroupSeparator: z.string().exactOptional(),
              password: z.string().exactOptional(),
              timeFormat: z.enum(['AmPm', 'H24']).exactOptional(),
              timeZone: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              timeframeMinDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              timezonename: z.string().exactOptional(),
              tlGrants: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              tpGrants: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              userName: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/xml': { schema: ApiCoreDtoAccountingGuestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'application/xml': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/xml': { schema: ApiCoreDtoAccountingGuestSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountGuestsCountRoute = createRoute({
  method: 'get',
  path: '/account/guests/count',
  tags: ['Account'],
  summary: 'Retrieve count of guests',
  operationId: 'Account_GetGuestsCount',
  request: {
    query: z.object({
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountGuestsGuestIdRoute = createRoute({
  method: 'get',
  path: '/account/guests/{guestId}',
  tags: ['Account'],
  summary: 'Retrieve a guest',
  operationId: 'Account_GetGuest',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'application/xml': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/xml': { schema: ApiCoreDtoAccountingGuestSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAccountGuestsGuestIdRoute = createRoute({
  method: 'post',
  path: '/account/guests/{guestId}',
  tags: ['Account'],
  summary: 'Update a guest',
  operationId: 'Account_PostGuest',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Guest object with field updated',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              apiKey: z.string().exactOptional(),
              conversionOptions: z
                .object({
                  hideComCost: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideCost: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideCount: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideParams: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  hideValue: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  percentCommission: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                  percentValue: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int32(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              creationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              currentGrant: z
                .object({
                  DatapointType: z.string().exactOptional(),
                  Entity: z
                    .object({
                      id: z
                        .preprocess((val) => {
                          if (
                            typeof val !== 'string' ||
                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                          )
                            return val
                          if (/^-?\d+$/.test(val)) return BigInt(val)
                          const num = Number(val)
                          return Number.isSafeInteger(num) ? BigInt(num) : val
                        }, z.int64())
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                      uri: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  EntityName: z.string().exactOptional(),
                  EntityType: z.string().exactOptional(),
                  Type: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              dateFormat: z.string().exactOptional(),
              decimalSeparator: z.string().exactOptional(),
              email: z.string().exactOptional(),
              extendedGrants: z
                .object({
                  allowAllGrants: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  allowGroupCreation: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              groupGrants: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              hitOptions: z
                .object({
                  hideReferrer: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              key: z.string().exactOptional(),
              language: z.string().exactOptional(),
              loginCount: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              name: z.string().exactOptional(),
              notes: z.string().exactOptional(),
              numberGroupSeparator: z.string().exactOptional(),
              password: z.string().exactOptional(),
              timeFormat: z.enum(['AmPm', 'H24']).exactOptional(),
              timeZone: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
              timeframeMinDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              timezonename: z.string().exactOptional(),
              tlGrants: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              tpGrants: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              userName: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/xml': { schema: ApiCoreDtoAccountingGuestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'application/xml': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/json': { schema: ApiCoreDtoAccountingGuestSchema },
        'text/xml': { schema: ApiCoreDtoAccountingGuestSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteAccountGuestsGuestIdRoute = createRoute({
  method: 'delete',
  path: '/account/guests/{guestId}',
  tags: ['Account'],
  summary: 'Delete a guest',
  operationId: 'Account_DeleteGuest',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountGuestsGuestIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/account/guests/{guestId}/permissions',
  tags: ['Account'],
  summary: 'Retrieve permissions for a guest',
  operationId: 'Account_GetPermissions',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      entityType: z
        .enum(['datapoint', 'group'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Can be "datapoint" or "group"',
            in: 'query',
            name: 'entityType',
            required: false,
            schema: { enum: ['datapoint', 'group'], type: 'string' },
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      type: z
        .enum(['r', 'w'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Can be "w" or "r"',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['r', 'w'], type: 'string' },
          },
        }),
      entityId: z
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
            description: 'Optional id of the datapoint/group entity to filter by',
            in: 'query',
            name: 'entityId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrantSchema },
        'text/json': { schema: ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrantSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountGuestsGuestIdPermissionsCountRoute = createRoute({
  method: 'get',
  path: '/account/guests/{guestId}/permissions/count',
  tags: ['Account'],
  summary: 'Retrieve count of the permissions for a guest',
  operationId: 'Account_GetPermissionsCount',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      entityType: z
        .enum(['datapoint', 'group'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Can be "datapoint" or "group"',
            in: 'query',
            name: 'entityType',
            required: false,
            schema: { enum: ['datapoint', 'group'], type: 'string' },
          },
        }),
      type: z
        .enum(['r', 'w'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Can be "w" or "r"',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['r', 'w'], type: 'string' },
          },
        }),
      entityId: z
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
            description: 'Optional id of the datapoint/group entity to filter by',
            in: 'query',
            name: 'entityId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putAccountGuestsGuestIdTypePermissionsPatchRoute = createRoute({
  method: 'put',
  path: '/account/guests/{guestId}/{type}/permissions/patch',
  tags: ['Account'],
  summary: 'Change the permission on a shared object',
  operationId: 'Account_PatchPermissions',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      type: z
        .enum(['datapoint', 'group'])
        .openapi({
          param: {
            description: 'Can be "datapoint" or "group"',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['datapoint', 'group'], type: 'string' },
          },
        }),
    }),
    body: ApiCoreRequestsPermissionPatchRequestRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAccountGuestsGuestIdTypePermissionsPatchRoute = createRoute({
  method: 'post',
  path: '/account/guests/{guestId}/{type}/permissions/patch',
  tags: ['Account'],
  summary: 'Change the permission on a shared object',
  request: {
    params: z.object({
      guestId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the guest',
            in: 'path',
            name: 'guestId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      type: z
        .enum(['datapoint', 'group'])
        .openapi({
          param: {
            description: 'Can be "datapoint" or "group"',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['datapoint', 'group'], type: 'string' },
          },
        }),
    }),
    body: ApiCoreRequestsPermissionPatchRequestRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountIpblacklistRoute = createRoute({
  method: 'get',
  path: '/account/ipblacklist',
  tags: ['Account'],
  summary: 'Retrieve list of a ip to exclude from event tracking',
  operationId: 'Account_GetIpBlacklist',
  request: {
    query: z.object({
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntrySchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntrySchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAccountIpblacklistRoute = createRoute({
  method: 'post',
  path: '/account/ipblacklist',
  tags: ['Account'],
  summary: 'Create an ip blacklist entry',
  operationId: 'Account_PutIpBlacklist',
  request: {
    body: {
      description: 'The entry to add',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'application/x-www-form-urlencoded': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'application/xml': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'text/json': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'text/xml': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'application/xml': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'text/json': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'text/xml': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteAccountIpblacklistBlacklistIdRoute = createRoute({
  method: 'delete',
  path: '/account/ipblacklist/{blacklistId}',
  tags: ['Account'],
  summary: 'Delete an ip blacklist entry',
  operationId: 'Account_DeleteIpBlacklist',
  request: {
    params: z.object({
      blacklistId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the ip to delete',
            in: 'path',
            name: 'blacklistId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'application/xml': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'text/json': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
        'text/xml': { schema: ApiCoreDtoAccountingIpBlacklistEntrySchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAccountPlanRoute = createRoute({
  method: 'get',
  path: '/account/plan',
  tags: ['Account'],
  summary: 'Retrieve current account plan',
  operationId: 'Account_GetPlan',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingPlanSchema },
        'application/xml': { schema: ApiCoreDtoAccountingPlanSchema },
        'text/json': { schema: ApiCoreDtoAccountingPlanSchema },
        'text/xml': { schema: ApiCoreDtoAccountingPlanSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAggregatedRoute = createRoute({
  method: 'get',
  path: '/aggregated',
  tags: ['Aggregated'],
  summary: 'Retrieve statistics about this customer for a timeframe',
  operationId: 'Aggregated_GetStatisticsSingle',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hourly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using "yesterday" or "today" timeframe you can ask for the hourly detail',
            in: 'query',
            name: 'hourly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      onlyFavorites: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAggregatedListRoute = createRoute({
  method: 'get',
  path: '/aggregated/list',
  tags: ['Aggregated'],
  summary:
    'Retrieve statistics about this customer for a timeframe grouped by some temporal entity (day/week/month)',
  operationId: 'Aggregated_GetStatisticsList',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .enum(['week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['week', 'month'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAggregatedSummaryConversionsRoute = createRoute({
  method: 'get',
  path: '/aggregated/summary/conversions',
  tags: ['Aggregated'],
  summary:
    'Retrieve statistics about a subset of conversions for a timeframe with conversions data',
  operationId: 'Aggregated_GetConversionsSummary',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of conversion ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAggregatedSummaryDatapointsRoute = createRoute({
  method: 'get',
  path: '/aggregated/summary/datapoints',
  tags: ['Aggregated'],
  summary: 'Retrieve statistics about a subset of datapoints for a timeframe with datapoints data',
  operationId: 'Aggregated_GetDatapointsSummary',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .openapi({
          param: {
            description: 'Type of datapoint ("tl"/"tp")',
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of datapoint ("deleted"/"active"/"paused"/"spam")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the datapoint marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      groupId: z
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
            description: 'Filter by this group id',
            in: 'query',
            name: 'groupId',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAggregatedSummaryGroupsRoute = createRoute({
  method: 'get',
  path: '/aggregated/summary/groups',
  tags: ['Aggregated'],
  summary: 'Retrieve statistics about a subset of groups for a timeframe with groups data',
  operationId: 'Aggregated_GetGroupsSummary',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of group ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the group marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getClickstreamRoute = createRoute({
  method: 'get',
  path: '/clickstream',
  tags: ['ClickStream'],
  summary: 'Retrieve the latest list of events of this account. Limited to last 100.',
  operationId: 'ClickStream_Get',
  request: {
    query: z.object({
      group: z
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
            description:
              'Filter by this group id (mutually exclusive with "datapoint" and "conversion")',
            in: 'query',
            name: 'group',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      datapoint: z
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
            description:
              'Filter by this datapoint id (mutually exclusive with "group" and "conversion")',
            in: 'query',
            name: 'datapoint',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      conversion: z
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
            description:
              'Filter by this conversion id (mutually exclusive with "datapoint" and "group")',
            in: 'query',
            name: 'conversion',
            required: false,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit results to this number',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
      filter: z
        .enum(['', 'spiders', 'uniques', 'nonuniques', 'conversions'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")',
            in: 'query',
            name: 'filter',
            required: false,
            schema: {
              enum: ['', 'spiders', 'uniques', 'nonuniques', 'conversions'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHitSchema,
        },
        'text/json': { schema: ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHitSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsRoute = createRoute({
  method: 'get',
  path: '/conversions',
  tags: ['Conversions'],
  summary: 'Retrieve a list of conversions',
  operationId: 'Conversions_Get',
  request: {
    query: z.object({
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of conversion ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude conversions created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude conversions created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postConversionsRoute = createRoute({
  method: 'post',
  path: '/conversions',
  tags: ['Conversions'],
  summary: 'Create a conversion',
  operationId: 'Conversions_Put',
  request: {
    body: {
      description: 'The body of the conversion',
      content: {
        'application/json': { schema: ApiCoreDtoConversionsConversionSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              code: z.string().exactOptional(),
              creationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              description: z.string().exactOptional(),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              name: z.string().exactOptional(),
              protocol: z.enum(['Http', 'Https']).exactOptional(),
              value: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoConversionsConversionSchema },
        'text/json': { schema: ApiCoreDtoConversionsConversionSchema },
        'text/xml': { schema: ApiCoreDtoConversionsConversionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsAggregatedListRoute = createRoute({
  method: 'get',
  path: '/conversions/aggregated/list',
  tags: ['Conversions'],
  summary:
    'Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)',
  operationId: 'Conversions_GetStatisticsAllList',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of conversion ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      groupBy: z
        .enum(['week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['week', 'month'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsCountRoute = createRoute({
  method: 'get',
  path: '/conversions/count',
  tags: ['Conversions'],
  summary: 'Retrieve a count of conversions',
  operationId: 'Conversions_Count',
  request: {
    query: z.object({
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of conversion ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude conversions created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude conversions created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsConversionIdRoute = createRoute({
  method: 'get',
  path: '/conversions/{conversionId}',
  tags: ['Conversions'],
  summary: 'Retrieve conversion specified by id',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoConversionsConversionSchema },
        'application/xml': { schema: ApiCoreDtoConversionsConversionSchema },
        'text/json': { schema: ApiCoreDtoConversionsConversionSchema },
        'text/xml': { schema: ApiCoreDtoConversionsConversionSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postConversionsConversionIdRoute = createRoute({
  method: 'post',
  path: '/conversions/{conversionId}',
  tags: ['Conversions'],
  summary: 'Update conversion specified by id',
  operationId: 'Conversions_Post',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Updated body of the conversion',
      content: {
        'application/json': { schema: ApiCoreDtoConversionsConversionSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              code: z.string().exactOptional(),
              creationDate: z
                .string()
                .exactOptional()
                .openapi({
                  description: ' (A date in "YmdHis" format)',
                  example: '20120203120530',
                }),
              deleted: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              description: z.string().exactOptional(),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              name: z.string().exactOptional(),
              protocol: z.enum(['Http', 'Https']).exactOptional(),
              value: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.float64(),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoConversionsConversionSchema },
        'text/json': { schema: ApiCoreDtoConversionsConversionSchema },
        'text/xml': { schema: ApiCoreDtoConversionsConversionSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteConversionsConversionIdRoute = createRoute({
  method: 'delete',
  path: '/conversions/{conversionId}',
  tags: ['Conversions'],
  summary: 'Delete conversion specified by id',
  operationId: 'Conversions_Delete',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsConversionIdAggregatedRoute = createRoute({
  method: 'get',
  path: '/conversions/{conversionId}/aggregated',
  tags: ['Conversions'],
  summary: 'Retrieve statistics about this conversion for a timeframe',
  operationId: 'Conversions_GetStatisticsSingle',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by this tag name',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the datapoint marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      hourly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using "yesterday" or "today" timeframe you can ask for the hourly detail',
            in: 'query',
            name: 'hourly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsConversionIdAggregatedListRoute = createRoute({
  method: 'get',
  path: '/conversions/{conversionId}/aggregated/list',
  tags: ['Conversions'],
  summary:
    'Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)',
  operationId: 'Conversions_GetStatisticsList',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .enum(['week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['week', 'month'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsConversionIdDatapointsRoute = createRoute({
  method: 'get',
  path: '/conversions/{conversionId}/datapoints',
  tags: ['Conversions'],
  summary: 'Retrieve a list of datapoints connected to this conversion',
  operationId: 'Conversions_GetDatapoints',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of datapoint ("tl"/"tp")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of datapoint ("deleted"/"active"/"paused"/"spam")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by this tag name',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putConversionsConversionIdDatapointsBatchPatchRoute = createRoute({
  method: 'put',
  path: '/conversions/{conversionId}/datapoints/batch/patch',
  tags: ['Conversions'],
  summary: 'Modify the association between a conversion and multiple datapoints',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Patch requests',
      content: {
        'application/json': { schema: ApiCoreRequestsPatchBodyBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              PatchRequests: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        Action: z.string().exactOptional(),
                        Id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/json': { schema: ApiCoreRequestsPatchBodyBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsConversionIdDatapointsCountRoute = createRoute({
  method: 'get',
  path: '/conversions/{conversionId}/datapoints/count',
  tags: ['Conversions'],
  summary: 'Retrieve a count of datapoints connected to this conversion',
  operationId: 'Conversions_GetDatapointsCount',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of datapoint ("tl"/"tp")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of datapoint ("deleted"/"active"/"paused"/"spam")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by this tag name',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putConversionsConversionIdDatapointsPatchRoute = createRoute({
  method: 'put',
  path: '/conversions/{conversionId}/datapoints/patch',
  tags: ['Conversions'],
  summary: 'Modify the association between a conversion and a datapoint',
  operationId: 'Conversions_Patch',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Patch request',
      content: {
        'application/json': { schema: ApiCoreRequestsConversionPatchBodySchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Action: z.string().exactOptional(),
              Id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              ReplaceId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreRequestsConversionPatchBodySchema },
        'text/json': { schema: ApiCoreRequestsConversionPatchBodySchema },
        'text/xml': { schema: ApiCoreRequestsConversionPatchBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getConversionsConversionIdHitsRoute = createRoute({
  method: 'get',
  path: '/conversions/{conversionId}/hits',
  tags: ['Conversions'],
  summary: 'Retrieve the list of events related to this conversion.',
  operationId: 'Conversions_GetHits',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeframe: z
        .enum([
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeframe',
            required: true,
            schema: {
              enum: [
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'custom',
              ],
              type: 'string',
            },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Offset where to start from (it's the lastKey field in the response object)",
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .enum(['spiders', 'uniques', 'nonuniques', 'conversions'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { enum: ['spiders', 'uniques', 'nonuniques', 'conversions'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
        'text/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putConversionsConversionIdNotesRoute = createRoute({
  method: 'put',
  path: '/conversions/{conversionId}/notes',
  tags: ['Conversions'],
  summary: 'Fast patch the "notes" field of a conversion',
  operationId: 'Conversions_PatchNotes',
  request: {
    params: z.object({
      conversionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the conversion',
            in: 'path',
            name: 'conversionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreRequestsGenericTextPatchRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsRoute = createRoute({
  method: 'get',
  path: '/datapoints',
  tags: ['DataPoints'],
  summary: 'List of all the datapoints associated to the user',
  operationId: 'DataPoints_Get',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the datapoint ("tp"/"tl")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyFavorites: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by favourite status',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postDatapointsRoute = createRoute({
  method: 'post',
  path: '/datapoints',
  tags: ['DataPoints'],
  summary: 'Create a datapoint',
  operationId: 'DataPoints_Put',
  request: { body: ApiCoreDtoDatapointsDatapointRequestBody },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsAggregatedRoute = createRoute({
  method: 'get',
  path: '/datapoints/aggregated',
  tags: ['DataPoints'],
  summary: 'Retrieve statistics about this customer for a timeframe by groups',
  operationId: 'DataPoints_GetStatisticsAggregatedSingle',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of datapoint ("tl"/"tp")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hourly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using "yesterday" or "today" timeframe you can ask for the hourly detail',
            in: 'query',
            name: 'hourly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of datapoint ("deleted"/"active"/"paused"/"spam")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the datapoint is marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsAggregatedListRoute = createRoute({
  method: 'get',
  path: '/datapoints/aggregated/list',
  tags: ['DataPoints'],
  summary:
    'Retrieve statistics about all datapoints of this customer for a timeframe grouped by some temporal entity (day/week/month)',
  operationId: 'DataPoints_GetStatisticsAllList',
  request: {
    query: z.object({
      type: z
        .enum(['tp', 'tl'])
        .openapi({
          param: {
            description: 'Type of datapoint ("tl"/"tp")',
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of datapoint ("deleted"/"active"/"paused"/"spam")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the datapoint is marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      groupBy: z
        .enum(['week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['week', 'month'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putDatapointsBatchRoute = createRoute({
  method: 'put',
  path: '/datapoints/batch',
  tags: ['DataPoints'],
  summary: 'Create multiple datapoints',
  operationId: 'DataPoints_BatchPut',
  request: {
    body: {
      description: 'A json containing the datapoints to create.',
      content: {
        'application/json': { schema: ApiCoreRequestsDatapointsBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              List: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        creationDate: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: ' (A date in "YmdHis" format)',
                            example: '20120203120530',
                          }),
                        encodeIp: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        fifthConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        fifthConversionName: z.string().exactOptional(),
                        firstConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        firstConversionName: z.string().exactOptional(),
                        fourthConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        fourthConversionName: z.string().exactOptional(),
                        groupId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        groupName: z.string().exactOptional(),
                        id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        isPublic: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        isSecured: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        lightTracking: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        name: z.string().exactOptional(),
                        notes: z.string().exactOptional(),
                        preferred: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        redirectOnly: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        secondConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        secondConversionName: z.string().exactOptional(),
                        status: z.enum(['Active', 'Paused', 'Abuse', 'Deleted']).exactOptional(),
                        tags: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  datapoints: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .preprocess((val) => {
                                            if (
                                              typeof val !== 'string' ||
                                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                            )
                                              return val
                                            if (/^-?\d+$/.test(val)) return BigInt(val)
                                            const num = Number(val)
                                            return Number.isSafeInteger(num) ? BigInt(num) : val
                                          }, z.int64())
                                          .openapi({ type: 'integer', format: 'int64' }),
                                      ),
                                    )
                                    .exactOptional(),
                                  groups: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .preprocess((val) => {
                                            if (
                                              typeof val !== 'string' ||
                                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                            )
                                              return val
                                            if (/^-?\d+$/.test(val)) return BigInt(val)
                                            const num = Number(val)
                                            return Number.isSafeInteger(num) ? BigInt(num) : val
                                          }, z.int64())
                                          .openapi({ type: 'integer', format: 'int64' }),
                                      ),
                                    )
                                    .exactOptional(),
                                  id: z
                                    .preprocess((val) => {
                                      if (
                                        typeof val !== 'string' ||
                                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                      )
                                        return val
                                      if (/^-?\d+$/.test(val)) return BigInt(val)
                                      const num = Number(val)
                                      return Number.isSafeInteger(num) ? BigInt(num) : val
                                    }, z.int64())
                                    .exactOptional()
                                    .openapi({ type: 'integer', format: 'int64' }),
                                  name: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            ),
                          )
                          .exactOptional(),
                        thirdConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        thirdConversionName: z.string().exactOptional(),
                        title: z.string().exactOptional(),
                        trackingCode: z.string().exactOptional(),
                        type: z.enum(['TrackingLink', 'TrackingPixel']).exactOptional(),
                        typeTL: z
                          .object({
                            appendQuery: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            browserDestinationItem:
                              ApiCoreDtoDatapointsBrowserBaseDestinationItemSchema.exactOptional(),
                            destinationMode: z
                              .enum([
                                'Simple',
                                'RandomDestination',
                                'DestinationByLanguage',
                                'SpilloverDestination',
                                'DynamicUrl',
                                'BrowserDestination',
                                'DestinationByNation',
                                'UniqueDestination',
                                'SequentialDestination',
                                'WeightedDestination',
                              ])
                              .exactOptional(),
                            domainId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            encodeUrl: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            expirationClicks: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({ type: 'integer', format: 'int64' }),
                            expirationDate: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: ' (A date in "YmdHis" format)',
                                example: '20120203120530',
                              }),
                            firstUrl: z.string().exactOptional(),
                            goDomainId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            hideUrl: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            hideUrlTitle: z.string().exactOptional(),
                            isABTest: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            password: z.string().exactOptional(),
                            pauseAfterClicksExpiration: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            pauseAfterDateExpiration: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            randomDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                              )
                              .exactOptional(),
                            redirectType: z
                              .enum(['PermanentRedirect', 'TemporaryRedirect'])
                              .exactOptional(),
                            referrerClean: z.enum(['None', 'Clean', 'Myself']).exactOptional(),
                            scripts: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      id: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({ type: 'integer', format: 'int64' }),
                                      name: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                ),
                              )
                              .exactOptional(),
                            sequentialDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                              )
                              .exactOptional(),
                            spilloverDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                              )
                              .exactOptional(),
                            uniqueDestinationItem:
                              ApiCoreDtoDatapointsUniqueDestinationItemSchema.exactOptional(),
                            url: z.string().exactOptional(),
                            urlAfterClicksExpiration: z.string().exactOptional(),
                            urlAfterDateExpiration: z.string().exactOptional(),
                            urlsByLanguage: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsUrlByLanguageItemSchema),
                              )
                              .exactOptional(),
                            urlsByNation: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsUrlByNationItemSchema),
                              )
                              .exactOptional(),
                            weightedDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      url: z.string().exactOptional(),
                                      weight: z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int32(),
                                        )
                                        .exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                ),
                              )
                              .exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        typeTP: ApiCoreDtoDatapointsTrackingPixelSpecificsSchema.exactOptional(),
                        writePermited: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/json': { schema: ApiCoreRequestsDatapointsBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema:
            ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema,
        },
        'text/json': {
          schema:
            ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postDatapointsBatchRoute = createRoute({
  method: 'post',
  path: '/datapoints/batch',
  tags: ['DataPoints'],
  summary: 'Update multiple datapoints',
  operationId: 'DataPoints_BatchPost',
  request: {
    body: {
      description: 'A json containing the datapoints to update.',
      content: {
        'application/json': { schema: ApiCoreRequestsDatapointsBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              List: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        creationDate: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: ' (A date in "YmdHis" format)',
                            example: '20120203120530',
                          }),
                        encodeIp: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        fifthConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        fifthConversionName: z.string().exactOptional(),
                        firstConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        firstConversionName: z.string().exactOptional(),
                        fourthConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        fourthConversionName: z.string().exactOptional(),
                        groupId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        groupName: z.string().exactOptional(),
                        id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        isPublic: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        isSecured: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        lightTracking: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        name: z.string().exactOptional(),
                        notes: z.string().exactOptional(),
                        preferred: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        redirectOnly: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                        secondConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        secondConversionName: z.string().exactOptional(),
                        status: z.enum(['Active', 'Paused', 'Abuse', 'Deleted']).exactOptional(),
                        tags: z
                          .preprocess(
                            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                            z.array(
                              z
                                .object({
                                  datapoints: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .preprocess((val) => {
                                            if (
                                              typeof val !== 'string' ||
                                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                            )
                                              return val
                                            if (/^-?\d+$/.test(val)) return BigInt(val)
                                            const num = Number(val)
                                            return Number.isSafeInteger(num) ? BigInt(num) : val
                                          }, z.int64())
                                          .openapi({ type: 'integer', format: 'int64' }),
                                      ),
                                    )
                                    .exactOptional(),
                                  groups: z
                                    .preprocess(
                                      (val) =>
                                        val === undefined || Array.isArray(val) ? val : [val],
                                      z.array(
                                        z
                                          .preprocess((val) => {
                                            if (
                                              typeof val !== 'string' ||
                                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                            )
                                              return val
                                            if (/^-?\d+$/.test(val)) return BigInt(val)
                                            const num = Number(val)
                                            return Number.isSafeInteger(num) ? BigInt(num) : val
                                          }, z.int64())
                                          .openapi({ type: 'integer', format: 'int64' }),
                                      ),
                                    )
                                    .exactOptional(),
                                  id: z
                                    .preprocess((val) => {
                                      if (
                                        typeof val !== 'string' ||
                                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                      )
                                        return val
                                      if (/^-?\d+$/.test(val)) return BigInt(val)
                                      const num = Number(val)
                                      return Number.isSafeInteger(num) ? BigInt(num) : val
                                    }, z.int64())
                                    .exactOptional()
                                    .openapi({ type: 'integer', format: 'int64' }),
                                  name: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            ),
                          )
                          .exactOptional(),
                        thirdConversionId: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        thirdConversionName: z.string().exactOptional(),
                        title: z.string().exactOptional(),
                        trackingCode: z.string().exactOptional(),
                        type: z.enum(['TrackingLink', 'TrackingPixel']).exactOptional(),
                        typeTL: z
                          .object({
                            appendQuery: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            browserDestinationItem:
                              ApiCoreDtoDatapointsBrowserBaseDestinationItemSchema.exactOptional(),
                            destinationMode: z
                              .enum([
                                'Simple',
                                'RandomDestination',
                                'DestinationByLanguage',
                                'SpilloverDestination',
                                'DynamicUrl',
                                'BrowserDestination',
                                'DestinationByNation',
                                'UniqueDestination',
                                'SequentialDestination',
                                'WeightedDestination',
                              ])
                              .exactOptional(),
                            domainId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            encodeUrl: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            expirationClicks: z
                              .preprocess((val) => {
                                if (
                                  typeof val !== 'string' ||
                                  !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                )
                                  return val
                                if (/^-?\d+$/.test(val)) return BigInt(val)
                                const num = Number(val)
                                return Number.isSafeInteger(num) ? BigInt(num) : val
                              }, z.int64())
                              .exactOptional()
                              .openapi({ type: 'integer', format: 'int64' }),
                            expirationDate: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: ' (A date in "YmdHis" format)',
                                example: '20120203120530',
                              }),
                            firstUrl: z.string().exactOptional(),
                            goDomainId: z
                              .preprocess(
                                (val) =>
                                  typeof val === 'string' &&
                                  /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                  (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                    ? Number(val)
                                    : val,
                                z.int32(),
                              )
                              .exactOptional(),
                            hideUrl: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            hideUrlTitle: z.string().exactOptional(),
                            isABTest: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            password: z.string().exactOptional(),
                            pauseAfterClicksExpiration: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            pauseAfterDateExpiration: z
                              .preprocess(
                                ((read) => (val: unknown) => {
                                  const result = read.safeParse(val)
                                  return result.success ? result.data : val
                                })(z.stringbool()),
                                z.boolean(),
                              )
                              .exactOptional(),
                            randomDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                              )
                              .exactOptional(),
                            redirectType: z
                              .enum(['PermanentRedirect', 'TemporaryRedirect'])
                              .exactOptional(),
                            referrerClean: z.enum(['None', 'Clean', 'Myself']).exactOptional(),
                            scripts: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      id: z
                                        .preprocess((val) => {
                                          if (
                                            typeof val !== 'string' ||
                                            !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                                          )
                                            return val
                                          if (/^-?\d+$/.test(val)) return BigInt(val)
                                          const num = Number(val)
                                          return Number.isSafeInteger(num) ? BigInt(num) : val
                                        }, z.int64())
                                        .exactOptional()
                                        .openapi({ type: 'integer', format: 'int64' }),
                                      name: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                ),
                              )
                              .exactOptional(),
                            sequentialDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                              )
                              .exactOptional(),
                            spilloverDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsMultipleDestinationItemSchema),
                              )
                              .exactOptional(),
                            uniqueDestinationItem:
                              ApiCoreDtoDatapointsUniqueDestinationItemSchema.exactOptional(),
                            url: z.string().exactOptional(),
                            urlAfterClicksExpiration: z.string().exactOptional(),
                            urlAfterDateExpiration: z.string().exactOptional(),
                            urlsByLanguage: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsUrlByLanguageItemSchema),
                              )
                              .exactOptional(),
                            urlsByNation: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(ApiCoreDtoDatapointsUrlByNationItemSchema),
                              )
                              .exactOptional(),
                            weightedDestinationItems: z
                              .preprocess(
                                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                                z.array(
                                  z
                                    .object({
                                      url: z.string().exactOptional(),
                                      weight: z
                                        .preprocess(
                                          (val) =>
                                            typeof val === 'string' &&
                                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                                            (!/^-?\d+$/.test(val) ||
                                              Number.isSafeInteger(Number(val)))
                                              ? Number(val)
                                              : val,
                                          z.int32(),
                                        )
                                        .exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                ),
                              )
                              .exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        typeTP: ApiCoreDtoDatapointsTrackingPixelSpecificsSchema.exactOptional(),
                        writePermited: z
                          .preprocess(
                            ((read) => (val: unknown) => {
                              const result = read.safeParse(val)
                              return result.success ? result.data : val
                            })(z.stringbool()),
                            z.boolean(),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/json': { schema: ApiCoreRequestsDatapointsBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema:
            ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema,
        },
        'text/json': {
          schema:
            ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteDatapointsBatchRoute = createRoute({
  method: 'delete',
  path: '/datapoints/batch',
  tags: ['DataPoints'],
  summary: 'Delete multiple datapoints',
  operationId: 'DataPoints_BatchDelete',
  request: {
    body: {
      description: 'A json containing the datapoints to delete.',
      content: {
        'application/json': { schema: ApiCoreRequestsDeleteBatchSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              Entities: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        uri: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/json': { schema: ApiCoreRequestsDeleteBatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema:
            ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema,
        },
        'text/json': {
          schema:
            ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsCountRoute = createRoute({
  method: 'get',
  path: '/datapoints/count',
  tags: ['DataPoints'],
  summary: 'Count the datapoints associated to the user',
  operationId: 'DataPoints_Count',
  request: {
    query: z.object({
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the datapoint ("tp"/"tl")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyFavorites: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by favourite status',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsIdRoute = createRoute({
  method: 'get',
  path: '/datapoints/{id}',
  tags: ['DataPoints'],
  summary: 'Get a datapoint',
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
            description: 'The id of the datapoint',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoDatapointsDatapointSchema },
        'text/json': { schema: ApiCoreDtoDatapointsDatapointSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postDatapointsIdRoute = createRoute({
  method: 'post',
  path: '/datapoints/{id}',
  tags: ['DataPoints'],
  summary: 'Update a datapoint',
  operationId: 'DataPoints_Post',
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
            description: 'The id of the datapoint',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreDtoDatapointsDatapointRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteDatapointsIdRoute = createRoute({
  method: 'delete',
  path: '/datapoints/{id}',
  tags: ['DataPoints'],
  summary: 'Delete a datapoint',
  operationId: 'DataPoints_Delete',
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
            description: 'The id of the datapoint',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsIdAggregatedRoute = createRoute({
  method: 'get',
  path: '/datapoints/{id}/aggregated',
  tags: ['DataPoints'],
  summary: 'Retrieve statistics about this datapoint for a timeframe',
  operationId: 'DataPoints_GetStatisticsSingle',
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
            description: 'Id of the datapoint',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hourly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using "yesterday" or "today" timeframe you can ask for the hourly detail',
            in: 'query',
            name: 'hourly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsIdAggregatedListRoute = createRoute({
  method: 'get',
  path: '/datapoints/{id}/aggregated/list',
  tags: ['DataPoints'],
  summary:
    'Retrieve statistics about this datapoint for a timeframe grouped by some temporal entity (day/week/month)',
  operationId: 'DataPoints_GetStatisticsList',
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
            description: 'Id of the datapoint',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .enum(['week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['week', 'month'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putDatapointsIdFavouriteRoute = createRoute({
  method: 'put',
  path: '/datapoints/{id}/favourite',
  tags: ['DataPoints'],
  summary: 'Fast switch the "favourite" field of a datapoint',
  operationId: 'DataPoints_PatchFavourite',
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
            description: 'Id of the datapoint',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDatapointsIdHitsRoute = createRoute({
  method: 'get',
  path: '/datapoints/{id}/hits',
  tags: ['DataPoints'],
  summary: 'Retrieve the list of events related to this datapoint.',
  operationId: 'DataPoints_GetHits',
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
            description: 'Id of the datapoint',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeframe: z
        .enum([
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeframe',
            required: true,
            schema: {
              enum: [
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'custom',
              ],
              type: 'string',
            },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Offset where to start from (it's the lastKey field in the response object)",
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .enum(['spiders', 'uniques', 'nonuniques', 'conversions'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { enum: ['spiders', 'uniques', 'nonuniques', 'conversions'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
        'text/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putDatapointsIdNotesRoute = createRoute({
  method: 'put',
  path: '/datapoints/{id}/notes',
  tags: ['DataPoints'],
  summary: 'Fast patch the "notes" field of a datapoint',
  operationId: 'DataPoints_PatchNotes',
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
            description: 'Id of the datapoint',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreRequestsGenericTextPatchRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Retrieve a list of domains',
  operationId: 'Domains_Get',
  request: {
    query: z.object({
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
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { format: 'int32', minLength: 0, type: 'integer' },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      type: z
        .enum(['system', 'go', 'personal', 'dedicated'])
        .default('system')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              default: 'system',
              enum: ['system', 'go', 'personal', 'dedicated'],
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter domains with this anmen',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postDomainsRoute = createRoute({
  method: 'post',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Create a domain',
  operationId: 'Domains_Put',
  request: {
    body: {
      description: 'The domain to create',
      content: {
        'application/json': { schema: ApiCoreDtoDomainsDomainSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              custom404: z.string().exactOptional(),
              customHomepage: z.string().exactOptional(),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              name: z.string().exactOptional(),
              type: z.enum(['System', 'Go', 'Dedicated', 'Personal']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoDomainsDomainSchema },
        'text/json': { schema: ApiCoreDtoDomainsDomainSchema },
        'text/xml': { schema: ApiCoreDtoDomainsDomainSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDomainsCountRoute = createRoute({
  method: 'get',
  path: '/domains/count',
  tags: ['Domains'],
  summary: 'Retrieve count of domains',
  operationId: 'Domains_Count',
  request: {
    query: z.object({
      type: z
        .enum(['system', 'go', 'personal', 'dedicated'])
        .default('system')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              default: 'system',
              enum: ['system', 'go', 'personal', 'dedicated'],
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter domains with this anmen',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getDomainsIdRoute = createRoute({
  method: 'get',
  path: '/domains/{id}',
  tags: ['Domains'],
  summary: 'Get a domain',
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
            description: 'Id of domain',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoDomainsDomainSchema },
        'application/xml': { schema: ApiCoreDtoDomainsDomainSchema },
        'text/json': { schema: ApiCoreDtoDomainsDomainSchema },
        'text/xml': { schema: ApiCoreDtoDomainsDomainSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const postDomainsIdRoute = createRoute({
  method: 'post',
  path: '/domains/{id}',
  tags: ['Domains'],
  summary: 'Update a domain',
  operationId: 'Domains_Update',
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
            description: 'Id of domain',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The domain to update',
      content: {
        'application/json': { schema: ApiCoreDtoDomainsDomainSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              custom404: z.string().exactOptional(),
              customHomepage: z.string().exactOptional(),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              name: z.string().exactOptional(),
              type: z.enum(['System', 'Go', 'Dedicated', 'Personal']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: ApiCoreDtoDomainsDomainSchema },
        'text/json': { schema: ApiCoreDtoDomainsDomainSchema },
        'text/xml': { schema: ApiCoreDtoDomainsDomainSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteDomainsIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{id}',
  tags: ['Domains'],
  summary: 'Delete a domain',
  operationId: 'Domains_Delete',
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
            description: 'Id of domain',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['Groups'],
  summary: 'List of all the groups associated to the user.',
  operationId: 'Groups_Get',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the group',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
      write: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Write permission',
            in: 'query',
            name: 'write',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postGroupsRoute = createRoute({
  method: 'post',
  path: '/groups',
  tags: ['Groups'],
  summary: 'Create a group',
  operationId: 'Groups_Put',
  request: { body: ApiCoreDtoGroupsGroupRequestBody },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsAggregatedRoute = createRoute({
  method: 'get',
  path: '/groups/aggregated',
  tags: ['Groups'],
  summary: 'Retrieve statistics about this customer for a timeframe by groups',
  operationId: 'Groups_GetStatisticsAggregatedSingle',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hourly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using "yesterday" or "today" timeframe you can ask for the hourly detail',
            in: 'query',
            name: 'hourly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of group ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the group is marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsAggregatedListRoute = createRoute({
  method: 'get',
  path: '/groups/aggregated/list',
  tags: ['Groups'],
  summary:
    'Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)',
  operationId: 'Groups_GetStatisticsAllList',
  request: {
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of group ("deleted"/"active")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the group is marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      groupBy: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsCountRoute = createRoute({
  method: 'get',
  path: '/groups/count',
  tags: ['Groups'],
  summary: 'Count the groups associated to the user.',
  operationId: 'Groups_Count',
  request: {
    query: z.object({
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
      write: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Write permission',
            in: 'query',
            name: 'write',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdRoute = createRoute({
  method: 'get',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Get a group',
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
            description: 'The id of the group',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoGroupsGroupSchema },
        'text/json': { schema: ApiCoreDtoGroupsGroupSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postGroupsIdRoute = createRoute({
  method: 'post',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Update a group',
  operationId: 'Groups_Post',
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
            description: 'The id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreDtoGroupsGroupRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/groups/{id}',
  tags: ['Groups'],
  summary: 'Delete group specified by id',
  operationId: 'Groups_Delete',
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
            description: 'Id of the group',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdAggregatedRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/aggregated',
  tags: ['Groups'],
  summary: 'Retrieve statistics about this group for a timeframe',
  operationId: 'Groups_GetStatisticsSingle',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hourly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using "yesterday" or "today" timeframe you can ask for the hourly detail',
            in: 'query',
            name: 'hourly',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdAggregatedListRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/aggregated/list',
  tags: ['Groups'],
  summary:
    'Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)',
  operationId: 'Groups_GetStatisticsList',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groupBy: z
        .enum(['week', 'month'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The temporal entity you want to group by ("week"/"month"). If unspecified is "day".',
            in: 'query',
            name: 'groupBy',
            required: false,
            schema: { enum: ['week', 'month'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResultSchema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdAggregatedSummaryRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/aggregated/summary',
  tags: ['Groups'],
  summary: 'Retrieve statistics about a subset of datapoints for a timeframe with datapoints data',
  operationId: 'Groups_GetDatapointsSummary',
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
            description: 'Filter by this group id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeFrame: z
        .enum([
          'today',
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'last12months',
          'lastyear',
          'currentyear',
          'beginning',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeFrame',
            required: true,
            schema: {
              enum: [
                'today',
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'last12months',
                'lastyear',
                'currentyear',
                'beginning',
                'custom',
              ],
              type: 'string',
            },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of datapoint ("tl"/"tp")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of datapoint ("deleted"/"active"/"paused"/"spam")',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      favourite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Is the datapoint marked as favourite',
            in: 'query',
            name: 'favourite',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Offset where to start from',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
        'text/json': { schema: ApiCoreDtoAggregatedAggregatedSummaryResultSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdDatapointsRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/datapoints',
  tags: ['Groups'],
  summary: 'List of all the datapoints associated to the user in this group.',
  operationId: 'Groups_GetDatapoints',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the datapoint ("tp"/"tl")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyFavorites: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by favourite status',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postGroupsIdDatapointsRoute = createRoute({
  method: 'post',
  path: '/groups/{id}/datapoints',
  tags: ['Groups'],
  summary: 'Create a datapoint in this group',
  operationId: 'Groups_PutDatapoint',
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
            description: 'The id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreDtoDatapointsDatapointRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdDatapointsCountRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/datapoints/count',
  tags: ['Groups'],
  summary: 'Count the datapoints associated to the user in this group.',
  operationId: 'Groups_GetDatapointsCount',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the datapoint ("tp"/"tl")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyFavorites: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by favourite status',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const putGroupsIdFavouriteRoute = createRoute({
  method: 'put',
  path: '/groups/{id}/favourite',
  tags: ['Groups'],
  summary: 'Fast switch the "favourite" field of a group',
  operationId: 'Groups_PatchFavourite',
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
            description: 'Id of the group',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGroupsIdHitsRoute = createRoute({
  method: 'get',
  path: '/groups/{id}/hits',
  tags: ['Groups'],
  summary: 'Retrieve the list of events related to this group.',
  operationId: 'Groups_GetHits',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeframe: z
        .enum([
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeframe',
            required: true,
            schema: {
              enum: [
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'custom',
              ],
              type: 'string',
            },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Offset where to start from (it's the lastKey field in the response object)",
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .enum(['spiders', 'uniques', 'nonuniques', 'conversions'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { enum: ['spiders', 'uniques', 'nonuniques', 'conversions'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
        'text/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const putGroupsIdNotesRoute = createRoute({
  method: 'put',
  path: '/groups/{id}/notes',
  tags: ['Groups'],
  summary: 'Fast patch the "notes" field of a group',
  operationId: 'Groups_PatchNotes',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreRequestsGenericTextPatchRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getHitsRoute = createRoute({
  method: 'get',
  path: '/hits',
  tags: ['Hits'],
  summary: 'Retrieve the list of events related to this account.',
  operationId: 'Hits_GetHits',
  request: {
    query: z.object({
      timeframe: z
        .enum([
          'yesterday',
          'last7',
          'last30',
          'lastmonth',
          'currentmonth',
          'previousmonth',
          'last90',
          'last120',
          'last180',
          'custom',
        ])
        .openapi({
          param: {
            description: 'Timeframe of the request. See list at $timeframeList',
            in: 'query',
            name: 'timeframe',
            required: true,
            schema: {
              enum: [
                'yesterday',
                'last7',
                'last30',
                'lastmonth',
                'currentmonth',
                'previousmonth',
                'last90',
                'last120',
                'last180',
                'custom',
              ],
              type: 'string',
            },
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
            description: 'Limit results to this number',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Offset where to start from (it's the lastKey field in the response object)",
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fromDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If using a "custom" timeFrame you can specify the starting day (YYYYMMDD)',
            in: 'query',
            name: 'fromDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      toDay: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If using a "custom" timeFrame you can specify the ending day (YYYYMMDD)',
            in: 'query',
            name: 'toDay',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .enum(['spiders', 'uniques', 'nonuniques', 'conversions'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { enum: ['spiders', 'uniques', 'nonuniques', 'conversions'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
        'text/json': { schema: ApiCoreDtoClickStreamHitListPageSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['Me'],
  summary: 'Retrieve current account data',
  operationId: 'Me_GetMe',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingUserSchema },
        'application/xml': { schema: ApiCoreDtoAccountingUserSchema },
        'text/json': { schema: ApiCoreDtoAccountingUserSchema },
        'text/xml': { schema: ApiCoreDtoAccountingUserSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getMePlanRoute = createRoute({
  method: 'get',
  path: '/me/plan',
  tags: ['Me'],
  summary: 'Retrieve current account plan',
  operationId: 'Me_GetMePlan',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoAccountingPlanSchema },
        'application/xml': { schema: ApiCoreDtoAccountingPlanSchema },
        'text/json': { schema: ApiCoreDtoAccountingPlanSchema },
        'text/xml': { schema: ApiCoreDtoAccountingPlanSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getRetargetingRoute = createRoute({
  method: 'get',
  path: '/retargeting',
  tags: ['Retargeting'],
  summary: 'List of all the retargeting scripts associated to the user',
  operationId: 'Retargeting_Get',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postRetargetingRoute = createRoute({
  method: 'post',
  path: '/retargeting',
  tags: ['Retargeting'],
  summary: 'Creates a retargeting script',
  operationId: 'Retargeting_Put',
  request: { body: ApiCoreDtoRetargetingRetargetingScriptRequestBody },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getRetargetingCountRoute = createRoute({
  method: 'get',
  path: '/retargeting/count',
  tags: ['Retargeting'],
  summary: 'Retrieve count of retargeting scripts',
  operationId: 'Retargeting_Count',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getRetargetingIdRoute = createRoute({
  method: 'get',
  path: '/retargeting/{id}',
  tags: ['Retargeting'],
  summary: 'Get a retargeting script object',
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
            description: 'The id of the retargeting script',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
        'application/xml': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
        'text/json': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
        'text/xml': { schema: ApiCoreDtoRetargetingRetargetingScriptSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postRetargetingIdRoute = createRoute({
  method: 'post',
  path: '/retargeting/{id}',
  tags: ['Retargeting'],
  summary: 'Updates a retargeting script',
  operationId: 'Retargeting_Post',
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
            description: 'The id of the retargeting script',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreDtoRetargetingRetargetingScriptRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteRetargetingIdRoute = createRoute({
  method: 'delete',
  path: '/retargeting/{id}',
  tags: ['Retargeting'],
  summary: 'Deletes a retargeting script (and remove associations)',
  operationId: 'Retargeting_Delete',
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
            description: 'The id of the retargeting script',
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
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getRetargetingIdDatapointsRoute = createRoute({
  method: 'get',
  path: '/retargeting/{id}/datapoints',
  tags: ['Retargeting'],
  summary: 'List of all the datapoints associated to the retargeting script.',
  operationId: 'Retargeting_GetDatapoints',
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
            description: 'Id of the retargeting script',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyFavorites: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by favourite status',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Field to sort by',
            in: 'query',
            name: 'sortBy',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sortDirection: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Direction of sort "asc" or "desc"',
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { enum: ['asc', 'desc'], type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getRetargetingIdDatapointsCountRoute = createRoute({
  method: 'get',
  path: '/retargeting/{id}/datapoints/count',
  tags: ['Retargeting'],
  summary: 'Count the datapoints associated to the retargeting script.',
  operationId: 'Retargeting_GetDatapointsCount',
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
            description: 'Id of the group',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma separated list of tags you want to filter with.',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyFavorites: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by favourite status',
            in: 'query',
            name: 'onlyFavorites',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'List of all the groups associated to the user filtered by this tag.',
  operationId: 'Tags_Get',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the tag',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      datapoints: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of datapoints id to filter by',
            in: 'query',
            name: 'datapoints',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groups: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of groups id to filter by',
            in: 'query',
            name: 'groups',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['tp', 'tl', 'dp', 'gr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of entity related to the tag',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl', 'dp', 'gr'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const postTagsRoute = createRoute({
  method: 'post',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Create a tag',
  operationId: 'Tags_Put',
  request: {
    body: {
      description: 'The body of the tag',
      content: {
        'application/json': { schema: ApiCoreDtoTagsTagSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              datapoints: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .preprocess((val) => {
                        if (
                          typeof val !== 'string' ||
                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                        )
                          return val
                        if (/^-?\d+$/.test(val)) return BigInt(val)
                        const num = Number(val)
                        return Number.isSafeInteger(num) ? BigInt(num) : val
                      }, z.int64())
                      .openapi({ type: 'integer', format: 'int64' }),
                  ),
                )
                .exactOptional(),
              groups: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .preprocess((val) => {
                        if (
                          typeof val !== 'string' ||
                          !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                        )
                          return val
                        if (/^-?\d+$/.test(val)) return BigInt(val)
                        const num = Number(val)
                        return Number.isSafeInteger(num) ? BigInt(num) : val
                      }, z.int64())
                      .openapi({ type: 'integer', format: 'int64' }),
                  ),
                )
                .exactOptional(),
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64' }),
              name: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'text/json': { schema: ApiCoreDtoTagsTagSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsCountRoute = createRoute({
  method: 'get',
  path: '/tags/count',
  tags: ['Tags'],
  summary: 'List of all the groups associated to the user filtered by this tag.',
  operationId: 'Tags_Count',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the tag',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      datapoints: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of datapoints id to filter by',
            in: 'query',
            name: 'datapoints',
            required: false,
            schema: { type: 'string' },
          },
        }),
      groups: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated list of groups id to filter by',
            in: 'query',
            name: 'groups',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['tp', 'tl', 'dp', 'gr'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of entity related to the tag',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl', 'dp', 'gr'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsTagIdRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Retrieve a tag',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreDtoTagsTagSchema },
        'text/json': { schema: ApiCoreDtoTagsTagSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteTagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  operationId: 'Tags_Delete',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: SystemObjectSchema },
        'text/json': { schema: SystemObjectSchema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsTagIdDatapointsRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}/datapoints',
  tags: ['Tags'],
  summary: 'List of all the datapoints associated to the user filtered by this tag',
  operationId: 'Tags_GetDatapoints',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the datapoint ("tp"/"tl")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteTagsTagIdDatapointsRoute = createRoute({
  method: 'delete',
  path: '/tags/{tagId}/datapoints',
  tags: ['Tags'],
  summary: 'Delete the association of this tag with all datapoints',
  operationId: 'Tags_DeleteRelatedDatapoints',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsTagIdDatapointsCountRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}/datapoints/count',
  tags: ['Tags'],
  summary: 'Count the datapoints associated to the user filtered by this tag',
  operationId: 'Tags_GetDatapointsCount',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['tp', 'tl'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the datapoint ("tp"/"tl")',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['tp', 'tl'], type: 'string' },
          },
        }),
      status: z
        .enum(['deleted', 'active', 'paused', 'spam'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active', 'paused', 'spam'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude datapoints created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const putTagsTagIdDatapointsPatchRoute = createRoute({
  method: 'put',
  path: '/tags/{tagId}/datapoints/patch',
  tags: ['Tags'],
  summary: 'Associate/Deassociate a tag with a datapoint',
  operationId: 'Tags_PatchDataPoint',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreRequestsPatchBodyRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsTagIdGroupsRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}/groups',
  tags: ['Tags'],
  summary: 'List of all the groups associated to the user filtered by this tag.',
  operationId: 'Tags_GetGroups',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start when retrieving elements. Default is 0 if not specified.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, format: 'int32', minLength: 0, type: 'integer' },
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
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum elements to retrieve. Default to 20 if not specified.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 20, format: 'int32', maxLength: 0, minLength: 0, type: 'integer' },
          },
        }),
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
        'text/json': {
          schema: ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64Schema,
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteTagsTagIdGroupsRoute = createRoute({
  method: 'delete',
  path: '/tags/{tagId}/groups',
  tags: ['Tags'],
  summary: 'Delete the association of this tag with all groups',
  operationId: 'Tags_DeleteRelatedGroups',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})

export const getTagsTagIdGroupsCountRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}/groups/count',
  tags: ['Tags'],
  summary: 'Count the groups associated to the user filtered by this tag',
  operationId: 'Tags_GetGroupsCount',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag.',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      status: z
        .enum(['deleted', 'active'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of the datapoint',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['deleted', 'active'], type: 'string' },
          },
        }),
      textSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter fields by this pattern',
            in: 'query',
            name: 'textSearch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created before this date (YYYYMMDD)',
            in: 'query',
            name: 'createdAfter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude groups created after this date (YYYYMMDD)',
            in: 'query',
            name: 'createdBefore',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesCountResponceSchema },
        'application/xml': { schema: ApiCoreResponsesCountResponceSchema },
        'text/json': { schema: ApiCoreResponsesCountResponceSchema },
        'text/xml': { schema: ApiCoreResponsesCountResponceSchema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const putTagsTagIdGroupsPatchRoute = createRoute({
  method: 'put',
  path: '/tags/{tagId}/groups/patch',
  tags: ['Tags'],
  summary: 'Associate/Deassociate a tag with a group',
  operationId: 'Tags_PatchGroup',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: ApiCoreRequestsPatchBodyRequestBody,
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
    500: { description: 'Internal Server Error' },
  },
})

export const putTagsTagIdNameRoute = createRoute({
  method: 'put',
  path: '/tags/{tagId}/name',
  tags: ['Tags'],
  summary: 'Fast patch a tag name',
  operationId: 'Tags_PatchTagName',
  request: {
    params: z.object({
      tagId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Id of the tag',
            in: 'path',
            name: 'tagId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'The body patch',
      content: {
        'application/json': { schema: ApiCoreRequestsGenericTextPatchSchema },
        'application/x-www-form-urlencoded': { schema: ApiCoreRequestsGenericTextPatchSchema },
        'application/xml': { schema: ApiCoreRequestsGenericTextPatchSchema },
        'text/json': { schema: ApiCoreRequestsGenericTextPatchSchema },
        'text/xml': { schema: ApiCoreRequestsGenericTextPatchSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'application/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/json': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
        'text/xml': { schema: ApiCoreResponsesEntityUriSystemInt64Schema },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal Server Error' },
  },
})
