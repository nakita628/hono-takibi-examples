import { OpenAPIHono } from '@hono/zod-openapi'
import { getSelectRoute, postSelectRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
