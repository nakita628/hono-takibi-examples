import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeMediaStorageConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeMediaStorageConfigurationHandler = app.openapi(
  postDescribeMediaStorageConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
