import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3CreateSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3CreateSubnetGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3CreateSubnetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
