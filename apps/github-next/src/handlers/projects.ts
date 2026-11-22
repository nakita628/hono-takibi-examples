import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute,
  deleteUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute,
  getOrgsOrgProjectsV2ProjectNumberFieldsFieldIdRoute,
  getOrgsOrgProjectsV2ProjectNumberFieldsRoute,
  getOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute,
  getOrgsOrgProjectsV2ProjectNumberItemsRoute,
  getOrgsOrgProjectsV2ProjectNumberRoute,
  getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItemsRoute,
  getOrgsOrgProjectsV2Route,
  getUsersUsernameProjectsV2ProjectNumberFieldsFieldIdRoute,
  getUsersUsernameProjectsV2ProjectNumberFieldsRoute,
  getUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute,
  getUsersUsernameProjectsV2ProjectNumberItemsRoute,
  getUsersUsernameProjectsV2ProjectNumberRoute,
  getUsersUsernameProjectsV2ProjectNumberViewsViewNumberItemsRoute,
  getUsersUsernameProjectsV2Route,
  patchOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute,
  patchUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute,
  postOrgsOrgProjectsV2ProjectNumberDraftsRoute,
  postOrgsOrgProjectsV2ProjectNumberFieldsRoute,
  postOrgsOrgProjectsV2ProjectNumberItemsRoute,
  postOrgsOrgProjectsV2ProjectNumberViewsRoute,
  postUsersUserIdProjectsV2ProjectNumberViewsRoute,
  postUsersUsernameProjectsV2ProjectNumberFieldsRoute,
  postUsersUsernameProjectsV2ProjectNumberItemsRoute,
  postUserUserIdProjectsV2ProjectNumberDraftsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getOrgsOrgProjectsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgProjectsV2ProjectNumberViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgProjectsV2ProjectNumberViewsViewNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdProjectsV2ProjectNumberDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdProjectsV2ProjectNumberViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameProjectsV2ProjectNumberFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernameProjectsV2ProjectNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernameProjectsV2ProjectNumberItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameProjectsV2ProjectNumberViewsViewNumberItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
