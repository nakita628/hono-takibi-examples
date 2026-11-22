import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdLabelsIdRoute,
  getApiV1AccountsAccountIdLabelsIdRoute,
  getApiV1AccountsAccountIdLabelsRoute,
  patchApiV1AccountsAccountIdLabelsIdRoute,
  postApiV1AccountsAccountIdLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getApiV1AccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
