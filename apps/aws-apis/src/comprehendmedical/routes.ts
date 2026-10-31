import { createRoute, z } from '@hono/zod-openapi'

const JobIdSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(32)
  .openapi('JobId')

const JobNameSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-%@]*)$/u)
  .min(1)
  .max(256)
  .openapi('JobName')

const JobStatusSchema = z
  .enum([
    'SUBMITTED',
    'IN_PROGRESS',
    'COMPLETED',
    'PARTIAL_SUCCESS',
    'FAILED',
    'STOP_REQUESTED',
    'STOPPED',
  ])
  .openapi('JobStatus')

const AnyLengthStringSchema = z.string().openapi('AnyLengthString')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const S3BucketSchema = z
  .string()
  .regex(/^[0-9a-z\.\-_]*(?!\.)$/)
  .min(3)
  .max(63)
  .openapi('S3Bucket')

const S3KeySchema = z.string().regex(/.*/).max(1024).openapi('S3Key')

const InputDataConfigSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URI of the S3 bucket that contains the input data. The bucket must be in the same region as the API endpoint that you are calling.</p> <p>Each file in the document collection must be less than 40 KB. You can store a maximum of 30 GB in the bucket.</p>',
        }),
    ),
    S3Key: S3KeySchema.and(
      z.any().openapi({ description: 'The path to the input data files in the S3 bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['S3Bucket'],
    description:
      'The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. ',
  })
  .openapi('InputDataConfig')

const OutputDataConfigSchema = z
  .object({
    S3Bucket: S3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            'When you use the <code>OutputDataConfig</code> object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data. The URI must be in the same region as the API endpoint that you are calling. The location is used as the prefix for the actual location of the output.',
        }),
    ),
    S3Key: S3KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The path to the output data files in the S3 bucket. Comprehend Medical; creates an output directory using the job ID so that the output from one job does not overwrite the output of another.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['S3Bucket'], description: 'The output properties for a detection job.' })
  .openapi('OutputDataConfig')

const LanguageCodeSchema = z.literal('en').openapi('LanguageCode')

const IamRoleArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:iam::[0-9]{12}:role\/.+/)
  .min(20)
  .max(2048)
  .openapi('IamRoleArn')

const ManifestFilePathSchema = z.string().min(1).max(4096).openapi('ManifestFilePath')

const KMSKeySchema = z.string().regex(/.*/).min(1).max(2048).openapi('KMSKey')

const ModelVersionSchema = z.string().openapi('ModelVersion')

const ComprehendMedicalAsyncJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier assigned to the detection job.' }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name that you assigned to the detection job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the detection job. If the status is <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.',
        }),
    ).exactOptional(),
    Message: AnyLengthStringSchema.and(
      z.any().openapi({ description: 'A description of the status of a job.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that the detection job was submitted for processing.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the detection job completed.' }),
    ).exactOptional(),
    ExpirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that job metadata is deleted from the server. Output files in your S3 bucket will not be deleted. After the metadata is deleted, the job will no longer appear in the results of the <code>ListEntitiesDetectionV2Job</code> or the <code>ListPHIDetectionJobs</code> operation.',
        }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input data configuration that you supplied when you created the detection job.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output data configuration that you supplied when you created the detection job.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code of the input documents.' }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that gives Comprehend Medical; read access to your input data.',
        }),
    ).exactOptional(),
    ManifestFilePath: ManifestFilePathSchema.and(
      z
        .any()
        .openapi({
          description: 'The path to the file that describes the results of a batch job.',
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Key Management Service key, if any, used to encrypt the output files. ',
        }),
    ).exactOptional(),
    ModelVersion: ModelVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a detection job.', required: [] })
  .openapi('ComprehendMedicalAsyncJobProperties')

const DescribeEntitiesDetectionV2JobResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the properties associated with a detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEntitiesDetectionV2JobResponse')

const DescribeEntitiesDetectionV2JobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Comprehend Medical; generated for the job. The <code>StartEntitiesDetectionV2Job</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeEntitiesDetectionV2JobRequest' })
  .openapi('DescribeEntitiesDetectionV2JobRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const DescribeICD10CMInferenceJobResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the properties associated with a detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeICD10CMInferenceJobResponse')

const DescribeICD10CMInferenceJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend Medical generated for the job. <code>The StartICD10CMInferenceJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeICD10CMInferenceJobRequest' })
  .openapi('DescribeICD10CMInferenceJobRequest')

const DescribePHIDetectionJobResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the properties associated with a detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePHIDetectionJobResponse')

const DescribePHIDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Comprehend Medical; generated for the job. The <code>StartPHIDetectionJob</code> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribePHIDetectionJobRequest' })
  .openapi('DescribePHIDetectionJobRequest')

const DescribeRxNormInferenceJobResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that contains the properties associated with a detection job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRxNormInferenceJobResponse')

const DescribeRxNormInferenceJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Comprehend Medical generated for the job. The StartRxNormInferenceJob operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeRxNormInferenceJobRequest' })
  .openapi('DescribeRxNormInferenceJobRequest')

const DescribeSNOMEDCTInferenceJobResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobPropertiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSNOMEDCTInferenceJobResponse')

const DescribeSNOMEDCTInferenceJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The identifier that Amazon Comprehend Medical generated for the job. The StartSNOMEDCTInferenceJob operation returns this identifier in its response. ',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeSNOMEDCTInferenceJobRequest' })
  .openapi('DescribeSNOMEDCTInferenceJobRequest')

const IntegerSchema = z.int().openapi('Integer')

const FloatSchema = z.float32().openapi('Float')

const StringSchema = z.string().min(1).openapi('String')

const EntityTypeSchema = z
  .enum([
    'MEDICATION',
    'MEDICAL_CONDITION',
    'PROTECTED_HEALTH_INFORMATION',
    'TEST_TREATMENT_PROCEDURE',
    'ANATOMY',
    'TIME_EXPRESSION',
    'BEHAVIORAL_ENVIRONMENTAL_SOCIAL',
  ])
  .openapi('EntityType')

