import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesBooksDocuments1Route,
  deleteIndexesBooksDocumentsRoute,
  getIndexesBooksDocuments2Route,
  getIndexesBooksDocumentsRoute,
  postIndexesBooksDocumentsDeleteBatchRoute,
  postIndexesBooksDocumentsRoute,
  putIndexesBooksDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(deleteIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexesBooksDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksDocuments1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksDocuments2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesBooksDocumentsDeleteBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
