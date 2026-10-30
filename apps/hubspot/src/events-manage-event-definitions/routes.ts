import { createRoute, z } from '@hono/zod-openapi'

const PropertyFilterContextSchema = z
  .object({
    objectTypeId: z
      .string()
      .openapi({
        description:
          'A string that uniquely identifies the type of object to which the property filter is applied.',
        example: null,
      }),
  })
  .openapi({ required: ['objectTypeId'], example: null })
  .openapi('PropertyFilterContext')

const BoolPropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
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
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['HAS_EVER_BEEN_EQUAL_TO', 'HAS_NEVER_BEEN_EQUAL_TO', 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO'])
      .openapi({
        description:
          "A string representing the operation to be performed, with valid values including 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'HAS_EVER_BEEN_EQUAL_TO', and 'HAS_NEVER_BEEN_EQUAL_TO'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('bool')
      .default('bool')
      .openapi({
        description: "A string indicating the type of property, with a default value of 'bool'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the rendering specification for the operation.',
        example: null,
      }),
    value: z
      .boolean()
      .openapi({
        description: 'A boolean indicating the value to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'bool',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'value',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('BoolPropertyOperation')

const NumberPropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
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
      .string()
      .openapi({
        description: 'A string that specifies the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'HAS_EVER_BEEN_EQUAL_TO',
        'HAS_NEVER_BEEN_EQUAL_TO',
        'IS_EQUAL_TO',
        'IS_GREATER_THAN',
        'IS_GREATER_THAN_OR_EQUAL_TO',
        'IS_LESS_THAN',
        'IS_LESS_THAN_OR_EQUAL_TO',
        'IS_NOT_EQUAL_TO',
      ])
      .openapi({
        description:
          "A string representing the operation to be performed on the number property. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'IS_GREATER_THAN', 'IS_GREATER_THAN_OR_EQUAL_TO', 'IS_LESS_THAN', 'IS_LESS_THAN_OR_EQUAL_TO', 'HAS_EVER_BEEN_EQUAL_TO', and 'HAS_NEVER_BEEN_EQUAL_TO'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('number')
      .default('number')
      .openapi({
        description:
          "A string that specifies the type of property operation, with a default value of 'number'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that provides specifications for rendering the operation.',
        example: null,
      }),
    value: z
      .number()
      .openapi({
        description: 'A number that represents the value to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'number',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'value',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('NumberPropertyOperation')

const StringPropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value to be used if no other value is set.',
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
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'CONTAINS',
        'DOES_NOT_CONTAIN',
        'ENDS_WITH',
        'HAS_EVER_BEEN_EQUAL_TO',
        'HAS_EVER_CONTAINED',
        'HAS_NEVER_BEEN_EQUAL_TO',
        'HAS_NEVER_CONTAINED',
        'IS_EQUAL_TO',
        'IS_NOT_EQUAL_TO',
        'STARTS_WITH',
      ])
      .openapi({
        description:
          "A string representing the operation to be performed, with valid values including 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'CONTAINS', 'DOES_NOT_CONTAIN', 'STARTS_WITH', 'ENDS_WITH', 'HAS_EVER_BEEN_EQUAL_TO', 'HAS_NEVER_BEEN_EQUAL_TO', 'HAS_EVER_CONTAINED', and 'HAS_NEVER_CONTAINED'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({ description: 'A string representing the name of the operator.', example: null }),
    propertyType: z
      .literal('string')
      .default('string')
      .openapi({
        description: "A string indicating the type of property, defaulting to 'string'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that provides specifications for rendering the operation.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string that specifies the value to be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'string',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'value',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('StringPropertyOperation')

const DateTimePropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
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
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_AFTER', 'IS_AFTER_DATE', 'IS_BEFORE', 'IS_BEFORE_DATE', 'IS_EQUAL_TO'])
      .openapi({
        description:
          "A string representing the operation to be performed, such as 'IS_BEFORE', 'IS_AFTER', 'IS_EQUAL_TO', 'IS_BEFORE_DATE', or 'IS_AFTER_DATE'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('datetime')
      .default('datetime')
      .openapi({
        description:
          "A string indicating the type of property, with a default value of 'datetime'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the rendering specification for the operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the operation requires time zone conversion.',
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
        description: 'An integer representing the timestamp for the operation, in int64 format.',
        example: null,
      }),
  })
  .openapi({
    title: 'datetime',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'requiresTimeZoneConversion',
      'timestamp',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('DateTimePropertyOperation')

const RangedDatePropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    lowerBoundTimestamp: z
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
          'An integer representing the lower bound of the date range as a Unix timestamp in milliseconds.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string representing the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_BETWEEN', 'IS_NOT_BETWEEN'])
      .openapi({
        description:
          "A string representing the operation to be performed, with valid values including 'IS_BETWEEN' and 'IS_NOT_BETWEEN'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('datetime-ranged')
      .default('datetime-ranged')
      .openapi({
        description: "A string indicating the type of property, defaulting to 'datetime-ranged'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the rendering specification for the operation.',
        example: null,
      }),
    requiresTimeZoneConversion: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether time zone conversion is required for this operation.',
        example: null,
      }),
    upperBoundTimestamp: z
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
          'An integer representing the upper bound of the date range as a Unix timestamp in milliseconds.',
        example: null,
      }),
  })
  .openapi({
    title: 'datetime-ranged',
    required: [
      'includeObjectsWithNoValueSet',
      'lowerBoundTimestamp',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'requiresTimeZoneConversion',
      'upperBoundTimestamp',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RangedDatePropertyOperation')

const ComparativeDatePropertyOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'A string specifying the name of the property to be compared against.',
        example: null,
      }),
    defaultComparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the default value to compare against if the comparison property is not set.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the default value to use if no specific comparison value is set.',
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
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_AFTER', 'IS_BEFORE'])
      .openapi({
        description:
          "A string representing the comparison operator used in the operation. Valid values include 'IS_BEFORE' and 'IS_AFTER'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('datetime-comparative')
      .default('datetime-comparative')
      .openapi({
        description:
          "A string indicating the type of property operation, which is 'datetime-comparative' for this component.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing specifications for rendering the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'datetime-comparative',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ComparativeDatePropertyOperation')

const ComparativeBoolPropertyOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'A string specifying the name of the property to compare against.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value to use if no value is set.',
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
      .string()
      .openapi({
        description: 'A string specifying the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_EQUAL_TO', 'IS_NOT_EQUAL_TO'])
      .openapi({
        description:
          "A string representing the comparison operator to be used. Valid values are 'IS_EQUAL_TO' and 'IS_NOT_EQUAL_TO'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('bool-comparative')
      .default('bool-comparative')
      .openapi({
        description:
          "A string indicating the type of property operation, defaulting to 'bool-comparative'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that may define how the operation should be rendered, though specifics are not detailed in the spec.',
        example: null,
      }),
  })
  .openapi({
    title: 'bool-comparative',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ComparativeBoolPropertyOperation')

const ComparativeNumberPropertyOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'A string representing the name of the property to compare against.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the default value to use if no comparison value is set.',
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
      .string()
      .openapi({
        description: 'A string representing the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'IS_EQUAL_TO',
        'IS_GREATER_THAN',
        'IS_GREATER_THAN_OR_EQUAL_TO',
        'IS_LESS_THAN',
        'IS_LESS_THAN_OR_EQUAL_TO',
        'IS_NOT_EQUAL_TO',
      ])
      .openapi({
        description:
          "A string representing the comparison operator. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'IS_GREATER_THAN', 'IS_GREATER_THAN_OR_EQUAL_TO', 'IS_LESS_THAN', and 'IS_LESS_THAN_OR_EQUAL_TO'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({ description: 'A string representing the name of the operator.', example: null }),
    propertyType: z
      .literal('number-comparative')
      .default('number-comparative')
      .openapi({
        description:
          "A string indicating the type of property operation. Defaults to 'number-comparative'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that specifies how the operation should be rendered.',
        example: null,
      }),
  })
  .openapi({
    title: 'number-comparative',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ComparativeNumberPropertyOperation')

const ComparativeStringPropertyOperationSchema = z
  .object({
    comparisonPropertyName: z
      .string()
      .openapi({
        description: 'The name of the property to compare against, represented as a string.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the default value to use in the operation if no value is set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that do not have a value set for the property.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string representing the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'CONTAINS',
        'DOES_NOT_CONTAIN',
        'ENDS_WITH',
        'IS_EQUAL_TO',
        'IS_NOT_EQUAL_TO',
        'STARTS_WITH',
      ])
      .openapi({
        description:
          "A string representing the comparison operation to perform. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'CONTAINS', 'DOES_NOT_CONTAIN', 'STARTS_WITH', and 'ENDS_WITH'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('string-comparative')
      .default('string-comparative')
      .openapi({
        description:
          "A string indicating the type of property operation, defaulting to 'string-comparative'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying how the operation should be rendered.',
        example: null,
      }),
  })
  .openapi({
    title: 'string-comparative',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ComparativeStringPropertyOperation')

const ComparativePropertyUpdatedOperationSchema = z
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
          'A string that specifies the default comparison value to use if no comparison value is set.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that specifies the default value to use if no value is set.',
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
      .string()
      .openapi({
        description: 'A string representing the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_AFTER', 'IS_BEFORE'])
      .openapi({
        description:
          "A string that defines the comparison operator to use, with valid values being 'IS_BEFORE' and 'IS_AFTER'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string that provides a human-readable name for the operator.',
        example: null,
      }),
    propertyType: z
      .literal('property-updated-comparative')
      .default('property-updated-comparative')
      .openapi({
        description:
          "A string that specifies the type of property operation, with a default value of 'property-updated-comparative'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that defines the rendering specification for the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'property-updated-comparative',
    required: [
      'comparisonPropertyName',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ComparativePropertyUpdatedOperation')

const RollingDateRangePropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
        example: null,
      }),
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
          'An integer specifying the number of days for the rolling date range operation.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'IS_LESS_THAN_X_DAYS_AGO',
        'IS_LESS_THAN_X_DAYS_FROM_NOW',
        'IS_MORE_THAN_X_DAYS_AGO',
        'IS_MORE_THAN_X_DAYS_FROM_NOW',
      ])
      .openapi({
        description:
          "A string specifying the operation to perform, with valid values including 'IS_LESS_THAN_X_DAYS_AGO', 'IS_MORE_THAN_X_DAYS_AGO', 'IS_LESS_THAN_X_DAYS_FROM_NOW', and 'IS_MORE_THAN_X_DAYS_FROM_NOW'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('datetime-rolling')
      .default('datetime-rolling')
      .openapi({
        description:
          "A string indicating the type of property, with a default value of 'datetime-rolling'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that specifies the rendering specification for the operation.',
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
    title: 'datetime-rolling',
    required: [
      'includeObjectsWithNoValueSet',
      'numberOfDays',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'requiresTimeZoneConversion',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RollingDateRangePropertyOperation')

const RollingPropertyUpdatedOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that provides a default value for the operation.',
        example: null,
      }),
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
        description: 'An integer representing the number of days to consider for the operation.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string that specifies the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['NOT_UPDATED_IN_LAST_X_DAYS', 'UPDATED_IN_LAST_X_DAYS'])
      .openapi({
        description:
          "A string specifying the operation to be performed, with valid values being 'UPDATED_IN_LAST_X_DAYS' and 'NOT_UPDATED_IN_LAST_X_DAYS'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('rolling-property-updated')
      .default('rolling-property-updated')
      .openapi({
        description:
          "A string indicating the type of property operation, which is 'rolling-property-updated'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that specifies the rendering specification for the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'rolling-property-updated',
    required: [
      'includeObjectsWithNoValueSet',
      'numberOfDays',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RollingPropertyUpdatedOperation')

const EnumerationPropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
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
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'CONTAINS_ALL',
        'DOES_NOT_CONTAIN_ALL',
        'HAS_EVER_BEEN_ANY_OF',
        'HAS_EVER_BEEN_EXACTLY',
        'HAS_EVER_CONTAINED_ALL',
        'HAS_NEVER_BEEN_ANY_OF',
        'HAS_NEVER_BEEN_EXACTLY',
        'HAS_NEVER_CONTAINED_ALL',
        'IS_ANY_OF',
        'IS_EXACTLY',
        'IS_NONE_OF',
        'IS_NOT_EXACTLY',
      ])
      .openapi({
        description:
          "A string specifying the operation to perform, with valid values including 'IS_ANY_OF', 'IS_NONE_OF', 'IS_EXACTLY', 'IS_NOT_EXACTLY', 'CONTAINS_ALL', 'DOES_NOT_CONTAIN_ALL', 'HAS_EVER_BEEN_ANY_OF', 'HAS_NEVER_BEEN_ANY_OF', 'HAS_EVER_BEEN_EXACTLY', 'HAS_NEVER_BEEN_EXACTLY', 'HAS_EVER_CONTAINED_ALL', and 'HAS_NEVER_CONTAINED_ALL'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('enumeration')
      .default('enumeration')
      .openapi({
        description:
          "A string indicating the type of property, which is 'enumeration' for this operation.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that specifies the rendering specifications for the operation.',
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
    title: 'enumeration',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'values',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('EnumerationPropertyOperation')

const NumOccurrencesRefineBySchema = z
  .object({
    maxOccurrences: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the maximum number of times an event can occur.',
        example: null,
      }),
    minOccurrences: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the minimum number of times an event must occur.',
        example: null,
      }),
    type: z
      .literal('NumOccurrencesRefineBy')
      .default('NumOccurrencesRefineBy')
      .openapi({
        description:
          "A string that specifies the type of refinement, which is 'NumOccurrencesRefineBy'.",
        example: null,
      }),
  })
  .openapi({
    title: 'NumOccurrencesRefineBy',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('NumOccurrencesRefineBy')

const SetOccurrencesRefineBySchema = z
  .object({
    setType: z
      .enum(['ALL', 'ALL_INCLUDE_EMPTY', 'ANY', 'ANY_INCLUDE_EMPTY', 'NONE', 'NONE_EXCLUDE_EMPTY'])
      .openapi({
        description:
          "A string that indicates the set type for the refinement operation. Valid values include 'ALL', 'ALL_INCLUDE_EMPTY', 'ANY', 'NONE', 'NONE_EXCLUDE_EMPTY', and 'ANY_INCLUDE_EMPTY'.",
        example: null,
      }),
    type: z
      .literal('SetOccurrencesRefineBy')
      .default('SetOccurrencesRefineBy')
      .openapi({
        description:
          "A string that specifies the type of refinement operation. The default value is 'SetOccurrencesRefineBy'.",
        example: null,
      }),
  })
  .openapi({
    title: 'SetOccurrencesRefineBy',
    required: ['setType', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('SetOccurrencesRefineBy')

const TimeOffsetSchema = z
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
          'An integer specifying the amount of time to offset, measured in the unit defined by the timeUnit property.',
        example: null,
      }),
    offsetDirection: z
      .enum(['FUTURE', 'PAST'])
      .openapi({
        description:
          "A string indicating the direction of the time offset. Valid values are 'PAST' and 'FUTURE'.",
        example: null,
      }),
    timeUnit: z
      .enum(['DAYS', 'HOURS', 'MINUTES', 'WEEKS'])
      .openapi({
        description:
          "A string representing the unit of time for the offset. Valid values include 'WEEKS', 'DAYS', 'HOURS', and 'MINUTES'.",
        example: null,
      }),
  })
  .openapi({ required: ['amount', 'offsetDirection', 'timeUnit'], example: null })
  .openapi('TimeOffset')

const RelativeComparativeTimestampRefineBySchema = z
  .object({
    comparison: z
      .enum(['AFTER', 'BEFORE'])
      .openapi({
        description:
          "A string indicating the type of comparison to be made, with valid values being 'BEFORE' or 'AFTER'.",
        example: null,
      }),
    timeOffset: TimeOffsetSchema,
    type: z
      .literal('RelativeComparativeTimestampRefineBy')
      .default('RelativeComparativeTimestampRefineBy')
      .openapi({
        description:
          "A string indicating the type of refinement operation, which is 'RelativeComparativeTimestampRefineBy'.",
        example: null,
      }),
  })
  .openapi({
    title: 'RelativeComparativeTimestampRefineBy',
    required: ['comparison', 'timeOffset', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RelativeComparativeTimestampRefineBy')

const RelativeRangedTimestampRefineBySchema = z
  .object({
    lowerBoundOffset: TimeOffsetSchema,
    rangeType: z
      .enum(['BETWEEN', 'NOT_BETWEEN'])
      .openapi({
        description:
          "A string indicating the type of range operation, with valid values 'BETWEEN' and 'NOT_BETWEEN'.",
        example: null,
      }),
    type: z
      .literal('RelativeRangedTimestampRefineBy')
      .default('RelativeRangedTimestampRefineBy')
      .openapi({
        description:
          "A string indicating the type of refinement, with a default value of 'RelativeRangedTimestampRefineBy'.",
        example: null,
      }),
    upperBoundOffset: TimeOffsetSchema,
  })
  .openapi({
    title: 'RelativeRangedTimestampRefineBy',
    required: ['lowerBoundOffset', 'rangeType', 'type', 'upperBoundOffset'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RelativeRangedTimestampRefineBy')

const AbsoluteComparativeTimestampRefineBySchema = z
  .object({
    comparison: z
      .enum(['AFTER', 'BEFORE'])
      .openapi({
        description:
          "A string indicating the type of comparison to be made with the timestamp. Valid values are 'BEFORE' and 'AFTER'.",
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
          'An integer representing the specific timestamp to be used in the comparison, formatted as an int64.',
        example: null,
      }),
    type: z
      .literal('AbsoluteComparativeTimestampRefineBy')
      .default('AbsoluteComparativeTimestampRefineBy')
      .openapi({
        description:
          "A string that specifies the type of refinement, with a default value of 'AbsoluteComparativeTimestampRefineBy'.",
        example: null,
      }),
  })
  .openapi({
    title: 'AbsoluteComparativeTimestampRefineBy',
    required: ['comparison', 'timestamp', 'type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AbsoluteComparativeTimestampRefineBy')

const AbsoluteRangedTimestampRefineBySchema = z
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
          'An integer representing the lower bound of the timestamp range, in milliseconds since the Unix epoch.',
        example: null,
      }),
    rangeType: z
      .enum(['BETWEEN', 'NOT_BETWEEN'])
      .openapi({
        description:
          "A string that indicates the type of range comparison. Valid values are 'BETWEEN' and 'NOT_BETWEEN'.",
        example: null,
      }),
    type: z
      .literal('AbsoluteRangedTimestampRefineBy')
      .default('AbsoluteRangedTimestampRefineBy')
      .openapi({
        description:
          "A string that specifies the type of the component, which is 'AbsoluteRangedTimestampRefineBy'.",
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
          'An integer representing the upper bound of the timestamp range, in milliseconds since the Unix epoch.',
        example: null,
      }),
  })
  .openapi({
    title: 'AbsoluteRangedTimestampRefineBy',
    required: ['lowerTimestamp', 'rangeType', 'type', 'upperTimestamp'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AbsoluteRangedTimestampRefineBy')

const AllHistoryRefineBySchema = z
  .object({
    type: z
      .literal('AllHistoryRefineBy')
      .default('AllHistoryRefineBy')
      .openapi({
        description:
          "A string that specifies the type of refinement. The default value is 'AllHistoryRefineBy', and it is the only valid value for this property.",
        example: null,
      }),
  })
  .openapi({
    title: 'AllHistoryRefineBy',
    required: ['type'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AllHistoryRefineBy')

const DatePointSchema = z
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
        description:
          "A string indicating the type of time representation, with a default value of 'DATE'.",
        example: null,
      }),
    timezoneSource: z
      .enum(['CUSTOM', 'PORTAL', 'USER'])
      .openapi({
        description:
          "A string specifying the source of the timezone information. Valid values include 'CUSTOM', 'USER', and 'PORTAL'.",
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
    required: ['day', 'month', 'timeType', 'timezoneSource', 'year', 'zoneId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('DatePoint')

const NowReferenceSchema = z
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
          "A string indicating the type of reference, which is always 'NOW' for this component.",
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
  .openapi('NowReference')

const TodayReferenceSchema = z
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
        description: "A string indicating the type of reference, which is always 'TODAY'.",
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
  .openapi('TodayReference')

const WeekReferenceSchema = z
  .object({
    dayOfWeek: z
      .enum(['FRIDAY', 'MONDAY', 'SATURDAY', 'SUNDAY', 'THURSDAY', 'TUESDAY', 'WEDNESDAY'])
      .openapi({
        description:
          "A string representing the day of the week. Valid values include 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', and 'SUNDAY'.",
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
  .openapi('WeekReference')

const MonthReferenceSchema = z
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
        description:
          "A string that specifies the type of reference, which is 'MONTH' for this component.",
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
  .openapi('MonthReference')

const QuarterReferenceSchema = z
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
      .openapi({ description: 'An integer representing the month of the quarter.', example: null }),
    referenceType: z
      .literal('QUARTER')
      .default('QUARTER')
      .openapi({
        description:
          "A string that specifies the type of reference. The default value is 'QUARTER'.",
        example: null,
      }),
    second: z
      .int32()
      .exactOptional()
      .openapi({ description: 'An integer representing the second of the minute.', example: null }),
  })
  .openapi({
    title: 'QUARTER',
    required: ['day', 'month', 'referenceType'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('QuarterReference')

const FiscalQuarterSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer representing the day of the fiscal quarter.',
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
          "A string that indicates the type of reference, which is 'FISCAL_QUARTER' for this component.",
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
  .openapi('FiscalQuarter')

const YearReferenceSchema = z
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
        description: "A string indicating the type of reference, which is 'YEAR' by default.",
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
  .openapi('YearReference')

const FiscalYearSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer representing the day of the fiscal year.',
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
        description: 'An integer representing the month of the fiscal year.',
        example: null,
      }),
    referenceType: z
      .literal('FISCAL_YEAR')
      .default('FISCAL_YEAR')
      .openapi({
        description: "A string indicating the type of reference, defaulting to 'FISCAL_YEAR'.",
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
  .openapi('FiscalYear')

const IndexOffsetSchema = z
  .object({
    days: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of days for the time offset.',
        example: null,
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of hours for the time offset.',
        example: null,
      }),
    milliseconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of milliseconds for the time offset.',
        example: null,
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of minutes for the time offset.',
        example: null,
      }),
    months: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of months for the time offset.',
        example: null,
      }),
    quarters: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of quarters for the time offset.',
        example: null,
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of seconds for the time offset.',
        example: null,
      }),
    weeks: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of weeks for the time offset.',
        example: null,
      }),
    years: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the number of years for the time offset.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('IndexOffset')

const IndexedTimePointSchema = z
  .object({
    indexReference: z
      .xor([
        NowReferenceSchema,
        TodayReferenceSchema,
        WeekReferenceSchema,
        MonthReferenceSchema,
        QuarterReferenceSchema,
        FiscalQuarterSchema,
        YearReferenceSchema,
        FiscalYearSchema,
      ])
      .openapi({
        description:
          'An object that serves as the reference point for the indexed time, which can be one of several types such as NowReference, TodayReference, WeekReference, MonthReference, QuarterReference, FiscalQuarter, YearReference, or FiscalYear.',
        example: null,
      }),
    offset: IndexOffsetSchema.exactOptional(),
    shouldGenerateRefreshTime: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether a refresh time should be generated.',
        example: null,
      }),
    timeType: z
      .literal('INDEXED')
      .default('INDEXED')
      .openapi({
        description: "A string indicating the type of time point, defaulting to 'INDEXED'.",
        example: null,
      }),
    timezoneSource: z
      .enum(['CUSTOM', 'PORTAL', 'USER'])
      .openapi({
        description:
          "A string specifying the source of the timezone, with possible values including 'CUSTOM', 'USER', and 'PORTAL'.",
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
    title: 'INDEXED',
    required: ['indexReference', 'timeType', 'timezoneSource', 'zoneId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('IndexedTimePoint')

const PropertyReferencedTimeSchema = z
  .object({
    property: z
      .string()
      .openapi({
        description: 'A string that indicates the property name used for referencing the time.',
        example: null,
      }),
    referenceType: z
      .enum([
        'ANNIVERSARY',
        'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION',
        'UPDATED_AT',
        'VALUE',
        'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION',
      ])
      .openapi({
        description:
          "A string that defines the type of reference, with valid values including 'VALUE', 'UPDATED_AT', 'ANNIVERSARY', 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION', and 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'.",
        example: null,
      }),
    timeType: z
      .literal('PROPERTY_REFERENCED')
      .default('PROPERTY_REFERENCED')
      .openapi({
        description:
          "A string indicating the type of time reference, with a default value of 'PROPERTY_REFERENCED'.",
        example: null,
      }),
    timezoneSource: z
      .enum(['CUSTOM', 'PORTAL', 'USER'])
      .openapi({
        description:
          "A string specifying the source of the timezone, which can be 'CUSTOM', 'USER', or 'PORTAL'.",
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
    title: 'PROPERTY_REFERENCED',
    required: ['property', 'referenceType', 'timeType', 'timezoneSource', 'zoneId'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PropertyReferencedTime')

const TimePointOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the default value used in the operation.',
        example: null,
      }),
    endpointBehavior: z
      .enum(['EXCLUSIVE', 'INCLUSIVE'])
      .openapi({
        description:
          "A string indicating the endpoint behavior, with possible values 'INCLUSIVE' and 'EXCLUSIVE'.",
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to include objects with no value set.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({ description: 'A string indicating the type of operation.', example: null }),
    operator: z
      .enum(['IS_AFTER', 'IS_BEFORE'])
      .openapi({
        description:
          "A string specifying the operator used in the operation, with possible values 'IS_BEFORE' and 'IS_AFTER'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({ description: 'A string representing the name of the operator.', example: null }),
    propertyParser: z
      .enum([
        'ANNIVERSARY',
        'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION',
        'UPDATED_AT',
        'VALUE',
        'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION',
      ])
      .openapi({
        description:
          "A string specifying the property parser, with possible values 'VALUE', 'UPDATED_AT', 'ANNIVERSARY', 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION', and 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'.",
        example: null,
      }),
    propertyType: z
      .literal('timepoint')
      .default('timepoint')
      .openapi({
        description: "A string indicating the type of property, defaulting to 'timepoint'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the rendering specification.',
        example: null,
      }),
    timePoint: z
      .xor([DatePointSchema, IndexedTimePointSchema, PropertyReferencedTimeSchema])
      .openapi({
        description:
          'A reference to a time point, which can be a DatePoint, IndexedTimePoint, or PropertyReferencedTime.',
        example: null,
      }),
    type: z
      .string()
      .openapi({ description: 'A string representing the type of the operation.', example: null }),
  })
  .openapi({
    title: 'timepoint',
    required: [
      'endpointBehavior',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyParser',
      'propertyType',
      'timePoint',
      'type',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('TimePointOperation')

const RangedTimeOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether to include objects that have no value set.',
        example: null,
      }),
    lowerBoundEndpointBehavior: z
      .enum(['EXCLUSIVE', 'INCLUSIVE'])
      .openapi({
        description:
          "A string indicating the behavior of the lower bound endpoint, with valid values 'INCLUSIVE' and 'EXCLUSIVE'.",
        example: null,
      }),
    lowerBoundTimePoint: z
      .xor([DatePointSchema, IndexedTimePointSchema, PropertyReferencedTimeSchema])
      .openapi({
        description:
          'The lower bound time point for the operation, which can be a DatePoint, IndexedTimePoint, or PropertyReferencedTime.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_BETWEEN', 'IS_NOT_BETWEEN'])
      .openapi({
        description:
          "A string representing the operator used in the operation. Valid values include 'IS_BETWEEN' and 'IS_NOT_BETWEEN'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyParser: z
      .enum([
        'ANNIVERSARY',
        'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION',
        'UPDATED_AT',
        'VALUE',
        'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION',
      ])
      .openapi({
        description:
          "A string that specifies the parser for the property. Valid values include 'VALUE', 'UPDATED_AT', 'ANNIVERSARY', 'VALUE_WITH_ZONE_SAME_LOCAL_CONVERSION', and 'ANNIVERSARY_WITH_ZONE_SAME_LOCAL_CONVERSION'.",
        example: null,
      }),
    propertyType: z
      .literal('rangedtime')
      .default('rangedtime')
      .openapi({
        description:
          "A string that specifies the type of property, with a default value of 'rangedtime'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that provides specifications for rendering.',
        example: null,
      }),
    type: z
      .string()
      .openapi({ description: 'A string indicating the type of the operation.', example: null }),
    upperBoundEndpointBehavior: z
      .enum(['EXCLUSIVE', 'INCLUSIVE'])
      .openapi({
        description:
          "A string indicating the behavior of the upper bound endpoint, with valid values 'INCLUSIVE' and 'EXCLUSIVE'.",
        example: null,
      }),
    upperBoundTimePoint: z
      .xor([DatePointSchema, IndexedTimePointSchema, PropertyReferencedTimeSchema])
      .openapi({
        description:
          'The upper bound time point for the operation, which can be a DatePoint, IndexedTimePoint, or PropertyReferencedTime.',
        example: null,
      }),
  })
  .openapi({
    title: 'rangedtime',
    required: [
      'includeObjectsWithNoValueSet',
      'lowerBoundEndpointBehavior',
      'lowerBoundTimePoint',
      'operationType',
      'operator',
      'operatorName',
      'propertyParser',
      'propertyType',
      'type',
      'upperBoundEndpointBehavior',
      'upperBoundTimePoint',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RangedTimeOperation')

const AllPropertyTypesOperationSchema = z
  .object({
    coalescingRefineBy: z
      .xor([NumOccurrencesRefineBySchema, SetOccurrencesRefineBySchema])
      .openapi({
        description:
          'An object used to refine the operation by coalescing, which can be one of several types such as NumOccurrencesRefineBy or SetOccurrencesRefineBy.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the default value for the operation.',
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
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_BLANK', 'IS_KNOWN', 'IS_NOT_BLANK', 'IS_UNKNOWN'])
      .openapi({
        description:
          "A string representing the operation to be performed, with valid values including 'IS_KNOWN', 'IS_UNKNOWN', 'IS_BLANK', and 'IS_NOT_BLANK'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('alltypes')
      .default('alltypes')
      .openapi({
        description:
          "A string indicating the type of property, with a default value of 'alltypes'.",
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        RelativeComparativeTimestampRefineBySchema,
        RelativeRangedTimestampRefineBySchema,
        AbsoluteComparativeTimestampRefineBySchema,
        AbsoluteRangedTimestampRefineBySchema,
        AllHistoryRefineBySchema,
        TimePointOperationSchema,
        RangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          'An object used to refine the operation by pruning, which can be one of several types such as RelativeComparativeTimestampRefineBy or AbsoluteRangedTimestampRefineBy.',
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing specifications for rendering the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'alltypes',
    required: [
      'coalescingRefineBy',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AllPropertyTypesOperation')

const RangedNumberPropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether objects with no value set should be included in the operation.',
        example: null,
      }),
    lowerBound: z
      .number()
      .openapi({
        description: 'A number that specifies the lower bound of the range.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string that describes the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['IS_BETWEEN', 'IS_NOT_BETWEEN'])
      .openapi({
        description:
          "A string that defines the operation to be performed, with valid values including 'IS_BETWEEN' and 'IS_NOT_BETWEEN'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('number-ranged')
      .default('number-ranged')
      .openapi({
        description:
          "A string that specifies the type of property operation, with a default value of 'number-ranged'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that provides specifications for rendering the operation.',
        example: null,
      }),
    upperBound: z
      .number()
      .openapi({
        description: 'A number that specifies the upper bound of the range.',
        example: null,
      }),
  })
  .openapi({
    title: 'number-ranged',
    required: [
      'includeObjectsWithNoValueSet',
      'lowerBound',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'upperBound',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RangedNumberPropertyOperation')

const MultiStringPropertyOperationSchema = z
  .object({
    coalescingRefineBy: z
      .xor([NumOccurrencesRefineBySchema, SetOccurrencesRefineBySchema])
      .openapi({
        description:
          "A refinement option for coalescing operations, which can be either 'NumOccurrencesRefineBy' or 'SetOccurrencesRefineBy'.",
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A default value to be used if no other value is set.',
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
      .string()
      .openapi({ description: 'The type of operation being performed.', example: null }),
    operator: z
      .enum([
        'CONTAINS',
        'CONTAINS_EXACTLY',
        'DOES_NOT_CONTAIN',
        'DOES_NOT_CONTAIN_EXACTLY',
        'ENDS_WITH',
        'IS_EQUAL_TO',
        'IS_NOT_EQUAL_TO',
        'STARTS_WITH',
      ])
      .openapi({
        description:
          "The operator used in the operation. Valid values include 'IS_EQUAL_TO', 'IS_NOT_EQUAL_TO', 'CONTAINS', 'CONTAINS_EXACTLY', 'DOES_NOT_CONTAIN', 'DOES_NOT_CONTAIN_EXACTLY', 'STARTS_WITH', and 'ENDS_WITH'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({ description: 'The name of the operator used in the operation.', example: null }),
    propertyType: z
      .literal('multistring')
      .default('multistring')
      .openapi({
        description:
          "The type of property being operated on, which is 'multistring' for this operation.",
        example: null,
      }),
    pruningRefineBy: z
      .xor([
        RelativeComparativeTimestampRefineBySchema,
        RelativeRangedTimestampRefineBySchema,
        AbsoluteComparativeTimestampRefineBySchema,
        AbsoluteRangedTimestampRefineBySchema,
        AllHistoryRefineBySchema,
        TimePointOperationSchema,
        RangedTimeOperationSchema,
      ])
      .exactOptional()
      .openapi({
        description:
          "A refinement option that further specifies the operation, which can be one of several types such as 'RelativeComparativeTimestampRefineBy', 'RelativeRangedTimestampRefineBy', 'AbsoluteComparativeTimestampRefineBy', 'AbsoluteRangedTimestampRefineBy', 'AllHistoryRefineBy', 'TimePointOperation', or 'RangedTimeOperation'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specification for how the operation should be rendered.',
        example: null,
      }),
    values: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of string values that are involved in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'multistring',
    required: [
      'coalescingRefineBy',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'values',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('MultiStringPropertyOperation')

const DatePropertyOperationSchema = z
  .object({
    day: z
      .int32()
      .openapi({
        description: 'An integer specifying the day component of the date.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value to use if no specific value is set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether to include objects that have no value set for the property.',
        example: null,
      }),
    month: z
      .enum(['APR', 'AUG', 'DEC', 'FEB', 'JAN', 'JUL', 'JUN', 'MAR', 'MAY', 'NOV', 'OCT', 'SEP'])
      .openapi({
        description: 'An integer specifying the month component of the date.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['AFTER', 'BEFORE', 'EQUAL'])
      .openapi({
        description:
          "A string representing the operation to be performed, with valid values including 'IS_BEFORE', 'IS_AFTER', and 'IS_EQUAL_TO'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string that provides a human-readable name for the operator.',
        example: null,
      }),
    propertyType: z
      .literal('date')
      .default('date')
      .openapi({
        description: "A string indicating the type of property, which defaults to 'date'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that specifies how the operation should be rendered or displayed.',
        example: null,
      }),
    year: z
      .int32()
      .openapi({
        description: 'An integer specifying the year component of the date.',
        example: null,
      }),
  })
  .openapi({
    title: 'date',
    required: [
      'day',
      'includeObjectsWithNoValueSet',
      'month',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'year',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('DatePropertyOperation')

const CalendarDatePropertyOperationSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the default value for the operation.',
        example: null,
      }),
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
          "A string that defines the starting month of the fiscal year, with options such as 'JANUARY', 'FEBRUARY', 'MARCH', etc.",
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean that determines whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string that specifies the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum([
        'IN_LAST_TIME_UNIT',
        'IN_LAST_TIME_UNIT_SO_FAR',
        'IN_NEXT_TIME_UNIT',
        'IN_THIS_TIME_UNIT',
        'IN_THIS_TIME_UNIT_SO_FAR',
      ])
      .openapi({
        description:
          "A string that indicates the operation to be performed, with possible values including 'IN_THIS_TIME_UNIT', 'IN_THIS_TIME_UNIT_SO_FAR', 'IN_NEXT_TIME_UNIT', 'IN_LAST_TIME_UNIT', and 'IN_LAST_TIME_UNIT_SO_FAR'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('calendar-date')
      .default('calendar-date')
      .openapi({
        description:
          "A string that specifies the type of property operation, defaulting to 'calendar-date'.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the rendering specification for the operation.',
        example: null,
      }),
    timeUnit: z
      .enum(['DAY', 'MONTH', 'QUARTER', 'WEEK', 'YEAR'])
      .openapi({
        description:
          "A string representing the unit of time for the operation, which can be 'DAY', 'WEEK', 'MONTH', 'QUARTER', or 'YEAR'.",
        example: null,
      }),
    timeUnitCount: z
      .int32()
      .openapi({
        description: 'An integer specifying the number of time units to consider in the operation.',
        example: null,
      }),
    useFiscalYear: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the fiscal year should be used in the operation.',
        example: null,
      }),
  })
  .openapi({
    title: 'calendar-date',
    required: [
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'propertyType',
      'timeUnit',
      'timeUnitCount',
      'useFiscalYear',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('CalendarDatePropertyOperation')

const RegexPropertyOperationSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the regex matching should be case-sensitive.',
        example: null,
      }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the default value to be used if no value is set.',
        example: null,
      }),
    includeObjectsWithNoValueSet: z
      .boolean()
      .openapi({
        description:
          'A boolean that determines whether objects with no value set should be included in the operation.',
        example: null,
      }),
    operationType: z
      .string()
      .openapi({
        description: 'A string indicating the type of operation being performed.',
        example: null,
      }),
    operator: z
      .enum(['DOES_NOT_MATCH_REGEX', 'MATCHES_REGEX'])
      .openapi({
        description:
          "A string specifying the operation to perform, with valid values being 'MATCHES_REGEX' and 'DOES_NOT_MATCH_REGEX'.",
        example: null,
      }),
    operatorName: z
      .string()
      .openapi({
        description: 'A string representing the name of the operator used in the operation.',
        example: null,
      }),
    pattern: z
      .string()
      .openapi({
        description: 'A string representing the regex pattern to be used in the operation.',
        example: null,
      }),
    propertyType: z
      .literal('regex')
      .default('regex')
      .openapi({
        description:
          "A string indicating the type of property operation, which is 'regex' for this component.",
        example: null,
      }),
    renderSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that may define how the operation is rendered, though its specific use is not detailed.',
        example: null,
      }),
  })
  .openapi({
    title: 'regex',
    required: [
      'caseSensitive',
      'includeObjectsWithNoValueSet',
      'operationType',
      'operator',
      'operatorName',
      'pattern',
      'propertyType',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('RegexPropertyOperation')

const PropertyFilterSchema = z
  .object({
    context: PropertyFilterContextSchema.exactOptional(),
    filterInsightsId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID for insights related to the filter.',
        example: null,
      }),
    filterType: z
      .literal('PROPERTY')
      .default('PROPERTY')
      .openapi({
        description:
          "A string that specifies the type of filter being applied. The default value is 'PROPERTY'.",
        example: null,
      }),
    frameworkFilterId: z
      .preprocess(
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
        description: 'An integer that uniquely identifies the framework filter.',
        example: null,
      }),
    operation: z
      .xor([
        BoolPropertyOperationSchema,
        NumberPropertyOperationSchema,
        StringPropertyOperationSchema,
        DateTimePropertyOperationSchema,
        RangedDatePropertyOperationSchema,
        ComparativeDatePropertyOperationSchema,
        ComparativeBoolPropertyOperationSchema,
        ComparativeNumberPropertyOperationSchema,
        ComparativeStringPropertyOperationSchema,
        ComparativePropertyUpdatedOperationSchema,
        RollingDateRangePropertyOperationSchema,
        RollingPropertyUpdatedOperationSchema,
        EnumerationPropertyOperationSchema,
        AllPropertyTypesOperationSchema,
        RangedNumberPropertyOperationSchema,
        MultiStringPropertyOperationSchema,
        DatePropertyOperationSchema,
        CalendarDatePropertyOperationSchema,
        TimePointOperationSchema,
        RangedTimeOperationSchema,
        RegexPropertyOperationSchema,
      ])
      .openapi({
        description:
          'Defines the operation to be performed on the property. It can be one of several types, such as BoolPropertyOperation, NumberPropertyOperation, StringPropertyOperation, etc.',
        example: null,
      }),
    property: z
      .string()
      .openapi({
        description:
          'A string representing the name of the property to which the filter is applied.',
        example: null,
      }),
  })
  .openapi({
    title: 'PROPERTY',
    required: ['filterType', 'operation', 'property'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PropertyFilter')

const ComboEventRuleSchema = z
  .object({
    count: z
      .int32()
      .openapi({
        description:
          'An integer specifying the number of times the event must occur for the rule to be satisfied.',
        example: null,
      }),
    eventTypeId: z
      .string()
      .openapi({
        description: 'The unique identifier for the type of event this rule applies to.',
        example: null,
      }),
    lookbackWindowDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the number of days to look back when evaluating the rule.',
        example: null,
      }),
    propertyFilters: z
      .array(PropertyFilterSchema)
      .openapi({
        description:
          'An array of property filters that must be satisfied for the rule to apply. Each filter specifies conditions on event properties.',
        example: null,
      }),
  })
  .openapi({ required: ['count', 'eventTypeId', 'propertyFilters'], example: null })
  .openapi('ComboEventRule')

type ComboEventRuleBranchType = {
  composingRules: z.infer<typeof ComboEventRuleSchema>[]
  operationType: 'AND' | 'OR'
  ruleBranches: ComboEventRuleBranchType[]
}

const AssociationDefinitionSchema = z
  .object({
    allowsCustomLabels: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if custom labels are allowed for this association.',
        example: null,
      }),
    cardinality: z
      .enum(['ONE_TO_MANY', 'ONE_TO_ONE'])
      .openapi({
        description:
          "The nature of the association in terms of cardinality, which can be 'ONE_TO_ONE' or 'ONE_TO_MANY'.",
        example: null,
      }),
    category: z
      .enum(['HUBSPOT_DEFINED', 'INTEGRATOR_DEFINED', 'USER_DEFINED', 'WORK'])
      .openapi({
        description:
          "The category of the association, indicating whether it is defined by HubSpot, the user, an integrator, or for work purposes. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.",
        example: null,
      }),
    fromObjectType: z
      .enum([
        'ABANDONED_CART',
        'ACCEPTANCE_TEST',
        'AD',
        'AD_ACCOUNT',
        'AD_CAMPAIGN',
        'AD_GROUP',
        'AI_FORECAST',
        'ALL_PAGES',
        'APPROVAL',
        'APPROVAL_STEP',
        'ATTRIBUTION',
        'AUDIENCE',
        'AUTOMATION_JOURNEY',
        'AUTOMATION_PLATFORM_FLOW',
        'AUTOMATION_PLATFORM_FLOW_ACTION',
        'BET_ALERT',
        'BET_DELIVERABLE_SERVICE',
        'BLOG_LISTING_PAGE',
        'BLOG_POST',
        'CALL',
        'CAMPAIGN',
        'CAMPAIGN_BUDGET_ITEM',
        'CAMPAIGN_SPEND_ITEM',
        'CAMPAIGN_STEP',
        'CAMPAIGN_TEMPLATE',
        'CAMPAIGN_TEMPLATE_STEP',
        'CART',
        'CASE_STUDY',
        'CHATFLOW',
        'CLIP',
        'CMS_URL',
        'COMBO_EVENT_CONFIGURATION',
        'COMMERCE_PAYMENT',
        'COMMUNICATION',
        'COMPANY',
        'CONTACT',
        'CONTACT_CREATE_ATTRIBUTION',
        'CONTENT',
        'CONTENT_AUDIT',
        'CONTENT_AUDIT_PAGE',
        'CONVERSATION',
        'CONVERSATION_INBOX',
        'CONVERSATION_SESSION',
        'CRM_OBJECTS_DUMMY_TYPE',
        'CRM_PIPELINES_DUMMY_TYPE',
        'CTA',
        'CTA_VARIANT',
        'DATA_PRIVACY_CONSENT',
        'DATA_SYNC_STATE',
        'DEAL',
        'DEAL_CREATE_ATTRIBUTION',
        'DEAL_REGISTRATION',
        'DEAL_SPLIT',
        'DISCOUNT',
        'DISCOUNT_CODE',
        'DISCOUNT_TEMPLATE',
        'EMAIL',
        'ENGAGEMENT',
        'EXPORT',
        'EXTERNAL_WEB_URL',
        'FEE',
        'FEEDBACK_SUBMISSION',
        'FEEDBACK_SURVEY',
        'FILE_MANAGER_FILE',
        'FILE_MANAGER_FOLDER',
        'FOLDER',
        'FORECAST',
        'FORM',
        'FORM_SUBMISSION_INBOUNDDB',
        'GOAL_TARGET',
        'GOAL_TARGET_GROUP',
        'GOAL_TEMPLATE',
        'GSC_PROPERTY',
        'HUB',
        'IMPORT',
        'INVOICE',
        'KEYWORD',
        'KNOWLEDGE_ARTICLE',
        'LANDING_PAGE',
        'LEAD',
        'LINE_ITEM',
        'MARKETING_CALENDAR',
        'MARKETING_CAMPAIGN_UTM',
        'MARKETING_EMAIL',
        'MARKETING_EVENT',
        'MARKETING_EVENT_ATTENDANCE',
        'MARKETING_SMS',
        'MEDIA_BRIDGE',
        'MEETING_EVENT',
        'MIC',
        'NOTE',
        'OBJECT_LIST',
        'ORDER',
        'OWNER',
        'PARTNER_ACCOUNT',
        'PARTNER_CLIENT',
        'PARTNER_CLIENT_REVENUE',
        'PARTNER_SERVICE',
        'PAYMENT_LINK',
        'PAYMENT_SCHEDULE',
        'PAYMENT_SCHEDULE_INSTALLMENT',
        'PERMISSIONS_TESTING',
        'PLAYBOOK',
        'PLAYBOOK_QUESTION',
        'PLAYBOOK_SUBMISSION',
        'PLAYBOOK_SUBMISSION_ANSWER',
        'PLAYLIST',
        'PLAYLIST_FOLDER',
        'PODCAST_EPISODE',
        'PORTAL',
        'PORTAL_OBJECT_SYNC_MESSAGE',
        'POSTAL_MAIL',
        'PRIVACY_SCANNER_COOKIE',
        'PRODUCT',
        'PRODUCT_OR_FOLDER',
        'PROPERTY_INFO',
        'PROSPECTING_AGENT_CONTACT_ASSIGNMENT',
        'PUBLISHING_TASK',
        'QUARANTINED_SUBMISSION',
        'QUOTA',
        'QUOTE',
        'QUOTE_FIELD',
        'QUOTE_MODULE',
        'QUOTE_MODULE_FIELD',
        'QUOTE_TEMPLATE',
        'RESTORABLE_CRM_OBJECT',
        'ROSTER',
        'ROSTER_MEMBER',
        'SALES_DOCUMENT',
        'SALES_TASK',
        'SALES_WORKLOAD',
        'SALESFORCE_SYNC_ERROR',
        'SCHEDULING_PAGE',
        'SCHEMAS_BACKEND_TEST',
        'SCORE_CONFIGURATION',
        'SEQUENCE',
        'SEQUENCE_ENROLLMENT',
        'SEQUENCE_STEP',
        'SEQUENCE_STEP_ENROLLMENT',
        'SERVICE',
        'SITE_PAGE',
        'SNIPPET',
        'SOCIAL_BROADCAST',
        'SOCIAL_CHANNEL',
        'SOCIAL_POST',
        'SOCIAL_PROFILE',
        'SOX_PROTECTED_DUMMY_TYPE',
        'SOX_PROTECTED_TEST_TYPE',
        'SUBMISSION_TAG',
        'SUBSCRIPTION',
        'TASK',
        'TASK_TEMPLATE',
        'TAX',
        'TEMPLATE',
        'TICKET',
        'UNKNOWN',
        'UNSUBSCRIBE',
        'USER',
        'VIEW',
        'VIEW_BLOCK',
        'WEB_INTERACTIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The type of object from which the association originates. Valid values include various HubSpot object types such as 'CONTACT', 'COMPANY', 'DEAL', etc.",
        example: null,
      }),
    fromObjectTypeId: z
      .string()
      .openapi({
        description: 'The object type ID from which the association originates.',
        example: null,
      }),
    hasAllAssociatedObjects: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if all associated objects are included in the association.',
        example: null,
      }),
    hasCascadingDeletes: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if cascading deletes are enabled for this association.',
        example: null,
      }),
    hasUserEnforcedMaxFromObjectIds: z
      .boolean()
      .openapi({
        description:
          "A boolean indicating if there is a user-enforced maximum on the number of 'from' object IDs.",
        example: null,
      }),
    hasUserEnforcedMaxToObjectIds: z
      .boolean()
      .openapi({
        description:
          "A boolean indicating if there is a user-enforced maximum on the number of 'to' object IDs.",
        example: null,
      }),
    hidden: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the association is hidden.',
        example: null,
      }),
    hiddenReason: z
      .enum(['DEFAULT', 'INTERNAL', 'USER_CONFIGURED'])
      .exactOptional()
      .openapi({
        description:
          "The reason why the association is hidden, if applicable. Valid values include 'DEFAULT', 'INTERNAL', and 'USER_CONFIGURED'.",
        example: null,
      }),
    id: z
      .int32()
      .openapi({
        description: 'The unique identifier for this association definition.',
        example: null,
      }),
    inverseAllowsCustomLabels: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if custom labels are allowed for the inverse association.',
        example: null,
      }),
    inverseCardinality: z
      .enum(['ONE_TO_MANY', 'ONE_TO_ONE'])
      .openapi({
        description:
          "The cardinality of the inverse association, which can also be 'ONE_TO_ONE' or 'ONE_TO_MANY'.",
        example: null,
      }),
    inverseHasAllAssociatedObjects: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating if all associated objects are included in the inverse association.',
        example: null,
      }),
    inverseId: z
      .int32()
      .openapi({
        description: 'The unique identifier for the inverse of this association definition.',
        example: null,
      }),
    inverseLabel: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable label for the inverse association.',
        example: null,
      }),
    inverseName: z
      .string()
      .openapi({ description: 'The name of the inverse association.', example: null }),
    isDefault: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if this association is the default association.',
        example: null,
      }),
    isInversePrimary: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the inverse association is the primary association.',
        example: null,
      }),
    isPrimary: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if this association is the primary association.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable label for the association.', example: null }),
    maxFromObjectIds: z
      .int32()
      .openapi({
        description:
          "The maximum number of object IDs that can be associated in the 'from' direction.",
        example: null,
      }),
    maxToObjectIds: z
      .int32()
      .openapi({
        description:
          "The maximum number of object IDs that can be associated in the 'to' direction.",
        example: null,
      }),
    name: z.string().openapi({ description: 'The name of the association.', example: null }),
    portalUniqueIdentifier: z
      .string()
      .openapi({
        description: 'A unique identifier for the association within the portal.',
        example: null,
      }),
    readOnly: z
      .boolean()
      .openapi({
        description: 'A boolean indicating if the association is read-only.',
        example: null,
      }),
    toObjectType: z
      .enum([
        'ABANDONED_CART',
        'ACCEPTANCE_TEST',
        'AD',
        'AD_ACCOUNT',
        'AD_CAMPAIGN',
        'AD_GROUP',
        'AI_FORECAST',
        'ALL_PAGES',
        'APPROVAL',
        'APPROVAL_STEP',
        'ATTRIBUTION',
        'AUDIENCE',
        'AUTOMATION_JOURNEY',
        'AUTOMATION_PLATFORM_FLOW',
        'AUTOMATION_PLATFORM_FLOW_ACTION',
        'BET_ALERT',
        'BET_DELIVERABLE_SERVICE',
        'BLOG_LISTING_PAGE',
        'BLOG_POST',
        'CALL',
        'CAMPAIGN',
        'CAMPAIGN_BUDGET_ITEM',
        'CAMPAIGN_SPEND_ITEM',
        'CAMPAIGN_STEP',
        'CAMPAIGN_TEMPLATE',
        'CAMPAIGN_TEMPLATE_STEP',
        'CART',
        'CASE_STUDY',
        'CHATFLOW',
        'CLIP',
        'CMS_URL',
        'COMBO_EVENT_CONFIGURATION',
        'COMMERCE_PAYMENT',
        'COMMUNICATION',
        'COMPANY',
        'CONTACT',
        'CONTACT_CREATE_ATTRIBUTION',
        'CONTENT',
        'CONTENT_AUDIT',
        'CONTENT_AUDIT_PAGE',
        'CONVERSATION',
        'CONVERSATION_INBOX',
        'CONVERSATION_SESSION',
        'CRM_OBJECTS_DUMMY_TYPE',
        'CRM_PIPELINES_DUMMY_TYPE',
        'CTA',
        'CTA_VARIANT',
        'DATA_PRIVACY_CONSENT',
        'DATA_SYNC_STATE',
        'DEAL',
        'DEAL_CREATE_ATTRIBUTION',
        'DEAL_REGISTRATION',
        'DEAL_SPLIT',
        'DISCOUNT',
        'DISCOUNT_CODE',
        'DISCOUNT_TEMPLATE',
        'EMAIL',
        'ENGAGEMENT',
        'EXPORT',
        'EXTERNAL_WEB_URL',
        'FEE',
        'FEEDBACK_SUBMISSION',
        'FEEDBACK_SURVEY',
        'FILE_MANAGER_FILE',
        'FILE_MANAGER_FOLDER',
        'FOLDER',
        'FORECAST',
        'FORM',
        'FORM_SUBMISSION_INBOUNDDB',
        'GOAL_TARGET',
        'GOAL_TARGET_GROUP',
        'GOAL_TEMPLATE',
        'GSC_PROPERTY',
        'HUB',
        'IMPORT',
        'INVOICE',
        'KEYWORD',
        'KNOWLEDGE_ARTICLE',
        'LANDING_PAGE',
        'LEAD',
        'LINE_ITEM',
        'MARKETING_CALENDAR',
        'MARKETING_CAMPAIGN_UTM',
        'MARKETING_EMAIL',
        'MARKETING_EVENT',
        'MARKETING_EVENT_ATTENDANCE',
        'MARKETING_SMS',
        'MEDIA_BRIDGE',
        'MEETING_EVENT',
        'MIC',
        'NOTE',
        'OBJECT_LIST',
        'ORDER',
        'OWNER',
        'PARTNER_ACCOUNT',
        'PARTNER_CLIENT',
        'PARTNER_CLIENT_REVENUE',
        'PARTNER_SERVICE',
        'PAYMENT_LINK',
        'PAYMENT_SCHEDULE',
        'PAYMENT_SCHEDULE_INSTALLMENT',
        'PERMISSIONS_TESTING',
        'PLAYBOOK',
        'PLAYBOOK_QUESTION',
        'PLAYBOOK_SUBMISSION',
        'PLAYBOOK_SUBMISSION_ANSWER',
        'PLAYLIST',
        'PLAYLIST_FOLDER',
        'PODCAST_EPISODE',
        'PORTAL',
        'PORTAL_OBJECT_SYNC_MESSAGE',
        'POSTAL_MAIL',
        'PRIVACY_SCANNER_COOKIE',
        'PRODUCT',
        'PRODUCT_OR_FOLDER',
        'PROPERTY_INFO',
        'PROSPECTING_AGENT_CONTACT_ASSIGNMENT',
        'PUBLISHING_TASK',
        'QUARANTINED_SUBMISSION',
        'QUOTA',
        'QUOTE',
        'QUOTE_FIELD',
        'QUOTE_MODULE',
        'QUOTE_MODULE_FIELD',
        'QUOTE_TEMPLATE',
        'RESTORABLE_CRM_OBJECT',
        'ROSTER',
        'ROSTER_MEMBER',
        'SALES_DOCUMENT',
        'SALES_TASK',
        'SALES_WORKLOAD',
        'SALESFORCE_SYNC_ERROR',
        'SCHEDULING_PAGE',
        'SCHEMAS_BACKEND_TEST',
        'SCORE_CONFIGURATION',
        'SEQUENCE',
        'SEQUENCE_ENROLLMENT',
        'SEQUENCE_STEP',
        'SEQUENCE_STEP_ENROLLMENT',
        'SERVICE',
        'SITE_PAGE',
        'SNIPPET',
        'SOCIAL_BROADCAST',
        'SOCIAL_CHANNEL',
        'SOCIAL_POST',
        'SOCIAL_PROFILE',
        'SOX_PROTECTED_DUMMY_TYPE',
        'SOX_PROTECTED_TEST_TYPE',
        'SUBMISSION_TAG',
        'SUBSCRIPTION',
        'TASK',
        'TASK_TEMPLATE',
        'TAX',
        'TEMPLATE',
        'TICKET',
        'UNKNOWN',
        'UNSUBSCRIBE',
        'USER',
        'VIEW',
        'VIEW_BLOCK',
        'WEB_INTERACTIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          "The type of object to which the association points. Valid values include various HubSpot object types such as 'CONTACT', 'COMPANY', 'DEAL', etc.",
        example: null,
      }),
    toObjectTypeId: z
      .string()
      .openapi({
        description: 'The object type ID to which the association points.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'allowsCustomLabels',
      'cardinality',
      'category',
      'fromObjectTypeId',
      'hasAllAssociatedObjects',
      'hasCascadingDeletes',
      'hasUserEnforcedMaxFromObjectIds',
      'hasUserEnforcedMaxToObjectIds',
      'hidden',
      'id',
      'inverseAllowsCustomLabels',
      'inverseCardinality',
      'inverseHasAllAssociatedObjects',
      'inverseId',
      'inverseName',
      'isDefault',
      'isInversePrimary',
      'isPrimary',
      'maxFromObjectIds',
      'maxToObjectIds',
      'name',
      'portalUniqueIdentifier',
      'readOnly',
      'toObjectTypeId',
    ],
    description: 'The definition of an association',
    example: null,
  })
  .openapi('AssociationDefinition')

const BehavioralEventHttpCompletionRequestSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the email address associated with the event.',
        example: null,
      }),
    eventName: z
      .string()
      .openapi({
        description: 'A string representing the name of the event. This is a required property.',
        example: null,
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the unique identifier of the object associated with the event.',
        example: null,
      }),
    occurredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A string representing the date and time when the event occurred, in ISO 8601 format.',
        example: null,
      }),
    properties: z
      .record(z.string(), z.string().openapi({ example: null }))
      .openapi({
        description:
          'An object containing key-value pairs of additional properties related to the event. This is a required property.',
        example: null,
      }),
    utk: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique tracking key associated with the event.',
        example: null,
      }),
    uuid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the universally unique identifier for the event.',
        example: null,
      }),
  })
  .openapi({ required: ['eventName', 'properties'], example: null })
  .openapi('BehavioralEventHttpCompletionRequest')

const BatchedBehavioralEventHttpCompletionRequestSchema = z
  .object({
    inputs: z
      .array(BehavioralEventHttpCompletionRequestSchema)
      .openapi({
        description:
          'An array of BehavioralEventHttpCompletionRequest objects, each representing an individual behavioral event completion request to be processed in the batch. This property is required.',
        example: null,
      }),
  })
  .openapi({ required: ['inputs'], example: null })
  .openapi('BatchedBehavioralEventHttpCompletionRequest')

const BehavioralEventTypeDefinitionLabelsSchema = z
  .object({
    plural: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The plural form of the label for the event type. This is a string.',
        example: null,
      }),
    singular: z
      .string()
      .openapi({
        description:
          'The singular form of the label for the event type. This is a string and is required.',
        example: null,
      }),
  })
  .openapi({ required: ['singular'], example: null })
  .openapi('BehavioralEventTypeDefinitionLabels')

const NextPageSchema = z
  .object({
    after: z
      .string()
      .openapi({
        description:
          'A string token used as a cursor to fetch the next page of results. This token is typically returned in the response of a paginated API call.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL string that points to the next page of results. Clients can use this link to make a request for the subsequent set of data.',
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
        description: 'A string token used as a cursor to fetch the previous page of results.',
        example: null,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL string that provides the link to access the previous page of results.',
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

const ComboEventRuleBranchSchema: z.ZodType<ComboEventRuleBranchType> = z
  .lazy(() =>
    z
      .object({
        composingRules: z
          .array(ComboEventRuleSchema)
          .openapi({
            description:
              'An array of ComboEventRule objects that define the individual rules composing this branch.',
            example: null,
          }),
        operationType: z
          .enum(['AND', 'OR'])
          .openapi({
            description:
              "The type of logical operation applied to the rule branches and composing rules. Valid values are 'AND' and 'OR'.",
            example: null,
          }),
        ruleBranches: z
          .array(ComboEventRuleBranchSchema)
          .openapi({
            description:
              'An array of nested ComboEventRuleBranch objects, allowing for hierarchical rule definitions.',
            example: null,
          }),
      })
      .openapi({ required: ['composingRules', 'operationType', 'ruleBranches'], example: null }),
  )
  .openapi('ComboEventRuleBranch')

const ExternalPrimaryObjectResolutionRuleSchema = z
  .object({
    eventPropertyName: z
      .string()
      .openapi({
        description:
          'The name of the property on the event that is used for resolution. It is a string.',
        example: null,
      }),
    targetObjectPropertyName: z
      .string()
      .openapi({
        description:
          'The name of the property on the target object that is used for resolution. It is a string.',
        example: null,
      }),
  })
  .openapi({ required: ['eventPropertyName', 'targetObjectPropertyName'], example: null })
  .openapi('ExternalPrimaryObjectResolutionRule')

const ExternalObjectResolutionMappingResponseSchema = z
  .object({ primaryObjectRule: ExternalPrimaryObjectResolutionRuleSchema })
  .openapi({ required: ['primaryObjectRule'], example: null })
  .openapi('ExternalObjectResolutionMappingResponse')

const PropertyModificationMetadataSchema = z
  .object({
    archivable: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the property can be archived.',
        example: null,
      }),
    readOnlyDefinition: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the definition of the property is read-only.',
        example: null,
      }),
    readOnlyOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the options of the property are read-only.',
        example: null,
      }),
    readOnlyValue: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the value of the property is read-only.',
        example: null,
      }),
  })
  .openapi({ required: ['archivable', 'readOnlyDefinition', 'readOnlyValue'], example: null })
  .openapi('PropertyModificationMetadata')

const OptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A detailed description of the option, providing additional context.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer that determines the order in which the option appears relative to other options.',
        example: null,
      }),
    hidden: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the option is hidden from users.',
        example: null,
      }),
    label: z
      .string()
      .openapi({ description: 'The display name of the option, shown to users.', example: null }),
    value: z
      .string()
      .openapi({
        description: 'The internal value associated with the option, used in data processing.',
        example: null,
      }),
  })
  .openapi({
    required: ['hidden', 'label', 'value'],
    description: 'A HubSpot property option',
    example: null,
  })
  .openapi('Option')

const PropertySchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the property is archived.', example: null }),
    archivedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this property was archived, in ISO 8601 format.',
        example: null,
      }),
    calculated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the property is calculated.', example: null }),
    calculationFormula: z
      .string()
      .exactOptional()
      .openapi({
        description: "The formula used to calculate the property's value, if applicable.",
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this property was created, in ISO 8601 format.',
        example: null,
      }),
    createdUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user who created this property.', example: null }),
    currencyPropertyName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the currency property associated with this property.',
        example: null,
      }),
    dataSensitivity: z
      .enum(['highly_sensitive', 'non_sensitive', 'sensitive'])
      .exactOptional()
      .openapi({
        description:
          "The sensitivity level of the data, with valid values including 'non_sensitive', 'sensitive', and 'highly_sensitive'.",
        example: null,
      }),
    dateDisplayHint: z
      .enum(['absolute', 'absolute_with_relative', 'time_since', 'time_until'])
      .exactOptional()
      .openapi({
        description:
          "A hint for displaying date properties, with valid values including 'absolute', 'absolute_with_relative', 'time_since', and 'time_until'.",
        example: null,
      }),
    description: z
      .string()
      .openapi({ description: 'A description of the property.', example: null }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The order in which this property is displayed relative to other properties.',
        example: null,
      }),
    externalOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the property options are external.',
        example: null,
      }),
    fieldType: z
      .string()
      .openapi({ description: 'The field type of the property.', example: null }),
    formField: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the property is a form field.', example: null }),
    groupName: z
      .string()
      .openapi({
        description: 'The name of the group to which this property belongs.',
        example: null,
      }),
    hasUniqueValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the property has a unique value.',
        example: null,
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the property is hidden.', example: false }),
    hubspotDefined: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the property is defined by HubSpot.',
        example: null,
      }),
    label: z
      .string()
      .openapi({ description: 'The display label for the property.', example: null }),
    modificationMetadata: PropertyModificationMetadataSchema.exactOptional(),
    name: z.string().openapi({ description: 'The unique name of the property.', example: null }),
    numberDisplayHint: z
      .enum(['currency', 'duration', 'formatted', 'percentage', 'probability', 'unformatted'])
      .exactOptional()
      .openapi({
        description:
          "A hint for displaying number properties, with valid values including 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.",
        example: null,
      }),
    options: z
      .array(OptionSchema)
      .openapi({
        description:
          'An array of options available for this property, applicable if the property supports multiple values.',
        example: null,
      }),
    referencedObjectType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object that this property references.', example: null }),
    sensitiveDataCategories: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of categories indicating the sensitivity of the data.',
        example: null,
      }),
    showCurrencySymbol: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether a currency symbol is shown for the property.',
        example: null,
      }),
    textDisplayHint: z
      .enum([
        'domain_name',
        'email',
        'ip_address',
        'multi_line',
        'phone_number',
        'physical_address',
        'postal_code',
        'unformatted_single_line',
      ])
      .exactOptional()
      .openapi({
        description:
          "A hint for displaying text properties, with valid values including 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.",
        example: null,
      }),
    type: z.string().openapi({ description: 'The data type of the property.', example: null }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when this property was last updated, in ISO 8601 format.',
        example: null,
      }),
    updatedUserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the user who last updated this property.',
        example: null,
      }),
  })
  .openapi({
    required: ['description', 'fieldType', 'groupName', 'label', 'name', 'options', 'type'],
    description: 'A HubSpot property',
    example: null,
  })
  .openapi('Property')

const ExternalBehavioralEventTypeDefinitionSchema = z
  .object({
    archived: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the event type is archived.',
        example: null,
      }),
    associations: z
      .array(AssociationDefinitionSchema)
      .openapi({
        description: 'An array of association definitions related to the event type.',
        example: null,
      }),
    comboEventRules: ComboEventRuleBranchSchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A string representing the date and time when the event type was created, in ISO 8601 format.',
        example: null,
      }),
    createdUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the user who created the event type.',
        example: null,
      }),
    customMatchingId: ExternalObjectResolutionMappingResponseSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the event type.',
        example: null,
      }),
    detailTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string template used for the details of the event.',
        example: null,
      }),
    fullyQualifiedName: z
      .string()
      .openapi({
        description: 'A string representing the fully qualified name of the event type.',
        example: null,
      }),
    headerTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string template used for the header of the event.',
        example: null,
      }),
    id: z
      .string()
      .openapi({
        description: 'A string representing the unique identifier of the event type.',
        example: null,
      }),
    labels: BehavioralEventTypeDefinitionLabelsSchema,
    name: z
      .string()
      .openapi({ description: 'A string representing the name of the event type.', example: null }),
    objectTypeId: z
      .string()
      .openapi({
        description: 'A string representing the object type ID associated with the event type.',
        example: null,
      }),
    primaryObject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the primary object associated with the event type.',
        example: null,
      }),
    primaryObjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the ID of the primary object associated with the event type.',
        example: null,
      }),
    properties: z
      .array(PropertySchema)
      .openapi({
        description: 'An array of property objects associated with the event type.',
        example: null,
      }),
    trackingType: z
      .enum([
        'APP_EVENT',
        'AUTOCAPTURE_EVENT',
        'CLICKED_ELEMENT',
        'COMBO_EVENT',
        'CUSTOM_SCRIPT',
        'CUSTOM_SIGNAL',
        'IMPORT',
        'MANUAL',
        'POLLING',
        'PROPERTY_CHANGE',
        'VISITED_URL',
        'WEBHOOK',
      ])
      .exactOptional()
      .openapi({
        description:
          "A string indicating the tracking type of the event. Valid values include 'VISITED_URL', 'CLICKED_ELEMENT', 'CUSTOM_SCRIPT', 'MANUAL', 'IMPORT', 'PROPERTY_CHANGE', 'COMBO_EVENT', 'WEBHOOK', 'APP_EVENT', 'AUTOCAPTURE_EVENT', 'CUSTOM_SIGNAL', and 'POLLING'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'A string representing the date and time when the event type was last updated, in ISO 8601 format.',
        example: null,
      }),
    updatedUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the ID of the user who last updated the event type.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'archived',
      'associations',
      'fullyQualifiedName',
      'id',
      'labels',
      'name',
      'objectTypeId',
      'properties',
    ],
    example: null,
  })
  .openapi('ExternalBehavioralEventTypeDefinition')

const CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionSchema = z
  .object({
    paging: PagingSchema.exactOptional(),
    results: z
      .array(ExternalBehavioralEventTypeDefinitionSchema)
      .openapi({
        description:
          'An array containing the external behavioral event type definitions returned in the current page.',
        example: null,
      }),
    total: z
      .int32()
      .openapi({
        description: 'The total number of external behavioral event type definitions available.',
        example: null,
      }),
  })
  .openapi({ required: ['results', 'total'], example: null })
  .openapi('CollectionResponseWithTotalExternalBehavioralEventTypeDefinition')

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
          'Context about the error condition, represented as an object where each key is a context name and each value is an array of strings providing additional details.',
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
          'A human readable message describing the error along with remediation steps where appropriate. This is a required string property.',
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
    category: z.string().openapi({ description: 'The error category.', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'Context about the error condition, represented as an object with additional properties.',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets.',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Further information about the error, represented as an array of ErrorDetail objects.',
        example: null,
      }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate.',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error.',
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

const OptionInputSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional information about the option.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .openapi({
        description:
          'An integer indicating the order in which the option should be displayed relative to other options.',
        example: null,
      }),
    hidden: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the option is hidden from view.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A string representing the display label for the option.',
        example: null,
      }),
    value: z
      .string()
      .openapi({
        description: 'A string representing the unique value associated with the option.',
        example: null,
      }),
  })
  .openapi({ required: ['displayOrder', 'hidden', 'label', 'value'], example: null })
  .openapi('OptionInput')

const ExternalBehavioralEventPropertyCreateSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional information about the property.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description:
          'A string representing the display name of the property. This field is required.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the unique name of the property.',
        example: null,
      }),
    options: z
      .array(OptionInputSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of OptionInput objects that define the possible values for the property.',
        example: null,
      }),
    type: z
      .string()
      .openapi({
        description: 'A string indicating the data type of the property. This field is required.',
        example: null,
      }),
  })
  .openapi({ required: ['label', 'type'], example: null })
  .openapi('ExternalBehavioralEventPropertyCreate')

const ExternalBehavioralEventPropertyDefinitionPatchSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing additional information about the event property.',
        example: null,
      }),
    displayOrder: z.int32().exactOptional().openapi({ example: null }),
    hidden: z.boolean().exactOptional().openapi({ example: null }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the display name of the event property.',
        example: null,
      }),
    options: z
      .array(OptionInputSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of OptionInput objects, each defining a selectable option for the event property.',
        example: null,
      }),
  })
  .openapi({ example: null, required: [] })
  .openapi('ExternalBehavioralEventPropertyDefinitionPatch')

const ExternalObjectResolutionMappingRequestSchema = z
  .object({ primaryObjectRule: ExternalPrimaryObjectResolutionRuleSchema })
  .openapi({ required: ['primaryObjectRule'], example: null })
  .openapi('ExternalObjectResolutionMappingRequest')

