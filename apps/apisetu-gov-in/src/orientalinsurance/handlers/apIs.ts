import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCripcCertificateRoute,
  postCvipcCertificateRoute,
  postEgipcCertificateRoute,
  postHlipcCertificateRoute,
  postHmipcCertificateRoute,
  postMripcCertificateRoute,
  postPodocCertificateRoute,
  postPripcCertificateRoute,
  postTripcCertificateRoute,
  postTwipcCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCvipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEgipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHlipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHmipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPodocCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTripcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTwipcCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
