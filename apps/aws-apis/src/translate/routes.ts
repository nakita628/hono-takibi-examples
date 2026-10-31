import { createRoute, z } from '@hono/zod-openapi'

const ResourceNameSchema = z
  .string()
  .regex(/^([A-Za-z0-9-]_?)+$/)
  .min(1)
  .max(256)
  .openapi('ResourceName')

const ParallelDataStatusSchema = z
  .enum(['CREATING', 'UPDATING', 'ACTIVE', 'DELETING', 'FAILED'])
  .openapi('ParallelDataStatus')

const CreateParallelDataResponseSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The custom name that you assigned to the parallel data resource.',
        }),
    ).exactOptional(),
    Status: ParallelDataStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the parallel data resource. When the resource is ready for you to use, the status is <code>ACTIVE</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateParallelDataResponse')

const DescriptionSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{0,256}/u)
  .max(256)
  .openapi('Description')

const S3UriSchema = z
  .string()
  .regex(/s3:\/\/[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](\/.*)?/)
  .max(1024)
  .openapi('S3Uri')

const ParallelDataFormatSchema = z.enum(['TSV', 'CSV', 'TMX']).openapi('ParallelDataFormat')

const ParallelDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI of the Amazon S3 folder that contains the parallel data input file. The folder must be in the same Region as the API endpoint you are calling.',
        }),
    ),
    Format: ParallelDataFormatSchema.and(
      z.any().openapi({ description: 'The format of the parallel data input file.' }),
    ),
  })
  .openapi({
    required: ['S3Uri', 'Format'],
    description: 'Specifies the format and S3 location of the parallel data input file.',
  })
  .openapi('ParallelDataConfig')

const EncryptionKeyTypeSchema = z.literal('KMS').openapi('EncryptionKeyType')

const EncryptionKeyIDSchema = z
  .string()
  .regex(
    /(arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-\d:)?(\d{12}:)?(((key\/)?[a-zA-Z0-9-_]+)|(alias\/[a-zA-Z0-9:\/_-]+))/,
  )
  .min(1)
  .max(400)
  .openapi('EncryptionKeyID')

const EncryptionKeySchema = z
  .object({
    Type: EncryptionKeyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of encryption key used by Amazon Translate to encrypt this object.',
        }),
    ),
    Id: EncryptionKeyIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the encryption key being used to encrypt this object.',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Id'],
    description: 'The encryption key used to encrypt this object.',
  })
  .openapi('EncryptionKey')

const ClientTokenStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(1)
  .max(64)
  .openapi('ClientTokenString')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The initial part of a key-value pair that forms a tag associated with a given resource. ',
        }),
    ),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The second part of a key-value pair that forms a tag associated with a given resource.',
        }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description:
      'A key-value pair that adds as a metadata to a resource used by Amazon Translate. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(0).max(200).openapi('TagList')

const CreateParallelDataRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom name for the parallel data resource in Amazon Translate. You must assign a name that is unique in the account and region.',
        }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A custom description for the parallel data resource in Amazon Translate.',
        }),
    ).exactOptional(),
    ParallelDataConfig: ParallelDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and S3 location of the parallel data input file.',
        }),
    ),
    EncryptionKey: EncryptionKeySchema.exactOptional(),
    ClientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'ParallelDataConfig', 'ClientToken'],
    title: 'CreateParallelDataRequest',
  })
  .openapi('CreateParallelDataRequest')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const DeleteParallelDataResponseSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the parallel data resource that is being deleted.' }),
    ).exactOptional(),
    Status: ParallelDataStatusSchema.and(
      z.any().openapi({ description: 'The status of the parallel data deletion.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteParallelDataResponse')

const DeleteParallelDataRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the parallel data resource that is being deleted.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteParallelDataRequest' })
  .openapi('DeleteParallelDataRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeleteTerminologyRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the custom terminology being deleted. ' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteTerminologyRequest' })
  .openapi('DeleteTerminologyRequest')

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
    'COMPLETED_WITH_ERROR',
    'FAILED',
    'STOP_REQUESTED',
    'STOPPED',
  ])
  .openapi('JobStatus')

const IntegerSchema = z.int().openapi('Integer')

const JobDetailsSchema = z
  .object({
    TranslatedDocumentsCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The number of documents successfully processed during a translation job.',
        }),
    ).exactOptional(),
    DocumentsWithErrorsCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents that could not be processed during a translation job.',
        }),
    ).exactOptional(),
    InputDocumentsCount: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of documents used as input in a translation job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The number of documents successfully and unsuccessfully processed during a translation job.',
    required: [],
  })
  .openapi('JobDetails')

const LanguageCodeStringSchema = z.string().min(2).max(5).openapi('LanguageCodeString')

const TargetLanguageCodeStringListSchema = z
  .array(LanguageCodeStringSchema)
  .min(1)
  .openapi('TargetLanguageCodeStringList')

const ResourceNameListSchema = z.array(ResourceNameSchema).openapi('ResourceNameList')

const UnboundedLengthStringSchema = z.string().openapi('UnboundedLengthString')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ContentTypeSchema = z
  .string()
  .regex(/^[-\w.]+\/[-\w.+]+$/)
  .max(256)
  .openapi('ContentType')

const InputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI of the AWS S3 folder that contains the input files. Amazon Translate translates all the files in the folder and all its sub-folders. The folder must be in the same Region as the API endpoint you are calling.',
        }),
    ),
    ContentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the format of the data that you submit to Amazon Translate as input. You can specify one of the following multipurpose internet mail extension (MIME) types:</p> <ul> <li> <p> <code>text/html</code>: The input data consists of one or more HTML files. Amazon Translate translates only the text that resides in the <code>html</code> element in each file.</p> </li> <li> <p> <code>text/plain</code>: The input data consists of one or more unformatted text files. Amazon Translate translates every character in this type of input.</p> </li> <li> <p> <code>application/vnd.openxmlformats-officedocument.wordprocessingml.document</code>: The input data consists of one or more Word documents (.docx).</p> </li> <li> <p> <code>application/vnd.openxmlformats-officedocument.presentationml.presentation</code>: The input data consists of one or more PowerPoint Presentation files (.pptx).</p> </li> <li> <p> <code>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</code>: The input data consists of one or more Excel Workbook files (.xlsx).</p> </li> <li> <p> <code>application/x-xliff+xml</code>: The input data consists of one or more XML Localization Interchange File Format (XLIFF) files (.xlf). Amazon Translate supports only XLIFF version 1.2.</p> </li> </ul> <important> <p>If you structure your input data as HTML, ensure that you set this parameter to <code>text/html</code>. By doing so, you cut costs by limiting the translation to the contents of the <code>html</code> element in each file. Otherwise, if you set this parameter to <code>text/plain</code>, your costs will cover the translation of every character.</p> </important>',
        }),
    ),
  })
  .openapi({
    required: ['S3Uri', 'ContentType'],
    description: 'The input configuration properties for requesting a batch translation job.',
  })
  .openapi('InputDataConfig')

const OutputDataConfigSchema = z
  .object({
    S3Uri: S3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URI of the S3 folder that contains a translation job's output file. The folder must be in the same Region as the API endpoint that you are calling.",
        }),
    ),
    EncryptionKey: EncryptionKeySchema.exactOptional(),
  })
  .openapi({
    required: ['S3Uri'],
    description: 'The output configuration properties for a batch translation job.',
  })
  .openapi('OutputDataConfig')

const IamRoleArnSchema = z
  .string()
  .regex(/arn:aws(-[^:]+)?:iam::[0-9]{12}:role\/.+/)
  .min(20)
  .max(2048)
  .openapi('IamRoleArn')

const FormalitySchema = z.enum(['FORMAL', 'INFORMAL']).openapi('Formality')

const ProfanitySchema = z.literal('MASK').openapi('Profanity')

const TranslationSettingsSchema = z
  .object({
    Formality: FormalitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can optionally specify the desired level of formality for translations to supported target languages. The formality setting controls the level of formal language usage (also known as <a href="https://en.wikipedia.org/wiki/Register_(sociolinguistics)">register</a>) in the translation output. You can set the value to informal or formal. If you don\'t specify a value for formality, or if the target language doesn\'t support formality, the translation will ignore the formality setting.</p> <p> If you specify multiple target languages for the job, translate ignores the formality setting for any unsupported target language.</p> <p>For a list of target languages that support formality, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html#customizing-translations-formality-languages">Supported languages</a> in the Amazon Translate Developer Guide.</p>',
        }),
    ).exactOptional(),
    Profanity: ProfanitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Enable the profanity setting if you want Amazon Translate to mask profane words and phrases in your translation output.</p> <p>To mask profane words and phrases, Amazon Translate replaces them with the grawlix string “?$#@$“. This 5-character sequence is used for each profane word or phrase, regardless of the length or number of words.</p> <p>Amazon Translate doesn't detect profanity in all of its supported languages. For languages that don't support profanity detection, see <a href=\"https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-profanity.html#customizing-translations-profanity-languages\">Unsupported languages</a> in the Amazon Translate Developer Guide.</p> <p>If you specify multiple target languages for the job, all the target languages must support profanity masking. If any of the target languages don't support profanity masking, the translation job won't mask profanity for any target language.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.',
    required: [],
  })
  .openapi('TranslationSettings')

const TextTranslationJobPropertiesSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID of the translation job.' }),
    ).exactOptional(),
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The user-defined name of the translation job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'The status of the translation job.' }),
    ).exactOptional(),
    JobDetails: JobDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of documents successfully and unsuccessfully processed during the translation job.',
        }),
    ).exactOptional(),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code of the language of the source text. The language must be a language supported by Amazon Translate.',
        }),
    ).exactOptional(),
    TargetLanguageCodes: TargetLanguageCodeStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code of the language of the target text. The language must be a language supported by Amazon Translate.',
        }),
    ).exactOptional(),
    TerminologyNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the names of the terminologies applied to a translation job. Only one terminology can be applied per <a>StartTextTranslationJob</a> request at this time.',
        }),
    ).exactOptional(),
    ParallelDataNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the names of the parallel data resources applied to the translation job.',
        }),
    ).exactOptional(),
    Message: UnboundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An explanation of any errors that may have occurred during the translation job.',
        }),
    ).exactOptional(),
    SubmittedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the translation job was submitted.' }),
    ).exactOptional(),
    EndTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the translation job ended.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input configuration properties that were specified when the job was requested.',
        }),
    ).exactOptional(),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The output configuration properties that were specified when the job was requested.',
        }),
    ).exactOptional(),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that granted Amazon Translate read access to the job's input data.",
        }),
    ).exactOptional(),
    Settings: TranslationSettingsSchema.and(
      z.any().openapi({ description: 'Settings that modify the translation output.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Provides information about a translation job.', required: [] })
  .openapi('TextTranslationJobProperties')

const DescribeTextTranslationJobResponseSchema = z
  .object({
    TextTranslationJobProperties: TextTranslationJobPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the properties associated with an asynchronous batch translation job.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeTextTranslationJobResponse')

const DescribeTextTranslationJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Amazon Translate generated for the job. The <a>StartTextTranslationJob</a> operation returns this identifier in its response.',
        }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'DescribeTextTranslationJobRequest' })
  .openapi('DescribeTextTranslationJobRequest')

const ParallelDataArnSchema = z.string().min(1).max(512).openapi('ParallelDataArn')

const LanguageCodeStringListSchema = z
  .array(LanguageCodeStringSchema)
  .openapi('LanguageCodeStringList')

const LongSchema = z.int().openapi('Long')

const ParallelDataPropertiesSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The custom name assigned to the parallel data resource.' }),
    ).exactOptional(),
    Arn: ParallelDataArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the parallel data resource.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description assigned to the parallel data resource.' }),
    ).exactOptional(),
    Status: ParallelDataStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the parallel data resource. When the parallel data is ready for you to use, the status is <code>ACTIVE</code>.',
        }),
    ).exactOptional(),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The source language of the translations in the parallel data file.',
        }),
    ).exactOptional(),
    TargetLanguageCodes: LanguageCodeStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language codes for the target languages available in the parallel data file. All possible target languages are returned as an array.',
        }),
    ).exactOptional(),
    ParallelDataConfig: ParallelDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and S3 location of the parallel data input file.',
        }),
    ).exactOptional(),
    Message: UnboundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information from Amazon Translate about the parallel data resource. ',
        }),
    ).exactOptional(),
    ImportedDataSize: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of UTF-8 characters that Amazon Translate imported from the parallel data input file. This number includes only the characters in your translation examples. It does not include characters that are used to format your file. For example, if you provided a Translation Memory Exchange (.tmx) file, this number does not include the tags.',
        }),
    ).exactOptional(),
    ImportedRecordCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of records successfully imported from the parallel data input file.',
        }),
    ).exactOptional(),
    FailedRecordCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of records unsuccessfully imported from the parallel data input file.',
        }),
    ).exactOptional(),
    SkippedRecordCount: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of items in the input file that Amazon Translate skipped when you created or updated the parallel data resource. For example, Amazon Translate skips empty records, empty target texts, and empty lines.',
        }),
    ).exactOptional(),
    EncryptionKey: EncryptionKeySchema.exactOptional(),
    CreatedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time at which the parallel data resource was created.' }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time at which the parallel data resource was last updated.' }),
    ).exactOptional(),
    LatestUpdateAttemptStatus: ParallelDataStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the most recent update attempt for the parallel data resource.',
        }),
    ).exactOptional(),
    LatestUpdateAttemptAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the most recent update was attempted.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The properties of a parallel data resource.', required: [] })
  .openapi('ParallelDataProperties')

const StringSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{0,10000}/u)
  .max(10000)
  .openapi('String')

const ParallelDataDataLocationSchema = z
  .object({
    RepositoryType: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Describes the repository that contains the parallel data input file.',
        }),
    ),
    Location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 location of the parallel data input file. The location is returned as a presigned URL to that has a 30-minute expiration.</p> <important> <p>Amazon Translate doesn't scan all input files for the risk of CSV injection attacks. </p> <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.</p> <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p> </important>",
        }),
    ),
  })
  .openapi({
    required: ['RepositoryType', 'Location'],
    description:
      'The location of the most recent parallel data input file that was successfully imported into Amazon Translate.',
  })
  .openapi('ParallelDataDataLocation')

const GetParallelDataResponseSchema = z
  .object({
    ParallelDataProperties: ParallelDataPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties of the parallel data resource that is being retrieved.',
        }),
    ).exactOptional(),
    DataLocation: ParallelDataDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 location of the most recent parallel data input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration.</p> <important> <p>Amazon Translate doesn't scan all input files for the risk of CSV injection attacks. </p> <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.</p> <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p> </important>",
        }),
    ).exactOptional(),
    AuxiliaryDataLocation: ParallelDataDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a parallel data resource. The location is returned as a presigned URL to that has a 30-minute expiration.',
        }),
    ).exactOptional(),
    LatestUpdateAttemptAuxiliaryDataLocation: ParallelDataDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to update a parallel data resource. The location is returned as a presigned URL to that has a 30-minute expiration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetParallelDataResponse')

const GetParallelDataRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the parallel data resource that is being retrieved.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetParallelDataRequest' })
  .openapi('GetParallelDataRequest')

const TerminologyArnSchema = z.string().min(1).max(512).openapi('TerminologyArn')

const DirectionalitySchema = z.enum(['UNI', 'MULTI']).openapi('Directionality')

const TerminologyDataFormatSchema = z.enum(['CSV', 'TMX', 'TSV']).openapi('TerminologyDataFormat')

const TerminologyPropertiesSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the custom terminology.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the custom terminology properties.' }),
    ).exactOptional(),
    Arn: TerminologyArnSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Resource Name (ARN) of the custom terminology. ' }),
    ).exactOptional(),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code for the source text of the translation request for which the custom terminology is being used.',
        }),
    ).exactOptional(),
    TargetLanguageCodes: LanguageCodeStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language codes for the target languages available with the custom terminology resource. All possible target languages are returned in array.',
        }),
    ).exactOptional(),
    EncryptionKey: EncryptionKeySchema.and(
      z.any().openapi({ description: 'The encryption key for the custom terminology.' }),
    ).exactOptional(),
    SizeBytes: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The size of the file used when importing a custom terminology.' }),
    ).exactOptional(),
    TermCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of terms included in the custom terminology.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the custom terminology was created, based on the timestamp.',
        }),
    ).exactOptional(),
    LastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the custom terminology was last update, based on the timestamp.',
        }),
    ).exactOptional(),
    Directionality: DirectionalitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The directionality of your terminology resource indicates whether it has one source language (uni-directional) or multiple (multi-directional). </p> <dl> <dt>UNI</dt> <dd> <p>The terminology resource has one source language (the first column in a CSV file), and all of its other languages are target languages.</p> </dd> <dt>MULTI</dt> <dd> <p>Any language in the terminology resource can be the source language.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    Message: UnboundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information from Amazon Translate about the terminology resource.',
        }),
    ).exactOptional(),
    SkippedTermCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of terms in the input file that Amazon Translate skipped when you created or updated the terminology resource.',
        }),
    ).exactOptional(),
    Format: TerminologyDataFormatSchema.and(
      z.any().openapi({ description: 'The format of the custom terminology input file.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The properties of the custom terminology.', required: [] })
  .openapi('TerminologyProperties')

const TerminologyDataLocationSchema = z
  .object({
    RepositoryType: StringSchema.and(
      z.any().openapi({ description: 'The repository type for the custom terminology data.' }),
    ),
    Location: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 location of the most recent custom terminology input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration .</p> <important> <p>Amazon Translate doesn't scan all input files for the risk of CSV injection attacks. </p> <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.</p> <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p> </important>",
        }),
    ),
  })
  .openapi({
    required: ['RepositoryType', 'Location'],
    description: 'The location of the custom terminology data.',
  })
  .openapi('TerminologyDataLocation')

