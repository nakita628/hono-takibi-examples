import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdExternalStatusChecksCheckIdRoute,
  getApiV4ProjectsIdExternalStatusChecksRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidStatusChecksRoute,
  postApiV4ProjectsIdExternalStatusChecksRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidStatusCheckResponsesRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidStatusChecksExternalStatusCheckIdRetryRoute,
  putApiV4ProjectsIdExternalStatusChecksCheckIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalStatusChecksHandler = app
  .openapi(postApiV4ProjectsIdExternalStatusChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdExternalStatusChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdExternalStatusChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdExternalStatusChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidStatusCheckResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidStatusChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV4ProjectsIdMergeRequestsMergeRequestIidStatusChecksExternalStatusCheckIdRetryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
