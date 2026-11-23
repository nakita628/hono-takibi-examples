import type { RouteHandler } from '@hono/zod-openapi'
import type { getFallbackFontFontsNameRoute, getFallbackFontFontsRoute } from '../routes'

export const getFallbackFontFontsRouteHandler: RouteHandler<
  typeof getFallbackFontFontsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFallbackFontFontsNameRouteHandler: RouteHandler<
  typeof getFallbackFontFontsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
