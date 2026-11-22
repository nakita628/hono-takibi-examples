import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMeLibraryRoute, getMeLibraryContainsRoute, putMeLibraryRoute } from '../routes'

const app = new OpenAPIHono()

export const libraryHandler = app
  .openapi(putMeLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLibraryContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
