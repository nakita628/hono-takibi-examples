import { OpenAPIHono } from '@hono/zod-openapi'
import { postCertificateRegisterNoCaRoute, postCertificateRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const certificateHandler = app
  .openapi(postCertificateRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificateRegisterNoCaRoute, (c) => {
    throw new Error('Not implemented')
  })
