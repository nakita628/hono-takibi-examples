import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DeleteDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212DeleteDataSourceHandler = app.openapi(
  postXAmzTargetAmazonML20141212DeleteDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
