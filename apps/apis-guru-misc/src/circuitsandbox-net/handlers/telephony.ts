import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTelephonyDeviceInfosRoute,
  getTelephonyTelephonyConversationIdJournalRoute,
  getTelephonyTelephonyConversationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const telephonyHandler = app
  .openapi(getTelephonyDeviceInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelephonyTelephonyConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelephonyTelephonyConversationIdJournalRoute, (c) => {
    throw new Error('Not implemented')
  })
