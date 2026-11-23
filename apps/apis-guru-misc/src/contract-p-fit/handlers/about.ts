import type { RouteHandler } from '@hono/zod-openapi'
import type { getAboutReleaseNotesRoute, getAboutVersionRoute } from '../routes'

export const getAboutReleaseNotesRouteHandler: RouteHandler<
  typeof getAboutReleaseNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAboutVersionRouteHandler: RouteHandler<typeof getAboutVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}
