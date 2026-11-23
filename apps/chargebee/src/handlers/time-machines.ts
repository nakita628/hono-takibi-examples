import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTimeMachinesTimeMachineNameRoute,
  postTimeMachinesTimeMachineNameStartAfreshRoute,
  postTimeMachinesTimeMachineNameTravelForwardRoute,
} from '../routes'

export const getTimeMachinesTimeMachineNameRouteHandler: RouteHandler<
  typeof getTimeMachinesTimeMachineNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimeMachinesTimeMachineNameTravelForwardRouteHandler: RouteHandler<
  typeof postTimeMachinesTimeMachineNameTravelForwardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimeMachinesTimeMachineNameStartAfreshRouteHandler: RouteHandler<
  typeof postTimeMachinesTimeMachineNameStartAfreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}
