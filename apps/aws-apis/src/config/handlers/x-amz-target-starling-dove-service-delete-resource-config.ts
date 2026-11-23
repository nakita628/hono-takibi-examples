import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteResourceConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteResourceConfigHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteResourceConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
