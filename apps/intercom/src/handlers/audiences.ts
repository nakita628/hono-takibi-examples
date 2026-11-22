import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAudiencesIdRoute,
  getAudiencesIdRoute,
  getAudiencesRoute,
  postAudiencesRoute,
  putAudiencesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audiencesHandler = app
  .openapi(getAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAudiencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAudiencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
