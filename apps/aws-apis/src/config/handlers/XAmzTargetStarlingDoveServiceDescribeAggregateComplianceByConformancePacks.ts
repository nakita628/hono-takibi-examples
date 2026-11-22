import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
