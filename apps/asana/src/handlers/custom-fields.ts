import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postCustomFieldsRoute,
  getCustomFieldsCustomFieldGidRoute,
  putCustomFieldsCustomFieldGidRoute,
  deleteCustomFieldsCustomFieldGidRoute,
  postCustomFieldsCustomFieldGidEnumOptionsRoute,
  postCustomFieldsCustomFieldGidEnumOptionsInsertRoute,
} from '../routes'

export const postCustomFieldsRouteHandler: RouteHandler<typeof postCustomFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCustomFieldsCustomFieldGidRouteHandler: RouteHandler<
  typeof getCustomFieldsCustomFieldGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomFieldsCustomFieldGidRouteHandler: RouteHandler<
  typeof putCustomFieldsCustomFieldGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomFieldsCustomFieldGidRouteHandler: RouteHandler<
  typeof deleteCustomFieldsCustomFieldGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomFieldsCustomFieldGidEnumOptionsRouteHandler: RouteHandler<
  typeof postCustomFieldsCustomFieldGidEnumOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomFieldsCustomFieldGidEnumOptionsInsertRouteHandler: RouteHandler<
  typeof postCustomFieldsCustomFieldGidEnumOptionsInsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}
