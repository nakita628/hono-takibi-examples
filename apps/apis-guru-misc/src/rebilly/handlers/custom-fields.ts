import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCustomFieldsResourceNameRoute,
  getCustomFieldsResourceRoute,
  putCustomFieldsResourceNameRoute,
} from '../routes'

export const getCustomFieldsResourceRouteHandler: RouteHandler<
  typeof getCustomFieldsResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomFieldsResourceNameRouteHandler: RouteHandler<
  typeof getCustomFieldsResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomFieldsResourceNameRouteHandler: RouteHandler<
  typeof putCustomFieldsResourceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
