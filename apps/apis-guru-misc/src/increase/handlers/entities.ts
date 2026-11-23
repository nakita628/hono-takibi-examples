import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEntitiesEntityIdRoute,
  getEntitiesRoute,
  postEntitiesEntityIdSupplementalDocumentsRoute,
  postEntitiesRoute,
} from '../routes'

export const getEntitiesRouteHandler: RouteHandler<typeof getEntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEntitiesRouteHandler: RouteHandler<typeof postEntitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntitiesEntityIdRouteHandler: RouteHandler<
  typeof getEntitiesEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEntitiesEntityIdSupplementalDocumentsRouteHandler: RouteHandler<
  typeof postEntitiesEntityIdSupplementalDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
