import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiKoreaderApiKeySyncsProgressEbookHashRoute,
  getApiKoreaderApiKeyUsersAuthRoute,
  putApiKoreaderApiKeySyncsProgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const koreaderHandler = app
  .openapi(getApiKoreaderApiKeyUsersAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiKoreaderApiKeySyncsProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKoreaderApiKeySyncsProgressEbookHashRoute, (c) => {
    throw new Error('Not implemented')
  })