const EntitySubTypeSchema = z
  .enum([
    'NAME',
    'DX_NAME',
    'DOSAGE',
    'ROUTE_OR_MODE',
    'FORM',
    'FREQUENCY',
    'DURATION',
    'GENERIC_NAME',
    'BRAND_NAME',
    'STRENGTH',
    'RATE',
    'ACUITY',
    'TEST_NAME',
    'TEST_VALUE',
    'TEST_UNITS',
    'TEST_UNIT',
    'PROCEDURE_NAME',
    'TREATMENT_NAME',
    'DATE',
    'AGE',
    'CONTACT_POINT',
    'PHONE_OR_FAX',
    'EMAIL',
    'IDENTIFIER',
    'ID',
    'URL',
    'ADDRESS',
    'PROFESSION',
    'SYSTEM_ORGAN_SITE',
    'DIRECTION',
    'QUALITY',
    'QUANTITY',
    'TIME_EXPRESSION',
    'TIME_TO_MEDICATION_NAME',
    'TIME_TO_DX_NAME',
    'TIME_TO_TEST_NAME',
    'TIME_TO_PROCEDURE_NAME',
    'TIME_TO_TREATMENT_NAME',
    'AMOUNT',
    'GENDER',
    'RACE_ETHNICITY',
    'ALLERGIES',
    'TOBACCO_USE',
    'ALCOHOL_CONSUMPTION',
    'REC_DRUG_USE',
  ])
  .openapi('EntitySubType')

const AttributeNameSchema = z
  .enum([
    'SIGN',
    'SYMPTOM',
    'DIAGNOSIS',
    'NEGATION',
    'PERTAINS_TO_FAMILY',
    'HYPOTHETICAL',
    'LOW_CONFIDENCE',
    'PAST_HISTORY',
    'FUTURE',
  ])
  .openapi('AttributeName')

const TraitSchema = z
  .object({
    Name: AttributeNameSchema.and(
      z
        .any()
        .openapi({ description: ' Provides a name or contextual description about the trait. ' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical; has in the accuracy of this trait.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Provides contextual information about the extracted entity. ',
    required: [],
  })
  .openapi('Trait')

const TraitListSchema = z.array(TraitSchema).openapi('TraitList')

const RelationshipTypeSchema = z
  .enum([
    'EVERY',
    'WITH_DOSAGE',
    'ADMINISTERED_VIA',
    'FOR',
    'NEGATIVE',
    'OVERLAP',
    'DOSAGE',
    'ROUTE_OR_MODE',
    'FORM',
    'FREQUENCY',
    'DURATION',
    'STRENGTH',
    'RATE',
    'ACUITY',
    'TEST_VALUE',
    'TEST_UNITS',
    'TEST_UNIT',
    'DIRECTION',
    'SYSTEM_ORGAN_SITE',
    'AMOUNT',
  ])
  .openapi('RelationshipType')

const AttributeSchema = z
  .object({
    Type: EntitySubTypeSchema.and(
      z.any().openapi({ description: ' The type of attribute. ' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical; has that the segment of text is correctly recognized as an attribute. ',
        }),
    ).exactOptional(),
    RelationshipScore: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical; has that this attribute is correctly related to this entity. ',
        }),
    ).exactOptional(),
    RelationshipType: RelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of relationship between the entity and attribute. Type for the relationship is <code>OVERLAP</code>, indicating that the entity occurred at the same time as the <code>Date_Expression</code>. ',
        }),
    ).exactOptional(),
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier. ',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: ' The segment of input text extracted as this attribute.' }),
    ).exactOptional(),
    Category: EntityTypeSchema.and(
      z.any().openapi({ description: ' The category of attribute. ' }),
    ).exactOptional(),
    Traits: TraitListSchema.and(
      z.any().openapi({ description: ' Contextual information for this attribute. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. ',
    required: [],
  })
  .openapi('Attribute')

const AttributeListSchema = z.array(AttributeSchema).openapi('AttributeList')

const EntitySchema = z
  .object({
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier. ',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Comprehend Medical; has in the accuracy of the detection.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: ' The segment of input text extracted as this entity.' }),
    ).exactOptional(),
    Category: EntityTypeSchema.and(
      z.any().openapi({ description: ' The category of the entity.' }),
    ).exactOptional(),
    Type: EntitySubTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' Describes the specific type of entity with category of entities.',
        }),
    ).exactOptional(),
    Traits: TraitListSchema.and(
      z.any().openapi({ description: 'Contextual information for the entity.' }),
    ).exactOptional(),
    Attributes: AttributeListSchema.and(
      z.any().openapi({ description: ' The extracted attributes that relate to this entity.' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Provides information about an extracted medical entity.',
    required: [],
  })
  .openapi('Entity')

const EntityListSchema = z.array(EntitySchema).openapi('EntityList')

const UnmappedAttributeSchema = z
  .object({
    Type: EntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of the unmapped attribute, could be one of the following values: "MEDICATION", "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or "PROTECTED_HEALTH_INFORMATION". ',
        }),
    ).exactOptional(),
    Attribute: AttributeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specific attribute that has been extracted but not mapped to an entity. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' An attribute that was extracted, but Comprehend Medical; was unable to relate to an entity. ',
    required: [],
  })
  .openapi('UnmappedAttribute')

const UnmappedAttributeListSchema = z
  .array(UnmappedAttributeSchema)
  .openapi('UnmappedAttributeList')

const DetectEntitiesResponseSchema = z
  .object({
    Entities: EntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical; has in the detection and analysis. Attributes and traits of the entity are also returned.',
        }),
    ),
    UnmappedAttributes: UnmappedAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Attributes extracted from the input text that we were unable to relate to an entity.',
        }),
    ).exactOptional(),
    PaginationToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the result of the previous request to <code>DetectEntities</code> was truncated, include the <code>PaginationToken</code> to fetch the next page of entities.',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.',
        }),
    ),
  })
  .openapi({ required: ['Entities', 'ModelVersion'] })
  .openapi('DetectEntitiesResponse')

