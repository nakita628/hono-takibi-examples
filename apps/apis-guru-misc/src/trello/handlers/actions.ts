import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsIdActionRoute,
  getActionsIdActionBoardFieldRoute,
  getActionsIdActionBoardRoute,
  getActionsIdActionCardFieldRoute,
  getActionsIdActionCardRoute,
  getActionsIdActionDisplayRoute,
  getActionsIdActionEntitiesRoute,
  getActionsIdActionFieldRoute,
  getActionsIdActionListFieldRoute,
  getActionsIdActionListRoute,
  getActionsIdActionMemberCreatorFieldRoute,
  getActionsIdActionMemberCreatorRoute,
  getActionsIdActionMemberFieldRoute,
  getActionsIdActionMemberRoute,
  getActionsIdActionOrganizationFieldRoute,
  getActionsIdActionOrganizationRoute,
  getActionsIdActionRoute,
  putActionsIdActionRoute,
  putActionsIdActionTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(deleteActionsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActionsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionCardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionListFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionMemberFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionMemberCreatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionMemberCreatorFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionOrganizationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActionsIdActionTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
