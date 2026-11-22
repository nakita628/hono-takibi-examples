import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2AiAudioDescriptorsRoute,
  getV2AiAudioInstrumentsRoute,
  getV2AiAudioRendersRoute,
  postV2AiAudioRendersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customMusicHandler = app
  .openapi(getV2AiAudioDescriptorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AiAudioInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AiAudioRendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AiAudioRendersRoute, (c) => {
    throw new Error('Not implemented')
  })
