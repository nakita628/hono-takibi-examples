import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetresourcepoliciesRoute } from '../routes'

export const postGetresourcepoliciesRouteHandler: RouteHandler<
  typeof postGetresourcepoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
