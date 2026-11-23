import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202UpdateShardCountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202UpdateShardCountHandler = app.openapi(
  postXAmzTargetKinesis20131202UpdateShardCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
