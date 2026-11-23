import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteConformancePackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDeleteConformancePackHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteConformancePackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
