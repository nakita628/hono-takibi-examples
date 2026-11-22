import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentActivitiesQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(getV1beta1ParentActivitiesQueryRoute, (c) => {
  throw new Error('Not implemented')
})
