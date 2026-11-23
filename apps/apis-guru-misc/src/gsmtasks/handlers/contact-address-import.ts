import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactAddressImportIdIndexRoute,
  getContactAddressImportIndexRoute,
  postContactAddressImportIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactAddressImportHandler = app
  .openapi(getContactAddressImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactAddressImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactAddressImportIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
