import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdCannedResponsesIdRoute,
  getApiV1AccountsAccountIdCannedResponsesRoute,
  patchApiV1AccountsAccountIdCannedResponsesIdRoute,
  postApiV1AccountsAccountIdCannedResponsesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cannedResponsesHandler = app
  .openapi(getApiV1AccountsAccountIdCannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCannedResponsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCannedResponsesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
