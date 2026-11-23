import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetEbsEncryptionByDefaultRoute,
  postActionGetEbsEncryptionByDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetEbsEncryptionByDefaultHandler = app
  .openapi(getActionGetEbsEncryptionByDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetEbsEncryptionByDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
