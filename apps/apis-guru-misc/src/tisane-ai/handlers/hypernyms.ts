import { OpenAPIHono } from '@hono/zod-openapi'
import { getHypernymsRoute } from '../routes'

const app = new OpenAPIHono()

export const hypernymsHandler = app.openapi(getHypernymsRoute, (c) => {
  throw new Error('Not implemented')
})
