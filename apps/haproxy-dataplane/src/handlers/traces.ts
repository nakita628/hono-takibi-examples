import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationTracesEntriesRoute,
  deleteServicesHaproxyConfigurationTracesRoute,
  getServicesHaproxyConfigurationTracesRoute,
  postServicesHaproxyConfigurationTracesEntriesRoute,
  postServicesHaproxyConfigurationTracesRoute,
  putServicesHaproxyConfigurationTracesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tracesHandler = app
  .openapi(deleteServicesHaproxyConfigurationTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationTracesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationTracesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
