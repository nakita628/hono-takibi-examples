import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TeamCompanyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const teamCompanyIdHandler = app.openapi(postV1TeamCompanyIdRoute, (c) => {
  throw new Error('Not implemented')
})
