import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteHumanLoopsHumanLoopNameRoute,
  getHumanLoopsHumanLoopNameRoute,
  postHumanLoopsRoute,
  postHumanLoopsStopRoute,
} from '../routes'

export const deleteHumanLoopsHumanLoopNameRouteHandler: RouteHandler<
  typeof deleteHumanLoopsHumanLoopNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHumanLoopsHumanLoopNameRouteHandler: RouteHandler<
  typeof getHumanLoopsHumanLoopNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postHumanLoopsRouteHandler: RouteHandler<typeof postHumanLoopsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHumanLoopsStopRouteHandler: RouteHandler<typeof postHumanLoopsStopRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
