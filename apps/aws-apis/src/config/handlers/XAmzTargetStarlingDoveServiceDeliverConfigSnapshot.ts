import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeliverConfigSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeliverConfigSnapshotHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeliverConfigSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
