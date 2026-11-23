import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFeesLagoIdRoute,
  getFeesLagoIdRoute,
  getFeesRoute,
  putFeesLagoIdRoute,
} from '../routes'

export const getFeesRouteHandler: RouteHandler<typeof getFeesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeesLagoIdRouteHandler: RouteHandler<typeof getFeesLagoIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeesLagoIdRouteHandler: RouteHandler<typeof putFeesLagoIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFeesLagoIdRouteHandler: RouteHandler<typeof deleteFeesLagoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
