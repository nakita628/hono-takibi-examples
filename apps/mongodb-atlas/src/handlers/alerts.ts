import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdAlertsRoute,
  getApiAtlasV2GroupsGroupIdAlertsAlertIdRoute,
  getApiAtlasV2GroupsGroupIdAlertsRoute,
  patchApiAtlasV2GroupsGroupIdAlertsAlertIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
