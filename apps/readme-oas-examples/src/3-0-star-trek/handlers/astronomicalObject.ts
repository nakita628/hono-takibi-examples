import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAstronomicalObjectRoute,
  getAstronomicalObjectSearchRoute,
  postAstronomicalObjectSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const astronomicalObjectHandler = app
  .openapi(getAstronomicalObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAstronomicalObjectSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAstronomicalObjectSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
