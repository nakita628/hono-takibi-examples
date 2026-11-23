import type { RouteHandler } from '@hono/zod-openapi'
import type { optionsEchoRoute } from '../routes'

export const optionsEchoRouteHandler: RouteHandler<typeof optionsEchoRoute> = async (c) => {
  throw new Error('Not implemented')
}
