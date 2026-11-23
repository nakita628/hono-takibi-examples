import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumbersIdRoute,
  getPhoneNumbersCsvDownloadsIdRoute,
  getPhoneNumbersCsvDownloadsRoute,
  getPhoneNumbersIdMessagingRoute,
  getPhoneNumbersIdRoute,
  getPhoneNumbersIdVoiceRoute,
  getPhoneNumbersInboundChannelsRoute,
  getPhoneNumbersJobsIdRoute,
  getPhoneNumbersJobsRoute,
  getPhoneNumbersMessagingRoute,
  getPhoneNumbersRoute,
  getPhoneNumbersVoiceRoute,
  patchPhoneNumbersIdMessagingRoute,
  patchPhoneNumbersIdRoute,
  patchPhoneNumbersIdVoiceRoute,
  patchPhoneNumbersInboundChannelsRoute,
  postPhoneNumbersCsvDownloadsRoute,
  postPhoneNumbersIdActionsEnableEmergencyRoute,
  postPhoneNumbersJobsDeletePhoneNumbersRoute,
  postPhoneNumbersJobsUpdateEmergencySettingsRoute,
  postPhoneNumbersJobsUpdatePhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app
  .openapi(getPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersCsvDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersCsvDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersCsvDownloadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersInboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersInboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersJobsDeletePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersJobsUpdateEmergencySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersJobsUpdatePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersJobsIdRoute, (c) => {
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
