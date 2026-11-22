import { OpenAPIHono } from '@hono/zod-openapi'
import { getAreacodesRoute, getNumbersAreacodesRoute } from '../routes'

const app = new OpenAPIHono()

export const areacodesHandler = app
  .openapi(getAreacodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersAreacodesRoute, (c) => {
    throw new Error('Not implemented')
  })
