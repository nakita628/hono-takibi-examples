import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameRoute,
  getV1ParentDataSourcesRoute,
  getV1ParentRunsRoute,
  getV1ParentTransferConfigsRoute,
  getV1ParentTransferLogsRoute,
  patchV1NameRoute,
  postV1NameCheckValidCredsRoute,
  postV1NameEnrollDataSourcesRoute,
  postV1ParentScheduleRunsRoute,
  postV1ParentStartManualRunsRoute,
  postV1ParentTransferConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCheckValidCredsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameEnrollDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTransferConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTransferConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTransferLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentScheduleRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentStartManualRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
