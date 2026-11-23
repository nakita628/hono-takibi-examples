import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDataAttributesRoute,
  postDataAttributesRoute,
  putDataAttributesDataAttributeIdRoute,
} from '../routes'

export const getDataAttributesRouteHandler: RouteHandler<typeof getDataAttributesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDataAttributesRouteHandler: RouteHandler<typeof postDataAttributesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDataAttributesDataAttributeIdRouteHandler: RouteHandler<
  typeof putDataAttributesDataAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
