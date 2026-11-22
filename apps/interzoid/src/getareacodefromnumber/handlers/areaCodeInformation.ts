import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetareacodefromnumberRoute } from '../routes'

const app = new OpenAPIHono()

export const areaCodeInformationHandler = app.openapi(getGetareacodefromnumberRoute, (c) => {
  throw new Error('Not implemented')
})
