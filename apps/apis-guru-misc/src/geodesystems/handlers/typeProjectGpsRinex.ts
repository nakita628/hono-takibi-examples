import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectGpsRinexRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectGpsRinexHandler = app.openapi(
  getRepositorySearchTypeProjectGpsRinexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
