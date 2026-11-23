import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteHighlightsHighlightIdRoute,
  getHighlightsHighlightIdRoute,
  getHighlightsRoute,
  patchHighlightsHighlightIdRoute,
  postHighlightsRoute,
} from '../routes'

export const getHighlightsRouteHandler: RouteHandler<typeof getHighlightsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHighlightsRouteHandler: RouteHandler<typeof postHighlightsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHighlightsHighlightIdRouteHandler: RouteHandler<
  typeof getHighlightsHighlightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteHighlightsHighlightIdRouteHandler: RouteHandler<
  typeof deleteHighlightsHighlightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchHighlightsHighlightIdRouteHandler: RouteHandler<
  typeof patchHighlightsHighlightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
