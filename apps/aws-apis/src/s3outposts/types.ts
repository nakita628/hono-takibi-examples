type CreateEndpointResult = { EndpointArn?: {} | undefined }
type ListEndpointsResult = { Endpoints?: {} | undefined; NextToken?: {} | undefined }
type ListOutpostsWithS3Result = { Outposts?: {} | undefined; NextToken?: {} | undefined }
type ListSharedEndpointsResult = { Endpoints?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/S3Outposts/CreateEndpoint': {
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
            OutpostId: string
            SubnetId: string
            SecurityGroupId: string
            AccessType?: 'Private' | 'CustomerOwnedIp' | undefined
            CustomerOwnedIpv4Pool?: string | undefined
          }
        }
        output: CreateEndpointResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/S3Outposts/DeleteEndpoint#endpointId&outpostId': {
      $delete: {
        input: { query: { endpointId: string; outpostId: string } } & {
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
    }
  } & {
    '/S3Outposts/ListEndpoints': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListEndpointsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/S3Outposts/ListOutpostsWithS3': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListOutpostsWithS3Result
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/S3Outposts/ListSharedEndpoints#outpostId': {
      $get: {
        input: {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            outpostId: string
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListSharedEndpointsResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
