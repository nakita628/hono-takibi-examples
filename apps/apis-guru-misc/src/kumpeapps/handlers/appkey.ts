import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAppkeyRoute, postAppkeyRoute, putAppkeyRoute } from '../routes'

const app = new OpenAPIHono()

export const appkeyHandler = app
  .openapi(patchAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
