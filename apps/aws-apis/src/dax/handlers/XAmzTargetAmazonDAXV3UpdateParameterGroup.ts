import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3UpdateParameterGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDAXV3UpdateParameterGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3UpdateParameterGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
