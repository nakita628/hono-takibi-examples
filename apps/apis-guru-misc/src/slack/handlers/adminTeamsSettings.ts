import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminTeamsSettingsInfoRoute,
  postAdminTeamsSettingsSetDefaultChannelsRoute,
  postAdminTeamsSettingsSetDescriptionRoute,
  postAdminTeamsSettingsSetDiscoverabilityRoute,
  postAdminTeamsSettingsSetIconRoute,
  postAdminTeamsSettingsSetNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminTeamsSettingsHandler = app
  .openapi(getAdminTeamsSettingsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsSettingsSetDefaultChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsSettingsSetDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsSettingsSetDiscoverabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsSettingsSetIconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTeamsSettingsSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
