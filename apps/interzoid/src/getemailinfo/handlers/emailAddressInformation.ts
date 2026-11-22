import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetemailinfoRoute } from '../routes'

const app = new OpenAPIHono()

export const emailAddressInformationHandler = app.openapi(getGetemailinfoRoute, (c) => {
  throw new Error('Not implemented')
})
