import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1PublicationTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const publicationTypesHandler = app.openapi(getApiV1PublicationTypesRoute, (c) => {
  throw new Error('Not implemented')
})
