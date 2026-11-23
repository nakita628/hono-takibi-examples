import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMonitorMonitorIdRoute,
  getMonitorMonitorIdChecksCheckIdRoute,
  getMonitorMonitorIdChecksRoute,
  getMonitorMonitorIdRoute,
  getMonitorRoute,
  patchMonitorMonitorIdRoute,
  postMonitorMonitorIdRunRoute,
  postMonitorRoute,
} from '../routes'

export const postMonitorRouteHandler: RouteHandler<typeof postMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorRouteHandler: RouteHandler<typeof getMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorMonitorIdRouteHandler: RouteHandler<
  typeof getMonitorMonitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMonitorMonitorIdRouteHandler: RouteHandler<
  typeof patchMonitorMonitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMonitorMonitorIdRouteHandler: RouteHandler<
  typeof deleteMonitorMonitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMonitorMonitorIdRunRouteHandler: RouteHandler<
  typeof postMonitorMonitorIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorMonitorIdChecksRouteHandler: RouteHandler<
  typeof getMonitorMonitorIdChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorMonitorIdChecksCheckIdRouteHandler: RouteHandler<
  typeof getMonitorMonitorIdChecksCheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
