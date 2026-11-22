import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChcerCertificateRoute,
  postDncerCertificateRoute,
  postDpcerCertificateRoute,
  postFslcsCertificateRoute,
  postGrredCertificateRoute,
  postIncerCertificateRoute,
  postIsoalCertificateRoute,
  postLvcerCertificateRoute,
  postMalcsCertificateRoute,
  postMpkbyCertificateRoute,
  postObcerCertificateRoute,
  postRitinCertificateRoute,
  postRmcerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
  postSmcerCertificateRoute,
  postSslcsCertificateRoute,
  postVrwmiCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postChcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFslcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrredCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIsoalCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLvcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMalcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMpkbyCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRitinCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSslcsCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVrwmiCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
