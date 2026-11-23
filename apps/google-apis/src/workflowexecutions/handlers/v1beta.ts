import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1betaNameRoute,
  getV1betaParentExecutionsRoute,
  postV1betaNameCancelRoute,
  postV1betaParentExecutionsRoute,
} from '../routes'

export const getV1betaNameRouteHandler: RouteHandler<typeof getV1betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaNameCancelRouteHandler: RouteHandler<
  typeof postV1betaNameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1betaParentExecutionsRouteHandler: RouteHandler<
  typeof getV1betaParentExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1betaParentExecutionsRouteHandler: RouteHandler<
  typeof postV1betaParentExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
