import { OpenAPIHono } from '@hono/zod-openapi'
import { getCampagneRoute } from '../routes'

const app = new OpenAPIHono()

export const campagneHandler = app.openapi(getCampagneRoute, (c) => {
  throw new Error('Not implemented')
})
