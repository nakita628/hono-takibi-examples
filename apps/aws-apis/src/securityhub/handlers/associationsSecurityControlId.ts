import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssociationsSecurityControlIdRoute } from '../routes'

const app = new OpenAPIHono()

export const associationsSecurityControlIdHandler = app.openapi(
  getAssociationsSecurityControlIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
