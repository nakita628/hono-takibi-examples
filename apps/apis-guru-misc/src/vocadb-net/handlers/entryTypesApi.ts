import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiEntryTypesEntryTypeSubTypeTagRoute } from '../routes'

const app = new OpenAPIHono()

export const entryTypesApiHandler = app.openapi(getApiEntryTypesEntryTypeSubTypeTagRoute, (c) => {
  throw new Error('Not implemented')
})
