import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStreamsStreamIdRoute,
  getStreamsRoute,
  getStreamsStreamIdRoute,
  postStreamsStreamIdRoute,
  putStreamsStreamIdRoute,
} from '../routes'

export const postStreamsStreamIdRouteHandler: RouteHandler<
  typeof postStreamsStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStreamsStreamIdRouteHandler: RouteHandler<
  typeof deleteStreamsStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStreamsStreamIdRouteHandler: RouteHandler<typeof getStreamsStreamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putStreamsStreamIdRouteHandler: RouteHandler<typeof putStreamsStreamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStreamsRouteHandler: RouteHandler<typeof getStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
