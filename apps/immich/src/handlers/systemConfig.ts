import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemConfigDefaultsRoute,
  getSystemConfigRoute,
  getSystemConfigStorageTemplateOptionsRoute,
  putSystemConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemConfigHandler = app
  .openapi(getSystemConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSystemConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigStorageTemplateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
