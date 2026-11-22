import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDAttachmentItemIdRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDAttachmentItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
