import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFinVoiceCollectIdRoute,
  getFinVoiceConversationConversationIdRoute,
  getFinVoiceExternalIdExternalIdRoute,
  getFinVoicePhoneNumberPhoneNumberRoute,
  postFinVoiceRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const finVoiceHandler = app
  .openapi(postFinVoiceRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoiceCollectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoiceExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoicePhoneNumberPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoiceConversationConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
