import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AgreementsRoute } from '../routes'

const app = new OpenAPIHono()

export const agreementsHandler = app.openapi(postV1AgreementsRoute, (c) => {
  throw new Error('Not implemented')
})
