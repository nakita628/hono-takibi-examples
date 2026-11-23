import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCookiesDeleteRoute,
  getCookiesRoute,
  getCookiesSetNameValueRoute,
  getCookiesSetRoute,
} from '../routes'

export const getCookiesRouteHandler: RouteHandler<typeof getCookiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCookiesDeleteRouteHandler: RouteHandler<typeof getCookiesDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCookiesSetRouteHandler: RouteHandler<typeof getCookiesSetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCookiesSetNameValueRouteHandler: RouteHandler<
  typeof getCookiesSetNameValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}
