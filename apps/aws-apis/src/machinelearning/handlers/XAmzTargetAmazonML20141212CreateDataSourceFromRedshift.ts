import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212CreateDataSourceFromRedshiftHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateDataSourceFromRedshiftRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