const GetTerminologyResponseSchema = z
  .object({
    TerminologyProperties: TerminologyPropertiesSchema.and(
      z.any().openapi({ description: 'The properties of the custom terminology being retrieved.' }),
    ).exactOptional(),
    TerminologyDataLocation: TerminologyDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon S3 location of the most recent custom terminology input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration.</p> <important> <p>Amazon Translate doesn't scan all input files for the risk of CSV injection attacks. </p> <p>CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it.</p> <p>Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</p> </important>",
        }),
    ).exactOptional(),
    AuxiliaryDataLocation: TerminologyDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a terminology resource. The location is returned as a presigned URL to that has a 30-minute expiration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTerminologyResponse')

const GetTerminologyRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the custom terminology being retrieved.' }),
    ),
    TerminologyDataFormat: TerminologyDataFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The data format of the custom terminology being retrieved.</p> <p>If you don't specify this parameter, Amazon Translate returns a file with the same format as the file that was imported to create the terminology. </p> <p>If you specify this parameter when you retrieve a multi-directional terminology resource, you must specify the same format as the input file that was imported to create it. Otherwise, Amazon Translate throws an error.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'GetTerminologyRequest' })
  .openapi('GetTerminologyRequest')

const ImportTerminologyResponseSchema = z
  .object({
    TerminologyProperties: TerminologyPropertiesSchema.and(
      z.any().openapi({ description: 'The properties of the custom terminology being imported.' }),
    ).exactOptional(),
    AuxiliaryDataLocation: TerminologyDataLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a terminology resource. The location is returned as a presigned URL to that has a 30 minute expiration.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportTerminologyResponse')

const MergeStrategySchema = z.literal('OVERWRITE').openapi('MergeStrategy')

const TerminologyFileSchema = z.string().max(10485760).openapi('TerminologyFile')

const TerminologyDataSchema = z
  .object({
    File: TerminologyFileSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file containing the custom terminology data. Your version of the AWS SDK performs a Base64-encoding on this field before sending a request to the AWS service. Users of the SDK should not perform Base64-encoding themselves.',
        }),
    ),
    Format: TerminologyDataFormatSchema.and(
      z.any().openapi({ description: 'The data format of the custom terminology.' }),
    ),
    Directionality: DirectionalitySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The directionality of your terminology resource indicates whether it has one source language (uni-directional) or multiple (multi-directional).</p> <dl> <dt>UNI</dt> <dd> <p>The terminology resource has one source language (for example, the first column in a CSV file), and all of its other languages are target languages. </p> </dd> <dt>MULTI</dt> <dd> <p>Any language in the terminology resource can be the source language or a target language. A single multi-directional terminology resource can be used for jobs that translate different language pairs. For example, if the terminology contains English and Spanish terms, it can be used for jobs that translate English to Spanish and Spanish to English.</p> </dd> </dl> <p>When you create a custom terminology resource without specifying the directionality, it behaves as uni-directional terminology, although this parameter will have a null value.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['File', 'Format'],
    description:
      'The data associated with the custom terminology. For information about the custom terminology file, see <a href="https://docs.aws.amazon.com/translate/latest/dg/creating-custom-terminology.html"> Creating a Custom Terminology</a>.',
  })
  .openapi('TerminologyData')

const ImportTerminologyRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the custom terminology being imported.' }),
    ),
    MergeStrategy: MergeStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the custom terminology being imported.' }),
    ).exactOptional(),
    TerminologyData: TerminologyDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The terminology data for the custom terminology being imported.',
        }),
    ),
    EncryptionKey: EncryptionKeySchema.and(
      z
        .any()
        .openapi({ description: 'The encryption key for the custom terminology being imported.' }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'MergeStrategy', 'TerminologyData'],
    title: 'ImportTerminologyRequest',
  })
  .openapi('ImportTerminologyRequest')

const LocalizedNameStringSchema = z.string().min(1).max(256).openapi('LocalizedNameString')

const LanguageSchema = z
  .object({
    LanguageName: LocalizedNameStringSchema.and(
      z.any().openapi({ description: 'Language name of the supported language.' }),
    ),
    LanguageCode: LanguageCodeStringSchema.and(
      z.any().openapi({ description: 'Language code for the supported language.' }),
    ),
  })
  .openapi({ required: ['LanguageName', 'LanguageCode'], description: 'A supported language.' })
  .openapi('Language')

const LanguagesListSchema = z.array(LanguageSchema).openapi('LanguagesList')

