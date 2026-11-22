import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute,
  postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
