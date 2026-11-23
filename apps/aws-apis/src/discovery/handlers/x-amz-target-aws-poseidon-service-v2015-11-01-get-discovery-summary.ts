import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101GetDiscoverySummaryHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
