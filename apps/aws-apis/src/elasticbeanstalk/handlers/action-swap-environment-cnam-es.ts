import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSwapEnvironmentCNAMEsRoute,
  postActionSwapEnvironmentCNAMEsRoute,
} from '../routes'

export const getActionSwapEnvironmentCNAMEsRouteHandler: RouteHandler<
  typeof getActionSwapEnvironmentCNAMEsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSwapEnvironmentCNAMEsRouteHandler: RouteHandler<
  typeof postActionSwapEnvironmentCNAMEsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
