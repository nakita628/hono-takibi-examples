import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCallsBigbluebuttonCreateRoute,
  postCallsConstructorgroupsCreateRoute,
  postCallsGoogleMeetCreateRoute,
  postCallsNextcloudTalkCreateRoute,
  postCallsWebexCreateRoute,
} from '../routes'

export const getCallsBigbluebuttonCreateRouteHandler: RouteHandler<
  typeof getCallsBigbluebuttonCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsNextcloudTalkCreateRouteHandler: RouteHandler<
  typeof postCallsNextcloudTalkCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsWebexCreateRouteHandler: RouteHandler<
  typeof postCallsWebexCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsGoogleMeetCreateRouteHandler: RouteHandler<
  typeof postCallsGoogleMeetCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsConstructorgroupsCreateRouteHandler: RouteHandler<
  typeof postCallsConstructorgroupsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
