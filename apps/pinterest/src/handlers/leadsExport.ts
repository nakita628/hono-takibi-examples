import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdLeadsExportLeadsExportIdRoute,
  postAdAccountsAdAccountIdLeadsExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leadsExportHandler = app
  .openapi(postAdAccountsAdAccountIdLeadsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdLeadsExportLeadsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
