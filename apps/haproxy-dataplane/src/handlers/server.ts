import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameServersNameRoute,
  deleteServicesHaproxyConfigurationPeersParentNameServersNameRoute,
  deleteServicesHaproxyConfigurationRingsParentNameServersNameRoute,
  deleteServicesHaproxyRuntimeBackendsParentNameServersNameRoute,
  getServicesHaproxyConfigurationBackendsParentNameServersNameRoute,
  getServicesHaproxyConfigurationBackendsParentNameServersRoute,
  getServicesHaproxyConfigurationPeersParentNameServersNameRoute,
  getServicesHaproxyConfigurationPeersParentNameServersRoute,
  getServicesHaproxyConfigurationRingsParentNameServersNameRoute,
  getServicesHaproxyConfigurationRingsParentNameServersRoute,
  getServicesHaproxyRuntimeBackendsParentNameServersNameRoute,
  getServicesHaproxyRuntimeBackendsParentNameServersRoute,
  postServicesHaproxyConfigurationBackendsParentNameServersRoute,
  postServicesHaproxyConfigurationPeersParentNameServersRoute,
  postServicesHaproxyConfigurationRingsParentNameServersRoute,
  postServicesHaproxyRuntimeBackendsParentNameServersRoute,
  putServicesHaproxyConfigurationBackendsParentNameServersNameRoute,
  putServicesHaproxyConfigurationPeersParentNameServersNameRoute,
  putServicesHaproxyConfigurationRingsParentNameServersNameRoute,
  putServicesHaproxyRuntimeBackendsParentNameServersNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeersParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationPeersParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationPeersParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeersParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationPeersParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationRingsParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationRingsParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationRingsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationRingsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationRingsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeBackendsParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeBackendsParentNameServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeBackendsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeBackendsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeBackendsParentNameServersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
