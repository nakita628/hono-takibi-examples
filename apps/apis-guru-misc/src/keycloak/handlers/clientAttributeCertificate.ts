import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRealmClientsIdCertificatesAttrRoute,
  postRealmClientsIdCertificatesAttrDownloadRoute,
  postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute,
  postRealmClientsIdCertificatesAttrGenerateRoute,
  postRealmClientsIdCertificatesAttrUploadCertificateRoute,
  postRealmClientsIdCertificatesAttrUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientAttributeCertificateHandler = app
  .openapi(getRealmClientsIdCertificatesAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdCertificatesAttrUploadCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
