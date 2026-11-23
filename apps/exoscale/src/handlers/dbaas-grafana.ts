import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasGrafanaNameRoute,
  getDbaasGrafanaNameRoute,
  getDbaasGrafanaServiceNameUserUsernamePasswordRevealRoute,
  postDbaasGrafanaNameRoute,
  putDbaasGrafanaNameMaintenanceStartRoute,
  putDbaasGrafanaNameRoute,
  putDbaasGrafanaServiceNameUserUsernamePasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasGrafanaHandler = app
  .openapi(putDbaasGrafanaNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasGrafanaServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasGrafanaServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasGrafanaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
