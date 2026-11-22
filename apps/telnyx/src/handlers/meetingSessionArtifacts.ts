import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeetingSessionsIdArtifactsArtifactIdRoute,
  getMeetingSessionsIdArtifactsRoute,
  postMeetingSessionsIdArtifactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingSessionArtifactsHandler = app
  .openapi(getMeetingSessionsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingSessionsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingSessionsIdArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
