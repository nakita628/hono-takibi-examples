import { createRoute, z } from '@hono/zod-openapi'

const IdentityIdSchema = z.string().regex(/\S+/).min(1).max(256).openapi('IdentityId')

const UserIdentitySchema = z
  .object({
    id: IdentityIdSchema.and(
      z.any().openapi({ description: 'The IAM Identity Center ID of the user.' }),
    ),
  })
  .openapi({
    required: ['id'],
    description: 'Contains information for a user identity in an access policy.',
  })
  .openapi('UserIdentity')

const GroupIdentitySchema = z
  .object({
    id: IdentityIdSchema.and(
      z.any().openapi({ description: 'The IAM Identity Center ID of the group.' }),
    ),
  })
  .openapi({
    required: ['id'],
    description: 'Contains information for a group identity in an access policy.',
  })
  .openapi('GroupIdentity')

const ARNSchema = z.string().regex(/.*/).min(1).max(1600).openapi('ARN')

const IAMUserIdentitySchema = z
  .object({
    arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the <i>IAM User Guide</i>.</p> <note> <p>If you delete the IAM user, access policies that contain this identity include an empty <code>arn</code>. You can delete the access policy for the IAM user that no longer exists.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    description: 'Contains information about an Identity and Access Management user.',
  })
  .openapi('IAMUserIdentity')

const IAMRoleIdentitySchema = z
  .object({
    arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the IAM role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the <i>IAM User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['arn'],
    description:
      'Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>.',
  })
  .openapi('IAMRoleIdentity')

type IdentityType = {
  user?: z.infer<typeof UserIdentitySchema> & { [key: string]: unknown }
  group?: z.infer<typeof GroupIdentitySchema> & { [key: string]: unknown }
  iamUser?: z.infer<typeof IAMUserIdentitySchema> & { [key: string]: unknown }
  iamRole?: z.infer<typeof IAMRoleIdentitySchema> & { [key: string]: unknown }
}

const IDSchema = z
  .string()
  .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  .length(36)
  .openapi('ID')

const PortalResourceSchema = z
  .object({ id: IDSchema.and(z.any().openapi({ description: 'The ID of the portal.' })) })
  .openapi({ required: ['id'], description: 'Identifies an IoT SiteWise Monitor portal.' })
  .openapi('PortalResource')

const ProjectResourceSchema = z
  .object({ id: IDSchema.and(z.any().openapi({ description: 'The ID of the project.' })) })
  .openapi({ required: ['id'], description: 'Identifies a specific IoT SiteWise Monitor project.' })
  .openapi('ProjectResource')

type ResourceType = {
  portal?: z.infer<typeof PortalResourceSchema> & { [key: string]: unknown }
  project?: z.infer<typeof ProjectResourceSchema> & { [key: string]: unknown }
}

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceAlreadyExistsExceptionSchema = z.any().openapi('ResourceAlreadyExistsException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConflictingOperationExceptionSchema = z.any().openapi('ConflictingOperationException')

const AssetErrorCodeSchema = z.literal('INTERNAL_FAILURE').openapi('AssetErrorCode')

const AssetErrorMessageSchema = z.string().openapi('AssetErrorMessage')

const AssetErrorDetailsSchema = z
  .object({
    assetId: IDSchema.and(z.any().openapi({ description: 'The ID of the asset.' })),
    code: AssetErrorCodeSchema.and(z.any().openapi({ description: 'The error code.' })),
    message: AssetErrorMessageSchema.and(z.any().openapi({ description: 'The error message.' })),
  })
  .openapi({
    required: ['assetId', 'code', 'message'],
    description: 'Contains error details for the requested associate project asset action.',
  })
  .openapi('AssetErrorDetails')

const BatchAssociateProjectAssetsErrorsSchema = z
  .array(AssetErrorDetailsSchema)
  .openapi('BatchAssociateProjectAssetsErrors')

const BatchAssociateProjectAssetsResponseSchema = z
  .object({
    errors: BatchAssociateProjectAssetsErrorsSchema.and(
      z.any().openapi({ description: 'A list of associated error information, if any.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchAssociateProjectAssetsResponse')

const BatchDisassociateProjectAssetsErrorsSchema = z
  .array(AssetErrorDetailsSchema)
  .openapi('BatchDisassociateProjectAssetsErrors')

const BatchDisassociateProjectAssetsResponseSchema = z
  .object({
    errors: BatchDisassociateProjectAssetsErrorsSchema.and(
      z.any().openapi({ description: 'A list of associated error information, if any.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchDisassociateProjectAssetsResponse')

const BatchGetAssetPropertyAggregatesErrorCodeSchema = z
  .enum(['ResourceNotFoundException', 'InvalidRequestException', 'AccessDeniedException'])
  .openapi('BatchGetAssetPropertyAggregatesErrorCode')

const ErrorMessageSchema = z.string().openapi('ErrorMessage')

const EntryIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(64)
  .openapi('EntryId')

const BatchGetAssetPropertyAggregatesErrorEntrySchema = z
  .object({
    errorCode: BatchGetAssetPropertyAggregatesErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The associated error message.' }),
    ),
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
  })
  .openapi({
    required: ['errorCode', 'errorMessage', 'entryId'],
    description:
      'Contains error information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.',
  })
  .openapi('BatchGetAssetPropertyAggregatesErrorEntry')

const BatchGetAssetPropertyAggregatesErrorEntriesSchema = z
  .array(BatchGetAssetPropertyAggregatesErrorEntrySchema)
  .openapi('BatchGetAssetPropertyAggregatesErrorEntries')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const QualitySchema = z.enum(['GOOD', 'BAD', 'UNCERTAIN']).openapi('Quality')

const AggregatedDoubleValueSchema = z.float64().openapi('AggregatedDoubleValue')

const AggregatesSchema = z
  .object({
    average: AggregatedDoubleValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The average (mean) value of the time series over a time interval window.',
        }),
    ).exactOptional(),
    count: AggregatedDoubleValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The count of data points in the time series over a time interval window.',
        }),
    ).exactOptional(),
    maximum: AggregatedDoubleValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum value of the time series over a time interval window.',
        }),
    ).exactOptional(),
    minimum: AggregatedDoubleValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The minimum value of the time series over a time interval window.',
        }),
    ).exactOptional(),
    sum: AggregatedDoubleValueSchema.and(
      z.any().openapi({ description: 'The sum of the time series over a time interval window.' }),
    ).exactOptional(),
    standardDeviation: AggregatedDoubleValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The standard deviation of the time series over a time interval window.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the (pre-calculated) aggregate values for an asset property.',
    required: [],
  })
  .openapi('Aggregates')

const AggregatedValueSchema = z
  .object({
    timestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the aggregating computations occurred, in Unix epoch time.',
        }),
    ),
    quality: QualitySchema.and(
      z.any().openapi({ description: 'The quality of the aggregated data.' }),
    ).exactOptional(),
    value: AggregatesSchema.and(z.any().openapi({ description: 'The value of the aggregates.' })),
  })
  .openapi({
    required: ['timestamp', 'value'],
    description:
      'Contains aggregated asset property values (for example, average, minimum, and maximum).',
  })
  .openapi('AggregatedValue')

const AggregatedValuesSchema = z.array(AggregatedValueSchema).openapi('AggregatedValues')

const BatchGetAssetPropertyAggregatesSuccessEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    aggregatedValues: AggregatedValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The requested aggregated asset property values (for example, average, minimum, and maximum).',
        }),
    ),
  })
  .openapi({
    required: ['entryId', 'aggregatedValues'],
    description:
      'Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.',
  })
  .openapi('BatchGetAssetPropertyAggregatesSuccessEntry')

const BatchGetAssetPropertyAggregatesSuccessEntriesSchema = z
  .array(BatchGetAssetPropertyAggregatesSuccessEntrySchema)
  .openapi('BatchGetAssetPropertyAggregatesSuccessEntries')

const BatchEntryCompletionStatusSchema = z
  .enum(['SUCCESS', 'ERROR'])
  .openapi('BatchEntryCompletionStatus')

const BatchGetAssetPropertyAggregatesErrorInfoSchema = z
  .object({
    errorCode: BatchGetAssetPropertyAggregatesErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date the error occurred, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: ['errorCode', 'errorTimestamp'],
    description:
      'Contains the error code and the timestamp for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.',
  })
  .openapi('BatchGetAssetPropertyAggregatesErrorInfo')

const BatchGetAssetPropertyAggregatesSkippedEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    completionStatus: BatchEntryCompletionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.',
        }),
    ),
    errorInfo: BatchGetAssetPropertyAggregatesErrorInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'The error information, such as the error code and the timestamp.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryId', 'completionStatus'],
    description:
      'Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request.',
  })
  .openapi('BatchGetAssetPropertyAggregatesSkippedEntry')

const BatchGetAssetPropertyAggregatesSkippedEntriesSchema = z
  .array(BatchGetAssetPropertyAggregatesSkippedEntrySchema)
  .openapi('BatchGetAssetPropertyAggregatesSkippedEntries')

const NextTokenSchema = z
  .string()
  .regex(/[A-Za-z0-9+\/=]+/)
  .min(1)
  .max(4096)
  .openapi('NextToken')

const BatchGetAssetPropertyAggregatesResponseSchema = z
  .object({
    errorEntries: BatchGetAssetPropertyAggregatesErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed.',
        }),
    ),
    successEntries: BatchGetAssetPropertyAggregatesSuccessEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entries that were processed successfully by this batch request. Each success entry contains the <code>entryId</code> of the entry that succeeded and the latest query result.',
        }),
    ),
    skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the <code>entryId</code> of the entry that skipped.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['errorEntries', 'successEntries', 'skippedEntries'] })
  .openapi('BatchGetAssetPropertyAggregatesResponse')

const AssetPropertyAliasSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .max(2048)
  .openapi('AssetPropertyAlias')

const AggregateTypeSchema = z
  .enum(['AVERAGE', 'COUNT', 'MAXIMUM', 'MINIMUM', 'SUM', 'STANDARD_DEVIATION'])
  .openapi('AggregateType')

const AggregateTypesSchema = z.array(AggregateTypeSchema).min(1).openapi('AggregateTypes')

const ResolutionSchema = z
  .string()
  .regex(/1m|1h|1d/)
  .length(2)
  .openapi('Resolution')

const QualitiesSchema = z.array(QualitySchema).length(1).openapi('Qualities')

const TimeOrderingSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('TimeOrdering')

const BatchGetAssetPropertyAggregatesEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    assetId: IDSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the asset in which the asset property was created.' }),
    ).exactOptional(),
    propertyId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset property.' }),
    ).exactOptional(),
    propertyAlias: AssetPropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    aggregateTypes: AggregateTypesSchema.and(
      z.any().openapi({ description: 'The data aggregating function.' }),
    ),
    resolution: ResolutionSchema.and(
      z.any().openapi({ description: 'The time interval over which to aggregate data.' }),
    ),
    startDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.',
        }),
    ),
    endDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.',
        }),
    ),
    qualities: QualitiesSchema.and(
      z.any().openapi({ description: 'The quality by which to filter asset data.' }),
    ).exactOptional(),
    timeOrdering: TimeOrderingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryId', 'aggregateTypes', 'resolution', 'startDate', 'endDate'],
    description:
      '<p>Contains information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
  })
  .openapi('BatchGetAssetPropertyAggregatesEntry')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const BatchGetAssetPropertyValueErrorCodeSchema = z
  .enum(['ResourceNotFoundException', 'InvalidRequestException', 'AccessDeniedException'])
  .openapi('BatchGetAssetPropertyValueErrorCode')

const BatchGetAssetPropertyValueErrorEntrySchema = z
  .object({
    errorCode: BatchGetAssetPropertyValueErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The associated error message.' }),
    ),
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
  })
  .openapi({
    required: ['errorCode', 'errorMessage', 'entryId'],
    description:
      'Contains error information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.',
  })
  .openapi('BatchGetAssetPropertyValueErrorEntry')

const BatchGetAssetPropertyValueErrorEntriesSchema = z
  .array(BatchGetAssetPropertyValueErrorEntrySchema)
  .openapi('BatchGetAssetPropertyValueErrorEntries')

const PropertyValueStringValueSchema = z.string().openapi('PropertyValueStringValue')

const PropertyValueIntegerValueSchema = z.int().openapi('PropertyValueIntegerValue')

const PropertyValueDoubleValueSchema = z.float64().openapi('PropertyValueDoubleValue')

const PropertyValueBooleanValueSchema = z.boolean().openapi('PropertyValueBooleanValue')

const VariantSchema = z
  .object({
    stringValue: PropertyValueStringValueSchema.and(
      z
        .any()
        .openapi({ description: 'Asset property data of type string (sequence of characters).' }),
    ).exactOptional(),
    integerValue: PropertyValueIntegerValueSchema.and(
      z.any().openapi({ description: 'Asset property data of type integer (whole number).' }),
    ).exactOptional(),
    doubleValue: PropertyValueDoubleValueSchema.and(
      z
        .any()
        .openapi({ description: 'Asset property data of type double (floating point number).' }),
    ).exactOptional(),
    booleanValue: PropertyValueBooleanValueSchema.and(
      z.any().openapi({ description: 'Asset property data of type Boolean (true or false).' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains an asset property value (of a single type only).',
    required: [],
  })
  .openapi('Variant')

const TimeInSecondsSchema = z.int().min(1).max(9223372036854774).openapi('TimeInSeconds')

const OffsetInNanosSchema = z.int().min(0).max(999999999).openapi('OffsetInNanos')

const TimeInNanosSchema = z
  .object({
    timeInSeconds: TimeInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by <code>offsetInNanos</code>.',
        }),
    ),
    offsetInNanos: OffsetInNanosSchema.and(
      z.any().openapi({ description: 'The nanosecond offset from <code>timeInSeconds</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['timeInSeconds'],
    description: 'Contains a timestamp with optional nanosecond granularity.',
  })
  .openapi('TimeInNanos')

const AssetPropertyValueSchema = z
  .object({
    value: VariantSchema.and(
      z
        .any()
        .openapi({ description: 'The value of the asset property (see <code>Variant</code>).' }),
    ),
    timestamp: TimeInNanosSchema.and(
      z.any().openapi({ description: 'The timestamp of the asset property value.' }),
    ),
    quality: QualitySchema.and(
      z.any().openapi({ description: 'The quality of the asset property value.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['value', 'timestamp'],
    description: 'Contains asset property value information.',
  })
  .openapi('AssetPropertyValue')

const BatchGetAssetPropertyValueSuccessEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    assetPropertyValue: AssetPropertyValueSchema.exactOptional(),
  })
  .openapi({
    required: ['entryId'],
    description:
      'Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.',
  })
  .openapi('BatchGetAssetPropertyValueSuccessEntry')

const BatchGetAssetPropertyValueSuccessEntriesSchema = z
  .array(BatchGetAssetPropertyValueSuccessEntrySchema)
  .openapi('BatchGetAssetPropertyValueSuccessEntries')

const BatchGetAssetPropertyValueErrorInfoSchema = z
  .object({
    errorCode: BatchGetAssetPropertyValueErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date the error occurred, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: ['errorCode', 'errorTimestamp'],
    description: 'The error information, such as the error code and the timestamp.',
  })
  .openapi('BatchGetAssetPropertyValueErrorInfo')

const BatchGetAssetPropertyValueSkippedEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    completionStatus: BatchEntryCompletionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.',
        }),
    ),
    errorInfo: BatchGetAssetPropertyValueErrorInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'The error information, such as the error code and the timestamp.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryId', 'completionStatus'],
    description:
      'Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.',
  })
  .openapi('BatchGetAssetPropertyValueSkippedEntry')

const BatchGetAssetPropertyValueSkippedEntriesSchema = z
  .array(BatchGetAssetPropertyValueSkippedEntrySchema)
  .openapi('BatchGetAssetPropertyValueSkippedEntries')

const BatchGetAssetPropertyValueResponseSchema = z
  .object({
    errorEntries: BatchGetAssetPropertyValueErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed.',
        }),
    ),
    successEntries: BatchGetAssetPropertyValueSuccessEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entries that were processed successfully by this batch request. Each success entry contains the <code>entryId</code> of the entry that succeeded and the latest query result.',
        }),
    ),
    skippedEntries: BatchGetAssetPropertyValueSkippedEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the <code>entryId</code> of the entry that skipped.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['errorEntries', 'successEntries', 'skippedEntries'] })
  .openapi('BatchGetAssetPropertyValueResponse')

const BatchGetAssetPropertyValueEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    assetId: IDSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the asset in which the asset property was created.' }),
    ).exactOptional(),
    propertyId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset property.' }),
    ).exactOptional(),
    propertyAlias: AssetPropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryId'],
    description:
      '<p>Contains information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
  })
  .openapi('BatchGetAssetPropertyValueEntry')

const BatchGetAssetPropertyValueHistoryErrorCodeSchema = z
  .enum(['ResourceNotFoundException', 'InvalidRequestException', 'AccessDeniedException'])
  .openapi('BatchGetAssetPropertyValueHistoryErrorCode')

const BatchGetAssetPropertyValueHistoryErrorEntrySchema = z
  .object({
    errorCode: BatchGetAssetPropertyValueHistoryErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The associated error message.' }),
    ),
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
  })
  .openapi({
    required: ['errorCode', 'errorMessage', 'entryId'],
    description:
      'A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed.',
  })
  .openapi('BatchGetAssetPropertyValueHistoryErrorEntry')

const BatchGetAssetPropertyValueHistoryErrorEntriesSchema = z
  .array(BatchGetAssetPropertyValueHistoryErrorEntrySchema)
  .openapi('BatchGetAssetPropertyValueHistoryErrorEntries')

const AssetPropertyValueHistorySchema = z
  .array(AssetPropertyValueSchema)
  .openapi('AssetPropertyValueHistory')

const BatchGetAssetPropertyValueHistorySuccessEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    assetPropertyValueHistory: AssetPropertyValueHistorySchema.and(
      z
        .any()
        .openapi({
          description: 'The requested historical values for the specified asset property.',
        }),
    ),
  })
  .openapi({
    required: ['entryId', 'assetPropertyValueHistory'],
    description:
      'Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.',
  })
  .openapi('BatchGetAssetPropertyValueHistorySuccessEntry')

const BatchGetAssetPropertyValueHistorySuccessEntriesSchema = z
  .array(BatchGetAssetPropertyValueHistorySuccessEntrySchema)
  .openapi('BatchGetAssetPropertyValueHistorySuccessEntries')

const BatchGetAssetPropertyValueHistoryErrorInfoSchema = z
  .object({
    errorCode: BatchGetAssetPropertyValueHistoryErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorTimestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The date the error occurred, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: ['errorCode', 'errorTimestamp'],
    description: 'The error information, such as the error code and the timestamp.',
  })
  .openapi('BatchGetAssetPropertyValueHistoryErrorInfo')

const BatchGetAssetPropertyValueHistorySkippedEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    completionStatus: BatchEntryCompletionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html">BatchGetAssetPropertyValueHistory</a> API.',
        }),
    ),
    errorInfo: BatchGetAssetPropertyValueHistoryErrorInfoSchema.and(
      z
        .any()
        .openapi({
          description: 'The error information, such as the error code and the timestamp.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryId', 'completionStatus'],
    description:
      'Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request.',
  })
  .openapi('BatchGetAssetPropertyValueHistorySkippedEntry')

const BatchGetAssetPropertyValueHistorySkippedEntriesSchema = z
  .array(BatchGetAssetPropertyValueHistorySkippedEntrySchema)
  .openapi('BatchGetAssetPropertyValueHistorySkippedEntries')

const BatchGetAssetPropertyValueHistoryResponseSchema = z
  .object({
    errorEntries: BatchGetAssetPropertyValueHistoryErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed.',
        }),
    ),
    successEntries: BatchGetAssetPropertyValueHistorySuccessEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entries that were processed successfully by this batch request. Each success entry contains the <code>entryId</code> of the entry that succeeded and the latest query result.',
        }),
    ),
    skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the <code>entryId</code> of the entry that skipped.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['errorEntries', 'successEntries', 'skippedEntries'] })
  .openapi('BatchGetAssetPropertyValueHistoryResponse')

const BatchGetAssetPropertyValueHistoryEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the entry.' })),
    assetId: IDSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the asset in which the asset property was created.' }),
    ).exactOptional(),
    propertyId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset property.' }),
    ).exactOptional(),
    propertyAlias: AssetPropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    startDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.',
        }),
    ).exactOptional(),
    endDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.',
        }),
    ).exactOptional(),
    qualities: QualitiesSchema.and(
      z.any().openapi({ description: 'The quality by which to filter asset data.' }),
    ).exactOptional(),
    timeOrdering: TimeOrderingSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entryId'],
    description:
      '<p>Contains information for an asset property historical value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
  })
  .openapi('BatchGetAssetPropertyValueHistoryEntry')

const BatchPutAssetPropertyValueErrorCodeSchema = z
  .enum([
    'ResourceNotFoundException',
    'InvalidRequestException',
    'InternalFailureException',
    'ServiceUnavailableException',
    'ThrottlingException',
    'LimitExceededException',
    'ConflictingOperationException',
    'TimestampOutOfRangeException',
    'AccessDeniedException',
  ])
  .openapi('BatchPutAssetPropertyValueErrorCode')

const TimestampsSchema = z.array(TimeInNanosSchema).openapi('Timestamps')

const BatchPutAssetPropertyErrorSchema = z
  .object({
    errorCode: BatchPutAssetPropertyValueErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ),
    errorMessage: ErrorMessageSchema.and(
      z.any().openapi({ description: 'The associated error message.' }),
    ),
    timestamps: TimestampsSchema.and(
      z.any().openapi({ description: 'A list of timestamps for each error, if any.' }),
    ),
  })
  .openapi({
    required: ['errorCode', 'errorMessage', 'timestamps'],
    description: 'Contains error information from updating a batch of asset property values.',
  })
  .openapi('BatchPutAssetPropertyError')

const BatchPutAssetPropertyErrorsSchema = z
  .array(BatchPutAssetPropertyErrorSchema)
  .openapi('BatchPutAssetPropertyErrors')

const BatchPutAssetPropertyErrorEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(z.any().openapi({ description: 'The ID of the failed entry.' })),
    errors: BatchPutAssetPropertyErrorsSchema.and(
      z.any().openapi({ description: 'The list of update property value errors.' }),
    ),
  })
  .openapi({
    required: ['entryId', 'errors'],
    description:
      'Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.',
  })
  .openapi('BatchPutAssetPropertyErrorEntry')

const BatchPutAssetPropertyErrorEntriesSchema = z
  .array(BatchPutAssetPropertyErrorEntrySchema)
  .openapi('BatchPutAssetPropertyErrorEntries')

const BatchPutAssetPropertyValueResponseSchema = z
  .object({
    errorEntries: BatchPutAssetPropertyErrorEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the errors (if any) associated with the batch put request. Each error entry contains the <code>entryId</code> of the entry that failed.',
        }),
    ),
  })
  .openapi({ required: ['errorEntries'] })
  .openapi('BatchPutAssetPropertyValueResponse')

const AssetPropertyValuesSchema = z.array(AssetPropertyValueSchema).openapi('AssetPropertyValues')

const PutAssetPropertyValueEntrySchema = z
  .object({
    entryId: EntryIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user specified ID for the entry. You can use this ID to identify which entries failed.',
        }),
    ),
    assetId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset to update.' }),
    ).exactOptional(),
    propertyId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset property for this entry.' }),
    ).exactOptional(),
    propertyAlias: AssetPropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    propertyValues: AssetPropertyValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of property values to upload. You can specify up to 10 <code>propertyValues</code> array elements. ',
        }),
    ),
  })
  .openapi({
    required: ['entryId', 'propertyValues'],
    description:
      'Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.',
  })
  .openapi('PutAssetPropertyValueEntry')

const CreateAccessPolicyResponseSchema = z
  .object({
    accessPolicyId: IDSchema.and(z.any().openapi({ description: 'The ID of the access policy.' })),
    accessPolicyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['accessPolicyId', 'accessPolicyArn'] })
  .openapi('CreateAccessPolicyResponse')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const AssetStateSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'FAILED'])
  .openapi('AssetState')

const ErrorCodeSchema = z.enum(['VALIDATION_ERROR', 'INTERNAL_FAILURE']).openapi('ErrorCode')

const DetailedErrorCodeSchema = z
  .enum(['INCOMPATIBLE_COMPUTE_LOCATION', 'INCOMPATIBLE_FORWARDING_CONFIGURATION'])
  .openapi('DetailedErrorCode')

const DetailedErrorMessageSchema = z.string().openapi('DetailedErrorMessage')

const DetailedErrorSchema = z
  .object({
    code: DetailedErrorCodeSchema.and(z.any().openapi({ description: 'The error code. ' })),
    message: DetailedErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message. ' }),
    ),
  })
  .openapi({ required: ['code', 'message'], description: 'Contains detailed error information. ' })
  .openapi('DetailedError')

const DetailedErrorsSchema = z.array(DetailedErrorSchema).openapi('DetailedErrors')

const ErrorDetailsSchema = z
  .object({
    code: ErrorCodeSchema.and(z.any().openapi({ description: 'The error code.' })),
    message: ErrorMessageSchema.and(z.any().openapi({ description: 'The error message.' })),
    details: DetailedErrorsSchema.and(
      z.any().openapi({ description: ' A list of detailed errors. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['code', 'message'],
    description: 'Contains the details of an IoT SiteWise error.',
  })
  .openapi('ErrorDetails')

const AssetStatusSchema = z
  .object({
    state: AssetStateSchema.and(
      z.any().openapi({ description: 'The current status of the asset.' }),
    ),
    error: ErrorDetailsSchema.and(
      z.any().openapi({ description: 'Contains associated error information, if any.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['state'],
    description:
      'Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.',
  })
  .openapi('AssetStatus')

const CreateAssetResponseSchema = z
  .object({
    assetId: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the asset. This ID uniquely identifies the asset within IoT SiteWise and can be used with other IoT SiteWise APIs.',
        }),
    ),
    assetArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code> </p>',
        }),
    ),
    assetStatus: AssetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asset, which contains a state (<code>CREATING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['assetId', 'assetArn', 'assetStatus'] })
  .openapi('CreateAssetResponse')

const AssetModelStateSchema = z
  .enum(['CREATING', 'ACTIVE', 'UPDATING', 'PROPAGATING', 'DELETING', 'FAILED'])
  .openapi('AssetModelState')

const AssetModelStatusSchema = z
  .object({
    state: AssetModelStateSchema.and(
      z.any().openapi({ description: 'The current state of the asset model.' }),
    ),
    error: ErrorDetailsSchema.and(
      z.any().openapi({ description: 'Contains associated error information, if any.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['state'],
    description:
      'Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.',
  })
  .openapi('AssetModelStatus')

const CreateAssetModelResponseSchema = z
  .object({
    assetModelId: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the asset model. You can use this ID when you call other IoT SiteWise APIs.',
        }),
    ),
    assetModelArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code> </p>',
        }),
    ),
    assetModelStatus: AssetModelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asset model, which contains a state (<code>CREATING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['assetModelId', 'assetModelArn', 'assetModelStatus'] })
  .openapi('CreateAssetModelResponse')

const NameSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .max(256)
  .openapi('Name')

const PropertyDataTypeSchema = z
  .enum(['STRING', 'INTEGER', 'DOUBLE', 'BOOLEAN', 'STRUCT'])
  .openapi('PropertyDataType')

const PropertyUnitSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .max(256)
  .openapi('PropertyUnit')

const DefaultValueSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .max(1024)
  .openapi('DefaultValue')

const AttributeSchema = z
  .object({
    defaultValue: DefaultValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default value of the asset model property attribute. All assets that you create from the asset model contain this attribute value. You can update an attribute\'s value after you create an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html">Updating attribute values</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.',
    required: [],
  })
  .openapi('Attribute')

const ForwardingConfigStateSchema = z.enum(['DISABLED', 'ENABLED']).openapi('ForwardingConfigState')

const ForwardingConfigSchema = z
  .object({
    state: ForwardingConfigStateSchema.and(
      z.any().openapi({ description: 'The forwarding state for the given property. ' }),
    ),
  })
  .openapi({
    required: ['state'],
    description: 'The forwarding configuration for a given property.',
  })
  .openapi('ForwardingConfig')

const MeasurementProcessingConfigSchema = z
  .object({
    forwardingConfig: ForwardingConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The forwarding configuration for the given measurement property. ',
        }),
    ),
  })
  .openapi({
    required: ['forwardingConfig'],
    description:
      'The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.',
  })
  .openapi('MeasurementProcessingConfig')

const MeasurementSchema = z
  .object({
    processingConfig: MeasurementProcessingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.',
    required: [],
  })
  .openapi('Measurement')

const ExpressionSchema = z.string().min(1).max(1024).openapi('Expression')

const VariableNameSchema = z
  .string()
  .regex(/^[a-z][a-z0-9_]*$/)
  .min(1)
  .max(64)
  .openapi('VariableName')

const MacroSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .max(256)
  .openapi('Macro')

const VariableValueSchema = z
  .object({
    propertyId: MacroSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the property to use as the variable. You can use the property <code>name</code> if it's from the same asset model.",
        }),
    ),
    hierarchyId: MacroSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID of the hierarchy to query for the property ID. You can use the hierarchy\'s name instead of the hierarchy\'s ID.</p> <p>You use a hierarchy ID instead of a model ID because you can have several hierarchies using the same model and therefore the same <code>propertyId</code>. For example, you might have separately grouped assets that come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['propertyId'],
    description: 'Identifies a property value used in an expression.',
  })
  .openapi('VariableValue')

const ExpressionVariableSchema = z
  .object({
    name: VariableNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The friendly name of the variable to be used in the expression.',
        }),
    ),
    value: VariableValueSchema.and(
      z
        .any()
        .openapi({
          description: 'The variable that identifies an asset property from which to use values.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'value'],
    description: 'Contains expression variable information.',
  })
  .openapi('ExpressionVariable')

const ExpressionVariablesSchema = z.array(ExpressionVariableSchema).openapi('ExpressionVariables')

const ComputeLocationSchema = z.enum(['EDGE', 'CLOUD']).openapi('ComputeLocation')

const TransformProcessingConfigSchema = z
  .object({
    computeLocation: ComputeLocationSchema.and(
      z.any().openapi({ description: 'The compute location for the given transform property. ' }),
    ),
    forwardingConfig: ForwardingConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['computeLocation'],
    description:
      'The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.',
  })
  .openapi('TransformProcessingConfig')

const TransformSchema = z
  .object({
    expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The mathematical expression that defines the transformation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ),
    variables: ExpressionVariablesSchema.and(
      z.any().openapi({ description: 'The list of variables used in the expression.' }),
    ),
    processingConfig: TransformProcessingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['expression', 'variables'],
    description:
      '<p>Contains an asset transform property. A transform is a one-to-one mapping of a property\'s data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>',
  })
  .openapi('Transform')

const IntervalSchema = z.string().min(2).max(23).openapi('Interval')

const OffsetSchema = z.string().min(2).max(25).openapi('Offset')

const TumblingWindowSchema = z
  .object({
    interval: IntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time interval for the tumbling window. The interval time must be between 1 minute and 1 week.</p> <p>IoT SiteWise computes the <code>1w</code> interval the end of Sunday at midnight each week (UTC), the <code>1d</code> interval at the end of each day at midnight (UTC), the <code>1h</code> interval at the end of each hour, and so on. </p> <p>When IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. IoT SiteWise places the computed data point at the end of the interval.</p>',
        }),
    ),
    offset: OffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The offset for the tumbling window. The <code>offset</code> parameter accepts the following:</p> <ul> <li> <p>The offset time.</p> <p>For example, if you specify <code>18h</code> for <code>offset</code> and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following ways:</p> <ul> <li> <p>If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.</p> </li> <li> <p>If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.</p> </li> </ul> </li> <li> <p>The ISO 8601 format.</p> <p>For example, if you specify <code>PT18H</code> for <code>offset</code> and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following ways:</p> <ul> <li> <p>If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.</p> </li> <li> <p>If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.</p> </li> </ul> </li> <li> <p>The 24-hour clock.</p> <p>For example, if you specify <code>00:03:00</code> for <code>offset</code>, <code>5m</code> for <code>interval</code>, and you create the metric at 2 PM (UTC), you get the first aggregation result at 2:03 PM (UTC). You get the second aggregation result at 2:08 PM (UTC). </p> </li> <li> <p>The offset time zone.</p> <p>For example, if you specify <code>2021-07-23T18:00-08</code> for <code>offset</code> and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following ways:</p> <ul> <li> <p>If you create the metric before or at 6 PM (PST), you get the first aggregation result at 6 PM (PST) on the day when you create the metric.</p> </li> <li> <p>If you create the metric after 6 PM (PST), you get the first aggregation result at 6 PM (PST) the next day.</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['interval'],
    description:
      '<p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.</p> <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code> when you specify an interval or offset. Note that <code>m</code> represents minutes, <code>h</code> represents hours, <code>d</code> represents days, and <code>w</code> represents weeks. You can also use <code>s</code> to represent seconds in <code>offset</code>.</p> <p>The <code>interval</code> and <code>offset</code> parameters support the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>. For example, <code>PT5S</code> represents 5 seconds, <code>PT5M</code> represents 5 minutes, and <code>PT5H</code> represents 5 hours.</p>',
  })
  .openapi('TumblingWindow')

const MetricWindowSchema = z
  .object({
    tumbling: TumblingWindowSchema.and(
      z.any().openapi({ description: 'The tumbling time interval window.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).',
    required: [],
  })
  .openapi('MetricWindow')

const MetricProcessingConfigSchema = z
  .object({
    computeLocation: ComputeLocationSchema.and(
      z.any().openapi({ description: 'The compute location for the given metric property. ' }),
    ),
  })
  .openapi({
    required: ['computeLocation'],
    description:
      'The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.',
  })
  .openapi('MetricProcessingConfig')

const MetricSchema = z
  .object({
    expression: ExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The mathematical expression that defines the metric aggregation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ),
    variables: ExpressionVariablesSchema.and(
      z.any().openapi({ description: 'The list of variables used in the expression.' }),
    ),
    window: MetricWindowSchema.and(
      z
        .any()
        .openapi({
          description:
            "The window (time interval) over which IoT SiteWise computes the metric's aggregation expression. IoT SiteWise computes one data point per <code>window</code>.",
        }),
    ),
    processingConfig: MetricProcessingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['expression', 'variables', 'window'],
    description:
      '<p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p>',
  })
  .openapi('Metric')

const PropertyTypeSchema = z
  .object({
    attribute: AttributeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an asset attribute property. An attribute generally contains static information, such as the serial number of an <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">IIoT</a> wind turbine.',
        }),
    ).exactOptional(),
    measurement: MeasurementSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies an asset measurement property. A measurement represents a device's raw sensor data stream, such as timestamped temperature values or timestamped power values.",
        }),
    ).exactOptional(),
    transform: TransformSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies an asset transform property. A transform contains a mathematical expression that maps a property's data points from one form to another, such as a unit conversion from Celsius to Fahrenheit.",
        }),
    ).exactOptional(),
    metric: MetricSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies an asset metric property. A metric contains a mathematical expression that uses aggregate functions to process all input data points over a time interval and output a single data point, such as to calculate the average hourly temperature.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.',
    required: [],
  })
  .openapi('PropertyType')

const AssetModelPropertyDefinitionSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the property definition.' })),
    dataType: PropertyDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the property definition.</p> <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this property.</p>',
        }),
    ),
    dataTypeSpec: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the structure for this property. This parameter is required on properties that have the <code>STRUCT</code> data type.</p> <p>The options for this parameter depend on the type of the composite model in which you define this property. Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>',
        }),
    ).exactOptional(),
    unit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of the property definition, such as <code>Newtons</code> or <code>RPM</code>.',
        }),
    ).exactOptional(),
    type: PropertyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property definition type (see <code>PropertyType</code>). You can only specify one type in a property definition.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'dataType', 'type'],
    description:
      'Contains an asset model property definition. This property definition is applied to all assets created from the asset model.',
  })
  .openapi('AssetModelPropertyDefinition')

const AssetModelHierarchyDefinitionSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset model hierarchy definition (as specified in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation).',
        }),
    ),
    childAssetModelId: IDSchema.and(
      z.any().openapi({ description: 'The ID of an asset model for this hierarchy.' }),
    ),
  })
  .openapi({
    required: ['name', 'childAssetModelId'],
    description:
      'Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.',
  })
  .openapi('AssetModelHierarchyDefinition')

const DescriptionSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .max(2048)
  .openapi('Description')

const AssetModelCompositeModelDefinitionSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the composite model.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the composite model.' }),
    ).exactOptional(),
    type: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the composite model. For alarm composite models, this type is <code>AWS/ALARM</code>.',
        }),
    ),
    properties: z
      .any()
      .exactOptional()
      .openapi({ description: 'The asset property definitions for this composite model.' }),
  })
  .openapi({
    required: ['name', 'type'],
    description:
      'Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.',
  })
  .openapi('AssetModelCompositeModelDefinition')

const JobStatusSchema = z
  .enum(['PENDING', 'CANCELLED', 'RUNNING', 'COMPLETED', 'FAILED', 'COMPLETED_WITH_FAILURES'])
  .openapi('JobStatus')

const CreateBulkImportJobResponseSchema = z
  .object({
    jobId: IDSchema.and(z.any().openapi({ description: 'The ID of the job.' })),
    jobName: NameSchema.and(
      z.any().openapi({ description: 'The unique name that helps identify the job request.' }),
    ),
    jobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the bulk import job can be one of following values.</p> <ul> <li> <p> <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p> </li> <li> <p> <code>CANCELLED</code> – The bulk import job has been canceled.</p> </li> <li> <p> <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p> </li> <li> <p> <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p> </li> <li> <p> <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p> </li> <li> <p> <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({ required: ['jobId', 'jobName', 'jobStatus'] })
  .openapi('CreateBulkImportJobResponse')

const BucketSchema = z.string().min(3).max(63).openapi('Bucket')

const StringSchema = z.string().openapi('String')

const FileSchema = z
  .object({
    bucket: BucketSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Amazon S3 bucket from which data is imported.' }),
    ),
    key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key of the Amazon S3 object that contains your data. Each object has a key that is a unique identifier. Each object has exactly one key.',
        }),
    ),
    versionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version ID to identify a specific version of the Amazon S3 object that contains your data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucket', 'key'],
    description: 'The file in Amazon S3 where your data is saved. ',
  })
  .openapi('File')

const ColumnNameSchema = z
  .enum([
    'ALIAS',
    'ASSET_ID',
    'PROPERTY_ID',
    'DATA_TYPE',
    'TIMESTAMP_SECONDS',
    'TIMESTAMP_NANO_OFFSET',
    'QUALITY',
    'VALUE',
  ])
  .openapi('ColumnName')

const ColumnNamesSchema = z.array(ColumnNameSchema).openapi('ColumnNames')

const CsvSchema = z
  .object({
    columnNames: ColumnNamesSchema.and(
      z.any().openapi({ description: 'The column names specified in the .csv file.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A .csv file.', required: [] })
  .openapi('Csv')

const FileFormatSchema = z
  .object({
    csv: CsvSchema.and(z.any().openapi({ description: 'The .csv file format.' })).exactOptional(),
  })
  .openapi({ description: 'The file format of the data.', required: [] })
  .openapi('FileFormat')

const CreateDashboardResponseSchema = z
  .object({
    dashboardId: IDSchema.and(z.any().openapi({ description: 'The ID of the dashboard.' })),
    dashboardArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['dashboardId', 'dashboardArn'] })
  .openapi('CreateDashboardResponse')

const CreateGatewayResponseSchema = z
  .object({
    gatewayId: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the gateway device. You can use this ID when you call other IoT SiteWise APIs.',
        }),
    ),
    gatewayArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['gatewayId', 'gatewayArn'] })
  .openapi('CreateGatewayResponse')

