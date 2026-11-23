import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeliverConfigSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeliverConfigSnapshotHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeliverConfigSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
