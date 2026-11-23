import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveListenerCertificatesRoute,
  postActionRemoveListenerCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveListenerCertificatesHandler = app
  .openapi(getActionRemoveListenerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveListenerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
