import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCount(
  args: InferRequestType<
    (typeof client.snapshots.completion)[':snapshotId#x-amz-ChangedBlocksCount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snapshots.completion[':snapshotId#x-amz-ChangedBlocksCount'].$post(args, options),
  )
}

export async function getSnapshotsSnapshotIdBlocksBlockIndexBlockToken(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#blockToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snapshots[':snapshotId'].blocks[':blockIndex#blockToken'].$get(args, options),
  )
}

export async function getSnapshotsSecondSnapshotIdChangedblocks(
  args: InferRequestType<(typeof client.snapshots)[':secondSnapshotId']['changedblocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snapshots[':secondSnapshotId'].changedblocks.$get(args, options),
  )
}

export async function getSnapshotsSnapshotIdBlocks(
  args: InferRequestType<(typeof client.snapshots)[':snapshotId']['blocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':snapshotId'].blocks.$get(args, options))
}

export async function putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithm(
  args: InferRequestType<
    (typeof client.snapshots)[':snapshotId']['blocks'][':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.snapshots[':snapshotId'].blocks[
      ':blockIndex#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm'
    ].$put(args, options),
  )
}

export async function postSnapshots(
  args: InferRequestType<typeof client.snapshots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.$post(args, options))
}
