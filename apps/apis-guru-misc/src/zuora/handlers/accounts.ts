import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectAccountIdRoute,
  getV1AccountsAccountKeyRoute,
  getV1AccountsAccountKeySummaryRoute,
  getV1ObjectAccountIdRoute,
  postV1AccountsRoute,
  postV1ObjectAccountRoute,
  putV1AccountsAccountKeyRoute,
  putV1ObjectAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountKeySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
