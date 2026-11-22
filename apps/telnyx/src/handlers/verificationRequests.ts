import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessagingTollfreeVerificationRequestsIdRoute,
  getMessagingTollfreeVerificationRequestsIdRoute,
  getMessagingTollfreeVerificationRequestsIdStatusHistory2Route,
  getMessagingTollfreeVerificationRequestsIdStatusHistoryRoute,
  getMessagingTollfreeVerificationRequestsRoute,
  patchMessagingTollfreeVerificationRequestsIdRoute,
  postMessagingTollfreeVerificationRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verificationRequestsHandler = app
  .openapi(getMessagingTollfreeVerificationRequestsIdStatusHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTollfreeVerificationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingTollfreeVerificationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingTollfreeVerificationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTollfreeVerificationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingTollfreeVerificationRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingTollfreeVerificationRequestsIdStatusHistory2Route, (c) => {
    throw new Error('Not implemented')
  })
