import { OpenAPIHono } from '@hono/zod-openapi'
import { getPeopleGeoRoute } from '../routes'

const app = new OpenAPIHono()

export const peopleGeoHandler = app.openapi(getPeopleGeoRoute, (c) => {
  throw new Error('Not implemented')
})
