import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketingSendersRoute } from '../routes'

const app = new OpenAPIHono()

export const sendersHandler = app.openapi(postMarketingSendersRoute, (c) => {
  throw new Error('Not implemented')
})
