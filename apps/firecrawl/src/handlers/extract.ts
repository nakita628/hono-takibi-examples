import type { RouteHandler } from '@hono/zod-openapi'
import type { getExtractIdRoute, postExtractRoute } from '../routes'

export const postExtractRouteHandler: RouteHandler<typeof postExtractRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getExtractIdRouteHandler: RouteHandler<typeof getExtractIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
