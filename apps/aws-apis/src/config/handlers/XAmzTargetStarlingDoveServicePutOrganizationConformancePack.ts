import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutOrganizationConformancePackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServicePutOrganizationConformancePackHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutOrganizationConformancePackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
