import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getObjectsObjectIdAccessAccessIdRoute,
  getObjectsObjectIdRoute,
  optionsObjectsObjectIdRoute,
  optionsObjectsRoute,
  postObjectsAccessRoute,
  postObjectsObjectIdAccessAccessIdRoute,
  postObjectsObjectIdRoute,
  postObjectsRoute,
} from '../routes'

export const optionsObjectsObjectIdRouteHandler: RouteHandler<
  typeof optionsObjectsObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getObjectsObjectIdRouteHandler: RouteHandler<typeof getObjectsObjectIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postObjectsObjectIdRouteHandler: RouteHandler<
  typeof postObjectsObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsObjectsRouteHandler: RouteHandler<typeof optionsObjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postObjectsRouteHandler: RouteHandler<typeof postObjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getObjectsObjectIdAccessAccessIdRouteHandler: RouteHandler<
  typeof getObjectsObjectIdAccessAccessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postObjectsObjectIdAccessAccessIdRouteHandler: RouteHandler<
  typeof postObjectsObjectIdAccessAccessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postObjectsAccessRouteHandler: RouteHandler<typeof postObjectsAccessRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
