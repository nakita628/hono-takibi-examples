import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationPeerEntriesNameRoute,
  getServicesHaproxyConfigurationPeerEntriesNameRoute,
  getServicesHaproxyConfigurationPeerEntriesRoute,
  postServicesHaproxyConfigurationPeerEntriesRoute,
  putServicesHaproxyConfigurationPeerEntriesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peerEntryHandler = app
  .openapi(getServicesHaproxyConfigurationPeerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationPeerEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationPeerEntriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeerEntriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationPeerEntriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
