import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute,
  deleteApiV2ContentSubmissionsContentSubmissionIDRoute,
  getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute,
  getApiV2ContentSubmissionsContentSubmissionIDRoute,
  getApiV2ContentSubmissionsContentSubmissionIDStatusRoute,
  getApiV2ContentSubmissionsRoute,
  postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute,
  postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute,
  postApiV2ContentSubmissionsRoute,
  putApiV2ContentSubmissionAttributesBatchRoute,
  putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute,
  putApiV2ContentSubmissionsContentSubmissionIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentSubmissionsHandler = app
  .openapi(putApiV2ContentSubmissionAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionAttributesContentSubmissionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentSubmissionsContentSubmissionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsContentSubmissionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionsContentSubmissionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsContentSubmissionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionsContentSubmissionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionsContentSubmissionIDAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionsContentSubmissionIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
