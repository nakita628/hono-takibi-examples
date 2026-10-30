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
        description:
          "A string indicating the type of refinement, which is 'NUM_OCCURRENCES' by default.",
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
        description: 'A string specifying the set type used for the refinement.',
        example: null,
      }),
    type: z
      .literal('SET_OCCURRENCES')
      .default('SET_OCCURRENCES')
      .openapi({
        description: "A string indicating the type of refinement, which is 'SET_OCCURRENCES'.",
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
        description: 'An integer specifying the amount of time units to offset.',
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
          "A string representing the unit of time for the offset. Valid values include 'MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'QUARTER', and 'YEAR'.",
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
          description:
            'A string that defines the comparison operation to be used in the refinement.',
          example: null,
        }),
      timeOffset: PublicTimeOffsetSchema,
      type: z
        .literal('RELATIVE_COMPARATIVE')
        .default('RELATIVE_COMPARATIVE')
        .openapi({
          description:
            "A string that specifies the type of refinement, with the default value 'RELATIVE_COMPARATIVE'.",
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
          description: 'A string that specifies the type of range being applied.',
          example: null,
        }),
      type: z
        .literal('RELATIVE_RANGED')
        .default('RELATIVE_RANGED')
        .openapi({
          description:
            "A string indicating the type of refinement, with a default value of 'RELATIVE_RANGED'.",
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
            'A string representing the comparison operation to be performed with the timestamp.',
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
            'An integer representing the specific timestamp to be used in the comparison, typically expressed as a Unix timestamp in milliseconds.',
          example: null,
        }),
      type: z
        .literal('ABSOLUTE_COMPARATIVE')
        .default('ABSOLUTE_COMPARATIVE')
        .openapi({
          description:
            "A string representing the type of refinement, which is 'ABSOLUTE_COMPARATIVE' by default.",
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
            'An integer representing the lower bound of the timestamp range, in Unix time format (milliseconds).',
          example: null,
        }),
      rangeType: z
        .string()
        .openapi({
          description: 'A string that specifies the type of range being used in the filter.',
          example: null,
        }),
      type: z
        .literal('ABSOLUTE_RANGED')
        .default('ABSOLUTE_RANGED')
        .openapi({
          description:
            "A string that indicates the type of refine by operation, which is 'ABSOLUTE_RANGED'.",
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
            'An integer representing the upper bound of the timestamp range, in Unix time format (milliseconds).',
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
          "A string that specifies the type of refinement, with a default value of 'ALL_HISTORY'.",
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
        description: "A string indicating the type of time reference, typically set to 'DATE'.",
        example: null,
      }),
    timezoneSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the source of the timezone information.',
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
        description: 'A string specifying the identifier for the timezone.',
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
        description: 'An integer representing the hour part of the current time.',
        example: null,
      }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond part of the current time.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the minute part of the current time.',
        example: null,
      }),
    referenceType: z
      .literal('NOW')
      .default('NOW')
      .openapi({
        description:
          "A string that indicates the type of reference. The default value is 'NOW', and it is used to specify that the reference is to the current time.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the second part of the current time.',
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
      .openapi({ description: 'An integer representing the day of the week.', example: null }),
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the hour of the day.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the millisecond of the second.',
        example: null,
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the minute of the hour.', example: null }),
    referenceType: z
      .literal('WEEK')
      .default('WEEK')
      .openapi({
        description:
          "A string indicating the type of reference, which is 'WEEK' for this component.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the second of the minute.', example: null }),
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
      .literal('FISCAL_QUARTER')
      .default('FISCAL_QUARTER')
      .openapi({
        description: "A string indicating the type of reference, which is 'FISCAL_QUARTER'.",
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
      .openapi({
        description: 'An integer representing the month of the fiscal year.',
        example: null,
      }),
    referenceType: z
      .literal('FISCAL_YEAR')
      .default('FISCAL_YEAR')
      .openapi({
        description: "A string that indicates the type of reference, which is 'FISCAL_YEAR'.",
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
        description: "A string that specifies the type of reference, which is 'YEAR' by default.",
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
        description: "A string indicating the type of reference, with a default value of 'MONTH'.",
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
        description: 'An integer representing the number of days to offset.',
        example: null,
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of hours to offset.',
        example: null,
      }),
    milliseconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of milliseconds to offset.',
        example: null,
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of minutes to offset.',
        example: null,
      }),
    months: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of months to offset.',
        example: null,
      }),
    quarters: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of quarters to offset.',
        example: null,
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of seconds to offset.',
        example: null,
      }),
    weeks: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of weeks to offset.',
        example: null,
      }),
    years: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of years to offset.',
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
          "An object that defines the reference point for the indexed time, which can be one of several predefined references like 'now', 'today', or a specific fiscal period.",
        example: null,
      }),
    offset: PublicIndexOffsetSchema.exactOptional(),
    timeType: z
      .literal('INDEXED')
      .default('INDEXED')
      .openapi({
        description:
          "A string indicating the type of time point, with a default value of 'INDEXED'.",
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
      .openapi({ description: 'A string specifying the ID of the timezone.', example: null }),
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
        description: 'A string representing the property that is used to reference the time.',
        example: null,
      }),
    referenceType: z
      .string()
      .openapi({
        description:
          "A string indicating the type of reference, with a default value of 'PROPERTY_REFERENCE'.",
        example: null,
      }),
    timeType: z
      .literal('PROPERTY_REFERENCED')
      .default('PROPERTY_REFERENCED')
      .openapi({
        description:
          "A string indicating the type of time reference. It defaults to 'PROPERTY_REFERENCE'.",
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
      .openapi({ description: 'A string specifying the ID of the timezone.', example: null }),
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
          'A boolean indicating whether to include objects that have no value set for the time point.',
        example: null,
      }),
    operationType: z
      .literal('TIME_POINT')
      .default('TIME_POINT')
      .openapi({
        description: "A string indicating the type of operation, which is 'TIME_POINT' by default.",
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
        description:
          'A string representing the parser used for the property in the time point operation.',
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
          'An object representing the specific time point used in the operation. It can be one of several types, such as a date point, indexed time point, or property-referenced time.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'A string indicating the specific type of the time point operation.',
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
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    lowerBoundEndpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string specifying the behavior of the lower bound endpoint in the time range.',
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
          'An object representing the lower bound time point of the range, which can be a date point, indexed time point, or property-referenced time.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description:
          'A string indicating the operation type, which is related to time range operations.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the time range operation.',
        example: null,
      }),
    propertyParser: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that defines the property parser used in the operation.',
        example: null,
      }),
    type: z
      .literal('TIME_RANGED')
      .default('TIME_RANGED')
      .openapi({
        description: "A string indicating the type of operation, which is 'TIME_RANGED'.",
        example: null,
      }),
    upperBoundEndpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string specifying the behavior of the upper bound endpoint in the time range.',
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
          'An object representing the upper bound time point of the range, which can be a date point, indexed time point, or property-referenced time.',
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
            description:
              'A string representing the operator used to combine the filters within the branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('OR')
          .default('OR')
          .openapi({
            description:
              "A string indicating the type of filter branch, which is 'OR' for this component.",
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
              "An array of nested filter branches, allowing for the combination of multiple logical conditions within the 'OR' branch.",
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
              "An array of individual filters that are part of the 'OR' branch. Each filter represents a specific condition that can be evaluated.",
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
            description: 'A string representing the operator used within the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('NOT_ALL')
          .default('NOT_ALL')
          .openapi({
            description:
              "A string that specifies the type of filter branch. The default value is 'NOT_ALL'.",
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
              'An array of filter branches that can include various types such as PublicOrFilterBranch, PublicAndFilterBranch, and others, allowing for nested filtering logic.',
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
              'An array of filters that can include various types such as PublicPropertyFilter, PublicAssociationInListFilter, and others, used to apply specific conditions to the data.',
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
            description: 'A string representing the operator used in the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('NOT_ANY')
          .default('NOT_ANY')
          .openapi({
            description:
              "A string that specifies the type of filter branch. Default value is 'NOT_ANY'.",
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
              "An array of filter branches that can include various types such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', 'PublicNotAllFilterBranch', 'PublicNotAnyFilterBranch', 'PublicRestrictedFilterBranch', 'PublicUnifiedEventsFilterBranch', and 'PublicAssociationFilterBranch'.",
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
              "An array of filters that can include types like 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', 'PublicCtaAnalyticsFilter', 'PublicEventAnalyticsFilter', 'PublicFormSubmissionFilter', 'PublicFormSubmissionOnPageFilter', 'PublicIntegrationEventFilter', 'PublicEmailSubscriptionFilter', 'PublicCommunicationSubscriptionFilter', 'PublicSurveyMonkeyFilter', 'PublicSurveyMonkeyValueFilter', 'PublicWebinarFilter', 'PublicEmailEventFilter', 'PublicPrivacyAnalyticsFilter', 'PublicAdsSearchFilter', 'PublicAdsTimeFilter', 'PublicInListFilter', 'PublicUnifiedEventsFilter', and 'PublicConstantFilter'.",
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
              "A string indicating the type of filter branch. The default value is 'RESTRICTED'.",
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
              "An array of nested filter branches, which can include various types such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', and others.",
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
              "An array of filters applied within the branch, which can include different filter types like 'PublicPropertyFilter', 'PublicAssociationInListFilter', and more.",
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
              'An optional refinement criterion that can be applied to coalesce event data. It can be one of several predefined refinement types.',
            example: null,
          }),
        eventTypeId: z
          .string()
          .openapi({
            description: 'A string that specifies the ID of the event type being filtered.',
            example: null,
          }),
        filterBranchOperator: z
          .string()
          .openapi({
            description:
              'A string that specifies the logical operator used to combine the filters and filter branches within this branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('UNIFIED_EVENTS')
          .default('UNIFIED_EVENTS')
          .openapi({
            description:
              "A string indicating the type of filter branch. Default value is 'UNIFIED_EVENTS'.",
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
              'An array of nested filter branches, allowing for complex filter logic. Each item can be one of several filter branch types.',
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
              'An array of filters applied to the events. Each filter can be one of several predefined filter types.',
            example: null,
          }),
        operator: z
          .enum(['HAS_COMPLETED', 'HAS_NOT_COMPLETED'])
          .openapi({
            description:
              "A string representing the operation to be performed on the events. Valid values are 'HAS_COMPLETED' and 'HAS_NOT_COMPLETED'.",
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
              'An optional refinement criterion used to prune event data. It can be one of several predefined refinement types.',
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
            description: 'A string that categorizes the type of association being filtered.',
            example: null,
          }),
        associationTypeId: z
          .int32()
          .openapi({
            description: 'An integer representing the type ID of the association.',
            example: null,
          }),
        filterBranchOperator: z
          .string()
          .openapi({
            description:
              'A string that defines the logical operator for combining filters within this branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('ASSOCIATION')
          .default('ASSOCIATION')
          .openapi({
            description:
              "A string indicating the type of filter branch, which is 'ASSOCIATION' for this component.",
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
              'An array of nested filter branches, allowing for complex logical groupings of filters.',
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
              'An array of filters applied within this branch, each defining specific criteria for filtering associations.',
            example: null,
          }),
        objectTypeId: z
          .string()
          .openapi({
            description:
              'A string representing the type ID of the object involved in the association.',
            example: null,
          }),
        operator: z
          .string()
          .openapi({
            description: 'A string that specifies the operator used in the filter logic.',
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
        description: "A string indicating the type of operation. The default value is 'BOOLEAN'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
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
          'A boolean indicating whether to include objects that do not have a value set for the property.',
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
        description: 'A number representing the value involved in the operation.',
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
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    operationType: z
      .literal('STRING')
      .default('STRING')
      .openapi({
        description: "A string indicating the type of operation. The default value is 'STRING'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the value involved in the operation.',
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
          'A boolean indicating whether objects with no value set for the property should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('DATETIME')
      .default('DATETIME')
      .openapi({
        description:
          "A string representing the type of operation being performed. The default value is 'DATE_TIME'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string specifying the operator used in the operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the operation requires conversion based on time zones.',
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
          'An integer representing a Unix timestamp in milliseconds, used as a reference point for the operation.',
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
        description:
          'A boolean indicating whether to include objects that do not have a value set for the property.',
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
        description:
          'An integer representing the lower bound of the date range, formatted as an int64.',
        example: null,
      }),
    operationType: z
      .literal('RANGED_DATE')
      .default('RANGED_DATE')
      .openapi({
        description:
          "A string that indicates the type of operation, which is 'RANGED_DATE' by default.",
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
        description:
          'An integer representing the upper bound of the date range, formatted as an int64.',
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
        description: 'A string specifying the name of the property to be compared.',
        example: null,
      }),
    defaultComparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the default value to use in the comparison if no other value is set.',
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
      .literal('COMPARATIVE_PROPERTY_UPDATED')
      .default('COMPARATIVE_PROPERTY_UPDATED')
      .openapi({
        description: "A string indicating the type of operation. Defaults to 'COMPARATIVE_STRING'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the comparison.',
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
          'A string representing the default value to be used in the comparison if no specific value is set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that do not have a value set for the property being compared.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_DATE')
      .default('COMPARATIVE_DATE')
      .openapi({
        description:
          "A string indicating the type of operation, with a default value of 'COMPARATIVE_DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the comparison.',
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
          'A boolean indicating whether to include objects that do not have a value set for the property being filtered.',
        example: null,
      }),
    numberOfDays: z
      .int32()
      .openapi({
        description: 'An integer specifying the number of days for the rolling date range.',
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
        description: 'A string representing the operator used in the filter operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the operation requires time zone conversion.',
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
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    numberOfDays: z
      .int32()
      .openapi({
        description:
          'An integer specifying the number of days over which the rolling operation is applied.',
        example: null,
      }),
    operationType: z
      .literal('ROLLING_PROPERTY_UPDATED')
      .default('ROLLING_PROPERTY_UPDATED')
      .openapi({
        description:
          "A string indicating the type of operation, defaulting to 'ROLLING_PROPERTY_UPDATED'.",
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
        description:
          "A string indicating the type of operation, with a default value of 'ENUMERATION'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the enumeration operation.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the enumeration values involved in the operation.',
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
          'A boolean indicating whether objects with no value set for the property should be included in the operation. This property is required.',
        example: null,
      }),
    operationType: z
      .literal('ALL_PROPERTY')
      .default('ALL_PROPERTY')
      .openapi({
        description:
          'A string indicating the type of operation being performed. This property is required.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operator used in the filter operation. This property is required.',
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
          'A boolean indicating whether to include objects that have no value set for the property.',
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
        description: 'An integer specifying the lower bound of the range.',
        example: null,
      }),
    operationType: z
      .literal('NUMBER_RANGED')
      .default('NUMBER_RANGED')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'RANGED_NUMBER' by default.",
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
        description: 'An integer specifying the upper bound of the range.',
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
          "A string indicating the type of operation. The default value is 'MULTI_STRING'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings representing the values involved in the operation.',
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
        description: 'An integer representing the day component of the date.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that do not have a value set for the date property.',
        example: null,
      }),
    month: z
      .string()
      .openapi({
        description: 'An integer representing the month component of the date.',
        example: null,
      }),
    operationType: z
      .literal('DATE')
      .default('DATE')
      .openapi({
        description: 'A string indicating the type of operation, specifically for date properties.',
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
        description: 'An integer representing the year component of the date.',
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
          'A string indicating the start of the fiscal year, used if the operation involves fiscal year calculations.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the calendar date property.',
        example: null,
      }),
    operationType: z
      .literal('CALENDAR_DATE')
      .default('CALENDAR_DATE')
      .openapi({
        description:
          "A string indicating the type of operation. The default value is 'CALENDAR_DATE'.",
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
        description:
          "A string representing the unit of time used in the operation, such as 'DAY', 'WEEK', 'MONTH', or 'YEAR'.",
        example: null,
      }),
    timeUnitCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the count of the time units involved in the operation.',
        example: null,
      }),
    useFiscalYear: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether to use the fiscal year in the operation.',
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
          'A string representing the default value to use in the comparison if the property value is not set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property being compared.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_STRING')
      .default('COMPARATIVE_STRING')
      .openapi({
        description: "A string indicating the type of operation. Defaults to 'COMPARATIVE_STRING'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the comparison.',
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
        description:
          'The type of filter being applied. This is a string value that specifies the kind of filter operation.',
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
          'The specific operation or condition used in the filter. This is a string value that defines how the filter should be applied to the property.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description:
          'The name of the property to which the filter is applied. This is a string value representing the property name.',
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
        description:
          'A string that categorizes the type of association, providing additional context for the filter.',
        example: null,
      }),
    associationTypeId: z
      .int32()
      .openapi({
        description:
          'An integer that identifies the specific type of association that is being filtered.',
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
          'An optional refinement criterion that can be applied to the filter. It can be one of several types, such as PublicNumOccurrencesRefineBy or PublicRelativeComparativeTimestampRefineBy.',
        example: null,
      }),
    filterType: z
      .literal('ASSOCIATION')
      .default('ASSOCIATION')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. The default value is 'IN_LIST'.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the list to which the filter is applied.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string that defines the operator used in the filter. This determines how the filter criteria are applied.',
        example: null,
      }),
    toObjectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that describes the type of object to which the association is related.',
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that specifies the type ID of the object to which the association is related.',
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
          'An optional property that defines the method for refining the filter by coalescing multiple conditions. It can be one of several predefined refine types.',
        example: null,
      }),
    enableTracking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean value that indicates whether tracking is enabled for the page view analytics filter.',
        example: null,
      }),
    filterType: z
      .literal('PAGE_VIEW')
      .default('PAGE_VIEW')
      .openapi({
        description:
          'A string representing the type of filter being applied. This property determines the category of the filter used in the analytics.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string indicating the operator used in the filter, which defines how the filter criteria are applied.',
        example: null,
      }),
    pageUrl: z
      .string()
      .openapi({
        description:
          'A string representing the specific URL of the page to be tracked or analyzed. This property is used to filter analytics data based on page URL.',
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
          'An optional property that specifies the method for refining the filter by pruning conditions. It can be one of several predefined refine types.',
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
          'An optional refinement criterion that can be one of several types, such as number of occurrences or time-based refinements.',
        example: null,
      }),
    ctaName: z
      .string()
      .openapi({
        description: 'The name of the Call-To-Action being filtered for in the analytics data.',
        example: null,
      }),
    filterType: z
      .literal('CTA')
      .default('CTA')
      .openapi({
        description: "A string indicating the type of filter being applied. Defaults to 'CTA'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operation to be performed by the filter.',
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
          'An optional refinement criterion used to further narrow down the filter results, similar to coalescingRefineBy.',
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
          'An optional property that allows for additional refinement of the filter criteria using a coalescing method. It can be one of several predefined refinement types.',
        example: null,
      }),
    eventId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the event to be filtered. This property is required.',
        example: null,
      }),
    filterType: z
      .literal('EVENT')
      .default('EVENT')
      .openapi({
        description:
          'A string representing the type of filter being applied. This property is required.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string that specifies the operator used in the filter. This property is required.',
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
          'An optional property that allows for additional refinement of the filter criteria using a pruning method. It can be one of several predefined refinement types.',
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
          'An optional refinement criterion used to coalesce form submissions based on specific conditions. It can be one of several types, similar to pruningRefineBy.',
        example: null,
      }),
    filterType: z
      .literal('FORM_SUBMISSION')
      .default('FORM_SUBMISSION')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. The default value is 'FORM_SUBMISSION'.",
        example: null,
      }),
    formId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the form to which the filter applies.',
        example: null,
      }),
    operator: z
      .enum(['FILLED_OUT', 'NOT_FILLED_OUT'])
      .openapi({
        description:
          "A string that defines the operation to be performed by the filter. Valid values include 'FILLED_OUT' and 'NOT_FILLED_OUT'.",
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
          'An optional refinement criterion that further specifies the conditions for pruning form submissions. It can be one of several types, such as number of occurrences or timestamp comparisons.',
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
          'An optional refinement criterion used to coalesce results based on specific conditions, similar to pruningRefineBy.',
        example: null,
      }),
    filterType: z
      .literal('FORM_SUBMISSION_ON_PAGE')
      .default('FORM_SUBMISSION_ON_PAGE')
      .openapi({
        description: "The type of filter applied, which is fixed as 'FORM_SUBMISSION'.",
        example: null,
      }),
    formId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique identifier of the form to be filtered.',
        example: null,
      }),
    operator: z
      .enum(['FILLED_OUT', 'NOT_FILLED_OUT'])
      .openapi({
        description:
          "The operation to be performed by the filter. It is a string and can have values such as 'FILLED_OUT' or 'NOT_FILLED_OUT'.",
        example: null,
      }),
    pageId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the page where the form submission occurred.',
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
          'An optional property that allows further refinement of the filter using various criteria such as occurrences or time ranges.',
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
          'Defines the operation to be applied to the property for filtering. It is a string value.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description:
          'Represents the specific property of the event that the filter is targeting. It is a string value.',
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
          'A string that uniquely identifies the type of event to be filtered. This property is required.',
        example: null,
      }),
    filterLines: z
      .array(PublicEventFilterMetadataSchema)
      .openapi({
        description:
          'An array of filter lines that define additional filtering criteria. Each filter line is an object that specifies conditions for filtering events.',
        example: null,
      }),
    filterType: z
      .literal('INTEGRATION_EVENT')
      .default('INTEGRATION_EVENT')
      .openapi({
        description:
          'A string representing the type of filter being applied. This property is required.',
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
          "A string indicating the type of filter. The default value is 'EMAIL_SUBSCRIPTION'.",
        example: null,
      }),
    subscriptionIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings representing the IDs of the subscriptions to filter by.',
        example: null,
      }),
    subscriptionType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the type of subscription to filter by.',
        example: null,
      }),
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
            'An array of strings representing the opt-in states that are accepted for the subscription.',
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
          description: 'A string indicating the communication channel for the subscription.',
          example: null,
        }),
      filterType: z
        .literal('COMMUNICATION_SUBSCRIPTION')
        .default('COMMUNICATION_SUBSCRIPTION')
        .openapi({
          description:
            "A string representing the type of filter. Defaults to 'COMMUNICATION_SUBSCRIPTION'.",
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
        .openapi({
          description: 'A string indicating the type of subscription being filtered.',
          example: null,
        }),
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
          "A string representing the type of filter. The default value is 'SURVEY_MONKEY_VALUE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that specifies the operation to be performed for the filter.',
        example: null,
      }),
    surveyId: z
      .string()
      .openapi({
        description:
          'A string that uniquely identifies the survey from which the data is being filtered.',
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
        description:
          "A string that specifies the type of filter being applied. Default value is 'SURVEY_MONKEY_VALUE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string that specifies the operator used in the filter, determining how the survey data should be evaluated against the specified criteria.',
        example: null,
      }),
    surveyAnswerColId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the column identifier for the survey answer being filtered.',
        example: null,
      }),
    surveyAnswerRowId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the row identifier for the survey answer being filtered.',
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
        description:
          'A string indicating the specific question within the survey that the filter is targeting.',
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
          'An object that defines the operation for comparing values, which can be one of several types such as boolean, number, string, date, or enumeration operations.',
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
        description:
          "A string that specifies the type of filter being applied. The default value is 'WEBINAR'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operation or condition applied by the filter.',
        example: null,
      }),
    webinarId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the webinar to which the filter is applied.',
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
        description: 'A string representing the application ID associated with the email event.',
        example: null,
      }),
    clickUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the URL that is clicked in the email event.',
        example: null,
      }),
    emailId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the email associated with the event.',
        example: null,
      }),
    filterType: z
      .literal('EMAIL_EVENT')
      .default('EMAIL_EVENT')
      .openapi({
        description:
          'A string representing the type of filter being applied. This property is required.',
        example: null,
      }),
    level: z
      .string()
      .openapi({
        description: 'A string indicating the level of the email event filter.',
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
        description: 'A string that specifies the operator used in the filter condition.',
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
          'An object that provides additional criteria for refining the filter. It can be one of several types such as PublicNumOccurrencesRefineBy, PublicSetOccurrencesRefineBy, etc.',
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
          "A string representing the type of filter. The default value is 'PRIVACY_ANALYTICS'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operator used in the filter condition.',
        example: null,
      }),
    privacyName: z
      .string()
      .openapi({
        description: 'A string that specifies the name of the privacy setting being filtered.',
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
        description:
          'The advertising network being targeted by the filter. This is a string value indicating the ad network.',
        example: null,
      }),
    entityType: z
      .string()
      .openapi({
        description:
          'The type of entity to which the filter is applied. This is a string value representing the entity type.',
        example: null,
      }),
    filterType: z
      .literal('ADS_SEARCH')
      .default('ADS_SEARCH')
      .openapi({
        description:
          'The type of filter being applied. This is a string value that defines the category or nature of the filter.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'The operator used to apply the filter. This is a string value that specifies the logical operation for the filter.',
        example: null,
      }),
    searchTermType: z
      .string()
      .openapi({
        description:
          'The type of search term used in the filter. This is a string value that specifies how the search term is interpreted.',
        example: null,
      }),
    searchTerms: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings representing the search terms used in the filter.',
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
          "A string representing the type of filter being applied. The default value is 'ADS_TIME'.",
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
          'An optional property that allows further refinement of the filter criteria based on time. It can be one of several types, such as relative or absolute time comparisons.',
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
        description: 'A string representing the unique identifier for the filter metadata.',
        example: null,
      }),
    inListType: z
      .string()
      .openapi({
        description: 'A string indicating the type of list that the filter applies to.',
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
        description: "A string indicating the type of filter. Defaults to 'IN_LIST'.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the list to check for membership, represented as a string.',
        example: null,
      }),
    metadata: PublicInListFilterMetadataSchema.exactOptional(),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the filter.',
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
          'An optional refinement condition used to coalesce events based on specific criteria, such as number of occurrences or time range.',
        example: null,
      }),
    eventTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier for the event type being filtered.',
        example: null,
      }),
    filterLines: z
      .array(PublicEventFilterMetadataSchema)
      .openapi({
        description:
          'An array of filters that are applied to the events. Each filter specifies additional criteria for refining the event data.',
        example: null,
      }),
    filterType: z
      .literal('UNIFIED_EVENTS')
      .default('UNIFIED_EVENTS')
      .openapi({
        description: "A string that specifies the type of filter, defaulting to 'UNIFIED_EVENTS'.",
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
          'An optional refinement condition used to prune the events based on specific criteria, such as number of occurrences or time range.',
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
          "A string that specifies the type of filter. For this component, it is a constant value indicating the filter's nature.",
        example: null,
      }),
    shouldAccept: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the filter condition should be accepted or not.',
        example: null,
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that represents the origin or context of the filter, providing additional information about where or how the filter is applied.',
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
            description: 'A string representing the operator used within this filter branch.',
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
              "An array of nested filter branches. Each item can be a branch of various types, such as 'OR', 'AND', 'NOT_ALL', etc.",
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
              'An array of filters that apply to this branch. Each filter can be of various types, such as property filters, event filters, or subscription filters.',
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

