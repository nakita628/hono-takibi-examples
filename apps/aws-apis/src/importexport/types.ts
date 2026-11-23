type Success = boolean
type CancelJobOutput = { Success?: Success | undefined }
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
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Operation=CreateJob&Action=CreateJob': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Operation=GetShippingLabel&Action=GetShippingLabel': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Operation=GetStatus&Action=GetStatus': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Operation=ListJobs&Action=ListJobs': {
      $get: {
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
      $post: {
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
    }
  } & {
    '/#Operation=UpdateJob&Action=UpdateJob': {
      $get: {
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
      $post: {
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
    }
  },
  '/'
>
export default routes
