import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecipeRecipeIdNoteNoteIdRoute,
  getRecipeRecipeIdNoteNoteIdRoute,
  getRecipeRecipeIdNotesRoute,
  postRecipeRecipeIdNoteRoute,
  putRecipeRecipeIdNoteNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const noteHandler = app
  .openapi(postRecipeRecipeIdNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecipeRecipeIdNoteNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdNoteNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeRecipeIdNoteNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeRecipeIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
