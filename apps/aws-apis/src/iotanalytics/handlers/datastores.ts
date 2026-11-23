import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatastoresDatastoreNameRoute,
  getDatastoresDatastoreNameRoute,
  getDatastoresRoute,
  postDatastoresRoute,
  putDatastoresDatastoreNameRoute,
} from '../routes'

export const postDatastoresRouteHandler: RouteHandler<typeof postDatastoresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatastoresRouteHandler: RouteHandler<typeof getDatastoresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatastoresDatastoreNameRouteHandler: RouteHandler<
  typeof deleteDatastoresDatastoreNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatastoresDatastoreNameRouteHandler: RouteHandler<
  typeof getDatastoresDatastoreNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatastoresDatastoreNameRouteHandler: RouteHandler<
  typeof putDatastoresDatastoreNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
