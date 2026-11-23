import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutStoredQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutStoredQueryHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutStoredQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
