import type { RouteHandler } from '@hono/zod-openapi'
import type { optionsSignupRoute, postSignupRoute } from '../routes'

export const optionsSignupRouteHandler: RouteHandler<typeof optionsSignupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSignupRouteHandler: RouteHandler<typeof postSignupRoute> = async (c) => {
  throw new Error('Not implemented')
}