const BoundedLengthStringSchema = z.string().min(1).max(20000).openapi('BoundedLengthString')

const DetectEntitiesRequestSchema = z
  .object({
    Text: BoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A UTF-8 text string containing the clinical content being examined for entities. Each string must contain fewer than 20,000 bytes of characters.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'DetectEntitiesRequest' })
  .openapi('DetectEntitiesRequest')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const InvalidEncodingExceptionSchema = z.any().openapi('InvalidEncodingException')

const TextSizeLimitExceededExceptionSchema = z.any().openapi('TextSizeLimitExceededException')

const DetectEntitiesV2ResponseSchema = z
  .object({
    Entities: EntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence in the detection and analysis. Attributes and traits of the entity are also returned.',
        }),
    ),
    UnmappedAttributes: UnmappedAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Attributes extracted from the input text that couldn't be related to an entity.",
        }),
    ).exactOptional(),
    PaginationToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result to the <code>DetectEntitiesV2</code> operation was truncated, include the <code>PaginationToken</code> to fetch the next page of entities.',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.',
        }),
    ),
  })
  .openapi({ required: ['Entities', 'ModelVersion'] })
  .openapi('DetectEntitiesV2Response')

const DetectEntitiesV2RequestSchema = z
  .object({
    Text: BoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A UTF-8 string containing the clinical content being examined for entities. Each string must contain fewer than 20,000 bytes of characters.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'DetectEntitiesV2Request' })
  .openapi('DetectEntitiesV2Request')

const DetectPHIResponseSchema = z
  .object({
    Entities: EntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The collection of PHI entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical; has in its detection. ',
        }),
    ),
    PaginationToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the result of the previous request to <code>DetectPHI</code> was truncated, include the <code>PaginationToken</code> to fetch the next page of PHI entities. ',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the model used to analyze the documents. The version number looks like X.X.X. You can use this information to track the model used for a particular batch of documents.',
        }),
    ),
  })
  .openapi({ required: ['Entities', 'ModelVersion'] })
  .openapi('DetectPHIResponse')

const DetectPHIRequestSchema = z
  .object({
    Text: BoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A UTF-8 text string containing the clinical content being examined for PHI entities. Each string must contain fewer than 20,000 bytes of characters.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'DetectPHIRequest' })
  .openapi('DetectPHIRequest')

const OntologyLinkingBoundedLengthStringSchema = z
  .string()
  .min(1)
  .max(10000)
  .openapi('OntologyLinkingBoundedLengthString')

const ICD10CMEntityCategorySchema = z.literal('MEDICAL_CONDITION').openapi('ICD10CMEntityCategory')

const ICD10CMEntityTypeSchema = z.enum(['DX_NAME', 'TIME_EXPRESSION']).openapi('ICD10CMEntityType')

const ICD10CMAttributeTypeSchema = z
  .enum([
    'ACUITY',
    'DIRECTION',
    'SYSTEM_ORGAN_SITE',
    'QUALITY',
    'QUANTITY',
    'TIME_TO_DX_NAME',
    'TIME_EXPRESSION',
  ])
  .openapi('ICD10CMAttributeType')

const ICD10CMTraitNameSchema = z
  .enum([
    'NEGATION',
    'DIAGNOSIS',
    'SIGN',
    'SYMPTOM',
    'PERTAINS_TO_FAMILY',
    'HYPOTHETICAL',
    'LOW_CONFIDENCE',
  ])
  .openapi('ICD10CMTraitName')

const ICD10CMTraitSchema = z
  .object({
    Name: ICD10CMTraitNameSchema.and(
      z
        .any()
        .openapi({ description: 'Provides a name or contextual description about the trait.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Comprehend Medical; has that the segment of text is correctly recognized as a trait.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.',
    required: [],
  })
  .openapi('ICD10CMTrait')

const ICD10CMTraitListSchema = z.array(ICD10CMTraitSchema).openapi('ICD10CMTraitList')

const ICD10CMRelationshipTypeSchema = z
  .enum(['OVERLAP', 'SYSTEM_ORGAN_SITE'])
  .openapi('ICD10CMRelationshipType')

const ICD10CMAttributeSchema = z
  .object({
    Type: ICD10CMAttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of attribute. InferICD10CM detects entities of the type <code>DX_NAME</code>. ',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has that the segment of text is correctly recognized as an attribute.',
        }),
    ).exactOptional(),
    RelationshipScore: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has that this attribute is correctly related to this entity.',
        }),
    ).exactOptional(),
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The segment of input text which contains the detected attribute.',
        }),
    ).exactOptional(),
    Traits: ICD10CMTraitListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The contextual information for the attribute. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.',
        }),
    ).exactOptional(),
    Category: ICD10CMEntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of attribute. Can be either of <code>DX_NAME</code> or <code>TIME_EXPRESSION</code>.',
        }),
    ).exactOptional(),
    RelationshipType: ICD10CMRelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of relationship between the entity and attribute. Type for the relationship can be either of <code>OVERLAP</code> or <code>SYSTEM_ORGAN_SITE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.',
    required: [],
  })
  .openapi('ICD10CMAttribute')

const ICD10CMAttributeListSchema = z.array(ICD10CMAttributeSchema).openapi('ICD10CMAttributeList')

const ICD10CMConceptSchema = z
  .object({
    Description: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The long description of the ICD-10-CM code in the ontology.' }),
    ).exactOptional(),
    Code: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ICD-10-CM code that identifies the concept found in the knowledge base from the Centers for Disease Control.',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has that the entity is accurately linked to an ICD-10-CM concept.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.',
    required: [],
  })
  .openapi('ICD10CMConcept')

const ICD10CMConceptListSchema = z.array(ICD10CMConceptSchema).openapi('ICD10CMConceptList')

