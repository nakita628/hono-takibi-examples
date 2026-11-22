import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1AccountsAccountIdDetailsRoute,
  getGwApiV1AccountsAccountIdKycRoute,
  getGwApiV1AccountsAccountIdLoginMessagesRoute,
  getGwApiV1AccountsAccountIdStatusRoute,
  getGwApiV1AccountsAccountIdTasksRoute,
  getGwApiV1AccountsLoginMessagesRoute,
  getGwApiV1AccountsRoute,
  getGwApiV1AccountsStatusRoute,
  patchGwApiV1AccountsAccountIdStatusRoute,
  patchGwApiV1AccountsAccountIdTasksRoute,
  patchGwApiV1AccountsRoute,
  postGwApiV1AccountsAccountIdTasksRoute,
  postGwApiV1AccountsDocumentsRoute,
  postGwApiV1AccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountManagementAccountsHandler = app
  .openapi(postGwApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1AccountsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1AccountsAccountIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1AccountsAccountIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGwApiV1AccountsAccountIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsLoginMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdKycRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1AccountsAccountIdLoginMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
