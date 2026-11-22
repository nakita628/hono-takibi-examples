import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBouncesIdRoute,
  deleteBouncesRoute,
  getBouncesIdRoute,
  getBouncesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bouncesHandler = app
  .openapi(getBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBouncesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBouncesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
