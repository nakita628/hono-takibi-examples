import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAnythingCircularRoute, postAnythingCircularRoute } from '../routes'

const app = new OpenAPIHono()

export const circularReferencesHandler = app
  .openapi(postAnythingCircularRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingCircularRoute, (c) => {
    throw new Error('Not implemented')
  })
