import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NetworkProgramsNetworkProgramTokenRoute,
  getV1NetworkProgramsRoute,
} from '../routes'

export const getV1NetworkProgramsRouteHandler: RouteHandler<
  typeof getV1NetworkProgramsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NetworkProgramsNetworkProgramTokenRouteHandler: RouteHandler<
  typeof getV1NetworkProgramsNetworkProgramTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
