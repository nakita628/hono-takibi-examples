import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChcerCertificateRoute,
  postDmcerCertificateRoute,
  postDpcerCertificateRoute,
  postIncerCertificateRoute,
  postRscerCertificateRoute,
  postShcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postChcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
