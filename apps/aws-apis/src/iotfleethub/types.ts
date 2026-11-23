type TagValue = string
type CreateApplicationResponse = { applicationId: {}; applicationArn: {} }
type ListApplicationsResponse = {
  applicationSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type DeleteApplicationResponse = { [x: string]: unknown }
type DescribeApplicationResponse = {
  applicationId: {}
  applicationArn: {}
  applicationName: {}
  applicationDescription?: {} | undefined
  applicationUrl: {}
  applicationState: {}
  applicationCreationDate: {}
  applicationLastUpdateDate: {}
  roleArn: {}
  ssoClientId?: {} | undefined
  errorMessage?: {} | undefined
  tags?: {} | undefined
}
type UpdateApplicationResponse = { [x: string]: unknown }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applications': {
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
            applicationName: string
            applicationDescription?: string | undefined
            clientToken?: string | undefined
            roleArn: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: CreateApplicationResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined } } & {
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
        output: ListApplicationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/applications/:applicationId': {
      $delete: {
        input: { param: { applicationId: string } } & {
          query: { clientToken?: string | undefined }
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
        output: DeleteApplicationResponse
        outputFormat: 'json'
        status: 204
      }
      $get: {
        input: { param: { applicationId: string } } & {
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
        output: DescribeApplicationResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { applicationId: string } } & {
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
            applicationName?: string | undefined
            applicationDescription?: string | undefined
            clientToken?: string | undefined
          }
        }
        output: UpdateApplicationResponse
        outputFormat: 'json'
        status: 202
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
