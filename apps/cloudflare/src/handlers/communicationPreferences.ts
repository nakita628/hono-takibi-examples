import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserCommunicationPreferencesRoute,
  putUserCommunicationPreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationPreferencesHandler = app
  .openapi(getUserCommunicationPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserCommunicationPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
