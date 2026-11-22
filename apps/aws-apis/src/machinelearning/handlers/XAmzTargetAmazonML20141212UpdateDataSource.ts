import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212UpdateDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212UpdateDataSourceHandler = app.openapi(
  postXAmzTargetAmazonML20141212UpdateDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
