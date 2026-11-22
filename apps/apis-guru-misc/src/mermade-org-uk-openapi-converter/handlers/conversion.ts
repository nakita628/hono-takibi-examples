import { OpenAPIHono } from '@hono/zod-openapi'
import { getConvertRoute, postConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const conversionHandler = app
  .openapi(getConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
