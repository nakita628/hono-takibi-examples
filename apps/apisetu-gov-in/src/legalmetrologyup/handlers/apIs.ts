import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDelcsCertificateRoute,
  postMalcsCertificateRoute,
  postPalcsCertificateRoute,
  postRelcsCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postDelcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMalcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPalcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRelcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
