import { OpenAPIHono } from '@hono/zod-openapi'
import { getSwatchIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const swatchHandler = app.openapi(getSwatchIndexRoute, (c) => {
  throw new Error('Not implemented')
})
