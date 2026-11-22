import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdErrorTrackingClientKeysKeyIdRoute,
  getApiV4ProjectsIdErrorTrackingClientKeysRoute,
  getApiV4ProjectsIdErrorTrackingSettingsRoute,
  patchApiV4ProjectsIdErrorTrackingSettingsRoute,
  postApiV4ProjectsIdErrorTrackingClientKeysRoute,
  putApiV4ProjectsIdErrorTrackingSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const errorTrackingHandler = app
  .openapi(getApiV4ProjectsIdErrorTrackingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdErrorTrackingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdErrorTrackingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdErrorTrackingClientKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdErrorTrackingClientKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdErrorTrackingClientKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