const DisplayLanguageCodeSchema = z
  .enum(['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'zh', 'zh-TW'])
  .openapi('DisplayLanguageCode')

const NextTokenSchema = z
  .string()
  .regex(/\p{ASCII}{0,8192}/u)
  .max(8192)
  .openapi('NextToken')

const ListLanguagesResponseSchema = z
  .object({
    Languages: LanguagesListSchema.and(
      z.any().openapi({ description: 'The list of supported languages.' }),
    ).exactOptional(),
    DisplayLanguageCode: DisplayLanguageCodeSchema.and(
      z.any().openapi({ description: 'The language code passed in with the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the response does not include all remaining results, use the NextToken in the next request to fetch the next group of supported languages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLanguagesResponse')

const MaxResultsIntegerSchema = z.int().min(1).max(500).openapi('MaxResultsInteger')

const ListLanguagesRequestSchema = z
  .object({
    DisplayLanguageCode: DisplayLanguageCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code for the language to use to display the language names in the response. The language code is <code>en</code> by default. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Include the NextToken value to fetch the next group of supported languages. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return in each response.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListLanguagesRequest', required: [] })
  .openapi('ListLanguagesRequest')

const UnsupportedDisplayLanguageCodeExceptionSchema = z
  .any()
  .openapi('UnsupportedDisplayLanguageCodeException')

const ParallelDataPropertiesListSchema = z
  .array(ParallelDataPropertiesSchema)
  .openapi('ParallelDataPropertiesList')

const ListParallelDataResponseSchema = z
  .object({
    ParallelDataPropertiesList: ParallelDataPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties of the parallel data resources returned by this request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListParallelDataResponse')

const ListParallelDataRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string that specifies the next page of results to return in a paginated response.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of parallel data resources returned for each request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListParallelDataRequest', required: [] })
  .openapi('ListParallelDataRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags associated with the Amazon Translate resource being queried. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Translate. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ResourceArnSchema = z.string().min(1).max(512).openapi('ResourceArn')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the given Amazon Translate resource you are querying. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TerminologyPropertiesListSchema = z
  .array(TerminologyPropertiesSchema)
  .openapi('TerminologyPropertiesList')

const ListTerminologiesResponseSchema = z
  .object({
    TerminologyPropertiesList: TerminologyPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The properties list of the custom terminologies returned on the list request.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the response to the ListTerminologies was truncated, the NextToken fetches the next group of custom terminologies.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTerminologiesResponse')

const ListTerminologiesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the request to ListTerminologies was truncated, include the NextToken to fetch the next group of custom terminologies. ',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of custom terminologies returned per list request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTerminologiesRequest', required: [] })
  .openapi('ListTerminologiesRequest')

const TextTranslationJobPropertiesListSchema = z
  .array(TextTranslationJobPropertiesSchema)
  .openapi('TextTranslationJobPropertiesList')

const ListTextTranslationJobsResponseSchema = z
  .object({
    TextTranslationJobPropertiesList: TextTranslationJobPropertiesListSchema.and(
      z
        .any()
        .openapi({ description: 'A list containing the properties of each job that is returned.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTextTranslationJobsResponse')

const TextTranslationJobFilterSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'Filters the list of jobs by name.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z.any().openapi({ description: 'Filters the list of jobs based by job status.' }),
    ).exactOptional(),
    SubmittedBeforeTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing and returns only the jobs submitted before the specified time. Jobs are returned in ascending order, oldest to newest.',
        }),
    ).exactOptional(),
    SubmittedAfterTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the list of jobs based on the time that the job was submitted for processing and returns only the jobs submitted after the specified time. Jobs are returned in descending order, newest to oldest.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.',
    required: [],
  })
  .openapi('TextTranslationJobFilter')

const ListTextTranslationJobsRequestSchema = z
  .object({
    Filter: TextTranslationJobFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parameters that specify which batch translation jobs to retrieve. Filters include job name, job status, and submission time. You can only set one filter at a time.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
    MaxResults: MaxResultsIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results to return in each page. The default value is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTextTranslationJobsRequest', required: [] })
  .openapi('ListTextTranslationJobsRequest')

const InvalidFilterExceptionSchema = z.any().openapi('InvalidFilterException')

const StartTextTranslationJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier generated for the job. To get the status of a job, use this ID with the <a>DescribeTextTranslationJob</a> operation.',
        }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The status of the job. Possible values include:</p> <ul> <li> <p> <code>SUBMITTED</code> - The job has been received and is queued for processing.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Amazon Translate is processing the job.</p> </li> <li> <p> <code>COMPLETED</code> - The job was successfully completed and the output is available.</p> </li> <li> <p> <code>COMPLETED_WITH_ERROR</code> - The job was completed with errors. The errors can be analyzed in the job's output.</p> </li> <li> <p> <code>FAILED</code> - The job did not complete. To get details, use the <a>DescribeTextTranslationJob</a> operation.</p> </li> <li> <p> <code>STOP_REQUESTED</code> - The user who started the job has requested that it be stopped.</p> </li> <li> <p> <code>STOPPED</code> - The job has been stopped.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartTextTranslationJobResponse')

const StartTextTranslationJobRequestSchema = z
  .object({
    JobName: JobNameSchema.and(
      z.any().openapi({ description: 'The name of the batch translation job to be performed.' }),
    ).exactOptional(),
    InputDataConfig: InputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the format and location of the input documents for the translation job.',
        }),
    ),
    OutputDataConfig: OutputDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the S3 folder to which your job output will be saved. ',
        }),
    ),
    DataAccessRoleArn: IamRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that grants Amazon Translate read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/identity-and-access-management.html">Identity and access management </a>.',
        }),
    ),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code of the input language. Specify the language if all input documents share the same language. If you don\'t know the language of the source files, or your input documents contains different source languages, select <code>auto</code>. Amazon Translate auto detects the source language for each input document. For a list of supported language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.',
        }),
    ),
    TargetLanguageCodes: TargetLanguageCodeStringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The target languages of the translation job. Enter up to 10 language codes. Each input file is translated into each target language.</p> <p>Each language code is 2 or 5 characters long. For a list of language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p>',
        }),
    ),
    TerminologyNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a custom terminology resource to add to the translation job. This resource lists examples source terms and the desired translation for each term.</p> <p>This parameter accepts only one custom terminology resource.</p> <p>If you specify multiple target languages for the job, translate uses the designated terminology for each requested target language that has an entry for the source term in the terminology file.</p> <p>For a list of available custom terminology resources, use the <a>ListTerminologies</a> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html">Custom terminology</a>.</p>',
        }),
    ).exactOptional(),
    ParallelDataNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a parallel data resource to add to the translation job. This resource consists of examples that show how you want segments of text to be translated. If you specify multiple target languages for the job, the parallel data file must include translations for all the target languages.</p> <p>When you add parallel data to a translation job, you create an <i>Active Custom Translation</i> job. </p> <p>This parameter accepts only one parallel data resource.</p> <note> <p>Active Custom Translation jobs are priced at a higher rate than other jobs that don\'t use parallel data. For more information, see <a href="http://aws.amazon.com/translate/pricing/">Amazon Translate pricing</a>.</p> </note> <p>For a list of available parallel data resources, use the <a>ListParallelData</a> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-parallel-data.html"> Customizing your translations with parallel data</a>.</p>',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the request. This token is generated for you when using the Amazon Translate SDK.',
        }),
    ),
    Settings: TranslationSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'InputDataConfig',
      'OutputDataConfig',
      'DataAccessRoleArn',
      'SourceLanguageCode',
      'TargetLanguageCodes',
      'ClientToken',
    ],
    title: 'StartTextTranslationJobRequest',
  })
  .openapi('StartTextTranslationJobRequest')

