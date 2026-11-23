import type { RouteHandler } from '@hono/zod-openapi'
import type { getJournalInstructionsRoute, postJournalInstructionsRoute } from '../routes'

export const getJournalInstructionsRouteHandler: RouteHandler<
  typeof getJournalInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postJournalInstructionsRouteHandler: RouteHandler<
  typeof postJournalInstructionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
