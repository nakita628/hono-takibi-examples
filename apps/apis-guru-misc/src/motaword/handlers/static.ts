import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormatsRoute, getLanguagesRoute, getRoute, getSwaggerRoute } from '../routes'

const app = new OpenAPIHono()

export const staticHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSwaggerRoute, (c) => {
    throw new Error('Not implemented')
  })
