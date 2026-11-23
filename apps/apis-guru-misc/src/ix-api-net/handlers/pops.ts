import { OpenAPIHono } from '@hono/zod-openapi'
import { getPopsIdRoute, getPopsRoute } from '../routes'

const app = new OpenAPIHono()

export const popsHandler = app
  .openapi(getPopsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPopsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
