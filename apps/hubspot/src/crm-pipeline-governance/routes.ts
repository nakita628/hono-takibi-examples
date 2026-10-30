import { createRoute, z } from '@hono/zod-openapi'

type PublicAbsoluteComparativeTimestampRefineByType = {
  comparison: string
  timestamp: bigint
  type: 'ABSOLUTE_COMPARATIVE'
}

type PublicAbsoluteRangedTimestampRefineByType = {
  lowerTimestamp: bigint
  rangeType: string
  type: 'ABSOLUTE_RANGED'
  upperTimestamp: bigint
}

type PublicAdsSearchFilterType = {
  adNetwork: string
  entityType: string
  filterType: 'ADS_SEARCH'
  operator: string
  searchTermType: string
  searchTerms: string[]
}

type PublicNumOccurrencesRefineByType = {
  maxOccurrences?: number
  minOccurrences?: number
  type: 'NUM_OCCURRENCES'
}

const PublicNumOccurrencesRefineBySchema: z.ZodType<PublicNumOccurrencesRefineByType> = z
  .object({
    maxOccurrences: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer specifying the maximum number of occurrences allowed.',
        example: null,
      }),
    minOccurrences: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer specifying the minimum number of occurrences required.',
        example: null,
      }),
    type: z
      .literal('NUM_OCCURRENCES')
      .default('NUM_OCCURRENCES')
      .openapi({
        description: "A string indicating the type of refinement, which is 'NUM_OCCURRENCES'.",
        example: null,
      }),
  })
  .openapi({
    title: 'NUM_OCCURRENCES',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicNumOccurrencesRefineBy')

type PublicSetOccurrencesRefineByType = { setType: string; type: 'SET_OCCURRENCES' }

const PublicSetOccurrencesRefineBySchema: z.ZodType<PublicSetOccurrencesRefineByType> = z
  .object({
    setType: z
      .string()
      .openapi({
        description: 'A string that specifies the set type for the occurrences refinement.',
        example: null,
      }),
    type: z
      .literal('SET_OCCURRENCES')
      .default('SET_OCCURRENCES')
      .openapi({
        description:
          "A string representing the type of refinement. The default value is 'SET_OCCURRENCES'.",
        example: null,
      }),
  })
  .openapi({
    title: 'SET_OCCURRENCES',
    required: ['setType', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSetOccurrencesRefineBy')

const PublicTimeOffsetSchema = z
  .object({
    amount: z
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
        description: 'An integer specifying the amount of time units for the offset.',
        example: null,
      }),
    offsetDirection: z
      .string()
      .openapi({
        description:
          "A string indicating the direction of the time offset. Valid values are 'BEFORE' and 'AFTER'.",
        example: null,
      }),
    timeUnit: z
      .string()
      .openapi({
        description:
          "A string representing the unit of time for the offset, such as 'DAYS', 'HOURS', 'MINUTES', etc.",
        example: null,
      }),
  })
  .openapi({ required: ['amount', 'offsetDirection', 'timeUnit'], example: null })
  .openapi('PublicTimeOffset')

type PublicRelativeComparativeTimestampRefineByType = {
  comparison: string
  timeOffset: z.infer<typeof PublicTimeOffsetSchema>
  type: 'RELATIVE_COMPARATIVE'
}

const PublicRelativeComparativeTimestampRefineBySchema: z.ZodType<PublicRelativeComparativeTimestampRefineByType> =
  z
    .object({
      comparison: z
        .string()
        .openapi({
          description: 'A string representing the comparison operation to be performed.',
          example: null,
        }),
      timeOffset: PublicTimeOffsetSchema,
      type: z
        .literal('RELATIVE_COMPARATIVE')
        .default('RELATIVE_COMPARATIVE')
        .openapi({
          description:
            "A string indicating the type of refinement, which is 'RELATIVE_COMPARATIVE'.",
          example: null,
        }),
    })
    .openapi({
      title: 'RELATIVE_COMPARATIVE',
      required: ['comparison', 'timeOffset', 'type'],
      example: null,
      'x-hubspot-sub-type-impl': true,
    })
    .openapi('PublicRelativeComparativeTimestampRefineBy')

type PublicRelativeRangedTimestampRefineByType = {
  lowerBoundOffset: z.infer<typeof PublicTimeOffsetSchema>
  rangeType: string
  type: 'RELATIVE_RANGED'
  upperBoundOffset: z.infer<typeof PublicTimeOffsetSchema>
}

const PublicRelativeRangedTimestampRefineBySchema: z.ZodType<PublicRelativeRangedTimestampRefineByType> =
  z
    .object({
      lowerBoundOffset: PublicTimeOffsetSchema,
      rangeType: z
        .string()
        .openapi({
          description:
            'A string indicating the type of range being used for the timestamp refinement.',
          example: null,
        }),
      type: z
        .literal('RELATIVE_RANGED')
        .default('RELATIVE_RANGED')
        .openapi({
          description:
            "A string that specifies the type of the refine by operation, which is 'RELATIVE_RANGED'.",
          example: null,
        }),
      upperBoundOffset: PublicTimeOffsetSchema,
    })
    .openapi({
      title: 'RELATIVE_RANGED',
      required: ['lowerBoundOffset', 'rangeType', 'type', 'upperBoundOffset'],
      example: null,
      'x-hubspot-sub-type-impl': true,
    })
    .openapi('PublicRelativeRangedTimestampRefineBy')

const PublicAbsoluteComparativeTimestampRefineBySchema: z.ZodType<PublicAbsoluteComparativeTimestampRefineByType> =
  z
    .object({
      comparison: z
        .string()
        .openapi({
          description:
            'A string representing the type of comparison to be made with the timestamp.',
          example: null,
        }),
      timestamp: z
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
            'An integer representing the specific point in time to be used for the comparison, formatted as a Unix timestamp in milliseconds.',
          example: null,
        }),
      type: z
        .literal('ABSOLUTE_COMPARATIVE')
        .default('ABSOLUTE_COMPARATIVE')
        .openapi({
          description:
            "A string indicating the type of refinement, which is 'ABSOLUTE_COMPARATIVE'.",
          example: null,
        }),
    })
    .openapi({
      title: 'ABSOLUTE_COMPARATIVE',
      required: ['comparison', 'timestamp', 'type'],
      example: null,
      'x-hubspot-sub-type-impl': true,
    })
    .openapi('PublicAbsoluteComparativeTimestampRefineBy')

const PublicAbsoluteRangedTimestampRefineBySchema: z.ZodType<PublicAbsoluteRangedTimestampRefineByType> =
  z
    .object({
      lowerTimestamp: z
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
            'An integer representing the lower bound of the timestamp range, specified as a Unix timestamp in milliseconds.',
          example: null,
        }),
      rangeType: z
        .string()
        .openapi({
          description: 'A string representing the type of range being defined.',
          example: null,
        }),
      type: z
        .literal('ABSOLUTE_RANGED')
        .default('ABSOLUTE_RANGED')
        .openapi({
          description:
            "A string that specifies the type of refine by operation. The default value is 'ABSOLUTE_RANGED'.",
          example: null,
        }),
      upperTimestamp: z
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
            'An integer representing the upper bound of the timestamp range, specified as a Unix timestamp in milliseconds.',
          example: null,
        }),
    })
    .openapi({
      title: 'ABSOLUTE_RANGED',
      required: ['lowerTimestamp', 'rangeType', 'type', 'upperTimestamp'],
      example: null,
      'x-hubspot-sub-type-impl': true,
    })
    .openapi('PublicAbsoluteRangedTimestampRefineBy')

type PublicAllHistoryRefineByType = { type: 'ALL_HISTORY' }

