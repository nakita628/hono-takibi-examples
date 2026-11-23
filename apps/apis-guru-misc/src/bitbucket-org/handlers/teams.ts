import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  getTeamsUsernamePipelinesConfigVariablesIndexRoute,
  getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  getTeamsUsernameSearchCodeRoute,
  postTeamsUsernamePipelinesConfigVariablesIndexRoute,
  putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsUsernamePipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsUsernamePipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernameSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
