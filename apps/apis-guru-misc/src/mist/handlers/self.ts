import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SelfRoute,
  getApiV1SelfLogsRoute,
  getApiV1SelfRoute,
  getApiV1SelfSubscriptionsRoute,
  getApiV1SelfTwoFactorTokenRoute,
  getApiV1SelfUpdateVerifyTokenRoute,
  postApiV1RecoverRoute,
  postApiV1RecoverVerifyTokenRoute,
  postApiV1SelfTwoFactorVerifyRoute,
  postApiV1SelfUpdateRoute,
  putApiV1SelfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const selfHandler = app
  .openapi(postApiV1RecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecoverVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfTwoFactorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfTwoFactorVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfUpdateVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
