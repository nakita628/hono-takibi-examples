import { OpenAPIHono } from '@hono/zod-openapi'
import { getSqlV1beta4ProjectsProjectTiersRoute } from '../routes'

const app = new OpenAPIHono()

export const tiersHandler = app.openapi(getSqlV1beta4ProjectsProjectTiersRoute, (c) => {
  throw new Error('Not implemented')
})
