import { OpenAPIHono } from '@hono/zod-openapi'
import { getStochrsiRoute } from '../routes'

const app = new OpenAPIHono()

export const stochrsiHandler = app.openapi(getStochrsiRoute, (c) => {
  throw new Error('Not implemented')
})
