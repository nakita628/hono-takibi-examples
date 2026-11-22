import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountingPeriodsApIdRoute,
  getV1AccountingPeriodsApIdRoute,
  getV1AccountingPeriodsRoute,
  postV1AccountingPeriodsRoute,
  putV1AccountingPeriodsApIdCloseRoute,
  putV1AccountingPeriodsApIdPendingCloseRoute,
  putV1AccountingPeriodsApIdReopenRoute,
  putV1AccountingPeriodsApIdRoute,
  putV1AccountingPeriodsApIdRunTrialBalanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountingPeriodsHandler = app
  .openapi(getV1AccountingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountingPeriodsApIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountingPeriodsApIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdPendingCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingPeriodsApIdRunTrialBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
