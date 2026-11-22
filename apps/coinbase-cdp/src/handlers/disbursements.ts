import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2DisbursementsDisbursementIdRoute,
  getV2DisbursementsRoute,
  postV2DisbursementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disbursementsHandler = app
  .openapi(postV2DisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisbursementsDisbursementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
