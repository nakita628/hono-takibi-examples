import { OpenAPIHono } from '@hono/zod-openapi'
import { getFactFodCategoriesRoute, getFactFodRoute } from '../routes'

const app = new OpenAPIHono()

export const factOfTheDayHandler = app
  .openapi(getFactFodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactFodCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
