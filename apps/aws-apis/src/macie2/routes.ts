import { createRoute, z } from '@hono/zod-openapi'

const AcceptInvitationResponseSchema = z.object({}).openapi('AcceptInvitationResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const StringSchema = z.string().openapi('String')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const BooleanSchema = z.boolean().openapi('Boolean')

const BatchGetCustomDataIdentifierSummarySchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the custom data identifier.' }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.',
        }),
    ).exactOptional(),
    deleted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.",
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the custom data identifier.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the custom data identifier.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the custom data identifier.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a custom data identifier.', required: [] })
  .openapi('BatchGetCustomDataIdentifierSummary')

const ListOfBatchGetCustomDataIdentifierSummarySchema = z
  .array(BatchGetCustomDataIdentifierSummarySchema)
  .openapi('ListOfBatchGetCustomDataIdentifierSummary')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const BatchGetCustomDataIdentifiersResponseSchema = z
  .object({
    customDataIdentifiers: ListOfBatchGetCustomDataIdentifierSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each custom data identifier that matches the criteria specified in the request.',
        }),
    ).exactOptional(),
    notFoundIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of custom data identifier IDs, one for each custom data identifier that was specified in the request but doesn't correlate to an existing custom data identifier.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetCustomDataIdentifiersResponse')

const StringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922Schema = z
  .string()
  .regex(/^arn:(aws|aws-cn|aws-us-gov):macie2:[a-z1-9-]{9,20}:\d{12}:allow-list\/[a-z0-9]{22}$/)
  .min(71)
  .max(89)
  .openapi('StringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922')

const StringMin22Max22PatternAZ0922Schema = z
  .string()
  .regex(/^[a-z0-9]{22}$/)
  .length(22)
  .openapi('StringMin22Max22PatternAZ0922')

const CreateAllowListResponseSchema = z
  .object({
    arn: StringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the allow list.' }),
    ).exactOptional(),
    id: StringMin22Max22PatternAZ0922Schema.and(
      z.any().openapi({ description: 'The unique identifier for the allow list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAllowListResponse')

const StringMin1Max512PatternSSSchema = z
  .string()
  .regex(/^[\s\S]+$/)
  .min(1)
  .max(512)
  .openapi('StringMin1Max512PatternSS')

const StringMin3Max255PatternAZaZ093255Schema = z
  .string()
  .regex(/^[A-Za-z0-9.\-_]{3,255}$/)
  .min(3)
  .max(255)
  .openapi('StringMin3Max255PatternAZaZ093255')

const StringMin1Max1024PatternSSSchema = z
  .string()
  .regex(/^[\s\S]+$/)
  .min(1)
  .max(1024)
  .openapi('StringMin1Max1024PatternSS')

const S3WordsListSchema = z
  .object({
    bucketName: StringMin3Max255PatternAZaZ093255Schema.and(
      z.any().openapi({ description: 'The full name of the S3 bucket that contains the object.' }),
    ),
    objectKey: StringMin1Max1024PatternSSSchema.and(
      z.any().openapi({ description: 'The full name (key) of the object.' }),
    ),
  })
  .openapi({
    required: ['bucketName', 'objectKey'],
    description: 'Provides information about an S3 object that lists specific text to ignore.',
  })
  .openapi('S3WordsList')

const CreateClassificationJobResponseSchema = z
  .object({
    jobArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job.' }),
    ).exactOptional(),
    jobId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateClassificationJobResponse')

const JobComparatorSchema = z
  .enum(['EQ', 'GT', 'GTE', 'LT', 'LTE', 'NE', 'CONTAINS', 'STARTS_WITH'])
  .openapi({
    description:
      'The operator to use in a condition. Depending on the type of condition, possible values are:',
  })
  .openapi('JobComparator')

const SimpleCriterionKeyForJobSchema = z
  .enum([
    'ACCOUNT_ID',
    'S3_BUCKET_NAME',
    'S3_BUCKET_EFFECTIVE_PERMISSION',
    'S3_BUCKET_SHARED_ACCESS',
  ])
  .openapi({
    description:
      'The property to use in a condition that determines whether an S3 bucket is included or excluded from a classification job. Valid values are:',
  })
  .openapi('SimpleCriterionKeyForJob')

const SimpleCriterionForJobSchema = z
  .object({
    comparator: JobComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).',
        }),
    ).exactOptional(),
    key: SimpleCriterionKeyForJobSchema.and(
      z.any().openapi({ description: 'The property to use in the condition.' }),
    ).exactOptional(),
    values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:</p> <ul><li><p>ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the bucket.</p></li> <li><p>S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission">BucketPublicAccess.effectivePermission</a> property of a bucket.</p></li> <li><p>S3_BUCKET_NAME - A string that represents the name of a bucket.</p></li> <li><p>S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess">BucketMetadata.sharedAccess</a> property of a bucket.</p></li></ul> <p>Values are case sensitive. Also, Macie doesn\'t support use of partial values or wildcard characters in these values.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.',
    required: [],
  })
  .openapi('SimpleCriterionForJob')

const TagCriterionPairForJobSchema = z
  .object({
    key: StringSchema.and(
      z.any().openapi({ description: 'The value for the tag key to use in the condition.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'The tag value to use in the condition.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>",
    required: [],
  })
  .openapi('TagCriterionPairForJob')

const ListOfTagCriterionPairForJobSchema = z
  .array(TagCriterionPairForJobSchema)
  .openapi('ListOfTagCriterionPairForJob')

const TagCriterionForJobSchema = z
  .object({
    comparator: JobComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).',
        }),
    ).exactOptional(),
    tagValues: ListOfTagCriterionPairForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys, tag values, or tag key and value pairs to use in the condition.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.',
    required: [],
  })
  .openapi('TagCriterionForJob')

const CriteriaForJobSchema = z
  .object({
    simpleCriterion: SimpleCriterionForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property-based condition that defines a property, operator, and one or more values for including or excluding buckets from the job.',
        }),
    ).exactOptional(),
    tagCriterion: TagCriterionForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding buckets from the job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.',
    required: [],
  })
  .openapi('CriteriaForJob')

const ListOfCriteriaForJobSchema = z.array(CriteriaForJobSchema).openapi('ListOfCriteriaForJob')

const CriteriaBlockForJobSchema = z
  .object({
    and: ListOfCriteriaForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of conditions, one for each condition that determines which buckets to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.',
    required: [],
  })
  .openapi('CriteriaBlockForJob')

const S3BucketCriteriaForJobSchema = z
  .object({
    excludes: CriteriaBlockForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which buckets to exclude from the job.',
        }),
    ).exactOptional(),
    includes: CriteriaBlockForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which buckets to include in the job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.',
    required: [],
  })
  .openapi('S3BucketCriteriaForJob')

const S3BucketDefinitionForJobSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that owns the buckets.',
        }),
    ),
    buckets: ListOfStringSchema.and(
      z.any().openapi({ description: 'An array that lists the names of the buckets.' }),
    ),
  })
  .openapi({
    required: ['accountId', 'buckets'],
    description:
      'Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.',
  })
  .openapi('S3BucketDefinitionForJob')

const ListOfS3BucketDefinitionForJobSchema = z
  .array(S3BucketDefinitionForJobSchema)
  .openapi('ListOfS3BucketDefinitionForJob')

const ScopeFilterKeySchema = z
  .enum(['OBJECT_EXTENSION', 'OBJECT_LAST_MODIFIED_DATE', 'OBJECT_SIZE', 'OBJECT_KEY'])
  .openapi({
    description:
      'The property to use in a condition that determines whether an S3 object is included or excluded from a classification job. Valid values are:',
  })
  .openapi('ScopeFilterKey')

const SimpleScopeTermSchema = z
  .object({
    comparator: JobComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The operator to use in the condition. Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - EQ (equals) or NE (not equals)</p></li> <li><p>OBJECT_KEY - STARTS_WITH</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - Any operator except CONTAINS</p></li> <li><p>OBJECT_SIZE - Any operator except CONTAINS</p></li></ul>',
        }),
    ).exactOptional(),
    key: ScopeFilterKeySchema.and(
      z.any().openapi({ description: 'The object property to use in the condition.' }),
    ).exactOptional(),
    values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array that lists the values to use in the condition. If the value for the key property is OBJECT_EXTENSION or OBJECT_KEY, this array can specify multiple values and Amazon Macie uses OR logic to join the values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported property (key) are:</p> <ul><li><p>OBJECT_EXTENSION - A string that represents the file name extension of an object. For example: docx or pdf</p></li> <li><p>OBJECT_KEY - A string that represents the key prefix (folder name or path) of an object. For example: logs or awslogs/eventlogs. This value applies a condition to objects whose keys (names) begin with the specified value.</p></li> <li><p>OBJECT_LAST_MODIFIED_DATE - The date and time (in UTC and extended ISO 8601 format) when an object was created or last changed, whichever is latest. For example: 2020-09-28T14:31:13Z</p></li> <li><p>OBJECT_SIZE - An integer that represents the storage size (in bytes) of an object.</p></li></ul> <p>Macie doesn't support use of wildcard characters in these values. Also, string values are case sensitive.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.',
    required: [],
  })
  .openapi('SimpleScopeTerm')

const TagValuePairSchema = z
  .object({
    key: StringSchema.and(
      z.any().openapi({ description: 'The value for the tag key to use in the condition.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag value, associated with the specified tag key (key), to use in the condition. To specify only a tag key for a condition, specify the tag key for the key property and set this value to an empty string.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.",
    required: [],
  })
  .openapi('TagValuePair')

const ListOfTagValuePairSchema = z.array(TagValuePairSchema).openapi('ListOfTagValuePair')

const TagTargetSchema = z
  .literal('S3_OBJECT')
  .openapi({
    description: 'The type of object to apply a tag-based condition to. Valid values are:',
  })
  .openapi('TagTarget')

const TagScopeTermSchema = z
  .object({
    comparator: JobComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use in the condition. Valid values are EQ (equals) or NE (not equals).',
        }),
    ).exactOptional(),
    key: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The object property to use in the condition. The only valid value is TAG.',
        }),
    ).exactOptional(),
    tagValues: ListOfTagValuePairSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys or tag key and value pairs to use in the condition. To specify only tag keys in a condition, specify the keys in this array and set the value for each associated tag value to an empty string.',
        }),
    ).exactOptional(),
    target: TagTargetSchema.and(
      z.any().openapi({ description: 'The type of object to apply the condition to.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.',
    required: [],
  })
  .openapi('TagScopeTerm')

const JobScopeTermSchema = z
  .object({
    simpleScopeTerm: SimpleScopeTermSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property-based condition that defines a property, operator, and one or more values for including or excluding objects from the job.',
        }),
    ).exactOptional(),
    tagScopeTerm: TagScopeTermSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding objects from the job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.',
    required: [],
  })
  .openapi('JobScopeTerm')

const ListOfJobScopeTermSchema = z.array(JobScopeTermSchema).openapi('ListOfJobScopeTerm')

const JobScopingBlockSchema = z
  .object({
    and: ListOfJobScopeTermSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of conditions, one for each property- or tag-based condition that determines which objects to include or exclude from the job. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.',
    required: [],
  })
  .openapi('JobScopingBlock')

const ScopingSchema = z
  .object({
    excludes: JobScopingBlockSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which objects to exclude from the analysis.',
        }),
    ).exactOptional(),
    includes: JobScopingBlockSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which objects to include in the analysis.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.',
    required: [],
  })
  .openapi('Scoping')

const DailyScheduleSchema = z
  .object({})
  .openapi({
    description:
      'Specifies that a classification job runs once a day, every day. This is an empty object.',
  })
  .openapi('DailySchedule')

const IntegerSchema = z.int().openapi('Integer')

const MonthlyScheduleSchema = z
  .object({
    dayOfMonth: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31.</p> <p>If this value exceeds the number of days in a certain month, Macie doesn't run the job that month. Macie runs the job only during months that have the specified day. For example, if this value is 31 and a month has only 30 days, Macie doesn't run the job that month. To run the job every month, specify a value that's less than 29.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a monthly recurrence pattern for running a classification job.',
    required: [],
  })
  .openapi('MonthlySchedule')

const DayOfWeekSchema = z
  .enum(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'])
  .openapi('DayOfWeek')

const WeeklyScheduleSchema = z
  .object({
    dayOfWeek: DayOfWeekSchema.and(
      z.any().openapi({ description: 'The day of the week when Amazon Macie runs the job.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies a weekly recurrence pattern for running a classification job.',
    required: [],
  })
  .openapi('WeeklySchedule')

const CreateCustomDataIdentifierResponseSchema = z
  .object({
    customDataIdentifierId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the custom data identifier that was created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCustomDataIdentifierResponse')

const LongSchema = z.int().openapi('Long')

const DataIdentifierSeveritySchema = z
  .enum(['LOW', 'MEDIUM', 'HIGH'])
  .openapi({
    description:
      'The severity of a finding, ranging from LOW, for least severe, to HIGH, for most severe. Valid values are:',
  })
  .openapi('DataIdentifierSeverity')

const SeverityLevelSchema = z
  .object({
    occurrencesThreshold: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The minimum number of occurrences of text that must match the custom data identifier's detection criteria in order to produce a finding with the specified severity (severity).",
        }),
    ),
    severity: DataIdentifierSeveritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The severity to assign to a finding: if the number of occurrences is greater than or equal to the specified threshold (occurrencesThreshold); and, if applicable, the number of occurrences is less than the threshold for the next consecutive severity level for the custom data identifier, moving from LOW to HIGH.',
        }),
    ),
  })
  .openapi({
    required: ['occurrencesThreshold', 'severity'],
    description:
      "Specifies a severity level for findings that a custom data identifier produces. A severity level determines which severity is assigned to the findings, based on the number of occurrences of text that matches the custom data identifier's detection criteria.",
  })
  .openapi('SeverityLevel')

const CreateFindingsFilterResponseSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the filter that was created.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the filter that was created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFindingsFilterResponse')

const CriterionAdditionalPropertiesSchema = z
  .object({
    eq: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.',
        }),
    ).exactOptional(),
    eqExactMatch: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values.</p> <p>You can use this operator with the following properties: customDataIdentifiers.detections.arn, customDataIdentifiers.detections.name, resourcesAffected.s3Bucket.tags.key, resourcesAffected.s3Bucket.tags.value, resourcesAffected.s3Object.tags.key, resourcesAffected.s3Object.tags.value, sensitiveData.category, and sensitiveData.detections.type.</p>',
        }),
    ).exactOptional(),
    gt: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The value for the property is greater than the specified value.',
        }),
    ).exactOptional(),
    gte: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the property is greater than or equal to the specified value.',
        }),
    ).exactOptional(),
    lt: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The value for the property is less than the specified value.' }),
    ).exactOptional(),
    lte: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The value for the property is less than or equal to the specified value.',
        }),
    ).exactOptional(),
    neq: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Macie uses OR logic to join the values.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the operator to use in a property-based condition that filters the results of a query for findings. For detailed information and examples of each operator, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.',
    required: [],
  })
  .openapi('CriterionAdditionalProperties')

const CriterionSchema = z
  .record(z.string(), CriterionAdditionalPropertiesSchema)
  .openapi({
    description:
      'Specifies a condition that defines a property, operator, and one or more values to filter the results of a query for findings. The number of values depends on the property and operator specified by the condition. For information about defining filter conditions, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-filter-basics.html">Fundamentals of filtering findings</a> in the <i>Amazon Macie User Guide</i>.',
  })
  .openapi('Criterion')

const ErrorCodeSchema = z
  .enum(['ClientError', 'InternalError'])
  .openapi({ description: 'The source of an issue or delay. Possible values are:' })
  .openapi('ErrorCode')

const UnprocessedAccountSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account that the request applies to.',
        }),
    ).exactOptional(),
    errorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The source of the issue or delay in processing the request.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z.any().openapi({ description: "The reason why the request hasn't been processed." }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " <p>Provides information about an account-related request that hasn't been processed.</p>",
    required: [],
  })
  .openapi('UnprocessedAccount')

const ListOfUnprocessedAccountSchema = z
  .array(UnprocessedAccountSchema)
  .openapi('ListOfUnprocessedAccount')

const CreateInvitationsResponseSchema = z
  .object({
    unprocessedAccounts: ListOfUnprocessedAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateInvitationsResponse')

const CreateMemberResponseSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the account that was associated with the administrator account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateMemberResponse')

const CreateSampleFindingsResponseSchema = z.object({}).openapi('CreateSampleFindingsResponse')

const FindingTypeSchema = z
  .enum([
    'SensitiveData:S3Object/Multiple',
    'SensitiveData:S3Object/Financial',
    'SensitiveData:S3Object/Personal',
    'SensitiveData:S3Object/Credentials',
    'SensitiveData:S3Object/CustomIdentifier',
    'Policy:IAMUser/S3BucketPublic',
    'Policy:IAMUser/S3BucketSharedExternally',
    'Policy:IAMUser/S3BucketReplicatedExternally',
    'Policy:IAMUser/S3BucketEncryptionDisabled',
    'Policy:IAMUser/S3BlockPublicAccessDisabled',
    'Policy:IAMUser/S3BucketSharedWithCloudFront',
  ])
  .openapi({
    description:
      'The type of finding. For details about each type, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-types.html">Types of Amazon Macie findings</a> in the <i>Amazon Macie User Guide</i>. Possible values are:',
  })
  .openapi('FindingType')

const DeclineInvitationsResponseSchema = z
  .object({
    unprocessedAccounts: ListOfUnprocessedAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeclineInvitationsResponse')

const DeleteAllowListResponseSchema = z.object({}).openapi('DeleteAllowListResponse')

const DeleteCustomDataIdentifierResponseSchema = z
  .object({})
  .openapi('DeleteCustomDataIdentifierResponse')

const DeleteFindingsFilterResponseSchema = z.object({}).openapi('DeleteFindingsFilterResponse')

const DeleteInvitationsResponseSchema = z
  .object({
    unprocessedAccounts: ListOfUnprocessedAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteInvitationsResponse')

const DeleteMemberResponseSchema = z.object({}).openapi('DeleteMemberResponse')

const AllowsUnencryptedObjectUploadsSchema = z
  .enum(['TRUE', 'FALSE', 'UNKNOWN'])
  .openapi('AllowsUnencryptedObjectUploads')

const BucketMetadataErrorCodeSchema = z
  .literal('ACCESS_DENIED')
  .openapi({
    description:
      "The error code for an error that prevented Amazon Macie from retrieving and processing metadata from Amazon S3 for an S3 bucket and the bucket's objects.",
  })
  .openapi('BucketMetadataErrorCode')

const IsDefinedInJobSchema = z.enum(['TRUE', 'FALSE', 'UNKNOWN']).openapi('IsDefinedInJob')

const IsMonitoredByJobSchema = z.enum(['TRUE', 'FALSE', 'UNKNOWN']).openapi('IsMonitoredByJob')

const JobDetailsSchema = z
  .object({
    isDefinedInJob: IsDefinedInJobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether any one-time or recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more jobs and at least one of those jobs has a status other than CANCELLED. Or the bucket matched the bucket criteria (S3BucketCriteriaForJob) for at least one job that previously ran.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any jobs, all the jobs that explicitly include the bucket in their bucket definitions have a status of CANCELLED, or the bucket didn't match the bucket criteria (S3BucketCriteriaForJob) for any jobs that previously ran.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>",
        }),
    ).exactOptional(),
    isMonitoredByJob: IsMonitoredByJobSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether any recurring jobs are configured to analyze data in the bucket. Possible values are:</p> <ul><li><p>TRUE - The bucket is explicitly included in the bucket definition (S3BucketDefinitionForJob) for one or more recurring jobs or the bucket matches the bucket criteria (S3BucketCriteriaForJob) for one or more recurring jobs. At least one of those jobs has a status other than CANCELLED.</p></li> <li><p>FALSE - The bucket isn't explicitly included in the bucket definition (S3BucketDefinitionForJob) for any recurring jobs, the bucket doesn't match the bucket criteria (S3BucketCriteriaForJob) for any recurring jobs, or all the recurring jobs that are configured to analyze data in the bucket have a status of CANCELLED.</p></li> <li><p>UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.</p></li></ul>",
        }),
    ).exactOptional(),
    lastJobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique identifier for the job that ran most recently and is configured to analyze data in the bucket, either the latest run of a recurring job or the only run of a one-time job.</p> <p>This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>',
        }),
    ).exactOptional(),
    lastJobRunTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The date and time, in UTC and extended ISO 8601 format, when the job (lastJobId) started. If the job is a recurring job, this value indicates when the most recent run started.</p> <p>This value is typically null if the value for the isDefinedInJob property is FALSE or UNKNOWN.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.',
    required: [],
  })
  .openapi('JobDetails')

const ObjectCountByEncryptionTypeSchema = z
  .object({
    customerManaged: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects that are encrypted with a customer-provided key. The objects use customer-provided server-side encryption (SSE-C).',
        }),
    ).exactOptional(),
    kmsManaged: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects that are encrypted with an KMS key, either an Amazon Web Services managed key or a customer managed key. The objects use KMS encryption (SSE-KMS).',
        }),
    ).exactOptional(),
    s3Managed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects that are encrypted with an Amazon S3 managed key. The objects use Amazon S3 managed encryption (SSE-S3).',
        }),
    ).exactOptional(),
    unencrypted: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that use client-side encryption or aren't encrypted.",
        }),
    ).exactOptional(),
    unknown: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie doesn't have current encryption metadata for. Macie can't provide current data about the encryption settings for these objects.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.",
    required: [],
  })
  .openapi('ObjectCountByEncryptionType')

const EffectivePermissionSchema = z
  .enum(['PUBLIC', 'NOT_PUBLIC', 'UNKNOWN'])
  .openapi('EffectivePermission')

const BlockPublicAccessSchema = z
  .object({
    blockPublicAcls: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.',
        }),
    ).exactOptional(),
    blockPublicPolicy: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether Amazon S3 blocks public bucket policies for the bucket.',
        }),
    ).exactOptional(),
    ignorePublicAcls: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.',
        }),
    ).exactOptional(),
    restrictPublicBuckets: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon S3 restricts public bucket policies for the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
    required: [],
  })
  .openapi('BlockPublicAccess')

const AccountLevelPermissionsSchema = z
  .object({
    blockPublicAccess: BlockPublicAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'The block public access settings for the Amazon Web Services account that owns the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the account-level permissions settings that apply to an S3 bucket.',
    required: [],
  })
  .openapi('AccountLevelPermissions')

const AccessControlListSchema = z
  .object({
    allowsPublicReadAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the ACL grants the general public with read access permissions for the bucket.',
        }),
    ).exactOptional(),
    allowsPublicWriteAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the ACL grants the general public with write access permissions for the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.',
    required: [],
  })
  .openapi('AccessControlList')

const BucketPolicySchema = z
  .object({
    allowsPublicReadAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the bucket policy allows the general public to have read access to the bucket.',
        }),
    ).exactOptional(),
    allowsPublicWriteAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the bucket policy allows the general public to have write access to the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the permissions settings of the bucket policy for an S3 bucket.',
    required: [],
  })
  .openapi('BucketPolicy')

const BucketLevelPermissionsSchema = z
  .object({
    accessControlList: AccessControlListSchema.and(
      z
        .any()
        .openapi({
          description:
            "The permissions settings of the access control list (ACL) for the bucket. This value is null if an ACL hasn't been defined for the bucket.",
        }),
    ).exactOptional(),
    blockPublicAccess: BlockPublicAccessSchema.and(
      z.any().openapi({ description: 'The block public access settings for the bucket.' }),
    ).exactOptional(),
    bucketPolicy: BucketPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "The permissions settings of the bucket policy for the bucket. This value is null if a bucket policy hasn't been defined for the bucket.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the bucket-level permissions settings for an S3 bucket.',
    required: [],
  })
  .openapi('BucketLevelPermissions')

const BucketPermissionConfigurationSchema = z
  .object({
    accountLevelPermissions: AccountLevelPermissionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The account-level permissions settings that apply to the bucket.',
        }),
    ).exactOptional(),
    bucketLevelPermissions: BucketLevelPermissionsSchema.and(
      z.any().openapi({ description: 'The bucket-level permissions settings for the bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the account-level and bucket-level permissions settings for an S3 bucket.',
    required: [],
  })
  .openapi('BucketPermissionConfiguration')

const BucketPublicAccessSchema = z
  .object({
    effectivePermission: EffectivePermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            " <p>Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are:</p> <ul><li><p>NOT_PUBLIC - The bucket isn't publicly accessible.</p></li> <li><p>PUBLIC - The bucket is publicly accessible.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket is publicly accessible.</p></li></ul>",
        }),
    ).exactOptional(),
    permissionConfiguration: BucketPermissionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The account-level and bucket-level permissions settings for the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.',
    required: [],
  })
  .openapi('BucketPublicAccess')

