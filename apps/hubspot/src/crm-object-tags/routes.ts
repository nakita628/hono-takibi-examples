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
        description:
          'An integer representing the maximum number of occurrences allowed for the refinement.',
        example: null,
      }),
    minOccurrences: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the minimum number of occurrences required for the refinement.',
        example: null,
      }),
    type: z
      .literal('NUM_OCCURRENCES')
      .default('NUM_OCCURRENCES')
      .openapi({
        description:
          "A string that specifies the type of refinement. The default value is 'NUM_OCCURRENCES'.",
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
        description: 'A string representing the specific set type used for refining occurrences.',
        example: null,
      }),
    type: z
      .literal('SET_OCCURRENCES')
      .default('SET_OCCURRENCES')
      .openapi({
        description:
          "A string that specifies the type of refinement. The default value is 'SET_OCCURRENCES'.",
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
        description:
          'An integer specifying the magnitude of the time offset in the specified time unit.',
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
          description:
            'A string that specifies the type of comparison to be made with the timestamp.',
          example: null,
        }),
      timeOffset: PublicTimeOffsetSchema,
      type: z
        .literal('RELATIVE_COMPARATIVE')
        .default('RELATIVE_COMPARATIVE')
        .openapi({
          description:
            "A string that indicates the type of refinement, which is 'RELATIVE_COMPARATIVE' by default.",
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
          description: 'A string that defines the type of range for the timestamp refinement.',
          example: null,
        }),
      type: z
        .literal('RELATIVE_RANGED')
        .default('RELATIVE_RANGED')
        .openapi({
          description:
            "A string that specifies the type of refine operation. The default value is 'RELATIVE_RANGED'.",
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
          description: 'A string representing the comparison operation to be performed.',
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
            'An integer representing the specific timestamp for comparison, formatted as an int64.',
          example: null,
        }),
      type: z
        .literal('ABSOLUTE_COMPARATIVE')
        .default('ABSOLUTE_COMPARATIVE')
        .openapi({
          description:
            "A string indicating the type of refinement, which is 'ABSOLUTE_COMPARATIVE' by default.",
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
            'An integer representing the lower boundary of the timestamp range, specified in Unix time format.',
          example: null,
        }),
      rangeType: z
        .string()
        .openapi({
          description: 'A string that specifies the type of range being used.',
          example: null,
        }),
      type: z
        .literal('ABSOLUTE_RANGED')
        .default('ABSOLUTE_RANGED')
        .openapi({
          description:
            "A string indicating the type of refine by operation. The default value is 'ABSOLUTE_RANGED'.",
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
            'An integer representing the upper boundary of the timestamp range, specified in Unix time format.',
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
          "A string that specifies the type of refinement. The default and only valid value is 'ALL_HISTORY'.",
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
        description: 'A string indicating the type of time reference used.',
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
        description: 'A string representing the identifier of the timezone.',
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
      .openapi({ description: 'An integer representing the current hour.', example: null }),
    millisecond: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the current millisecond.', example: null }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the current minute.', example: null }),
    referenceType: z
      .literal('NOW')
      .default('NOW')
      .openapi({
        description: "A string indicating the type of reference, which is always 'NOW'.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the current second.', example: null }),
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
        description:
          "A string indicating the type of reference, which is always 'TODAY' for this component.",
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
          "A string indicating the day of the week. Valid values include 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', and 'SUNDAY'.",
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
      .openapi({ description: 'An integer representing the day of the month.', example: null }),
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
          "A string that specifies the type of reference, defaulting to 'FISCAL_QUARTER'.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the second of the minute.', example: null }),
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
        description:
          "A string indicating the type of reference, which is 'FISCAL_YEAR' for this component.",
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
        description: 'An integer representing the second component of the time.',
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
        description: "A string indicating the type of reference, which is 'QUARTER' by default.",
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
        description: "A string indicating the type of reference, which defaults to 'MONTH'.",
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
        description: 'An integer representing the number of days in the time offset.',
        example: null,
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of hours in the time offset.',
        example: null,
      }),
    milliseconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of milliseconds in the time offset.',
        example: null,
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of minutes in the time offset.',
        example: null,
      }),
    months: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of months in the time offset.',
        example: null,
      }),
    quarters: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of quarters in the time offset.',
        example: null,
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of seconds in the time offset.',
        example: null,
      }),
    weeks: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of weeks in the time offset.',
        example: null,
      }),
    years: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of years in the time offset.',
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
          "An object that defines the reference point for the indexed time. It can be one of several types such as 'NOW', 'TODAY', 'WEEK', 'FISCAL_QUARTER', 'FISCAL_YEAR', 'YEAR', 'QUARTER', or 'MONTH'.",
        example: null,
      }),
    offset: PublicIndexOffsetSchema.exactOptional(),
    timeType: z
      .literal('INDEXED')
      .default('INDEXED')
      .openapi({
        description:
          "A string indicating the type of time point, which is 'INDEXED' for this component.",
        example: null,
      }),
    timezoneSource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the source of the timezone information.',
        example: null,
      }),
    zoneId: z
      .string()
      .openapi({
        description: 'A string representing the identifier for the time zone.',
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
          'A string indicating the property within the CRM object that is being referenced for time operations.',
        example: null,
      }),
    referenceType: z
      .string()
      .openapi({
        description: 'A string defining the type of reference being used.',
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
        description: 'A string specifying the source of the timezone information.',
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
      .openapi({ description: 'A string describing the behavior of the endpoint.', example: null }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to include objects that have no value set.',
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
        description: 'A string representing the operator used in the operation.',
        example: null,
      }),
    propertyParser: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the parser used for the property.',
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
          'An object representing the specific time point, which can be a date point, indexed time point, or property-referenced time.',
        example: null,
      }),
    type: z
      .string()
      .openapi({ description: 'A string indicating the type of the operation.', example: null }),
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
          'A boolean indicating whether to include objects that have no value set for the specified property.',
        example: null,
      }),
    lowerBoundEndpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the behavior at the lower endpoint of the time range.',
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
          'Defines the lower bound of the time range, which can be a date point, indexed time point, or property-referenced time.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string representing the type of operation being performed.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the time-ranged operation.',
        example: null,
      }),
    propertyParser: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the parser used for the property in the operation.',
        example: null,
      }),
    type: z
      .literal('TIME_RANGED')
      .default('TIME_RANGED')
      .openapi({
        description: "A string indicating the type of operation, defaulting to 'TIME_RANGED'.",
        example: null,
      }),
    upperBoundEndpointBehavior: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the behavior at the upper endpoint of the time range.',
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
          'Defines the upper bound of the time range, which can be a date point, indexed time point, or property-referenced time.',
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
            description: 'A string that represents the operator used within the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('OR')
          .default('OR')
          .openapi({
            description:
              "A string that specifies the type of filter branch. The default value is 'OR'.",
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
              "An array of filter branches that can include various types such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', 'PublicNotAllFilterBranch', and others.",
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
              "An array of filters that can include different types such as 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', and others.",
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
            description: 'A string representing the operator used within this filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('NOT_ALL')
          .default('NOT_ALL')
          .openapi({
            description:
              "A string indicating the type of filter branch. The default value is 'NOT_ALL'.",
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
              'An array of nested filter branches, allowing for complex filter structures. Each item can be one of several filter branch types.',
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
              'An array of filters applied within this branch. Each filter can be one of several types, such as property filters or event analytics filters.',
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
              "A string indicating the type of filter branch. The default value is 'NOT_ANY'.",
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
              "An array of nested filter branches. Each item can be one of several types of filter branches, such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', or 'PublicNotAnyFilterBranch'.",
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
              "An array of filters applied within this branch. Each filter can be one of various types, such as 'PublicPropertyFilter', 'PublicEventAnalyticsFilter', or 'PublicEmailEventFilter'.",
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
            description: 'A string representing the operator used within this filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('RESTRICTED')
          .default('RESTRICTED')
          .openapi({
            description:
              "A string indicating the type of filter branch, which defaults to 'RESTRICTED'.",
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
              "An array of nested filter branches, each of which can be of various types such as 'OR', 'AND', 'NOT_ALL', etc.",
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
              'An array of filters applied within this branch, which can include various filter types like property filters, event filters, and more.',
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
              "An optional refinement criterion that can be one of several types, such as 'NUM_OCCURRENCES', 'SET_OCCURRENCES', 'RELATIVE_COMPARATIVE', and others, used to further refine the filter logic.",
            example: null,
          }),
        eventTypeId: z
          .string()
          .openapi({
            description:
              'A string representing the unique identifier of the event type to which the filters apply.',
            example: null,
          }),
        filterBranchOperator: z
          .string()
          .openapi({
            description:
              'A string representing the operator used within the filter branch, allowing for logical operations between filters.',
            example: null,
          }),
        filterBranchType: z
          .literal('UNIFIED_EVENTS')
          .default('UNIFIED_EVENTS')
          .openapi({
            description:
              "A string indicating the type of filter branch, defaulting to 'UNIFIED_EVENTS'.",
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
              "An array of nested filter branches, each of which can be one of several types, such as 'OR', 'AND', 'NOT_ALL', 'NOT_ANY', 'RESTRICTED', 'UNIFIED_EVENTS', or 'ASSOCIATION'.",
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
              'An array of filters that can include various types such as property filters, association filters, and others, allowing for detailed and specific filtering criteria.',
            example: null,
          }),
        operator: z
          .enum(['HAS_COMPLETED', 'HAS_NOT_COMPLETED'])
          .openapi({
            description:
              "A string specifying the operation to be performed, with valid values including 'HAS_COMPLETED' and 'HAS_NOT_COMPLETED'.",
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
              'An optional refinement criterion similar to coalescingRefineBy, used to prune or limit the filter results based on additional criteria.',
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
            description:
              'An integer representing the unique identifier for the type of association.',
            example: null,
          }),
        filterBranchOperator: z
          .string()
          .openapi({
            description: 'A string representing the operator applied to the filter branch.',
            example: null,
          }),
        filterBranchType: z
          .literal('ASSOCIATION')
          .default('ASSOCIATION')
          .openapi({
            description:
              "A string indicating the type of filter branch. Defaults to 'ASSOCIATION'.",
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
              'An array of filter branches, each of which can be one of several types, including OR, AND, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, or ASSOCIATION.',
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
              'An array of filters that can include various types such as property filters, association filters, and analytics filters.',
            example: null,
          }),
        objectTypeId: z
          .string()
          .openapi({
            description:
              'A string representing the unique identifier for the object type being filtered.',
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
          'A boolean indicating whether objects with no value set for the property should be included in the operation.',
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
        description: 'A string representing the operator used in the boolean operation.',
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
          'A boolean indicating whether objects with no value set for the property should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('NUMBER')
      .default('NUMBER')
      .openapi({
        description:
          "A string that specifies the type of operation. The default value is 'NUMBER'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the numeric operation.',
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
        description: "A string indicating the type of operation, defaulting to 'STRING'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string specifying the operator used in the operation.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the value associated with the operation.',
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
          "A string representing the type of operation. The default and only valid value is 'DATETIME'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string indicating the operator used in the operation. The specific operators are not detailed in the spec.',
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
          'An integer representing the timestamp for the operation, formatted as an int64.',
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
          'A boolean indicating whether to include objects that have no value set for the date property.',
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
          'An integer representing the lower bound of the date range, in Unix timestamp format (int64).',
        example: null,
      }),
    operationType: z
      .literal('RANGED_DATE')
      .default('RANGED_DATE')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'RANGED_DATE' by default.",
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
          'An integer representing the upper bound of the date range, in Unix timestamp format (int64).',
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
          'A string that provides a default value for comparison if the property value is not set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set for the property should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_PROPERTY_UPDATED')
      .default('COMPARATIVE_PROPERTY_UPDATED')
      .openapi({
        description:
          "A string that indicates the type of operation being performed. It defaults to 'COMPARATIVE_STRING'.",
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
        description: 'A string representing the name of the property to be compared.',
        example: null,
      }),
    defaultComparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string specifying the default value to use for comparison if the comparison property is not set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects without a set value for the property should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('COMPARATIVE_DATE')
      .default('COMPARATIVE_DATE')
      .openapi({
        description:
          "A string indicating the type of operation, which is always 'COMPARATIVE_DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that specifies the comparison operator used in the operation.',
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
          'A boolean indicating whether objects with no value set should be included in the operation.',
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
          "A string indicating the type of operation, which is 'ROLLING_DATE_RANGE' for this component.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the date range operation.',
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
          'An integer specifying the number of days over which the rolling update operation applies.',
        example: null,
      }),
    operationType: z
      .literal('ROLLING_PROPERTY_UPDATED')
      .default('ROLLING_PROPERTY_UPDATED')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'ROLLING_PROPERTY_UPDATED' for this component.",
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
          'A boolean indicating whether to include objects that have no value set for the enumeration property.',
        example: null,
      }),
    operationType: z
      .literal('ENUMERATION')
      .default('ENUMERATION')
      .openapi({
        description:
          "A string indicating the type of operation, which is 'ENUMERATION' by default.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator to be used in the enumeration operation.',
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
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('ALL_PROPERTY')
      .default('ALL_PROPERTY')
      .openapi({
        description:
          "A string indicating the type of operation. It is expected to be 'ALL_PROPERTY_TYPES'.",
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
        description: 'An integer specifying the lower bound of the range, in int64 format.',
        example: null,
      }),
    operationType: z
      .literal('NUMBER_RANGED')
      .default('NUMBER_RANGED')
      .openapi({
        description:
          "A string that indicates the type of operation. The default value is 'RANGED_NUMBER'.",
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
        description: 'An integer specifying the upper bound of the range, in int64 format.',
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
          'A boolean indicating whether objects without a value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('MULTISTRING')
      .default('MULTISTRING')
      .openapi({
        description:
          "A string that specifies the type of operation. The default value is 'MULTISTRING'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operator used in the operation.',
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
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    month: z
      .string()
      .openapi({
        description: 'A string representing the month component of the date.',
        example: null,
      }),
    operationType: z
      .literal('DATE')
      .default('DATE')
      .openapi({
        description:
          "A string that specifies the type of operation. The default and only valid value is 'DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operator used in the date operation. The specific operators are not detailed in the spec.',
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
          "A string specifying the start month of the fiscal year. Valid values include 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', and 'DECEMBER'.",
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects without a set value should be included in the operation.',
        example: null,
      }),
    operationType: z
      .literal('CALENDAR_DATE')
      .default('CALENDAR_DATE')
      .openapi({
        description:
          "A string that specifies the type of operation. The default and only valid value is 'CALENDAR_DATE'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operator used in the operation. The specific operators available are not detailed in the specification.',
        example: null,
      }),
    timeUnit: z
      .string()
      .openapi({
        description:
          'A string representing the unit of time involved in the operation. The specific time units available are not detailed in the specification.',
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
        description:
          'A boolean indicating whether the fiscal year should be used in the operation.',
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
          'A string providing a default value for comparison if the property being compared has no value.',
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
        description:
          "A string indicating the type of operation, which is 'COMPARATIVE_STRING' for this component.",
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
        description: "A string indicating the type of filter, which is 'PROPERTY' by default.",
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
          'Defines the operation to be performed on the property for filtering. This can be one of several operation types, such as boolean, number, string, date, and more, depending on the schema referenced.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description: 'The name of the property to filter by, represented as a string.',
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
        description: 'A string indicating the category of the association.',
        example: null,
      }),
    associationTypeId: z
      .int32()
      .openapi({
        description: 'An integer representing the unique identifier for the type of association.',
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
          'An object used to refine the filter by combining multiple criteria. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
        example: null,
      }),
    filterType: z
      .literal('ASSOCIATION')
      .default('ASSOCIATION')
      .openapi({
        description: "A string indicating the type of filter. Defaults to 'ASSOCIATION'.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the list to filter.',
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the filter.',
        example: null,
      }),
    toObjectType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the type of object that the association points to.',
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the type ID of the object that the association points to.',
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
          'An optional refinement criterion used to coalesce data. It can be one of several predefined schemas, such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
        example: null,
      }),
    enableTracking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean indicating whether tracking is enabled for the page view analytics.',
        example: null,
      }),
    filterType: z
      .literal('PAGE_VIEW')
      .default('PAGE_VIEW')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. For this component, it defaults to 'PAGE_VIEW'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operator used in the filter. This determines how the filter criteria are applied.',
        example: null,
      }),
    pageUrl: z
      .string()
      .openapi({
        description:
          'A string representing the URL of the page for which analytics data is being filtered.',
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
          'An optional refinement criterion used to prune data. Similar to coalescingRefineBy, it can be one of several predefined schemas.',
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
          'An optional parameter that allows further refinement of the filter by combining multiple conditions. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
        example: null,
      }),
    ctaName: z
      .string()
      .openapi({
        description: 'A string representing the name of the Call-to-Action (CTA) to be filtered.',
        example: null,
      }),
    filterType: z
      .literal('CTA')
      .default('CTA')
      .openapi({
        description:
          "A string that specifies the type of filter being used. The default value is 'CTA'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string that defines the operation to be performed by the filter.',
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
          'An optional parameter that allows further refinement of the filter by excluding certain conditions. It can be one of several predefined schemas such as PublicNumOccurrencesRefineBy or PublicTimePointOperation.',
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
          'An optional refinement criterion that can be one of several types, such as occurrences or timestamp-based refinements.',
        example: null,
      }),
    eventId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier for the event being filtered.',
        example: null,
      }),
    filterType: z
      .literal('EVENT')
      .default('EVENT')
      .openapi({
        description: "A string indicating the type of filter. The default value is 'EVENT'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description: 'A string representing the operator used in the filter.',
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
          'An optional refinement criterion used to narrow down the filter results, similar to coalescingRefineBy, with options like occurrences or timestamp-based refinements.',
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
          'An object used to refine the filter by combining multiple criteria, such as occurrences or timestamps.',
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
          "A string that determines the operation to be performed. Valid values include 'FILLED_OUT' and 'NOT_FILLED_OUT'.",
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
          'An object used to refine the filter by specific criteria, such as occurrences or timestamps.',
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
          'An optional refinement criterion that can be one of several types, such as occurrences or timestamp-based refinements.',
        example: null,
      }),
    filterType: z
      .literal('FORM_SUBMISSION_ON_PAGE')
      .default('FORM_SUBMISSION_ON_PAGE')
      .openapi({
        description:
          "A string that specifies the type of filter. The default value is 'FORM_SUBMISSION_ON_PAGE'.",
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
          "A string that determines the operation to be applied. Valid values include 'FILLED_OUT' and 'NOT_FILLED_OUT'.",
        example: null,
      }),
    pageId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the page.',
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
          'An optional refinement criterion that can be one of several types, such as occurrences or timestamp-based refinements.',
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
          'An object that defines the operation to be performed on the property. The specific structure of this object can vary based on the type of operation being applied.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description: 'A string representing the property name associated with the event filter.',
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
          'A string representing the unique identifier of the event type being filtered.',
        example: null,
      }),
    filterLines: z
      .array(PublicEventFilterMetadataSchema)
      .openapi({
        description:
          'An array of filter metadata objects that define the specific conditions or criteria for the event filter. Each item in the array is a reference to a PublicEventFilterMetadata schema.',
        example: null,
      }),
    filterType: z
      .literal('INTEGRATION_EVENT')
      .default('INTEGRATION_EVENT')
      .openapi({
        description:
          "A string that indicates the type of filter being applied. This property has a default value of 'INTEGRATION_EVENT'.",
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
          'An array of strings indicating the subscription statuses that are accepted in the filter.',
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
      .openapi({
        description:
          'A string representing the type of subscription, which may be used to further refine the filter.',
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
            'An array of strings representing the opt-in states that are accepted for the filter.',
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
            "A string that specifies the type of filter. Default value is 'COMMUNICATION_SUBSCRIPTION'.",
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
          "A string representing the type of filter. The default value is 'SURVEY_MONKEY', and it must be 'SURVEY_MONKEY'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operation to be applied in the filter. The specific operations available are not detailed in the spec.',
        example: null,
      }),
    surveyId: z
      .string()
      .openapi({
        description:
          'A string that specifies the unique identifier of the SurveyMonkey survey to be filtered.',
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
          "A string representing the type of filter, which is 'SURVEY_MONKEY_VALUE' for this component.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string representing the operator used in the filter to compare survey response values.',
        example: null,
      }),
    surveyAnswerColId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string identifying the column of the survey answer that the filter evaluates.',
        example: null,
      }),
    surveyAnswerRowId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string identifying the row of the survey answer that the filter evaluates.',
        example: null,
      }),
    surveyId: z
      .string()
      .openapi({
        description:
          'A string that uniquely identifies the SurveyMonkey survey to which the filter is applied.',
        example: null,
      }),
    surveyQuestion: z
      .string()
      .openapi({
        description:
          'A string representing the specific question within the survey that the filter targets.',
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
          'An object that defines the criteria for comparing survey response values. It can be one of several types, such as boolean, number, string, or date operations.',
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
        description: 'A string representing the operator used in the filter condition.',
        example: null,
      }),
    webinarId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies the webinar being filtered.',
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
        description:
          'A string that uniquely identifies the application associated with the email event.',
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
        description: "A string indicating the type of filter. The default value is 'EMAIL_EVENT'.",
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
          "A string representing the operation type for the filter. Valid values include 'LINK_CLICKED', 'MARKED_SPAM', 'OPENED', 'OPENED_BUT_LINK_NOT_CLICKED', 'OPENED_BUT_NOT_REPLIED', 'REPLIED', 'UNSUBSCRIBED', 'BOUNCED', 'RECEIVED', 'RECEIVED_BUT_NOT_OPENED', 'SENT', 'SENT_BUT_LINK_NOT_CLICKED', and 'SENT_BUT_NOT_RECEIVED'.",
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
          'An object that allows further refinement of the filter based on various criteria such as occurrences or time points.',
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
          "A string indicating the type of filter, which is 'PRIVACY' for this component. It is a constant value used to identify the filter type.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string specifying the operation or condition to be applied in the filter. The exact operations are not detailed in the specification.',
        example: null,
      }),
    privacyName: z
      .string()
      .openapi({
        description:
          'A string representing the name of the privacy setting or preference that the filter will apply to.',
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
        description: 'A string that specifies the ad network where the search is being conducted.',
        example: null,
      }),
    entityType: z
      .string()
      .openapi({
        description: 'A string that represents the type of entity being searched for in the ads.',
        example: null,
      }),
    filterType: z
      .literal('ADS_SEARCH')
      .default('ADS_SEARCH')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. The default value is 'ADS_SEARCH'.",
        example: null,
      }),
    operator: z
      .string()
      .openapi({
        description:
          'A string that defines the operation or condition applied to the search terms.',
        example: null,
      }),
    searchTermType: z
      .string()
      .openapi({
        description: 'A string that indicates the type of search term being used in the filter.',
        example: null,
      }),
    searchTerms: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings containing the search terms used to filter the ads.',
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
          "A string that specifies the type of filter being applied. The default value is 'ADS_TIME'.",
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
          'An object that defines the criteria for refining the pruning of the filter. It can be one of several types, such as PublicNumOccurrencesRefineBy, PublicSetOccurrencesRefineBy, or various timestamp refine types.',
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
        description: 'The unique identifier for the list filter. It is a string value.',
        example: null,
      }),
    inListType: z
      .string()
      .openapi({
        description: 'The type of the list filter, represented as a string.',
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
        description: "A string that specifies the type of filter. The default value is 'IN_LIST'.",
        example: null,
      }),
    listId: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the list to filter against.',
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
          'An optional refinement criterion that can be one of several predefined schemas, used to combine multiple conditions for event filtering.',
        example: null,
      }),
    eventTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier for the type of event being filtered.',
        example: null,
      }),
    filterLines: z
      .array(PublicEventFilterMetadataSchema)
      .openapi({
        description:
          'An array of filter metadata objects, each defining a specific condition or set of conditions to apply to the event data.',
        example: null,
      }),
    filterType: z
      .literal('UNIFIED_EVENTS')
      .default('UNIFIED_EVENTS')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. The default value is 'UNIFIED_EVENTS'.",
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
          'An optional refinement criterion that can be one of several predefined schemas, used to narrow down the events based on specific conditions.',
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
        description: "A string representing the type of filter. The default value is 'CONSTANT'.",
        example: null,
      }),
    shouldAccept: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the filter should accept the criteria. If true, the criteria are accepted; if false, they are rejected.',
        example: null,
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing the source of the filter. This property is optional.',
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
            description:
              "A string indicating the type of filter branch. The default value is 'AND'.",
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
              'An array of nested filter branches, each of which can be another AND, OR, NOT_ALL, NOT_ANY, RESTRICTED, UNIFIED_EVENTS, or ASSOCIATION filter branch.',
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
              'An array of filters that must all be satisfied for this branch to evaluate as true. Each filter can be a property filter, association filter, or other types of analytics and event filters.',
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

