import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserScheduledSendsBatchIdRoute,
  getMailBatchBatchIdRoute,
  getUserScheduledSendsBatchIdRoute,
  getUserScheduledSendsRoute,
  patchUserScheduledSendsBatchIdRoute,
  postMailBatchRoute,
  postUserScheduledSendsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cancelScheduledSendsHandler = app
  .openapi(postMailBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserScheduledSendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserScheduledSendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserScheduledSendsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserScheduledSendsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserScheduledSendsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
