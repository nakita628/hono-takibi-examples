import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeesLagoIdRoute,
  getFeesLagoIdRoute,
  getFeesRoute,
  putFeesLagoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feesHandler = app
  .openapi(getFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
