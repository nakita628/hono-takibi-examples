import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsIdRoute, getClassificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const classificationHandler = app
  .openapi(getClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
