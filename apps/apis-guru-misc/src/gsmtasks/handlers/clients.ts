import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClientsIdIndexRoute,
  getClientsIndexRoute,
  patchClientsIdIndexRoute,
  postClientsIndexRoute,
  putClientsIdIndexRoute,
} from '../routes'

export const getClientsIndexRouteHandler: RouteHandler<typeof getClientsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClientsIndexRouteHandler: RouteHandler<typeof postClientsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getClientsIdIndexRouteHandler: RouteHandler<typeof getClientsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchClientsIdIndexRouteHandler: RouteHandler<
  typeof patchClientsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putClientsIdIndexRouteHandler: RouteHandler<typeof putClientsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
