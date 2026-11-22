import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersUsersUserIdRoute,
  getProvidersEmployersEmployerIdUsersRoute,
  getProvidersEmployersUsersUserIdRoute,
  patchProvidersEmployersUsersUserIdRoute,
  postProvidersEmployersEmployerIdUsersInviteRoute,
  postProvidersEmployersEmployerIdUsersLinkRoute,
  postProvidersEmployersEmployerIdUsersRoute,
  putProvidersEmployersUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerUserHandler = app
  .openapi(deleteProvidersEmployersUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdUsersLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
