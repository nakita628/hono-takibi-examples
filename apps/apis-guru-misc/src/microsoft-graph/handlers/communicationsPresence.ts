import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsPresencesPresenceIdRoute,
  getCommunicationsPresencesPresenceIdRoute,
  getCommunicationsPresencesRoute,
  patchCommunicationsPresencesPresenceIdRoute,
  postCommunicationsPresencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsPresenceHandler = app
  .openapi(getCommunicationsPresencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsPresencesPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsPresencesPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsPresencesPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
