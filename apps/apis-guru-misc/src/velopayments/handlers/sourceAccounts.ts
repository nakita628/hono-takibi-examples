import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2SourceAccountsRoute,
  getV2SourceAccountsSourceAccountIdRoute,
  getV3SourceAccountsRoute,
  getV3SourceAccountsSourceAccountIdRoute,
  postV1SourceAccountsSourceAccountIdNotificationsRoute,
  postV2SourceAccountsSourceAccountIdTransfersRoute,
  postV3SourceAccountsSourceAccountIdNotificationsRoute,
  postV3SourceAccountsSourceAccountIdTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceAccountsHandler = app
  .openapi(postV1SourceAccountsSourceAccountIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SourceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SourceAccountsSourceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SourceAccountsSourceAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SourceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SourceAccountsSourceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourceAccountsSourceAccountIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourceAccountsSourceAccountIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