const ExternalBehavioralEventTypeDefinitionEggSchema = z
  .object({
    customMatchingId: ExternalObjectResolutionMappingRequestSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the event type.',
        example: null,
      }),
    includeDefaultProperties: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether default properties should be included.',
        example: null,
      }),
    label: z
      .string()
      .openapi({
        description: 'A string representing the label of the event type.',
        example: null,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string representing the name of the event type.', example: null }),
    primaryObject: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string indicating the primary object associated with the event type.',
        example: null,
      }),
    propertyDefinitions: z
      .array(ExternalBehavioralEventPropertyCreateSchema)
      .openapi({
        description:
          'An array of property definitions, each represented by an ExternalBehavioralEventPropertyCreate object.',
        example: null,
      }),
  })
  .openapi({
    required: ['includeDefaultProperties', 'label', 'propertyDefinitions'],
    example: null,
  })
  .openapi('ExternalBehavioralEventTypeDefinitionEgg')

const PropertyPatchSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a detailed description of the property.',
        example: null,
      }),
    displayOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer indicating the order in which the property should be displayed.',
        example: null,
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean indicating whether the property is hidden from view.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable label for the property, represented as a string.',
        example: null,
      }),
    name: z
      .string()
      .openapi({
        description:
          'The unique name of the property being modified. It is a required string field.',
        example: null,
      }),
    options: z
      .array(OptionInputSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of OptionInput objects, each representing possible options for the property.',
        example: null,
      }),
  })
  .openapi({ required: ['name'], example: null })
  .openapi('PropertyPatch')

