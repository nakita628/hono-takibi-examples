import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWebSearchResearchTaskIdRoute,
  postWebSearchContentsRoute,
  postWebSearchResearchRoute,
  postWebSearchRoute,
} from '../routes'

export const postWebSearchRouteHandler: RouteHandler<typeof postWebSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebSearchContentsRouteHandler: RouteHandler<
  typeof postWebSearchContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebSearchResearchRouteHandler: RouteHandler<
  typeof postWebSearchResearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebSearchResearchTaskIdRouteHandler: RouteHandler<
  typeof getWebSearchResearchTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
