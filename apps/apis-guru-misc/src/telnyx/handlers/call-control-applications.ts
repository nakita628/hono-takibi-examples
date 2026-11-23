import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCallControlApplicationsIdRoute,
  getCallControlApplicationsIdRoute,
  getCallControlApplicationsRoute,
  patchCallControlApplicationsIdRoute,
  postCallControlApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callControlApplicationsHandler = app
  .openapi(getCallControlApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallControlApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCallControlApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallControlApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCallControlApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
