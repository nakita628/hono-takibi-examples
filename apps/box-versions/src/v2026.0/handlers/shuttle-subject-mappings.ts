import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  getShuttleSubjectMappingsRoute,
  getShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  postShuttleSubjectMappingsRoute,
  putShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttleSubjectMappingsHandler = app
  .openapi(getShuttleSubjectMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSubjectMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleSubjectMappingsShuttleSubjectMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleSubjectMappingsShuttleSubjectMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
