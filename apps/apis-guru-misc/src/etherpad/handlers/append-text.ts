import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppendTextRoute, postAppendTextRoute } from '../routes'

export const getAppendTextRouteHandler: RouteHandler<typeof getAppendTextRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppendTextRouteHandler: RouteHandler<typeof postAppendTextRoute> = async (c) => {
  throw new Error('Not implemented')
}
