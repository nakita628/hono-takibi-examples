import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAgcerCertificateRoute,
  postBacerCertificateRoute,
  postBhcerCertificateRoute,
  postChcerCertificateRoute,
  postDccerCertificateRoute,
  postFfcerCertificateRoute,
  postIncerCertificateRoute,
  postLhcerCertificateRoute,
  postMncerCertificateRoute,
  postObcerCertificateRoute,
  postPsprtCertificateRoute,
  postRacerCertificateRoute,
  postRmcerCertificateRoute,
  postShcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postAgcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBacerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDccerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFfcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPsprtCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRacerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
