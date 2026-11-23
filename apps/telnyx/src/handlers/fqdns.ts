import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFqdnsIdRoute,
  getFqdnsIdRoute,
  getFqdnsRoute,
  patchFqdnsIdRoute,
  postFqdnsRoute,
} from '../routes'

export const getFqdnsRouteHandler: RouteHandler<typeof getFqdnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFqdnsRouteHandler: RouteHandler<typeof postFqdnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFqdnsIdRouteHandler: RouteHandler<typeof deleteFqdnsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFqdnsIdRouteHandler: RouteHandler<typeof getFqdnsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFqdnsIdRouteHandler: RouteHandler<typeof patchFqdnsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
