import { OpenAPIHono } from '@hono/zod-openapi'
import { getColorsRoute } from '../routes'

const app = new OpenAPIHono()

export const colorsHandler = app.openapi(getColorsRoute, (c) => {
  throw new Error('Not implemented')
})
