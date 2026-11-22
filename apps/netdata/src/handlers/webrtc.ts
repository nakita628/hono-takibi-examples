import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2RtcOfferRoute, postApiV3RtcOfferRoute } from '../routes'

const app = new OpenAPIHono()

export const webrtcHandler = app
  .openapi(postApiV3RtcOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RtcOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
