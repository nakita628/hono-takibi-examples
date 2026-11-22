import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSnapshotsSecondSnapshotIdChangedblocksRoute,
  getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRoute,
  getSnapshotsSnapshotIdBlocksRoute,
  postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRoute,
  postSnapshotsRoute,
  putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsSecondSnapshotIdChangedblocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsSnapshotIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
