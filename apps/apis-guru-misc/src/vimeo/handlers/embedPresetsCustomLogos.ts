import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeCustomlogosLogoIdRoute,
  getMeCustomlogosRoute,
  getUsersUserIdCustomlogosLogoIdRoute,
  getUsersUserIdCustomlogosRoute,
  postMeCustomlogosRoute,
  postUsersUserIdCustomlogosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const embedPresetsCustomLogosHandler = app
  .openapi(getMeCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCustomlogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCustomlogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCustomlogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
