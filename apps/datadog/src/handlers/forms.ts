import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2FormsFormIdRoute,
  getApiV2FormsFormIdRoute,
  getApiV2FormsRoute,
  patchApiV2FormsFormIdRoute,
  postApiV2FormsCreateAndPublishRoute,
  postApiV2FormsFormIdCloneRoute,
  postApiV2FormsFormIdPublishRoute,
  postApiV2FormsFormIdVersionsRoute,
  postApiV2FormsFormIdVersionsUpsertAndPublishRoute,
  postApiV2FormsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formsHandler = app
  .openapi(getApiV2FormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FormsCreateAndPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2FormsFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2FormsFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2FormsFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FormsFormIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FormsFormIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FormsFormIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2FormsFormIdVersionsUpsertAndPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
