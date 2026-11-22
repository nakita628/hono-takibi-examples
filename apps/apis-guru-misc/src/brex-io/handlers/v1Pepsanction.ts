import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PepsanctionMonitorListRoute,
  getApiV1PepsanctionRetrieveIdRoute,
  postApiV1PepsanctionMonitorUnregisterIdRoute,
  postApiV1PepsanctionMonitorUpdateIdRoute,
  postApiV1PepsanctionOrderTypeSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1PepsanctionHandler = app
  .openapi(getApiV1PepsanctionMonitorListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PepsanctionMonitorUnregisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PepsanctionMonitorUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PepsanctionOrderTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PepsanctionRetrieveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
