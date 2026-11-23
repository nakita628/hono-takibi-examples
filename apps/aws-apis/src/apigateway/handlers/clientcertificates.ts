import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClientcertificatesClientcertificateIdRoute,
  getClientcertificatesClientcertificateIdRoute,
  getClientcertificatesRoute,
  patchClientcertificatesClientcertificateIdRoute,
  postClientcertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientcertificatesHandler = app
  .openapi(deleteClientcertificatesClientcertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientcertificatesClientcertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClientcertificatesClientcertificateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientcertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientcertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
