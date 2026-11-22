import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRoute,
  getApiV1BillsBillIdStagesBillStageIdAmendmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const amendmentsHandler = app
  .openapi(getApiV1BillsBillIdStagesBillStageIdAmendmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
