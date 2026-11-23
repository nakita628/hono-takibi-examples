import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListServerCertificateTagsRoute,
  postActionListServerCertificateTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListServerCertificateTagsHandler = app
  .openapi(getActionListServerCertificateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListServerCertificateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
