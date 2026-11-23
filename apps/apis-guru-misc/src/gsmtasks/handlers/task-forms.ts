import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTaskFormsIdIndexRoute,
  getTaskFormsIdIndexRoute,
  getTaskFormsIndexRoute,
  patchTaskFormsIdIndexRoute,
  postTaskFormsIndexRoute,
  putTaskFormsIdIndexRoute,
} from '../routes'

export const getTaskFormsIndexRouteHandler: RouteHandler<typeof getTaskFormsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTaskFormsIndexRouteHandler: RouteHandler<typeof postTaskFormsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTaskFormsIdIndexRouteHandler: RouteHandler<
  typeof deleteTaskFormsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskFormsIdIndexRouteHandler: RouteHandler<
  typeof getTaskFormsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTaskFormsIdIndexRouteHandler: RouteHandler<
  typeof patchTaskFormsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTaskFormsIdIndexRouteHandler: RouteHandler<
  typeof putTaskFormsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
