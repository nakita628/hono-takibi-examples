import { OpenAPIHono } from '@hono/zod-openapi'
import { getSingleTypeSingleExampleRoute } from '../routes'

const app = new OpenAPIHono()

export const singleTypeSingleExampleHandler = app.openapi(getSingleTypeSingleExampleRoute, (c) => {
  throw new Error('Not implemented')
})
