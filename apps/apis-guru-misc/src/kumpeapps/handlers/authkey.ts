import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthkeyRoute, patchAuthkeyRoute, postAuthkeyRoute, putAuthkeyRoute } from '../routes'

const app = new OpenAPIHono()

export const authkeyHandler = app
  .openapi(getAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
