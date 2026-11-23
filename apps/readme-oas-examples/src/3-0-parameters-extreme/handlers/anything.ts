import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingAllParamTypesIdId2Route } from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app.openapi(postAnythingAllParamTypesIdId2Route, (c) => {
  throw new Error('Not implemented')
})
