import { OpenAPIHono } from '@hono/zod-openapi'
import { getNormPartySearchNormPartySearchIdRoute, getNormPartySearchRoute } from '../routes'

const app = new OpenAPIHono()

export const normPartySearchHandler = app
  .openapi(getNormPartySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartySearchNormPartySearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
