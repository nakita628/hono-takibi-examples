import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1alphaParentBiddingFunctionsRoute,
  postV1alphaNameActivateRoute,
  postV1alphaNameArchiveRoute,
  postV1alphaParentBiddingFunctionsRoute,
} from '../routes'

export const postV1alphaNameActivateRouteHandler: RouteHandler<
  typeof postV1alphaNameActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alphaNameArchiveRouteHandler: RouteHandler<
  typeof postV1alphaNameArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alphaParentBiddingFunctionsRouteHandler: RouteHandler<
  typeof getV1alphaParentBiddingFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1alphaParentBiddingFunctionsRouteHandler: RouteHandler<
  typeof postV1alphaParentBiddingFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
