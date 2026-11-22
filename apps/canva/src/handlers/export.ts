import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ExportsExportIdRoute,
  postV1ExportsRoute,
  postV1PrintPartnerExportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(postV1ExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrintPartnerExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
