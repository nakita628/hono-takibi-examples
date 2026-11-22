import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
