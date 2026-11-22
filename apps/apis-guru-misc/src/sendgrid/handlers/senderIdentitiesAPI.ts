import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSendersSenderIdRoute,
  getSendersRoute,
  getSendersSenderIdRoute,
  patchSendersSenderIdRoute,
  postSendersRoute,
  postSendersSenderIdResendVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const senderIdentitiesAPIHandler = app
  .openapi(getSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersSenderIdResendVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
