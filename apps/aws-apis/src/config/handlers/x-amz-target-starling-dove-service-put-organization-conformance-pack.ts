import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServicePutOrganizationConformancePackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServicePutOrganizationConformancePackHandler = app.openapi(
  postXAmzTargetStarlingDoveServicePutOrganizationConformancePackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
