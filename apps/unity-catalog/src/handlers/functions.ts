import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFunctionsNameRoute,
  getFunctionsNameRoute,
  getFunctionsRoute,
  patchFunctionsNameRoute,
  postFunctionsRoute,
} from '../routes'

export const postFunctionsRouteHandler: RouteHandler<typeof postFunctionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFunctionsRouteHandler: RouteHandler<typeof getFunctionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFunctionsNameRouteHandler: RouteHandler<typeof getFunctionsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchFunctionsNameRouteHandler: RouteHandler<typeof patchFunctionsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteFunctionsNameRouteHandler: RouteHandler<
  typeof deleteFunctionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
