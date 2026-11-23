import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRemindersReminderIdRoute,
  getRemindersRoute,
  postRemindersRoute,
} from '../routes'

export const getRemindersRouteHandler: RouteHandler<typeof getRemindersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRemindersRouteHandler: RouteHandler<typeof postRemindersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRemindersReminderIdRouteHandler: RouteHandler<
  typeof deleteRemindersReminderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
