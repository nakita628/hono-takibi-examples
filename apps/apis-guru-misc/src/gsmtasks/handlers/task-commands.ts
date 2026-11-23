import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaskCommandsIdIndexRoute,
  getTaskCommandsIndexRoute,
  postTaskCommandsIndexRoute,
  putTaskCommandsIdIndexRoute,
} from '../routes'

export const getTaskCommandsIndexRouteHandler: RouteHandler<
  typeof getTaskCommandsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaskCommandsIndexRouteHandler: RouteHandler<
  typeof postTaskCommandsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskCommandsIdIndexRouteHandler: RouteHandler<
  typeof getTaskCommandsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTaskCommandsIdIndexRouteHandler: RouteHandler<
  typeof putTaskCommandsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
