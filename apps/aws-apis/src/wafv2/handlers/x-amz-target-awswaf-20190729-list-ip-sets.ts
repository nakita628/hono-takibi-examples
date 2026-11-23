import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListIPSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListIpSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListIPSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
