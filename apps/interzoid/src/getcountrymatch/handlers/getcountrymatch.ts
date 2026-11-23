import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetcountrymatchRoute } from '../routes'

export const getGetcountrymatchRouteHandler: RouteHandler<typeof getGetcountrymatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
