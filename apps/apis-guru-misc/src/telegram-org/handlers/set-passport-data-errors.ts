import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetPassportDataErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const setPassportDataErrorsHandler = app.openapi(postSetPassportDataErrorsRoute, (c) => {
  throw new Error('Not implemented')
})
