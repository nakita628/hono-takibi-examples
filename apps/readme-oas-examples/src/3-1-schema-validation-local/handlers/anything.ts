import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnythingBooleansRoute,
  getAnythingJsonschemaFormatsRoute,
  getAnythingNumbersRoute,
  getAnythingOasFormatsRoute,
  getAnythingStringsRoute,
} from '../routes'

export const getAnythingNumbersRouteHandler: RouteHandler<typeof getAnythingNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnythingStringsRouteHandler: RouteHandler<typeof getAnythingStringsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnythingJsonschemaFormatsRouteHandler: RouteHandler<
  typeof getAnythingJsonschemaFormatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingOasFormatsRouteHandler: RouteHandler<
  typeof getAnythingOasFormatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingBooleansRouteHandler: RouteHandler<
  typeof getAnythingBooleansRoute
> = async (c) => {
  throw new Error('Not implemented')
}
