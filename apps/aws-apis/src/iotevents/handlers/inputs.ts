import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInputsInputNameRoute,
  getInputsInputNameRoute,
  getInputsRoute,
  postInputsRoute,
  putInputsInputNameRoute,
} from '../routes'

export const postInputsRouteHandler: RouteHandler<typeof postInputsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInputsRouteHandler: RouteHandler<typeof getInputsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInputsInputNameRouteHandler: RouteHandler<
  typeof deleteInputsInputNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInputsInputNameRouteHandler: RouteHandler<typeof getInputsInputNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putInputsInputNameRouteHandler: RouteHandler<typeof putInputsInputNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
