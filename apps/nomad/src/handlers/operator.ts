import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOperatorRaftPeerRoute,
  getOperatorAutopilotConfigurationRoute,
  getOperatorAutopilotHealthRoute,
  getOperatorRaftConfigurationRoute,
  getOperatorSchedulerConfigurationRoute,
  postOperatorSchedulerConfigurationRoute,
  putOperatorAutopilotConfigurationRoute,
} from '../routes'

export const getOperatorAutopilotConfigurationRouteHandler: RouteHandler<
  typeof getOperatorAutopilotConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOperatorAutopilotConfigurationRouteHandler: RouteHandler<
  typeof putOperatorAutopilotConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperatorAutopilotHealthRouteHandler: RouteHandler<
  typeof getOperatorAutopilotHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperatorRaftConfigurationRouteHandler: RouteHandler<
  typeof getOperatorRaftConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOperatorRaftPeerRouteHandler: RouteHandler<
  typeof deleteOperatorRaftPeerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOperatorSchedulerConfigurationRouteHandler: RouteHandler<
  typeof getOperatorSchedulerConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperatorSchedulerConfigurationRouteHandler: RouteHandler<
  typeof postOperatorSchedulerConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
