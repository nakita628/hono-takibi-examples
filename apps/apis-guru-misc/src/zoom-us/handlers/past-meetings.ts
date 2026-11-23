import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPastMeetingsMeetingIdFilesRoute,
  getPastMeetingsMeetingIdInstancesRoute,
  getPastMeetingsMeetingIdPollsRoute,
  getPastMeetingsMeetingUUIDParticipantsRoute,
  getPastMeetingsMeetingUUIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pastMeetingsHandler = app
  .openapi(getPastMeetingsMeetingIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastMeetingsMeetingUUIDParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
