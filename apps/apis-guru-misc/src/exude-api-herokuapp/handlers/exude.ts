import type { RouteHandler } from '@hono/zod-openapi'
import type { postExudeTypeDataRoute, postExudeTypeFileRoute } from '../routes'

export const postExudeTypeDataRouteHandler: RouteHandler<typeof postExudeTypeDataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postExudeTypeFileRouteHandler: RouteHandler<typeof postExudeTypeFileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
