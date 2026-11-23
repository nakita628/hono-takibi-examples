import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGetDelayRoute,
  getGetIdIdRoute,
  getGetListPageRoute,
  getGetUuidUuidRoute,
} from '../routes'

export const getGetDelayRouteHandler: RouteHandler<typeof getGetDelayRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGetIdIdRouteHandler: RouteHandler<typeof getGetIdIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGetListPageRouteHandler: RouteHandler<typeof getGetListPageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGetUuidUuidRouteHandler: RouteHandler<typeof getGetUuidUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}
