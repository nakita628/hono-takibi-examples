import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEpfscCertificateRoute,
  postPecerCertificateRoute,
  postUncrdCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postEpfscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPecerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUncrdCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
