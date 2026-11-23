import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productCountJsonHandler = app.openapi(getProductCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
