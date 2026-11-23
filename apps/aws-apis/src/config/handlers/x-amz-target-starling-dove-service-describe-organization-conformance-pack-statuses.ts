import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