const GreengrassSchema = z
  .object({
    groupArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Greengrass group. For more information about how to find a group\'s ARN, see <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html">ListGroups</a> and <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html">GetGroup</a> in the <i>IoT Greengrass API Reference</i>.',
        }),
    ),
  })
  .openapi({
    required: ['groupArn'],
    description:
      'Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.',
  })
  .openapi('Greengrass')

const CoreDeviceThingNameSchema = z.string().min(1).max(128).openapi('CoreDeviceThingName')

const GreengrassV2Schema = z
  .object({
    coreDeviceThingName: CoreDeviceThingNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the IoT thing for your IoT Greengrass V2 core device.',
        }),
    ),
  })
  .openapi({
    required: ['coreDeviceThingName'],
    description:
      'Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the <i>IoT SiteWise User Guide</i>.',
  })
  .openapi('GreengrassV2')

const UrlSchema = z
  .string()
  .regex(/^(http|https)\:\/\/\S+/)
  .min(1)
  .max(256)
  .openapi('Url')

const PortalStateSchema = z
  .enum(['CREATING', 'UPDATING', 'DELETING', 'ACTIVE', 'FAILED'])
  .openapi('PortalState')

const MonitorErrorCodeSchema = z
  .enum(['INTERNAL_FAILURE', 'VALIDATION_ERROR', 'LIMIT_EXCEEDED'])
  .openapi('MonitorErrorCode')

const MonitorErrorMessageSchema = z.string().openapi('MonitorErrorMessage')

const MonitorErrorDetailsSchema = z
  .object({
    code: MonitorErrorCodeSchema.and(
      z.any().openapi({ description: 'The error code.' }),
    ).exactOptional(),
    message: MonitorErrorMessageSchema.and(
      z.any().openapi({ description: 'The error message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains IoT SiteWise Monitor error details.', required: [] })
  .openapi('MonitorErrorDetails')

const PortalStatusSchema = z
  .object({
    state: PortalStateSchema.and(
      z.any().openapi({ description: 'The current state of the portal.' }),
    ),
    error: MonitorErrorDetailsSchema.and(
      z.any().openapi({ description: 'Contains associated error information, if any.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['state'],
    description: 'Contains information about the current status of a portal.',
  })
  .openapi('PortalStatus')

const SSOApplicationIdSchema = z
  .string()
  .regex(/^[!-~]*/)
  .min(1)
  .max(64)
  .openapi('SSOApplicationId')

const CreatePortalResponseSchema = z
  .object({
    portalId: IDSchema.and(z.any().openapi({ description: 'The ID of the created portal.' })),
    portalArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}</code> </p>',
        }),
    ),
    portalStartUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.',
        }),
    ),
    portalStatus: PortalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the portal, which contains a state (<code>CREATING</code> after successfully calling this operation) and any error message.',
        }),
    ),
    ssoApplicationId: SSOApplicationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The associated IAM Identity Center application ID, if the portal uses IAM Identity Center.',
        }),
    ),
  })
  .openapi({
    required: ['portalId', 'portalArn', 'portalStartUrl', 'portalStatus', 'ssoApplicationId'],
  })
  .openapi('CreatePortalResponse')

const ImageFileDataSchema = z.string().min(1).max(1500000).openapi('ImageFileData')

const ImageFileTypeSchema = z.literal('PNG').openapi('ImageFileType')

const CreateProjectResponseSchema = z
  .object({
    projectId: IDSchema.and(z.any().openapi({ description: 'The ID of the project.' })),
    projectArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}</code> </p>',
        }),
    ),
  })
  .openapi({ required: ['projectId', 'projectArn'] })
  .openapi('CreateProjectResponse')

const DeleteAccessPolicyResponseSchema = z.object({}).openapi('DeleteAccessPolicyResponse')

const DeleteAssetResponseSchema = z
  .object({
    assetStatus: AssetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asset, which contains a state (<code>DELETING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['assetStatus'] })
  .openapi('DeleteAssetResponse')

const DeleteAssetModelResponseSchema = z
  .object({
    assetModelStatus: AssetModelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asset model, which contains a state (<code>DELETING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['assetModelStatus'] })
  .openapi('DeleteAssetModelResponse')

const DeleteDashboardResponseSchema = z.object({}).openapi('DeleteDashboardResponse')

const DeletePortalResponseSchema = z
  .object({
    portalStatus: PortalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the portal, which contains a state (<code>DELETING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['portalStatus'] })
  .openapi('DeletePortalResponse')

const DeleteProjectResponseSchema = z.object({}).openapi('DeleteProjectResponse')

const IdentitySchema: z.ZodType<IdentityType> = z
  .lazy(() =>
    z
      .object({
        user: UserIdentitySchema.and(
          z.any().openapi({ description: 'An IAM Identity Center user identity.' }),
        ).exactOptional(),
        group: GroupIdentitySchema.and(
          z.any().openapi({ description: 'An IAM Identity Center group identity.' }),
        ).exactOptional(),
        iamUser: IAMUserIdentitySchema.and(
          z.any().openapi({ description: 'An IAM user identity.' }),
        ).exactOptional(),
        iamRole: IAMRoleIdentitySchema.and(
          z.any().openapi({ description: 'An IAM role identity.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          '<p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can\'t use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>',
        required: [],
      }),
  )
  .openapi('Identity')

const ResourceSchema: z.ZodType<ResourceType> = z
  .lazy(() =>
    z
      .object({
        portal: PortalResourceSchema.and(
          z.any().openapi({ description: 'A portal resource.' }),
        ).exactOptional(),
        project: ProjectResourceSchema.and(
          z.any().openapi({ description: 'A project resource.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'Contains an IoT SiteWise Monitor resource ID for a portal or project.',
        required: [],
      }),
  )
  .openapi('Resource')

const PermissionSchema = z.enum(['ADMINISTRATOR', 'VIEWER']).openapi('Permission')

const DescribeAccessPolicyResponseSchema = z
  .object({
    accessPolicyId: IDSchema.and(z.any().openapi({ description: 'The ID of the access policy.' })),
    accessPolicyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}</code> </p>',
        }),
    ),
    accessPolicyIdentity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy applies.',
        }),
    ),
    accessPolicyResource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IoT SiteWise Monitor resource (portal or project) to which this access policy provides access.',
        }),
    ),
    accessPolicyPermission: PermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The access policy permission. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.',
        }),
    ),
    accessPolicyCreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the access policy was created, in Unix epoch time.' }),
    ),
    accessPolicyLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the access policy was last updated, in Unix epoch time.',
        }),
    ),
  })
  .openapi({
    required: [
      'accessPolicyId',
      'accessPolicyArn',
      'accessPolicyIdentity',
      'accessPolicyResource',
      'accessPolicyPermission',
      'accessPolicyCreationDate',
      'accessPolicyLastUpdateDate',
    ],
  })
  .openapi('DescribeAccessPolicyResponse')

const PropertyAliasSchema = z
  .string()
  .regex(/[^\u0000-\u001F\u007F]+/)
  .min(1)
  .openapi('PropertyAlias')

const PropertyNotificationTopicSchema = z.string().openapi('PropertyNotificationTopic')

const PropertyNotificationStateSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('PropertyNotificationState')

const PropertyNotificationSchema = z
  .object({
    topic: PropertyNotificationTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MQTT topic to which IoT SiteWise publishes property value update notifications.',
        }),
    ),
    state: PropertyNotificationStateSchema.and(
      z.any().openapi({ description: 'The current notification state.' }),
    ),
  })
  .openapi({
    required: ['topic', 'state'],
    description:
      'Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.',
  })
  .openapi('PropertyNotification')

const AssetPropertySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the asset property.' })),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the property.' })),
    alias: PropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    notification: PropertyNotificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset property\'s notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.',
        }),
    ).exactOptional(),
    dataType: PropertyDataTypeSchema.and(
      z.any().openapi({ description: 'The data type of the asset property.' }),
    ),
    dataTypeSpec: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data type of the structure for this property. This parameter exists on properties that have the <code>STRUCT</code> data type.',
        }),
    ).exactOptional(),
    unit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id', 'name', 'dataType'],
    description: 'Contains asset property information.',
  })
  .openapi('AssetProperty')

const AssetPropertiesSchema = z.array(AssetPropertySchema).openapi('AssetProperties')

const AssetHierarchySchema = z
  .object({
    id: IDSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the hierarchy. This ID is a <code>hierarchyId</code>.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The hierarchy name provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation.',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description: "Describes an asset hierarchy that contains a hierarchy's name and ID.",
  })
  .openapi('AssetHierarchy')

const AssetHierarchiesSchema = z.array(AssetHierarchySchema).openapi('AssetHierarchies')

const AssetCompositeModelSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the composite model.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the composite model.' }),
    ).exactOptional(),
    type: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the composite model. For alarm composite models, this type is <code>AWS/ALARM</code>.',
        }),
    ),
    properties: z
      .any()
      .openapi({ description: 'The asset properties that this composite model defines.' }),
    id: IDSchema.and(
      z.any().openapi({ description: ' The ID of the asset composite model. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'type', 'properties'],
    description:
      "Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.",
  })
  .openapi('AssetCompositeModel')

const AssetCompositeModelsSchema = z
  .array(AssetCompositeModelSchema)
  .openapi('AssetCompositeModels')

const DescribeAssetResponseSchema = z
  .object({
    assetId: IDSchema.and(z.any().openapi({ description: 'The ID of the asset.' })),
    assetArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code> </p>',
        }),
    ),
    assetName: NameSchema.and(z.any().openapi({ description: 'The name of the asset.' })),
    assetModelId: IDSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the asset model that was used to create the asset.' }),
    ),
    assetProperties: AssetPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of asset properties for the asset.</p> <p>This object doesn't include properties that you define in composite models. You can find composite model properties in the <code>assetCompositeModels</code> object.</p>",
        }),
    ),
    assetHierarchies: AssetHierarchiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.',
        }),
    ),
    assetCompositeModels: AssetCompositeModelsSchema.and(
      z.any().openapi({ description: 'The composite models for the asset.' }),
    ).exactOptional(),
    assetCreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset was created, in Unix epoch time.' }),
    ),
    assetLastUpdateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset was last updated, in Unix epoch time.' }),
    ),
    assetStatus: AssetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the asset, which contains a state and any error message.',
        }),
    ),
    assetDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'assetId',
      'assetArn',
      'assetName',
      'assetModelId',
      'assetProperties',
      'assetHierarchies',
      'assetCreationDate',
      'assetLastUpdateDate',
      'assetStatus',
    ],
  })
  .openapi('DescribeAssetResponse')

const AssetModelPropertySchema = z
  .object({
    id: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset model property.' }),
    ).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the asset model property.' })),
    dataType: PropertyDataTypeSchema.and(
      z.any().openapi({ description: 'The data type of the asset model property.' }),
    ),
    dataTypeSpec: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data type of the structure for this property. This parameter exists on properties that have the <code>STRUCT</code> data type.',
        }),
    ).exactOptional(),
    unit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit of the asset model property, such as <code>Newtons</code> or <code>RPM</code>.',
        }),
    ).exactOptional(),
    type: PropertyTypeSchema.and(
      z.any().openapi({ description: 'The property type (see <code>PropertyType</code>).' }),
    ),
  })
  .openapi({
    required: ['name', 'dataType', 'type'],
    description: 'Contains information about an asset model property.',
  })
  .openapi('AssetModelProperty')

const AssetModelPropertiesSchema = z.array(AssetModelPropertySchema).openapi('AssetModelProperties')

const AssetModelHierarchySchema = z
  .object({
    id: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the asset model hierarchy. This ID is a <code>hierarchyId</code>.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset model hierarchy that you specify by using the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation.',
        }),
    ),
    childAssetModelId: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the asset model. All assets in this hierarchy must be instances of the <code>childAssetModelId</code> asset model.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'childAssetModelId'],
    description:
      "Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.",
  })
  .openapi('AssetModelHierarchy')

const AssetModelHierarchiesSchema = z
  .array(AssetModelHierarchySchema)
  .openapi('AssetModelHierarchies')

const AssetModelCompositeModelSchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the composite model.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the composite model.' }),
    ).exactOptional(),
    type: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the composite model. For alarm composite models, this type is <code>AWS/ALARM</code>.',
        }),
    ),
    properties: z
      .any()
      .exactOptional()
      .openapi({ description: 'The asset property definitions for this composite model.' }),
    id: IDSchema.and(
      z.any().openapi({ description: ' The ID of the asset model composite model. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'type'],
    description:
      'Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.',
  })
  .openapi('AssetModelCompositeModel')

const AssetModelCompositeModelsSchema = z
  .array(AssetModelCompositeModelSchema)
  .openapi('AssetModelCompositeModels')

const DescribeAssetModelResponseSchema = z
  .object({
    assetModelId: IDSchema.and(z.any().openapi({ description: 'The ID of the asset model.' })),
    assetModelArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code> </p>',
        }),
    ),
    assetModelName: NameSchema.and(
      z.any().openapi({ description: 'The name of the asset model.' }),
    ),
    assetModelDescription: DescriptionSchema.and(
      z.any().openapi({ description: "The asset model's description." }),
    ),
    assetModelProperties: AssetModelPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The list of asset properties for the asset model.</p> <p>This object doesn't include properties that you define in composite models. You can find composite model properties in the <code>assetModelCompositeModels</code> object.</p>",
        }),
    ),
    assetModelHierarchies: AssetModelHierarchiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of asset model hierarchies that each contain a <code>childAssetModelId</code> and a <code>hierarchyId</code> (named <code>id</code>). A hierarchy specifies allowed parent/child asset relationships for an asset model.',
        }),
    ),
    assetModelCompositeModels: AssetModelCompositeModelsSchema.and(
      z.any().openapi({ description: 'The list of composite asset models for the asset model.' }),
    ).exactOptional(),
    assetModelCreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset model was created, in Unix epoch time.' }),
    ),
    assetModelLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the asset model was last updated, in Unix epoch time.' }),
    ),
    assetModelStatus: AssetModelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the asset model, which contains a state and any error message.',
        }),
    ),
  })
  .openapi({
    required: [
      'assetModelId',
      'assetModelArn',
      'assetModelName',
      'assetModelDescription',
      'assetModelProperties',
      'assetModelHierarchies',
      'assetModelCreationDate',
      'assetModelLastUpdateDate',
      'assetModelStatus',
    ],
  })
  .openapi('DescribeAssetModelResponse')

const PropertySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the asset property.' })),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the property.' })),
    alias: PropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    notification: PropertyNotificationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset property\'s notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.',
        }),
    ).exactOptional(),
    dataType: PropertyDataTypeSchema.and(
      z.any().openapi({ description: 'The property data type.' }),
    ),
    unit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.',
        }),
    ).exactOptional(),
    type: PropertyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property type (see <code>PropertyType</code>). A property contains one type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id', 'name', 'dataType'],
    description: 'Contains asset property information.',
  })
  .openapi('Property')

const CompositeModelPropertySchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: 'The name of the property.' })),
    type: NameSchema.and(
      z
        .any()
        .openapi({ description: 'The type of the composite model that defines this property.' }),
    ),
    assetProperty: PropertySchema,
    id: IDSchema.and(
      z
        .any()
        .openapi({ description: ' The ID of the composite model that contains the property. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'type', 'assetProperty'],
    description: 'Contains information about a composite model property on an asset.',
  })
  .openapi('CompositeModelProperty')

const DescribeAssetPropertyResponseSchema = z
  .object({
    assetId: IDSchema.and(z.any().openapi({ description: 'The ID of the asset.' })),
    assetName: NameSchema.and(z.any().openapi({ description: 'The name of the asset.' })),
    assetModelId: IDSchema.and(z.any().openapi({ description: 'The ID of the asset model.' })),
    assetProperty: PropertySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The asset property's definition, alias, and notification state.</p> <p>This response includes this object for normal asset properties. If you describe an asset property in a composite model, this response includes the asset property information in <code>compositeModel</code>.</p>",
        }),
    ).exactOptional(),
    compositeModel: CompositeModelPropertySchema.and(
      z
        .any()
        .openapi({
          description:
            'The composite asset model that declares this asset property, if this asset property exists in a composite model.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetId', 'assetName', 'assetModelId'] })
  .openapi('DescribeAssetPropertyResponse')

const FilesSchema = z.array(FileSchema).openapi('Files')

const ErrorReportLocationSchema = z
  .object({
    bucket: BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Amazon S3 bucket to which errors associated with the bulk import job are sent.',
        }),
    ),
    prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['bucket', 'prefix'],
    description:
      'The Amazon S3 destination where errors associated with the job creation request are saved.',
  })
  .openapi('ErrorReportLocation')

const JobConfigurationSchema = z
  .object({
    fileFormat: FileFormatSchema.and(
      z.any().openapi({ description: 'The file format of the data in Amazon S3.' }),
    ),
  })
  .openapi({
    required: ['fileFormat'],
    description:
      'Contains the configuration information of a job, such as the file format used to save data in Amazon S3.',
  })
  .openapi('JobConfiguration')

const DescribeBulkImportJobResponseSchema = z
  .object({
    jobId: IDSchema.and(z.any().openapi({ description: 'The ID of the job.' })),
    jobName: NameSchema.and(
      z.any().openapi({ description: 'The unique name that helps identify the job request.' }),
    ),
    jobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the bulk import job can be one of following values.</p> <ul> <li> <p> <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p> </li> <li> <p> <code>CANCELLED</code> – The bulk import job has been canceled.</p> </li> <li> <p> <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p> </li> <li> <p> <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p> </li> <li> <p> <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p> </li> <li> <p> <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p> </li> </ul>",
        }),
    ),
    jobRoleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.',
        }),
    ),
    files: FilesSchema.and(
      z
        .any()
        .openapi({
          description: 'The files in the specified Amazon S3 bucket that contain your data.',
        }),
    ),
    errorReportLocation: ErrorReportLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 destination where errors associated with the job creation request are saved.',
        }),
    ),
    jobConfiguration: JobConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration information of a job, such as the file format used to save data in Amazon S3.',
        }),
    ),
    jobCreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the job was created, in Unix epoch TIME.' }),
    ),
    jobLastUpdateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the job was last updated, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: [
      'jobId',
      'jobName',
      'jobStatus',
      'jobRoleArn',
      'files',
      'errorReportLocation',
      'jobConfiguration',
      'jobCreationDate',
      'jobLastUpdateDate',
    ],
  })
  .openapi('DescribeBulkImportJobResponse')

const DashboardDefinitionSchema = z
  .string()
  .regex(/.+/)
  .min(0)
  .max(204800)
  .openapi('DashboardDefinition')

const DescribeDashboardResponseSchema = z
  .object({
    dashboardId: IDSchema.and(z.any().openapi({ description: 'The ID of the dashboard.' })),
    dashboardArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}</code> </p>',
        }),
    ),
    dashboardName: NameSchema.and(z.any().openapi({ description: 'The name of the dashboard.' })),
    projectId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the project that the dashboard is in.' }),
    ),
    dashboardDescription: DescriptionSchema.and(
      z.any().openapi({ description: "The dashboard's description." }),
    ).exactOptional(),
    dashboardDefinition: DashboardDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dashboard\'s definition JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    dashboardCreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the dashboard was created, in Unix epoch time.' }),
    ),
    dashboardLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the dashboard was last updated, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: [
      'dashboardId',
      'dashboardArn',
      'dashboardName',
      'projectId',
      'dashboardDefinition',
      'dashboardCreationDate',
      'dashboardLastUpdateDate',
    ],
  })
  .openapi('DescribeDashboardResponse')

const EncryptionTypeSchema = z
  .enum(['SITEWISE_DEFAULT_ENCRYPTION', 'KMS_BASED_ENCRYPTION'])
  .openapi('EncryptionType')

const ConfigurationStateSchema = z
  .enum(['ACTIVE', 'UPDATE_IN_PROGRESS', 'UPDATE_FAILED'])
  .openapi('ConfigurationState')