type PublicListFolderType = {
  childLists: number[]
  childNodes: PublicListFolderType[]
  createdAt?: string
  id: string
  name?: string
  parentFolderId: string
  updatedAt?: string
  updatedContentsAt?: string
  userId?: number
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

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor to retrieve the next page of results. It is returned as the `paging.next.after` JSON property in a paged response.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides a direct link to the next page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['after'],
    description:
      'Specifies the paging information needed to retrieve the next set of results in a paginated API response',
    example: null,
  })
  .openapi('NextPage')

const PreviousPageSchema = z
  .object({
    before: z
      .string()
      .openapi({
        description:
          'A string token used to identify the position in the list before the current page, enabling navigation to the previous page.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides a direct link to the previous page of results.',
        example: null,
      }),
  })
  .openapi({
    required: ['before'],
    description:
      'specifies the paging information needed to retrieve the previous set of results in a paginated API response',
    example: null,
  })
  .openapi('PreviousPage')

const PagingSchema = z
  .object({ next: NextPageSchema.exactOptional(), prev: PreviousPageSchema.exactOptional() })
  .openapi({
    description:
      'Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.',
    example: null,
    required: [],
  })
  .openapi('Paging')

const JoinTimeAndRecordIdSchema = z
  .object({
    membershipTimestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp indicating when the record was added to the list. It is represented as a string in date-time format.',
        example: null,
      }),
    recordId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the record within the list. It is represented as a string.',
        example: null,
      }),
  })
  .openapi({ required: ['membershipTimestamp', 'recordId'], example: null })
  .openapi('JoinTimeAndRecordId')

