import { createRoute, z } from '@hono/zod-openapi'

const SuccessSchema = z
  .boolean()
  .openapi({
    description: 'Specifies whether (true) or not (false) AWS Import/Export updated your job.',
  })
  .openapi('Success')

const CancelJobOutputSchema = z
  .object({ Success: SuccessSchema.exactOptional() })
  .openapi({ description: 'Output structure for the CancelJob operation.', required: [] })
  .openapi('CancelJobOutput')

const ErrorMessageSchema = z
  .string()
  .openapi({ description: 'The human-readable description of a particular error.' })
  .openapi('ErrorMessage')

const InvalidJobIdExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'The JOBID was missing, not found, or not associated with the AWS account.',
    required: [],
  })
  .openapi('InvalidJobIdException')

const ExpiredJobIdExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'Indicates that the specified job has expired out of the system.',
    required: [],
  })
  .openapi('ExpiredJobIdException')

const CanceledJobIdExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'The specified job ID has been canceled and is no longer valid.',
    required: [],
  })
  .openapi('CanceledJobIdException')

const UnableToCancelJobIdExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'AWS Import/Export cannot cancel the job', required: [] })
  .openapi('UnableToCancelJobIdException')

const InvalidAccessKeyIdExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      "The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.",
    required: [],
  })
  .openapi('InvalidAccessKeyIdException')

const InvalidVersionExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'The client tool version is invalid.', required: [] })
  .openapi('InvalidVersionException')

const JobIdSchema = z
  .string()
  .openapi({ description: 'A unique identifier which refers to a particular job.' })
  .openapi('JobId')

const JobTypeSchema = z
  .enum(['Import', 'Export'])
  .openapi({ description: 'Specifies whether the job to initiate is an import or export job.' })
  .openapi('JobType')

const SignatureSchema = z
  .string()
  .openapi({
    description:
      'An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value.',
  })
  .openapi('Signature')

const SignatureFileContentsSchema = z
  .string()
  .openapi({ description: 'The actual text of the SIGNATURE file to be written to disk.' })
  .openapi('SignatureFileContents')

const WarningMessageSchema = z
  .string()
  .openapi({
    description:
      'An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name.',
  })
  .openapi('WarningMessage')

const DescriptionSchema = z
  .string()
  .openapi({ description: 'The associated description for this object.' })
  .openapi('Description')

const URLSchema = z
  .string()
  .openapi({ description: 'The URL for a given Artifact.' })
  .openapi('URL')

const ArtifactSchema = z
  .object({ Description: DescriptionSchema.exactOptional(), URL: URLSchema.exactOptional() })
  .openapi({
    description:
      'A discrete item that contains the description and URL of an artifact (such as a PDF).',
    required: [],
  })
  .openapi('Artifact')

const ArtifactListSchema = z
  .array(ArtifactSchema)
  .openapi({ description: 'A collection of artifacts.' })
  .openapi('ArtifactList')

const CreateJobOutputSchema = z
  .object({
    JobId: JobIdSchema.exactOptional(),
    JobType: JobTypeSchema.exactOptional(),
    Signature: SignatureSchema.exactOptional(),
    SignatureFileContents: SignatureFileContentsSchema.exactOptional(),
    WarningMessage: WarningMessageSchema.exactOptional(),
    ArtifactList: ArtifactListSchema.exactOptional(),
  })
  .openapi({ description: 'Output structure for the CreateJob operation.', required: [] })
  .openapi('CreateJobOutput')

const MissingParameterExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'One or more required parameters was missing from the request.',
    required: [],
  })
  .openapi('MissingParameterException')

const InvalidParameterExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'One or more parameters had an invalid value.', required: [] })
  .openapi('InvalidParameterException')

const InvalidAddressExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'The address specified in the manifest is invalid.', required: [] })
  .openapi('InvalidAddressException')

const InvalidManifestFieldExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'One or more manifest fields was invalid. Please correct and resubmit.',
    required: [],
  })
  .openapi('InvalidManifestFieldException')

const MissingManifestFieldExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      'One or more required fields were missing from the manifest file. Please correct and resubmit.',
    required: [],
  })
  .openapi('MissingManifestFieldException')

const NoSuchBucketExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      "The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to.",
    required: [],
  })
  .openapi('NoSuchBucketException')

const MissingCustomsExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'One or more required customs parameters was missing from the manifest.',
    required: [],
  })
  .openapi('MissingCustomsException')

const InvalidCustomsExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'One or more customs parameters was invalid. Please correct and resubmit.',
    required: [],
  })
  .openapi('InvalidCustomsException')

const InvalidFileSystemExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'File system specified in export manifest is invalid.', required: [] })
  .openapi('InvalidFileSystemException')

const MultipleRegionsExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      'Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit.',
    required: [],
  })
  .openapi('MultipleRegionsException')

const BucketPermissionExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: 'The account specified does not have the appropriate bucket permissions.',
    required: [],
  })
  .openapi('BucketPermissionException')

const MalformedManifestExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'Your manifest is not well-formed.', required: [] })
  .openapi('MalformedManifestException')

const CreateJobQuotaExceededExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      'Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case.',
    required: [],
  })
  .openapi('CreateJobQuotaExceededException')

const GenericStringSchema = z.string().openapi('GenericString')

const GetShippingLabelOutputSchema = z
  .object({
    ShippingLabelURL: GenericStringSchema.exactOptional(),
    Warning: GenericStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetShippingLabelOutput')

const LocationCodeSchema = z
  .string()
  .openapi({
    description: 'A token representing the location of the storage device, such as "AtAWS".',
  })
  .openapi('LocationCode')

const LocationMessageSchema = z
  .string()
  .openapi({
    description: 'A more human readable form of the physical location of the storage device.',
  })
  .openapi('LocationMessage')

const ProgressCodeSchema = z
  .string()
  .openapi({ description: 'A token representing the state of the job, such as "Started".' })
  .openapi('ProgressCode')

const ProgressMessageSchema = z
  .string()
  .openapi({ description: 'A more human readable form of the job status.' })
  .openapi('ProgressMessage')

const CarrierSchema = z
  .string()
  .openapi({
    description:
      'Name of the shipping company. This value is included when the LocationCode is "Returned".',
  })
  .openapi('Carrier')

const TrackingNumberSchema = z
  .string()
  .openapi({
    description:
      'The shipping tracking number assigned by AWS Import/Export to the storage device when it\'s returned to you. We return this value when the LocationCode is "Returned".',
  })
  .openapi('TrackingNumber')

const LogBucketSchema = z
  .string()
  .openapi({ description: 'Amazon S3 bucket for user logs.' })
  .openapi('LogBucket')

const LogKeySchema = z
  .string()
  .openapi({ description: 'The key where the user logs were stored.' })
  .openapi('LogKey')

const ErrorCountSchema = z
  .int()
  .openapi({
    description:
      'Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors.',
  })
  .openapi('ErrorCount')

const CurrentManifestSchema = z
  .string()
  .openapi({ description: 'The last manifest submitted, which will be used to process the job.' })
  .openapi('CurrentManifest')

const CreationDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z".',
  })
  .openapi('CreationDate')

const GetStatusOutputSchema = z
  .object({
    JobId: JobIdSchema.exactOptional(),
    JobType: JobTypeSchema.exactOptional(),
    LocationCode: LocationCodeSchema.exactOptional(),
    LocationMessage: LocationMessageSchema.exactOptional(),
    ProgressCode: ProgressCodeSchema.exactOptional(),
    ProgressMessage: ProgressMessageSchema.exactOptional(),
    Carrier: CarrierSchema.exactOptional(),
    TrackingNumber: TrackingNumberSchema.exactOptional(),
    LogBucket: LogBucketSchema.exactOptional(),
    LogKey: LogKeySchema.exactOptional(),
    ErrorCount: ErrorCountSchema.exactOptional(),
    Signature: SignatureSchema.exactOptional(),
    SignatureFileContents: SignatureSchema.exactOptional(),
    CurrentManifest: CurrentManifestSchema.exactOptional(),
    CreationDate: CreationDateSchema.exactOptional(),
    ArtifactList: ArtifactListSchema.exactOptional(),
  })
  .openapi({ description: 'Output structure for the GetStatus operation.', required: [] })
  .openapi('GetStatusOutput')

const IsCanceledSchema = z
  .boolean()
  .openapi({ description: 'Indicates whether the job was canceled.' })
  .openapi('IsCanceled')

const JobSchema = z
  .object({
    JobId: JobIdSchema.exactOptional(),
    CreationDate: CreationDateSchema.exactOptional(),
    IsCanceled: IsCanceledSchema.exactOptional(),
    JobType: JobTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Representation of a job returned by the ListJobs operation.',
    required: [],
  })
  .openapi('Job')

