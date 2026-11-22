import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsTeams202609TeamIdMembersUserIdRoute,
  deleteSettingsTeams202609TeamIdRoute,
  getSettingsTeams202609Route,
  getSettingsTeams202609TeamIdMembersRoute,
  getSettingsTeams202609TeamIdRoute,
  patchSettingsTeams202609TeamIdRoute,
  postSettingsTeams202609Route,
  postSettingsTeams202609TeamIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getSettingsTeams202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTeams202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsTeams202609TeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsTeams202609TeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsTeams202609TeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsTeams202609TeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTeams202609TeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsTeams202609TeamIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
