import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetImagePolicyImageArnRoute } from '../routes'

export const getGetImagePolicyImageArnRouteHandler: RouteHandler<
  typeof getGetImagePolicyImageArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