const PublicCrmObjectTagSchema = z
  .object({
    color: z
      .string()
      .openapi({
        description: 'The color associated with the CRM object tag, represented as a string.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the tag was created, in ISO 8601 format.',
        example: null,
      }),
    createdBy: z
      .preprocess(
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
        description: 'An integer representing the ID of the user who created the tag.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the CRM object tag.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .openapi({
        description: 'An integer indicating the display order of the tag.',
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
      .openapi({
        description:
          'A complex object defining the filter branch associated with the tag, which can include various filter types and branches.',
        example: null,
      }),
    filterPipelineIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the pipeline IDs that this tag is associated with.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier for the CRM object tag, represented as a string.',
        example: null,
      }),
    lastModifiedBy: z
      .preprocess(
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
        description: 'An integer representing the ID of the user who last modified the tag.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the CRM object tag, represented as a string.',
        example: null,
      }),
    objectTypeId: z
      .string()
      .openapi({
        description:
          'The identifier for the type of object this tag is associated with, represented as a string.',
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the tag was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'color',
      'createdAt',
      'displayOrder',
      'filterBranch',
      'filterPipelineIds',
      'id',
      'name',
      'objectTypeId',
      'updatedAt',
    ],
    example: null,
  })
  .openapi('PublicCrmObjectTag')

