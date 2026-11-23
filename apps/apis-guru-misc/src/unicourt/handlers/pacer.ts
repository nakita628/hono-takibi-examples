import type { RouteHandler } from '@hono/zod-openapi'
import type { getPacerImportCaseByCourtUsingCaseNumberRoute } from '../routes'

export const getPacerImportCaseByCourtUsingCaseNumberRouteHandler: RouteHandler<
  typeof getPacerImportCaseByCourtUsingCaseNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
