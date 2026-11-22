import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postGsmDeleteRoute,
  postGsmGetRoute,
  postGsmRoute,
  postGsmUpdateRoute,
} from '../routes'

export const postGsmRouteHandler: RouteHandler<typeof postGsmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGsmGetRouteHandler: RouteHandler<typeof postGsmGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGsmUpdateRouteHandler: RouteHandler<typeof postGsmUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGsmDeleteRouteHandler: RouteHandler<typeof postGsmDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
