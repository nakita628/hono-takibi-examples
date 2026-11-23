type CompleteSnapshotResponse = { Status?: {} | undefined }
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/snapshots/completion/:snapshotId#x-amz-ChangedBlocksCount': {
      $post: {
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
    }
  } & {
    '/snapshots/:snapshotId/blocks/:blockIndex#blockToken': {
      $get: {
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
    }
  } & {
    '/snapshots/:secondSnapshotId/changedblocks': {
      $get: {
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
    }
  } & {
    '/snapshots/:snapshotId/blocks': {
      $get: {
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
    }
  } & {
    '/snapshots/:snapshotId/blocks/:blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm': {
      $put: {
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
    }
  } & {
    '/snapshots': {
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
    }
  },
  '/'
>
export default routes