const ICD10CMEntitySchema = z
  .object({
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.',
        }),
    ).exactOptional(),
    Text: OntologyLinkingBoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The segment of input text that is matched to the detected entity.',
        }),
    ).exactOptional(),
    Category: ICD10CMEntityCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The category of the entity. InferICD10CM detects entities in the <code>MEDICAL_CONDITION</code> category. ',
        }),
    ).exactOptional(),
    Type: ICD10CMEntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the specific type of entity with category of entities. InferICD10CM detects entities of the type <code>DX_NAME</code> and <code>TIME_EXPRESSION</code>.',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has in the accuracy of the detection.',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    Attributes: ICD10CMAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The detected attributes that relate to the entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the nature of a medical condition.',
        }),
    ).exactOptional(),
    Traits: ICD10CMTraitListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION.</code> ',
        }),
    ).exactOptional(),
    ICD10CMConcepts: ICD10CMConceptListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. ',
    required: [],
  })
  .openapi('ICD10CMEntity')

const ICD10CMEntityListSchema = z.array(ICD10CMEntitySchema).openapi('ICD10CMEntityList')

const InferICD10CMResponseSchema = z
  .object({
    Entities: ICD10CMEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The medical conditions detected in the text linked to ICD-10-CM concepts. If the action is successful, the service sends back an HTTP 200 response, as well as the entities detected.',
        }),
    ),
    PaginationToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request to <code>InferICD10CM</code> was truncated, include the <code>PaginationToken</code> to fetch the next page of medical condition entities. ',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the model used to analyze the documents, in the format <i>n</i>.<i>n</i>.<i>n</i> You can use this information to track the model used for a particular batch of documents.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entities'] })
  .openapi('InferICD10CMResponse')

const InferICD10CMRequestSchema = z
  .object({
    Text: OntologyLinkingBoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input text used for analysis. The input for InferICD10CM is a string from 1 to 10000 characters.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'InferICD10CMRequest' })
  .openapi('InferICD10CMRequest')

const RxNormEntityCategorySchema = z.literal('MEDICATION').openapi('RxNormEntityCategory')

const RxNormEntityTypeSchema = z.enum(['BRAND_NAME', 'GENERIC_NAME']).openapi('RxNormEntityType')

const RxNormAttributeTypeSchema = z
  .enum(['DOSAGE', 'DURATION', 'FORM', 'FREQUENCY', 'RATE', 'ROUTE_OR_MODE', 'STRENGTH'])
  .openapi('RxNormAttributeType')

const RxNormTraitNameSchema = z.literal('NEGATION').openapi('RxNormTraitName')

const RxNormTraitSchema = z
  .object({
    Name: RxNormTraitNameSchema.and(
      z
        .any()
        .openapi({ description: 'Provides a name or contextual description about the trait.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected trait.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication. ',
    required: [],
  })
  .openapi('RxNormTrait')

const RxNormTraitListSchema = z.array(RxNormTraitSchema).openapi('RxNormTraitList')

const RxNormAttributeSchema = z
  .object({
    Type: RxNormAttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of attribute. The types of attributes recognized by InferRxNorm are <code>BRAND_NAME</code> and <code>GENERIC_NAME</code>.',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Comprehend Medical has that the segment of text is correctly recognized as an attribute.',
        }),
    ).exactOptional(),
    RelationshipScore: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has that the attribute is accurately linked to an entity.',
        }),
    ).exactOptional(),
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier.',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The segment of input text which corresponds to the detected attribute.',
        }),
    ).exactOptional(),
    Traits: RxNormTraitListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contextual information for the attribute. InferRxNorm recognizes the trait <code>NEGATION</code> for attributes, i.e. that the patient is not taking a specific dose or form of a medication.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.',
    required: [],
  })
  .openapi('RxNormAttribute')

const RxNormAttributeListSchema = z.array(RxNormAttributeSchema).openapi('RxNormAttributeList')

const RxNormConceptSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: 'The description of the RxNorm concept.' }),
    ).exactOptional(),
    Code: StringSchema.and(
      z.any().openapi({ description: 'RxNorm concept ID, also known as the RxCUI.' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has that the entity is accurately linked to the reported RxNorm concept.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.',
    required: [],
  })
  .openapi('RxNormConcept')

const RxNormConceptListSchema = z.array(RxNormConceptSchema).openapi('RxNormConceptList')

const RxNormEntitySchema = z
  .object({
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier.',
        }),
    ).exactOptional(),
    Text: OntologyLinkingBoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The segment of input text extracted from which the entity was detected.',
        }),
    ).exactOptional(),
    Category: RxNormEntityCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            'The category of the entity. The recognized categories are <code>GENERIC</code> or <code>BRAND_NAME</code>.',
        }),
    ).exactOptional(),
    Type: RxNormEntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the specific type of entity. For InferRxNorm, the recognized entity type is <code>MEDICATION</code>.',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The level of confidence that Amazon Comprehend Medical has in the accuracy of the detected entity.',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string.',
        }),
    ).exactOptional(),
    Attributes: RxNormAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The extracted attributes that relate to the entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>, and <code>STRENGTH</code>.',
        }),
    ).exactOptional(),
    Traits: RxNormTraitListSchema.and(
      z.any().openapi({ description: ' Contextual information for the entity.' }),
    ).exactOptional(),
    RxNormConcepts: RxNormConceptListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The RxNorm concepts that the entity could refer to, along with a score indicating the likelihood of the match.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. ',
    required: [],
  })
  .openapi('RxNormEntity')

const RxNormEntityListSchema = z.array(RxNormEntitySchema).openapi('RxNormEntityList')

const InferRxNormResponseSchema = z
  .object({
    Entities: RxNormEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The medication entities detected in the text linked to RxNorm concepts. If the action is successful, the service sends back an HTTP 200 response, as well as the entities detected.',
        }),
    ),
    PaginationToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request to <code>InferRxNorm</code> was truncated, include the <code>PaginationToken</code> to fetch the next page of medication entities.',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the model used to analyze the documents, in the format <i>n</i>.<i>n</i>.<i>n</i> You can use this information to track the model used for a particular batch of documents.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entities'] })
  .openapi('InferRxNormResponse')

