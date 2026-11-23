import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListIPSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824ListIpSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListIPSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
