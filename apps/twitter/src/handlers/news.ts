import { OpenAPIHono } from '@hono/zod-openapi'
import { get2NewsIdRoute, get2NewsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const newsHandler = app
  .openapi(get2NewsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2NewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
