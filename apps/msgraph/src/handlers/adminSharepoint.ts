import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminSharepointRoute,
  deleteAdminSharepointSettingsRoute,
  getAdminSharepointRoute,
  getAdminSharepointSettingsRoute,
  patchAdminSharepointRoute,
  patchAdminSharepointSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminSharepointHandler = app
  .openapi(getAdminSharepointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminSharepointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSharepointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSharepointSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminSharepointSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSharepointSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