const ConfigurationErrorDetailsSchema = z
  .object({
    code: ErrorCodeSchema.and(z.any().openapi({ description: 'The error code.' })),
    message: ErrorMessageSchema.and(z.any().openapi({ description: 'The error message.' })),
  })
  .openapi({
    required: ['code', 'message'],
    description: 'Contains the details of an IoT SiteWise configuration error.',
  })
  .openapi('ConfigurationErrorDetails')

const ConfigurationStatusSchema = z
  .object({
    state: ConfigurationStateSchema.and(
      z.any().openapi({ description: 'The current state of the configuration.' }),
    ),
    error: ConfigurationErrorDetailsSchema.and(
      z.any().openapi({ description: 'Contains associated error information, if any.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['state'],
    description: 'Contains current status information for the configuration.',
  })
  .openapi('ConfigurationStatus')

const DescribeDefaultEncryptionConfigurationResponseSchema = z
  .object({
    encryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of encryption used for the encryption configuration.' }),
    ),
    kmsKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key ARN of the customer managed key used for KMS encryption if you use <code>KMS_BASED_ENCRYPTION</code>.',
        }),
    ).exactOptional(),
    configurationStatus: ConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the account configuration. This contains the <code>ConfigurationState</code>. If there's an error, it also contains the <code>ErrorDetails</code>.",
        }),
    ),
  })
  .openapi({ required: ['encryptionType', 'configurationStatus'] })
  .openapi('DescribeDefaultEncryptionConfigurationResponse')

const GatewayPlatformSchema = z
  .object({
    greengrass: GreengrassSchema.and(
      z.any().openapi({ description: 'A gateway that runs on IoT Greengrass.' }),
    ).exactOptional(),
    greengrassV2: GreengrassV2Schema.and(
      z.any().openapi({ description: 'A gateway that runs on IoT Greengrass V2.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Contains a gateway's platform information.", required: [] })
  .openapi('GatewayPlatform')

const CapabilityNamespaceSchema = z
  .string()
  .regex(/^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$/)
  .min(1)
  .max(512)
  .openapi('CapabilityNamespace')

const CapabilitySyncStatusSchema = z
  .enum(['IN_SYNC', 'OUT_OF_SYNC', 'SYNC_FAILED', 'UNKNOWN'])
  .openapi('CapabilitySyncStatus')

const GatewayCapabilitySummarySchema = z
  .object({
    capabilityNamespace: CapabilityNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.',
        }),
    ),
    capabilitySyncStatus: CapabilitySyncStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The synchronization status of the capability configuration. The sync status can be one of the following:</p> <ul> <li> <p> <code>IN_SYNC</code> – The gateway is running the capability configuration.</p> </li> <li> <p> <code>OUT_OF_SYNC</code> – The gateway hasn't received the capability configuration.</p> </li> <li> <p> <code>SYNC_FAILED</code> – The gateway rejected the capability configuration.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['capabilityNamespace', 'capabilitySyncStatus'],
    description: 'Contains a summary of a gateway capability configuration.',
  })
  .openapi('GatewayCapabilitySummary')

const GatewayCapabilitySummariesSchema = z
  .array(GatewayCapabilitySummarySchema)
  .openapi('GatewayCapabilitySummaries')

const DescribeGatewayResponseSchema = z
  .object({
    gatewayId: IDSchema.and(z.any().openapi({ description: 'The ID of the gateway device.' })),
    gatewayName: NameSchema.and(z.any().openapi({ description: 'The name of the gateway.' })),
    gatewayArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}</code> </p>',
        }),
    ),
    gatewayPlatform: GatewayPlatformSchema.and(
      z.any().openapi({ description: "The gateway's platform." }),
    ).exactOptional(),
    gatewayCapabilitySummaries: GatewayCapabilitySummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration\'s definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the gateway was created, in Unix epoch time.' }),
    ),
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the gateway was last updated, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: [
      'gatewayId',
      'gatewayName',
      'gatewayArn',
      'gatewayCapabilitySummaries',
      'creationDate',
      'lastUpdateDate',
    ],
  })
  .openapi('DescribeGatewayResponse')

const CapabilityConfigurationSchema = z
  .string()
  .min(1)
  .max(104857600)
  .openapi('CapabilityConfiguration')

const DescribeGatewayCapabilityConfigurationResponseSchema = z
  .object({
    gatewayId: IDSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the gateway that defines the capability configuration.',
        }),
    ),
    capabilityNamespace: CapabilityNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the gateway capability.' }),
    ),
    capabilityConfiguration: CapabilityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON document that defines the gateway capability\'s configuration. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    capabilitySyncStatus: CapabilitySyncStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The synchronization status of the capability configuration. The sync status can be one of the following:</p> <ul> <li> <p> <code>IN_SYNC</code> – The gateway is running the capability configuration.</p> </li> <li> <p> <code>OUT_OF_SYNC</code> – The gateway hasn't received the capability configuration.</p> </li> <li> <p> <code>SYNC_FAILED</code> – The gateway rejected the capability configuration.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: [
      'gatewayId',
      'capabilityNamespace',
      'capabilityConfiguration',
      'capabilitySyncStatus',
    ],
  })
  .openapi('DescribeGatewayCapabilityConfigurationResponse')

const LoggingLevelSchema = z.enum(['ERROR', 'INFO', 'OFF']).openapi('LoggingLevel')

const LoggingOptionsSchema = z
  .object({
    level: LoggingLevelSchema.and(
      z.any().openapi({ description: 'The IoT SiteWise logging verbosity level.' }),
    ),
  })
  .openapi({ required: ['level'], description: 'Contains logging options.' })
  .openapi('LoggingOptions')

const DescribeLoggingOptionsResponseSchema = z
  .object({
    loggingOptions: LoggingOptionsSchema.and(
      z.any().openapi({ description: 'The current logging options.' }),
    ),
  })
  .openapi({ required: ['loggingOptions'] })
  .openapi('DescribeLoggingOptionsResponse')

const PortalClientIdSchema = z
  .string()
  .regex(/^[!-~]*/)
  .min(1)
  .max(256)
  .openapi('PortalClientId')

const EmailSchema = z
  .string()
  .regex(/[^@]+@[^@]+/)
  .min(1)
  .max(255)
  .openapi('Email')

const ImageLocationSchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the image.' })),
    url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the image is available. The URL is valid for 15 minutes so that you can view and download the image',
        }),
    ),
  })
  .openapi({
    required: ['id', 'url'],
    description: 'Contains an image that is uploaded to IoT SiteWise and available at a URL.',
  })
  .openapi('ImageLocation')

const AuthModeSchema = z.enum(['IAM', 'SSO']).openapi('AuthMode')

const AlarmsSchema = z
  .object({
    alarmRoleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows the alarm to perform actions and access Amazon Web Services resources and services, such as IoT Events.',
        }),
    ),
    notificationLambdaArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function that manages alarm notifications. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">Managing alarm notifications</a> in the <i>IoT Events Developer Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['alarmRoleArn'],
    description:
      'Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.',
  })
  .openapi('Alarms')

const DescribePortalResponseSchema = z
  .object({
    portalId: IDSchema.and(z.any().openapi({ description: 'The ID of the portal.' })),
    portalArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}</code> </p>',
        }),
    ),
    portalName: NameSchema.and(z.any().openapi({ description: 'The name of the portal.' })),
    portalDescription: DescriptionSchema.and(
      z.any().openapi({ description: "The portal's description." }),
    ).exactOptional(),
    portalClientId: PortalClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Identity Center application generated client ID (used with IAM Identity Center APIs). IoT SiteWise includes <code>portalClientId</code> for only portals that use IAM Identity Center to authenticate users.',
        }),
    ),
    portalStartUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.',
        }),
    ),
    portalContactEmail: EmailSchema.and(
      z
        .any()
        .openapi({ description: "The Amazon Web Services administrator's contact email address." }),
    ),
    portalStatus: PortalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the portal, which contains a state and any error message.',
        }),
    ),
    portalCreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the portal was created, in Unix epoch time.' }),
    ),
    portalLastUpdateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the portal was last updated, in Unix epoch time.' }),
    ),
    portalLogoImageLocation: ImageLocationSchema.and(
      z.any().openapi({ description: "The portal's logo image, which is available at a URL." }),
    ).exactOptional(),
    roleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal\'s users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    portalAuthMode: AuthModeSchema.and(
      z.any().openapi({ description: 'The service to use to authenticate users to the portal.' }),
    ).exactOptional(),
    notificationSenderEmail: EmailSchema.and(
      z.any().openapi({ description: 'The email address that sends alarm notifications.' }),
    ).exactOptional(),
    alarms: AlarmsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'portalId',
      'portalArn',
      'portalName',
      'portalClientId',
      'portalStartUrl',
      'portalContactEmail',
      'portalStatus',
      'portalCreationDate',
      'portalLastUpdateDate',
    ],
  })
  .openapi('DescribePortalResponse')

const DescribeProjectResponseSchema = z
  .object({
    projectId: IDSchema.and(z.any().openapi({ description: 'The ID of the project.' })),
    projectArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}</code> </p>',
        }),
    ),
    projectName: NameSchema.and(z.any().openapi({ description: 'The name of the project.' })),
    portalId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the portal that the project is in.' }),
    ),
    projectDescription: DescriptionSchema.and(
      z.any().openapi({ description: "The project's description." }),
    ).exactOptional(),
    projectCreationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the project was created, in Unix epoch time.' }),
    ),
    projectLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the project was last updated, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: [
      'projectId',
      'projectArn',
      'projectName',
      'portalId',
      'projectCreationDate',
      'projectLastUpdateDate',
    ],
  })
  .openapi('DescribeProjectResponse')

const StorageTypeSchema = z
  .enum(['SITEWISE_DEFAULT_STORAGE', 'MULTI_LAYER_STORAGE'])
  .openapi('StorageType')

const CustomerManagedS3StorageSchema = z
  .object({
    s3ResourceArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Amazon S3 object. For more information about how to find the ARN for an Amazon S3 object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html">Amazon S3 resources</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
        }),
    ),
    roleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.',
        }),
    ),
  })
  .openapi({
    required: ['s3ResourceArn', 'roleArn'],
    description: 'Contains information about a customer managed Amazon S3 bucket.',
  })
  .openapi('CustomerManagedS3Storage')

const MultiLayerStorageSchema = z
  .object({
    customerManagedS3Storage: CustomerManagedS3StorageSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about a customer managed Amazon S3 bucket.',
        }),
    ),
  })
  .openapi({
    required: ['customerManagedS3Storage'],
    description: 'Contains information about the storage destination.',
  })
  .openapi('MultiLayerStorage')

const DisassociatedDataStorageStateSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('DisassociatedDataStorageState')

const NumberOfDaysSchema = z.int().min(30).openapi('NumberOfDays')

const UnlimitedSchema = z.boolean().openapi('Unlimited')

const RetentionPeriodSchema = z
  .object({
    numberOfDays: NumberOfDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of days that your data is kept.</p> <note> <p>If you specified a value for this parameter, the <code>unlimited</code> parameter must be <code>false</code>.</p> </note>',
        }),
    ).exactOptional(),
    unlimited: UnlimitedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If true, your data is kept indefinitely.</p> <note> <p>If configured to <code>true</code>, you must not specify a value for the <code>numberOfDays</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.',
    required: [],
  })
  .openapi('RetentionPeriod')

const DescribeStorageConfigurationResponseSchema = z
  .object({
    storageType: StorageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>',
        }),
    ),
    multiLayerStorage: MultiLayerStorageSchema.and(
      z.any().openapi({ description: 'Contains information about the storage destination.' }),
    ).exactOptional(),
    disassociatedDataStorage: DisassociatedDataStorageStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html\">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>",
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.',
        }),
    ).exactOptional(),
    configurationStatus: ConfigurationStatusSchema,
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the storage configuration was last updated, in Unix epoch time.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['storageType', 'configurationStatus'] })
  .openapi('DescribeStorageConfigurationResponse')

const TimeSeriesIdSchema = z.string().min(36).max(73).openapi('TimeSeriesId')

const DescribeTimeSeriesResponseSchema = z
  .object({
    assetId: IDSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the asset in which the asset property was created.' }),
    ).exactOptional(),
    propertyId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset property.' }),
    ).exactOptional(),
    alias: PropertyAliasSchema.and(
      z.any().openapi({ description: 'The alias that identifies the time series.' }),
    ).exactOptional(),
    timeSeriesId: TimeSeriesIdSchema.and(
      z.any().openapi({ description: 'The ID of the time series.' }),
    ),
    dataType: PropertyDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the time series.</p> <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>',
        }),
    ),
    dataTypeSpec: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the structure for this time series. This parameter is required for time series that have the <code>STRUCT</code> data type.</p> <p>The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>',
        }),
    ).exactOptional(),
    timeSeriesCreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the time series was created, in Unix epoch time.' }),
    ),
    timeSeriesLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date that the time series was last updated, in Unix epoch time.',
        }),
    ),
    timeSeriesArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:time-series/${TimeSeriesId}</code> </p>',
        }),
    ),
  })
  .openapi({
    required: [
      'timeSeriesId',
      'dataType',
      'timeSeriesCreationDate',
      'timeSeriesLastUpdateDate',
      'timeSeriesArn',
    ],
  })
  .openapi('DescribeTimeSeriesResponse')

const GetAssetPropertyAggregatesResponseSchema = z
  .object({
    aggregatedValues: AggregatedValuesSchema.and(
      z.any().openapi({ description: 'The requested aggregated values.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['aggregatedValues'] })
  .openapi('GetAssetPropertyAggregatesResponse')

const GetAssetPropertyValueResponseSchema = z
  .object({
    propertyValue: AssetPropertyValueSchema.and(
      z.any().openapi({ description: 'The current asset property value.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAssetPropertyValueResponse')

const GetAssetPropertyValueHistoryResponseSchema = z
  .object({
    assetPropertyValueHistory: AssetPropertyValueHistorySchema.and(
      z.any().openapi({ description: "The asset property's value history." }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetPropertyValueHistory'] })
  .openapi('GetAssetPropertyValueHistoryResponse')

const InterpolatedAssetPropertyValueSchema = z
  .object({ timestamp: TimeInNanosSchema, value: VariantSchema })
  .openapi({
    required: ['timestamp', 'value'],
    description: 'Contains information about an interpolated asset property value.',
  })
  .openapi('InterpolatedAssetPropertyValue')

const InterpolatedAssetPropertyValuesSchema = z
  .array(InterpolatedAssetPropertyValueSchema)
  .openapi('InterpolatedAssetPropertyValues')

const GetInterpolatedAssetPropertyValuesResponseSchema = z
  .object({
    interpolatedAssetPropertyValues: InterpolatedAssetPropertyValuesSchema.and(
      z.any().openapi({ description: 'The requested interpolated values.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['interpolatedAssetPropertyValues'] })
  .openapi('GetInterpolatedAssetPropertyValuesResponse')

const AccessPolicySummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the access policy.' })),
    identity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user).',
        }),
    ),
    resource: ResourceSchema.and(
      z.any().openapi({ description: 'The IoT SiteWise Monitor resource (a portal or project).' }),
    ),
    permission: PermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions for the access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the access policy was created, in Unix epoch time.' }),
    ).exactOptional(),
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date the access policy was last updated, in Unix epoch time.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id', 'identity', 'resource', 'permission'],
    description:
      "Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.",
  })
  .openapi('AccessPolicySummary')

const AccessPolicySummariesSchema = z
  .array(AccessPolicySummarySchema)
  .openapi('AccessPolicySummaries')

const ListAccessPoliciesResponseSchema = z
  .object({
    accessPolicySummaries: AccessPolicySummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each access policy.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['accessPolicySummaries'] })
  .openapi('ListAccessPoliciesResponse')

const AssetModelPropertySummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the property.' })).exactOptional(),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the property.' })),
    dataType: PropertyDataTypeSchema.and(
      z.any().openapi({ description: 'The data type of the property.' }),
    ),
    dataTypeSpec: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data type of the structure for this property. This parameter exists on properties that have the <code>STRUCT</code> data type.',
        }),
    ).exactOptional(),
    unit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unit (such as <code>Newtons</code> or <code>RPM</code>) of the property.',
        }),
    ).exactOptional(),
    type: PropertyTypeSchema,
    assetModelCompositeModelId: IDSchema.and(
      z
        .any()
        .openapi({
          description: ' The ID of the composite model that contains the asset model property. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'dataType', 'type'],
    description: 'Contains a summary of a property associated with a model.',
  })
  .openapi('AssetModelPropertySummary')

const AssetModelPropertySummariesSchema = z
  .array(AssetModelPropertySummarySchema)
  .openapi('AssetModelPropertySummaries')

const ListAssetModelPropertiesResponseSchema = z
  .object({
    assetModelPropertySummaries: AssetModelPropertySummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that summarizes the properties associated with the specified asset model.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetModelPropertySummaries'] })
  .openapi('ListAssetModelPropertiesResponse')

const AssetModelSummarySchema = z
  .object({
    id: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset model (used with IoT SiteWise APIs).' }),
    ),
    arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code> </p>',
        }),
    ),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the asset model.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The asset model description.' }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset model was created, in Unix epoch time.' }),
    ),
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the asset model was last updated, in Unix epoch time.' }),
    ),
    status: AssetModelStatusSchema.and(
      z.any().openapi({ description: 'The current status of the asset model.' }),
    ),
  })
  .openapi({
    required: ['id', 'arn', 'name', 'description', 'creationDate', 'lastUpdateDate', 'status'],
    description: 'Contains a summary of an asset model.',
  })
  .openapi('AssetModelSummary')

const AssetModelSummariesSchema = z.array(AssetModelSummarySchema).openapi('AssetModelSummaries')

const ListAssetModelsResponseSchema = z
  .object({
    assetModelSummaries: AssetModelSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each asset model.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetModelSummaries'] })
  .openapi('ListAssetModelsResponse')

const AssetPropertySummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the property.' })).exactOptional(),
    alias: PropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    unit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description: ' The unit of measure (such as Newtons or RPM) of the asset property. ',
        }),
    ).exactOptional(),
    notification: PropertyNotificationSchema.exactOptional(),
    assetCompositeModelId: IDSchema.and(
      z
        .any()
        .openapi({
          description: ' The ID of the composite model that contains the asset property. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains a summary of a property associated with an asset.',
    required: [],
  })
  .openapi('AssetPropertySummary')

const AssetPropertySummariesSchema = z
  .array(AssetPropertySummarySchema)
  .openapi('AssetPropertySummaries')

const ListAssetPropertiesResponseSchema = z
  .object({
    assetPropertySummaries: AssetPropertySummariesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that summarizes the properties associated with the specified asset.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetPropertySummaries'] })
  .openapi('ListAssetPropertiesResponse')

const AssetHierarchyInfoSchema = z
  .object({
    parentAssetId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the parent asset in this asset relationship.' }),
    ).exactOptional(),
    childAssetId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the child asset in this asset relationship.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about a parent asset and a child asset that are related through an asset hierarchy.',
    required: [],
  })
  .openapi('AssetHierarchyInfo')

const AssetRelationshipTypeSchema = z.literal('HIERARCHY').openapi('AssetRelationshipType')

const AssetRelationshipSummarySchema = z
  .object({
    hierarchyInfo: AssetHierarchyInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The assets that are related through an asset hierarchy.</p> <p>This object is present if the <code>relationshipType</code> is <code>HIERARCHY</code>.</p>',
        }),
    ).exactOptional(),
    relationshipType: AssetRelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The relationship type of the assets in this relationship. This value is one of the following:</p> <ul> <li> <p> <code>HIERARCHY</code> – The assets are related through an asset hierarchy. If you specify this relationship type, this asset relationship includes the <code>hierarchyInfo</code> object.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['relationshipType'],
    description: 'Contains information about assets that are related to one another.',
  })
  .openapi('AssetRelationshipSummary')

const AssetRelationshipSummariesSchema = z
  .array(AssetRelationshipSummarySchema)
  .openapi('AssetRelationshipSummaries')

