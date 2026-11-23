import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGeofencesIdRoute,
  getGeofencesRoute,
  postGeofencesRoute,
  putGeofencesIdRoute,
} from '../routes'

export const getGeofencesRouteHandler: RouteHandler<typeof getGeofencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGeofencesRouteHandler: RouteHandler<typeof postGeofencesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGeofencesIdRouteHandler: RouteHandler<typeof deleteGeofencesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putGeofencesIdRouteHandler: RouteHandler<typeof putGeofencesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
