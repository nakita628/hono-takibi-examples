import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersUsersUserIdEmployersRoute } from '../routes'

const app = new OpenAPIHono()

export const linkedEmployersHandler = app.openapi(
  getProvidersEmployersUsersUserIdEmployersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
