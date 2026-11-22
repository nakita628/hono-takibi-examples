import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdDocumentsDocumentIdRoute,
  getProjectsProjectIdDocumentsDocumentIdDownloadRoute,
  getProjectsProjectIdDocumentsDocumentIdRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute,
  getProjectsProjectIdDocumentsRoute,
  postProjectsProjectIdDocumentsDocumentIdRoute,
  postProjectsProjectIdDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectDocumentHandler = app
  .openapi(getProjectsProjectIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
