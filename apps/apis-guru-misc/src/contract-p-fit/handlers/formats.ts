import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFormatsFormatIdRoute,
  getFormatsDocumentTypesRoute,
  getFormatsFormatIdRoute,
  getFormatsRoute,
  getFormatsScopeTagFieldsRoute,
  patchFormatsFormatIdRoute,
  postFormatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatsHandler = app
  .openapi(getFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatsDocumentTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFormatsFormatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatsFormatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFormatsFormatIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatsScopeTagFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
