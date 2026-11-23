import type { RouteHandler } from '@hono/zod-openapi'
import type { getXCodeSamplesRoute, postXCodeSamplesRoute } from '../routes'

export const postXCodeSamplesRouteHandler: RouteHandler<typeof postXCodeSamplesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getXCodeSamplesRouteHandler: RouteHandler<typeof getXCodeSamplesRoute> = async (c) => {
  throw new Error('Not implemented')
}
