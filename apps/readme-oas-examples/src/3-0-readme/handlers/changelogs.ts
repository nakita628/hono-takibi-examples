import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChangelogsSlugRoute,
  getChangelogsRoute,
  getChangelogsSlugRoute,
  postChangelogsRoute,
  putChangelogsSlugRoute,
} from '../routes'

export const getChangelogsRouteHandler: RouteHandler<typeof getChangelogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChangelogsRouteHandler: RouteHandler<typeof postChangelogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChangelogsSlugRouteHandler: RouteHandler<typeof getChangelogsSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putChangelogsSlugRouteHandler: RouteHandler<typeof putChangelogsSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteChangelogsSlugRouteHandler: RouteHandler<
  typeof deleteChangelogsSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}
