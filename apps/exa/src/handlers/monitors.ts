import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMonitorsIdRoute,
  getMonitorsIdRoute,
  getMonitorsIdRunsRoute,
  getMonitorsIdRunsRunIdRoute,
  getMonitorsRoute,
  patchMonitorsIdRoute,
  postMonitorsBatchRoute,
  postMonitorsIdTriggerRoute,
  postMonitorsRoute,
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
  .openapi(getMonitorsIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorsIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