const PublicAllHistoryRefineBySchema: z.ZodType<PublicAllHistoryRefineByType> = z
  .object({
    type: z
      .literal('ALL_HISTORY')
      .default('ALL_HISTORY')
      .openapi({
        description:
          "A string representing the type of refinement. The default and only valid value is 'ALL_HISTORY'.",
        example: null,
      }),
  })
  .openapi({
    title: 'ALL_HISTORY',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAllHistoryRefineBy')

const PublicDatePointSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer representing the day component of the date.',
        example: null,
      }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the hour component of the time.',
        example: null,
      }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond component of the time.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute component of the time.',
        example: null,
      }),
    month: z
      .int32()
      .openapi({
        description: 'An integer representing the month component of the date.',
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second component of the time.',
        example: null,
      }),
    timeType: z
      .literal('DATE')
      .default('DATE')
      .openapi({
        description: 'A string indicating the type of time representation.',
        example: null,
      }),
    timezoneSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the source of the timezone information.',
        example: null,
      }),
    year: z
      .int32()
      .openapi({
        description: 'An integer representing the year component of the date.',
        example: null,
      }),
    zoneId: z
      .string()
      .openapi({
        description: 'A string representing the identifier for the timezone.',
        example: null,
      }),
  })
  .openapi({
    title: 'DATE',
    required: ['day', 'month', 'timeType', 'year', 'zoneId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicDatePoint')

const PublicNowReferenceSchema = z
  .object({
    hour: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the hour of the current time.',
        example: null,
      }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond of the current time.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute of the current time.',
        example: null,
      }),
    referenceType: z
      .literal('NOW')
      .default('NOW')
      .openapi({
        description:
          "A string that indicates the type of reference, which is always 'NOW' for this component.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second of the current time.',
        example: null,
      }),
  })
  .openapi({
    title: 'NOW',
    required: ['referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicNowReference')

const PublicTodayReferenceSchema = z
  .object({
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond within the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute within the hour.',
        example: null,
      }),
    referenceType: z
      .literal('TODAY')
      .default('TODAY')
      .openapi({
        description: "A string indicating the type of reference, which is 'TODAY' by default.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second within the minute.',
        example: null,
      }),
  })
  .openapi({
    title: 'TODAY',
    required: ['referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicTodayReference')

const PublicWeekReferenceSchema = z
  .object({
    dayOfWeek: z
      .enum(['FRIDAY', 'MONDAY', 'SATURDAY', 'SUNDAY', 'THURSDAY', 'TUESDAY', 'WEDNESDAY'])
      .openapi({
        description:
          "A string representing the day of the week. Valid values include 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'.",
        example: null,
      }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond within the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute within the hour.',
        example: null,
      }),
    referenceType: z
      .literal('WEEK')
      .default('WEEK')
      .openapi({
        description: "A string indicating the type of reference, which is 'WEEK' by default.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second within the minute.',
        example: null,
      }),
  })
  .openapi({
    title: 'WEEK',
    required: ['dayOfWeek', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicWeekReference')

const PublicFiscalQuarterReferenceSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer representing the day of the month within the fiscal quarter.',
        example: null,
      }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond within the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute within the hour.',
        example: null,
      }),
    month: z
      .int32()
      .openapi({
        description: 'An integer representing the month of the fiscal quarter.',
        example: null,
      }),
    referenceType: z
      .literal('FISCAL_QUARTER')
      .default('FISCAL_QUARTER')
      .openapi({
        description:
          "A string indicating the type of reference, which is 'FISCAL_QUARTER' by default.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second within the minute.',
        example: null,
      }),
  })
  .openapi({
    title: 'FISCAL_QUARTER',
    required: ['day', 'month', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFiscalQuarterReference')

const PublicFiscalYearReferenceSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer representing the day component of the date.',
        example: null,
      }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the hour component of the time.',
        example: null,
      }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond component of the time.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute component of the time.',
        example: null,
      }),
    month: z
      .int32()
      .openapi({
        description: 'An integer representing the month component of the date.',
        example: null,
      }),
    referenceType: z
      .literal('FISCAL_YEAR')
      .default('FISCAL_YEAR')
      .openapi({
        description: "A string that specifies the type of reference, defaulting to 'FISCAL_YEAR'.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second component of the time.',
        example: null,
      }),
  })
  .openapi({
    title: 'FISCAL_YEAR',
    required: ['day', 'month', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFiscalYearReference')

const PublicYearReferenceSchema = z
  .object({
    day: z
      .int32()
      .openapi({ description: 'An integer representing the day of the month.', example: null }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond within the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute within the hour.',
        example: null,
      }),
    month: z
      .int32()
      .openapi({ description: 'An integer representing the month of the year.', example: null }),
    referenceType: z
      .literal('YEAR')
      .default('YEAR')
      .openapi({
        description: "A string that indicates the type of reference, which is 'YEAR' by default.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second within the minute.',
        example: null,
      }),
  })
  .openapi({
    title: 'YEAR',
    required: ['day', 'month', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicYearReference')

const PublicQuarterReferenceSchema = z
  .object({
    day: z
      .int32()
      .openapi({ description: 'An integer representing the day within the month.', example: null }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond within the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute within the hour.',
        example: null,
      }),
    month: z
      .int32()
      .openapi({
        description: 'An integer representing the month within the quarter.',
        example: null,
      }),
    referenceType: z
      .literal('QUARTER')
      .default('QUARTER')
      .openapi({
        description:
          "A string indicating the type of reference, which is 'QUARTER' for this component.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second within the minute.',
        example: null,
      }),
  })
  .openapi({
    title: 'QUARTER',
    required: ['day', 'month', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicQuarterReference')

const PublicMonthReferenceSchema = z
  .object({
    day: z
      .int32()
      .openapi({ description: 'An integer representing the day of the month.', example: null }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond within the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute within the hour.',
        example: null,
      }),
    referenceType: z
      .literal('MONTH')
      .default('MONTH')
      .openapi({
        description: "A string indicating the type of reference, which is 'MONTH' by default.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second within the minute.',
        example: null,
      }),
  })
  .openapi({
    title: 'MONTH',
    required: ['day', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicMonthReference')

const PublicIndexOffsetSchema = z
  .object({
    days: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of days for the offset.',
        example: null,
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of hours for the offset.',
        example: null,
      }),
    milliseconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of milliseconds for the offset.',
        example: null,
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of minutes for the offset.',
        example: null,
      }),
    months: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of months for the offset.',
        example: null,
      }),
    quarters: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of quarters for the offset.',
        example: null,
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of seconds for the offset.',
        example: null,
      }),
    weeks: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of weeks for the offset.',
        example: null,
      }),
    years: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of years for the offset.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicIndexOffset')

const PublicIndexedTimePointSchema = z
  .object({
    indexReference: z
      .xor([
        PublicNowReferenceSchema,
        PublicTodayReferenceSchema,
        PublicWeekReferenceSchema,
        PublicFiscalQuarterReferenceSchema,
        PublicFiscalYearReferenceSchema,
        PublicYearReferenceSchema,
        PublicQuarterReferenceSchema,
        PublicMonthReferenceSchema,
      ])
      .openapi({
        description:
          "A reference point for indexing the time, which can be one of several predefined time references such as 'NOW', 'TODAY', 'WEEK', etc.",
        example: null,
      }),
    offset: PublicIndexOffsetSchema.exactOptional(),
    timeType: z
      .literal('INDEXED')
      .default('INDEXED')
      .openapi({
        description: "A string representing the type of time point, which is always 'INDEXED'.",
        example: null,
      }),
    timezoneSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the source of the timezone information.',
        example: null,
      }),
    zoneId: z
      .string()
      .openapi({
        description: 'A string representing the identifier for the timezone.',
        example: null,
      }),
  })
  .openapi({
    title: 'INDEXED',
    required: ['indexReference', 'timeType', 'zoneId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicIndexedTimePoint')

const PublicPropertyReferencedTimeSchema = z
  .object({
    property: z
      .string()
      .openapi({
        description:
          'A string that denotes the property used as the reference for the time operation.',
        example: null,
      }),
    referenceType: z
      .string()
      .openapi({
        description: 'A string indicating the type of reference used for the property.',
        example: null,
      }),
    timeType: z
      .literal('PROPERTY_REFERENCED')
      .default('PROPERTY_REFERENCED')
      .openapi({
        description:
          "A string indicating the type of time reference, which is 'PROPERTY_REFERENCED' by default.",
        example: null,
      }),
    timezoneSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the source of the timezone information.',
        example: null,
      }),
    zoneId: z
      .string()
      .openapi({
        description: 'A string specifying the identifier for the timezone.',
        example: null,
      }),
  })
  .openapi({
    title: 'PROPERTY_REFERENCED',
    required: ['property', 'referenceType', 'timeType', 'zoneId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicPropertyReferencedTime')

type PublicTimePointOperationType = {
  endpointBehavior?: string
  includeObjectsWithNoValueSet: boolean
  operationType: 'TIME_POINT'
  operator: string
  propertyParser?: string
  timePoint:
    | z.infer<typeof PublicDatePointSchema>
    | z.infer<typeof PublicIndexedTimePointSchema>
    | z.infer<typeof PublicPropertyReferencedTimeSchema>
  type: string
}

const PublicTimePointOperationSchema: z.ZodType<PublicTimePointOperationType> = z
  .object({
    endpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string describing the behavior of the endpoint in the context of the time point operation.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects with no value set in the operation.',
        example: null,
      }),
    operationType: z
      .literal('TIME_POINT')
      .default('TIME_POINT')
      .openapi({
        description: "A string indicating the type of operation, defaulting to 'TIME_POINT'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the time point operation.',
        example: null,
      }),
    propertyParser: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the parser used for the property in the operation.',
        example: null,
      }),
    timePoint: z
      .xor([
        PublicDatePointSchema,
        PublicIndexedTimePointSchema,
        PublicPropertyReferencedTimeSchema,
      ])
      .openapi({
        description:
          'Defines the specific time point for the operation. It can be one of several types, including PublicDatePoint, PublicIndexedTimePoint, or PublicPropertyReferencedTime.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'A string representing the type of the time point operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'TIME_POINT',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'timePoint', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicTimePointOperation')

type PublicRangedTimeOperationType = {
  includeObjectsWithNoValueSet: boolean
  lowerBoundEndpointBehavior?: string
  lowerBoundTimePoint:
    | z.infer<typeof PublicDatePointSchema>
    | z.infer<typeof PublicIndexedTimePointSchema>
    | z.infer<typeof PublicPropertyReferencedTimeSchema>
  operationType: string
  operator: string
  propertyParser?: string
  type: 'TIME_RANGED'
  upperBoundEndpointBehavior?: string
  upperBoundTimePoint:
    | z.infer<typeof PublicDatePointSchema>
    | z.infer<typeof PublicIndexedTimePointSchema>
    | z.infer<typeof PublicPropertyReferencedTimeSchema>
}

const PublicRangedTimeOperationSchema: z.ZodType<PublicRangedTimeOperationType> = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to include objects that have no value set.',
        example: null,
      }),
    lowerBoundEndpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that specifies the behavior of the lower bound endpoint in the time range.',
        example: null,
      }),
    lowerBoundTimePoint: z
      .xor([
        PublicDatePointSchema,
        PublicIndexedTimePointSchema,
        PublicPropertyReferencedTimeSchema,
      ])
      .openapi({
        description:
          'An object that defines the lower bound time point of the range. It can be a date point, indexed time point, or property-referenced time.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string that specifies the type of operation being performed.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operator used in the time operation.',
        example: null,
      }),
    propertyParser: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that indicates the property parser used in the operation.',
        example: null,
      }),
    type: z
      .literal('TIME_RANGED')
      .default('TIME_RANGED')
      .openapi({
        description:
          "A string that specifies the type of operation, with a default value of 'TIME_RANGED'.",
        example: null,
      }),
    upperBoundEndpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that specifies the behavior of the upper bound endpoint in the time range.',
        example: null,
      }),
    upperBoundTimePoint: z
      .xor([
        PublicDatePointSchema,
        PublicIndexedTimePointSchema,
        PublicPropertyReferencedTimeSchema,
      ])
      .openapi({
        description:
          'An object that defines the upper bound time point of the range. It can be a date point, indexed time point, or property-referenced time.',
        example: null,
      }),
  })
  .openapi({
    title: 'TIME_RANGED',
    required: [
      'includeObjectsWithNoValueSet',
      'lowerBoundTimePoint',
      'operationType',
      'operator',
      'type',
      'upperBoundTimePoint',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicRangedTimeOperation')

type PublicAdsTimeFilterType = {
  filterType: 'ADS_TIME'
  pruningRefineBy:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicOrFilterBranchSchema: z.ZodType<PublicOrFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        filterBranchOperator: z
          .string()
          .openapi({
            description: 'A string representing the operator used in the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('OR')
          .default('OR')
          .openapi({
            description:
              "A string that specifies the type of filter branch, which is 'OR' by default.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of filter branches that can include various types of filter branches such as 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', or 'ASSOCIATION'.",
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of filters that can include different types of filters such as 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', and others.",
            example: null,
          }),
      })
      .openapi({
        title: 'OR',
        required: ['filterBranchOperator', 'filterBranchType', 'filterBranches', 'filters'],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicOrFilterBranch')

const PublicNotAllFilterBranchSchema: z.ZodType<PublicNotAllFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        filterBranchOperator: z
          .string()
          .openapi({
            description: 'A string representing the operator used to combine the filter branches.',
            example: null,
          }),
        filterBranchType: z
          .literal('NOT_ALL')
          .default('NOT_ALL')
          .openapi({
            description:
              "A string indicating the type of filter branch, which is 'NOT_ALL' for this component.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of filter branches that can include various types of filter branches such as 'OR', 'AND', 'NOT_ALL', etc.",
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of filters that can include various types of filters such as property filters, association filters, and more.',
            example: null,
          }),
      })
      .openapi({
        title: 'NOT_ALL',
        required: ['filterBranchOperator', 'filterBranchType', 'filterBranches', 'filters'],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicNotAllFilterBranch')

const PublicNotAnyFilterBranchSchema: z.ZodType<PublicNotAnyFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        filterBranchOperator: z
          .string()
          .openapi({
            description:
              'A string representing the logical operator used within the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('NOT_ANY')
          .default('NOT_ANY')
          .openapi({
            description:
              "A string indicating the type of filter branch, which is 'NOT_ANY' for this component.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of nested filter branches, each of which can be of various types including 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', and 'ASSOCIATION'.",
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of filters that can include different types such as property filters, association filters, and various analytics filters.',
            example: null,
          }),
      })
      .openapi({
        title: 'NOT_ANY',
        required: ['filterBranchOperator', 'filterBranchType', 'filterBranches', 'filters'],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicNotAnyFilterBranch')

const PublicRestrictedFilterBranchSchema: z.ZodType<PublicRestrictedFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        filterBranchOperator: z
          .string()
          .openapi({
            description: 'A string representing the operator used within the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('RESTRICTED')
          .default('RESTRICTED')
          .openapi({
            description:
              "A string indicating the type of the filter branch. Defaults to 'RESTRICTED'.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of nested filter branches. Each item can be one of several types, including 'PublicOrFilterBranch', 'PublicAndFilterBranch', 'PublicNotAllFilterBranch', 'PublicNotAnyFilterBranch', 'PublicRestrictedFilterBranch', 'PublicUnifiedEventsFilterBranch', or 'PublicAssociationFilterBranch'.",
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of filters applied within this branch. Each filter can be one of several types, such as 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', 'PublicCtaAnalyticsFilter', 'PublicEventAnalyticsFilter', 'PublicFormSubmissionFilter', 'PublicFormSubmissionOnPageFilter', 'PublicIntegrationEventFilter', 'PublicEmailSubscriptionFilter', 'PublicCommunicationSubscriptionFilter', 'PublicSurveyMonkeyFilter', 'PublicSurveyMonkeyValueFilter', 'PublicWebinarFilter', 'PublicEmailEventFilter', 'PublicPrivacyAnalyticsFilter', 'PublicAdsSearchFilter', 'PublicAdsTimeFilter', 'PublicInListFilter', 'PublicUnifiedEventsFilter', or 'PublicConstantFilter'.",
            example: null,
          }),
      })
      .openapi({
        title: 'RESTRICTED',
        required: ['filterBranchOperator', 'filterBranchType', 'filterBranches', 'filters'],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicRestrictedFilterBranch')

const PublicUnifiedEventsFilterBranchSchema: z.ZodType<PublicUnifiedEventsFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        coalescingRefineBy: z
          .xor([
            PublicNumOccurrencesRefineBySchema,
            PublicSetOccurrencesRefineBySchema,
            PublicRelativeComparativeTimestampRefineBySchema,
            PublicRelativeRangedTimestampRefineBySchema,
            PublicAbsoluteComparativeTimestampRefineBySchema,
            PublicAbsoluteRangedTimestampRefineBySchema,
            PublicAllHistoryRefineBySchema,
            PublicTimePointOperationSchema,
            PublicRangedTimeOperationSchema,
          ])
          .exactOptional()
          .openapi({
            description:
              'An optional refinement criterion that allows for additional filtering based on coalescing logic. This can be one of several predefined refinement schemas.',
            example: null,
          }),
        eventTypeId: z
          .string()
          .openapi({
            description:
              'A string representing the unique identifier for the event type that this filter branch is targeting.',
            example: null,
          }),
        filterBranchOperator: z
          .string()
          .openapi({
            description:
              'A string that specifies the operator used to combine multiple filter branches within this component.',
            example: null,
          }),
        filterBranchType: z
          .literal('UNIFIED_EVENTS')
          .default('UNIFIED_EVENTS')
          .openapi({
            description:
              "A string indicating the type of filter branch, which is 'UNIFIED_EVENTS' for this component.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of nested filter branches, each of which can be a complex filter structure involving various logical operators.',
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of filters that apply specific conditions to the unified events. Each filter can be one of several types, such as property filters or event analytics filters.',
            example: null,
          }),
        operator: z
          .enum(['HAS_COMPLETED', 'HAS_NOT_COMPLETED'])
          .openapi({
            description:
              "A string that specifies the logical operator for the filter branch, with valid values including 'HAS_COMPLETED' and 'HAS_NOT_COMPLETED'.",
            example: null,
          }),
        pruningRefineBy: z
          .xor([
            PublicNumOccurrencesRefineBySchema,
            PublicSetOccurrencesRefineBySchema,
            PublicRelativeComparativeTimestampRefineBySchema,
            PublicRelativeRangedTimestampRefineBySchema,
            PublicAbsoluteComparativeTimestampRefineBySchema,
            PublicAbsoluteRangedTimestampRefineBySchema,
            PublicAllHistoryRefineBySchema,
            PublicTimePointOperationSchema,
            PublicRangedTimeOperationSchema,
          ])
          .exactOptional()
          .openapi({
            description:
              'An optional refinement criterion that allows for additional filtering based on pruning logic. This can be one of several predefined refinement schemas.',
            example: null,
          }),
      })
      .openapi({
        title: 'UNIFIED_EVENTS',
        required: [
          'eventTypeId',
          'filterBranchOperator',
          'filterBranchType',
          'filterBranches',
          'filters',
          'operator',
        ],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicUnifiedEventsFilterBranch')

const PublicAssociationFilterBranchSchema: z.ZodType<PublicAssociationFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        associationCategory: z
          .string()
          .openapi({
            description: 'A string indicating the category of the association.',
            example: null,
          }),
        associationTypeId: z
          .int32()
          .openapi({
            description: 'An integer representing the ID of the association type.',
            example: null,
          }),
        filterBranchOperator: z
          .string()
          .openapi({
            description: 'A string representing the operator used to combine the filter branches.',
            example: null,
          }),
        filterBranchType: z
          .literal('ASSOCIATION')
          .default('ASSOCIATION')
          .openapi({
            description:
              "A string indicating the type of filter branch, which is 'ASSOCIATION' by default.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of filter branches that can include various types of branches such as OR, AND, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, and ASSOCIATION.',
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of filters that can include different types of filters such as property filters, association filters, and various analytics filters.',
            example: null,
          }),
        objectTypeId: z
          .string()
          .openapi({
            description:
              'A string representing the ID of the object type involved in the association.',
            example: null,
          }),
        operator: z
          .string()
          .openapi({
            description: 'A string representing the operator used in the filter branch.',
            example: null,
          }),
      })
      .openapi({
        title: 'ASSOCIATION',
        required: [
          'associationCategory',
          'associationTypeId',
          'filterBranchOperator',
          'filterBranchType',
          'filterBranches',
          'filters',
          'objectTypeId',
          'operator',
        ],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicAssociationFilterBranch')

const PublicBoolPropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('BOOL')
      .default('BOOL')
      .openapi({
        description: "A string representing the type of operation. The default value is 'BOOLEAN'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string indicating the operator used in the boolean operation.',
        example: null,
      }),
    value: z
      .boolean()
      .openapi({
        description: 'A boolean representing the value to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'BOOL',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'value'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicBoolPropertyOperation')

const PublicNumberPropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('NUMBER')
      .default('NUMBER')
      .openapi({
        description: "A string indicating the type of operation. The default value is 'NUMBER'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description: 'A number representing the value used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'NUMBER',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'value'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicNumberPropertyOperation')

const PublicStringPropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects without a value set for the property should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('STRING')
      .default('STRING')
      .openapi({
        description:
          "A string indicating the type of operation, which is always 'STRING' for this component.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operator to be used in the operation. The specific operators are not detailed in the spec.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the value to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'STRING',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'value'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicStringPropertyOperation')

const PublicDateTimePropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects without a set value should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('DATETIME')
      .default('DATETIME')
      .openapi({
        description:
          "A string indicating the type of operation, which is always 'DATETIME' for this component.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the datetime operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description:
          'A boolean specifying whether the datetime operation requires conversion based on time zones.',
        example: null,
      }),
    timestamp: z
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
          'An integer representing the timestamp involved in the operation, formatted as an int64.',
        example: null,
      }),
  })
  .openapi({
    title: 'DATETIME',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'requiresTimeZoneConversion',
      'timestamp',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicDateTimePropertyOperation')

const PublicRangedDatePropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether objects with no value set should be included.',
        example: null,
      }),
    lowerBound: z
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
        description: 'An integer representing the lower bound of the date range, in int64 format.',
        example: null,
      }),
    operationType: z
      .literal('RANGED_DATE')
      .default('RANGED_DATE')
      .openapi({
        description:
          "A string that specifies the type of operation, with a default value of 'RANGED_DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the operation requires time zone conversion.',
        example: null,
      }),
    upperBound: z
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
        description: 'An integer representing the upper bound of the date range, in int64 format.',
        example: null,
      }),
  })
  .openapi({
    title: 'RANGED_DATE',
    required: [
      'includeObjectsWithNoValueSet',
      'lowerBound',
      'operationType',
      'operator',
      'requiresTimeZoneConversion',
      'upperBound',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicRangedDatePropertyOperation')

const PublicComparativePropertyUpdatedOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'A string representing the name of the property to compare against.',
        example: null,
      }),
    defaultComparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional value used as a default for comparison if the comparison property is not set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects without a value set for the property should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_PROPERTY_UPDATED')
      .default('COMPARATIVE_PROPERTY_UPDATED')
      .openapi({
        description:
          "A string that specifies the type of operation. The default value is 'COMPARATIVE_PROPERTY_UPDATED'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operator used in the comparison.',
        example: null,
      }),
  })
  .openapi({
    title: 'COMPARATIVE_PROPERTY_UPDATED',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicComparativePropertyUpdatedOperation')

const PublicComparativeDatePropertyOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'A string specifying the name of the property to be used for comparison.',
        example: null,
      }),
    defaultComparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the default value to be used for comparison if no other value is set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_DATE')
      .default('COMPARATIVE_DATE')
      .openapi({
        description:
          "A string indicating the type of operation. The default value is 'COMPARATIVE_DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used for comparison.',
        example: null,
      }),
  })
  .openapi({
    title: 'COMPARATIVE_DATE',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicComparativeDatePropertyOperation')

const PublicRollingDateRangePropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that do not have a value set for the property being operated on.',
        example: null,
      }),
    numberOfDays: z
      .int32()
      .openapi({
        description: 'An integer specifying the number of days that define the rolling date range.',
        example: null,
      }),
    operationType: z
      .literal('ROLLING_DATE_RANGE')
      .default('ROLLING_DATE_RANGE')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'ROLLING_DATE_RANGE' by default.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the operation requires conversion based on time zone.',
        example: null,
      }),
  })
  .openapi({
    title: 'ROLLING_DATE_RANGE',
    required: [
      'includeObjectsWithNoValueSet',
      'numberOfDays',
      'operationType',
      'operator',
      'requiresTimeZoneConversion',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicRollingDateRangePropertyOperation')

const PublicRollingPropertyUpdatedOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    numberOfDays: z
      .int32()
      .openapi({
        description:
          'An integer specifying the number of days over which the rolling update operation is applied.',
        example: null,
      }),
    operationType: z
      .literal('ROLLING_PROPERTY_UPDATED')
      .default('ROLLING_PROPERTY_UPDATED')
      .openapi({
        description:
          "A string indicating the type of operation. The default value is 'ROLLING_PROPERTY_UPDATED'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'ROLLING_PROPERTY_UPDATED',
    required: ['includeObjectsWithNoValueSet', 'numberOfDays', 'operationType', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicRollingPropertyUpdatedOperation')

const PublicEnumerationPropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('ENUMERATION')
      .default('ENUMERATION')
      .openapi({
        description: "A string representing the type of operation, defaulting to 'ENUMERATION'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string indicating the operator used in the operation.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the values involved in the enumeration operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'ENUMERATION',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'values'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicEnumerationPropertyOperation')

const PublicAllPropertyTypesOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    operationType: z
      .literal('ALL_PROPERTY')
      .default('ALL_PROPERTY')
      .openapi({
        description:
          "A string indicating the type of operation. The default and only valid value is 'ALL_PROPERTY_TYPES'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'ALL_PROPERTY',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAllPropertyTypesOperation')

const PublicRangedNumberPropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that do not have a value set.',
        example: null,
      }),
    lowerBound: z
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
        description: 'An integer representing the lower bound of the range.',
        example: null,
      }),
    operationType: z
      .literal('NUMBER_RANGED')
      .default('NUMBER_RANGED')
      .openapi({
        description:
          "A string that specifies the type of operation. The default value is 'RANGED_NUMBER'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    upperBound: z
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
        description: 'An integer representing the upper bound of the range.',
        example: null,
      }),
  })
  .openapi({
    title: 'NUMBER_RANGED',
    required: [
      'includeObjectsWithNoValueSet',
      'lowerBound',
      'operationType',
      'operator',
      'upperBound',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicRangedNumberPropertyOperation')

const PublicMultiStringPropertyOperationSchema = z
  .object({
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('MULTISTRING')
      .default('MULTISTRING')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'MULTISTRING' by default.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used for the operation.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings representing the values to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'MULTISTRING',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'values'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicMultiStringPropertyOperation')

const PublicDatePropertyOperationSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer representing the day involved in the date operation.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects without a set value should be included in the operation.',
        example: null,
      }),
    month: z
      .string()
      .openapi({
        description: 'A string representing the month involved in the date operation.',
        example: null,
      }),
    operationType: z
      .literal('DATE')
      .default('DATE')
      .openapi({
        description: "A string indicating the type of operation, which is always 'DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the date operation.',
        example: null,
      }),
    year: z
      .int32()
      .openapi({
        description: 'An integer representing the year involved in the date operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'DATE',
    required: ['day', 'includeObjectsWithNoValueSet', 'month', 'operationType', 'operator', 'year'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicDatePropertyOperation')

const PublicCalendarDatePropertyOperationSchema = z
  .object({
    fiscalYearStart: z
      .enum([
        'APRIL',
        'AUGUST',
        'DECEMBER',
        'FEBRUARY',
        'JANUARY',
        'JULY',
        'JUNE',
        'MARCH',
        'MAY',
        'NOVEMBER',
        'OCTOBER',
        'SEPTEMBER',
      ])
      .exactOptional()
      .openapi({
        description:
          "A string indicating the start month of the fiscal year. Valid values include 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', and 'DECEMBER'.",
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    operationType: z
      .literal('CALENDAR_DATE')
      .default('CALENDAR_DATE')
      .openapi({
        description: "A string indicating the type of operation, which is always 'CALENDAR_DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    timeUnit: z
      .string()
      .openapi({
        description: 'A string specifying the unit of time for the operation.',
        example: null,
      }),
    timeUnitCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer specifying the count of the time units for the operation.',
        example: null,
      }),
    useFiscalYear: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the fiscal year should be used.',
        example: null,
      }),
  })
  .openapi({
    title: 'CALENDAR_DATE',
    required: ['includeObjectsWithNoValueSet', 'operationType', 'operator', 'timeUnit'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicCalendarDatePropertyOperation')

const PublicComparativeStringPropertyOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'A string specifying the name of the property to be compared.',
        example: null,
      }),
    defaultComparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default value to be used for comparison if the property value is not set, represented as a string.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_STRING')
      .default('COMPARATIVE_STRING')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'COMPARATIVE_STRING' by default.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'The operator used for the comparison operation. It is a string value.',
        example: null,
      }),
  })
  .openapi({
    title: 'COMPARATIVE_STRING',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicComparativeStringPropertyOperation')

const PublicComparativeNumberPropertyOperationSchema = z
  .object({
    comparisonPropertyName: z.string().openapi({ example: null }),
    defaultComparisonValue: z.string().exactOptional().openapi({ example: null }),
    includeObjectsWithNoValueSet: z.boolean().openapi({ example: null }),
    operationType: z
      .literal('COMPARATIVE_NUMBER')
      .default('COMPARATIVE_NUMBER')
      .openapi({ example: null }),
    operator: z.string().openapi({ example: null }),
  })
  .openapi({
    title: 'COMPARATIVE_NUMBER',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicComparativeNumberPropertyOperation')

type PublicPropertyFilterType = {
  filterType: 'PROPERTY'
  operation:
    | z.infer<typeof PublicBoolPropertyOperationSchema>
    | z.infer<typeof PublicNumberPropertyOperationSchema>
    | z.infer<typeof PublicStringPropertyOperationSchema>
    | z.infer<typeof PublicDateTimePropertyOperationSchema>
    | z.infer<typeof PublicRangedDatePropertyOperationSchema>
    | z.infer<typeof PublicComparativePropertyUpdatedOperationSchema>
    | z.infer<typeof PublicComparativeDatePropertyOperationSchema>
    | z.infer<typeof PublicRollingDateRangePropertyOperationSchema>
    | z.infer<typeof PublicRollingPropertyUpdatedOperationSchema>
    | z.infer<typeof PublicEnumerationPropertyOperationSchema>
    | z.infer<typeof PublicAllPropertyTypesOperationSchema>
    | z.infer<typeof PublicRangedNumberPropertyOperationSchema>
    | z.infer<typeof PublicMultiStringPropertyOperationSchema>
    | z.infer<typeof PublicDatePropertyOperationSchema>
    | z.infer<typeof PublicCalendarDatePropertyOperationSchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
    | z.infer<typeof PublicComparativeStringPropertyOperationSchema>
    | z.infer<typeof PublicComparativeNumberPropertyOperationSchema>
  property: string
}

const PublicPropertyFilterSchema: z.ZodType<PublicPropertyFilterType> = z
  .object({
    filterType: z
      .literal('PROPERTY')
      .default('PROPERTY')
      .openapi({
        description: "A string indicating the type of filter. The default value is 'PROPERTY'.",
        example: null,
      }),
    operation: z
      .xor([
        PublicBoolPropertyOperationSchema,
        PublicNumberPropertyOperationSchema,
        PublicStringPropertyOperationSchema,
        PublicDateTimePropertyOperationSchema,
        PublicRangedDatePropertyOperationSchema,
        PublicComparativePropertyUpdatedOperationSchema,
        PublicComparativeDatePropertyOperationSchema,
        PublicRollingDateRangePropertyOperationSchema,
        PublicRollingPropertyUpdatedOperationSchema,
        PublicEnumerationPropertyOperationSchema,
        PublicAllPropertyTypesOperationSchema,
        PublicRangedNumberPropertyOperationSchema,
        PublicMultiStringPropertyOperationSchema,
        PublicDatePropertyOperationSchema,
        PublicCalendarDatePropertyOperationSchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
        PublicComparativeStringPropertyOperationSchema,
        PublicComparativeNumberPropertyOperationSchema,
      ])
      .openapi({
        description:
          'Defines the operation to be performed on the property. This can be one of several operation types, such as boolean, number, string, date, and more, each with its own specific behavior.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description: 'A string representing the name of the property to be filtered.',
        example: null,
      }),
  })
  .openapi({
    title: 'PROPERTY',
    required: ['filterType', 'operation', 'property'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicPropertyFilter')

type PublicAssociationInListFilterType = {
  associationCategory: string
  associationTypeId: number
  coalescingRefineBy:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  filterType: 'ASSOCIATION'
  listId: string
  operator: string
  toObjectType?: string
  toObjectTypeId?: string
}

const PublicAssociationInListFilterSchema: z.ZodType<PublicAssociationInListFilterType> = z
  .object({
    associationCategory: z
      .string()
      .openapi({
        description: 'A string that specifies the category of the association.',
        example: null,
      }),
    associationTypeId: z
      .int32()
      .openapi({
        description: 'An integer that identifies the type of association.',
        example: null,
      }),
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .openapi({
        description:
          'An object that defines the criteria for refining the filter. It can be one of several types, such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
        example: null,
      }),
    filterType: z
      .literal('ASSOCIATION')
      .default('ASSOCIATION')
      .openapi({
        description:
          "A string that specifies the type of filter. The default value is 'ASSOCIATION'.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'A string that identifies the list to which the filter is applied.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that represents the operator used in the filter.',
        example: null,
      }),
    toObjectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that specifies the type of the object to which the association is made.',
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that specifies the type ID of the object to which the association is made.',
        example: null,
      }),
  })
  .openapi({
    title: 'ASSOCIATION',
    required: [
      'associationCategory',
      'associationTypeId',
      'coalescingRefineBy',
      'filterType',
      'listId',
      'operator',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAssociationInListFilter')

type PublicPageViewAnalyticsFilterType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  enableTracking?: boolean
  filterType: 'PAGE_VIEW'
  operator: string
  pageUrl: string
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicPageViewAnalyticsFilterSchema: z.ZodType<PublicPageViewAnalyticsFilterType> = z
  .object({
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional refinement criterion that can be one of several predefined schemas, used to further refine the filter results.',
        example: null,
      }),
    enableTracking: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether tracking is enabled for this filter.',
        example: null,
      }),
    filterType: z
      .literal('PAGE_VIEW')
      .default('PAGE_VIEW')
      .openapi({
        description: "A string representing the type of filter. Default value is 'PAGE_VIEW'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the filter.',
        example: null,
      }),
    pageUrl: z
      .string()
      .openapi({
        description: 'A string representing the URL of the page to be filtered.',
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional refinement criterion that can be one of several predefined schemas, used to prune the filter results.',
        example: null,
      }),
  })
  .openapi({
    title: 'PAGE_VIEW',
    required: ['filterType', 'operator', 'pageUrl'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicPageViewAnalyticsFilter')

type PublicCtaAnalyticsFilterType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  ctaName: string
  filterType: 'CTA'
  operator: string
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicCtaAnalyticsFilterSchema: z.ZodType<PublicCtaAnalyticsFilterType> = z
  .object({
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional refinement criterion that can be one of several types, including occurrences and timestamp comparisons.',
        example: null,
      }),
    ctaName: z
      .string()
      .openapi({
        description: 'A string representing the name of the Call-To-Action being filtered.',
        example: null,
      }),
    filterType: z
      .literal('CTA')
      .default('CTA')
      .openapi({
        description: "A string that specifies the type of filter, defaulting to 'CTA'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operation to be applied in the filter.',
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional refinement criterion used to narrow down data, similar to coalescingRefineBy, with options like occurrences and timestamp comparisons.',
        example: null,
      }),
  })
  .openapi({
    title: 'CTA',
    required: ['ctaName', 'filterType', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicCtaAnalyticsFilter')

type PublicEventAnalyticsFilterType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  eventId: string
  filterType: 'EVENT'
  operator: string
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicEventAnalyticsFilterSchema: z.ZodType<PublicEventAnalyticsFilterType> = z
  .object({
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional refinement criterion that can be one of several types, such as occurrences or timestamp comparisons, to further refine the filter results.',
        example: null,
      }),
    eventId: z
      .string()
      .openapi({
        description: 'A string that uniquely identifies the event to be filtered.',
        example: null,
      }),
    filterType: z
      .literal('EVENT')
      .default('EVENT')
      .openapi({
        description:
          "A string indicating the type of filter, which is always 'EVENT' for this component.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operation or condition applied in the filter.',
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional refinement criterion similar to coalescingRefineBy, used to prune the filter results based on specific conditions.',
        example: null,
      }),
  })
  .openapi({
    title: 'EVENT',
    required: ['eventId', 'filterType', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicEventAnalyticsFilter')

type PublicFormSubmissionFilterType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  filterType: 'FORM_SUBMISSION'
  formId?: string
  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT'
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicFormSubmissionFilterSchema: z.ZodType<PublicFormSubmissionFilterType> = z
  .object({
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An object used to refine the filter by coalescing criteria. It can be one of several types, such as occurrences or timestamp-based refinements.',
        example: null,
      }),
    filterType: z
      .literal('FORM_SUBMISSION')
      .default('FORM_SUBMISSION')
      .openapi({
        description:
          "A string that specifies the type of filter. The default value is 'FORM_SUBMISSION'.",
        example: null,
      }),
    formId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier of the form.',
        example: null,
      }),
    operator: z
      .enum(['FILLED_OUT', 'NOT_FILLED_OUT'])
      .openapi({
        description:
          "A string that specifies the operation to apply, with valid values being 'FILLED_OUT' or 'NOT_FILLED_OUT'.",
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An object used to refine the filter by pruning criteria. It can be one of several types, such as occurrences or timestamp-based refinements.',
        example: null,
      }),
  })
  .openapi({
    title: 'FORM_SUBMISSION',
    required: ['filterType', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFormSubmissionFilter')

type PublicFormSubmissionOnPageFilterType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  filterType: 'FORM_SUBMISSION_ON_PAGE'
  formId?: string
  operator: 'FILLED_OUT' | 'NOT_FILLED_OUT'
  pageId: string
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicFormSubmissionOnPageFilterSchema: z.ZodType<PublicFormSubmissionOnPageFilterType> = z
  .object({
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'Criteria used to refine the filter by coalescing, which can include various timestamp operations.',
        example: null,
      }),
    filterType: z
      .literal('FORM_SUBMISSION_ON_PAGE')
      .default('FORM_SUBMISSION_ON_PAGE')
      .openapi({
        description: "The type of filter being applied. Defaults to 'FORM_SUBMISSION_ON_PAGE'.",
        example: null,
      }),
    formId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the form being filtered.', example: null }),
    operator: z
      .enum(['FILLED_OUT', 'NOT_FILLED_OUT'])
      .openapi({
        description:
          "The operation to apply, which can be either 'FILLED_OUT' or 'NOT_FILLED_OUT'.",
        example: null,
      }),
    pageId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the page where the form submission is being filtered.',
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'Criteria used to refine the filter by pruning, which can include various timestamp operations.',
        example: null,
      }),
  })
  .openapi({
    title: 'FORM_SUBMISSION_ON_PAGE',
    required: ['filterType', 'operator', 'pageId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicFormSubmissionOnPageFilter')

const PublicEventFilterMetadataSchema = z
  .object({
    operation: z
      .xor([
        PublicBoolPropertyOperationSchema,
        PublicNumberPropertyOperationSchema,
        PublicStringPropertyOperationSchema,
        PublicDateTimePropertyOperationSchema,
        PublicRangedDatePropertyOperationSchema,
        PublicComparativePropertyUpdatedOperationSchema,
        PublicComparativeDatePropertyOperationSchema,
        PublicRollingDateRangePropertyOperationSchema,
        PublicRollingPropertyUpdatedOperationSchema,
        PublicEnumerationPropertyOperationSchema,
        PublicAllPropertyTypesOperationSchema,
        PublicRangedNumberPropertyOperationSchema,
        PublicMultiStringPropertyOperationSchema,
        PublicDatePropertyOperationSchema,
        PublicCalendarDatePropertyOperationSchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
        PublicComparativeStringPropertyOperationSchema,
        PublicComparativeNumberPropertyOperationSchema,
      ])
      .openapi({
        description:
          'An object that defines the operation to be performed on the specified property. This operation can be one of several types, such as boolean, number, string, or date operations, among others.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description:
          'A string representing the specific property of the event that the filter is targeting.',
        example: null,
      }),
  })
  .openapi({ required: ['operation', 'property'], example: null })
  .openapi('PublicEventFilterMetadata')

type PublicIntegrationEventFilterType = {
  eventTypeId: number
  filterLines: z.infer<typeof PublicEventFilterMetadataSchema>[]
  filterType: 'INTEGRATION_EVENT'
}

const PublicIntegrationEventFilterSchema: z.ZodType<PublicIntegrationEventFilterType> = z
  .object({
    eventTypeId: z
      .int32()
      .openapi({
        description:
          'A string that uniquely identifies the type of event to be filtered. This property is used to specify which event type the filter applies to.',
        example: null,
      }),
    filterLines: z
      .array(PublicEventFilterMetadataSchema)
      .openapi({
        description:
          'An array of filter lines that contain the metadata for the event filter. Each item in the array is a detailed specification of the criteria used to filter events.',
        example: null,
      }),
    filterType: z
      .literal('INTEGRATION_EVENT')
      .default('INTEGRATION_EVENT')
      .openapi({
        description:
          'A string representing the type of filter. It is a required field and typically has a default value specific to the filter type.',
        example: null,
      }),
  })
  .openapi({
    title: 'INTEGRATION_EVENT',
    required: ['eventTypeId', 'filterLines', 'filterType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicIntegrationEventFilter')

type PublicEmailSubscriptionFilterType = {
  acceptedStatuses: string[]
  filterType: 'EMAIL_SUBSCRIPTION'
  subscriptionIds: string[]
  subscriptionType?: string
}

const PublicEmailSubscriptionFilterSchema: z.ZodType<PublicEmailSubscriptionFilterType> = z
  .object({
    acceptedStatuses: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings indicating the statuses that are accepted for the filter.',
        example: null,
      }),
    filterType: z
      .literal('EMAIL_SUBSCRIPTION')
      .default('EMAIL_SUBSCRIPTION')
      .openapi({
        description:
          "A string indicating the type of filter, which is 'EMAIL_SUBSCRIPTION' for this component.",
        example: null,
      }),
    subscriptionIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of the subscriptions to be filtered.',
        example: null,
      }),
    subscriptionType: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the type of subscription.', example: null }),
  })
  .openapi({
    title: 'EMAIL_SUBSCRIPTION',
    required: ['acceptedStatuses', 'filterType', 'subscriptionIds'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicEmailSubscriptionFilter')

type PublicCommunicationSubscriptionFilterType = {
  acceptedOptStates: string[]
  businessUnitId?: string
  channel: string
  filterType: 'COMMUNICATION_SUBSCRIPTION'
  subscriptionIds: string[]
  subscriptionType: string
}

const PublicCommunicationSubscriptionFilterSchema: z.ZodType<PublicCommunicationSubscriptionFilterType> =
  z
    .object({
      acceptedOptStates: z
        .array(z.string().openapi({ example: null }))
        .openapi({
          description:
            'An array of strings representing the accepted opt-in states for the subscription.',
          example: null,
        }),
      businessUnitId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'A string representing the ID of the business unit associated with the subscription.',
          example: null,
        }),
      channel: z
        .string()
        .openapi({
          description:
            'A string indicating the communication channel associated with the subscription.',
          example: null,
        }),
      filterType: z
        .literal('COMMUNICATION_SUBSCRIPTION')
        .default('COMMUNICATION_SUBSCRIPTION')
        .openapi({
          description:
            "A string that indicates the type of filter. The default value is 'COMMUNICATION_SUBSCRIPTION'.",
          example: null,
        }),
      subscriptionIds: z
        .array(z.string().openapi({ example: null }))
        .openapi({
          description:
            'An array of strings representing the IDs of the subscriptions to be filtered.',
          example: null,
        }),
      subscriptionType: z
        .string()
        .openapi({ description: 'A string indicating the type of subscription.', example: null }),
    })
    .openapi({
      title: 'COMMUNICATION_SUBSCRIPTION',
      required: [
        'acceptedOptStates',
        'channel',
        'filterType',
        'subscriptionIds',
        'subscriptionType',
      ],
      example: null,
      'x-hubspot-sub-type-impl': true,
    })
    .openapi('PublicCommunicationSubscriptionFilter')

type PublicSurveyMonkeyFilterType = {
  filterType: 'SURVEY_MONKEY'
  operator: string
  surveyId: string
}

const PublicSurveyMonkeyFilterSchema: z.ZodType<PublicSurveyMonkeyFilterType> = z
  .object({
    filterType: z
      .literal('SURVEY_MONKEY')
      .default('SURVEY_MONKEY')
      .openapi({
        description:
          "A string that specifies the type of filter being used. The default value is 'SURVEY_MONKEY', indicating that this filter is for SurveyMonkey data.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string that defines the operation or condition to apply when filtering the survey data.',
        example: null,
      }),
    surveyId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the SurveyMonkey survey to be filtered.',
        example: null,
      }),
  })
  .openapi({
    title: 'SURVEY_MONKEY',
    required: ['filterType', 'operator', 'surveyId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSurveyMonkeyFilter')

type PublicSurveyMonkeyValueFilterType = {
  filterType: 'SURVEY_MONKEY_VALUE'
  operator: string
  surveyAnswerColId?: string
  surveyAnswerRowId?: string
  surveyId: string
  surveyQuestion: string
  valueComparison:
    | z.infer<typeof PublicBoolPropertyOperationSchema>
    | z.infer<typeof PublicNumberPropertyOperationSchema>
    | z.infer<typeof PublicStringPropertyOperationSchema>
    | z.infer<typeof PublicDateTimePropertyOperationSchema>
    | z.infer<typeof PublicRangedDatePropertyOperationSchema>
    | z.infer<typeof PublicComparativePropertyUpdatedOperationSchema>
    | z.infer<typeof PublicComparativeDatePropertyOperationSchema>
    | z.infer<typeof PublicRollingDateRangePropertyOperationSchema>
    | z.infer<typeof PublicRollingPropertyUpdatedOperationSchema>
    | z.infer<typeof PublicEnumerationPropertyOperationSchema>
    | z.infer<typeof PublicAllPropertyTypesOperationSchema>
    | z.infer<typeof PublicRangedNumberPropertyOperationSchema>
    | z.infer<typeof PublicMultiStringPropertyOperationSchema>
    | z.infer<typeof PublicDatePropertyOperationSchema>
    | z.infer<typeof PublicCalendarDatePropertyOperationSchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
    | z.infer<typeof PublicComparativeStringPropertyOperationSchema>
    | z.infer<typeof PublicComparativeNumberPropertyOperationSchema>
}

const PublicSurveyMonkeyValueFilterSchema: z.ZodType<PublicSurveyMonkeyValueFilterType> = z
  .object({
    filterType: z
      .literal('SURVEY_MONKEY_VALUE')
      .default('SURVEY_MONKEY_VALUE')
      .openapi({
        description: "A string indicating the type of filter. Defaults to 'SURVEY_MONKEY_VALUE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string that specifies the operator used in the filter, determining how the survey data is evaluated against the filter criteria.',
        example: null,
      }),
    surveyAnswerColId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the column identifier of the survey answer, used for filtering specific responses.',
        example: null,
      }),
    surveyAnswerRowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the row identifier of the survey answer, used for filtering specific responses.',
        example: null,
      }),
    surveyId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the SurveyMonkey survey.',
        example: null,
      }),
    surveyQuestion: z
      .string()
      .openapi({
        description: 'A string specifying the question within the survey to filter responses by.',
        example: null,
      }),
    valueComparison: z
      .xor([
        PublicBoolPropertyOperationSchema,
        PublicNumberPropertyOperationSchema,
        PublicStringPropertyOperationSchema,
        PublicDateTimePropertyOperationSchema,
        PublicRangedDatePropertyOperationSchema,
        PublicComparativePropertyUpdatedOperationSchema,
        PublicComparativeDatePropertyOperationSchema,
        PublicRollingDateRangePropertyOperationSchema,
        PublicRollingPropertyUpdatedOperationSchema,
        PublicEnumerationPropertyOperationSchema,
        PublicAllPropertyTypesOperationSchema,
        PublicRangedNumberPropertyOperationSchema,
        PublicMultiStringPropertyOperationSchema,
        PublicDatePropertyOperationSchema,
        PublicCalendarDatePropertyOperationSchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
        PublicComparativeStringPropertyOperationSchema,
        PublicComparativeNumberPropertyOperationSchema,
      ])
      .openapi({
        description:
          'An object that defines the operation for comparing survey answer values. It can be one of several types, such as number, string, or date operations.',
        example: null,
      }),
  })
  .openapi({
    title: 'SURVEY_MONKEY_VALUE',
    required: ['filterType', 'operator', 'surveyId', 'surveyQuestion', 'valueComparison'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicSurveyMonkeyValueFilter')

type PublicWebinarFilterType = { filterType: 'WEBINAR'; operator: string; webinarId?: string }

const PublicWebinarFilterSchema: z.ZodType<PublicWebinarFilterType> = z
  .object({
    filterType: z
      .literal('WEBINAR')
      .default('WEBINAR')
      .openapi({
        description: "A string that specifies the type of filter. The default value is 'WEBINAR'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the filter.',
        example: null,
      }),
    webinarId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies the webinar to be filtered.',
        example: null,
      }),
  })
  .openapi({
    title: 'WEBINAR',
    required: ['filterType', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicWebinarFilter')

type PublicEmailEventFilterType = {
  appId: string
  clickUrl?: string
  emailId: string
  filterType: 'EMAIL_EVENT'
  level: string
  operator:
    | 'BOUNCED'
    | 'LINK_CLICKED'
    | 'MARKED_SPAM'
    | 'OPENED'
    | 'OPENED_BUT_LINK_NOT_CLICKED'
    | 'OPENED_BUT_NOT_REPLIED'
    | 'RECEIVED'
    | 'RECEIVED_BUT_NOT_OPENED'
    | 'REPLIED'
    | 'SENT'
    | 'SENT_BUT_LINK_NOT_CLICKED'
    | 'SENT_BUT_NOT_RECEIVED'
    | 'UNSUBSCRIBED'
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicEmailEventFilterSchema: z.ZodType<PublicEmailEventFilterType> = z
  .object({
    appId: z
      .string()
      .openapi({
        description: 'A string that identifies the application associated with the email event.',
        example: null,
      }),
    clickUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL that was clicked in the email event.',
        example: null,
      }),
    emailId: z
      .string()
      .openapi({
        description: 'A string that uniquely identifies the email associated with the event.',
        example: null,
      }),
    filterType: z
      .literal('EMAIL_EVENT')
      .default('EMAIL_EVENT')
      .openapi({
        description:
          "A string that specifies the type of filter. The default value is 'EMAIL_EVENT'.",
        example: null,
      }),
    level: z
      .string()
      .openapi({
        description: 'A string representing the level of the email event.',
        example: null,
      }),
    operator: z
      .enum([
        'BOUNCED',
        'LINK_CLICKED',
        'MARKED_SPAM',
        'OPENED',
        'OPENED_BUT_LINK_NOT_CLICKED',
        'OPENED_BUT_NOT_REPLIED',
        'RECEIVED',
        'RECEIVED_BUT_NOT_OPENED',
        'REPLIED',
        'SENT',
        'SENT_BUT_LINK_NOT_CLICKED',
        'SENT_BUT_NOT_RECEIVED',
        'UNSUBSCRIBED',
      ])
      .openapi({
        description:
          "A string that defines the operation or event type for filtering. Valid values include 'LINK_CLICKED', 'MARKED_SPAM', 'OPENED', 'OPENED_BUT_LINK_NOT_CLICKED', 'OPENED_BUT_NOT_REPLIED', 'REPLIED', 'UNSUBSCRIBED', 'BOUNCED', 'RECEIVED', 'RECEIVED_BUT_NOT_OPENED', 'SENT', 'SENT_BUT_LINK_NOT_CLICKED', and 'SENT_BUT_NOT_RECEIVED'.",
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          "An object that specifies additional criteria for refining the filter, which can be one of several types such as 'PublicNumOccurrencesRefineBy', 'PublicSetOccurrencesRefineBy', 'PublicRelativeComparativeTimestampRefineBy', 'PublicRelativeRangedTimestampRefineBy', 'PublicAbsoluteComparativeTimestampRefineBy', 'PublicAbsoluteRangedTimestampRefineBy', 'PublicAllHistoryRefineBy', 'PublicTimePointOperation', or 'PublicRangedTimeOperation'.",
        example: null,
      }),
  })
  .openapi({
    title: 'EMAIL_EVENT',
    required: ['appId', 'emailId', 'filterType', 'level', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicEmailEventFilter')

type PublicPrivacyAnalyticsFilterType = {
  filterType: 'PRIVACY'
  operator: string
  privacyName: string
}

const PublicPrivacyAnalyticsFilterSchema: z.ZodType<PublicPrivacyAnalyticsFilterType> = z
  .object({
    filterType: z
      .literal('PRIVACY')
      .default('PRIVACY')
      .openapi({
        description:
          "A string indicating the type of filter, which is 'PRIVACY' for this component.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string specifying the operator to be used in conjunction with the privacyName for filtering.',
        example: null,
      }),
    privacyName: z
      .string()
      .openapi({
        description:
          'A string representing the name of the privacy setting to be used in the filter.',
        example: null,
      }),
  })
  .openapi({
    title: 'PRIVACY',
    required: ['filterType', 'operator', 'privacyName'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicPrivacyAnalyticsFilter')

const PublicAdsSearchFilterSchema: z.ZodType<PublicAdsSearchFilterType> = z
  .object({
    adNetwork: z
      .string()
      .openapi({
        description: 'A string identifying the ad network where the search is performed.',
        example: null,
      }),
    entityType: z
      .string()
      .openapi({
        description: 'A string representing the type of entity being filtered.',
        example: null,
      }),
    filterType: z
      .literal('ADS_SEARCH')
      .default('ADS_SEARCH')
      .openapi({
        description:
          "A string indicating the type of filter being applied. Default value is 'ADS_SEARCH'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that specifies the operation or condition applied to the filter.',
        example: null,
      }),
    searchTermType: z
      .string()
      .openapi({
        description: 'A string specifying the type of search term used in the filter.',
        example: null,
      }),
    searchTerms: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings containing the terms used to search within the ad network.',
        example: null,
      }),
  })
  .openapi({
    title: 'ADS_SEARCH',
    required: [
      'adNetwork',
      'entityType',
      'filterType',
      'operator',
      'searchTermType',
      'searchTerms',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAdsSearchFilter')

const PublicAdsTimeFilterSchema: z.ZodType<PublicAdsTimeFilterType> = z
  .object({
    filterType: z
      .literal('ADS_TIME')
      .default('ADS_TIME')
      .openapi({
        description:
          "A string that indicates the type of filter being applied. The default value is 'ADS_TIME'.",
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .openapi({
        description:
          'An object that defines the criteria for refining the filter based on time attributes. It can be one of several types, such as PublicNumOccurrencesRefineBy, PublicSetOccurrencesRefineBy, or various timestamp refine types.',
        example: null,
      }),
  })
  .openapi({
    title: 'ADS_TIME',
    required: ['filterType', 'pruningRefineBy'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAdsTimeFilter')

const PublicInListFilterMetadataSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The unique identifier for the list. It is a string that specifies which list the filter is associated with.',
        example: null,
      }),
    inListType: z
      .string()
      .openapi({
        description:
          'A string representing the type of list used in the filter. This property defines the context or category of the list being referenced.',
        example: null,
      }),
  })
  .openapi({ required: ['id', 'inListType'], example: null })
  .openapi('PublicInListFilterMetadata')

type PublicInListFilterType = {
  filterType: 'IN_LIST'
  listId: string
  metadata?: z.infer<typeof PublicInListFilterMetadataSchema>
  operator: string
}

const PublicInListFilterSchema: z.ZodType<PublicInListFilterType> = z
  .object({
    filterType: z
      .literal('IN_LIST')
      .default('IN_LIST')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. The default value is 'IN_LIST'.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the list to be used in the filter.',
        example: null,
      }),
    metadata: PublicInListFilterMetadataSchema.exactOptional(),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operator used in the filter.',
        example: null,
      }),
  })
  .openapi({
    title: 'IN_LIST',
    required: ['filterType', 'listId', 'operator'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicInListFilter')

type PublicUnifiedEventsFilterType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  eventTypeId?: string
  filterLines: z.infer<typeof PublicEventFilterMetadataSchema>[]
  filterType: 'UNIFIED_EVENTS'
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const PublicUnifiedEventsFilterSchema: z.ZodType<PublicUnifiedEventsFilterType> = z
  .object({
    coalescingRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An object that specifies refinement criteria for coalescing events. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
        example: null,
      }),
    eventTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier for the event type.',
        example: null,
      }),
    filterLines: z
      .array(PublicEventFilterMetadataSchema)
      .openapi({
        description:
          'An array of objects, each conforming to the PublicEventFilterMetadata schema, representing the individual filter lines that make up the unified events filter.',
        example: null,
      }),
    filterType: z
      .literal('UNIFIED_EVENTS')
      .default('UNIFIED_EVENTS')
      .openapi({
        description:
          "A string indicating the type of filter. The default value is 'UNIFIED_EVENTS'.",
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        PublicNumOccurrencesRefineBySchema,
        PublicSetOccurrencesRefineBySchema,
        PublicRelativeComparativeTimestampRefineBySchema,
        PublicRelativeRangedTimestampRefineBySchema,
        PublicAbsoluteComparativeTimestampRefineBySchema,
        PublicAbsoluteRangedTimestampRefineBySchema,
        PublicAllHistoryRefineBySchema,
        PublicTimePointOperationSchema,
        PublicRangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An object that specifies refinement criteria for pruning events. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
        example: null,
      }),
  })
  .openapi({
    title: 'UNIFIED_EVENTS',
    required: ['filterLines', 'filterType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicUnifiedEventsFilter')

type PublicConstantFilterType = { filterType: 'CONSTANT'; shouldAccept: boolean; source?: string }

const PublicConstantFilterSchema: z.ZodType<PublicConstantFilterType> = z
  .object({
    filterType: z
      .literal('CONSTANT')
      .default('CONSTANT')
      .openapi({
        description:
          "A string indicating the type of filter. It defaults to 'CONSTANT' and must be one of the predefined filter types.",
        example: null,
      }),
    shouldAccept: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the filter should accept the criteria it evaluates.',
        example: null,
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the origin or context from which the filter is applied.',
        example: null,
      }),
  })
  .openapi({
    title: 'CONSTANT',
    required: ['filterType', 'shouldAccept'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicConstantFilter')

type PublicAndFilterBranchType = {
  filterBranchOperator: string
  filterBranchType: 'AND'
  filterBranches: (
    | z.infer<typeof PublicOrFilterBranchSchema>
    | PublicAndFilterBranchType
    | z.infer<typeof PublicNotAllFilterBranchSchema>
    | z.infer<typeof PublicNotAnyFilterBranchSchema>
    | z.infer<typeof PublicRestrictedFilterBranchSchema>
    | z.infer<typeof PublicUnifiedEventsFilterBranchSchema>
    | z.infer<typeof PublicAssociationFilterBranchSchema>
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
}

const PublicAndFilterBranchSchema: z.ZodType<PublicAndFilterBranchType> = z
  .lazy(() =>
    z
      .object({
        filterBranchOperator: z
          .string()
          .openapi({
            description: 'A string representing the logical operator used in the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('AND')
          .default('AND')
          .openapi({
            description: "A string indicating the type of filter branch. Defaults to 'AND'.",
            example: null,
          }),
        filterBranches: z
          .array(
            z
              .xor([
                PublicOrFilterBranchSchema,
                PublicAndFilterBranchSchema,
                PublicNotAllFilterBranchSchema,
                PublicNotAnyFilterBranchSchema,
                PublicRestrictedFilterBranchSchema,
                PublicUnifiedEventsFilterBranchSchema,
                PublicAssociationFilterBranchSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              "An array of nested filter branches, which can include 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', and 'ASSOCIATION' filter branches.",
            example: null,
          }),
        filters: z
          .array(
            z
              .xor([
                PublicPropertyFilterSchema,
                PublicAssociationInListFilterSchema,
                PublicPageViewAnalyticsFilterSchema,
                PublicCtaAnalyticsFilterSchema,
                PublicEventAnalyticsFilterSchema,
                PublicFormSubmissionFilterSchema,
                PublicFormSubmissionOnPageFilterSchema,
                PublicIntegrationEventFilterSchema,
                PublicEmailSubscriptionFilterSchema,
                PublicCommunicationSubscriptionFilterSchema,
                PublicSurveyMonkeyFilterSchema,
                PublicSurveyMonkeyValueFilterSchema,
                PublicWebinarFilterSchema,
                PublicEmailEventFilterSchema,
                PublicPrivacyAnalyticsFilterSchema,
                PublicAdsSearchFilterSchema,
                PublicAdsTimeFilterSchema,
                PublicInListFilterSchema,
                PublicUnifiedEventsFilterSchema,
                PublicConstantFilterSchema,
              ])
              .openapi({ example: null }),
          )
          .openapi({
            description:
              'An array of filters that are applied within this branch. These can include various types of filters such as property filters, event filters, and subscription filters.',
            example: null,
          }),
      })
      .openapi({
        title: 'AND',
        required: ['filterBranchOperator', 'filterBranchType', 'filterBranches', 'filters'],
        example: null,
        'x-hubspot-sub-type-impl': true,
      }),
  )
  .openapi('PublicAndFilterBranch')

type PublicAssociationFilterBranchType = {
  associationCategory: string
  associationTypeId: number
  filterBranchOperator: string
  filterBranchType: 'ASSOCIATION'
  filterBranches: (
    | z.infer<typeof PublicOrFilterBranchSchema>
    | z.infer<typeof PublicAndFilterBranchSchema>
    | z.infer<typeof PublicNotAllFilterBranchSchema>
    | z.infer<typeof PublicNotAnyFilterBranchSchema>
    | z.infer<typeof PublicRestrictedFilterBranchSchema>
    | z.infer<typeof PublicUnifiedEventsFilterBranchSchema>
    | PublicAssociationFilterBranchType
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
  objectTypeId: string
  operator: string
}

type PublicNotAllFilterBranchType = {
  filterBranchOperator: string
  filterBranchType: 'NOT_ALL'
  filterBranches: (
    | z.infer<typeof PublicOrFilterBranchSchema>
    | z.infer<typeof PublicAndFilterBranchSchema>
    | PublicNotAllFilterBranchType
    | z.infer<typeof PublicNotAnyFilterBranchSchema>
    | z.infer<typeof PublicRestrictedFilterBranchSchema>
    | z.infer<typeof PublicUnifiedEventsFilterBranchSchema>
    | z.infer<typeof PublicAssociationFilterBranchSchema>
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
}

type PublicNotAnyFilterBranchType = {
  filterBranchOperator: string
  filterBranchType: 'NOT_ANY'
  filterBranches: (
    | z.infer<typeof PublicOrFilterBranchSchema>
    | z.infer<typeof PublicAndFilterBranchSchema>
    | z.infer<typeof PublicNotAllFilterBranchSchema>
    | PublicNotAnyFilterBranchType
    | z.infer<typeof PublicRestrictedFilterBranchSchema>
    | z.infer<typeof PublicUnifiedEventsFilterBranchSchema>
    | z.infer<typeof PublicAssociationFilterBranchSchema>
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
}

type PublicOrFilterBranchType = {
  filterBranchOperator: string
  filterBranchType: 'OR'
  filterBranches: (
    | PublicOrFilterBranchType
    | z.infer<typeof PublicAndFilterBranchSchema>
    | z.infer<typeof PublicNotAllFilterBranchSchema>
    | z.infer<typeof PublicNotAnyFilterBranchSchema>
    | z.infer<typeof PublicRestrictedFilterBranchSchema>
    | z.infer<typeof PublicUnifiedEventsFilterBranchSchema>
    | z.infer<typeof PublicAssociationFilterBranchSchema>
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
}

type PublicRestrictedFilterBranchType = {
  filterBranchOperator: string
  filterBranchType: 'RESTRICTED'
  filterBranches: (
    | z.infer<typeof PublicOrFilterBranchSchema>
    | z.infer<typeof PublicAndFilterBranchSchema>
    | z.infer<typeof PublicNotAllFilterBranchSchema>
    | z.infer<typeof PublicNotAnyFilterBranchSchema>
    | PublicRestrictedFilterBranchType
    | z.infer<typeof PublicUnifiedEventsFilterBranchSchema>
    | z.infer<typeof PublicAssociationFilterBranchSchema>
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
}

type PublicUnifiedEventsFilterBranchType = {
  coalescingRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
  eventTypeId: string
  filterBranchOperator: string
  filterBranchType: 'UNIFIED_EVENTS'
  filterBranches: (
    | z.infer<typeof PublicOrFilterBranchSchema>
    | z.infer<typeof PublicAndFilterBranchSchema>
    | z.infer<typeof PublicNotAllFilterBranchSchema>
    | z.infer<typeof PublicNotAnyFilterBranchSchema>
    | z.infer<typeof PublicRestrictedFilterBranchSchema>
    | PublicUnifiedEventsFilterBranchType
    | z.infer<typeof PublicAssociationFilterBranchSchema>
  )[]
  filters: (
    | z.infer<typeof PublicPropertyFilterSchema>
    | z.infer<typeof PublicAssociationInListFilterSchema>
    | z.infer<typeof PublicPageViewAnalyticsFilterSchema>
    | z.infer<typeof PublicCtaAnalyticsFilterSchema>
    | z.infer<typeof PublicEventAnalyticsFilterSchema>
    | z.infer<typeof PublicFormSubmissionFilterSchema>
    | z.infer<typeof PublicFormSubmissionOnPageFilterSchema>
    | z.infer<typeof PublicIntegrationEventFilterSchema>
    | z.infer<typeof PublicEmailSubscriptionFilterSchema>
    | z.infer<typeof PublicCommunicationSubscriptionFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyFilterSchema>
    | z.infer<typeof PublicSurveyMonkeyValueFilterSchema>
    | z.infer<typeof PublicWebinarFilterSchema>
    | z.infer<typeof PublicEmailEventFilterSchema>
    | z.infer<typeof PublicPrivacyAnalyticsFilterSchema>
    | z.infer<typeof PublicAdsSearchFilterSchema>
    | z.infer<typeof PublicAdsTimeFilterSchema>
    | z.infer<typeof PublicInListFilterSchema>
    | z.infer<typeof PublicUnifiedEventsFilterSchema>
    | z.infer<typeof PublicConstantFilterSchema>
  )[]
  operator: 'HAS_COMPLETED' | 'HAS_NOT_COMPLETED'
  pruningRefineBy?:
    | z.infer<typeof PublicNumOccurrencesRefineBySchema>
    | z.infer<typeof PublicSetOccurrencesRefineBySchema>
    | z.infer<typeof PublicRelativeComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicRelativeRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteComparativeTimestampRefineBySchema>
    | z.infer<typeof PublicAbsoluteRangedTimestampRefineBySchema>
    | z.infer<typeof PublicAllHistoryRefineBySchema>
    | z.infer<typeof PublicTimePointOperationSchema>
    | z.infer<typeof PublicRangedTimeOperationSchema>
}

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status code associated with the error detail. This is a string property.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties. Each property is an array of strings providing further details.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the field or parameter in which the error was found. This is a string property.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate. It is a required string property.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific category that contains more specific detail about the error. This is a string property.',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({
        description: 'A string representing the general category of the error.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing additional context about the error condition, with properties as arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A string that uniquely identifies the request for tracking and debugging purposes.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of ErrorDetail objects that provide detailed information about each error encountered.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing related links, where each key is a string and the value is a string representing a URL.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable message describing the error.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing more specific details about the error category.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PublicApprovalStageRuleSchema = z
  .object({
    approvalComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that allows for an optional comment or note regarding the approval process.',
        example: null,
      }),
    approvalMode: z
      .enum(['ALL', 'ANY'])
      .openapi({
        description:
          "Specifies the mode of approval required. It can be either 'ALL', meaning all approvers must approve, or 'ANY', meaning any one approver can approve. It is a string.",
        example: null,
      }),
    approverUserIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of user IDs representing the users who are designated as approvers for this stage. Each user ID is a string.',
        example: null,
      }),
    conditionalApprovalFilterBranch: z
      .xor([
        PublicOrFilterBranchSchema,
        PublicAndFilterBranchSchema,
        PublicNotAllFilterBranchSchema,
        PublicNotAnyFilterBranchSchema,
        PublicRestrictedFilterBranchSchema,
        PublicUnifiedEventsFilterBranchSchema,
        PublicAssociationFilterBranchSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines the conditions under which the approval is required. It can be one of several filter branch types, such as PublicOrFilterBranch or PublicAndFilterBranch, which determine the logical conditions for approval.',
        example: null,
      }),
    pipelineStageId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the pipeline stage that this approval rule applies to. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['approvalMode', 'approverUserIds', 'pipelineStageId'], example: null })
  .openapi('PublicApprovalStageRule')

const PublicApprovalStageRuleRequestSchema = z
  .object({
    approvalComment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that allows an optional comment to be added to the approval rule.',
        example: null,
      }),
    approvalMode: z
      .enum(['ALL', 'ANY'])
      .openapi({
        description:
          "Specifies the mode of approval required. It can be either 'ALL', meaning all specified users must approve, or 'ANY', meaning any one of the specified users can approve.",
        example: null,
      }),
    approverUserIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of user IDs representing the users who are authorized to approve the stage transition. Each ID is a string.',
        example: null,
      }),
    conditionalApprovalFilterBranch: z
      .xor([
        PublicOrFilterBranchSchema,
        PublicAndFilterBranchSchema,
        PublicNotAllFilterBranchSchema,
        PublicNotAnyFilterBranchSchema,
        PublicRestrictedFilterBranchSchema,
        PublicUnifiedEventsFilterBranchSchema,
        PublicAssociationFilterBranchSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'Defines conditional logic for the approval process using a filter branch. It can be one of several types, such as PublicOrFilterBranch or PublicAndFilterBranch, to specify complex approval conditions.',
        example: null,
      }),
    pipelineStageId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the pipeline stage that the approval rule applies to. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['approvalMode', 'approverUserIds', 'pipelineStageId'], example: null })
  .openapi('PublicApprovalStageRuleRequest')

const PublicCreateApprovalRequestSchema = z
  .object({
    objectId: z
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
          'The unique identifier of the object for which the approval request is being created. It is an integer formatted as int64.',
        example: null,
      }),
  })
  .openapi({ required: ['objectId'], example: null })
  .openapi('PublicCreateApprovalRequest')

const PublicSequenceValidationRuleSchema = z
  .object({
    enabledForAllStages: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the validation rule is enabled for all stages in the pipeline.',
        example: null,
      }),
    pipelineStageIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the specific pipeline stage IDs for which the validation rule is applicable.',
        example: null,
      }),
  })
  .openapi({ required: ['enabledForAllStages', 'pipelineStageIds'], example: null })
  .openapi('PublicSequenceValidationRule')

const PublicObjectCreationRuleSchema = z
  .object({
    pipelineStageIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of pipeline stages where objects can be created.',
        example: null,
      }),
  })
  .openapi({ required: ['pipelineStageIds'], example: null })
  .openapi('PublicObjectCreationRule')

const PublicGovernanceValidationRulesSchema = z
  .object({
    noBackwardsMovementRule: PublicSequenceValidationRuleSchema,
    noSkippingStagesRule: PublicSequenceValidationRuleSchema,
    objectCreationRule: PublicObjectCreationRuleSchema,
  })
  .openapi({
    required: ['noBackwardsMovementRule', 'noSkippingStagesRule', 'objectCreationRule'],
    example: null,
  })
  .openapi('PublicGovernanceValidationRules')

const PublicObjectApprovalStatusSchema = z
  .object({
    approvalId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the approval process instance associated with this object.',
        example: null,
      }),
    approvalStatus: z
      .enum(['APPROVED', 'NO_APPROVAL_NEEDED', 'NOT_APPLICABLE', 'PENDING', 'REJECTED'])
      .openapi({
        description:
          'The current approval status of the object. This indicates whether the object is approved, pending approval, or rejected.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this approval status record was created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this approval status object.',
        example: null,
      }),
    objectId: z
      .string()
      .openapi({
        description: 'The unique identifier of the object whose approval status is being tracked.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The type identifier of the object, indicating what kind of object is being approved.',
        example: null,
      }),
    pipelineId: z
      .string()
      .openapi({
        description: 'The unique identifier of the pipeline in which the object is located.',
        example: null,
      }),
    pipelineStageId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the pipeline stage where the object currently resides.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when this approval status record was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'approvalStatus',
      'createdAt',
      'id',
      'objectId',
      'objectTypeId',
      'pipelineId',
      'pipelineStageId',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicObjectApprovalStatus')

const PublicPipelineRulesSchema = z
  .object({
    approvalStage: PublicApprovalStageRuleSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the pipeline rule was created.',
        example: null,
      }),
    governanceValidationRules: PublicGovernanceValidationRulesSchema,
    id: z
      .string()
      .openapi({ description: 'The unique identifier for the pipeline rule.', example: null }),
    objectTypeId: z
      .string()
      .openapi({
        description: 'The identifier for the type of object the pipeline rule is associated with.',
        example: null,
      }),
    pipelineId: z
      .string()
      .openapi({
        description: 'The unique identifier for the pipeline to which the rule applies.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the pipeline rule was last updated.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'governanceValidationRules',
      'id',
      'objectTypeId',
      'pipelineId',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicPipelineRules')

const PublicPipelineRulesPatchRequestSchema = z
  .object({
    approvalStage: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A rule that defines the approval process for a specific pipeline stage. It is defined using the PublicApprovalStageRuleRequest schema.',
        example: null,
      }),
    noBackwardsMovementRule: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A rule that prevents moving backwards in the pipeline stages. It is defined using the PublicSequenceValidationRule schema.',
        example: null,
      }),
    noSkippingStagesRule: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A rule that prevents skipping stages in the pipeline. It is defined using the PublicSequenceValidationRule schema.',
        example: null,
      }),
    objectCreationRule: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A rule that specifies conditions for object creation within the pipeline. It is defined using the PublicObjectCreationRule schema.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicPipelineRulesPatchRequest')

const PublicPipelineRulesUpdateRequestSchema = z
  .object({
    approvalStage: PublicApprovalStageRuleRequestSchema.exactOptional(),
    governanceValidationRules: PublicGovernanceValidationRulesSchema,
  })
  .openapi({ required: ['governanceValidationRules'], example: null })
  .openapi('PublicPipelineRulesUpdateRequest')

const PublicStagePermissionSchema = z
  .object({
    label: z
      .string()
      .openapi({
        description:
          "A descriptive label for the stage, used for display purposes. It is a string that helps identify the stage's purpose or function.",
        example: null,
      }),
    permissionMode: z
      .enum(['OPEN', 'RESTRICTED'])
      .openapi({
        description:
          "Defines the mode of permission for the stage. It is a string that can be either 'OPEN' or 'RESTRICTED', indicating whether the stage is accessible to all users or restricted to certain users or teams.",
        example: null,
      }),
    pipelineStageId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the pipeline stage. It is a string that distinguishes this stage from others within the pipeline.',
        example: null,
      }),
    superAdmin: z
      .boolean()
      .openapi({
        description:
          'A boolean value indicating whether super administrators have access to this stage. If true, super admins can access the stage regardless of other permissions.',
        example: null,
      }),
    teamIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of teams that have access to this stage. This property is used to specify which teams are allowed to interact with the stage.',
        example: null,
      }),
    userIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of individual users who have access to this stage. This property allows for specifying user-level access control.',
        example: null,
      }),
  })
  .openapi({
    required: ['label', 'permissionMode', 'pipelineStageId', 'superAdmin', 'teamIds', 'userIds'],
    example: null,
  })
  .openapi('PublicStagePermission')

const PublicPipelineStagePermissionsSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when these permissions were created, in ISO 8601 format.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for this set of pipeline stage permissions.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description: 'The identifier for the type of object associated with these permissions.',
        example: null,
      }),
    pipelineId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the pipeline to which these stage permissions apply.',
        example: null,
      }),
    stages: z
      .array(PublicStagePermissionSchema)
      .openapi({
        description:
          'An array of stage permissions, each defining access rules for a specific stage within the pipeline.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when these permissions were last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: ['createdAt', 'id', 'objectTypeId', 'pipelineId', 'stages', 'updatedAt'],
    example: null,
  })
  .openapi('PublicPipelineStagePermissions')

const PublicStagePermissionRequestSchema = z
  .object({
    permissionMode: z
      .enum(['OPEN', 'RESTRICTED'])
      .openapi({
        description:
          "The mode of permission for the stage. It is a string that can be either 'OPEN' or 'RESTRICTED', indicating the level of access allowed.",
        example: null,
      }),
    pipelineStageId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the pipeline stage. It is a string that specifies which stage the permissions apply to.',
        example: null,
      }),
    superAdmin: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether super admin users have permission to edit the stage.',
        example: null,
      }),
    teamIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of teams that have permission to edit the stage.',
        example: null,
      }),
    userIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of individual users who have permission to edit the stage.',
        example: null,
      }),
  })
  .openapi({
    required: ['permissionMode', 'pipelineStageId', 'superAdmin', 'teamIds', 'userIds'],
    example: null,
  })
  .openapi('PublicStagePermissionRequest')

