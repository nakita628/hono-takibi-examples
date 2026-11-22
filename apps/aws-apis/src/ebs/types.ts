type CompleteSnapshotResponse = { Status?: {} | undefined }
type AccessDeniedException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type RequestThrottledException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type GetSnapshotBlockResponse = { BlockData?: {} | undefined }
type ListChangedBlocksResponse = {
  ChangedBlocks?: {} | undefined
  ExpiryTime?: {} | undefined
  VolumeSize?: {} | undefined
  BlockSize?: {} | undefined
  NextToken?: {} | undefined
}
type ListSnapshotBlocksResponse = {
  Blocks?: {} | undefined
  ExpiryTime?: {} | undefined
  VolumeSize?: {} | undefined
  BlockSize?: {} | undefined
  NextToken?: {} | undefined
}
type PutSnapshotBlockResponse = { [x: string]: unknown }
type Tag = { Key?: {} | undefined; Value?: {} | undefined }
type StartSnapshotResponse = {
  Description?: {} | undefined
  SnapshotId?: {} | undefined
  OwnerId?: {} | undefined
  Status?: {} | undefined
  StartTime?: {} | undefined
  VolumeSize?: {} | undefined
  BlockSize?: {} | undefined
  Tags?: {} | undefined
  ParentSnapshotId?: {} | undefined
  KmsKeyArn?: {} | undefined
}
type ConcurrentLimitExceededException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/snapshots/completion/:snapshotId#x-amz-ChangedBlocksCount': {
      $post:
        | {
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CompleteSnapshotResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
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
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RequestThrottledException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { snapshotId: string } } & {
              header: {
                'x-amz-ChangedBlocksCount': number
                'x-amz-Checksum'?: string | undefined
                'x-amz-Checksum-Algorithm'?: 'SHA256' | undefined
                'x-amz-Checksum-Aggregation-Method'?: 'LINEAR' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/snapshots/:snapshotId/blocks/:blockIndex#blockToken': {
      $get:
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            output: GetSnapshotBlockResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            output: RequestThrottledException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              query: { blockToken: string }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/snapshots/:secondSnapshotId/changedblocks': {
      $get:
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ListChangedBlocksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: RequestThrottledException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { secondSnapshotId: string } } & {
              query: {
                firstSnapshotId?: string | undefined
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/snapshots/:snapshotId/blocks': {
      $get:
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ListSnapshotBlocksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: RequestThrottledException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { snapshotId: string } } & {
              query: {
                pageToken?: string | undefined
                maxResults?: number | undefined
                startingBlockIndex?: number | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/snapshots/:snapshotId/blocks/:blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm': {
      $put:
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: PutSnapshotBlockResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: RequestThrottledException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { snapshotId: string; blockIndex: number } } & {
              header: {
                'x-amz-Data-Length': number
                'x-amz-Progress'?: number | undefined
                'x-amz-Checksum': string
                'x-amz-Checksum-Algorithm': 'SHA256'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { BlockData: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/snapshots': {
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: StartSnapshotResponse
            outputFormat: 'json'
            status: 201
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: AccessDeniedException
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: ValidationException
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: RequestThrottledException
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 485
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: ConcurrentLimitExceededException
            outputFormat: 'json'
            status: 486
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
            } & {
              json: {
                VolumeSize: number
                ParentSnapshotId?: string | undefined
                Tags?: Tag[] | undefined
                Description?: string | undefined
                ClientToken?: string | undefined
                Encrypted?: boolean | undefined
                KmsKeyArn?: string | undefined
                Timeout?: number | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 487
          }
    }
  },
  '/'
>
export default routes
