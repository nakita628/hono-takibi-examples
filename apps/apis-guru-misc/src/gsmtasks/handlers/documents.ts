import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdIndexRoute,
  getDocumentsIdIndexRoute,
  getDocumentsIndexRoute,
  postDocumentsBatchDeleteIndexRoute,
  postDocumentsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getDocumentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsBatchDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
