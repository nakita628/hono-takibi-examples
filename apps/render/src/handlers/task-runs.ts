import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTaskRunsTaskRunIdRoute,
  getTaskRunsEventsRoute,
  getTaskRunsRoute,
  getTaskRunsTaskRunIdRoute,
  postTaskRunsRoute,
} from '../routes'

export const getTaskRunsRouteHandler: RouteHandler<typeof getTaskRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaskRunsRouteHandler: RouteHandler<typeof postTaskRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskRunsEventsRouteHandler: RouteHandler<typeof getTaskRunsEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTaskRunsTaskRunIdRouteHandler: RouteHandler<
  typeof getTaskRunsTaskRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTaskRunsTaskRunIdRouteHandler: RouteHandler<
  typeof deleteTaskRunsTaskRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