const PublicPipelineStagePermissionsUpdateRequestSchema = z
  .object({
    stages: z
      .array(PublicStagePermissionRequestSchema)
      .openapi({
        description:
          'An array of stage permission requests, each defined by the PublicStagePermissionRequest schema. This property specifies the permissions to be updated for each stage in the pipeline.',
        example: null,
      }),
  })
  .openapi({ required: ['stages'], example: null })
  .openapi('PublicPipelineStagePermissionsUpdateRequest')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {
        'crm.pipelines.approval.read': '',
        'crm.pipelines.governance.read': '',
        'crm.pipelines.governance.write': '',
        'crm.pipelines.stage_permissions.read': '',
        'crm.pipelines.stage_permissions.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute = createRoute({
  method: 'get',
  path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  tags: ['Basic'],
  summary: 'Retrieve rules',
  description:
    'Retrieve the rules associated with a specific pipeline in your HubSpot account. This endpoint allows you to access governance validation rules and approval stages for the specified pipeline. It is useful for understanding the constraints and approval processes applied to the pipeline.',
  operationId: 'get-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which the pipeline rules are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      pipelineId: z
        .string()
        .openapi({
          param: {
            name: 'pipelineId',
            in: 'path',
            description: 'The unique identifier of the pipeline whose rules are being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicPipelineRulesSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.pipelines.governance.read'] }],
})

