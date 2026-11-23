import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetcurrencyrateRoute } from '../routes'

export const getGetcurrencyrateRouteHandler: RouteHandler<typeof getGetcurrencyrateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
