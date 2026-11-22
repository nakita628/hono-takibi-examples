import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRoute,
  getApiV1ProposedNegativeStatutoryInstrumentIdRoute,
  getApiV1ProposedNegativeStatutoryInstrumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const proposedNegativeStatutoryInstrumentHandler = app
  .openapi(getApiV1ProposedNegativeStatutoryInstrumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProposedNegativeStatutoryInstrumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