const InferRxNormRequestSchema = z
  .object({
    Text: OntologyLinkingBoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input text used for analysis. The input for InferRxNorm is a string from 1 to 10000 characters.',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'InferRxNormRequest' })
  .openapi('InferRxNormRequest')

const SNOMEDCTEntityCategorySchema = z
  .enum(['MEDICAL_CONDITION', 'ANATOMY', 'TEST_TREATMENT_PROCEDURE'])
  .openapi('SNOMEDCTEntityCategory')

const SNOMEDCTEntityTypeSchema = z
  .enum(['DX_NAME', 'TEST_NAME', 'PROCEDURE_NAME', 'TREATMENT_NAME'])
  .openapi('SNOMEDCTEntityType')

const SNOMEDCTAttributeTypeSchema = z
  .enum(['ACUITY', 'QUALITY', 'DIRECTION', 'SYSTEM_ORGAN_SITE', 'TEST_VALUE', 'TEST_UNIT'])
  .openapi('SNOMEDCTAttributeType')

const SNOMEDCTRelationshipTypeSchema = z
  .enum(['ACUITY', 'QUALITY', 'TEST_VALUE', 'TEST_UNITS', 'DIRECTION', 'SYSTEM_ORGAN_SITE'])
  .openapi('SNOMEDCTRelationshipType')

const SNOMEDCTTraitNameSchema = z
  .enum([
    'NEGATION',
    'DIAGNOSIS',
    'SIGN',
    'SYMPTOM',
    'PERTAINS_TO_FAMILY',
    'HYPOTHETICAL',
    'LOW_CONFIDENCE',
    'PAST_HISTORY',
    'FUTURE',
  ])
  .openapi('SNOMEDCTTraitName')

const SNOMEDCTTraitSchema = z
  .object({
    Name: SNOMEDCTTraitNameSchema.and(
      z.any().openapi({ description: ' The name or contextual description of a detected trait. ' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical has in the accuracy of a detected trait. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Contextual information for an entity. ', required: [] })
  .openapi('SNOMEDCTTrait')

const SNOMEDCTTraitListSchema = z.array(SNOMEDCTTraitSchema).openapi('SNOMEDCTTraitList')

const SNOMEDCTConceptSchema = z
  .object({
    Description: StringSchema.and(
      z.any().openapi({ description: ' The description of the SNOMED-CT concept. ' }),
    ).exactOptional(),
    Code: StringSchema.and(
      z.any().openapi({ description: ' The numeric ID for the SNOMED-CT concept. ' }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence Comprehend Medical has that the entity should be linked to the identified SNOMED-CT concept. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The SNOMED-CT concepts that the entity could refer to, along with a score indicating the likelihood of the match. ',
    required: [],
  })
  .openapi('SNOMEDCTConcept')

const SNOMEDCTConceptListSchema = z.array(SNOMEDCTConceptSchema).openapi('SNOMEDCTConceptList')

const SNOMEDCTAttributeSchema = z
  .object({
    Category: SNOMEDCTEntityCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The category of the detected attribute. Possible categories include MEDICAL_CONDITION, ANATOMY, and TEST_TREATMENT_PROCEDURE. ',
        }),
    ).exactOptional(),
    Type: SNOMEDCTAttributeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of attribute. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE,TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, and TREATMENT_NAME. ',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical has that the segment of text is correctly recognized as an attribute. ',
        }),
    ).exactOptional(),
    RelationshipScore: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical has that this attribute is correctly related to this entity. ',
        }),
    ).exactOptional(),
    RelationshipType: SNOMEDCTRelationshipTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of relationship that exists between the entity and the related attribute. ',
        }),
    ).exactOptional(),
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier. ',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    Text: StringSchema.and(
      z.any().openapi({ description: ' The segment of input text extracted as this attribute. ' }),
    ).exactOptional(),
    Traits: SNOMEDCTTraitListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contextual information for an attribute. Examples include signs, symptoms, diagnosis, and negation. ',
        }),
    ).exactOptional(),
    SNOMEDCTConcepts: SNOMEDCTConceptListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SNOMED-CT concepts specific to an attribute, along with a score indicating the likelihood of the match. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The extracted attributes that relate to an entity. An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. ',
    required: [],
  })
  .openapi('SNOMEDCTAttribute')

const SNOMEDCTAttributeListSchema = z
  .array(SNOMEDCTAttributeSchema)
  .openapi('SNOMEDCTAttributeList')

const SNOMEDCTEntitySchema = z
  .object({
    Id: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier. ',
        }),
    ).exactOptional(),
    Text: OntologyLinkingBoundedLengthStringSchema.and(
      z.any().openapi({ description: ' The segment of input text extracted as this entity. ' }),
    ).exactOptional(),
    Category: SNOMEDCTEntityCategorySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The category of the detected entity. Possible categories are MEDICAL_CONDITION, ANATOMY, or TEST_TREATMENT_PROCEDURE. ',
        }),
    ).exactOptional(),
    Type: SNOMEDCTEntityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the specific type of entity with category of entities. Possible types include DX_NAME, ACUITY, DIRECTION, SYSTEM_ORGAN_SITE, TEST_NAME, TEST_VALUE, TEST_UNIT, PROCEDURE_NAME, or TREATMENT_NAME. ',
        }),
    ).exactOptional(),
    Score: FloatSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The level of confidence that Comprehend Medical has in the accuracy of the detected entity. ',
        }),
    ).exactOptional(),
    BeginOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    EndOffset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string. ',
        }),
    ).exactOptional(),
    Attributes: SNOMEDCTAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. ',
        }),
    ).exactOptional(),
    Traits: SNOMEDCTTraitListSchema.and(
      z.any().openapi({ description: ' Contextual information for the entity. ' }),
    ).exactOptional(),
    SNOMEDCTConcepts: SNOMEDCTConceptListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SNOMED concepts that the entity could refer to, along with a score indicating the likelihood of the match. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. ',
    required: [],
  })
  .openapi('SNOMEDCTEntity')

const SNOMEDCTEntityListSchema = z.array(SNOMEDCTEntitySchema).openapi('SNOMEDCTEntityList')

