import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2alpha1WorkersIdCheckInRoute } from '../routes'

const app = new OpenAPIHono()

export const workersHandler = app.openapi(postV2alpha1WorkersIdCheckInRoute, (c) => {
  throw new Error('Not implemented')
})
