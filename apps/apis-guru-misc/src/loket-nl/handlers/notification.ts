import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdNotificationsRoute,
  patchProvidersEmployersNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app
  .openapi(patchProvidersEmployersNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
