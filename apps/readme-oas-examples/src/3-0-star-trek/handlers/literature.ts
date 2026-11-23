import { OpenAPIHono } from '@hono/zod-openapi'
import { getLiteratureRoute, getLiteratureSearchRoute, postLiteratureSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const literatureHandler = app
  .openapi(getLiteratureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiteratureSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiteratureSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
