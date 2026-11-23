import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteThingsThingNameShadowRoute,
  getThingsThingNameShadowRoute,
  postThingsThingNameShadowRoute,
} from '../routes'

export const deleteThingsThingNameShadowRouteHandler: RouteHandler<
  typeof deleteThingsThingNameShadowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThingsThingNameShadowRouteHandler: RouteHandler<
  typeof getThingsThingNameShadowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postThingsThingNameShadowRouteHandler: RouteHandler<
  typeof postThingsThingNameShadowRoute
> = async (c) => {
  throw new Error('Not implemented')
}
