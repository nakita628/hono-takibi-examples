import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMemberJoiningRulesIdRoute,
  getMemberJoiningRulesIdRoute,
  getMemberJoiningRulesRoute,
  patchMemberJoiningRulesIdRoute,
  postMemberJoiningRulesRoute,
  putMemberJoiningRulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memberJoiningRulesHandler = app
  .openapi(getMemberJoiningRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMemberJoiningRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMemberJoiningRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemberJoiningRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMemberJoiningRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMemberJoiningRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
