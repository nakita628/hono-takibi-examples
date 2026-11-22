import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMobileVoiceConnectionsIdRoute,
  getMobileVoiceConnectionsIdRoute,
  getMobileVoiceConnectionsRoute,
  patchMobileVoiceConnectionsIdRoute,
  postMobileVoiceConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileVoiceConnectionsHandler = app
  .openapi(getMobileVoiceConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMobileVoiceConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMobileVoiceConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMobileVoiceConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMobileVoiceConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
