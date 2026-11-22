import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2ImportsTicketsCreateManyRoute, postApiV2ImportsTicketsRoute } from '../routes'

const app = new OpenAPIHono()

export const ticketImportHandler = app
  .openapi(postApiV2ImportsTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ImportsTicketsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