const CollectionResponsePublicCrmObjectTagNoPagingSchema = z
  .object({
    results: z
      .array(PublicCrmObjectTagSchema)
      .openapi({
        description:
          'An array of CRM object tags. Each item in the array is a PublicCrmObjectTag object.',
        example: null,
      }),
  })
  .openapi({ required: ['results'], example: null })
  .openapi('CollectionResponsePublicCrmObjectTagNoPaging')

const CreatePublicCrmObjectTagRequestSchema = z
  .object({
    color: z
      .string()
      .openapi({
        description: 'The color associated with the CRM object tag. It is a string value.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional information about the CRM object tag.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .openapi({
        description: 'An integer indicating the order in which the tag should be displayed.',
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
      .openapi({
        description:
          'Defines the filter criteria for the CRM object tag. It can be one of several filter branch types.',
        example: null,
      }),
    filterPipelineIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of the pipelines to which the tag applies.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'The name of the CRM object tag. It is a string value.',
        example: null,
      }),
  })
  .openapi({
    required: ['color', 'displayOrder', 'filterBranch', 'filterPipelineIds', 'name'],
    example: null,
  })
  .openapi('CreatePublicCrmObjectTagRequest')

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
          'Context about the error condition. It is an object where each key is a string and each value is an array of strings, providing additional information about the error.',
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
          'An object containing additional context about the error, with properties that are arrays of strings.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A string that acts as a unique identifier for the error instance, useful for tracking and debugging.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of ErrorDetail objects, each providing additional information about specific issues related to the error.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An object containing URLs that provide further information or actions related to the error.',
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
        description:
          'A string providing a more specific classification of the error within its category.',
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

