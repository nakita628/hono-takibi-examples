import type { RouteHandler } from '@hono/zod-openapi'
import type { getInputsRoute } from '../routes'

export const getInputsRouteHandler: RouteHandler<typeof getInputsRoute> = async (c) => {
  throw new Error('Not implemented')
}
