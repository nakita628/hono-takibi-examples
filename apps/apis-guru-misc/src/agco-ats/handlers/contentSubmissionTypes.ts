import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ContentSubmissionTypesIdRoute,
  getApiV2ContentSubmissionTypesIdRoute,
  getApiV2ContentSubmissionTypesRoute,
  postApiV2ContentSubmissionTypesRoute,
  putApiV2ContentSubmissionTypesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentSubmissionTypesHandler = app
  .openapi(getApiV2ContentSubmissionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentSubmissionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentSubmissionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentSubmissionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentSubmissionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