const ListAssetRelationshipsResponseSchema = z
  .object({
    assetRelationshipSummaries: AssetRelationshipSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each asset relationship.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetRelationshipSummaries'] })
  .openapi('ListAssetRelationshipsResponse')

const AssetSummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the asset.' })),
    arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code> </p>',
        }),
    ),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the asset.' })),
    assetModelId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset model used to create this asset.' }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset was created, in Unix epoch time.' }),
    ),
    lastUpdateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset was last updated, in Unix epoch time.' }),
    ),
    status: AssetStatusSchema.and(
      z.any().openapi({ description: 'The current status of the asset.' }),
    ),
    hierarchies: AssetHierarchiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'arn',
      'name',
      'assetModelId',
      'creationDate',
      'lastUpdateDate',
      'status',
      'hierarchies',
    ],
    description: 'Contains a summary of an asset.',
  })
  .openapi('AssetSummary')

const AssetSummariesSchema = z.array(AssetSummarySchema).openapi('AssetSummaries')

const ListAssetsResponseSchema = z
  .object({
    assetSummaries: AssetSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each asset.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetSummaries'] })
  .openapi('ListAssetsResponse')

const AssociatedAssetsSummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the asset.' })),
    arn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code> </p>',
        }),
    ),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the asset.' })),
    assetModelId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset model used to create the asset.' }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset was created, in Unix epoch time.' }),
    ),
    lastUpdateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the asset was last updated, in Unix epoch time.' }),
    ),
    status: AssetStatusSchema.and(
      z.any().openapi({ description: 'The current status of the asset.' }),
    ),
    hierarchies: AssetHierarchiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.',
        }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'arn',
      'name',
      'assetModelId',
      'creationDate',
      'lastUpdateDate',
      'status',
      'hierarchies',
    ],
    description: 'Contains a summary of an associated asset.',
  })
  .openapi('AssociatedAssetsSummary')

const AssociatedAssetsSummariesSchema = z
  .array(AssociatedAssetsSummarySchema)
  .openapi('AssociatedAssetsSummaries')

const ListAssociatedAssetsResponseSchema = z
  .object({
    assetSummaries: AssociatedAssetsSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes the associated assets.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetSummaries'] })
  .openapi('ListAssociatedAssetsResponse')

const JobSummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the job.' })),
    name: NameSchema.and(
      z.any().openapi({ description: 'The unique name that helps identify the job request.' }),
    ),
    status: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the bulk import job can be one of following values.</p> <ul> <li> <p> <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p> </li> <li> <p> <code>CANCELLED</code> – The bulk import job has been canceled.</p> </li> <li> <p> <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p> </li> <li> <p> <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p> </li> <li> <p> <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p> </li> <li> <p> <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p> </li> </ul>",
        }),
    ),
  })
  .openapi({
    required: ['id', 'name', 'status'],
    description: 'Contains a job summary information.',
  })
  .openapi('JobSummary')

const JobSummariesSchema = z.array(JobSummarySchema).openapi('JobSummaries')

const ListBulkImportJobsResponseSchema = z
  .object({
    jobSummaries: JobSummariesSchema.and(
      z.any().openapi({ description: 'One or more job summaries to list.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['jobSummaries'] })
  .openapi('ListBulkImportJobsResponse')

const DashboardSummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the dashboard.' })),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the dashboard' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: "The dashboard's description." }),
    ).exactOptional(),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the dashboard was created, in Unix epoch time.' }),
    ).exactOptional(),
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the dashboard was last updated, in Unix epoch time.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['id', 'name'], description: 'Contains a dashboard summary.' })
  .openapi('DashboardSummary')

const DashboardSummariesSchema = z.array(DashboardSummarySchema).openapi('DashboardSummaries')

const ListDashboardsResponseSchema = z
  .object({
    dashboardSummaries: DashboardSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each dashboard in the project.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['dashboardSummaries'] })
  .openapi('ListDashboardsResponse')

const GatewaySummarySchema = z
  .object({
    gatewayId: IDSchema.and(z.any().openapi({ description: 'The ID of the gateway device.' })),
    gatewayName: NameSchema.and(z.any().openapi({ description: 'The name of the asset.' })),
    gatewayPlatform: GatewayPlatformSchema.exactOptional(),
    gatewayCapabilitySummaries: GatewayCapabilitySummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration\'s definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.',
        }),
    ).exactOptional(),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the gateway was created, in Unix epoch time.' }),
    ),
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the gateway was last updated, in Unix epoch time.' }),
    ),
  })
  .openapi({
    required: ['gatewayId', 'gatewayName', 'creationDate', 'lastUpdateDate'],
    description: 'Contains a summary of a gateway.',
  })
  .openapi('GatewaySummary')

const GatewaySummariesSchema = z.array(GatewaySummarySchema).openapi('GatewaySummaries')

const ListGatewaysResponseSchema = z
  .object({
    gatewaySummaries: GatewaySummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each gateway.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['gatewaySummaries'] })
  .openapi('ListGatewaysResponse')

const PortalSummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the portal.' })),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the portal.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: "The portal's description." }),
    ).exactOptional(),
    startUrl: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.',
        }),
    ),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the portal was created, in Unix epoch time.' }),
    ).exactOptional(),
    lastUpdateDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the portal was last updated, in Unix epoch time.' }),
    ).exactOptional(),
    roleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal\'s users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    status: PortalStatusSchema,
  })
  .openapi({
    required: ['id', 'name', 'startUrl', 'status'],
    description: 'Contains a portal summary.',
  })
  .openapi('PortalSummary')

const PortalSummariesSchema = z.array(PortalSummarySchema).openapi('PortalSummaries')

const ListPortalsResponseSchema = z
  .object({
    portalSummaries: PortalSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each portal.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPortalsResponse')

const AssetIDsSchema = z.array(IDSchema).openapi('AssetIDs')

const ListProjectAssetsResponseSchema = z
  .object({
    assetIds: AssetIDsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains the IDs of each asset associated with the project.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetIds'] })
  .openapi('ListProjectAssetsResponse')

const ProjectSummarySchema = z
  .object({
    id: IDSchema.and(z.any().openapi({ description: 'The ID of the project.' })),
    name: NameSchema.and(z.any().openapi({ description: 'The name of the project.' })),
    description: DescriptionSchema.and(
      z.any().openapi({ description: "The project's description." }),
    ).exactOptional(),
    creationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date the project was created, in Unix epoch time.' }),
    ).exactOptional(),
    lastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date the project was last updated, in Unix epoch time.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['id', 'name'], description: 'Contains project summary information.' })
  .openapi('ProjectSummary')

const ProjectSummariesSchema = z.array(ProjectSummarySchema).openapi('ProjectSummaries')

const ListProjectsResponseSchema = z
  .object({
    projectSummaries: ProjectSummariesSchema.and(
      z.any().openapi({ description: 'A list that summarizes each project in the portal.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectSummaries'] })
  .openapi('ListProjectsResponse')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const TimeSeriesSummarySchema = z
  .object({
    assetId: IDSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the asset in which the asset property was created.' }),
    ).exactOptional(),
    propertyId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset property.' }),
    ).exactOptional(),
    alias: PropertyAliasSchema.and(
      z.any().openapi({ description: 'The alias that identifies the time series.' }),
    ).exactOptional(),
    timeSeriesId: TimeSeriesIdSchema.and(
      z.any().openapi({ description: 'The ID of the time series.' }),
    ),
    dataType: PropertyDataTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the time series.</p> <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>',
        }),
    ),
    dataTypeSpec: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data type of the structure for this time series. This parameter is required for time series that have the <code>STRUCT</code> data type.</p> <p>The options for this parameter depend on the type of the composite model in which you created the asset property that is associated with your time series. Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>',
        }),
    ).exactOptional(),
    timeSeriesCreationDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date that the time series was created, in Unix epoch time.' }),
    ),
    timeSeriesLastUpdateDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date that the time series was last updated, in Unix epoch time.',
        }),
    ),
    timeSeriesArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p> <p> <code>arn:${Partition}:iotsitewise:${Region}:${Account}:time-series/${TimeSeriesId}</code> </p>',
        }),
    ),
  })
  .openapi({
    required: [
      'timeSeriesId',
      'dataType',
      'timeSeriesCreationDate',
      'timeSeriesLastUpdateDate',
      'timeSeriesArn',
    ],
    description: 'Contains a summary of a time series (data stream).',
  })
  .openapi('TimeSeriesSummary')

const TimeSeriesSummariesSchema = z.array(TimeSeriesSummarySchema).openapi('TimeSeriesSummaries')

const ListTimeSeriesResponseSchema = z
  .object({
    TimeSeriesSummaries: TimeSeriesSummariesSchema.and(
      z.any().openapi({ description: 'One or more time series summaries to list.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token for the next set of results, or null if there are no additional results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TimeSeriesSummaries'] })
  .openapi('ListTimeSeriesResponse')

const PutDefaultEncryptionConfigurationResponseSchema = z
  .object({
    encryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of encryption used for the encryption configuration.' }),
    ),
    kmsKeyArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Key ARN of the KMS key used for KMS encryption if you use <code>KMS_BASED_ENCRYPTION</code>.',
        }),
    ).exactOptional(),
    configurationStatus: ConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the account configuration. This contains the <code>ConfigurationState</code>. If there is an error, it also contains the <code>ErrorDetails</code>.',
        }),
    ),
  })
  .openapi({ required: ['encryptionType', 'configurationStatus'] })
  .openapi('PutDefaultEncryptionConfigurationResponse')

const PutLoggingOptionsResponseSchema = z.object({}).openapi('PutLoggingOptionsResponse')

const PutStorageConfigurationResponseSchema = z
  .object({
    storageType: StorageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>',
        }),
    ),
    multiLayerStorage: MultiLayerStorageSchema.and(
      z.any().openapi({ description: 'Contains information about the storage destination.' }),
    ).exactOptional(),
    disassociatedDataStorage: DisassociatedDataStorageStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html\">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>",
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.exactOptional(),
    configurationStatus: ConfigurationStatusSchema,
  })
  .openapi({ required: ['storageType', 'configurationStatus'] })
  .openapi('PutStorageConfigurationResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateAccessPolicyResponseSchema = z.object({}).openapi('UpdateAccessPolicyResponse')

const UpdateAssetResponseSchema = z
  .object({
    assetStatus: AssetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asset, which contains a state (<code>UPDATING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['assetStatus'] })
  .openapi('UpdateAssetResponse')

const UpdateAssetModelResponseSchema = z
  .object({
    assetModelStatus: AssetModelStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the asset model, which contains a state (<code>UPDATING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['assetModelStatus'] })
  .openapi('UpdateAssetModelResponse')

const UpdateDashboardResponseSchema = z.object({}).openapi('UpdateDashboardResponse')

const UpdateGatewayCapabilityConfigurationResponseSchema = z
  .object({
    capabilityNamespace: CapabilityNamespaceSchema.and(
      z.any().openapi({ description: 'The namespace of the gateway capability.' }),
    ),
    capabilitySyncStatus: CapabilitySyncStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The synchronization status of the capability configuration. The sync status can be one of the following:</p> <ul> <li> <p> <code>IN_SYNC</code> – The gateway is running the capability configuration.</p> </li> <li> <p> <code>OUT_OF_SYNC</code> – The gateway hasn't received the capability configuration.</p> </li> <li> <p> <code>SYNC_FAILED</code> – The gateway rejected the capability configuration.</p> </li> </ul> <p>After you update a capability configuration, its sync status is <code>OUT_OF_SYNC</code> until the gateway receives and applies or rejects the updated configuration.</p>",
        }),
    ),
  })
  .openapi({ required: ['capabilityNamespace', 'capabilitySyncStatus'] })
  .openapi('UpdateGatewayCapabilityConfigurationResponse')

const UpdatePortalResponseSchema = z
  .object({
    portalStatus: PortalStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the portal, which contains a state (<code>UPDATING</code> after successfully calling this operation) and any error message.',
        }),
    ),
  })
  .openapi({ required: ['portalStatus'] })
  .openapi('UpdatePortalResponse')

const ImageFileSchema = z
  .object({
    data: ImageFileDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The image file contents, represented as a base64-encoded string. The file size must be less than 1 MB.',
        }),
    ),
    type: ImageFileTypeSchema.and(z.any().openapi({ description: 'The file type of the image.' })),
  })
  .openapi({ required: ['data', 'type'], description: 'Contains an image file.' })
  .openapi('ImageFile')

const UpdateProjectResponseSchema = z.object({}).openapi('UpdateProjectResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1011).openapi('AmazonResourceName')

const AssetModelCompositeModelDefinitionsSchema = z
  .array(AssetModelCompositeModelDefinitionSchema)
  .openapi('AssetModelCompositeModelDefinitions')

const AssetModelHierarchyDefinitionsSchema = z
  .array(AssetModelHierarchyDefinitionSchema)
  .openapi('AssetModelHierarchyDefinitions')

const AssetModelPropertyDefinitionsSchema = z
  .array(AssetModelPropertyDefinitionSchema)
  .openapi('AssetModelPropertyDefinitions')

const ClientTokenSchema = z
  .string()
  .regex(/\S{36,64}/)
  .min(36)
  .max(64)
  .openapi('ClientToken')

const AssociateAssetsRequestSchema = z
  .object({
    hierarchyId: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of a hierarchy in the parent asset\'s model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    childAssetId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the child asset to be associated.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['hierarchyId', 'childAssetId'], title: 'AssociateAssetsRequest' })
  .openapi('AssociateAssetsRequest')

const AssociateTimeSeriesToAssetPropertyRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'AssociateTimeSeriesToAssetPropertyRequest', required: [] })
  .openapi('AssociateTimeSeriesToAssetPropertyRequest')

const IDsSchema = z.array(IDSchema).min(1).max(100).openapi('IDs')

const BatchAssociateProjectAssetsRequestSchema = z
  .object({
    assetIds: IDsSchema.and(
      z.any().openapi({ description: 'The IDs of the assets to be associated to the project.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetIds'], title: 'BatchAssociateProjectAssetsRequest' })
  .openapi('BatchAssociateProjectAssetsRequest')

const BatchDisassociateProjectAssetsRequestSchema = z
  .object({
    assetIds: IDsSchema.and(
      z
        .any()
        .openapi({ description: 'The IDs of the assets to be disassociated from the project.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetIds'], title: 'BatchDisassociateProjectAssetsRequest' })
  .openapi('BatchDisassociateProjectAssetsRequest')

const BatchGetAssetPropertyAggregatesEntriesSchema = z
  .array(BatchGetAssetPropertyAggregatesEntrySchema)
  .openapi('BatchGetAssetPropertyAggregatesEntries')

const BatchGetAssetPropertyAggregatesMaxResultsSchema = z
  .int()
  .min(1)
  .openapi('BatchGetAssetPropertyAggregatesMaxResults')

const BatchGetAssetPropertyAggregatesRequestSchema = z
  .object({
    entries: BatchGetAssetPropertyAggregatesEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The token to be used for the next set of paginated results.' }),
    ).exactOptional(),
    maxResults: BatchGetAssetPropertyAggregatesMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['entries'], title: 'BatchGetAssetPropertyAggregatesRequest' })
  .openapi('BatchGetAssetPropertyAggregatesRequest')

const BatchGetAssetPropertyValueEntriesSchema = z
  .array(BatchGetAssetPropertyValueEntrySchema)
  .openapi('BatchGetAssetPropertyValueEntries')

const BatchGetAssetPropertyValueHistoryEntriesSchema = z
  .array(BatchGetAssetPropertyValueHistoryEntrySchema)
  .openapi('BatchGetAssetPropertyValueHistoryEntries')

const BatchGetAssetPropertyValueHistoryMaxResultsSchema = z
  .int()
  .min(1)
  .openapi('BatchGetAssetPropertyValueHistoryMaxResults')

const BatchGetAssetPropertyValueHistoryRequestSchema = z
  .object({
    entries: BatchGetAssetPropertyValueHistoryEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The token to be used for the next set of paginated results.' }),
    ).exactOptional(),
    maxResults: BatchGetAssetPropertyValueHistoryMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['entries'], title: 'BatchGetAssetPropertyValueHistoryRequest' })
  .openapi('BatchGetAssetPropertyValueHistoryRequest')

const BatchGetAssetPropertyValueRequestSchema = z
  .object({
    entries: BatchGetAssetPropertyValueEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.',
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The token to be used for the next set of paginated results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['entries'], title: 'BatchGetAssetPropertyValueRequest' })
  .openapi('BatchGetAssetPropertyValueRequest')

const PutAssetPropertyValueEntriesSchema = z
  .array(PutAssetPropertyValueEntrySchema)
  .openapi('PutAssetPropertyValueEntries')

const BatchPutAssetPropertyValueRequestSchema = z
  .object({
    entries: PutAssetPropertyValueEntriesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.',
        }),
    ),
  })
  .openapi({ required: ['entries'], title: 'BatchPutAssetPropertyValueRequest' })
  .openapi('BatchPutAssetPropertyValueRequest')

const CreateAccessPolicyRequestSchema = z
  .object({
    accessPolicyIdentity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.',
        }),
    ),
    accessPolicyResource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.',
        }),
    ),
    accessPolicyPermission: PermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission'],
    title: 'CreateAccessPolicyRequest',
  })
  .openapi('CreateAccessPolicyRequest')

const CreateAssetModelRequestSchema = z
  .object({
    assetModelName: NameSchema.and(
      z.any().openapi({ description: 'A unique, friendly name for the asset model.' }),
    ),
    assetModelDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset model.' }),
    ).exactOptional(),
    assetModelProperties: AssetModelPropertyDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ).exactOptional(),
    assetModelHierarchies: AssetModelHierarchyDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ).exactOptional(),
    assetModelCompositeModels: AssetModelCompositeModelDefinitionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetModelName'], title: 'CreateAssetModelRequest' })
  .openapi('CreateAssetModelRequest')

const CreateAssetRequestSchema = z
  .object({
    assetName: NameSchema.and(z.any().openapi({ description: 'A friendly name for the asset.' })),
    assetModelId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the asset model from which to create the asset.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    assetDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetName', 'assetModelId'], title: 'CreateAssetRequest' })
  .openapi('CreateAssetRequest')

const CreateBulkImportJobRequestSchema = z
  .object({
    jobName: NameSchema.and(
      z.any().openapi({ description: 'The unique name that helps identify the job request.' }),
    ),
    jobRoleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.',
        }),
    ),
    files: FilesSchema.and(
      z
        .any()
        .openapi({
          description: 'The files in the specified Amazon S3 bucket that contain your data.',
        }),
    ),
    errorReportLocation: ErrorReportLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 destination where errors associated with the job creation request are saved.',
        }),
    ),
    jobConfiguration: JobConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration information of a job, such as the file format used to save data in Amazon S3.',
        }),
    ),
  })
  .openapi({
    required: ['jobName', 'jobRoleArn', 'files', 'errorReportLocation', 'jobConfiguration'],
    title: 'CreateBulkImportJobRequest',
  })
  .openapi('CreateBulkImportJobRequest')

const CreateDashboardRequestSchema = z
  .object({
    projectId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the project in which to create the dashboard.' }),
    ),
    dashboardName: NameSchema.and(
      z.any().openapi({ description: 'A friendly name for the dashboard.' }),
    ),
    dashboardDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the dashboard.' }),
    ).exactOptional(),
    dashboardDefinition: DashboardDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectId', 'dashboardName', 'dashboardDefinition'],
    title: 'CreateDashboardRequest',
  })
  .openapi('CreateDashboardRequest')

