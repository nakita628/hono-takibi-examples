import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSwaggerIdRoute, postSwaggerRoute, putSwaggerIdRoute } from '../routes'

export const postSwaggerRouteHandler: RouteHandler<typeof postSwaggerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSwaggerIdRouteHandler: RouteHandler<typeof deleteSwaggerIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSwaggerIdRouteHandler: RouteHandler<typeof putSwaggerIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
