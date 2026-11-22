import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute,
  getApiPublicSkillsFilesContentRoute,
  getApiPublicSkillsRoute,
  getApiPublicSkillsSkillNameRoute,
  patchApiPublicSkillsSkillNameRoute,
  patchApiPublicSkillsSkillNameVersionsSkillVersionRoute,
  postApiPublicSkillsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skillsHandler = app
  .openapi(getApiPublicSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicSkillsSkillNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicSkillsSkillNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicSkillsFilesContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicSkillsSkillNameVersionsSkillVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicSkillsSkillNameVersionsSkillVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
