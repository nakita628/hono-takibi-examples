import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteQueuesNameJobsRoute,
  getQueuesNameJobsRoute,
  getQueuesNameRoute,
  getQueuesRoute,
  putQueuesNameRoute,
} from '../routes'

export const getQueuesRouteHandler: RouteHandler<typeof getQueuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueuesNameRouteHandler: RouteHandler<typeof getQueuesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putQueuesNameRouteHandler: RouteHandler<typeof putQueuesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQueuesNameJobsRouteHandler: RouteHandler<
  typeof deleteQueuesNameJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueuesNameJobsRouteHandler: RouteHandler<typeof getQueuesNameJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
