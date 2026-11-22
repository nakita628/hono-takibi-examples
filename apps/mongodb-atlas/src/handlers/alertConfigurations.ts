import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute,
  getApiAtlasV2AlertConfigsMatchersFieldNamesRoute,
  getApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute,
  getApiAtlasV2GroupsGroupIdAlertConfigsRoute,
  getApiAtlasV2GroupsGroupIdAlertsAlertIdAlertConfigsRoute,
  patchApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute,
  postApiAtlasV2GroupsGroupIdAlertConfigsRoute,
  putApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertConfigurationsHandler = app
  .openapi(getApiAtlasV2AlertConfigsMatchersFieldNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAlertConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdAlertConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdAlertConfigsAlertConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdAlertsAlertIdAlertConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
