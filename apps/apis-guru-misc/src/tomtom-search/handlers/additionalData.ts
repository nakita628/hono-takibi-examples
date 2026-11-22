import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchVersionNumberAdditionalDataExtRoute } from '../routes'

const app = new OpenAPIHono()

export const additionalDataHandler = app.openapi(
  getSearchVersionNumberAdditionalDataExtRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
