import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRealTimeDecisionsRealTimeDecisionIdRoute,
  postRealTimeDecisionsRealTimeDecisionIdActionRoute,
} from '../routes'

export const getRealTimeDecisionsRealTimeDecisionIdRouteHandler: RouteHandler<
  typeof getRealTimeDecisionsRealTimeDecisionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealTimeDecisionsRealTimeDecisionIdActionRouteHandler: RouteHandler<
  typeof postRealTimeDecisionsRealTimeDecisionIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