export const putCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute = createRoute({
  method: 'put',
  path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  tags: ['Basic'],
  summary: 'Update rules (Replace)',
  description:
    'Update the rules for a specific pipeline in your HubSpot account. This endpoint allows you to modify governance validation rules and approval stages associated with a pipeline. It requires specifying the object type and pipeline identifiers.',
  operationId: 'put-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which the pipeline rules are being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      pipelineId: z
        .string()
        .openapi({
          param: {
            name: 'pipelineId',
            in: 'path',
            description: 'The unique identifier of the pipeline whose rules are being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PublicPipelineRulesUpdateRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicPipelineRulesSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.pipelines.governance.write'] }],
})

export const deleteCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute = createRoute({
  method: 'delete',
  path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  tags: ['Basic'],
  summary: 'Delete',
  description:
    'Delete a specific set of pipeline rules associated with a given object type and pipeline ID in your HubSpot account. This operation is useful for removing obsolete or incorrect rules from a pipeline. Ensure that the objectTypeId and pipelineId are correctly specified to avoid unintended deletions.',
  operationId: 'delete-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type associated with the pipeline rules to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      pipelineId: z
        .string()
        .openapi({
          param: {
            name: 'pipelineId',
            in: 'path',
            description: 'The unique identifier of the pipeline whose rules are to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['crm.pipelines.governance.write'] }],
})

export const patchCrmPipelinesRules202609ObjectTypeIdPipelineIdRoute = createRoute({
  method: 'patch',
  path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  tags: ['Basic'],
  summary: 'Update rules (Partial)',
  description:
    'Update the rules for a specific pipeline within a given object type in HubSpot. This operation allows you to modify governance validation rules and approval stages for the specified pipeline. It is useful for maintaining or altering the workflow rules associated with your pipelines.',
  operationId: 'patch-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which the pipeline rules are being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      pipelineId: z
        .string()
        .openapi({
          param: {
            name: 'pipelineId',
            in: 'path',
            description: 'The unique identifier of the pipeline whose rules are being updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PublicPipelineRulesPatchRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicPipelineRulesSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.pipelines.governance.write'] }],
})

export const postCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsStartRoute = createRoute({
  method: 'post',
  path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/start',
  tags: ['Advanced'],
  summary: 'Start Approval',
  description:
    'Initiate the approval process for a specific pipeline within a given object type. This endpoint is useful for triggering approval workflows that are associated with pipeline stages, ensuring that the necessary approvals are obtained before proceeding with further actions in the pipeline.',
  operationId:
    'post-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/start_/crm/pipelines-rules/2026-09-beta/{objectTypeId}/{pipelineId}/approvals/start',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which the approval process is being started.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      pipelineId: z
        .string()
        .openapi({
          param: {
            name: 'pipelineId',
            in: 'path',
            description:
              'The unique identifier of the pipeline for which the approval process is being initiated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicCreateApprovalRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicObjectApprovalStatusSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.pipelines.governance.write'] }],
})

export const getCrmPipelinesRules202609ObjectTypeIdPipelineIdApprovalsObjectIdRoute = createRoute({
  method: 'get',
  path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/{objectId}',
  tags: ['Basic'],
  summary: 'Retrieve Approval',
  description:
    'Retrieve the approval status of a specific object within a pipeline. This endpoint is useful for checking the current approval state of an object, which can be critical in workflows that require validation or authorization steps.',
  operationId: 'get-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/approvals/{objectId}',
  request: {
    params: z.object({
      objectId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'objectId',
            in: 'path',
            description:
              'The unique identifier of the object for which the approval status is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier for the type of object being referenced.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      pipelineId: z
        .string()
        .openapi({
          param: {
            name: 'pipelineId',
            in: 'path',
            description: 'The unique identifier of the pipeline containing the object.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicObjectApprovalStatusSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.pipelines.approval.read'] }],
})

export const getCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute =
  createRoute({
    method: 'get',
    path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions',
    tags: ['Basic'],
    summary: 'Retrieve permissions',
    description:
      'Retrieve the stage edit permissions for a specific pipeline in your HubSpot account. This endpoint allows you to view the permissions set for editing stages within a given pipeline, identified by its object type and pipeline ID. This can be useful for managing access and ensuring that only authorized users can modify pipeline stages.',
    operationId:
      'get-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions',
    request: {
      params: z.object({
        objectTypeId: z
          .string()
          .openapi({
            param: {
              name: 'objectTypeId',
              in: 'path',
              description:
                'The unique identifier of the object type for which the pipeline stage edit permissions are being retrieved.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        pipelineId: z
          .string()
          .openapi({
            param: {
              name: 'pipelineId',
              in: 'path',
              description:
                'The unique identifier of the pipeline whose stage edit permissions are being retrieved.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: PublicPipelineStagePermissionsSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.pipelines.stage_permissions.read'] }],
  })

export const putCrmPipelinesRules202609ObjectTypeIdPipelineIdStageEditPermissionsRoute =
  createRoute({
    method: 'put',
    path: '/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions',
    tags: ['Basic'],
    summary: 'Update permissions',
    description:
      'Update the stage edit permissions for a specific pipeline in your HubSpot account. This endpoint allows you to modify which users or teams have access to edit stages within a specified pipeline. It is useful for managing access control and ensuring that only authorized personnel can make changes to the pipeline stages.',
    operationId:
      'put-/crm/pipelines-rules/2026-09/{objectTypeId}/{pipelineId}/stage-edit-permissions',
    request: {
      params: z.object({
        objectTypeId: z
          .string()
          .openapi({
            param: {
              name: 'objectTypeId',
              in: 'path',
              description: 'The unique identifier of the object type associated with the pipeline.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
        pipelineId: z
          .string()
          .openapi({
            param: {
              name: 'pipelineId',
              in: 'path',
              description:
                'The unique identifier of the pipeline for which stage edit permissions are being updated.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string', example: null },
            },
            example: null,
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: PublicPipelineStagePermissionsUpdateRequestSchema,
            example: null,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'successful operation',
        content: {
          'application/json': { schema: PublicPipelineStagePermissionsSchema, example: null },
        },
      },
      default: ErrorResponse,
    },
    security: [{ oauth2: ['crm.pipelines.stage_permissions.write'] }],
  })
