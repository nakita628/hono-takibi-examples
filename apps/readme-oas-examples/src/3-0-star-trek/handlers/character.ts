import { OpenAPIHono } from '@hono/zod-openapi'
import { getCharacterRoute, getCharacterSearchRoute, postCharacterSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const characterHandler = app
  .openapi(getCharacterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCharacterSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCharacterSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
