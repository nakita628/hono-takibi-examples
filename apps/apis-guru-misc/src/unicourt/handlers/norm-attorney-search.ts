import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormAttorneySearchNormAttorneySearchIdRoute,
  getNormAttorneySearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const normAttorneySearchHandler = app
  .openapi(getNormAttorneySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneySearchNormAttorneySearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
