import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBuiltinsIntentsIndexRoute,
  getBuiltinsIntentsSignatureRoute,
  getBuiltinsSlottypesIndexRoute,
} from '../routes'

export const getBuiltinsIntentsSignatureRouteHandler: RouteHandler<
  typeof getBuiltinsIntentsSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBuiltinsIntentsIndexRouteHandler: RouteHandler<
  typeof getBuiltinsIntentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBuiltinsSlottypesIndexRouteHandler: RouteHandler<
  typeof getBuiltinsSlottypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
