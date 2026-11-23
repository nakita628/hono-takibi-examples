import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcitymatchRoute } from '../routes'

const app = new OpenAPIHono()

export const getcitymatchHandler = app.openapi(getGetcitymatchRoute, (c) => {
  throw new Error('Not implemented')
})