const ApiCollectionResponseJoinTimeAndRecordIdSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(JoinTimeAndRecordIdSchema)
      .openapi({
        description: 'An array of objects, each containing join time and record ID information.',
        example: null,
      }),
    total: z
      .preprocess(
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
        description: 'An integer representing the total number of results available.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('ApiCollectionResponseJoinTimeAndRecordId')

const PublicObjectListSearchResultSchema = z
  .object({
    additionalProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional properties of the list, with each property represented as a string.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the list was created, in ISO 8601 format.',
        example: null,
      }),
    createdById: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the user who created the list, represented as a string.',
        example: null,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the list was deleted, in ISO 8601 format.',
        example: null,
      }),
    filtersUpdatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time when the list's filters were last updated, in ISO 8601 format.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'The unique identifier for the list, represented as a string.',
        example: null,
      }),
    listVersion: z
      .int32()
      .openapi({ description: 'An integer indicating the version of the list.', example: null }),
    name: z
      .string()
      .openapi({ description: 'The name of the list, represented as a string.', example: null }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the type of object associated with the list, represented as a string.',
        example: null,
      }),
    processingStatus: z
      .string()
      .openapi({
        description: 'A string representing the current processing status of the list.',
        example: null,
      }),
    processingType: z
      .string()
      .openapi({
        description: 'A string indicating the type of processing applied to the list.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the list was last updated, in ISO 8601 format.',
        example: null,
      }),
    updatedById: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the user who last updated the list, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'additionalProperties',
      'listId',
      'listVersion',
      'name',
      'objectTypeId',
      'processingStatus',
      'processingType',
    ],
    example: null,
  })
  .openapi('PublicObjectListSearchResult')

