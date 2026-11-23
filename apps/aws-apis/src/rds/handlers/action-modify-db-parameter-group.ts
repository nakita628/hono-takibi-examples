import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDBParameterGroupRoute,
  postActionModifyDBParameterGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyDbParameterGroupHandler = app
  .openapi(getActionModifyDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
