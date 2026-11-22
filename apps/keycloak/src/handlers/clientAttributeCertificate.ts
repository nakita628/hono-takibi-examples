import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminRealmsRealmClientsClientUuidCertificatesAttrRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRoute,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRoute,
  postAdminRealmsRealmIdentityProviderUploadCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientAttributeCertificateHandler = app
  .openapi(getAdminRealmsRealmClientsClientUuidCertificatesAttrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmIdentityProviderUploadCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
