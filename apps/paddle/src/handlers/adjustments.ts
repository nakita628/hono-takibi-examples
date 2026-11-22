import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdjustmentsAdjustmentIdCreditNoteRoute,
  getAdjustmentsRoute,
  postAdjustmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adjustmentsHandler = app
  .openapi(getAdjustmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdjustmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdjustmentsAdjustmentIdCreditNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