const ReplicationDetailsSchema = z
  .object({
    replicated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the bucket is configured to replicate one or more objects to any destination.',
        }),
    ).exactOptional(),
    replicatedExternally: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the bucket is configured to replicate one or more objects to a bucket for an Amazon Web Services account that isn't part of your Amazon Macie organization. An <i>Amazon Macie organization</i> is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.",
        }),
    ).exactOptional(),
    replicationAccounts: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Web Services account IDs, one for each Amazon Web Services account that owns a bucket that the bucket is configured to replicate one or more objects to.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.',
    required: [],
  })
  .openapi('ReplicationDetails')

const TypeSchema = z.enum(['NONE', 'AES256', 'aws:kms']).openapi('Type')

const BucketServerSideEncryptionSchema = z
  .object({
    kmsMasterKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used by default to encrypt objects that are added to the bucket. This value is null if the bucket is configured to use an Amazon S3 managed key to encrypt new objects.",
        }),
    ).exactOptional(),
    type: TypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The server-side encryption algorithm that's used by default to encrypt objects that are added to the bucket. Possible values are:</p> <ul><li><p>AES256 - New objects are encrypted with an Amazon S3 managed key. They use SSE-S3 encryption.</p></li> <li><p>aws:kms - New objects are encrypted with an KMS key (kmsMasterKeyId), either an Amazon Web Services managed key or a customer managed key. They use SSE-KMS encryption.</p></li> <li><p>NONE - The bucket's default encryption settings don't specify server-side encryption behavior for new objects.</p></li></ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
    required: [],
  })
  .openapi('BucketServerSideEncryption')

const SharedAccessSchema = z
  .enum(['EXTERNAL', 'INTERNAL', 'NOT_SHARED', 'UNKNOWN'])
  .openapi('SharedAccess')

const KeyValuePairSchema = z
  .object({
    key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.',
        }),
    ).exactOptional(),
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be an empty string.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.',
    required: [],
  })
  .openapi('KeyValuePair')

const ListOfKeyValuePairSchema = z.array(KeyValuePairSchema).openapi('ListOfKeyValuePair')

const ObjectLevelStatisticsSchema = z
  .object({
    fileType: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
    storageClass: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class.",
        }),
    ).exactOptional(),
    total: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata or MatchingBucket object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results. If versioning is enabled for a bucket, storage size values are based on the size of the latest version of each applicable object in the bucket.",
    required: [],
  })
  .openapi('ObjectLevelStatistics')

const BucketMetadataSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that owns the bucket.',
        }),
    ).exactOptional(),
    allowsUnencryptedObjectUploads: AllowsUnencryptedObjectUploadsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul> <p>Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.</p>",
        }),
    ).exactOptional(),
    bucketArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the bucket.' }),
    ).exactOptional(),
    bucketCreatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket.",
        }),
    ).exactOptional(),
    bucketName: StringSchema.and(
      z.any().openapi({ description: 'The name of the bucket.' }),
    ).exactOptional(),
    classifiableObjectCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.',
        }),
    ).exactOptional(),
    classifiableSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>",
        }),
    ).exactOptional(),
    errorCode: BucketMetadataErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The error code for an error that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. If this value is ACCESS_DENIED, Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request. If this value is null, Macie was able to retrieve and process the information.",
        }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A brief description of the error (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.",
        }),
    ).exactOptional(),
    jobDetails: JobDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether any one-time or recurring classification jobs are configured to analyze data in the bucket, and, if so, the details of the job that ran most recently.',
        }),
    ).exactOptional(),
    lastAutomatedDiscoveryTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed data in the bucket while performing automated sensitive data discovery for your account. This value is null if automated sensitive data discovery is currently disabled for your account.',
        }),
    ).exactOptional(),
    lastUpdated: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the bucket.',
        }),
    ).exactOptional(),
    objectCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of objects in the bucket.' }),
    ).exactOptional(),
    objectCountByEncryptionType: ObjectCountByEncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.",
        }),
    ).exactOptional(),
    publicAccess: BucketPublicAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket, and provides information about those settings.',
        }),
    ).exactOptional(),
    region: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services Region that hosts the bucket.' }),
    ).exactOptional(),
    replicationDetails: ReplicationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the bucket is configured to replicate one or more objects to buckets for other Amazon Web Services accounts and, if so, which accounts.',
        }),
    ).exactOptional(),
    sensitivityScore: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). This value is null if automated sensitive data discovery is currently disabled for your account.',
        }),
    ).exactOptional(),
    serverSideEncryption: BucketServerSideEncryptionSchema.and(
      z
        .any()
        .openapi({ description: 'The default server-side encryption settings for the bucket.' }),
    ).exactOptional(),
    sharedAccess: SharedAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether the bucket is shared with another Amazon Web Services account, an Amazon CloudFront origin access identity (OAI), or a CloudFront origin access control (OAC). Possible values are:</p> <ul><li><p>EXTERNAL - The bucket is shared with one or more of the following or any combination of the following: a CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't part of your Amazon Macie organization.</p></li> <li><p>INTERNAL - The bucket is shared with one or more Amazon Web Services accounts that are part of your Amazon Macie organization. It isn't shared with a CloudFront OAI or OAC.</p></li> <li><p>NOT_SHARED - The bucket isn't shared with another Amazon Web Services account, a CloudFront OAI, or a CloudFront OAC.</p></li> <li><p>UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket.</p></li></ul> <p>An <i>Amazon Macie organization</i> is a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.</p>",
        }),
    ).exactOptional(),
    sizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>",
        }),
    ).exactOptional(),
    sizeInBytesCompressed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>",
        }),
    ).exactOptional(),
    tags: ListOfKeyValuePairSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that specifies the tags (keys and values) that are associated with the bucket.',
        }),
    ).exactOptional(),
    unclassifiableObjectCount: ObjectLevelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
    unclassifiableObjectSizeInBytes: ObjectLevelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
    versioning: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether versioning is enabled for the bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process metadata from Amazon S3 for the bucket or the bucket\'s objects, the value for the versioning property is false and the value for most other properties is null. Key exceptions are accountId, bucketArn, bucketCreatedAt, bucketName, lastUpdated, and region. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>',
    required: [],
  })
  .openapi('BucketMetadata')

const ListOfBucketMetadataSchema = z.array(BucketMetadataSchema).openapi('ListOfBucketMetadata')

const DescribeBucketsResponseSchema = z
  .object({
    buckets: ListOfBucketMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each bucket that matches the filter criteria specified in the request.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeBucketsResponse')

const BucketCriteriaAdditionalPropertiesSchema = z
  .object({
    eq: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.',
        }),
    ).exactOptional(),
    gt: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The value for the property is greater than the specified value.',
        }),
    ).exactOptional(),
    gte: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the property is greater than or equal to the specified value.',
        }),
    ).exactOptional(),
    lt: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The value for the property is less than the specified value.' }),
    ).exactOptional(),
    lte: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The value for the property is less than or equal to the specified value.',
        }),
    ).exactOptional(),
    neq: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.",
        }),
    ).exactOptional(),
    prefix: StringSchema.and(
      z.any().openapi({ description: 'The name of the bucket begins with the specified value.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.',
    required: [],
  })
  .openapi('BucketCriteriaAdditionalProperties')

const OrderBySchema = z.enum(['ASC', 'DESC']).openapi('OrderBy')

const JobStatusSchema = z
  .enum(['RUNNING', 'PAUSED', 'CANCELLED', 'COMPLETE', 'IDLE', 'USER_PAUSED'])
  .openapi({ description: 'The status of a classification job. Possible values are:' })
  .openapi('JobStatus')

const JobTypeSchema = z
  .enum(['ONE_TIME', 'SCHEDULED'])
  .openapi({ description: 'The schedule for running a classification job. Valid values are:' })
  .openapi('JobType')

const LastRunErrorStatusCodeSchema = z
  .enum(['NONE', 'ERROR'])
  .openapi({
    description:
      'Specifies whether any account- or bucket-level access errors occurred during the run of a one-time classification job or the most recent run of a recurring classification job. Possible values are:',
  })
  .openapi('LastRunErrorStatusCode')

const LastRunErrorStatusSchema = z
  .object({
    code: LastRunErrorStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run. Possible values are:</p> <ul><li><p>ERROR - One or more errors occurred. Amazon Macie didn't process all the data specified for the job.</p></li> <li><p>NONE - No errors occurred. Macie processed all the data specified for the job.</p></li></ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.',
    required: [],
  })
  .openapi('LastRunErrorStatus')

const ManagedDataIdentifierSelectorSchema = z
  .enum(['ALL', 'EXCLUDE', 'INCLUDE', 'NONE'])
  .openapi({
    description:
      'The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:',
  })
  .openapi('ManagedDataIdentifierSelector')

const S3JobDefinitionSchema = z
  .object({
    bucketCriteria: S3BucketCriteriaForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            "The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which buckets contain objects to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.",
        }),
    ).exactOptional(),
    bucketDefinitions: ListOfS3BucketDefinitionForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each Amazon Web Services account that owns specific S3 buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.",
        }),
    ).exactOptional(),
    scoping: ScopingSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which S3 objects to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which objects to analyze.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.",
    required: [],
  })
  .openapi('S3JobDefinition')

const JobScheduleFrequencySchema = z
  .object({
    dailySchedule: DailyScheduleSchema.and(
      z.any().openapi({ description: 'Specifies a daily recurrence pattern for running the job.' }),
    ).exactOptional(),
    monthlySchedule: MonthlyScheduleSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies a monthly recurrence pattern for running the job.' }),
    ).exactOptional(),
    weeklySchedule: WeeklyScheduleSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies a weekly recurrence pattern for running the job.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies the recurrence pattern for running a classification job.',
    required: [],
  })
  .openapi('JobScheduleFrequency')

const DoubleSchema = z.float64().openapi('Double')

const StatisticsSchema = z
  .object({
    approximateNumberOfObjectsToProcess: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate number of objects that the job has yet to process during its current run.',
        }),
    ).exactOptional(),
    numberOfRuns: DoubleSchema.and(
      z.any().openapi({ description: 'The number of times that the job has run.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides processing statistics for a classification job.',
    required: [],
  })
  .openapi('Statistics')

const TagMapSchema = z
  .record(z.string(), StringSchema)
  .openapi({
    description:
      'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
  })
  .openapi('TagMap')

const UserPausedDetailsSchema = z
  .object({
    jobExpiresAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the job or job run will expire and be cancelled if you don't resume it first.",
        }),
    ).exactOptional(),
    jobImminentExpirationHealthEventArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the Health event that Amazon Macie sent to notify you of the job or job run's pending expiration and cancellation. This value is null if a job has been paused for less than 23 days.",
        }),
    ).exactOptional(),
    jobPausedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when you paused the job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about when a classification job was paused. For a one-time job, this object also specifies when the job will expire and be cancelled if it isn't resumed. For a recurring job, this object also specifies when the paused job run will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.",
    required: [],
  })
  .openapi('UserPausedDetails')

const DescribeClassificationJobResponseSchema = z
  .object({
    allowListIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of unique identifiers, one for each allow list that the job uses when it analyzes data.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that was provided to ensure the idempotency of the request to create the job.',
        }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the job was created.',
        }),
    ).exactOptional(),
    customDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of unique identifiers, one for each custom data identifier that the job uses when it analyzes data. This value is null if the job uses only managed data identifiers to analyze data.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the job.' }),
    ).exactOptional(),
    initialRun: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "For a recurring job, specifies whether you configured the job to analyze all existing, eligible objects immediately after the job was created (true). If you configured the job to analyze only those objects that were created or changed after the job was created and before the job's first scheduled run, this value is false. This value is also false for a one-time job.",
        }),
    ).exactOptional(),
    jobArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the job.' }),
    ).exactOptional(),
    jobId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the job.' }),
    ).exactOptional(),
    jobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>",
        }),
    ).exactOptional(),
    jobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.</p></li></ul>',
        }),
    ).exactOptional(),
    lastRunErrorStatus: LastRunErrorStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.",
        }),
    ).exactOptional(),
    lastRunTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started or, if the job hasn't run yet, when the job was created.",
        }),
    ).exactOptional(),
    managedDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of unique identifiers, one for each managed data identifier that the job is explicitly configured to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type specified for the job (managedDataIdentifierSelector). This value is null if the job's managed data identifier selection type is ALL or the job uses only custom data identifiers (customDataIdentifierIds) to analyze data.",
        }),
    ).exactOptional(),
    managedDataIdentifierSelector: ManagedDataIdentifierSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The selection type that determines which managed data identifiers the job uses to analyze data. Possible values are:</p> <ul><li><p>ALL - Use all the managed data identifiers that Amazon Macie provides.</p></li> <li><p>EXCLUDE - Use all the managed data identifiers that Macie provides except the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>NONE - Don't use any managed data identifiers.</p></li></ul> <p>If this value is null, the job uses all managed data identifiers. If this value is null, ALL, or EXCLUDE for a recurring job, the job also uses new managed data identifiers as they are released.</p>",
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the job.' }),
    ).exactOptional(),
    s3JobDefinition: S3JobDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 buckets that contain the objects to analyze, and the scope of that analysis.',
        }),
    ).exactOptional(),
    samplingPercentage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.',
        }),
    ).exactOptional(),
    scheduleFrequency: JobScheduleFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The recurrence pattern for running the job. This value is null if the job is configured to run only once.',
        }),
    ).exactOptional(),
    statistics: StatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The number of times that the job has run and processing statistics for the job's current run.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the classification job.',
        }),
    ).exactOptional(),
    userPausedDetails: UserPausedDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeClassificationJobResponse')

const DescribeOrganizationConfigurationResponseSchema = z
  .object({
    autoEnable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon Macie is enabled automatically for accounts that are added to the organization.',
        }),
    ).exactOptional(),
    maxAccountLimitReached: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the maximum number of Amazon Macie member accounts are part of the organization.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationConfigurationResponse')

const DisableMacieResponseSchema = z.object({}).openapi('DisableMacieResponse')

const DisableOrganizationAdminAccountResponseSchema = z
  .object({})
  .openapi('DisableOrganizationAdminAccountResponse')

const DisassociateFromAdministratorAccountResponseSchema = z
  .object({})
  .openapi('DisassociateFromAdministratorAccountResponse')

const DisassociateFromMasterAccountResponseSchema = z
  .object({})
  .openapi('DisassociateFromMasterAccountResponse')

const DisassociateMemberResponseSchema = z.object({}).openapi('DisassociateMemberResponse')

const EnableMacieResponseSchema = z.object({}).openapi('EnableMacieResponse')

const EnableOrganizationAdminAccountResponseSchema = z
  .object({})
  .openapi('EnableOrganizationAdminAccountResponse')

const RelationshipStatusSchema = z
  .enum([
    'Enabled',
    'Paused',
    'Invited',
    'Created',
    'Removed',
    'Resigned',
    'EmailVerificationInProgress',
    'EmailVerificationFailed',
    'RegionDisabled',
    'AccountSuspended',
  ])
  .openapi({
    description:
      'The current status of the relationship between an account and an associated Amazon Macie administrator account. Possible values are:',
  })
  .openapi('RelationshipStatus')

const InvitationSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account that sent the invitation.',
        }),
    ).exactOptional(),
    invitationId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the invitation.' }),
    ).exactOptional(),
    invitedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.',
        }),
    ).exactOptional(),
    relationshipStatus: RelationshipStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the relationship between the account that sent the invitation and the account that received the invitation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about an Amazon Macie membership invitation.',
    required: [],
  })
  .openapi('Invitation')

const GetAdministratorAccountResponseSchema = z
  .object({
    administrator: InvitationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the administrator account. If the accounts are associated by an Amazon Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAdministratorAccountResponse')

const AllowListCriteriaSchema = z
  .object({
    regex: StringMin1Max512PatternSSSchema.and(
      z
        .any()
        .openapi({
          description:
            'The regular expression (<i>regex</i>) that defines the text pattern to ignore. The expression can contain as many as 512 characters.',
        }),
    ).exactOptional(),
    s3WordsList: S3WordsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The location and name of the S3 object that lists specific text to ignore.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.",
    required: [],
  })
  .openapi('AllowListCriteria')

const StringMin1Max128PatternSchema = z
  .string()
  .regex(/^.+$/)
  .min(1)
  .max(128)
  .openapi('StringMin1Max128Pattern')

const AllowListStatusCodeSchema = z
  .enum([
    'OK',
    'S3_OBJECT_NOT_FOUND',
    'S3_USER_ACCESS_DENIED',
    'S3_OBJECT_ACCESS_DENIED',
    'S3_THROTTLED',
    'S3_OBJECT_OVERSIZE',
    'S3_OBJECT_EMPTY',
    'UNKNOWN_ERROR',
  ])
  .openapi({
    description:
      'Indicates the current status of an allow list. Depending on the type of criteria that the list specifies, possible values are:',
  })
  .openapi('AllowListStatusCode')

const AllowListStatusSchema = z
  .object({
    code: AllowListStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the allow list. If the list's criteria specify a regular expression (regex), this value is typically OK. Amazon Macie can compile the expression.</p> <p>If the list's criteria specify an S3 object, possible values are:</p> <ul><li><p>OK - Macie can retrieve and parse the contents of the object.</p></li> <li><p>S3_OBJECT_ACCESS_DENIED - Macie isn't allowed to access the object or the object is encrypted with a customer managed KMS key that Macie isn't allowed to use. Check the bucket policy and other permissions settings for the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that Macie is allowed to use.</p></li> <li><p>S3_OBJECT_EMPTY - Macie can retrieve the object but the object doesn't contain any content. Ensure that the object contains the correct entries. Also ensure that the list's criteria specify the correct bucket and object names.</p></li> <li><p>S3_OBJECT_NOT_FOUND - The object doesn't exist in Amazon S3. Ensure that the list's criteria specify the correct bucket and object names.</p></li> <li><p>S3_OBJECT_OVERSIZE - Macie can retrieve the object. However, the object contains too many entries or its storage size exceeds the quota for an allow list. Try breaking the list into multiple files and ensure that each file doesn't exceed any quotas. Then configure list settings in Macie for each file.</p></li> <li><p>S3_THROTTLED - Amazon S3 throttled the request to retrieve the object. Wait a few minutes and then try again.</p></li> <li><p>S3_USER_ACCESS_DENIED - Amazon S3 denied the request to retrieve the object. If the specified object exists, you're not allowed to access it or it's encrypted with an KMS key that you're not allowed to use. Work with your Amazon Web Services administrator to ensure that the list's criteria specify the correct bucket and object names, and you have read access to the bucket and the object. If the object is encrypted, also ensure that it's encrypted with a key that you're allowed to use.</p></li> <li><p>UNKNOWN_ERROR - A transient or internal error occurred when Macie attempted to retrieve or parse the object. Wait a few minutes and then try again. A list can also have this status if it's encrypted with a key that Amazon S3 and Macie can't access or use.</p></li></ul>",
        }),
    ),
    description: StringMin1Max1024PatternSSSchema.and(
      z
        .any()
        .openapi({
          description:
            "A brief description of the status of the allow list. Amazon Macie uses this value to provide additional information about an error that occurred when Macie tried to access and use the list's criteria.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['code'],
    description:
      "Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria.",
  })
  .openapi('AllowListStatus')

const GetAllowListResponseSchema = z
  .object({
    arn: StringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the allow list.' }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.',
        }),
    ).exactOptional(),
    criteria: AllowListCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.',
        }),
    ).exactOptional(),
    description: StringMin1Max512PatternSSSchema.and(
      z.any().openapi({ description: 'The custom description of the allow list.' }),
    ).exactOptional(),
    id: StringMin22Max22PatternAZ0922Schema.and(
      z.any().openapi({ description: 'The unique identifier for the allow list.' }),
    ).exactOptional(),
    name: StringMin1Max128PatternSchema.and(
      z.any().openapi({ description: 'The custom name of the allow list.' }),
    ).exactOptional(),
    status: AllowListStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the allow list, which indicates whether Amazon Macie can access and use the list's criteria.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the allow list.',
        }),
    ).exactOptional(),
    updatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAllowListResponse')

const ClassificationScopeIdSchema = z
  .string()
  .regex(/^[0-9a-z]*$/)
  .openapi({ description: 'The unique identifier the classification scope.' })
  .openapi('ClassificationScopeId')

const TimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Specifies a date and time in UTC and extended ISO 8601 format.' })
  .openapi('Timestamp')

const SensitivityInspectionTemplateIdSchema = z
  .string()
  .openapi({ description: 'The unique identifier for the sensitivity inspection template.' })
  .openapi('SensitivityInspectionTemplateId')

const AutomatedDiscoveryStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:',
  })
  .openapi('AutomatedDiscoveryStatus')

const GetAutomatedDiscoveryConfigurationResponseSchema = z
  .object({
    classificationScopeId: ClassificationScopeIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the classification scope that's used when performing automated sensitive data discovery for the account. The classification scope specifies S3 buckets to exclude from automated sensitive data discovery.",
        }),
    ).exactOptional(),
    disabledAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently disabled for the account. This value is null if automated sensitive data discovery wasn't enabled and subsequently disabled for the account.",
        }),
    ).exactOptional(),
    firstEnabledAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was initially enabled for the account. This value is null if automated sensitive data discovery has never been enabled for the account.',
        }),
    ).exactOptional(),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when automated sensitive data discovery was most recently enabled or disabled for the account.',
        }),
    ).exactOptional(),
    sensitivityInspectionTemplateId: SensitivityInspectionTemplateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the sensitivity inspection template that's used when performing automated sensitive data discovery for the account. The template specifies which allow lists, custom data identifiers, and managed data identifiers to use when analyzing data.",
        }),
    ).exactOptional(),
    status: AutomatedDiscoveryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current status of the automated sensitive data discovery configuration for the account. Possible values are: ENABLED, use the specified settings to perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAutomatedDiscoveryConfigurationResponse')

const BucketCountByEffectivePermissionSchema = z
  .object({
    publiclyAccessible: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets that allow the general public to have read or write access to the bucket.',
        }),
    ).exactOptional(),
    publiclyReadable: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets that allow the general public to have read access to the bucket.',
        }),
    ).exactOptional(),
    publiclyWritable: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets that allow the general public to have write access to the bucket.',
        }),
    ).exactOptional(),
    unknown: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that Amazon Macie wasn't able to evaluate permissions settings for. Macie can't determine whether these buckets are publicly accessible.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the number of S3 buckets that are publicly accessible due to a combination of permissions settings for each bucket.',
    required: [],
  })
  .openapi('BucketCountByEffectivePermission')

const BucketCountByEncryptionTypeSchema = z
  .object({
    kmsManaged: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The total number of buckets whose default encryption settings are configured to encrypt new objects with an Amazon Web Services managed KMS key or a customer managed KMS key. By default, these buckets encrypt new objects automatically using SSE-KMS encryption.</p>',
        }),
    ).exactOptional(),
    s3Managed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets whose default encryption settings are configured to encrypt new objects with an Amazon S3 managed key. By default, these buckets encrypt new objects automatically using SSE-S3 encryption.',
        }),
    ).exactOptional(),
    unencrypted: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that don't specify default server-side encryption behavior for new objects. Default encryption settings aren't configured for these buckets.",
        }),
    ).exactOptional(),
    unknown: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that Amazon Macie doesn't have current encryption metadata for. Macie can't provide current data about the default encryption settings for these buckets.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the number of S3 buckets whose settings do or don\'t specify default server-side encryption behavior for objects that are added to the buckets. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.',
    required: [],
  })
  .openapi('BucketCountByEncryptionType')

const BucketCountPolicyAllowsUnencryptedObjectUploadsSchema = z
  .object({
    allowsUnencryptedObjectUploads: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that don't have a bucket policy or have a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, the policy doesn't require PutObject requests to include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.",
        }),
    ).exactOptional(),
    deniesUnencryptedObjectUploads: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets whose bucket policies require server-side encryption of new objects. PutObject requests for these buckets must include a valid server-side encryption header: the x-amz-server-side-encryption header with a value of AES256 or aws:kms, or the x-amz-server-side-encryption-customer-algorithm header with a value of AES256.',
        }),
    ).exactOptional(),
    unknown: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that Amazon Macie wasn't able to evaluate server-side encryption requirements for. Macie can't determine whether the bucket policies for these buckets require server-side encryption of new objects.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.",
    required: [],
  })
  .openapi('BucketCountPolicyAllowsUnencryptedObjectUploads')

