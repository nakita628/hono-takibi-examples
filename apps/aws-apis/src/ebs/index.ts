import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSnapshotsSecondSnapshotIdChangedblocksRoute,
  getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRoute,
  getSnapshotsSnapshotIdBlocksRoute,
  postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRoute,
  postSnapshotsRoute,
  putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRoute,
} from './routes'
import {
  getSnapshotsSecondSnapshotIdChangedblocksRouteHandler,
  getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRouteHandler,
  getSnapshotsSnapshotIdBlocksRouteHandler,
  postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRouteHandler,
  postSnapshotsRouteHandler,
  putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRoute,
    postSnapshotsCompletionSnapshotIdXAmzChangedBlocksCountRouteHandler,
  )
  .openapi(
    getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRoute,
    getSnapshotsSnapshotIdBlocksBlockIndexBlockTokenRouteHandler,
  )
  .openapi(
    getSnapshotsSecondSnapshotIdChangedblocksRoute,
    getSnapshotsSecondSnapshotIdChangedblocksRouteHandler,
  )
  .openapi(getSnapshotsSnapshotIdBlocksRoute, getSnapshotsSnapshotIdBlocksRouteHandler)
  .openapi(
    putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRoute,
    putSnapshotsSnapshotIdBlocksBlockIndexXAmzDataLengthXAmzChecksumXAmzChecksumAlgorithmRouteHandler,
  )
  .openapi(postSnapshotsRoute, postSnapshotsRouteHandler)

export default app
