import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWkhtmltopdfUrlRoute,
  postWkhtmltopdfHtmlRoute,
  postWkhtmltopdfUrlRoute,
} from '../routes'

export const postWkhtmltopdfHtmlRouteHandler: RouteHandler<
  typeof postWkhtmltopdfHtmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWkhtmltopdfUrlRouteHandler: RouteHandler<typeof getWkhtmltopdfUrlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWkhtmltopdfUrlRouteHandler: RouteHandler<typeof postWkhtmltopdfUrlRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
