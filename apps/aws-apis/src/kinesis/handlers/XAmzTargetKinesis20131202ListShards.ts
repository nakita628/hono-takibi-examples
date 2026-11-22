import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202ListShardsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202ListShardsHandler = app.openapi(
  postXAmzTargetKinesis20131202ListShardsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