const UnsupportedLanguagePairExceptionSchema = z.any().openapi('UnsupportedLanguagePairException')

const StopTextTranslationJobResponseSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The job ID of the stopped batch translation job.' }),
    ).exactOptional(),
    JobStatus: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the designated job. Upon successful completion, the job's status will be <code>STOPPED</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopTextTranslationJobResponse')

const StopTextTranslationJobRequestSchema = z
  .object({
    JobId: JobIdSchema.and(
      z.any().openapi({ description: 'The job ID of the job to be stopped.' }),
    ),
  })
  .openapi({ required: ['JobId'], title: 'StopTextTranslationJobRequest' })
  .openapi('StopTextTranslationJobRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the given Amazon Translate resource to which you want to associate the tags. ',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags being associated with a specific Amazon Translate resource. There can be a maximum of 50 tags (both existing and pending) associated with a specific resource.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TranslatedDocumentContentSchema = z.string().openapi('TranslatedDocumentContent')

const TranslatedDocumentSchema = z
  .object({
    Content: TranslatedDocumentContentSchema.and(
      z.any().openapi({ description: 'The document containing the translated content.' }),
    ),
  })
  .openapi({ required: ['Content'], description: 'The translated content.' })
  .openapi('TranslatedDocument')

const TermSchema = z
  .object({
    SourceText: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The source text of the term being translated by the custom terminology.',
        }),
    ).exactOptional(),
    TargetText: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The target text of the term being translated by the custom terminology.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The term being translated by the custom terminology.', required: [] })
  .openapi('Term')

const TermListSchema = z.array(TermSchema).openapi('TermList')

const AppliedTerminologySchema = z
  .object({
    Name: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the custom terminology applied to the input text by Amazon Translate for the translated text response.',
        }),
    ).exactOptional(),
    Terms: TermListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be returned, and the specific terms applied will be the first 250 terms in the source text. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The custom terminology applied to the input text by Amazon Translate for the translated text response. This is optional in the response and will only be present if you specified terminology input in the request. Currently, only one terminology can be applied per TranslateText request.',
    required: [],
  })
  .openapi('AppliedTerminology')

const AppliedTerminologyListSchema = z
  .array(AppliedTerminologySchema)
  .openapi('AppliedTerminologyList')

const TranslateDocumentResponseSchema = z
  .object({
    TranslatedDocument: TranslatedDocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The document containing the translated content. The document format matches the source document format.',
        }),
    ),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z.any().openapi({ description: 'The language code of the source document.' }),
    ),
    TargetLanguageCode: LanguageCodeStringSchema.and(
      z.any().openapi({ description: 'The language code of the translated document. ' }),
    ),
    AppliedTerminologies: AppliedTerminologyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the custom terminologies applied to the input text by Amazon Translate to produce the translated text document.',
        }),
    ).exactOptional(),
    AppliedSettings: TranslationSettingsSchema.exactOptional(),
  })
  .openapi({ required: ['TranslatedDocument', 'SourceLanguageCode', 'TargetLanguageCode'] })
  .openapi('TranslateDocumentResponse')

const DocumentContentSchema = z.string().max(102400).openapi('DocumentContent')

const DocumentSchema = z
  .object({
    Content: DocumentContentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Content</code>field type is Binary large object (blob). This object contains the document content converted into base64-encoded binary data. If you use one of the AWS SDKs, the SDK performs the Base64-encoding on this field before sending the request. ',
        }),
    ),
    ContentType: ContentTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Describes the format of the document. You can specify one of the following:</p> <ul> <li> <p> <code>text/html</code> - The input data consists of HTML content. Amazon Translate translates only the text in the HTML element.</p> </li> <li> <p> <code>text/plain</code> - The input data consists of unformatted text. Amazon Translate translates every character in the content. </p> </li> <li> <p> <code>application/vnd.openxmlformats-officedocument.wordprocessingml.document</code> - The input data consists of a Word document (.docx).</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Content', 'ContentType'],
    description: 'The content and content type of a document.',
  })
  .openapi('Document')

const TranslateDocumentRequestSchema = z
  .object({
    Document: DocumentSchema.and(
      z
        .any()
        .openapi({
          description:
            'The content and content type for the document to be translated. The document size must not exceed 100 KB.',
        }),
    ),
    TerminologyNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a terminology list file to add to the translation job. This file provides source terms and the desired translation for each term. A terminology list can contain a maximum of 256 terms. You can use one custom terminology resource in your translation request.</p> <p>Use the <a>ListTerminologies</a> operation to get the available terminology lists.</p> <p>For more information about custom terminology lists, see <a href="https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html">Custom terminology</a>.</p>',
        }),
    ).exactOptional(),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code for the language of the source text. Do not use <code>auto</code>, because <code>TranslateDocument</code> does not support language auto-detection. For a list of supported language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.',
        }),
    ),
    TargetLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code requested for the translated document. For a list of supported language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.',
        }),
    ),
    Settings: TranslationSettingsSchema.exactOptional(),
  })
  .openapi({
    required: ['Document', 'SourceLanguageCode', 'TargetLanguageCode'],
    title: 'TranslateDocumentRequest',
  })
  .openapi('TranslateDocumentRequest')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const TranslatedTextStringSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{0,20000}/u)
  .max(20000)
  .openapi('TranslatedTextString')

