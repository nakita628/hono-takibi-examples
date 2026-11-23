import { OpenAPIHono } from '@hono/zod-openapi'
import { getMostemailedSectionTimePeriodJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const mostemailedHandler = app.openapi(getMostemailedSectionTimePeriodJsonRoute, (c) => {
  throw new Error('Not implemented')
})
