import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationUserlistsNameRoute,
  getServicesHaproxyConfigurationUserlistsNameRoute,
  getServicesHaproxyConfigurationUserlistsRoute,
  postServicesHaproxyConfigurationUserlistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userlistHandler = app
  .openapi(getServicesHaproxyConfigurationUserlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationUserlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationUserlistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationUserlistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
