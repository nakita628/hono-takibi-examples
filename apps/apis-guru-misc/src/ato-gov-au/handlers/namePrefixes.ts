import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassificationsNamePrefixesRoute } from '../routes'

const app = new OpenAPIHono()

export const namePrefixesHandler = app.openapi(getClassificationsNamePrefixesRoute, (c) => {
  throw new Error('Not implemented')
})
