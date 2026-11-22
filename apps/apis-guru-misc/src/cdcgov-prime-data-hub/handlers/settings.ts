import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
  deleteSettingsOrganizationsOrganizationNameRoute,
  deleteSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
  getSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
  getSettingsOrganizationsOrganizationNameReceiversRoute,
  getSettingsOrganizationsOrganizationNameRoute,
  getSettingsOrganizationsOrganizationNameSendersRoute,
  getSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
  getSettingsOrganizationsRoute,
  headSettingsOrganizationsRoute,
  putSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
  putSettingsOrganizationsOrganizationNameRoute,
  putSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headSettingsOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsOrganizationsOrganizationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsOrganizationsOrganizationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsOrganizationsOrganizationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsOrganizationsOrganizationNameReceiversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsOrganizationsOrganizationNameSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsOrganizationsOrganizationNameSendersSenderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsOrganizationsOrganizationNameSendersSenderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsOrganizationsOrganizationNameSendersSenderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
