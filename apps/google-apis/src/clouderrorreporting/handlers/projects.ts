import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1ProjectNameEventsRoute,
  getV1beta1GroupNameRoute,
  getV1beta1ProjectNameEventsRoute,
  getV1beta1ProjectNameGroupStatsRoute,
  postV1beta1ProjectNameEventsReportRoute,
  putV1beta1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1beta1GroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1ProjectNameEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectNameEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectNameEventsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ProjectNameGroupStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
