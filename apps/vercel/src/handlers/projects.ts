import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProjectsIdOrNameTransferRequestRoute,
  putProjectsTransferRequestCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postProjectsIdOrNameTransferRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsTransferRequestCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
