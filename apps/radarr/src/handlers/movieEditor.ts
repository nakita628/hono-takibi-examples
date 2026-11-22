import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV3MovieEditorRoute, putApiV3MovieEditorRoute } from '../routes'

const app = new OpenAPIHono()

export const movieEditorHandler = app
  .openapi(putApiV3MovieEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3MovieEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
