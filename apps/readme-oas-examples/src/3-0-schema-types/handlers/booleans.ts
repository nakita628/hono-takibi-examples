import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAnythingBooleansRoute, postAnythingBooleansRoute } from '../routes'

const app = new OpenAPIHono()

export const booleansHandler = app
  .openapi(postAnythingBooleansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAnythingBooleansRoute, (c) => {
    throw new Error('Not implemented')
  })
