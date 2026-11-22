import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4OrbitSkillsNamePathRoute,
  getApiV4OrbitSkillsNameRoute,
  getApiV4OrbitSkillsRoute,
  postApiV4OrbitContextRoute,
  postApiV4OrbitQueryNameRoute,
  postApiV4OrbitQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orbitHandler = app
  .openapi(postApiV4OrbitQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4OrbitQueryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4OrbitContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OrbitSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OrbitSkillsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OrbitSkillsNamePathRoute, (c) => {
    throw new Error('Not implemented')
  })