const ApiCollectionResponsePublicObjectListSearchResultSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(PublicObjectListSearchResultSchema)
      .openapi({
        description:
          'An array of PublicObjectListSearchResult objects representing the individual search results.',
        example: null,
      }),
    total: z
      .preprocess(
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
          'An integer representing the total number of results available in the search, formatted as a 64-bit integer.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('ApiCollectionResponsePublicObjectListSearchResult')

const RecordListMembershipSchema = z
  .object({
    firstAddedTimestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the record was first added to the list, in ISO 8601 format.',
        example: null,
      }),
    isPublicList: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A boolean indicating whether the list is public.', example: null }),
    lastAddedTimestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the record was last added to the list, in ISO 8601 format.',
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'The unique identifier of the list. It is a string value.',
        example: null,
      }),
    listVersion: z
      .int32()
      .openapi({
        description: 'The version number of the list, represented as an integer.',
        example: null,
      }),
  })
  .openapi({
    required: ['firstAddedTimestamp', 'lastAddedTimestamp', 'listId', 'listVersion'],
    example: null,
  })
  .openapi('RecordListMembership')

const ApiCollectionResponseRecordListMembershipSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(RecordListMembershipSchema)
      .openapi({
        description:
          'An array of record list memberships, each detailing the membership of a record in a list.',
        example: null,
      }),
    total: z
      .preprocess(
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
          'An integer representing the total number of record list memberships available.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('ApiCollectionResponseRecordListMembership')

const RecordIdInputSchema = z
  .object({
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the object type associated with the record.',
        example: null,
      }),
    recordId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the record.',
        example: null,
      }),
  })
  .openapi({ required: ['objectTypeId', 'recordId'], example: null })
  .openapi('RecordIdInput')

const BatchInputRecordIdInputSchema = z
  .object({
    inputs: z
      .array(RecordIdInputSchema)
      .openapi({
        description:
          'An array of record ID inputs. Each element is a string representing a unique record ID to be processed in the batch operation.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchInputRecordIdInput')

const RecordIdWithMembershipsSchema = z
  .object({
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The identifier for the type of object the record belongs to, represented as a string.',
        example: null,
      }),
    recordId: z
      .string()
      .openapi({
        description: 'The unique identifier for the record, represented as a string.',
        example: null,
      }),
    recordListMemberships: z
      .array(RecordListMembershipSchema)
      .openapi({
        description:
          'An array of memberships indicating the lists the record is part of, each containing details like list ID, version, and timestamps of when the record was added.',
        example: null,
      }),
  })
  .openapi({ required: ['objectTypeId', 'recordId', 'recordListMemberships'], example: null })
  .openapi('RecordIdWithMemberships')

const BatchResponseRecordIdWithMembershipsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the batch operation was completed, in ISO 8601 format.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An object containing additional links related to the batch operation.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the batch operation was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(RecordIdWithMembershipsSchema)
      .openapi({
        description:
          'An array of results from the batch operation, each containing record IDs and their associated memberships.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch operation started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseRecordIdWithMemberships')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing a specific error code that identifies the type of error.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing additional context about the error, represented as a map of strings to arrays of strings, which can include specific parameters or values related to the error.',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A string indicating the location where the error occurred, such as 'query', 'header', or 'body'.",
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable description of the error.',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An object providing additional categorization of the error, which may contain further details.',
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

const StandardErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({
        description: 'A string indicating the general category of the error.',
        example: null,
      }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .openapi({
        description:
          'An object containing additional context about the error, represented as a map of strings to arrays of strings.',
        example: null,
      }),
    errors: z
      .array(ErrorDetailSchema)
      .openapi({
        description:
          'An array of ErrorDetail objects that provide more specific details about individual errors.',
        example: null,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies the error instance.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing related links, represented as a map of strings to strings.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string containing a human-readable explanation of the error.',
        example: null,
      }),
    status: z
      .string()
      .openapi({
        description: 'A string representing the HTTP status code associated with the error.',
        example: null,
      }),
    subCategory: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An object providing additional categorization of the error.',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'context', 'errors', 'links', 'message', 'status'],
    description: 'Ye olde error',
    example: null,
  })
  .openapi('StandardError')

const BatchResponseRecordIdWithMembershipsWithErrorsSchema = z
  .object({
    completedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch process was completed, in ISO 8601 format.',
        example: null,
      }),
    errors: z
      .array(StandardErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of errors that occurred during the batch process. Each item in the array is a reference to a StandardError schema.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing additional links related to the batch process. Each key-value pair represents a link name and its URL.',
        example: null,
      }),
    numErrors: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of errors encountered during the batch process.',
        example: null,
      }),
    requestedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the batch process was requested, in ISO 8601 format.',
        example: null,
      }),
    results: z
      .array(RecordIdWithMembershipsSchema)
      .openapi({
        description:
          'An array of results containing record IDs with their memberships. Each item in the array is a reference to a RecordIdWithMemberships schema.',
        example: null,
      }),
    startedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the batch process started, in ISO 8601 format.',
        example: null,
      }),
    status: z
      .enum(['CANCELED', 'COMPLETE', 'PENDING', 'PROCESSING'])
      .openapi({
        description:
          "The current status of the batch process. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.",
        example: null,
      }),
  })
  .openapi({ required: ['completedAt', 'results', 'startedAt', 'status'], example: null })
  .openapi('BatchResponseRecordIdWithMembershipsWithErrors')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .openapi({ description: 'A string indicating the category of the error.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing additional context about the error, represented as a map of key-value pairs.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the error instance, used for tracking and debugging purposes.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of ErrorDetail objects, each providing additional information about specific errors that occurred.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing related links, represented as a map of link names to URLs.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description: 'A string that provides a human-readable description of the error.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An object representing a more specific classification of the error within its category.',
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

const ListAllRequestSchema = z
  .object({
    additionalProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing additional properties to include in the list retrieval.',
        example: null,
      }),
    after: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string used as a paging cursor token to retrieve the next set of results.',
        example: null,
      }),
    count: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer specifying the number of results to retrieve.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier for the object type of the lists.',
        example: null,
      }),
    processingTypes: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings specifying the types of processing to apply to the request.',
        example: null,
      }),
  })
  .openapi({ required: ['additionalProperties', 'processingTypes'], example: null })
  .openapi('ListAllRequest')

