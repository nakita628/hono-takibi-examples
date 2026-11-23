type DeleteObjectResponse = { [x: string]: unknown }
type ContainerNotFoundException = { [x: string]: unknown }
type ObjectNotFoundException = { [x: string]: unknown }
type InternalServerError = { [x: string]: unknown }
type DescribeObjectResponse = { [x: string]: unknown }
type GetObjectResponse = { Body?: {} | undefined; StatusCode?: {} | undefined }
type RequestedRangeNotSatisfiableException = { [x: string]: unknown }
type PutObjectResponse = {
  ContentSHA256?: {} | undefined
  ETag?: {} | undefined
  StorageClass?: {} | undefined
}
type ListItemsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:Path': {
      $delete:
        | {
            input: { param: { Path: string } } & {
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
            output: DeleteObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Path: string } } & {
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
            output: ContainerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Path: string } } & {
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
            output: ObjectNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Path: string } } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
      $head:
        | {
            input: { param: { Path: string } } & {
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
            output: DescribeObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Path: string } } & {
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
            output: ContainerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Path: string } } & {
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
            output: ObjectNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Path: string } } & {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: { param: { Path: string } } & {
              header: {
                Range?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Path: string } } & {
              header: {
                Range?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ContainerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Path: string } } & {
              header: {
                Range?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ObjectNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { Path: string } } & {
              header: {
                Range?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RequestedRangeNotSatisfiableException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { Path: string } } & {
              header: {
                Range?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { Path: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Cache-Control'?: string | undefined
                'x-amz-storage-class'?: 'TEMPORAL' | undefined
                'x-amz-upload-availability'?: 'STANDARD' | 'STREAMING' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Body: string } }
            output: PutObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { Path: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Cache-Control'?: string | undefined
                'x-amz-storage-class'?: 'TEMPORAL' | undefined
                'x-amz-upload-availability'?: 'STANDARD' | 'STREAMING' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Body: string } }
            output: ContainerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { Path: string } } & {
              header: {
                'Content-Type'?: string | undefined
                'Cache-Control'?: string | undefined
                'x-amz-storage-class'?: 'TEMPORAL' | undefined
                'x-amz-upload-availability'?: 'STANDARD' | 'STREAMING' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Body: string } }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/': {
      $get:
        | {
            input: {
              query: {
                Path?: string | undefined
                MaxResults?: number | undefined
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
            output: ListItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Path?: string | undefined
                MaxResults?: number | undefined
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
            output: ContainerNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                Path?: string | undefined
                MaxResults?: number | undefined
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
