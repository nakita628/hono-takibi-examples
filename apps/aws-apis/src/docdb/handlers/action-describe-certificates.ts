import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeCertificatesRoute, postActionDescribeCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCertificatesHandler = app
  .openapi(getActionDescribeCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
