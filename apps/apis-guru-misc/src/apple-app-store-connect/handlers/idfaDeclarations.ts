import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IdfaDeclarationsIdRoute,
  patchV1IdfaDeclarationsIdRoute,
  postV1IdfaDeclarationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const idfaDeclarationsHandler = app
  .openapi(postV1IdfaDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IdfaDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1IdfaDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
