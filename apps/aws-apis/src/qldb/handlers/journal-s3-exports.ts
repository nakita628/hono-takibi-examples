import type { RouteHandler } from '@hono/zod-openapi'
import type { getJournalS3ExportsRoute } from '../routes'

export const getJournalS3ExportsRouteHandler: RouteHandler<
  typeof getJournalS3ExportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
