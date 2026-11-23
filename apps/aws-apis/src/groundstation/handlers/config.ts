import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConfigConfigTypeConfigIdRoute,
  getConfigConfigTypeConfigIdRoute,
  getConfigRoute,
  postConfigRoute,
  putConfigConfigTypeConfigIdRoute,
} from '../routes'

export const postConfigRouteHandler: RouteHandler<typeof postConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConfigConfigTypeConfigIdRouteHandler: RouteHandler<
  typeof deleteConfigConfigTypeConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigConfigTypeConfigIdRouteHandler: RouteHandler<
  typeof getConfigConfigTypeConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConfigConfigTypeConfigIdRouteHandler: RouteHandler<
  typeof putConfigConfigTypeConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
