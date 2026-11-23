type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type MetastoreV1DeleteFilter = { serviceNameRegex?: string | undefined }
type MetastoreV1DeleteDatasetsRequest = {
  tenant?: string | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  filter?: MetastoreV1DeleteFilter | undefined
  dryRun?: boolean | undefined
  minCompactionLevel?: number | undefined
}
type MetastoreV1BlockDeletionSummary = {
  blockId?: string | undefined
  tenant?: string | undefined
  shard?: number | undefined
  compactionLevel?: number | undefined
  blockMinTime?: bigint | string | undefined
  blockMaxTime?: bigint | string | undefined
  matchedMinTime?: bigint | string | undefined
  matchedMaxTime?: bigint | string | undefined
  fullBlockPlanned?: boolean | undefined
  matchedDatasetsCount?: number | undefined
  remainingDatasetsCount?: number | undefined
  matchedServices?: string[] | undefined
  matchedBytes?: bigint | string | undefined
}
type MetastoreV1DeleteDatasetsResponse = {
  dryRun?: boolean | undefined
  matchedBlocksCount?: number | undefined
  plannedFullBlockDeletionsCount?: number | undefined
  plannedBlockRewritesCount?: number | undefined
  matchedDatasetsCount?: number | undefined
  matchedBytes?: bigint | string | undefined
  effectiveMatchedMinTime?: bigint | string | undefined
  effectiveMatchedMaxTime?: bigint | string | undefined
  blocks?: MetastoreV1BlockDeletionSummary[] | undefined
  scheduledJobNames?: string[] | undefined
}
type ConnectErrorDetailsAny = {
  type?: string | undefined
  value?: File | undefined
  debug?: { [x: string]: unknown } | undefined
}
type ConnectError = {
  code?:
    | 'canceled'
    | 'unknown'
    | 'invalid_argument'
    | 'deadline_exceeded'
    | 'not_found'
    | 'already_exists'
    | 'permission_denied'
    | 'resource_exhausted'
    | 'failed_precondition'
    | 'aborted'
    | 'out_of_range'
    | 'unimplemented'
    | 'internal'
    | 'unavailable'
    | 'data_loss'
    | 'unauthenticated'
    | undefined
  message?: string | undefined
  details?: ConnectErrorDetailsAny[] | undefined
}
type MetastoreV1ListCompactionJobsRequest = { tenant?: string | undefined }
type MetastoreV1BlockTombstones = {
  name?: string | undefined
  shard?: number | undefined
  tenant?: string | undefined
  compactionLevel?: number | undefined
  blocks?: string[] | undefined
}
type MetastoreV1ShardTombstone = {
  name?: string | undefined
  timestamp?: bigint | string | undefined
  duration?: bigint | string | undefined
  shard?: number | undefined
  tenant?: string | undefined
}
type MetastoreV1Tombstones = {
  blocks?: MetastoreV1BlockTombstones | undefined
  shard?: MetastoreV1ShardTombstone | undefined
}
type MetastoreV1CompactionJob = {
  name?: string | undefined
  shard?: number | undefined
  tenant?: string | undefined
  compactionLevel?: number | undefined
  sourceBlocks?: string[] | undefined
  tombstones?: MetastoreV1Tombstones[] | undefined
  deleteFilter?: MetastoreV1DeleteFilter | undefined
}
type MetastoreV1CompactionJobStatus =
  | 'COMPACTION_STATUS_UNSPECIFIED'
  | 'COMPACTION_STATUS_IN_PROGRESS'
  | 'COMPACTION_STATUS_SUCCESS'
type MetastoreV1CompactionJobInfo = {
  job?: MetastoreV1CompactionJob | undefined
  status?: MetastoreV1CompactionJobStatus | undefined
  addedAt?: bigint | string | undefined
  leaseExpiresAt?: bigint | string | undefined
  failures?: number | undefined
}
type MetastoreV1ListCompactionJobsResponse = { jobs?: MetastoreV1CompactionJobInfo[] | undefined }
type MetastoreV1BlockList = {
  tenant?: string | undefined
  shard?: number | undefined
  blocks?: string[] | undefined
}
type MetastoreV1Dataset = {
  format?: number | undefined
  tenant?: number | undefined
  name?: number | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  tableOfContents?: (bigint | string)[] | undefined
  size?: bigint | string | undefined
  labels?: number[] | undefined
}
type MetastoreV1BlockMeta = {
  formatVersion?: number | undefined
  id?: string | undefined
  tenant?: number | undefined
  shard?: number | undefined
  compactionLevel?: number | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  createdBy?: number | undefined
  metadataOffset?: bigint | string | undefined
  size?: bigint | string | undefined
  datasets?: MetastoreV1Dataset[] | undefined
  stringTable?: string[] | undefined
}
type MetastoreV1CompactedBlocks = {
  sourceBlocks?: MetastoreV1BlockList | undefined
  newBlocks?: MetastoreV1BlockMeta[] | undefined
}
type MetastoreV1CompactionJobStatusUpdate = {
  name?: string | undefined
  token?: bigint | string | undefined
  status?: MetastoreV1CompactionJobStatus | undefined
  compactedBlocks?: MetastoreV1CompactedBlocks | undefined
}
type MetastoreV1PollCompactionJobsRequest = {
  statusUpdates?: MetastoreV1CompactionJobStatusUpdate[] | undefined
  jobCapacity?: number | undefined
}
type MetastoreV1CompactionJobAssignment = {
  name?: string | undefined
  token?: bigint | string | undefined
  leaseExpiresAt?: bigint | string | undefined
}
type MetastoreV1PollCompactionJobsResponse = {
  compactionJobs?: MetastoreV1CompactionJob[] | undefined
  assignments?: MetastoreV1CompactionJobAssignment[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/metastore.v1.CompactionService/DeleteDatasets': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1DeleteDatasetsRequest }
            output: MetastoreV1DeleteDatasetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1DeleteDatasetsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metastore.v1.CompactionService/ListCompactionJobs': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1ListCompactionJobsRequest }
            output: MetastoreV1ListCompactionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1ListCompactionJobsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metastore.v1.CompactionService/PollCompactionJobs': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1PollCompactionJobsRequest }
            output: MetastoreV1PollCompactionJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: MetastoreV1PollCompactionJobsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
