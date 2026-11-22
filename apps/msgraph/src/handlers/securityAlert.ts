import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityAlertsV2AlertIdRoute,
  getSecurityAlertsAlertIdRoute,
  getSecurityAlertsCountRoute,
  getSecurityAlertsRoute,
  getSecurityAlertsV2AlertIdCommentsCountRoute,
  getSecurityAlertsV2AlertIdRoute,
  getSecurityAlertsV2CountRoute,
  getSecurityAlertsV2Route,
  patchSecurityAlertsAlertIdRoute,
  patchSecurityAlertsV2AlertIdRoute,
  postSecurityAlertsRoute,
  postSecurityAlertsV2AlertIdCommentsRoute,
  postSecurityAlertsV2MicrosoftGraphSecurityMoveAlertsRoute,
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
  .openapi(getSecurityAlertsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAlertsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsV2AlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAlertsV2AlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAlertsV2AlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAlertsV2AlertIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsV2AlertIdCommentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsV2CountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAlertsV2MicrosoftGraphSecurityMoveAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAlertsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
