import { OpenAPIHono } from '@hono/zod-openapi'
import { getCongressionalRecordRoute } from '../routes'

const app = new OpenAPIHono()

export const congressionalRecordHandler = app.openapi(getCongressionalRecordRoute, (c) => {
  throw new Error('Not implemented')
})
