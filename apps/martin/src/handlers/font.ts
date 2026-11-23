import { OpenAPIHono } from '@hono/zod-openapi'
import { getFontFontstackStartEndRoute } from '../routes'

const app = new OpenAPIHono()

export const fontHandler = app.openapi(getFontFontstackStartEndRoute, (c) => {
  throw new Error('Not implemented')
})