const BucketCountBySharedAccessTypeSchema = z
  .object({
    external: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that are shared with one or more of the following or any combination of the following: an Amazon CloudFront OAI, a CloudFront OAC, or an Amazon Web Services account that isn't in the same Amazon Macie organization.",
        }),
    ).exactOptional(),
    internal: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that are shared with one or more Amazon Web Services accounts in the same Amazon Macie organization. These buckets aren't shared with Amazon CloudFront OAIs or OACs.",
        }),
    ).exactOptional(),
    notShared: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that aren't shared with other Amazon Web Services accounts, Amazon CloudFront OAIs, or CloudFront OACs.",
        }),
    ).exactOptional(),
    unknown: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that Amazon Macie wasn't able to evaluate shared access settings for. Macie can't determine whether these buckets are shared with other Amazon Web Services accounts, Amazon CloudFront OAIs, or CloudFront OACs.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs). In this data, an <i>Amazon Macie organization</i> is defined as a set of Macie accounts that are centrally managed as a group of related accounts through Organizations or by Macie invitation.",
    required: [],
  })
  .openapi('BucketCountBySharedAccessType')

const SensitivityAggregationsSchema = z
  .object({
    classifiableSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>",
        }),
    ).exactOptional(),
    publiclyAccessibleCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.',
        }),
    ).exactOptional(),
    totalCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of buckets.' }),
    ).exactOptional(),
    totalSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets. Each field contains aggregated data for all the buckets that have a sensitivity score (sensitivityScore) of a specified value or within a specified range (BucketStatisticsBySensitivity). If automated sensitive data discovery is currently disabled for your account, the value for each field is 0.',
    required: [],
  })
  .openapi('SensitivityAggregations')

const BucketStatisticsBySensitivitySchema = z
  .object({
    classificationError: SensitivityAggregationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregated statistical data for all buckets that have a sensitivity score of -1.',
        }),
    ).exactOptional(),
    notClassified: SensitivityAggregationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregated statistical data for all buckets that have a sensitivity score of 50.',
        }),
    ).exactOptional(),
    notSensitive: SensitivityAggregationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregated statistical data for all buckets that have a sensitivity score of 1-49.',
        }),
    ).exactOptional(),
    sensitive: SensitivityAggregationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregated statistical data for all buckets that have a sensitivity score of 51-100.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides aggregated statistical data for sensitive data discovery metrics that apply to S3 buckets, grouped by bucket sensitivity score (sensitivityScore). If automated sensitive data discovery is currently disabled for your account, the value for each metric is 0.',
    required: [],
  })
  .openapi('BucketStatisticsBySensitivity')

const GetBucketStatisticsResponseSchema = z
  .object({
    bucketCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of buckets.' }),
    ).exactOptional(),
    bucketCountByEffectivePermission: BucketCountByEffectivePermissionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of buckets that are publicly accessible due to a combination of permissions settings for each bucket.',
        }),
    ).exactOptional(),
    bucketCountByEncryptionType: BucketCountByEncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets whose settings do or don't specify default server-side encryption behavior for objects that are added to the buckets.",
        }),
    ).exactOptional(),
    bucketCountByObjectEncryptionRequirement:
      BucketCountPolicyAllowsUnencryptedObjectUploadsSchema.and(
        z
          .any()
          .openapi({
            description:
              "The total number of buckets whose bucket policies do or don't require server-side encryption of objects when objects are added to the buckets.",
          }),
      ).exactOptional(),
    bucketCountBySharedAccessType: BucketCountBySharedAccessTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of buckets that are or aren't shared with other Amazon Web Services accounts, Amazon CloudFront origin access identities (OAIs), or CloudFront origin access controls (OACs).",
        }),
    ).exactOptional(),
    bucketStatisticsBySensitivity: BucketStatisticsBySensitivitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The aggregated sensitive data discovery statistics for the buckets. If automated sensitive data discovery is currently disabled for your account, the value for each statistic is 0.',
        }),
    ).exactOptional(),
    classifiableObjectCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.',
        }),
    ).exactOptional(),
    classifiableSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of all applicable objects in the buckets.</p>",
        }),
    ).exactOptional(),
    lastUpdated: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved bucket or object metadata from Amazon S3 for the buckets.',
        }),
    ).exactOptional(),
    objectCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of objects in the buckets.' }),
    ).exactOptional(),
    sizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each object in the buckets. This value doesn't reflect the storage size of all versions of the objects in the buckets.</p>",
        }),
    ).exactOptional(),
    sizeInBytesCompressed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the buckets.</p> <p>If versioning is enabled for any of the buckets, this value is based on the size of the latest version of each applicable object in the buckets. This value doesn't reflect the storage size of all versions of the applicable objects in the buckets.</p>",
        }),
    ).exactOptional(),
    unclassifiableObjectCount: ObjectLevelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
    unclassifiableObjectSizeInBytes: ObjectLevelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetBucketStatisticsResponse')

const S3DestinationSchema = z
  .object({
    bucketName: StringSchema.and(z.any().openapi({ description: 'The name of the bucket.' })),
    keyPrefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path prefix to use in the path to the location in the bucket. This prefix specifies where to store classification results in the bucket.',
        }),
    ).exactOptional(),
    kmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the customer managed KMS key to use for encryption of the results. This must be the ARN of an existing, symmetric encryption KMS key that's in the same Amazon Web Services Region as the bucket.",
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 'kmsKeyArn'],
    description:
      'Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.',
  })
  .openapi('S3Destination')

const ClassificationExportConfigurationSchema = z
  .object({
    s3Destination: S3DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.',
    required: [],
  })
  .openapi('ClassificationExportConfiguration')

const GetClassificationExportConfigurationResponseSchema = z
  .object({
    configuration: ClassificationExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location where data classification results are stored, and the encryption settings that are used when storing results in that location.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetClassificationExportConfigurationResponse')

const ClassificationScopeNameSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_\\-]*$/)
  .openapi({ description: 'The name of the classification scope.' })
  .openapi('ClassificationScopeName')

const S3BucketNameSchema = z
  .string()
  .regex(/^[A-Za-z0-9.\-_]{3,255}$/)
  .openapi({ description: 'The name of an S3 bucket.' })
  .openapi('S3BucketName')

const ListOfS3BucketNameSchema = z.array(S3BucketNameSchema).openapi('ListOfS3BucketName')

const S3ClassificationScopeExclusionSchema = z
  .object({
    bucketNames: ListOfS3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings, one for each S3 bucket that is excluded. Each string is the full name of an excluded bucket.',
        }),
    ),
  })
  .openapi({
    required: ['bucketNames'],
    description:
      'Specifies the names of the S3 buckets that are excluded from automated sensitive data discovery.',
  })
  .openapi('S3ClassificationScopeExclusion')

const S3ClassificationScopeSchema = z
  .object({
    excludes: S3ClassificationScopeExclusionSchema.and(
      z.any().openapi({ description: 'The S3 buckets that are excluded.' }),
    ),
  })
  .openapi({
    required: ['excludes'],
    description:
      'Specifies the S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.',
  })
  .openapi('S3ClassificationScope')

const GetClassificationScopeResponseSchema = z
  .object({
    id: ClassificationScopeIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the classification scope.' }),
    ).exactOptional(),
    name: ClassificationScopeNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the classification scope: automated-sensitive-data-discovery.',
        }),
    ).exactOptional(),
    s3: S3ClassificationScopeSchema.and(
      z
        .any()
        .openapi({
          description: 'The S3 buckets that are excluded from automated sensitive data discovery.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetClassificationScopeResponse')

const SeverityLevelListSchema = z
  .array(SeverityLevelSchema)
  .openapi({
    description:
      "<p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.</p>",
  })
  .openapi('SeverityLevelList')

const GetCustomDataIdentifierResponseSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the custom data identifier.' }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.',
        }),
    ).exactOptional(),
    deleted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.",
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the custom data identifier.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the custom data identifier.' }),
    ).exactOptional(),
    ignoreWords: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.',
        }),
    ).exactOptional(),
    keywords: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.",
        }),
    ).exactOptional(),
    maximumMatchDistance: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. Otherwise, Macie excludes the result.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the custom data identifier.' }),
    ).exactOptional(),
    regex: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The regular expression (<i>regex</i>) that defines the pattern to match.',
        }),
    ).exactOptional(),
    severityLevels: SeverityLevelListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the severity that's assigned to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. By default, Amazon Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCustomDataIdentifierResponse')

const GroupCountSchema = z
  .object({
    count: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The total number of findings in the group of query results.' }),
    ).exactOptional(),
    groupKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides a group of results for a query that retrieved aggregated statistical data about findings.',
    required: [],
  })
  .openapi('GroupCount')

const ListOfGroupCountSchema = z.array(GroupCountSchema).openapi('ListOfGroupCount')

const GetFindingStatisticsResponseSchema = z
  .object({
    countsByGroup: ListOfGroupCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each group of findings that matches the filter criteria specified in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFindingStatisticsResponse')

const FindingStatisticsSortAttributeNameSchema = z
  .enum(['groupKey', 'count'])
  .openapi({ description: 'The grouping to sort the results by. Valid values are:' })
  .openapi('FindingStatisticsSortAttributeName')

const FindingCategorySchema = z
  .enum(['CLASSIFICATION', 'POLICY'])
  .openapi({ description: 'The category of the finding. Possible values are:' })
  .openapi('FindingCategory')

const OriginTypeSchema = z
  .enum(['SENSITIVE_DATA_DISCOVERY_JOB', 'AUTOMATED_SENSITIVE_DATA_DISCOVERY'])
  .openapi({
    description:
      'Specifies how Amazon Macie found the sensitive data that produced a finding. Possible values are:',
  })
  .openapi('OriginType')

const CellSchema = z
  .object({
    cellReference: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the cell, as an absolute cell reference, that contains the sensitive data, for example Sheet2!C5 for cell C5 on Sheet2 in a Microsoft Excel workbook. This value is null for CSV and TSV files.',
        }),
    ).exactOptional(),
    column: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The column number of the column that contains the sensitive data. For a Microsoft Excel workbook, this value correlates to the alphabetical character(s) for a column identifier, for example: 1 for column A, 2 for column B, and so on.',
        }),
    ).exactOptional(),
    columnName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the column that contains the sensitive data, if available.',
        }),
    ).exactOptional(),
    row: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The row number of the row that contains the sensitive data.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.',
    required: [],
  })
  .openapi('Cell')

const CellsSchema = z
  .array(CellSchema)
  .openapi({
    description:
      'Specifies the location of occurrences of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.',
  })
  .openapi('Cells')

const RangeSchema = z
  .object({
    end: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of lines from the beginning of the file to the end of the sensitive data.</p> ',
        }),
    ).exactOptional(),
    start: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of lines from the beginning of the file to the beginning of the sensitive data.</p> ',
        }),
    ).exactOptional(),
    startColumn: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of characters, with spaces and starting from 1, from the beginning of the first line that contains the sensitive data (start) to the beginning of the sensitive data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the location of an occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file.',
    required: [],
  })
  .openapi('Range')

const RangesSchema = z
  .array(RangeSchema)
  .openapi({
    description:
      'Specifies the locations of occurrences of sensitive data in a non-binary text file.',
  })
  .openapi('Ranges')

const PageSchema = z
  .object({
    lineRange: RangeSchema.and(
      z.any().openapi({ description: ' <p>Reserved for future use.</p>' }),
    ).exactOptional(),
    offsetRange: RangeSchema.and(
      z.any().openapi({ description: ' <p>Reserved for future use.</p>' }),
    ).exactOptional(),
    pageNumber: LongSchema.and(
      z
        .any()
        .openapi({ description: 'The page number of the page that contains the sensitive data.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.',
    required: [],
  })
  .openapi('Page')

const PagesSchema = z
  .array(PageSchema)
  .openapi({
    description:
      'Specifies the location of occurrences of sensitive data in an Adobe Portable Document Format file.',
  })
  .openapi('Pages')

const RecordSchema = z
  .object({
    jsonPath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The path, as a JSONPath expression, to the sensitive data. For an Avro object container or Parquet file, this is the path to the field in the record (recordIndex) that contains the data. For a JSON or JSON Lines file, this is the path to the field or array that contains the data. If the data is a value in an array, the path also indicates which value contains the data.</p> <p>If Amazon Macie detects sensitive data in the name of any element in the path, Macie omits this field. If the name of an element exceeds 20 characters, Macie truncates the name by removing characters from the beginning of the name. If the resulting full path exceeds 250 characters, Macie also truncates the path, starting with the first element in the path, until the path contains 250 or fewer characters.</p>',
        }),
    ).exactOptional(),
    recordIndex: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'For an Avro object container or Parquet file, the record index, starting from 0, for the record that contains the sensitive data. For a JSON Lines file, the line index, starting from 0, for the line that contains the sensitive data. This value is always 0 for JSON files.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.',
    required: [],
  })
  .openapi('Record')

const RecordsSchema = z
  .array(RecordSchema)
  .openapi({
    description:
      'Specifies the locations of occurrences of sensitive data in an Apache Avro object container or a structured data file.',
  })
  .openapi('Records')

const OccurrencesSchema = z
  .object({
    cells: CellsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. This value is null for all other types of files.</p> <p>Each Cell object specifies a cell or field that contains the sensitive data.</p>',
        }),
    ).exactOptional(),
    lineRanges: RangesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects, one for each occurrence of sensitive data in an email message or a non-binary text file such as an HTML, TXT, or XML file. Each Range object specifies a line or inclusive range of lines that contains the sensitive data, and the position of the data on the specified line or lines.</p> <p>This value is often null for file types that are supported by Cell, Page, or Record objects. Exceptions are the location of sensitive data in: unstructured sections of an otherwise structured file, such as a comment in a file; a malformed file that Amazon Macie analyzes as plain text; and, a CSV or TSV file that has any column names that contain sensitive data.</p>',
        }),
    ).exactOptional(),
    offsetRanges: RangesSchema.and(
      z.any().openapi({ description: ' <p>Reserved for future use.</p>' }),
    ).exactOptional(),
    pages: PagesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. This value is null for all other types of files.</p> <p>Each Page object specifies a page that contains the sensitive data.</p>',
        }),
    ).exactOptional(),
    records: RecordsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects, one for each occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file. This value is null for all other types of files.</p> <p>For an Avro object container or Parquet file, each Record object specifies a record index and the path to a field in a record that contains the sensitive data. For a JSON or JSON Lines file, each Record object specifies the path to a field or array that contains the sensitive data. For a JSON Lines file, it also specifies the index of the line that contains the data.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.',
    required: [],
  })
  .openapi('Occurrences')

const CustomDetectionSchema = z
  .object({
    arn: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the custom data identifier.' }),
    ).exactOptional(),
    count: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of occurrences of the sensitive data that the custom data identifier detected.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the custom data identifier.' }),
    ).exactOptional(),
    occurrences: OccurrencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of 1-15 occurrences of the sensitive data that the custom data identifier detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.',
    required: [],
  })
  .openapi('CustomDetection')

const CustomDetectionsSchema = z
  .array(CustomDetectionSchema)
  .openapi({
    description:
      'Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that each identifier detected.',
  })
  .openapi('CustomDetections')

const CustomDataIdentifiersSchema = z
  .object({
    detections: CustomDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom data identifiers that detected the data, and the number of occurrences of the data that each identifier detected.',
        }),
    ).exactOptional(),
    totalCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of occurrences of the data that was detected by the custom data identifiers and produced the finding.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.',
    required: [],
  })
  .openapi('CustomDataIdentifiers')

const SensitiveDataItemCategorySchema = z
  .enum(['FINANCIAL_INFORMATION', 'PERSONAL_INFORMATION', 'CREDENTIALS', 'CUSTOM_IDENTIFIER'])
  .openapi({
    description:
      'For a finding, the category of sensitive data that was detected and produced the finding. For a managed data identifier, the category of sensitive data that the managed data identifier detects. Possible values are:',
  })
  .openapi('SensitiveDataItemCategory')

const DefaultDetectionSchema = z
  .object({
    count: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of occurrences of the type of sensitive data that was detected.',
        }),
    ).exactOptional(),
    occurrences: OccurrencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of 1-15 occurrences of the sensitive data that was detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.',
        }),
    ).exactOptional(),
    type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of sensitive data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.',
    required: [],
  })
  .openapi('DefaultDetection')

const DefaultDetectionsSchema = z
  .array(DefaultDetectionSchema)
  .openapi({
    description:
      'Provides information about sensitive data that was detected by managed data identifiers and produced a sensitive data finding, and the number of occurrences of each type of sensitive data that was detected.',
  })
  .openapi('DefaultDetections')

const SensitiveDataItemSchema = z
  .object({
    category: SensitiveDataItemCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.',
        }),
    ).exactOptional(),
    detections: DefaultDetectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected, and the location of up to 15 of those occurrences.',
        }),
    ).exactOptional(),
    totalCount: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of occurrences of the sensitive data that was detected.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.',
    required: [],
  })
  .openapi('SensitiveDataItem')

const SensitiveDataSchema = z
  .array(SensitiveDataItemSchema)
  .openapi({
    description:
      'Provides information about the category and number of occurrences of sensitive data that produced a finding.',
  })
  .openapi('SensitiveData')

const ClassificationResultStatusSchema = z
  .object({
    code: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " <p>The status of the finding. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the S3 object that the finding applies to.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of the data in the S3 object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the S3 object that the finding applies to. For example, the object is a file that uses an unsupported format.</p></li></ul>",
        }),
    ).exactOptional(),
    reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A brief description of the status of the finding. This value is null if the status (code) of the finding is COMPLETE.</p> <p>Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding and the affected S3 object. Possible values are:</p> <ul><li><p>ARCHIVE_CONTAINS_UNPROCESSED_FILES - The object is an archive file and Macie extracted and analyzed only some or none of the files in the archive. To determine which files Macie analyzed, if any, refer to the corresponding sensitive data discovery result for the finding (ClassificationDetails.detailedResultsLocation).</p></li> <li><p>ARCHIVE_EXCEEDS_SIZE_LIMIT - The object is an archive file whose total storage size exceeds the size quota for this type of archive.</p></li> <li><p>ARCHIVE_NESTING_LEVEL_OVER_LIMIT - The object is an archive file whose nested depth exceeds the quota for the maximum number of nested levels that Macie analyzes for this type of archive.</p></li> <li><p>ARCHIVE_TOTAL_BYTES_EXTRACTED_OVER_LIMIT - The object is an archive file that exceeds the quota for the maximum amount of data that Macie extracts and analyzes for this type of archive.</p></li> <li><p>ARCHIVE_TOTAL_DOCUMENTS_PROCESSED_OVER_LIMIT - The object is an archive file that contains more than the maximum number of files that Macie extracts and analyzes for this type of archive.</p></li> <li><p>FILE_EXCEEDS_SIZE_LIMIT - The storage size of the object exceeds the size quota for this type of file.</p></li> <li><p>INVALID_ENCRYPTION - The object is encrypted using server-side encryption but Macie isn't allowed to use the key. Macie can't decrypt and analyze the object.</p></li> <li><p>INVALID_KMS_KEY - The object is encrypted with an KMS key that was disabled or is being deleted. Macie can't decrypt and analyze the object.</p></li> <li><p>INVALID_OBJECT_STATE - The object doesn't use a supported Amazon S3 storage class.</p></li> <li><p>JSON_NESTING_LEVEL_OVER_LIMIT - The object contains JSON data and the nested depth of the data exceeds the quota for the number of nested levels that Macie analyzes for this type of file.</p></li> <li><p>MALFORMED_FILE - The object is a malformed or corrupted file. An error occurred when Macie attempted to detect the file's type or extract data from the file.</p></li> <li><p>MALFORMED_OR_FILE_SIZE_EXCEEDS_LIMIT - The object is a Microsoft Office file that is malformed or exceeds the size quota for this type of file. If the file is malformed, an error occurred when Macie attempted to extract data from the file.</p></li> <li><p>NO_SUCH_BUCKET_AVAILABLE - The object was in a bucket that was deleted shortly before or when Macie attempted to analyze the object.</p></li> <li><p>OBJECT_VERSION_MISMATCH - The object was changed while Macie was analyzing it.</p></li> <li><p>OOXML_UNCOMPRESSED_RATIO_EXCEEDS_LIMIT - The object is an Office Open XML file whose compression ratio exceeds the compression quota for this type of file.</p></li> <li><p>OOXML_UNCOMPRESSED_SIZE_EXCEEDS_LIMIT - The object is an Office Open XML file that exceeds the size quota for this type of file.</p></li> <li><p>PERMISSION_DENIED - Macie isn't allowed to access the object. The object's permissions settings prevent Macie from analyzing the object.</p></li> <li><p>SOURCE_OBJECT_NO_LONGER_AVAILABLE - The object was deleted shortly before or when Macie attempted to analyze it.</p></li> <li><p>TIME_CUT_OFF_REACHED - Macie started analyzing the object but additional analysis would exceed the time quota for analyzing an object.</p></li> <li><p>UNABLE_TO_PARSE_FILE - The object is a file that contains structured data and an error occurred when Macie attempted to parse the data.</p></li> <li><p>UNSUPPORTED_FILE_TYPE_EXCEPTION - The object is a file that uses an unsupported file or storage format.</p></li></ul> <p>For information about quotas, supported storage classes, and supported file and storage formats, see <a href=\"https://docs.aws.amazon.com/macie/latest/user/macie-quotas.html\">Quotas</a> and <a href=\"https://docs.aws.amazon.com/macie/latest/user/discovery-supported-storage.html\">Supported storage classes and formats</a> in the <i>Amazon Macie User Guide</i>.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the status of a sensitive data finding.',
    required: [],
  })
  .openapi('ClassificationResultStatus')

const ClassificationResultSchema = z
  .object({
    additionalOccurrences: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether Amazon Macie detected additional occurrences of sensitive data in the S3 object. A finding includes location data for a maximum of 15 occurrences of sensitive data.</p> <p>This value can help you determine whether to investigate additional occurrences of sensitive data in an object. You can do this by referring to the corresponding sensitive data discovery result for the finding (ClassificationDetails.detailedResultsLocation).</p>',
        }),
    ).exactOptional(),
    customDataIdentifiers: CustomDataIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom data identifiers that detected the sensitive data and the number of occurrences of the data that they detected.',
        }),
    ).exactOptional(),
    mimeType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of content, as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe Portable Document Format file.',
        }),
    ).exactOptional(),
    sensitiveData: SensitiveDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The category, types, and number of occurrences of the sensitive data that produced the finding.',
        }),
    ).exactOptional(),
    sizeClassified: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total size, in bytes, of the data that the finding applies to.',
        }),
    ).exactOptional(),
    status: ClassificationResultStatusSchema.and(
      z.any().openapi({ description: 'The status of the finding.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.',
    required: [],
  })
  .openapi('ClassificationResult')

const ClassificationDetailsSchema = z
  .object({
    detailedResultsLocation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the folder or file in Amazon S3 that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.',
        }),
    ).exactOptional(),
    jobArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.',
        }),
    ).exactOptional(),
    jobId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the classification job that produced the finding. This value is null if the origin of the finding (originType) is AUTOMATED_SENSITIVE_DATA_DISCOVERY.',
        }),
    ).exactOptional(),
    originType: OriginTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how Amazon Macie found the sensitive data that produced the finding. Possible values are: SENSITIVE_DATA_DISCOVERY_JOB, for a classification job; and, AUTOMATED_SENSITIVE_DATA_DISCOVERY, for automated sensitive data discovery.',
        }),
    ).exactOptional(),
    result: ClassificationResultSchema.and(
      z.any().openapi({ description: 'The status and other details of the finding.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a sensitive data finding and the details of the finding.',
    required: [],
  })
  .openapi('ClassificationDetails')

const FindingActionTypeSchema = z
  .literal('AWS_API_CALL')
  .openapi({
    description:
      'The type of action that occurred for the resource and produced the policy finding:',
  })
  .openapi('FindingActionType')

const ApiCallDetailsSchema = z
  .object({
    api: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the operation that was invoked most recently and produced the finding.',
        }),
    ).exactOptional(),
    apiServiceName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL of the Amazon Web Service that provides the operation, for example: s3.amazonaws.com.',
        }),
    ).exactOptional(),
    firstSeen: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.',
        }),
    ).exactOptional(),
    lastSeen: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an API operation that an entity invoked for an affected resource.',
    required: [],
  })
  .openapi('ApiCallDetails')

