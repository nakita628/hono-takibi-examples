import { OpenAPIHono } from '@hono/zod-openapi'
import { getPeopleRoute } from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app.openapi(getPeopleRoute, (c) => {
  throw new Error('Not implemented')
})
