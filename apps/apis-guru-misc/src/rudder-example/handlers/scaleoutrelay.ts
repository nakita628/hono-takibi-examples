import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postScaleoutrelayDemoteNodeIdRoute,
  postScaleoutrelayPromoteNodeIdRoute,
} from '../routes'

export const postScaleoutrelayDemoteNodeIdRouteHandler: RouteHandler<
  typeof postScaleoutrelayDemoteNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScaleoutrelayPromoteNodeIdRouteHandler: RouteHandler<
  typeof postScaleoutrelayPromoteNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
