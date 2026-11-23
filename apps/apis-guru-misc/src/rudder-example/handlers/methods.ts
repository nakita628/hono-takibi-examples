import { OpenAPIHono } from '@hono/zod-openapi'
import { getMethodsRoute, postMethodsReloadRoute } from '../routes'

const app = new OpenAPIHono()

export const methodsHandler = app
  .openapi(getMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMethodsReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
