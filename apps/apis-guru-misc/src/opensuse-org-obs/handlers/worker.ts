import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkerArchitectureNameWorkerIdRoute, getWorkerStatusRoute } from '../routes'

export const getWorkerStatusRouteHandler: RouteHandler<typeof getWorkerStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkerArchitectureNameWorkerIdRouteHandler: RouteHandler<
  typeof getWorkerArchitectureNameWorkerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
