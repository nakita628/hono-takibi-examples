import { OpenAPIHono } from '@hono/zod-openapi'
import { getShakespeareQuoteRoute } from '../routes'

const app = new OpenAPIHono()

export const worksHandler = app.openapi(getShakespeareQuoteRoute, (c) => {
  throw new Error('Not implemented')
})
