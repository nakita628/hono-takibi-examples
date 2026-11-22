import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicesHaproxyConfigurationRawRoute,
  getServicesHaproxyConfigurationVersionRoute,
  postServicesHaproxyConfigurationRawRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getServicesHaproxyConfigurationRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
