import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1p7beta1NameRoute, postV1p7beta1ParentExportAssetsRoute } from '../routes'

export const getV1p7beta1NameRouteHandler: RouteHandler<typeof getV1p7beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1p7beta1ParentExportAssetsRouteHandler: RouteHandler<
  typeof postV1p7beta1ParentExportAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
