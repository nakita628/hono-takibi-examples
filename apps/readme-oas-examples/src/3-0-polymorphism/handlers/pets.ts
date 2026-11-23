import { OpenAPIHono } from '@hono/zod-openapi'
import { patchPetsRoute } from '../routes'

const app = new OpenAPIHono()

export const petsHandler = app.openapi(patchPetsRoute, (c) => {
  throw new Error('Not implemented')
})
