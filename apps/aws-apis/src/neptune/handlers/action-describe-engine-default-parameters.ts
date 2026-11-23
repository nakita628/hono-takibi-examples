import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEngineDefaultParametersRoute,
  postActionDescribeEngineDefaultParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEngineDefaultParametersHandler = app
  .openapi(getActionDescribeEngineDefaultParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEngineDefaultParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
