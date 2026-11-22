import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserFiltersettingsEmployerIdRoute,
  putUserFiltersettingsEmployerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userFilterSettingsHandler = app
  .openapi(getUserFiltersettingsEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFiltersettingsEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
