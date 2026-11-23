import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePasskeysIdRoute,
  getPasskeysIdRoute,
  getPasskeysRoute,
  patchPasskeysIdRoute,
  postPasskeysAuthenticationFinishRoute,
  postPasskeysAuthenticationStartRoute,
  postPasskeysRegistrationFinishRoute,
  postPasskeysRegistrationStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const passkeysHandler = app
  .openapi(getPasskeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasskeysAuthenticationFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasskeysAuthenticationStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasskeysRegistrationFinishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasskeysRegistrationStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePasskeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPasskeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPasskeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
