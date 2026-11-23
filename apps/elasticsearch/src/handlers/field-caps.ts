import type { RouteHandler } from '@hono/zod-openapi'
import type { getFieldCapsRoute, postFieldCapsRoute } from '../routes'

export const getFieldCapsRouteHandler: RouteHandler<typeof getFieldCapsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFieldCapsRouteHandler: RouteHandler<typeof postFieldCapsRoute> = async (c) => {
  throw new Error('Not implemented')
}
