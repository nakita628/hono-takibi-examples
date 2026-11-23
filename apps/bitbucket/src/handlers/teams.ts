import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  getTeamsUsernamePipelinesConfigVariablesRoute,
  getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
  getTeamsUsernameSearchCodeRoute,
  postTeamsUsernamePipelinesConfigVariablesRoute,
  putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsUsernamePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsUsernamePipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsUsernamePipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsUsernameSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
