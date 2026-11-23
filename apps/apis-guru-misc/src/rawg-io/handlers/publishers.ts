import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublishersIdRoute, getPublishersRoute } from '../routes'

const app = new OpenAPIHono()

export const publishersHandler = app
  .openapi(getPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublishersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
