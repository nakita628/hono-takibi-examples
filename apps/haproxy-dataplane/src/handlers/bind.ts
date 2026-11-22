import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationFrontendsParentNameBindsNameRoute,
  deleteServicesHaproxyConfigurationLogForwardsParentNameBindsNameRoute,
  deleteServicesHaproxyConfigurationPeersParentNameBindsNameRoute,
  getServicesHaproxyConfigurationFrontendsParentNameBindsNameRoute,
  getServicesHaproxyConfigurationFrontendsParentNameBindsRoute,
  getServicesHaproxyConfigurationLogForwardsParentNameBindsNameRoute,
  getServicesHaproxyConfigurationLogForwardsParentNameBindsRoute,
  getServicesHaproxyConfigurationPeersParentNameBindsNameRoute,
  getServicesHaproxyConfigurationPeersParentNameBindsRoute,
  postServicesHaproxyConfigurationFrontendsParentNameBindsRoute,
  postServicesHaproxyConfigurationLogForwardsParentNameBindsRoute,
  postServicesHaproxyConfigurationPeersParentNameBindsRoute,
  putServicesHaproxyConfigurationFrontendsParentNameBindsNameRoute,
  putServicesHaproxyConfigurationLogForwardsParentNameBindsNameRoute,
  putServicesHaproxyConfigurationPeersParentNameBindsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bindHandler = app
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationFrontendsParentNameBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationFrontendsParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationFrontendsParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationFrontendsParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationLogForwardsParentNameBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationLogForwardsParentNameBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationLogForwardsParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationLogForwardsParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationLogForwardsParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeersParentNameBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationPeersParentNameBindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationPeersParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeersParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationPeersParentNameBindsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
