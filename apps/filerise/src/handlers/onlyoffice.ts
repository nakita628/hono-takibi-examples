import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOnlyofficeConfigPhpRoute,
  getApiOnlyofficeSignedDownloadPhpRoute,
  getApiOnlyofficeStatusPhpRoute,
  postApiOnlyofficeCallbackPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onlyofficeHandler = app
  .openapi(postApiOnlyofficeCallbackPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOnlyofficeConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOnlyofficeSignedDownloadPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOnlyofficeStatusPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
