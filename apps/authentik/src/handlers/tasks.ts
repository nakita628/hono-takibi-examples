import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTasksSchedulesIdIndexRoute,
  getTasksSchedulesIndexRoute,
  getTasksTasksIndexRoute,
  getTasksTasksMessageIdIndexRoute,
  getTasksTasksStatusIndexRoute,
  getTasksWorkersIndexRoute,
  patchTasksSchedulesIdIndexRoute,
  postTasksSchedulesIdSendIndexRoute,
  postTasksTasksMessageIdRetryIndexRoute,
  putTasksSchedulesIdIndexRoute,
} from '../routes'

export const getTasksSchedulesIndexRouteHandler: RouteHandler<
  typeof getTasksSchedulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksSchedulesIdIndexRouteHandler: RouteHandler<
  typeof getTasksSchedulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTasksSchedulesIdIndexRouteHandler: RouteHandler<
  typeof putTasksSchedulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTasksSchedulesIdIndexRouteHandler: RouteHandler<
  typeof patchTasksSchedulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksSchedulesIdSendIndexRouteHandler: RouteHandler<
  typeof postTasksSchedulesIdSendIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTasksIndexRouteHandler: RouteHandler<typeof getTasksTasksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTasksTasksMessageIdIndexRouteHandler: RouteHandler<
  typeof getTasksTasksMessageIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksTasksMessageIdRetryIndexRouteHandler: RouteHandler<
  typeof postTasksTasksMessageIdRetryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTasksStatusIndexRouteHandler: RouteHandler<
  typeof getTasksTasksStatusIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksWorkersIndexRouteHandler: RouteHandler<
  typeof getTasksWorkersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
