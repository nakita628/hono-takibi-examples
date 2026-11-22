import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDuplicatesIdRoute,
  deleteDuplicatesRoute,
  getDuplicatesRoute,
  postDuplicatesResolveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const duplicatesHandler = app
  .openapi(deleteDuplicatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDuplicatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDuplicatesResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDuplicatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
