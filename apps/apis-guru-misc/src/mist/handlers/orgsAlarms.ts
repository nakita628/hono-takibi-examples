import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdAlarmsCountRoute,
  getApiV1OrgsOrgIdAlarmsSearchRoute,
  postApiV1OrgsOrgIdAlarmsAckAllRoute,
  postApiV1OrgsOrgIdAlarmsAckRoute,
  postApiV1OrgsOrgIdAlarmsAlarmIdAckRoute,
  postApiV1OrgsOrgIdAlarmsUnackAllRoute,
  postApiV1OrgsOrgIdAlarmsUnackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsAlarmsHandler = app
  .openapi(postApiV1OrgsOrgIdAlarmsAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsAckAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsUnackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsUnackAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsAlarmIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
