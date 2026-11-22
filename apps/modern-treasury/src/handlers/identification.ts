import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiIdentificationsIdRoute,
  patchApiIdentificationsIdRoute,
  postApiIdentificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identificationHandler = app
  .openapi(postApiIdentificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIdentificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
