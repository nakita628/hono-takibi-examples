import type { RouteHandler } from '@hono/zod-openapi'
import type { postMoraLengthRoute } from '../routes'

export const postMoraLengthRouteHandler: RouteHandler<typeof postMoraLengthRoute> = async (c) => {
  throw new Error('Not implemented')
}
