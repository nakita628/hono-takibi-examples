import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1TasksNameRoute,
  getV1HealthRoute,
  getV1StatusClusterRoute,
  getV1TasksNameRoute,
  getV1TasksRoute,
  postV1TasksRoute,
} from '../routes'

export const getV1StatusClusterRouteHandler: RouteHandler<typeof getV1StatusClusterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1HealthRouteHandler: RouteHandler<typeof getV1HealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TasksRouteHandler: RouteHandler<typeof postV1TasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TasksRouteHandler: RouteHandler<typeof getV1TasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TasksNameRouteHandler: RouteHandler<typeof deleteV1TasksNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TasksNameRouteHandler: RouteHandler<typeof getV1TasksNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
