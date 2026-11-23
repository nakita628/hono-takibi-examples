import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAchPrenotificationsAchPrenotificationIdRoute,
  getAchPrenotificationsRoute,
  postAchPrenotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const achPrenotificationsHandler = app
  .openapi(getAchPrenotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAchPrenotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAchPrenotificationsAchPrenotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
