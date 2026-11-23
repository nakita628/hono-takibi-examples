import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceListStoredQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceListStoredQueriesHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceListStoredQueriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
