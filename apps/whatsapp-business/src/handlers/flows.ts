import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionFlowIDRoute,
  getVersionFlowIDAssetsRoute,
  getVersionFlowIDRoute,
  getVersionPhoneNumberIDWhatsappBusinessEncryptionRoute,
  getVersionWABAIDFlowsRoute,
  postVersionFlowIDAssetsRoute,
  postVersionFlowIDDeprecateRoute,
  postVersionFlowIDPublishRoute,
  postVersionFlowIDRoute,
  postVersionWABAIDFlowsRoute,
  postVersionWABAIDMessageTemplatesRoute,
  postVersionWABAIDMigrateFlowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowsHandler = app
  .openapi(getVersionPhoneNumberIDWhatsappBusinessEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDMigrateFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionFlowIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionFlowIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionFlowIDAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionFlowIDDeprecateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
