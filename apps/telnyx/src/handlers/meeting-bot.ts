import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeetingBotCalendarOauthCallbackRoute } from '../routes'

export const getMeetingBotCalendarOauthCallbackRouteHandler: RouteHandler<
  typeof getMeetingBotCalendarOauthCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
