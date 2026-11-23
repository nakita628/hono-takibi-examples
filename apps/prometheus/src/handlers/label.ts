import type { RouteHandler } from '@hono/zod-openapi'
import type { getLabelNameValuesRoute } from '../routes'

export const getLabelNameValuesRouteHandler: RouteHandler<typeof getLabelNameValuesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
