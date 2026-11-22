import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4ConfigInfoDefaultsRoute,
  getV4ConfigInfoGeneralRoute,
  getV4ConfigInfoInfrastructureRoute,
  getV4ConfigInfoNotificationsChannelsRoute,
  getV4ConfigInfoPoliciesAlgorithmsRoute,
  getV4ConfigInfoPoliciesClassificationsRoute,
  getV4ConfigInfoPoliciesGuestUsersRoute,
  getV4ConfigInfoPoliciesPasswordsRoute,
  getV4ConfigInfoProductPackagesCurrentRoute,
  getV4ConfigInfoProductPackagesRoute,
  getV4ConfigInfoS3TagsRoute,
  getV4ConfigSettingsRoute,
  putV4ConfigSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getV4ConfigInfoDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoInfrastructureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoNotificationsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesAlgorithmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoPoliciesPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoProductPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoProductPackagesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigInfoS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ConfigSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4ConfigSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
