import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBrlcsCertificateRoute,
  postDpcerCertificateRoute,
  postFmcerCertificateRoute,
  postIncerCertificateRoute,
  postLccepCertificateRoute,
  postNdcerCertificateRoute,
  postObcerCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
  postRucerCertificateRoute,
  postSicrdCertificateRoute,
  postVlcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postBrlcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLccepCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNdcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRucerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSicrdCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVlcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
