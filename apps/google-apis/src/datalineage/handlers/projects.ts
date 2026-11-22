import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentLineageEventsRoute,
  getV1ParentProcessesRoute,
  getV1ParentRunsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ParentBatchSearchLinkProcessesRoute,
  postV1ParentLineageEventsRoute,
  postV1ParentProcessesRoute,
  postV1ParentRunsRoute,
  postV1ParentSearchLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentLineageEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentLineageEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBatchSearchLinkProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSearchLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
