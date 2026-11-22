import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVoiceDesignsIdRoute,
  deleteVoiceDesignsIdVersionsVersionRoute,
  getVoiceDesignsIdRoute,
  getVoiceDesignsIdSampleRoute,
  getVoiceDesignsRoute,
  patchVoiceDesignsIdRoute,
  postVoiceDesignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voiceDesignsHandler = app
  .openapi(getVoiceDesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceDesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVoiceDesignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceDesignsIdSampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceDesignsIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
