import type { RouteHandler } from '@hono/zod-openapi'
import type { getLawDataLawIdOrNumOrRevisionIdRoute } from '../routes'

export const getLawDataLawIdOrNumOrRevisionIdRouteHandler: RouteHandler<
  typeof getLawDataLawIdOrNumOrRevisionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