const JobsListSchema = z
  .array(JobSchema)
  .openapi({ description: 'A list container for Jobs returned by the ListJobs operation.' })
  .openapi('JobsList')

const IsTruncatedSchema = z
  .boolean()
  .openapi({
    description:
      'Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker.',
  })
  .openapi('IsTruncated')

const ListJobsOutputSchema = z
  .object({ Jobs: JobsListSchema.exactOptional(), IsTruncated: IsTruncatedSchema.exactOptional() })
  .openapi({ description: 'Output structure for the ListJobs operation.', required: [] })
  .openapi('ListJobsOutput')

const UpdateJobOutputSchema = z
  .object({
    Success: SuccessSchema.exactOptional(),
    WarningMessage: WarningMessageSchema.exactOptional(),
    ArtifactList: ArtifactListSchema.exactOptional(),
  })
  .openapi({ description: 'Output structure for the UpateJob operation.', required: [] })
  .openapi('UpdateJobOutput')

const UnableToUpdateJobIdExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: 'AWS Import/Export cannot update the job', required: [] })
  .openapi('UnableToUpdateJobIdException')

const APIVersionSchema = z
  .string()
  .openapi({ description: 'Specifies the version of the client tool.' })
  .openapi('APIVersion')

const CancelJobInputSchema = z
  .object({ JobId: JobIdSchema, APIVersion: APIVersionSchema.exactOptional() })
  .openapi({
    required: ['JobId'],
    title: 'CancelJobInput',
    description: 'Input structure for the CancelJob operation.',
  })
  .openapi('CancelJobInput')

const ManifestSchema = z
  .string()
  .openapi({ description: 'The UTF-8 encoded text of the manifest file.' })
  .openapi('Manifest')

const ManifestAddendumSchema = z
  .string()
  .openapi({ description: 'For internal use only.' })
  .openapi('ManifestAddendum')

const ValidateOnlySchema = z
  .boolean()
  .openapi({
    description:
      'Validate the manifest and parameter values in the request but do not actually create a job.',
  })
  .openapi('ValidateOnly')

const CreateJobInputSchema = z
  .object({
    JobType: JobTypeSchema,
    Manifest: ManifestSchema,
    ManifestAddendum: ManifestAddendumSchema.exactOptional(),
    ValidateOnly: ValidateOnlySchema,
    APIVersion: APIVersionSchema.exactOptional(),
  })
  .openapi({
    required: ['JobType', 'Manifest', 'ValidateOnly'],
    title: 'CreateJobInput',
    description: 'Input structure for the CreateJob operation.',
  })
  .openapi('CreateJobInput')

const JobIdListSchema = z.array(GenericStringSchema).openapi('JobIdList')

const NameSchema = z
  .string()
  .openapi({
    description: 'Specifies the name of the person responsible for shipping this package.',
  })
  .openapi('Name')

const CompanySchema = z
  .string()
  .openapi({ description: 'Specifies the name of the company that will ship this package.' })
  .openapi('Company')

const PhoneNumberSchema = z
  .string()
  .openapi({
    description: 'Specifies the phone number of the person responsible for shipping this package.',
  })
  .openapi('PhoneNumber')

const CountrySchema = z
  .string()
  .openapi({ description: 'Specifies the name of your country for the return address.' })
  .openapi('Country')

const StateOrProvinceSchema = z
  .string()
  .openapi({
    description: 'Specifies the name of your state or your province for the return address.',
  })
  .openapi('StateOrProvince')

const CitySchema = z
  .string()
  .openapi({ description: 'Specifies the name of your city for the return address.' })
  .openapi('City')

const PostalCodeSchema = z
  .string()
  .openapi({ description: 'Specifies the postal code for the return address.' })
  .openapi('PostalCode')

const Street1Schema = z
  .string()
  .openapi({
    description:
      'Specifies the first part of the street address for the return address, for example 1234 Main Street.',
  })
  .openapi('Street1')

const Street2Schema = z
  .string()
  .openapi({
    description:
      'Specifies the optional second part of the street address for the return address, for example Suite 100.',
  })
  .openapi('Street2')

const Street3Schema = z
  .string()
  .openapi({
    description:
      'Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.',
  })
  .openapi('Street3')