const SNOMEDCTDetailsSchema = z
  .object({
    Edition: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The edition of SNOMED-CT used. The edition used for the InferSNOMEDCT editions is the US edition. ',
        }),
    ).exactOptional(),
    Language: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The language used in the SNOMED-CT ontology. All Amazon Comprehend Medical operations are US English (en). ',
        }),
    ).exactOptional(),
    VersionDate: StringSchema.and(
      z.any().openapi({ description: ' The version date of the SNOMED-CT ontology used. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date. ',
    required: [],
  })
  .openapi('SNOMEDCTDetails')

const CharactersSchema = z
  .object({
    OriginalTextCharacters: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of characters present in the input text document as processed by Comprehend Medical. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The number of characters in the input text to be analyzed. ',
    required: [],
  })
  .openapi('Characters')

const InferSNOMEDCTResponseSchema = z
  .object({
    Entities: SNOMEDCTEntityListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The collection of medical concept entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. ',
        }),
    ),
    PaginationToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the result of the request is truncated, the pagination token can be used to fetch the next page of entities. ',
        }),
    ).exactOptional(),
    ModelVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The version of the model used to analyze the documents, in the format n.n.n You can use this information to track the model used for a particular batch of documents. ',
        }),
    ).exactOptional(),
    SNOMEDCTDetails: SNOMEDCTDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The details of the SNOMED-CT revision, including the edition, language, and version date. ',
        }),
    ).exactOptional(),
    Characters: CharactersSchema.and(
      z
        .any()
        .openapi({ description: ' The number of characters in the input request documentation. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Entities'] })
  .openapi('InferSNOMEDCTResponse')

const InferSNOMEDCTRequestSchema = z
  .object({
    Text: OntologyLinkingBoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The input text to be analyzed using InferSNOMEDCT. The text should be a string with 1 to 10000 characters. ',
        }),
    ),
  })
  .openapi({ required: ['Text'], title: 'InferSNOMEDCTRequest' })
  .openapi('InferSNOMEDCTRequest')

const ComprehendMedicalAsyncJobPropertiesListSchema = z
  .array(ComprehendMedicalAsyncJobPropertiesSchema)
  .openapi('ComprehendMedicalAsyncJobPropertiesList')

const ListEntitiesDetectionV2JobsResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobPropertiesList: ComprehendMedicalAsyncJobPropertiesListSchema.and(
      z.any().openapi({ description: 'A list containing the properties of each job returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEntitiesDetectionV2JobsResponse')

const ComprehendMedicalAsyncJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters on the name of the job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on job status. Returns only jobs with the specified status.',
        }),
    ).exactOptional(),
    SubmitTimeBefore: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmitTimeAfter: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing. Returns only jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides information for filtering a list of detection jobs.',
    required: [],
  })
  .openapi('ComprehendMedicalAsyncJobFilter')

const MaxResultsIntegerSchema = z.int().min(1).max(500).openapi('MaxResultsInteger')

const ListEntitiesDetectionV2JobsRequestSchema = z
  .object({
    Filter: ComprehendMedicalAsyncJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListEntitiesDetectionV2JobsRequest', required: [] })
  .openapi('ListEntitiesDetectionV2JobsRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ListICD10CMInferenceJobsResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobPropertiesList: ComprehendMedicalAsyncJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListICD10CMInferenceJobsResponse')

const ListICD10CMInferenceJobsRequestSchema = z
  .object({
    Filter: ComprehendMedicalAsyncJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListICD10CMInferenceJobsRequest', required: [] })
  .openapi('ListICD10CMInferenceJobsRequest')

const ListPHIDetectionJobsResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobPropertiesList: ComprehendMedicalAsyncJobPropertiesListSchema.and(
      z.any().openapi({ description: 'A list containing the properties of each job returned.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPHIDetectionJobsResponse')

const ListPHIDetectionJobsRequestSchema = z
  .object({
    Filter: ComprehendMedicalAsyncJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPHIDetectionJobsRequest', required: [] })
  .openapi('ListPHIDetectionJobsRequest')

const ListRxNormInferenceJobsResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobPropertiesList: ComprehendMedicalAsyncJobPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to return in each page. The default is 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRxNormInferenceJobsResponse')

const ListRxNormInferenceJobsRequestSchema = z
  .object({
    Filter: ComprehendMedicalAsyncJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the jobs that are returned. You can filter jobs based on their names, status, or the date and time that they were submitted. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'Identifies the next page of results to return.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListRxNormInferenceJobsRequest', required: [] })
  .openapi('ListRxNormInferenceJobsRequest')

const ListSNOMEDCTInferenceJobsResponseSchema = z
  .object({
    ComprehendMedicalAsyncJobPropertiesList: ComprehendMedicalAsyncJobPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description: ' A list containing the properties of each job that is returned. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z.any().openapi({ description: ' Identifies the next page of results to return. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSNOMEDCTInferenceJobsResponse')

const ListSNOMEDCTInferenceJobsRequestSchema = z
  .object({
    Filter: ComprehendMedicalAsyncJobFilterSchema.exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({ description: ' Identifies the next page of InferSNOMEDCT results to return. ' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum number of results to return in each page. The default is 100. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListSNOMEDCTInferenceJobsRequest', required: [] })
  .openapi('ListSNOMEDCTInferenceJobsRequest')

const StartEntitiesDetectionV2JobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the <code>DescribeEntitiesDetectionV2Job</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartEntitiesDetectionV2JobResponse')

const ClientRequestTokenStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientRequestTokenString')

const StartEntitiesDetectionV2JobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input configuration that specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'The output configuration that specifies where to send the output files.',
        }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Comprehend Medical; generates one for you.",
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. All documents must be in the same language. Comprehend Medical; processes files in US English (en).',
        }),
    ),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartEntitiesDetectionV2JobRequest',
  })
  .openapi('StartEntitiesDetectionV2JobRequest')

const StartICD10CMInferenceJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the <code>StartICD10CMInferenceJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartICD10CMInferenceJobResponse')

const StartICD10CMInferenceJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Comprehend Medical; generates one.",
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartICD10CMInferenceJobRequest',
  })
  .openapi('StartICD10CMInferenceJobRequest')

const StartPHIDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this identifier with the <code>DescribePHIDetectionJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartPHIDetectionJobResponse')

const StartPHIDetectionJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Comprehend Medical; generates one.",
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartPHIDetectionJobRequest',
  })
  .openapi('StartPHIDetectionJobRequest')

const StartRxNormInferenceJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartRxNormInferenceJobResponse')

const StartRxNormInferenceJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and location of the input data for the job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z.any().openapi({ description: 'Specifies where to send the output files.' }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Comprehend Medical; read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions-med.html#auth-role-permissions-med"> Role-Based Permissions Required for Asynchronous Operations</a>.',
        }),
    ),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The identifier of the job.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique identifier for the request. If you don't set the client request token, Comprehend Medical; generates one.",
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS Key Management Service key to encrypt your output files. If you do not specify a key, the files are written in plain text.',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language of the input documents. All documents must be in the same language.',
        }),
    ),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartRxNormInferenceJobRequest',
  })
  .openapi('StartRxNormInferenceJobRequest')

const StartSNOMEDCTInferenceJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The identifier generated for the job. To get the status of a job, use this identifier with the StartSNOMEDCTInferenceJob operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSNOMEDCTInferenceJobResponse')

const StartSNOMEDCTInferenceJobRequestSchema = z
  .object({
    InputDataConfig: InputDataConfigSchema,
    OutputDataConfig: OutputDataConfigSchema,
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants Amazon Comprehend Medical read access to your input data. ',
        }),
    ),
    JobName: JobNameSchema.and(
      z
        .any()
        .openapi({ description: ' The user generated name the asynchronous InferSNOMEDCT job. ' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            " A unique identifier for the request. If you don't set the client request token, Amazon Comprehend Medical generates one. ",
        }),
    ).exactOptional(),
    KMSKey: KMSKeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' An AWS Key Management Service key used to encrypt your output files. If you do not specify a key, the files are written in plain text. ',
        }),
    ).exactOptional(),
    LanguageCode: LanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The language of the input documents. All documents must be in the same language. ',
        }),
    ),
  })
  .openapi({
    required: ['InputDataConfig', 'OutputDataConfig', 'DataAccessRoleArn', 'LanguageCode'],
    title: 'StartSNOMEDCTInferenceJobRequest',
  })
  .openapi('StartSNOMEDCTInferenceJobRequest')

const StopEntitiesDetectionV2JobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the medical entities detection job that was stopped.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopEntitiesDetectionV2JobResponse')

const StopEntitiesDetectionV2JobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the medical entities job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopEntitiesDetectionV2JobRequest' })
  .openapi('StopEntitiesDetectionV2JobRequest')

const StopICD10CMInferenceJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of job, use this identifier with the <code>DescribeICD10CMInferenceJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopICD10CMInferenceJobResponse')

const StopICD10CMInferenceJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(z.any().openapi({ description: 'The identifier of the job.' })),
  })
  .openapi({ required: ['JobId'], title: 'StopICD10CMInferenceJobRequest' })
  .openapi('StopICD10CMInferenceJobRequest')

const StopPHIDetectionJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the PHI detection job that was stopped.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopPHIDetectionJobResponse')

const StopPHIDetectionJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The identifier of the PHI detection job to stop.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopPHIDetectionJobRequest' })
  .openapi('StopPHIDetectionJobRequest')

const StopRxNormInferenceJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of job, use this identifier with the <code>DescribeRxNormInferenceJob</code> operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopRxNormInferenceJobResponse')

const StopRxNormInferenceJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(z.any().openapi({ description: 'The identifier of the job.' })),
  })
  .openapi({ required: ['JobId'], title: 'StopRxNormInferenceJobRequest' })
  .openapi('StopRxNormInferenceJobRequest')

const StopSNOMEDCTInferenceJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The identifier generated for the job. To get the status of job, use this identifier with the DescribeSNOMEDCTInferenceJob operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopSNOMEDCTInferenceJobResponse')

const StopSNOMEDCTInferenceJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description: ' The job id of the asynchronous InferSNOMEDCT job to be stopped. ',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopSNOMEDCTInferenceJobRequest' })
  .openapi('StopSNOMEDCTInferenceJobRequest')

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

export const postXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job',
    description:
      'Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.',
    operationId: 'DescribeEntitiesDetectionV2Job',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeEntitiesDetectionV2JobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeEntitiesDetectionV2JobResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.DescribeICD10CMInferenceJob',
  description:
    'Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.',
  operationId: 'DescribeICD10CMInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.DescribeICD10CMInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.DescribeICD10CMInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeICD10CMInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeICD10CMInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030DescribePHIDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.DescribePHIDetectionJob',
  description:
    'Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.',
  operationId: 'DescribePHIDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.DescribePHIDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.DescribePHIDetectionJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribePHIDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePHIDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.DescribeRxNormInferenceJob',
  description:
    'Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.',
  operationId: 'DescribeRxNormInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.DescribeRxNormInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.DescribeRxNormInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRxNormInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRxNormInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob',
    description:
      ' Gets the properties associated with an InferSNOMEDCT job. Use this operation to get the status of an inference job. ',
    operationId: 'DescribeSNOMEDCTInferenceJob',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeSNOMEDCTInferenceJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeSNOMEDCTInferenceJobResponseSchema } },
      },
      480: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetComprehendMedical20181030DetectEntitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntities',
  description:
    '<p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>',
  operationId: 'DetectEntities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.DetectEntities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.DetectEntities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectEntitiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectEntitiesResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidEncodingException',
      content: { 'application/json': { schema: InvalidEncodingExceptionSchema } },
    },
    485: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
  },
  deprecated: true,
})

