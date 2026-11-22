import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMePresenceRoute,
  getMePresenceRoute,
  patchMePresenceRoute,
  postMePresenceClearAutomaticLocationRoute,
  postMePresenceClearLocationRoute,
  postMePresenceClearPresenceRoute,
  postMePresenceClearUserPreferredPresenceRoute,
  postMePresenceSetAutomaticLocationRoute,
  postMePresenceSetManualLocationRoute,
  postMePresenceSetPresenceRoute,
  postMePresenceSetStatusMessageRoute,
  postMePresenceSetUserPreferredPresenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mePresenceHandler = app
  .openapi(getMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceClearAutomaticLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceClearLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceClearPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceClearUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceSetAutomaticLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceSetManualLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceSetPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceSetStatusMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePresenceSetUserPreferredPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
