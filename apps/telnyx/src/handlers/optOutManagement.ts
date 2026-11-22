import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
  getMessagingOptoutsRoute,
  getMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
  getMessagingProfilesProfileIdAutorespConfigsRoute,
  postMessagingProfilesProfileIdAutorespConfigsRoute,
  putMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const optOutManagementHandler = app
  .openapi(getMessagingOptoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesProfileIdAutorespConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProfilesProfileIdAutorespConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMessagingProfilesProfileIdAutorespConfigsAutorespCfgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
