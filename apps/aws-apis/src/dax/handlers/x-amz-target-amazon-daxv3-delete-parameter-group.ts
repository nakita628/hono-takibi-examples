import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DeleteParameterGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DeleteParameterGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DeleteParameterGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
