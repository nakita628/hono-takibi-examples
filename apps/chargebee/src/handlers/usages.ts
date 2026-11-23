import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsagesRoute, postUsagesPdfRoute } from '../routes'

const app = new OpenAPIHono()

export const usagesHandler = app
  .openapi(postUsagesPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
