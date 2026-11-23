import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateWebsiteCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const disassociateWebsiteCertificateAuthorityHandler = app.openapi(
  postDisassociateWebsiteCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
