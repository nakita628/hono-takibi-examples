import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdCaptiveRecipientsRecipientPartRoute,
  deleteV21AccountsAccountIdRoute,
  getV21AccountsAccountIdBillingChargesRoute,
  getV21AccountsAccountIdRecipientNamesRoute,
  getV21AccountsAccountIdRoute,
  getV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute,
  getV21AccountsAccountIdSettingsNotificationDefaultsRoute,
  getV21AccountsAccountIdSettingsRoute,
  getV21AccountsAccountIdSharedAccessRoute,
  getV21AccountsAccountIdSupportedLanguagesRoute,
  getV21AccountsAccountIdUnsupportedFileTypesRoute,
  getV21AccountsProvisioningRoute,
  postV21AccountsRoute,
  putV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute,
  putV21AccountsAccountIdSettingsNotificationDefaultsRoute,
  putV21AccountsAccountIdSettingsRoute,
  putV21AccountsAccountIdSharedAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postV21AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdCaptiveRecipientsRecipientPartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdRecipientNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsEnvelopePurgeConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSettingsNotificationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsNotificationDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSharedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSharedAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUnsupportedFileTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
