import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteParameterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteParameterHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteParameterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
