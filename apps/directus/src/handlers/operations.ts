import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOperationsIdRoute,
  deleteOperationsRoute,
  getOperationsIdRoute,
  getOperationsRoute,
  patchOperationsIdRoute,
  patchOperationsRoute,
  postOperationsRoute,
} from '../routes'

export const getOperationsRouteHandler: RouteHandler<typeof getOperationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationsRouteHandler: RouteHandler<typeof postOperationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOperationsRouteHandler: RouteHandler<typeof patchOperationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOperationsRouteHandler: RouteHandler<typeof deleteOperationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOperationsIdRouteHandler: RouteHandler<typeof getOperationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOperationsIdRouteHandler: RouteHandler<typeof patchOperationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOperationsIdRouteHandler: RouteHandler<typeof deleteOperationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
