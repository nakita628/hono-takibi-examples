import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeElasticGpusRoute, postActionDescribeElasticGpusRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeElasticGpusHandler = app
  .openapi(getActionDescribeElasticGpusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeElasticGpusRoute, (c) => {
    throw new Error('Not implemented')
  })
