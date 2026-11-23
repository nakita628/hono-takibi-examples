import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteContactContactIdRoute, getContactContactIdRoute, postContactRoute } from '../routes'

const app = new OpenAPIHono()

export const contactHandler = app
  .openapi(deleteContactContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactRoute, (c) => {
    throw new Error('Not implemented')
  })
