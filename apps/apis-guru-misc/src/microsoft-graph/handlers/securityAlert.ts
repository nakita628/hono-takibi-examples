import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityAlertsV2AlertIdRoute,
  getSecurityAlertsAlertIdRoute,
  getSecurityAlertsRoute,
  getSecurityAlertsV2AlertIdRoute,
  getSecurityAlertsV2Route,
  patchSecurityAlertsAlertIdRoute,
  patchSecurityAlertsV2AlertIdRoute,
  postSecurityAlertsRoute,
  postSecurityAlertsV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const securityAlertHandler = app
  .openapi(getSecurityAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAlertsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAlertsV2AlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsV2AlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAlertsV2AlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
