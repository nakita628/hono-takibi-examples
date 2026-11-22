import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumbersIdRoute,
  getPhoneNumbersIdMessagingRoute,
  getPhoneNumbersIdRoute,
  getPhoneNumbersIdVoiceRoute,
  getPhoneNumbersMessagingRoute,
  getPhoneNumbersRoute,
  getPhoneNumbersVoiceRoute,
  patchPhoneNumbersIdMessagingRoute,
  patchPhoneNumbersIdRoute,
  patchPhoneNumbersIdVoiceRoute,
  postPhoneNumbersIdActionsEnableEmergencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberConfigurationsHandler = app
  .openapi(getPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersIdActionsEnableEmergencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersIdVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersIdVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
