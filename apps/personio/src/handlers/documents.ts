import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompanyDocumentCategoriesRoute, postCompanyDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getCompanyDocumentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
