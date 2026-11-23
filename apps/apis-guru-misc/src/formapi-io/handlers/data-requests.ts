import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDataRequestsDataRequestIdRoute,
  postDataRequestsDataRequestIdTokensRoute,
  putDataRequestsDataRequestIdRoute,
} from '../routes'

export const getDataRequestsDataRequestIdRouteHandler: RouteHandler<
  typeof getDataRequestsDataRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDataRequestsDataRequestIdRouteHandler: RouteHandler<
  typeof putDataRequestsDataRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDataRequestsDataRequestIdTokensRouteHandler: RouteHandler<
  typeof postDataRequestsDataRequestIdTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}
