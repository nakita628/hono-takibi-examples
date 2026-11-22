import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpecificationOpenapiv3Route } from '../routes'

const app = new OpenAPIHono()

export const specificationOpenapiv3Handler = app.openapi(getSpecificationOpenapiv3Route, (c) => {
  throw new Error('Not implemented')
})
