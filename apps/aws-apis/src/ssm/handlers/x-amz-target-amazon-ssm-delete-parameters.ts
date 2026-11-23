import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeleteParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeleteParametersHandler = app.openapi(
  postXAmzTargetAmazonSSMDeleteParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
