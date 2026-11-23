import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcitystandardRoute } from '../routes'

const app = new OpenAPIHono()

export const getcitystandardHandler = app.openapi(getGetcitystandardRoute, (c) => {
  throw new Error('Not implemented')
})
