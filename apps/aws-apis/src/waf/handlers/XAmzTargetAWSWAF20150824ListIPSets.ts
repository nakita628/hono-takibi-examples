import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListIPSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListIPSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListIPSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
