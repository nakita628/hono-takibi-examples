import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateDataSourceFromRDSRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212CreateDataSourceFromRdsHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateDataSourceFromRDSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
