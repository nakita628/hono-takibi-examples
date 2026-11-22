import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
