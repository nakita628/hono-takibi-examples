import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetGasPriceRoute } from '../routes'

const app = new OpenAPIHono()

export const getGasPriceHandler = app.openapi(postGetGasPriceRoute, (c) => {
  throw new Error('Not implemented')
})