const CreateGatewayRequestSchema = z
  .object({
    gatewayName: NameSchema.and(
      z.any().openapi({ description: 'A unique, friendly name for the gateway.' }),
    ),
    gatewayPlatform: GatewayPlatformSchema.and(
      z
        .any()
        .openapi({
          description: "The gateway's platform. You can only specify one platform in a gateway.",
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['gatewayName', 'gatewayPlatform'], title: 'CreateGatewayRequest' })
  .openapi('CreateGatewayRequest')

const CreatePortalRequestSchema = z
  .object({
    portalName: NameSchema.and(z.any().openapi({ description: 'A friendly name for the portal.' })),
    portalDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the portal.' }),
    ).exactOptional(),
    portalContactEmail: EmailSchema.and(
      z
        .any()
        .openapi({ description: "The Amazon Web Services administrator's contact email address." }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    portalLogoImageFile: ImageFileSchema.and(
      z
        .any()
        .openapi({
          description:
            'A logo image to display in the portal. Upload a square, high-resolution image. The image is displayed on a dark background.',
        }),
    ).exactOptional(),
    roleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal\'s users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
    portalAuthMode: AuthModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The service to use to authenticate users to the portal. Choose from the following options:</p> <ul> <li> <p> <code>SSO</code> – The portal uses IAM Identity Center (successor to Single Sign-On) to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling IAM Identity Center</a> in the <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than the China Regions.</p> </li> <li> <p> <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage user permissions.</p> </li> </ul> <p>You can\'t change this value after you create a portal.</p> <p>Default: <code>SSO</code> </p>',
        }),
    ).exactOptional(),
    notificationSenderEmail: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The email address that sends alarm notifications.</p> <important> <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email address in Amazon SES</a>.</p> </important>',
        }),
    ).exactOptional(),
    alarms: AlarmsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['portalName', 'portalContactEmail', 'roleArn'],
    title: 'CreatePortalRequest',
  })
  .openapi('CreatePortalRequest')

const CreateProjectRequestSchema = z
  .object({
    portalId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the portal in which to create the project.' }),
    ),
    projectName: NameSchema.and(
      z.any().openapi({ description: 'A friendly name for the project.' }),
    ),
    projectDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the project.' }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['portalId', 'projectName'], title: 'CreateProjectRequest' })
  .openapi('CreateProjectRequest')

const DeleteAccessPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessPolicyRequest' })
  .openapi('DeleteAccessPolicyRequest')

const DeleteAssetModelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAssetModelRequest' })
  .openapi('DeleteAssetModelRequest')

const DeleteAssetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAssetRequest' })
  .openapi('DeleteAssetRequest')

const DeleteDashboardRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDashboardRequest' })
  .openapi('DeleteDashboardRequest')

const DeleteGatewayRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteGatewayRequest' })
  .openapi('DeleteGatewayRequest')

const DeletePortalRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePortalRequest' })
  .openapi('DeletePortalRequest')

const DeleteProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProjectRequest' })
  .openapi('DeleteProjectRequest')

const DeleteTimeSeriesRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DeleteTimeSeriesRequest', required: [] })
  .openapi('DeleteTimeSeriesRequest')

const DescribeAccessPolicyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAccessPolicyRequest' })
  .openapi('DescribeAccessPolicyRequest')

const ExcludePropertiesSchema = z.boolean().openapi('ExcludeProperties')

const DescribeAssetModelRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAssetModelRequest' })
  .openapi('DescribeAssetModelRequest')

const DescribeAssetPropertyRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAssetPropertyRequest' })
  .openapi('DescribeAssetPropertyRequest')

const DescribeAssetRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeAssetRequest' })
  .openapi('DescribeAssetRequest')

const DescribeBulkImportJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeBulkImportJobRequest' })
  .openapi('DescribeBulkImportJobRequest')

const DescribeDashboardRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDashboardRequest' })
  .openapi('DescribeDashboardRequest')

const DescribeDefaultEncryptionConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDefaultEncryptionConfigurationRequest' })
  .openapi('DescribeDefaultEncryptionConfigurationRequest')

const DescribeGatewayCapabilityConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeGatewayCapabilityConfigurationRequest' })
  .openapi('DescribeGatewayCapabilityConfigurationRequest')

const DescribeGatewayRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeGatewayRequest' })
  .openapi('DescribeGatewayRequest')

const DescribeLoggingOptionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeLoggingOptionsRequest' })
  .openapi('DescribeLoggingOptionsRequest')

const DescribePortalRequestSchema = z
  .object({})
  .openapi({ title: 'DescribePortalRequest' })
  .openapi('DescribePortalRequest')

const DescribeProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeProjectRequest' })
  .openapi('DescribeProjectRequest')

const DescribeStorageConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeStorageConfigurationRequest' })
  .openapi('DescribeStorageConfigurationRequest')

const DescribeTimeSeriesRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeTimeSeriesRequest' })
  .openapi('DescribeTimeSeriesRequest')

const DisassociateAssetsRequestSchema = z
  .object({
    hierarchyId: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of a hierarchy in the parent asset\'s model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    childAssetId: IDSchema.and(
      z.any().openapi({ description: 'The ID of the child asset to disassociate.' }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['hierarchyId', 'childAssetId'], title: 'DisassociateAssetsRequest' })
  .openapi('DisassociateAssetsRequest')

const DisassociateTimeSeriesFromAssetPropertyRequestSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DisassociateTimeSeriesFromAssetPropertyRequest', required: [] })
  .openapi('DisassociateTimeSeriesFromAssetPropertyRequest')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const GetAssetPropertyAggregatesRequestSchema = z
  .object({})
  .openapi({ title: 'GetAssetPropertyAggregatesRequest' })
  .openapi('GetAssetPropertyAggregatesRequest')

const GetAssetPropertyValueHistoryRequestSchema = z
  .object({})
  .openapi({ title: 'GetAssetPropertyValueHistoryRequest' })
  .openapi('GetAssetPropertyValueHistoryRequest')

const GetAssetPropertyValueRequestSchema = z
  .object({})
  .openapi({ title: 'GetAssetPropertyValueRequest' })
  .openapi('GetAssetPropertyValueRequest')

const IntervalInSecondsSchema = z.int().min(1).max(320000000).openapi('IntervalInSeconds')

const MaxInterpolatedResultsSchema = z.int().min(1).openapi('MaxInterpolatedResults')

const InterpolationTypeSchema = z.string().min(1).max(256).openapi('InterpolationType')

const IntervalWindowInSecondsSchema = z
  .int()
  .min(1)
  .max(320000000)
  .openapi('IntervalWindowInSeconds')

const GetInterpolatedAssetPropertyValuesRequestSchema = z
  .object({})
  .openapi({ title: 'GetInterpolatedAssetPropertyValuesRequest' })
  .openapi('GetInterpolatedAssetPropertyValuesRequest')

const IdentityTypeSchema = z.enum(['USER', 'GROUP', 'IAM']).openapi('IdentityType')

const ImageSchema = z
  .object({
    id: IDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of an existing image. Specify this parameter to keep an existing image.',
        }),
    ).exactOptional(),
    file: ImageFileSchema.exactOptional(),
  })
  .openapi({
    description:
      '<p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>',
    required: [],
  })
  .openapi('Image')

const KmsKeyIdSchema = z.string().min(1).max(2048).openapi('KmsKeyId')

const ResourceTypeSchema = z.enum(['PORTAL', 'PROJECT']).openapi('ResourceType')

const ListAccessPoliciesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAccessPoliciesRequest' })
  .openapi('ListAccessPoliciesRequest')

const ListAssetModelPropertiesFilterSchema = z
  .enum(['ALL', 'BASE'])
  .openapi('ListAssetModelPropertiesFilter')

const ListAssetModelPropertiesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssetModelPropertiesRequest' })
  .openapi('ListAssetModelPropertiesRequest')

const ListAssetModelsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssetModelsRequest' })
  .openapi('ListAssetModelsRequest')

const ListAssetPropertiesFilterSchema = z.enum(['ALL', 'BASE']).openapi('ListAssetPropertiesFilter')

const ListAssetPropertiesRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssetPropertiesRequest' })
  .openapi('ListAssetPropertiesRequest')

const TraversalTypeSchema = z.literal('PATH_TO_ROOT').openapi('TraversalType')

const ListAssetRelationshipsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssetRelationshipsRequest' })
  .openapi('ListAssetRelationshipsRequest')

const ListAssetsFilterSchema = z.enum(['ALL', 'TOP_LEVEL']).openapi('ListAssetsFilter')

const ListAssetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssetsRequest' })
  .openapi('ListAssetsRequest')

const TraversalDirectionSchema = z.enum(['PARENT', 'CHILD']).openapi('TraversalDirection')

const ListAssociatedAssetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAssociatedAssetsRequest' })
  .openapi('ListAssociatedAssetsRequest')

const ListBulkImportJobsFilterSchema = z
  .enum([
    'ALL',
    'PENDING',
    'RUNNING',
    'CANCELLED',
    'FAILED',
    'COMPLETED_WITH_FAILURES',
    'COMPLETED',
  ])
  .openapi('ListBulkImportJobsFilter')

const ListBulkImportJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListBulkImportJobsRequest' })
  .openapi('ListBulkImportJobsRequest')

const ListDashboardsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDashboardsRequest' })
  .openapi('ListDashboardsRequest')

const ListGatewaysRequestSchema = z
  .object({})
  .openapi({ title: 'ListGatewaysRequest' })
  .openapi('ListGatewaysRequest')

const ListPortalsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPortalsRequest' })
  .openapi('ListPortalsRequest')

const ListProjectAssetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProjectAssetsRequest' })
  .openapi('ListProjectAssetsRequest')

const ListProjectsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProjectsRequest' })
  .openapi('ListProjectsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTimeSeriesTypeSchema = z
  .enum(['ASSOCIATED', 'DISASSOCIATED'])
  .openapi('ListTimeSeriesType')

const ListTimeSeriesRequestSchema = z
  .object({})
  .openapi({ title: 'ListTimeSeriesRequest' })
  .openapi('ListTimeSeriesRequest')

const PutDefaultEncryptionConfigurationRequestSchema = z
  .object({
    encryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of encryption used for the encryption configuration.' }),
    ),
    kmsKeyId: KmsKeyIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Key ID of the customer managed key used for KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['encryptionType'], title: 'PutDefaultEncryptionConfigurationRequest' })
  .openapi('PutDefaultEncryptionConfigurationRequest')

const PutLoggingOptionsRequestSchema = z
  .object({
    loggingOptions: LoggingOptionsSchema.and(
      z.any().openapi({ description: 'The logging options to set.' }),
    ),
  })
  .openapi({ required: ['loggingOptions'], title: 'PutLoggingOptionsRequest' })
  .openapi('PutLoggingOptionsRequest')

const PutStorageConfigurationRequestSchema = z
  .object({
    storageType: StorageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>',
        }),
    ),
    multiLayerStorage: MultiLayerStorageSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies a storage destination. If you specified <code>MULTI_LAYER_STORAGE</code> for the storage type, you must specify a <code>MultiLayerStorage</code> object.',
        }),
    ).exactOptional(),
    disassociatedDataStorage: DisassociatedDataStorageStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html\">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>",
        }),
    ).exactOptional(),
    retentionPeriod: RetentionPeriodSchema.exactOptional(),
  })
  .openapi({ required: ['storageType'], title: 'PutStorageConfigurationRequest' })
  .openapi('PutStorageConfigurationRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAccessPolicyRequestSchema = z
  .object({
    accessPolicyIdentity: IdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.',
        }),
    ),
    accessPolicyResource: ResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.',
        }),
    ),
    accessPolicyPermission: PermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission'],
    title: 'UpdateAccessPolicyRequest',
  })
  .openapi('UpdateAccessPolicyRequest')

const UpdateAssetModelRequestSchema = z
  .object({
    assetModelName: NameSchema.and(
      z.any().openapi({ description: 'A unique, friendly name for the asset model.' }),
    ),
    assetModelDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset model.' }),
    ).exactOptional(),
    assetModelProperties: AssetModelPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ).exactOptional(),
    assetModelHierarchies: AssetModelHierarchiesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
        }),
    ).exactOptional(),
    assetModelCompositeModels: AssetModelCompositeModelsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetModelName'], title: 'UpdateAssetModelRequest' })
  .openapi('UpdateAssetModelRequest')

const UpdateAssetPropertyRequestSchema = z
  .object({
    propertyAlias: PropertyAliasSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>',
        }),
    ).exactOptional(),
    propertyNotificationState: PropertyNotificationStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    propertyUnit: PropertyUnitSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the <code>assetModelProperty</code> in the asset model.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAssetPropertyRequest', required: [] })
  .openapi('UpdateAssetPropertyRequest')

const UpdateAssetRequestSchema = z
  .object({
    assetName: NameSchema.and(z.any().openapi({ description: 'A friendly name for the asset.' })),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    assetDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A description for the asset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['assetName'], title: 'UpdateAssetRequest' })
  .openapi('UpdateAssetRequest')

const UpdateDashboardRequestSchema = z
  .object({
    dashboardName: NameSchema.and(
      z.any().openapi({ description: 'A new friendly name for the dashboard.' }),
    ),
    dashboardDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the dashboard.' }),
    ).exactOptional(),
    dashboardDefinition: DashboardDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['dashboardName', 'dashboardDefinition'], title: 'UpdateDashboardRequest' })
  .openapi('UpdateDashboardRequest')

const UpdateGatewayCapabilityConfigurationRequestSchema = z
  .object({
    capabilityNamespace: CapabilityNamespaceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.',
        }),
    ),
    capabilityConfiguration: CapabilityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['capabilityNamespace', 'capabilityConfiguration'],
    title: 'UpdateGatewayCapabilityConfigurationRequest',
  })
  .openapi('UpdateGatewayCapabilityConfigurationRequest')

const UpdateGatewayRequestSchema = z
  .object({
    gatewayName: NameSchema.and(
      z.any().openapi({ description: 'A unique, friendly name for the gateway.' }),
    ),
  })
  .openapi({ required: ['gatewayName'], title: 'UpdateGatewayRequest' })
  .openapi('UpdateGatewayRequest')

const UpdatePortalRequestSchema = z
  .object({
    portalName: NameSchema.and(
      z.any().openapi({ description: 'A new friendly name for the portal.' }),
    ),
    portalDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the portal.' }),
    ).exactOptional(),
    portalContactEmail: EmailSchema.and(
      z
        .any()
        .openapi({ description: "The Amazon Web Services administrator's contact email address." }),
    ),
    portalLogoImage: ImageSchema.exactOptional(),
    roleArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal\'s users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
    notificationSenderEmail: EmailSchema.and(
      z.any().openapi({ description: 'The email address that sends alarm notifications.' }),
    ).exactOptional(),
    alarms: AlarmsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['portalName', 'portalContactEmail', 'roleArn'],
    title: 'UpdatePortalRequest',
  })
  .openapi('UpdatePortalRequest')

