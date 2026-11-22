import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersUsersUserIdIntegrationsApplicationIdRoute,
  deleteUserPhotoRoute,
  getProvidersEmployersUsersUserIdIntegrationsApplicationIdLogoRoute,
  getProvidersEmployersUsersUserIdIntegrationsRoute,
  getUserPhotoRoute,
  getUserRoute,
  getUsersIntegrationsRoute,
  postUserPhotoRoute,
  putProvidersEmployersUsersUserIdIntegrationsApplicationIdRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getProvidersEmployersUsersUserIdIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersUsersUserIdIntegrationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersUsersUserIdIntegrationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersUsersUserIdIntegrationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
