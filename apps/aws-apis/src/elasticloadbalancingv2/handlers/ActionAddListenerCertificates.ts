import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddListenerCertificatesRoute,
  postActionAddListenerCertificatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAddListenerCertificatesHandler = app
  .openapi(getActionAddListenerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddListenerCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