const FindingActionSchema = z
  .object({
    actionType: FindingActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of action that occurred for the affected resource. This value is typically AWS_API_CALL, which indicates that an entity invoked an API operation for the resource.',
        }),
    ).exactOptional(),
    apiCallDetails: ApiCallDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The invocation details of the API operation that an entity invoked for the affected resource, if the value for the actionType property is AWS_API_CALL.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an action that occurred for a resource and produced a policy finding.',
    required: [],
  })
  .openapi('FindingAction')

const DomainDetailsSchema = z
  .object({
    domainName: StringSchema.and(
      z.any().openapi({ description: 'The name of the domain.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the domain name of the device that an entity used to perform an action on an affected resource.',
    required: [],
  })
  .openapi('DomainDetails')

const IpCitySchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the city.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the city that an IP address originated from.',
    required: [],
  })
  .openapi('IpCity')

const IpCountrySchema = z
  .object({
    code: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The two-character code, in ISO 3166-1 alpha-2 format, for the country that the IP address originated from. For example, US for the United States.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the country that the IP address originated from.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the country that an IP address originated from.',
    required: [],
  })
  .openapi('IpCountry')

const IpGeoLocationSchema = z
  .object({
    lat: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The latitude coordinate of the location, rounded to four decimal places.',
        }),
    ).exactOptional(),
    lon: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The longitude coordinate of the location, rounded to four decimal places.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides geographic coordinates that indicate where a specified IP address originated from.',
    required: [],
  })
  .openapi('IpGeoLocation')

const IpOwnerSchema = z
  .object({
    asn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The autonomous system number (ASN) for the autonomous system that included the IP address.',
        }),
    ).exactOptional(),
    asnOrg: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.",
        }),
    ).exactOptional(),
    isp: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the internet service provider (ISP) that owned the IP address.',
        }),
    ).exactOptional(),
    org: StringSchema.and(
      z.any().openapi({ description: 'The name of the organization that owned the IP address.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the registered owner of an IP address.',
    required: [],
  })
  .openapi('IpOwner')

const IpAddressDetailsSchema = z
  .object({
    ipAddressV4: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Internet Protocol version 4 (IPv4) address of the device.' }),
    ).exactOptional(),
    ipCity: IpCitySchema.and(
      z.any().openapi({ description: 'The city that the IP address originated from.' }),
    ).exactOptional(),
    ipCountry: IpCountrySchema.and(
      z.any().openapi({ description: 'The country that the IP address originated from.' }),
    ).exactOptional(),
    ipGeoLocation: IpGeoLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The geographic coordinates of the location that the IP address originated from.',
        }),
    ).exactOptional(),
    ipOwner: IpOwnerSchema.and(
      z.any().openapi({ description: 'The registered owner of the IP address.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the IP address of the device that an entity used to perform an action on an affected resource.',
    required: [],
  })
  .openapi('IpAddressDetails')

const SessionContextAttributesSchema = z
  .object({
    creationDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and ISO 8601 format, when the credentials were issued.',
        }),
    ).exactOptional(),
    mfaAuthenticated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the context in which temporary security credentials were issued to an entity.',
    required: [],
  })
  .openapi('SessionContextAttributes')

const SessionIssuerSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the source account, Identity and Access Management (IAM) user, or role that was used to get the credentials.',
        }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the temporary security credentials, such as Root, IAMUser, or Role.',
        }),
    ).exactOptional(),
    userName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the source and type of temporary security credentials that were issued to an entity.',
    required: [],
  })
  .openapi('SessionIssuer')

const SessionContextSchema = z
  .object({
    attributes: SessionContextAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the credentials were issued, and whether the credentials were authenticated with a multi-factor authentication (MFA) device.',
        }),
    ).exactOptional(),
    sessionIssuer: SessionIssuerSchema.and(
      z
        .any()
        .openapi({
          description: 'The source and type of credentials that were issued to the entity.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a session that was created for an entity that performed an action by using temporary security credentials.',
    required: [],
  })
  .openapi('SessionContext')

const AssumedRoleSchema = z
  .object({
    accessKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services access key ID that identifies the credentials.',
        }),
    ).exactOptional(),
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    sessionContext: SessionContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the session that was created for the credentials, including the entity that issued the session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the Security Token Service (STS) API.',
    required: [],
  })
  .openapi('AssumedRole')

const AwsAccountSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the Amazon Web Services account.' }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the entity that performed the action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.',
    required: [],
  })
  .openapi('AwsAccount')

const AwsServiceSchema = z
  .object({
    invokedBy: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Amazon Web Service that performed the action.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an Amazon Web Service that performed an action on an affected resource.',
    required: [],
  })
  .openapi('AwsService')

const FederatedUserSchema = z
  .object({
    accessKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services access key ID that identifies the credentials.',
        }),
    ).exactOptional(),
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that owns the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the entity that was used to get the credentials.',
        }),
    ).exactOptional(),
    sessionContext: SessionContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of the session that was created for the credentials, including the entity that issued the session.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.',
    required: [],
  })
  .openapi('FederatedUser')

const IamUserSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique identifier for the Amazon Web Services account that's associated with the IAM user who performed the action.",
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.',
        }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the IAM user who performed the action.',
        }),
    ).exactOptional(),
    userName: StringSchema.and(
      z.any().openapi({ description: 'The username of the IAM user who performed the action.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.',
    required: [],
  })
  .openapi('IamUser')

const UserIdentityRootSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the Amazon Web Services account.' }),
    ).exactOptional(),
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.',
        }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the entity that performed the action.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.',
    required: [],
  })
  .openapi('UserIdentityRoot')

const UserIdentityTypeSchema = z
  .enum(['AssumedRole', 'IAMUser', 'FederatedUser', 'Root', 'AWSAccount', 'AWSService'])
  .openapi({
    description:
      'The type of entity that performed the action on the affected resource. Possible values are:',
  })
  .openapi('UserIdentityType')

const UserIdentitySchema = z
  .object({
    assumedRole: AssumedRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action was performed with temporary security credentials that were obtained using the AssumeRole operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.',
        }),
    ).exactOptional(),
    awsAccount: AwsAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action was performed using the credentials for another Amazon Web Services account, the details of that account.',
        }),
    ).exactOptional(),
    awsService: AwsServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action was performed by an Amazon Web Services account that belongs to an Amazon Web Service, the name of the service.',
        }),
    ).exactOptional(),
    federatedUser: FederatedUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the Security Token Service (STS) API, the identifiers, session context, and other details about the identity.',
        }),
    ).exactOptional(),
    iamUser: IamUserSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action was performed using the credentials for an Identity and Access Management (IAM) user, the name and other details about the user.',
        }),
    ).exactOptional(),
    root: UserIdentityRootSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the action was performed using the credentials for your Amazon Web Services account, the details of your account.',
        }),
    ).exactOptional(),
    type: UserIdentityTypeSchema.and(
      z.any().openapi({ description: 'The type of entity that performed the action.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the type and other characteristics of an entity that performed an action on an affected resource.',
    required: [],
  })
  .openapi('UserIdentity')

const FindingActorSchema = z
  .object({
    domainDetails: DomainDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name of the device that the entity used to perform the action on the affected resource.',
        }),
    ).exactOptional(),
    ipAddressDetails: IpAddressDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographic location for the IP address.',
        }),
    ).exactOptional(),
    userIdentity: UserIdentitySchema.and(
      z
        .any()
        .openapi({
          description:
            'The type and other characteristics of the entity that performed the action on the affected resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about an entity that performed an action that produced a policy finding for a resource.',
    required: [],
  })
  .openapi('FindingActor')

const PolicyDetailsSchema = z
  .object({
    action: FindingActionSchema.and(
      z.any().openapi({ description: 'The action that produced the finding.' }),
    ).exactOptional(),
    actor: FindingActorSchema.and(
      z
        .any()
        .openapi({
          description: 'The entity that performed the action that produced the finding.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides the details of a policy finding.', required: [] })
  .openapi('PolicyDetails')

const EncryptionTypeSchema = z
  .enum(['NONE', 'AES256', 'aws:kms', 'UNKNOWN'])
  .openapi({
    description:
      'The server-side encryption algorithm that was used to encrypt an S3 object or is used by default to encrypt objects that are added to an S3 bucket. Possible values are:',
  })
  .openapi('EncryptionType')

const ServerSideEncryptionSchema = z
  .object({
    encryptionType: EncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The server-side encryption algorithm that's used when storing data in the bucket or object. If default encryption settings aren't configured for the bucket or the object isn't encrypted using server-side encryption, this value is NONE.",
        }),
    ).exactOptional(),
    kmsMasterKeyId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) or unique identifier (key ID) for the KMS key that's used to encrypt data in the bucket or the object. This value is null if an KMS key isn't used to encrypt the data.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the default server-side encryption settings for an S3 bucket or the encryption settings for an S3 object.',
    required: [],
  })
  .openapi('ServerSideEncryption')

const S3BucketOwnerSchema = z
  .object({
    displayName: StringSchema.and(
      z.any().openapi({ description: 'The display name of the account that owns the bucket.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The canonical user ID for the account that owns the bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the Amazon Web Services account that owns an S3 bucket.',
    required: [],
  })
  .openapi('S3BucketOwner')

const KeyValuePairListSchema = z
  .array(KeyValuePairSchema)
  .openapi({
    description:
      'Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.',
  })
  .openapi('KeyValuePairList')

const S3BucketSchema = z
  .object({
    allowsUnencryptedObjectUploads: AllowsUnencryptedObjectUploadsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether the bucket policy for the bucket requires server-side encryption of objects when objects are added to the bucket. Possible values are:</p> <ul><li><p>FALSE - The bucket policy requires server-side encryption of new objects. PutObject requests must include a valid server-side encryption header.</p></li> <li><p>TRUE - The bucket doesn't have a bucket policy or it has a bucket policy that doesn't require server-side encryption of new objects. If a bucket policy exists, it doesn't require PutObject requests to include a valid server-side encryption header.</p></li> <li><p>UNKNOWN - Amazon Macie can't determine whether the bucket policy requires server-side encryption of new objects.</p></li></ul> <p>Valid server-side encryption headers are: x-amz-server-side-encryption with a value of AES256 or aws:kms, and x-amz-server-side-encryption-customer-algorithm with a value of AES256.</p>",
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the bucket.' }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the bucket was created. This value can also indicate when changes such as edits to the bucket's policy were most recently made to the bucket, relative to when the finding was created or last updated.",
        }),
    ).exactOptional(),
    defaultServerSideEncryption: ServerSideEncryptionSchema.and(
      z
        .any()
        .openapi({ description: 'The default server-side encryption settings for the bucket.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the bucket.' }),
    ).exactOptional(),
    owner: S3BucketOwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The display name and canonical user ID for the Amazon Web Services account that owns the bucket.',
        }),
    ).exactOptional(),
    publicAccess: BucketPublicAccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'The permissions settings that determine whether the bucket is publicly accessible.',
        }),
    ).exactOptional(),
    tags: KeyValuePairListSchema.and(
      z.any().openapi({ description: 'The tags that are associated with the bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the S3 bucket that a finding applies to.',
    required: [],
  })
  .openapi('S3Bucket')

const StorageClassSchema = z
  .enum([
    'STANDARD',
    'REDUCED_REDUNDANCY',
    'STANDARD_IA',
    'INTELLIGENT_TIERING',
    'DEEP_ARCHIVE',
    'ONEZONE_IA',
    'GLACIER',
    'GLACIER_IR',
    'OUTPOSTS',
  ])
  .openapi({ description: 'The storage class of the S3 object. Possible values are:' })
  .openapi('StorageClass')

const S3ObjectSchema = z
  .object({
    bucketArn: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the bucket that contains the object.',
        }),
    ).exactOptional(),
    eTag: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.',
        }),
    ).exactOptional(),
    extension: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file name extension of the object. If the object doesn\'t have a file name extension, this value is "".',
        }),
    ).exactOptional(),
    key: StringSchema.and(
      z.any().openapi({ description: "The full key (name) that's assigned to the object." }),
    ).exactOptional(),
    lastModified: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the object was last modified.',
        }),
    ).exactOptional(),
    path: StringSchema.and(
      z.any().openapi({ description: 'The path to the object, including the full key (name).' }),
    ).exactOptional(),
    publicAccess: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.',
        }),
    ).exactOptional(),
    serverSideEncryption: ServerSideEncryptionSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of server-side encryption that was used to encrypt the object.',
        }),
    ).exactOptional(),
    size: LongSchema.and(
      z.any().openapi({ description: 'The total storage size, in bytes, of the object.' }),
    ).exactOptional(),
    storageClass: StorageClassSchema.and(
      z.any().openapi({ description: 'The storage class of the object.' }),
    ).exactOptional(),
    tags: KeyValuePairListSchema.and(
      z.any().openapi({ description: 'The tags that are associated with the object.' }),
    ).exactOptional(),
    versionId: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the affected version of the object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the S3 object that a finding applies to.',
    required: [],
  })
  .openapi('S3Object')

const ResourcesAffectedSchema = z
  .object({
    s3Bucket: S3BucketSchema.and(
      z.any().openapi({ description: 'The details of the S3 bucket that the finding applies to.' }),
    ).exactOptional(),
    s3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'The details of the S3 object that the finding applies to.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information about the resources that a finding applies to.',
    required: [],
  })
  .openapi('ResourcesAffected')

const SeverityDescriptionSchema = z
  .enum(['Low', 'Medium', 'High'])
  .openapi({
    description: "The qualitative representation of the finding's severity. Possible values are:",
  })
  .openapi('SeverityDescription')

const SeveritySchema = z
  .object({
    description: SeverityDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The qualitative representation of the finding's severity, ranging from Low (least severe) to High (most severe).",
        }),
    ).exactOptional(),
    score: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The numerical representation of the finding's severity, ranging from 1 (least severe) to 3 (most severe).",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "Provides the numerical and qualitative representations of a finding's severity.",
    required: [],
  })
  .openapi('Severity')

const FindingSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that the finding applies to. This is typically the account that owns the affected resource.',
        }),
    ).exactOptional(),
    archived: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the finding is archived (suppressed).' }),
    ).exactOptional(),
    category: FindingCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.',
        }),
    ).exactOptional(),
    classificationDetails: ClassificationDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of a sensitive data finding. This value is null for a policy finding.',
        }),
    ).exactOptional(),
    count: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered unique.',
        }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when Amazon Macie created the finding.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the finding.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.',
        }),
    ).exactOptional(),
    partition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services partition that Amazon Macie created the finding in.',
        }),
    ).exactOptional(),
    policyDetails: PolicyDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details of a policy finding. This value is null for a sensitive data finding.',
        }),
    ).exactOptional(),
    region: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region that Amazon Macie created the finding in.',
        }),
    ).exactOptional(),
    resourcesAffected: ResourcesAffectedSchema.and(
      z.any().openapi({ description: 'The resources that the finding applies to.' }),
    ).exactOptional(),
    sample: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the finding is a sample finding. A <i>sample finding</i> is a finding that uses example data to demonstrate what a finding might contain.',
        }),
    ).exactOptional(),
    schemaVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the schema that was used to define the data structures in the finding.',
        }),
    ).exactOptional(),
    severity: SeveritySchema.and(
      z.any().openapi({ description: 'The severity level and score for the finding.' }),
    ).exactOptional(),
    title: StringSchema.and(
      z.any().openapi({ description: 'The brief description of the finding.' }),
    ).exactOptional(),
    type: FindingTypeSchema.and(
      z.any().openapi({ description: 'The type of the finding.' }),
    ).exactOptional(),
    updatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when Amazon Macie last updated the finding. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides the details of a finding.', required: [] })
  .openapi('Finding')

const ListOfFindingSchema = z.array(FindingSchema).openapi('ListOfFinding')

const GetFindingsResponseSchema = z
  .object({
    findings: ListOfFindingSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each finding that matches the criteria specified in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFindingsResponse')

const FindingsFilterActionSchema = z
  .enum(['ARCHIVE', 'NOOP'])
  .openapi({
    description:
      'The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:',
  })
  .openapi('FindingsFilterAction')

const FindingCriteriaSchema = z
  .object({
    criterion: CriterionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A condition that specifies the property, operator, and one or more values to use to filter the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.',
    required: [],
  })
  .openapi('FindingCriteria')

const GetFindingsFilterResponseSchema = z
  .object({
    action: FindingsFilterActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The action that's performed on findings that match the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.",
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the filter.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the filter.' }),
    ).exactOptional(),
    findingCriteria: FindingCriteriaSchema.and(
      z.any().openapi({ description: "The criteria that's used to filter findings." }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the filter.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the filter.' }),
    ).exactOptional(),
    position: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFindingsFilterResponse')

const SecurityHubConfigurationSchema = z
  .object({
    publishClassificationFindings: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to publish sensitive data findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all sensitive data findings that weren't suppressed by a findings filter. The default value is false.",
        }),
    ),
    publishPolicyFindings: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to publish policy findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all new and updated policy findings that weren't suppressed by a findings filter. The default value is true.",
        }),
    ),
  })
  .openapi({
    required: ['publishPolicyFindings', 'publishClassificationFindings'],
    description:
      'Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.',
  })
  .openapi('SecurityHubConfiguration')

const GetFindingsPublicationConfigurationResponseSchema = z
  .object({
    securityHubConfiguration: SecurityHubConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that determine which findings are published to Security Hub.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFindingsPublicationConfigurationResponse')

const GetInvitationsCountResponseSchema = z
  .object({
    invitationsCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of invitations that were received by the account, not including the currently accepted invitation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInvitationsCountResponse')

const FindingPublishingFrequencySchema = z
  .enum(['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS'])
  .openapi({
    description:
      'The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:',
  })
  .openapi('FindingPublishingFrequency')

const MacieStatusSchema = z
  .enum(['PAUSED', 'ENABLED'])
  .openapi({ description: 'The status of an Amazon Macie account. Valid values are:' })
  .openapi('MacieStatus')

const GetMacieSessionResponseSchema = z
  .object({
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.',
        }),
    ).exactOptional(),
    findingPublishingFrequency: FindingPublishingFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).',
        }),
    ).exactOptional(),
    serviceRole: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in Amazon Web Services resources for the account.',
        }),
    ).exactOptional(),
    status: MacieStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Macie activities are enabled for the account.',
        }),
    ).exactOptional(),
    updatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the Amazon Macie account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMacieSessionResponse')

const GetMasterAccountResponseSchema = z
  .object({
    master: InvitationSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) The Amazon Web Services account ID for the administrator account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent to establish the relationship between the accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMasterAccountResponse')

const GetMemberResponseSchema = z
  .object({
    accountId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID for the account.' }),
    ).exactOptional(),
    administratorAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID for the administrator account.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the account.' }),
    ).exactOptional(),
    email: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address for the account. This value is null if the account is associated with the administrator account through Organizations.',
        }),
    ).exactOptional(),
    invitedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.",
        }),
    ).exactOptional(),
    masterAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    relationshipStatus: RelationshipStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the relationship between the account and the administrator account.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.',
        }),
    ).exactOptional(),
    updatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMemberResponse')

const ResourceStatisticsSchema = z
  .object({
    totalBytesClassified: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total amount of data, in bytes, that Amazon Macie has analyzed in the bucket.',
        }),
    ).exactOptional(),
    totalDetections: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of occurrences of sensitive data that Amazon Macie has found in the bucket's objects. This includes occurrences that are currently suppressed by the sensitivity scoring settings for the bucket (totalDetectionsSuppressed).",
        }),
    ).exactOptional(),
    totalDetectionsSuppressed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of occurrences of sensitive data that are currently suppressed by the sensitivity scoring settings for the bucket. These represent occurrences of sensitive data that Amazon Macie found in the bucket's objects, but the occurrences were manually suppressed. By default, suppressed occurrences are excluded from the bucket's sensitivity score.",
        }),
    ).exactOptional(),
    totalItemsClassified: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The total number of objects that Amazon Macie has analyzed in the bucket.',
        }),
    ).exactOptional(),
    totalItemsSensitive: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of the bucket's objects that Amazon Macie has found sensitive data in.",
        }),
    ).exactOptional(),
    totalItemsSkipped: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total number of objects that Amazon Macie hasn't analyzed in the bucket due to an error or issue. For example, the object is a malformed file. This value includes objects that Macie hasn't analyzed for reasons reported by other statistics in the ResourceStatistics object.</p> ",
        }),
    ).exactOptional(),
    totalItemsSkippedInvalidEncryption: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie hasn't analyzed in the bucket because the objects are encrypted with a key that Macie isn't allowed to use.",
        }),
    ).exactOptional(),
    totalItemsSkippedInvalidKms: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie hasn't analyzed in the bucket because the objects are encrypted with an KMS key that was disabled or deleted.",
        }),
    ).exactOptional(),
    totalItemsSkippedPermissionDenied: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie hasn't analyzed in the bucket because Macie isn't allowed to access the objects.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides statistical data for sensitive data discovery metrics that apply to an S3 bucket that Amazon Macie monitors and analyzes for your account. The statistics capture the results of automated sensitive data discovery activities that Macie has performed for the bucket. The data is available only if automated sensitive data discovery is currently enabled for your account.',
    required: [],
  })
  .openapi('ResourceStatistics')

const GetResourceProfileResponseSchema = z
  .object({
    profileUpdatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently recalculated sensitive data discovery statistics and details for the bucket. If the bucket's sensitivity score is calculated automatically, this includes the score.",
        }),
    ).exactOptional(),
    sensitivityScore: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). By default, this score is calculated automatically based on the amount of data that Amazon Macie has analyzed in the bucket and the amount of sensitive data that Macie has found in the bucket.',
        }),
    ).exactOptional(),
    sensitivityScoreOverridden: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether the bucket's current sensitivity score was set manually. If this value is true, the score was manually changed to 100. If this value is false, the score was calculated automatically by Amazon Macie.",
        }),
    ).exactOptional(),
    statistics: ResourceStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sensitive data discovery statistics for the bucket. The statistics capture the results of automated sensitive data discovery activities that Amazon Macie has performed for the bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceProfileResponse')

const StringMin1Max2048Schema = z.string().min(1).max(2048).openapi('StringMin1Max2048')

const RevealStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi({
    description:
      'The status of the configuration for retrieving occurrences of sensitive data reported by findings. Valid values are:',
  })
  .openapi('RevealStatus')

const RevealConfigurationSchema = z
  .object({
    kmsKeyId: StringMin1Max2048Schema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN), ID, or alias of the KMS key to use to encrypt sensitive data that's retrieved. The key must be an existing, customer managed, symmetric encryption key that's in the same Amazon Web Services Region as the Amazon Macie account.</p> <p>If this value specifies an alias, it must include the following prefix: alias/. If this value specifies a key that's owned by another Amazon Web Services account, it must specify the ARN of the key or the ARN of the key's alias.</p>",
        }),
    ).exactOptional(),
    status: RevealStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the configuration for the Amazon Macie account. In a request, valid values are: ENABLED, enable the configuration for the account; and, DISABLED, disable the configuration for the account. In a response, possible values are: ENABLED, the configuration is currently enabled for the account; and, DISABLED, the configuration is currently disabled for the account.',
        }),
    ),
  })
  .openapi({
    required: ['status'],
    description:
      'Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.',
  })
  .openapi('RevealConfiguration')

const GetRevealConfigurationResponseSchema = z
  .object({
    configuration: RevealConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current configuration settings and the status of the configuration for the account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRevealConfigurationResponse')

const StringMin1Max128Schema = z.string().min(1).max(128).openapi('StringMin1Max128')

const DetectedDataDetailsSchema = z
  .object({
    value: StringMin1Max128Schema.and(
      z
        .any()
        .openapi({
          description:
            'An occurrence of the specified type of sensitive data. Each occurrence can contain 1-128 characters.',
        }),
    ),
  })
  .openapi({
    required: ['value'],
    description:
      'Specifies 1-10 occurrences of a specific type of sensitive data reported by a finding.',
  })
  .openapi('DetectedDataDetails')

const ListOfDetectedDataDetailsSchema = z
  .array(DetectedDataDetailsSchema)
  .openapi('ListOfDetectedDataDetails')

const SensitiveDataOccurrencesSchema = z
  .record(z.string(), ListOfDetectedDataDetailsSchema)
  .openapi({
    description:
      'Specifies a type of sensitive data reported by a finding and provides occurrences of the specified type of sensitive data.',
  })
  .openapi('SensitiveDataOccurrences')

const RevealRequestStatusSchema = z
  .enum(['SUCCESS', 'PROCESSING', 'ERROR'])
  .openapi({
    description:
      'The status of a request to retrieve occurrences of sensitive data reported by a finding. Possible values are:',
  })
  .openapi('RevealRequestStatus')

const GetSensitiveDataOccurrencesResponseSchema = z
  .object({
    error: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If an error occurred when Amazon Macie attempted to retrieve occurrences of sensitive data reported by the finding, a description of the error that occurred. This value is null if the status (status) of the request is PROCESSING or SUCCESS.',
        }),
    ).exactOptional(),
    sensitiveDataOccurrences: SensitiveDataOccurrencesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that specifies 1-100 types of sensitive data reported by the finding and, for each type, 1-10 occurrences of sensitive data.',
        }),
    ).exactOptional(),
    status: RevealRequestStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the request to retrieve occurrences of sensitive data reported by the finding. Possible values are:</p> <ul><li><p>ERROR - An error occurred when Amazon Macie attempted to locate, retrieve, or encrypt the sensitive data. The error value indicates the nature of the error that occurred.</p></li> <li><p>PROCESSING - Macie is processing the request.</p></li> <li><p>SUCCESS - Macie successfully located, retrieved, and encrypted the sensitive data.</p></li></ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSensitiveDataOccurrencesResponse')

