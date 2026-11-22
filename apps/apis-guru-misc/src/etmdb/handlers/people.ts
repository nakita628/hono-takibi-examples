import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1PeopleSearchUserRoute } from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app.openapi(getApiV1PeopleSearchUserRoute, (c) => {
  throw new Error('Not implemented')
})
