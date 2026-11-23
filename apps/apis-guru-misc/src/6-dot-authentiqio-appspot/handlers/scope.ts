import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScopeJobRoute,
  getScopeJobRoute,
  headScopeJobRoute,
  postScopeJobRoute,
  postScopeRoute,
  putScopeJobRoute,
} from '../routes'

export const postScopeRouteHandler: RouteHandler<typeof postScopeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScopeJobRouteHandler: RouteHandler<typeof deleteScopeJobRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getScopeJobRouteHandler: RouteHandler<typeof getScopeJobRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const headScopeJobRouteHandler: RouteHandler<typeof headScopeJobRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postScopeJobRouteHandler: RouteHandler<typeof postScopeJobRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putScopeJobRouteHandler: RouteHandler<typeof putScopeJobRoute> = async (c) => {
  throw new Error('Not implemented')
}
