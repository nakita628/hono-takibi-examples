import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEngineDefaultClusterParametersRoute,
  postActionDescribeEngineDefaultClusterParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEngineDefaultClusterParametersHandler = app
  .openapi(getActionDescribeEngineDefaultClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEngineDefaultClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
