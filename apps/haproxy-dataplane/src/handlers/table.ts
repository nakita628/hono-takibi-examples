import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationPeersParentNameTablesNameRoute,
  getServicesHaproxyConfigurationPeersParentNameTablesNameRoute,
  getServicesHaproxyConfigurationPeersParentNameTablesRoute,
  postServicesHaproxyConfigurationPeersParentNameTablesRoute,
  putServicesHaproxyConfigurationPeersParentNameTablesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tableHandler = app
  .openapi(getServicesHaproxyConfigurationPeersParentNameTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationPeersParentNameTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationPeersParentNameTablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeersParentNameTablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationPeersParentNameTablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
