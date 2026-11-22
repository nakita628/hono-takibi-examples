import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationPeerSectionNameRoute,
  getServicesHaproxyConfigurationPeerSectionNameRoute,
  getServicesHaproxyConfigurationPeerSectionRoute,
  postServicesHaproxyConfigurationPeerSectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peerHandler = app
  .openapi(getServicesHaproxyConfigurationPeerSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationPeerSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationPeerSectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationPeerSectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