const UnprocessableEntityExceptionSchema = z.any().openapi('UnprocessableEntityException')

const AvailabilityCodeSchema = z
  .enum(['AVAILABLE', 'UNAVAILABLE'])
  .openapi({
    description:
      'Specifies whether occurrences of sensitive data can be retrieved for a finding. Possible values are:',
  })
  .openapi('AvailabilityCode')

const UnavailabilityReasonCodeSchema = z
  .enum([
    'OBJECT_EXCEEDS_SIZE_QUOTA',
    'UNSUPPORTED_OBJECT_TYPE',
    'UNSUPPORTED_FINDING_TYPE',
    'INVALID_CLASSIFICATION_RESULT',
    'OBJECT_UNAVAILABLE',
  ])
  .openapi({
    description:
      "Specifies why occurrences of sensitive data can't be retrieved for a finding. Possible values are:",
  })
  .openapi('UnavailabilityReasonCode')

const ListOfUnavailabilityReasonCodeSchema = z
  .array(UnavailabilityReasonCodeSchema)
  .min(0)
  .openapi('ListOfUnavailabilityReasonCode')

const GetSensitiveDataOccurrencesAvailabilityResponseSchema = z
  .object({
    code: AvailabilityCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether occurrences of sensitive data can be retrieved for the finding. Possible values are: AVAILABLE, the sensitive data can be retrieved; and, UNAVAILABLE, the sensitive data can't be retrieved. If this value is UNAVAILABLE, the reasons array indicates why the data can't be retrieved.",
        }),
    ).exactOptional(),
    reasons: ListOfUnavailabilityReasonCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies why occurrences of sensitive data can't be retrieved for the finding. Possible values are:</p> <ul><li><p>INVALID_CLASSIFICATION_RESULT - Amazon Macie can't verify the location of the sensitive data to retrieve. There isn't a corresponding sensitive data discovery result for the finding. Or the sensitive data discovery result specified by the ClassificationDetails.detailedResultsLocation field of the finding isn't available, is malformed or corrupted, or uses an unsupported storage format.</p></li> <li><p>OBJECT_EXCEEDS_SIZE_QUOTA - The storage size of the affected S3 object exceeds the size quota for retrieving occurrences of sensitive data.</p></li> <li><p>OBJECT_UNAVAILABLE - The affected S3 object isn't available. The object might have been renamed, moved, or deleted. Or the object was changed after Macie created the finding.</p></li> <li><p>UNSUPPORTED_FINDING_TYPE - The specified finding isn't a sensitive data finding.</p></li> <li><p>UNSUPPORTED_OBJECT_TYPE - The affected S3 object uses a file or storage format that Macie doesn't support for retrieving occurrences of sensitive data.</p></li></ul> <p>This value is null if sensitive data can be retrieved for the finding.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSensitiveDataOccurrencesAvailabilityResponse')

const SensitivityInspectionTemplateExcludesSchema = z
  .object({
    managedDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of unique identifiers, one for each managed data identifier to exclude. To retrieve a list of valid values, use the ListManagedDataIdentifiers operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.',
    required: [],
  })
  .openapi('SensitivityInspectionTemplateExcludes')

const SensitivityInspectionTemplateIncludesSchema = z
  .object({
    allowListIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of unique identifiers, one for each allow list to include.',
        }),
    ).exactOptional(),
    customDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of unique identifiers, one for each custom data identifier to include.',
        }),
    ).exactOptional(),
    managedDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of unique identifiers, one for each managed data identifier to include.</p> <p>Amazon Macie uses these managed data identifiers in addition to managed data identifiers that are subsequently released and recommended for automated sensitive data discovery. To retrieve a list of valid values for the managed data identifiers that are currently available, use the ListManagedDataIdentifiers operation.</p> <para/>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.',
    required: [],
  })
  .openapi('SensitivityInspectionTemplateIncludes')

const GetSensitivityInspectionTemplateResponseSchema = z
  .object({
    description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the template.' }),
    ).exactOptional(),
    excludes: SensitivityInspectionTemplateExcludesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' <p>The managed data identifiers that are explicitly excluded (not used) when analyzing data.</p>',
        }),
    ).exactOptional(),
    includes: SensitivityInspectionTemplateIncludesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allow lists, custom data identifiers, and managed data identifiers that are included (used) when analyzing data.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the template: automated-sensitive-data-discovery.' }),
    ).exactOptional(),
    sensitivityInspectionTemplateId: SensitivityInspectionTemplateIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the template.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSensitivityInspectionTemplateResponse')

const CurrencySchema = z
  .literal('USD')
  .openapi({
    description:
      'The type of currency that the data for an Amazon Macie usage metric is reported in. Possible values are:',
  })
  .openapi('Currency')

const UnitSchema = z.literal('TERABYTES').openapi('Unit')

const ServiceLimitSchema = z
  .object({
    isServiceLimited: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the account has met the quota that corresponds to the metric specified by the UsageByAccount.type field in the response.',
        }),
    ).exactOptional(),
    unit: UnitSchema.and(
      z
        .any()
        .openapi({
          description: 'The unit of measurement for the value specified by the value field.',
        }),
    ).exactOptional(),
    value: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the metric specified by the UsageByAccount.type field in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies a current quota for an Amazon Macie account.', required: [] })
  .openapi('ServiceLimit')

const UsageTypeSchema = z
  .enum([
    'DATA_INVENTORY_EVALUATION',
    'SENSITIVE_DATA_DISCOVERY',
    'AUTOMATED_SENSITIVE_DATA_DISCOVERY',
    'AUTOMATED_OBJECT_MONITORING',
  ])
  .openapi({
    description: 'The name of an Amazon Macie usage metric for an account. Possible values are:',
  })
  .openapi('UsageType')

const UsageByAccountSchema = z
  .object({
    currency: CurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of currency that the value for the metric (estimatedCost) is reported in.',
        }),
    ).exactOptional(),
    estimatedCost: StringSchema.and(
      z.any().openapi({ description: 'The estimated value for the metric.' }),
    ).exactOptional(),
    serviceLimit: ServiceLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current value for the quota that corresponds to the metric specified by the type field.',
        }),
    ).exactOptional(),
    type: UsageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.',
    required: [],
  })
  .openapi('UsageByAccount')

const ListOfUsageByAccountSchema = z.array(UsageByAccountSchema).openapi('ListOfUsageByAccount')

const UsageRecordSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that the data applies to.',
        }),
    ).exactOptional(),
    automatedDiscoveryFreeTrialStartDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the free trial of automated sensitive data discovery started for the account. If the account is a member account in an organization, this value is the same as the value for the organization's Amazon Macie administrator account.",
        }),
    ).exactOptional(),
    freeTrialStartDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for the account.',
        }),
    ).exactOptional(),
    usage: ListOfUsageByAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides quota and aggregated usage data for an Amazon Macie account.',
    required: [],
  })
  .openapi('UsageRecord')

const ListOfUsageRecordSchema = z.array(UsageRecordSchema).openapi('ListOfUsageRecord')

const TimeRangeSchema = z
  .enum(['MONTH_TO_DATE', 'PAST_30_DAYS'])
  .openapi({
    description:
      'An inclusive time period that Amazon Macie usage data applies to. Possible values are:',
  })
  .openapi('TimeRange')

const GetUsageStatisticsResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
    records: ListOfUsageRecordSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contains the results of the query. Each object contains the data for an account that matches the filter criteria specified in the request.',
        }),
    ).exactOptional(),
    timeRange: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUsageStatisticsResponse')

const UsageStatisticsFilterComparatorSchema = z
  .enum(['GT', 'GTE', 'LT', 'LTE', 'EQ', 'NE', 'CONTAINS'])
  .openapi({
    description:
      'The operator to use in a condition that filters the results of a query for Amazon Macie account quotas and usage data. Valid values are:',
  })
  .openapi('UsageStatisticsFilterComparator')

const UsageStatisticsFilterKeySchema = z
  .enum(['accountId', 'serviceLimit', 'freeTrialStartDate', 'total'])
  .openapi({
    description:
      'The field to use in a condition that filters the results of a query for Amazon Macie account quotas and usage data. Valid values are:',
  })
  .openapi('UsageStatisticsFilterKey')

const UsageStatisticsFilterSchema = z
  .object({
    comparator: UsageStatisticsFilterComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.',
        }),
    ).exactOptional(),
    key: UsageStatisticsFilterKeySchema.and(
      z.any().openapi({ description: 'The field to use in the condition.' }),
    ).exactOptional(),
    values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value.</p> <p>Valid values for each supported field are:</p> <ul><li><p>accountId - The unique identifier for an Amazon Web Services account.</p></li> <li><p>freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for an account.</p></li> <li><p>serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota.</p></li> <li><p>total - A string that represents the current estimated cost for an account.</p></li></ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a condition for filtering the results of a query for quota and usage data for one or more Amazon Macie accounts.',
    required: [],
  })
  .openapi('UsageStatisticsFilter')

const UsageStatisticsSortKeySchema = z
  .enum(['accountId', 'total', 'serviceLimitValue', 'freeTrialStartDate'])
  .openapi({
    description:
      'The field to use to sort the results of a query for Amazon Macie account quotas and usage data. Valid values are:',
  })
  .openapi('UsageStatisticsSortKey')

const UsageTotalSchema = z
  .object({
    currency: CurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of currency that the value for the metric (estimatedCost) is reported in.',
        }),
    ).exactOptional(),
    estimatedCost: StringSchema.and(
      z.any().openapi({ description: 'The estimated value for the metric.' }),
    ).exactOptional(),
    type: UsageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the metric. Possible values are: AUTOMATED_OBJECT_MONITORING, to monitor S3 objects for automated sensitive data discovery; AUTOMATED_SENSITIVE_DATA_DISCOVERY, to analyze S3 objects for automated sensitive data discovery; DATA_INVENTORY_EVALUATION, to monitor S3 buckets; and, SENSITIVE_DATA_DISCOVERY, to run classification jobs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.',
    required: [],
  })
  .openapi('UsageTotal')

const ListOfUsageTotalSchema = z.array(UsageTotalSchema).openapi('ListOfUsageTotal')

const GetUsageTotalsResponseSchema = z
  .object({
    timeRange: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The inclusive time period that the usage data applies to. Possible values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days.',
        }),
    ).exactOptional(),
    usageTotals: ListOfUsageTotalSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetUsageTotalsResponse')

const AllowListSummarySchema = z
  .object({
    arn: StringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the allow list.' }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.',
        }),
    ).exactOptional(),
    description: StringMin1Max512PatternSSSchema.and(
      z.any().openapi({ description: 'The custom description of the allow list.' }),
    ).exactOptional(),
    id: StringMin22Max22PatternAZ0922Schema.and(
      z.any().openapi({ description: 'The unique identifier for the allow list.' }),
    ).exactOptional(),
    name: StringMin1Max128PatternSchema.and(
      z.any().openapi({ description: 'The custom name of the allow list.' }),
    ).exactOptional(),
    updatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides a subset of information about an allow list.', required: [] })
  .openapi('AllowListSummary')

const ListOfAllowListSummarySchema = z
  .array(AllowListSummarySchema)
  .openapi('ListOfAllowListSummary')

const ListAllowListsResponseSchema = z
  .object({
    allowLists: ListOfAllowListSummarySchema.and(
      z.any().openapi({ description: 'An array of objects, one for each allow list.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAllowListsResponse')

const JobSummarySchema = z
  .object({
    bucketCriteria: S3BucketCriteriaForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            "The property- and tag-based conditions that determine which S3 buckets are included or excluded from the job's analysis. Each time the job runs, the job uses these criteria to determine which buckets to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.",
        }),
    ).exactOptional(),
    bucketDefinitions: ListOfS3BucketDefinitionForJobSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each Amazon Web Services account that owns specific S3 buckets for the job to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.",
        }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the job was created.',
        }),
    ).exactOptional(),
    jobId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the job.' }),
    ).exactOptional(),
    jobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current status of the job. Possible values are:</p> <ul><li><p>CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days.</p></li> <li><p>COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs.</p></li> <li><p>IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs.</p></li> <li><p>PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for.</p></li> <li><p>RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress.</p></li> <li><p>USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>",
        }),
    ).exactOptional(),
    jobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schedule for running the job. Possible values are:</p> <ul><li><p>ONE_TIME - The job runs only once.</p></li> <li><p>SCHEDULED - The job runs on a daily, weekly, or monthly basis.</p></li></ul>',
        }),
    ).exactOptional(),
    lastRunErrorStatus: LastRunErrorStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.",
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the job.' }),
    ).exactOptional(),
    userPausedDetails: UserPausedDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a classification job, including the current status of the job.',
    required: [],
  })
  .openapi('JobSummary')

const ListOfJobSummarySchema = z.array(JobSummarySchema).openapi('ListOfJobSummary')

const ListClassificationJobsResponseSchema = z
  .object({
    items: ListOfJobSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each job that matches the filter criteria specified in the request.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClassificationJobsResponse')

const ListJobsFilterKeySchema = z
  .enum(['jobType', 'jobStatus', 'createdAt', 'name'])
  .openapi({ description: 'The property to use to filter the results. Valid values are:' })
  .openapi('ListJobsFilterKey')

const ListJobsFilterTermSchema = z
  .object({
    comparator: JobComparatorSchema.and(
      z.any().openapi({ description: 'The operator to use to filter the results.' }),
    ).exactOptional(),
    key: ListJobsFilterKeySchema.and(
      z.any().openapi({ description: 'The property to use to filter the results.' }),
    ).exactOptional(),
    values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'An array that lists one or more values to use to filter the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.',
    required: [],
  })
  .openapi('ListJobsFilterTerm')

const ListOfListJobsFilterTermSchema = z
  .array(ListJobsFilterTermSchema)
  .openapi('ListOfListJobsFilterTerm')

const ListJobsSortAttributeNameSchema = z
  .enum(['createdAt', 'jobStatus', 'name', 'jobType'])
  .openapi({ description: 'The property to sort the results by. Valid values are:' })
  .openapi('ListJobsSortAttributeName')

const ClassificationScopeSummarySchema = z
  .object({
    id: ClassificationScopeIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the classification scope.' }),
    ).exactOptional(),
    name: ClassificationScopeNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the classification scope: automated-sensitive-data-discovery.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about the classification scope for an Amazon Macie account. Macie uses the scope's settings when it performs automated sensitive data discovery for the account.",
    required: [],
  })
  .openapi('ClassificationScopeSummary')

const ListOfClassificationScopeSummarySchema = z
  .array(ClassificationScopeSummarySchema)
  .openapi('ListOfClassificationScopeSummary')

const NextTokenSchema = z
  .string()
  .regex(/^.*$/)
  .openapi({ description: 'Specifies which page of results to return in a paginated response.' })
  .openapi('NextToken')

const ListClassificationScopesResponseSchema = z
  .object({
    classificationScopes: ListOfClassificationScopeSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that specifies the unique identifier and name of the classification scope for the account.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListClassificationScopesResponse')

const CustomDataIdentifierSummarySchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the custom data identifier.' }),
    ).exactOptional(),
    createdAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The custom description of the custom data identifier.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the custom data identifier.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the custom data identifier.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a custom data identifier.', required: [] })
  .openapi('CustomDataIdentifierSummary')

const ListOfCustomDataIdentifierSummarySchema = z
  .array(CustomDataIdentifierSummarySchema)
  .openapi('ListOfCustomDataIdentifierSummary')

const ListCustomDataIdentifiersResponseSchema = z
  .object({
    items: ListOfCustomDataIdentifierSummarySchema.and(
      z.any().openapi({ description: 'An array of objects, one for each custom data identifier.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCustomDataIdentifiersResponse')

const ListFindingsResponseSchema = z
  .object({
    findingIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings, where each string is the unique identifier for a finding that matches the filter criteria specified in the request.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFindingsResponse')

const FindingsFilterListItemSchema = z
  .object({
    action: FindingsFilterActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The action that's performed on findings that match the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.",
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the filter.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the filter.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The custom name of the filter.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a findings filter.', required: [] })
  .openapi('FindingsFilterListItem')

const ListOfFindingsFilterListItemSchema = z
  .array(FindingsFilterListItemSchema)
  .openapi('ListOfFindingsFilterListItem')

const ListFindingsFiltersResponseSchema = z
  .object({
    findingsFilterListItems: ListOfFindingsFilterListItemSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each filter that's associated with the account.",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFindingsFiltersResponse')

const ListOfInvitationSchema = z.array(InvitationSchema).openapi('ListOfInvitation')

const ListInvitationsResponseSchema = z
  .object({
    invitations: ListOfInvitationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each invitation that was received by the account.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListInvitationsResponse')

const ManagedDataIdentifierSummarySchema = z
  .object({
    category: SensitiveDataItemCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of sensitive data that the managed data identifier detects: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers.',
        }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the managed data identifier. This is a string that describes the type of sensitive data that the managed data identifier detects. For example: OPENSSH_PRIVATE_KEY for OpenSSH private keys, CREDIT_CARD_NUMBER for credit card numbers, or USA_PASSPORT_NUMBER for US passport numbers.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.',
    required: [],
  })
  .openapi('ManagedDataIdentifierSummary')

const ListOfManagedDataIdentifierSummarySchema = z
  .array(ManagedDataIdentifierSummarySchema)
  .openapi('ListOfManagedDataIdentifierSummary')

const ListManagedDataIdentifiersResponseSchema = z
  .object({
    items: ListOfManagedDataIdentifierSummarySchema.and(
      z
        .any()
        .openapi({ description: 'An array of objects, one for each managed data identifier.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListManagedDataIdentifiersResponse')

const MemberSchema = z
  .object({
    accountId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID for the account.' }),
    ).exactOptional(),
    administratorAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services account ID for the administrator account.',
        }),
    ).exactOptional(),
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the account.' }),
    ).exactOptional(),
    email: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address for the account. This value is null if the account is associated with the administrator account through Organizations.',
        }),
    ).exactOptional(),
    invitedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            "The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.",
        }),
    ).exactOptional(),
    masterAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.',
        }),
    ).exactOptional(),
    relationshipStatus: RelationshipStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the relationship between the account and the administrator account.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.',
        }),
    ).exactOptional(),
    updatedAt: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about an account that's associated with an Amazon Macie administrator account.",
    required: [],
  })
  .openapi('Member')

const ListOfMemberSchema = z.array(MemberSchema).openapi('ListOfMember')

const ListMembersResponseSchema = z
  .object({
    members: ListOfMemberSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each account that's associated with the administrator account and matches the criteria specified in the request.",
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMembersResponse')

const AdminStatusSchema = z
  .enum(['ENABLED', 'DISABLING_IN_PROGRESS'])
  .openapi({
    description:
      'The current status of an account as the delegated Amazon Macie administrator account for an organization in Organizations. Possible values are:',
  })
  .openapi('AdminStatus')

const AdminAccountSchema = z
  .object({
    accountId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID for the account.' }),
    ).exactOptional(),
    status: AdminStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the account as the delegated Amazon Macie administrator account for the organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about the delegated Amazon Macie administrator account for an organization in Organizations.',
    required: [],
  })
  .openapi('AdminAccount')

const ListOfAdminAccountSchema = z.array(AdminAccountSchema).openapi('ListOfAdminAccount')

const ListOrganizationAdminAccountsResponseSchema = z
  .object({
    adminAccounts: ListOfAdminAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOrganizationAdminAccountsResponse')

const ResourceProfileArtifactSchema = z
  .object({
    arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the object.' }),
    ),
    classificationResultStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the analysis. Possible values are:</p> <ul><li><p>COMPLETE - Amazon Macie successfully completed its analysis of the object.</p></li> <li><p>PARTIAL - Macie analyzed only a subset of data in the object. For example, the object is an archive file that contains files in an unsupported format.</p></li> <li><p>SKIPPED - Macie wasn't able to analyze the object. For example, the object is a malformed file.</p></li></ul>",
        }),
    ),
    sensitive: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether Amazon Macie found sensitive data in the object.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['classificationResultStatus', 'arn'],
    description:
      'Provides information about an S3 object that Amazon Macie selected for analysis while performing automated sensitive data discovery for an S3 bucket, and the status and results of the analysis. This information is available only if automated sensitive data discovery is currently enabled for your account.',
  })
  .openapi('ResourceProfileArtifact')

const ListOfResourceProfileArtifactSchema = z
  .array(ResourceProfileArtifactSchema)
  .openapi('ListOfResourceProfileArtifact')

const ListResourceProfileArtifactsResponseSchema = z
  .object({
    artifacts: ListOfResourceProfileArtifactSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of objects, one for each of 1-100 S3 objects that Amazon Macie selected for analysis.</p> <p>If Macie has analyzed more than 100 objects in the bucket, Macie populates the array based on the value for the ResourceProfileArtifact.sensitive field for an object: true (sensitive), followed by false (not sensitive). Macie then populates any remaining items in the array with information about objects where the value for the ResourceProfileArtifact.classificationResultStatus field is SKIPPED.</p>',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceProfileArtifactsResponse')

const DataIdentifierTypeSchema = z
  .enum(['CUSTOM', 'MANAGED'])
  .openapi({
    description:
      'The type of data identifier that detected a specific type of sensitive data in an S3 bucket. Possible values are:',
  })
  .openapi('DataIdentifierType')

const DetectionSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the sensitive data was detected by a custom data identifier, the Amazon Resource Name (ARN) of the custom data identifier that detected the data. Otherwise, this value is null.',
        }),
    ).exactOptional(),
    count: LongSchema.and(
      z.any().openapi({ description: 'The total number of occurrences of the sensitive data.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the custom data identifier or managed data identifier that detected the sensitive data. For additional details about a specified managed data identifier, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom data identifier or managed data identifier that detected the sensitive data. For a managed data identifier, this value is the same as the unique identifier (id).',
        }),
    ).exactOptional(),
    suppressed: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether occurrences of this type of sensitive data are excluded (true) or included (false) in the bucket's sensitivity score.",
        }),
    ).exactOptional(),
    type: DataIdentifierTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for the bucket. The information also specifies the custom data identifier or managed data identifier that detected the data. This information is available only if automated sensitive data discovery is currently enabled for your account.',
    required: [],
  })
  .openapi('Detection')

const ListOfDetectionSchema = z.array(DetectionSchema).openapi('ListOfDetection')

const ListResourceProfileDetectionsResponseSchema = z
  .object({
    detections: ListOfDetectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each type of sensitive data that Amazon Macie found in the bucket. Each object reports the number of occurrences of the specified type and provides information about the custom data identifier or managed data identifier that detected the data.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceProfileDetectionsResponse')

const SensitivityInspectionTemplatesEntrySchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the sensitivity inspection template.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the sensitivity inspection template: automated-sensitive-data-discovery.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Provides information about the sensitivity inspection template for an Amazon Macie account. Macie uses the template's settings when it performs automated sensitive data discovery for the account.",
    required: [],
  })
  .openapi('SensitivityInspectionTemplatesEntry')

const ListOfSensitivityInspectionTemplatesEntrySchema = z
  .array(SensitivityInspectionTemplatesEntrySchema)
  .openapi('ListOfSensitivityInspectionTemplatesEntry')

const ListSensitivityInspectionTemplatesResponseSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
    sensitivityInspectionTemplates: ListOfSensitivityInspectionTemplatesEntrySchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that specifies the unique identifier and name of the sensitivity inspection template for the account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSensitivityInspectionTemplatesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs that specifies which tags (keys and values) are associated with the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const PutClassificationExportConfigurationResponseSchema = z
  .object({
    configuration: ClassificationExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutClassificationExportConfigurationResponse')

const PutFindingsPublicationConfigurationResponseSchema = z
  .object({})
  .openapi('PutFindingsPublicationConfigurationResponse')

const MatchingBucketSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the Amazon Web Services account that owns the bucket.',
        }),
    ).exactOptional(),
    bucketName: StringSchema.and(
      z.any().openapi({ description: 'The name of the bucket.' }),
    ).exactOptional(),
    classifiableObjectCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.',
        }),
    ).exactOptional(),
    classifiableSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.</p> <p>If versioning is enabled for the bucket, Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>",
        }),
    ).exactOptional(),
    errorCode: BucketMetadataErrorCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The error code for an error that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. If this value is ACCESS_DENIED, Macie doesn't have permission to retrieve the information. For example, the bucket has a restrictive bucket policy and Amazon S3 denied the request. If this value is null, Macie was able to retrieve and process the information.",
        }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A brief description of the error (errorCode) that prevented Amazon Macie from retrieving and processing information about the bucket and the bucket's objects. This value is null if Macie was able to retrieve and process the information.",
        }),
    ).exactOptional(),
    jobDetails: JobDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether any one-time or recurring classification jobs are configured to analyze objects in the bucket, and, if so, the details of the job that ran most recently.',
        }),
    ).exactOptional(),
    lastAutomatedDiscoveryTime: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently analyzed data in the bucket while performing automated sensitive data discovery for your account. This value is null if automated sensitive data discovery is currently disabled for your account.',
        }),
    ).exactOptional(),
    objectCount: LongSchema.and(
      z.any().openapi({ description: 'The total number of objects in the bucket.' }),
    ).exactOptional(),
    objectCountByEncryptionType: ObjectCountByEncryptionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.",
        }),
    ).exactOptional(),
    sensitivityScore: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current sensitivity score for the bucket, ranging from -1 (classification error) to 100 (sensitive). This value is null if automated sensitive data discovery is currently disabled for your account.',
        }),
    ).exactOptional(),
    sizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each object in the bucket. This value doesn't reflect the storage size of all versions of each object in the bucket.</p>",
        }),
    ).exactOptional(),
    sizeInBytesCompressed: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The total storage size, in bytes, of the objects that are compressed (.gz, .gzip, .zip) files in the bucket.</p> <p>If versioning is enabled for the bucket, Amazon Macie calculates this value based on the size of the latest version of each applicable object in the bucket. This value doesn't reflect the storage size of all versions of each applicable object in the bucket.</p>",
        }),
    ).exactOptional(),
    unclassifiableObjectCount: ObjectLevelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
    unclassifiableObjectSizeInBytes: ObjectLevelStatisticsSchema.and(
      z
        .any()
        .openapi({
          description:
            "The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes for your account. By default, object count and storage size values include data for object parts that are the result of incomplete multipart uploads. For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/monitoring-s3-how-it-works.html">How Macie monitors Amazon S3 data security</a> in the <i>Amazon Macie User Guide</i>.</p> <p>If an error occurs when Macie attempts to retrieve and process information about the bucket or the bucket\'s objects, the value for most of these properties is null. Key exceptions are accountId and bucketName. To identify the cause of the error, refer to the errorCode and errorMessage values.</p>',
    required: [],
  })
  .openapi('MatchingBucket')

const MatchingResourceSchema = z
  .object({
    matchingBucket: MatchingBucketSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of an S3 bucket that Amazon Macie monitors and analyzes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides statistical data and other information about an Amazon Web Services resource that Amazon Macie monitors and analyzes for your account.',
    required: [],
  })
  .openapi('MatchingResource')

const ListOfMatchingResourceSchema = z
  .array(MatchingResourceSchema)
  .openapi('ListOfMatchingResource')

const SearchResourcesResponseSchema = z
  .object({
    matchingResources: ListOfMatchingResourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each resource that matches the filter criteria specified in the request.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResourcesResponse')

const SearchResourcesComparatorSchema = z
  .enum(['EQ', 'NE'])
  .openapi({
    description:
      'The operator to use in a condition that filters the results of a query. Valid values are:',
  })
  .openapi('SearchResourcesComparator')

const SearchResourcesSimpleCriterionKeySchema = z
  .enum([
    'ACCOUNT_ID',
    'S3_BUCKET_NAME',
    'S3_BUCKET_EFFECTIVE_PERMISSION',
    'S3_BUCKET_SHARED_ACCESS',
  ])
  .openapi({
    description:
      'The property to use in a condition that filters the query results. Valid values are:',
  })
  .openapi('SearchResourcesSimpleCriterionKey')

const SearchResourcesSimpleCriterionSchema = z
  .object({
    comparator: SearchResourcesComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).',
        }),
    ).exactOptional(),
    key: SearchResourcesSimpleCriterionKeySchema.and(
      z.any().openapi({ description: 'The property to use in the condition.' }),
    ).exactOptional(),
    values: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array that lists one or more values to use in the condition. If you specify multiple values, Amazon Macie uses OR logic to join the values. Valid values for each supported property (key) are:</p> <ul><li><p>ACCOUNT_ID - A string that represents the unique identifier for the Amazon Web Services account that owns the resource.</p></li> <li><p>S3_BUCKET_EFFECTIVE_PERMISSION - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketpublicaccess-effectivepermission">BucketPublicAccess.effectivePermission</a> property of an S3 bucket.</p></li> <li><p>S3_BUCKET_NAME - A string that represents the name of an S3 bucket.</p></li> <li><p>S3_BUCKET_SHARED_ACCESS - A string that represents an enumerated value that Macie defines for the <a href="https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html#datasources-s3-prop-bucketmetadata-sharedaccess">BucketMetadata.sharedAccess</a> property of an S3 bucket.</p></li></ul> <p>Values are case sensitive. Also, Macie doesn\'t support use of partial values or wildcard characters in values.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.',
    required: [],
  })
  .openapi('SearchResourcesSimpleCriterion')

const SearchResourcesTagCriterionPairSchema = z
  .object({
    key: StringSchema.and(
      z.any().openapi({ description: 'The value for the tag key to use in the condition.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'The tag value to use in the condition.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.",
    required: [],
  })
  .openapi('SearchResourcesTagCriterionPair')

const ListOfSearchResourcesTagCriterionPairSchema = z
  .array(SearchResourcesTagCriterionPairSchema)
  .openapi('ListOfSearchResourcesTagCriterionPair')

const SearchResourcesTagCriterionSchema = z
  .object({
    comparator: SearchResourcesComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            'The operator to use in the condition. Valid values are EQ (equals) and NE (not equals).',
        }),
    ).exactOptional(),
    tagValues: ListOfSearchResourcesTagCriterionPairSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tag keys, tag values, or tag key and value pairs to use in the condition.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.',
    required: [],
  })
  .openapi('SearchResourcesTagCriterion')

const SearchResourcesCriteriaSchema = z
  .object({
    simpleCriterion: SearchResourcesSimpleCriterionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property-based condition that defines a property, operator, and one or more values for including or excluding resources from the results.',
        }),
    ).exactOptional(),
    tagCriterion: SearchResourcesTagCriterionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A tag-based condition that defines an operator and tag keys, tag values, or tag key and value pairs for including or excluding resources from the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.',
    required: [],
  })
  .openapi('SearchResourcesCriteria')

const ListOfSearchResourcesCriteriaSchema = z
  .array(SearchResourcesCriteriaSchema)
  .openapi('ListOfSearchResourcesCriteria')

const SearchResourcesCriteriaBlockSchema = z
  .object({
    and: ListOfSearchResourcesCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each property- or tag-based condition that includes or excludes resources from the query results. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.',
    required: [],
  })
  .openapi('SearchResourcesCriteriaBlock')

const SearchResourcesSortAttributeNameSchema = z
  .enum([
    'ACCOUNT_ID',
    'RESOURCE_NAME',
    'S3_CLASSIFIABLE_OBJECT_COUNT',
    'S3_CLASSIFIABLE_SIZE_IN_BYTES',
  ])
  .openapi({ description: 'The property to sort the query results by. Valid values are:' })
  .openapi('SearchResourcesSortAttributeName')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TestCustomDataIdentifierResponseSchema = z
  .object({
    matchCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of occurrences of sample text that matched the criteria specified by the custom data identifier.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestCustomDataIdentifierResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateAllowListResponseSchema = z
  .object({
    arn: StringMin71Max89PatternArnAwsAwsCnAwsUsGovMacie2AZ19920D12AllowListAZ0922Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the allow list.' }),
    ).exactOptional(),
    id: StringMin22Max22PatternAZ0922Schema.and(
      z.any().openapi({ description: 'The unique identifier for the allow list.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAllowListResponse')

const UpdateAutomatedDiscoveryConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateAutomatedDiscoveryConfigurationResponse')

const UpdateClassificationJobResponseSchema = z
  .object({})
  .openapi('UpdateClassificationJobResponse')

const UpdateClassificationScopeResponseSchema = z
  .object({})
  .openapi('UpdateClassificationScopeResponse')

const ClassificationScopeUpdateOperationSchema = z
  .enum(['ADD', 'REPLACE', 'REMOVE'])
  .openapi({
    description:
      'Specifies how to apply changes to the S3 bucket exclusion list defined by the classification scope for an Amazon Macie account. Valid values are:',
  })
  .openapi('ClassificationScopeUpdateOperation')

const S3ClassificationScopeExclusionUpdateSchema = z
  .object({
    bucketNames: ListOfS3BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Depending on the value specified for the update operation (ClassificationScopeUpdateOperation), an array of strings that: lists the names of buckets to add or remove from the list, or specifies a new set of bucket names that overwrites all existing names in the list. Each string must be the full name of an S3 bucket. Values are case sensitive.',
        }),
    ),
    operation: ClassificationScopeUpdateOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how to apply the changes to the exclusion list. Valid values are:</p> <ul><li><p>ADD - Append the specified bucket names to the current list.</p></li> <li><p>REMOVE - Remove the specified bucket names from the current list.</p></li> <li><p>REPLACE - Overwrite the current list with the specified list of bucket names. If you specify this value, Amazon Macie removes all existing names from the list and adds all the specified names to the list.</p></li></ul>',
        }),
    ),
  })
  .openapi({
    required: ['bucketNames', 'operation'],
    description:
      'Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account.',
  })
  .openapi('S3ClassificationScopeExclusionUpdate')

const UpdateFindingsFilterResponseSchema = z
  .object({
    arn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the filter that was updated.' }),
    ).exactOptional(),
    id: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the filter that was updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFindingsFilterResponse')

const UpdateMacieSessionResponseSchema = z.object({}).openapi('UpdateMacieSessionResponse')

const UpdateMemberSessionResponseSchema = z.object({}).openapi('UpdateMemberSessionResponse')

const UpdateOrganizationConfigurationResponseSchema = z
  .object({})
  .openapi('UpdateOrganizationConfigurationResponse')

const UpdateResourceProfileResponseSchema = z.object({}).openapi('UpdateResourceProfileResponse')

const UpdateResourceProfileDetectionsResponseSchema = z
  .object({})
  .openapi('UpdateResourceProfileDetectionsResponse')

const SuppressDataIdentifierSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the custom data identifier or managed data identifier that detected the type of sensitive data to exclude or include in the score.',
        }),
    ).exactOptional(),
    type: DataIdentifierTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of data identifier that detected the sensitive data. Possible values are: CUSTOM, for a custom data identifier; and, MANAGED, for a managed data identifier.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to start excluding or including in an S3 bucket's sensitivity score.",
    required: [],
  })
  .openapi('SuppressDataIdentifier')

const UpdateRevealConfigurationResponseSchema = z
  .object({
    configuration: RevealConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new configuration settings and the status of the configuration for the account.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRevealConfigurationResponse')

const UpdateSensitivityInspectionTemplateResponseSchema = z
  .object({})
  .openapi('UpdateSensitivityInspectionTemplateResponse')

const AcceptInvitationRequestSchema = z
  .object({
    administratorAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account that sent the invitation.',
        }),
    ).exactOptional(),
    invitationId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the invitation to accept.' }),
    ),
    masterAccount: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '(Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['invitationId'], title: 'AcceptInvitationRequest' })
  .openapi('AcceptInvitationRequest')

const AccountDetailSchema = z
  .object({
    accountId: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID for the account.' }),
    ),
    email: StringSchema.and(z.any().openapi({ description: 'The email address for the account.' })),
  })
  .openapi({
    required: ['email', 'accountId'],
    description:
      'Specifies the details of an account to associate with an Amazon Macie administrator account.',
  })
  .openapi('AccountDetail')

const BatchGetCustomDataIdentifiersRequestSchema = z
  .object({
    ids: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'BatchGetCustomDataIdentifiersRequest', required: [] })
  .openapi('BatchGetCustomDataIdentifiersRequest')

const BucketCriteriaSchema = z
  .record(z.string(), BucketCriteriaAdditionalPropertiesSchema)
  .openapi({
    description:
      'Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets.',
  })
  .openapi('BucketCriteria')

const BucketSortCriteriaSchema = z
  .object({
    attributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the bucket property to sort the results by. This value can be one of the following properties that Amazon Macie defines as bucket metadata: accountId, bucketName, classifiableObjectCount, classifiableSizeInBytes, objectCount, sensitivityScore, or sizeInBytes.',
        }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order to apply to the results, based on the value specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies criteria for sorting the results of a query for information about S3 buckets.',
    required: [],
  })
  .openapi('BucketSortCriteria')

const CreateAllowListRequestSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ),
    criteria: AllowListCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression (regex) that defines a text pattern to ignore.',
        }),
    ),
    description: StringMin1Max512PatternSSSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom description of the allow list. The description can contain as many as 512 characters.',
        }),
    ).exactOptional(),
    name: StringMin1Max128PatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom name for the allow list. The name can contain as many as 128 characters.',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of key-value pairs that specifies the tags to associate with the allow list.</p> <p>An allow list can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['criteria', 'clientToken', 'name'], title: 'CreateAllowListRequest' })
  .openapi('CreateAllowListRequest')

const CreateClassificationJobRequestSchema = z
  .object({
    allowListIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of unique identifiers, one for each allow list for the job to use when it analyzes data.',
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ),
    customDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.",
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom description of the job. The description can contain as many as 200 characters.',
        }),
    ).exactOptional(),
    initialRun: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p>",
        }),
    ).exactOptional(),
    jobType: JobTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The schedule for running the job. Valid values are:</p> <ul><li><p>ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property.</p></li> <li><p>SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to define the recurrence pattern for the job.</p></li></ul>",
        }),
    ),
    managedDataIdentifierIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>',
        }),
    ).exactOptional(),
    managedDataIdentifierSelector: ManagedDataIdentifierSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The selection type to apply when determining which managed data identifiers the job uses to analyze data. Valid values are:</p> <ul><li><p>ALL - Use all the managed data identifiers that Amazon Macie provides. If you specify this value, don't specify any values for the managedDataIdentifierIds property.</p></li> <li><p>EXCLUDE - Use all the managed data identifiers that Macie provides except the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>INCLUDE - Use only the managed data identifiers specified by the managedDataIdentifierIds property.</p></li> <li><p>NONE - Don't use any managed data identifiers. If you specify this value, specify at least one custom data identifier for the job (customDataIdentifierIds) and don't specify any values for the managedDataIdentifierIds property.</p></li></ul> <p>If you don't specify a value for this property, the job uses all managed data identifiers. If you don't specify a value for this property or you specify ALL or EXCLUDE for a recurring job, the job also uses new managed data identifiers as they are released.</p>",
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A custom name for the job. The name can contain as many as 500 characters.',
        }),
    ),
    s3JobDefinition: S3JobDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 buckets that contain the objects to analyze, and the scope of that analysis.',
        }),
    ),
    samplingPercentage: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.',
        }),
    ).exactOptional(),
    scheduleFrequency: JobScheduleFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            "The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the jobType property to ONE_TIME.",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of key-value pairs that specifies the tags to associate with the job.</p> <p>A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['s3JobDefinition', 'jobType', 'clientToken', 'name'],
    title: 'CreateClassificationJobRequest',
  })
  .openapi('CreateClassificationJobRequest')

const CreateCustomDataIdentifierRequestSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
        }),
    ).exactOptional(),
    ignoreWords: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.',
        }),
    ).exactOptional(),
    keywords: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.",
        }),
    ).exactOptional(),
    maximumMatchDistance: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
        }),
    ),
    regex: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.',
        }),
    ),
    severityLevels: SeverityLevelListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie assigns the MEDIUM severity to those findings.</p>",
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of key-value pairs that specifies the tags to associate with the custom data identifier.</p> <p>A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['regex', 'name'], title: 'CreateCustomDataIdentifierRequest' })
  .openapi('CreateCustomDataIdentifierRequest')

const CreateFindingsFilterRequestSchema = z
  .object({
    action: FindingsFilterActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.",
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
        }),
    ).exactOptional(),
    findingCriteria: FindingCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to filter findings.' }),
    ),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
        }),
    ),
    position: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of key-value pairs that specifies the tags to associate with the filter.</p> <p>A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['action', 'findingCriteria', 'name'],
    title: 'CreateFindingsFilterRequest',
  })
  .openapi('CreateFindingsFilterRequest')

const CreateInvitationsRequestSchema = z
  .object({
    accountIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.',
        }),
    ),
    disableEmailNotification: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.",
        }),
    ).exactOptional(),
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['accountIds'], title: 'CreateInvitationsRequest' })
  .openapi('CreateInvitationsRequest')

const CreateMemberRequestSchema = z
  .object({
    account: AccountDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the account to associate with the administrator account.',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.</p> <p>An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['account'], title: 'CreateMemberRequest' })
  .openapi('CreateMemberRequest')

const ListOfFindingTypeSchema = z.array(FindingTypeSchema).openapi('ListOfFindingType')

const CreateSampleFindingsRequestSchema = z
  .object({
    findingTypes: ListOfFindingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateSampleFindingsRequest', required: [] })
  .openapi('CreateSampleFindingsRequest')

const DeclineInvitationsRequestSchema = z
  .object({
    accountIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.',
        }),
    ),
  })
  .openapi({ required: ['accountIds'], title: 'DeclineInvitationsRequest' })
  .openapi('DeclineInvitationsRequest')

const DeleteAllowListRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAllowListRequest' })
  .openapi('DeleteAllowListRequest')

const DeleteCustomDataIdentifierRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCustomDataIdentifierRequest' })
  .openapi('DeleteCustomDataIdentifierRequest')

const DeleteFindingsFilterRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFindingsFilterRequest' })
  .openapi('DeleteFindingsFilterRequest')

const DeleteInvitationsRequestSchema = z
  .object({
    accountIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.',
        }),
    ),
  })
  .openapi({ required: ['accountIds'], title: 'DeleteInvitationsRequest' })
  .openapi('DeleteInvitationsRequest')

const DeleteMemberRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMemberRequest' })
  .openapi('DeleteMemberRequest')

const DescribeBucketsRequestSchema = z
  .object({
    criteria: BucketCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to filter the query results.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to include in each page of the response. The default value is 50.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
    sortCriteria: BucketSortCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to sort the query results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeBucketsRequest', required: [] })
  .openapi('DescribeBucketsRequest')

const DescribeClassificationJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeClassificationJobRequest' })
  .openapi('DescribeClassificationJobRequest')

const DescribeOrganizationConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeOrganizationConfigurationRequest' })
  .openapi('DescribeOrganizationConfigurationRequest')

const DisableMacieRequestSchema = z
  .object({})
  .openapi({ title: 'DisableMacieRequest' })
  .openapi('DisableMacieRequest')

const DisableOrganizationAdminAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DisableOrganizationAdminAccountRequest' })
  .openapi('DisableOrganizationAdminAccountRequest')

const DisassociateFromAdministratorAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateFromAdministratorAccountRequest' })
  .openapi('DisassociateFromAdministratorAccountRequest')

const DisassociateFromMasterAccountRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateFromMasterAccountRequest' })
  .openapi('DisassociateFromMasterAccountRequest')

const DisassociateMemberRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateMemberRequest' })
  .openapi('DisassociateMemberRequest')

const EnableMacieRequestSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    findingPublishingFrequency: FindingPublishingFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).',
        }),
    ).exactOptional(),
    status: MacieStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the new status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to ENABLED.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'EnableMacieRequest', required: [] })
  .openapi('EnableMacieRequest')

const EnableOrganizationAdminAccountRequestSchema = z
  .object({
    adminAccountId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.',
        }),
    ),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['adminAccountId'], title: 'EnableOrganizationAdminAccountRequest' })
  .openapi('EnableOrganizationAdminAccountRequest')

const FindingStatisticsSortCriteriaSchema = z
  .object({
    attributeName: FindingStatisticsSortAttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.',
        }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.',
    required: [],
  })
  .openapi('FindingStatisticsSortCriteria')

const GetAdministratorAccountRequestSchema = z
  .object({})
  .openapi({ title: 'GetAdministratorAccountRequest' })
  .openapi('GetAdministratorAccountRequest')

const GetAllowListRequestSchema = z
  .object({})
  .openapi({ title: 'GetAllowListRequest' })
  .openapi('GetAllowListRequest')

const GetAutomatedDiscoveryConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetAutomatedDiscoveryConfigurationRequest' })
  .openapi('GetAutomatedDiscoveryConfigurationRequest')

const GetBucketStatisticsRequestSchema = z
  .object({
    accountId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the Amazon Web Services account.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetBucketStatisticsRequest', required: [] })
  .openapi('GetBucketStatisticsRequest')

const GetClassificationExportConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetClassificationExportConfigurationRequest' })
  .openapi('GetClassificationExportConfigurationRequest')

const GetClassificationScopeRequestSchema = z
  .object({})
  .openapi({ title: 'GetClassificationScopeRequest' })
  .openapi('GetClassificationScopeRequest')

const GetCustomDataIdentifierRequestSchema = z
  .object({})
  .openapi({ title: 'GetCustomDataIdentifierRequest' })
  .openapi('GetCustomDataIdentifierRequest')

const GroupBySchema = z
  .enum([
    'resourcesAffected.s3Bucket.name',
    'type',
    'classificationDetails.jobId',
    'severity.description',
  ])
  .openapi('GroupBy')

const GetFindingStatisticsRequestSchema = z
  .object({
    findingCriteria: FindingCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to filter the query results.' }),
    ).exactOptional(),
    groupBy: GroupBySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>',
        }),
    ),
    size: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of items to include in each page of the response.',
        }),
    ).exactOptional(),
    sortCriteria: FindingStatisticsSortCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to sort the query results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['groupBy'], title: 'GetFindingStatisticsRequest' })
  .openapi('GetFindingStatisticsRequest')

const GetFindingsFilterRequestSchema = z
  .object({})
  .openapi({ title: 'GetFindingsFilterRequest' })
  .openapi('GetFindingsFilterRequest')

const GetFindingsPublicationConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetFindingsPublicationConfigurationRequest' })
  .openapi('GetFindingsPublicationConfigurationRequest')

const SortCriteriaSchema = z
  .object({
    attributeName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines for a finding.',
        }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Specifies criteria for sorting the results of a request for findings.',
    required: [],
  })
  .openapi('SortCriteria')

const GetFindingsRequestSchema = z
  .object({
    findingIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.',
        }),
    ),
    sortCriteria: SortCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria for sorting the results of the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['findingIds'], title: 'GetFindingsRequest' })
  .openapi('GetFindingsRequest')

const GetInvitationsCountRequestSchema = z
  .object({})
  .openapi({ title: 'GetInvitationsCountRequest' })
  .openapi('GetInvitationsCountRequest')

const GetMacieSessionRequestSchema = z
  .object({})
  .openapi({ title: 'GetMacieSessionRequest' })
  .openapi('GetMacieSessionRequest')

const GetMasterAccountRequestSchema = z
  .object({})
  .openapi({ title: 'GetMasterAccountRequest' })
  .openapi('GetMasterAccountRequest')

const GetMemberRequestSchema = z
  .object({})
  .openapi({ title: 'GetMemberRequest' })
  .openapi('GetMemberRequest')

const GetResourceProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourceProfileRequest' })
  .openapi('GetResourceProfileRequest')

const GetRevealConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetRevealConfigurationRequest' })
  .openapi('GetRevealConfigurationRequest')

const GetSensitiveDataOccurrencesAvailabilityRequestSchema = z
  .object({})
  .openapi({ title: 'GetSensitiveDataOccurrencesAvailabilityRequest' })
  .openapi('GetSensitiveDataOccurrencesAvailabilityRequest')

const GetSensitiveDataOccurrencesRequestSchema = z
  .object({})
  .openapi({ title: 'GetSensitiveDataOccurrencesRequest' })
  .openapi('GetSensitiveDataOccurrencesRequest')

const GetSensitivityInspectionTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetSensitivityInspectionTemplateRequest' })
  .openapi('GetSensitivityInspectionTemplateRequest')

