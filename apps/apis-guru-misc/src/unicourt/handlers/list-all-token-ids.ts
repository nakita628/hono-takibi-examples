import type { RouteHandler } from '@hono/zod-openapi'
import type { putListAllTokenIdsRoute } from '../routes'

export const putListAllTokenIdsRouteHandler: RouteHandler<typeof putListAllTokenIdsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
