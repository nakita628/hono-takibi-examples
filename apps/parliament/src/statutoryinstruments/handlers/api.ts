import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BusinessItemIdRoute,
  getApiV1LayingBodyRoute,
  getApiV1ProcedureIdRoute,
  getApiV1ProcedureRoute,
  getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRoute,
  getApiV1ProposedNegativeStatutoryInstrumentIdRoute,
  getApiV1ProposedNegativeStatutoryInstrumentRoute,
  getApiV1StatutoryInstrumentIdBusinessItemsRoute,
  getApiV1StatutoryInstrumentIdRoute,
  getApiV1StatutoryInstrumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1BusinessItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LayingBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProcedureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProcedureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProposedNegativeStatutoryInstrumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProposedNegativeStatutoryInstrumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatutoryInstrumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatutoryInstrumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatutoryInstrumentIdBusinessItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
