import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1EnvironmentsEnvironmentSlugDefaultsRoute,
  getV1EnvironmentsEnvironmentSlugRoute,
  getV1EnvironmentsRoute,
  putV1EnvironmentsEnvironmentSlugDefaultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getV1EnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentsEnvironmentSlugDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentsEnvironmentSlugDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
