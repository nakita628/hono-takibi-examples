import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBParameterGroupRoute,
  postActionCreateDBParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDBParameterGroupHandler = app
  .openapi(getActionCreateDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
