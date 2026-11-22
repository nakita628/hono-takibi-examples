import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsPresencesPresenceIdRoute,
  getCommunicationsPresencesCountRoute,
  getCommunicationsPresencesPresenceIdRoute,
  getCommunicationsPresencesRoute,
  patchCommunicationsPresencesPresenceIdRoute,
  postCommunicationsPresencesPresenceIdClearAutomaticLocationRoute,
  postCommunicationsPresencesPresenceIdClearLocationRoute,
  postCommunicationsPresencesPresenceIdClearPresenceRoute,
  postCommunicationsPresencesPresenceIdClearUserPreferredPresenceRoute,
  postCommunicationsPresencesPresenceIdSetAutomaticLocationRoute,
  postCommunicationsPresencesPresenceIdSetManualLocationRoute,
  postCommunicationsPresencesPresenceIdSetPresenceRoute,
  postCommunicationsPresencesPresenceIdSetStatusMessageRoute,
  postCommunicationsPresencesPresenceIdSetUserPreferredPresenceRoute,
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
  .openapi(getCommunicationsPresencesPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsPresencesPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsPresencesPresenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdClearAutomaticLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdClearLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdClearPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdClearUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdSetAutomaticLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdSetManualLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdSetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdSetStatusMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsPresencesPresenceIdSetUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsPresencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
