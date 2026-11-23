import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV13DeploymentsIdRoute,
  getV13DeploymentsIdOrUrlRoute,
  postV13DeploymentsRoute,
} from '../routes'

export const getV13DeploymentsIdOrUrlRouteHandler: RouteHandler<
  typeof getV13DeploymentsIdOrUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV13DeploymentsRouteHandler: RouteHandler<typeof postV13DeploymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV13DeploymentsIdRouteHandler: RouteHandler<
  typeof deleteV13DeploymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
