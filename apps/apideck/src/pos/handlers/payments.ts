import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosPaymentsIdRoute,
  getPosPaymentsIdRoute,
  getPosPaymentsRoute,
  patchPosPaymentsIdRoute,
  postPosPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getPosPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
