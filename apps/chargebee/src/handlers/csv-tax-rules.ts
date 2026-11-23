import type { RouteHandler } from '@hono/zod-openapi'
import type { postCsvTaxRulesRoute } from '../routes'

export const postCsvTaxRulesRouteHandler: RouteHandler<typeof postCsvTaxRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}
