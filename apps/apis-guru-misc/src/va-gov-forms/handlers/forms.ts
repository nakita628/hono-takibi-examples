import type { RouteHandler } from '@hono/zod-openapi'
import type { getFormsFormNameRoute, getFormsRoute } from '../routes'

export const getFormsRouteHandler: RouteHandler<typeof getFormsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormsFormNameRouteHandler: RouteHandler<typeof getFormsFormNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
