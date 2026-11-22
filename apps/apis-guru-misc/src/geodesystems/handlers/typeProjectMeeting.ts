import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectMeetingRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectMeetingHandler = app.openapi(
  getRepositorySearchTypeProjectMeetingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