const ListOfUsageStatisticsFilterSchema = z
  .array(UsageStatisticsFilterSchema)
  .openapi('ListOfUsageStatisticsFilter')

const UsageStatisticsSortBySchema = z
  .object({
    key: UsageStatisticsSortKeySchema.and(
      z.any().openapi({ description: 'The field to sort the results by.' }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.',
    required: [],
  })
  .openapi('UsageStatisticsSortBy')

const GetUsageStatisticsRequestSchema = z
  .object({
    filterBy: ListOfUsageStatisticsFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of items to include in each page of the response.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
    sortBy: UsageStatisticsSortBySchema.and(
      z.any().openapi({ description: 'The criteria to use to sort the query results.' }),
    ).exactOptional(),
    timeRange: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The inclusive time period to query usage data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value, Amazon Macie provides usage data for the preceding 30 days.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetUsageStatisticsRequest', required: [] })
  .openapi('GetUsageStatisticsRequest')

const GetUsageTotalsRequestSchema = z
  .object({})
  .openapi({ title: 'GetUsageTotalsRequest' })
  .openapi('GetUsageTotalsRequest')

const MaxResultsSchema = z.int().min(1).max(25).openapi('MaxResults')

const ListAllowListsRequestSchema = z
  .object({})
  .openapi({ title: 'ListAllowListsRequest' })
  .openapi('ListAllowListsRequest')

const ListJobsFilterCriteriaSchema = z
  .object({
    excludes: ListOfListJobsFilterTermSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each condition that determines which jobs to exclude from the results.',
        }),
    ).exactOptional(),
    includes: ListOfListJobsFilterTermSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of objects, one for each condition that determines which jobs to include in the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies criteria for filtering the results of a request for information about classification jobs.',
    required: [],
  })
  .openapi('ListJobsFilterCriteria')

const ListJobsSortCriteriaSchema = z
  .object({
    attributeName: ListJobsSortAttributeNameSchema.and(
      z.any().openapi({ description: 'The property to sort the results by.' }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies criteria for sorting the results of a request for information about classification jobs.',
    required: [],
  })
  .openapi('ListJobsSortCriteria')

const ListClassificationJobsRequestSchema = z
  .object({
    filterCriteria: ListJobsFilterCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to filter the results.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of items to include in each page of the response.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
    sortCriteria: ListJobsSortCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to sort the results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListClassificationJobsRequest', required: [] })
  .openapi('ListClassificationJobsRequest')

const ListClassificationScopesRequestSchema = z
  .object({})
  .openapi({ title: 'ListClassificationScopesRequest' })
  .openapi('ListClassificationScopesRequest')

const ListCustomDataIdentifiersRequestSchema = z
  .object({
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of items to include in each page of the response.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListCustomDataIdentifiersRequest', required: [] })
  .openapi('ListCustomDataIdentifiersRequest')

const ListFindingsFiltersRequestSchema = z
  .object({})
  .openapi({ title: 'ListFindingsFiltersRequest' })
  .openapi('ListFindingsFiltersRequest')

const ListFindingsRequestSchema = z
  .object({
    findingCriteria: FindingCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to filter the results.' }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of items to include in each page of the response.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
    sortCriteria: SortCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to sort the results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFindingsRequest', required: [] })
  .openapi('ListFindingsRequest')

const ListInvitationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListInvitationsRequest' })
  .openapi('ListInvitationsRequest')

const ListManagedDataIdentifiersRequestSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListManagedDataIdentifiersRequest', required: [] })
  .openapi('ListManagedDataIdentifiersRequest')

const ListMembersRequestSchema = z
  .object({})
  .openapi({ title: 'ListMembersRequest' })
  .openapi('ListMembersRequest')

const ListOrganizationAdminAccountsRequestSchema = z
  .object({})
  .openapi({ title: 'ListOrganizationAdminAccountsRequest' })
  .openapi('ListOrganizationAdminAccountsRequest')

const ListResourceProfileArtifactsRequestSchema = z
  .object({})
  .openapi({ title: 'ListResourceProfileArtifactsRequest' })
  .openapi('ListResourceProfileArtifactsRequest')

const ListResourceProfileDetectionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListResourceProfileDetectionsRequest' })
  .openapi('ListResourceProfileDetectionsRequest')

const ListSensitivityInspectionTemplatesRequestSchema = z
  .object({})
  .openapi({ title: 'ListSensitivityInspectionTemplatesRequest' })
  .openapi('ListSensitivityInspectionTemplatesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutClassificationExportConfigurationRequestSchema = z
  .object({
    configuration: ClassificationExportConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location to store data classification results in, and the encryption settings to use when storing results in that location.',
        }),
    ),
  })
  .openapi({ required: ['configuration'], title: 'PutClassificationExportConfigurationRequest' })
  .openapi('PutClassificationExportConfigurationRequest')

const PutFindingsPublicationConfigurationRequestSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    securityHubConfiguration: SecurityHubConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration settings that determine which findings to publish to Security Hub.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'PutFindingsPublicationConfigurationRequest', required: [] })
  .openapi('PutFindingsPublicationConfigurationRequest')

const S3ClassificationScopeUpdateSchema = z
  .object({
    excludes: S3ClassificationScopeExclusionUpdateSchema.and(
      z
        .any()
        .openapi({ description: 'The names of the S3 buckets to add or remove from the list.' }),
    ),
  })
  .openapi({
    required: ['excludes'],
    description:
      'Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.',
  })
  .openapi('S3ClassificationScopeUpdate')

const SearchResourcesBucketCriteriaSchema = z
  .object({
    excludes: SearchResourcesCriteriaBlockSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which buckets to exclude from the results.',
        }),
    ).exactOptional(),
    includes: SearchResourcesCriteriaBlockSchema.and(
      z
        .any()
        .openapi({
          description:
            'The property- and tag-based conditions that determine which buckets to include in the results.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.',
    required: [],
  })
  .openapi('SearchResourcesBucketCriteria')

const SearchResourcesSortCriteriaSchema = z
  .object({
    attributeName: SearchResourcesSortAttributeNameSchema.and(
      z.any().openapi({ description: 'The property to sort the results by.' }),
    ).exactOptional(),
    orderBy: OrderBySchema.and(
      z
        .any()
        .openapi({
          description:
            'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.',
    required: [],
  })
  .openapi('SearchResourcesSortCriteria')

const SearchResourcesRequestSchema = z
  .object({
    bucketCriteria: SearchResourcesBucketCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The filter conditions that determine which S3 buckets to include or exclude from the query results.',
        }),
    ).exactOptional(),
    maxResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to include in each page of the response. The default value is 50.',
        }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string that specifies which page of results to return in a paginated response.',
        }),
    ).exactOptional(),
    sortCriteria: SearchResourcesSortCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to sort the results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'SearchResourcesRequest', required: [] })
  .openapi('SearchResourcesRequest')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A map of key-value pairs that specifies the tags to associate with the resource.</p> <p>A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TestCustomDataIdentifierRequestSchema = z
  .object({
    ignoreWords: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.',
        }),
    ).exactOptional(),
    keywords: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.",
        }),
    ).exactOptional(),
    maximumMatchDistance: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.',
        }),
    ).exactOptional(),
    regex: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.',
        }),
    ),
    sampleText: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.',
        }),
    ),
  })
  .openapi({ required: ['regex', 'sampleText'], title: 'TestCustomDataIdentifierRequest' })
  .openapi('TestCustomDataIdentifierRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAllowListRequestSchema = z
  .object({
    criteria: AllowListCriteriaSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression that defines a text pattern to ignore (regex).</p> <p>You can change a list's underlying criteria, such as the name of the S3 object or the regular expression to use. However, you can't change the type from s3WordsList to regex or the other way around.</p>",
        }),
    ),
    description: StringMin1Max512PatternSSSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom description of the allow list. The description can contain as many as 512 characters.',
        }),
    ).exactOptional(),
    name: StringMin1Max128PatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom name for the allow list. The name can contain as many as 128 characters.',
        }),
    ),
  })
  .openapi({ required: ['criteria', 'name'], title: 'UpdateAllowListRequest' })
  .openapi('UpdateAllowListRequest')

const UpdateAutomatedDiscoveryConfigurationRequestSchema = z
  .object({
    status: AutomatedDiscoveryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The new status of automated sensitive data discovery for the account. Valid values are: ENABLED, start or resume automated sensitive data discovery activities for the account; and, DISABLED, stop performing automated sensitive data discovery activities for the account.</p> <p>When you enable automated sensitive data discovery for the first time, Amazon Macie uses default configuration settings to determine which data sources to analyze and which managed data identifiers to use. To change these settings, use the UpdateClassificationScope and UpdateSensitivityInspectionTemplate operations, respectively. If you change the settings and subsequently disable the configuration, Amazon Macie retains your changes.</p>',
        }),
    ),
  })
  .openapi({ required: ['status'], title: 'UpdateAutomatedDiscoveryConfigurationRequest' })
  .openapi('UpdateAutomatedDiscoveryConfigurationRequest')

const UpdateClassificationJobRequestSchema = z
  .object({
    jobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The new status for the job. Valid values are:</p> <ul><li><p>CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.</p> <p>If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it.</p></li> <li><p>RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED.</p> <p>If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job.</p></li> <li><p>USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE, PAUSED, or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.</p> <p>If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>",
        }),
    ),
  })
  .openapi({ required: ['jobStatus'], title: 'UpdateClassificationJobRequest' })
  .openapi('UpdateClassificationJobRequest')

const UpdateClassificationScopeRequestSchema = z
  .object({
    s3: S3ClassificationScopeUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 buckets to add or remove from the exclusion list defined by the classification scope.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateClassificationScopeRequest', required: [] })
  .openapi('UpdateClassificationScopeRequest')

const UpdateFindingsFilterRequestSchema = z
  .object({
    action: FindingsFilterActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.",
        }),
    ).exactOptional(),
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
        }),
    ).exactOptional(),
    findingCriteria: FindingCriteriaSchema.and(
      z.any().openapi({ description: 'The criteria to use to filter findings.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
        }),
    ).exactOptional(),
    position: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFindingsFilterRequest', required: [] })
  .openapi('UpdateFindingsFilterRequest')

const UpdateMacieSessionRequestSchema = z
  .object({
    findingPublishingFrequency: FindingPublishingFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).',
        }),
    ).exactOptional(),
    status: MacieStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateMacieSessionRequest', required: [] })
  .openapi('UpdateMacieSessionRequest')

const UpdateMemberSessionRequestSchema = z
  .object({
    status: MacieStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.',
        }),
    ),
  })
  .openapi({ required: ['status'], title: 'UpdateMemberSessionRequest' })
  .openapi('UpdateMemberSessionRequest')

const UpdateOrganizationConfigurationRequestSchema = z
  .object({
    autoEnable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.',
        }),
    ),
  })
  .openapi({ required: ['autoEnable'], title: 'UpdateOrganizationConfigurationRequest' })
  .openapi('UpdateOrganizationConfigurationRequest')

const ListOfSuppressDataIdentifierSchema = z
  .array(SuppressDataIdentifierSchema)
  .openapi('ListOfSuppressDataIdentifier')

const UpdateResourceProfileDetectionsRequestSchema = z
  .object({
    suppressDataIdentifiers: ListOfSuppressDataIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            "An array of objects, one for each custom data identifier or managed data identifier that detected the type of sensitive data to start excluding or including in the bucket's score. To start including all sensitive data types in the score, don't specify any values for this array.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateResourceProfileDetectionsRequest', required: [] })
  .openapi('UpdateResourceProfileDetectionsRequest')

const UpdateResourceProfileRequestSchema = z
  .object({
    sensitivityScoreOverride: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateResourceProfileRequest', required: [] })
  .openapi('UpdateResourceProfileRequest')

const UpdateRevealConfigurationRequestSchema = z
  .object({
    configuration: RevealConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new configuration settings and the status of the configuration for the account.',
        }),
    ),
  })
  .openapi({ required: ['configuration'], title: 'UpdateRevealConfigurationRequest' })
  .openapi('UpdateRevealConfigurationRequest')

const UpdateSensitivityInspectionTemplateRequestSchema = z
  .object({
    description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom description of the template. The description can contain as many as 200 characters.',
        }),
    ).exactOptional(),
    excludes: SensitivityInspectionTemplateExcludesSchema.and(
      z
        .any()
        .openapi({
          description:
            " <p>The managed data identifiers to explicitly exclude (not use) when analyzing data.</p> <p>To exclude an allow list or custom data identifier that's currently included by the template, update the values for the SensitivityInspectionTemplateIncludes.allowListIds and SensitivityInspectionTemplateIncludes.customDataIdentifierIds properties, respectively.</p>",
        }),
    ).exactOptional(),
    includes: SensitivityInspectionTemplateIncludesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The allow lists, custom data identifiers, and managed data identifiers to include (use) when analyzing data.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSensitivityInspectionTemplateRequest', required: [] })
  .openapi('UpdateSensitivityInspectionTemplateRequest')

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

