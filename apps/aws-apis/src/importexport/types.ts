type Success = boolean
type CancelJobOutput = { Success?: Success | undefined }
type ErrorMessage = string
type InvalidJobIdException = { message?: ErrorMessage | undefined }
type ExpiredJobIdException = { message?: ErrorMessage | undefined }
type CanceledJobIdException = { message?: ErrorMessage | undefined }
type UnableToCancelJobIdException = { message?: ErrorMessage | undefined }
type InvalidAccessKeyIdException = { message?: ErrorMessage | undefined }
type InvalidVersionException = { message?: ErrorMessage | undefined }
type JobId = string
type APIVersion = string
type CancelJobInput = { JobId: JobId; APIVersion?: APIVersion | undefined }
type JobType = 'Import' | 'Export'
type Signature = string
type SignatureFileContents = string
type WarningMessage = string
type Description = string
type URL = string
type Artifact = { Description?: Description | undefined; URL?: URL | undefined }
type ArtifactList = Artifact[]
type CreateJobOutput = {
  JobId?: JobId | undefined
  JobType?: JobType | undefined
  Signature?: Signature | undefined
  SignatureFileContents?: SignatureFileContents | undefined
  WarningMessage?: WarningMessage | undefined
  ArtifactList?: ArtifactList | undefined
}
type MissingParameterException = { message?: ErrorMessage | undefined }
type InvalidParameterException = { message?: ErrorMessage | undefined }
type InvalidAddressException = { message?: ErrorMessage | undefined }
type InvalidManifestFieldException = { message?: ErrorMessage | undefined }
type MissingManifestFieldException = { message?: ErrorMessage | undefined }
type NoSuchBucketException = { message?: ErrorMessage | undefined }
type MissingCustomsException = { message?: ErrorMessage | undefined }
type InvalidCustomsException = { message?: ErrorMessage | undefined }
type InvalidFileSystemException = { message?: ErrorMessage | undefined }
type MultipleRegionsException = { message?: ErrorMessage | undefined }
type BucketPermissionException = { message?: ErrorMessage | undefined }
type MalformedManifestException = { message?: ErrorMessage | undefined }
type CreateJobQuotaExceededException = { message?: ErrorMessage | undefined }
type Manifest = string
type ManifestAddendum = string
type ValidateOnly = boolean
type CreateJobInput = {
  JobType: JobType
  Manifest: Manifest
  ManifestAddendum?: ManifestAddendum | undefined
  ValidateOnly: ValidateOnly
  APIVersion?: APIVersion | undefined
}
type GenericString = string
type GetShippingLabelOutput = {
  ShippingLabelURL?: GenericString | undefined
  Warning?: GenericString | undefined
}
type JobIdList = GenericString[]
type Name = string
type Company = string
type PhoneNumber = string
type Country = string
type StateOrProvince = string
type City = string
type PostalCode = string
type Street1 = string
type Street2 = string
type Street3 = string
type GetShippingLabelInput = {
  jobIds: JobIdList
  name?: Name | undefined
  company?: Company | undefined
  phoneNumber?: PhoneNumber | undefined
  country?: Country | undefined
  stateOrProvince?: StateOrProvince | undefined
  city?: City | undefined
  postalCode?: PostalCode | undefined
  street1?: Street1 | undefined
  street2?: Street2 | undefined
  street3?: Street3 | undefined
  APIVersion?: APIVersion | undefined
}
type LocationCode = string
type LocationMessage = string
type ProgressCode = string
type ProgressMessage = string
type Carrier = string
type TrackingNumber = string
type LogBucket = string
type LogKey = string
type ErrorCount = number
type CurrentManifest = string
type CreationDate = string
type GetStatusOutput = {
  JobId?: JobId | undefined
  JobType?: JobType | undefined
  LocationCode?: LocationCode | undefined
  LocationMessage?: LocationMessage | undefined
  ProgressCode?: ProgressCode | undefined
  ProgressMessage?: ProgressMessage | undefined
  Carrier?: Carrier | undefined
  TrackingNumber?: TrackingNumber | undefined
  LogBucket?: LogBucket | undefined
  LogKey?: LogKey | undefined
  ErrorCount?: ErrorCount | undefined
  Signature?: Signature | undefined
  SignatureFileContents?: Signature | undefined
  CurrentManifest?: CurrentManifest | undefined
  CreationDate?: CreationDate | undefined
  ArtifactList?: ArtifactList | undefined
}
type GetStatusInput = { JobId: JobId; APIVersion?: APIVersion | undefined }
type IsCanceled = boolean
type Job = {
  JobId?: JobId | undefined
  CreationDate?: CreationDate | undefined
  IsCanceled?: IsCanceled | undefined
  JobType?: JobType | undefined
}
type JobsList = Job[]
type IsTruncated = boolean
type ListJobsOutput = { Jobs?: JobsList | undefined; IsTruncated?: IsTruncated | undefined }
type MaxJobs = number
type Marker = string
type ListJobsInput = {
  MaxJobs?: MaxJobs | undefined
  Marker?: Marker | undefined
  APIVersion?: APIVersion | undefined
}
type UpdateJobOutput = {
  Success?: Success | undefined
  WarningMessage?: WarningMessage | undefined
  ArtifactList?: ArtifactList | undefined
}
type UnableToUpdateJobIdException = { message?: ErrorMessage | undefined }
type UpdateJobInput = {
  JobId: JobId
  Manifest: Manifest
  JobType: JobType
  ValidateOnly: ValidateOnly
  APIVersion?: APIVersion | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#Operation=CancelJob&Action=CancelJob': {
      $get:
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CancelJobOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: UnableToCancelJobIdException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 485
          }
      $post:
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: CancelJobOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: UnableToCancelJobIdException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Operation: 'CancelJob'
                Action: 'CancelJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CancelJobInput }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 485
          }
    }
  } & {
    '/#Operation=CreateJob&Action=CreateJob': {
      $get:
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CreateJobOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAddressException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidManifestFieldException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingManifestFieldException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchBucketException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingCustomsException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidCustomsException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidFileSystemException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MultipleRegionsException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: BucketPermissionException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MalformedManifestException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CreateJobQuotaExceededException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                JobType: 'Import' | 'Export'
                Manifest: string
                ManifestAddendum?: string | undefined
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 495
          }
      $post:
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: CreateJobOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: MissingParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidAddressException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidManifestFieldException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: MissingManifestFieldException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: NoSuchBucketException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: MissingCustomsException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidCustomsException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidFileSystemException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: MultipleRegionsException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: BucketPermissionException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: MalformedManifestException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: CreateJobQuotaExceededException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                Operation: 'CreateJob'
                Action: 'CreateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: CreateJobInput }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 495
          }
    }
  } & {
    '/#Operation=GetShippingLabel&Action=GetShippingLabel': {
      $get:
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: GetShippingLabelOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAddressException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                jobIds: GenericString[]
                name?: string | undefined
                company?: string | undefined
                phoneNumber?: string | undefined
                country?: string | undefined
                stateOrProvince?: string | undefined
                city?: string | undefined
                postalCode?: string | undefined
                street1?: string | undefined
                street2?: string | undefined
                street3?: string | undefined
                APIVersion?: string | undefined
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 486
          }
      $post:
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: GetShippingLabelOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: InvalidAddressException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                Operation: 'GetShippingLabel'
                Action: 'GetShippingLabel'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetShippingLabelInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 486
          }
    }
  } & {
    '/#Operation=GetStatus&Action=GetStatus': {
      $get:
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: GetStatusOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                JobId: string
                APIVersion?: string | undefined
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 484
          }
      $post:
        | {
            input: {
              query: {
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetStatusInput }
            output: GetStatusOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetStatusInput }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetStatusInput }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetStatusInput }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetStatusInput }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Operation: 'GetStatus'
                Action: 'GetStatus'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: GetStatusInput }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 484
          }
    }
  } & {
    '/#Operation=ListJobs&Action=ListJobs': {
      $get:
        | {
            input: {
              query: {
                MaxJobs?: number | undefined
                Marker?: string | undefined
                APIVersion?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: ListJobsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxJobs?: number | undefined
                Marker?: string | undefined
                APIVersion?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                MaxJobs?: number | undefined
                Marker?: string | undefined
                APIVersion?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                MaxJobs?: number | undefined
                Marker?: string | undefined
                APIVersion?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 482
          }
      $post:
        | {
            input: {
              query: {
                MaxJobs?: string | undefined
                Marker?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: ListJobsInput }
            output: ListJobsOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                MaxJobs?: string | undefined
                Marker?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: ListJobsInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                MaxJobs?: string | undefined
                Marker?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: ListJobsInput }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                MaxJobs?: string | undefined
                Marker?: string | undefined
                Operation: 'ListJobs'
                Action: 'ListJobs'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: ListJobsInput }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 482
          }
    }
  } & {
    '/#Operation=UpdateJob&Action=UpdateJob': {
      $get:
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: UpdateJobOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidAddressException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidManifestFieldException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingManifestFieldException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: NoSuchBucketException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MissingCustomsException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidCustomsException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidFileSystemException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MultipleRegionsException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: BucketPermissionException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: MalformedManifestException
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: UnableToUpdateJobIdException
            outputFormat: 'text'
            status: 496
          }
        | {
            input: {
              query: {
                JobId: string
                Manifest: string
                JobType: 'Import' | 'Export'
                ValidateOnly: boolean
                APIVersion?: string | undefined
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 497
          }
      $post:
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: UpdateJobOutput
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: MissingParameterException
            outputFormat: 'text'
            status: 480
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidParameterException
            outputFormat: 'text'
            status: 481
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidAccessKeyIdException
            outputFormat: 'text'
            status: 482
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidAddressException
            outputFormat: 'text'
            status: 483
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidManifestFieldException
            outputFormat: 'text'
            status: 484
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidJobIdException
            outputFormat: 'text'
            status: 485
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: MissingManifestFieldException
            outputFormat: 'text'
            status: 486
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: NoSuchBucketException
            outputFormat: 'text'
            status: 487
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: ExpiredJobIdException
            outputFormat: 'text'
            status: 488
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: CanceledJobIdException
            outputFormat: 'text'
            status: 489
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: MissingCustomsException
            outputFormat: 'text'
            status: 490
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidCustomsException
            outputFormat: 'text'
            status: 491
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidFileSystemException
            outputFormat: 'text'
            status: 492
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: MultipleRegionsException
            outputFormat: 'text'
            status: 493
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: BucketPermissionException
            outputFormat: 'text'
            status: 494
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: MalformedManifestException
            outputFormat: 'text'
            status: 495
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: UnableToUpdateJobIdException
            outputFormat: 'text'
            status: 496
          }
        | {
            input: {
              query: {
                Operation: 'UpdateJob'
                Action: 'UpdateJob'
                Version: '2010-06-01'
                AWSAccessKeyId: string
                SignatureMethod: string
                SignatureVersion: string
                Timestamp: string
                Signature: string
              }
            } & { json: UpdateJobInput }
            output: InvalidVersionException
            outputFormat: 'text'
            status: 497
          }
    }
  },
  '/'
>
export default routes
