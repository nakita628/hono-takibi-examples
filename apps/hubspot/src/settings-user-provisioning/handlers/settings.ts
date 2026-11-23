import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsUsers202609UserIdRoute,
  getSettingsUsers202609RolesRoute,
  getSettingsUsers202609Route,
  getSettingsUsers202609SeatsRoute,
  getSettingsUsers202609TeamsRoute,
  getSettingsUsers202609UserIdRoute,
  postSettingsUsers202609Route,
  putSettingsUsers202609UserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsUsers202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsUsers202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsUsers202609RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsUsers202609SeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsUsers202609TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsUsers202609UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsUsers202609UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsUsers202609UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
