import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetClusterParameterGroupRoute,
  postActionResetClusterParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionResetClusterParameterGroupHandler = app
  .openapi(getActionResetClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetClusterParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
