import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDbaasThanosNameRoute,
  getDbaasThanosNameRoute,
  getDbaasThanosServiceNameUserUsernamePasswordRevealRoute,
  postDbaasThanosNameRoute,
  putDbaasThanosNameMaintenanceStartRoute,
  putDbaasThanosNameRoute,
} from '../routes'

export const putDbaasThanosNameMaintenanceStartRouteHandler: RouteHandler<
  typeof putDbaasThanosNameMaintenanceStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDbaasThanosServiceNameUserUsernamePasswordRevealRouteHandler: RouteHandler<
  typeof getDbaasThanosServiceNameUserUsernamePasswordRevealRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDbaasThanosNameRouteHandler: RouteHandler<typeof getDbaasThanosNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDbaasThanosNameRouteHandler: RouteHandler<
  typeof postDbaasThanosNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDbaasThanosNameRouteHandler: RouteHandler<typeof putDbaasThanosNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDbaasThanosNameRouteHandler: RouteHandler<
  typeof deleteDbaasThanosNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
