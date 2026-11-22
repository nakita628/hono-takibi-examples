import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ArchetypesIdRoute,
  getV1ArchetypesIdRoute,
  getV1ArchetypesRoute,
  postV1ArchetypesRoute,
  putV1ArchetypesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const archetypesHandler = app
  .openapi(getV1ArchetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ArchetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ArchetypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ArchetypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ArchetypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