const GetShippingLabelInputSchema = z
  .object({
    jobIds: JobIdListSchema,
    name: NameSchema.exactOptional(),
    company: CompanySchema.exactOptional(),
    phoneNumber: PhoneNumberSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    stateOrProvince: StateOrProvinceSchema.exactOptional(),
    city: CitySchema.exactOptional(),
    postalCode: PostalCodeSchema.exactOptional(),
    street1: Street1Schema.exactOptional(),
    street2: Street2Schema.exactOptional(),
    street3: Street3Schema.exactOptional(),
    APIVersion: APIVersionSchema.exactOptional(),
  })
  .openapi({ required: ['jobIds'], title: 'GetShippingLabelInput' })
  .openapi('GetShippingLabelInput')

const GetStatusInputSchema = z
  .object({ JobId: JobIdSchema, APIVersion: APIVersionSchema.exactOptional() })
  .openapi({
    required: ['JobId'],
    title: 'GetStatusInput',
    description: 'Input structure for the GetStatus operation.',
  })
  .openapi('GetStatusInput')

const MaxJobsSchema = z
  .int()
  .openapi({
    description:
      'Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.',
  })
  .openapi('MaxJobs')

const MarkerSchema = z
  .string()
  .openapi({
    description:
      'Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.',
  })
  .openapi('Marker')

const ListJobsInputSchema = z
  .object({
    MaxJobs: MaxJobsSchema.exactOptional(),
    Marker: MarkerSchema.exactOptional(),
    APIVersion: APIVersionSchema.exactOptional(),
  })
  .openapi({
    title: 'ListJobsInput',
    description: 'Input structure for the ListJobs operation.',
    required: [],
  })
  .openapi('ListJobsInput')

const UpdateJobInputSchema = z
  .object({
    JobId: JobIdSchema,
    Manifest: ManifestSchema,
    JobType: JobTypeSchema,
    ValidateOnly: ValidateOnlySchema,
    APIVersion: APIVersionSchema.exactOptional(),
  })
  .openapi({
    required: ['JobId', 'Manifest', 'JobType', 'ValidateOnly'],
    title: 'UpdateJobInput',
    description: 'Input structure for the UpateJob operation.',
  })
  .openapi('UpdateJobInput')

const AWSAccessKeyIdParamsSchema = z
  .string()
  .openapi({
    param: { name: 'AWSAccessKeyId', in: 'query', schema: { type: 'string' }, required: true },
  })

const ActionParamsSchema = z
  .string()
  .openapi({ param: { name: 'Action', in: 'query', schema: { type: 'string' }, required: true } })

const SignatureMethodParamsSchema = z
  .string()
  .openapi({
    param: { name: 'SignatureMethod', in: 'query', schema: { type: 'string' }, required: true },
  })

const SignatureVersionParamsSchema = z
  .string()
  .openapi({
    param: { name: 'SignatureVersion', in: 'query', schema: { type: 'string' }, required: true },
  })

const TimestampParamsSchema = z
  .string()
  .openapi({
    param: { name: 'Timestamp', in: 'query', schema: { type: 'string' }, required: true },
  })

const VersionParamsSchema = z
  .string()
  .openapi({ param: { name: 'Version', in: 'query', schema: { type: 'string' }, required: true } })

