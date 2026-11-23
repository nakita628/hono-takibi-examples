import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFieldsCollectionIdRoute,
  getFieldsCollectionIdRoute,
  getFieldsCollectionRoute,
  getFieldsRoute,
  patchFieldsCollectionIdRoute,
  postFieldsCollectionRoute,
} from '../routes'

export const getFieldsRouteHandler: RouteHandler<typeof getFieldsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFieldsCollectionRouteHandler: RouteHandler<
  typeof getFieldsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFieldsCollectionRouteHandler: RouteHandler<
  typeof postFieldsCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFieldsCollectionIdRouteHandler: RouteHandler<
  typeof getFieldsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFieldsCollectionIdRouteHandler: RouteHandler<
  typeof patchFieldsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFieldsCollectionIdRouteHandler: RouteHandler<
  typeof deleteFieldsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
