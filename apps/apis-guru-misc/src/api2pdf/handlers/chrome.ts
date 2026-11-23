import type { RouteHandler } from '@hono/zod-openapi'
import type { getChromeUrlRoute, postChromeHtmlRoute, postChromeUrlRoute } from '../routes'

export const postChromeHtmlRouteHandler: RouteHandler<typeof postChromeHtmlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChromeUrlRouteHandler: RouteHandler<typeof getChromeUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChromeUrlRouteHandler: RouteHandler<typeof postChromeUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}
