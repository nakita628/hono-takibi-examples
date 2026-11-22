import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AudiencesAudienceKeyRoute,
  getV1AudiencesAudienceKeyRoute,
  getV1AudiencesRoute,
  putV1AudiencesAudienceKeyRoute,
  putV1AudiencesAudienceKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audiencesHandler = app
  .openapi(getV1AudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AudiencesAudienceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudiencesAudienceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AudiencesAudienceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AudiencesAudienceKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
