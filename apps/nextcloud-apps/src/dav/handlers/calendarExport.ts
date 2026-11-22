import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpCalendarExportRoute } from '../routes'

const app = new OpenAPIHono()

export const calendarExportHandler = app.openapi(postOcsV2PhpCalendarExportRoute, (c) => {
  throw new Error('Not implemented')
})