const TranslateTextResponseSchema = z
  .object({
    TranslatedText: TranslatedTextStringSchema.and(
      z.any().openapi({ description: 'The translated text.' }),
    ),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z.any().openapi({ description: 'The language code for the language of the source text.' }),
    ),
    TargetLanguageCode: LanguageCodeStringSchema.and(
      z.any().openapi({ description: 'The language code for the language of the target text. ' }),
    ),
    AppliedTerminologies: AppliedTerminologyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the custom terminologies applied to the input text by Amazon Translate for the translated text response.',
        }),
    ).exactOptional(),
    AppliedSettings: TranslationSettingsSchema.and(
      z.any().openapi({ description: 'Optional settings that modify the translation output.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TranslatedText', 'SourceLanguageCode', 'TargetLanguageCode'] })
  .openapi('TranslateTextResponse')

const BoundedLengthStringSchema = z
  .string()
  .regex(/[\P{M}\p{M}]{1,10000}/u)
  .min(1)
  .max(10000)
  .openapi('BoundedLengthString')

const TranslateTextRequestSchema = z
  .object({
    Text: BoundedLengthStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The text to translate. The text string can be a maximum of 10,000 bytes long. Depending on your character set, this may be fewer than 10,000 characters.',
        }),
    ),
    TerminologyNames: ResourceNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of a terminology list file to add to the translation job. This file provides source terms and the desired translation for each term. A terminology list can contain a maximum of 256 terms. You can use one custom terminology resource in your translation request.</p> <p>Use the <a>ListTerminologies</a> operation to get the available terminology lists.</p> <p>For more information about custom terminology lists, see <a href="https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html">Custom terminology</a>.</p>',
        }),
    ).exactOptional(),
    SourceLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The language code for the language of the source text. For a list of language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.</p> <p>To have Amazon Translate determine the source language of your text, you can specify <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify <code>auto</code>, Amazon Translate will call <a href="https://docs.aws.amazon.com/comprehend/latest/dg/comprehend-general.html">Amazon Comprehend</a> to determine the source language.</p> <note> <p>If you specify <code>auto</code>, you must send the <code>TranslateText</code> request in a region that supports Amazon Comprehend. Otherwise, the request returns an error indicating that autodetect is not supported. </p> </note>',
        }),
    ),
    TargetLanguageCode: LanguageCodeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The language code requested for the language of the target text. For a list of language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.',
        }),
    ),
    Settings: TranslationSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings to configure your translation output, including the option to set the formality level of the output text and the option to mask profane words and phrases.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Text', 'SourceLanguageCode', 'TargetLanguageCode'],
    title: 'TranslateTextRequest',
  })
  .openapi('TranslateTextRequest')

const TextSizeLimitExceededExceptionSchema = z.any().openapi('TextSizeLimitExceededException')

const DetectedLanguageLowConfidenceExceptionSchema = z
  .any()
  .openapi('DetectedLanguageLowConfidenceException')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(200).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of the given Amazon Translate resource from which you want to remove the tags. ',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The initial part of a key-value pair that forms a tag being removed from a given resource. Keys must be unique and cannot be duplicated for a particular resource. ',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateParallelDataResponseSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the parallel data resource being updated.' }),
    ).exactOptional(),
    Status: ParallelDataStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the parallel data resource that you are attempting to update. Your update request is accepted only if this status is either <code>ACTIVE</code> or <code>FAILED</code>.',
        }),
    ).exactOptional(),
    LatestUpdateAttemptStatus: ParallelDataStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the parallel data update attempt. When the updated parallel data resource is ready for you to use, the status is <code>ACTIVE</code>.',
        }),
    ).exactOptional(),
    LatestUpdateAttemptAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the most recent update was attempted.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateParallelDataResponse')

const UpdateParallelDataRequestSchema = z
  .object({
    Name: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the parallel data resource being updated.' }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: 'A custom description for the parallel data resource in Amazon Translate.',
        }),
    ).exactOptional(),
    ParallelDataConfig: ParallelDataConfigSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the format and S3 location of the parallel data input file.',
        }),
    ),
    ClientToken: ClientTokenStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'ParallelDataConfig', 'ClientToken'],
    title: 'UpdateParallelDataRequest',
  })
  .openapi('UpdateParallelDataRequest')

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

