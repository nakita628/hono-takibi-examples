import type { RouteHandler } from '@hono/zod-openapi'
import type { postInstitutionHrfeedUploadRoute } from '../routes'

export const postInstitutionHrfeedUploadRouteHandler: RouteHandler<
  typeof postInstitutionHrfeedUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