const SignatureParamsSchema = z
  .string()
  .openapi({
    param: { name: 'Signature', in: 'query', schema: { type: 'string' }, required: true },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v2',
  'x-amazon-apigateway-authtype': 'awsSigv2',
}

export const getOperationCancelJobActionCancelJobRoute = createRoute({
  method: 'get',
  path: '/#Operation=CancelJob&Action=CancelJob',
  description:
    'This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.',
  operationId: 'GET_CancelJob',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('CancelJob')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CancelJob'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      JobId: z
        .string()
        .openapi({
          param: {
            name: 'JobId',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'A unique identifier which refers to a particular job.',
            },
          },
          description: 'A unique identifier which refers to a particular job.',
        }),
      APIVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'APIVersion',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Specifies the version of the client tool.' },
          },
          description: 'Specifies the version of the client tool.',
        }),
      Operation: z
        .literal('CancelJob')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CancelJob'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CancelJobOutputSchema } } },
    480: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    481: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    482: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    483: {
      description: 'UnableToCancelJobIdException',
      content: { 'text/xml': { schema: UnableToCancelJobIdExceptionSchema } },
    },
    484: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    485: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const postOperationCancelJobActionCancelJobRoute = createRoute({
  method: 'post',
  path: '/#Operation=CancelJob&Action=CancelJob',
  description:
    'This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.',
  operationId: 'POST_CancelJob',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('CancelJob')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CancelJob'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      Operation: z
        .literal('CancelJob')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CancelJob'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CancelJobInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CancelJobOutputSchema } } },
    480: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    481: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    482: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    483: {
      description: 'UnableToCancelJobIdException',
      content: { 'text/xml': { schema: UnableToCancelJobIdExceptionSchema } },
    },
    484: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    485: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const getOperationCreateJobActionCreateJobRoute = createRoute({
  method: 'get',
  path: '/#Operation=CreateJob&Action=CreateJob',
  description:
    'This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.',
  operationId: 'GET_CreateJob',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('CreateJob')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateJob'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      JobType: z
        .enum(['Import', 'Export'])
        .openapi({
          param: {
            name: 'JobType',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              enum: ['Import', 'Export'],
              description: 'Specifies whether the job to initiate is an import or export job.',
            },
          },
          description: 'Specifies whether the job to initiate is an import or export job.',
        }),
      Manifest: z
        .string()
        .openapi({
          param: {
            name: 'Manifest',
            in: 'query',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The UTF-8 encoded text of the manifest file.' },
          },
          description: 'The UTF-8 encoded text of the manifest file.',
        }),
      ManifestAddendum: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ManifestAddendum',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'For internal use only.' },
          },
          description: 'For internal use only.',
        }),
      ValidateOnly: z
        .stringbool()
        .openapi({
          param: {
            name: 'ValidateOnly',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'boolean',
              description:
                'Validate the manifest and parameter values in the request but do not actually create a job.',
            },
          },
          description:
            'Validate the manifest and parameter values in the request but do not actually create a job.',
        }),
      APIVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'APIVersion',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Specifies the version of the client tool.' },
          },
          description: 'Specifies the version of the client tool.',
        }),
      Operation: z
        .literal('CreateJob')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateJob'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateJobOutputSchema } } },
    480: {
      description: 'MissingParameterException',
      content: { 'text/xml': { schema: MissingParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAddressException',
      content: { 'text/xml': { schema: InvalidAddressExceptionSchema } },
    },
    484: {
      description: 'InvalidManifestFieldException',
      content: { 'text/xml': { schema: InvalidManifestFieldExceptionSchema } },
    },
    485: {
      description: 'MissingManifestFieldException',
      content: { 'text/xml': { schema: MissingManifestFieldExceptionSchema } },
    },
    486: {
      description: 'NoSuchBucketException',
      content: { 'text/xml': { schema: NoSuchBucketExceptionSchema } },
    },
    487: {
      description: 'MissingCustomsException',
      content: { 'text/xml': { schema: MissingCustomsExceptionSchema } },
    },
    488: {
      description: 'InvalidCustomsException',
      content: { 'text/xml': { schema: InvalidCustomsExceptionSchema } },
    },
    489: {
      description: 'InvalidFileSystemException',
      content: { 'text/xml': { schema: InvalidFileSystemExceptionSchema } },
    },
    490: {
      description: 'MultipleRegionsException',
      content: { 'text/xml': { schema: MultipleRegionsExceptionSchema } },
    },
    491: {
      description: 'BucketPermissionException',
      content: { 'text/xml': { schema: BucketPermissionExceptionSchema } },
    },
    492: {
      description: 'MalformedManifestException',
      content: { 'text/xml': { schema: MalformedManifestExceptionSchema } },
    },
    493: {
      description: 'CreateJobQuotaExceededException',
      content: { 'text/xml': { schema: CreateJobQuotaExceededExceptionSchema } },
    },
    494: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    495: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const postOperationCreateJobActionCreateJobRoute = createRoute({
  method: 'post',
  path: '/#Operation=CreateJob&Action=CreateJob',
  description:
    'This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.',
  operationId: 'POST_CreateJob',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('CreateJob')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateJob'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      Operation: z
        .literal('CreateJob')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['CreateJob'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: CreateJobInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: CreateJobOutputSchema } } },
    480: {
      description: 'MissingParameterException',
      content: { 'text/xml': { schema: MissingParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAddressException',
      content: { 'text/xml': { schema: InvalidAddressExceptionSchema } },
    },
    484: {
      description: 'InvalidManifestFieldException',
      content: { 'text/xml': { schema: InvalidManifestFieldExceptionSchema } },
    },
    485: {
      description: 'MissingManifestFieldException',
      content: { 'text/xml': { schema: MissingManifestFieldExceptionSchema } },
    },
    486: {
      description: 'NoSuchBucketException',
      content: { 'text/xml': { schema: NoSuchBucketExceptionSchema } },
    },
    487: {
      description: 'MissingCustomsException',
      content: { 'text/xml': { schema: MissingCustomsExceptionSchema } },
    },
    488: {
      description: 'InvalidCustomsException',
      content: { 'text/xml': { schema: InvalidCustomsExceptionSchema } },
    },
    489: {
      description: 'InvalidFileSystemException',
      content: { 'text/xml': { schema: InvalidFileSystemExceptionSchema } },
    },
    490: {
      description: 'MultipleRegionsException',
      content: { 'text/xml': { schema: MultipleRegionsExceptionSchema } },
    },
    491: {
      description: 'BucketPermissionException',
      content: { 'text/xml': { schema: BucketPermissionExceptionSchema } },
    },
    492: {
      description: 'MalformedManifestException',
      content: { 'text/xml': { schema: MalformedManifestExceptionSchema } },
    },
    493: {
      description: 'CreateJobQuotaExceededException',
      content: { 'text/xml': { schema: CreateJobQuotaExceededExceptionSchema } },
    },
    494: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    495: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const getOperationGetShippingLabelActionGetShippingLabelRoute = createRoute({
  method: 'get',
  path: '/#Operation=GetShippingLabel&Action=GetShippingLabel',
  description:
    'This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.',
  operationId: 'GET_GetShippingLabel',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('GetShippingLabel')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetShippingLabel'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      jobIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(GenericStringSchema),
        )
        .openapi({
          param: {
            name: 'jobIds',
            in: 'query',
            required: true,
            description: '',
            schema: { type: 'array', items: { $ref: '#/components/schemas/GenericString' } },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the name of the person responsible for shipping this package.',
            },
          },
          description: 'Specifies the name of the person responsible for shipping this package.',
        }),
      company: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'company',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'Specifies the name of the company that will ship this package.',
            },
          },
          description: 'Specifies the name of the company that will ship this package.',
        }),
      phoneNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'phoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the phone number of the person responsible for shipping this package.',
            },
          },
          description:
            'Specifies the phone number of the person responsible for shipping this package.',
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'country',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'Specifies the name of your country for the return address.',
            },
          },
          description: 'Specifies the name of your country for the return address.',
        }),
      stateOrProvince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'stateOrProvince',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the name of your state or your province for the return address.',
            },
          },
          description: 'Specifies the name of your state or your province for the return address.',
        }),
      city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'city',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'Specifies the name of your city for the return address.',
            },
          },
          description: 'Specifies the name of your city for the return address.',
        }),
      postalCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'postalCode',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'Specifies the postal code for the return address.',
            },
          },
          description: 'Specifies the postal code for the return address.',
        }),
      street1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'street1',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the first part of the street address for the return address, for example 1234 Main Street.',
            },
          },
          description:
            'Specifies the first part of the street address for the return address, for example 1234 Main Street.',
        }),
      street2: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'street2',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the optional second part of the street address for the return address, for example Suite 100.',
            },
          },
          description:
            'Specifies the optional second part of the street address for the return address, for example Suite 100.',
        }),
      street3: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'street3',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.',
            },
          },
          description:
            'Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.',
        }),
      APIVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'APIVersion',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Specifies the version of the client tool.' },
          },
          description: 'Specifies the version of the client tool.',
        }),
      Operation: z
        .literal('GetShippingLabel')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetShippingLabel'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetShippingLabelOutputSchema } },
    },
    480: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    481: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    482: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    484: {
      description: 'InvalidAddressException',
      content: { 'text/xml': { schema: InvalidAddressExceptionSchema } },
    },
    485: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const postOperationGetShippingLabelActionGetShippingLabelRoute = createRoute({
  method: 'post',
  path: '/#Operation=GetShippingLabel&Action=GetShippingLabel',
  description:
    'This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.',
  operationId: 'POST_GetShippingLabel',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('GetShippingLabel')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetShippingLabel'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      Operation: z
        .literal('GetShippingLabel')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetShippingLabel'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetShippingLabelInputSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/xml': { schema: GetShippingLabelOutputSchema } },
    },
    480: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    481: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    482: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    484: {
      description: 'InvalidAddressException',
      content: { 'text/xml': { schema: InvalidAddressExceptionSchema } },
    },
    485: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
    486: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
  },
})