const UpdateProjectRequestSchema = z
  .object({
    projectName: NameSchema.and(
      z.any().openapi({ description: 'A new friendly name for the project.' }),
    ),
    projectDescription: DescriptionSchema.and(
      z.any().openapi({ description: 'A new description for the project.' }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'UpdateProjectRequest' })
  .openapi('UpdateProjectRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postAssetsAssetIdAssociateRoute = createRoute({
  method: 'post',
  path: '/assets/{assetId}/associate',
  description:
    'Associates a child asset with the given parent asset through a hierarchy defined in the parent asset\'s model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'AssociateAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the parent asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hierarchyId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({
                  description:
                    'The ID of a hierarchy in the parent asset\'s model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              childAssetId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({ description: 'The ID of the child asset to be associated.' }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['hierarchyId', 'childAssetId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const postTimeseriesAssociateAliasAssetIdPropertyIdRoute = createRoute({
  method: 'post',
  path: '/timeseries/associate/#alias&assetId&propertyId',
  description: 'Associates a time series (data stream) with an asset property.',
  operationId: 'AssociateTimeSeriesToAssetProperty',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      alias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: true,
            description: 'The alias that identifies the time series.',
            schema: { type: 'string', pattern: '[^\\u0000-\\u001F\\u007F]+', minLength: 1 },
          },
        }),
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: true,
            description: 'The ID of the asset in which the asset property was created.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: true,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const postProjectsProjectIdAssetsAssociateRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/assets/associate',
  description: 'Associates a group (batch) of assets with an IoT SiteWise Monitor project.',
  operationId: 'BatchAssociateProjectAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: 'The ID of the project to which to associate the assets.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetIds: z
                .array(IDSchema)
                .min(1)
                .max(100)
                .openapi({ description: 'The IDs of the assets to be associated to the project.' }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['assetIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchAssociateProjectAssetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postProjectsProjectIdAssetsDisassociateRoute = createRoute({
  method: 'post',
  path: '/projects/{projectId}/assets/disassociate',
  description: 'Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.',
  operationId: 'BatchDisassociateProjectAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: 'The ID of the project from which to disassociate the assets.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetIds: z
                .array(IDSchema)
                .min(1)
                .max(100)
                .openapi({
                  description: 'The IDs of the assets to be disassociated from the project.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['assetIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDisassociateProjectAssetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPropertiesBatchAggregatesRoute = createRoute({
  method: 'post',
  path: '/properties/batch/aggregates',
  description:
    'Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'BatchGetAssetPropertyAggregates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              entries: z
                .array(BatchGetAssetPropertyAggregatesEntrySchema)
                .openapi({
                  description:
                    'The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request.',
                }),
              nextToken: z
                .string()
                .regex(/[A-Za-z0-9+\/=]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description: 'The token to be used for the next set of paginated results.',
                }),
              maxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetAssetPropertyAggregatesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postPropertiesBatchLatestRoute = createRoute({
  method: 'post',
  path: '/properties/batch/latest',
  description:
    'Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'BatchGetAssetPropertyValue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              entries: z
                .array(BatchGetAssetPropertyValueEntrySchema)
                .openapi({
                  description:
                    'The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.',
                }),
              nextToken: z
                .string()
                .regex(/[A-Za-z0-9+\/=]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description: 'The token to be used for the next set of paginated results.',
                }),
            })
            .openapi({ required: ['entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetAssetPropertyValueResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postPropertiesBatchHistoryRoute = createRoute({
  method: 'post',
  path: '/properties/batch/history',
  description:
    'Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'BatchGetAssetPropertyValueHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              entries: z
                .array(BatchGetAssetPropertyValueHistoryEntrySchema)
                .openapi({
                  description:
                    'The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.',
                }),
              nextToken: z
                .string()
                .regex(/[A-Za-z0-9+\/=]+/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description: 'The token to be used for the next set of paginated results.',
                }),
              maxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is less than 1 MB.</p> </li> <li> <p>The number of data points in the result set is less than the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetAssetPropertyValueHistoryResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postPropertiesRoute = createRoute({
  method: 'post',
  path: '/properties',
  description:
    '<p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>',
  operationId: 'BatchPutAssetPropertyValue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              entries: z
                .array(PutAssetPropertyValueEntrySchema)
                .openapi({
                  description:
                    'The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.',
                }),
            })
            .openapi({ required: ['entries'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchPutAssetPropertyValueResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getAccessPoliciesRoute = createRoute({
  method: 'get',
  path: '/access-policies',
  description:
    'Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).',
  operationId: 'ListAccessPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      identityType: z
        .enum(['USER', 'GROUP', 'IAM'])
        .exactOptional()
        .openapi({
          param: {
            name: 'identityType',
            in: 'query',
            required: false,
            description:
              'The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify <code>identityId</code>.',
            schema: { type: 'string', enum: ['USER', 'GROUP', 'IAM'] },
          },
        }),
      identityId: z
        .string()
        .regex(/\S+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'identityId',
            in: 'query',
            required: false,
            description:
              'The ID of the identity. This parameter is required if you specify <code>USER</code> or <code>GROUP</code> for <code>identityType</code>.',
            schema: { type: 'string', pattern: '\\S+', minLength: 1, maxLength: 256 },
          },
        }),
      resourceType: z
        .enum(['PORTAL', 'PROJECT'])
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description:
              'The type of resource (portal or project). This parameter is required if you specify <code>resourceId</code>.',
            schema: { type: 'string', enum: ['PORTAL', 'PROJECT'] },
          },
        }),
      resourceId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'query',
            required: false,
            description:
              'The ID of the resource. This parameter is required if you specify <code>resourceType</code>.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      iamArn: z
        .string()
        .regex(/.*/)
        .min(1)
        .max(1600)
        .exactOptional()
        .openapi({
          param: {
            name: 'iamArn',
            in: 'query',
            required: false,
            description:
              'The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the <i>IAM User Guide</i>. This parameter is required if you specify <code>IAM</code> for <code>identityType</code>.',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 1600 },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAccessPoliciesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAccessPoliciesRoute = createRoute({
  method: 'post',
  path: '/access-policies',
  description:
    'Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.',
  operationId: 'CreateAccessPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessPolicyIdentity: z
                .object({
                  user: UserIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM Identity Center user identity.' }),
                  ).exactOptional(),
                  group: GroupIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM Identity Center group identity.' }),
                  ).exactOptional(),
                  iamUser: IAMUserIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM user identity.' }),
                  ).exactOptional(),
                  iamRole: IAMRoleIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM role identity.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can\'t use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>',
                  required: [],
                }),
              accessPolicyResource: z
                .object({
                  portal: PortalResourceSchema.and(
                    z.any().openapi({ description: 'A portal resource.' }),
                  ).exactOptional(),
                  project: ProjectResourceSchema.and(
                    z.any().openapi({ description: 'A project resource.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains an IoT SiteWise Monitor resource ID for a portal or project.',
                  required: [],
                }),
              accessPolicyPermission: z
                .enum(['ADMINISTRATOR', 'VIEWER'])
                .openapi({
                  description:
                    'The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({
              required: ['accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAccessPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAssetsRoute = createRoute({
  method: 'get',
  path: '/assets',
  description:
    '<p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can\'t use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>',
  operationId: 'ListAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      assetModelId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetModelId',
            in: 'query',
            required: false,
            description:
              'The ID of the asset model by which to filter the list of assets. This parameter is required if you choose <code>ALL</code> for <code>filter</code>.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      filter: z
        .enum(['ALL', 'TOP_LEVEL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            description:
              '<p>The filter for the requested list of assets. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all assets for a given asset model ID. The <code>assetModelId</code> parameter is required if you filter by <code>ALL</code>.</p> </li> <li> <p> <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset hierarchy tree.</p> </li> </ul> <p>Default: <code>ALL</code> </p>',
            schema: { type: 'string', enum: ['ALL', 'TOP_LEVEL'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAssetsRoute = createRoute({
  method: 'post',
  path: '/assets',
  description:
    'Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'CreateAsset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A friendly name for the asset.' }),
              assetModelId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({
                  description: 'The ID of the asset model from which to create the asset.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              assetDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the asset.' }),
            })
            .openapi({ required: ['assetName', 'assetModelId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getAssetModelsRoute = createRoute({
  method: 'get',
  path: '/asset-models',
  description: 'Retrieves a paginated list of summaries of all asset models.',
  operationId: 'ListAssetModels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssetModelsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAssetModelsRoute = createRoute({
  method: 'post',
  path: '/asset-models',
  description:
    'Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model\'s property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'CreateAssetModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetModelName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A unique, friendly name for the asset model.' }),
              assetModelDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the asset model.' }),
              assetModelProperties: z
                .array(AssetModelPropertyDefinitionSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
                }),
              assetModelHierarchies: z
                .array(AssetModelHierarchyDefinitionSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
                }),
              assetModelCompositeModels: z
                .array(AssetModelCompositeModelDefinitionSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({ required: ['assetModelName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssetModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  description:
    'Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'ListBulkImportJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for each paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      filter: z
        .enum([
          'ALL',
          'PENDING',
          'RUNNING',
          'CANCELLED',
          'FAILED',
          'COMPLETED_WITH_FAILURES',
          'COMPLETED',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            description:
              'You can use a filter to select the bulk import jobs that you want to retrieve.',
            schema: {
              type: 'string',
              enum: [
                'ALL',
                'PENDING',
                'RUNNING',
                'CANCELLED',
                'FAILED',
                'COMPLETED_WITH_FAILURES',
                'COMPLETED',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBulkImportJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  description:
    '<p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>',
  operationId: 'CreateBulkImportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'The unique name that helps identify the job request.' }),
              jobRoleArn: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.',
                }),
              files: z
                .array(FileSchema)
                .openapi({
                  description:
                    'The files in the specified Amazon S3 bucket that contain your data.',
                }),
              errorReportLocation: z
                .object({
                  bucket: BucketSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the Amazon S3 bucket to which errors associated with the bulk import job are sent.',
                      }),
                  ).exactOptional(),
                  prefix: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'The Amazon S3 destination where errors associated with the job creation request are saved.',
                  required: [],
                }),
              jobConfiguration: z
                .object({
                  fileFormat: FileFormatSchema.and(
                    z.any().openapi({ description: 'The file format of the data in Amazon S3.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains the configuration information of a job, such as the file format used to save data in Amazon S3.',
                  required: [],
                }),
            })
            .openapi({
              required: [
                'jobName',
                'jobRoleArn',
                'files',
                'errorReportLocation',
                'jobConfiguration',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBulkImportJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const postDashboardsRoute = createRoute({
  method: 'post',
  path: '/dashboards',
  description: 'Creates a dashboard in an IoT SiteWise Monitor project.',
  operationId: 'CreateDashboard',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              projectId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({
                  description: 'The ID of the project in which to create the dashboard.',
                }),
              dashboardName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A friendly name for the dashboard.' }),
              dashboardDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the dashboard.' }),
              dashboardDefinition: z
                .string()
                .regex(/.+/)
                .min(0)
                .max(204800)
                .openapi({
                  description:
                    'The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({ required: ['projectId', 'dashboardName', 'dashboardDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDashboardResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const get20200301GatewaysRoute = createRoute({
  method: 'get',
  path: '/20200301/gateways',
  description: 'Retrieves a paginated list of gateways.',
  operationId: 'ListGateways',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGatewaysResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const post20200301GatewaysRoute = createRoute({
  method: 'post',
  path: '/20200301/gateways',
  description:
    'Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'CreateGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              gatewayName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A unique, friendly name for the gateway.' }),
              gatewayPlatform: z
                .object({
                  greengrass: GreengrassSchema.and(
                    z.any().openapi({ description: 'A gateway that runs on IoT Greengrass.' }),
                  ).exactOptional(),
                  greengrassV2: GreengrassV2Schema.and(
                    z.any().openapi({ description: 'A gateway that runs on IoT Greengrass V2.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description: "Contains a gateway's platform information.",
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({ required: ['gatewayName', 'gatewayPlatform'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGatewayResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getPortalsRoute = createRoute({
  method: 'get',
  path: '/portals',
  description: 'Retrieves a paginated list of IoT SiteWise Monitor portals.',
  operationId: 'ListPortals',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPortalsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postPortalsRoute = createRoute({
  method: 'post',
  path: '/portals',
  description:
    '<p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>',
  operationId: 'CreatePortal',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portalName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A friendly name for the portal.' }),
              portalDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the portal.' }),
              portalContactEmail: z
                .string()
                .regex(/[^@]+@[^@]+/)
                .min(1)
                .max(255)
                .openapi({
                  description: "The Amazon Web Services administrator's contact email address.",
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              portalLogoImageFile: z
                .object({
                  data: ImageFileDataSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The image file contents, represented as a base64-encoded string. The file size must be less than 1 MB.',
                      }),
                  ).exactOptional(),
                  type: ImageFileTypeSchema.and(
                    z.any().openapi({ description: 'The file type of the image.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Contains an image file.', required: [] }),
              roleArn: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal\'s users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              portalAuthMode: z
                .enum(['IAM', 'SSO'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The service to use to authenticate users to the portal. Choose from the following options:</p> <ul> <li> <p> <code>SSO</code> – The portal uses IAM Identity Center (successor to Single Sign-On) to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling IAM Identity Center</a> in the <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than the China Regions.</p> </li> <li> <p> <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage user permissions.</p> </li> </ul> <p>You can\'t change this value after you create a portal.</p> <p>Default: <code>SSO</code> </p>',
                }),
              notificationSenderEmail: z
                .string()
                .regex(/[^@]+@[^@]+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The email address that sends alarm notifications.</p> <important> <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email address in Amazon SES</a>.</p> </important>',
                }),
              alarms: z
                .object({
                  alarmRoleArn: ARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows the alarm to perform actions and access Amazon Web Services resources and services, such as IoT Events.',
                      }),
                  ).exactOptional(),
                  notificationLambdaArn: ARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function that manages alarm notifications. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">Managing alarm notifications</a> in the <i>IoT Events Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.',
                  required: [],
                }),
            })
            .openapi({ required: ['portalName', 'portalContactEmail', 'roleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePortalResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  description:
    "<p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>",
  operationId: 'CreateProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portalId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({ description: 'The ID of the portal in which to create the project.' }),
              projectName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A friendly name for the project.' }),
              projectDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the project.' }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({ required: ['portalId', 'projectName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getAccessPoliciesAccessPolicyIdRoute = createRoute({
  method: 'get',
  path: '/access-policies/{accessPolicyId}',
  description:
    "Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.",
  operationId: 'DescribeAccessPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      accessPolicyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'accessPolicyId',
            in: 'path',
            required: true,
            description: 'The ID of the access policy.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAccessPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putAccessPoliciesAccessPolicyIdRoute = createRoute({
  method: 'put',
  path: '/access-policies/{accessPolicyId}',
  description:
    "Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.",
  operationId: 'UpdateAccessPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      accessPolicyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'accessPolicyId',
            in: 'path',
            required: true,
            description: 'The ID of the access policy.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessPolicyIdentity: z
                .object({
                  user: UserIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM Identity Center user identity.' }),
                  ).exactOptional(),
                  group: GroupIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM Identity Center group identity.' }),
                  ).exactOptional(),
                  iamUser: IAMUserIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM user identity.' }),
                  ).exactOptional(),
                  iamRole: IAMRoleIdentitySchema.and(
                    z.any().openapi({ description: 'An IAM role identity.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can\'t use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>',
                  required: [],
                }),
              accessPolicyResource: z
                .object({
                  portal: PortalResourceSchema.and(
                    z.any().openapi({ description: 'A portal resource.' }),
                  ).exactOptional(),
                  project: ProjectResourceSchema.and(
                    z.any().openapi({ description: 'A project resource.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains an IoT SiteWise Monitor resource ID for a portal or project.',
                  required: [],
                }),
              accessPolicyPermission: z
                .enum(['ADMINISTRATOR', 'VIEWER'])
                .openapi({
                  description:
                    'The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({
              required: ['accessPolicyIdentity', 'accessPolicyResource', 'accessPolicyPermission'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAccessPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteAccessPoliciesAccessPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/access-policies/{accessPolicyId}',
  description:
    'Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.',
  operationId: 'DeleteAccessPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      accessPolicyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'accessPolicyId',
            in: 'path',
            required: true,
            description: 'The ID of the access policy to be deleted.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/\S{36,64}/)
        .min(36)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '\\S{36,64}', minLength: 36, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAccessPolicyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}',
  description: 'Retrieves information about an asset.',
  operationId: 'DescribeAsset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      excludeProperties: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeProperties',
            in: 'query',
            required: false,
            description: ' Whether or not to exclude asset properties from the response. ',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putAssetsAssetIdRoute = createRoute({
  method: 'put',
  path: '/assets/{assetId}',
  description:
    'Updates an asset\'s name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'UpdateAsset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A friendly name for the asset.' }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              assetDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the asset.' }),
            })
            .openapi({ required: ['assetName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const deleteAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/assets/{assetId}',
  description:
    '<p>Deletes an asset. This action can\'t be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can\'t delete an asset that\'s associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>',
  operationId: 'DeleteAsset',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset to delete.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/\S{36,64}/)
        .min(36)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '\\S{36,64}', minLength: 36, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssetResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getAssetModelsAssetModelIdRoute = createRoute({
  method: 'get',
  path: '/asset-models/{assetModelId}',
  description: 'Retrieves information about an asset model.',
  operationId: 'DescribeAssetModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetModelId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetModelId',
            in: 'path',
            required: true,
            description: 'The ID of the asset model.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      excludeProperties: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeProperties',
            in: 'query',
            required: false,
            description: ' Whether or not to exclude asset model properties from the response. ',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssetModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putAssetModelsAssetModelIdRoute = createRoute({
  method: 'put',
  path: '/asset-models/{assetModelId}',
  description:
    '<p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model\'s property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model\'s properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can\'t change the type or data type of an existing property.</p> </important>',
  operationId: 'UpdateAssetModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetModelId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetModelId',
            in: 'path',
            required: true,
            description: 'The ID of the asset model to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assetModelName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A unique, friendly name for the asset model.' }),
              assetModelDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A description for the asset model.' }),
              assetModelProperties: z
                .array(AssetModelPropertySchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The updated property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
                }),
              assetModelHierarchies: z
                .array(AssetModelHierarchySchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>',
                }),
              assetModelCompositeModels: z
                .array(AssetModelCompositeModelSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['assetModelName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssetModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const deleteAssetModelsAssetModelIdRoute = createRoute({
  method: 'delete',
  path: '/asset-models/{assetModelId}',
  description:
    'Deletes an asset model. This action can\'t be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can\'t delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'DeleteAssetModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetModelId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetModelId',
            in: 'path',
            required: true,
            description: 'The ID of the asset model to delete.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/\S{36,64}/)
        .min(36)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '\\S{36,64}', minLength: 36, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssetModelResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getDashboardsDashboardIdRoute = createRoute({
  method: 'get',
  path: '/dashboards/{dashboardId}',
  description: 'Retrieves information about a dashboard.',
  operationId: 'DescribeDashboard',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      dashboardId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            description: 'The ID of the dashboard.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDashboardResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putDashboardsDashboardIdRoute = createRoute({
  method: 'put',
  path: '/dashboards/{dashboardId}',
  description: 'Updates an IoT SiteWise Monitor dashboard.',
  operationId: 'UpdateDashboard',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      dashboardId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            description: 'The ID of the dashboard to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              dashboardName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A new friendly name for the dashboard.' }),
              dashboardDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A new description for the dashboard.' }),
              dashboardDefinition: z
                .string()
                .regex(/.+/)
                .min(0)
                .max(204800)
                .openapi({
                  description:
                    'The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['dashboardName', 'dashboardDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDashboardResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteDashboardsDashboardIdRoute = createRoute({
  method: 'delete',
  path: '/dashboards/{dashboardId}',
  description: 'Deletes a dashboard from IoT SiteWise Monitor.',
  operationId: 'DeleteDashboard',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      dashboardId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            description: 'The ID of the dashboard to delete.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/\S{36,64}/)
        .min(36)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '\\S{36,64}', minLength: 36, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDashboardResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const get20200301GatewaysGatewayIdRoute = createRoute({
  method: 'get',
  path: '/20200301/gateways/{gatewayId}',
  description: 'Retrieves information about a gateway.',
  operationId: 'DescribeGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      gatewayId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'gatewayId',
            in: 'path',
            required: true,
            description: 'The ID of the gateway device.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGatewayResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const put20200301GatewaysGatewayIdRoute = createRoute({
  method: 'put',
  path: '/20200301/gateways/{gatewayId}',
  description: "Updates a gateway's name.",
  operationId: 'UpdateGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      gatewayId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'gatewayId',
            in: 'path',
            required: true,
            description: 'The ID of the gateway to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              gatewayName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A unique, friendly name for the gateway.' }),
            })
            .openapi({ required: ['gatewayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const delete20200301GatewaysGatewayIdRoute = createRoute({
  method: 'delete',
  path: '/20200301/gateways/{gatewayId}',
  description:
    "Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.",
  operationId: 'DeleteGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      gatewayId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'gatewayId',
            in: 'path',
            required: true,
            description: 'The ID of the gateway to delete.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getPortalsPortalIdRoute = createRoute({
  method: 'get',
  path: '/portals/{portalId}',
  description: 'Retrieves information about a portal.',
  operationId: 'DescribePortal',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      portalId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            required: true,
            description: 'The ID of the portal.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePortalResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putPortalsPortalIdRoute = createRoute({
  method: 'put',
  path: '/portals/{portalId}',
  description: 'Updates an IoT SiteWise Monitor portal.',
  operationId: 'UpdatePortal',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      portalId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            required: true,
            description: 'The ID of the portal to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              portalName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A new friendly name for the portal.' }),
              portalDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A new description for the portal.' }),
              portalContactEmail: z
                .string()
                .regex(/[^@]+@[^@]+/)
                .min(1)
                .max(255)
                .openapi({
                  description: "The Amazon Web Services administrator's contact email address.",
                }),
              portalLogoImage: z
                .object({
                  id: IDSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ID of an existing image. Specify this parameter to keep an existing image.',
                      }),
                  ).exactOptional(),
                  file: ImageFileSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>',
                  required: [],
                }),
              roleArn: z
                .string()
                .regex(/.*/)
                .min(1)
                .max(1600)
                .openapi({
                  description:
                    'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal\'s users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              notificationSenderEmail: z
                .string()
                .regex(/[^@]+@[^@]+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The email address that sends alarm notifications.' }),
              alarms: z
                .object({
                  alarmRoleArn: ARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows the alarm to perform actions and access Amazon Web Services resources and services, such as IoT Events.',
                      }),
                  ).exactOptional(),
                  notificationLambdaArn: ARNSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function that manages alarm notifications. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">Managing alarm notifications</a> in the <i>IoT Events Developer Guide</i>.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.',
                  required: [],
                }),
            })
            .openapi({ required: ['portalName', 'portalContactEmail', 'roleArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePortalResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const deletePortalsPortalIdRoute = createRoute({
  method: 'delete',
  path: '/portals/{portalId}',
  description: 'Deletes a portal from IoT SiteWise Monitor.',
  operationId: 'DeletePortal',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      portalId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'portalId',
            in: 'path',
            required: true,
            description: 'The ID of the portal to delete.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/\S{36,64}/)
        .min(36)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '\\S{36,64}', minLength: 36, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePortalResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}',
  description: 'Retrieves information about a project.',
  operationId: 'DescribeProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: 'The ID of the project.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putProjectsProjectIdRoute = createRoute({
  method: 'put',
  path: '/projects/{projectId}',
  description: 'Updates an IoT SiteWise Monitor project.',
  operationId: 'UpdateProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: 'The ID of the project to update.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              projectName: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .openapi({ description: 'A new friendly name for the project.' }),
              projectDescription: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A new description for the project.' }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['projectName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProjectResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}',
  description: 'Deletes a project from IoT SiteWise Monitor.',
  operationId: 'DeleteProject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: 'The ID of the project.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      clientToken: z
        .string()
        .regex(/\S{36,64}/)
        .min(36)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'clientToken',
            in: 'query',
            required: false,
            description:
              "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
            schema: { type: 'string', pattern: '\\S{36,64}', minLength: 36, maxLength: 64 },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postTimeseriesDeleteIndexRoute = createRoute({
  method: 'post',
  path: '/timeseries/delete/',
  description:
    "<p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>",
  operationId: 'DeleteTimeSeries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      alias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: false,
            description: 'The alias that identifies the time series.',
            schema: { type: 'string', pattern: '[^\\u0000-\\u001F\\u007F]+', minLength: 1 },
          },
        }),
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: false,
            description: 'The ID of the asset in which the asset property was created.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: false,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getAssetsAssetIdPropertiesPropertyIdRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}/properties/{propertyId}',
  description:
    '<p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation\'s response includes the new default value.</p> </note> <p>This operation doesn\'t return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>',
  operationId: 'DescribeAssetProperty',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'propertyId',
            in: 'path',
            required: true,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssetPropertyResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putAssetsAssetIdPropertiesPropertyIdRoute = createRoute({
  method: 'put',
  path: '/assets/{assetId}/properties/{propertyId}',
  description:
    "<p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html\">DescribeAssetProperty</a>.</p> </important>",
  operationId: 'UpdateAssetProperty',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset to be updated.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'propertyId',
            in: 'path',
            required: true,
            description: 'The ID of the asset property to be updated.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              propertyAlias: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>',
                }),
              propertyNotificationState: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>',
                }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
              propertyUnit: z
                .string()
                .regex(/[^\u0000-\u001F\u007F]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the <code>assetModelProperty</code> in the asset model.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{jobId}',
  description:
    'Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
  operationId: 'DescribeBulkImportJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      jobId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID of the job.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBulkImportJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getConfigurationAccountEncryptionRoute = createRoute({
  method: 'get',
  path: '/configuration/account/encryption',
  description:
    'Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'DescribeDefaultEncryptionConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeDefaultEncryptionConfigurationResponseSchema },
      },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postConfigurationAccountEncryptionRoute = createRoute({
  method: 'post',
  path: '/configuration/account/encryption',
  description:
    'Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.',
  operationId: 'PutDefaultEncryptionConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              encryptionType: z
                .enum(['SITEWISE_DEFAULT_ENCRYPTION', 'KMS_BASED_ENCRYPTION'])
                .openapi({
                  description: 'The type of encryption used for the encryption configuration.',
                }),
              kmsKeyId: z
                .string()
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'The Key ID of the customer managed key used for KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.',
                }),
            })
            .openapi({ required: ['encryptionType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutDefaultEncryptionConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceRoute = createRoute({
  method: 'get',
  path: '/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}',
  description:
    'Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.',
  operationId: 'DescribeGatewayCapabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      gatewayId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'gatewayId',
            in: 'path',
            required: true,
            description: 'The ID of the gateway that defines the capability configuration.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      capabilityNamespace: z
        .string()
        .regex(/^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$/)
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'capabilityNamespace',
            in: 'path',
            required: true,
            description:
              'The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$',
              minLength: 1,
              maxLength: 512,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DescribeGatewayCapabilityConfigurationResponseSchema },
      },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getLoggingRoute = createRoute({
  method: 'get',
  path: '/logging',
  description: 'Retrieves the current IoT SiteWise logging options.',
  operationId: 'DescribeLoggingOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeLoggingOptionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putLoggingRoute = createRoute({
  method: 'put',
  path: '/logging',
  description: 'Sets logging options for IoT SiteWise.',
  operationId: 'PutLoggingOptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              loggingOptions: z
                .object({
                  level: LoggingLevelSchema.and(
                    z.any().openapi({ description: 'The IoT SiteWise logging verbosity level.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Contains logging options.', required: [] }),
            })
            .openapi({ required: ['loggingOptions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutLoggingOptionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getConfigurationAccountStorageRoute = createRoute({
  method: 'get',
  path: '/configuration/account/storage',
  description: 'Retrieves information about the storage configuration for IoT SiteWise.',
  operationId: 'DescribeStorageConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeStorageConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const postConfigurationAccountStorageRoute = createRoute({
  method: 'post',
  path: '/configuration/account/storage',
  description: 'Configures storage settings for IoT SiteWise.',
  operationId: 'PutStorageConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              storageType: z
                .enum(['SITEWISE_DEFAULT_STORAGE', 'MULTI_LAYER_STORAGE'])
                .openapi({
                  description:
                    '<p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>',
                }),
              multiLayerStorage: z
                .object({
                  customerManagedS3Storage: CustomerManagedS3StorageSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains information about a customer managed Amazon S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains information about the storage destination.',
                  required: [],
                }),
              disassociatedDataStorage: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({
                  description:
                    "<p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html\">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p>",
                }),
              retentionPeriod: z
                .object({
                  numberOfDays: NumberOfDaysSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of days that your data is kept.</p> <note> <p>If you specified a value for this parameter, the <code>unlimited</code> parameter must be <code>false</code>.</p> </note>',
                      }),
                  ).exactOptional(),
                  unlimited: UnlimitedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>If true, your data is kept indefinitely.</p> <note> <p>If configured to <code>true</code>, you must not specify a value for the <code>numberOfDays</code> parameter.</p> </note>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.',
                  required: [],
                }),
            })
            .openapi({ required: ['storageType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutStorageConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceAlreadyExistsException',
      content: { 'application/json': { schema: ResourceAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getTimeseriesDescribeIndexRoute = createRoute({
  method: 'get',
  path: '/timeseries/describe/',
  description:
    "<p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>",
  operationId: 'DescribeTimeSeries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      alias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: false,
            description: 'The alias that identifies the time series.',
            schema: { type: 'string', pattern: '[^\\u0000-\\u001F\\u007F]+', minLength: 1 },
          },
        }),
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: false,
            description: 'The ID of the asset in which the asset property was created.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: false,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeTimeSeriesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAssetsAssetIdDisassociateRoute = createRoute({
  method: 'post',
  path: '/assets/{assetId}/disassociate',
  description:
    "Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.",
  operationId: 'DisassociateAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the parent asset from which to disassociate the child asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hierarchyId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({
                  description:
                    'The ID of a hierarchy in the parent asset\'s model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
              childAssetId: z
                .string()
                .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
                .length(36)
                .openapi({ description: 'The ID of the child asset to disassociate.' }),
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: ['hierarchyId', 'childAssetId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const postTimeseriesDisassociateAliasAssetIdPropertyIdRoute = createRoute({
  method: 'post',
  path: '/timeseries/disassociate/#alias&assetId&propertyId',
  description: 'Disassociates a time series (data stream) from an asset property.',
  operationId: 'DisassociateTimeSeriesFromAssetProperty',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      alias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .openapi({
          param: {
            name: 'alias',
            in: 'query',
            required: true,
            description: 'The alias that identifies the time series.',
            schema: { type: 'string', pattern: '[^\\u0000-\\u001F\\u007F]+', minLength: 1 },
          },
        }),
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: true,
            description: 'The ID of the asset in which the asset property was created.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: true,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .regex(/\S{36,64}/)
                .min(36)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    "A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
  },
})

export const getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateRoute = createRoute({
  method: 'get',
  path: '/properties/aggregates#aggregateTypes&resolution&startDate&endDate',
  description:
    '<p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
  operationId: 'GetAssetPropertyAggregates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: false,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: false,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyAlias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyAlias',
            in: 'query',
            required: false,
            description:
              'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
            schema: {
              type: 'string',
              pattern: '[^\\u0000-\\u001F\\u007F]+',
              minLength: 1,
              maxLength: 2048,
            },
          },
        }),
      aggregateTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AggregateTypeSchema).min(1),
        )
        .openapi({
          param: {
            name: 'aggregateTypes',
            in: 'query',
            required: true,
            description: 'The data aggregating function.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AggregateType' },
              minItems: 1,
            },
          },
        }),
      resolution: z
        .string()
        .regex(/1m|1h|1d/)
        .length(2)
        .openapi({
          param: {
            name: 'resolution',
            in: 'query',
            required: true,
            description: 'The time interval over which to aggregate data.',
            schema: { type: 'string', pattern: '1m|1h|1d', minLength: 2, maxLength: 2 },
          },
        }),
      qualities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(QualitySchema).length(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'qualities',
            in: 'query',
            required: false,
            description: 'The quality by which to filter asset data.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Quality' },
              minItems: 1,
              maxItems: 1,
            },
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            required: true,
            description:
              'The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            required: true,
            description:
              'The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      timeOrdering: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'timeOrdering',
            in: 'query',
            required: false,
            description:
              '<p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>',
            schema: { type: 'string', enum: ['ASCENDING', 'DESCENDING'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 100</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssetPropertyAggregatesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getPropertiesLatestRoute = createRoute({
  method: 'get',
  path: '/properties/latest',
  description:
    '<p>Gets an asset property\'s current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
  operationId: 'GetAssetPropertyValue',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: false,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: false,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyAlias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyAlias',
            in: 'query',
            required: false,
            description:
              'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
            schema: {
              type: 'string',
              pattern: '[^\\u0000-\\u001F\\u007F]+',
              minLength: 1,
              maxLength: 2048,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssetPropertyValueResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getPropertiesHistoryRoute = createRoute({
  method: 'get',
  path: '/properties/history',
  description:
    '<p>Gets the history of an asset property\'s values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
  operationId: 'GetAssetPropertyValueHistory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: false,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyId',
            in: 'query',
            required: false,
            description: 'The ID of the asset property.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      propertyAlias: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'propertyAlias',
            in: 'query',
            required: false,
            description:
              'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
            schema: {
              type: 'string',
              pattern: '[^\\u0000-\\u001F\\u007F]+',
              minLength: 1,
              maxLength: 2048,
            },
          },
        }),
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            required: false,
            description:
              'The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            required: false,
            description:
              'The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      qualities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(QualitySchema).length(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'qualities',
            in: 'query',
            required: false,
            description: 'The quality by which to filter asset data.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/Quality' },
              minItems: 1,
              maxItems: 1,
            },
          },
        }),
      timeOrdering: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'timeOrdering',
            in: 'query',
            required: false,
            description:
              '<p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>',
            schema: { type: 'string', enum: ['ASCENDING', 'DESCENDING'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 100</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssetPropertyValueHistoryResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeRoute =
  createRoute({
    method: 'get',
    path: '/properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type',
    description:
      '<p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property\'s alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>',
    operationId: 'GetInterpolatedAssetPropertyValues',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      query: z.object({
        assetId: z
          .string()
          .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
          .length(36)
          .exactOptional()
          .openapi({
            param: {
              name: 'assetId',
              in: 'query',
              required: false,
              description: 'The ID of the asset.',
              schema: {
                type: 'string',
                pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        propertyId: z
          .string()
          .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
          .length(36)
          .exactOptional()
          .openapi({
            param: {
              name: 'propertyId',
              in: 'query',
              required: false,
              description: 'The ID of the asset property.',
              schema: {
                type: 'string',
                pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        propertyAlias: z
          .string()
          .regex(/[^\u0000-\u001F\u007F]+/)
          .min(1)
          .max(2048)
          .exactOptional()
          .openapi({
            param: {
              name: 'propertyAlias',
              in: 'query',
              required: false,
              description:
                'The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.',
              schema: {
                type: 'string',
                pattern: '[^\\u0000-\\u001F\\u007F]+',
                minLength: 1,
                maxLength: 2048,
              },
            },
          }),
        startTimeInSeconds: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(9223372036854774),
          )
          .openapi({
            param: {
              name: 'startTimeInSeconds',
              in: 'query',
              required: true,
              description:
                'The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time.',
              schema: { type: 'integer', minimum: 1, maximum: 9223372036854774 },
            },
          }),
        startTimeOffsetInNanos: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0).max(999999999),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'startTimeOffsetInNanos',
              in: 'query',
              required: false,
              description: 'The nanosecond offset converted from <code>startTimeInSeconds</code>.',
              schema: { type: 'integer', minimum: 0, maximum: 999999999 },
            },
          }),
        endTimeInSeconds: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(9223372036854774),
          )
          .openapi({
            param: {
              name: 'endTimeInSeconds',
              in: 'query',
              required: true,
              description:
                'The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time.',
              schema: { type: 'integer', minimum: 1, maximum: 9223372036854774 },
            },
          }),
        endTimeOffsetInNanos: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0).max(999999999),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'endTimeOffsetInNanos',
              in: 'query',
              required: false,
              description: 'The nanosecond offset converted from <code>endTimeInSeconds</code>.',
              schema: { type: 'integer', minimum: 0, maximum: 999999999 },
            },
          }),
        quality: z
          .enum(['GOOD', 'BAD', 'UNCERTAIN'])
          .openapi({
            param: {
              name: 'quality',
              in: 'query',
              required: true,
              description:
                'The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality.',
              schema: { type: 'string', enum: ['GOOD', 'BAD', 'UNCERTAIN'] },
            },
          }),
        intervalInSeconds: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(320000000),
          )
          .openapi({
            param: {
              name: 'intervalInSeconds',
              in: 'query',
              required: true,
              description:
                'The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends.',
              schema: { type: 'integer', minimum: 1, maximum: 320000000 },
            },
          }),
        nextToken: z
          .string()
          .regex(/[A-Za-z0-9+\/=]+/)
          .min(1)
          .max(4096)
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description: 'The token to be used for the next set of paginated results.',
              schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
            },
          }),
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              required: false,
              description:
                'The maximum number of results to return for each paginated request. If not specified, the default value is 10.',
              schema: { type: 'integer', minimum: 1 },
            },
          }),
        type: z
          .string()
          .min(1)
          .max(256)
          .openapi({
            param: {
              name: 'type',
              in: 'query',
              required: true,
              description:
                '<p>The interpolation type.</p> <p>Valid values: <code>LINEAR_INTERPOLATION | LOCF_INTERPOLATION</code> </p> <ul> <li> <p> <code>LINEAR_INTERPOLATION</code> – Estimates missing data using <a href="https://en.wikipedia.org/wiki/Linear_interpolation">linear interpolation</a>.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on.</p> </li> <li> <p> <code>LOCF_INTERPOLATION</code> – Estimates missing data using last observation carried forward interpolation</p> <p>If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found.</p> <p>For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn\'t found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.</p> </li> </ul>',
              schema: { type: 'string', minLength: 1, maxLength: 256 },
            },
          }),
        intervalWindowInSeconds: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(320000000),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'intervalWindowInSeconds',
              in: 'query',
              required: false,
              description:
                "<p>The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval.</p> <note> <ul> <li> <p>If you specify a value for the <code>intervalWindowInSeconds</code> parameter, the value for the <code>type</code> parameter must be <code>LINEAR_INTERPOLATION</code>.</p> </li> <li> <p>If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points.</p> </li> </ul> </note> <p>For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on. </p>",
              schema: { type: 'integer', minimum: 1, maximum: 320000000 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetInterpolatedAssetPropertyValuesResponseSchema },
        },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      483: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
    },
  })

export const getAssetModelsAssetModelIdPropertiesRoute = createRoute({
  method: 'get',
  path: '/asset-models/{assetModelId}/properties',
  description:
    'Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.',
  operationId: 'ListAssetModelProperties',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetModelId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetModelId',
            in: 'path',
            required: true,
            description: 'The ID of the asset model.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return for each paginated request. If not specified, the default value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      filter: z
        .enum(['ALL', 'BASE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            description:
              '<p> Filters the requested list of asset model properties. You can choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all asset model properties for a given asset model ID. </p> </li> <li> <p> <code>BASE</code> – The list includes only base asset model properties for a given asset model ID. </p> </li> </ul> <p>Default: <code>BASE</code> </p>',
            schema: { type: 'string', enum: ['ALL', 'BASE'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssetModelPropertiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAssetsAssetIdPropertiesRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}/properties',
  description:
    'Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.',
  operationId: 'ListAssetProperties',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return for each paginated request. If not specified, the default value is 50.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      filter: z
        .enum(['ALL', 'BASE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            description:
              '<p> Filters the requested list of asset properties. You can choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all asset properties for a given asset model ID. </p> </li> <li> <p> <code>BASE</code> – The list includes only base asset properties for a given asset model ID. </p> </li> </ul> <p>Default: <code>BASE</code> </p>',
            schema: { type: 'string', enum: ['ALL', 'BASE'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssetPropertiesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAssetsAssetIdAssetRelationshipsTraversalTypeRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}/assetRelationships#traversalType',
  description:
    "Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.",
  operationId: 'ListAssetRelationships',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      traversalType: z
        .literal('PATH_TO_ROOT')
        .openapi({
          param: {
            name: 'traversalType',
            in: 'query',
            required: true,
            description:
              "<p>The type of traversal to use to identify asset relationships. Choose the following option:</p> <ul> <li> <p> <code>PATH_TO_ROOT</code> – Identify the asset's parent assets up to the root asset. The asset that you specify in <code>assetId</code> is the first result in the list of <code>assetRelationshipSummaries</code>, and the root asset is the last result.</p> </li> </ul>",
            schema: { type: 'string', enum: ['PATH_TO_ROOT'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for each paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssetRelationshipsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getAssetsAssetIdHierarchiesRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}/hierarchies',
  description:
    "<p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>",
  operationId: 'ListAssociatedAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assetId',
            in: 'path',
            required: true,
            description: 'The ID of the asset to query.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      hierarchyId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'hierarchyId',
            in: 'query',
            required: false,
            description:
              '<p>The ID of the hierarchy by which child assets are associated to the asset. To find a hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a> operations. This parameter is required if you choose <code>CHILD</code> for <code>traversalDirection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      traversalDirection: z
        .enum(['PARENT', 'CHILD'])
        .exactOptional()
        .openapi({
          param: {
            name: 'traversalDirection',
            in: 'query',
            required: false,
            description:
              "<p>The direction to list associated assets. Choose one of the following options:</p> <ul> <li> <p> <code>CHILD</code> – The list includes all child assets associated to the asset. The <code>hierarchyId</code> parameter is required if you choose <code>CHILD</code>.</p> </li> <li> <p> <code>PARENT</code> – The list includes the asset's parent asset.</p> </li> </ul> <p>Default: <code>CHILD</code> </p>",
            schema: { type: 'string', enum: ['PARENT', 'CHILD'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssociatedAssetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getDashboardsProjectIdRoute = createRoute({
  method: 'get',
  path: '/dashboards#projectId',
  description: 'Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.',
  operationId: 'ListDashboards',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'query',
            required: true,
            description: 'The ID of the project.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDashboardsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getProjectsProjectIdAssetsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectId}/assets',
  description:
    'Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.',
  operationId: 'ListProjectAssets',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      projectId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: 'The ID of the project.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectAssetsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getProjectsPortalIdRoute = createRoute({
  method: 'get',
  path: '/projects#portalId',
  description: 'Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.',
  operationId: 'ListProjects',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      portalId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'portalId',
            in: 'query',
            required: true,
            description: 'The ID of the portal.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              '<p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags#resourceArn',
  description: 'Retrieves the list of tags for an IoT SiteWise resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags#resourceArn',
  description:
    "Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.",
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    'A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    487: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const getTimeseriesIndexRoute = createRoute({
  method: 'get',
  path: '/timeseries/',
  description: 'Retrieves a paginated list of time series (data streams).',
  operationId: 'ListTimeSeries',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/[A-Za-z0-9+\/=]+/)
        .min(1)
        .max(4096)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to be used for the next set of paginated results.',
            schema: { type: 'string', pattern: '[A-Za-z0-9+/=]+', minLength: 1, maxLength: 4096 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for each paginated request.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      assetId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            in: 'query',
            required: false,
            description: 'The ID of the asset in which the asset property was created.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      aliasPrefix: z
        .string()
        .regex(/[^\u0000-\u001F\u007F]+/)
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'aliasPrefix',
            in: 'query',
            required: false,
            description: 'The alias prefix of the time series.',
            schema: { type: 'string', pattern: '[^\\u0000-\\u001F\\u007F]+', minLength: 1 },
          },
        }),
      timeSeriesType: z
        .enum(['ASSOCIATED', 'DISASSOCIATED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'timeSeriesType',
            in: 'query',
            required: false,
            description:
              "<p>The type of the time series. The time series type can be one of the following values:</p> <ul> <li> <p> <code>ASSOCIATED</code> – The time series is associated with an asset property.</p> </li> <li> <p> <code>DISASSOCIATED</code> – The time series isn't associated with any asset property.</p> </li> </ul>",
            schema: { type: 'string', enum: ['ASSOCIATED', 'DISASSOCIATED'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTimeSeriesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags#resourceArn&tagKeys',
  description: 'Removes a tag from an IoT SiteWise resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .min(1)
        .max(1011)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.',
            schema: { type: 'string', minLength: 1, maxLength: 1011 },
          },
        }),
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of keys for tags to remove from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 200,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
  },
})

export const post20200301GatewaysGatewayIdCapabilityRoute = createRoute({
  method: 'post',
  path: '/20200301/gateways/{gatewayId}/capability',
  description:
    'Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.',
  operationId: 'UpdateGatewayCapabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      gatewayId: z
        .string()
        .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'gatewayId',
            in: 'path',
            required: true,
            description: 'The ID of the gateway to be updated.',
            schema: {
              type: 'string',
              pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              capabilityNamespace: z
                .string()
                .regex(/^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$/)
                .min(1)
                .max(512)
                .openapi({
                  description:
                    'The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.',
                }),
              capabilityConfiguration: z
                .string()
                .min(1)
                .max(104857600)
                .openapi({
                  description:
                    'The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.',
                }),
            })
            .openapi({ required: ['capabilityNamespace', 'capabilityConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateGatewayCapabilityConfigurationResponseSchema },
      },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
