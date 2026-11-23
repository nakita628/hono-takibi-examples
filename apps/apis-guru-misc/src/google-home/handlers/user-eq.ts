import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserEqSetEqualizerRoute } from '../routes'

export const postUserEqSetEqualizerRouteHandler: RouteHandler<
  typeof postUserEqSetEqualizerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
