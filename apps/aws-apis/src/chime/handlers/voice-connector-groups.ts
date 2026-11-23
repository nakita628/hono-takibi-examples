import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
  getVoiceConnectorGroupsRoute,
  getVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
  postVoiceConnectorGroupsRoute,
  postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRoute,
  postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRoute,
  putVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voiceConnectorGroupsHandler = app
  .openapi(
    postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postVoiceConnectorGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorGroupsVoiceConnectorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorGroupsVoiceConnectorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorGroupsVoiceConnectorGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