const PublicListPermissionsSchema = z
  .object({
    teamsWithEditAccess: z
      .array(z.int32().openapi({ example: null }))
      .openapi({
        description:
          'An array of integers representing the IDs of teams that have edit access to the list.',
        example: null,
      }),
    usersWithEditAccess: z
      .array(z.int32().openapi({ example: null }))
      .openapi({
        description:
          'An array of integers representing the IDs of users that have edit access to the list.',
        example: null,
      }),
  })
  .openapi({ required: ['teamsWithEditAccess', 'usersWithEditAccess'], example: null })
  .openapi('PublicListPermissions')

const PublicMembershipSettingsSchema = z
  .object({
    includeUnassigned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether to include unassigned records in the membership settings.',
        example: null,
      }),
    membershipTeamId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the team associated with the membership settings.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('PublicMembershipSettings')

const ListCreateRequestSchema = z
  .object({
    customProperties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing custom properties for the list. These properties allow for additional customization of the list.',
        example: null,
      }),
    filterBranch: z
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
          'An object that defines the filter criteria for the list. It determines which records are included in the list based on specified conditions.',
        example: null,
      }),
    listFolderId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A string representing the ID of the folder where the list will be stored. This helps in organizing lists into folders.',
        example: null,
      }),
    listPermissions: PublicListPermissionsSchema.exactOptional(),
    membershipSettings: PublicMembershipSettingsSchema.exactOptional(),
    name: z
      .string()
      .openapi({
        description:
          'A string representing the name of the list. This is used to identify the list within the system.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string indicating the type of objects that the list will contain. This helps in categorizing the list based on the object type.',
        example: null,
      }),
    processingType: z
      .string()
      .openapi({
        description:
          'A string that specifies the processing type of the list. It defines how the list is processed within the system.',
        example: null,
      }),
  })
  .openapi({ required: ['name', 'objectTypeId', 'processingType'], example: null })
  .openapi('ListCreateRequest')

const PublicObjectListSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the list was created, in ISO 8601 format.',
        example: null,
      }),
    createdById: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the user who created the list, represented as a string.',
        example: null,
      }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the list was deleted, in ISO 8601 format.',
        example: null,
      }),
    filterBranch: z
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
          'An object representing the filter branch applied to the list, which can be one of several types of filter branches.',
        example: null,
      }),
    filtersUpdatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date and time when the list's filters were last updated, in ISO 8601 format.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'The unique identifier for the list, represented as a string.',
        example: null,
      }),
    listPermissions: PublicListPermissionsSchema.exactOptional(),
    listVersion: z
      .int32()
      .openapi({ description: 'An integer indicating the version of the list.', example: null }),
    membershipSettings: PublicMembershipSettingsSchema.exactOptional(),
    name: z
      .string()
      .openapi({ description: 'The name of the list, represented as a string.', example: null }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The unique identifier for the type of object associated with the list, represented as a string.',
        example: null,
      }),
    processingStatus: z
      .string()
      .openapi({
        description: 'A string representing the current processing status of the list.',
        example: null,
      }),
    processingType: z
      .string()
      .openapi({
        description: 'A string indicating the type of processing applied to the list.',
        example: null,
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer representing the size of the list.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the list was last updated, in ISO 8601 format.',
        example: null,
      }),
    updatedById: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the user who last updated the list, represented as a string.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'listId',
      'listVersion',
      'name',
      'objectTypeId',
      'processingStatus',
      'processingType',
    ],
    example: null,
  })
  .openapi('PublicObjectList')

const ListCreateResponseSchema = z
  .object({ list: PublicObjectListSchema })
  .openapi({ required: ['list'], example: null })
  .openapi('ListCreateResponse')

const ListFetchResponseSchema = z
  .object({ list: PublicObjectListSchema })
  .openapi({ required: ['list'], example: null })
  .openapi('ListFetchResponse')

const ListFilterUpdateRequestSchema = z
  .object({
    filterBranch: z
      .xor([
        PublicOrFilterBranchSchema,
        PublicAndFilterBranchSchema,
        PublicNotAllFilterBranchSchema,
        PublicNotAnyFilterBranchSchema,
        PublicRestrictedFilterBranchSchema,
        PublicUnifiedEventsFilterBranchSchema,
        PublicAssociationFilterBranchSchema,
      ])
      .openapi({
        description:
          'A complex object that defines the structure and logic of the filters to be applied to the list. It can include various types of filter branches and filters, allowing for detailed and specific filtering criteria.',
        example: null,
      }),
  })
  .openapi({ required: ['filterBranch'], example: null })
  .openapi('ListFilterUpdateRequest')

const ListFolderCreateRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'A string representing the name of the folder to be created.',
        example: null,
      }),
    parentFolderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the parent folder under which the new folder will be created.',
        example: null,
      }),
  })
  .openapi({ required: ['name'], example: null })
  .openapi('ListFolderCreateRequest')

const PublicListFolderSchema: z.ZodType<PublicListFolderType> = z
  .lazy(() =>
    z
      .object({
        childLists: z
          .array(z.int32().openapi({ example: null }))
          .openapi({
            description:
              'An array of strings, each representing the unique identifier of a list that is a direct child of this folder.',
            example: null,
          }),
        childNodes: z
          .array(PublicListFolderSchema)
          .openapi({
            description:
              'An array of strings, each representing the unique identifier of a child node, which could be either a folder or a list.',
            example: null,
          }),
        createdAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'The date and time when the folder was created, in ISO 8601 format.',
            example: null,
          }),
        id: z
          .string()
          .openapi({
            description: 'The unique identifier for the folder, represented as a string.',
            example: null,
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the folder, represented as a string.',
            example: null,
          }),
        parentFolderId: z
          .string()
          .openapi({
            description:
              'The unique identifier of the parent folder, represented as a string. This indicates the hierarchical structure of folders.',
            example: null,
          }),
        updatedAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'The date and time when the folder was last updated, in ISO 8601 format.',
            example: null,
          }),
        updatedContentsAt: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'The date and time when the contents of the folder were last updated, in ISO 8601 format.',
            example: null,
          }),
        userId: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The unique identifier of the user who created or last updated the folder, represented as a string.',
            example: null,
          }),
      })
      .openapi({ required: ['childLists', 'childNodes', 'id', 'parentFolderId'], example: null }),
  )
  .openapi('PublicListFolder')

const ListFolderCreateResponseSchema = z
  .object({ folder: PublicListFolderSchema })
  .openapi({ required: ['folder'], example: null })
  .openapi('ListFolderCreateResponse')

const ListFolderFetchResponseSchema = z
  .object({ folder: PublicListFolderSchema })
  .openapi({ required: ['folder'], example: null })
  .openapi('ListFolderFetchResponse')

const ListMoveRequestSchema = z
  .object({
    listId: z
      .string()
      .openapi({
        description: 'The unique identifier of the list to be moved. It is a string.',
        example: null,
      }),
    newFolderId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the folder where the list will be moved to. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['listId', 'newFolderId'], example: null })
  .openapi('ListMoveRequest')

