import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuittungZugferdRoute,
  postQuittungCommitRoute,
  postQuittungCreateRoute,
  postQuittungPrepareRoute,
  postQuittungTsedataRoute,
  postQuittungTseRoute,
  postQuittungTsesignatureRoute,
} from '../routes'

export const postQuittungCommitRouteHandler: RouteHandler<typeof postQuittungCommitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQuittungCreateRouteHandler: RouteHandler<typeof postQuittungCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQuittungPrepareRouteHandler: RouteHandler<
  typeof postQuittungPrepareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuittungTseRouteHandler: RouteHandler<typeof postQuittungTseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuittungTsedataRouteHandler: RouteHandler<
  typeof postQuittungTsedataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuittungTsesignatureRouteHandler: RouteHandler<
  typeof postQuittungTsesignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuittungZugferdRouteHandler: RouteHandler<typeof getQuittungZugferdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
