import { OpenAPIHono } from '@hono/zod-openapi'
import { getFallbackFontFontsNameRoute, getFallbackFontFontsRoute } from '../routes'

const app = new OpenAPIHono()

export const fallbackFontHandler = app
  .openapi(getFallbackFontFontsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFallbackFontFontsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
