import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeImageWebcamRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeImageWebcamHandler = app.openapi(
  getRepositorySearchTypeTypeImageWebcamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
