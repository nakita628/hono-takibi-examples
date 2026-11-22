import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsBulkTelephonyCredentialsRoute,
  patchActionsBulkTelephonyCredentialsRoute,
  postActionsActionTelephonyCredentialsRoute,
  postActionsBulkTelephonyCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkCredentialsHandler = app
  .openapi(deleteActionsBulkTelephonyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchActionsBulkTelephonyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionsBulkTelephonyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionsActionTelephonyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
