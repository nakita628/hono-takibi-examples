import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmcerCertificateRoute,
  postCncerCertificateRoute,
  postCtcerCertificateRoute,
  postDmcerCertificateRoute,
  postDpcerCertificateRoute,
  postDscerCertificateRoute,
  postFmcerCertificateRoute,
  postIdcerCertificateRoute,
  postImcerCertificateRoute,
  postIncerCertificateRoute,
  postLfcerCertificateRoute,
  postLhcerCertificateRoute,
  postLocerCertificateRoute,
  postMncerCertificateRoute,
  postNrcerCertificateRoute,
  postNtcerCertificateRoute,
  postOscerCertificateRoute,
  postPncerCertificateRoute,
  postPscerCertificateRoute,
  postRlcerCertificateRoute,
  postRscerCertificateRoute,
  postSlcerCertificateRoute,
  postVlcerCertificateRoute,
  postWwcerCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(postCmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDpcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFmcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLfcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLhcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNrcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNtcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPncerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRlcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRscerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSlcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVlcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWwcerCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
