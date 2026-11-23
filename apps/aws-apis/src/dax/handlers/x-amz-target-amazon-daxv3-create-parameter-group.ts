import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3CreateParameterGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3CreateParameterGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3CreateParameterGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
