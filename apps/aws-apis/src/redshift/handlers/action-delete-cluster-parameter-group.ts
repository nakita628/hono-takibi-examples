import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteClusterParameterGroupRoute,
  postActionDeleteClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteClusterParameterGroupHandler = app
  .openapi(getActionDeleteClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
