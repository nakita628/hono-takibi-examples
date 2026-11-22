import { OpenAPIHono } from '@hono/zod-openapi'
import { postArchiveWaveRoute } from '../routes'

const app = new OpenAPIHono()

export const ArchiveWaveHandler = app.openapi(postArchiveWaveRoute, (c) => {
  throw new Error('Not implemented')
})