const PatchPublicCrmObjectTagRequestSchema = z
  .object({
    color: z
      .object({})
      .openapi({
        description: 'An object representing the new color for the CRM object tag.',
        example: null,
      }),
    description: z
      .object({})
      .openapi({
        description: 'An object representing the new description for the CRM object tag.',
        example: null,
      }),
    filterBranch: z
      .object({})
      .openapi({
        description: 'An object representing the new filter branch for the CRM object tag.',
        example: null,
      }),
    filterPipelineIds: z
      .object({})
      .openapi({
        description:
          'An object representing the new set of pipeline IDs associated with the CRM object tag.',
        example: null,
      }),
    name: z
      .object({})
      .openapi({
        description: 'An object representing the new name for the CRM object tag.',
        example: null,
      }),
  })
  .openapi({
    required: ['color', 'description', 'filterBranch', 'filterPipelineIds', 'name'],
    example: null,
  })
  .openapi('PatchPublicCrmObjectTagRequest')

const ReplacePublicCrmObjectTagRequestSchema = z
  .object({
    color: z
      .string()
      .openapi({
        description: 'A string specifying the color associated with the CRM object tag.',
        example: null,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the CRM object tag.',
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
      .openapi({
        description:
          'An object that defines the filter branch for the CRM object tag. It can be one of several filter branch types, such as PublicOrFilterBranch or PublicAndFilterBranch.',
        example: null,
      }),
    filterPipelineIds: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the IDs of the pipelines to which the CRM object tag is applicable.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description: 'A string representing the name of the CRM object tag.',
        example: null,
      }),
  })
  .openapi({ required: ['color', 'filterBranch', 'filterPipelineIds', 'name'], example: null })
  .openapi('ReplacePublicCrmObjectTagRequest')

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
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCrmObjectTags202609ObjectTypeIdRoute = createRoute({
  method: 'get',
  path: '/crm/object-tags/2026-09/{objectTypeId}',
  tags: ['Basic'],
  summary: 'Retrieve tags',
  description:
    'Retrieve CRM object tags for a specified object type in your HubSpot account. This endpoint allows you to access tags associated with a particular object type, which can be useful for categorizing and managing CRM data effectively.',
  operationId: 'get-/crm/object-tags/2026-09/{objectTypeId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the object type for which to retrieve tags.',
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
          schema: CollectionResponsePublicCrmObjectTagNoPagingSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const postCrmObjectTags202609ObjectTypeIdRoute = createRoute({
  method: 'post',
  path: '/crm/object-tags/2026-09/{objectTypeId}',
  tags: ['Basic'],
  summary: 'Create tag',
  description:
    'Create a new CRM object tag for a specified object type in your HubSpot account. This endpoint allows you to define properties such as name, color, and filter criteria for the tag. It is useful for categorizing and organizing CRM objects based on custom criteria.',
  operationId: 'post-/crm/object-tags/2026-09/{objectTypeId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description:
              'The unique identifier of the object type for which the tag is being created.',
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
        'application/json': { schema: CreatePublicCrmObjectTagRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCrmObjectTagSchema, example: null } },
      headers: z.object({
        Location: {
          description: 'URL of the newly created resource',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'URL of the newly created resource',
              param: { required: false },
              example: null,
            }),
        },
      }),
    },
    default: ErrorResponse,
  },
  security: [],
})

