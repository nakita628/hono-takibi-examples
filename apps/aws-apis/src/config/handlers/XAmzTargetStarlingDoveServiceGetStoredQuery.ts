import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetStoredQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetStoredQueryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetStoredQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
