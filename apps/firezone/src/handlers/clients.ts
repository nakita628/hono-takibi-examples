import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClientsIdRoute,
  getClientsIdRoute,
  getClientsRoute,
  patchClientsIdRoute,
  putClientsIdRoute,
  putClientsIdUnverifyRoute,
  putClientsIdVerifyRoute,
} from '../routes'

export const deleteClientsIdRouteHandler: RouteHandler<typeof deleteClientsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientsIdRouteHandler: RouteHandler<typeof getClientsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchClientsIdRouteHandler: RouteHandler<typeof patchClientsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putClientsIdRouteHandler: RouteHandler<typeof putClientsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putClientsIdVerifyRouteHandler: RouteHandler<typeof putClientsIdVerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putClientsIdUnverifyRouteHandler: RouteHandler<
  typeof putClientsIdUnverifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClientsRouteHandler: RouteHandler<typeof getClientsRoute> = async (c) => {
  throw new Error('Not implemented')
}
