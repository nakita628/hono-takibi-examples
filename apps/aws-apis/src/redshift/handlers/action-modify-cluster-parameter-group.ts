import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterParameterGroupRoute,
  postActionModifyClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyClusterParameterGroupHandler = app
  .openapi(getActionModifyClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
