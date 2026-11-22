import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationAcmeNameRoute,
  getServicesHaproxyConfigurationAcmeNameRoute,
  getServicesHaproxyConfigurationAcmeRoute,
  postServicesHaproxyConfigurationAcmeRoute,
  putServicesHaproxyConfigurationAcmeNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const acmeHandler = app
  .openapi(getServicesHaproxyConfigurationAcmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationAcmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationAcmeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationAcmeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationAcmeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
