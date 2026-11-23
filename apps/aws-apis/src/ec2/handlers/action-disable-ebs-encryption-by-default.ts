import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableEbsEncryptionByDefaultRoute,
  postActionDisableEbsEncryptionByDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisableEbsEncryptionByDefaultHandler = app
  .openapi(getActionDisableEbsEncryptionByDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableEbsEncryptionByDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
