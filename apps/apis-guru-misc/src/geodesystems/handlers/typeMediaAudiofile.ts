import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMediaAudiofileRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMediaAudiofileHandler = app.openapi(
  getRepositorySearchTypeMediaAudiofileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
