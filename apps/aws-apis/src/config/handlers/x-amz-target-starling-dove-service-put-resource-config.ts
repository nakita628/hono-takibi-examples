import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
