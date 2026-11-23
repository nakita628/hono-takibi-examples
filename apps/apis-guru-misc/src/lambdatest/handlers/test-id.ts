import type { RouteHandler } from '@hono/zod-openapi'
import type { getTestIdRoute, getTestIdZipRoute } from '../routes'

export const getTestIdRouteHandler: RouteHandler<typeof getTestIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestIdZipRouteHandler: RouteHandler<typeof getTestIdZipRoute> = async (c) => {
  throw new Error('Not implemented')
}
