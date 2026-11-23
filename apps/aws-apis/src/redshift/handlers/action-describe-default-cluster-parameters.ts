import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDefaultClusterParametersRoute,
  postActionDescribeDefaultClusterParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDefaultClusterParametersHandler = app
  .openapi(getActionDescribeDefaultClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDefaultClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
