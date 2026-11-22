import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postHpcerCertificateRoute,
  postHscerCertificateRoute,
  postHsmgrCertificateRoute,
  postNchscCertificateRoute,
  postNctscCertificateRoute,
  postNsescCertificateRoute,
  postNstscCertificateRoute,
  postNtltrCertificateRoute,
  postNtmksCertificateRoute,
  postSkhscCertificateRoute,
  postSktscCertificateRoute,
  postSpcerCertificateRoute,
  postSscerCertificateRoute,
  postSsmgrCertificateRoute,
  postTetcrCertificateRoute,
  postTetmsCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postHpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHsmgrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNchscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNctscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNsescCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNstscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtltrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtmksCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkhscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSktscCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsmgrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTetcrCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTetmsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
