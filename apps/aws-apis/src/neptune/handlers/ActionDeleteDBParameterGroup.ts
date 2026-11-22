import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBParameterGroupRoute,
  postActionDeleteDBParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDBParameterGroupHandler = app
  .openapi(getActionDeleteDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
