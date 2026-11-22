import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute,
  getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute,
  getApiV1OrgsOrgIdAlarmtemplatesRoute,
  postApiV1OrgsOrgIdAlarmtemplatesRoute,
  postApiV1OrgsOrgIdAlarmtemplatesSuppressRoute,
  putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAlarmTemplatesHandler = app
  .openapi(getApiV1OrgsOrgIdAlarmtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmtemplatesSuppressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
