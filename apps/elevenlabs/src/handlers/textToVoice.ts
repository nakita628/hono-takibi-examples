import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TextToVoiceGeneratedVoiceIdStreamRoute,
  postV1TextToVoiceCreatePreviewsRoute,
  postV1TextToVoiceDesignRoute,
  postV1TextToVoiceRoute,
  postV1TextToVoiceVoiceIdRemixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textToVoiceHandler = app
  .openapi(postV1TextToVoiceCreatePreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceDesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToVoiceVoiceIdRemixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TextToVoiceGeneratedVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