export const postXAmzTargetComprehendMedical20181030DetectEntitiesV2Route = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.DetectEntitiesV2',
  description:
    '<p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>',
  operationId: 'DetectEntitiesV2',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.DetectEntitiesV2')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.DetectEntitiesV2'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DetectEntitiesV2RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectEntitiesV2ResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidEncodingException',
      content: { 'application/json': { schema: InvalidEncodingExceptionSchema } },
    },
    485: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030DetectPHIRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.DetectPHI',
  description:
    ' Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.',
  operationId: 'DetectPHI',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.DetectPHI')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.DetectPHI'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DetectPHIRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetectPHIResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidEncodingException',
      content: { 'application/json': { schema: InvalidEncodingExceptionSchema } },
    },
    485: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030InferICD10CMRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.InferICD10CM',
  description:
    'InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. ',
  operationId: 'InferICD10CM',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.InferICD10CM')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.InferICD10CM'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InferICD10CMRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InferICD10CMResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidEncodingException',
      content: { 'application/json': { schema: InvalidEncodingExceptionSchema } },
    },
    485: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030InferRxNormRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.InferRxNorm',
  description:
    'InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. ',
  operationId: 'InferRxNorm',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.InferRxNorm')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.InferRxNorm'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InferRxNormRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InferRxNormResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidEncodingException',
      content: { 'application/json': { schema: InvalidEncodingExceptionSchema } },
    },
    485: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030InferSNOMEDCTRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.InferSNOMEDCT',
  description:
    ' InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology',
  operationId: 'InferSNOMEDCT',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.InferSNOMEDCT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.InferSNOMEDCT'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InferSNOMEDCTRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InferSNOMEDCTResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    484: {
      description: 'InvalidEncodingException',
      content: { 'application/json': { schema: InvalidEncodingExceptionSchema } },
    },
    485: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs',
  description: 'Gets a list of medical entity detection jobs that you have submitted.',
  operationId: 'ListEntitiesDetectionV2Jobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListEntitiesDetectionV2JobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEntitiesDetectionV2JobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.ListICD10CMInferenceJobs',
  description: 'Gets a list of InferICD10CM jobs that you have submitted.',
  operationId: 'ListICD10CMInferenceJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.ListICD10CMInferenceJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.ListICD10CMInferenceJobs'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListICD10CMInferenceJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListICD10CMInferenceJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030ListPHIDetectionJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.ListPHIDetectionJobs',
  description:
    'Gets a list of protected health information (PHI) detection jobs that you have submitted.',
  operationId: 'ListPHIDetectionJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.ListPHIDetectionJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.ListPHIDetectionJobs'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListPHIDetectionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPHIDetectionJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.ListRxNormInferenceJobs',
  description: 'Gets a list of InferRxNorm jobs that you have submitted.',
  operationId: 'ListRxNormInferenceJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.ListRxNormInferenceJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.ListRxNormInferenceJobs'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListRxNormInferenceJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRxNormInferenceJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs',
  description: ' Gets a list of InferSNOMEDCT jobs a user has submitted. ',
  operationId: 'ListSNOMEDCTInferenceJobs',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSNOMEDCTInferenceJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSNOMEDCTInferenceJobsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StartEntitiesDetectionV2Job',
  description:
    'Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.',
  operationId: 'StartEntitiesDetectionV2Job',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StartEntitiesDetectionV2Job')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StartEntitiesDetectionV2Job'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartEntitiesDetectionV2JobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartEntitiesDetectionV2JobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StartICD10CMInferenceJob',
  description:
    'Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.',
  operationId: 'StartICD10CMInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StartICD10CMInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StartICD10CMInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartICD10CMInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartICD10CMInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StartPHIDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StartPHIDetectionJob',
  description:
    'Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.',
  operationId: 'StartPHIDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StartPHIDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.StartPHIDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartPHIDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartPHIDetectionJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StartRxNormInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StartRxNormInferenceJob',
  description:
    'Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.',
  operationId: 'StartRxNormInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StartRxNormInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StartRxNormInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartRxNormInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartRxNormInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StartSNOMEDCTInferenceJob',
  description:
    ' Starts an asynchronous job to detect medical concepts and link them to the SNOMED-CT ontology. Use the DescribeSNOMEDCTInferenceJob operation to track the status of a job. ',
  operationId: 'StartSNOMEDCTInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StartSNOMEDCTInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StartSNOMEDCTInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSNOMEDCTInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSNOMEDCTInferenceJobResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StopEntitiesDetectionV2JobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StopEntitiesDetectionV2Job',
  description: 'Stops a medical entities detection job in progress.',
  operationId: 'StopEntitiesDetectionV2Job',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StopEntitiesDetectionV2Job')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StopEntitiesDetectionV2Job'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopEntitiesDetectionV2JobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopEntitiesDetectionV2JobResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StopICD10CMInferenceJob',
  description: 'Stops an InferICD10CM inference job in progress.',
  operationId: 'StopICD10CMInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StopICD10CMInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StopICD10CMInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopICD10CMInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopICD10CMInferenceJobResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StopPHIDetectionJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StopPHIDetectionJob',
  description: 'Stops a protected health information (PHI) detection job in progress.',
  operationId: 'StopPHIDetectionJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StopPHIDetectionJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.StopPHIDetectionJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopPHIDetectionJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopPHIDetectionJobResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StopRxNormInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StopRxNormInferenceJob',
  description: 'Stops an InferRxNorm inference job in progress.',
  operationId: 'StopRxNormInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StopRxNormInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['ComprehendMedical_20181030.StopRxNormInferenceJob'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopRxNormInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopRxNormInferenceJobResponseSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=ComprehendMedical_20181030.StopSNOMEDCTInferenceJob',
  description: ' Stops an InferSNOMEDCT inference job in progress. ',
  operationId: 'StopSNOMEDCTInferenceJob',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('ComprehendMedical_20181030.StopSNOMEDCTInferenceJob')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['ComprehendMedical_20181030.StopSNOMEDCTInferenceJob'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopSNOMEDCTInferenceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopSNOMEDCTInferenceJobResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
