import { OpenAPIHono } from '@hono/zod-openapi'
import { postAgcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const agcerHandler = app.openapi(postAgcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
