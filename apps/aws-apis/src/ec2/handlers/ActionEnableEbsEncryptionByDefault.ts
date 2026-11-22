import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableEbsEncryptionByDefaultRoute,
  postActionEnableEbsEncryptionByDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionEnableEbsEncryptionByDefaultHandler = app
  .openapi(getActionEnableEbsEncryptionByDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableEbsEncryptionByDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
