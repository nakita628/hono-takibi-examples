import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1CategoryListOutputFormatRoute,
  getV1IdOutputFormatRoute,
  getV1PocsOutputFormatRoute,
} from '../routes'

export const getV1CategoryListOutputFormatRouteHandler: RouteHandler<
  typeof getV1CategoryListOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PocsOutputFormatRouteHandler: RouteHandler<
  typeof getV1PocsOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1IdOutputFormatRouteHandler: RouteHandler<
  typeof getV1IdOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
