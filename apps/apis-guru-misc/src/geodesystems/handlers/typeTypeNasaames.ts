import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeNasaamesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeNasaamesHandler = app.openapi(
  getRepositorySearchTypeTypeNasaamesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
