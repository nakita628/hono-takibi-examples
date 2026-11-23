import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCacertificateCaCertificateIdRoute,
  getCacertificateCaCertificateIdRoute,
  postCacertificateRoute,
  putCacertificateCaCertificateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cacertificateHandler = app
  .openapi(deleteCacertificateCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCacertificateCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCacertificateCaCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCacertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
