import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDCardCardIDExportStatementCardPdfItemIdRoute,
  getUserUserIDCardCardIDExportStatementCardPdfItemIdRoute,
  getUserUserIDCardCardIDExportStatementCardPdfRoute,
  postUserUserIDCardCardIDExportStatementCardPdfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportStatementCardPdfHandler = app
  .openapi(getUserUserIDCardCardIDExportStatementCardPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDCardCardIDExportStatementCardPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDCardCardIDExportStatementCardPdfItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDExportStatementCardPdfItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
