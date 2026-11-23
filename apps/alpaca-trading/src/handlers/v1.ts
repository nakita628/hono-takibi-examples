import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1LocatesLocateIdRoute,
  getV1LocatesQuotesRoute,
  getV1LocatesRoute,
  postV1LocatesRoute,
} from '../routes'

export const getV1LocatesRouteHandler: RouteHandler<typeof getV1LocatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1LocatesRouteHandler: RouteHandler<typeof postV1LocatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LocatesLocateIdRouteHandler: RouteHandler<
  typeof getV1LocatesLocateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LocatesQuotesRouteHandler: RouteHandler<typeof getV1LocatesQuotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