const ListSearchRequestSchema = z
  .object({
    additionalProperties: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing additional properties to include in the search.',
        example: null,
      }),
    count: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer specifying the number of results to return.',
        example: null,
      }),
    listIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings specifying the IDs of the lists to search.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the object type ID to filter the lists.',
        example: null,
      }),
    offset: z
      .int32()
      .openapi({
        description:
          'An integer used for pagination, indicating the starting point for the search results.',
        example: null,
      }),
    processingTypes: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings indicating the types of processing to apply to the search results.',
        example: null,
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the search query to filter the lists.',
        example: null,
      }),
    sort: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the sorting criteria for the search results.',
        example: null,
      }),
  })
  .openapi({
    required: ['additionalProperties', 'listIds', 'offset', 'processingTypes'],
    example: null,
  })
  .openapi('ListSearchRequest')

const ListSearchResponseSchema = z
  .object({
    hasMore: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether there are more results available beyond the current page.',
        example: null,
      }),
    lists: z
      .array(PublicObjectListSearchResultSchema)
      .openapi({
        description:
          'An array of objects representing the lists found in the search, each conforming to the PublicObjectListSearchResult schema.',
        example: null,
      }),
    offset: z
      .int32()
      .openapi({
        description:
          'An integer indicating the position in the list of results where the current page starts.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'An integer indicating the total number of lists found by the search.',
        example: null,
      }),
  })
  .openapi({ required: ['hasMore', 'lists', 'offset', 'total'], example: null })
  .openapi('ListSearchResponse')

const ListSizeDataPointSchema = z
  .object({
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'An integer representing the size of the list at the given timestamp.',
        example: null,
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'A Unix timestamp in milliseconds indicating the specific point in time when the list size was recorded.',
        example: null,
      }),
  })
  .openapi({ required: ['size', 'timestamp'], example: null })
  .openapi('ListSizeDataPoint')

const ListSizeAndEditHistoryResponseSchema = z
  .object({
    editHistory: z
      .array(z.iso.datetime({ offset: true }).openapi({ example: null }))
      .openapi({
        description:
          'An array of date-time strings indicating the timestamps of edits made to the list.',
        example: null,
      }),
    sizeHistory: z
      .array(ListSizeDataPointSchema)
      .openapi({
        description:
          'An array of ListSizeDataPoint objects representing the historical size data of the list.',
        example: null,
      }),
  })
  .openapi({ required: ['editHistory', 'sizeHistory'], example: null })
  .openapi('ListSizeAndEditHistoryResponse')

const ListUpdateResponseSchema = z
  .object({ updatedList: PublicObjectListSchema.exactOptional() })
  .openapi({ example: null, required: [] })
  .openapi('ListUpdateResponse')

const ListsByIdResponseSchema = z
  .object({
    lists: z
      .array(PublicObjectListSchema)
      .openapi({
        description:
          'An array of PublicObjectList objects, each representing a list retrieved by its ID. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['lists'], example: null })
  .openapi('ListsByIdResponse')

const MembershipChangeRequestSchema = z
  .object({
    recordIdsToAdd: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the unique identifiers of records to be added to the list.',
        example: null,
      }),
    recordIdsToRemove: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the unique identifiers of records to be removed from the list.',
        example: null,
      }),
  })
  .openapi({ required: ['recordIdsToAdd', 'recordIdsToRemove'], example: null })
  .openapi('MembershipChangeRequest')

const MembershipsUpdateResponseSchema = z
  .object({
    recordIdsMissing: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of records that were not found or could not be processed during the update.',
        example: null,
      }),
    recordIdsRemoved: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of records that were successfully removed from the list.',
        example: null,
      }),
    recordsIdsAdded: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of records that were successfully added to the list.',
        example: null,
      }),
  })
  .openapi({ required: ['recordIdsMissing', 'recordIdsRemoved', 'recordsIdsAdded'], example: null })
  .openapi('MembershipsUpdateResponse')

const PublicMigrationMappingSchema = z
  .object({
    legacyListId: z
      .string()
      .openapi({
        description:
          'The legacy list ID from the previous system. This is a string that represents the list ID in the legacy system.',
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description:
          'The new list ID in the HubSpot system. This is a string that uniquely identifies the list in the current system.',
        example: null,
      }),
  })
  .openapi({ required: ['legacyListId', 'listId'], example: null })
  .openapi('PublicMigrationMapping')

const PublicBatchMigrationMappingSchema = z
  .object({
    legacyListIdsToIdsMapping: z
      .array(PublicMigrationMappingSchema)
      .openapi({
        description:
          'An array of PublicMigrationMapping objects that map legacy list IDs to their corresponding new IDs.',
        example: null,
      }),
    missingLegacyListIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing legacy list IDs that could not be found or migrated.',
        example: null,
      }),
  })
  .openapi({ required: ['legacyListIdsToIdsMapping', 'missingLegacyListIds'], example: null })
  .openapi('PublicBatchMigrationMapping')

