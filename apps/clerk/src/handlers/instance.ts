import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInstanceCommunicationRoute,
  getInstanceOauthApplicationSettingsRoute,
  getInstanceOrganizationSettingsRoute,
  getInstanceProtectRoute,
  getInstanceRoute,
  patchInstanceCommunicationRoute,
  patchInstanceOauthApplicationSettingsRoute,
  patchInstanceOrganizationSettingsRoute,
  patchInstanceProtectRoute,
  patchInstanceRestrictionsRoute,
  patchInstanceRoute,
  postInstanceChangeDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceHandler = app
  .openapi(getInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInstanceRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceProtectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInstanceProtectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInstanceCommunicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceOauthApplicationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInstanceOauthApplicationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstanceChangeDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstanceOrganizationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInstanceOrganizationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
