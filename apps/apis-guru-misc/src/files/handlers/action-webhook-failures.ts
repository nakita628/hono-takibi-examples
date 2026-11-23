import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionWebhookFailuresIdRetryRoute } from '../routes'

export const postActionWebhookFailuresIdRetryRouteHandler: RouteHandler<
  typeof postActionWebhookFailuresIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
