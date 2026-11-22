import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEeLicenseRoute,
  getOpenapiYamlRoute,
  getUptodateRoute,
  getVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUptodateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiYamlRoute, (c) => {
    throw new Error('Not implemented')
  })
