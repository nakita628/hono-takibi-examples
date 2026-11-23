import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1PackageNameDecodeIntegrityTokenRoute } from '../routes'

export const postV1PackageNameDecodeIntegrityTokenRouteHandler: RouteHandler<
  typeof postV1PackageNameDecodeIntegrityTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
