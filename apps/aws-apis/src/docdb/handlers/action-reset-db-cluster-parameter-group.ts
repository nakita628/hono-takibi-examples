import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetDBClusterParameterGroupRoute,
  postActionResetDBClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionResetDbClusterParameterGroupHandler = app
  .openapi(getActionResetDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetDBClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