export const postInvitationsAcceptRoute = createRoute({
  method: 'post',
  path: '/invitations/accept',
  description:
    'Accepts an Amazon Macie membership invitation that was received from a specific account.',
  operationId: 'AcceptInvitation',
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
              administratorAccountId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Web Services account ID for the account that sent the invitation.',
                }),
              invitationId: z
                .string()
                .openapi({ description: 'The unique identifier for the invitation to accept.' }),
              masterAccount: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '(Deprecated) The Amazon Web Services account ID for the account that sent the invitation. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.',
                }),
            })
            .openapi({ required: ['invitationId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptInvitationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCustomDataIdentifiersGetRoute = createRoute({
  method: 'post',
  path: '/custom-data-identifiers/get',
  description: 'Retrieves information about one or more custom data identifiers.',
  operationId: 'BatchGetCustomDataIdentifiers',
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
              ids: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of custom data identifier IDs, one for each custom data identifier to retrieve information about.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetCustomDataIdentifiersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getAllowListsRoute = createRoute({
  method: 'get',
  path: '/allow-lists',
  description: 'Retrieves a subset of information about all the allow lists for an account.',
  operationId: 'ListAllowLists',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAllowListsResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postAllowListsRoute = createRoute({
  method: 'post',
  path: '/allow-lists',
  description: 'Creates and defines the settings for an allow list.',
  operationId: 'CreateAllowList',
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
              clientToken: z
                .string()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              criteria: z
                .object({
                  regex: StringMin1Max512PatternSSSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The regular expression (<i>regex</i>) that defines the text pattern to ignore. The expression can contain as many as 512 characters.',
                      }),
                  ).exactOptional(),
                  s3WordsList: S3WordsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location and name of the S3 object that lists specific text to ignore.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.",
                  required: [],
                }),
              description: z
                .string()
                .regex(/^[\s\S]+$/)
                .min(1)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'A custom description of the allow list. The description can contain as many as 512 characters.',
                }),
              name: z
                .string()
                .regex(/^.+$/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'A custom name for the allow list. The name can contain as many as 128 characters.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
                }),
            })
            .openapi({ required: ['clientToken', 'criteria', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAllowListResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  description: 'Creates and defines the settings for a classification job.',
  operationId: 'CreateClassificationJob',
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
              allowListIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of unique identifiers, one for each allow list for the job to use when it analyzes data.',
                }),
              clientToken: z
                .string()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              customDataIdentifierIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    "An array of unique identifiers, one for each custom data identifier for the job to use when it analyzes data. To use only managed data identifiers, don't specify a value for this property and specify a value other than NONE for the managedDataIdentifierSelector property.",
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A custom description of the job. The description can contain as many as 200 characters.',
                }),
              initialRun: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "<p>For a recurring job, specifies whether to analyze all existing, eligible objects immediately after the job is created (true). To analyze only those objects that are created or changed after you create the job and before the job's first scheduled run, set this value to false.</p> <p>If you configure the job to run only once, don't specify a value for this property.</p>",
                }),
              jobType: z
                .enum(['ONE_TIME', 'SCHEDULED'])
                .openapi({
                  description: 'The schedule for running a classification job. Valid values are:',
                }),
              managedDataIdentifierIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>An array of unique identifiers, one for each managed data identifier for the job to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type that you specify for the job (managedDataIdentifierSelector).</p> <p>To retrieve a list of valid values for this property, use the ListManagedDataIdentifiers operation.</p>',
                }),
              managedDataIdentifierSelector: z
                .enum(['ALL', 'EXCLUDE', 'INCLUDE', 'NONE'])
                .exactOptional()
                .openapi({
                  description:
                    'The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'A custom name for the job. The name can contain as many as 500 characters.',
                }),
              s3JobDefinition: z
                .object({
                  bucketCriteria: S3BucketCriteriaForJobSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which buckets contain objects to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.",
                      }),
                  ).exactOptional(),
                  bucketDefinitions: ListOfS3BucketDefinitionForJobSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "An array of objects, one for each Amazon Web Services account that owns specific S3 buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.",
                      }),
                  ).exactOptional(),
                  scoping: ScopingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The property- and tag-based conditions that determine which S3 objects to include or exclude from the analysis. Each time the job runs, the job uses these criteria to determine which objects to analyze.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.",
                  required: [],
                }),
              samplingPercentage: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The sampling depth, as a percentage, for the job to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.',
                }),
              scheduleFrequency: z
                .object({
                  dailySchedule: DailyScheduleSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies a daily recurrence pattern for running the job.',
                      }),
                  ).exactOptional(),
                  monthlySchedule: MonthlyScheduleSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies a monthly recurrence pattern for running the job.',
                      }),
                  ).exactOptional(),
                  weeklySchedule: WeeklyScheduleSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Specifies a weekly recurrence pattern for running the job.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Specifies the recurrence pattern for running a classification job.',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
                }),
            })
            .openapi({ required: ['clientToken', 'jobType', 'name', 's3JobDefinition'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateClassificationJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCustomDataIdentifiersRoute = createRoute({
  method: 'post',
  path: '/custom-data-identifiers',
  description: 'Creates and defines the criteria and other settings for a custom data identifier.',
  operationId: 'CreateCustomDataIdentifier',
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
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
                }),
              ignoreWords: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.',
                }),
              keywords: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    "An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.",
                }),
              maximumMatchDistance: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.',
                }),
              name: z
                .string()
                .openapi({
                  description:
                    "<p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
                }),
              regex: z
                .string()
                .openapi({
                  description:
                    'The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.',
                }),
              severityLevels: z
                .array(SeverityLevelSchema)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding.</p> <p>If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.</p>",
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
                }),
            })
            .openapi({ required: ['name', 'regex'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCustomDataIdentifierResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getFindingsfiltersRoute = createRoute({
  method: 'get',
  path: '/findingsfilters',
  description: 'Retrieves a subset of information about all the findings filters for an account.',
  operationId: 'ListFindingsFilters',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFindingsFiltersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postFindingsfiltersRoute = createRoute({
  method: 'post',
  path: '/findingsfilters',
  description: 'Creates and defines the criteria and other settings for a findings filter.',
  operationId: 'CreateFindingsFilter',
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
              action: z
                .enum(['ARCHIVE', 'NOOP'])
                .openapi({
                  description:
                    'The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
                }),
              findingCriteria: z
                .object({
                  criterion: CriterionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A condition that specifies the property, operator, and one or more values to use to filter the results.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.',
                  required: [],
                }),
              name: z
                .string()
                .openapi({
                  description:
                    "<p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
                }),
              position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
                }),
            })
            .openapi({ required: ['action', 'findingCriteria', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFindingsFilterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getInvitationsRoute = createRoute({
  method: 'get',
  path: '/invitations',
  description:
    'Retrieves information about the Amazon Macie membership invitations that were received by an account.',
  operationId: 'ListInvitations',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListInvitationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postInvitationsRoute = createRoute({
  method: 'post',
  path: '/invitations',
  description: 'Sends an Amazon Macie membership invitation to one or more accounts.',
  operationId: 'CreateInvitations',
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
              accountIds: z
                .array(StringSchema)
                .openapi({
                  description:
                    'An array that lists Amazon Web Services account IDs, one for each account to send the invitation to.',
                }),
              disableEmailNotification: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies whether to send the invitation as an email message. If this value is false, Amazon Macie sends the invitation (as an email message) to the email address that you specified for the recipient's account when you associated the account with your account. The default value is false.",
                }),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Custom text to include in the email message that contains the invitation. The text can contain as many as 80 alphanumeric characters.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInvitationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getMembersRoute = createRoute({
  method: 'get',
  path: '/members',
  description:
    'Retrieves information about the accounts that are associated with an Amazon Macie administrator account.',
  operationId: 'ListMembers',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
      onlyAssociated: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'onlyAssociated',
            in: 'query',
            required: false,
            description:
              "Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMembersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postMembersRoute = createRoute({
  method: 'post',
  path: '/members',
  description: 'Associates an account with an Amazon Macie administrator account.',
  operationId: 'CreateMember',
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
              account: z
                .object({
                  accountId: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The Amazon Web Services account ID for the account.',
                      }),
                  ).exactOptional(),
                  email: StringSchema.and(
                    z.any().openapi({ description: 'The email address for the account.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the details of an account to associate with an Amazon Macie administrator account.',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
                }),
            })
            .openapi({ required: ['account'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMemberResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postFindingsSampleRoute = createRoute({
  method: 'post',
  path: '/findings/sample',
  description: 'Creates sample findings.',
  operationId: 'CreateSampleFindings',
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
              findingTypes: z
                .array(FindingTypeSchema)
                .exactOptional()
                .openapi({
                  description:
                    "An array of finding types, one for each type of sample finding to create. To create a sample of every type of finding that Amazon Macie supports, don't include this array in your request.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSampleFindingsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postInvitationsDeclineRoute = createRoute({
  method: 'post',
  path: '/invitations/decline',
  description:
    'Declines Amazon Macie membership invitations that were received from specific accounts.',
  operationId: 'DeclineInvitations',
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
              accountIds: z
                .array(StringSchema)
                .openapi({
                  description:
                    'An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to decline.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeclineInvitationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getAllowListsIdRoute = createRoute({
  method: 'get',
  path: '/allow-lists/{id}',
  description: 'Retrieves the settings and status of an allow list.',
  operationId: 'GetAllowList',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAllowListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAllowListsIdRoute = createRoute({
  method: 'put',
  path: '/allow-lists/{id}',
  description: 'Updates the settings for an allow list.',
  operationId: 'UpdateAllowList',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              criteria: z
                .object({
                  regex: StringMin1Max512PatternSSSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The regular expression (<i>regex</i>) that defines the text pattern to ignore. The expression can contain as many as 512 characters.',
                      }),
                  ).exactOptional(),
                  s3WordsList: S3WordsListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The location and name of the S3 object that lists specific text to ignore.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    "Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.",
                  required: [],
                }),
              description: z
                .string()
                .regex(/^[\s\S]+$/)
                .min(1)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'A custom description of the allow list. The description can contain as many as 512 characters.',
                }),
              name: z
                .string()
                .regex(/^.+$/)
                .min(1)
                .max(128)
                .openapi({
                  description:
                    'A custom name for the allow list. The name can contain as many as 128 characters.',
                }),
            })
            .openapi({ required: ['criteria', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAllowListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const deleteAllowListsIdRoute = createRoute({
  method: 'delete',
  path: '/allow-lists/{id}',
  description: 'Deletes an allow list.',
  operationId: 'DeleteAllowList',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      ignoreJobChecks: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ignoreJobChecks',
            in: 'query',
            required: false,
            description:
              '<p>Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list.</p> <p>When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.</p>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAllowListResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getCustomDataIdentifiersIdRoute = createRoute({
  method: 'get',
  path: '/custom-data-identifiers/{id}',
  description: 'Retrieves the criteria and other settings for a custom data identifier.',
  operationId: 'GetCustomDataIdentifier',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCustomDataIdentifierResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteCustomDataIdentifiersIdRoute = createRoute({
  method: 'delete',
  path: '/custom-data-identifiers/{id}',
  description: 'Soft deletes a custom data identifier.',
  operationId: 'DeleteCustomDataIdentifier',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCustomDataIdentifierResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getFindingsfiltersIdRoute = createRoute({
  method: 'get',
  path: '/findingsfilters/{id}',
  description: 'Retrieves the criteria and other settings for a findings filter.',
  operationId: 'GetFindingsFilter',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingsFilterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteFindingsfiltersIdRoute = createRoute({
  method: 'delete',
  path: '/findingsfilters/{id}',
  description: 'Deletes a findings filter.',
  operationId: 'DeleteFindingsFilter',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFindingsFilterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchFindingsfiltersIdRoute = createRoute({
  method: 'patch',
  path: '/findingsfilters/{id}',
  description: 'Updates the criteria and other settings for a findings filter.',
  operationId: 'UpdateFindingsFilter',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .enum(['ARCHIVE', 'NOOP'])
                .exactOptional()
                .openapi({
                  description:
                    'The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
                }),
              findingCriteria: z
                .object({
                  criterion: CriterionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A condition that specifies the property, operator, and one or more values to use to filter the results.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "<p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>",
                }),
              position: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFindingsFilterResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postInvitationsDeleteRoute = createRoute({
  method: 'post',
  path: '/invitations/delete',
  description:
    'Deletes Amazon Macie membership invitations that were received from specific accounts.',
  operationId: 'DeleteInvitations',
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
              accountIds: z
                .array(StringSchema)
                .openapi({
                  description:
                    'An array that lists Amazon Web Services account IDs, one for each account that sent an invitation to delete.',
                }),
            })
            .openapi({ required: ['accountIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInvitationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getMembersIdRoute = createRoute({
  method: 'get',
  path: '/members/{id}',
  description:
    "Retrieves information about an account that's associated with an Amazon Macie administrator account.",
  operationId: 'GetMember',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMemberResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteMembersIdRoute = createRoute({
  method: 'delete',
  path: '/members/{id}',
  description:
    'Deletes the association between an Amazon Macie administrator account and an account.',
  operationId: 'DeleteMember',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMemberResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postDatasourcesS3Route = createRoute({
  method: 'post',
  path: '/datasources/s3',
  description:
    'Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.',
  operationId: 'DescribeBuckets',
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
              criteria: z
                .record(z.string(), BucketCriteriaAdditionalPropertiesSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies, as a map, one or more property-based conditions that filter the results of a query for information about S3 buckets.',
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response. The default value is 50.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
              sortCriteria: z
                .object({
                  attributeName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the bucket property to sort the results by. This value can be one of the following properties that Amazon Macie defines as bucket metadata: accountId, bucketName, classifiableObjectCount, classifiableSizeInBytes, objectCount, sensitivityScore, or sizeInBytes.',
                      }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a query for information about S3 buckets.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBucketsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/jobs/{jobId}',
  description: 'Retrieves the status and settings for a classification job.',
  operationId: 'DescribeClassificationJob',
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
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the classification job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeClassificationJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchJobsJobIdRoute = createRoute({
  method: 'patch',
  path: '/jobs/{jobId}',
  description: 'Changes the status of a classification job.',
  operationId: 'UpdateClassificationJob',
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
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the classification job.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobStatus: z
                .enum(['RUNNING', 'PAUSED', 'CANCELLED', 'COMPLETE', 'IDLE', 'USER_PAUSED'])
                .openapi({
                  description: 'The status of a classification job. Possible values are:',
                }),
            })
            .openapi({ required: ['jobStatus'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClassificationJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getAdminConfigurationRoute = createRoute({
  method: 'get',
  path: '/admin/configuration',
  description:
    'Retrieves the Amazon Macie configuration settings for an organization in Organizations.',
  operationId: 'DescribeOrganizationConfiguration',
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
      content: { 'application/json': { schema: DescribeOrganizationConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchAdminConfigurationRoute = createRoute({
  method: 'patch',
  path: '/admin/configuration',
  description:
    'Updates the Amazon Macie configuration settings for an organization in Organizations.',
  operationId: 'UpdateOrganizationConfiguration',
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
              autoEnable: z
                .boolean()
                .openapi({
                  description:
                    'Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.',
                }),
            })
            .openapi({ required: ['autoEnable'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateOrganizationConfigurationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getMacieRoute = createRoute({
  method: 'get',
  path: '/macie',
  description: 'Retrieves the status and configuration settings for an Amazon Macie account.',
  operationId: 'GetMacieSession',
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
      content: { 'application/json': { schema: GetMacieSessionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postMacieRoute = createRoute({
  method: 'post',
  path: '/macie',
  description: 'Enables Amazon Macie and specifies the configuration settings for a Macie account.',
  operationId: 'EnableMacie',
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
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              findingPublishingFrequency: z
                .enum(['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS'])
                .exactOptional()
                .openapi({
                  description:
                    'The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:',
                }),
              status: z
                .enum(['PAUSED', 'ENABLED'])
                .exactOptional()
                .openapi({
                  description: 'The status of an Amazon Macie account. Valid values are:',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableMacieResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteMacieRoute = createRoute({
  method: 'delete',
  path: '/macie',
  description: 'Disables Amazon Macie and deletes all settings and resources for a Macie account.',
  operationId: 'DisableMacie',
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
      content: { 'application/json': { schema: DisableMacieResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchMacieRoute = createRoute({
  method: 'patch',
  path: '/macie',
  description:
    'Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.',
  operationId: 'UpdateMacieSession',
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
              findingPublishingFrequency: z
                .enum(['FIFTEEN_MINUTES', 'ONE_HOUR', 'SIX_HOURS'])
                .exactOptional()
                .openapi({
                  description:
                    'The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:',
                }),
              status: z
                .enum(['PAUSED', 'ENABLED'])
                .exactOptional()
                .openapi({
                  description: 'The status of an Amazon Macie account. Valid values are:',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMacieSessionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteAdminAdminAccountIdRoute = createRoute({
  method: 'delete',
  path: '/admin#adminAccountId',
  description:
    'Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.',
  operationId: 'DisableOrganizationAdminAccount',
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
      adminAccountId: z
        .string()
        .openapi({
          param: {
            name: 'adminAccountId',
            in: 'query',
            required: true,
            description:
              'The Amazon Web Services account ID of the delegated Amazon Macie administrator account.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postAdministratorDisassociateRoute = createRoute({
  method: 'post',
  path: '/administrator/disassociate',
  description: 'Disassociates a member account from its Amazon Macie administrator account.',
  operationId: 'DisassociateFromAdministratorAccount',
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
        'application/json': { schema: DisassociateFromAdministratorAccountResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postMasterDisassociateRoute = createRoute({
  method: 'post',
  path: '/master/disassociate',
  description:
    '(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.',
  operationId: 'DisassociateFromMasterAccount',
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
      content: { 'application/json': { schema: DisassociateFromMasterAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postMembersDisassociateIdRoute = createRoute({
  method: 'post',
  path: '/members/disassociate/{id}',
  description: 'Disassociates an Amazon Macie administrator account from a member account.',
  operationId: 'DisassociateMember',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateMemberResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getAdminRoute = createRoute({
  method: 'get',
  path: '/admin',
  description:
    'Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.',
  operationId: 'ListOrganizationAdminAccounts',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOrganizationAdminAccountsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postAdminRoute = createRoute({
  method: 'post',
  path: '/admin',
  description:
    'Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.',
  operationId: 'EnableOrganizationAdminAccount',
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
              adminAccountId: z
                .string()
                .openapi({
                  description:
                    'The Amazon Web Services account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.',
                }),
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
            })
            .openapi({ required: ['adminAccountId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getAdministratorRoute = createRoute({
  method: 'get',
  path: '/administrator',
  description: 'Retrieves information about the Amazon Macie administrator account for an account.',
  operationId: 'GetAdministratorAccount',
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
      content: { 'application/json': { schema: GetAdministratorAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getAutomatedDiscoveryConfigurationRoute = createRoute({
  method: 'get',
  path: '/automated-discovery/configuration',
  description:
    'Retrieves the configuration settings and status of automated sensitive data discovery for an account.',
  operationId: 'GetAutomatedDiscoveryConfiguration',
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
      content: { 'application/json': { schema: GetAutomatedDiscoveryConfigurationResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAutomatedDiscoveryConfigurationRoute = createRoute({
  method: 'put',
  path: '/automated-discovery/configuration',
  description: 'Enables or disables automated sensitive data discovery for an account.',
  operationId: 'UpdateAutomatedDiscoveryConfiguration',
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
              status: z
                .enum(['ENABLED', 'DISABLED'])
                .openapi({
                  description:
                    'The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateAutomatedDiscoveryConfigurationResponseSchema },
      },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postDatasourcesS3StatisticsRoute = createRoute({
  method: 'post',
  path: '/datasources/s3/statistics',
  description:
    'Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.',
  operationId: 'GetBucketStatistics',
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
              accountId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier for the Amazon Web Services account.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBucketStatisticsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getClassificationExportConfigurationRoute = createRoute({
  method: 'get',
  path: '/classification-export-configuration',
  description: 'Retrieves the configuration settings for storing data classification results.',
  operationId: 'GetClassificationExportConfiguration',
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
        'application/json': { schema: GetClassificationExportConfigurationResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putClassificationExportConfigurationRoute = createRoute({
  method: 'put',
  path: '/classification-export-configuration',
  description:
    'Creates or updates the configuration settings for storing data classification results.',
  operationId: 'PutClassificationExportConfiguration',
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
              configuration: z
                .object({
                  s3Destination: S3DestinationSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies where to store data classification results, and the encryption settings to use when storing results in that location. The location must be an S3 bucket.',
                  required: [],
                }),
            })
            .openapi({ required: ['configuration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutClassificationExportConfigurationResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getClassificationScopesIdRoute = createRoute({
  method: 'get',
  path: '/classification-scopes/{id}',
  description: 'Retrieves the classification scope settings for an account.',
  operationId: 'GetClassificationScope',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetClassificationScopeResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const patchClassificationScopesIdRoute = createRoute({
  method: 'patch',
  path: '/classification-scopes/{id}',
  description: 'Updates the classification scope settings for an account.',
  operationId: 'UpdateClassificationScope',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              s3: z
                .object({
                  excludes: S3ClassificationScopeExclusionUpdateSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The names of the S3 buckets to add or remove from the list.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateClassificationScopeResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postFindingsStatisticsRoute = createRoute({
  method: 'post',
  path: '/findings/statistics',
  description: ' <p>Retrieves (queries) aggregated statistical data about findings.</p>',
  operationId: 'GetFindingStatistics',
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
              findingCriteria: z
                .object({
                  criterion: CriterionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A condition that specifies the property, operator, and one or more values to use to filter the results.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.',
                  required: [],
                }),
              groupBy: z
                .enum([
                  'resourcesAffected.s3Bucket.name',
                  'type',
                  'classificationDetails.jobId',
                  'severity.description',
                ])
                .openapi({
                  description:
                    '<p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>',
                }),
              size: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response.',
                }),
              sortCriteria: z
                .object({
                  attributeName: FindingStatisticsSortAttributeNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.',
                      }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.',
                  required: [],
                }),
            })
            .openapi({ required: ['groupBy'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingStatisticsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postFindingsDescribeRoute = createRoute({
  method: 'post',
  path: '/findings/describe',
  description: 'Retrieves the details of one or more findings.',
  operationId: 'GetFindings',
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
              findingIds: z
                .array(StringSchema)
                .openapi({
                  description:
                    'An array of strings that lists the unique identifiers for the findings to retrieve. You can specify as many as 50 unique identifiers in this array.',
                }),
              sortCriteria: z
                .object({
                  attributeName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines for a finding.',
                      }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a request for findings.',
                  required: [],
                }),
            })
            .openapi({ required: ['findingIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFindingsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getFindingsPublicationConfigurationRoute = createRoute({
  method: 'get',
  path: '/findings-publication-configuration',
  description: 'Retrieves the configuration settings for publishing findings to Security Hub.',
  operationId: 'GetFindingsPublicationConfiguration',
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
        'application/json': { schema: GetFindingsPublicationConfigurationResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putFindingsPublicationConfigurationRoute = createRoute({
  method: 'put',
  path: '/findings-publication-configuration',
  description: 'Updates the configuration settings for publishing findings to Security Hub.',
  operationId: 'PutFindingsPublicationConfiguration',
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
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique, case-sensitive token that you provide to ensure the idempotency of the request.',
                }),
              securityHubConfiguration: z
                .object({
                  publishClassificationFindings: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether to publish sensitive data findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all sensitive data findings that weren't suppressed by a findings filter. The default value is false.",
                      }),
                  ).exactOptional(),
                  publishPolicyFindings: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "Specifies whether to publish policy findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all new and updated policy findings that weren't suppressed by a findings filter. The default value is true.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies configuration settings that determine which findings are published to Security Hub automatically. For information about how Macie publishes findings to Security Hub, see <a href="https://docs.aws.amazon.com/macie/latest/user/securityhub-integration.html">Amazon Macie integration with Security Hub</a> in the <i>Amazon Macie User Guide</i>.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: PutFindingsPublicationConfigurationResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getInvitationsCountRoute = createRoute({
  method: 'get',
  path: '/invitations/count',
  description:
    'Retrieves the count of Amazon Macie membership invitations that were received by an account.',
  operationId: 'GetInvitationsCount',
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
      content: { 'application/json': { schema: GetInvitationsCountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getMasterRoute = createRoute({
  method: 'get',
  path: '/master',
  description:
    '(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.',
  operationId: 'GetMasterAccount',
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
      content: { 'application/json': { schema: GetMasterAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getResourceProfilesResourceArnRoute = createRoute({
  method: 'get',
  path: '/resource-profiles#resourceArn',
  description:
    'Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.',
  operationId: 'GetResourceProfile',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchResourceProfilesResourceArnRoute = createRoute({
  method: 'patch',
  path: '/resource-profiles#resourceArn',
  description: 'Updates the sensitivity score for an S3 bucket.',
  operationId: 'UpdateResourceProfile',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sensitivityScoreOverride: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getRevealConfigurationRoute = createRoute({
  method: 'get',
  path: '/reveal-configuration',
  description:
    'Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.',
  operationId: 'GetRevealConfiguration',
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
      content: { 'application/json': { schema: GetRevealConfigurationResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putRevealConfigurationRoute = createRoute({
  method: 'put',
  path: '/reveal-configuration',
  description:
    'Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.',
  operationId: 'UpdateRevealConfiguration',
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
              configuration: z
                .object({
                  kmsKeyId: StringMin1Max2048Schema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p>The Amazon Resource Name (ARN), ID, or alias of the KMS key to use to encrypt sensitive data that's retrieved. The key must be an existing, customer managed, symmetric encryption key that's in the same Amazon Web Services Region as the Amazon Macie account.</p> <p>If this value specifies an alias, it must include the following prefix: alias/. If this value specifies a key that's owned by another Amazon Web Services account, it must specify the ARN of the key or the ARN of the key's alias.</p>",
                      }),
                  ).exactOptional(),
                  status: RevealStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The status of the configuration for the Amazon Macie account. In a request, valid values are: ENABLED, enable the configuration for the account; and, DISABLED, disable the configuration for the account. In a response, possible values are: ENABLED, the configuration is currently enabled for the account; and, DISABLED, the configuration is currently disabled for the account.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the configuration settings for retrieving occurrences of sensitive data reported by findings, and the status of the configuration for an Amazon Macie account. When you enable the configuration for the first time, your request must specify an Key Management Service (KMS) key. Otherwise, an error occurs. Macie uses the specified key to encrypt the sensitive data that you retrieve.',
                  required: [],
                }),
            })
            .openapi({ required: ['configuration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRevealConfigurationResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getFindingsFindingIdRevealRoute = createRoute({
  method: 'get',
  path: '/findings/{findingId}/reveal',
  description: 'Retrieves occurrences of sensitive data reported by a finding.',
  operationId: 'GetSensitiveDataOccurrences',
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
      findingId: z
        .string()
        .openapi({
          param: {
            name: 'findingId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the finding.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSensitiveDataOccurrencesResponseSchema } },
    },
    480: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getFindingsFindingIdRevealAvailabilityRoute = createRoute({
  method: 'get',
  path: '/findings/{findingId}/reveal/availability',
  description: 'Checks whether occurrences of sensitive data can be retrieved for a finding.',
  operationId: 'GetSensitiveDataOccurrencesAvailability',
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
      findingId: z
        .string()
        .openapi({
          param: {
            name: 'findingId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the finding.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: GetSensitiveDataOccurrencesAvailabilityResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getTemplatesSensitivityInspectionsIdRoute = createRoute({
  method: 'get',
  path: '/templates/sensitivity-inspections/{id}',
  description:
    ' <p>Retrieves the settings for the sensitivity inspection template for an account.</p>',
  operationId: 'GetSensitivityInspectionTemplate',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSensitivityInspectionTemplateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putTemplatesSensitivityInspectionsIdRoute = createRoute({
  method: 'put',
  path: '/templates/sensitivity-inspections/{id}',
  description:
    ' <p>Updates the settings for the sensitivity inspection template for an account.</p>',
  operationId: 'UpdateSensitivityInspectionTemplate',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A custom description of the template. The description can contain as many as 200 characters.',
                }),
              excludes: z
                .object({
                  managedDataIdentifierIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of unique identifiers, one for each managed data identifier to exclude. To retrieve a list of valid values, use the ListManagedDataIdentifiers operation.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.',
                  required: [],
                }),
              includes: z
                .object({
                  allowListIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of unique identifiers, one for each allow list to include.',
                      }),
                  ).exactOptional(),
                  customDataIdentifierIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of unique identifiers, one for each custom data identifier to include.',
                      }),
                  ).exactOptional(),
                  managedDataIdentifierIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>An array of unique identifiers, one for each managed data identifier to include.</p> <p>Amazon Macie uses these managed data identifiers in addition to managed data identifiers that are subsequently released and recommended for automated sensitive data discovery. To retrieve a list of valid values for the managed data identifiers that are currently available, use the ListManagedDataIdentifiers operation.</p> <para/>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: UpdateSensitivityInspectionTemplateResponseSchema },
      },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postUsageStatisticsRoute = createRoute({
  method: 'post',
  path: '/usage/statistics',
  description: 'Retrieves (queries) quotas and aggregated usage data for one or more accounts.',
  operationId: 'GetUsageStatistics',
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
              filterBy: z
                .array(UsageStatisticsFilterSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array of objects, one for each condition to use to filter the query results. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.',
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
              sortBy: z
                .object({
                  key: UsageStatisticsSortKeySchema.and(
                    z.any().openapi({ description: 'The field to sort the results by.' }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.',
                  required: [],
                }),
              timeRange: z
                .enum(['MONTH_TO_DATE', 'PAST_30_DAYS'])
                .exactOptional()
                .openapi({
                  description:
                    'An inclusive time period that Amazon Macie usage data applies to. Possible values are:',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUsageStatisticsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getUsageRoute = createRoute({
  method: 'get',
  path: '/usage',
  description: 'Retrieves (queries) aggregated usage data for an account.',
  operationId: 'GetUsageTotals',
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
      timeRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'timeRange',
            in: 'query',
            required: false,
            description:
              "The inclusive time period to retrieve the data for. Valid values are: MONTH_TO_DATE, for the current calendar month to date; and, PAST_30_DAYS, for the preceding 30 days. If you don't specify a value for this parameter, Amazon Macie provides aggregated usage data for the preceding 30 days.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetUsageTotalsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postJobsListRoute = createRoute({
  method: 'post',
  path: '/jobs/list',
  description: 'Retrieves a subset of information about one or more classification jobs.',
  operationId: 'ListClassificationJobs',
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
              filterCriteria: z
                .object({
                  excludes: ListOfListJobsFilterTermSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of objects, one for each condition that determines which jobs to exclude from the results.',
                      }),
                  ).exactOptional(),
                  includes: ListOfListJobsFilterTermSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An array of objects, one for each condition that determines which jobs to include in the results.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for filtering the results of a request for information about classification jobs.',
                  required: [],
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
              sortCriteria: z
                .object({
                  attributeName: ListJobsSortAttributeNameSchema.and(
                    z.any().openapi({ description: 'The property to sort the results by.' }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a request for information about classification jobs.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListClassificationJobsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getClassificationScopesRoute = createRoute({
  method: 'get',
  path: '/classification-scopes',
  description: 'Retrieves a subset of information about the classification scope for an account.',
  operationId: 'ListClassificationScopes',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description:
              'The name of the classification scope to retrieve the unique identifier for.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListClassificationScopesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postCustomDataIdentifiersListRoute = createRoute({
  method: 'post',
  path: '/custom-data-identifiers/list',
  description:
    'Retrieves a subset of information about all the custom data identifiers for an account.',
  operationId: 'ListCustomDataIdentifiers',
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
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCustomDataIdentifiersResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postFindingsRoute = createRoute({
  method: 'post',
  path: '/findings',
  description: 'Retrieves a subset of information about one or more findings.',
  operationId: 'ListFindings',
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
              findingCriteria: z
                .object({
                  criterion: CriterionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A condition that specifies the property, operator, and one or more values to use to filter the results.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.',
                  required: [],
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
              sortCriteria: z
                .object({
                  attributeName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines for a finding.',
                      }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a request for findings.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFindingsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postManagedDataIdentifiersListRoute = createRoute({
  method: 'post',
  path: '/managed-data-identifiers/list',
  description:
    'Retrieves information about all the managed data identifiers that Amazon Macie currently provides.',
  operationId: 'ListManagedDataIdentifiers',
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
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListManagedDataIdentifiersResponseSchema } },
    },
  },
})

export const getResourceProfilesArtifactsResourceArnRoute = createRoute({
  method: 'get',
  path: '/resource-profiles/artifacts#resourceArn',
  description:
    'Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.',
  operationId: 'ListResourceProfileArtifacts',
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
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceProfileArtifactsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getResourceProfilesDetectionsResourceArnRoute = createRoute({
  method: 'get',
  path: '/resource-profiles/detections#resourceArn',
  description:
    'Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.',
  operationId: 'ListResourceProfileDetections',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceProfileDetectionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchResourceProfilesDetectionsResourceArnRoute = createRoute({
  method: 'patch',
  path: '/resource-profiles/detections#resourceArn',
  description: 'Updates the sensitivity scoring settings for an S3 bucket.',
  operationId: 'UpdateResourceProfileDetections',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              suppressDataIdentifiers: z
                .array(SuppressDataIdentifierSchema)
                .exactOptional()
                .openapi({
                  description:
                    "An array of objects, one for each custom data identifier or managed data identifier that detected the type of sensitive data to start excluding or including in the bucket's score. To start including all sensitive data types in the score, don't specify any values for this array.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResourceProfileDetectionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTemplatesSensitivityInspectionsRoute = createRoute({
  method: 'get',
  path: '/templates/sensitivity-inspections',
  description:
    ' <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>',
  operationId: 'ListSensitivityInspectionTemplates',
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
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of items to include in each page of a paginated response.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The nextToken string that specifies which page of results to return in a paginated response.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSensitivityInspectionTemplatesResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    'Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({
                  description:
                    'A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
  },
})

export const postDatasourcesSearchResourcesRoute = createRoute({
  method: 'post',
  path: '/datasources/search-resources',
  description:
    'Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.',
  operationId: 'SearchResources',
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
              bucketCriteria: z
                .object({
                  excludes: SearchResourcesCriteriaBlockSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The property- and tag-based conditions that determine which buckets to exclude from the results.',
                      }),
                  ).exactOptional(),
                  includes: SearchResourcesCriteriaBlockSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The property- and tag-based conditions that determine which buckets to include in the results.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.',
                  required: [],
                }),
              maxResults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to include in each page of the response. The default value is 50.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The nextToken string that specifies which page of results to return in a paginated response.',
                }),
              sortCriteria: z
                .object({
                  attributeName: SearchResourcesSortAttributeNameSchema.and(
                    z.any().openapi({ description: 'The property to sort the results by.' }),
                  ).exactOptional(),
                  orderBy: OrderBySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResourcesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postCustomDataIdentifiersTestRoute = createRoute({
  method: 'post',
  path: '/custom-data-identifiers/test',
  description: 'Tests a custom data identifier.',
  operationId: 'TestCustomDataIdentifier',
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
              ignoreWords: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.',
                }),
              keywords: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    "An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.",
                }),
              maximumMatchDistance: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.',
                }),
              regex: z
                .string()
                .openapi({
                  description:
                    'The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.',
                }),
              sampleText: z
                .string()
                .openapi({
                  description:
                    'The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.',
                }),
            })
            .openapi({ required: ['regex', 'sampleText'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestCustomDataIdentifierResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes one or more tags (keys and values) from an Amazon Macie resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              'One or more tags (keys) to remove from the resource. In an HTTP request to remove multiple tags, append the tagKeys parameter and argument for each tag to remove, separated by an ampersand (&amp;).',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
  },
})

export const patchMacieMembersIdRoute = createRoute({
  method: 'patch',
  path: '/macie/members/{id}',
  description:
    'Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.',
  operationId: 'UpdateMemberSession',
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
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique identifier for the Amazon Macie resource that the request applies to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['PAUSED', 'ENABLED'])
                .openapi({
                  description: 'The status of an Amazon Macie account. Valid values are:',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMemberSessionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
