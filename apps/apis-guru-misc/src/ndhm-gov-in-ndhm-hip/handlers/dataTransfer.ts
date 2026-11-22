import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05HealthInformationTransferRoute } from '../routes'

const app = new OpenAPIHono()

export const dataTransferHandler = app.openapi(postV05HealthInformationTransferRoute, (c) => {
  throw new Error('Not implemented')
})
