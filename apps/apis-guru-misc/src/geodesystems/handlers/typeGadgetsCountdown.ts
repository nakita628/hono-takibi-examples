import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGadgetsCountdownRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGadgetsCountdownHandler = app.openapi(
  getRepositorySearchTypeGadgetsCountdownRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
