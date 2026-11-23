import { OpenAPIHono } from '@hono/zod-openapi'
import { getPeopleIdRoute, getPeopleRoute } from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(getPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
