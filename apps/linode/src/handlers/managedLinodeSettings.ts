import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionManagedLinodeSettingsLinodeIdRoute,
  getApiVersionManagedLinodeSettingsRoute,
  putApiVersionManagedLinodeSettingsLinodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedLinodeSettingsHandler = app
  .openapi(getApiVersionManagedLinodeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedLinodeSettingsLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedLinodeSettingsLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
