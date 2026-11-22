import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute,
  getV1ApiIserverAccountAccountIdAlertsRoute,
  getV1ApiIserverAccountAlertAlertIdRoute,
  getV1ApiIserverAccountMtaRoute,
  postV1ApiIserverAccountAccountIdAlertActivateRoute,
  postV1ApiIserverAccountAccountIdAlertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingAlertsHandler = app
  .openapi(postV1ApiIserverAccountAccountIdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdAlertActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAlertAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountMtaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiIserverAccountAccountIdAlertAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
