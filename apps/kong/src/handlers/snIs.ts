import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCertificatesCertificateIdSnisSniNameOrIdRoute,
  deleteSnisSniNameOrIdRoute,
  getCertificatesCertificateIdSnisSniNameOrIdRoute,
  getCertificatesCertificateNameOrIdSnisRoute,
  getSnisRoute,
  getSnisSniNameOrIdRoute,
  patchCertificatesCertificateIdSnisSniNameOrIdRoute,
  patchSnisSniNameOrIdRoute,
  postCertificatesCertificateNameOrIdSnisRoute,
  postSnisRoute,
  putCertificatesCertificateIdSnisSniNameOrIdRoute,
  putSnisSniNameOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snIsHandler = app
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
  .openapi(getSnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnisSniNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
