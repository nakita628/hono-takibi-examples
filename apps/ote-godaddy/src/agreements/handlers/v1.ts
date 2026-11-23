import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1AgreementsRoute } from '../routes'

export const getV1AgreementsRouteHandler: RouteHandler<typeof getV1AgreementsRoute> = async (c) => {
  throw new Error('Not implemented')
}
