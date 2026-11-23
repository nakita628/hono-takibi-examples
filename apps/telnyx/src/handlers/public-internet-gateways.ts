import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePublicInternetGatewaysIdRoute,
  getPublicInternetGatewaysIdRoute,
  getPublicInternetGatewaysRoute,
  postPublicInternetGatewaysRoute,
} from '../routes'

export const getPublicInternetGatewaysRouteHandler: RouteHandler<
  typeof getPublicInternetGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPublicInternetGatewaysRouteHandler: RouteHandler<
  typeof postPublicInternetGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePublicInternetGatewaysIdRouteHandler: RouteHandler<
  typeof deletePublicInternetGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublicInternetGatewaysIdRouteHandler: RouteHandler<
  typeof getPublicInternetGatewaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
