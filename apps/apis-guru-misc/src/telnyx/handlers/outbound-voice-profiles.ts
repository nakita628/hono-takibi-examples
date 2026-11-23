import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOutboundVoiceProfilesIdRoute,
  getOutboundVoiceProfilesIdRoute,
  getOutboundVoiceProfilesRoute,
  patchOutboundVoiceProfilesIdRoute,
  postOutboundVoiceProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const outboundVoiceProfilesHandler = app
  .openapi(getOutboundVoiceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOutboundVoiceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOutboundVoiceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutboundVoiceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOutboundVoiceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