export const getOperationGetStatusActionGetStatusRoute = createRoute({
  method: 'get',
  path: '/#Operation=GetStatus&Action=GetStatus',
  description:
    'This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.',
  operationId: 'GET_GetStatus',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('GetStatus')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetStatus'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      JobId: z
        .string()
        .openapi({
          param: {
            name: 'JobId',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'A unique identifier which refers to a particular job.',
            },
          },
          description: 'A unique identifier which refers to a particular job.',
        }),
      APIVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'APIVersion',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Specifies the version of the client tool.' },
          },
          description: 'Specifies the version of the client tool.',
        }),
      Operation: z
        .literal('GetStatus')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetStatus'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetStatusOutputSchema } } },
    480: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    481: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    482: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    484: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const postOperationGetStatusActionGetStatusRoute = createRoute({
  method: 'post',
  path: '/#Operation=GetStatus&Action=GetStatus',
  description:
    'This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.',
  operationId: 'POST_GetStatus',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('GetStatus')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetStatus'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      Operation: z
        .literal('GetStatus')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['GetStatus'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: GetStatusInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: GetStatusOutputSchema } } },
    480: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    481: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    482: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    484: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const getOperationListJobsActionListJobsRoute = createRoute({
  method: 'get',
  path: '/#Operation=ListJobs&Action=ListJobs',
  description:
    'This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.',
  operationId: 'GET_ListJobs',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('ListJobs')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListJobs'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      MaxJobs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxJobs',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                'Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.',
            },
          },
          description:
            'Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker.',
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.',
            },
          },
          description:
            'Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs.',
        }),
      APIVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'APIVersion',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Specifies the version of the client tool.' },
          },
          description: 'Specifies the version of the client tool.',
        }),
      Operation: z
        .literal('ListJobs')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListJobs'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListJobsOutputSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    482: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const postOperationListJobsActionListJobsRoute = createRoute({
  method: 'post',
  path: '/#Operation=ListJobs&Action=ListJobs',
  description:
    'This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.',
  operationId: 'POST_ListJobs',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('ListJobs')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListJobs'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      MaxJobs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxJobs',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
      Operation: z
        .literal('ListJobs')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['ListJobs'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: ListJobsInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: ListJobsOutputSchema } } },
    480: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    482: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const getOperationUpdateJobActionUpdateJobRoute = createRoute({
  method: 'get',
  path: '/#Operation=UpdateJob&Action=UpdateJob',
  description:
    'You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.',
  operationId: 'GET_UpdateJob',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('UpdateJob')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateJob'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      JobId: z
        .string()
        .openapi({
          param: {
            name: 'JobId',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'A unique identifier which refers to a particular job.',
            },
          },
          description: 'A unique identifier which refers to a particular job.',
        }),
      Manifest: z
        .string()
        .openapi({
          param: {
            name: 'Manifest',
            in: 'query',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The UTF-8 encoded text of the manifest file.' },
          },
          description: 'The UTF-8 encoded text of the manifest file.',
        }),
      JobType: z
        .enum(['Import', 'Export'])
        .openapi({
          param: {
            name: 'JobType',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              enum: ['Import', 'Export'],
              description: 'Specifies whether the job to initiate is an import or export job.',
            },
          },
          description: 'Specifies whether the job to initiate is an import or export job.',
        }),
      ValidateOnly: z
        .stringbool()
        .openapi({
          param: {
            name: 'ValidateOnly',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'boolean',
              description:
                'Validate the manifest and parameter values in the request but do not actually create a job.',
            },
          },
          description:
            'Validate the manifest and parameter values in the request but do not actually create a job.',
        }),
      APIVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'APIVersion',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Specifies the version of the client tool.' },
          },
          description: 'Specifies the version of the client tool.',
        }),
      Operation: z
        .literal('UpdateJob')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateJob'] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UpdateJobOutputSchema } } },
    480: {
      description: 'MissingParameterException',
      content: { 'text/xml': { schema: MissingParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAddressException',
      content: { 'text/xml': { schema: InvalidAddressExceptionSchema } },
    },
    484: {
      description: 'InvalidManifestFieldException',
      content: { 'text/xml': { schema: InvalidManifestFieldExceptionSchema } },
    },
    485: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    486: {
      description: 'MissingManifestFieldException',
      content: { 'text/xml': { schema: MissingManifestFieldExceptionSchema } },
    },
    487: {
      description: 'NoSuchBucketException',
      content: { 'text/xml': { schema: NoSuchBucketExceptionSchema } },
    },
    488: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    489: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    490: {
      description: 'MissingCustomsException',
      content: { 'text/xml': { schema: MissingCustomsExceptionSchema } },
    },
    491: {
      description: 'InvalidCustomsException',
      content: { 'text/xml': { schema: InvalidCustomsExceptionSchema } },
    },
    492: {
      description: 'InvalidFileSystemException',
      content: { 'text/xml': { schema: InvalidFileSystemExceptionSchema } },
    },
    493: {
      description: 'MultipleRegionsException',
      content: { 'text/xml': { schema: MultipleRegionsExceptionSchema } },
    },
    494: {
      description: 'BucketPermissionException',
      content: { 'text/xml': { schema: BucketPermissionExceptionSchema } },
    },
    495: {
      description: 'MalformedManifestException',
      content: { 'text/xml': { schema: MalformedManifestExceptionSchema } },
    },
    496: {
      description: 'UnableToUpdateJobIdException',
      content: { 'text/xml': { schema: UnableToUpdateJobIdExceptionSchema } },
    },
    497: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})

