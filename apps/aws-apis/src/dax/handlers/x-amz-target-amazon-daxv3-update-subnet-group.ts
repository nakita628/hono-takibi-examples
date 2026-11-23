import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3UpdateSubnetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3UpdateSubnetGroupHandler = app.openapi(
  postXAmzTargetAmazonDAXV3UpdateSubnetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
