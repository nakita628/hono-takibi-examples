import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
  getHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
  postHoursOfOperationsInstanceIdHoursOfOperationIdRoute,
  putHoursOfOperationsInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hoursOfOperationsHandler = app
  .openapi(putHoursOfOperationsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHoursOfOperationsInstanceIdHoursOfOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHoursOfOperationsInstanceIdHoursOfOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHoursOfOperationsInstanceIdHoursOfOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
