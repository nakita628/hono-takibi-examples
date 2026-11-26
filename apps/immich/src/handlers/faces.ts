import type { RouteHandler } from '@hono/zod-openapi'
import type { getFacesRoute, postFacesRoute, deleteFacesIdRoute, putFacesIdRoute } from '../routes'

export const getFacesRouteHandler: RouteHandler<typeof getFacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFacesRouteHandler: RouteHandler<typeof postFacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFacesIdRouteHandler: RouteHandler<typeof deleteFacesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFacesIdRouteHandler: RouteHandler<typeof putFacesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
