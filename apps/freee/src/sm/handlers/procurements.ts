import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProcurementsIdRoute,
  getProcurementsRoute,
  patchProcurementsIdRoute,
  postProcurementsIdCancellationRoute,
  postProcurementsRoute,
  putProcurementsIdPaymentStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const procurementsHandler = app
  .openapi(getProcurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProcurementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProcurementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProcurementsIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProcurementsIdPaymentStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
