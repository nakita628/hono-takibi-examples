import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPastMeetingsMeetingIdFilesRoute,
  getPastMeetingsMeetingIdInstancesRoute,
  getPastMeetingsMeetingIdPollsRoute,
  getPastMeetingsMeetingUUIDParticipantsRoute,
  getPastMeetingsMeetingUUIDRoute,
} from '../routes'

export const getPastMeetingsMeetingIdFilesRouteHandler: RouteHandler<
  typeof getPastMeetingsMeetingIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPastMeetingsMeetingIdInstancesRouteHandler: RouteHandler<
  typeof getPastMeetingsMeetingIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPastMeetingsMeetingIdPollsRouteHandler: RouteHandler<
  typeof getPastMeetingsMeetingIdPollsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPastMeetingsMeetingUUIDRouteHandler: RouteHandler<
  typeof getPastMeetingsMeetingUUIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPastMeetingsMeetingUUIDParticipantsRouteHandler: RouteHandler<
  typeof getPastMeetingsMeetingUUIDParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
