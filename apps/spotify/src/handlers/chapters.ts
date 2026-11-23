import { OpenAPIHono } from '@hono/zod-openapi'
import { getChaptersIdRoute, getChaptersRoute } from '../routes'

const app = new OpenAPIHono()

export const chaptersHandler = app
  .openapi(getChaptersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
