import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVersionVersionIdRoute,
  getVersionRoute,
  getVersionVersionIdRoute,
  postVersionRoute,
  putVersionVersionIdRoute,
} from '../routes'

export const getVersionRouteHandler: RouteHandler<typeof getVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVersionRouteHandler: RouteHandler<typeof postVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVersionVersionIdRouteHandler: RouteHandler<
  typeof getVersionVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVersionVersionIdRouteHandler: RouteHandler<
  typeof putVersionVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVersionVersionIdRouteHandler: RouteHandler<
  typeof deleteVersionVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
