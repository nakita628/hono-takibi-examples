import type { RouteHandler } from '@hono/zod-openapi'
import type { putPutImagePolicyRoute } from '../routes'

export const putPutImagePolicyRouteHandler: RouteHandler<typeof putPutImagePolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
