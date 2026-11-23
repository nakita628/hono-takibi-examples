import { OpenAPIHono } from '@hono/zod-openapi'
import { getListOrganismsRoute } from '../routes'

const app = new OpenAPIHono()

export const listOrganismsHandler = app.openapi(getListOrganismsRoute, (c) => {
  throw new Error('Not implemented')
})
