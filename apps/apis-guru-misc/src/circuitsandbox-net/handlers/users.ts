import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersLabelsLabelIdRoute,
  getUsersEmailAddressGetUserByEmailRoute,
  getUsersIdPresenceRoute,
  getUsersIdRoute,
  getUsersLabelsRoute,
  getUsersListRoute,
  getUsersPresenceRoute,
  getUsersProfileRoute,
  getUsersRoute,
  getUsersSupportinfoRoute,
  postUsersLabelsRoute,
  putUsersPresenceRoute,
  putUsersProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSupportinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersEmailAddressGetUserByEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
