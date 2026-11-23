import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgIDMembersUserIDRoute,
  deleteOrgsOrgIDOwnersUserIDRoute,
  deleteOrgsOrgIDRoute,
  getOrgsOrgIDMembersRoute,
  getOrgsOrgIDOwnersRoute,
  getOrgsOrgIDRoute,
  getOrgsOrgIDSecretsRoute,
  getOrgsRoute,
  patchOrgsOrgIDRoute,
  patchOrgsOrgIDSecretsRoute,
  postOrgsOrgIDMembersRoute,
  postOrgsOrgIDOwnersRoute,
  postOrgsOrgIDSecretsDeleteRoute,
  postOrgsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(getOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgIDSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIDSecretsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
