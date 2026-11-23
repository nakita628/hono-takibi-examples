import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetcountrystandardRoute } from '../routes'

export const getGetcountrystandardRouteHandler: RouteHandler<
  typeof getGetcountrystandardRoute
> = async (c) => {
  throw new Error('Not implemented')
}
