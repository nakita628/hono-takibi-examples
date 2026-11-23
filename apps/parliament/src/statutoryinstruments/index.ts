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
} from './routes'
import {
  getApiV1BusinessItemIdRouteHandler,
  getApiV1LayingBodyRouteHandler,
  getApiV1ProcedureIdRouteHandler,
  getApiV1ProcedureRouteHandler,
  getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRouteHandler,
  getApiV1ProposedNegativeStatutoryInstrumentIdRouteHandler,
  getApiV1ProposedNegativeStatutoryInstrumentRouteHandler,
  getApiV1StatutoryInstrumentIdBusinessItemsRouteHandler,
  getApiV1StatutoryInstrumentIdRouteHandler,
  getApiV1StatutoryInstrumentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1BusinessItemIdRoute, getApiV1BusinessItemIdRouteHandler)
  .openapi(getApiV1LayingBodyRoute, getApiV1LayingBodyRouteHandler)
  .openapi(getApiV1ProcedureRoute, getApiV1ProcedureRouteHandler)
  .openapi(getApiV1ProcedureIdRoute, getApiV1ProcedureIdRouteHandler)
  .openapi(
    getApiV1ProposedNegativeStatutoryInstrumentRoute,
    getApiV1ProposedNegativeStatutoryInstrumentRouteHandler,
  )
  .openapi(
    getApiV1ProposedNegativeStatutoryInstrumentIdRoute,
    getApiV1ProposedNegativeStatutoryInstrumentIdRouteHandler,
  )
  .openapi(
    getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRoute,
    getApiV1ProposedNegativeStatutoryInstrumentIdBusinessItemsRouteHandler,
  )
  .openapi(getApiV1StatutoryInstrumentRoute, getApiV1StatutoryInstrumentRouteHandler)
  .openapi(getApiV1StatutoryInstrumentIdRoute, getApiV1StatutoryInstrumentIdRouteHandler)
  .openapi(
    getApiV1StatutoryInstrumentIdBusinessItemsRoute,
    getApiV1StatutoryInstrumentIdBusinessItemsRouteHandler,
  )

export default app
