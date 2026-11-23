import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthenticationProvidersIdRoute,
  getAuthenticationProvidersIdRoute,
  getAuthenticationProvidersRoute,
  patchAuthenticationProvidersIdRoute,
  postAuthenticationProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationProvidersHandler = app
  .openapi(getAuthenticationProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticationProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticationProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticationProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
