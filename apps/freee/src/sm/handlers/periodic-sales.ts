import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPeriodicSalesIdRoute,
  getPeriodicSalesIdSalesEntriesRoute,
  getPeriodicSalesRoute,
  patchPeriodicSalesIdRoute,
  postPeriodicSalesIdCancellationRoute,
  postPeriodicSalesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const periodicSalesHandler = app
  .openapi(getPeriodicSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeriodicSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeriodicSalesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPeriodicSalesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeriodicSalesIdSalesEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeriodicSalesIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
