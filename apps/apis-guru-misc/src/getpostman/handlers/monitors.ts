import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMonitorsMonitorUidRoute,
  getMonitorsMonitorUidRoute,
  getMonitorsRoute,
  postMonitorsMonitorUidRunRoute,
  postMonitorsRoute,
  putMonitorsMonitorUidRoute,
} from '../routes'

export const getMonitorsRouteHandler: RouteHandler<typeof getMonitorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMonitorsRouteHandler: RouteHandler<typeof postMonitorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMonitorsMonitorUidRouteHandler: RouteHandler<
  typeof deleteMonitorsMonitorUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorsMonitorUidRouteHandler: RouteHandler<
  typeof getMonitorsMonitorUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMonitorsMonitorUidRouteHandler: RouteHandler<
  typeof putMonitorsMonitorUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMonitorsMonitorUidRunRouteHandler: RouteHandler<
  typeof postMonitorsMonitorUidRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
