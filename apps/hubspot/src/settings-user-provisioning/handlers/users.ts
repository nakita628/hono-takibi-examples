import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsUsers202609UserIdRoute,
  getSettingsUsers202609UserIdRoute,
  putSettingsUsers202609UserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getSettingsUsers202609UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsUsers202609UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsUsers202609UserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
