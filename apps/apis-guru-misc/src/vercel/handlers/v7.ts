import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV7CertsIdRoute,
  getV7CertsIdRoute,
  postV7CertsRoute,
  putV7CertsRoute,
} from '../routes'

export const postV7CertsRouteHandler: RouteHandler<typeof postV7CertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV7CertsRouteHandler: RouteHandler<typeof putV7CertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV7CertsIdRouteHandler: RouteHandler<typeof deleteV7CertsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV7CertsIdRouteHandler: RouteHandler<typeof getV7CertsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
