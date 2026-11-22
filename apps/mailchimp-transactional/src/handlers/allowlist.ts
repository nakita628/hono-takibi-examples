import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAllowlistsAddRoute,
  postAllowlistsDeleteRoute,
  postAllowlistsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowlistHandler = app
  .openapi(postAllowlistsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllowlistsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllowlistsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
