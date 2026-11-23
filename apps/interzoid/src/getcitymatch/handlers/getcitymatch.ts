import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetcitymatchRoute } from '../routes'

export const getGetcitymatchRouteHandler: RouteHandler<typeof getGetcitymatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
