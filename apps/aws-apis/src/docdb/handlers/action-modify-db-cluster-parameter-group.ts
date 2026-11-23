import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBClusterParameterGroupRoute,
  postActionModifyDBClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyDbClusterParameterGroupHandler = app
  .openapi(getActionModifyDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
