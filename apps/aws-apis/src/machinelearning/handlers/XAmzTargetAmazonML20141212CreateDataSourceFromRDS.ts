import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateDataSourceFromRDSRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212CreateDataSourceFromRDSHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateDataSourceFromRDSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
