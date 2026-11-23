import type { RouteHandler } from '@hono/zod-openapi'
import type { postCaptureRoute } from '../routes'

export const postCaptureRouteHandler: RouteHandler<typeof postCaptureRoute> = async (c) => {
  throw new Error('Not implemented')
}
