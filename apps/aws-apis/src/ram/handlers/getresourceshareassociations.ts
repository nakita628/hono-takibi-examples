import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetresourceshareassociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const getresourceshareassociationsHandler = app.openapi(
  postGetresourceshareassociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
