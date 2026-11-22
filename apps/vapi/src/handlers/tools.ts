import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteToolIdRoute,
  getToolIdRoute,
  getToolRoute,
  patchToolIdRoute,
  postToolRoute,
} from '../routes'

const app = new OpenAPIHono()

export const toolsHandler = app
  .openapi(postToolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteToolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
