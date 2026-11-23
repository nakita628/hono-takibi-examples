import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRetargetingIdRoute,
  getRetargetingCountRoute,
  getRetargetingIdDatapointsCountRoute,
  getRetargetingIdDatapointsRoute,
  getRetargetingIdRoute,
  getRetargetingRoute,
  postRetargetingIdRoute,
  postRetargetingRoute,
} from '../routes'

export const getRetargetingRouteHandler: RouteHandler<typeof getRetargetingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRetargetingRouteHandler: RouteHandler<typeof postRetargetingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRetargetingCountRouteHandler: RouteHandler<
  typeof getRetargetingCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRetargetingIdRouteHandler: RouteHandler<
  typeof deleteRetargetingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRetargetingIdRouteHandler: RouteHandler<typeof getRetargetingIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRetargetingIdRouteHandler: RouteHandler<typeof postRetargetingIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRetargetingIdDatapointsRouteHandler: RouteHandler<
  typeof getRetargetingIdDatapointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRetargetingIdDatapointsCountRouteHandler: RouteHandler<
  typeof getRetargetingIdDatapointsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
