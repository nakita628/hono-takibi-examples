import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRecruitingGroupsRoute,
  getRecruitingPlayersRoute,
  getRecruitingTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recruitingHandler = app
  .openapi(getRecruitingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecruitingPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecruitingTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
