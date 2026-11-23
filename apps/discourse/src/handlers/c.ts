import { OpenAPIHono } from '@hono/zod-openapi'
import { getCIdShowJsonRoute, getCSlugIdJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cHandler = app
  .openapi(getCSlugIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCIdShowJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
