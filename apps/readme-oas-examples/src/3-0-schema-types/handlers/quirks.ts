import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAnythingQuirksPolymorphismRoute,
  postAnythingQuirksPolymorphismRoute,
  postAnythingQuirksRoute,
  putAnythingQuirksPolymorphismRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quirksHandler = app
  .openapi(postAnythingQuirksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingQuirksPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingQuirksPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingQuirksPolymorphismRoute, (c) => {
    throw new Error('Not implemented')
  })
