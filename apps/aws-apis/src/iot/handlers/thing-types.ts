import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteThingTypesThingTypeNameRoute,
  getThingTypesRoute,
  getThingTypesThingTypeNameRoute,
  postThingTypesThingTypeNameDeprecateRoute,
  postThingTypesThingTypeNameRoute,
} from '../routes'

export const postThingTypesThingTypeNameRouteHandler: RouteHandler<
  typeof postThingTypesThingTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteThingTypesThingTypeNameRouteHandler: RouteHandler<
  typeof deleteThingTypesThingTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThingTypesThingTypeNameRouteHandler: RouteHandler<
  typeof getThingTypesThingTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postThingTypesThingTypeNameDeprecateRouteHandler: RouteHandler<
  typeof postThingTypesThingTypeNameDeprecateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getThingTypesRouteHandler: RouteHandler<typeof getThingTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
