import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WhatsappBusinessAccountsIdRoute,
  deleteWhatsappBusinessAccountsIdRoute,
  getV2WhatsappBusinessAccountsIdPhoneNumbersRoute,
  getV2WhatsappBusinessAccountsIdRoute,
  getV2WhatsappBusinessAccountsIdSettingsRoute,
  getV2WhatsappBusinessAccountsRoute,
  getV2WhatsappUserDataRoute,
  getWhatsappBusinessAccountsIdPhoneNumbersRoute,
  getWhatsappBusinessAccountsIdRoute,
  getWhatsappBusinessAccountsIdSettingsRoute,
  getWhatsappBusinessAccountsRoute,
  patchV2WhatsappBusinessAccountsIdSettingsRoute,
  patchV2WhatsappUserDataRoute,
  patchWhatsappBusinessAccountsIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whatsappBusinessAccountsHandler = app
  .openapi(getV2WhatsappBusinessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WhatsappBusinessAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WhatsappBusinessAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WhatsappBusinessAccountsIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WhatsappBusinessAccountsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WhatsappBusinessAccountsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WhatsappUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2WhatsappUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappBusinessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhatsappBusinessAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappBusinessAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappBusinessAccountsIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhatsappBusinessAccountsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhatsappBusinessAccountsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
