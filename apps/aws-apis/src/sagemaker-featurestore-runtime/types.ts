type BatchGetRecordIdentifier = {
  FeatureGroupName: {}
  RecordIdentifiersValueAsString: {}
  FeatureNames?: {} | undefined
}
type BatchGetRecordResponse = { Records: {}; Errors: {}; UnprocessedIdentifiers: {} }
type ValidationError = { [x: string]: unknown }
type InternalFailure = { [x: string]: unknown }
type ServiceUnavailable = { [x: string]: unknown }
type AccessForbidden = { [x: string]: unknown }
type TargetStore = 'OnlineStore' | 'OfflineStore'
type FeatureName = string
type GetRecordResponse = { Record?: {} | undefined }
type ResourceNotFound = { [x: string]: unknown }
type FeatureValue = { FeatureName: {}; ValueAsString: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/BatchGetRecord': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Identifiers: BatchGetRecordIdentifier[] } }
            output: BatchGetRecordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Identifiers: BatchGetRecordIdentifier[] } }
            output: ValidationError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Identifiers: BatchGetRecordIdentifier[] } }
            output: InternalFailure
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Identifiers: BatchGetRecordIdentifier[] } }
            output: ServiceUnavailable
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Identifiers: BatchGetRecordIdentifier[] } }
            output: AccessForbidden
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/FeatureGroup/:FeatureGroupName#RecordIdentifierValueAsString&EventTime': {
      $delete:
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                EventTime: string
                TargetStores?: TargetStore[] | undefined
                DeletionMode?: 'SoftDelete' | 'HardDelete' | undefined
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
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                EventTime: string
                TargetStores?: TargetStore[] | undefined
                DeletionMode?: 'SoftDelete' | 'HardDelete' | undefined
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
            output: ValidationError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                EventTime: string
                TargetStores?: TargetStore[] | undefined
                DeletionMode?: 'SoftDelete' | 'HardDelete' | undefined
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
            output: InternalFailure
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                EventTime: string
                TargetStores?: TargetStore[] | undefined
                DeletionMode?: 'SoftDelete' | 'HardDelete' | undefined
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
            output: ServiceUnavailable
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                EventTime: string
                TargetStores?: TargetStore[] | undefined
                DeletionMode?: 'SoftDelete' | 'HardDelete' | undefined
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
            output: AccessForbidden
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/FeatureGroup/:FeatureGroupName#RecordIdentifierValueAsString': {
      $get:
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                FeatureName?: FeatureName[] | undefined
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
            output: GetRecordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                FeatureName?: FeatureName[] | undefined
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
            output: ValidationError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                FeatureName?: FeatureName[] | undefined
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
            output: ResourceNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                FeatureName?: FeatureName[] | undefined
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
            output: InternalFailure
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                FeatureName?: FeatureName[] | undefined
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
            output: ServiceUnavailable
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              query: {
                RecordIdentifierValueAsString: string
                FeatureName?: FeatureName[] | undefined
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
            output: AccessForbidden
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/FeatureGroup/:FeatureGroupName': {
      $put:
        | {
            input: { param: { FeatureGroupName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Record: FeatureValue[]; TargetStores?: TargetStore[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Record: FeatureValue[]; TargetStores?: TargetStore[] | undefined } }
            output: ValidationError
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Record: FeatureValue[]; TargetStores?: TargetStore[] | undefined } }
            output: InternalFailure
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Record: FeatureValue[]; TargetStores?: TargetStore[] | undefined } }
            output: ServiceUnavailable
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FeatureGroupName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Record: FeatureValue[]; TargetStores?: TargetStore[] | undefined } }
            output: AccessForbidden
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
