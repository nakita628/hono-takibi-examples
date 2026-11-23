import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteLegalArrangementsRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteLegalArrangementsHandler = app.openapi(postDeleteLegalArrangementsRoute, (c) => {
  throw new Error('Not implemented')
})
