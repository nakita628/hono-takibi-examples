import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailHistoryExportFilenameFilenameRoute,
  getEmailHistoryRoute,
  postEmailPriceRoute,
  postEmailReceiptsRoute,
  postEmailSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionalEmailHandler = app
  .openapi(getEmailHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
