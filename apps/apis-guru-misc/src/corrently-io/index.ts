import { OpenAPIHono } from '@hono/zod-openapi'
import {
  easeeHandler,
  greenPowerIndexGrNstromIndexHandler,
  meteringDecoratorHandler,
  ocppHandler,
  openMETERHandler,
  stromkontoLedgerHandler,
  stromQuittungHandler,
  tariffPriceAPIHandler,
  wiMWechselprozesseImMesswesenStrom__StatusAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', easeeHandler)
  .route('/', ocppHandler)
  .route('/', openMETERHandler)
  .route('/', greenPowerIndexGrNstromIndexHandler)
  .route('/', meteringDecoratorHandler)
  .route('/', stromQuittungHandler)
  .route('/', stromkontoLedgerHandler)
  .route('/', tariffPriceAPIHandler)
  .route('/', wiMWechselprozesseImMesswesenStrom__StatusAPIHandler)

export default app
