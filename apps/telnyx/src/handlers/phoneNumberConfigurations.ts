import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumbersIdRoute,
  getPhoneNumbersIdRoute,
  getPhoneNumbersIdVoiceRoute,
  getPhoneNumbersRoute,
  getPhoneNumbersSlimRoute,
  getPhoneNumbersVoiceRoute,
  patchPhoneNumbersIdActionsBundleStatusChangeRoute,
  patchPhoneNumbersIdRoute,
  patchPhoneNumbersIdVoiceRoute,
  postPhoneNumbersActionsVerifyOwnershipRoute,
  postPhoneNumbersIdActionsEnableEmergencyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberConfigurationsHandler = app
  .openapi(getPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersActionsVerifyOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersSlimRoute, (c) => {
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
  .openapi(patchPhoneNumbersIdActionsBundleStatusChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersIdActionsEnableEmergencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersIdVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersIdVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
