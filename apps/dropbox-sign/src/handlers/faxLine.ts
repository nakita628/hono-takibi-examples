import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFaxLineRoute,
  getFaxLineAreaCodesRoute,
  getFaxLineListRoute,
  getFaxLineRoute,
  postFaxLineCreateRoute,
  putFaxLineAddUserRoute,
  putFaxLineRemoveUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const faxLineHandler = app
  .openapi(putFaxLineAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxLineAreaCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxLineCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxLineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFaxLineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxLineListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFaxLineRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
