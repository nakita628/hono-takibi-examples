import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDCertificatePinnedItemIdRoute,
  getUserUserIDCertificatePinnedItemIdRoute,
  getUserUserIDCertificatePinnedRoute,
  postUserUserIDCertificatePinnedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatePinnedHandler = app
  .openapi(getUserUserIDCertificatePinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDCertificatePinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDCertificatePinnedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCertificatePinnedItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
