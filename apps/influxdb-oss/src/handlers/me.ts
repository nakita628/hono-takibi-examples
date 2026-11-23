import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeRoute, putMePasswordRoute } from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMePasswordRouteHandler: RouteHandler<typeof putMePasswordRoute> = async (c) => {
  throw new Error('Not implemented')
}
