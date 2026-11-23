import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesCertificateIdRoute,
  deleteCertificatesCertificateIdSnisSniNameOrIdRoute,
  getCertificatesCertificateIdRoute,
  getCertificatesCertificateIdSnisSniNameOrIdRoute,
  getCertificatesCertificateNameOrIdSnisRoute,
  getCertificatesRoute,
  patchCertificatesCertificateIdRoute,
  patchCertificatesCertificateIdSnisSniNameOrIdRoute,
  postCertificatesCertificateNameOrIdSnisRoute,
  postCertificatesRoute,
  putCertificatesCertificateIdRoute,
  putCertificatesCertificateIdSnisSniNameOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificatesHandler = app
  .openapi(getCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCertificatesCertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesCertificateNameOrIdSnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesCertificateNameOrIdSnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCertificatesCertificateIdSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesCertificateIdSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCertificatesCertificateIdSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCertificatesCertificateIdSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
