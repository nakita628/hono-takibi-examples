import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicesHaproxyConfigurationGlobalRoute,
  putServicesHaproxyConfigurationGlobalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalHandler = app
  .openapi(getServicesHaproxyConfigurationGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
