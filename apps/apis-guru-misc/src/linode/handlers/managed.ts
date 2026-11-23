import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteManagedContactsContactIdRoute,
  deleteManagedServicesServiceIdRoute,
  getManagedContactsContactIdRoute,
  getManagedContactsRoute,
  getManagedCredentialsCredentialIdRoute,
  getManagedCredentialsRoute,
  getManagedCredentialsSshkeyRoute,
  getManagedIssuesIssueIdRoute,
  getManagedIssuesRoute,
  getManagedLinodeSettingsLinodeIdRoute,
  getManagedLinodeSettingsRoute,
  getManagedServicesRoute,
  getManagedServicesServiceIdRoute,
  getManagedStatsRoute,
  postManagedContactsRoute,
  postManagedCredentialsCredentialIdRevokeRoute,
  postManagedCredentialsCredentialIdUpdateRoute,
  postManagedCredentialsRoute,
  postManagedServicesRoute,
  postManagedServicesServiceIdDisableRoute,
  postManagedServicesServiceIdEnableRoute,
  putManagedContactsContactIdRoute,
  putManagedCredentialsCredentialIdRoute,
  putManagedLinodeSettingsLinodeIdRoute,
  putManagedServicesServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedHandler = app
  .openapi(getManagedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedCredentialsSshkeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagedCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedCredentialsCredentialIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedCredentialsCredentialIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedLinodeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedLinodeSettingsLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagedLinodeSettingsLinodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManagedServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedServicesServiceIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedServicesServiceIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
