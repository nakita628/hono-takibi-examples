import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFaxFaxIdRoute,
  getFaxFaxIdRoute,
  getFaxFilesFaxIdRoute,
  getFaxListRoute,
  postFaxSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const faxHandler = app
  .openapi(getFaxFaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFaxFaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxFilesFaxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxSendRoute, (c) => {
    throw new Error('Not implemented')
  })
