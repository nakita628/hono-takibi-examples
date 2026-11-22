import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdApikeysIdRoute,
  getAppsAppIdApikeysRoute,
  getAppsAppIdApipartnersRoute,
  getAppsAppIdRoute,
  getAppsAppIdSettingsRoute,
  getAppsRoute,
  postAppsAppIdApikeysRoute,
  postAppsAppIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdApikeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdApipartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
