import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCardCardIDExportStatementCardItemIdRoute,
  getUserUserIDCardCardIDExportStatementCardRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportStatementCardHandler = app
  .openapi(getUserUserIDCardCardIDExportStatementCardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCardCardIDExportStatementCardRoute, (c) => {
    throw new Error('Not implemented')
  })
