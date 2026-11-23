import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postLookupCnamRoute,
  postLookupFormatRoute,
  postLookupHlrRoute,
  postLookupMnpRoute,
  postLookupRoute,
} from '../routes'

export const postLookupRouteHandler: RouteHandler<typeof postLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLookupCnamRouteHandler: RouteHandler<typeof postLookupCnamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLookupFormatRouteHandler: RouteHandler<typeof postLookupFormatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLookupHlrRouteHandler: RouteHandler<typeof postLookupHlrRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLookupMnpRouteHandler: RouteHandler<typeof postLookupMnpRoute> = async (c) => {
  throw new Error('Not implemented')
}
