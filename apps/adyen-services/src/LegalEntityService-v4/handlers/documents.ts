import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdRoute,
  getDocumentsIdRoute,
  patchDocumentsIdRoute,
  postDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(postDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