const PublicListConversionDateSchema = z
  .object({
    conversionType: z
      .literal('CONVERSION_DATE')
      .default('CONVERSION_DATE')
      .openapi({
        description:
          'A string that indicates the type of conversion event. It specifies what kind of conversion has taken place.',
        example: null,
      }),
    day: z
      .int32()
      .openapi({
        description:
          'An integer representing the day of the month when the conversion event occurred.',
        example: null,
      }),
    month: z
      .int32()
      .openapi({
        description:
          'An integer representing the month of the year when the conversion event occurred.',
        example: null,
      }),
    year: z
      .int32()
      .openapi({
        description: 'An integer representing the year when the conversion event occurred.',
        example: null,
      }),
  })
  .openapi({
    required: ['conversionType', 'day', 'month', 'year'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicListConversionDate')

const PublicListConversionInactivitySchema = z
  .object({
    conversionType: z
      .literal('INACTIVITY')
      .default('INACTIVITY')
      .openapi({
        description:
          "A string that specifies the type of conversion, with a default value of 'INACTIVITY'.",
        example: null,
      }),
    offset: z
      .int32()
      .openapi({
        description:
          'An integer indicating the offset value used in conjunction with the time unit to determine inactivity.',
        example: null,
      }),
    timeUnit: z
      .enum(['DAY', 'MONTH', 'WEEK'])
      .openapi({
        description:
          "A string representing the unit of time for measuring inactivity. Valid values include 'DAY', 'WEEK', and 'MONTH'.",
        example: null,
      }),
  })
  .openapi({
    required: ['conversionType', 'offset', 'timeUnit'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicListConversionInactivity')

const PublicListConversionResponseSchema = z
  .object({
    convertedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A string in date-time format indicating when the conversion was completed.',
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the list that is being converted.',
        example: null,
      }),
    requestedConversionTime: z
      .xor([PublicListConversionDateSchema, PublicListConversionInactivitySchema])
      .exactOptional()
      .openapi({
        description: 'A string in date-time format indicating when the conversion was requested.',
        example: null,
      }),
  })
  .openapi({ required: ['listId'], example: null })
  .openapi('PublicListConversionResponse')

const PublicListConversionTimeSchema = z
  .xor([PublicListConversionDateSchema, PublicListConversionInactivitySchema])
  .openapi({ example: null })
  .openapi('PublicListConversionTime')

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
        'cms.membership.access_groups.write': '',
        'crm.lists.read': '',
        'crm.lists.write': '',
        'crm.segments.read': '',
        'crm.segments.write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmLists202609Route = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09',
  tags: ['Basic'],
  summary: 'List',
  description:
    'Retrieve a list of CRM lists in your HubSpot account. This endpoint allows you to filter the lists by their IDs and optionally include filters applied to the lists. It is useful for managing and organizing your CRM data by accessing specific lists.',
  operationId: 'get-/crm/lists/2026-09',
  request: {
    query: z.object({
      includeFilters: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeFilters',
            in: 'query',
            description:
              'A boolean indicating whether to include filters applied to the lists in the response. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      listIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().openapi({ example: null })),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'listIds',
            in: 'query',
            description:
              'An array of list IDs to filter the lists returned. Each ID should be a string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'array', example: null, items: { type: 'string', example: null } },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListsByIdResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const postCrmLists202609Route = createRoute({
  method: 'post',
  path: '/crm/lists/2026-09',
  tags: ['Basic'],
  summary: 'Create List',
  description:
    'Create a new list in your HubSpot account using the specified parameters. This endpoint allows you to define the properties and criteria for the list, which can be used for organizing and managing contacts or other CRM objects.',
  operationId: 'post-/crm/lists/2026-09',
  request: {
    body: {
      content: { 'application/json': { schema: ListCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListCreateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write'] },
    { oauth2: ['crm.segments.write'] },
  ],
})

export const postCrmLists202609AllRoute = createRoute({
  method: 'post',
  path: '/crm/lists/2026-09/all',
  tags: ['Basic'],
  summary: 'List all',
  description:
    'Retrieve all lists in the CRM system. This endpoint allows you to fetch a comprehensive list of all available lists, which can be useful for managing and organizing your CRM data effectively.',
  operationId: 'post-/crm/lists/2026-09/all_/crm/lists/2026-09-beta/all',
  request: {
    body: {
      content: { 'application/json': { schema: ListAllRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiCollectionResponsePublicObjectListSearchResultSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const getCrmLists202609FoldersRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/folders',
  tags: ['Basic'],
  summary: 'List folders',
  description:
    'Retrieve a list of folders within the CRM lists. This endpoint can be used to navigate through the folder structure by specifying a folder ID. It is useful for organizing and managing lists within folders.',
  operationId: 'get-/crm/lists/2026-09/folders',
  request: {
    query: z.object({
      folderId: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            name: 'folderId',
            in: 'query',
            description:
              "The unique identifier of the folder to retrieve. Defaults to '0' if not specified.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null, default: '0' },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListFolderFetchResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const postCrmLists202609FoldersRoute = createRoute({
  method: 'post',
  path: '/crm/lists/2026-09/folders',
  tags: ['Basic'],
  summary: 'Create Folder',
  description:
    'Create a new folder within the CRM lists in your HubSpot account. This operation allows you to organize your lists into folders for better management and accessibility.',
  operationId: 'post-/crm/lists/2026-09/folders',
  request: {
    body: {
      content: { 'application/json': { schema: ListFolderCreateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListFolderCreateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609FoldersMoveListRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/folders/move-list',
  tags: ['Basic'],
  summary: 'Move List',
  description:
    'Move a list to a different folder within your HubSpot account. This operation requires specifying the list and the target folder. It is useful for organizing lists into different categories or structures.',
  operationId: 'put-/crm/lists/2026-09/folders/move-list',
  request: {
    body: {
      content: { 'application/json': { schema: ListMoveRequestSchema, example: null } },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const deleteCrmLists202609FoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/crm/lists/2026-09/folders/{folderId}',
  tags: ['Basic'],
  summary: 'Delete folder',
  description:
    "Delete a specific folder within the CRM lists by providing the folder's unique identifier. This operation is useful for removing folders that are no longer needed or to clean up the folder structure within your CRM lists.",
  operationId: 'delete-/crm/lists/2026-09/folders/{folderId}',
  request: {
    params: z.object({
      folderId: z
        .string()
        .openapi({
          param: {
            name: 'folderId',
            in: 'path',
            description: 'The unique identifier of the folder to delete.',
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
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609FoldersFolderIdMoveNewParentFolderIdRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/folders/{folderId}/move/{newParentFolderId}',
  tags: ['Basic'],
  summary: 'Move Folder',
  description:
    'Move a folder to a new parent folder within the CRM lists. This operation is useful for reorganizing your folder structure by changing the parent folder of a specified folder.',
  operationId: 'put-/crm/lists/2026-09/folders/{folderId}/move/{newParentFolderId}',
  request: {
    params: z.object({
      folderId: z
        .string()
        .openapi({
          param: {
            name: 'folderId',
            in: 'path',
            description: 'The unique identifier of the folder to be moved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      newParentFolderId: z
        .string()
        .openapi({
          param: {
            name: 'newParentFolderId',
            in: 'path',
            description:
              'The unique identifier of the new parent folder where the folder will be moved.',
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
      content: { 'application/json': { schema: ListFolderFetchResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609FoldersFolderIdRenameRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/folders/{folderId}/rename',
  tags: ['Basic'],
  summary: 'Rename folder',
  description:
    "Rename an existing folder in the CRM lists by specifying the folder's ID and the new desired name. This can be useful for organizing and updating folder structures within your account.",
  operationId: 'put-/crm/lists/2026-09/folders/{folderId}/rename',
  request: {
    params: z.object({
      folderId: z
        .string()
        .openapi({
          param: {
            name: 'folderId',
            in: 'path',
            description: 'The unique identifier of the folder to be renamed.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      newFolderName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'newFolderName',
            in: 'query',
            description:
              'The new name for the folder. It should be a string representing the desired folder name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListFolderFetchResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const getCrmLists202609IdmappingRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/idmapping',
  tags: ['Basic'],
  summary: 'Retrieve ID Mapping',
  description:
    'Retrieve the mapping of legacy list IDs to their current IDs in the HubSpot system. This endpoint is useful for migrating or updating systems that rely on legacy list identifiers.',
  operationId: 'get-/crm/lists/2026-09/idmapping',
  request: {
    query: z.object({
      legacyListId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'legacyListId',
            in: 'query',
            description:
              'The legacy list ID for which you want to retrieve the current ID mapping.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicMigrationMappingSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const postCrmLists202609IdmappingRoute = createRoute({
  method: 'post',
  path: '/crm/lists/2026-09/idmapping',
  tags: ['Basic'],
  summary: 'Map IDs',
  description:
    'Map legacy list IDs to their corresponding new IDs in the HubSpot system. This endpoint is useful for migrating data from older systems to the current HubSpot structure, ensuring that all list references are updated correctly.',
  operationId: 'post-/crm/lists/2026-09/idmapping',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string().openapi({ example: null })).openapi({ example: null }),
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicBatchMigrationMappingSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const getCrmLists202609ObjectTypeIdObjectTypeIdNameListNameRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/object-type-id/{objectTypeId}/name/{listName}',
  tags: ['Basic'],
  summary: 'Retrieve List',
  description:
    'Retrieve a specific list by its name and object type ID in your HubSpot account. This endpoint allows you to access the details of a list, which can be useful for managing and analyzing your CRM data. You can also choose to include filters in the response.',
  operationId: 'get-/crm/lists/2026-09/object-type-id/{objectTypeId}/name/{listName}',
  request: {
    params: z.object({
      listName: z
        .string()
        .openapi({
          param: {
            name: 'listName',
            in: 'path',
            description: 'The name of the list to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the object type associated with the list.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      includeFilters: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeFilters',
            in: 'query',
            description:
              'A boolean indicating whether to include filters in the response. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListFetchResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const postCrmLists202609RecordsMembershipsBatchReadRoute = createRoute({
  method: 'post',
  path: '/crm/lists/2026-09/records/memberships/batch/read',
  tags: ['Batch'],
  summary: 'Batch read memberships',
  description:
    'Retrieve batch membership information for records within specified lists. This endpoint is useful for obtaining membership details in bulk, allowing for efficient data retrieval when dealing with multiple records.',
  operationId: 'post-/crm/lists/2026-09/records/memberships/batch/read',
  request: {
    body: {
      content: { 'application/json': { schema: BatchInputRecordIdInputSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: BatchResponseRecordIdWithMembershipsSchema, example: null },
      },
    },
    207: {
      description: 'multiple statuses',
      content: {
        'application/json': {
          schema: BatchResponseRecordIdWithMembershipsWithErrorsSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const getCrmLists202609RecordsObjectTypeIdRecordIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/records/{objectTypeId}/{recordId}/memberships',
  tags: ['Basic'],
  summary: 'Retrieve memberships',
  description:
    'Retrieve the list memberships for a specific record within a specified object type. This endpoint is useful for understanding which lists a particular record is a member of, based on the object type and record ID provided.',
  operationId: 'get-/crm/lists/2026-09/records/{objectTypeId}/{recordId}/memberships',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the object type to which the record belongs.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      recordId: z
        .string()
        .openapi({
          param: {
            name: 'recordId',
            in: 'path',
            description:
              'The unique identifier of the record for which memberships are being retrieved.',
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
        'application/json': {
          schema: ApiCollectionResponseRecordListMembershipSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const postCrmLists202609SearchRoute = createRoute({
  method: 'post',
  path: '/crm/lists/2026-09/search',
  tags: ['Search'],
  summary: 'Search Lists',
  description:
    'Search for lists within your HubSpot account using various criteria. This endpoint allows you to filter and retrieve lists based on specific search parameters, making it easier to manage and organize your lists effectively.',
  operationId: 'post-/crm/lists/2026-09/search',
  request: {
    body: {
      content: { 'application/json': { schema: ListSearchRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListSearchResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const getCrmLists202609ListIdRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/{listId}',
  tags: ['Basic'],
  summary: 'Retrieve list',
  description:
    "Retrieve details of a specific list in your HubSpot account using the list's unique identifier. This endpoint allows you to optionally include filters associated with the list in the response.",
  operationId: 'get-/crm/lists/2026-09/{listId}',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      includeFilters: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeFilters',
            in: 'query',
            description:
              "A boolean indicating whether to include the list's filters in the response. Defaults to false.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListFetchResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const deleteCrmLists202609ListIdRoute = createRoute({
  method: 'delete',
  path: '/crm/lists/2026-09/{listId}',
  tags: ['Basic'],
  summary: 'Delete',
  description:
    'Delete a specific list in your HubSpot account using its unique identifier. This operation will permanently remove the list and its associated data, ensuring it is no longer accessible.',
  operationId: 'delete-/crm/lists/2026-09/{listId}',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list to delete.',
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
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const getCrmLists202609ListIdMembershipsRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/{listId}/memberships',
  tags: ['Basic'],
  summary: 'List memberships',
  description:
    'Retrieve the memberships of a specific list in your HubSpot account. This endpoint allows you to paginate through the list memberships using cursor-based pagination. It is useful for obtaining detailed membership information for a given list.',
  operationId: 'get-/crm/lists/2026-09/{listId}/memberships',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list whose memberships are to be retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              "A cursor token for pagination. Use the value from the previous response's paging.next.after field to retrieve the next set of results.",
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description:
              'A cursor token for pagination. Use this to retrieve the previous set of results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page. Defaults to 100.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 100 },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiCollectionResponseJoinTimeAndRecordIdSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const deleteCrmLists202609ListIdMembershipsRoute = createRoute({
  method: 'delete',
  path: '/crm/lists/2026-09/{listId}/memberships',
  tags: ['Basic'],
  summary: 'Delete memberships',
  description:
    'Delete all memberships associated with a specific list in your HubSpot account. This operation is useful when you need to remove all members from a list, effectively clearing its membership data.',
  operationId: 'delete-/crm/lists/2026-09/{listId}/memberships',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list whose memberships are to be deleted.',
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
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609ListIdMembershipsAddRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/memberships/add',
  tags: ['Basic'],
  summary: 'Add memberships',
  description:
    'Add memberships to a specified list in your HubSpot account. This endpoint allows you to add multiple memberships to a list identified by the listId. It is useful for managing list memberships in bulk, ensuring that the specified records are included in the list.',
  operationId: 'put-/crm/lists/2026-09/{listId}/memberships/add',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list to which memberships will be added.',
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
          schema: z.array(z.string().openapi({ example: null })).openapi({ example: null }),
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MembershipsUpdateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609ListIdMembershipsAddAndRemoveRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/memberships/add-and-remove',
  tags: ['Basic'],
  summary: 'Update memberships',
  description:
    'Update the memberships of a list by adding and removing members in a single operation. This endpoint allows you to efficiently manage list memberships by specifying which members to add and which to remove in one request.',
  operationId: 'put-/crm/lists/2026-09/{listId}/memberships/add-and-remove',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list whose memberships are to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: MembershipChangeRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MembershipsUpdateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609ListIdMembershipsAddFromSourceListIdRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/memberships/add-from/{sourceListId}',
  tags: ['Basic'],
  summary: 'Add memberships',
  description:
    'Add memberships to a specified list from another source list. This operation is useful for consolidating list memberships by transferring members from one list to another. The endpoint does not return any content upon successful execution.',
  operationId: 'put-/crm/lists/2026-09/{listId}/memberships/add-from/{sourceListId}',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the target list to which memberships will be added.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sourceListId: z
        .string()
        .openapi({
          param: {
            name: 'sourceListId',
            in: 'path',
            description:
              'The unique identifier of the source list from which memberships will be transferred.',
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
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const getCrmLists202609ListIdMembershipsJoinOrderRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/{listId}/memberships/join-order',
  tags: ['Basic'],
  summary: 'Retrieve join order',
  description:
    'Retrieve the join order of memberships for a specific list in your HubSpot account. This endpoint allows you to view the order in which records joined the list, which can be useful for tracking membership changes over time.',
  operationId: 'get-/crm/lists/2026-09/{listId}/memberships/join-order',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the list whose membership join order is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description:
              'The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'A cursor token to retrieve results before a specific point in the list.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to display per page. Defaults to 100.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null, default: 100 },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ApiCollectionResponseJoinTimeAndRecordIdSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const putCrmLists202609ListIdMembershipsRemoveRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/memberships/remove',
  tags: ['Basic'],
  summary: 'Remove memberships',
  description:
    'Remove memberships from a specific list in your HubSpot account. This operation is useful for managing list memberships by removing specified records from the list. The request requires a list of record IDs to be removed from the specified list.',
  operationId: 'put-/crm/lists/2026-09/{listId}/memberships/remove',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the list from which memberships will be removed.',
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
          schema: z.array(z.string().openapi({ example: null })).openapi({ example: null }),
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MembershipsUpdateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609ListIdRestoreRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/restore',
  tags: ['Basic'],
  summary: 'Restore',
  description:
    'Restore a previously deleted list in your HubSpot account. This operation allows you to recover lists that have been removed, ensuring that any associated data or configurations are reinstated. This can be useful for retrieving lists that were mistakenly deleted or are needed again for ongoing operations.',
  operationId: 'put-/crm/lists/2026-09/{listId}/restore',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list to restore.',
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
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const getCrmLists202609ListIdScheduleConversionRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/{listId}/schedule-conversion',
  tags: ['Basic'],
  summary: 'Retrieve',
  description:
    'Retrieve the scheduled conversion details for a specific list in your HubSpot account. This endpoint provides information about any scheduled conversions for the specified list, allowing you to manage and track list conversions effectively.',
  operationId: 'get-/crm/lists/2026-09/{listId}/schedule-conversion',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the list for which the scheduled conversion details are to be retrieved.',
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
        'application/json': { schema: PublicListConversionResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const putCrmLists202609ListIdScheduleConversionRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/schedule-conversion',
  tags: ['Basic'],
  summary: 'Schedule Conversion',
  description:
    'Schedule a conversion for a specific list in your HubSpot account. This operation allows you to set a conversion time for the list identified by the listId. Use this endpoint to manage the conversion schedule of your lists effectively.',
  operationId: 'put-/crm/lists/2026-09/{listId}/schedule-conversion',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the list for which the conversion schedule is to be set.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: PublicListConversionTimeSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PublicListConversionResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const deleteCrmLists202609ListIdScheduleConversionRoute = createRoute({
  method: 'delete',
  path: '/crm/lists/2026-09/{listId}/schedule-conversion',
  tags: ['Basic'],
  summary: 'Delete schedule conversion',
  description:
    'Delete a scheduled conversion for a specific list in your HubSpot account. This operation is useful when you need to cancel a previously scheduled conversion for a list identified by its listId.',
  operationId: 'delete-/crm/lists/2026-09/{listId}/schedule-conversion',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the list for which the scheduled conversion is to be deleted.',
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
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const getCrmLists202609ListIdSizeAndEditsHistoryBetweenRoute = createRoute({
  method: 'get',
  path: '/crm/lists/2026-09/{listId}/size-and-edits-history/between',
  tags: ['Basic'],
  summary: 'Retrieve history',
  description:
    'Retrieve the size and edits history of a specific list within a defined date range. This endpoint is useful for tracking changes and understanding the evolution of list size over time.',
  operationId: 'get-/crm/lists/2026-09/{listId}/size-and-edits-history/between',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description:
              'The unique identifier of the list for which the size and edits history is being retrieved.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            description: 'The end date for the history retrieval, formatted as a date-time string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            description:
              'The start date for the history retrieval, formatted as a date-time string.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ListSizeAndEditHistoryResponseSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['crm.segments.read'] }, { oauth2: ['crm.lists.read'] }],
})

export const putCrmLists202609ListIdUpdateListFiltersRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/update-list-filters',
  tags: ['Basic'],
  summary: 'Update list filters',
  description:
    'Update the filters for a specific list in your HubSpot account. This operation allows you to modify the criteria used to include objects in the list. You can also specify whether objects should be enrolled in workflows based on the updated filters.',
  operationId: 'put-/crm/lists/2026-09/{listId}/update-list-filters',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list whose filters are to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      enrollObjectsInWorkflows: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'enrollObjectsInWorkflows',
            in: 'query',
            description:
              'A boolean indicating whether to enroll objects in workflows based on the updated filters. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListFilterUpdateRequestSchema, example: null } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListUpdateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})

export const putCrmLists202609ListIdUpdateListNameRoute = createRoute({
  method: 'put',
  path: '/crm/lists/2026-09/{listId}/update-list-name',
  tags: ['Basic'],
  summary: 'Update list name',
  description:
    "Update the name of a specific list in your HubSpot account. This endpoint allows you to change the list's name by specifying the new name as a query parameter. It is useful for keeping your lists organized and up-to-date with relevant titles.",
  operationId: 'put-/crm/lists/2026-09/{listId}/update-list-name',
  request: {
    params: z.object({
      listId: z
        .string()
        .openapi({
          param: {
            name: 'listId',
            in: 'path',
            description: 'The unique identifier of the list whose name is to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
    query: z.object({
      includeFilters: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeFilters',
            in: 'query',
            description:
              'A boolean indicating whether to include filters in the response. Defaults to false.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null, default: false },
          },
          example: null,
        }),
      listName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'listName',
            in: 'query',
            description:
              'The new name for the list. It should be a string representing the desired name.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ListUpdateResponseSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [
    { oauth2: ['crm.lists.write', 'crm.segments.read'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.lists.read'] },
    { oauth2: ['crm.segments.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.segments.write'] },
    { oauth2: ['crm.lists.read', 'crm.lists.write'] },
    { oauth2: ['cms.membership.access_groups.write', 'crm.segments.read'] },
  ],
})
