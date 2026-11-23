import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteToolsNameRoute,
  getToolsNameLogsRoute,
  getToolsNameRoute,
  getToolsNameStatusRoute,
  getToolsRoute,
  postToolsRoute,
  putToolsNameRoute,
} from '../routes'

export const postToolsRouteHandler: RouteHandler<typeof postToolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getToolsRouteHandler: RouteHandler<typeof getToolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getToolsNameRouteHandler: RouteHandler<typeof getToolsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putToolsNameRouteHandler: RouteHandler<typeof putToolsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteToolsNameRouteHandler: RouteHandler<typeof deleteToolsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getToolsNameStatusRouteHandler: RouteHandler<typeof getToolsNameStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getToolsNameLogsRouteHandler: RouteHandler<typeof getToolsNameLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
