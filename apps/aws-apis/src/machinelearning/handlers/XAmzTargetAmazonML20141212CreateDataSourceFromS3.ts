import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateDataSourceFromS3Route } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212CreateDataSourceFromS3Handler = app.openapi(
  postXAmzTargetAmazonML20141212CreateDataSourceFromS3Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
