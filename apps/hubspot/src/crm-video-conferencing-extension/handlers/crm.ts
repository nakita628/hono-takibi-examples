import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
  getCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
  putCrmExtensionsVideoconferencing202609SettingsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmExtensionsVideoconferencing202609SettingsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmExtensionsVideoconferencing202609SettingsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmExtensionsVideoconferencing202609SettingsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
