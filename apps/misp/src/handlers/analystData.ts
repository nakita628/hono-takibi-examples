import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalystDataDeleteAnalystTypeAnalystDataIDRoute,
  getAnalystDataIndexAnalystTypeRoute,
  getAnalystDataViewAnalystTypeAnalystDataIDRoute,
  postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRoute,
  postAnalystDataEditAnalystTypeAnalystDataIDRoute,
  postAnalystDataIndexMinimalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analystDataHandler = app
  .openapi(postAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalystDataEditAnalystTypeAnalystDataIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalystDataDeleteAnalystTypeAnalystDataIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalystDataIndexAnalystTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalystDataViewAnalystTypeAnalystDataIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalystDataIndexMinimalRoute, (c) => {
    throw new Error('Not implemented')
  })
