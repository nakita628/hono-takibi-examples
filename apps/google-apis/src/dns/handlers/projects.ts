import { OpenAPIHono } from '@hono/zod-openapi'
import { getDnsV2ProjectsProjectLocationsLocationRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(getDnsV2ProjectsProjectLocationsLocationRoute, (c) => {
  throw new Error('Not implemented')
})
