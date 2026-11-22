import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
  deleteV1SmsVoiceConfigurationSetsConfigurationSetNameRoute,
  getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsRoute,
  getV1SmsVoiceConfigurationSetsRoute,
  postV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsRoute,
  postV1SmsVoiceConfigurationSetsRoute,
  postV1SmsVoiceVoiceMessageRoute,
  putV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1SmsVoiceConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SmsVoiceConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SmsVoiceConfigurationSetsConfigurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1SmsVoiceConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1SmsVoiceVoiceMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
