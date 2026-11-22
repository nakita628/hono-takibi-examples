import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiOtoroshiJsonRoute, postApiImportRoute, postApiOtoroshiJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const importHandler = app
  .openapi(postApiImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOtoroshiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOtoroshiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
