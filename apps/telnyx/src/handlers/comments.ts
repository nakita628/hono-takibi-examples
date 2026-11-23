import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommentsIdRoute,
  getCommentsRoute,
  patchCommentsIdReadRoute,
  postCommentsRoute,
} from '../routes'

export const getCommentsRouteHandler: RouteHandler<typeof getCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommentsRouteHandler: RouteHandler<typeof postCommentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommentsIdRouteHandler: RouteHandler<typeof getCommentsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommentsIdReadRouteHandler: RouteHandler<
  typeof patchCommentsIdReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
