import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminConfigurationRoute,
  getAdminRoute,
  patchAdminConfigurationRoute,
  postAdminRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
