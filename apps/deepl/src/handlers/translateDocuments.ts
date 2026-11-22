import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2DocumentDocumentIdResultRoute,
  postV2DocumentDocumentIdRoute,
  postV2DocumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translateDocumentsHandler = app
  .openapi(postV2DocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DocumentDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DocumentDocumentIdResultRoute, (c) => {
    throw new Error('Not implemented')
  })