const ExternalBehavioralEventTypeDefinitionPatchSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string providing a description of the event type.',
        example: null,
      }),
    detailTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string specifying the template for the details of the event type.',
        example: null,
      }),
    headerTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string defining the template for the header of the event type.',
        example: null,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the label of the event type.',
        example: null,
      }),
    propertyOrder: z
      .array(PropertyPatchSchema)
      .openapi({
        description:
          'An array of PropertyPatch objects that specifies the order of properties for the event type.',
        example: null,
      }),
  })
  .openapi({ required: ['propertyOrder'], example: null })
  .openapi('ExternalBehavioralEventTypeDefinitionPatch')

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
        'analytics.behavioral_events.send': '',
        'behavioral_events.event_definitions.read_write': '',
      },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getEvents202609EventDefinitionsRoute = createRoute({
  method: 'get',
  path: '/events/2026-09/event-definitions',
  tags: ['Basic'],
  summary: 'List event definitions',
  description:
    'Retrieve a list of event definitions available in your HubSpot account. This endpoint allows you to search and filter event definitions based on various criteria, such as search strings and pagination options. It is useful for managing and understanding the different event types that are tracked within your account.',
  operationId: 'get-/events/2026-09/event-definitions',
  request: {
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
      includeProperties: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeProperties',
            in: 'query',
            description:
              'A boolean indicating whether to include event properties in the response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean', example: null },
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
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of results to return per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', example: null },
          },
          example: null,
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'searchString',
            in: 'query',
            description: 'A string to filter event definitions by name or description.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      sortOrder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sortOrder',
            in: 'query',
            description:
              "The order in which to sort the results. Accepts values like 'asc' or 'desc'.",
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
      content: {
        'application/json': {
          schema: CollectionResponseWithTotalExternalBehavioralEventTypeDefinitionSchema,
          example: null,
        },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const postEvents202609EventDefinitionsRoute = createRoute({
  method: 'post',
  path: '/events/2026-09/event-definitions',
  tags: ['Basic'],
  summary: 'Create',
  description:
    'Create a new behavioral event definition in your HubSpot account. This endpoint allows you to define the structure and properties of a new behavioral event, which can then be used to track specific user actions or behaviors. The request body must include the necessary event details and property definitions.',
  operationId: 'post-/events/2026-09/event-definitions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ExternalBehavioralEventTypeDefinitionEggSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ExternalBehavioralEventTypeDefinitionSchema, example: null },
      },
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
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const getEvents202609EventDefinitionsEventNameRoute = createRoute({
  method: 'get',
  path: '/events/2026-09/event-definitions/{eventName}',
  tags: ['Basic'],
  summary: 'Retrieve event definition',
  description:
    'Retrieve the definition of a specific behavioral event in your HubSpot account by providing the event name. This endpoint returns detailed information about the event type, including its properties and associations.',
  operationId: 'get-/events/2026-09/event-definitions/{eventName}',
  request: {
    params: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            name: 'eventName',
            in: 'path',
            description: 'The unique name of the event definition to retrieve.',
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
        'application/json': { schema: ExternalBehavioralEventTypeDefinitionSchema, example: null },
      },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const deleteEvents202609EventDefinitionsEventNameRoute = createRoute({
  method: 'delete',
  path: '/events/2026-09/event-definitions/{eventName}',
  tags: ['Basic'],
  summary: 'Delete',
  description:
    "Delete a specific event definition in your HubSpot account using the event's unique name. This operation is useful for removing outdated or incorrect event definitions that are no longer needed.",
  operationId: 'delete-/events/2026-09/event-definitions/{eventName}',
  request: {
    params: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            name: 'eventName',
            in: 'path',
            description: 'The unique name of the event definition to delete.',
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
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const patchEvents202609EventDefinitionsEventNameRoute = createRoute({
  method: 'patch',
  path: '/events/2026-09/event-definitions/{eventName}',
  tags: ['Basic'],
  summary: 'Update event definition',
  description:
    'Update the definition of a specific behavioral event in your HubSpot account. This operation allows you to modify the properties and templates associated with the event. The eventName path parameter identifies the event to be updated.',
  operationId: 'patch-/events/2026-09/event-definitions/{eventName}',
  request: {
    params: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            name: 'eventName',
            in: 'path',
            description: 'The unique name of the event definition to update.',
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
          schema: ExternalBehavioralEventTypeDefinitionPatchSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: {
        'application/json': { schema: ExternalBehavioralEventTypeDefinitionSchema, example: null },
      },
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
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const postEvents202609EventDefinitionsEventNamePropertyRoute = createRoute({
  method: 'post',
  path: '/events/2026-09/event-definitions/{eventName}/property',
  tags: ['Advanced'],
  summary: 'Create Property',
  description:
    'Create a new property for a specified event definition in your HubSpot account. This endpoint allows you to define custom properties associated with a particular event, enhancing the tracking and analysis of behavioral events. The request must include a JSON body with the necessary property details.',
  operationId: 'post-/events/2026-09/event-definitions/{eventName}/property',
  request: {
    params: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            name: 'eventName',
            in: 'path',
            description:
              'The unique identifier of the event definition for which the property is being created.',
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
        'application/json': { schema: ExternalBehavioralEventPropertyCreateSchema, example: null },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PropertySchema, example: null } },
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
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute = createRoute({
  method: 'delete',
  path: '/events/2026-09/event-definitions/{eventName}/property/{propertyName}',
  tags: ['Basic'],
  summary: 'Delete property',
  description:
    'Delete a specific property from an event definition in your HubSpot account. This operation is useful when you need to remove obsolete or incorrect properties from an event definition. Ensure that the event and property names are accurately specified to avoid unintended deletions.',
  operationId: 'delete-/events/2026-09/event-definitions/{eventName}/property/{propertyName}',
  request: {
    params: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            name: 'eventName',
            in: 'path',
            description:
              'The unique name of the event definition from which the property will be deleted.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      propertyName: z
        .string()
        .openapi({
          param: {
            name: 'propertyName',
            in: 'path',
            description: 'The unique name of the property to be deleted from the event definition.',
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
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute = createRoute({
  method: 'patch',
  path: '/events/2026-09/event-definitions/{eventName}/property/{propertyName}',
  tags: ['Basic'],
  summary: 'Update property',
  description:
    'Update a specific property of a behavioral event definition in your HubSpot account. This operation allows you to modify the details of an existing property associated with a given event. Use this endpoint to keep your event properties up-to-date with the latest information.',
  operationId: 'patch-/events/2026-09/event-definitions/{eventName}/property/{propertyName}',
  request: {
    params: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            name: 'eventName',
            in: 'path',
            description: 'The unique identifier of the event whose property you want to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', example: null },
          },
          example: null,
        }),
      propertyName: z
        .string()
        .openapi({
          param: {
            name: 'propertyName',
            in: 'path',
            description: 'The name of the property to be updated within the specified event.',
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
          schema: ExternalBehavioralEventPropertyDefinitionPatchSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'successful operation',
      content: { 'application/json': { schema: PropertySchema, example: null } },
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
  security: [{ oauth2: ['behavioral_events.event_definitions.read_write'] }],
})

export const postEvents202609SendBatchRoute = createRoute({
  method: 'post',
  path: '/events/2026-09/send/batch',
  tags: ['Batch'],
  summary: 'Batch send events',
  description:
    'Send a batch of behavioral events to the HubSpot API. This endpoint is useful for efficiently processing multiple events in a single request, reducing the number of API calls needed. It is particularly beneficial for applications that need to send a high volume of events quickly. Note that this endpoint is exempt from daily and ten-secondly rate limits.',
  operationId: 'post-/events/2026-09/send/batch_/events/v3/send/batch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BatchedBehavioralEventHttpCompletionRequestSchema,
          example: null,
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'No content', content: {} }, default: ErrorResponse },
  security: [{ oauth2: ['analytics.behavioral_events.send'] }],
})
