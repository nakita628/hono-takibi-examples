import type { RouteHandler } from '@hono/zod-openapi'
import type { getLawRevisionsLawIdOrNumRoute } from '../routes'

export const getLawRevisionsLawIdOrNumRouteHandler: RouteHandler<
  typeof getLawRevisionsLawIdOrNumRoute
> = async (c) => {
  throw new Error('Not implemented')
}
