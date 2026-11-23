import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJournalsJournalIDRoute,
  getJournalsJournalNumberRoute,
  getJournalsRoute,
} from '../routes'

export const getJournalsRouteHandler: RouteHandler<typeof getJournalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJournalsJournalIDRouteHandler: RouteHandler<
  typeof getJournalsJournalIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJournalsJournalNumberRouteHandler: RouteHandler<
  typeof getJournalsJournalNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
