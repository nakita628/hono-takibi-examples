import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTexmlApplicationsIdRoute,
  getTexmlApplicationsIdRoute,
  getTexmlApplicationsRoute,
  patchTexmlApplicationsIdRoute,
  postTexmlApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teXMLApplicationsHandler = app
  .openapi(getTexmlApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTexmlApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTexmlApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTexmlApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTexmlApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
