import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BillsBillIdRoute,
  getApiV1BillsBillIdStagesBillStageIdRoute,
  getApiV1BillsBillIdStagesRoute,
  getApiV1BillsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billsHandler = app
  .openapi(getApiV1BillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesBillStageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
