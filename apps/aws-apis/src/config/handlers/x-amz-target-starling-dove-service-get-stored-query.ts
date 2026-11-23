import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetStoredQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetStoredQueryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetStoredQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
