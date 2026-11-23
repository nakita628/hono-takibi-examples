import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetStoresUnderAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const getStoresUnderAccountHandler = app.openapi(postGetStoresUnderAccountRoute, (c) => {
  throw new Error('Not implemented')
})
