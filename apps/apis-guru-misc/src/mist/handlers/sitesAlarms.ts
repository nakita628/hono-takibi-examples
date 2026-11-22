import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdAlarmsCountRoute,
  getApiV1SitesSiteIdAlarmsSearchRoute,
  postApiV1SitesSiteIdAlarmsAckAllRoute,
  postApiV1SitesSiteIdAlarmsAckRoute,
  postApiV1SitesSiteIdAlarmsAlarmIdAckRoute,
  postApiV1SitesSiteIdAlarmsAlarmIdUnackRoute,
  postApiV1SitesSiteIdAlarmsUnackAllRoute,
  postApiV1SitesSiteIdAlarmsUnackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesAlarmsHandler = app
  .openapi(postApiV1SitesSiteIdAlarmsAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAckAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAlarmsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAlarmsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsUnackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsUnackAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAlarmIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAlarmIdUnackRoute, (c) => {
    throw new Error('Not implemented')
  })
