import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212GetDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212GetDataSourceHandler = app.openapi(
  postXAmzTargetAmazonML20141212GetDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
