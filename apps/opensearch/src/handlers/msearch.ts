import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMsearchRoute,
  getMsearchTemplateRoute,
  postMsearchRoute,
  postMsearchTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const msearchHandler = app
  .openapi(getMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
