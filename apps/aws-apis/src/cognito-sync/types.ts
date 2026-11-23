type BulkPublishResponse = { IdentityPoolId?: {} | undefined }
type NotAuthorizedException = { [x: string]: unknown }
type InvalidParameterException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type InternalErrorException = { [x: string]: unknown }
type DuplicateRequestException = { [x: string]: unknown }
type AlreadyStreamedException = { [x: string]: unknown }
type DeleteDatasetResponse = {
  Dataset?:
    | {
        IdentityId?: {} | undefined
        DatasetName?: {} | undefined
        CreationDate?: {} | undefined
        LastModifiedDate?: {} | undefined
        LastModifiedBy?: {} | undefined
        DataStorage?: {} | undefined
        NumRecords?: {} | undefined
      }
    | undefined
}
type TooManyRequestsException = { [x: string]: unknown }
type ResourceConflictException = { [x: string]: unknown }
type DescribeDatasetResponse = {
  Dataset?:
    | {
        IdentityId?: {} | undefined
        DatasetName?: {} | undefined
        CreationDate?: {} | undefined
        LastModifiedDate?: {} | undefined
        LastModifiedBy?: {} | undefined
        DataStorage?: {} | undefined
        NumRecords?: {} | undefined
      }
    | undefined
}
type RecordPatch = {
  Op: {}
  Key: {}
  Value?: {} | undefined
  SyncCount: {}
  DeviceLastModifiedDate?: {} | undefined
}
type UpdateRecordsResponse = { Records?: {} | undefined }
type LimitExceededException = { [x: string]: unknown }
type InvalidLambdaFunctionOutputException = { [x: string]: unknown }
type LambdaThrottledException = { [x: string]: unknown }
type DescribeIdentityPoolUsageResponse = {
  IdentityPoolUsage?:
    | {
        IdentityPoolId?: {} | undefined
        SyncSessionsCount?: {} | undefined
        DataStorage?: {} | undefined
        LastModifiedDate?: {} | undefined
      }
    | undefined
}
type DescribeIdentityUsageResponse = {
  IdentityUsage?:
    | {
        IdentityId?: {} | undefined
        IdentityPoolId?: {} | undefined
        LastModifiedDate?: {} | undefined
        DatasetCount?: {} | undefined
        DataStorage?: {} | undefined
      }
    | undefined
}
type GetBulkPublishDetailsResponse = {
  IdentityPoolId?: {} | undefined
  BulkPublishStartTime?: {} | undefined
  BulkPublishCompleteTime?: {} | undefined
  BulkPublishStatus?: {} | undefined
  FailureMessage?: {} | undefined
}
type GetCognitoEventsResponse = { Events?: {} | undefined }
type LambdaFunctionArn = string
type GetIdentityPoolConfigurationResponse = {
  IdentityPoolId?: {} | undefined
  PushSync?: { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined } | undefined
  CognitoStreams?:
    | { StreamName?: {} | undefined; RoleArn?: {} | undefined; StreamingStatus?: {} | undefined }
    | undefined
}
type SetIdentityPoolConfigurationResponse = {
  IdentityPoolId?: {} | undefined
  PushSync?: { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined } | undefined
  CognitoStreams?:
    | { StreamName?: {} | undefined; RoleArn?: {} | undefined; StreamingStatus?: {} | undefined }
    | undefined
}
type ConcurrentModificationException = { [x: string]: unknown }
type ListDatasetsResponse = {
  Datasets?: {} | undefined
  Count?: {} | undefined
  NextToken?: {} | undefined
}
type ListIdentityPoolUsageResponse = {
  IdentityPoolUsages?: {} | undefined
  MaxResults?: {} | undefined
  Count?: {} | undefined
  NextToken?: {} | undefined
}
type ListRecordsResponse = {
  Records?: {} | undefined
  NextToken?: {} | undefined
  Count?: {} | undefined
  DatasetSyncCount?: {} | undefined
  LastModifiedBy?: {} | undefined
  MergedDatasetNames?: {} | undefined
  DatasetExists?: {} | undefined
  DatasetDeletedAfterRequestedSyncCount?: {} | undefined
  SyncSessionToken?: {} | undefined
}
type RegisterDeviceResponse = { DeviceId?: {} | undefined }
type InvalidConfigurationException = { [x: string]: unknown }
type SubscribeToDatasetResponse = { [x: string]: unknown }
type UnsubscribeFromDatasetResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/identitypools/:IdentityPoolId/bulkpublish': {
      $post:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BulkPublishResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DuplicateRequestException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AlreadyStreamedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName': {
      $delete:
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: UpdateRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: ResourceConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: InvalidLambdaFunctionOutputException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: LambdaThrottledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              header: {
                'x-amz-Client-Context'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                DeviceId?: string | undefined
                RecordPatches?: RecordPatch[] | undefined
                SyncSessionToken: string
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/identitypools/:IdentityPoolId': {
      $get:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeIdentityPoolUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/identities/:IdentityId': {
      $get:
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeIdentityUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/getBulkPublishDetails': {
      $post:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetBulkPublishDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/events': {
      $get:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetCognitoEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Events: { [x: string]: LambdaFunctionArn } } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Events: { [x: string]: LambdaFunctionArn } } }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Events: { [x: string]: LambdaFunctionArn } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Events: { [x: string]: LambdaFunctionArn } } }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Events: { [x: string]: LambdaFunctionArn } } }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Events: { [x: string]: LambdaFunctionArn } } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/configuration': {
      $get:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetIdentityPoolConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: SetIdentityPoolConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { IdentityPoolId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                PushSync?:
                  | { ApplicationArns?: {} | undefined; RoleArn?: {} | undefined }
                  | undefined
                CognitoStreams?:
                  | {
                      StreamName?: {} | undefined
                      RoleArn?: {} | undefined
                      StreamingStatus?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets': {
      $get:
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListDatasetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/identitypools': {
      $get:
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListIdentityPoolUsageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/records': {
      $get:
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              query: {
                lastSyncCount?: number | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                syncSessionToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListRecordsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              query: {
                lastSyncCount?: number | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                syncSessionToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              query: {
                lastSyncCount?: number | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                syncSessionToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              query: {
                lastSyncCount?: number | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                syncSessionToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: { IdentityPoolId: string; IdentityId: string; DatasetName: string }
            } & {
              query: {
                lastSyncCount?: number | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                syncSessionToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/identity/:IdentityId/device': {
      $post:
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: RegisterDeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: InvalidConfigurationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { IdentityPoolId: string; IdentityId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Platform: 'APNS' | 'APNS_SANDBOX' | 'GCM' | 'ADM'; Token: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/identitypools/:IdentityPoolId/identities/:IdentityId/datasets/:DatasetName/subscriptions/:DeviceId': {
      $post:
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: SubscribeToDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
      $delete:
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: UnsubscribeFromDatasetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidParameterException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalErrorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidConfigurationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              param: {
                IdentityPoolId: string
                IdentityId: string
                DatasetName: string
                DeviceId: string
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
    }
  },
  '/'
>
export default routes
