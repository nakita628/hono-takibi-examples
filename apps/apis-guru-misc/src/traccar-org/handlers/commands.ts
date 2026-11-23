import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommandsIdRoute,
  getCommandsRoute,
  getCommandsSendRoute,
  getCommandsTypesRoute,
  postCommandsRoute,
  postCommandsSendRoute,
  putCommandsIdRoute,
} from '../routes'

export const getCommandsRouteHandler: RouteHandler<typeof getCommandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommandsRouteHandler: RouteHandler<typeof postCommandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommandsSendRouteHandler: RouteHandler<typeof getCommandsSendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommandsSendRouteHandler: RouteHandler<typeof postCommandsSendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommandsTypesRouteHandler: RouteHandler<typeof getCommandsTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCommandsIdRouteHandler: RouteHandler<typeof deleteCommandsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCommandsIdRouteHandler: RouteHandler<typeof putCommandsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
