import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3UpdateParameterGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3UpdateParameterGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3UpdateParameterGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
