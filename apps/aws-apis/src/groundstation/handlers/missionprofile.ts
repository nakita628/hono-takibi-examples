import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMissionprofileMissionProfileIdRoute,
  getMissionprofileMissionProfileIdRoute,
  getMissionprofileRoute,
  postMissionprofileRoute,
  putMissionprofileMissionProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const missionprofileHandler = app
  .openapi(postMissionprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMissionprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMissionprofileMissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMissionprofileMissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMissionprofileMissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
