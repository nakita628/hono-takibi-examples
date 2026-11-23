import { OpenAPIHono } from '@hono/zod-openapi'
import { getPartyPartyIdAssociatedAttorneysRoute, getPartyPartyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const partyHandler = app
  .openapi(getPartyPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartyPartyIdAssociatedAttorneysRoute, (c) => {
    throw new Error('Not implemented')
  })
