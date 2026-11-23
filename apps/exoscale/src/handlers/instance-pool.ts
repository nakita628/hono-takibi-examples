import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInstancePoolIdFieldRoute,
  deleteInstancePoolIdRoute,
  getInstancePoolIdRoute,
  getInstancePoolRoute,
  postInstancePoolRoute,
  putInstancePoolIdEvictRoute,
  putInstancePoolIdRoute,
  putInstancePoolIdScaleRoute,
} from '../routes'

export const putInstancePoolIdScaleRouteHandler: RouteHandler<
  typeof putInstancePoolIdScaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstancePoolRouteHandler: RouteHandler<typeof getInstancePoolRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInstancePoolRouteHandler: RouteHandler<typeof postInstancePoolRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteInstancePoolIdRouteHandler: RouteHandler<
  typeof deleteInstancePoolIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInstancePoolIdRouteHandler: RouteHandler<typeof getInstancePoolIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putInstancePoolIdRouteHandler: RouteHandler<typeof putInstancePoolIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteInstancePoolIdFieldRouteHandler: RouteHandler<
  typeof deleteInstancePoolIdFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInstancePoolIdEvictRouteHandler: RouteHandler<
  typeof putInstancePoolIdEvictRoute
> = async (c) => {
  throw new Error('Not implemented')
}
