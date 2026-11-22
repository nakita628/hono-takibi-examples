import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdRoute,
  getDocumentsChildObjectsIdRoute,
  getDocumentsDownloadIdRoute,
  getDocumentsIdRoute,
  postDocumentsCloneIdRoute,
  postDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsCloneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsDownloadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
