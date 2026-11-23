import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute,
  getUserMeNotificationSettingsOrgOrgIdRoute,
  getUserMeRoute,
  getUserUserIdRoute,
  putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute,
  putUserMeNotificationSettingsOrgOrgIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMeNotificationSettingsOrgOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserMeNotificationSettingsOrgOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserMeNotificationSettingsOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
