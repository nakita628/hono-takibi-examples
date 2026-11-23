import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetemailinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const getemailinfoHandler = app.openapi(getGetemailinfoRoute, (c) => {
  throw new Error('Not implemented')
})
