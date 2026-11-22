import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationActionsActionsIdRoute,
  deleteAutomationActionsActionsIdServicesServiceIdRoute,
  deleteAutomationActionsActionsIdTeamsTeamIdRoute,
  deleteAutomationActionsRunnersIdRoute,
  deleteAutomationActionsRunnersIdTeamsTeamIdRoute,
  getAutomationActionsActionsIdRoute,
  getAutomationActionsActionsIdServicesRoute,
  getAutomationActionsActionsIdServicesServiceIdRoute,
  getAutomationActionsActionsIdTeamsRoute,
  getAutomationActionsActionsIdTeamsTeamIdRoute,
  getAutomationActionsActionsRoute,
  getAutomationActionsInvocationsIdRoute,
  getAutomationActionsInvocationsRoute,
  getAutomationActionsRunnersIdRoute,
  getAutomationActionsRunnersIdTeamsRoute,
  getAutomationActionsRunnersIdTeamsTeamIdRoute,
  getAutomationActionsRunnersRoute,
  postAutomationActionsActionsIdInvocationsRoute,
  postAutomationActionsActionsIdServicesRoute,
  postAutomationActionsActionsIdTeamsRoute,
  postAutomationActionsActionsRoute,
  postAutomationActionsRunnersIdTeamsRoute,
  postAutomationActionsRunnersRoute,
  putAutomationActionsActionsIdRoute,
  putAutomationActionsRunnersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationActionsHandler = app
  .openapi(postAutomationActionsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActionsActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationActionsActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsActionsIdInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsActionsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsActionsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsActionsIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActionsActionsIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsActionsIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsActionsIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActionsActionsIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsActionsIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsInvocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationActionsRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActionsRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsRunnersIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsRunnersIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActionsRunnersIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActionsRunnersIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
