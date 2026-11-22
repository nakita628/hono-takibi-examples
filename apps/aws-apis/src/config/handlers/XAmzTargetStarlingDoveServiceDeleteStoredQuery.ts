import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteStoredQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteStoredQueryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteStoredQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
