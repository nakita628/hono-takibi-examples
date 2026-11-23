import { OpenAPIHono } from '@hono/zod-openapi'
import { postPayFieldsRoute, postPayIndicativeQuoteRoute, postPayRoute } from '../routes'

const app = new OpenAPIHono()

export const payHandler = app
  .openapi(postPayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayIndicativeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
