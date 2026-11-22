import { OpenAPIHono } from '@hono/zod-openapi'
import { getResellerRoute, getResellerSubdomainRoute, putResellerRoute } from '../routes'

const app = new OpenAPIHono()

export const resellerHandler = app
  .openapi(getResellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResellerSubdomainRoute, (c) => {
    throw new Error('Not implemented')
  })
