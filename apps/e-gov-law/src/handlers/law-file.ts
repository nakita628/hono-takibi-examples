import type { RouteHandler } from '@hono/zod-openapi'
import type { getLawFileFileTypeLawIdOrNumOrRevisionIdRoute } from '../routes'

export const getLawFileFileTypeLawIdOrNumOrRevisionIdRouteHandler: RouteHandler<
  typeof getLawFileFileTypeLawIdOrNumOrRevisionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
