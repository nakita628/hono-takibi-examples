import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpCalendarImportRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarImportHandler = app.openapi(postOcsV2PhpCalendarImportRoute, (c) => {
  throw new Error('Not implemented')
})