export const postXAmzTargetAWSShineFrontendService20170701CreateParallelDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.CreateParallelData',
  description:
    'Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.',
  operationId: 'CreateParallelData',
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
        .literal('AWSShineFrontendService_20170701.CreateParallelData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.CreateParallelData'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateParallelDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateParallelDataResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701DeleteParallelDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteParallelData',
  description: 'Deletes a parallel data resource in Amazon Translate.',
  operationId: 'DeleteParallelData',
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
        .literal('AWSShineFrontendService_20170701.DeleteParallelData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.DeleteParallelData'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteParallelDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteParallelDataResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
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

export const postXAmzTargetAWSShineFrontendService20170701DeleteTerminologyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.DeleteTerminology',
  description: 'A synchronous action that deletes a custom terminology.',
  operationId: 'DeleteTerminology',
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
        .literal('AWSShineFrontendService_20170701.DeleteTerminology')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.DeleteTerminology'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteTerminologyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701DescribeTextTranslationJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSShineFrontendService_20170701.DescribeTextTranslationJob',
    description:
      'Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.',
    operationId: 'DescribeTextTranslationJob',
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
          .literal('AWSShineFrontendService_20170701.DescribeTextTranslationJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShineFrontendService_20170701.DescribeTextTranslationJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DescribeTextTranslationJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeTextTranslationJobResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSShineFrontendService20170701GetParallelDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.GetParallelData',
  description: 'Provides information about a parallel data resource.',
  operationId: 'GetParallelData',
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
        .literal('AWSShineFrontendService_20170701.GetParallelData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.GetParallelData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetParallelDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetParallelDataResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
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

export const postXAmzTargetAWSShineFrontendService20170701GetTerminologyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.GetTerminology',
  description: 'Retrieves a custom terminology.',
  operationId: 'GetTerminology',
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
        .literal('AWSShineFrontendService_20170701.GetTerminology')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.GetTerminology'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTerminologyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTerminologyResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
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

export const postXAmzTargetAWSShineFrontendService20170701ImportTerminologyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.ImportTerminology',
  description:
    '<p>Creates or updates a custom terminology, depending on whether one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. The only supported merge strategy is OVERWRITE, where the imported terminology overwrites the existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology takes up to 10 minutes to fully propagate. After that, translations have access to the new terminology.</p>',
  operationId: 'ImportTerminology',
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
        .literal('AWSShineFrontendService_20170701.ImportTerminology')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.ImportTerminology'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportTerminologyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportTerminologyResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701ListLanguagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.ListLanguages',
  description:
    'Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.',
  operationId: 'ListLanguages',
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
        .literal('AWSShineFrontendService_20170701.ListLanguages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.ListLanguages'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListLanguagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLanguagesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'UnsupportedDisplayLanguageCodeException',
      content: { 'application/json': { schema: UnsupportedDisplayLanguageCodeExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701ListParallelDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.ListParallelData',
  description: 'Provides a list of your parallel data resources in Amazon Translate.',
  operationId: 'ListParallelData',
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
        .literal('AWSShineFrontendService_20170701.ListParallelData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.ListParallelData'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListParallelDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListParallelDataResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701ListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTagsForResource',
  description:
    'Lists all tags associated with a given Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.',
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
      'X-Amz-Target': z
        .literal('AWSShineFrontendService_20170701.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.ListTagsForResource'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
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

export const postXAmzTargetAWSShineFrontendService20170701ListTerminologiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTerminologies',
  description: 'Provides a list of custom terminologies associated with your account.',
  operationId: 'ListTerminologies',
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
        .literal('AWSShineFrontendService_20170701.ListTerminologies')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.ListTerminologies'],
            },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTerminologiesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTerminologiesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701ListTextTranslationJobsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSShineFrontendService_20170701.ListTextTranslationJobs',
    description: 'Gets a list of the batch translation jobs that you have submitted.',
    operationId: 'ListTextTranslationJobs',
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
          .literal('AWSShineFrontendService_20170701.ListTextTranslationJobs')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShineFrontendService_20170701.ListTextTranslationJobs'],
              },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ListTextTranslationJobsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTextTranslationJobsResponseSchema } },
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
        description: 'InvalidFilterException',
        content: { 'application/json': { schema: InvalidFilterExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSShineFrontendService20170701StartTextTranslationJobRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSShineFrontendService_20170701.StartTextTranslationJob',
    description:
      '<p>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify <code>auto</code> as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>',
    operationId: 'StartTextTranslationJob',
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
          .literal('AWSShineFrontendService_20170701.StartTextTranslationJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShineFrontendService_20170701.StartTextTranslationJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StartTextTranslationJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StartTextTranslationJobResponseSchema } },
      },
      480: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      481: {
        description: 'UnsupportedLanguagePairException',
        content: { 'application/json': { schema: UnsupportedLanguagePairExceptionSchema } },
      },
      482: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      485: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSShineFrontendService20170701StopTextTranslationJobRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=AWSShineFrontendService_20170701.StopTextTranslationJob',
    description:
      "<p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>",
    operationId: 'StopTextTranslationJob',
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
          .literal('AWSShineFrontendService_20170701.StopTextTranslationJob')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSShineFrontendService_20170701.StopTextTranslationJob'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: StopTextTranslationJobRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: StopTextTranslationJobResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetAWSShineFrontendService20170701TagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.TagResource',
  description:
    'Associates a specific tag with a resource. A tag is a key-value pair that adds as a metadata to a resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.',
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
      'X-Amz-Target': z
        .literal('AWSShineFrontendService_20170701.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701TranslateDocumentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateDocument',
  description:
    '<p>Translates the input document from the source language to the target language. This synchronous operation supports plain text or HTML for the input document. <code>TranslateDocument</code> supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as “en” (English). </p> <p> <code>TranslateDocument</code> does not support language auto-detection. </p> <p> If you set the <code>Formality</code> parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see <a href="https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-formality.html">Setting formality</a>. </p>',
  operationId: 'TranslateDocument',
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
        .literal('AWSShineFrontendService_20170701.TranslateDocument')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.TranslateDocument'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TranslateDocumentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TranslateDocumentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'UnsupportedLanguagePairException',
      content: { 'application/json': { schema: UnsupportedLanguagePairExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701TranslateTextRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.TranslateText',
  description:
    'Translates input text from the source language to the target language. For a list of available languages and language codes, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>.',
  operationId: 'TranslateText',
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
        .literal('AWSShineFrontendService_20170701.TranslateText')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.TranslateText'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TranslateTextRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TranslateTextResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'TextSizeLimitExceededException',
      content: { 'application/json': { schema: TextSizeLimitExceededExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'UnsupportedLanguagePairException',
      content: { 'application/json': { schema: UnsupportedLanguagePairExceptionSchema } },
    },
    484: {
      description: 'DetectedLanguageLowConfidenceException',
      content: { 'application/json': { schema: DetectedLanguageLowConfidenceExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSShineFrontendService20170701UntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.UntagResource',
  description:
    'Removes a specific tag associated with an Amazon Translate resource. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/tagging.html"> Tagging your resources</a>.',
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
      'X-Amz-Target': z
        .literal('AWSShineFrontendService_20170701.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSShineFrontendService_20170701.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
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

export const postXAmzTargetAWSShineFrontendService20170701UpdateParallelDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSShineFrontendService_20170701.UpdateParallelData',
  description:
    'Updates a previously created parallel data resource by importing a new input file from Amazon S3.',
  operationId: 'UpdateParallelData',
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
        .literal('AWSShineFrontendService_20170701.UpdateParallelData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSShineFrontendService_20170701.UpdateParallelData'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateParallelDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateParallelDataResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
