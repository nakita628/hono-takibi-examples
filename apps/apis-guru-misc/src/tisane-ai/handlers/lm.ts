import type { RouteHandler } from '@hono/zod-openapi'
import type { getLmFamilyRoute } from '../routes'

export const getLmFamilyRouteHandler: RouteHandler<typeof getLmFamilyRoute> = async (c) => {
  throw new Error('Not implemented')
}
