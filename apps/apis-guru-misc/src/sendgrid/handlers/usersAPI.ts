import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserAccountRoute,
  getUserCreditsRoute,
  getUserEmailRoute,
  getUserProfileRoute,
  getUserUsernameRoute,
  patchUserProfileRoute,
  putUserEmailRoute,
  putUserPasswordRoute,
  putUserUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersAPIHandler = app
  .openapi(getUserAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
