import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutConformancePackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutConformancePackHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutConformancePackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
