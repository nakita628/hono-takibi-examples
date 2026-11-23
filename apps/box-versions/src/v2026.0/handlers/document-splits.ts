import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDocumentSplitsDocumentSplitIdRoute,
  getDocumentSplitsRoute,
  postDocumentSplitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentSplitsHandler = app
  .openapi(postDocumentSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentSplitsDocumentSplitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
