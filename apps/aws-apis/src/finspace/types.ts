type TagValue = string
type DataBundleArn = string
type CreateEnvironmentResponse = {
  environmentId?: {} | undefined
  environmentArn?: {} | undefined
  environmentUrl?: {} | undefined
}
type ListEnvironmentsResponse = { environments?: {} | undefined; nextToken?: {} | undefined }
type DeleteEnvironmentResponse = { [x: string]: unknown }
type GetEnvironmentResponse = {
  environment?:
    | {
        name?: {} | undefined
        environmentId?: {} | undefined
        awsAccountId?: {} | undefined
        status?: {} | undefined
        environmentUrl?: {} | undefined
        description?: {} | undefined
        environmentArn?: {} | undefined
        sageMakerStudioDomainUrl?: {} | undefined
        kmsKeyId?: {} | undefined
        dedicatedServiceAccountId?: {} | undefined
        federationMode?: {} | undefined
        federationParameters?:
          | {
              samlMetadataDocument?: {} | undefined
              samlMetadataURL?: {} | undefined
              applicationCallBackURL?: {} | undefined
              federationURN?: {} | undefined
              federationProviderName?: {} | undefined
              attributeMap?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateEnvironmentResponse = {
  environment?:
    | {
        name?: {} | undefined
        environmentId?: {} | undefined
        awsAccountId?: {} | undefined
        status?: {} | undefined
        environmentUrl?: {} | undefined
        description?: {} | undefined
        environmentArn?: {} | undefined
        sageMakerStudioDomainUrl?: {} | undefined
        kmsKeyId?: {} | undefined
        dedicatedServiceAccountId?: {} | undefined
        federationMode?: {} | undefined
        federationParameters?:
          | {
              samlMetadataDocument?: {} | undefined
              samlMetadataURL?: {} | undefined
              applicationCallBackURL?: {} | undefined
              federationURN?: {} | undefined
              federationProviderName?: {} | undefined
              attributeMap?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/environment': {
      $post: {
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
        } & {
          json: {
            name: string
            description?: string | undefined
            kmsKeyId?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
            federationMode?: 'FEDERATED' | 'LOCAL' | undefined
            federationParameters?:
              | {
                  samlMetadataDocument?: {} | undefined
                  samlMetadataURL?: {} | undefined
                  applicationCallBackURL?: {} | undefined
                  federationURN?: {} | undefined
                  federationProviderName?: {} | undefined
                  attributeMap?: {} | undefined
                }
              | undefined
            superuserParameters?:
              | {
                  emailAddress?: {} | undefined
                  firstName?: {} | undefined
                  lastName?: {} | undefined
                }
              | undefined
            dataBundles?: DataBundleArn[] | undefined
          }
        }
        output: CreateEnvironmentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
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
        output: ListEnvironmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/environment/:environmentId': {
      $delete: {
        input: { param: { environmentId: string } } & {
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
        output: DeleteEnvironmentResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { environmentId: string } } & {
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
        output: GetEnvironmentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { environmentId: string } } & {
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
            name?: string | undefined
            description?: string | undefined
            federationMode?: 'FEDERATED' | 'LOCAL' | undefined
            federationParameters?:
              | {
                  samlMetadataDocument?: {} | undefined
                  samlMetadataURL?: {} | undefined
                  applicationCallBackURL?: {} | undefined
                  federationURN?: {} | undefined
                  federationProviderName?: {} | undefined
                  attributeMap?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateEnvironmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
