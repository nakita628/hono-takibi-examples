import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePacerCredentialPacerUserIdRoute,
  getPacerCredentialPacerUserIdRoute,
  getPacerCredentialRoute,
  putPacerCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pacerCredentialAPIHandler = app
  .openapi(getPacerCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPacerCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePacerCredentialPacerUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCredentialPacerUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
