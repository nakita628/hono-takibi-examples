import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNegativeKeywordNegativeKeywordIdRoute,
  getNegativeKeywordRoute,
  postNegativeKeywordRoute,
  putNegativeKeywordNegativeKeywordIdRoute,
} from '../routes'

export const getNegativeKeywordRouteHandler: RouteHandler<typeof getNegativeKeywordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNegativeKeywordRouteHandler: RouteHandler<
  typeof postNegativeKeywordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNegativeKeywordNegativeKeywordIdRouteHandler: RouteHandler<
  typeof getNegativeKeywordNegativeKeywordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNegativeKeywordNegativeKeywordIdRouteHandler: RouteHandler<
  typeof putNegativeKeywordNegativeKeywordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
