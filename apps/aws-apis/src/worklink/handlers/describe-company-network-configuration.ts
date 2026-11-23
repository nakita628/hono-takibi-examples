import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeCompanyNetworkConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeCompanyNetworkConfigurationHandler = app.openapi(
  postDescribeCompanyNetworkConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
