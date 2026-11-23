import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSkillsSkillIdRoute,
  deleteSkillsSkillIdVersionsVersionRoute,
  getSkillsRoute,
  getSkillsSkillIdContentRoute,
  getSkillsSkillIdRoute,
  getSkillsSkillIdVersionsRoute,
  getSkillsSkillIdVersionsVersionContentRoute,
  getSkillsSkillIdVersionsVersionRoute,
  postSkillsRoute,
  postSkillsSkillIdRoute,
  postSkillsSkillIdVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skillsHandler = app
  .openapi(postSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSkillsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkillsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkillsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkillsSkillIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSkillsSkillIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkillsSkillIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkillsSkillIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSkillsSkillIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSkillsSkillIdVersionsVersionContentRoute, (c) => {
    throw new Error('Not implemented')
  })