export const getCrmObjectTags202609ObjectTypeIdTagIdRoute = createRoute({
  method: 'get',
  path: '/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  tags: ['Basic'],
  summary: 'Retrieve Tag',
  description:
    'Retrieve a specific CRM object tag using its unique identifiers. This endpoint is useful for obtaining details about a particular tag associated with a CRM object type, which can help in managing or analyzing tagged data within your HubSpot account.',
  operationId: 'get-/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the CRM object type to which the tag belongs.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
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
            name: 'tagId',
            in: 'path',
            description: 'The unique identifier of the tag to retrieve.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCrmObjectTagSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const putCrmObjectTags202609ObjectTypeIdTagIdRoute = createRoute({
  method: 'put',
  path: '/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  tags: ['Basic'],
  summary: 'Update tag (Replace)',
  description:
    'Update an existing CRM object tag in your HubSpot account. This operation allows you to modify the properties of a tag identified by its objectTypeId and tagId. Use this endpoint to change tag details such as name, color, and associated filters.',
  operationId: 'put-/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the object type to which the tag belongs.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
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
            name: 'tagId',
            in: 'path',
            description: 'The unique identifier of the tag to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ReplacePublicCrmObjectTagRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCrmObjectTagSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})

export const deleteCrmObjectTags202609ObjectTypeIdTagIdRoute = createRoute({
  method: 'delete',
  path: '/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  tags: ['Basic'],
  summary: 'Delete',
  description:
    'Delete a specific CRM object tag identified by its object type ID and tag ID. This operation will remove the tag from the system, and it will no longer be available for use or reference.',
  operationId: 'delete-/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the object type to which the tag belongs.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
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
            name: 'tagId',
            in: 'path',
            description: 'The unique identifier of the tag to be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [],
})

export const patchCrmObjectTags202609ObjectTypeIdTagIdRoute = createRoute({
  method: 'patch',
  path: '/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  tags: ['Basic'],
  summary: 'Update tag (Partial)',
  description:
    'Update an existing CRM object tag in your HubSpot account. This endpoint allows you to modify properties of a specific tag identified by its tagId and objectTypeId. Use this to change tag attributes such as color, description, or associated filters.',
  operationId: 'patch-/crm/object-tags/2026-09/{objectTypeId}/{tagId}',
  request: {
    params: z.object({
      objectTypeId: z
        .string()
        .openapi({
          param: {
            name: 'objectTypeId',
            in: 'path',
            description: 'The unique identifier of the object type associated with the tag.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
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
            name: 'tagId',
            in: 'path',
            description: 'The unique identifier of the tag to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'integer', format: 'int64', example: null },
          },
          example: null,
        }),
    }),
    body: {
      content: {
        'application/json': { schema: PatchPublicCrmObjectTagRequestSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PublicCrmObjectTagSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [],
})
