import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportPlaybackKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const importPlaybackKeyPairHandler = app.openapi(postImportPlaybackKeyPairRoute, (c) => {
  throw new Error('Not implemented')
})
