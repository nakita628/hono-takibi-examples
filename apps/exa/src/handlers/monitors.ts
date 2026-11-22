import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMonitorsIdRoute,
  deleteV0MonitorsIdRoute,
  getMonitorsIdRoute,
  getMonitorsRoute,
  getV0MonitorsIdRoute,
  getV0MonitorsRoute,
  patchMonitorsIdRoute,
  patchV0MonitorsIdRoute,
  postMonitorsBatchRoute,
  postMonitorsIdTriggerRoute,
  postMonitorsRoute,
  postV0MonitorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitorsHandler = app
  .openapi(postMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMonitorsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMonitorsIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0MonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0MonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0MonitorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
