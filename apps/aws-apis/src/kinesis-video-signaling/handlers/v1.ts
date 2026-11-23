import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GetIceServerConfigRoute, postV1SendAlexaOfferToMasterRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1GetIceServerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SendAlexaOfferToMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