export const postOperationUpdateJobActionUpdateJobRoute = createRoute({
  method: 'post',
  path: '/#Operation=UpdateJob&Action=UpdateJob',
  description:
    'You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.',
  operationId: 'POST_UpdateJob',
  request: {
    query: z.object({
      AWSAccessKeyId: AWSAccessKeyIdParamsSchema,
      Action: z
        .literal('UpdateJob')
        .openapi({
          param: {
            name: 'Action',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateJob'] },
          },
        }),
      SignatureMethod: SignatureMethodParamsSchema,
      SignatureVersion: SignatureVersionParamsSchema,
      Timestamp: TimestampParamsSchema,
      Version: z
        .literal('2010-06-01')
        .openapi({
          param: {
            name: 'Version',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['2010-06-01'] },
          },
        }),
      Signature: SignatureParamsSchema,
      Operation: z
        .literal('UpdateJob')
        .openapi({
          param: {
            name: 'Operation',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['UpdateJob'] },
          },
        }),
    }),
    body: { content: { 'text/xml': { schema: UpdateJobInputSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'text/xml': { schema: UpdateJobOutputSchema } } },
    480: {
      description: 'MissingParameterException',
      content: { 'text/xml': { schema: MissingParameterExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterException',
      content: { 'text/xml': { schema: InvalidParameterExceptionSchema } },
    },
    482: {
      description: 'InvalidAccessKeyIdException',
      content: { 'text/xml': { schema: InvalidAccessKeyIdExceptionSchema } },
    },
    483: {
      description: 'InvalidAddressException',
      content: { 'text/xml': { schema: InvalidAddressExceptionSchema } },
    },
    484: {
      description: 'InvalidManifestFieldException',
      content: { 'text/xml': { schema: InvalidManifestFieldExceptionSchema } },
    },
    485: {
      description: 'InvalidJobIdException',
      content: { 'text/xml': { schema: InvalidJobIdExceptionSchema } },
    },
    486: {
      description: 'MissingManifestFieldException',
      content: { 'text/xml': { schema: MissingManifestFieldExceptionSchema } },
    },
    487: {
      description: 'NoSuchBucketException',
      content: { 'text/xml': { schema: NoSuchBucketExceptionSchema } },
    },
    488: {
      description: 'ExpiredJobIdException',
      content: { 'text/xml': { schema: ExpiredJobIdExceptionSchema } },
    },
    489: {
      description: 'CanceledJobIdException',
      content: { 'text/xml': { schema: CanceledJobIdExceptionSchema } },
    },
    490: {
      description: 'MissingCustomsException',
      content: { 'text/xml': { schema: MissingCustomsExceptionSchema } },
    },
    491: {
      description: 'InvalidCustomsException',
      content: { 'text/xml': { schema: InvalidCustomsExceptionSchema } },
    },
    492: {
      description: 'InvalidFileSystemException',
      content: { 'text/xml': { schema: InvalidFileSystemExceptionSchema } },
    },
    493: {
      description: 'MultipleRegionsException',
      content: { 'text/xml': { schema: MultipleRegionsExceptionSchema } },
    },
    494: {
      description: 'BucketPermissionException',
      content: { 'text/xml': { schema: BucketPermissionExceptionSchema } },
    },
    495: {
      description: 'MalformedManifestException',
      content: { 'text/xml': { schema: MalformedManifestExceptionSchema } },
    },
    496: {
      description: 'UnableToUpdateJobIdException',
      content: { 'text/xml': { schema: UnableToUpdateJobIdExceptionSchema } },
    },
    497: {
      description: 'InvalidVersionException',
      content: { 'text/xml': { schema: InvalidVersionExceptionSchema } },
    },
  },
})
