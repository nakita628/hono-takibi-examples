import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProjectsProjectTiersRoute } from '../routes'

const app = new OpenAPIHono()

export const tiersHandler = app.openapi(getV1ProjectsProjectTiersRoute, (c) => {
  throw new Error('Not implemented')
})
