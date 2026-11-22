import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAttachmentsCreateFromUrlRoute,
  postAttachmentsCreateRoute,
  postAttachmentsDeleteRoute,
  postAttachmentsListRoute,
  postAttachmentsRedirectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(postAttachmentsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachmentsRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachmentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachmentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttachmentsCreateFromUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
