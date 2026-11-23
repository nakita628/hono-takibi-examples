import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommandsNameRoute,
  getCommandsNameRoute,
  getCommandsRoute,
  postCommandsRoute,
  putCommandsNameRoute,
} from '../routes'

export const getCommandsRouteHandler: RouteHandler<typeof getCommandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommandsRouteHandler: RouteHandler<typeof postCommandsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommandsNameRouteHandler: RouteHandler<typeof deleteCommandsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommandsNameRouteHandler: RouteHandler<typeof getCommandsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommandsNameRouteHandler: RouteHandler<typeof putCommandsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
