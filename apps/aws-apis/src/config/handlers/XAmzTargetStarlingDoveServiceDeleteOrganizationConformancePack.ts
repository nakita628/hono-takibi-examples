import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
