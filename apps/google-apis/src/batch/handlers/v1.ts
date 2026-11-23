import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentTasksRoute,
  postV1NameCancelRoute,
  postV1ParentJobsRoute,
  postV1ParentStateReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentStateReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
