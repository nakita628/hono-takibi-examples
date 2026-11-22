import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1VoicesVoiceIdRoute,
  getV1VoicesRoute,
  getV1VoicesSettingsDefaultRoute,
  getV1VoicesVoiceIdRoute,
  getV1VoicesVoiceIdSettingsRoute,
  postV1VoicesAddRoute,
  postV1VoicesVoiceIdEditRoute,
  postV1VoicesVoiceIdSettingsEditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voicesHandler = app
  .openapi(getV1VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesSettingsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdSettingsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
