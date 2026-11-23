import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAudiencesIdRoute,
  getAudiencesIdRoute,
  getAudiencesRoute,
  postAudiencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audiencesHandler = app
  .openapi(postAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAudiencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
