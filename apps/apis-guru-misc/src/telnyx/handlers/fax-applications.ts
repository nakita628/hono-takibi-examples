import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFaxApplicationsIdRoute,
  getFaxApplicationsIdRoute,
  getFaxApplicationsRoute,
  patchFaxApplicationsIdRoute,
  postFaxApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const faxApplicationsHandler = app
  .openapi(getFaxApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFaxApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFaxApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
