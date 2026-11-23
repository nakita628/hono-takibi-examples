import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFormFieldSetsIdRoute,
  getFormFieldSetsIdRoute,
  getFormFieldSetsRoute,
  patchFormFieldSetsIdRoute,
  postFormFieldSetsRoute,
} from '../routes'

export const getFormFieldSetsRouteHandler: RouteHandler<typeof getFormFieldSetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postFormFieldSetsRouteHandler: RouteHandler<typeof postFormFieldSetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFormFieldSetsIdRouteHandler: RouteHandler<
  typeof deleteFormFieldSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormFieldSetsIdRouteHandler: RouteHandler<typeof getFormFieldSetsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchFormFieldSetsIdRouteHandler: RouteHandler<
  typeof patchFormFieldSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
