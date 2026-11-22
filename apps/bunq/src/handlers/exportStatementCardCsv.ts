import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDCardCardIDExportStatementCardCsvItemIdRoute,
  getUserUserIDCardCardIDExportStatementCardCsvItemIdRoute,
  getUserUserIDCardCardIDExportStatementCardCsvRoute,
  postUserUserIDCardCardIDExportStatementCardCsvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportStatementCardCsvHandler = app
  .openapi(postUserUserIDCardCardIDExportStatementCardCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDExportStatementCardCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDExportStatementCardCsvItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDCardCardIDExportStatementCardCsvItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
