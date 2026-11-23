import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetcitystandardRoute } from '../routes'

export const getGetcitystandardRouteHandler: RouteHandler<typeof getGetcitystandardRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
