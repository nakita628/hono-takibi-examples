import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1ArtistEditorRoute, putApiV1ArtistEditorRoute } from '../routes'

const app = new OpenAPIHono()

export const artistEditorHandler = app
  .openapi(putApiV1ArtistEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ArtistEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
