import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionResetDBParameterGroupRoute,
  postActionResetDBParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionResetDBParameterGroupHandler = app
  .openapi(getActionResetDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResetDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
