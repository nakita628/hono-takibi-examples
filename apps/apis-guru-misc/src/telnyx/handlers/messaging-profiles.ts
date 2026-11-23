import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagingProfilesIdRoute,
  getMessagingProfilesIdMetricsRoute,
  getMessagingProfilesIdPhoneNumbersRoute,
  getMessagingProfilesIdRoute,
  getMessagingProfilesIdShortCodesRoute,
  getMessagingProfilesRoute,
  patchMessagingProfilesIdRoute,
  postMessagingProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingProfilesHandler = app
  .openapi(getMessagingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdShortCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
