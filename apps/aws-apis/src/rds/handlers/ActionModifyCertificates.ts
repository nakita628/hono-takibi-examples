import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyCertificatesRoute, postActionModifyCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyCertificatesHandler = app
  .openapi(getActionModifyCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
